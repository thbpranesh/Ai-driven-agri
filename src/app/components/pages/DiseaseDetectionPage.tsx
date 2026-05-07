import { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Paper,
  Chip,
  LinearProgress,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  CloudUpload,
  CheckCircle,
  Warning,
  Error as ErrorIcon,
} from '@mui/icons-material';

interface DetectionResult {
  disease: string;
  confidence: number;
  severity: 'low' | 'medium' | 'high';
  treatment: string;
  symptoms: string[];
}

const sampleResults: DetectionResult[] = [
  {
    disease: 'Leaf Blight',
    confidence: 92,
    severity: 'high',
    treatment: 'Apply copper-based fungicide every 7-10 days. Remove infected leaves immediately.',
    symptoms: ['Brown spots on leaves', 'Yellowing margins', 'Wilting'],
  },
  {
    disease: 'Powdery Mildew',
    confidence: 87,
    severity: 'medium',
    treatment: 'Use sulfur-based fungicide. Improve air circulation between plants.',
    symptoms: ['White powdery coating', 'Leaf distortion', 'Stunted growth'],
  },
  {
    disease: 'Root Rot',
    confidence: 78,
    severity: 'high',
    treatment: 'Reduce watering frequency. Apply appropriate fungicide to soil.',
    symptoms: ['Yellowing leaves', 'Soft roots', 'Plant wilting'],
  },
];

export function DiseaseDetectionPage() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedFile(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setResult(sampleResults[Math.floor(Math.random() * sampleResults.length)]);
      setAnalyzing(false);
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'success';
      case 'medium':
        return 'warning';
      case 'high':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Disease Detection
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Upload plant images for AI-powered disease diagnosis
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: '100%', boxShadow: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <CloudUpload sx={{ color: 'primary.main' }} />
                Upload Plant Image
              </Typography>

              <Paper
                sx={{
                  p: 6,
                  textAlign: 'center',
                  bgcolor: selectedFile ? 'success.light' : 'grey.50',
                  border: '3px dashed',
                  borderColor: selectedFile ? 'success.main' : 'primary.main',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderRadius: 3,
                  minHeight: 300,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    bgcolor: 'primary.50',
                    transform: 'scale(1.02)',
                  },
                }}
                component="label"
              >
                {selectedFile ? (
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ 
                      position: 'relative', 
                      mb: 2,
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: 2
                    }}>
                      <img
                        src={selectedFile}
                        alt="Selected plant"
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                        }}
                      />
                      <Box sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        bgcolor: 'success.main',
                        borderRadius: '50%',
                        p: 0.5
                      }}>
                        <CheckCircle sx={{ color: 'white', fontSize: 20 }} />
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'success.dark', fontWeight: 600 }}>
                      Image uploaded successfully!
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      Ready for analysis
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <CloudUpload sx={{ fontSize: 80, color: 'primary.main', mb: 3, opacity: 0.8 }} />
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Drop your plant image here
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      or click to browse files
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Supports JPG, PNG, WebP (Max 10MB)
                    </Typography>
                  </Box>
                )}
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              </Paper>

              {selectedFile && (
                <Box sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={handleAnalyze}
                    disabled={analyzing}
                    sx={{
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      boxShadow: 2,
                      '&:hover': {
                        boxShadow: 4,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {analyzing ? (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CircularProgress size={20} color="inherit" />
                        Analyzing...
                      </Box>
                    ) : (
                      '🔍 Analyze Disease'
                    )}
                  </Button>
                  {analyzing && (
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
                        AI is processing your image with advanced machine learning...
                      </Typography>
                      <LinearProgress 
                        sx={{ 
                          height: 8, 
                          borderRadius: 4,
                          bgcolor: 'grey.200',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                          }
                        }} 
                      />
                      <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block', textAlign: 'center' }}>
                        This may take a few seconds
                      </Typography>
                    </Box>
                  )}
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: '100%', boxShadow: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: 'primary.main' }} />
                Diagnosis Results
              </Typography>

              {result ? (
                <Box>
                  <Alert
                    severity={getSeverityColor(result.severity) as any}
                    sx={{ 
                      mb: 3, 
                      borderRadius: 2,
                      '& .MuiAlert-icon': { fontSize: '1.5rem' }
                    }}
                    icon={
                      result.severity === 'high' ? (
                        <ErrorIcon />
                      ) : result.severity === 'medium' ? (
                        <Warning />
                      ) : (
                        <CheckCircle />
                      )
                    }
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {result.disease} Detected
                    </Typography>
                    <Typography variant="body2">
                      Disease identified with high confidence
                    </Typography>
                  </Alert>

                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        AI Confidence Level
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {result.confidence}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={result.confidence}
                      sx={{ 
                        height: 12, 
                        borderRadius: 6,
                        bgcolor: 'grey.200',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 6,
                          background: result.confidence > 80 ? 'linear-gradient(90deg, #4caf50, #66bb6a)' : 
                                     result.confidence > 60 ? 'linear-gradient(90deg, #ff9800, #ffb74d)' : 
                                     'linear-gradient(90deg, #f44336, #e57373)',
                        }
                      }}
                    />
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="body1" sx={{ mb: 2, fontWeight: 600 }}>
                      Severity Assessment
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Chip
                        label={result.severity.toUpperCase()}
                        color={getSeverityColor(result.severity) as any}
                        sx={{ 
                          fontWeight: 700, 
                          fontSize: '0.9rem',
                          px: 2,
                          py: 1
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {result.severity === 'high' ? 'Immediate action required' : 
                         result.severity === 'medium' ? 'Monitor closely' : 
                         'Low risk, preventive measures'}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="body1" sx={{ mb: 2, fontWeight: 600 }}>
                      Observed Symptoms
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {result.symptoms.map((symptom, index) => (
                        <Chip
                          key={index}
                          label={symptom}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderRadius: 2,
                            fontWeight: 500,
                            '&:hover': { bgcolor: 'primary.50' }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Paper sx={{ 
                    p: 3, 
                    bgcolor: 'primary.50', 
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'primary.light'
                  }}>
                    <Typography variant="body1" sx={{ mb: 2, fontWeight: 600, color: 'primary.dark', display: 'flex', alignItems: 'center', gap: 1 }}>
                      💊 Recommended Treatment
                    </Typography>
                    <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.6 }}>
                      {result.treatment}
                    </Typography>
                  </Paper>
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
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ 
                    width: 120, 
                    height: 120, 
                    borderRadius: '50%', 
                    bgcolor: 'grey.100',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3
                  }}>
                    <CheckCircle sx={{ fontSize: 60, color: 'grey.400' }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Ready for Analysis
                  </Typography>
                  <Typography variant="body1">
                    Upload a plant image to get instant disease diagnosis
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Card sx={{ bgcolor: 'info.50', border: '1px solid', borderColor: 'info.light', boxShadow: 2 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: 'info.dark', display: 'flex', alignItems: 'center', gap: 1 }}>
                📋 Recent Disease Detections
              </Typography>
              <Grid container spacing={3}>
                {sampleResults.map((item, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                    <Paper sx={{ 
                      p: 3, 
                      borderRadius: 3,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                      },
                      cursor: 'pointer'
                    }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                          {item.disease}
                        </Typography>
                        <Chip
                          label={item.severity}
                          size="small"
                          color={getSeverityColor(item.severity) as any}
                          sx={{ fontWeight: 600, fontSize: '0.75rem' }}
                        />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            Confidence
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {item.confidence}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={item.confidence}
                          sx={{ 
                            height: 6, 
                            borderRadius: 3,
                            bgcolor: 'grey.200',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                            }
                          }}
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        Detected recently
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
