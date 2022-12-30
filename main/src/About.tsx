// imports bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

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
        Hey there! I'm a master's student in AI at Maastricht University and I'm
        currently doing my research internship at the University of Amsterdam.
        I'm super passionate about deep learning, computer science, and cryptos.
        Excited to keep learning and growing in these areas!
      </p>
    </div>
  );
};
