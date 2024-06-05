"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[2223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A=r.createContext({}),s=function(e){var t=r.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(A.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,A=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,v=c["".concat(A,".").concat(u)]||c[u]||d[u]||l;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var A in t)hasOwnProperty.call(t,A)&&(i[A]=t[A]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:4},o="High Frequency Polling",i={unversionedId:"IBM SevOne Automated Network Observability/Advanced SevOne Labs/hfpoller",id:"IBM SevOne Automated Network Observability/Advanced SevOne Labs/hfpoller",title:"High Frequency Polling",description:"Overview",source:"@site/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/hfpoller.md",sourceDirName:"IBM SevOne Automated Network Observability/Advanced SevOne Labs",slug:"/IBM SevOne Automated Network Observability/Advanced SevOne Labs/hfpoller",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/hfpoller",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Object Subtype",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/objectsubtype"},next:{title:"TopN Reports",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/topn"}},A={},s=[],p={toc:s},c="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"high-frequency-polling"},"High Frequency Polling"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Overview"),"\nIn this lab we will learn how we can get more granular data from the network by monitoring specific objects at a higher frequency"),(0,a.kt)("p",null,"High Frequency Poller"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log into the NMS")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Devices -> Device Manager")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the \u2018spanner\u2019 icon of YOURDEVICE")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on \u2018High Frequency Poller\u2019")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click \u2018Add Object Poll Frequency\u2019"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"a.\tObject: CPU Total0"),(0,a.kt)("li",{parentName:"ul"},"b.\tFrequency: 5 seconds"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(60042).Z,width:"450",height:"272"})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Review")),(0,a.kt)("p",null,"This action should take immediate effect, so the easiest way to confirm this is by clicking on the name of the object."),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(80504).Z,width:"604",height:"24"})),(0,a.kt)("p",null,"This will bring us to a new page with the indicators monitored on that object, to see the difference between 1 minute polling and 5 seconds polling, click on the first widget (CPU Load) and that action will open a new window."),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(43168).Z,width:"604",height:"574"})),(0,a.kt)("p",null,"On that new window, on the only widget available click on the +  symbol to extend the widget and then click on the gear -> Change Timespan -> Past 2 hours. This way we will have a better view of the data collected."),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(61386).Z,width:"604",height:"108"})))}d.isMDXComponent=!0},61386:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/graph-91ad23791169fe65b57b6e396fe8132e.png"},43168:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/indicators-16465d5b490738f19e062c02b81dd867.png"},60042:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/opoll-25b09e50d74f479b596a54ea1ef7d26b.png"},80504:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);