export default {
    fetch: function (url, _opt, _then) {
        _opt.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };

        fetch(url, _opt).then(function (response) {
            //ok status 200-299  
            if (response.ok) {
                response.json().then(function (data) {
                    if (_then) {
                        _then(data);
                    }
                });
            } else {
                throw new Error(response.statusText);
            }

        }).catch(function (err) {
            console.warn(err);
        });
    }
}