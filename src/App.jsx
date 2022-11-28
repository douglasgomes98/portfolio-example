import { ThemeProvider } from 'styled-components';

import { Dashboard } from './page/Dashboard';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
