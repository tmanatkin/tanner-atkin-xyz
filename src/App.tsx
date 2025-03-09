// components
import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
// import ColorChange from './components/ColorChange';

// styles
import './assets/styles/normalize.css';
import './assets/styles/style.css';

// app
function App() {
  return (
    <>
      <Header />
      <Main>
        <Skills />
        {/* <ColorChange /> */}
        <Contact />
        <Resume />
      </Main>
      <Footer />
    </>
  );
}

export default App;
