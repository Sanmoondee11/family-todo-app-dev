import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"; // 他のページもルートに追加
import Header from "./pages/Header";
import LoginPage from "./pages/LoginPage";
import PokemonGacha from "./pages/PokemonGacha";
import PokedexPage from "./pages/PokedexPage";
import { PokedexProvider } from "./context/PokedexContext"; // 追加
import Auth from "./pages/Auth";
import MainLayout from "./layouts/MainLayout";
import TodoApp from "./feautures/TodoApp";

// import NotFound from './pages/NotFound';

function App() {
  return (
    <PokedexProvider>
      {" "}
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/gacha">ポケモンガチャ</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/header" element={<Header />} />
            <Route path="/home" element={<Home />} />
            <Route path="/gacha" element={<PokemonGacha />} />
            <Route path="/pokedex" element={<PokedexPage />} />
            <Route path="/app" element={<MainLayout />} />
            <Route index element={<Home />} />
            <Route index element={<TodoApp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PokedexProvider>
  );
}

export default App;
