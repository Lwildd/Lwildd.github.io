// Header.js (same behavior, different presentation)
import React, { useEffect, useState } from "react";
import {
  AppBar, Toolbar, Box, IconButton, Drawer, ListItemButton, Typography, useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const sections = ["about", "publications", "education", "experience"];

export default function Header() {
  const [selectedSection, setSelectedSection] = useState("about");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setSelectedSection(visible.target.id);
      },
      { threshold: 0.55 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    const yOffset = -66;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setDrawerOpen(false);
  };

  const NavItem = ({ id }) => {
    const active = selectedSection === id;
    return (
      <Box
        onClick={() => scrollTo(id)}
        role="button"
        sx={{
          cursor: "pointer",
          px: 1,
          py: 0.75,
          borderRadius: 0 ,
          color: active ? "primary.main" : "text.secondary",
          fontWeight: active ? 700 : 600,
          "&:hover": { color: "text.primary", backgroundColor: "divider" },
        }}
      >
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </Box>
    );
  };

  return (
    <AppBar position="fixed"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, borderRadius:0 }}>
      <Toolbar sx={{ maxWidth:"lg", mx: "auto", width: "100%", borderRadius:0 }}>
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, borderRadius:0 }}>
          <Typography sx={{ fontWeight: 800, letterSpacing: -0.3 }}>
          Lena Wild
          </Typography>
         
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {isMobile ? (
          <IconButton onClick={() => setDrawerOpen(true)} aria-label="menu">
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {sections.map((s) => <NavItem key={s} id={s} />)}
          </Box>
        )}

        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{ sx: { p: 1.5, mt: "56px" , borderRadius:0} }}
        >
          {sections.map((s) => (
            <ListItemButton
              key={s}
              onClick={() => scrollTo(s)}
              sx={{ borderRadius: 0, color: selectedSection === s ? "primary.main" : "text.primary" }}
            >
              <Typography sx={{ fontWeight: selectedSection === s ? 800 : 450 }}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </Typography>
            </ListItemButton>
          ))}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}