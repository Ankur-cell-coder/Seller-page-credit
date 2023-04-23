import React from 'react'
import { useState, useEffect } from 'react';

import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Horizontal1 from './Horizontal1';
import PieChart1 from './PieChart1';
import Area1 from './Area1';
Chart.register(CategoryScale);





/////  first chart 
const options = {
    indexAxis: 'y',  
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Performance bar',
        },
    },
};

const labels = ['loreum', 'loreum', 'loreum']

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [40, 88, 60],
           
            backgroundColor: 'rgba(25, 90, 13, 0.5)',
        }

    ],
};






function Dashboard() {
    return (
        <div>
           
            <div style={{  height: '800px',width:'400px' }}>
                <Bar data={data} options={options} />
            </div>
            <Horizontal1/>
            <PieChart1/>
           <Area1/>
        </div>



    )
}

export default Dashboard