import Steaks from "../assets/pics/steak.avif";
function Contact() {
  return(
    <div className="contact-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5">
            <h1 className="display-2 contact-title">
              Contact Us
            </h1>
            <p className="contact-info">
              📧 DinerKing@gmail.com
            </p>
            <p className="contact-info">
              📞 1213
            </p>
            <img 
            src={Steaks}
            className="contact-image"
            />
          </div>
          <div className="col-lg-6">
            <div className="contact-card">
              <h1 className="display-5 text-center mb-4">
                <b>Any Feedback?</b>
              </h1>
              <p className="text-center text-muted">
                Fill out the form below and tell us about your experience.
              </p>
              <form>
                <label>First Name</label>
                <input type="text" />

                <label>Last Name</label>
                <input type="text" />
  
                <label>Email</label>
                <input type="email" />

                <label>Phone</label>
                <input type="text" />

                <label>Date of Visit</label>
                <input type="date" />

                <label>Time</label>
                <input type="time" />

                <label>Your Feedback</label>
                <textarea></textarea>

                <button
                  type="submit"
                  className="submit-btn"
                  >
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;