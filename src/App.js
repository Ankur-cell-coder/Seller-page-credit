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
import Orders from './Components/orders/Orders';
import Catalogue from './Components/Catalogue';
import Logistics from './Components/Logistics';
import R_C from './Components/R_C';
import Rating from './Components/Rating';
import Contact from './Components/Contact';
import OrderBilling from './Components/orders/OrderBilling';
import OrderFuilfilment from './Components/orders/OrderFuilfilment';
import OrderPayment from './Components/orders/OrderPayment';
import creditlogo from './images/Credit bazaar logo.png'
import Ratinggraph from './Components/Ratinggraph';


const logout = function () {
  localStorage.removeItem("JWT");
  window.location.reload();
}

const App = () => {
  var colorvar = "black";
  let loggedIn = false;

  const [option, setOption] = useState("seller");
  (function () {
    let authToken = localStorage.getItem("JWT");
    if (authToken === null) {
      loggedIn = false;
   
      axios.defaults.headers.common.Authorization = null;
    } else {
      loggedIn = true;
     
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

            <div style={{ marginLeft: '20px', marginTop: '4px',
            background: colorvar,
            width: '180px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center'
          
          }}>
          
           <img src={creditlogo}></img>
            </div>

            <div className='middle_navbar'>

              <div>
              {/* <a href="/"> Dashboard</a> */}
              <Link to={'/'} className='navcomp'>
                 Dashboard
                </Link>
              </div>

              <div>
                <Link to={'/orders'} className='navcomp'>
                {/* <select style={{ width: '100px', background: 'skyblue', border: '0px ',fontSize:'16px' }}> */}
                  Orders
                  {/* <option>A</option>
                  <option>B</option>
                </select> */}
                </Link>
              </div>

              <div>
              <Link to={'/catalogue'} className='navcomp'>
                {/* <select style={{ width: '100px', background: 'skyblue', border: '0px ',fontSize:'16px' }}> */}
                  <option>Catalogue </option>
                  {/* <option>A</option>
                  <option>B</option>
                </select> */}
              </Link>
              </div>
              <div>
              <Link to={'/logistics'} className='navcomp'>
                {/* <select style={{ width: '100px', background: 'skyblue', border: '0px ',fontSize:'16px' }}> */}
                  <option>Logistics </option>
                  {/* <option>A</option>
                  <option>B</option>
                </select> */}
                </Link>
              </div>
              <div>
              <Link to={'/rc'} className='navcomp'>
                {/* <select style={{ width: '100px', background: 'skyblue', border: '0px ',fontSize:'16px' }}> */}
                  <option>R & C </option>
                  {/* <option>A</option>
                  <option>B</option>
                </select> */}
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
           
            <div style=
                  {{
                   
                    background: colorvar,
                    width: '180px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop:'20px',
                    marginLeft:'20px'
                  }}>
                  {/* <Link to={"/"}
                    style=
                    {{
                      textDecoration: 'none', color: 'white', marginTop: '8px'
                    }}>
                    Credit Bazaar
                  </Link> */}
                  <img src={creditlogo}></img>
           </div>

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
                  <Route exact path="/orders/billing" element={loggedIn ? <OrderBilling/> : <SignIn />} />
                  <Route exact path="/orders/fuilfilment" element={loggedIn ? <OrderFuilfilment/> : <SignIn />} />
                  <Route exact path="/orders/payment" element={loggedIn ? <OrderPayment/> : <SignIn />} />
                  <Route exact path="/rating/graph" element={loggedIn ? <Ratinggraph/> : <SignIn />} />
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