const userController = function() {
    const getRegister = function(context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function() {
            this.partial('../views/register/registerPage.hbs');
        });
    };

    const getLogin = function(context) {
        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function() {
            this.partial('../views/login/loginPage.hbs');
        });
    };

    const postRegister = function() {

    };

    const postLogin = function() {

    };

    return {
        getRegister,
        getLogin,
        postRegister,
        postLogin
    }
}();