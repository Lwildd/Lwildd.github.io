// Sections/Experience.js
import React from 'react';
import {
  Avatar,
  Box,
  Container,
  Typography,
  Stack,
  Paper,
} from '@mui/material';

const experiences = [
    {
    title: 'Industrial PhD Student',
    company: 'TRATON, Södertälje (SE)',
    period: 'Jul 2025 – present',
    description: `PhD at KTH in collaboration with TRATON/Scania Autonomous Transportation Solutions. Research on explainable end-to-end map learning for autonomous driving, with WASP affiliation.`,
    logo: '/logos/traton.png',
  },
    {
    title: 'Industrial PhD Student',
    company: 'Scania Autonomous Solutions, Södertälje (SE)',
    period: 'Oct 2023 – Jun 2025',
    description: ``,
    logo: '/logos/scania.svg',
  },
    {
    title: 'Affiliated PhD Student',
    company: 'WASP Wallenberg AI, Autonomous Systems and Software Program',
    period: 'Jan 2025 – present',
    description: ``,
    logo: '/logos/wasp.png',
  },
  {
  title: 'Associate Member during my thesis (MSc Physics)',
  company: 'CERN & Austrian Academy of Sciences (ÖAW)',
  period: 'Oct 2022 – Jul 2023',
  description: `Conducted master's thesis on likelihood-free inference using advanced machine learning techniques, in collaboration with CERN and ÖAW.`,
  logo: '/logos/cern.png',
},
  {
    title: 'Internship in R&D',
    company: 'TechnoAlpin, Bolzano (IT)',
    period: 'July 2023 – September 2023',
    description: `Modelled how water reservoir design influences bubble-induced convection; optimized design choices using data-driven cooling cycle analysis.`,
    logo: '/logos/technoalpin.png',
  },
  {
    title: 'Internship in R&D',
    company: 'TechnoAlpin, Bolzano (IT)',
    period: 'July 2022 – August 2022',
    description: `Investigated how the reservoir’s cooling system could help melt surface ice via temperature gradients to prevent damage.`,
    logo: '/logos/technoalpin.png',
  },
  {
    title: 'Teaching Assistant',
    company: 'University of Vienna (AT)',
    period: 'Dec 2021 – Mar 2022',
    description: ``,
    logo: '/logos/uniwien.png',
  },
  {
    title: 'Internship in R&D',
    company: 'Fraunhofer Research Italia, Bolzano (IT)',
    period: 'July 2021 – August 2021',
    description: `Installed hand-tracking on Luxonis Oak-D AI-Camera, trained and tested custom object recognition models.`,
    logo: '/logos/fraunhofer.png',
  },
  {
    title: 'Internship in R&D',
    company: 'Fraunhofer Research Italia, Bolzano (IT)',
    period: 'July 2020 – August 2020',
    description: `Collaborated on human-robot-interaction project involving interactive table game.`,
    logo: '/logos/fraunhofer.png',
  },
];

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: { xs: 6, md: 8 },px: {xs:0.75}, bgcolor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        {/* HERO ROW */}
        
          {/* Profile card — LEFT */}
          {/* HERO ROW */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 5 },
              alignItems: 'flex-start',
            }}
          >
            {/* Profile card — LEFT */}
       
            <Box sx={{ width: { xs: '100%', md: 220 }, flexShrink: 0 }}>
      <Typography variant="h4" gutterBottom sx={{pl: {xs:0.25}, mb: {xs:-1}}}>Experiences & Affiliations </Typography></Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
      <Stack spacing={{ xs: 1.5, sm: 2, md: 3 }}>
        {experiences.map((exp, idx) => (
          <Paper variant='section' key={idx} sx={{ p: {xs:1.5, md:2} , boxShadow:0, variant:"card"}}>
            <Box display="flex" gap={2} >
              {/* Logo avatar */}
              <Avatar
                src={exp.logo}
                alt={exp.company}
                sx={{ width: 56, height: 56,mt:0.3 }}
                variant="rounded"
              />
              {/* Experience content */}
              <Box sx={{mt:-0.3}}>
                <Typography
                                          variant="caption"
                                          color="text.secondary"
                                          sx={{
                                            flex: '0 0 10px',   // set your date column width
                                            textAlign: 'left',  // looks nice with a timeline
                                            whiteSpace: 'wrap',
                                            mt:-0.3,
                                            lineHeight: 1.4,
                                          }}
                                        >
                                          [{exp.period}]
                                        </Typography>
                 <Typography variant="body2" fontWeight={700} lineHeight={1.2}>
                              {exp.company}
                            </Typography>
                <Typography variant="body2"  color="text.secondary" >{exp.title}</Typography>
                {exp.description && (
                  <Typography variant="body2" mt={1}>
                    {exp.description}
                  </Typography>
                )}
              </Box>
            </Box>
          </Paper>
        ))}
      </Stack></Box>
    </Box></Container></Box>
  );
}