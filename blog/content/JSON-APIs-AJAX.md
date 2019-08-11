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