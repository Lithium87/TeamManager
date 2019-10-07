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

    const postRegister = function(context) {
        userModel.register(context.params)
            .then(helper.handler)
            .then((data) => {
                storage.saveUser(data);
                context.redirect('#/home');
            });
    };

    const postLogin = function(context) {
        userModel.login(context.params)
            .then(helper.handler)
            .then((data) => {
                storage.saveUser(data);
                context.redirect('#/home');
            });
    };

    return {
        getRegister,
        getLogin,
        postRegister,
        postLogin
    }
}();