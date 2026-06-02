import menu1 from "../assets/pics/menu-1.jpeg";

function About() {
  return (
    <div className="about-section">
      <div className="container py-5">

        <h1 className="display-2 text-center mb-5">
          <b><i>About Diner King</i></b>
        </h1>

        <div className="row align-items-center">

          <div className="col-lg-6">
            <img
              src={menu1}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-lg-6">
            <h2>Our Story</h2>

            <p>
              Founded with a passion for great food and unforgettable dining
              experiences, Diner King has become a destination for burger
              lovers, steak enthusiasts, and families across Lebanon.
            </p>

            <p>
              We believe that every meal should be made with fresh ingredients,
              bold flavors, and exceptional service.
            </p>

            <p>
              From our signature burgers to our premium steaks, every dish is
              prepared to deliver the quality our guests deserve.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;