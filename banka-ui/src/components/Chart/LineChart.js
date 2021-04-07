import React, { Component } from "react";
import {Line} from "react-chartjs-2";

class LineChart extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        let data = {
            labels: ['1-7', '8-14', '15-21', '21-28', '29+'],
            datasets: [{
                label: 'Weekly transactions for the month of April',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                   
                ],
                borderWidth: 1
            }]
        };
       let options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }

        return (
            <div>
                <Line  data={data} options={options}/>
            </div>
        );
    }
}

export default LineChart;