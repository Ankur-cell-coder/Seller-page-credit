import React from 'react'
import styled from 'styled-components';
import {AreaChart, Area, XAxis, YAxis, 
    CartesianGrid, Tooltip} from 'recharts';

function Area1() {

    const data = [
        {name:"Monday", x:0, y:10},
        {name:"Tuesday", x:10, y:28},
        {name:"Wednesday", x:20, y:50},
        {name:"Thursday", x:30, y:73},
        {name:"Friday", x:40, y:23},
        {name:"Saturday", x:50, y:41},
        {name:"Sunday", x:60, y:59}
    ];

    var w = window.innerWidth;
    // console.log(w);

    if(w>=1920)
    {
      
      return (
        <AreaChart width={1387} height={460} data={data}  style={{marginLeft:'515px',marginTop:'-465px',
        border:"2px solid black"
        }}>
        <CartesianGrid/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area dataKey="x" stackId="1" 
            stroke="#abddfc" fill="#abddfc" />
        <Area dataKey="y" stackId="1" 
            stroke="#abddfc" fill="#abddfc" />
    </AreaChart>
      )
       
    }
   else{
  return (
    <AreaChart width={1122} height={325} data={data}  style={{marginLeft:'407px',marginTop:'-328px',
    border:"2px solid black"
    }}>
    <CartesianGrid/>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area dataKey="x" stackId="1" 
        stroke="#abddfc" fill="#abddfc" />
    <Area dataKey="y" stackId="1" 
        stroke="#abddfc" fill="#abddfc" />
</AreaChart>
   
  )
   }
}

export default Area1

const Are1=styled.div`

 

`;