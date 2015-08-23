/**
 * Created by PhpStorm.
 * User: ilopX
 * Author: englercj <chad@pantherdev.com>
 * Author: snoj <josh@snoj.us>
 * Author: RaphaelDDL <ddl@raphaelddl.com>
 * Date: 23.08.2015
 * Time: 15:33
 * Project: https://github.com/ilopX/jquery-ajax-progress
 * This file: https://github.com/ilopX/jquery-ajax-progress/blob/master/js/jquery.ajax-progress.js
 */
(function($, window, undefined) {
    //is onprogress supported by browser?
    var hasOnProgress = ("onprogress" in $.ajaxSettings.xhr());

    //If not supported, do nothing
    if (!hasOnProgress) {
        return;
    }
    
    //patch ajax settings to call a progress callback
    var oldXHR = $.ajaxSettings.xhr;
    $.ajaxSettings.xhr = function() {
        var xhr = oldXHR();
        if(xhr instanceof window.XMLHttpRequest) {
            xhr.addEventListener('progress', this.progress, false);
        }
        
        if(xhr.upload) {
            xhr.upload.addEventListener('progress', this.progress, false);
        }
        
        return xhr;
    };
})(jQuery, window);


