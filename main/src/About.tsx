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
      <div className="container">
      <p>
        Hey there! I'm a master's student in AI at Maastricht University and I'm
        currently doing my research internship at the University of Amsterdam.
        I'm super passionate about deep learning, computer science, and cryptos.
      </p>
      <p>
      I give private lessons in the field of computer programming, artificial intelligence (deep learning) and machine learning. I'm also available as a consultant for your project or thesis. Please check out the Contact section if you are interested.
      </p>
      </div>
    </div>
  );
};
