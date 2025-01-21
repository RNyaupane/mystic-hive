import ContactForm from "./contact-form";

const ContactView = () => {
  return (
    <section className="contact-pg-contact-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6 col-12">
            <div className="section-title-s3">
              <h2>Our Contacts</h2>
            </div>
            <div className="contact-details">
              <p>
                We are passionate about providing you with the finest, purest
                honey sourced directly from trusted beekeepers. Whether you have
                questions about our products, delivery options, or anything
                else, we&apos;re here to help! Reach out to us and experience
                the sweet difference of premium honey.
              </p>
              <ul>
                <li>
                  <div className="icon">
                    <i className="ti-location-pin"></i>
                  </div>
                  <h5>Our Location</h5>
                  <p>299 Street, Maitidevi Kathmandu, Nepal.</p>
                </li>
                <li>
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <h5>Phone</h5>
                  <p>+977-9844****455</p>
                </li>
                <li>
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <h5>Email</h5>
                  <p>mystichivehoney@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>

        <div className="row">
          <div className="col col-xs-12">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28256.547177897402!2d85.34425599999999!3d27.7151744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a000ac6259%3A0x9d9f16732861e650!2sMaitidevi%20Temple!5e0!3m2!1sen!2snp!4v1737478805337!5m2!1sen!2snp"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactView;
