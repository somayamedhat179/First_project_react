import Age from "./Home/Age";
import Apphome from "./Home/Apphome";
import Device from "./Home/Device";
import Download from "./Home/Download";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Navbar from "./Home/Navbar";
import About from "./Home/About";
import Cart from "./Cart";
function App (){
  const person = [
    {firstName : "Somaya",lastName:"Medhat",color:"black",id:"1"},
    {firstName : "Sara",lastName:"Ahmed",color:"red",id:"2"},
    {firstName : "Sama",lastName:"Mohammed",color:"White",id:"3"},
    {firstName : "Sohaila",lastName:"Maged",color:"yellow",id:"4"},
    {firstName : "Sandy",lastName:"Ali",color:"green",id:"5"},
  ];
  return(
  <div>
    <Navbar/>
    <Header/>
    <About/>
    <Device/>
    <Age/>
    <Download/>
    <Apphome/>
    <Cart allData={person} />
    <Footer/>
      
  </div>
  );
}

export default App ;

