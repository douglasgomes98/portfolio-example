import { GlobalStyles } from './styles/GlobalStyles';
import { fonts } from './theme/fonts';

function App() {
  return (
    <>
      <GlobalStyles />
      <h1 style={{ fontFamily: fonts.family.bold }}>Hello World</h1>
    </>
  );
}

export default App;
