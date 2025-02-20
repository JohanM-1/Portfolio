import * as React from "react"
const KotlinSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 32 32"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={73.714}
        x2={105.452}
        y1={910.226}
        y2={878.134}
        gradientTransform="matrix(.893 0 0 .893 -64.139 -782.556)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0296d8" />
        <stop offset={1} stopColor="#8371d9" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={69.813}
        x2={102.279}
        y1={905.226}
        y2={875.745}
        gradientTransform="matrix(.893 0 0 .893 -64.139 -782.556)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#cb55c0" />
        <stop offset={1} stopColor="#f28e0e" />
      </linearGradient>
    </defs>
    <title>{"file_type_kotlin"}</title>
    <path
      d="M2 2v28h28v-.047l-6.95-7-6.95-7.007 6.95-7.012L29.938 2Z"
      style={{
        fill: "url(#a)",
      }}
    />
    <path
      d="M16.318 2 2 16.318V30h.124l14.008-14.008-.031-.031L23.05 8.95 29.938 2Z"
      style={{
        fill: "url(#b)",
      }}
    />
  </svg>
)
export default KotlinSvg