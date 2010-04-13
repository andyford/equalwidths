/*!
 * equalWidths jQuery Plugin
 * Examples and documentation at: hhttp://aloestudios.com/tools/jquery/equalwidths/
 * Copyright (c) 2010 Andy Ford
 * Version: 0.1 (2010-04-13)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.2.6+
 */
(function($){
	$.fn.equalWidths = function(options) {
		var opts = $.extend({
			stripPadding: 'none' // options: 'child', 'grand-child', 'both'
		},options);
		return this.each(function(){
			var child_count = $(this).children().size();
			if (child_count > 0) { // only proceed if we've found any children
				var w_parent = $(this).width();
				var w_child = Math.floor(w_parent / child_count);
				var w_child_last = w_parent - ( w_child * (child_count -1) );
				$(this).children().css({ 'width' : w_child + 'px' });
				$(this).children(':last-child').css({ 'width' : w_child_last + 'px' });
				if((opts.stripPadding == 'child') || (opts.stripPadding == 'both')){
					$(this).children().css({
						'padding-right': '0',
						'padding-left': '0'
					});
				}
				if((opts.stripPadding == 'grand-child') || (opts.stripPadding == 'both')){
					$(this).children().children().css({
						'padding-right': '0',
						'padding-left': '0'
					});
				}
			}
		});
	};
})(jQuery);
