import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Tabs,
  Tab,
} from '@mui/material';
import {
  PlayCircle,
  Schedule,
  Visibility,
} from '@mui/icons-material';
import { useState } from 'react';

interface Video {
  id: string;
  title: string;
  duration: string;
  views: string;
  category: string;
  thumbnail: string;
  description: string;
}

const videos: Video[] = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Modern Wheat Cultivation Techniques',
    duration: '12:45',
    views: '125K',
    category: 'Crop Management',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    description: 'Learn modern techniques for wheat farming including seed selection, sowing methods, and pest management.',
  },
  {
    id: 'jNQXAC9IVRw',
    title: 'Drip Irrigation System Installation',
    duration: '15:20',
    views: '89K',
    category: 'Irrigation',
    thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
    description: 'Complete guide to installing and maintaining drip irrigation systems for water conservation.',
  },
  {
    id: '9bZkp7q19f0',
    title: 'Organic Farming Methods',
    duration: '18:30',
    views: '156K',
    category: 'Sustainable Farming',
    thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
    description: 'Introduction to organic farming practices, composting, and natural pest control methods.',
  },
  {
    id: 'kJQP7kiw5Fk',
    title: 'Soil Testing and Analysis',
    duration: '10:15',
    views: '67K',
    category: 'Soil Management',
    thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg',
    description: 'How to conduct soil testing and interpret results for better crop yields.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Rice Transplantation Best Practices',
    duration: '14:00',
    views: '92K',
    category: 'Crop Management',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    description: 'Step-by-step guide to rice transplantation with tips for optimal plant spacing and depth.',
  },
  {
    id: 'jNQXAC9IVRw',
    title: 'Integrated Pest Management',
    duration: '16:45',
    views: '103K',
    category: 'Pest Control',
    thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
    description: 'Learn IPM strategies to control pests while minimizing environmental impact.',
  },
];

const categories = ['All', 'Crop Management', 'Irrigation', 'Sustainable Farming', 'Soil Management', 'Pest Control'];

export function LearningVideosPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const filteredVideos = selectedCategory === 0
    ? videos
    : videos.filter(video => video.category === categories[selectedCategory]);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Learning Videos
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Educational farming videos curated for modern agriculture
      </Typography>

      <Card sx={{ mb: 3 }}>
        <Tabs
          value={selectedCategory}
          onChange={(_, newValue) => setSelectedCategory(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
      </Card>

      <Grid container spacing={3}>
        {filteredVideos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={video.thumbnail}
                  alt={video.title}
                  sx={{ bgcolor: 'grey.300' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <PlayCircle
                    sx={{
                      fontSize: 64,
                      color: 'white',
                      opacity: 0.9,
                      filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
                    }}
                  />
                </Box>
                <Chip
                  label={video.duration}
                  size="small"
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: 8,
                    bgcolor: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                  }}
                />
              </Box>
              <CardContent>
                <Chip
                  label={video.category}
                  size="small"
                  color="primary"
                  sx={{ mb: 1 }}
                />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {video.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Visibility sx={{ fontSize: 18 }} />
                    <Typography variant="caption">{video.views} views</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Schedule sx={{ fontSize: 18 }} />
                    <Typography variant="caption">{video.duration}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Card sx={{ bgcolor: '#e8f5e9' }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'success.dark' }}>
              Featured Learning Playlist
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    🌱 Beginner Farming Course
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    12 videos covering basics of farming, soil preparation, and crop selection
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    💧 Water Management
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    8 videos on irrigation techniques, water conservation, and drip systems
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    🚜 Farm Mechanization
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    10 videos on modern equipment, tractor operation, and maintenance
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
