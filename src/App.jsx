import './App.css';
import {
  Contact,
  FifthBlock,
  FirstBlock,
  Footer,
  FourthBlock,
  Navbar,
  SecondBlock,
  SixthBlock,
  ThirdBlock,
} from './components';
import './i18n';

function App() {
  return (
    <>
      <div className="flex flex-col relative px-3 md:px-0">
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between">
          <FirstBlock />
          <SecondBlock />
          <ThirdBlock />
          <FourthBlock />
          <FifthBlock />
          <SixthBlock />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
