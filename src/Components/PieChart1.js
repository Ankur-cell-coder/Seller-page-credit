import React from 'react'
import { PieChart, Pie} from 'recharts';

function PieChart1() {

    const data = [
        {name: 'loreum ipsum', students: 400},
        {name: 'loreum ipsum', students: 600},
        {name: 'loreum ipsum', students: 200},
        {name: 'loreum ipsum', students: 100},
        {name: 'loreum ipsum', students: 400},
        {name: 'loreum ipsum', students: 600},
        {name: 'loreum ipsum', students: 200},
        {name: 'loreum ipsum', students: 100},
        {name: 'loreum ipsum', students: 100}

      ];

  return (
    <div>
         <PieChart width={300} height={300} style={{marginLeft:'50px',marginTop:'-100px'}}>
          <Pie data={data} dataKey="students" outerRadius={150} fill="green" />
        </PieChart>
    </div>
  )
}

export default PieChart1