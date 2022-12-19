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
        { x: node.x, y: node.y, z: node.z },
        animationDuration, // ms transition duration
      );
    },
    [fgRef],
  );
  // css to make the display appear on top of the graph
  const cssToAddToDisplay = {
    position: "absolute",
    top: "5%",
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
        style={{
          position: "relative",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        ref={fgRef}
        // makes the selected node much more transparent
        nodeColor={(node) =>
          node.id === selectedNode ? "rgba(255, 255, 255, 0.1)" : "#3a86c8"}
        //@ts-ignore
        graphData={data}
        nodeLabel="id"
        linkDirectionalParticles={1}
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
      { id: "Home" },
      { id: "About" },
      { id: "Links & Contact" },
      { id: "Projects" },
    ],
    links: [
      { source: "Home", target: "About" },
      { source: "Home", target: "Links & Contact" },
      { source: "Home", target: "Projects" },
    ],
  };
  // for each view, we have a component that displays the content
  // of that view
  const displays = {
    Home: () => (
      <div className="container">
        <h1 className="title">GIULIO ZANI</h1>
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
        <div
          style={{
            fontSize: "1.2em",
            overflowY: "scroll",
            height: "50vh",
          }}
        >
          As a dedicated artificial intelligence student and experienced private
          tutor and consultant, you are a highly skilled and knowledgeable
          professional in the field of computer programming, artificial
          intelligence, and machine learning. With a passion for staying
          up-to-date on the latest developments in these rapidly-evolving
          fields, you are constantly seeking new opportunities to learn and
          grow. Your expertise and enthusiasm for teaching make you an
          invaluable asset to your clients and students, helping them to achieve
          their goals and reach their full potential. Whether you are working
          with students one-on-one or presenting at conferences and workshops,
          you are always eager to share your knowledge and inspire others to
          learn more about these exciting and transformative technologies.
        </div>
      </div>
    ),
    About: () => (
      <div className='container'>
        <h1>About</h1>
      </div>
    ),
    "Links & Contact": () => (
      <div className="container">
        <h1>CONTACT</h1>
        <h2>
          g.zani(at)uva.nl
        </h2>
        <a
          href="https://www.superprof.it/magistrale-intelligenza-artificiale-offre-lezioni-aiuto-progetti-python-machine-learning-deep-learning.html"
          target="_blank"
        >
          <h2>SuperProf</h2>
        </a>
        <a
          href="https://www.youtube.com/@salamander_xing"
          target="_blank"
        >
          <h2>YouTube</h2>
        </a>
      </div>
    ),
    Projects: () => (
      <div className="container">
        <h1>IN EVIDENCE</h1>
        <div>
          <a href="https://github.com/SalamanderXing/mate" target="_blank">
            <h2>Maté</h2>
          </a>
          <a href="https://github.com/salamanderxing" target="_blank">
            <h2>Full list on GitHub</h2>
          </a>
        </div>
        <h1>ONLINE</h1>
        <div>
          <a
            href="https://salamanderxing.github.io/hopfield-network/"
            target="_blank"
          >
            <h2>Stochastic Hopfield Network</h2>
          </a>
          <a href="https://salamanderxing.github.io/cannon/" target="_blank">
            <h2>Cannon</h2>
          </a>
          <a href="https://github.com/salamanderxing/mcs" target="_blank">
            <h2>MCS</h2>
          </a>
          <a href="https://salamanderxing.github.io/focus/" target="_blank">
            <h2>Focus</h2>
          </a>
        </div>
      </div>
    ),
    Blog: () => <div>Blog</div>,
  };

  return <FocusGraph data={data} displays={displays} />;
}

export default App;
