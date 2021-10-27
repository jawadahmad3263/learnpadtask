import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/homePage/container/HomePage';
import PageNotFound from './pages/pageNotFound/ui/PageNotFound';
import FooterUi from './components/footer/ui/FooterUi';
import Navbar from './components/navbar/container/Navbar';
import SignUp from './pages/signUpPage/container/SignUp';
import LoginPage from './pages/loginPage/container/LoginPage';
function App() {
  return (
    
    <Router>
       <Navbar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={LoginPage}/>
          <Route exact path="*" component={PageNotFound}/>
         
        </Switch>
        <FooterUi/>
    </Router>
  );
}

export default App;
