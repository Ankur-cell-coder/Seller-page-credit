import React from 'react'
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


const options={
  plugins: {
    legend: {
        display: true,
        position:'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
            color: 'black'
        }
    }
}
}

const data={
  datasets:[{
    data:[915,359,545,637,1,670,289,496,448,799],
  backgroundColor:[
    'blue',
    'green',
    'purple',
    'violet',
    'blue',
    'red',
    'orange',
    
  ]
}],

  labels:[
    'Loreum ipsum',
    'Loreum ipsum',
    'Loreum ipsum',
    'Loreum ipsum',
    'Loreum ipsum',
    'Loreum ipsum',
    
  ],
 
};


function PieChart1() {


    

  return (
    <div  style={{marginLeft:'2px',border:'2px solid black',
        marginTop:'23px',
        width:'400px'
    }}>
     <div style={{width:'75%',height:"80%"}}>
     <Pie data={data} options={options} />
     </div>
      
         
    </div>
  )
}

export default PieChart1