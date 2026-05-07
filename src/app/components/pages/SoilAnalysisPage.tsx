import { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Chip,
} from '@mui/material';
import {
  Science,
  CheckCircle,
} from '@mui/icons-material';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const soilMetrics = [
  { nutrient: 'Nitrogen (N)', current: 75, optimal: 85 },
  { nutrient: 'Phosphorus (P)', current: 65, optimal: 75 },
  { nutrient: 'Potassium (K)', current: 80, optimal: 80 },
  { nutrient: 'pH Level', current: 70, optimal: 75 },
  { nutrient: 'Organic Matter', current: 60, optimal: 70 },
  { nutrient: 'Moisture', current: 85, optimal: 80 },
];

export function SoilAnalysisPage() {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    ph: '',
    moisture: '',
  });

  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Soil Analysis
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Enter soil test data to get AI-powered recommendations
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Enter Soil Data
              </Typography>

              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Nitrogen (N) - kg/ha"
                    type="number"
                    fullWidth
                    value={formData.nitrogen}
                    onChange={(e) => setFormData({ ...formData, nitrogen: e.target.value })}
                    required
                  />
                  <TextField
                    label="Phosphorus (P) - kg/ha"
                    type="number"
                    fullWidth
                    value={formData.phosphorus}
                    onChange={(e) => setFormData({ ...formData, phosphorus: e.target.value })}
                    required
                  />
                  <TextField
                    label="Potassium (K) - kg/ha"
                    type="number"
                    fullWidth
                    value={formData.potassium}
                    onChange={(e) => setFormData({ ...formData, potassium: e.target.value })}
                    required
                  />
                  <TextField
                    label="pH Level"
                    type="number"
                    inputProps={{ step: '0.1', min: '0', max: '14' }}
                    fullWidth
                    value={formData.ph}
                    onChange={(e) => setFormData({ ...formData, ph: e.target.value })}
                    required
                  />
                  <TextField
                    label="Soil Moisture - %"
                    type="number"
                    fullWidth
                    value={formData.moisture}
                    onChange={(e) => setFormData({ ...formData, moisture: e.target.value })}
                    required
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    startIcon={<Science />}
                  >
                    Analyze Soil
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Soil Health Analysis
              </Typography>

              {showResults ? (
                <Box>
                  <ResponsiveContainer width="100%" height={350}>
                    <RadarChart data={soilMetrics}>
                      <PolarGrid stroke="#e0e0e0" />
                      <PolarAngleAxis dataKey="nutrient" stroke="#666" />
                      <PolarRadiusAxis stroke="#999" />
                      <Radar
                        name="Current Levels"
                        dataKey="current"
                        stroke="#64b5f6"
                        fill="#64b5f6"
                        fillOpacity={0.5}
                      />
                      <Radar
                        name="Optimal Levels"
                        dataKey="optimal"
                        stroke="#81c784"
                        fill="#81c784"
                        fillOpacity={0.3}
                      />
                      <Legend />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>

                  <Box sx={{ mt: 3 }}>
                    <Paper sx={{ p: 2, mb: 2, bgcolor: '#e8f5e9' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircle sx={{ color: 'success.main', mr: 1 }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          Overall Soil Health: Good
                        </Typography>
                      </Box>
                      <Chip label="75% Match to Optimal" color="success" size="small" />
                    </Paper>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 400,
                    color: 'text.secondary',
                  }}
                >
                  <Science sx={{ fontSize: 80, mb: 2, opacity: 0.3 }} />
                  <Typography variant="body1">
                    Enter soil data to see analysis
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        {showResults && (
          <Grid size={{ xs: 12 }}>
            <Card sx={{ bgcolor: '#e3f2fd' }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#1565c0' }}>
                  AI Recommendations
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        🌱 Fertilizer Application
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Apply 15kg/ha of phosphorus-rich fertilizer to reach optimal levels. Use DAP or SSP.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        💧 Irrigation Adjustment
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Soil moisture is optimal. Maintain current irrigation schedule.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        🔬 pH Management
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Apply lime at 200kg/ha to increase pH to optimal level of 6.5-7.0.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
