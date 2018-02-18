app.factory('posts', function($http) {
    return {
        get: function() {
            return $http.get("https://inx.wp-funnel.com/wp-json/wp/v2/posts");
        }
    };
})
