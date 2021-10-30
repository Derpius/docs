"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8653],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},94872:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),s=["components"],c={description:"How to add Name Tags to Characters",tags:["tutorial-example","scripting"]},i="Name Tags",l={unversionedId:"getting-started/tutorials-and-examples/name-tags",id:"version-latest/getting-started/tutorials-and-examples/name-tags",isDocsHomePage:!1,title:"Name Tags",description:"How to add Name Tags to Characters",source:"@site/versioned_docs/version-latest/getting-started/tutorials-and-examples/name-tags.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/name-tags",permalink:"/docs/getting-started/tutorials-and-examples/name-tags",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/getting-started/tutorials-and-examples/name-tags.md",tags:[{label:"tutorial-example",permalink:"/docs/tags/tutorial-example"},{label:"scripting",permalink:"/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1634073576,formattedLastUpdatedAt:"10/12/2021",frontMatter:{description:"How to add Name Tags to Characters",tags:["tutorial-example","scripting"]},sidebar:"version-latest/main",previous:{title:"Monster Truck",permalink:"/docs/getting-started/tutorials-and-examples/monster-truck"},next:{title:"Painting Meshes",permalink:"/docs/getting-started/tutorials-and-examples/painting-meshes"}},d=[],u={toc:d};function p(e){var t=e.components,c=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"name-tags"},"Name Tags"),(0,o.kt)("p",null,"How to add Name Tags to Characters."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(74120).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Function to add a Nametag to a Player\nfunction AddNametag(player, character)\n    -- Try to get it\'s character\n    if (character == nil) then\n        character = player:GetControlledCharacter()\n        if (character == nil) then return end\n    end\n\n    -- Spawns the Nametag (TextRender),\n    local nametag = TextRender(\n        Vector(),               -- Any Location\n        Rotator(),              -- Any Rotation\n        player:GetName(),       -- Player Name\n        Vector(0.5, 0.5, 0.5),  -- 50% Scale\n        Color(1, 1, 1),         -- White\n        FontType.Roboto,        -- Roboto Font\n        TextRenderAlignCamera.AlignCameraRotation -- Follow Camera Rotation\n    )\n\n    -- Attaches it to the character and saves it to the player\'s values\n    nametag:AttachTo(character)\n    nametag:SetRelativeLocation(Vector(0, 0, 250))\n\n    player:SetValue("Nametag", nametag)\nend\n\n-- Function to remove a Nametag from  a Player\nfunction RemoveNametag(player, character)\n    -- Try to get it\'s character\n    if (character == nil) then\n        character = player:GetControlledCharacter()\n        if (character == nil) then return end\n    end\n\n    -- Gets the Nametag from the player, if any, and destroys it\n    local text_render = player:GetValue("Nametag")\n    if (text_render and text_render:IsValid()) then\n        text_render:Destroy()\n    end\nend\n\n-- Adds a new Nametag to a character which was possessed\nCharacter.Subscribe("Possessed", function(character, player)\n    AddNametag(player, character)\nend)\n\n-- Removes the Nametag from a character which was unpossessed\nCharacter.Subscribe("UnPossessed", function(character, player)\n    RemoveNametag(player, character)\nend)\n\n-- When a Player is spawned - for when you connect and there is already Player\'s connected\nPlayer.Subscribe("Spawn", function(player)\n    RemoveNametag(player)\n    AddNametag(player)\nend)\n')))}p.isMDXComponent=!0},74120:function(e,t,a){t.Z=a.p+"assets/images/nametag-2591ca793bd973b2de2491ad91352599.jpg"}}]);