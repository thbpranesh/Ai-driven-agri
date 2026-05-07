import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardPage } from './components/pages/DashboardPage';
import { ClimateInsightsPage } from './components/pages/ClimateInsightsPage';
import { DiseaseDetectionPage } from './components/pages/DiseaseDetectionPage';
import { SoilAnalysisPage } from './components/pages/SoilAnalysisPage';
import { MarketForecastingPage } from './components/pages/MarketForecastingPage';
import { SmartCropGuidancePage } from './components/pages/SmartCropGuidancePage';
import { GovernmentSchemesPage } from './components/pages/GovernmentSchemesPage';
import { ChatbotPage } from './components/pages/ChatbotPage';
import { LearningVideosPage } from './components/pages/LearningVideosPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'climate':
        return <ClimateInsightsPage />;
      case 'disease':
        return <DiseaseDetectionPage />;
      case 'soil':
        return <SoilAnalysisPage />;
      case 'market':
        return <MarketForecastingPage />;
      case 'crop':
        return <SmartCropGuidancePage />;
      case 'schemes':
        return <GovernmentSchemesPage />;
      case 'chatbot':
        return <ChatbotPage />;
      case 'videos':
        return <LearningVideosPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayout currentPage={currentPage} onPageChange={setCurrentPage}>
        {renderPage()}
      </DashboardLayout>
    </ThemeProvider>
  );
}