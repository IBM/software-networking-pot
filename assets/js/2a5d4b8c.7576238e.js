"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[1613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},v="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),v=d(n),p=i,m=v["".concat(c,".").concat(p)]||v[p]||u[p]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[v]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:4},a="Add Devices",l={unversionedId:"IBM SevOne Automated Network Observability/add-devices",id:"IBM SevOne Automated Network Observability/add-devices",title:"Add Devices",description:"In this lab we will learn how SevOne device certification works. Device certification allows us to",source:"@site/docs/IBM SevOne Automated Network Observability/add-devices.md",sourceDirName:"IBM SevOne Automated Network Observability",slug:"/IBM SevOne Automated Network Observability/add-devices",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/add-devices",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"User Administration",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/administration"},next:{title:"Custom Monitoring",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Custom Monitoring"}},c={},d=[{value:"Adding an SNMP Device to the vPAS (NMS)",id:"adding-an-snmp-device-to-the-vpas-nms",level:2},{value:"Add SNMP Device",id:"add-snmp-device",level:3},{value:"Review",id:"review",level:2}],s={toc:d},v="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(v,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-devices"},"Add Devices"),(0,i.kt)("p",null,"In this lab we will learn how SevOne device certification works. Device certification allows us to\ndiscover all the relevant data from the device without the need of extra configuration, giving you all\nthe metrics you need to have a complete view of the performance of the device."),(0,i.kt)("h2",{id:"adding-an-snmp-device-to-the-vpas-nms"},"Adding an SNMP Device to the vPAS (NMS)"),(0,i.kt)("h3",{id:"add-snmp-device"},"Add SNMP Device"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log into the NMS"),(0,i.kt)("li",{parentName:"ol"},"Go to Devices -> Device Manager"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add Device"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a. Name: your name"),(0,i.kt)("li",{parentName:"ul"},"b. IP Address: 172.24.147.194"),(0,i.kt)("li",{parentName:"ul"},"c. SNMP Read Community String: sevone"),(0,i.kt)("li",{parentName:"ul"},"d. Poll Frequency: 1 minute"))),(0,i.kt)("li",{parentName:"ol"},"Save")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(34173).Z,width:"755",height:"660"})),(0,i.kt)("h2",{id:"review"},"Review"),(0,i.kt)("p",null,"After a few minutes, the name device added should have over 500 objects.\nClick on the wrench icon next to your device, click on Object Manager and have a look at the objects discovered based on the device certification available in SevOne"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(87851).Z,width:"755",height:"365"})),(0,i.kt)("p",null,"This concludes adding devices tutorial."))}u.isMDXComponent=!0},34173:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/newdevice-b2d2f6c2363ae36e4be6e24147808167.png"},87851:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/objlist-bbb1d4d55f8304bb12327822fd14255f.png"}}]);