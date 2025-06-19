import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { HomeEstudioPage } from "../pages/HomeEstudioPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home-estudio" element={<HomeEstudioPage />} />
    </Routes>
  );
};
