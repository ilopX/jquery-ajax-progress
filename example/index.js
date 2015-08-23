/**
 * Created by ilopX on 23.08.2015.
 */

$(function() {
    function setProgress(loaded, total) {
        var precis = (loaded / total) * 100;
        precis = precis.toPrecision(3)+'%';
        $('#progress').css({
            width: precis
        }).html('<span>'+precis+'</span>');
    }

    $.ajax({
        method: 'GET',
        url: 'server.php',
        data: {
            action: true
        },
        success: function() {
            alert('YAYE!');
        },
        error: function() {
            alert('AWWW!');
        },
        progress: function(e) {
            if(e.lengthComputable) {
                setProgress(e.loaded, e.total);
                $('#content').html(e.srcElement.responseText);
            }
            else {
                console.warn('Content Length not reported!');
            }
        }
    });
});
