export default function Footer() {
  return (
    <footer>
      <div className="copyright">
        &copy; MIT THINK {new Date().getFullYear()}. Powered by{' '}
        <a href="http://techx.mit.edu/" target="_blank" rel="noreferrer">
          <img src="/images/techx-logo.svg" alt="TechX (opens in a new tab)" />
        </a>
        <br />
        Accessibility:{' '}
        <a href="https://accessibility.mit.edu" target="_blank" rel="noreferrer">
          accessibility.mit.edu
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
        <br />
        <small>
          Header photo:{' '}
          <a
            href="https://commons.wikimedia.org/wiki/File:Great_Dome,_Massachusetts_Institute_of_Technology,_Aug_2019.jpg"
            target="_blank"
            rel="noreferrer"
          >
            Mys 721tx
          </a>
          ,{' '}
          <a
            href="https://creativecommons.org/licenses/by-sa/3.0"
            target="_blank"
            rel="noreferrer"
          >
            CC BY-SA 3.0
          </a>
          , via Wikimedia Commons
        </small>
      </div>
      <div className="icons">
        <a href="mailto:think@mit.edu" aria-label="Email">
          <i className="fa fa-envelope fa-2x" aria-hidden="true" />
        </a>
        <a
          href="https://www.facebook.com/MIT-THINK-Scholars-Program-80872600025/?fref=ts"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-square fa-2x" aria-hidden="true" />
        </a>
        <a
          href="https://www.instagram.com/mit.think/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram fa-2x" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/company/think.mit.edu/home/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <i className="fab fa-linkedin fa-2x" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
