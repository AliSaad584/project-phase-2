function Footer() {
  return (
    <footer className="bg-black text-white p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <h5 className="mb-3">Diner King</h5>
            <p>Grilling Is the New Trend</p>
          </div>

          <div className="col-lg-4 col-md-12">
            <h5 className="mb-3">Opening Hours</h5>
            <p className="mb-1">10:00 AM - 10:00 PM</p>
          </div>

          <div className="col-lg-4 col-md-12">
            <h5 className="mb-3">Contact Us</h5>
            <p className="mb-1">Phone: 1213</p>
            <p>Email: DinerKing@gmail.com</p>
          </div>
        </div>

        <hr />

        <p className="text-center">
          &copy; 2026 Diner King. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;