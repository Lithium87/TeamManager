const userModel = function() {
    const register = function(params) {
        let data = {
            username: params.username,
            password: params.password
        };

        let url = '';
        let authString = '';
        console.log(data);
    };

    return {
        register
    }
}();