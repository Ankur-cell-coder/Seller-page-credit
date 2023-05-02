import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';


const data = [
    {
        name: "Jane Copper",
        adress: "8502 Peterson Rd Inglewood,Maine 98380",
        email: "janecopper@example.com",
        phone: "(603) 555-01203"
    }
]

function OrderBilling() {

    const val = "< Back to Overview";
    const Navigate = useNavigate();

    return (
        <Billing>
            <div className='button'>
                <Link to={'/orders'} style={{ textDecoration: 'none', marginTop: '5px', color: 'black' }}>{val}</Link>
            </div>

            <div className='orderlink'>
                <Link to={'/orders/billing'} style={{ textDecoration: 'none', color: 'red' }}>Order Billing Details</Link>
                <Link to={'/orders/fuilfilment'} style={{ textDecoration: 'none', color: 'black' }}>Order Fuilfilment Details</Link>
                <Link to={'/orders/payment'} style={{ textDecoration: 'none', color: 'black' }}>Order Payment Details</Link>
            </div>

            <table>
                <tr>
                    <th><label><input type="checkbox" /></label></th>
                    <th>Billing Name</th>
                    <th>Billing Address</th>
                    <th>Billing Email</th>
                    <th>Billing Phone</th>
                </tr>

                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td><label><input type="checkbox" /></label></td>
                            <td>{val.name}</td>
                            <td>{val.adress}</td>
                            <td>{val.email}</td>
                            <td>{val.phone}</td>
                        </tr>
                    )
                })}

            </table>

        </Billing>
    )
}

export default OrderBilling

const Billing = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:20px;

    .orderlink{
        margin-top:30px;
        display:flex;
        width:600px;
        justify-content:space-between;
        
        .link {
            color: white;
          }
          
          /* Specific styles for active links */
          .link-active {
            color: black;
            background: orange;
          }
      
    }
   
    .button{
        width:200px;
     height:35px;
     background:white;
     border:1px solid gray;
    font-size:18px;
    display:flex;
    justify-content:center;
    }
    table{
        margin-top:25px;
    }
    th {
        border-bottom: 1px solid gray;
        text-align: left;
      }
      td {
        text-align: left;
        width:150px;
        height:50px;
        border-bottom: 1px solid gray;
      }
`;