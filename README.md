# Jquery Ajax Progresss

A simple patch to jQuery that will call a 'progress' callback, using the 
[XHR.onProgress](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress) event

## Demo

[![Video Demo](http://img.youtube.com/vi/0sxqNaznhlc/1.jpg)](http://www.youtube.com/watch?v=0sxqNaznhlc)


##I nstall and use
### a. Composer
install: **composer require ilopx/jquery-ajax-progress**

Include the script on your page:
```html
<script src="/vendor/ilopx/jquery.ajax.progress/js/jquery.ajax-progress.js"></script>
```


### b. Cdn
[**jquery.ajax-progress.js**](https://cdn.rawgit.com/ilopX/jquery-ajax-progress.js/master/js/jquery.ajax-progress.js) 


Include the script on your page:
```html
<script src="https://cdn.rawgit.com/ilopX/jquery-ajax-progress.js/master/js/jquery.ajax-progress.js"></script>
```


## Use simple template script
[**template.js**](https://github.com/ilopX/jquery-ajax-progress/blob/master/js/jquery.ajax-progress.js) 

```javascript
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
```

### Notes

 - This will not work using the `file://` protocol, see [XMLHttpRequest - Monitoring Progress](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress) for more info.