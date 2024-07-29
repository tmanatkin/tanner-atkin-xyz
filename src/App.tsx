// components
import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import SideBySideSections from './components/SideBySideSection';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

// styles
import './assets/styles/normalize.css';
import './assets/styles/style.css';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Skills />
        <SideBySideSections>
          <Contact />
          <Resume />
        </SideBySideSections>
      </Main>
      <Footer />
    </>
  );
}

export default App;
