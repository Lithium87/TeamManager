const app = Sammy('#main', function() {
    this.use('Handlebars', 'hbs');

    this.get('#/home', homeController.getHome);

    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);
    this.get('#/logout', userController.logout);
});

(() => {
    app.run('#/home');
})();