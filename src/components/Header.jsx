import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import logo from "../assets/images/logo-arriendo.jpeg";
import { useNavigate } from "react-router";

export const Header = () => {
   const navigate = useNavigate()

  const handleNavigate = () =>{
    navigate("/")
  }
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #4B0082 0%, #800080 100%)",
        color: "#ffffff",
        boxShadow: 3,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, md: 4 },
          py: 1,
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <img
            src={logo}
            alt="logo"
            style={{
              height: 80,
              padding: "4px",
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "8px",
              cursor: "pointer"
            }}
            onClick={handleNavigate}
          />
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              letterSpacing: 0.5,
              color: "#ffffff",
            }}
          >
            Arriendos Diarios Glady's.C
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
