import Age from "./Home/Age";
import Apphome from "./Home/Apphome";
import Device from "./Home/Device";
import Download from "./Home/Download";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Navbar from "./Home/Navbar";
import About from "./Home/About";
function App (){
  return(
  <div>
    <Navbar/>
    <Header/>
    <About/>
    <Device/>
    <Age/>
    <Download/>
    <Apphome/>
    <Footer/>
  </div>
  );
}

export default App ;

