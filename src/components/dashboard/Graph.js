import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Graph = () => {
    const data = {
        labels: ['7/12', '8/12', '9/12', '10/12', '12/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12'],
        datasets: [
          {
            label: '',
            data: [120, 190, 300, 190, 200, 340, 309,390,110,50,0],
            backgroundColor: '#FFA266', // Fill color under the line
            borderColor: '#FFA266', // Line color
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0,
          },
        ],
      };
    
      const options = {
        title:{
            display:false,
            text:'Average Rainfall per month',
            fontSize:20
          },
          legend:{
            display:false,
            position:'right'
          },
          ticks: {
            stepSize: 100, // Define the interval between ticks
            min: 0,     // Minimum value on the y-axis
            max: 400,    // Maximum value on the y-axis
          },
          plugins: {
            legend: {
              display: false, // Set display to false to remove the legend
            },
        }
      };
  return (
    <div className=''>
       <Line data={data} options={options} />
    </div>
  )
}

export default Graph
