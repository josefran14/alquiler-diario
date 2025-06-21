import { Box, Typography, Link } from "@mui/material";

export const Info = () => {
  return (
    <Box style={{ textAlign: "center", marginTop: "2rem" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "Lora",
          color: "#263238",
        }}
      >
        Arriendo Diario en Santiago Centro
      </Typography>
      <Link
        href="https://wa.me/56983311056"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "10px 20px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          ":hover": {
            backgroundColor: "#1ebe57",
          },
        }}
      >
        Hablemos por WhatsApp
      </Link>
    </Box>
  );
};
