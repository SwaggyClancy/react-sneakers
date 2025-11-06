function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.svg" alt="Логотип" />
          <div className="HeaderInfo">
            <h3>React Sneakers</h3>
            <p>Лучший магазин кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img
              width={18}
              height={18}
              src="/img/user.svg"
              alt="Пользователь"
            />
          </li>
        </ul>
      </header>
      <main>
        <h1>Все кроссовки</h1>
      </main>
    </div>
  );
}

export default App;
