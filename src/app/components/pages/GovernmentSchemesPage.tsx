import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Paper,
} from '@mui/material';
import {
  AccountBalance,
  CheckCircle,
  Info,
} from '@mui/icons-material';

const schemes = [
  {
    name: 'PM-KISAN',
    fullName: 'Pradhan Mantri Kisan Samman Nidhi',
    amount: '₹6,000/year',
    category: 'Direct Benefit Transfer',
    status: 'Active',
    description: 'Direct income support of ₹2000 per installment, three times a year to all farmer families.',
    eligibility: ['Small and marginal farmers', 'Landholding farmers', 'Active Aadhaar required'],
    benefits: ['₹6000 annual support', 'Direct bank transfer', 'No intermediaries'],
    color: '#81c784',
  },
  {
    name: 'PMFBY',
    fullName: 'Pradhan Mantri Fasal Bima Yojana',
    amount: 'Crop Insurance',
    category: 'Insurance',
    status: 'Active',
    description: 'Comprehensive crop insurance covering yield losses due to natural calamities, pests & diseases.',
    eligibility: ['All farmers', 'Sharecroppers & tenant farmers', 'Valid land records'],
    benefits: ['Low premium (1.5-2%)', 'Full sum assured', 'Quick claim settlement'],
    color: '#64b5f6',
  },
  {
    name: 'KCC',
    fullName: 'Kisan Credit Card',
    amount: 'Up to ₹3 Lakhs',
    category: 'Credit',
    status: 'Active',
    description: 'Short-term credit for agriculture and allied activities with flexible repayment options.',
    eligibility: ['All farmers', 'Minimum 6 months farming', 'Valid land documents'],
    benefits: ['Low interest (4%)', 'Flexible repayment', 'Accidental insurance cover'],
    color: '#ffb74d',
  },
  {
    name: 'SMAM',
    fullName: 'Sub-Mission on Agricultural Mechanization',
    amount: '40-50% Subsidy',
    category: 'Subsidy',
    status: 'Active',
    description: 'Subsidy on purchase of agricultural machinery and equipment to promote mechanization.',
    eligibility: ['Individual farmers', 'Farmer groups', 'Custom hiring centers'],
    benefits: ['40-50% subsidy', 'Modern equipment', 'Increased productivity'],
    color: '#ba68c8',
  },
  {
    name: 'PKVY',
    fullName: 'Paramparagat Krishi Vikas Yojana',
    amount: '₹50,000/ha',
    category: 'Organic Farming',
    status: 'Active',
    description: 'Support for organic farming through cluster formation and organic inputs.',
    eligibility: ['Farmers in clusters', 'Minimum 20 farmers', 'Organic farming commitment'],
    benefits: ['₹50,000/ha support', 'Organic certification', 'Premium market access'],
    color: '#81c784',
  },
  {
    name: 'PMKSY',
    fullName: 'Pradhan Mantri Krishi Sinchai Yojana',
    amount: 'Irrigation Support',
    category: 'Irrigation',
    status: 'Active',
    description: 'Ensuring access to irrigation and expanding cultivable area with improved water efficiency.',
    eligibility: ['All farmers', 'Water source available', 'Land ownership proof'],
    benefits: ['Drip/Sprinkler subsidy', 'Water conservation', 'Increased yield'],
    color: '#64b5f6',
  },
];

export function GovernmentSchemesPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Government Schemes
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Explore agricultural schemes, subsidies, and benefits available for farmers
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <Paper
            sx={{
              p: 3,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <AccountBalance sx={{ fontSize: 48 }} />
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                  6 Active Schemes Available
                </Typography>
                <Typography variant="body2">
                  Total potential benefits: ₹2.5+ Lakhs annually
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {schemes.map((scheme, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {scheme.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {scheme.fullName}
                    </Typography>
                  </Box>
                  <Chip
                    label={scheme.status}
                    color="success"
                    size="small"
                    icon={<CheckCircle />}
                  />
                </Box>

                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <Chip
                    label={scheme.category}
                    size="small"
                    sx={{ bgcolor: scheme.color, color: 'white' }}
                  />
                  <Chip
                    label={scheme.amount}
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: scheme.color, color: scheme.color }}
                  />
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {scheme.description}
                </Typography>

                <Paper sx={{ p: 2, mb: 2, bgcolor: 'background.default' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center' }}>
                    <Info sx={{ fontSize: 18, mr: 1, color: 'primary.main' }} />
                    Eligibility Criteria
                  </Typography>
                  <Box sx={{ pl: 3.5 }}>
                    {scheme.eligibility.map((item, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                        <Typography variant="body2" color="text.secondary">
                          • {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>

                <Paper sx={{ p: 2, mb: 2, bgcolor: '#e8f5e9' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Key Benefits
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {scheme.benefits.map((benefit, idx) => (
                      <Chip
                        key={idx}
                        label={benefit}
                        size="small"
                        sx={{ bgcolor: 'white' }}
                      />
                    ))}
                  </Box>
                </Paper>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="contained" fullWidth>
                    Apply Now
                  </Button>
                  <Button variant="outlined" fullWidth>
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid size={{ xs: 12 }}>
          <Card sx={{ bgcolor: '#fff3e0' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#e65100' }}>
                Application Tips & Guidelines
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      📄 Documents Required
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Keep Aadhaar, land records, bank passbook, and mobile number ready for applications
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      ⏰ Application Deadlines
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Most schemes have seasonal deadlines. Apply at least 30 days before season start
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      🏢 Visit Jan Seva Kendra
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Get free assistance with applications at your nearest Common Service Center
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      📞 Helpline Support
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Call 1800-180-1551 for PM-KISAN or 1800-266-6868 for crop insurance queries
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
