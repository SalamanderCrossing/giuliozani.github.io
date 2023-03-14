import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import getNFTs from "./find_nft";
import { useEffect } from "react";
// imports sweetalert2
import Swal from "sweetalert2";

const downloadJson = (jsonObject: any) => {
  // Create a Blob object with JSON data
  let fileToSave: Blob = new Blob([JSON.stringify(jsonObject)], {
    type: "application/json",
  });

  // Create an anchor element with download attribute
  let downloadLink: HTMLAnchorElement = document.createElement("a");
  downloadLink.setAttribute("href", URL.createObjectURL(fileToSave));
  downloadLink.setAttribute("download", "data.json");

  // Append the link to the document body and click it
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Remove the link from the document body
  document.body.removeChild(downloadLink);
};

function BasicExample() {
  const submit = async () => {
    setVariant("success");
            // @ts-ignore 
    const url = document.getElementById("url").value;
            // @ts-ignore 
    const max_token = Number(document.getElementById("max_token").value);
            // @ts-ignore 
    const trait_type = document.getElementById("trait_type").value;
            // @ts-ignore 
    const rawAttribute = document.getElementById("trait_values").value;
    
    const attributes = rawAttribute.split(",").map((a:string) => a.trim());
    console.log(url, max_token, trait_type, attributes);
    getNFTs(url, max_token, trait_type, attributes).then(({matches:nfts, allItems}) => {
      //alert(nfts);
      if (nfts.length === 0) {
        Swal.fire({
          title: "No NFTs found",
          text: "Try again",
          icon: "error",
          confirmButtonText: "Damn",
          showCancelButton: true,
          cancelButtonText: "Show all NFTs",
        }).then((result) => {
          if (result.isConfirmed) {
            return;
          }
          else if (result.isDismissed) {
            downloadJson(allItems);
          }
        });
        setVariant("primary");
        return;
      }
      // @ts-ignore
      Swal.fire({
        title: "NFTs found",
        text: nfts,
        icon: "success",
        confirmButtonText: "Awsome",
      });
      setVariant("primary");
    });
  };
  useEffect(() => {
        setTimeout(() => {
          // @ts-ignore 
          document.getElementById("url").value = "https://beehive-api-q7ic5.ondigitalocean.app/v1/characters/holoselfs/metadata/"// "https://backend.yu-gi-yn.com/metadata/";
          // @ts-ignore 
          document.getElementById("max_token").value = 8888//"100";
            // @ts-ignore 
          document.getElementById("trait_type").value = "torso"//"type";
            // @ts-ignore 
          document.getElementById("trait_values").value = "ancient armor";
        }, 1000)

    }, []);
  const [variant, setVariant] = useState("primary");
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Trait Type</Form.Label>
        <Form.Control type="text" id="trait_type" placeholder="Enter trait" />
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Trait Value(s)</Form.Label>
        <Form.Control
          type="text"
          id="trait_values"
          placeholder="Enter attribute"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>URL</Form.Label>
        <Form.Control type="text" id="url" placeholder="http://" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Max Token ID</Form.Label>
        <Form.Control type="number" id="max_token" placeholder="Enter URL" />
      </Form.Group>
      {//the button should be disabled if the variant is not primary}
      }
      <Button variant={variant} onClick={submit} disabled={variant !== "primary"}>
        Submit
      </Button>
    </Form>
  );
}

function App() {
  return (
    <div className="App">
      <BasicExample />
    </div>
  );
}

export default App;
