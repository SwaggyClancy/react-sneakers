function App() {
  return (
    <div className="wrapper">
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
          <div className="search-box d-flex">
            <input type="text" placeholder="Поиск..." />
            <img width={30} height={30} src="img/search.svg" alt="search" />
          </div>
        </div>
        <div className="sneakers">
          <div className="card">
            <img
              height={220}
              width={210}
              src="img/sneakers/Adidas_Forum_2000.png"
              alt="Adidas Forum 2000"
            />
            <h5>Adidas Forum 2000</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <p>12 999 руб.</p>
              </div>
              <button className="button">
                <img width={20} height={20} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
