function throttle(func, delay) {
    let lastFunc;
    let lastRan;

    return function(...args) {
        const context = this;
        if (!lastRan) {
            func.call(context, ...args);
            lastRan = Date.now();
        } else {
            if (lastFunc) {
                clearTimeout(lastFunc);
            }
            lastFunc = setTimeout(function() {
                if (delay - (Date.now() - lastRan)) {
                    func.call(context, ...args);
                    lastRan = Date.now();
                }
            }), delay - (Date.now() - lastRan);
        }
    }
}

var checkPos = () => {
    const offset = 500;
    const curScrollPos = window.pageYOffset;
    const pageBottomPos = document.body.offsetHeight - window.innerHeight - offset;
    if (curScrollPos >= pageBottomPos) {
        // reload
        console.log("load next page");
    }
};

var infiniteScroll = throttle(checkPos, 300);
window.addEventListener('scroll', infiniteScroll);