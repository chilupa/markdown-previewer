import { Typography } from '@material-ui/core';

const Heading = ({ children }) => (
  <Typography align="center" variant="h6" color="secondary">
    {children}
  </Typography>
);

export default Heading;
