import * as React from "react"
const CodeSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#080341"
      fillRule="evenodd"
      d="m4.5 6 .75-.75h13.5l.75.75v12l-.75.75H5.25L4.5 18V6Zm1.5.75v10.5h12V6.75H6ZM10.19 12 7.72 9.53l1.06-1.06L12.31 12l-3.53 3.53-1.06-1.06L10.19 12ZM12 15.75h3.75v-1.5H12v1.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default CodeSvg