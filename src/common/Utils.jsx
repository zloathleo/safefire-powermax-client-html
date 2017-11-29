export default {
    renderChuiHuiQiColor: function (_status) {
        if (_status == 1) {
            return '#4caf50';//需要吹灰
        } else if (_status == 2) {
            return '#ff9800';//正在吹灰
        }
        //未吹灰 0 
        return '#eee';

    }
}