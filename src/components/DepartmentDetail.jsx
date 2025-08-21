import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  Stack,
  Tooltip,
  Button,
} from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import entrada from "../assets/images/entrada.jpeg";
import foto1 from "../assets/images/habitacion/habitacion1.jpeg";
import foto2 from "../assets/images/habitacion/habitacion2.jpeg";
import foto4 from "../assets/images/habitacion/habitacion3.jpeg";
import foto5 from "../assets/images/living/living.jpeg";
import foto6 from "../assets/images/living/living2.jpeg";
import foto7 from "../assets/images/living/living3.jpeg";
import foto8 from "../assets/images/living/living4.jpeg";
import foto9 from "../assets/images/living/living5.jpeg";
import foto10 from "../assets/images/living/living6.jpeg";
import foto11 from "../assets/images/cocina/cocina1.jpeg";
import foto12 from "../assets/images/cocina/cocina2.jpeg";
import foto13 from "../assets/images/baño/baño.jpeg";
import foto14 from "../assets/images/baño/tina.jpeg";
import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/mastercard.jpg";
import mercadoPago from "../assets/images/mercado-pago-logo-vector-2023.png";
import { Kitchen, Tv, Whatshot, Wifi } from "@mui/icons-material";
import WorkIcon from "@mui/icons-material/Work";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HotelIcon from "@mui/icons-material/Hotel";
import { useNavigate } from "react-router";

const fotos = [
  entrada,
  foto1,
  foto2,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
  foto10,
  foto11,
  foto12,
  foto13,
  foto14,
];

