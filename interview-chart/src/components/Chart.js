import React, {Component} from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels :['Delhi', 'Hyderabad', 'Chennai', 'Mumbai', 'Banglore'],
                datasets : [
                     {
                         label : 'Population',
                         data : [317594,181045,153060,106519,105162],
                         backgroundColor: ['pink','purple','violet','cyan','yellow']
                     }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPostion: 'right'
    }
 render() {
     return(
         <div className="chart">
        <Bar
            data={this.state.chartData}
            options={{
                title: {
                    display:this.props.displayTitle,
                    text: 'Largest Cities In India',
                    fontSize: 25
                },
                legend : {
                    display:this.props.displayLegend,
                    position: this.props.legendPostion
                }
             }}
        />

        <Line
            data={this.state.chartData}
            options={{
                title: {
                    display:this.props.displayTitle,
                    text: 'Largest Cities In India',
                    fontSize: 25
                },
                legend : {
                    display:this.props.displayLegend,
                    position: this.props.legendPostion
                }
             }}
        />

        <Pie
            data={this.state.chartData}
            options={{
                title: {
                    display:this.props.displayTitle,
                    text: 'Largest Cities In India',
                    fontSize: 25
                },
                legend : {
                    display:this.props.displayLegend,
                    position: this.props.legendPostion
                }
             }}
        />
         </div>
     )
 }
}

export default Chart;