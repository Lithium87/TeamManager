const userModel = function() {
    const register = function(params) {
        let data = {
            username: params.username,
            password: params.password
        };
        console.log(data);
    };

    return {
        register
    }
}();