"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4566],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78170:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={description:"Comment utiliser les m\xe9thodes Discord de nanos world pour cr\xe9er une belle int\xe9gration pour votre serveur",tags:["scripting"]},c="Int\xe9gration de Discord",l={unversionedId:"core-concepts/scripting/discord-integration",id:"core-concepts/scripting/discord-integration",isDocsHomePage:!1,title:"Int\xe9gration de Discord",description:"Comment utiliser les m\xe9thodes Discord de nanos world pour cr\xe9er une belle int\xe9gration pour votre serveur",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/scripting/discord-integration.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/discord-integration",permalink:"/fr/docs/next/core-concepts/scripting/discord-integration",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/discord-integration.md",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",frontMatter:{description:"Comment utiliser les m\xe9thodes Discord de nanos world pour cr\xe9er une belle int\xe9gration pour votre serveur",tags:["scripting"]},sidebar:"main",previous:{title:"Traces & Raycasting",permalink:"/fr/docs/next/core-concepts/scripting/traces-and-raycasting"},next:{title:"Interacting with the Sun",permalink:"/fr/docs/next/core-concepts/scripting/interacting-with-the-sun"}},p=[{value:"Mise \xe0 jour de l&#39;activit\xe9 Discord des joueurs (Rich Presence)",id:"mise-\xe0-jour-de-lactivit\xe9-discord-des-joueurs-rich-presence",children:[],level:2},{value:"Utilisation de votre propre ID d&#39;application",id:"utilisation-de-votre-propre-id-dapplication",children:[],level:2}],d={toc:p};function u(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"int\xe9gration-de-discord"},"Int\xe9gration de Discord"),(0,o.kt)("p",null,"Comment utiliser les m\xe9thodes Discord de nanos world pour cr\xe9er une belle int\xe9gration pour votre serveur."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(86326).Z})),(0,o.kt)("p",null,"Int\xe9grer votre serveur \xe0 Discord est tr\xe8s facile ! Nous fournissons une int\xe9gration int\xe9gr\xe9e qui est pr\xeate \xe0 l'emploi, mais vous pouvez \xe9galement ajouter votre propre ID d'application Discord et utiliser votre propre application !"),(0,o.kt)("h2",{id:"mise-\xe0-jour-de-lactivit\xe9-discord-des-joueurs-rich-presence"},"Mise \xe0 jour de l'activit\xe9 Discord des joueurs (Rich Presence)"),(0,o.kt)("p",null,"Nous avons rendu le processus tr\xe8s simple, nous avons une seule m\xe9thode pour changer l'activit\xe9 du joueur :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'local state = "Travaille en tant que chauffeur de camion"\nlocal details = "Awesome Roleplay"\nlocal large_text = "Honk!"\nlocal large_image = "screenshot_191"\n\nClient.SetDiscordActivity(state, details, large_image, large_text)\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How it will look like",src:n(77980).Z})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Vous pouvez utiliser votre propre ID d'application pour upload vos propres images !"))),(0,o.kt)("h2",{id:"utilisation-de-votre-propre-id-dapplication"},"Utilisation de votre propre ID d'application"),(0,o.kt)("p",null,"L'utilisation de votre propre ID d'application offre l'avantage de pouvoir la configurer comme vous le souhaitez, et m\xeame de upload vos propres images \xe0 afficher dans Rich Presence."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How it will look like",src:n(78317).Z})),(0,o.kt)("p",null,"L'initialisation de votre propre ID d'application est extr\xeamement facile, il suffit d'ex\xe9cuter le code suivant du c\xf4t\xe9 client :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"Client.InitializeDiscord(client_id)\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Vous avez termin\xe9 ! Vous pouvez maintenant utiliser la m\xe9thode ",(0,o.kt)("inlineCode",{parentName:"p"},"Client.SetDiscordActivity()")," !"))))}u.isMDXComponent=!0},77980:function(e,t,n){t.Z=n.p+"assets/images/discord-integration-01-362ab77a7fdee9c9c4c6629b99a49dd8.jpg"},78317:function(e,t,n){t.Z=n.p+"assets/images/discord-integration-02-4bcbe9b207ba7a21fa2dca85efcd2a40.jpg"},86326:function(e,t,n){t.Z=n.p+"assets/images/discord-847e1ae1272681dc4f48fde28b370c6b.jpg"}}]);