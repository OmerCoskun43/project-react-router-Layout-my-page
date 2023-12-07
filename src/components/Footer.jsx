const Footer = () => {
  return (
    <div className="footer_page">
      <p>
        {" "}
        <span>
          {" "}
          Copyright <sup>©</sup> by CSKN{" "}
        </span>{" "}
        &nbsp;
        <span className="sp1"> {new Date().toLocaleDateString()}</span>
      </p>
    </div>
  );
};

export default Footer;
