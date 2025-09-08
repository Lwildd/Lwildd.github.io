// Sections/About.js
import {
  Box,
  Link,
  Stack,
  Typography
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Paper } from '@mui/material';
import profilePic from '../profile2.png';
import React, { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  Tooltip
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; // For Google Scholar
function ContactIcons() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleEmailClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEmailClose = () => {
    setAnchorEl(null);
  };

  const handleEmailSelect = (email) => {
    window.location.href = `mailto:${email}`;
    handleEmailClose();
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center" mt={0}>
      {/* Email Icon with menu */}
      <Tooltip title="Email">
        <IconButton onClick={handleEmailClick}>
          <EmailIcon color="info" sx={{ fontSize: 36 }} />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleEmailClose}>
        <MenuItem onClick={() => handleEmailSelect('lwild@kth.se')}>lwild@kth.se</MenuItem>
        <MenuItem onClick={() => handleEmailSelect('lena.wild@se.traton.com')}>lena.wild@se.traton.com</MenuItem>
      </Menu>

      {/* LinkedIn Icon */}
      <Tooltip title="LinkedIn">
        <IconButton
          component="a"
          href="https://linkedin.com/in/wildlena"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ p: 1 }} // optional padding
        >
          <LinkedInIcon color="primary" sx={{ fontSize: 36 }} />
        </IconButton>
      </Tooltip>

      {/* Google Scholar Icon */}
      <Tooltip title="Google Scholar">
        <IconButton
          component="a"
          href="https://scholar.google.com/citations?user=GUCzqaQAAAAJ&hl=en&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SchoolIcon color="secondary" sx={{ fontSize: 36 }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default function About() {
  return (
    <>
      <Box
        id="about"
        sx={{
          pt: { xs: 0, md: 8 },
          pb: 4,
          display: 'flex',
          gap: 6,
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        {/* RIGHT COLUMN – Bio and Academic Summary */}
        <Box sx={{ flex: 1, order: { xs: 1, md: 0 } }}>
          <Typography variant="h4" gutterBottom>About</Typography>

          <Typography paragraph>
            I am an industrially employed PhD student at  <strong><Link href="https://traton.com/en.html" target="_blank" rel="noopener noreferrer">TRATON Group</Link></strong>  and the <strong>Division of Robotics, Perception and Learning</strong> at <strong>KTH Royal Institute of Technology</strong>,
            advised by <Link href="https://www.kth.se/profile/patric" target="_blank" rel="noopener noreferrer"><strong>Patric Jensfelt</strong></Link> as academic and <Link href="https://sites.google.com/site/rafaelvalenciacarreno/home" target="_blank" rel="noopener noreferrer"><strong>Rafael Valencia</strong></Link> as industrial supervisor. My research focuses on
            <strong> end-to-end explainable map learning for autonomous driving</strong>, with a broader interest in road perception,
            and integration of prior knowledge in deep learning systems.
          </Typography>
          <Typography paragraph>
            In January 2025, I joined the <strong><Link href="https://wasp-sweden.org/" target="_blank" rel="noopener noreferrer">Wallenberg AI, Autonomous Systems and Software Program (WASP)</Link></strong>  as an affiliated industrial PhD student. Prior to my doctoral studies, I completed a Bachelor's and Master's in Technical Physics
            at <strong>Vienna University of Technology</strong>, writing my thesis in collaboration with CERN
            on machine learning for likelihood-free inference.
          </Typography>

          <Typography paragraph>
            Additionally, I hold two Bachelor's and two Master's degrees in Philosophy and Classical Languages
            from the <strong>University of Vienna</strong>. My academic path bridges deep learning, engineering,
            physics, and the humanities.
          </Typography>
        </Box>
        {/* LEFT COLUMN – Profile & Contact */}

        <Box
          sx={{
            //minWidth: 250,
            maxWidth: { xs: '60%', md: 280 },
            flexShrink: 0,
            width: { xs: '100%', md: 'auto' },
            order: { xs: 0, md: 1 }, // show first on mobile
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
            <Box
              component="img"
              src={profilePic}
              alt="Lena Wild"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                objectFit: 'cover',
                mb: 2,
                p: 0
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Lena Wild</Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              PhD Student @ KTH / TRATON / WASP
            </Typography>
          </Box>

          <ContactIcons />
        </Box>



      </Box>
      {/* News Subsection */}
      {/* News Subsection */}
      <Box sx={{ mt: 0, pt: 0, width: '100%' }}>
        <Typography variant="h5" gutterBottom>News</Typography>

        <Timeline position="right" sx={{ ml: { xs: -35, md: -100 } }}>

          {/* Stanford */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper variant='contained' elevation={2} sx={{ bgcolor: "transparent", p: 2, pt: 0, mr: 0 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  September 1, 2025
                </Typography>
                <Typography variant="body2">
                  Joined the <strong><Link href="https://stanfordasl.github.io/" target="_blank" rel="noopener noreferrer">Autonomous Systems Lab</Link></strong> led by <strong>Prof. Marco Pavone</strong> at <strong>Stanford University</strong> as a visiting PhD student.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          {/* TRATON */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper variant='contained' elevation={2} sx={{ bgcolor: "transparent", p: 2, pt: 0, mr: 0 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  July 1, 2025
                </Typography>
                <Typography variant="body2">
                  Transitioned from <strong>Scania Autonomous Solutions</strong> to <strong>TRATON</strong> following group reorganization.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          {/* ICCV */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper variant='contained' elevation={2} sx={{ bgcolor: "transparent", p: 2, pt: 0 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  June 2025
                </Typography>
                <Typography variant="body2">
                  Our paper has been accepted to <strong>ICCV 2025</strong>.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          {/* WASP */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper variant='contained' elevation={2} sx={{ bgcolor: "transparent", p: 2, pt: 0 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  January 2025
                </Typography>
                <Typography variant="body2">
                  Joined <strong>WASP</strong> as an affiliated industrial PhD student.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />

            </TimelineSeparator>
            <TimelineContent>
              <Paper variant='contained' elevation={2} sx={{ bgcolor: "transparent", p: 2, pt: 0 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  October 2024
                </Typography>
                <Typography variant="body2">
                  My first novel <strong>"Vorbereiten auf den Zufall"</strong> has been published! ✨
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

        </Timeline>
      </Box>
    </>
  );
}