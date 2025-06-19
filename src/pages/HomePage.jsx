import { Box } from "@mui/material";
import { FeaturedImage } from "../components/FeaturedImage";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Info } from "../components/Info";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Info />
      <FeaturedImage />
      <Footer />
    </>
  );
};
