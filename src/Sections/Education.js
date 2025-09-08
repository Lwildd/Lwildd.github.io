// Sections/Education.js
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Box,
  Typography,
  Paper,
  Avatar
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

export default function Education() {
    const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
const timelinePosition = isMobile ? 'right' : 'alternate';
  return (
    <Box id="education" sx={{ pt: 2, pb: 2 }}>
      <Typography variant="h4" gutterBottom>Education</Typography>

     {!isMobile&& <Timeline position={timelinePosition} sx={{ml:{xs:-35, md:"auto"}}}>
        {/* PhD */}
        <TimelineItem>
  {!isMobile&&<TimelineOppositeContent color="text.secondary">
    <Typography >2023 – present</Typography>
  </TimelineOppositeContent>}

  <TimelineSeparator>
    <TimelineDot color="info" />
    <TimelineConnector />
  </TimelineSeparator>

  <TimelineContent>
    <Box sx={{ position: 'relative' }}>
      
     <Paper variant="contained" elevation={3} sx={{bgcolor:"transparent", p: 2 ,pt:0,}}>
  <Box display="flex" alignItems="center" gap={2}>
    {true&&<Avatar
      src="/logos/kth.png"
      alt="KTH"
      variant="rounded"
      sx={{ width: 56, height: 56  }}
    />}
    <Box>
    {isMobile&& <Typography variant='body2' fontSize={12}>2023 – present</Typography>}
      <Typography variant="h7" fontWeight="bold">PhD Computer Science</Typography>
      <Typography variant="body2">KTH Royal Institute of Technology</Typography>
    </Box>
  </Box>
  <Paper variant="contained" elevation={3} sx={{bgcolor:"transparent", p: 2 ,pt:0,}}></Paper>
    <Box display="flex" alignItems="center" gap={2} >
    {true&&<Avatar
      src="/logos/stanford.png"
      alt="KTH"
      
      variant="rounded"
      sx={{ width: 56, height: 56, backgroundColor:"white"  }}
      />}
    <Box>
      <Typography variant='caption'display="block" sx={{fontWeight:"normal", mt:-1, }}>since Sep 1, 2025</Typography>
  
    
      <Typography variant="h7" fontWeight="bold">Visiting PhD Student</Typography>
      <Typography variant="body2">Stanford University</Typography>
    </Box>
  </Box>
</Paper>
    </Box>
  </TimelineContent>
</TimelineItem>

      {/* 2021–2023: MSc + MA + MA */}
<TimelineItem>
  {!isMobile&&<TimelineOppositeContent color="text.secondary">
    2021 – 2023
  </TimelineOppositeContent>}

  <TimelineSeparator>
    <TimelineDot color="primary" />
    <TimelineConnector />
  </TimelineSeparator>

  <TimelineContent>
    <Box>
      {/* MSc */}
      <Paper variant="contained" elevation={3} sx={{ bgcolor:"transparent",p: 2, pt:0,mb: -1 }}>
        <Box display="flex" alignItems="center" gap={2}>
  <Box sx={{ flexGrow: 1 }}>
    {isMobile&& <Typography variant='body2' fontSize={12}>2021 – 2023</Typography>}
    <Typography variant="h7" fontWeight="bold">MSc Technical Physics</Typography>
    <Typography variant="body2">Vienna University of Technology</Typography>
  </Box>
   {true&&<Avatar
    src="/logos/tu.png"
    alt="TU Wien"
    variant="rounded"
    sx={{ width: 56, height: 56 }}
  />}
</Box>
      </Paper>

      {/* MA Philosophy */}
      <Paper variant="contained" elevation={3} sx={{ bgcolor:"transparent",p: 2,  mb: -1, mr: 0 }}>
        <Box display="flex" alignItems="center" gap={2}>
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h7" fontWeight="bold">MA Philosophy</Typography>
            <Typography variant="body2">University of Vienna</Typography>
          </Box>
          {true&&<Avatar
            src="/logos/uniwien.png"
            alt="University of Vienna"
            variant="rounded"
            sx={{ width: 56, height: 56 }}
          />}
        </Box>
      </Paper>

      {/* MA Classical Languages */}
      <Paper variant="contained" elevation={3} sx={{ bgcolor:"transparent",p: 2, mr: 0 }}>
        <Box display="flex" alignItems="center" gap={2}>
           <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h7" fontWeight="bold">MA Classical Languages</Typography>
            <Typography variant="body2">University of Vienna</Typography>
          </Box>
          {true&&<Avatar
            src="/logos/uniwien.png"
            alt="University of Vienna"
            variant="rounded"
            sx={{ width: 56, height: 56 }}
          />}
        </Box>
      </Paper>
    </Box>
  </TimelineContent>
</TimelineItem>

{/* 2018–2021: BSc + BA + BA */}
<TimelineItem>
  {!isMobile&&<TimelineOppositeContent color="text.secondary">
    2018 – 2021
  </TimelineOppositeContent>}

  <TimelineSeparator>
    <TimelineDot color="secondary" />
    <TimelineConnector />
  </TimelineSeparator>

  <TimelineContent>
    <Box>
      {/* BSc */}
      <Paper variant="contained" elevation={3} sx={{ bgcolor:"transparent",p: 2, pt:0,mb: -1, zIndex: 3 }}>
        <Box display="flex" alignItems="center" gap={2}>
          {true&&<Avatar
            src="/logos/tu.png"
            alt="TU Wien"
            variant="rounded"
            sx={{ width: 56, height: 56 }}
          />}
          <Box>
             {isMobile&& <Typography variant='body2' fontSize={12}>2018 – 2021</Typography>}
            <Typography variant="h7" fontWeight="bold">BSc Technical Physics</Typography>
            <Typography variant="body2">Vienna University of Technology</Typography>
          </Box>
        </Box>
      </Paper>

      {/* BA Philosophy */}
      <Paper variant="contained" elevation={3} sx={{bgcolor:"transparent", p: 2, mb: -1, ml: 0, zIndex: 2 }}>
        <Box display="flex" alignItems="center" gap={2}>
          {true&&<Avatar
            src="/logos/uniwien.png"
            alt="University of Vienna"
            variant="rounded"
            sx={{ width: 56, height: 56 }}
          />}
          <Box>
            <Typography variant="h7" fontWeight="bold">BA Philosophy</Typography>
            <Typography variant="body2">University of Vienna</Typography>
          </Box>
        </Box>
      </Paper>

      {/* BA Classical Languages */}
      <Paper variant="contained" elevation={3} sx={{bgcolor:"transparent", p: 2, ml: 0, zIndex: 1 }}>
        <Box display="flex" alignItems="center" gap={2}>
          {true&&<Avatar
            src="/logos/uniwien.png"
            alt="University of Vienna"
            variant="rounded"
            sx={{ width: 56, height: 56 }}
          />}
          <Box>
            <Typography variant="h7" fontWeight="bold">BA Classical Languages</Typography>
            <Typography variant="body2">University of Vienna</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  </TimelineContent>
</TimelineItem>
      </Timeline>}
      {isMobile&& <Timeline position={timelinePosition} sx={{ml:{xs:-35, md:"auto"}, p:1}}>
        {/* PhD */}
        <TimelineItem>
  
  <TimelineSeparator>
    <TimelineDot color="info" />
    <TimelineConnector />
  </TimelineSeparator>

  <TimelineContent>
    <Box sx={{ position: 'relative' }}>
      
     <Paper variant="contained" elevation={3} sx={{bgcolor:"transparent", p: 0 ,pt:0,mb:0}}>
  <Box display="flex" alignItems="center" gap={2}>
    {true&&<Avatar
      src="/logos/kth.png"
      alt="KTH"
      variant="rounded"
      sx={{ width: 56, height: 56  }}
    />}
    <Box>
    {isMobile&& <Typography variant='body2' fontSize={12}>2023 – present</Typography>}
      <Typography variant="h7" fontWeight="bold">PhD Computer Science</Typography>
      <Typography variant="body2" fontSize={"9pt"} >KTH Royal Institute of Technology</Typography>
    </Box>
  </Box>
  </Paper>
     <Paper variant="contained" elevation={3} sx={{ bgcolor:"transparent",p: 0, pt:1,  mb: 2, mr: 0 }}>
   <Box display="flex" alignItems="center" gap={2} >
    {true&&<Avatar
      src="/logos/stanford.png"
      alt="KTH"
      
      variant="rounded"
      sx={{ width: 56, height: 56, backgroundColor:"white"  }}
      />}
    <Box>
     {isMobile&& <Typography variant='body2' fontSize={12}>since Sep 1, 2025</Typography>}
      <Typography variant="h7" fontWeight="bold">Visiting PhD Student</Typography>
      <Typography variant="body2" fontSize={"9pt"}>Stanford University</Typography>
    </Box>
  </Box>
    </Paper>

    </Box>
    
  </TimelineContent>
</TimelineItem>

      {/* 2021–2023: MSc + MA + MA */}
<TimelineItem>


  <TimelineSeparator>
    <TimelineDot color="primary" />
    <TimelineConnector />
  </TimelineSeparator>

  <TimelineContent>
    <Box>
      {/* MSc */}
      <Paper variant="contained" elevation={3} sx={{ bgcolor:"transparent",p: 0, pt:0,mb: -1 }}>
        <Box display="flex" alignItems="center" gap={2}>
   {true&&<Avatar
    src="/logos/tu.png"
    alt="TU Wien"
    variant="rounded"
    sx={{ width: 56, height: 56 }}
  />}
  <Box sx={{ flexGrow: 1 }}>
    {isMobile&& <Typography variant='body2' fontSize={12}>2021 – 2023</Typography>}
    <Typography variant="h7" fontWeight="bold">MSc Technical Physics</Typography>
    <Typography variant="body2" fontSize={"9pt"}>Vienna University of Technology</Typography>
  </Box>
</Box>
      </Paper>

      {/* MA Philosophy */}
      <Paper variant="contained" elevation={3} sx={{ bgcolor:"transparent",p: 0, pt:2,  mb: -1, mr: 0 }}>
        <Box display="flex" alignItems="center" gap={2}>
          {true&&<Avatar
            src="/logos/uniwien.png"
            alt="University of Vienna"
            variant="rounded"
            sx={{ width: 56, height: 56 }}
          />}
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h7" fontWeight="bold">MA Philosophy</Typography>
            <Typography variant="body2" fontSize={"9pt"}>University of Vienna</Typography>
          </Box>
        </Box>
      </Paper>

      {/* MA Classical Languages */}
      <Paper variant="contained" elevation={3} sx={{ bgcolor:"transparent",p:0,pt: 2, mr: 0, mb:2 }}>
        <Box display="flex" alignItems="center" gap={2}>
          {true&&<Avatar
            src="/logos/uniwien.png"
            alt="University of Vienna"
            variant="rounded"
            sx={{ width: 56, height: 56 }}
          />}
           <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h7" fontWeight="bold">MA Classical Languages</Typography>
            <Typography variant="body2" fontSize={"9pt"}>University of Vienna</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  </TimelineContent>
</TimelineItem>

{/* 2018–2021: BSc + BA + BA */}
<TimelineItem>
  
  <TimelineSeparator>
    <TimelineDot color="secondary" />
    <TimelineConnector />
  </TimelineSeparator>

  <TimelineContent>
    <Box>
      {/* BSc */}
      <Paper variant="contained" elevation={3} sx={{ bgcolor:"transparent",p: 0, pt:0,mb: -1, zIndex: 3 }}>
        <Box display="flex" alignItems="center" gap={2}>
          {true&&<Avatar
            src="/logos/tu.png"
            alt="TU Wien"
            variant="rounded"
            sx={{ width: 56, height: 56 }}
          />}
          <Box>
             {isMobile&& <Typography variant='body2' fontSize={12}>2018 – 2021</Typography>}
            <Typography variant="h7" fontWeight="bold">BSc Technical Physics</Typography>
            <Typography variant="body2" fontSize={"9pt"}>Vienna University of Technology</Typography>
          </Box>
        </Box>
      </Paper>

      {/* BA Philosophy */}
      <Paper variant="contained" elevation={3} sx={{bgcolor:"transparent", p: 0, pt:2, mb: -1, ml: 0, zIndex: 2 }}>
        <Box display="flex" alignItems="center" gap={2}>
          {true&&<Avatar
            src="/logos/uniwien.png"
            alt="University of Vienna"
            variant="rounded"
            sx={{ width: 56, height: 56 }}
          />}
          <Box>
            <Typography variant="h7" fontWeight="bold">BA Philosophy</Typography>
            <Typography variant="body2" fontSize={"9pt"}>University of Vienna</Typography>
          </Box>
        </Box>
      </Paper>

      {/* BA Classical Languages */}
      <Paper variant="contained" elevation={3} sx={{bgcolor:"transparent", p:0, pt: 2, ml: 0, zIndex: 1 }}>
        <Box display="flex" alignItems="center" gap={2}>
          {true&&<Avatar
            src="/logos/uniwien.png"
            alt="University of Vienna"
            variant="rounded"
            sx={{ width: 56, height: 56 }}
          />}
          <Box>
            <Typography variant="h7" fontWeight="bold">BA Classical Languages</Typography>
            <Typography variant="body2" fontSize={"9pt"}>University of Vienna</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  </TimelineContent>
</TimelineItem>
      </Timeline>}
    </Box>
  );
}