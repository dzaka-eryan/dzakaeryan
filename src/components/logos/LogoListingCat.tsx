export function LogoListingCat(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="150"
      height="150"
      {...props}
    >
      <defs>
        <linearGradient id="techOrange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF9D00" />
          <stop offset="100%" stop-color="#FF5E00" />
        </linearGradient>

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#FF5E00" flood-opacity="0.3" />
        </filter>
      </defs>

      <g filter="url(#shadow)">
        <rect x="20" y="15" width="16" height="70" rx="8" fill="url(#techOrange)" />

        <path
          d="M 28 23 L 45 23 A 27 27 0 0 1 45 77 L 28 77"
          fill="none"
          stroke="url(#techOrange)"
          stroke-width="16"
        />
      </g>
    </svg>
  )
}
