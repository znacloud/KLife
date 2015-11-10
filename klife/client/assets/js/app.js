 jQuery.extend({
    linkAllCircle: function(callback) {
        'use strict';
        $(".k-circle").animate({left:"+=213px"},"fast");
        $(".l-circle").animate({left:"+=107px"},"fast");
        $(".f-circle").animate({left:"-=107px"},"fast");
        $(".e-circle").animate({left:"-=213px"},"fast",callback);
     }
,
    showECircle: function(callback) {
        'use strict';
        $(".e-circle").animate({
            left: '-80px',
            opacity: '1'
        }, 2500, callback);
    }
,
    showFCircle: function(callback) {
        'use strict';
        $(".f-circle").animate({
            left: '-40px',
            opacity: '1'
        }, 2500,callback);
    }
,
    showICircle: function(callback) {
        'use strict';
        $(".i-circle").animate({
            left: '0px',
            opacity: '1'
        }, 2500, callback);
}
,
    showLCircle: function(callback) {
        'use strict';
        $(".l-circle").animate({
            left: '40px',
            opacity: '1'
        }, 2500, callback);
}
,
    showKCircle: function(callback) {
        'use strict';
    
        $(".k-circle").animate({
            left: '80px',
            opacity: '1'
        }, 2500, callback);
    }
,
     hiddenAllCircles: function(callback) {
         'use strict';
         $(".k-circle").animate({opacity:"0"},"slow");
        $(".l-circle").animate({opacity:"0"},"slow");
        $(".i-circle").animate({opacity:"0"},"slow");
        $(".f-circle").animate({opacity:"0"},"slow");
        $(".e-circle").animate({opacity:"0"},"slow");
        $(".mix-circle").animate({opacity:"1"},"slow",callback);
     }
});





