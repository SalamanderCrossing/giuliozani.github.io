// imports bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import "./About.css";

interface Project {
  name: string;
  description: string;
  link: string;
}
export default () => {
  const contacts = {
    email: "mailto:g.zani@uva.nl",
    GitHub: "https://github.com/salamanderxing",
    Calendly: "https://calendly.com/salamanderxing/lesson",
    Superprof:
      "https://www.superprof.it/magistrale-intelligenza-artificiale-offre-lezioni-aiuto-progetti-python-machine-learning-deep-learning.html",
    Twitter: "https://twitter.com/zani_giulio",
  };
  const projects: Project[] = [
    {
      name: "GitHub",
      description: "",
      link: "https://github.com/salamanderxing",
    },
    // {
    //   name: "Stochastic Hopfield Network",
    //   description: "Online Stochastic Hopfield Network in JavaScript",
    //   link: "https://salamanderxing.github.io/hopfield-network/",
    // },
    {
      name: "UpWork",
      description: "Play online against an AI (does not work on mobile IOS)",
      link: "https://www.upwork.com/freelancers/~01f9a244ac1e307355?viewMode=1",
    },
    //
    {
      name: "SuperProf",
      description: "Play online against an AI (does not work on mobile IOS)",
      link:
        "https://www.superprof.com/researcher-python-deep-learning-prompt-engineering-gpt-personalized-lessons-project-support.html",
    },
    {
      name: "SuperProf (IT)",
      description: "Play online against an AI (does not work on mobile IOS)",
      link:
        "https://www.superprof.it/ricercatore-offre-python-deep-learning-prompt-engineering-lezioni-personalizzate-supporto-progetti.html",
    },
    // {
    //   name: "Focus",
    //   description: "Test your focus, in your browser.",
    //   link: "https://salamanderxing.github.io/focus/",
    // },
    // {
    //   name: "MCS",
    //   description: "Computes the maximum common subgraph of two graphs",
    //   link: "https://github.com/salamanderxing/mcs",
    // },
  ];
  const links = [
    // {
    //   icon_name: "fa-github",
    //   url: "https://github.com/salamanderxing",
    // },
    // {
    //   icon_name: "fa-globe",
    //   url: "https://salamanderxing.github.io/",
    // },
    // {
    //   icon_name: "fa-envelope",
    //   url: "mailto:g.zani@uva.nl",
    // },
    // {
    //   icon_name: "fa-chalkboard-teacher",
    //   url:
    //     "https://www.superprof.it/magistrale-intelligenza-artificiale-offre-lezioni-aiuto-progetti-python-machine-learning-deep-learning.html",
    // },
    // {
    //   icon_name: "fa-twitter",
    //   url: "https://twitter.com/zani_giulio",
    // },
    // {
    //   icon_name: "fa-calendar",
    //   url: "https://calendly.com/salamanderxing/lesson",
    // },
  ] as { icon_name: string; url: string }[];
  const description = `Turtles all the way down 🐢`;
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
          marginTop: "100px",
          marginBottom: "30px",
          width: 150,
          height: 150,
          borderRadius: "50%",
          objectFit: "cover",
          zIndex: "-100 !important",
        }}
      />
      <div>
        <table style={{ marginLeft: "auto", marginRight: "auto" }}>
          <tbody>
            <tr>
              {links.map((link, i) => (
                <td key={i}>
                  <a key={i} href={link.url} target="_blank">
                    <i className={`fa ${link.icon_name} fa-2x`}></i>
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <div
          className="card blur"
          style={{
            color: "white",
            maxWidth: "450px",
            margin: "auto",
            padding: "5px",
          }}
        >
          <p
            style={{
              background: "rgba(0,0,0,0.0)",
              backdropFilter: "blur(100)",
            }}
          >
            {description}
          </p>
          <p>
            <a href="https://salamanderxing.github.io/cv" target="_blank">
              {/*@ts-ignore*/}
              <Badge variant="secondary">CV</Badge>
            </a>
          </p>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <ListGroup
          as="ol"
          style={{
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 500,
          }}
        >
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Badge bg="primary">{project.name}</Badge>
            </a>
            // <ListGroup.Item
            //   key={index}
            //   as="li"
            //   className="d-flex justify-content-between align-items-start blur"
            // >
            //   <div
            //     className="ms-2 me-auto"
            //     style={{ textAlign: "center", width: "100%", color: "white" }}
            //   >
            //     <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            //       <div className="fw-bold">{project.name}</div>
            //       {project.description}
            //     </div>
            //   </div>
            //   {/* inserts the link to the project */}
            //   <a
            //     href={project.link}
            //     target="_blank"
            //     style={{ textDecoration: "none" }}
            //   >
            //     <Badge bg="primary">Link</Badge>
            //   </a>
            // </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};
