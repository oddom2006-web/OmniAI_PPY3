export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="font-display inline-flex items-center gap-2 text-xl font-semibold tracking-tight">
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="omni-logo" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7c5cff" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="10" fill="url(#omni-logo)" />
        <circle cx="16" cy="16" r="6" fill="none" stroke="#fff" strokeWidth="3" />
      </svg>
      OmniAI
    </span>
  );
}
