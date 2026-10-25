import { skills } from '../data/skills.js'

// Oversized infinite marquee: the list is rendered twice so the CSS loop is seamless.
export default function TechStrip() {
  const row = [...skills, ...skills]

  return (
    <section className="tech zone--neon" aria-label="Tools I work with">
      <p className="container tech__label">Tools and technologies I work with</p>
      <div className="tech__viewport">
        <ul className="tech__track">
          {row.map((s, i) => (
            <li className="tech__item" key={`${s.name}-${i}`} aria-hidden={i >= skills.length}>
              {s.icon && (
                <span className="tech__chip">
                  <img src={s.icon} alt="" width="34" height="34" />
                </span>
              )}
              {s.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
