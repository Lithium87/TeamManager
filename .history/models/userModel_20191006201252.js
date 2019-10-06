const userModel = function() {
    const register = function(params) {
        let data = {...params };
        console.log(data);
    };

    return {
        register
    }
}();