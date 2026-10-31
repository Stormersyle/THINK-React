import { useEffect, useState } from 'react'
import { APPLY_URL } from '../config/program.js'

const links = [
  ['GUIDELINES', '#guidelines'],
  ['TIMELINE', '#timeline'],
  ['RESULTS', '#results'],
  ['TEAM', '#team'],
  ['RESOURCES', '#resources'],
  ['FAQ', '#faq'],
  ['SPONSORS', '#sponsors'],
]

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`navbar ${visible ? 'visible' : ''}`}
      aria-label="Main"
    >
      <a href="#main" className="navbar-brand">
        <img src="/images/think_logo_trans.png" alt="MIT THINK — back to top" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="Toggle navigation"
        aria-controls="navbar-menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <ul
        id="navbar-menu"
        className={`navbar-menu ${open ? 'open' : ''}`}
      >
        {links.map(([label, href]) => (
          <li key={href}>
            <a href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            className="nav-apply"
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
          >
            APPLY
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
