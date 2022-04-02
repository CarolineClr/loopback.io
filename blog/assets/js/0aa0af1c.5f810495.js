"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[909],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(n),s=r,b=g["".concat(c,".").concat(s)]||g[s]||m[s]||i;return n?o.createElement(b,a(a({ref:t},u),{},{components:n})):o.createElement(b,a({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1234:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return s}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Building an Online Game With LoopBack 4 (Part 1)",date:new Date("2019-04-30T00:00:00.000Z"),authors:"wenbo",slug:"building-online-game-with-loopback-4-pt1",tags:["how-to"]},c=void 0,p={permalink:"/blog/building-online-game-with-loopback-4-pt1",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-04-30-building-online-game-with-loopback-4-pt1.md",source:"@site/blog/2019/2019-04-30-building-online-game-with-loopback-4-pt1.md",title:"Building an Online Game With LoopBack 4 (Part 1)",description:"Originally published on strongloop.com",date:"2019-04-30T00:00:00.000Z",formattedDate:"April 30, 2019",tags:[{label:"how-to",permalink:"/blog/tags/how-to"}],readingTime:9.21,truncated:!0,authors:[{name:"Wen Bo",title:"LoopBack Maintainer",url:"https://github.com/gobackhuoxing",imageURL:"https://avatars.githubusercontent.com/u/22156589",key:"wenbo"}],frontMatter:{title:"Building an Online Game With LoopBack 4 (Part 1)",date:"2019-04-30T00:00:00.000Z",authors:"wenbo",slug:"building-online-game-with-loopback-4-pt1",tags:["how-to"]},prevItem:{title:"LoopBack 4 April 2019 Milestone Update",permalink:"/blog/april-2019-milestone"},nextItem:{title:"LoopBack 4 2019 Q1 Overview",permalink:"/blog/loopback-4-2019-q1-overview"}},u={authorsImageUrls:[void 0]},m=[{value:"Part 1: Building a Simple LoopBack Project With MongoDB",id:"part-1-building-a-simple-loopback-project-with-mongodb",children:[{value:"Introduction",id:"introduction",children:[],level:3}],level:2}],g={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Originally published on ",(0,i.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,i.kt)("h2",{id:"part-1-building-a-simple-loopback-project-with-mongodb"},"Part 1: Building a Simple LoopBack Project With MongoDB"),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,'"Ready to build amazing things?" asks the LoopBack 4 homepage before encouraging you to try the open source framework.'),(0,i.kt)("p",null,'"Try LoopBack 4 now."'),(0,i.kt)("p",null,"In this series, I'm going to do exactly that! Join me as I create an API web game using LoopBack 4."))}s.isMDXComponent=!0}}]);