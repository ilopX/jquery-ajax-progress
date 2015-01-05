## Jquery Ajax Progresss

A simple patch to jQuery that will call a 'progress' callback, using the 
[XHR.onProgress](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress) event

### Usage

Simply include the script on your page:

```html
<script src="js/jquery.ajax-progress.js"></script>
```

Then, whenever you make an ajax request, just specify a progress callback:

```javascript
$.ajax({
    method: 'GET',
    url: 'data/bird.json',
    dataType: 'json',
    success: function() { },
    error: function() { },
    progress: function(e) {
        //make sure we can compute the length
        if(e.lengthComputable) {
            //calculate the percentage loaded
            var pct = (e.loaded / e.total) * 100;

            //log percentage loaded
            console.log(pct);
        }
        //this usually happens when Content-Length isn't set
        else {
            console.warn('Content Length not reported!');
        }
    }
});
```

You can see it in action on the `demo.html` page.

### Notes

 - This will not work using the `file://` protocol, see [XMLHttpRequest - Monitoring Progress](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress) for more info.
 - Some Content-Encoding methods may make the web server always return `e.lengthComputable == false`, please see thses discussions for more info. 
   - [XMLHttpRequest lengthComputable always false](https://stackoverflow.com/questions/15833704/xmlhttprequest-lengthcomputable-always-false)
   - [How can I use deflated/gzipped content with an XHR onProgress function?](https://stackoverflow.com/questions/15097712/how-can-i-use-deflated-gzipped-content-with-an-xhr-onprogress-function)
