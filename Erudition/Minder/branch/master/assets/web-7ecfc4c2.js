import{W as n}from"./index-15feeffa.js";class r extends n{async alert(e){window.alert(e.message)}async prompt(e){const a=window.prompt(e.message,e.inputText||"");return{value:a!==null?a:"",cancelled:a===null}}async confirm(e){return{value:window.confirm(e.message)}}}export{r as DialogWeb};
//# sourceMappingURL=web-7ecfc4c2.js.map
