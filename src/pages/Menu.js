import CardMenu from "../components/CardMenu";
import CardLocationAndPromo from "../components/CardLocationAndPromo";
import { appetizers } from "../components/MenuDetails";
import { MenuPromo } from "../components/MenuDetails";
import { Burgers } from "../components/MenuDetails";
import { Steaks } from "../components/MenuDetails";
import promo from "../assets/pics/promo.jpg";
import promo3 from "../assets/pics/promo3.avif";

function Menu() {
  return (

    <div>
      <div className="p-4 bg-dark">
        <div className="container p-4 mt-1 bg-dark">
          <div className="row">
            {MenuPromo.map((item) => (
          <CardLocationAndPromo
            pic={item.image}
            name={item.name}
          />
        ))}
          </div>
        </div>
      </div>
      <div className="bg-dark p-4">
        <div>
          <h1 id="location-caption">First Thing First</h1>
          <div className="container">
            <div className="row">
              {appetizers.map((item) => (
              <CardMenu
                pic={item.image}
                name={item.name}
                price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
        <article>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active">

                </button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1">

                </button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={promo3} alt="Los Angeles" class="d-block" style={{ width: "100%" }} />
                    <div className="carousel-caption" id="burger">
                        <h1 className="display-3 bg-danger">OP Ribs MB3</h1>
                        <h3 className="display-5 fs-2" >Embark on Flavor Journey with <br />Our 500G Ribs</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={promo} alt="Chicago" class="d-block" style={{ width: "100%" }} />
                    <div className="carousel-caption" id="pizza">
                        <h1 className="display-3">Our </h1>
                        <h2 className="display-4 bg-danger">California </h2>
                        <h1 className="display-3 ">Burger</h1>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
      </article>
      <div className="bg-dark p-4">
        <div>
          <h1 id="location-caption">Combo Burgers</h1>
          <div className="container">
            <div className="row">
              {Burgers.map((item) => (
              <CardMenu
                pic={item.image}
                name={item.name}
                price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark p-4">
        <div>
          <h1 id="location-caption">Josper Grilled Selection</h1>
          <div className="container">
            <div className="row">
              {Steaks.map((item) => (
              <CardMenu
                pic={item.image}
                name={item.name}
                price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
)}

export default Menu;
