

* [Wait for page to load](#Wait-for-page-to-load)
* [Handle Click Events](#Handle-Click-Events)
* [Change Text with click Events](#Change-Text-with-click-Events)
* [Get `JSON` with the JavaScript `XMLHttpRequest` Method](#Get-JSON-with-the-JavaScript-XMLHttpRequest-Method)
* [Handle Click Events](#Handle-Click-Events)
* [Access the JSON Data from an API and add HTML](#Access-the-JSON-Data-from-an-API-and-add-HTML)


## Wait for page to load

`DOMContentLoaded` can be attached to the top level of the DOM (the `document`) to ensure that any javascript will only excecute after the page has loaded:

```javascript
document.addEventListener('DOMContentLoaded',function() {
});
```

## Handle Click Events

You can implement event handlers that go inside of the `DOMContentLoaded` function. You can implement an `onclick` event handler which triggers when the user clicks on the element with id `getMessage`, by adding the following code:

```javascript
document.getElementById('getMessage').onclick=function(){};
```

## Change Text with click Events

After selecting which button is clicked (using the id), we can ad a function within the `onclick` to decide which element(s) are affected and how.

```javascript
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      document.getElementsByClassName('message')[0].textContent="Here is the message";

    }
  });
  ```

## Get `JSON` with the JavaScript `XMLHttpRequest` Method

   JSON transmitted by APIs are sent as `bytes`, and your application receives it as a `string`. These can be converted into JavaScript objects, but they are not JavaScript objects by default. The `JSON.parse` method parses the string and constructs the JavaScript object described by it.

   The JavaScript `XMLHttpRequest` object has a number of properties and methods that are used to transfer data. First we create an instance of the `XMLHttpRequest` object and save it to the variable `rec`: 
```javascript
   req=new XMLHttpRequest();
   ```

   Next we use the `open` method to initialize a request.  The **first** argument will take a "GET" request since we are requesting data.  The **second** argument for the `open` method is the URL of the API we are requesting data from.  The **third** argument is a `Boolean` value where `true` makes it an asynchronous request:
```javascript
   req.open("GET",'/json/cats.json',true);
   ```
   Next, the `send` method sends the request:
```javascript
   req.send();
   ```
   And lastly the `onload` event handler parses the returned data and applies the `JSON.stringify` method to convert the JavaScript object into a string.  This string is then inserted as the message text:

```javascript
    req.onload=function(){
    json=JSON.parse(req.responseText);
    document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
    };
```
Create XMLHttpRequest, `open` it, `send` it, `onload` parse it.

```javascript
req=new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload=function(){
  json=JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
};
```

## Access the JSON Data from an API and add HTML

After accessing the data, we can use nested `forEach` loops to interate over each piece of data and add approriate html to render to the browser:

```javascript
let html = "";
json.forEach(function(val) {
    let keys = Object.keys(val);
    html += "<div class = 'cat'>";
    html += "<img src='" + val.imageLink + "' " + "alt='" + val.altText + "'>" 
    keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
    });
html += "</div><br>";
});
```



