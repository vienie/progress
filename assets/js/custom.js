(function($) {
	
jQuery(document).ready(function($) {

	$(".headroom").headroom({
		"tolerance": 20,
		"offset": 50,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});

});

// Full Screen Search 
$(function () {
    $('a[href="#block-progress-search"]').on('click', function(event) {
        event.preventDefault();
        $('#block-progress-search').addClass('open');
        $('#block-progress-search > form > input[type="search"]').focus();
    });
    
    $('#block-progress-search, #block-progress-search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});

})(jQuery);
