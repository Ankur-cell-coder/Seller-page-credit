import React from 'react'
import { useState, useEffect } from 'react';

import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Horizontal1 from './Horizontal1';
import PieChart1 from './PieChart1';

import Area1 from './Area1';
import Search from './Search';
Chart.register(CategoryScale);


/////  first chart 
const options = {
    indexAxis: 'y',  
    elements: {
        bar: {
            borderWidth: 0,
        },
    },
   
    plugins: {
        legend: {
            position: 'bottom',
            align:'start',
            labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                  color: 'black'
              }
        },
        title: {
            display: true,
            text: 'Performance',
        },
    },
};


const labels=['Loreum ', 'Loreum ', 'Loreum ']
const data = {
    labels,
    datasets: [
        {
            data: [40, 88, 60],
            backgroundColor: 
            [
                'blue',
                '#F4C430',
                'purple',
            ],
        }

    ],
    
};






function Dashboard() {
    return (
        <div >
           <Search/>
            <div style={{  height: '300px',width:'400px',border:'2px solid red',marginLeft:'2px'}}>
                <Bar data={data} options={options} />
            </div>
              <Horizontal1/>  
             <PieChart1/> 
           <Area1/>
        </div>



    )
}

export default Dashboard