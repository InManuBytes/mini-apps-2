import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

export default class LineGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart() {
        const { prices }  = this.props;
        const labels = Object.keys(prices);
        // TODO convert label to someting more meaningful
        // console.log(labels);
        const data = labels.map(label => {
            return prices[label];
        })
        console.log(data);
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Bitcoin Prices 2019",
                        backgroundColor: 'rgb(148, 208, 207)',
                        borderColor: 'rgb(38, 165, 163)',
                        data: data,
                    }
                ]
            },
            options: {
                //Customize chart options
                // https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a
                scales: {
                    xAxes: [{
                        type: 'time',
                        distribution: 'series'
                    }]
                }
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        );
    }
}
