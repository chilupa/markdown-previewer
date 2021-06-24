import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Heading from '../Heading/Heading';
import MarkdownInput from '../MarkdownInput/MarkdownInput';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 60vh;
  max-height: 60vh;
  overflow-y: auto;
`;

const Previewer = () => {
  const [markdownText, setMarkdownText] = useState('');
  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };
  return (
    <Box pt={2}>
      <Grid container spacing={4}>
        <Grid item lg={6} xs={12}>
          <Heading>Markdown</Heading>
          <Box data-testid="markdownInput">
            <MarkdownInput onInputChange={onInputChange} />
          </Box>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Heading>Preview</Heading>
          <Div>
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </Div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Previewer;
