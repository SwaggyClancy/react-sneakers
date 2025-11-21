function Drawer() {
  return (
    <div style={{ display: "none" }} className="drawer-overlay">
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
  );
}

export default Drawer;
