import{d as h}from"./ionic-modules-960a10d8.js";import{r as f,a as g,L as m,D as u,S as w,T as n,s as y,A as l,P as x}from"./capacitor-modules-9e96cb77.js";import{E as P,i as b,r as i}from"./elm-modules-3cf74a82.js";import{F as v}from"./other-modules-f5d9ee67.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function L(){const o=window.matchMedia("(prefers-color-scheme: light)");console.log("Prefers light theme?",o),c(!o.matches),o.addListener(e=>c(!e.matches))}function c(o){const e=document.getElementById("ion-app");e?e.classList.toggle("dark",o):console.error("can't find #ion-app for dark mode")}globalThis.toggleDarkTheme=o=>c(o);const E=`
                                                                      
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

`;window.onerror=function(o){alert(o)};async function S(){O();let o=P.Main.init({flags:{storedRonMaybe:null,userFlags:{darkTheme:window.matchMedia("(prefers-color-scheme: dark)").matches}}});T(o)}S();function O(){b({logCallErrors:!0,logInteropErrors:!1}),f(),g(),i("changePassphrase",()=>k(!0)),i("requestNotificationPermission",m.requestPermissions),i("ionInputSetFocus",o=>document?.getElementById(o).setFocus()),i("dialogPrompt",u.prompt)}function T(o){console.log(E),w.hide().catch(e=>{console.log("No Capacitor splash screen to hide.")}),navigator.storage&&navigator.storage.persist&&navigator.storage.persist().then(e=>{console.log(e?"Storage will not be cleared except by explicit user action":"Storage may be cleared by the UA under storage pressure.")}),o.ports.toastPort.subscribe(function(e){try{n.show({text:e,duration:"short"}).then()}catch(s){console.error("Failed to show Toast!",s)}}),o.ports.ns_notify.subscribe(y),l.addListener("appStateChange",({isActive:e})=>{L(),n.show({text:"App became "+(e?"active!":"inactive."),duration:"short"}).then()}),l.addListener("appUrlOpen",e=>{console.log("App opened with URL:",e)}),l.addListener("appRestoredResult",e=>{console.log("Restored state:",e)}),n.show({text:window.location.href,duration:"short"}).then();try{A()}catch(e){console.error("Failed to attach Orbit to Elm!",e)}}h();async function k(o){var s=(await x.get({key:"minder-alpha-passphrase"})).value;const a=s==null||s=="";if(a||o){const t=a?"tester"+Math.floor(Math.random()*1e3):s,{value:r,cancelled:d}=await u.prompt({title:"New Device",message:"Enter a secret account passphrase to begin storing your data. If you've already got data in Minder on some other device, be sure to use the same passphrase here, and it will eventually sync over."}),p=d?t:r;return s=p||t,n.show({text:`Storing new passphrase: ${s}`,duration:"short"}).then(),await x.set({key:"minder-alpha-passphrase",value:s}),s}else return n.show({text:`Loading account: ${s}`,duration:"short"}).then(),s}async function A(){}window.flipping=new v({duration:300});window.afterDraw=async()=>{window.flipping.flip()};
//# sourceMappingURL=index-610317c0.js.map
