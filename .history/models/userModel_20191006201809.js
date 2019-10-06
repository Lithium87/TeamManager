const userModel = function() {
    const register = function(params) {
        delete params.repeatPassword;
        console.log(params);
    };

    return {
        register
    }
}();