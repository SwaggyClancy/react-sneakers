import { useState } from "react";
function App() {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
  };

  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="wrapper">
      <div className="drawer-overlay">
        <div className="drawer">
          <h2 className="mb-20">Корзина</h2>
          <div className="cart-items-wrapper">
            <div className="cart-item d-flex align-center">
              <img
                className="mr-20"
                height={100}
                width={100}
                src="/img/sneakers/Adidas_Forum_2000.png"
                alt="Sneakers"
              />

              <div className="cart-item-info mr-20">
                <p className="mb-5">Adidas Forum 2000</p>
                <b>12 999 руб.</b>
              </div>

              <button className="remove-btn">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 5L5 19M5 5L19 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="cart-item d-flex align-center">
              <img
                className="mr-20"
                height={100}
                width={100}
                src="/img/sneakers/Adidas_Forum_2000.png"
                alt="Sneakers"
              />

              <div className="cart-item-info mr-20">
                <p className="mb-5">Adidas Forum 2000</p>
                <b>12 999 руб.</b>
              </div>

              <button className="remove-btn">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 5L5 19M5 5L19 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="cart-item d-flex align-center">
              <img
                className="mr-20"
                height={100}
                width={100}
                src="/img/sneakers/Adidas_Forum_2000.png"
                alt="Sneakers"
              />

              <div className="cart-item-info mr-20">
                <p className="mb-5">Adidas Forum 2000</p>
                <b>12 999 руб.</b>
              </div>

              <button className="remove-btn">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 5L5 19M5 5L19 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="cart-item d-flex align-center">
              <img
                className="mr-20"
                height={100}
                width={100}
                src="/img/sneakers/Adidas_Forum_2000.png"
                alt="Sneakers"
              />

              <div className="cart-item-info mr-20">
                <p className="mb-5">Adidas Forum 2000</p>
                <b>12 999 руб.</b>
              </div>

              <button className="remove-btn">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 5L5 19M5 5L19 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="cart-item d-flex align-center">
              <img
                className="mr-20"
                height={100}
                width={100}
                src="/img/sneakers/Adidas_Forum_2000.png"
                alt="Sneakers"
              />

              <div className="cart-item-info mr-20">
                <p className="mb-5">Adidas Forum 2000</p>
                <b>12 999 руб.</b>
              </div>

              <button className="remove-btn">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 5L5 19M5 5L19 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="cart-item d-flex align-center">
              <img
                className="mr-20"
                height={100}
                width={100}
                src="/img/sneakers/Adidas_Forum_2000.png"
                alt="Sneakers"
              />

              <div className="cart-item-info mr-20">
                <p className="mb-5">Adidas Forum 2000</p>
                <b>12 999 руб.</b>
              </div>

              <button className="remove-btn">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 5L5 19M5 5L19 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="cart-summary">
            <div className="summary-row">
              <span>Итого:</span>
              <div className="dashed"></div>
              <b>21 498 руб.</b>
            </div>
            <div className="summary-row">
              <span>Налог 5%:</span>
              <div className="dashed"></div>
              <b>1 074 руб.</b>
            </div>

            <button className="green-btn">Оформить заказ</button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          {/* Header left part */}
          <img
            className="mr-20"
            width={60}
            height={60}
            src="/img/logo.svg"
            alt="Logo"
          />
          <div>
            <h3 className="mb-0 text-uppercase">React Sneakers</h3>
            <p className="mb-0 opacity-5">Лучший магазин кроссовок</p>
          </div>
        </div>

        <div className="d-flex align-center">
          {/* Header right part */}
          <span className="mr-30 d-flex">
            <img
              className="mr-10"
              width={25}
              height={25}
              src="/img/cart.svg"
              alt="Cart"
            />
            <span>1205 руб.</span>
          </span>
          <img width={25} height={25} src="/img/user.svg" alt="User" />
        </div>
      </header>

      <main className="content p-40">
        <div className="mb-40 d-flex justify-between align-center">
          <h1>Все кроссовки</h1>
          <div className="search-box">
            <img
              width={18}
              height={18}
              src="/img/search.svg"
              alt="search"
              className="search-icon"
            />
            <input
              type="text"
              placeholder="Поиск..."
              className="search-input"
            />
          </div>
        </div>
        <div className="sneakers d-flex mr-auto flex-wrap">
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
        </div>
      </main>
    </div>
  );
}

export default App;
