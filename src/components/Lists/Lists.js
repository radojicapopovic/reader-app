import "./Lists.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>MyList</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img"></div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">Other Lists</h2>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
