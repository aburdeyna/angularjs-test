function artclCtrl(posts) {
    var self = this;
    this.articles = [];
    posts.get()
        .then(function(response) {
            self.articles = response.data;
        });
}

angular.module('myApp').component('articles', {
    template: `<article ng-repeat="article in $ctrl.articles" artc="article"></article>`,
    controller: artclCtrl
});

