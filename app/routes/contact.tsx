export default function Contact() {
  return (
    <section id="three" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>Get in touch</h2>
        <p>
          Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
          mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
          hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
          quis lorem.
        </p>
        <div className="split style1">
          <section>
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows={5}></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <button type="submit" className="button submit">
                    Send Message
                  </button>
                </li>
              </ul>
            </form>
          </section>
          <section>
            <ul className="contact">
              <li>
                <h3>Address</h3>
                <span>
                  12345 Somewhere Road #654
                  <br />
                  Nashville, TN 00000-0000
                  <br />
                  USA
                </span>
              </li>
              <li>
                <h3>Email</h3>
                <a href="#">user@untitled.tld</a>
              </li>
              <li>
                <h3>Phone</h3>
                <span>(000) 000-0000</span>
              </li>
              <li>
                <h3>Social</h3>
                <ul className="icons">
                  <li>
                    <a href="#" className="icon brands fa-brands fa-twitter">
                      <span className="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-brands fa-facebook-f">
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-brands fa-github">
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-brands fa-instagram">
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-brands fa-linkedin-in">
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
} 