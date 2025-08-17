import React from "react";

function Stars({ rating = 0, maxStars = 5, size = 20, className = "" }) {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    const filled = i <= rating;
    const halfFilled = i - 0.5 === rating;

    stars.push(
      <svg
        key={i}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className="inline-block"
      >
        <defs>
          <linearGradient id={`half-${i}`}>
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill={filled ? "#fbbf24" : halfFilled ? `url(#half-${i})` : "#e5e7eb"}
          stroke="#fbbf24"
          strokeWidth="1"
        />
      </svg>
    );
  }

  return <div className={`flex items-center ${className}`}>{stars}</div>;
}

export default Stars;
