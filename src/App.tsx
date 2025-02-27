import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"; // 他のページもルートに追加
import Header from "./pages/Header";
import Login from "./pages/login";
import PokemonGacha from "./pages/PokemonGacha";
import PokedexPage from "./pages/PokedexPage";
import { PokedexProvider } from "./context/PokedexContext"; // 追加

// import NotFound from './pages/NotFound';

function App() {
  return (

    <PokedexProvider>
      {" "}
      {/* ここでラップ */}
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">ログイン画面</Link>
            <Link to="/header">ヘッダー</Link>
            <Link to="/home">ホーム</Link>
            <Link to="/pokedex">ポケモン図鑑</Link>
            <Link to="/gacha">ポケモンガチャ</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/header" element={<Header />} />
            <Route path="/home" element={<Home />} />
            <Route path="/gacha" element={<PokemonGacha />} />
            <Route path="/pokedex" element={<PokedexPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PokedexProvider>
  );
}

export default App;
