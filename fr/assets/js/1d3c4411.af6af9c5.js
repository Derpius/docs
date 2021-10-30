"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8892],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(n),d=i,y=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return n?r.createElement(y,a(a({ref:e},u),{},{components:n})):r.createElement(y,a({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{YS:function(){return a},SM:function(){return c},Yb:function(){return p},aj:function(){return d},rt:function(){return y},Ut:function(){return m},PZ:function(){return f}});n(83117),n(80102),n(67294);var r=n(3905),i=n(80907),o=function(){return(0,i.zu)().path},a=function(t){var e=t.title,n=t.description,i=t.href,a=t.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:o()+"/"+i},(0,r.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,e),(0,r.kt)("p",null,n))},c=function(t){var e=t.children,n=t.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:o()+"/"+n},e,(0,r.kt)("span",null,n))},s=function(t,e){return(0,r.kt)("a",{class:"authority-availability",href:o()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:t,title:e}))},l=function(t){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},u=function(t,e){return(0,r.kt)("a",{href:o()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},h=function(t,e){return(0,r.kt)("a",{href:o()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},p=function(t){var e=t.children;return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/enums#"+e.toLowerCase()},e)},d={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},y={Number:function(){return l("number")},String:function(){return l("string")},Boolean:function(){return l("boolean")},Table:function(){return l("table")},Iterator:function(){return l("iterator")},Any:function(){return l("any")},Function:function(){return l("function")},Nil:function(){return l("nil")}},m={Vector:function(){return u("Vector")},Rotator:function(){return u("Rotator")},Color:function(){return u("Color")},Quat:function(){return u("Quat","quaternion")},Vector2D:function(){return u("Vector2D","vectortwod")}},f={Actor:function(){return h("Actor","base-classes/actor")},Paintable:function(){return h("Paintable","base-classes/paintable")},Pickable:function(){return h("Pickable","base-classes/pickable")},Cable:function(){return h("Cable")},Character:function(){return h("Character")},File:function(){return h("File")},Grenade:function(){return h("Grenade")},Item:function(){return h("Item")},Light:function(){return h("Light")},Particle:function(){return h("Particle")},Player:function(){return h("Player")},Prop:function(){return h("Prop")},Sound:function(){return h("Sound")},StaticMesh:function(){return h("StaticMesh","static-mesh")},TextRender:function(){return h("TextRender","text-render")},Trigger:function(){return h("Trigger")},Vehicle:function(){return h("Vehicle")},Weapon:function(){return h("Weapon")},WebUI:function(){return h("WebUI")}}},80834:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return h},default:function(){return d}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(87469),c=["components"],s={description:"All you need to know about Authority & Network Authority concepts.",sidebar_position:2,tags:["scripting"]},l="Authority Concepts",u={unversionedId:"core-concepts/scripting/authority-concepts",id:"core-concepts/scripting/authority-concepts",isDocsHomePage:!1,title:"Authority Concepts",description:"All you need to know about Authority & Network Authority concepts.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/scripting/authority-concepts.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/authority-concepts",permalink:"/fr/docs/next/core-concepts/scripting/authority-concepts",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/authority-concepts.mdx",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",sidebarPosition:2,frontMatter:{description:"All you need to know about Authority & Network Authority concepts.",sidebar_position:2,tags:["scripting"]},sidebar:"main",previous:{title:"Events Guide",permalink:"/fr/docs/next/core-concepts/scripting/events-guide"},next:{title:"Packages Communication",permalink:"/fr/docs/next/core-concepts/scripting/communicating-between-packages"}},h=[{value:"Authority",id:"authority",children:[{value:"Methods &amp; Events Availability",id:"methods--events-availability",children:[{value:"<AuthorityType.ServerOnly /><strong><code>Server Side</code></strong>",id:"server-side",children:[],level:4},{value:"<AuthorityType.ClientOnly /><strong><code>Client Side</code></strong>",id:"client-side",children:[],level:4},{value:"<AuthorityType.AuthorityOnly /><strong><code>Authority Side</code></strong>",id:"authority-side",children:[],level:4}],level:3}],level:2},{value:"Network Authority",id:"network-authority",children:[{value:"Overriding the current Network Authority",id:"overriding-the-current-network-authority",children:[{value:"Examples of actions that are only executed by the Network Authority of that Actor",id:"examples-of-actions-that-are-only-executed-by-the-network-authority-of-that-actor",children:[],level:4}],level:3}],level:2}],p={toc:h};function d(t){var e=t.components,n=(0,i.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authority-concepts"},"Authority Concepts"),(0,o.kt)("p",null,"All you need to know about Authority & Network Authority concepts."),(0,o.kt)("h2",{id:"authority"},"Authority"),(0,o.kt)("p",null,"Some Classes can only be spawned on the Server, others can only be spawned in the Client, and there are some which can be spawned in both Server or Client. The side which the Class is spawned is called ",(0,o.kt)("strong",{parentName:"p"},"Authority"),"."),(0,o.kt)("h3",{id:"methods--events-availability"},"Methods & Events Availability"),(0,o.kt)("p",null,"Some methods and events in the API are only available on a specific side ","(","Client or Server",")",", others are only available in the side which spawned it Authority side",")",":"),(0,o.kt)("h4",{id:"server-side"},(0,o.kt)(a.aj.ServerOnly,null),(0,o.kt)("strong",{parentName:"h4"},(0,o.kt)("inlineCode",{parentName:"strong"},"Server Side"))),(0,o.kt)("p",null,"Method or Events which can only be called in the ",(0,o.kt)("strong",{parentName:"p"},"Server")," side."),(0,o.kt)("h4",{id:"client-side"},(0,o.kt)(a.aj.ClientOnly,null),(0,o.kt)("strong",{parentName:"h4"},(0,o.kt)("inlineCode",{parentName:"strong"},"Client Side"))),(0,o.kt)("p",null,"Methods or Events which can only be called in the ",(0,o.kt)("strong",{parentName:"p"},"Client")," side."),(0,o.kt)("h4",{id:"authority-side"},(0,o.kt)(a.aj.AuthorityOnly,null),(0,o.kt)("strong",{parentName:"h4"},(0,o.kt)("inlineCode",{parentName:"strong"},"Authority Side"))),(0,o.kt)("p",null,"Methods or Events which can only be called in the side which spawned it."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All entities spawned in the ",(0,o.kt)("strong",{parentName:"p"},"Server")," will be automatically synced in the ",(0,o.kt)("strong",{parentName:"p"},"Client"),". I.e. you can access it's methods and get all data from it without needing to manually sync it."),(0,o.kt)("p",{parentName:"div"},"In the same way, entities spawned in the ",(0,o.kt)("strong",{parentName:"p"},"Client")," will only exist for that Client, trying to send those entities to the server will cause errors."))),(0,o.kt)("h2",{id:"network-authority"},"Network Authority"),(0,o.kt)("p",null,"Another important concept in nanos world is the ",(0,o.kt)("strong",{parentName:"p"},"Network Authority"),". We have a ",(0,o.kt)("em",{parentName:"p"},'"distributed network authority"')," concept, which means the work of calculating physics and AI ","(","for example",")"," are automatically assigned and distributed to the clients. In general, if an ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/scripting-reference/classes/base-classes/actor"},"Actor")," is near an in-game Character, it's physics will be calculated by that player's device. The Player that is responsible for calculating and sharing the results is called ",(0,o.kt)("strong",{parentName:"p"},"Network Authority"),"."),(0,o.kt)("p",null,"The Player assigned is automatically calculated by the server and takes some things into consideration, this calculation is only made if the Player is possessing a Character:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"distance")," from the Character to the object"),(0,o.kt)("li",{parentName:"ul"},"If the Character is ",(0,o.kt)("strong",{parentName:"li"},"grabbing")," a ",(0,o.kt)(a.PZ.Prop,null)),(0,o.kt)("li",{parentName:"ul"},"If the Character is ",(0,o.kt)("strong",{parentName:"li"},"handling")," a ",(0,o.kt)("a",{parentName:"li",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable"},"Pickable")),(0,o.kt)("li",{parentName:"ul"},"If the Character is ",(0,o.kt)("strong",{parentName:"li"},"driving")," a Vehicle"),(0,o.kt)("li",{parentName:"ul"},"If the Character has just ",(0,o.kt)("strong",{parentName:"li"},"shot")," something")),(0,o.kt)("p",null,"In all this cases, the Player will be automatically assigned to be the ",(0,o.kt)("strong",{parentName:"p"},"Network Authority")," of that Object."),(0,o.kt)("h3",{id:"overriding-the-current-network-authority"},"Overriding the current Network Authority"),(0,o.kt)("p",null,"It is possible to override the current Network Authority of a specific entity by using the method ",(0,o.kt)("inlineCode",{parentName:"p"},":SetNetworkAuthority()"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Some actors aren't ",(0,o.kt)("strong",{parentName:"p"},"Network Distributed"),". This means they will not be automatically assigned neither be able to have it's Network Authority changed. You can check if an entity is Network Distributed with the method ",(0,o.kt)("inlineCode",{parentName:"p"},":IsNetworkDistributed()"),"."))),(0,o.kt)("h4",{id:"examples-of-actions-that-are-only-executed-by-the-network-authority-of-that-actor"},"Examples of actions that are only executed by the Network Authority of that Actor"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Objects Physics sync (including when calling ",(0,o.kt)("inlineCode",{parentName:"li"},":SetForce()"),")."),(0,o.kt)("li",{parentName:"ul"},"NPCs walking with ",(0,o.kt)("inlineCode",{parentName:"li"},":MoveTo()"),".")))}d.isMDXComponent=!0}}]);