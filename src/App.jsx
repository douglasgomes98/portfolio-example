import { ThemeProvider } from 'styled-components';

import { Dashboard } from './page/Dashboard';
import { theme } from './theme';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
