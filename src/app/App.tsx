import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../pages/Home";
import { TicTacToePage } from "../games/tic-tac-toe/TicTacToePage";
import { NotFound } from "../pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="tic-tac-toe" element={<TicTacToePage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}