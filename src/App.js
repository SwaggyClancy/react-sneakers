import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
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
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
