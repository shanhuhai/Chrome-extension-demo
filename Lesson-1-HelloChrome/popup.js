
var bg = chrome.extension.getBackgroundPage();

$(function(){
    $('#input').val(bg.count);
    $('#btn').click(function(){
        bg.count = bg.count+1;
        $('#input').val(bg.count);
    });
})