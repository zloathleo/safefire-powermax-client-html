import Mock, { Random } from 'mockjs'
import FetchMock from 'fetch-mock';


import dashboard from './dashboard.json';
import lutangwall from './lutangwall.json';
import chuihuiqitrend from './chuihuiqitrend.json'; 
import lutangbeihuce from './lutangbeihuce.json';
import shouremian from './shouremian.json';

export default {
    init: function () {

        FetchMock.get('/lutangbeihuce', Mock.mock(lutangbeihuce));

        FetchMock.get('/shouremian', Mock.mock(shouremian));

        FetchMock.get('/chuihuiqi/trend/E11', Mock.mock(chuihuiqitrend));

        FetchMock.get('/lutangwall', Mock.mock(lutangwall));

        FetchMock.get('/dashboard', Mock.mock(dashboard));

        // 其他路由使用原生fetch，这段代码必须放最后
        FetchMock.once('*', (url, options) => {
            FetchMock.restore();
            return fetch(url, options);
        });
    }
}