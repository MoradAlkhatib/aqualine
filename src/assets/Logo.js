function LogoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      className="w-16 h-16"
    >
      <path
        d="M32 2C26 12 16 22 16 34C16 46.15 24.85 55 37 55C49.15 55 58 46.15 58 34C58 22 48 12 42 2H32Z"
        fill="url(#grad)"
      />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4FC3F7" />
          <stop offset="100%" stopColor="#0288D1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default LogoIcon;
