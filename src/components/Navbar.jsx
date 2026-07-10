import { useEffect, useState } from 'react'

const links = [
  ['GUIDELINES', '#guidelines'],
  ['TIMELINE', '#timeline'],
  ['FINALISTS', '#currentwinners'],
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
    <nav className={`navbar ${visible ? 'visible' : ''}`}>
      <a href="#" className="navbar-brand">
        <img src="/images/think_logo_trans.png" alt="MIT THINK" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <ul className={`navbar-menu ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => (
          <li key={href}>
            <a href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
