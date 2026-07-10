export default function Footer() {
  return (
    <footer>
      <div className="copyright">
        &copy; MIT THINK {new Date().getFullYear()}. Powered by{' '}
        <a href="http://techx.mit.edu/" target="_blank" rel="noreferrer">
          <img src="/images/techx-logo.svg" alt="TechX" />
        </a>
        <br />
        Accessibility:{' '}
        <a href="https://accessibility.mit.edu" target="_blank" rel="noreferrer">
          accessibility.mit.edu
        </a>
      </div>
      <div className="icons">
        <a href="mailto:think@mit.edu" aria-label="Email">
          <i className="fa fa-envelope fa-2x" />
        </a>
        <a
          href="https://www.facebook.com/MIT-THINK-Scholars-Program-80872600025/?fref=ts"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-square fa-2x" />
        </a>
        <a
          href="https://www.instagram.com/mit.think/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram fa-2x" />
        </a>
      </div>
    </footer>
  )
}
