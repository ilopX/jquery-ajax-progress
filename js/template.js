/**
 * Created by ilopX on 23.08.2015.
 */

$(function() {
    $.ajax({
        method: 'GET',
        url: '', // TODO: add url
        data: {
            // TODO: add data
        },
        success: function() {
            // TODO add message all ok
        },
        error: function() {
            // TODO add message error
        },
        progress: function(e) {
            if(e.lengthComputable) {
                var progress = e.loaded / e.total * 100;
                var content = e.srcElement.responseText;
            }
            else {
                // TODO add message error 'Content Length not reported!';
            }
        }
    });
});
