"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5065],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(a),k=r,g=m["".concat(o,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87469:function(t,e,a){a.d(e,{YS:function(){return i},SM:function(){return s},Yb:function(){return m},aj:function(){return k},rt:function(){return g},Ut:function(){return N},PZ:function(){return f}});a(83117),a(80102),a(67294);var n=a(3905),r=a(80907),l=function(){return(0,r.zu)().path},i=function(t){var e=t.title,a=t.description,r=t.href,i=t.image_src;return(0,n.kt)("a",{class:"card-link",href:r.startsWith("http")?r:l()+"/"+r},(0,n.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,e),(0,n.kt)("p",null,a))},s=function(t){var e=t.children,a=t.href;return(0,n.kt)("a",{class:"reference-link",href:a.startsWith("http")?a:l()+"/"+a},e,(0,n.kt)("span",null,a))},o=function(t,e){return(0,n.kt)("a",{class:"authority-availability",href:l()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,n.kt)("img",{src:t,title:e}))},c=function(t){return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},p=function(t,e){return(0,n.kt)("a",{href:l()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},d=function(t,e){return(0,n.kt)("a",{href:l()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},m=function(t){var e=t.children;return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/enums#"+e.toLowerCase()},e)},k={AuthorityOnly:function(){return o("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return o("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return o("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},g={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},N={Vector:function(){return p("Vector")},Rotator:function(){return p("Rotator")},Color:function(){return p("Color")},Quat:function(){return p("Quat","quaternion")},Vector2D:function(){return p("Vector2D","vectortwod")}},f={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Item:function(){return d("Item")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}}},11029:function(t,e,a){a.d(e,{ZP:function(){return p}});var n=a(83117),r=a(80102),l=a(67294),i=a(3905),s=a(87469),o=["components"],c={toc:[]};function p(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(l.Fragment,null,a.hidden_reference?(0,i.kt)(l.Fragment,null):(0,i.kt)(s.SM,{href:"scripting-reference/classes/base-classes/actor",mdxType:"ReferenceLink"},"Base Actor")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#destroy"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Destroy")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Triggered when an Entity is Destroyed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#spawn"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Spawn")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Triggered when an Entity is Spawned/Created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#valuechange"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"ValueChange")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Triggered when an Entity has it\u2019s value changed")))))}p.isMDXComponent=!0},68758:function(t,e,a){a.d(e,{ZP:function(){return p}});var n=a(83117),r=a(80102),l=a(67294),i=a(3905),s=a(87469),o=["components"],c={toc:[]};function p(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(l.Fragment,null,a.hidden_reference?(0,i.kt)(l.Fragment,null):(0,i.kt)(s.SM,{href:"scripting-reference/classes/base-classes/actor",mdxType:"ReferenceLink"},"Base Actor")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Returns")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#addimpulse"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"AddImpulse")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Applies a Force in world coordinate on this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#attachto"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"AttachTo")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Attaches this Actor to any other Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#destroy"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Destroy")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Destroys this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#detach"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Detach")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Detaches this Actor if attached")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#setcollision"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetCollision")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the actor\u2019s collision type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#setforce"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetForce")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Adds a permanent force to this actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#setgravityenabled"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetGravityEnabled")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the actor\u2019s gravity enabled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#sethighlightenabled"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetHighlightEnabled")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enables this Actor Highlighting at a specific Index color")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#setlifespan"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetLifeSpan")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the actor\u2019s life span to be destroyed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#setlocation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetLocation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the actor\u2019s location in the game world")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#setnetworkauthority"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetNetworkAuthority")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets this actor\u2019s new Player ",(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/core-concepts/scripting/authority-concepts#network-authority"},"Network Authority"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#setrelativelocation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetRelativeLocation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the actor\u2019s relative location in local space")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#setrelativerotation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetRelativeRotation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the actor\u2019s relative rotation in local space")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#setrotation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetRotation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the actor\u2019s rotation in the game world")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#setsclae"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetScale")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the actor\u2019s scale")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#setvalue"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetValue")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a value in this entity, which can be accessed by any package")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#translateto"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"TranslateTo")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Smoothly moves this actor to a Location")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#rotateto"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"RotateTo")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Smoothly rotates this actor to a Rotation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#isbeingdestroyed"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsBeingDestroyed")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets if the actor is being destroyed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#isgravityenabled"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsGravityEnabled")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the actor\u2019s gravity enabled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#isinwater"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsInWater")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets if the actor is in Water")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#isnetworkdistributed"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsNetworkDistributed")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets if the actor is Network Distributed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#isvalid"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsValid")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns if this entity is valid (i.e. not destroyed)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Table,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#getattachedentities"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetAttachedEntities")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets all actors attached to this entity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Any,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#getattachedto"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetAttachedTo")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the actor this actor is attached to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Table,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#getbounds"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetBounds")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the actor bounds size")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#getcollision"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetCollision")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the current actor\u2019s collision")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#getid"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetID")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the universal network ID of this entity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Ut.Vector,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#getlocation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetLocation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Get the actor\u2019s position in the game world")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Ut.Vector,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#getinitiallocation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetInitialLocation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the initial location")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Ut.Rotator,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#getrotation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetRotation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the actor\u2019s rotation in the game world")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Ut.Vector,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#getscale"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetScale")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the actor\u2019s scale")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#gettype"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetType")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns the type of this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Any,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#getvalue"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetValue")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets a value given a key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Ut.Vector,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#GetVelocity"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetVelocity")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns the current actor Velocity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#subscribe"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Subscribe")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Subscribes for an Event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/actor#unsubscribe"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Unsubscribe")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unsubscribes from Events")))))}p.isMDXComponent=!0},6783:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return k},default:function(){return N}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(87469),s=a(68758),o=a(11029),c=["components"],p={description:"A Light represents a Lighting source",sidebar_position:0,tags:["class"]},d="\ud83d\udca1 Light",m={unversionedId:"scripting-reference/classes/light",id:"version-latest/scripting-reference/classes/light",isDocsHomePage:!1,title:"\ud83d\udca1 Light",description:"A Light represents a Lighting source",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/light.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/light",permalink:"/de/docs/scripting-reference/classes/light",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/light.mdx",tags:[{label:"class",permalink:"/de/docs/tags/class"}],version:"latest",sidebarPosition:0,frontMatter:{description:"A Light represents a Lighting source",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udd26 Item",permalink:"/de/docs/scripting-reference/classes/item"},next:{title:"\u2728 Particle",permalink:"/de/docs/scripting-reference/classes/particle"}},k=[{value:"Usage",id:"usage",children:[],level:2},{value:"Constructor Parameters",id:"constructor-parameters",children:[],level:2},{value:"Functions",id:"functions",children:[{value:"<code>SetColor</code>",id:"setcolor",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2}],g={toc:k};function N(t){var e=t.components,p=(0,r.Z)(t,c);return(0,l.kt)("wrapper",(0,n.Z)({},g,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-light"},"\ud83d\udca1 Light"),(0,l.kt)("p",null,"A Light represents a Lighting source."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(74565).Z})),(0,l.kt)("p",null,"nanos world provides 3 types of lights: ",(0,l.kt)("strong",{parentName:"p"},"Spot"),", ",(0,l.kt)("strong",{parentName:"p"},"Point")," and ",(0,l.kt)("strong",{parentName:"p"},"Rect"),". All lights are Dynamic and because of that, very expensive! Keep that in mind before spawning 1000 lights ;",")","."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can spawn this entity is both ",(0,l.kt)("strong",{parentName:"p"},"Client")," or ",(0,l.kt)("strong",{parentName:"p"},"Server")," ","(","if you spawn it on client, it won\u2019t be synchronized with other players",")","."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u23ec ",(0,l.kt)("strong",{parentName:"p"},"Inheritance:")," This class inherits from ",(0,l.kt)(i.PZ.Actor,null),". Please check it's pages for inherited ",(0,l.kt)("strong",{parentName:"p"},"Methods")," and ",(0,l.kt)("strong",{parentName:"p"},"Events"),"."))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local my_light = Light(\n    Vector(-152, 245, 115),\n    Rotator(0, 90, 90), -- Relevant only for Rect and Spot light types\n    Color(1, 0, 0), -- Red Tint\n    LightType.Point, -- Point Light type\n    100, -- Intensity\n    250, -- Attenuation Radius\n    44, -- Cone Angle (Relevant only for Spot light type)\n    0, -- Inner Cone Angle Percent (Relevant only for Spot light type)\n    5000, -- Max Draw Distance (Good for performance - 0 for infinite)\n    true, -- Whether to use physically based inverse squared distance falloff, where Attenuation Radius is only clamping the light's contribution. (Spot and Point types only)\n    true, -- Cast Shadows?\n    true -- Enabled?\n)\n")),(0,l.kt)("h2",{id:"constructor-parameters"},"Constructor Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Default")),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Ut.Vector,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"location"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Vector(0, 0, 0)")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Ut.Rotator,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"rotation"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Rotator(0, 0, 0)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Relevant only for Rect and Spot LightTypes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Ut.Color,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"color"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Color(1, 1, 1)")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Yb,{mdxType:"Enums"},"LightType")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"light_type"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"LightType.Point")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"intensity"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"30")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"attenuation_radius"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"250")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"cone_angle"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"44")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Relevant only for Spot LightType")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"inner_cone_angle_percent"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Inner Cone Angle Percent (Relevant only for Spot LightType) (0-1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"max_daw_distance"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"5000")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Max Draw Distance (Good for performance - 0 for infinite")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"use_inverse_squared_falloff"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether to use physically based inverse squared distance falloff, where Attenuation Radius is only clamping the light's contribution. (Spot and Point types only)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"cast_shadows"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"enabled"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Inherited Actor Functions"),(0,l.kt)(s.ZP,{mdxType:"BaseActorFunctions"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Returns")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"light#setcolor"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"SetColor")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sets the light color")))),(0,l.kt)("h3",{id:"setcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"SetColor")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets the light color")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_light:SetColor(color)\n")),(0,l.kt)("table",{"spaces-before":"0"},(0,l.kt)("tr",null,(0,l.kt)("th",{align:"left"},"Type"),(0,l.kt)("th",{align:"left"},"Parameter"),(0,l.kt)("th",{align:"left"},"Default Value"),(0,l.kt)("th",{align:"left"},"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)(i.Ut.Color,null)),(0,l.kt)("td",{align:"left"},(0,l.kt)("strong",{"x-id":"1"},(0,l.kt)("code",null,"color"))),(0,l.kt)("td",{align:"left"}),(0,l.kt)("td",{align:"left"},"The light color"))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Inherited Actor Events"),(0,l.kt)(o.ZP,{mdxType:"BaseActorEvents"})))}N.isMDXComponent=!0},74565:function(t,e,a){e.Z=a.p+"assets/images/light-321a3f8d8584a3e4f74693132cbced11.jpg"}}]);