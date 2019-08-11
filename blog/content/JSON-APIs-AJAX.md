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

  