import Common from '../common/index.jsx';

export default {
    ActiveModule: 'dashboard',

    changeState: function (key, value) {
        this[key] = value;
        Common.EventProxy.trigger(key, value);
    }
}