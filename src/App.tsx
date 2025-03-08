import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"; // 他のページもルートに追加
import Header from "./pages/Header";
import PokemonGacha from "./pages/PokemonGacha";
import PokedexPage from "./pages/PokedexPage";
import { PokedexProvider } from "./context/PokedexContext"; // 追加
// import Auth from "./pages/Auth";
import MainLayout from "./layouts/MainLayout";
import TodoApp from "./feautures/TodoApp";

// import NotFound from './pages/NotFound';

function App() {
  return (
    <PokedexProvider>
      {" "}
      <BrowserRouter>
        <div>
          {/* <Link to="/home">ホーム</Link> */}
          <Link to="/">ホーム</Link>
          <Routes>
            {/* <Route path="/" element={<Auth />} /> */}
            <Route path="/header" element={<Header />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/gacha" element={<PokemonGacha />} />
            <Route path="/pokedex" element={<PokedexPage />} />
            <Route
              path="/app"
              element={
                <MainLayout>
                  <TodoApp />
                  <Home />
                </MainLayout>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </PokedexProvider>
  );
}

export default App;
