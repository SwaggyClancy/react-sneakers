function Header() {
  return (
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
        {/*Header right part */}

        <span className="mr-30 d-flex align-center">
          {/* Cart icon */}
          <svg
            className="mr-10 header-icon cart-icon"
            width="25"
            height="25"
            viewBox="0 0 34 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <circle cx="10" cy="28" r="2" />
            <circle cx="24" cy="28" r="2" />
            <path d="M4 4h5l3 16h16l3-11h-18" />
          </svg>
          <span>1205 руб.</span>
        </span>

        {/* Profile icon */}
        <svg
          className="header-icon user-icon"
          width="25"
          height="25"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <circle cx="16" cy="10" r="5" />
          <path d="M4 30c0-8 8-10 12-10s12 2 12 10" />
        </svg>
      </div>
    </header>
  );
}

export default Header;
