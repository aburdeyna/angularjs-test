angular.module('myApp').component('readMore', {
    template: `<div class="row">
                    <div class="card" style="width: 18rem; width:100%;">
                        <div class="card-body">
                            <h5 class="card-title">{{$ctrl.article.title.rendered}}</h5>
                            <p class="card-text" ng-bind-html="$ctrl.article.content.rendered"></p>
                        </div>
                    </div>
                </div>`,
    controller: ['$routeParams', 'posts',
        function moreArtcl($routeParams, posts) {
            var self = this;
            this.postId = $routeParams.postId;
            this.article = {};
            posts.get()
                .then(function(response) {
                    function exactId(article) {
                        return article.id == self.postId;
                    }
                    self.article = response.data.find(exactId);
                });
        }
    ]
});