import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Paper,
  Button,
} from '@mui/material';
import {
  Agriculture,
  WaterDrop,
  Science,
  Recycling,
  CheckCircle,
} from '@mui/icons-material';

const recommendedCrops = [
  {
    name: 'Rice',
    suitability: 92,
    season: 'Kharif',
    waterReq: 'High',
    yield: '65 quintals/acre',
    profit: '₹45,000/acre',
    reasons: ['Optimal soil pH', 'Good water availability', 'Suitable climate'],
  },
  {
    name: 'Wheat',
    suitability: 88,
    season: 'Rabi',
    waterReq: 'Medium',
    yield: '50 quintals/acre',
    profit: '₹38,000/acre',
    reasons: ['Good nitrogen levels', 'Favorable temperature', 'Market demand high'],
  },
  {
    name: 'Cotton',
    suitability: 85,
    season: 'Kharif',
    waterReq: 'Medium',
    yield: '30 quintals/acre',
    profit: '₹52,000/acre',
    reasons: ['High market price', 'Suitable soil type', 'Good drainage'],
  },
];

const irrigationPlan = [
  { stage: 'Pre-sowing', days: '7 days before', amount: '50mm', frequency: 'Once' },
  { stage: 'Germination', days: '0-10 days', amount: '25mm', frequency: 'Every 3 days' },
  { stage: 'Vegetative', days: '11-40 days', amount: '30mm', frequency: 'Every 5 days' },
  { stage: 'Flowering', days: '41-70 days', amount: '40mm', frequency: 'Every 4 days' },
  { stage: 'Maturity', days: '71-100 days', amount: '20mm', frequency: 'Every 7 days' },
];

const fertilizerSchedule = [
  { type: 'Urea (N)', amount: '120 kg/ha', timing: 'Basal + 2 top dressings', stage: 'Vegetative & Flowering' },
  { type: 'DAP (P)', amount: '80 kg/ha', timing: 'Basal application', stage: 'Pre-sowing' },
  { type: 'MOP (K)', amount: '60 kg/ha', timing: 'Basal application', stage: 'Pre-sowing' },
  { type: 'Zinc Sulfate', amount: '25 kg/ha', timing: 'Basal application', stage: 'Pre-sowing' },
];

export function SmartCropGuidancePage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Smart Crop Guidance
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        AI-powered recommendations for crop selection and cultivation
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <Card sx={{ bgcolor: '#e8f5e9' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Agriculture sx={{ fontSize: 40, color: 'success.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.dark' }}>
                    Recommended Crops for Your Farm
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Based on soil analysis, climate data, and market trends
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {recommendedCrops.map((crop, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {crop.name}
                  </Typography>
                  <Chip
                    label={`${crop.suitability}% Match`}
                    color="success"
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                </Box>

                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <Chip label={crop.season} size="small" variant="outlined" />
                  <Chip label={`Water: ${crop.waterReq}`} size="small" variant="outlined" />
                </Box>

                <Paper sx={{ p: 2, mb: 2, bgcolor: 'background.default' }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Expected Yield
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {crop.yield}
                  </Typography>
                </Paper>

                <Paper sx={{ p: 2, mb: 2, bgcolor: '#e8f5e9' }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Estimated Profit
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.dark' }}>
                    {crop.profit}
                  </Typography>
                </Paper>

                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Why this crop?
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  {crop.reasons.map((reason, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircle sx={{ fontSize: 16, color: 'success.main', mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {reason}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  View Full Guide
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <WaterDrop sx={{ fontSize: 32, color: 'info.main', mr: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Irrigation Schedule
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {irrigationPlan.map((stage, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: 2,
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {stage.stage}
                      </Typography>
                      <Chip label={stage.days} size="small" color="info" />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Amount: <strong>{stage.amount}</strong>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Frequency: <strong>{stage.frequency}</strong>
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Science sx={{ fontSize: 32, color: 'warning.main', mr: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Fertilizer Application
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {fertilizerSchedule.map((fertilizer, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: 2,
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {fertilizer.type}
                      </Typography>
                      <Chip label={fertilizer.amount} size="small" color="warning" />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      Timing: {fertilizer.timing}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Stage: {fertilizer.stage}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ bgcolor: '#e3f2fd' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Recycling sx={{ fontSize: 32, color: 'info.dark', mr: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'info.dark' }}>
                  Sustainable Practices
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      🌱 Crop Rotation
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Rotate with legumes next season to naturally replenish nitrogen in soil
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      💧 Drip Irrigation
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Save 40% water by switching to drip irrigation. ROI in 2 seasons
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      🌾 Organic Matter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Add compost at 5 tons/ha to improve soil structure and fertility
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      🐛 Pest Management
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Use integrated pest management to reduce chemical pesticide usage
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
