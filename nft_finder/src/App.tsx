import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import getNFTs from "./find_nft";
import { useEffect } from "react";

function BasicExample() {
  const submit = async () => {
            // @ts-ignore 
    const url = document.getElementById("url").value;
            // @ts-ignore 
    const max_token = Number(document.getElementById("max_token").value);
            // @ts-ignore 
    const trait_type = document.getElementById("trait").value;
            // @ts-ignore 
    const attribute = document.getElementById("attribute").value;
    console.log(url, max_token, trait_type, attribute);
    const nfts = getNFTs(url, max_token, trait_type, attribute).then((nfts) => {
      console.log(nfts);
      alert(nfts);
    });
  };
  useEffect(() => {
        setTimeout(function(){
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
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Trait</Form.Label>
        <Form.Control type="text" id="trait" placeholder="Enter trait" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Attribute</Form.Label>
        <Form.Control
          type="text"
          id="attribute"
          placeholder="Enter attribute"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>URL</Form.Label>
        <Form.Control type="text" id="url" placeholder="Enter URL" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>max token id</Form.Label>
        <Form.Control type="number" id="max_token" placeholder="Enter URL" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={submit}>
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
