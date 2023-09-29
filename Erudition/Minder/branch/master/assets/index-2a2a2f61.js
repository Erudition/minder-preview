import{d as g}from"./ionic-modules-23047cf7.js";import{r as w,a as y,L as b,D as x,S as P,T as i,s as v,A as c,P as h}from"./capacitor-modules-72ae1d81.js";import{E as L,i as E,r as l}from"./elm-modules-6b7b75ae.js";import{s as F}from"./orbit-modules-7eb78d3b.js";import{cA as S}from"./other-modules-3990ee0b.js";import"./ipfs-modules-6140a6e2.js";import"./libp2p-modules-7ceb3045.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();function O(){const o=window.matchMedia("(prefers-color-scheme: light)");console.log("Prefers light theme?",o),p(!o.matches),o.addListener(e=>p(!e.matches))}function p(o){const e=document.getElementById("ion-app");e?e.classList.toggle("dark",o):console.error("can't find #ion-app for dark mode")}globalThis.toggleDarkTheme=o=>p(o);const T=`
                                                                      
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

`;async function N(){k();let o=L.Main.init({flags:{storedRonMaybe:null,userFlags:{darkTheme:window.matchMedia("(prefers-color-scheme: dark)").matches}}});A(o)}N();function k(){E({logCallErrors:!0,logInteropErrors:!1}),w(),y(),l("changePassphrase",()=>u(!0)),l("requestNotificationPermission",b.requestPermissions),l("ionInputSetFocus",o=>document?.getElementById(o).setFocus()),l("dialogPrompt",x.prompt)}function A(o){console.log(T),P.hide().catch(e=>{console.log("No Capacitor splash screen to hide.")}),navigator.storage&&navigator.storage.persist&&navigator.storage.persist().then(e=>{console.log(e?"Storage will not be cleared except by explicit user action":"Storage may be cleared by the UA under storage pressure.")}),o.ports.flash.subscribe(function(e){try{i.show({text:e,duration:"short"}).then()}catch(r){console.error("Failed to show Toast!",r)}}),o.ports.ns_notify.subscribe(v),c.addListener("appStateChange",({isActive:e})=>{O(),i.show({text:"App became "+(e?"active!":"inactive."),duration:"short"}).then()}),c.addListener("appUrlOpen",e=>{console.log("App opened with URL:",e)}),c.addListener("appRestoredResult",e=>{console.log("Restored state:",e)}),i.show({text:window.location.href,duration:"short"}).then();try{M(o)}catch(e){console.error("Failed to attach Orbit to Elm!",e)}}g();async function u(o){var r=(await h.get({key:"minder-alpha-passphrase"})).value;const a=r==null||r=="";if(a||o){const s=a?"tester"+Math.floor(Math.random()*1e3):r,{value:t,cancelled:n}=await x.prompt({title:"New Device",message:"Enter a secret account passphrase to begin storing your data. If you've already got data in Minder on some other device, be sure to use the same passphrase here, and it will eventually sync over."}),d=n?s:t;return r=d||s,i.show({text:`Storing new passphrase: ${r}`,duration:"short"}).then(),await h.set({key:"minder-alpha-passphrase",value:r}),r}else return i.show({text:`Loading account: ${r}`,duration:"short"}).then(),r}async function M(o){const e=await u(!1),r=await F(e);globalThis.minderLog=r;const a=r.iterator({limit:-1}).collect();console.log("Loaded inital database entries",a);let s=a.map(t=>t.payload.value).join(`
`);o.ports.incomingFramesFromElsewhere.send(s),o.ports.setStorage.subscribe(async function(t){t.trim()!=""&&(console.log("Adding state to database",t),r.add(t))}),r.events.on("replicate.progress",(t,n,d,m,D)=>{const f=d.payload.value;o.ports.incomingFramesFromElsewhere.send(f),console.log("New frames from peer @",t,"Progress is ",m)})}window.flipping=new S({duration:300});window.afterDraw=async()=>{window.flipping.flip()};
//# sourceMappingURL=index-2a2a2f61.js.map
