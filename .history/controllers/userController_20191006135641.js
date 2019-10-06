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
            this.partial('../views/register/loginPage.hbs');
        });
    };

    const postRegister = function() {

    };

    return {
        getRegister,
        getLogin,
        postRegister
    }
}();