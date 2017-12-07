import React from 'react';
import RC2 from 'react-chartjs2';

import Common from '../common/index.jsx';
//吹灰器单元格
class LuTangTrend extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: undefined };
        this.startTime = 0;

        this.updateData = this.updateData.bind(this);
        this.clickSearch = this.clickSearch.bind(this);
        let mode = 'x';

        this.chartOptions = {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true
            },
            tooltips: {
                mode: 'index',
                intersect: true,
            },
            hover: {
                mode: 'index',
                intersect: true
            },
            scales: {
                xAxes: [{
                    type: "time",
                    time: {
                        format: 'MM/DD HH:mm:ss',
                        tooltipFormat: 'MM/DD HH:mm:ss'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                },],
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
        this.updateData();
    }

    updateData() {
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
        Common.MyFetch.fetch('/chuihuiqi/trend/' + this.props.name + "/" + this.startTime, { method: 'GET' }, function (_json) {
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

            let _labels_long = _data.trneds.labels;
            let _labels = [];
            _labels_long.map(function (_label, _index) {
                _labels[_index] = new Date(_label);
            });

            var _chartData = {
                title: _data.name + "历史趋势",
                labels: _labels,
                datasets: _datasets,
            };

            this.setState({ data: _chartData });
        }.bind(this));
    }

    clickSearch() {
        let _date = this.inputDate.value;
        let _time = this.inputTime.value;
        if (_date && _time) {
            this.startTime = new Date(_date + ' ' + _time).getTime();
          
            console.log(_date + "," + this.startTime);
            this.updateData();
        }

    }

    render() {
        let _data = this.state.data;

        if (_data) {
            this.chartOptions.title.text = _data.title;
            return (
                <div>
                    起始时间:
                    <input type="date" ref={(_ref) => this.inputDate = _ref} />
                    <input type="time" ref={(_ref) => this.inputTime = _ref} />
                    <button className="btn btn-primary" onClick={this.clickSearch} >查询</button>
                    <RC2 data={_data} options={this.chartOptions} type='line' />
                </div>
            )
        } else {
            return (
                <div />
            )
        }
    }
}

export default LuTangTrend;