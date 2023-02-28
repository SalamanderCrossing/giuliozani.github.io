import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import getNFTs from "./find_nft";
import { useEffect } from "react";
// imports sweetalert2
import Swal from "sweetalert2";

function BasicExample() {
  const submit = async () => {
    setVariant("success");
            // @ts-ignore 
    const url = document.getElementById("url").value;
            // @ts-ignore 
    const max_token = Number(document.getElementById("max_token").value);
            // @ts-ignore 
    const trait_type = document.getElementById("trait").value;
            // @ts-ignore 
    const rawAttribute = document.getElementById("attribute").value;
    const attributes = rawAttribute.split(",");
    console.log(url, max_token, trait_type, attributes);
    getNFTs(url, max_token, trait_type, attributes).then((nfts) => {
      //alert(nfts);
      //@ts-ignore
      Swal.fire({
        title: "NFTs found",
        text: nfts,
        icon: "success",
        confirmButtonText: "Cool",
      });
      setVariant("primary");
    });
  };
  useEffect(() => {
        setTimeout(() => {
          // @ts-ignore 
          document.getElementById("url").value = "https://backend.yu-gi-yn.com/metadata/";
          // @ts-ignore 
          document.getElementById("max_token").value = "100";
            // @ts-ignore 
          document.getElementById("trait").value = "type";
            // @ts-ignore 
          document.getElementById("attribute").value = "violences";

        }, 1000)

    }, []);
  const [variant, setVariant] = useState("primary");
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Trait</Form.Label>
        <Form.Control type="text" id="trait" placeholder="Enter trait" />
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Attribute</Form.Label>
        <Form.Control
          type="text"
          id="attribute"
          placeholder="Enter attribute"
        />
        
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>URL</Form.Label>
        <Form.Control type="text" id="url" placeholder="Enter URL" />
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>max token id</Form.Label>
        <Form.Control type="number" id="max_token" placeholder="Enter URL" />
      </Form.Group>
      <Button variant={variant} onClick={submit}>
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
