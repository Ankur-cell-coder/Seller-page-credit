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
            <div style={{ width: '370px', height: '280px', marginLeft: '407px',
            border:'2px solid black',
            marginTop:"-303px",
          
             }}>
                <Bar data={data} options={options} />
            </div>
            <div style={{ width: '370px', height: '280px', marginLeft: '782px',
           
             marginTop:'-283px',
             border:'2px solid black',
         }}>
                <Bar data={data} options={options} />
            </div>
            <div style={{width: '370px', height: '280px', marginLeft: '1157px',
           
            marginTop:'-283px',
            border:'2px solid black',
        }}>
                <Bar data={data} options={options} />
            </div>

        </Horizonta1>
    )
}

export default Horizontal1

const Horizonta1 = styled.div`



`;