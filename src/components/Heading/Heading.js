import { Box, Typography } from '@material-ui/core';

const Heading = ({ children }) => (
  <Box pt={2} pb={2}>
    <Typography align="center" variant="h6" color="secondary">
      {children}
    </Typography>
  </Box>
);

export default Heading;
