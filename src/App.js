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
import Navbar from "./Navbar"

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

            <div style={{ marginLeft: '20px',marginTop: '20px' }}>
              LOGO
            </div>

            <div className='middle_navbar'>

              <div>
                Dashboard
              </div>
              <div>
              <select style={{width:'100px',background:'skyblue',border:'0px '}}>
                    <option>Orders </option>
                    <option>A</option>
                    <option>B</option>
              </select>
              </div>
              <div>
                Catalogue
              </div>
              <div>
                Logistics
              </div>
              <div>
                R & C
              </div>
              <div>
                Rating
              </div>
              <div>
                Contact/Support
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
                  <Route exact path="/"
                    element={loggedIn ? <Dashboard option={option} /> : <SignIn />} />
                  
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