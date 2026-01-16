import React from 'react';
import {
  Box,
  Typography,
  Button,
  Stack, Divider,
  Card,
  CardMedia,
  IconButton, Tooltip,
  Container,
  CardContent,
  CardActions,
} from '@mui/material';
import CiteDialog from './CiteDialog';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';   // Project
import StorageIcon from '@mui/icons-material/Storage';     // Dataset
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'; // Cite
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const actionIconSx = {
  p: 0.5,              // smaller padding than default
  '& .MuiSvgIcon-root': { fontSize: { xs: 19, md: 24 } }, // icon size
};
const publications = [

  {
    title: 'ArgoTweak: Towards Self-Updating HD Maps through Structured Priors',
    venue: 'ICCV 2025',
    authors: 'L. Wild, R. Valencia, P. Jensfelt',
    description:
      'A dataset and architecture to introduce structured priors for autonomous map update systems, enabling automatic HD map updating.',
    thumbnail: '/argotweak.png',
    links: {
      project: 'https://KTH-RPL.github.io/ArgoTweak',
      github: 'https://github.com/KTH-RPL/ArgoTweak_baselines',
      // dataset: 'https://huggingface.co/datasets/lwild/ArgoTweak',
      arxiv: "https://arxiv.org/abs/2509.08764",
      cite: `@inproceedings{wild2025argotweak,
    title={ArgoTweak: Towards Self-Updating HD Maps through Structured Priors},
    author={Lena Wild and Rafael Valencia and Patric Jensfelt},
    booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)},
    year={2025}
  }`
    },
  },
  {
    title: 'ExelMap: Explainable Element-based HD-Map Change Detection and Update',
    venue: 'ECCV 2024 Workshops – Vision-Centric Autonomous Driving Workshop',
    authors: 'L. Wild, L. Ericson, R. Valencia, P. Jensfelt',
    description:
      'A framework for explainable change detection and map updating in HD maps using element-based representations.',
    thumbnail: '/exelmap.png',
    links: {
      cite: `@article{wild2024exelmap,
    title={ExelMap: Explainable Element-based HD-Map Change Detection and Update},
    author={Wild, Lena and Ericson, Ludvig and Valencia, Rafael and Jensfelt, Patric},
    journal={arxiv},
    year={2024}
  }`,
      arxiv: 'https://arxiv.org/pdf/2409.10178',
    },
  },
  {
    title: 'Coherent Perfect Absorption of Arbitrary Wavefronts at an Exceptional Point',
    venue: 'Physical Review Letters 133 (17), 173801, 2024',
    authors: 'H. Hörner, L. Wild, Y. Slobodkin, G. Weinberg, O. Katz, S. Rotter',
    description:
      'A new type of cavity design for broadband exceptional-point absorption of arbitrary wavefronts.',
    thumbnail: '/mapcpa.png',
    links: {
      cite: `@article{PhysRevLett.133.173801,
    title = {Coherent Perfect Absorption of Arbitrary Wavefronts at an Exceptional Point},
    author = {Hörner, Helmut and Wild, Lena and Slobodkin, Yevgeny and Weinberg, Gil and Katz, Ori and Rotter, Stefan},
    journal = {Phys. Rev. Lett.},
    volume = {133},
    issue = {17},
    pages = {173801},
    numpages = {6},
    year = {2024},
    month = {Oct},
    publisher = {American Physical Society},
    doi = {10.1103/PhysRevLett.133.173801},
    url = {https://link.aps.org/doi/10.1103/PhysRevLett.133.173801}
  }
  `,
      arxiv: 'https://arxiv.org/pdf/2404.04151',
    },
  }
];

