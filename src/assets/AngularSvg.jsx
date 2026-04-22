const AngularSvg = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    {...props}
  >
    {/* Angular A shield shape */}
    <path
      d="M16 2L2 28h6l2-4h16l2 4h6L16 2z"
      fill="#DD0031"
    />
    <path
      d="M16 6l-8 18h5l1.5-3h5l1.5 3h5L16 6z"
      fill="#C3002F"
    />
    <path
      d="M11 21l2.5-5 2.5 5h-5z"
      fill="white"
    />
  </svg>
);

export default AngularSvg;