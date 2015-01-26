#angular-preload-image

A simple AngularJS module to make it easy to pre-load images to prevent the horrible waterfall effect: (Demo)[]

#Installation

##Install with bower

```
bower install angular-preload-image --save-dev
```

##Add module dependency

```javascript
angular.module('app', ['angular-preload-image']);
```

#Useage

##Pre-load background images

```html
<div preload-bg-image="[URL]" default-image="[URL]" fallback-image="[URL]"></div>
```

##Pre-load standard images

```html
<img preload-image ng-src="[URL]" default-image="[URL]" fallback-image="[URL]" />
```

