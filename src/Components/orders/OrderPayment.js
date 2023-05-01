import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';

function OrderPayment() {
    const Navigate=useNavigate();
    const val = "< Back to Overview";
    return (
        <Order1>

            <div >
                <button className='button' onClick={()=>Navigate(-1)}>{val}</button>
            </div>

            <div className='orderlink'>
                <Link to={'/orders/billing'} style={{ textDecoration: 'none',color:'black' }}>Order Billing Details</Link>
                <Link to={'/orders/fuilfilment'} style={{ textDecoration: 'none',color:'black' }}>Order Fuilfilment Details</Link>
                <Link to={'/orders/payment'} style={{ textDecoration: 'none',color:'red' }}>Order Payment Details</Link>
            </div>

            <div className='details'>
                <div className='content'>
                    <div>Fulfilment_type:</div>
                    <div>Tracking Link</div>
                    <div>Start_location_id</div>
                    <div>Start_location_name</div>
                    <div>Start_location_gps</div>
                    <div>Start_time</div>
                    <div>Start_time_range_start:</div>
                    <div>Start_time_range_end</div>
                </div>
                <div className='content'>
                    <div>Start_instruction_name:</div>
                    <div>Start_instruction_short_desc:</div>
                    <div>Start_contact_phone:</div>
                    <div>Start_contact_email:</div>
                    <div>End_location_location_id:</div>
                    <div>End_location_gps:</div>
                    <div>End_time_range_start:</div>
                    <div>End_time_range_end:</div>
                </div>
                <div className='content'>
                    <div>End_instruction_short_desc:</div>
                    <div>End_contact_phone:</div>
                    <div>End_contact_email:</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>


        </Order1>
    )
}

export default OrderPayment

const Order1 = styled.div`
display:flex;
flex-direction:column;
margin-left:20px;

.orderlink{
    margin-top:30px;
    display:flex;
    width:600px;
    justify-content:space-between;

  
}

.button{
    width:200px;
     height:30px;
     background:white;
     border:1px solid gray;
    font-size:18px;
}
.details{
    display:flex;
    width:1300px;
    margin-top:30px;
    justify-content:space-between;
}
.content{
    display:flex;
    flex-direction:column;
    height:450px;
    // border:2px solid black;
    // width:700px;
}


`;