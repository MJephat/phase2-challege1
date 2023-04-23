// import logo from './logo.svg';
import './App.css';
import Fetch from './Components/Fetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddForm from './Components/AddForm';
import Nav from './Components/Nav';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
   <Nav/>   
   <Fetch />
   
   <Footer />
   {/* <AddForm /> */}
      
    </div>
  );
}

export default App;
