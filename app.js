angular.module('app', ['angular-preload-image']);

angular.module('app').controller('MainController', function(){
    var vm = this;
    vm.images = [
        "http://image.tmdb.org/t/p/w780//2sRj5PmLVRzLLdsOUILGH0LaukE.jpg",
        "http://image.tmdb.org/t/p/w780//mUkuc2wyV9dHLG0D0Loaw5pO2s8.jpg",
        "http://image.tmdb.org/t/p/w780//rvk7SMZRKR5BxDAxZmR5RF666uC.jpg",
        "http://image.tmdb.org/t/p/w780//wvT2t6A6sLWAmbIKef7k8QUcKWt.jpg"
    ];
});
