import { useState } from "react";

function Card() {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
  };

  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="card">
      <button
        className={`like-btn ${isLiked ? "liked" : ""}`}
        onClick={() => setIsLiked(!isLiked)}
      >
        {/* Un-liked heart */}
        <svg className={"heart-outline"} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5.5C16.5 1 22 4.3 22 9.1c0 5-6 7.6-10 9.4C8 16.7 2 14.1 2 9.1 2 4.3 7.5 1 12 5.5Z"
            stroke="currentColor"
            strokeWidth="1.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Liked filled with color */}
        <svg className={"heart-fill"} viewBox="0 0 24 24">
          <path
            d="M12 5.5C16.5 1 22 4.3 22 9.1c0 5-6 7.6-10 9.4C8 16.7 2 14.1 2 9.1 2 4.3 7.5 1 12 5.5Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <img
        height={220}
        width={210}
        src="/img/sneakers/Adidas_Forum_2000.png"
        alt="Adidas Forum 2000"
      />
      <h5>Adidas Forum 2000</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <p>12 999 руб.</p>
        </div>
        <button
          className={`add-btn ${isAdded ? "added" : ""}`}
          onClick={handleClick}
        >
          <img
            width={20}
            height={20}
            src={isAdded ? "/img/check.svg" : "/img/plus.svg"}
            alt={isAdded ? "check" : "plus"}
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
