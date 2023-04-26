import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const data = [
  {
    domain_id: "#AH6AGH", ordered_id: "23/09/2022", ordered_data: "Jacob Marcus", buyer_id: "#AHGA6H", city_code: "#AHGA6H", country_code: "#AH6AGH", payment_mode: "card",
    order_status: "processing", total_order: "$1000"
  },
  {
    domain_id: "#AH6AGH", ordered_id: "23/09/2022", ordered_data: "Jacob Marcus", buyer_id: "#AHGA6H", city_code: "#AHGA6H", country_code: "#AH6AGH", payment_mode: "card",
    order_status: "processing", total_order: "$1000"
  },
  {
    domain_id: "#AH6AGH", ordered_id: "23/09/2022", ordered_data: "Jacob Marcus", buyer_id: "#AHGA6H", city_code: "#AHGA6H", country_code: "#AH6AGH", payment_mode: "card",
    order_status: "processing", total_order: "$1000"
  },
  {
    domain_id: "#AH6AGH", ordered_id: "23/09/2022", ordered_data: "Jacob Marcus", buyer_id: "#AHGA6H", city_code: "#AHGA6H", country_code: "#AH6AGH", payment_mode: "card",
    order_status: "processing", total_order: "$1000"
  },
  {
    domain_id: "#AH6AGH", ordered_id: "23/09/2022", ordered_data: "Jacob Marcus", buyer_id: "#AHGA6H", city_code: "#AHGA6H", country_code: "#AH6AGH", payment_mode: "card",
    order_status: "processing", total_order: "$1000"
  },
  {
    domain_id: "#AH6AGH", ordered_id: "23/09/2022", ordered_data: "Jacob Marcus", buyer_id: "#AHGA6H", city_code: "#AHGA6H", country_code: "#AH6AGH", payment_mode: "card",
    order_status: "processing", total_order: "$1000"
  },
  {
    domain_id: "#AH6AGH", ordered_id: "23/09/2022", ordered_data: "Jacob Marcus", buyer_id: "#AHGA6H", city_code: "#AHGA6H", country_code: "#AH6AGH", payment_mode: "card",
    order_status: "processing", total_order: "$1000"
  },
  {
    domain_id: "#AH6AGH", ordered_id: "23/09/2022", ordered_data: "Jacob Marcus", buyer_id: "#AHGA6H", city_code: "#AHGA6H", country_code: "#AH6AGH", payment_mode: "card",
    order_status: "processing", total_order: "$1000"
  },
  {
    domain_id: "#AH6AGH", ordered_id: "23/09/2022", ordered_data: "Jacob Marcus", buyer_id: "#AHGA6H", city_code: "#AHGA6H", country_code: "#AH6AGH", payment_mode: "card",
    order_status: "processing", total_order: "$1000"
  }

]

function Orders() {



  return (

    <Orders1>
       
      <div className='uppersection'>
          <div>Domain Id</div>
          <div>Order Id</div>
          <div>Start Date</div>
          <div>City code</div>
      </div>

      <div className='inputsection'>
         <input placeholder='  Enter Domain Id' className='valuesection'></input>
         <input placeholder='  Enter Order Id'  className='valuesection'></input>
         <input placeholder='  Start Date'  className='valuesection'></input>
         <input placeholder='  Enter City Code'  className='valuesection'></input>
         <input placeholder='       Search' style={{width:'300px',height:'30px',marginTop:'10px'}}></input>
      </div>

      <table>
        <tr>
          <th><label><input type="checkbox" /></label></th>
          <th>Domain Id</th>
          <th>Ordered Id</th>
          <th>Ordered date</th>
          <th>Buyer Id</th>
          <th>City Code</th>
          <th>Country Code</th>
          <th>Payment mode</th>
          <th>Order Status</th>
          <th>Total Order Value</th>
        </tr>

        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td><label><input type="checkbox" /></label></td>
              <td>{val.domain_id}</td>
              <td>{val.ordered_id}</td>
              <td>{val.ordered_data}</td>
              <td>{val.buyer_id}</td>
              <td>{val.city_code}</td>
              <td>{val.country_code}</td>
              <td>{val.payment_mode}</td>
              <td>{val.order_status}</td>
              <td>{val.total_order}</td>
            </tr>
          )
        })}

      </table>

      <div className='lowersection'>
        <div>
          Showing 1 to 9 enteries
        </div>
        <div style={{display:'flex',width:'200px',justifyContent:'space-between'}}>
          <div>
            Previous
          </div>
          <div>
            Next
          </div>
        </div>

      </div>
    </Orders1>

  )
}

export default Orders

const Orders1 = styled.div`
   width:99.8%;
   height:580px;
  //  border:2px solid red;
   display: flex;
   flex-direction:column;
   table {
    // border: 2px solid forestgreen;
    width: 1536px;
    height: 560px;
    margin-top:20px;
  }
  .lowersection{
    margin-left:10px;
    width: 1500px;
    display:flex;
    justify-content:space-between;
    margin-top:10px;
  }
   th {
    border-bottom: 1px solid gray;
  }
  td {
    text-align: center;
    border-bottom: 1px solid gray;
  }

  .uppersection{
    width:980px;
    display:flex;
    justify-content:space-between;
    margin-left:10px;
  }
  .inputsection{
    margin-left:10px;
    display:flex;
    width:1500px;
    justify-content: space-between;
  }
  .valuesection{
    margin-top:10px;
    display:flex;
    width:190px;
    height:30px;
    justify-content:center;
  }
`;