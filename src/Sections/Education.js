import {
  Box, Container, Typography, Stack, Paper, Avatar
} from '@mui/material';

const periods = [
  {
    label: "2023 – present",
    items: [
      { logo: "/logos/kth.png", alt: "KTH", title: "PhD Computer Science", org: "KTH Royal Institute of Technology", subtitle: "since Oct, 2023" },
      { logo: "/logos/stanford.png", alt: "Stanford", title: "Visiting PhD Student", org: "Stanford University", subtitle: "since Sep, 2025" },
    ],
  },
  {
    label: "2021 – 2023",
    items: [
      { logo: "/logos/tu.png", alt: "TU Wien", title: "MSc Technical Physics", org: "Vienna University of Technology", subtitle: "2021 - 2023" },
      { logo: "/logos/uniwien.png", alt: "Uni Wien", title: "MA Philosophy", org: "University of Vienna", subtitle: "2021 - 2023" },
      { logo: "/logos/uniwien.png", alt: "Uni Wien", title: "MA Classical Languages", org: "University of Vienna", subtitle: "2021 - 2023" },
    ],
  },
  {
    label: "2018 – 2021",
    items: [
      { logo: "/logos/tu.png", alt: "TU Wien", title: "BSc Technical Physics", org: "Vienna University of Technology", subtitle: "2018 - 2021" },
      { logo: "/logos/uniwien.png", alt: "Uni Wien", title: "BA Philosophy", org: "University of Vienna", subtitle: "2018 - 2021" },
      { logo: "/logos/uniwien.png", alt: "Uni Wien", title: "BA Classical Languages", org: "University of Vienna", subtitle: "2018 - 2021" },
    ],
  },
];

export default function Education() {
  return (
    <Box id="education" sx={{ py: { xs: 6, md: 8 }, px: {xs:1} }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 3, md: 5 } }}>
          <Box sx={{ width: { xs: '100%', md: 220 }, flexShrink: 0 }}>
            <Typography variant="h4" gutterBottom sx={{mb:{xs:-1}}}>Education</Typography>
          </Box>

          <Box sx={{ flex: 1, minWidth: 0 }}>

            {/* Content under each step */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: `repeat(${periods.length}, minmax(0, 1fr))` },
                gap: 2,
                pl: {xs:1}
              }}
            >
              {periods.map((p) => (
                <Box key={p.label}>
                  <Stack spacing={1.5}>
                    {p.items.map((it, i) => (
                      <Paper key={i} elevation={0} sx={{ bgcolor: 'transparent', p: 0 }}>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Avatar src={it.logo} alt={it.alt} variant="rounded" sx={{ width: 56, height: 56 }} />
                          <Box sx={{ minWidth: 0 }}>
                            {it.subtitle && (
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
                                [{it.subtitle}]
                              </Typography>
                            )}
                            <Typography variant="body2" fontWeight={700} lineHeight={1.2}>
                              {it.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {it.org}
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}