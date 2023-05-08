import React from 'react'
import styled from 'styled-components'

const data = [
  {
   PSIN:'Loreum ipsum',name:'Loreum ipsum',address:'loreum ipsum',date:'loreum ipsum',price:'$1500',status:'Returned',track:'Track order'  
  },
  {
    PSIN:'Loreum ipsum',name:'Loreum ipsum',address:'loreum ipsum',date:'loreum ipsum',price:'$1500',status:'Returned',track:'Track order'  
   },
   {
    PSIN:'Loreum ipsum',name:'Loreum ipsum',address:'loreum ipsum',date:'loreum ipsum',price:'$1500',status:'Returned',track:'Track order'  
   },
   {
    PSIN:'Loreum ipsum',name:'Loreum ipsum',address:'loreum ipsum',date:'loreum ipsum',price:'$1500',status:'Returned',track:'Track order'  
   },
   {
    PSIN:'Loreum ipsum',name:'Loreum ipsum',address:'loreum ipsum',date:'loreum ipsum',price:'$1500',status:'Returned',track:'Track order'  
   },
   {
    PSIN:'Loreum ipsum',name:'Loreum ipsum',address:'loreum ipsum',date:'loreum ipsum',price:'$1500',status:'Returned',track:'Track order'  
   },
   {
    PSIN:'Loreum ipsum',name:'Loreum ipsum',address:'loreum ipsum',date:'loreum ipsum',price:'$1500',status:'Returned',track:'Track order'  
   },
   {
    PSIN:'Loreum ipsum',name:'Loreum ipsum',address:'loreum ipsum',date:'loreum ipsum',price:'$1500',status:'Returned',track:'Track order'  
   },
   {
    PSIN:'Loreum ipsum',name:'Loreum ipsum',address:'loreum ipsum',date:'loreum ipsum',price:'$1500',status:'Returned',track:'Track order'  
   }


]

function R_C() {
  return (
  <Rc1>
     <div className='uppersection'>
        <div>PSIN</div>
          <div>Date</div>
          <div>Status</div>

        </div>

        <div className='inputsection'>
          <input placeholder='  Enter PSIN' className='valuesection'></input>
          <input placeholder='  Enter Date' className='valuesection'></input>
          <input placeholder='  Returns and Cancel' className='valuesection'></input>
          <input placeholder='       Search' style={{ width: '300px', height: '30px', marginTop: '10px',marginLeft:"400px" }}></input>
        </div>

        <table>
          <tr>
            <th><label><input type="checkbox" /></label></th>
            <th>PSIN</th>
            <th>Product Name</th>
            <th>Address</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
            <th>Track</th>
          </tr>

          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td><label><input type="checkbox" /></label></td>
                <td>{val.PSIN}</td>
                <td>{val.name}</td>
                <td>{val.address}</td>
                <td>{val.date}</td>
                <td>{val.price}</td>
                <td>{val.status}</td>
                <td>{val.track}</td>
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
  </Rc1>
  )
}

export default R_C

const Rc1=styled.div`


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