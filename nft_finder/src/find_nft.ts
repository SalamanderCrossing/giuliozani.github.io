// builds an argument parser for the parameters: url, max_token, trait_type, attributes
// and then calls the main function

interface NFTData {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
}

const checkAttributes = (
  data: NFTData,
  targetTraitType: string,
  targetAttributes: string[],
  verbose = false,
) => {
  targetTraitType = targetTraitType.toLowerCase();
  targetAttributes = targetAttributes.map((x) => x.toLowerCase());
  const attributes = data["attributes"];
  if (!attributes) {
    return;
  }
  for (const attribute of attributes) {
    const attributeValue = (typeof attribute["value"] === "string")
      ? attribute["value"].toLowerCase()
      : attribute["value"].toString().toLowerCase();
    const traitTypeValue = attribute["trait_type"].toLowerCase();
    if (verbose) {
      console.log([[traitTypeValue, targetTraitType], [
        attributeValue,
        targetAttributes,
      ]]);
    }
    if (
      (traitTypeValue === targetTraitType) &&
      (targetAttributes.filter((x) => x === attributeValue).length > 0)
    ) {
      return true;
    }
  }
  return false;
};

const searchInJson = (
  items: NFTData[],
  trait_type: string,
  attributes: string[],
) => {
  const selectedItems = items.map((x, i) => [i, x] as [number, NFTData]).filter(
    ([i, x]) => {
      return x && checkAttributes(x, trait_type, attributes);
    },
  );
  return selectedItems;
};

// @ts-ignore
if (typeof Deno !== "undefined") {
  //@ts-ignore
  const items = Deno.readTextFileSync("./data.json");
  const itemsJson = JSON.parse(items) as NFTData[];
  const filter = {
    trait_type: "torso",
    attributes: ["ancient armor"],
  };
  const matches = searchInJson(itemsJson, filter.trait_type, filter.attributes);
  console.log(matches.map((x) => x[0]));
}

export default async (
  url: string,
  max_token: number,
  trait_type: string,
  attributes: string[],
): Promise<{ matches: number[]; allItems: NFTData[] }> => {
  console.log("looking for", trait_type, attributes, "in", url, max_token);
  url = url.endsWith("/") ? url : `${url}/`;
  const urls = Array.from(
    { length: max_token },
    (_, i) =>
      fetch(`${url}${i + 1}`)
        .then((r) => r.json())
        .catch(() => {}),
  );
  const items = (await Promise.all(urls)) as Array<NFTData>;
  console.log("found", items.length, "items");
  const matches = searchInJson(items, trait_type, attributes).map((x) => x[0]);
  console.log("found", matches.length, "matches");
  return { matches, allItems: items };
};
