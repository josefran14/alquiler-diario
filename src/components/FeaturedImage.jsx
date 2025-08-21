import { useNavigate } from "react-router";
import estudioImg from "../assets/images/habitacion/habitacion1.jpeg";
import { Box, Typography, Button } from "@mui/material";

export const FeaturedImage = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" my={4}>
      <Box
        tabIndex={0}
        role="button"
        onClick={() => navigate("/home-estudio")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            navigate("/detalle");
          }
        }}
        sx={{
          position: "relative",
          width: { xs: "90%", sm: "70%", md: "500px" },
          margin: "0 auto",
          overflow: "hidden",
          borderRadius: 2,
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          outline: "none",
          "&:focus": {
            outline: "3px solid #1976d2",
            outlineOffset: "4px",
          },
          "&:hover img": {
            transform: "scale(1.05)",
            filter: "brightness(0.85)",
          },
          "&:hover .overlay": {
            opacity: 1,
            transform: "translateY(0)",
          },
          transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
        }}
      >
        <img
          src={estudioImg}
          alt="Departamento amoblado en Santiago Centro"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            transition: "transform 0.3s ease-in-out",
            borderRadius: "10px",
          }}
        />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            p: 2,
            opacity: 0,
            transform: "translateY(20%)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            userSelect: "none",
          }}
        >
          <Typography variant="body2" component="p">
            ✔️ 1 Baño
          </Typography>
          <Typography variant="body2" component="p">
            ✔️ Habitación Principal
          </Typography>
          <Typography variant="body2" component="p">
            ✔️ 2 Camas
          </Typography>
          <Typography variant="body2" component="p">
            ✔️ Ideal para hasta 5 personas
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        sx={{
          mt: 2,
          px: 4,
          fontWeight: "bold",
          fontSize: "1rem",
          backgroundColor: "#793CFB",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#5a2fcc",
          },
        }}
        onClick={() => navigate("/home-estudio")}
      >
        Ver más
      </Button>
    </Box>
  );
};
