import { skills } from '../data/skills.js'

// Infinite logo marquee: the list is rendered twice so the CSS loop is seamless.
export default function TechStrip() {
  const row = [...skills, ...skills]

  return (
    <section className="tech" aria-label="Tools I work with">
      <p className="tech__label">Tools and technologies I work with</p>
      <div className="tech__viewport">
        <ul className="tech__track" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {row.map((s, i) => (
            <li className="tech__item" key={`${s.name}-${i}`} aria-hidden={i >= skills.length}>
              {s.icon && <img src={s.icon} alt="" width="34" height="34" />}
              {s.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
