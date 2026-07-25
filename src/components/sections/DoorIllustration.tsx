export function DoorIllustration({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 420 520"
        className="motion-safe:animate-door-float w-full max-w-xs mx-auto drop-shadow-2xl"
        role="img"
        aria-label="Ilustrație a unei uși de interior întredeschise, cu insert din sticlă"
      >
        <defs>
          <linearGradient id="doorGlass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="doorLeaf" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* floor shadow */}
        <ellipse cx="190" cy="486" rx="130" ry="16" fill="var(--color-primary)" opacity="0.12" />

        {/* door frame, viewed frontally */}
        <rect
          x="56"
          y="36"
          width="210"
          height="440"
          rx="6"
          fill="none"
          stroke="var(--color-primary)"
          strokeOpacity="0.25"
          strokeWidth="10"
        />

        {/* door leaf, swung open toward viewer (foreshortened trapezoid) */}
        <polygon
          points="70,50 268,16 268,478 70,428"
          fill="url(#doorLeaf)"
        />
        {/* leaf edge highlight (hinge-side shading) */}
        <polygon points="70,50 90,54 90,424 70,428" fill="#000000" opacity="0.12" />

        {/* vertical glass insert within the leaf */}
        <polygon points="196,44 244,26 244,466 196,442" fill="url(#doorGlass)" stroke="var(--color-accent)" strokeOpacity="0.4" strokeWidth="2" />

        {/* handle */}
        <circle cx="182" cy="248" r="7" fill="var(--color-accent)" />
      </svg>
    </div>
  );
}
