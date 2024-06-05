"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[4609],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,u=d["".concat(l,".").concat(k)]||d[k]||m[k]||i;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},77737:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:5},o="Synthetic indicators",c={unversionedId:"IBM SevOne Automated Network Observability/synthetic",id:"IBM SevOne Automated Network Observability/synthetic",title:"Synthetic indicators",description:"In this lab we will learn how we can create synthetic indicators in order to combine metrics from a single object into a new KPI.",source:"@site/docs/IBM SevOne Automated Network Observability/synthetic.md",sourceDirName:"IBM SevOne Automated Network Observability",slug:"/IBM SevOne Automated Network Observability/synthetic",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/synthetic",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Custom Monitoring",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Custom Monitoring"},next:{title:"Grouping and Metadata",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/groupingmeta"}},l={},s=[{value:"Create Synthetic Indicator",id:"create-synthetic-indicator",level:2},{value:"Review",id:"review",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"synthetic-indicators"},"Synthetic indicators"),(0,r.kt)("p",null,"In this lab we will learn how we can create synthetic indicators in order to combine metrics from a single object into a new KPI."),(0,r.kt)("p",null,"The example that we will cover in this lab shows how the Interface object type collects number of packet errors on the interface, however it does not show the percentage of packet errors compared with the total number of packets received on that interface, even though we are collecting that data. Therefore we will create a new synthetic indicator that calculates the percentage of errors received, compared with the total number of packets received."),(0,r.kt)("h2",{id:"create-synthetic-indicator"},"Create Synthetic Indicator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into the NMS")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Administration -> Monitoring Configuration -> Object Types")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Interface"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(89405).Z,width:"845",height:"656"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Add Synthetic Indicator Type"),(0,r.kt)("p",{parentName:"li"},"a. Indicator Name: s1_InErrorsPercentage"),(0,r.kt)("p",{parentName:"li"},"b. Description: In Errors Percentage"),(0,r.kt)("p",{parentName:"li"},"c. Synthetic Indicator Expression:  100* ${ifInErrors}/ (${ifInErrors} + ${ifInDiscards} + useIfValid(${ifInBroadcastPkts},0) + useIfValid(${ifInMulticastPkts},0) + useIfValid(${ifInUcastPkts},0) + useIfValid(${ifHCInBroadcastPkts},0) + useIfValid(${ifHCInMulticastPkts},0) + useIfValid(${ifHCInUcastPkts},0) )"),(0,r.kt)("p",{parentName:"li"},"d. Maximum Value Expression: 100"),(0,r.kt)("p",{parentName:"li"},"e. Measure As: Percent"),(0,r.kt)("p",{parentName:"li"},"f. Display As: Percent"),(0,r.kt)("p",{parentName:"li"},"g. Click Save As New"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(97945).Z,width:"850",height:"516"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for Pkts on the search box and enable 'Default Allowed' on:"),(0,r.kt)("p",{parentName:"li"},"a. ifHCInMulticastPkts"),(0,r.kt)("p",{parentName:"li"},"b. ifHCInUcastPkts"),(0,r.kt)("p",{parentName:"li"},"c. IfInBroadcastPkts"),(0,r.kt)("p",{parentName:"li"},"d. IfInMulticastPkts"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(49722).Z,width:"1077",height:"505"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Devices -> Device Manager, find CHI-EDGE01 and click on the wrench icon to edit the device")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on 'Edit Indicator Types to Monitor' at the bottom of the page")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable the following indicators:"),(0,r.kt)("p",{parentName:"li"},"a. Hc In Multicast Pkts"),(0,r.kt)("p",{parentName:"li"},"b. HC In Unicast Pkts"),(0,r.kt)("p",{parentName:"li"},"c. In Broadcast Pkts"),(0,r.kt)("p",{parentName:"li"},"d. In Multicast Pkts")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Save Changes"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(3270).Z,width:"588",height:"590"})),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Go back to Devices -> Device Manager, select CHI-EDGE01, click on the 'gear' icon -> Discovery Discover")),(0,r.kt)("p",null,"Wait 5 - 10 minutes before reviewing"),(0,r.kt)("h2",{id:"review"},"Review"),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Devices -> Device Manager, find CHI-EDGE01 and click on the wrench icon to edit the device")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Object Manager")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for Gigabit and click on GigabitEthernet1/1/0/0"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(41012).Z,width:"676",height:"235"})),(0,r.kt)("ol",{start:14},(0,r.kt)("li",{parentName:"ol"},"Scroll down a little bit to find the section 'In Statistics' where you will find the indicator In Errors Percentage with data")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(30656).Z,width:"879",height:"847"})))}m.isMDXComponent=!0},89405:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img1-1734dbdb6fdf0867f4e0afd6495d7e75.png"},97945:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img2-4c125f4d31d39f2effee8214bdbf48c5.png"},49722:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img3-d720928003ac815cdc131e3a837a5195.png"},3270:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img4-a58508562183b4683c3a68a57af6eace.png"},41012:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img5-60e0142efcbb1b4e2e53151dfc05f1a2.png"},30656:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img6-5909a86f8c2805800d6aa0feef046803.png"}}]);