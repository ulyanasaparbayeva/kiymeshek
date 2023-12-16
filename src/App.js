import Routes from "./routes";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  const showHeader = location.pathname !== '/';



  return (
    <div  className="App">
      {showHeader && <Header/>}
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
