// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTransaction from './Components/AddForm';
import TransactionTable from './Components/TransactionTable';
import Nav from './Components/Nav';
import Footer from './Components/Footer';


function App() {
  return (
    
  <div className="App">
    <Nav />
    <TransactionTable />
    <AddTransaction />
    <Footer />

      
    </div>
    
  );
}

export default App;
