// theme.js
import { createTheme, alpha } from "@mui/material/styles";

const theme = createTheme({
  shape: { borderRadius: 12 },

  typography: {
    htmlFontSize: 14, 
    fontFamily: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
    h1: { fontFamily: `'DM Serif Display', serif`, fontWeight: 400, letterSpacing: -0.6, "@media (max-width:600px)": {
        fontSize: "2.2rem",
      }, },
    h2: { fontFamily: `'DM Serif Display', serif`, fontWeight: 400, letterSpacing: -0.4 , "@media (max-width:600px)": {
        fontSize: "1.85rem",
      },},
    h3: { fontFamily: `'DM Serif Display', serif`, fontWeight: 400, letterSpacing: -0.3,  "@media (max-width:600px)": {
        fontSize: "1.55rem",
      }, },
    h4: { fontFamily: `'DM Serif Display', serif`, fontWeight: 400, letterSpacing: -0.2 ,  "@media (max-width:600px)": {
        fontSize: "1.45rem", fontWeight: 800
      }, },
    h5: { fontWeight: 650, letterSpacing: -0.2,  "@media (max-width:600px)": {
        fontSize: "1.55rem",
      }, },
    h6: { fontWeight: 400, letterSpacing: -0.1 ,"@media (max-width:600px)": {
        fontSize: "1.35rem",
      }, },
    caption: { lineHeight: 1.5, fontSize:12 , "@media (max-width:600px)": {
        fontSize: 11,
      },},
    body1: { lineHeight: 1.5, fontSize:15,  "@media (max-width:600px)": {
        fontSize: 14,
      }, },
    body2: { lineHeight: 1.4, fontSize:14 ,  "@media (max-width:600px)": {
        fontSize: 12,
      },},
  },

  

  palette: {
    mode: "light",
    background: { default: "#fbfbf9", paper: "#fbfbf9" },
    text: { primary: "#121212", secondary: alpha("#121212", 0.68) },
    divider: alpha("#121212", 0.10),
    primary: { main: "#8a1f1fff" },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { WebkitFontSmoothing: "antialiased" },
        a: { textDecorationThickness: "2px", textUnderlineOffset: "3px" },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: "none",
          borderRadius: theme.shape.borderRadius,
        }),
      },
      variants: [
        // “Section card” (default sleek container)
        {
          props: { variant: "section" },
          style: ({ theme }) => ({
            background: theme.palette.background.paper,
            border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
            boxShadow: "none",
            padding: theme.spacing(3),
          }),
        },

        // “Inset” panel (for grouped content inside a section)
        {
          props: { variant: "inset" },
          style: ({ theme }) => ({
            background: alpha(theme.palette.text.primary, 0.03),
            border: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
            boxShadow: "none",
            padding: theme.spacing(2.5),
          }),
        },

        // “Interactive” (hoverable list item / clickable card)
        {
          props: { variant: "interactive" },
          style: ({ theme }) => ({
            background: theme.palette.background.paper,
            border: `1px solid ${alpha(theme.palette.text.primary, 0.10)}`,
            boxShadow: "none",
            padding: theme.spacing(2.5),
            transition: "transform 140ms ease, border-color 140ms ease, background 140ms ease",
            "&:hover": {
              transform: "translateY(-1px)",
              borderColor: alpha(theme.palette.text.primary, 0.16),
              background: alpha(theme.palette.text.primary, 0.015),
            },
            "&:active": { transform: "translateY(0px)" },
            "&:focus-visible": {
              outline: `3px solid ${alpha(theme.palette.primary.main, 0.25)}`,
              outlineOffset: 2,
            },
          }),
        },

        // “Tight” for dense UI
        {
          props: { variant: "tight" },
          style: ({ theme }) => ({
            background: theme.palette.background.paper,
            border: `1px solid ${alpha(theme.palette.text.primary, 0.10)}`,
            boxShadow: "none",
            padding: theme.spacing(2),
          }),
        },
      ],
    },

    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
          border: `1px solid ${alpha(theme.palette.text.primary, 0.10)}`,
          boxShadow: "none",
        }),
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(3),
          "&:last-child": { paddingBottom: theme.spacing(3) },
        }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: () => ({
          textTransform: "none",
          borderRadius: 10,
          fontWeight: 600,
          paddingInline: 10,
          minWidth: 0,
        }),
      },
    },

    MuiAppBar: {
      defaultProps: { elevation: 0, color: "transparent" },
      styleOverrides: {
        root: ({ theme }) => ({
          background: alpha(theme.palette.background.default, 0.85),
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${theme.palette.divider}`,
          color: theme.palette.text.primary,
        }),
      },
    },
  },
});

export default theme;