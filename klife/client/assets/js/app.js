+function ($) {
$.fn.linkAllCircle = function() {
    'use strict';
}

$.fn.showECircle = function() {
    'use strict';
    $(".e-circle").animate({
        top: '0px',
        opacity: '1'
    }, 3000, linkAllCircle);
}

$.fn.showFCircle = function() {
    'use strict';
    $(".f-circle").animate({
        top: '0px',
        opacity: '1'
    }, 3000, showECircle);
}

$.fn.showICircle = function() {
    'use strict';
    $(".i-circle").animate({
        top: '0px',
        opacity: '1'
    }, 3000, showFCircle);
}

$.fn.showLCircle = function() {
    'use strict';
    $(".l-circle").animate({
        top: '0px',
        opacity: '1'
    }, 3000, showICircle);
}

$.fn.showKCircle = function() {
    'use strict';
    
    $(".k-circle").animate({
        top: '0px',
        opacity: '1'
    }, 3000, showLCircle);
}
}(jQuery);







