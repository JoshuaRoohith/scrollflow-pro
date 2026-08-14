export function BlinkLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className="relative font-display text-2xl font-extrabold tracking-tight text-primary-soft">
        B
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="absolute -top-2 right-[-0.55rem] h-3 w-3 text-primary-soft"
        >
          <path
            fill="currentColor"
            d="M12 0l1.8 8.2L22 10l-8.2 1.8L12 20l-1.8-8.2L2 10l8.2-1.8z"
          />
        </svg>
      </span>
      <span className="font-display text-2xl font-extrabold tracking-tight text-primary">
        link
      </span>
    </span>
  );
}
