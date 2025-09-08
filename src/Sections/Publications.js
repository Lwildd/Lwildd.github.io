import React from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import CiteDialog from './CiteDialog';
import { useState } from 'react';
const publications = [
 
  {
    title: 'ArgoTweak: Towards Self-Updating HD Maps through Structured Priors',
    venue: 'ICCV 2025',
    authors: 'L. Wild, R. Valencia, P. Jensfelt',
    description:
      'A dataset and architecture to introduces structured priors for autonomous map update systems, enabling automatic HD map updating.',
    thumbnail: '/argotweak.png',
    links: {
      project: 'https://KTH-RPL.github.io/ArgoTweak',
      dataset: 'https://huggingface.co/datasets/lwild/ArgoTweak',
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
    venue: 'ECCV 2024 Workshops – Vision-Centric Autonomous Driving Workshop (Oral)',
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
  }
];

export default function Publications() {
    const [citeOpen, setCiteOpen] = useState(false);
const [currentBibtex, setCurrentBibtex] = useState('');
  return (
    <Box id="publications" sx={{ pt: 4, pb: 8 }}>
        <CiteDialog
  open={citeOpen}
  onClose={() => setCiteOpen(false)}
  bibtex={currentBibtex}
/>
      <Typography variant="h4" gutterBottom>
        Publications
      </Typography>

      <Stack spacing={4}>
        {publications.map((pub, idx) => (
          <Card key={idx} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow: 3 }}>
            <CardContent sx={{ flex: 1,order: { xs: 1, md: 0 } }}>
              <Typography variant="h7" fontWeight="bold" lineHeight={1}>{pub.title}</Typography>
              <Typography variant="subtitle2" color="text.secondary">
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0, fontStyle: 'italic' }}>
                {pub.authors}
              </Typography>
                {pub.venue}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                {pub.description}
              </Typography>
              <CardActions sx={{ mt: 1, flexWrap: 'wrap' }}>
                {pub.links.github && (
                  <Button
                    size="small"
                    variant="outlined"
                    href={pub.links.github}
                    target="_blank"
                    rel="noopener"
                  >
                    GitHub
                  </Button>
                )}
                {pub.links.project && (
                  <Button
                    size="small"
                    variant="outlined"
                    href={pub.links.project}
                    target="_blank"
                    rel="noopener"
                  >
                    Project
                  </Button>
                )}
                {pub.links.dataset && (
                  <Button
                    size="small"
                    variant="outlined"
                    href={pub.links.dataset}
                    target="_blank"
                    rel="noopener"
                  >
                    Dataset
                  </Button>
                )}
                {pub.links.cite && (
                  <Button
  size="small"
  variant="outlined"
  onClick={() => {
    setCurrentBibtex(pub.links.cite);
    setCiteOpen(true);
  }}
>
  Cite
</Button>
                )}
                {pub.links.arxiv && (
                  <Button
                    size="small"
                    variant="outlined"
                    href={pub.links.arxiv}
                    target="_blank"
                    rel="noopener"
                  >
                    arXiv
                  </Button>
                )}
              </CardActions>
            </CardContent>

            <CardMedia
              component="img"
              sx={{ order: { xs: 0, md: 1 } ,height: "100%", width:{xs:"100%", md:"35%"},objectFit: 'cover',alignSelf: 'center' }}
              image={pub.thumbnail}
              
              alt={`${pub.title} thumbnail`}
            />
          </Card>
        ))}
      
      
      <Card
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    boxShadow: 3,
  }}
>
  {/* Cover image LEFT */}
  <CardMedia
    component="img"
    image={process.env.PUBLIC_URL + '/novel.png'}
    alt="Vorbereiten auf den Zufall – cover"
    sx={{
      width: { xs: '60%', md: "30%" },
      height: 'auto',
      objectFit: 'cover',
      alignSelf: 'center',
      p: 2,
    }}
  />

  {/* Content RIGHT */}
  <CardContent sx={{ flex: 1 }}>
    <Typography variant="body2" fontWeight="">
      Novel
    </Typography>
    <Typography variant="h7" fontWeight="bold">
      Vorbereiten auf den Zufall. Eine Bestandsaufnahme.
    </Typography>

    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0 }}>
      Lena Wild 
    </Typography>
    <Typography variant="subtitle2" color="text.secondary" sx={{ mt:0, mb: 1 }}>
      128 pages, in German 
    </Typography>
    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
      Published in the <em>Zoom-ED</em> series by Edition Raetia, October 2024
    </Typography>

    <Typography variant="body2" sx={{ mb: 2 }}>
      “Vorbereiten auf den Zufall” is an absurdly comic debut novel about a physics professor whose orderly world unravels after a simple student question, leading to a downward spiral of thought avalanches, chanterelle visions, and existential absurdities.
    </Typography>
    <Typography variant="body2" sx={{ mb: 2 }}>
      The book series ZOOM-ED supports debut publications by authors and literary creators from South Tyrol and the surrounding regions.
ZOOM-ED is a funding program of the South Tyrolean Authors’ Association (SAAV) and Edition Raetia.
    </Typography>

    <CardActions>
      <Button
        size="small"
        variant="outlined"
    
        href="https://www.raetia.com/de/zoom-ed/1025-vorbereiten-auf-den-zufall.html"
        target="_blank"
        rel="noopener"
      >
        View on Publisher's website
      </Button>
    </CardActions>
  </CardContent>
</Card>
</Stack>
    </Box>
  );
}