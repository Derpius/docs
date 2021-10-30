"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3831],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return i},SM:function(){return u},Yb:function(){return p},aj:function(){return d},rt:function(){return m},Ut:function(){return h},PZ:function(){return g}});n(83117),n(80102),n(67294);var r=n(3905),o=n(80907),a=function(){return(0,o.zu)().path},i=function(e){var t=e.title,n=e.description,o=e.href,i=e.image_src;return(0,r.kt)("a",{class:"card-link",href:o.startsWith("http")?o:a()+"/"+o},(0,r.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},u=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:a()+"/"+n},t,(0,r.kt)("span",null,n))},c=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},s=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},f=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},p=function(e){var t=e.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+t.toLowerCase()},t)},d={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},m={Number:function(){return s("number")},String:function(){return s("string")},Boolean:function(){return s("boolean")},Table:function(){return s("table")},Iterator:function(){return s("iterator")},Any:function(){return s("any")},Function:function(){return s("function")},Nil:function(){return s("nil")}},h={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},g={Actor:function(){return f("Actor","base-classes/actor")},Paintable:function(){return f("Paintable","base-classes/paintable")},Pickable:function(){return f("Pickable","base-classes/pickable")},Cable:function(){return f("Cable")},Character:function(){return f("Character")},File:function(){return f("File")},Grenade:function(){return f("Grenade")},Item:function(){return f("Item")},Light:function(){return f("Light")},Particle:function(){return f("Particle")},Player:function(){return f("Player")},Prop:function(){return f("Prop")},Sound:function(){return f("Sound")},StaticMesh:function(){return f("StaticMesh","static-mesh")},TextRender:function(){return f("TextRender","text-render")},Trigger:function(){return f("Trigger")},Vehicle:function(){return f("Vehicle")},Weapon:function(){return f("Weapon")},WebUI:function(){return f("WebUI")}}},13754:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return f},default:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(87469),u=["components"],c={description:"nanos world Roadmap and future updates",sidebar_position:.2},s="\ud83d\udee3\ufe0f Roadmap",l={unversionedId:"roadmap",id:"version-latest/roadmap",isDocsHomePage:!1,title:"\ud83d\udee3\ufe0f Roadmap",description:"nanos world Roadmap and future updates",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/roadmap.mdx",sourceDirName:".",slug:"/roadmap",permalink:"/pt-BR/docs/roadmap",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/roadmap.mdx",tags:[],version:"latest",sidebarPosition:.2,frontMatter:{description:"nanos world Roadmap and future updates",sidebar_position:.2},sidebar:"version-latest/main",previous:{title:"\ud83e\uddea Sign Up for Alpha Testing",permalink:"/pt-BR/docs/signing-up-alpha"},next:{title:"\ud83e\udd1d Contributing to the Docs",permalink:"/pt-BR/docs/contributing-to-the-docs"}},f=[{value:"Suggesting new Ideas",id:"suggesting-new-ideas",children:[],level:2}],p={toc:f};function d(e){var t=e.components,c=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-roadmap"},"\ud83d\udee3\ufe0f Roadmap"),(0,a.kt)("p",null,"Check out our future plans and upcoming updates!"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(52623).Z})),(0,a.kt)("p",null,"nanos world is a feedback-driven game, that means we are always listening to community feedback and ideas to follow a development path!"),(0,a.kt)("p",null,"We group all our goals and ideas in our official ",(0,a.kt)("a",{parentName:"p",href:"https://roadmap.nanos.world"},"Roadmap Trello Board"),", which is always being updated with the new ideas that may come up!"),(0,a.kt)(i.SM,{href:"https://roadmap.nanos.world",mdxType:"ReferenceLink"},"\ud83d\udee3\ufe0f Official Roadmap"),(0,a.kt)("h2",{id:"suggesting-new-ideas"},"Suggesting new Ideas"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(64980).Z})),(0,a.kt)("p",null,"All your suggestion and ideas can be collected in our official ",(0,a.kt)("a",{parentName:"p",href:"https://issues.nanos.world"},"GitHub Issue Tracker"),". We read all reports in there and deeply discuss them to add the feature to the game!"),(0,a.kt)(i.SM,{href:"https://issues.nanos.world",mdxType:"ReferenceLink"},"\u2714\ufe0f Official Issue Tracker"),(0,a.kt)("p",null,"You can also join us on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.nanos.world"},"Discord")," and brainstormw ith us in the # \ud83e\udde0\uff5cbrainstorm channel :P!"))}d.isMDXComponent=!0},64980:function(e,t,n){t.Z=n.p+"assets/images/github-issues-fcf9f576f01fc930d24e89357f2ee6ab.jpg"},52623:function(e,t,n){t.Z=n.p+"assets/images/roadmap-b2298f740cfedf78356bbe5dc59fd92e.jpg"}}]);