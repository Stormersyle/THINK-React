import {
  APPLY_URL,
  APPLICATIONS_DUE,
  PROGRAM_CYCLE,
} from '../config/program.js'

export default function Hero() {
  return (
    <section id="main">
      <h1>
        <img id="logo" src="/images/logo_updated.svg" alt="MIT THINK" />
      </h1>
      <p id="subtitle">MIT THINK SCHOLARS PROGRAM</p>
      <a
        className="apply-btn"
        href={APPLY_URL}
        target="_blank"
        rel="noreferrer"
      >
        Apply to THINK {PROGRAM_CYCLE}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
      <p id="apply-info">
        Applications for THINK {PROGRAM_CYCLE} are due {APPLICATIONS_DUE}.
        <br />
        Fill in{' '}
        <a
          href="https://forms.gle/dnoLgvqSLEoZvGeo8"
          target="_blank"
          rel="noreferrer"
        >
          this form
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>{' '}
        to subscribe to our mailing list.
      </p>
    </section>
  )
}
