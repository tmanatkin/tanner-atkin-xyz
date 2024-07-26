// components
import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import Resume from './components/Resume';
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
        <Resume />
      </Main>
      <Footer />
    </>
  );
}

export default App;