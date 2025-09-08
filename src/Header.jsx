import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const sections = ['about', 'publications', 'education', 'experience'];

export default function Header() {
  const [selectedSection, setSelectedSection] = useState('about');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // IntersectionObserver to highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setSelectedSection(visibleEntry.target.id);
        }
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -68; // AppBar height
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setDrawerOpen(false); // close drawer on mobile
  }
};

  return (
    <AppBar position="fixed" sx={{ zIndex: 10, backgroundColor: 'white', color: 'black' }}>
      <Toolbar>

        <Box sx={{ flexGrow: 1, fontWeight: '' }}></Box>

        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        {!isMobile && (
          sections.map((sec) => (
            <Button
              key={sec}
              onClick={() => scrollTo(sec)}
              sx={{
                color: selectedSection === sec ? 'info.main' : 'inherit',
                fontWeight: selectedSection === sec ? 'bold' : 'normal',
                textTransform: 'capitalize',
              }}
            >
              {sec}
            </Button>
          ))
        )}
      </Toolbar>

      {/* Top Drawer on Mobile */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: '100%', backgroundColor: 'white', pt: 2 } }}
      >
        <List>
          {sections.map((sec) => (
            <ListItem key={sec} disablePadding>
              <ListItemButton onClick={() => scrollTo(sec)}>
                <ListItemText
                  primary={sec.charAt(0).toUpperCase() + sec.slice(1)}
                  primaryTypographyProps={{
                    fontWeight: selectedSection === sec ? 'bold' : 'normal',
                    color: selectedSection === sec ? 'info.main' : 'inherit',
                    textTransform: 'capitalize',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}