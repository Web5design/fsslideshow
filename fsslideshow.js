jQuery.noConflict();

jQuery(document).ready(function(){
  if(jQuery('.fs_slide').length > 0){
  	var windowHeight = jQuery(document).attr('height');
  	jQuery('.fs_slide').css({height: windowHeight});
  	jQuery('.fs_slide_container').cycle({fx: 'fade'});
  }
  jQuery.fn.fullscreenr({width: 1280, height: 960, bgID: '#bgimg'});

  jQuery('.fs_slide').each(function(){
	var headerHeight = jQuery(this).find('h1').outerHeight(true);
	var containerHeight = jQuery(this).height();
	jQuery(this).find('.slide_text').css({height: containerHeight - headerHeight});
  });
});