export default function Publications() {
  const [citeOpen, setCiteOpen] = useState(false);
  const [currentBibtex, setCurrentBibtex] = useState('');
  return (
    <Box id="publications" sx={{ py: { xs: 6, md: 8, }, px: { xs: 0.75 }, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
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
          <CiteDialog
            open={citeOpen}
            onClose={() => setCiteOpen(false)}
            bibtex={currentBibtex}
          />
          <Box sx={{ width: { xs: '100%', md: 220 }, mb: { xs: -2 }, pl: 0.25, flexShrink: 0 }}>
            <Typography variant="h4" gutterBottom sx={{ py: { xs: 0 }, }}>
              Publications
            </Typography></Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Stack spacing={{ xs: 1.5, sm: 2, md: 3 }}>
              {publications.map((pub, idx) => (
                <Card
                  key={idx}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    boxShadow: 0,
                    alignItems: 'stretch',
                  }}
                >

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'row', md: 'column' },
                      justifyContent: { xs: 'flex-end', md: 'start' },
                      alignItems: 'center',
                      gap: { xs: 0.5, md: 0 },
                      px: { xs: 1, md: 1 },
                      py: { xs: 0.5, md: 3 },
                      order: { xs: 3, md: 0 },
                      flexWrap: { xs: 'wrap', md: 'nowrap' },
                    }}
                  >
                    {pub.links.github && (
                      <Tooltip title="GitHub">
                        <IconButton
                          sx={actionIconSx}
                          component="a"
                          href={pub.links.github}
                          target="_blank"
                          rel="noopener"
                        >
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>
                    )}

                    {pub.links.project && (
                      <Tooltip title="Project">
                        <IconButton
                          sx={actionIconSx}
                          component="a"
                          href={pub.links.project}
                          target="_blank"
                          rel="noopener"
                        >
                          <LanguageIcon />
                        </IconButton>
                      </Tooltip>
                    )}

                    {pub.links.dataset && (
                      <Tooltip title="Dataset">
                        <IconButton
                          sx={actionIconSx}
                          component="a"
                          href={pub.links.dataset}
                          target="_blank"
                          rel="noopener"
                        >
                          <StorageIcon />
                        </IconButton>
                      </Tooltip>
                    )}

                    {pub.links.arxiv && (
                      <Tooltip title="arXiv">
                        <IconButton
                          sx={actionIconSx}
                          component="a"
                          href={pub.links.arxiv}
                          target="_blank"
                          rel="noopener"
                        >
                          <InsertDriveFileIcon />
                        </IconButton>
                      </Tooltip>
                    )}

                    {pub.links.cite && (
                      <Tooltip title="Cite">
                        <IconButton
                          sx={actionIconSx}
                          onClick={() => {
                            setCurrentBibtex(pub.links.cite);
                            setCiteOpen(true);
                          }}
                        >
                          <FormatQuoteIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                 
                  {/* Desktop */}
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ display: { xs: 'none', md: 'block' }, mr: 1, ml: 0 }}
                  />
                  <CardContent sx={{ flex: 1, px: { xs: 1.5, md: 2 }, py: { xs: 1, md: 2 }, order: { xs: 1, md: 0 } }}>
                    
                    <Typography variant="h7" fontWeight="bold" lineHeight={1}>{pub.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0, fontStyle: 'italic' }}>
                      {pub.authors}
                    </Typography >
                    <Typography variant="body2" color="text.secondary">
                      {pub.venue}
                    </Typography>
                    <Typography variant="body2" sx={{}}>
                      {pub.description}
                    </Typography>

                  </CardContent>
                  <CardMedia
                    component="img"
                    image={pub.thumbnail}
                    alt={`${pub.title} thumbnail`}
                    sx={{
                      width: { xs: '100%', md: '30%' },
                      maxHeight: { xs: 280, sm: 200, md: 'none' },
                      objectFit: 'contain',
                      order: { xs: 0, md: 1 }, // optional: put image after text on mobile
                    }}
                  />
                   {/* Mobile */}
                  



                </Card>
              ))}


              <Card
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  boxShadow: 0,
                }}
              >
                {/* Cover image LEFT */}
                <CardMedia
                  component="img"
                  image={process.env.PUBLIC_URL + '/novel.png'}
                  alt="Vorbereiten auf den Zufall – cover"
                  sx={{
                    width: { xs: '50%', md: "24%" },
                    height: 'auto',
                    objectFit: 'fit',
                    alignSelf: 'center',
                    p: 2,
                    pb:{xs:0, md:2} 
                  }}
                />

                {/* Content RIGHT */}
                <CardContent sx={{ flex: 1, px: { xs: 1.5, md: 2 }, py: { xs: 1, md: 2 }, }}>
                  <Typography variant="body2" fontWeight="">
                    Novel
                  </Typography>
                  <Typography variant="h7" fontWeight="bold">
                    Vorbereiten auf den Zufall. Eine Bestandsaufnahme.
                  </Typography>

                  <Typography variant="body1" color="text.secondary" sx={{ mb: 0 }}>
                    Lena Wild
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0, mb: 1 }}>
                    128 pages, in German
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Published in the <em>Zoom-ED</em> series by Edition Raetia, October 2024
                  </Typography>

                  <Typography variant="body2" sx={{ mb: {xs:1, md:2} }}>
                    “Vorbereiten auf den Zufall” is an absurdly comic debut novel about a physics professor whose orderly world unravels after a simple student question, leading to a downward spiral of thought avalanches, chanterelle visions, and existential absurdities.
                  </Typography>
                  <Typography variant="body2" sx={{  mb: {xs:1, md:2} }}>
                    The book series ZOOM-ED supports debut publications by authors and literary creators from South Tyrol and the surrounding regions.
                    ZOOM-ED is a funding program of the South Tyrolean Authors’ Association (SAAV) and Edition Raetia.
                  </Typography>

                  <CardActions sx={{justifyContent: {xs:"center", md: "flex-end"}, my:0, py:0}}>
                    <Button
                      size="small"
                      variant="outlined"
                    sx={{mb:-1}}
                      href="https://www.raetia.com/de/zoom-ed/1025-vorbereiten-auf-den-zufall.html"
                      target="_blank"
                      rel="noopener"
                    >
                      <Typography>View on Publisher's website</Typography>
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Stack></Box>
        </Box></Container></Box>
  );
}