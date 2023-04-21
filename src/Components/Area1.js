import React from 'react'
import {AreaChart, Area, XAxis, YAxis, 
    CartesianGrid, Tooltip} from 'recharts';

function Area1() {

    const data = [
        {name:"Monday", x:0, y:10},
        {name:"Tuesday", x:10, y:28},
        {name:"Wednesday", x:20, y:50},
        {name:"Thursday", x:30, y:73},
        {name:"Friday", x:40, y:23},
        {name:"Saturday", x:50, y:45},
        {name:"Sunday", x:60, y:53}
    ];

  return (
    
    <AreaChart width={700} height={400} data={data} style={{marginLeft:'600px',marginTop:'-400px'}}>
    <CartesianGrid/>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area dataKey="x" stackId="1" 
        stroke="skyblue" fill="skyblue" />
    <Area dataKey="y" stackId="1" 
        stroke="white" fill="white" />
</AreaChart>
  )
}

export default Area1