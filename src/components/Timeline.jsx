import { timelineEvents } from '../data/timeline.js'

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="title">TIMELINE</div>
      <ul className="timeline">
        {timelineEvents.map((e, i) => (
          <li key={i} className={i % 2 === 1 ? 'timeline-inverted' : ''}>
            <div className={`timeline-badge${e.isMit ? ' mit' : ''}`} />
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
