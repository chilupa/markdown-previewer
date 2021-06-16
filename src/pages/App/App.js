import { Box, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header/Header';
import MarkdownInput from '../MarkdownInput/MarkdownInput';
import ReactMarkdown from 'react-markdown';
import { ThemeProvider } from '@material-ui/styles';
import { responsiveFontSizes } from '@material-ui/core';
import { theme } from '../../utils';
import { useState } from 'react';
import Heading from '../../components/Heading/Heading';

const App = () => {
  const [markdownText, setMarkdownText] = useState('');

  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <Container maxWidth="lg">
        <Header />
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <Heading>Markdown</Heading>
            <Box data-testid="markdownInput">
              <MarkdownInput onInputChange={onInputChange} />
            </Box>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box>
              <Heading>Preview</Heading>
            </Box>
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
