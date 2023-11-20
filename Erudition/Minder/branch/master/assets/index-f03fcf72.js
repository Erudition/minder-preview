import{e as m}from"./ionic-modules-d4dd3ca7.js";import{r as f,a as g,L as w,D as x,S as y,T as i,s as P,A as l,_ as h,P as u}from"./capacitor-modules-638c799f.js";import{E as b,i as v,r as n,T as L}from"./elm-modules-0610137e.js";import{aI as E}from"./other-modules-6d20a545.js";import"./ipfs-modules-5ddb521f.js";import"./libp2p-modules-5be01019.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function T(){const e=window.matchMedia("(prefers-color-scheme: light)");console.log("Prefers light theme?",e),c(!e.matches),e.addListener(o=>c(!o.matches))}function c(e){const o=document.getElementById("ion-app");o?o.classList.toggle("dark",e):console.error("can't find #ion-app for dark mode")}globalThis.toggleDarkTheme=e=>c(e);const _=`
                                                                      
                                 ....                                 
                             .,cllllll:'.                             
                          .;loooooo'    ol;.                          
                      .'coo''oooo.         'o:'.                      
                   .;lo;     lol               ol;.                   
               .,coc        :o'                   .oc,.               
            .:oo           lo.                        co:.            
        .,lo'            .oo                             'ol,.        
        ooo,            ,ol                               coooo       
         ,do,.         ;d:                              .;dddd:       
             do:.     cd.                            .:oddddd,        
                odl:cod:                         .;ldo   ddd.         
                  oddddo.                    .'cdd      .dd           
                  oddddddo;.              .:od;        ,dl            
                 ldc      .ddc'.      .,ldd           :d:             
                od;           dddooooddc             cd.              
              .dd.            ,dddddddd'            ld                
             ,dd            .:ddd.  ;dddc'.       .dd                 
            ;dd         .;ld:            ldo;.   ,do                  
           lxl       'cdx                   'xxddxx                   
          oxx    .;ox'                        lxxxxo'                 
        .dxxxc;lxo                            dx:  .xxl,.             
       ;xxxxxx.                             .dx.       cxo;.          
       xxxx.                               'xx            dxo;        
       ,xxx.                              ;xl             oxxo        
          .xo;.                          cx;          .'cdd           
              odc'.                     ox.        .;ox.              
                  xd:'                'dx      .;lxl                  
                     ;xo;.          .lxxo  .,lxx.                     
                         xxc,.    'cxxxxxddxc                         
                            'xdloxxxxxxxx.                            
                                cxxxx;                                

`;addEventListener("error",e=>{alert(e.message+`
 filename: `+e.filename+`
 line: `+e.lineno+`
 column: `+e.colno+`
 error: `+e.error)});async function D(){await O();let e=b.Main.init({flags:{storedRonMaybe:null,userFlags:{darkTheme:window.matchMedia("(prefers-color-scheme: dark)").matches}}});A(e)}D();async function O(){v({logCallErrors:!0,logInteropErrors:!1}),await M(),f(),g(),n("changePassphrase",()=>S(!0)),n("requestNotificationPermission",w.requestPermissions),n("ionInputSetFocus",e=>document?.getElementById(e).setFocus()),n("dialogPrompt",x.prompt)}function A(e){console.log(_),y.hide().catch(o=>{console.log("No Capacitor splash screen to hide.")}),navigator.storage&&navigator.storage.persist&&navigator.storage.persist().then(o=>{console.log(o?"Storage will not be cleared except by explicit user action":"Storage may be cleared by the UA under storage pressure.")}),e.ports.toastPort.subscribe(function(o){try{i.show({text:o,duration:"short"}).then()}catch(r){console.error("Failed to show Toast!",r)}}),e.ports.ns_notify.subscribe(P),l.addListener("appStateChange",({isActive:o})=>{T(),i.show({text:"App became "+(o?"active!":"inactive."),duration:"short"}).then()}),l.addListener("appUrlOpen",o=>{console.log("App opened with URL:",o)}),l.addListener("appRestoredResult",o=>{console.log("Restored state:",o)}),i.show({text:window.location.href,duration:"short"}).then();try{k(e)}catch(o){console.error("Failed to attach Orbit to Elm!",o)}}m();async function S(e){var r=(await u.get({key:"minder-alpha-passphrase"})).value;if(r==null||r==""||e){const t=r&&"tester"+Math.floor(Math.random()*1e3),{value:s,cancelled:a}=await x.prompt({title:"New Device",message:"Enter a secret account passphrase to begin storing your data. If you've already got data in Minder on some other device, be sure to use the same passphrase here, and it will eventually sync over."}),p=a?t:s;return r=p||t,i.show({text:`Storing new passphrase: ${r}`,duration:"short"}).then(),await u.set({key:"minder-alpha-passphrase",value:r}),r}else return i.show({text:`Loading account: ${r}`,duration:"short"}).then(),r}async function k(e){await h(()=>import("./odd-89f39347.js"),["assets/odd-89f39347.js","assets/other-modules-6d20a545.js","assets/ionic-modules-d4dd3ca7.js","assets/capacitor-modules-638c799f.js","assets/elm-modules-0610137e.js","assets/ipfs-modules-5ddb521f.js","assets/libp2p-modules-5be01019.js","assets/ionic-modules-05023b6f.css"])}async function M(){const e=await h(()=>import("./elm-modules-0610137e.js").then(o=>o.a),["assets/elm-modules-0610137e.js","assets/other-modules-6d20a545.js","assets/ionic-modules-d4dd3ca7.js","assets/capacitor-modules-638c799f.js","assets/ipfs-modules-5ddb521f.js","assets/libp2p-modules-5be01019.js","assets/ionic-modules-05023b6f.css"]);await e.init({TaskPort:L}),console.log("webnative initialized",e)}window.flipping=new E({duration:300});window.afterDraw=async()=>{window.flipping.flip()};
//# sourceMappingURL=index-f03fcf72.js.map
