// builds an argument parser for the parameters: url, max_token, trait_type, attributes
// and then calls the main function

const check = async (
  toPut: Array<number>,
  i: number,
  data: Record<string, any>,
  trait_type: string,
  targetAttribute: string
) => {
  trait_type = trait_type.toLowerCase();
  targetAttribute = targetAttribute.toLowerCase();
  const attributes = data["attributes"];
  if (!attributes) {
    return;
  }
  for (const attribute of attributes) {
    if (
      attribute["trait_type"].toLowerCase() == trait_type &&
      attribute["value"].toLowerCase() == targetAttribute
    ) {
      toPut.push(i);
    }
  }
};
export default async (
  url: string,
  max_token: number,
  trait_type: string,
  attribute: string
) => {
  url = url.endsWith("/") ? url : `${url}/`;
  const toPut = [] as Array<number>;
  const begin = 1;
  const urls = Array.from({ length: max_token }, (_, i) =>
    fetch(`${url}${i + begin}`)
      .then((r) => r.json())
      .catch(() => {})
  );
  const items = (await Promise.all(urls)) as Record<string, any>[];
  for (const [i, data] of items.entries()) {
    await check(toPut, i + begin, data, trait_type, attribute);
  }
  return toPut;
};

//await main("https://backend.yu-gi-yn.com/metadata/", 200, "type", "violences")
/*
const parser = new ArgumentParser({
    description: "Check if a token has a specific attribute"
})

parser.add_argument("-u", "--url", {help: "The url of the metadata", required: false, default: "https://backend.yu-gi-yn.com/metadata/"})
parser.add_argument("-m", "--max_token", {help: "The max token to check", required: false, default: 8888})
parser.add_argument("-t", "--trait_type", {help: "The trait type to check", required: false, default: "type"})
parser.add_argument("-a", "--attribute", {help: "The attribute to check", required: false, default: "violences"})
const args = parser.parse_args()
await main(args.url, args.max_token, args.trait_type, args.attribute)
*/
