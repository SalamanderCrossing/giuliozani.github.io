// imports bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
interface Project {
  name: string;
  description: string;
  link: string;
}
export default () => {
  const contacts = {
    email: "mailto:g.zani@uva.nl",
    GitHub: "https://github.com/salamanderxing",
    Superprof:
      "https://www.superprof.it/magistrale-intelligenza-artificiale-offre-lezioni-aiuto-progetti-python-machine-learning-deep-learning.html",
    Twitter: "https://twitter.com/zani_giulio",
  };
  const projects: Project[] = [
    {
      name: "Mate",
      description: "Next gen deep learning framework",
      link: "https://salamanderxing.github.io/mate",
    },
    {
      name: "Stochastic Hopfield Network",
      description: "Online Stochastic Hopfield Network in JavaScript",
      link: "https://salamanderxing.github.io/hopfield-network/",
    },
    {
      name: "Cannon",
      description: "Play online against an AI (does not work on mobile IOS)",
      link: "https://salamanderxing.github.io/cannon/",
    },
    {
      name: "Focus",
      description: "Test your focus, in your browser.",
      link: "https://salamanderxing.github.io/focus/",
    },
    {
      name: "MCS",
      description: "Computes the maximum common subgraph of two graphs",
      link: "https://github.com/salamanderxing/mcs",
    },
  ];
  const logo = "profile.jpeg";
  return (
    <div
      style={{
        textAlign: "center",
        width: "100vw",
      }}
    >
      <img
        src={logo}
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          width: 150,
          height: 150,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <div>
        <div
          className="card blur"
          style={{
            color: "white",
            maxWidth: "450px",
            margin: "auto",
            padding: "10px",
          }}
        >
          <p
            style={{
              background: "rgba(0,0,0,0.0)",
              backdropFilter: "blur(100)",
            }}
          >
            Hey there! I'm a master's student in AI at Maastricht University and
            I'm currently doing my research internship at the University of
            Amsterdam. I'm super passionate about deep learning, computer
            science, and blockchain technologies.
          </p>
          <p>
            I give private lessons in the field of computer programming,
            artificial intelligence (deep learning) and machine learning. I'm
            also available as a consultant for your project or thesis. Please
            check out the Contact section if you are interested.
          </p>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <ListGroup
          className="blur"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "200px",
            marginTop: "20px",
          }}
        >
          {Object.entries(contacts).map(([key, value], index) => (
            <ListGroup.Item key={index} className="blur">
              <a href={value}>{key}</a>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <ListGroup
          as="ol"
          style={{
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 500,
          }}
        >
          {projects.map((project, index) => (
            <ListGroup.Item
              key={index}
              as="li"
              className="d-flex justify-content-between align-items-start blur"
            >
              <div
                className="ms-2 me-auto"
                style={{ textAlign: "center", width: "100%", color: "white" }}
              >
                <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                  <div className="fw-bold">{project.name}</div>
                  {project.description}
                </div>
              </div>
              {/* inserts the link to the project */}
              <a
                href={project.link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Badge bg="primary">Link</Badge>
              </a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};
