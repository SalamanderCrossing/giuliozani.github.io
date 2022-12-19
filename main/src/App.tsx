import reactLogo from "./assets/react.svg";
import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import { ForceGraph3D } from "react-force-graph";

const FocusGraph = (
  { data, displays }: {
    data: Record<string, any>;
    displays: Record<string, () => JSX.Element>;
  },
) => {
  const fgRef = useRef();
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hide, setHide] = useState(false);
  const handleClick = useCallback(
    (node: { id: string; x: number; y: number; z: number }) => {
      // Aim at node from outside it
      const animationDuration = 1500;
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      setHide(true);
      setTimeout(() => {
        setSelectedNode(node.id);
        setHide(false);
      }, animationDuration);
      //@ts-ignore
      fgRef!.current!.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        // now look at the node but a bit shifted up
        { x: node.x, y: node.y - 20, z: node.z },
        animationDuration, // ms transition duration
      );
    },
    [fgRef],
  );
  // css to make the display appear on top of the graph
  const cssToAddToDisplay = {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, 0)",
    zIndex: 1,
    color: "white",
  };
  // now renders the graph and the display
  // adding the css to the display
  return (
    <div>
      <ForceGraph3D
        style={{ position: "relative", top: 0, left: 0, right: 0, bottom: 0 }}
        ref={fgRef}
        //@ts-ignore
        graphData={data}
        nodeLabel="id"
        nodeAutoColorBy="id"
        //@ts-ignore
        onNodeClick={handleClick}
      />
      {selectedNode && !hide &&
        React.cloneElement(displays[selectedNode](), {
          style: cssToAddToDisplay,
        })}
    </div>
  );
};

function App() {
  // data defines nodes and edges.
  // but it also corresponds to the views of a profile page website
  // those are Home, About, Contact, etc.
  const data = {
    nodes: [
      { id: "Home", value: "Giulio Zani" },
      { id: "About" },
      { id: "Contact" },
      { id: "Projects" },
    ],
    links: [
      { source: "Home", target: "About" },
      { source: "Home", target: "Contact" },
      { source: "Home", target: "Projects" },
    ],
  };
  // for each view, we have a component that displays the content
  // of that view
  const displays = {
    Home: () => (
      <div>
        <h1>Giulio Zani</h1>
        <img
          src="./profile.jpeg"
          alt="profile"
          style={{
            height: "200px",
            width: "200px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    About: () => <div>About</div>,
    Contact: () => <div>Contact</div>,
    Projects: () => <div>Projects</div>,
    Blog: () => <div>Blog</div>,
  };

  return <FocusGraph data={data} displays={displays} />;
}

export default App;
