import React from 'react'
import { Bar } from "react-chartjs-2";

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'sat','sun'],
    datasets: [
      {
        label: 'Target',
        data: [5, 7, 2, 8, 4, 12,5],
        backgroundColor: [
          '#464de4',
          '#464de4',
          '#464de4',
          '#464de4',
          '#464de4',
          '#464de4',
          '#464de4'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
            gridLines: {
                display:false
            },
          ticks: {
            beginAtZero: true,
            display:false
          },
        },
      ],
      xAxes: [
        {
            gridLines: {
                display:false
            },
          ticks: {
            display:false
          },
        },
      ]
    },
    legend: {
        display: false
    }
  }

const SampleBarChart = () => {
    return (
        <div>
            <Bar style={{height:"200px"}} data={data} options={options}/>
        </div>
    )
}
export default SampleBarChart