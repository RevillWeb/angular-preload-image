#angular-preload-image

A simple AngularJS module to make it easy to pre-load images dynamic images with fallback support

#Installation

##Install with bower

```
bower install angular-dynamic-preload-image
```

##Include script files

```html
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/angular-preload-image/angular-preload-image.min.js"></script>
```

##Add module dependency

```javascript
angular.module('app', ['angular-dynamic-preload-image']);
```

#Usage

##Pre-load background images

```html
<div preload-bg-image="[URL]" default-image="[URL]" fallback-image="[URL]"></div>
```

##Pre-load standard images

```html
<img preload-image ng-src="[URL]" default-image="[URL]" fallback-image="[URL]" />
```

#Licence

MIT

#Demo

Check out the [demo](http://revillweb.github.io/angular-preload-image/) for an example of pre-loading background images and pre-loading standard images with AngularJS.

 
#Credit

This project forked from [RevillWeb/angular-preload-image](https://github.com/RevillWeb/angular-preload-image).

