import React from 'react';
import RC2 from 'react-chartjs2';

import Common from '../common/index.jsx';
//吹灰器单元格
class LuTangTrend extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: undefined };

        let mode = 'x';
        let intersect = false;
        this.chartOptions = {
            responsive: true,
            legend: {
                position: 'right',
            },
            title: {
                display: true
            },
            tooltips: {
                mode: mode,
                intersect: intersect,
            },
            hover: {
                mode: mode,
                intersect: intersect
            },
            scales: {
                yAxes: [
                    {
                        type: "linear",
                        display: true,
                        position: "left",
                        id: "y-axis-value",
                    }, {
                        type: "linear",
                        display: true,
                        position: "right",
                        id: "y-axis-status",
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            suggestedMin: -1,
                            suggestedMax: 2
                        }
                    }, {
                        type: "linear",
                        display: false,// 不显示
                        id: "y-axis-percent",
                        gridLines: {
                            drawOnChartArea: false, // 不显示
                        },
                        ticks: {
                            suggestedMin: -0.5,
                            suggestedMax: 1.5
                        }
                    }],
            }
        };
    }

    componentWillMount() {
        let _style = [
            {
                strokeColor: "#00bcd4",
            }, {
                strokeColor: "#f44336",
            }, {
                strokeColor: "#ff9800",
            }, {
                strokeColor: "#4caf50",
            }, {
                strokeColor: "#7a6fbe",
            }
        ]
        Common.MyFetch.fetch('/chuihuiqi/trend/' + this.props.name, { method: 'GET' }, function (_json) {
            let _data = _json.data;
            let _datas = _data.trneds.datas;

            let _datasets = new Array();
            _datas.forEach((_item, _index) => {
                _datasets.push({
                    label: _item.name,
                    data: _item.data,
                    borderWidth: 1,
                    fill: false,
                    steppedLine: _item.steppedLine ? _item.steppedLine : false,
                    backgroundColor: _style[_index].strokeColor,
                    borderColor: _style[_index].strokeColor,
                    yAxisID: _item.yAxisID,
                });
            });

            var _chartData = {
                title: _data.name + "历史趋势",
                labels: _data.trneds.labels,
                datasets: _datasets,
            };

            this.setState({ data: _chartData });
        }.bind(this));
    }

    render() {
        let _data = this.state.data;

        if (_data) {
            this.chartOptions.title.text = _data.title;
            return (
                <RC2 data={_data} options={this.chartOptions} type='line' />
            )
        } else {
            return (
                <div />
            )
        }
    }
}

export default LuTangTrend;