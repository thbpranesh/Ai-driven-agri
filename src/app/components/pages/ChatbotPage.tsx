import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
  Paper,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Send,
  SmartToy,
  Person,
} from '@mui/icons-material';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const quickQuestions = [
  'When should I irrigate my wheat crop?',
  'What fertilizer is best for rice?',
  'How to control pest attacks?',
  'Current market price of soybean?',
  'PM-KISAN application status?',
];

const sampleBotResponses = [
  'Based on your soil moisture data (68%), you should irrigate your wheat crop in 2-3 days. Current weather forecast shows no rain expected.',
  'For rice cultivation, I recommend a combination of Urea (120 kg/ha), DAP (80 kg/ha), and MOP (60 kg/ha). Apply in 3 splits: basal, tillering, and panicle initiation stages.',
  'For pest control, I suggest integrated pest management. Use neem-based organic pesticides first. Monitor regularly and maintain field hygiene. Avoid chemical pesticides unless severity is high.',
  'Current market price for soybean is ₹4,500 per quintal, up 8% from last week. This is a good time to sell if you have ready stock.',
  'I can help you check your PM-KISAN status. Please share your Aadhaar number or registration ID, and I\'ll fetch the latest information.',
];

export function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I\'m your AI farming assistant. How can I help you today? You can ask me about crops, irrigation, fertilizers, market prices, or government schemes.',
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: sampleBotResponses[Math.floor(Math.random() * sampleBotResponses.length)],
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        AI Chatbot Assistant
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Get instant answers to your farming questions 24/7
      </Typography>

      <Card sx={{ height: 'calc(100vh - 250px)', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 0 }}>
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              bgcolor: 'background.default',
            }}
          >
            {messages.map((message) => (
              <Box
                key={message.id}
                sx={{
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: 1,
                }}
              >
                {message.sender === 'bot' && (
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <SmartToy />
                  </Avatar>
                )}
                <Paper
                  sx={{
                    p: 2,
                    maxWidth: '70%',
                    bgcolor: message.sender === 'user' ? 'primary.main' : 'white',
                    color: message.sender === 'user' ? 'white' : 'text.primary',
                  }}
                >
                  <Typography variant="body1">{message.text}</Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 1,
                      display: 'block',
                      opacity: 0.7,
                    }}
                  >
                    {message.timestamp}
                  </Typography>
                </Paper>
                {message.sender === 'user' && (
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <Person />
                  </Avatar>
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ p: 2, bgcolor: 'white', borderTop: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Typography variant="body2" color="text.secondary" sx={{ width: '100%', mb: 1 }}>
                Quick questions:
              </Typography>
              {quickQuestions.map((question, index) => (
                <Chip
                  key={index}
                  label={question}
                  onClick={() => handleQuickQuestion(question)}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                placeholder="Type your question here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSend();
                  }
                }}
                variant="outlined"
              />
              <IconButton
                color="primary"
                onClick={handleSend}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'primary.dark' },
                }}
              >
                <Send />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
