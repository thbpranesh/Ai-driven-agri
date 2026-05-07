import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  Chip,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const priceData = [
  { month: 'Jan', wheat: 2400, rice: 3200, corn: 1800 },
  { month: 'Feb', wheat: 2500, rice: 3300, corn: 1900 },
  { month: 'Mar', wheat: 2600, rice: 3400, corn: 2000 },
  { month: 'Apr', wheat: 2800, rice: 3600, corn: 2100 },
  { month: 'May', wheat: 3000, rice: 3800, corn: 2200 },
  { month: 'Jun', wheat: 2900, rice: 3700, corn: 2150 },
];

const demandData = [
  { crop: 'Wheat', demand: 85, supply: 75 },
  { crop: 'Rice', demand: 90, supply: 85 },
  { crop: 'Corn', demand: 70, supply: 80 },
  { crop: 'Soybean', demand: 80, supply: 70 },
  { crop: 'Cotton', demand: 75, supply: 65 },
];

const crops = [
  { name: 'Wheat', price: 2900, change: '+12%', trend: 'up', prediction: 'Rising' },
  { name: 'Rice', price: 3700, change: '+8%', trend: 'up', prediction: 'Stable' },
  { name: 'Corn', price: 2150, change: '+6%', trend: 'up', prediction: 'Rising' },
  { name: 'Soybean', price: 4500, change: '-3%', trend: 'down', prediction: 'Declining' },
  { name: 'Cotton', price: 5200, change: '+15%', trend: 'up', prediction: 'Rising' },
];

export function MarketForecastingPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Market Forecasting
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Real-time crop prices and AI-powered market predictions
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <Grid container spacing={2}>
            {crops.map((crop) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={crop.name}>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {crop.name}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                      ₹{crop.price}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Chip
                        label={crop.change}
                        size="small"
                        color={crop.trend === 'up' ? 'success' : 'error'}
                        icon={crop.trend === 'up' ? <TrendingUp /> : <TrendingDown />}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Price Trends (6 Months)
              </Typography>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={priceData}>
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
                    name="Wheat (₹/quintal)"
                    dot={{ fill: '#ffb74d', r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rice"
                    stroke="#81c784"
                    strokeWidth={3}
                    name="Rice (₹/quintal)"
                    dot={{ fill: '#81c784', r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="corn"
                    stroke="#64b5f6"
                    strokeWidth={3}
                    name="Corn (₹/quintal)"
                    dot={{ fill: '#64b5f6', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Market Predictions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {crops.map((crop) => (
                  <Paper
                    key={crop.name}
                    sx={{
                      p: 2,
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {crop.name}
                      </Typography>
                      <Chip
                        label={crop.prediction}
                        size="small"
                        color={crop.prediction === 'Rising' ? 'success' : crop.prediction === 'Stable' ? 'info' : 'warning'}
                      />
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Next 30 days forecast
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Demand vs Supply Analysis
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={demandData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="crop" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="demand" fill="#64b5f6" radius={[8, 8, 0, 0]} name="Demand %" />
                  <Bar dataKey="supply" fill="#81c784" radius={[8, 8, 0, 0]} name="Supply %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Card sx={{ bgcolor: '#fff3e0' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#e65100' }}>
                Market Insights
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      📈 Best Time to Sell
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Wheat and cotton prices expected to peak in next 2 weeks. Consider selling stocks.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      🌾 High Demand Crops
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Rice and soybean demand exceeding supply. Good opportunity for higher margins.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      💰 Price Alert
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cotton prices up 15% - highest in last 6 months. Monitor for selling window.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
