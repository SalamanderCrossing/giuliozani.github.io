// imports bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  const logo = "profile.jpeg";
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={logo}
        style={{
          marginTop: "20px",
          width: 150,
          height: 150,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <p style={{ maxWidth: "80vw", marginLeft: "auto", marginRight: "auto" }}>
        As a AI master's student at Maastricht University, I am currently
        completing my research internship at the University of Amsterdam. My
        passion lies in the fields of deep learning, computer science, and
        cryptos, and I am excited to continue exploring and advancing in these
        areas.
      </p>
    </div>
  );
};
