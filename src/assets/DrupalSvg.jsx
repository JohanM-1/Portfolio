const DrupalSvg = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    {...props}
  >
    {/* Drupal drop shape */}
    <path
      d="M16 2L4 20c0 0 5.5 10 12 10s12-10 12-10L16 2z"
      fill="#0678BE"
    />
    <path
      d="M16 6L8 18c0 0 3.5 6 8 8s8-8 8-8L16 6z"
      fill="#FFFFFF"
    />
    <circle cx="16" cy="16" r="2" fill="#0678BE" />
  </svg>
);

export default DrupalSvg;