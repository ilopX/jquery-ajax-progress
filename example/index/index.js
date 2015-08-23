/**
 * Created by ilopX on 23.08.2015.
 */

$(function() {
    function setProgress(precis) {
        var progress = $('#progress');

        progress.toggleClass('active', precis < 100);

        progress.css({
            width: precis = precis.toPrecision(3)+'%'
        }).html('<span>'+precis+'</span>');
    }

    $.ajax({
        url: 'index/server.php',
        data: {
            action: true
        },
        success: function() {
            alert('OK!');
        },
        error: function() {
            alert('Error!');
        },
        progress: function(e) {
            if(e.lengthComputable) {
                setProgress(e.loaded / e.total * 100);
                $('#content').html(e.srcElement.responseText);
            }
            else {
                console.warn('Content Length not reported!');
            }
        }
    });
});
