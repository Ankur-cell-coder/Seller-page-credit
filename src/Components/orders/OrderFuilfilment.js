import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';

const data = [
    { amount: 'Loreum ipsum', mode: 'Loreum ipsum', currency: '$', value: 'Loreum ipsum', uri: 'Loreum ipsum', status: 'Pending', type: 'Loreum ipsum', vpa: 'Loreum ipsum' },
    { amount: 'Loreum ipsum', mode: 'Loreum ipsum', currency: '$', value: 'Loreum ipsum', uri: 'Loreum ipsum', status: 'Pending', type: 'Loreum ipsum', vpa: 'Loreum ipsum' },
    { amount: 'Loreum ipsum', mode: 'Loreum ipsum', currency: '$', value: 'Loreum ipsum', uri: 'Loreum ipsum', status: 'Pending', type: 'Loreum ipsum', vpa: 'Loreum ipsum' },
    { amount: 'Loreum ipsum', mode: 'Loreum ipsum', currency: '$', value: 'Loreum ipsum', uri: 'Loreum ipsum', status: 'Pending', type: 'Loreum ipsum', vpa: 'Loreum ipsum' },
    { amount: 'Loreum ipsum', mode: 'Loreum ipsum', currency: '$', value: 'Loreum ipsum', uri: 'Loreum ipsum', status: 'Pending', type: 'Loreum ipsum', vpa: 'Loreum ipsum' },
    { amount: 'Loreum ipsum', mode: 'Loreum ipsum', currency: '$', value: 'Loreum ipsum', uri: 'Loreum ipsum', status: 'Pending', type: 'Loreum ipsum', vpa: 'Loreum ipsum' },
    { amount: 'Loreum ipsum', mode: 'Loreum ipsum', currency: '$', value: 'Loreum ipsum', uri: 'Loreum ipsum', status: 'Pending', type: 'Loreum ipsum', vpa: 'Loreum ipsum' },
    { amount: 'Loreum ipsum', mode: 'Loreum ipsum', currency: '$', value: 'Loreum ipsum', uri: 'Loreum ipsum', status: 'Pending', type: 'Loreum ipsum', vpa: 'Loreum ipsum' },
    { amount: 'Loreum ipsum', mode: 'Loreum ipsum', currency: '$', value: 'Loreum ipsum', uri: 'Loreum ipsum', status: 'Pending', type: 'Loreum ipsum', vpa: 'Loreum ipsum' },
    { amount: 'Loreum ipsum', mode: 'Loreum ipsum', currency: '$', value: 'Loreum ipsum', uri: 'Loreum ipsum', status: 'Pending', type: 'Loreum ipsum', vpa: 'Loreum ipsum' }
]


function OrderFuilfilment() {
    const Navigate=useNavigate();
    const val = "< Back to Overview";
    return (
        <Fuilfilment>
            <div className='button'>
                <Link to={'/orders'} style={{textDecoration:'none',marginTop:'5px',color:'black'}}>{val}</Link>
            </div>

            <div className='orderlink'>
                <Link to={'/orders/billing'} style={{ textDecoration: 'none',color:'black' }}>Order Billing Details</Link>
                <Link to={'/orders/fuilfilment'} style={{ textDecoration: 'none',color:'red' }}>Order Fuilfilment Details</Link>
                <Link to={'/orders/payment'} style={{ textDecoration: 'none',color:'black' }}>Order Payment Details</Link>
            </div>

            <table>
                <tr>
                    <th><label><input type="checkbox" /></label></th>
                    <th>Payment_amount</th>
                    <th>Payment_mode</th>
                    <th>Price_currency</th>
                    <th>Price_value</th>
                    <th>Payment_uri</th>
                    <th>Payment_status</th>
                    <th>Payment_type</th>
                    <th>Payment_vpa</th>
                </tr>

                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td><label><input type="checkbox" /></label></td>
                            <td>{val.amount}</td>
                            <td>{val.mode}</td>
                            <td>{val.currency}</td>
                            <td>{val.value}</td>
                            <td>{val.uri}</td>
                            <td>{val.status}</td>
                            <td>{val.type}</td>
                            <td>{val.vpa}</td>
                        </tr>
                    )
                })}

            </table>
            <div className='lowersection'>
                <div>
                    Showing 1 to 10 enteries
                </div>
                <div style={{ display: 'flex', width: '200px', justifyContent: 'space-between' }}>
                    <div>
                        Previous
                    </div>
                    <div>
                        Next
                    </div>
                </div>

            </div>
        </Fuilfilment>
    )
}

export default OrderFuilfilment

const Fuilfilment = styled.div`
width:98%;
height:610px;
display:flex;
flex-direction:column;
margin-left:20px;
// border:2px solid red;

.orderlink{
    margin-top:30px;
    display:flex;
    width:600px;
    justify-content:space-between;

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
    width: 99.8%;
    height:150%;
    margin-top:1.25em;
    // border:3px solid blue;
}
th {
    border-bottom: 1px solid gray;
    text-align: left;
  }
  td {
    text-align: left;
   
    border-bottom: 1px solid gray;
  }
  .lowersection{
    margin-right:100px;
    width: 1500px;
    display:flex;
    justify-content:space-between;
    margin-top:10px;
  }
  @media only screen and (min-width: 1800px){
    width:98%;
    height:810px;
  }
    

`;