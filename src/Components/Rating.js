import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const data = [
  {
    name:'Loreum ipsum',item_rating:'*****',order_rating:'*****',details:'Track order'
  },
  {
    name:'Loreum ipsum',item_rating:'*****',order_rating:'*****',details:'Track order'
  },
  {
    name:'Loreum ipsum',item_rating:'*****',order_rating:'*****',details:'Track order'
  },
  {
    name:'Loreum ipsum',item_rating:'*****',order_rating:'*****',details:'Track order'
  },
  {
    name:'Loreum ipsum',item_rating:'*****',order_rating:'*****',details:'Track order'
  },
  {
    name:'Loreum ipsum',item_rating:'*****',order_rating:'*****',details:'Track order'
  },
  {
    name:'Loreum ipsum',item_rating:'*****',order_rating:'*****',details:'Track order'
  },
  {
    name:'Loreum ipsum',item_rating:'*****',order_rating:'*****',details:'Track order'
  },
  {
    name:'Loreum ipsum',item_rating:'*****',order_rating:'*****',details:'Track order'
  }
]

function Rating() {
  return (
    <Rating1>

<div className='uppersection'>
        <div>Product Name</div>
          <div>Item Rating</div>
          <div>Order Rating</div>
          

        </div>

        <div className='inputsection'>
          <input placeholder='  Enter Product Name' className='valuesection'></input>
          <input placeholder='  Select rating' className='valuesection'></input>
          <input placeholder='  Select rating' className='valuesection'></input>
          <input placeholder='       Search' style={{ width: '300px', height: '30px', marginTop: '10px',marginLeft:"400px" }}></input>
        </div>

        <table>
          <tr>
            <th><label><input type="checkbox" /></label></th>
            <th>Name of the item</th>
            <th>Rating of the item</th>
            <th>Rating of the order</th>
            <th>Details</th>
          </tr>

          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td><label><input type="checkbox" /></label></td>
                <td><Link to={'/rating/graph'} style={{textDecoration:'none'}}>{val.name}</Link></td>
                <td>{val.item_rating}</td>
                <td>{val.order_rating}</td>
                <td>{val.details}</td>
                
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

    </Rating1>
  )
}

export default Rating

const Rating1=styled.div`

width:99.8%;
width:99.8%;
height:580px;
display: flex;
flex-direction:column;


@media only screen and (min-width: 1800px){
  // border:2px solid red;
  width:98%;
  height:810px;
  margin-left:20px;
}

table {
 // border: 2px solid forestgreen;
 width: 99.8%;
    height:150%;
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