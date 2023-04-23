import axios from 'axios';
import { Nav, Container, Row, Col }
  from "react-bootstrap";
import {
  BrowserRouter as Router, Routes,
  Route, Link
} from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard';
import { useState } from 'react';
import SignIn from "./Components/signin/signin.component";
import Orders from './Components/Orders';
import Catalogue from './Components/Catalogue';
import Logistics from './Components/Logistics';
import R_C from './Components/R_C';
import Rating from './Components/Rating';
import Contact from './Components/Contact';


const logout = function () {
  localStorage.removeItem("JWT");
  window.location.reload();
}

const App = () => {
  var colorvar = "#8EBE00";
  let loggedIn = false;

  const [option, setOption] = useState("seller");
  (function () {
    let authToken = localStorage.getItem("JWT");
    if (authToken === null) {
      loggedIn = false;
      colorvar = "#8EBE00";
      axios.defaults.headers.common.Authorization = null;
    } else {
      loggedIn = true;
      colorvar = "#ec9006";
      axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    }
  })();


  const handleChange = (e) => {
    setOption(e.currentTarget.value);
  }

  return (
    <Router>
      <div className="App">
        {loggedIn ?

          <div className='navcontent'>

            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
              LOGO
            </div>

            <div className='middle_navbar'>

              <div>
              <Link to={'/'} className='navcomp'>
                 Dashboard
                </Link>
              </div>

              <div>
                <Link to={'/orders'} className='navcomp'>
                <select style={{ width: '100px', background: 'skyblue', border: '0px ' }}>
                  <option>Orders </option>
                  <option>A</option>
                  <option>B</option>
                </select>
                </Link>
              </div>

              <div>
              <Link to={'/catalogue'} className='navcomp'>
                <select style={{ width: '100px', background: 'skyblue', border: '0px ' }}>
                  <option>Catalogue </option>
                  <option>A</option>
                  <option>B</option>
                </select>
              </Link>
              </div>
              <div>
              <Link to={'/logistics'} className='navcomp'>
                <select style={{ width: '100px', background: 'skyblue', border: '0px ' }}>
                  <option>Logistics </option>
                  <option>A</option>
                  <option>B</option>
                </select>
                </Link>
              </div>
              <div>
              <Link to={'/rc'} className='navcomp'>
                <select style={{ width: '100px', background: 'skyblue', border: '0px ' }}>
                  <option>R & C </option>
                  <option>A</option>
                  <option>B</option>
                </select>
                </Link>
              </div>
              <div>
              <Link to={'/rating'} className='navcomp'>
                Rating
                </Link>
              </div>
              <div>
                <Link to={'/contact'} className='navcomp'>
                 Contact/Support
                </Link>
                
              </div>


            </div>

            <Link to={"/"} onClick={logout} className='lgout'>
              Logout
            </Link>

          </div>
          :

          <Nav>
            <nav className="nav">
              <a href="/" className="title">
                LOGO
              </a>
            </nav>

          </Nav>


        }

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={loggedIn ? <Dashboard /> : <SignIn />} />
                  <Route exact path="/orders" element={loggedIn ? <Orders /> : <SignIn />} />
                  <Route exact path="/catalogue" element={loggedIn ? <Catalogue /> : <SignIn />} />
                  <Route exact path="/logistics" element={loggedIn ? <Logistics /> : <SignIn />} />
                  <Route exact path="/rc" element={loggedIn ? <R_C /> : <SignIn />} />
                  <Route exact path="/rating" element={loggedIn ? <Rating /> : <SignIn />} />
                  <Route exact path="/contact" element={loggedIn ? <Contact /> : <SignIn />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;