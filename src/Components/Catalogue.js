import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const data = [
  {
    name:"Loreum ipsum",offer:"Loreum ipsum",Brand:"loreum ipsum",additional_seller:"loreum ipsum",payment:"loreum ipsum",rating:"4",Potential:"Loreum ipsum"
  },
  {
    name:"Loreum ipsum",offer:"Loreum ipsum",Brand:"loreum ipsum",additional_seller:"loreum ipsum",payment:"loreum ipsum",rating:"4",Potential:"Loreum ipsum"
  },
  {
    name:"Loreum ipsum",offer:"Loreum ipsum",Brand:"loreum ipsum",additional_seller:"loreum ipsum",payment:"loreum ipsum",rating:"4",Potential:"Loreum ipsum"
  },
  {
    name:"Loreum ipsum",offer:"Loreum ipsum",Brand:"loreum ipsum",additional_seller:"loreum ipsum",payment:"loreum ipsum",rating:"4",Potential:"Loreum ipsum"
  },
  {
    name:"Loreum ipsum",offer:"Loreum ipsum",Brand:"loreum ipsum",additional_seller:"loreum ipsum",payment:"loreum ipsum",rating:"4",Potential:"Loreum ipsum"
  },
  {
    name:"Loreum ipsum",offer:"Loreum ipsum",Brand:"loreum ipsum",additional_seller:"loreum ipsum",payment:"loreum ipsum",rating:"4",Potential:"Loreum ipsum"
  },
  {
    name:"Loreum ipsum",offer:"Loreum ipsum",Brand:"loreum ipsum",additional_seller:"loreum ipsum",payment:"loreum ipsum",rating:"4",Potential:"Loreum ipsum"
  },
  {
    name:"Loreum ipsum",offer:"Loreum ipsum",Brand:"loreum ipsum",additional_seller:"loreum ipsum",payment:"loreum ipsum",rating:"4",Potential:"Loreum ipsum"
  },
  {
    name:"Loreum ipsum",offer:"Loreum ipsum",Brand:"loreum ipsum",additional_seller:"loreum ipsum",payment:"loreum ipsum",rating:"4",Potential:"Loreum ipsum"
  }

]

function Catalogue() {
  return (
    <Catalogue1>
      <div className='uppersection'>
        <div>Product name</div>
          <div>Payment method</div>
          <div>Rating</div>

        </div>

        <div className='inputsection'>
          <input placeholder='  Enter Product Name' className='valuesection'></input>
          <input placeholder='  Enter Payment Method' className='valuesection'></input>
          <input placeholder='  Start Rating' className='valuesection'></input>
          <input placeholder='       Search' style={{ width: '300px', height: '30px', marginTop: '10px',marginLeft:"400px" }}></input>
        </div>

        <table>
          <tr>
            <th><label><input type="checkbox" /></label></th>
            <th>Product Name</th>
            <th>Retail Offer</th>
            <th>Brand Offer</th>
            <th>Payment</th>
            <th>Additional seller count</th>
            <th>Average rating</th>
            <th>Potential opportunity</th>
          </tr>

          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td><label><input type="checkbox" /></label></td>
                <td>{val.name}</td>
                <td>{val.offer}</td>
                <td>{val.Brand}</td>
                <td>{val.additional_seller}</td>
                <td>{val.payment}</td>
                <td>{val.rating}</td>
                <td>{val.Potential}</td>
              </tr>
            )
          })}

        </table>

        <div className='lowersection'>
          <div>
            Showing 1 to 9 enteries
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
    </Catalogue1>
  )
}

export default Catalogue

const Catalogue1 = styled.div`

width:99.8%;
height:580px;
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
 width:520px;
 display:flex;
 justify-content:space-between;
 margin-left:10px;
}
.inputsection{
 margin-left:10px;
 display:flex;
 width:1400px;
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