export const DepartmentDetail = () => {
  const [index, setIndex] = useState(-1);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 900, mx: "auto" }}>
      {/* Título */}
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        fontWeight="bold"
        sx={{
          fontWeight: "bold",
          fontFamily: "Lora",
          color: "#263238",
        }}
      >
        Departamento Amoblado Santiago Centro
      </Typography>
      {/* Precio */}
      <Typography
        variant="h5"
        gutterBottom
        textAlign="center"
        sx={{
          fontWeight: 600,
          fontFamily: "'Poppins', sans-serif",
          color: "#512DA8",
          mt: 2,
        }}
      >
        Precio: $30.000 - $55.000 por noche(Precio según número de huéspedes)
      </Typography>
      <Grid
        container
        spacing={0.5}
        sx={{
          mb: 3,
          maxWidth: 900,
          mx: "auto",
          borderRadius: 3,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Imagen principal */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: { xs: 250, md: 450 },
              borderRadius: { xs: 2, md: 3 },
              overflow: "hidden",
              cursor: "pointer",
              "&:hover img": {
                transform: "scale(1.02)",
                transition: "transform 0.3s ease",
              },
            }}
            onClick={() => setIndex(0)}
          >
            <img
              src={fotos[0]}
              alt="Foto principal"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Grid>

        {/* Miniaturas en formato 2x2 */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: 0.5,
            height: { xs: "auto", md: 450 },
          }}
        >
          {fotos.slice(1, 5).map((foto, i) => (
            <Box
              key={i}
              sx={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: 2,
                height: { xs: 120, md: "auto" },
                "&:hover img": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                },
              }}
              onClick={() => setIndex(i + 1)}
            >
              <img
                src={foto}
                alt={`Miniatura ${i + 2}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Overlay en la última miniatura */}
              {i === 3 && fotos.length > 5 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  +{fotos.length - 5}
                </Box>
              )}
            </Box>
          ))}
        </Grid>
      </Grid>
      {/* Características */}
      <Box
        sx={{
          mb: 4,
          p: 3,
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Características del Departamento
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          justifyContent="flex-start"
        >
          <Chip
            icon={<WorkIcon />}
            label="Departamento amoblado"
            color="default"
            variant="outlined"
          />
          <Chip
            icon={<BathtubIcon />}
            label="1 Baño"
            color="default"
            variant="outlined"
          />
          <Chip
            icon={<HotelIcon />}
            label="1 Habitación"
            color="default"
            variant="outlined"
          />
          <Chip
            icon={<HotelIcon />}
            label="2 Camas"
            color="default"
            variant="outlined"
          />
        </Stack>
      </Box>
      {/* Descripción */}
      <Box
        sx={{
          mb: 4,
          p: { xs: 3, md: 4 },
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          borderRadius: 3,
          fontFamily: '"Montserrat", sans-serif',
          textAlign: "justify",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          {/* <LocationOnIcon color="primary" sx={{ mr: 1 }} /> */}
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            Excelente Ubicación
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            fontFamily: "'Lato', sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.75,
          }}
        >
          Departamento amoblado ubicado en <strong>Zenteno 138</strong>, en el
          corazón de Santiago Centro. Ideal para familias o grupo de amigos. A
          solo <strong>2 cuadras del metro Universidad de Chile</strong>,
          rodeado de supermercados, farmacias, cafeterías y una variada oferta
          gastronómica. Muy cercano a universidades, centros culturales y con{" "}
          <strong>excelente conectividad</strong>. Ideal para una estadía{" "}
          <strong>cómoda</strong>, <strong>segura</strong> y{" "}
          <strong>bien ubicada</strong>.
        </Typography>
      </Box>
      {/* Mapa de Ubicación */}
      <Box
        sx={{
          mb: 4,
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5797659611734!2d-70.64902802348303!3d-33.45127589733443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a7c8264f59%3A0x73ae2d5d2ef251f1!2sZenteno%20138%2C%208340309%20Santiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2sar!4v1718655930200!5m2!1ses-419!2sar"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      {/* Comodidades / Features */};
      <Box
        sx={{
          mb: 4,
          p: 3,
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Comodidades Incluidas
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Tooltip title="Wi-Fi rápido y estable" arrow>
            <Chip
              icon={<Wifi />}
              label="Wi-Fi"
              variant="outlined"
              color="success"
              sx={{ fontWeight: "medium" }}
            />
          </Tooltip>
          <Tooltip title="Cocina totalmente equipada" arrow>
            <Chip
              icon={<Kitchen />}
              label="Cocina equipada"
              variant="outlined"
              color="secondary"
              sx={{ fontWeight: "medium" }}
            />
          </Tooltip>
          <Tooltip title="TV por cable con canales premium" arrow>
            <Chip
              icon={<Tv />}
              label="TV Cable"
              variant="outlined"
              color="info"
              sx={{ fontWeight: "medium" }}
            />
          </Tooltip>
          <Tooltip title="Calefacción para tu confort" arrow>
            <Chip
              icon={<Whatshot />}
              label="Calefacción"
              variant="outlined"
              color="warning"
              sx={{ fontWeight: "medium" }}
            />
          </Tooltip>
        </Stack>
      </Box>
      {/* Medios de pago */}
      <Paper
        elevation={4}
        sx={{
          p: 4,
          maxWidth: 650,
          mx: "auto",
          borderRadius: 3,
          background: "linear-gradient(135deg, #f5f7fa 0%, #e2ebf0 100%)",
          textAlign: "center",
          mb: 6,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Medios de Pago Aceptados
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            flexWrap: "wrap",
            alignItems: "center",
            my: 2,
          }}
        >
          <img
            src={visa}
            alt="Visa"
            height={45}
            style={{ filter: "grayscale(20%)" }}
          />
          <img
            src={mastercard}
            alt="MasterCard"
            height={45}
            style={{ filter: "grayscale(20%)" }}
          />
          <img
            src={mercadoPago}
            alt="Mercado Pago"
            height={45}
            style={{ filter: "grayscale(20%)" }}
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            color: "#333",
            mt: 1,
          }}
        >
          Aceptamos <strong>tarjetas de crédito</strong>,{" "}
          <strong>transferencia bancaria</strong>,
          <strong> Mercado Pago(Link)</strong> y <strong>efectivo</strong>.
        </Typography>
      </Paper>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleNavigate}
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 2,
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
            backgroundColor: "#793CFB",
            "&:hover": {
              backgroundColor: "#5a2fcc",
            },
          }}
        >
          Volver al Inicio
        </Button>
      </Box>
      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={fotos.map((slide, i) => ({
          src: slide,
        }))}
        render={{
          slide: ({ slide }) => (
            <Box
              sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                position: "relative",
                p: 2,
              }}
            >
              <img
                src={slide.src}
                alt={slide.title}
                style={{
                  maxHeight: "90vh",
                  maxWidth: "90vw",
                  objectFit: "contain",
                  borderRadius: 8,
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  color: "black",
                  backgroundColor: "rgba(255,255,255,0.8)",
                  padding: "5px 10px",
                  borderRadius: 1,
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                {slide.title}
              </Typography>
            </Box>
          ),
        }}
      />
    </Box>
  );
};
