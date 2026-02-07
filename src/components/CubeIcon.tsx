const CubeIcon = ({ size = 22, color = "#111827" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
    <path d="M12 22V12" />
    <path d="M21 7 12 12 3 7" />
  </svg>
);

export default CubeIcon;
