import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./LineChart.css";

class LineChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [0, 0, 0, 0, 0]
        }
    }

    async componentDidMount () {
      const response = await axios.get(`/api/v1/users/get-transactions-for-this-month`);
      const dateArr = response.data;
      const newData = [0, 0, 0, 0, 0];

        for (let i=0; i<dateArr.length; i++) {
            let str = dateArr[i];
            str = str.substr(8,2);
            if(str < 8) {
               newData[0] = ++newData[0];
            } else if(str < 15) {
                newData[1] = ++newData[1];
            }else if(str < 22) {
                newData[2] = ++newData[2];
            } else{
                newData[4] = ++newData[4];
            }
        } 

        this.setState({data: newData});
    }

    render() {
        const date = new Date();  
        const currentMonth = date.toLocaleString('default', { month: 'long' });
        let data = {
            labels: ['1-7', '8-14', '15-21', '21-28', '29+'],
            datasets: [{
                label: `Weekly transactions for the month of ${currentMonth}`,
                data: this.state.data,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    
                   
                    'rgba(153, 102, 255, 1)'
                   
                ],
                borderWidth: 0.5
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
                <Line  data={data} options={options} />
        );
    }
}

export default LineChart;