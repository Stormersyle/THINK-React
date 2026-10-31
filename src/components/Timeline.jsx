import { timelineEvents } from '../data/timeline.js'

export default function Timeline() {
  return (
    <section id="timeline">
      <h2 className="title">TIMELINE</h2>
      <ul className="timeline">
        {timelineEvents.map((e, i) => (
          <li key={i} className={i % 2 === 1 ? 'timeline-inverted' : ''}>
            <div
              className={`timeline-badge${e.isMit ? ' mit' : ''}`}
              aria-hidden="true"
            />
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h3 className="timeline-title">
                  {e.month}
                  <span className="big-month">{e.monthLong}</span>
                  {e.dayYear}
                </h3>
              </div>
              <div className="timeline-body">
                <p>{e.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
