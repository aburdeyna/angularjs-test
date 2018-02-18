angular.module('myApp').component('article', {
    template: `<div class="row">
                    <div class="card" style="width: 18rem; width:100%;">
                        <div class="card-body">
                            <h5 class="card-title">{{$ctrl.artc.title.rendered}}</h5>
                            <p class="card-text">{{$ctrl.artc.excerpt.rendered}}</p>
                            <a href="#!/post/{{$ctrl.artc.id}}" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>`,
    bindings: {
        artc: '='
    }
});
