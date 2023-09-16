import{W as n}from"./index-79f4d0f8.js";class r extends n{async alert(e){window.alert(e.message)}async prompt(e){const a=window.prompt(e.message,e.inputText||"");return{value:a!==null?a:"",cancelled:a===null}}async confirm(e){return{value:window.confirm(e.message)}}}export{r as DialogWeb};
//# sourceMappingURL=web-1e7b0ee6.js.map
