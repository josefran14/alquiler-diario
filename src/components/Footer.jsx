import { Box, Typography, Link, Divider } from "@mui/material";
import { WhatsApp, Email } from "@mui/icons-material";
import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/mastercard.jpg";
import mercadoPago from "../assets/images/mercado-pago-logo-vector-2023.png";
import logo from "../assets/images/logo.jpeg";

export const Footer = () => (
  <Box
    component="footer"
    sx={{
      background: "linear-gradient(90deg, #4B0082 0%, #800080 100%)",
      color: "#ffffff",
      py: 4,
      mt: 6,
      textAlign: "center",
    }}
  >
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        fontWeight: "bold",
        color: "#ffffff",
      }}
    >
      Contacto
    </Typography>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        mt: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <WhatsApp sx={{ color: "#25D366", textShadow: "0 0 3px #1b6b30" }} />
        <Link
          href="https://wa.me/+56983311056"
          target="_blank"
          underline="hover"
          sx={{
            color: "#e0e0e0",
            fontWeight: "600",
            "&:hover": { color: "#b2ff59" },
          }}
        >
          +56983311056
        </Link>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Email sx={{ color: "#BBDEFB" }} />
        <Link
          href="mailto:marialecepeda18@gmail.com"
          underline="hover"
          sx={{
            color: "#e0e0e0",
            fontWeight: "600",
            "&:hover": { color: "#90caf9" },
          }}
        >
          marialecepeda18@gmail.com
        </Link>
      </Box>
    </Box>

    <Typography
      variant="body2"
      sx={{
        mt: 3,
        fontWeight: "500",
        color: "#d1c4e9",
        textShadow: "0 0 4px rgba(255, 255, 255, 0.4)",
      }}
    >
      Medios de pago aceptados:
    </Typography>

    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
      <img src={visa} alt="Visa" height={40} />
      <img src={mastercard} alt="MasterCard" height={40} />
      <img src={mercadoPago} alt="Mercado Pago" height={40} />
    </Box>

    <Divider
      sx={{ my: 3, width: "50%", mx: "auto", backgroundColor: "#6a4b9a" }}
    />

    {/* Logo centrado */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <img
        src={logo}
        alt="Logo Arriendo Diario"
        style={{
          height: 70,
          padding: "6px",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        }}
      />
    </Box>

    <Typography
      variant="caption"
      sx={{
        color: "#d1c4e9",
        textShadow: "0 0 3px rgba(255, 255, 255, 0.3)",
      }}
    >
      © {new Date().getFullYear()} Departamento Amoblado Santiago Centro. Todos
      los derechos reservados.
    </Typography>
  </Box>
);
