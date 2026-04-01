import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Portfolio from './components/Portfolio';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const isPrivacyPage = window.location.pathname === '/privacy-policy';

  return (
    <LanguageProvider>
      <ThemeProvider>
        {isPrivacyPage ? <PrivacyPolicy /> : <Portfolio />}
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
