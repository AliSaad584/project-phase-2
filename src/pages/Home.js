import { Link } from "react-router-dom";
import burger from "../assets/pics/burger.png";
import pizza from "../assets/pics/pizza.jpg";
import openWings from "../assets/pics/open-wings.avif";
import { LocationPromo } from "../components/MenuDetails";
import CardLocationAndPromo from "../components/CardLocationAndPromo";
import Menu from "./Menu";


function Home() {
  return (
    <div>
        <article>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>

            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={burger}
                style={{ width: "100%" }}
              />

              <div className="carousel-caption" id="burger">
                <h1 className="display-3">What Do You Mean</h1>
                <h3 className="display-5">You're On Diet?!</h3>

                <Link
                  to="/menu"
                  type="button"
                  className="btn btn-outline-danger btn-lg"
                >
                  Order Now
                </Link>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={pizza}
                style={{ width: "100%" }}
              />

              <div className="carousel-caption" id="pizza">
                <h1 className="display-3">Pizza</h1>
                <h2 className="display-4">By</h2>
                <h1 className="display-3">The Slice</h1>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
    </article>
    <div>
        <div className="p-4 bg-dark">
                <h1 id="location-caption">Diner in All Lebanon !! </h1>
                <div className="container p-4 mt-1 bg-dark">
                  <div className="row">
                    {LocationPromo.map((item) => (
                  <CardLocationAndPromo
                    pic={item.image}
                    name={item.name}
                    description={item.description}
                  />
                ))}
                  </div>
                </div>
              </div>
    </div>
    <div className="bg-black">
        <div className="container p-3 ">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <img
                src={openWings}
                id="promo"
                className="img-fluid"
                />
            </div>
            <div className="col-lg-6" id="promo-text">
                <span className="offer-badge">
                    🔥 WEDNESDAY SPECIAL
                </span>
                <h1 className="promo-title">
                     OPEN WINGS
                </h1>
                <h2 className="promo-subtitle">
                     All You Can Eat
                </h2>
                <p className="promo-desc">
                    Crispy, spicy, BBQ and more.
                    Unlimited wings every Wednesday.
                </p>
                <Link 
                to="/Menu"
                className="btn btn-danger btn-lg"
                >
                View Menu
                </Link>
            </div>
        </div>
    </div>
    </div>

    
    
</div>
  );
}

export default Home;