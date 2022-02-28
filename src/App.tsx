import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import AppRoutes from './routes';


function App() {

  return (
    <Router>
      <AppRoutes />
      <GlobalStyle />
    </Router>
  );
}

export default App
