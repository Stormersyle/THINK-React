import { faqItems } from '../data/faq.jsx'

export default function Faq() {
  return (
    <section id="faq">
      <div className="faq-container">
        <h2 className="title">FAQ</h2>
        <div className="accordion">
          {faqItems.map((item, i) => (
            <details key={i} className="accordion-item" open={i === 0}>
              <summary>
                <i className="fas fa-angle-down" aria-hidden="true" />
                {item.q}
              </summary>
              <div className="accordion-body">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
