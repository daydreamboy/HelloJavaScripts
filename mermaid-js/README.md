



Section 1: hello[^1]



1. Div tag

```html
<div class="mermaid">
<!-- mermaid text -->
</div>
```



2. load mermaid script

```html
<script src="https://unpkg.com/mermaid@9.1.2/dist/mermaid.min.js"></script>
<script>mermaid.initialize({
    startOnLoad:true
});
```

CDN:

https://unpkg.com/browse/mermaid@9.1.2/





section2 

securityLevel

- **strict**: (**default**) tags in text are encoded, click functionality is disabled
- **loose**: tags in text are allowed, click functionality is enabled
- **antiscript**: html tags in text are allowed, (only script element is removed), click functionality is enabled
- **sandbox**: With this security level all rendering takes place in a sandboxed iframe. This prevent any JavaScript running in the context. This may hinder interactive functionality of the diagram like scripts, popups in sequence diagram or links to other tabs/targets etc.



initialize函数触发时机

远端css样式

```javascript
$(document).load(function() {
    mermaid.initialize();
});
```

or

```javascript
$(document).ready(function() {
    mermaid.initialize();
});
```



设置css样式

```css
div.mermaid {
    font-family: 'trebuchet ms', verdana, arial;
}
```



mermaind手动渲染svg

```html
<script src="mermaid.js"></script>

<script>
    mermaid.mermaidAPI.initialize({ startOnLoad:false }); $(function(){ // Example of using the API var
element = document.querySelector("#graphDiv"); var insertSvg = function(svgCode, bindFunctions){
    element.innerHTML = svgCode; }; var graphDefinition = 'graph TB\na-->b'; var graph =
mermaid.mermaidAPI.render('graphDiv', graphDefinition, insertSvg); });
</script>
```







## References

[^1]:https://github.com/mermaid-js/mermaid/blob/develop/docs/usage.md











