import React from 'react'

import {
  AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip
} from 'recharts';

function Ratingareagraph() {
  const data = [
    { name: "Monday", x: 0, y: 10 },
    { name: "Tuesday", x: 10, y: 28 },
    { name: "Wednesday", x: 20, y: 50 },
    { name: "Thursday", x: 30, y: 73 },
    { name: "Friday", x: 40, y: 23 },
    { name: "Saturday", x: 50, y: 41 },
    { name: "Sunday", x: 60, y: 59 }
  ];

  return (
    <AreaChart width={700} height={400} data={data} style={{
      marginLeft: '27px', marginTop: '100px'

    }}>
      <CartesianGrid />
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

export default Ratingareagraph