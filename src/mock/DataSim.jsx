import Mock, { Random } from 'mockjs'
import FetchMock from 'fetch-mock';

export default {
    init: function () {

        FetchMock.get('/dashboard', Mock.mock({
            'summary': [
                {
                    field: '机组负荷',
                    value: 90,
                },
                {
                    field: '锅炉负荷',
                    value: 190
                },
                {
                    field: '再热器出口工质温度',
                    value: 90
                },
                {
                    field: '排烟温度',
                    value: 290
                },
                {
                    field: '主汽压力',
                    value: 290
                },
                {
                    field: '总给煤量',
                    value: 290
                },
                {
                    field: '三过出口蒸汽温度',
                    value: 290
                }
            ],
            'kongyuqi': {
                name: '空预器',
                pollution_rate: 30.01,
                values: [
                    {
                        field: '烟气A',
                        value: 90,
                    },
                    {
                        field: '烟气B',
                        value: 190
                    },
                    {
                        field: '工质A',
                        value: 90
                    },
                    {
                        field: '工质B',
                        value: 290
                    }
                ]
            }
        }));

        // 其他路由使用原生fetch，这段代码必须放最后
        FetchMock.once('*', (url, options) => {
            FetchMock.restore();
            return fetch(url, options);
        });
    }
}