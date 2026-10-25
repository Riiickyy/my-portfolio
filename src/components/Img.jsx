import { useState } from 'react'

// Shows the image, or a dark gradient with a label if the file is missing.
// Lets the site look finished before real screenshots are added.
export default function Img({ src, alt, label, ...rest }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div className="placeholder" role="img" aria-label={alt}>
        {label ?? alt}
      </div>
    )
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} {...rest} />
}
