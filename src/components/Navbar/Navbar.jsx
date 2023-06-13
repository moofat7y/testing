import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";

import { useDirectionThemeContext } from "../../Context/Direction";
import AvatarProfile from "./AvatarProfile";
import { NavLink, useNavigate } from "react-router-dom";
import { CardMedia } from "@mui/material";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t } = useTranslation();
  const Links = t("Links", { returnObjects: true });
  const { isRtl, toggleLanguage } = useDirectionThemeContext();

  const user = useSelector((state) => state.auth.user);
  console.log(user, "user");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      className={` appBar ${isScrolled ? "scrolled" : ""}`}
      color={`${isScrolled ? "light" : "transparent"}`}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Image */}
          <CardMedia
            component="img"
            image={logo}
            alt="logo"
            sx={{ width: 80, display: { xs: "none", md: "flex" } }}
          />
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* Mobile  */}
              {Links.map((link) => {
                if (link.path === "/times" && user?.role !== "Staff")
                  return null;
                return (
                  <NavLink to={link.path} key={link.path}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{link.name}</Typography>
                    </MenuItem>
                  </NavLink>
                );
              })}
            </Menu>
          </Box>
          {/* Image */}
          <CardMedia
            component="img"
            image={logo}
            alt="logo"
            sx={{ width: 80, display: { xs: "flex", md: "none" } }}
          />

          {/* LAPTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {Links.map((link) => {
              if (link.path === "/times" && user?.role !== "Staff") return null;
              return (
                <NavLink to={link.path} key={link.path}>
                  <Button
                    variant="text"
                    color="text"
                    sx={{ fontWeight: "700" }}
                  >
                    {link.name}
                  </Button>
                </NavLink>
              );
            })}
          </Box>
          <Box gap="10px" display="flex">
            <Button variant="outlined" onClick={toggleLanguage}>
              {isRtl ? "EN" : "AR"}
            </Button>
            {user ? (
              <AvatarProfile />
            ) : (
              <Button variant="contained" onClick={() => navigate("/login")}>
                تسجيل الدخول
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
