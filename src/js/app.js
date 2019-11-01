import mediumZoom from 'medium-zoom'
mediumZoom(document.querySelectorAll('[data-action="zoom"]'), {
  margin: 40,
})

document.addEventListener("DOMContentLoaded", function(){
  offline();
  lazyLoad();
});

function offline() {
    console.log();
    if ('serviceWorker' in navigator) {
        console.log('CLIENT: service worker registration in progress.');
        navigator.serviceWorker.register('offline.js').then(function() {
            console.log('CLIENT: service worker registration complete.');
        }, function() {
            console.log('CLIENT: service worker registration failure.');
        });
    } else {
        console.log('CLIENT: service worker is not supported.');
    }
}

function lazyLoad() {

    function supportsNativeIntersectionObserver() {
      return 'IntersectionObserver' in window &&
          window.IntersectionObserver.toString().indexOf('[native code]') > -1;
    }
    var support = supportsNativeIntersectionObserver();

    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype && !('isIntersecting' in IntersectionObserverEntry.prototype)) {

        Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
            get: function get() {
                return this.intersectionRatio > 0;
            }
        });
    }

    function onChange(changes) {
        // for each element that becomes visible
        changes.forEach(function (change) {
            if (change.isIntersecting) {
                change.target.classList.add('visible');
                change.target.src = change.target.dataset.src;
                // stop observing this element
                observer.unobserve(change.target);
            }
        });
    }

    var imgContainer = [].concat(_toConsumableArray(document.querySelectorAll('.lazyload')));

    if (support) {
        var observer = new IntersectionObserver(onChange, {
            threshold: [.25]
        });    

        var createObserver = function createObserver() {
            imgContainer.forEach(function (img) {
                observer.observe(img);
            });
        };

        window.addEventListener("load", function () {
            createObserver();
        }, false);
    } else {
        imgContainer.forEach(function(element) {
            element.classList.add('visible');
            element.src = element.dataset.src;
        });
    }

}