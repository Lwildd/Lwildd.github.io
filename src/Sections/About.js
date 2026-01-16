// Sections/About.js
import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from '@mui/material';
import {  alpha } from "@mui/material/styles";


import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';

import profilePic from '../profile2_lg.png';

function ContactIcons() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleEmailClick = (event) => setAnchorEl(event.currentTarget);
  const handleEmailClose = () => setAnchorEl(null);
  const handleEmailSelect = (email) => {
    window.location.href = `mailto:${email}`;
    handleEmailClose();
  };

  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      <Tooltip title="Email">
        <IconButton onClick={handleEmailClick} aria-label="email">
          <EmailIcon sx={{ fontSize: {xs: 24, sm: 30} }} />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleEmailClose}>
        <MenuItem onClick={() => handleEmailSelect('lwild@kth.se')}>lwild@kth.se</MenuItem>
        <MenuItem onClick={() => handleEmailSelect('lena.wild@se.traton.com')}>
          lena.wild@se.traton.com
        </MenuItem>
      </Menu>

      <Tooltip title="LinkedIn">
        <IconButton
          component="a"
          href="https://linkedin.com/in/wildlena"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin"
        >
          <LinkedInIcon sx={{ fontSize: {xs: 24, sm: 30} }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Google Scholar">
        <IconButton
          component="a"
          href="https://scholar.google.com/citations?user=GUCzqaQAAAAJ&hl=en&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="google scholar"
        >
          <SchoolIcon sx={{ fontSize: {xs: 24, sm: 30} }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

function NewsItem({ date, children, last = false }) {
  return (
    <TimelineItem
      sx={{
        minHeight: 'auto',                 // <-- stop equal-ish heights
        '& .MuiTimelineContent-root': {    // tighten content spacing
          pt: 1,
          mt: 0,
        },
      }}
    >
      <TimelineSeparator
        sx={{
          m: 0,
          p: 0,
        }}
      >
        <TimelineDot color="primary" />
        {!last && <TimelineConnector
          sx={{
            mt: '-6px',   // pull connector into the dot
            mb: '-6px',
          }}
        />}
      </TimelineSeparator>

      <TimelineContent sx={{ pb: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5 }}>
          {/* Date column */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              flex: '0 0 60px',   // set your date column width
              textAlign: 'left',  // looks nice with a timeline
              whiteSpace: 'nowrap',
              lineHeight: 1.4,
            }}
          >
            [{date}]
          </Typography>

          {/* Text column */}
          <Typography variant="body2" sx={{ flex: '1 1 auto', lineHeight: 1.4 }}>
            {children}
          </Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 6, md: 8 } ,px: {xs:1}}}>
      <Container maxWidth="lg">
        {/* HERO ROW */}

        {/* Profile card — LEFT */}
        {/* HERO ROW */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 5 },
            alignItems: 'center',
          }}
        >
          {/* Profile card — LEFT */}
          <Box sx={{ width: { xs: "75%", md: 320 }, flexShrink: 0,  }}>
            <Card sx={{ borderRadius: 1, overflow: 'hidden', bgcolor: {sx: "transparent", md:"#f5f5f5"}, border:{xs: "transparent", md: `1px solid ${alpha('#121212', 0.1)}`} }} elevation={0} variant="outlined">
              <CardMedia component="img" image={profilePic} alt="Lena Wild" sx={{height: {xs: 230, md: "100%"}, borderRadius: {xs:1, md:0}, }}/>
              <CardContent sx={{ textAlign: 'center', }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Lena Wild
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  PhD Student @ KTH / TRATON / WASP
                </Typography>

                <Divider sx={{ my: {xs:1,md:2} }} />
                <ContactIcons />
              </CardContent>
            </Card>
            {/* <Card
              sx={{
                borderRadius: { xs: 2, sm: 3 },
                overflow: "hidden",
                bgcolor: "#f5f5f5",
              }}
              elevation={0}
              variant="outlined"
            >
              <Stack
                direction={{ xs: "row", sm: "column" }}
                alignItems="stretch"
              >
                <CardMedia
                  component="img"
                  image={profilePic}
                  alt="Lena Wild"
                  sx={{
                    width: { xs: "60%", sm: "100%" },
                    height: { xs: "auto" },
                    objectFit: "cover",
                  }}
                />

                <CardContent
                  sx={{
                    textAlign: { xs: "left", sm: "center" },
                    flex: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Lena Wild
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    PhD Student @
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    KTH / TRATON / WASP
                  </Typography>

                  <Divider
                    sx={{
                      my: 2,
                      display: { xs: "block", sm: "block" },
                    }}
                  />

                  <Box
                    sx={{
                      mt: { xs: 1, sm: 0 },
                      display: "flex",
                      justifyContent: { xs: "flex-start", sm: "center" },
                    }}
                  >
                    <ContactIcons />
                  </Box>
                </CardContent>
              </Stack>
            </Card> */}
          </Box>

          {/* About text — RIGHT */}
          <Box sx={{ flex: 1, minWidth: 0 }}>

            {/* About text — RIGHT */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                About Me
              </Typography>

              <Typography variant='body1'paragraph>
                I am an industrially employed PhD student at  <strong><Link href="https://traton.com/en.html" target="_blank" rel="noopener noreferrer">TRATON Group</Link></strong>  and the <strong>Division of Robotics, Perception and Learning</strong> at <strong>KTH Royal Institute of Technology</strong>,
                advised by <Link href="https://www.kth.se/profile/patric" target="_blank" rel="noopener noreferrer"><strong>Patric Jensfelt</strong></Link> as academic and <Link href="https://sites.google.com/site/rafaelvalenciacarreno/home" target="_blank" rel="noopener noreferrer"><strong>Rafael Valencia</strong></Link> as industrial supervisor. My research focuses on
                <strong> map learning for autonomous driving</strong>, specifically road perception,
                integration of prior knowledge in end-to-end explainable deep learning systems and map-centered reasoning.
              </Typography>
              <Typography paragraph>
                In September 2025, I joined the{' '}
                <strong>
                  <Link href="https://stanfordasl.github.io/" target="_blank" rel="noopener noreferrer">
                    Autonomous Systems Lab
                  </Link>
                </strong>{' '}
                led by <strong>Prof. Marco Pavone</strong> at <strong>Stanford University</strong> as a visiting
                PhD student. In January 2025, I joined the <strong><Link href="https://wasp-sweden.org/" target="_blank" rel="noopener noreferrer">Wallenberg AI, Autonomous Systems and Software Program (WASP)</Link></strong>  as an affiliated industrial PhD student.
              </Typography>

              <Typography paragraph>
                Prior to my doctoral studies, I completed a Bachelor's and Master's in Technical Physics
                at <strong>Vienna University of Technology</strong>, writing my thesis in collaboration with CERN
                on machine learning for likelihood-free inference. Additionally, I hold two Bachelor's and two Master's degrees in Philosophy and Classical Languages
                from the <strong>University of Vienna</strong>. My academic path bridges deep learning, engineering,
                physics, and the humanities.
              </Typography>
            </Grid>

            {/* NEWS SECTION (full width, feels intentional) */}
            <Box sx={{ mt: { xs: 5, md: 4 } }}>
              <Typography variant="h7" sx={{ fontWeight: 800 }}>
                News
              </Typography>

              <Box
                sx={{
                  borderRadius: 3,

                  px: { xs: 1, md: 2 },
                  py: { xs: 1, md: 1 },
                }}
              >
                <Timeline
                  position="right"
                  sx={{
                    m: 0,
                    p: 0,
                    '& .MuiTimelineItem-root:before': { flex: 0, padding: 0 }, // removes awkward left gutter
                  }}
                >
                  <NewsItem date="Sep 2025">
                    Joined the{' '}
                    <strong>
                      <Link href="https://stanfordasl.github.io/" target="_blank" rel="noopener noreferrer">
                        Autonomous Systems Lab
                      </Link>
                    </strong>{' '}
                    led by <strong>Prof. Marco Pavone</strong> at <strong>Stanford University</strong> as a visiting
                    PhD student.
                  </NewsItem>

                  <NewsItem date="Jul 2025">
                    Transitioned from <strong>Scania Autonomous Solutions</strong> to <strong>TRATON</strong>{' '}
                    following group reorganization.
                  </NewsItem>

                  <NewsItem date="Jun 2025">Our paper has been accepted to <strong>ICCV 2025</strong>.</NewsItem>

                  <NewsItem date="Jan 2025">
                    Joined <strong>WASP</strong> as an affiliated industrial PhD student.
                  </NewsItem>

                  <NewsItem date="Oct 2024" last>
                    My first novel <strong>&quot;Vorbereiten auf den Zufall&quot;</strong> has been published! ✨
                  </NewsItem>
                </Timeline>
              </Box>
            </Box>
          </Box>
        </Box>



      </Container>
    </Box>
  );
}