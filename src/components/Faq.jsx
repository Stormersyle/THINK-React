import { faqItems } from '../data/faq.js'

export default function Faq() {
  return (
    <section id="faq">
      <div className="faq-container">
        <div className="title">FAQ</div>
        <div className="accordion">
          {faqItems.map((item, i) => (
            <details key={i} className="accordion-item" open={i === 0}>
              <summary>
                <i className="fas fa-angle-down" />
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
