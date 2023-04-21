import React from 'react'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);


const options = {
    indexAxis: 'x',
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

const labels = ['loreum', 'loreum', 'loreum', 'loreum']

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [40, 88, 60, 65],

            backgroundColor: 'rgba(25, 90, 13, 0.5)',
        }

    ],
};



function Horizontal1() {
    return (
        <div>
            <div style={{ width: '300px', height: '400px', marginLeft: '450px',marginTop: "-800px" }}>
                <Bar data={data} options={options} />
            </div>
            <div style={{ width: '300px', height: '400px', marginLeft: '750px', marginTop: "-400px" }}>
                <Bar data={data} options={options} />
            </div>
            <div style={{ width: '300px', height: '400px', marginLeft: '1120px', marginTop: "-400px" }}>
                <Bar data={data} options={options} />
            </div>

        </div>
    )
}

export default Horizontal1