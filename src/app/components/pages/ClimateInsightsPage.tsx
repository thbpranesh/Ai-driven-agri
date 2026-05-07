import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Paper,
} from '@mui/material';
import {
  WbSunny,
  Cloud,
  Opacity,
  Air,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const forecastData = [
  { day: 'Mon', temp: 28, rainfall: 0, wind: 12, humidity: 65, condition: 'Sunny' },
  { day: 'Tue', temp: 30, rainfall: 2, wind: 15, humidity: 70, condition: 'Partly Cloudy' },
  { day: 'Wed', temp: 29, rainfall: 5, wind: 18, humidity: 75, condition: 'Light Rain' },
  { day: 'Thu', temp: 27, rainfall: 12, wind: 20, humidity: 80, condition: 'Rain' },
  { day: 'Fri', temp: 26, rainfall: 8, wind: 16, humidity: 78, condition: 'Cloudy' },
  { day: 'Sat', temp: 28, rainfall: 0, wind: 10, humidity: 68, condition: 'Sunny' },
  { day: 'Sun', temp: 30, rainfall: 0, wind: 8, humidity: 62, condition: 'Clear' },
];

const climaticConditions = [
  { factor: 'Temperature', current: 85, optimal: 90 },
  { factor: 'Humidity', current: 70, optimal: 75 },
  { factor: 'Rainfall', current: 60, optimal: 65 },
  { factor: 'Wind Speed', current: 55, optimal: 60 },
  { factor: 'Soil Moisture', current: 80, optimal: 85 },
  { factor: 'Sunlight', current: 90, optimal: 95 },
];

const monthlyRainfall = [
  { month: 'Jan', rainfall: 15, avg: 20 },
  { month: 'Feb', rainfall: 12, avg: 18 },
  { month: 'Mar', rainfall: 25, avg: 22 },
  { month: 'Apr', rainfall: 45, avg: 40 },
  { month: 'May', rainfall: 80, avg: 75 },
  { month: 'Jun', rainfall: 120, avg: 110 },
];

export function ClimateInsightsPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Climate Insights
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        AI-powered weather analytics and predictive insights for your farm
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            sx={{
              p: 3,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <WbSunny sx={{ fontSize: 48 }} />
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  28°C
                </Typography>
                <Typography variant="body2">Current Temp</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            sx={{
              p: 3,
              background: 'linear-gradient(135deg, #64b5f6 0%, #2196f3 100%)',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Opacity sx={{ fontSize: 48 }} />
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  65%
                </Typography>
                <Typography variant="body2">Humidity</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            sx={{
              p: 3,
              background: 'linear-gradient(135deg, #81c784 0%, #66bb6a 100%)',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Cloud sx={{ fontSize: 48 }} />
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  0mm
                </Typography>
                <Typography variant="body2">Rainfall Today</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            sx={{
              p: 3,
              background: 'linear-gradient(135deg, #ffb74d 0%, #ff9800 100%)',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Air sx={{ fontSize: 48 }} />
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  12
                </Typography>
                <Typography variant="body2">Wind (km/h)</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                7-Day Weather Forecast
              </Typography>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                {forecastData.map((day) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={day.day}>
                    <Paper
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        bgcolor: 'background.default',
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      {day.day}
                    </Typography>
                    <WbSunny sx={{ fontSize: 40, color: '#ffb74d', mb: 1 }} />
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {day.temp}°C
                    </Typography>
                    <Chip
                      label={day.condition}
                      size="small"
                      sx={{ bgcolor: 'white', fontSize: '0.7rem' }}
                    />
                  </Paper>
                  </Grid>
                ))}
              </Grid>

              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={forecastData}>
                  <defs>
                    <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff9800" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ff9800" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="rainfallGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#64b5f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#64b5f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="temp"
                    stroke="#ff9800"
                    fillOpacity={1}
                    fill="url(#tempGradient)"
                    name="Temperature (°C)"
                  />
                  <Area
                    type="monotone"
                    dataKey="rainfall"
                    stroke="#64b5f6"
                    fillOpacity={1}
                    fill="url(#rainfallGradient)"
                    name="Rainfall (mm)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Climatic Conditions Analysis
              </Typography>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={climaticConditions}>
                  <PolarGrid stroke="#e0e0e0" />
                  <PolarAngleAxis dataKey="factor" stroke="#666" />
                  <PolarRadiusAxis stroke="#999" />
                  <Radar
                    name="Current"
                    dataKey="current"
                    stroke="#64b5f6"
                    fill="#64b5f6"
                    fillOpacity={0.5}
                  />
                  <Radar
                    name="Optimal"
                    dataKey="optimal"
                    stroke="#81c784"
                    fill="#81c784"
                    fillOpacity={0.3}
                  />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Monthly Rainfall Pattern
              </Typography>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={monthlyRainfall}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="rainfall"
                    stroke="#64b5f6"
                    strokeWidth={3}
                    name="Actual Rainfall (mm)"
                    dot={{ fill: '#64b5f6', r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="avg"
                    stroke="#81c784"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Average (mm)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Card sx={{ bgcolor: '#e8f5e9' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#2e7d32' }}>
                AI Recommendations
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      💧 Irrigation Schedule
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Based on upcoming rainfall, delay irrigation by 3 days to conserve water.
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      🌱 Planting Window
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Optimal planting conditions expected in next 5-7 days. Prepare seeds.
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      ⚠️ Weather Alert
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Heavy rainfall expected Thursday. Ensure proper drainage systems are ready.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
