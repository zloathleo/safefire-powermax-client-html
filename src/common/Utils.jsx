export default {
    renderChuiHuiQiColor: function (_status) {
        if (_status == 2) {
            return '#333';//正在吹灰
        }
        //闲置
        return '#aaaaaa';

    }
}