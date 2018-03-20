jQuery(document).ready( function($) {
$('#lightGallery').lightGallery();
$('#launchGallery').click(function(){
    $('#firstImage').trigger('click');    
});
});
