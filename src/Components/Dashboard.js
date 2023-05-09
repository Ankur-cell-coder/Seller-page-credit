import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';

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
        <Dashboard1 >
           <Search/>
            <div className='Bargraph'>
                <Bar data={data} options={options} />
            </div>
              <Horizontal1/>  
             <PieChart1/> 
           <Area1/>
        </Dashboard1>



    )
}

export default Dashboard

const Dashboard1=styled.div`

//    border:2px solid red;
   @media only screen and (min-width: 1800px){
    height:833px;
  }
   
  .Bargraph{
    height:300px;
    width:400px;
    border:2px solid red;
    margin-left:2px;

    @media only screen and (min-width: 1800px){
        height:400px;
        width:500px;
        margin-left:10px;
    }
  
  }

`;