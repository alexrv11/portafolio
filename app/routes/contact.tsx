export default function Contact() {
  return (
    <section id="three" className="wrapper style1 fade-up">
      <div className="inner ml-20">
        <h2>Get in touch</h2>
       
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
                <h3>Name</h3>
                <span>Alex Ventura Quiroz</span>
              </li>
              <li>
                <h3>Title</h3>
                <span>SENIOR FULLSTACK DEVELOPER</span>
              </li>
              <li>
                <h3>Location</h3>
                <span>Buenos Aires, Argentina</span>
              </li>
              <li>
                <h3>Phone</h3>
                <span>(+54)911-34034426</span>
              </li>
              <li>
                <h3>Email</h3>
                <a href="mailto:alex.rv11@gmail.com">alex.rv11@gmail.com</a>
              </li>
              <li>
                <h3>GitHub</h3>
                <a href="https://github.com/alexrv11">https://github.com/alexrv11</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}