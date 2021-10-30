"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9479],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=c(a),u=r,d=m["".concat(o,".").concat(u)]||m[u]||k[u]||s;return a?n.createElement(d,l(l({ref:e},p),{},{components:a})):n.createElement(d,l({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,l=new Array(s);l[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87469:function(t,e,a){a.d(e,{YS:function(){return l},SM:function(){return i},Yb:function(){return m},aj:function(){return u},rt:function(){return d},Ut:function(){return g},PZ:function(){return f}});a(83117),a(80102),a(67294);var n=a(3905),r=a(80907),s=function(){return(0,r.zu)().path},l=function(t){var e=t.title,a=t.description,r=t.href,l=t.image_src;return(0,n.kt)("a",{class:"card-link",href:r.startsWith("http")?r:s()+"/"+r},(0,n.kt)("img",{src:l||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,e),(0,n.kt)("p",null,a))},i=function(t){var e=t.children,a=t.href;return(0,n.kt)("a",{class:"reference-link",href:a.startsWith("http")?a:s()+"/"+a},e,(0,n.kt)("span",null,a))},o=function(t,e){return(0,n.kt)("a",{class:"authority-availability",href:s()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,n.kt)("img",{src:t,title:e}))},c=function(t){return(0,n.kt)("a",{href:s()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},p=function(t,e){return(0,n.kt)("a",{href:s()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},k=function(t,e){return(0,n.kt)("a",{href:s()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},m=function(t){var e=t.children;return(0,n.kt)("a",{href:s()+"/scripting-reference/glossary/enums#"+e.toLowerCase()},e)},u={AuthorityOnly:function(){return o("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return o("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return o("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},d={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},g={Vector:function(){return p("Vector")},Rotator:function(){return p("Rotator")},Color:function(){return p("Color")},Quat:function(){return p("Quat","quaternion")},Vector2D:function(){return p("Vector2D","vectortwod")}},f={Actor:function(){return k("Actor","base-classes/actor")},Paintable:function(){return k("Paintable","base-classes/paintable")},Pickable:function(){return k("Pickable","base-classes/pickable")},Cable:function(){return k("Cable")},Character:function(){return k("Character")},File:function(){return k("File")},Grenade:function(){return k("Grenade")},Item:function(){return k("Item")},Light:function(){return k("Light")},Particle:function(){return k("Particle")},Player:function(){return k("Player")},Prop:function(){return k("Prop")},Sound:function(){return k("Sound")},StaticMesh:function(){return k("StaticMesh","static-mesh")},TextRender:function(){return k("TextRender","text-render")},Trigger:function(){return k("Trigger")},Vehicle:function(){return k("Vehicle")},Weapon:function(){return k("Weapon")},WebUI:function(){return k("WebUI")}}},82225:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return k},default:function(){return u}});var n=a(83117),r=a(80102),s=(a(67294),a(3905)),l=a(87469),i=["components"],o={description:"Retrieve Assets from Asset Packs",tags:["static-class","verm\xf6gen"]},c="\ud83c\udf40 Assets",p={unversionedId:"scripting-reference/static-classes/assets",id:"scripting-reference/static-classes/assets",isDocsHomePage:!1,title:"\ud83c\udf40 Assets",description:"Retrieve Assets from Asset Packs",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/scripting-reference/static-classes/assets.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/assets",permalink:"/de/docs/next/scripting-reference/static-classes/assets",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/static-classes/assets.mdx",tags:[{label:"static-class",permalink:"/de/docs/next/tags/static-class"},{label:"verm\xf6gen",permalink:"/de/docs/next/tags/vermogen"}],version:"current",frontMatter:{description:"Retrieve Assets from Asset Packs",tags:["static-class","verm\xf6gen"]},sidebar:"main",previous:{title:"Base Pickable",permalink:"/de/docs/next/scripting-reference/classes/base-classes/pickable"},next:{title:"\u2328\ufe0f Client",permalink:"/de/docs/next/scripting-reference/static-classes/client"}},k=[{value:"Static Functions",id:"static-functions",children:[{value:"<code>GetAssetPacks</code>",id:"getassetpacks",children:[],level:3},{value:"<code>GetAnimations</code>",id:"getanimations",children:[],level:3},{value:"<code>GetMaps</code>",id:"getmaps",children:[],level:3},{value:"<code>GetMaterials</code>",id:"getmaterials",children:[],level:3},{value:"<code>GetParticles</code>",id:"getparticles",children:[],level:3},{value:"<code>GetSounds</code>",id:"getsounds",children:[],level:3},{value:"<code>GetSkeletalMeshes</code>",id:"getskeletalmeshes",children:[],level:3},{value:"<code>GetStaticMeshes</code>",id:"getstaticmeshes",children:[],level:3},{value:"<code>GetOthers</code>",id:"getothers",children:[],level:3}],level:2}],m={toc:k};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-assets"},"\ud83c\udf40 Assets"),(0,s.kt)("p",null,"Retrieve Assets from Asset Packs"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This is a Static Class named ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets"),". You can access it\u2019s methods directly with ",(0,s.kt)("inlineCode",{parentName:"p"},"."),". It is not possible to initialize or create new instances."))),(0,s.kt)("h2",{id:"static-functions"},"Static Functions"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Returns"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.Table,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"assets#getassetpacks"},(0,s.kt)("strong",{parentName:"a"},(0,s.kt)("inlineCode",{parentName:"strong"},"GetAssetPacks")))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Returns an array of tables containing information about all loaded Asset Packs")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.Table,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"assets#getanimations"},(0,s.kt)("strong",{parentName:"a"},(0,s.kt)("inlineCode",{parentName:"strong"},"GetAnimations")))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Returns an array of strings containing all Animation Assets Keys from an AssetPack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.Table,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"assets#getmaps"},(0,s.kt)("strong",{parentName:"a"},(0,s.kt)("inlineCode",{parentName:"strong"},"GetMaps")))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Returns an array of strings containing all Map Asset Keys from an AssetPack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.Table,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"assets#getmaterials"},(0,s.kt)("strong",{parentName:"a"},(0,s.kt)("inlineCode",{parentName:"strong"},"GetMaterials")))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Returns an array of strings containing all Materials Asset Keys from an AssetPack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.Table,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"assets#getparticles"},(0,s.kt)("strong",{parentName:"a"},(0,s.kt)("inlineCode",{parentName:"strong"},"GetParticles")))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Returns an array of strings containing all Particle Assets Keys from an AssetPack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.Table,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"assets#GetSounds"},(0,s.kt)("strong",{parentName:"a"},(0,s.kt)("inlineCode",{parentName:"strong"},"GetSounds")))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Returns an array of strings containing all Sound Assets Keys from an AssetPack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.Table,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"assets#GetSkeletalMeshes"},(0,s.kt)("strong",{parentName:"a"},(0,s.kt)("inlineCode",{parentName:"strong"},"GetSkeletalMeshes")))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Returns an array of strings containing all Skeletal Mesh Asset Keys from an AssetPack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.Table,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"assets#GetStaticMeshes"},(0,s.kt)("strong",{parentName:"a"},(0,s.kt)("inlineCode",{parentName:"strong"},"GetStaticMeshes")))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Returns an array of strings containing all Static Mesh Assets Keys from an AssetPack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.Table,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"assets#GetOthers"},(0,s.kt)("strong",{parentName:"a"},(0,s.kt)("inlineCode",{parentName:"strong"},"GetOthers")))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Returns an array of strings containing all Other Assets Keys from an AssetPack")))),(0,s.kt)("h3",{id:"getassetpacks"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetAssetPacks")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Returns an array of tables containing information about all loaded Asset Packs"),(0,s.kt)("p",{parentName:"blockquote"},"Returned table format ",(0,s.kt)("inlineCode",{parentName:"p"},"[{Name, Path, Author, Version}, ...]"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"Assets.GetAssetPacks()\n")),(0,s.kt)("h3",{id:"getanimations"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetAnimations")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Returns an array of strings containing all Animation Assets Keys from an AssetPack")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"Assets.GetAnimations(asset_pack_path)\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.String,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"asset_pack_path"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The Asset Pack path to get the assets")))),(0,s.kt)("h3",{id:"getmaps"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetMaps")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Returns an array of strings containing all Map Asset Keys from an AssetPack")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"Assets.GetMaps(asset_pack_path)\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.String,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"asset_pack_path"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The Asset Pack path to get the assets")))),(0,s.kt)("h3",{id:"getmaterials"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetMaterials")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Returns an array of strings containing all Material Assets Keys from an AssetPack")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"Assets.GetMaterials(asset_pack_path)\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.String,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"asset_pack_path"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The Asset Pack path to get the assets")))),(0,s.kt)("h3",{id:"getparticles"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetParticles")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Returns an array of strings containing all Particle Assets Keys from an AssetPack")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"Assets.GetParticles(asset_pack_path)\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.String,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"asset_pack_path"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The Asset Pack path to get the assets")))),(0,s.kt)("h3",{id:"getsounds"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetSounds")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Returns an array of strings containing all Sound Assets Keys from an AssetPack")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"Assets.GetSounds(asset_pack_path)\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.String,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"asset_pack_path"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The Asset Pack path to get the assets")))),(0,s.kt)("h3",{id:"getskeletalmeshes"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetSkeletalMeshes")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Returns an array of strings containing all Skeletal Mesh Asset Keys from an AssetPack")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"Assets.GetSkeletalMeshes(asset_pack_path)\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.String,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"asset_pack_path"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The Asset Pack path to get the assets")))),(0,s.kt)("h3",{id:"getstaticmeshes"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetStaticMeshes")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Returns an array of strings containing all Static Mesh Assets Keys from an AssetPack")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"Assets.GetStaticMeshes(asset_pack_path)\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.String,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"asset_pack_path"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The Asset Pack path to get the assets")))),(0,s.kt)("h3",{id:"getothers"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetOthers")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Returns an array of strings containing all Other Assets Keys from an AssetPack")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"Assets.GetOthers(asset_pack_path)\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)(l.rt.String,null)),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"asset_pack_path"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The Asset Pack path to get the assets")))))}u.isMDXComponent=!0}}]);