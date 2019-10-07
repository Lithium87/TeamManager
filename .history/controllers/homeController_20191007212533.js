const homeController = function() {
    const getHome = function(context) {
        context.loggedIn = storage.getData('userInfo') !== null;

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function() {
            this.partial('../views/home/home.hbs');
        });
    };

    return {
        getHome
    }
}();