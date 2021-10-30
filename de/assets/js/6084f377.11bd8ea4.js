"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7514],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87469:function(e,t,a){a.d(t,{YS:function(){return i},SM:function(){return o},Yb:function(){return u},aj:function(){return d},rt:function(){return k},Ut:function(){return f},PZ:function(){return g}});a(83117),a(80102),a(67294);var r=a(3905),n=a(80907),l=function(){return(0,n.zu)().path},i=function(e){var t=e.title,a=e.description,n=e.href,i=e.image_src;return(0,r.kt)("a",{class:"card-link",href:n.startsWith("http")?n:l()+"/"+n},(0,r.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,a))},o=function(e){var t=e.children,a=e.href;return(0,r.kt)("a",{class:"reference-link",href:a.startsWith("http")?a:l()+"/"+a},t,(0,r.kt)("span",null,a))},s=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:l()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},c=function(e){return(0,r.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},p=function(e,t){return(0,r.kt)("a",{href:l()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},m=function(e,t){return(0,r.kt)("a",{href:l()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},u=function(e){var t=e.children;return(0,r.kt)("a",{href:l()+"/scripting-reference/glossary/enums#"+t.toLowerCase()},t)},d={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},k={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},f={Vector:function(){return p("Vector")},Rotator:function(){return p("Rotator")},Color:function(){return p("Color")},Quat:function(){return p("Quat","quaternion")},Vector2D:function(){return p("Vector2D","vectortwod")}},g={Actor:function(){return m("Actor","base-classes/actor")},Paintable:function(){return m("Paintable","base-classes/paintable")},Pickable:function(){return m("Pickable","base-classes/pickable")},Cable:function(){return m("Cable")},Character:function(){return m("Character")},File:function(){return m("File")},Grenade:function(){return m("Grenade")},Item:function(){return m("Item")},Light:function(){return m("Light")},Particle:function(){return m("Particle")},Player:function(){return m("Player")},Prop:function(){return m("Prop")},Sound:function(){return m("Sound")},StaticMesh:function(){return m("StaticMesh","static-mesh")},TextRender:function(){return m("TextRender","text-render")},Trigger:function(){return m("Trigger")},Vehicle:function(){return m("Vehicle")},Weapon:function(){return m("Weapon")},WebUI:function(){return m("WebUI")}}},57121:function(e,t,a){a.d(t,{ZP:function(){return p}});var r=a(83117),n=a(80102),l=a(67294),i=a(3905),o=a(87469),s=["components"],c={toc:[]};function p(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Fragment,null,a.hidden_reference?(0,i.kt)(l.Fragment,null):(0,i.kt)(o.SM,{href:"scripting-reference/classes/base-classes/paintable",mdxType:"ReferenceLink"},"Base Paintable")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Returns")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/paintable#setmaterial"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterial")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Replace a materials of this actor with another Material")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(o.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialfromwebui"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialFromWebUI")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Replace a materials of this actor with a WebUI")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialcolorparameter"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialColorParameter")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a Color parameter in this actor\u2019s material")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialscalarparameter"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialScalarParameter")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a scalar parameter in this actor\u2019s material")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialtextureparameter"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialTextureParameter")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Loads a image from computer (relative to Assets/ folder) and sets as parameter in this actor\u2019s material")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialvectorparameter"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialVectorParameter")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a Vector parameter in this actor\u2019s material")))))}p.isMDXComponent=!0},75941:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return k}});var r=a(83117),n=a(80102),l=(a(67294),a(3905)),i=a(87469),o=a(57121),s=["components"],c={description:"Base Paintable Class",tags:["base-class"]},p="Base Paintable",m={unversionedId:"scripting-reference/classes/base-classes/paintable",id:"version-latest/scripting-reference/classes/base-classes/paintable",isDocsHomePage:!1,title:"Base Paintable",description:"Base Paintable Class",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/base-classes/paintable.mdx",sourceDirName:"scripting-reference/classes/base-classes",slug:"/scripting-reference/classes/base-classes/paintable",permalink:"/de/docs/scripting-reference/classes/base-classes/paintable",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/base-classes/paintable.mdx",tags:[{label:"base-class",permalink:"/de/docs/tags/base-class"}],version:"latest",frontMatter:{description:"Base Paintable Class",tags:["base-class"]},sidebar:"version-latest/main",previous:{title:"Base Actor",permalink:"/de/docs/scripting-reference/classes/base-classes/actor"},next:{title:"Base Pickable",permalink:"/de/docs/scripting-reference/classes/base-classes/pickable"}},u=[{value:"Functions",id:"functions",children:[{value:"<code>SetMaterial</code>",id:"setmaterial",children:[],level:3},{value:"<AuthorityType.ClientOnly /><code>SetMaterialFromWebUI</code>",id:"setmaterialfromwebui",children:[],level:3},{value:"<code>SetMaterialColorParameter</code>",id:"setmaterialcolorparameter",children:[],level:3},{value:"<code>SetMaterialScalarParameter</code>",id:"setmaterialscalarparameter",children:[],level:3},{value:"<code>SetMaterialTextureParameter</code>",id:"setmaterialtextureparameter",children:[],level:3},{value:"<code>SetMaterialVectorParameter</code>",id:"setmaterialvectorparameter",children:[],level:3}],level:2}],d={toc:u};function k(e){var t=e.components,a=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"base-paintable"},"Base Paintable"),(0,l.kt)("p",null,"Base Paintable Class"),(0,l.kt)("p",null,"A ",(0,l.kt)("strong",{parentName:"p"},"Paintable")," class is a base Class in nanos world which provides customization on the Meshes Materials, exposing common functions to allow you to set custom Material Parameters and loading Textures from Disk."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is a base Class. You cannot spawn it directly."))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)(o.ZP,{hidden_reference:!0,mdxType:"BasePaintableFunctions"}),(0,l.kt)("h3",{id:"setmaterial"},(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterial")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Replace a materials of this actor with another Material")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterial(new_material, index)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"material_path"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The new Material to apply")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"index"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"-1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index to apply - -1 means all indexes")))),(0,l.kt)("h3",{id:"setmaterialfromwebui"},(0,l.kt)(i.aj.ClientOnly,null),(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterialFromWebUI")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Replace a materials of this actor with a WebUI Material")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterialFromWebUI(webui, index)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.PZ.WebUI,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"webui"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The WebUI entity to use as Material")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"index"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"-1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index to apply - -1 means all indexes")))),(0,l.kt)("h3",{id:"setmaterialcolorparameter"},(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterialColorParameter")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets a Color parameter in this actor\u2019s material")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterialColorParameter(parameter_name, color)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"parameter_name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of Material parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Ut.Color,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"color"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value to set")))),(0,l.kt)("h3",{id:"setmaterialscalarparameter"},(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterialScalarParameter")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets a Scalar parameter in this actor\u2019s material")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterialScalarParameter(parameter_name, number)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"parameter","_","name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of Material parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"scalar"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value to set")))),(0,l.kt)("h3",{id:"setmaterialtextureparameter"},(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterialTextureParameter")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Loads a image from computer ","(","relative to Assets/ folder",")"," and sets as parameter in this actor\u2019s material")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterialTextureParameter(parameter_name, texture_path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"parameter","_","name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of Material parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/de/docs/scripting-reference/glossary/basic-types#specialpath"},"SpecialPath")),(0,l.kt)("td",{parentName:"tr",align:"left"},"texture","_","path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The path of the Texture")))),(0,l.kt)("h3",{id:"setmaterialvectorparameter"},(0,l.kt)("inlineCode",{parentName:"h3"},"SetMaterialVectorParameter")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets a Vector parameter in this actor\u2019s material")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_entity:SetMaterialVectorParameter(parameter_name, vector)\n")),(0,l.kt)("table",{"spaces-before":"0"},(0,l.kt)("tr",null,(0,l.kt)("th",{align:"left"},"Type"),(0,l.kt)("th",{align:"left"},"Parameter"),(0,l.kt)("th",{align:"left"},"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{align:"left"},"parameter\\_name"),(0,l.kt)("td",{align:"left"},"The name of Material parameter")),(0,l.kt)("tr",null,(0,l.kt)("td",{align:"left"},(0,l.kt)(i.Ut.Vector,null)),(0,l.kt)("td",{align:"left"},"vector"),(0,l.kt)("td",{align:"left"},"The vector to apply"))))}k.isMDXComponent=!0}}]);