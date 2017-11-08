document.addEventListener("DOMContentLoaded", function(){
  lazyLoad();
  getSystemStatus();
});

function getSystemStatus() {
    let request = new XMLHttpRequest(),
        url = "https://status.samyerkes.com/api/v1/status";
    request.open('GET', url, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            let systemStatus = JSON.parse(request.responseText).data;
            printSystemStatusButton(systemStatus);
        } else {
            console.log('The resource returned an error');
        }
    };
    request.onerror = function() {
      console.log('Could not connect to the resource')
    };
    request.send();
}
function printSystemStatusButton(text) {
    let myelement = document.getElementById("system_status");
    myelement.innerHTML = text;
    text !== "All systems are operational" && myelement.classList.add('is-danger');
}

function lazyLoad() {

    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype && !('isIntersecting' in IntersectionObserverEntry.prototype)) {

        Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
            get: function get() {
                return this.intersectionRatio > 0;
            }
        });
    }

    // create our observer
    var observer = new IntersectionObserver(onChange, {
        threshold: [.25]
    });

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

    var createObserver = function createObserver() {
        imgContainer.forEach(function (img) {
            observer.observe(img);
        });
    };

    window.addEventListener("load", function () {
        createObserver();
    }, false);

}