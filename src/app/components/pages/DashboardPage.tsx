import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import {
  TrendingUp,
  WbSunny,
  Opacity,
  Thermostat,
  Agriculture,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const weatherData = [
  { day: 'Mon', temp: 28, humidity: 65 },
  { day: 'Tue', temp: 30, humidity: 70 },
  { day: 'Wed', temp: 29, humidity: 68 },
  { day: 'Thu', temp: 31, humidity: 72 },
  { day: 'Fri', temp: 27, humidity: 60 },
  { day: 'Sat', temp: 26, humidity: 58 },
  { day: 'Sun', temp: 28, humidity: 62 },
];

const cropYieldData = [
  { month: 'Jan', wheat: 45, rice: 38 },
  { month: 'Feb', wheat: 52, rice: 42 },
  { month: 'Mar', wheat: 58, rice: 48 },
  { month: 'Apr', wheat: 65, rice: 55 },
  { month: 'May', wheat: 70, rice: 62 },
  { month: 'Jun', wheat: 68, rice: 58 },
];

const marketPriceData = [
  { crop: 'Wheat', price: 2400 },
  { crop: 'Rice', price: 3200 },
  { crop: 'Corn', price: 1800 },
  { crop: 'Soybean', price: 4500 },
  { crop: 'Cotton', price: 5200 },
];

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
  trend: 'up' | 'down';
}

function StatCard({ title, value, change, icon, color, trend }: StatCardProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography color="text.secondary" gutterBottom variant="body2">
              {title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ mb: 1, fontWeight: 600 }}>
              {value}
            </Typography>
            <Chip
              label={change}
              size="small"
              color={trend === 'up' ? 'success' : 'error'}
              icon={<TrendingUp sx={{ fontSize: '1rem !important' }} />}
              sx={{ height: 24 }}
            />
          </Box>
          <Box
            sx={{
              bgcolor: color,
              borderRadius: 2,
              p: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export function DashboardPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Current Temperature"
            value="28°C"
            change="+2°C from yesterday"
            icon={<Thermostat sx={{ fontSize: 32, color: 'white' }} />}
            color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            trend="up"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Soil Moisture"
            value="68%"
            change="+5% optimal"
            icon={<Opacity sx={{ fontSize: 32, color: 'white' }} />}
            color="linear-gradient(135deg, #64b5f6 0%, #2196f3 100%)"
            trend="up"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Crop Health Score"
            value="85/100"
            change="+8 this week"
            icon={<Agriculture sx={{ fontSize: 32, color: 'white' }} />}
            color="linear-gradient(135deg, #81c784 0%, #66bb6a 100%)"
            trend="up"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Weather Forecast"
            value="Sunny"
            change="Next 3 days clear"
            icon={<WbSunny sx={{ fontSize: 32, color: 'white' }} />}
            color="linear-gradient(135deg, #ffb74d 0%, #ff9800 100%)"
            trend="up"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Weather Trends (7 Days)
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={weatherData}>
                  <defs>
                    <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff9800" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ff9800" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorHumidity" x1="0" y1="0" x2="0" y2="1">
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
                    fill="url(#colorTemp)"
                    name="Temperature (°C)"
                  />
                  <Area
                    type="monotone"
                    dataKey="humidity"
                    stroke="#64b5f6"
                    fillOpacity={1}
                    fill="url(#colorHumidity)"
                    name="Humidity (%)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Quick Insights
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: '#e8f5e9',
                    border: '1px solid #81c784',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#2e7d32', mb: 0.5 }}>
                    Irrigation Alert
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Field A needs watering in 2 days
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: '#e3f2fd',
                    border: '1px solid #64b5f6',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1565c0', mb: 0.5 }}>
                    Market Price
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Wheat prices up 12% this week
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: '#fff3e0',
                    border: '1px solid #ffb74d',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#e65100', mb: 0.5 }}>
                    Disease Alert
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    No disease detected in recent scan
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: '#f3e5f5',
                    border: '1px solid #ba68c8',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#6a1b9a', mb: 0.5 }}>
                    New Scheme
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    PM-KISAN payment released
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Crop Yield Forecast (Quintals/Acre)
              </Typography>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={cropYieldData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="wheat"
                    stroke="#ffb74d"
                    strokeWidth={3}
                    name="Wheat"
                    dot={{ fill: '#ffb74d', r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rice"
                    stroke="#81c784"
                    strokeWidth={3}
                    name="Rice"
                    dot={{ fill: '#81c784', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Market Prices (₹/Quintal)
              </Typography>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={marketPriceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="crop" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip />
                  <Bar dataKey="price" fill="#64b5f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
