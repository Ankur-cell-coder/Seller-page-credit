import React from 'react'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import styled from "styled-components";
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);




const options = {
    indexAxis: 'x',
    elements: {
        bar: {
            borderWidth: 0
        },
    },
    plugins: {
        legend: {
            display:'false',
        },
        title: {
            display: true,
            text: 'Loreum ipsum $100000',
        },
    },
};

const labels = ['loreum', 'loreum', 'loreum', 'loreum']

const data = {
    labels,
    datasets: [
        {
          
            data: [40, 88, 60, 65],
            backgroundColor:  [
                'blue',
                '#F4C430',
                'purple',
                '#90EE90'

            ],
            barThickness:20,
        }

    ],
};



function Horizontal1() {
    return (
        <Horizonta1>

            <div className='class1' >
                <Bar data={data} options={options} />
            </div>

            <div className='class2' >
                <Bar data={data} options={options} />
            </div>

            <div className='class3'>
                <Bar data={data} options={options} />
            </div>

        </Horizonta1>
    )
}

export default Horizontal1

const Horizonta1 = styled.div`

  .class1{
     width:370px;
     height:280px;
     margin-left:407px;
     border:2px solid black;
     margin-top:-303px;
     @media only screen and (min-width: 1800px){
        margin-left:517px;
        width:455px;
     height:310px;
     margin-top:-403px;
     }
  }




  .class2{
    width:370px;
    height:280px;
    margin-left:782px;
    border:2px solid black;
    margin-top:-283px;

    @media only screen and (min-width: 1800px){
      margin-left:985px;
       width:455px;
    height:310px;
    margin-top:-313px;
    }
 }


 .class3{
    width:370px;
    height:280px;
    margin-left:1152px;
    border:2px solid black;
    margin-top:-283px;

    @media only screen and (min-width: 1800px){
      margin-left:1450px;
       width:455px;
    height:310px;
    margin-top:-313px;
    }
 }



`;