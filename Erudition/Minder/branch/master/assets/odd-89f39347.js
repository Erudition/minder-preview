import{p as u,aJ as c,aK as f,aL as a,aM as r}from"./other-modules-6d20a545.js";import"./ionic-modules-d4dd3ca7.js";import"./capacitor-modules-638c799f.js";import"./elm-modules-0610137e.js";import"./ipfs-modules-5ddb521f.js";import"./libp2p-modules-5be01019.js";const o={creator:"Minder",name:"Minder"};function b(){let t="Unforeseen error initializing ODD";return u({namespace:o,debug:!0,fileSystem:{loadImmediately:!0}}).catch(e=>{switch(e){case c.InsecureContext:t="Insecure context";break;case c.UnsupportedBrowser:t="Unsupported browser";break}}).then(e=>{if(e){e.on("session:create",({session:s})=>{console.log("A session was created",s)}),e.on("session:destroy",({username:s})=>{console.log("A session was destroyed for username",s)});let n=e.session;if(n)console.log(`You have a WNFS session! 
 Username:`+n.username+`
 Type: `+n.type+`
 Filesystem Root DID: `+n.fs?.account.rootDID);else{let s=prompt("Enter a new username"),i=prompt("Enter a new email");s&&i&&d(e,s,i)}return e}}),t}async function v(t,e){const n=await t.auth.accountProducer(e.username);n.on("challenge",s=>{window.confirm(`For security, only choose OK if the PIN matches exactly on the other device.
PIN: `+s.pin)?s.confirmPin():s.rejectPin()}),n.on("link",({approved:s})=>{s&&console.log("Linked new device successfully")})}async function x(t,e){const n=await t.auth.accountConsumer(e);n.on("challenge",({pin:s})=>{alert(`Match this PIN on the other device. 
PIN: `+s)}),n.on("link",async({approved:s,username:i})=>{if(s)return console.log(`Successfully authenticated as ${i}`),await t.auth.session()})}async function d(t,e,n){if(t.session)console.error("Tried to registerUser but there was already an existing session.",!t.session);else{const s=await t.auth.isUsernameValid(e),i=await t.auth.isUsernameAvailable(e);if(s&&i){const{success:l}=await t.auth.register({username:e,email:n});l&&await t.auth.session()}}}async function N(t,e,n){if(e.fs){const s=e.fs;await s.ls(f("public")),await s.ls(a(o)),await s.write(a(o,r("RON","profile.ron")),new TextEncoder().encode(n)),await s.publish()}else console.error("Tried to saveData but fs was missing. Program is",t,"session is",e,"fs is",e.fs)}async function I(t,e){if(e.fs){let n=await e.fs.exists(a(o,r("RON","profile.ron"))),s="";return n?(console.log("minder path exists."),s=new TextDecoder().decode(await e.fs.read(a(o,r("RON","profile.ron"))))):await e?.fs.write(a(o,r("RON","profile.ron")),new TextEncoder().encode("start;")),s}else return console.error("Tried to readData but fs was missing. Program is",t,"session is",e,"fs is",e.fs),null}export{b as init,v as linkNewDeviceWithSession,x as linkNewDeviceWithoutSession,I as readData,d as registerUser,N as saveData};
//# sourceMappingURL=odd-89f39347.js.map
