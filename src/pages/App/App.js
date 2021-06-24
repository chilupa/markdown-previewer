import Container from '@material-ui/core/Container';
import Header from '../../components/Header/Header';
import Previewer from '../../components/Previewer/Previewer';
import { ThemeProvider } from '@material-ui/styles';
import { responsiveFontSizes } from '@material-ui/core';
import { theme } from '../../utils';

const App = () => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <Container maxWidth="lg">
      <Header />
      <Previewer />
    </Container>
  </ThemeProvider>
);

export default App;
