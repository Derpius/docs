"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7473],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),k=r,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72389:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(9913);function l(){return(0,n.useContext)(r._)}},82924:function(e,t,a){var n=a(67294).createContext(void 0);t.Z=n},98465:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(83117),r=a(80102),l=a(67294),i=a(86010),s=a(72389),o=a(85350),c={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},p=["sources","className","alt"],d=function(e){var t=(0,s.Z)(),a=(0,o.Z)().isDarkTheme,d=e.sources,u=e.className,k=e.alt,m=void 0===k?"":k,f=(0,r.Z)(e,p),g=t?a?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,g.map((function(e){return l.createElement("img",(0,n.Z)({key:e,src:d[e],alt:m,className:(0,i.Z)(c.themedImage,c["themedImage--"+e],u)},f))})))}},85350:function(e,t,a){var n=a(67294),r=a(82924);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},87469:function(e,t,a){a.d(t,{YS:function(){return i},SM:function(){return s},Yb:function(){return u},aj:function(){return k},rt:function(){return m},Ut:function(){return f},PZ:function(){return g}});a(83117),a(80102),a(67294);var n=a(3905),r=a(80907),l=function(){return(0,r.zu)().path},i=function(e){var t=e.title,a=e.description,r=e.href,i=e.image_src;return(0,n.kt)("a",{class:"card-link",href:r.startsWith("http")?r:l()+"/"+r},(0,n.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,t),(0,n.kt)("p",null,a))},s=function(e){var t=e.children,a=e.href;return(0,n.kt)("a",{class:"reference-link",href:a.startsWith("http")?a:l()+"/"+a},t,(0,n.kt)("span",null,a))},o=function(e,t){return(0,n.kt)("a",{class:"authority-availability",href:l()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,n.kt)("img",{src:e,title:t}))},c=function(e){return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},p=function(e,t){return(0,n.kt)("a",{href:l()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},d=function(e,t){return(0,n.kt)("a",{href:l()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},u=function(e){var t=e.children;return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/enums#"+t.toLowerCase()},t)},k={AuthorityOnly:function(){return o("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return o("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return o("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},m={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},f={Vector:function(){return p("Vector")},Rotator:function(){return p("Rotator")},Color:function(){return p("Color")},Quat:function(){return p("Quat","quaternion")},Vector2D:function(){return p("Vector2D","vectortwod")}},g={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Item:function(){return d("Item")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}}},95418:function(e,t,a){a.d(t,{ZP:function(){return p}});var n=a(83117),r=a(80102),l=a(67294),i=a(3905),s=a(87469),o=["components"],c={toc:[]};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Fragment,null,a.hidden_reference?(0,i.kt)(l.Fragment,null):(0,i.kt)(s.SM,{href:"scripting-reference/classes/base-classes/pickable",mdxType:"ReferenceLink"},"Base Pickable")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#drop"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Drop")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"When a Character drops this")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#hit"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Hit")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"When this Entity hits something")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ServerOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#interact"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Interact")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Triggered when a Character tries to Pick up this")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#pickup"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"PickUp")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"When a Character picks up this")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#pulluse"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"PullUse")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"When a Character Pulls the Usage of this (i.e. pulls Left Mouse button when using it)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#releaseuse"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"ReleaseUse")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"When a Character Releases the Usage of this (i.e. releases Left Mouse button when using it)")))))}p.isMDXComponent=!0},67775:function(e,t,a){a.d(t,{ZP:function(){return p}});var n=a(83117),r=a(80102),l=a(67294),i=a(3905),s=a(87469),o=["components"],c={toc:[]};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Fragment,null,a.hidden_reference?(0,i.kt)(l.Fragment,null):(0,i.kt)(s.SM,{href:"scripting-reference/classes/base-classes/pickable",mdxType:"ReferenceLink"},"Base Pickable")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Returns")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#addskeletalmeshattached"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"AddSkeletalMeshAttached")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Spawns and Attaches a SkeletalMesh into this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#addstaticmeshattached"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"AddStaticMeshAttached")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Spawns and Attaches a StaticMesh into this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ServerOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#pulluse"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"PullUse")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Force this Pickable to be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ServerOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#releaseuse"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"ReleaseUse")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Force this Pickable to be released the usage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#removeskeletalmeshattached"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"RemoveSkeletalMeshAttached")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Removes, if existing, a SkeletalMesh from this Actor given it's custom ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#removestaticmeshattached"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"RemoveStaticMeshAttached")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Removes, if existing, a StaticMesh from this Actor given it's custom ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ServerOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#setcrosshairmaterial"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetCrosshairMaterial")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the Crosshair Material")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#getassetname"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetAssetName")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the Asset name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.PZ.Character,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable#gethandler"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetHandler")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the Character ","(","if existing",")"," which is hol")))))}p.isMDXComponent=!0},21066:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return k},toc:function(){return m},default:function(){return g}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(87469),s=a(98465),o=a(67775),c=a(95418),p=["components"],d={description:"Classe de base pour toutes les entit\xe9s Pickable",tags:["base-class"]},u="Base Pickable",k={unversionedId:"scripting-reference/classes/base-classes/pickable",id:"version-latest/scripting-reference/classes/base-classes/pickable",isDocsHomePage:!1,title:"Base Pickable",description:"Classe de base pour toutes les entit\xe9s Pickable",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/base-classes/pickable.mdx",sourceDirName:"scripting-reference/classes/base-classes",slug:"/scripting-reference/classes/base-classes/pickable",permalink:"/fr/docs/scripting-reference/classes/base-classes/pickable",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/base-classes/pickable.mdx",tags:[{label:"base-class",permalink:"/fr/docs/tags/base-class"}],version:"latest",frontMatter:{description:"Classe de base pour toutes les entit\xe9s Pickable",tags:["base-class"]},sidebar:"version-latest/main",previous:{title:"Base Paintable",permalink:"/fr/docs/scripting-reference/classes/base-classes/paintable"},next:{title:"\ud83c\udf40 Assets",permalink:"/fr/docs/scripting-reference/static-classes/assets"}},m=[{value:"Functions",id:"functions",children:[{value:"<code>AddSkeletalMeshAttached</code>",id:"addskeletalmeshattached",children:[],level:3},{value:"<code>AddStaticMeshAttached</code>",id:"addstaticmeshattached",children:[],level:3},{value:"<AuthorityType.ServerOnly /><code>PullUse</code>",id:"pulluse",children:[],level:3},{value:"<AuthorityType.ServerOnly /><code>ReleaseUse</code>",id:"releaseuse",children:[],level:3},{value:"<code>RemoveSkeletalMeshAttached</code>",id:"removeskeletalmeshattached",children:[],level:3},{value:"<code>RemoveStaticMeshAttached</code>",id:"removestaticmeshattached",children:[],level:3},{value:"<AuthorityType.ServerOnly /><code>SetCrosshairMaterial</code>",id:"setcrosshairmaterial",children:[],level:3},{value:"<code>GetAssetName</code>",id:"getassetname",children:[],level:3},{value:"<code>GetHandler</code>",id:"gethandler",children:[],level:3}],level:2},{value:"Events",id:"events",children:[{value:"<code>Drop</code>",id:"drop",children:[],level:3},{value:"<code>Hit</code>",id:"hit",children:[],level:3},{value:"<AuthorityType.ServerOnly /><code>Interact</code>",id:"interact",children:[],level:3},{value:"<code>PickUp</code>",id:"pickup",children:[],level:3},{value:"<code>PullUse</code>",id:"pulluse-1",children:[],level:3},{value:"<code>ReleaseUse</code>",id:"releaseuse-1",children:[],level:3}],level:2},{value:"Types de r\xe9ticules disponibles",id:"types-de-r\xe9ticules-disponibles",children:[{value:"Liste de mat\xe9riaux du r\xe9ticule inclus dans le Default Asset Pack",id:"liste-de-mat\xe9riaux-du-r\xe9ticule-inclus-dans-le-default-asset-pack",children:[],level:4}],level:2}],f={toc:m};function g(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"base-pickable"},"Base Pickable"),(0,l.kt)("p",null,"Classe de base pour toutes les entit\xe9s Pickable"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pickable")," sont des entit\xe9s sp\xe9ciales qui peuvent \xeatre ",(0,l.kt)("strong",{parentName:"p"},"saisi"),", ",(0,l.kt)("strong",{parentName:"p"},"d\xe9tenue")," et ",(0,l.kt)("strong",{parentName:"p"},"utilis\xe9")," par ",(0,l.kt)(i.PZ.Character,null),". Exemples d'entit\xe9s Pickable: ",(0,l.kt)(i.PZ.Weapon,null),", ",(0,l.kt)(i.PZ.Item,null)," et ",(0,l.kt)(i.PZ.Grenade,null),"."),(0,l.kt)("p",null,"Ils ont des m\xe9thodes et des \xe9v\xe9nements sp\xe9ciaux et sont mis en \xe9vidence lorsqu'ils sont regard\xe9s par un personnage."),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)(o.ZP,{hidden_reference:!0,mdxType:"BasePickableFunctions"}),(0,l.kt)("h3",{id:"addskeletalmeshattached"},(0,l.kt)("inlineCode",{parentName:"h3"},"AddSkeletalMeshAttached")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Cr\xe9e et attache un composant SkeletalMesh \xe0 cet Actor, le composant doit avoir le m\xeame Skeletal que celui utilis\xe9 par cet Actor Mesh, et suivra toutes les animations de celui-ci. Uses a custom ID to be used for removing it further")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:AddSkeletalMeshAttached(id, skeletal_mesh_path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"id"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Identifiant unique pour d\xe9finir le composant Skeletal Mesh")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"skeletal_mesh_path"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"L'asset Skeletal Mesh a utiliser")))),(0,l.kt)("h3",{id:"addstaticmeshattached"},(0,l.kt)("inlineCode",{parentName:"h3"},"AddStaticMeshAttached")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Cr\xe9e et attache un composant StaticMesh \xe0 cet Acteur dans un socket avec une position et une rotation relative. Uses a custom ID to be used for removing it further")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:AddStaticMeshAttached(id, static_mesh_path, socket, relative_location, relative_rotation)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"id"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Identifiant unique pour d\xe9finir le composant Static Mesh")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"static_mesh_path"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"L'asset Static Mesh a utiliser")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"socket"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},'""')),(0,l.kt)("td",{parentName:"tr",align:"left"},"Socket d'un os \xe0 attacher")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Ut.Vector,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"relative_location"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Vector(0, 0, 0)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Position relative")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Ut.Rotator,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"relative_rotation"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Rotator(0, 0, 0)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Rotation relative")))),(0,l.kt)("h3",{id:"pulluse"},(0,l.kt)(i.aj.ServerOnly,null),(0,l.kt)("inlineCode",{parentName:"h3"},"PullUse")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Force ce Pickable \xe0 \xeatre utilis\xe9 (par exemple, s'il s'agit d'une arme, il d\xe9clenchera le feu)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:PullUse()\n")),(0,l.kt)("h3",{id:"releaseuse"},(0,l.kt)(i.aj.ServerOnly,null),(0,l.kt)("inlineCode",{parentName:"h3"},"ReleaseUse")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Force ce Pickable \xe0 \xeatre lib\xe9r\xe9 de l'utilisation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:ReleaseUse()\n")),(0,l.kt)("h3",{id:"removeskeletalmeshattached"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoveSkeletalMeshAttached")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supprime, s'il existe, un composent SkeletalMesh de cet acteur en lui donnant son identifiant personnalis\xe9")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:RemoveSkeletalMeshAttached(id)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"id"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Identifiant unique pour supprimer le mesh attach\xe9")))),(0,l.kt)("h3",{id:"removestaticmeshattached"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoveStaticMeshAttached")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supprime, s'il existe, un composant StaticMesh de cet acteur en lui donnant son identifiant personnalis\xe9")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:RemoveStaticMeshAttached(id)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"id"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Identifiant unique pour supprimer le mesh attach\xe9")))),(0,l.kt)("h3",{id:"setcrosshairmaterial"},(0,l.kt)(i.aj.ServerOnly,null),(0,l.kt)("inlineCode",{parentName:"h3"},"SetCrosshairMaterial")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"D\xe9finit le mat\xe9riau du r\xe9ticule")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:SetCrosshairMaterial(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"getassetname"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetAssetName")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Retourne le nom de l'asset ","(",(0,l.kt)(i.rt.String,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:GetAssetName()\n")),(0,l.kt)("h3",{id:"gethandler"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetHandler")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Gets the Character ","(","if existing",")"," which is holding this")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:GetHandler()\n")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)(c.ZP,{hidden_reference:!0,mdxType:"BasePickableEvents"}),(0,l.kt)("h3",{id:"drop"},(0,l.kt)("inlineCode",{parentName:"h3"},"Drop")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Quand un personnage laisse tomber quelque chose")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'Weapon.Subscribe("Drop", function(self, character, was_triggered_by_player)\n    -- appel\xe9 quand une arme est jet\xe9 par le personnage\nend)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"pickable"},"Pickable")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"self")),(0,l.kt)("td",{parentName:"tr",align:"left"},"L'entit\xe9 qui a \xe9t\xe9 jet\xe9e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Character"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"character")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Le personnage qui a ramass\xe9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"was_triggered_by_player")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Si le joueur a activement appuy\xe9 sur 'G' pour jeter")))),(0,l.kt)("h3",{id:"hit"},(0,l.kt)("inlineCode",{parentName:"h3"},"Hit")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Quand cette entit\xe9 touche quelque chose")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'Weapon.Subscribe("Hit", function(self, impact_force, normal_impulse, impact_location, velocity)\n    -- appel\xe9 quand une arme touche quelque chose\nend)\n')),(0,l.kt)("table",{"spaces-before":"0"},(0,l.kt)("tr",null,(0,l.kt)("th",{align:"left"},"Type"),(0,l.kt)("th",{align:"left"},"Parameter"),(0,l.kt)("th",{align:"left"},"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)("a",{href:"pickable"},"Pickable")),(0,l.kt)("td",{align:"left"},(0,l.kt)("code",null,"self")),(0,l.kt)("td",{align:"left"},"L'entit\xe9 qui a \xe9t\xe9 touch\xe9e")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{align:"left"},(0,l.kt)("code",null,"impact_force")),(0,l.kt)("td",{align:"left"},"L'intensit\xe9 du Hit normalis\xe9e par le poids du Pickable")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)(i.Ut.Vector,null)),(0,l.kt)("td",{align:"left"},(0,l.kt)("code",null,"normal_impulse")),(0,l.kt)("td",{align:"left"},"La direction de l'impulsion qu'elle donne")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)(i.Ut.Vector,null)),(0,l.kt)("td",{align:"left"},(0,l.kt)("code",null,"impact_location")),(0,l.kt)("td",{align:"left"},"La position dans le monde de l'impact")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)(i.Ut.Vector,null)),(0,l.kt)("td",{align:"left"},(0,l.kt)("code",null,"velocity")),(0,l.kt)("td",{align:"left"},"La vitesse du Pickable au moment o\xf9 il frappe"))),(0,l.kt)("h3",{id:"interact"},(0,l.kt)(i.aj.ServerOnly,null),(0,l.kt)("inlineCode",{parentName:"h3"},"Interact")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Lorsqu'un personnage interagit avec cet objet \xe0 ramasser (c'est-\xe0-dire qu'il essaie de le ramasser)"),(0,l.kt)("p",{parentName:"blockquote"},"retourne false pour l'emp\xeacher")),(0,l.kt)("table",{"spaces-before":"0"},(0,l.kt)("tr",null,(0,l.kt)("th",{align:"left"},"Type"),(0,l.kt)("th",{align:"left"},"Parameter"),(0,l.kt)("th",{align:"left"},"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)("a",{href:"pickable"},"Pickable")),(0,l.kt)("td",{align:"left"},(0,l.kt)("strong",{"x-id":"1"},(0,l.kt)("code",null,"self"))),(0,l.kt)("td",{align:"left"})),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)(i.PZ.Character,null)),(0,l.kt)("td",{align:"left"},(0,l.kt)("strong",{"x-id":"1"},(0,l.kt)("code",null,"character"))),(0,l.kt)("td",{align:"left"}))),(0,l.kt)("h3",{id:"pickup"},(0,l.kt)("inlineCode",{parentName:"h3"},"PickUp")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Quand un personnage prend quelque chose")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'Weapon.Subscribe("PickUp", function(self, character)\n    -- appel\xe9 quand une arme est ramass\xe9 par un personnage\nend)\n')),(0,l.kt)("table",{"spaces-before":"0"},(0,l.kt)("tr",null,(0,l.kt)("th",{align:"left"},"Type"),(0,l.kt)("th",{align:"left"},"Parameter"),(0,l.kt)("th",{align:"left"},"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)("a",{href:"pickable"},"Pickable")),(0,l.kt)("td",{align:"left"},(0,l.kt)("code",null,"self")),(0,l.kt)("td",{align:"left"},"L'entit\xe9 qui a \xe9t\xe9 ramass\xe9e")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)(i.PZ.Character,null)),(0,l.kt)("td",{align:"left"},(0,l.kt)("code",null,"character")),(0,l.kt)("td",{align:"left"},"Le personnage qui a ramass\xe9"))),(0,l.kt)("h3",{id:"pulluse-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"PullUse")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Lorsqu'un personnage l'utilise (c'est-\xe0-dire qu'il appuie sur le bouton gauche de la souris lorsqu'il l'utilise ou qu'il appuie sur la d\xe9tente s'il s'agit d'une arme)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'Weapon.Subscribe("PullUse", function(self, character)\n\nend)\n')),(0,l.kt)("table",{"spaces-before":"0"},(0,l.kt)("tr",null,(0,l.kt)("th",{align:"left"},"Type"),(0,l.kt)("th",{align:"left"},"Parameter"),(0,l.kt)("th",{align:"left"},"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)("a",{href:"pickable"},"Pickable")),(0,l.kt)("td",{align:"left"},(0,l.kt)("code",null,"self")),(0,l.kt)("td",{align:"left"},"L'entit\xe9 qui a \xe9t\xe9 ramass\xe9e")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)(i.PZ.Character,null)),(0,l.kt)("td",{align:"left"},(0,l.kt)("code",null,"character")),(0,l.kt)("td",{align:"left"},"Le personnage qui a ramass\xe9"))),(0,l.kt)("h3",{id:"releaseuse-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"ReleaseUse")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Lorsqu'un personnage en rel\xe2che l'usage (c'est-\xe0-dire qu'il rel\xe2che le bouton gauche de la souris lorsqu'il l'utilise ou la d\xe9tente s'il s'agit d'une arme)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'Weapon.Subscribe("ReleaseUse", function(self, character)\n\nend)\n')),(0,l.kt)("table",{"spaces-before":"0"},(0,l.kt)("tr",null,(0,l.kt)("th",{align:"left"},"Type"),(0,l.kt)("th",{align:"left"},"Parameter"),(0,l.kt)("th",{align:"left"},"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)("a",{href:"pickable"},"Pickable")),(0,l.kt)("td",{align:"left"},(0,l.kt)("code",null,"self")),(0,l.kt)("td",{align:"left"},"L'entit\xe9 qui a \xe9t\xe9 ramass\xe9e")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)(i.PZ.Character,null)),(0,l.kt)("td",{align:"left"},(0,l.kt)("code",null,"character")),(0,l.kt)("td",{align:"left"},"Le personnage qui a ramass\xe9"))),(0,l.kt)("h2",{id:"types-de-r\xe9ticules-disponibles"},"Types de r\xe9ticules disponibles"),(0,l.kt)("p",null,"nanos world fournit un ensemble de mat\xe9riaux de r\xe9ticule qui peuvent \xeatre utilis\xe9s dans les armes/entit\xe9s. Vous pouvez bien s\xfbr cr\xe9er votre propre mat\xe9riau de r\xe9ticule et l'utiliser ainsi !"),(0,l.kt)(s.Z,{alt:"All available Crosshairs",sources:{light:"/img/docs/crosshairs_light.jpg",dark:"/img/docs/crosshairs_dark.jpg"},mdxType:"ThemedImage"}),(0,l.kt)("h4",{id:"liste-de-mat\xe9riaux-du-r\xe9ticule-inclus-dans-le-default-asset-pack"},"Liste de mat\xe9riaux du r\xe9ticule inclus dans le Default Asset Pack"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Circle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Crossbow")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Dot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Holo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Launcher")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Regular")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Regular_X")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Rocket")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Separated_Triangle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Shotgun")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Square")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Submachine")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Tee")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_ThreeDots")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Triangle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nanos-world::MI_Crosshair_Vee"))))}g.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);