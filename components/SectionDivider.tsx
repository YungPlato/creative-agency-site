export default function SectionDivider() {
  return (
    <div className="relative">
      <svg className="w-full h-16" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D900FF" />
            <stop offset="100%" stopColor="#00F0FF" />
          </linearGradient>
        </defs>
        <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,100 L0,100 Z" fill="url(#line)" fillOpacity="0.1" />
      </svg>
    </div>
  );
}

