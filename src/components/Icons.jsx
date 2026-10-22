// Small inline icons (Lucide-style strokes) so no icon library is needed.
const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

export const ArrowUpRight = (p) => (
  <svg {...base} width={16} height={16} {...p}>
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
)

export const MailIcon = (p) => (
  <svg {...base} width={18} height={18} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
)

export const CheckIcon = (p) => (
  <svg {...base} width={14} height={14} strokeWidth={3} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const CodeIcon = (p) => (
  <svg {...base} width={18} height={18} {...p}>
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
)

export const LayoutIcon = (p) => (
  <svg {...base} width={18} height={18} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
)
