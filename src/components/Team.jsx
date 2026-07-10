import { useRef, useState } from 'react'
import { teamMembers } from '../data/team.js'
import MemberModal from './MemberModal.jsx'

export default function Team() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(null)

  const scrollBy = (dir) => {
    const track = trackRef.current
    if (!track) return
    const cell = track.querySelector('.carousel-cell')
    const step = cell ? cell.getBoundingClientRect().width + 16 : 220
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="team">
      <div className="title">THE THINK TEAM</div>
      <br />
      <br />
      <div className="carousel">
        <button
          type="button"
          className="carousel-btn prev"
          onClick={() => scrollBy(-1)}
          aria-label="Previous team members"
        >
          &#10094;
        </button>
        <div className="carousel-track" ref={trackRef}>
          {teamMembers.map((m) => (
            <button
              key={m.id}
              type="button"
              className="carousel-cell"
              onClick={() => setActive(m)}
              aria-label={`Open bio for ${m.name}`}
            >
              <img src={m.photo} alt={m.name} />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="carousel-btn next"
          onClick={() => scrollBy(1)}
          aria-label="Next team members"
        >
          &#10095;
        </button>
      </div>
      <MemberModal member={active} onClose={() => setActive(null)} />
    </section>
  )
}
