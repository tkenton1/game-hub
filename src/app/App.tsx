import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { TicTacToePage } from "../games/tic-tac-toe/TicTacToePage";
import { SudokuPage } from "../games/sudoku/SudokuPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="tic-tac-toe" element={<TicTacToePage />} />
        <Route path="sudoku" element={<SudokuPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}