(function($){
var username = $('.login-bold').text();
var new_username = username.replace(username.substring(username.indexOf('(')-1), '');
$('.login-bold').html(new_username);
})(jQuery);

