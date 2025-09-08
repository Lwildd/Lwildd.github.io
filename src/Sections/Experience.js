// Sections/Experience.js
import React from 'react';
import {
  Avatar,
  Box,
  Typography,
  Stack,
  Paper,
} from '@mui/material';

const experiences = [
    {
    title: 'Industrial PhD Researcher',
    company: 'TRATON Autonomous Solutions (Scania)',
    period: 'Oct 2023 – present',
    description: `PhD at KTH in collaboration with TRATON/Scania Autonomous Transportation Solutions. Research on explainable end-to-end map learning for autonomous driving, with WASP affiliation.`,
    logo: '/logos/traton.png',
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
    <Box id="experience" sx={{ pt: 0, pb: {xs:2, md:2}, mt:0}}>
      <Typography variant="h4" gutterBottom sx={{ mt:8}}>Experience and Affiliations </Typography>
      <Stack spacing={3}>
        {experiences.map((exp, idx) => (
          <Paper key={idx} elevation={3} sx={{ p: 2 }}>
            <Box display="flex" gap={2}>
              {/* Logo avatar */}
              <Avatar
                src={exp.logo}
                alt={exp.company}
                sx={{ width: 56, height: 56 }}
                variant="rounded"
              />
              {/* Experience content */}
              <Box>
                <Typography variant="h7" fontWeight={"bold"}>{exp.title}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {exp.company} &bull; {exp.period}
                </Typography>
                {exp.description && (
                  <Typography variant="body2" mt={1}>
                    {exp.description}
                  </Typography>
                )}
              </Box>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}