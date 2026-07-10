export default function Sponsors() {
  return (
    <section id="sponsors">
      <div className="title">PREMIER SPONSORS</div>
      <a href="https://empowerly.com/" target="_blank" rel="noreferrer">
        <img
          id="empowerly-logo"
          className="img-fluid"
          src="/images/empowerly_logo.png"
          alt="Empowerly"
        />
      </a>
      <br />
      <br />
      <div className="title">GOLD SPONSORS</div>
      <a href="https://www.non-trivial.org/" target="_blank" rel="noreferrer">
        <img
          id="nontrivial-logo"
          className="img-fluid"
          src="/images/nontrivial_logo.png"
          alt="Non-Trivial"
        />
      </a>
      <p className="contact-info">
        Interested in sponsoring THINK?
        <br />
        Please contact us at think-cr [at] mit [dot] edu.
      </p>
    </section>
  )
}
