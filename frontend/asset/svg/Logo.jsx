import { useNavigate } from 'react-router-dom';

export default function Logo() {
  const navigate = useNavigate();

  return (
    <svg
      onClick={() => {
        navigate('/logined');
      }}
      style={{ cursor: 'pointer ' }}
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="46"
      viewBox="0 0 80 46"
      fill="none"
    >
      <mask id="path-1-inside-1_219_13" fill="white">
        <path d="M42.5 0.5C52.3161 0.5 60.6623 6.78657 63.7363 15.5527C64.153 15.518 64.5744 15.5 65 15.5C73.2843 15.5 80 22.2157 80 30.5C80 38.7843 73.2843 45.5 65 45.5H15L14.6133 45.4951C6.50774 45.29 0 38.655 0 30.5C0 22.2157 6.71573 15.5 15 15.5C17.0922 15.5 19.0844 15.9284 20.8936 16.7021C23.6175 7.34101 32.2597 0.5 42.5 0.5Z" />
      </mask>
      <path
        d="M42.5 0.5C52.3161 0.5 60.6623 6.78657 63.7363 15.5527C64.153 15.518 64.5744 15.5 65 15.5C73.2843 15.5 80 22.2157 80 30.5C80 38.7843 73.2843 45.5 65 45.5H15L14.6133 45.4951C6.50774 45.29 0 38.655 0 30.5C0 22.2157 6.71573 15.5 15 15.5C17.0922 15.5 19.0844 15.9284 20.8936 16.7021C23.6175 7.34101 32.2597 0.5 42.5 0.5Z"
        fill="url(#paint0_linear_219_13)"
      />
      <path d="..." fill="black" fillOpacity="0.05" mask="url(#path-1-inside-1_219_13)" />
      <text x="40" y="33" textAnchor="middle" fontSize="14" fill="black" fontWeight="500">
        Home
      </text>
      <defs>
        <linearGradient id="paint0_linear_219_13" x1="40" y1="0.5" x2="40" y2="45.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D9C9FF" />
          <stop offset="1" stopColor="#CAD4DF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
