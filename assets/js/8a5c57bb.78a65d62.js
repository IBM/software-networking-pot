"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[7082],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:5},o="Custom Monitoring",l={unversionedId:"IBM SevOne Automated Network Observability/Custom Monitoring",id:"IBM SevOne Automated Network Observability/Custom Monitoring",title:"Custom Monitoring",description:"In this lab we will learn how we can create custom metrics based off existing KPIs in order to create aggregations or just new metrics that will help us understand better the performance of the overall network.",source:"@site/docs/IBM SevOne Automated Network Observability/Custom Monitoring.md",sourceDirName:"IBM SevOne Automated Network Observability",slug:"/IBM SevOne Automated Network Observability/Custom Monitoring",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Custom Monitoring",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Add Devices",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/add-devices"},next:{title:"Synthetic indicators",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/synthetic"}},s={},c=[{value:"Create Aggregation",id:"create-aggregation",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-monitoring"},"Custom Monitoring"),(0,n.kt)("p",null,"In this lab we will learn how we can create custom metrics based off existing KPIs in order to create aggregations or just new metrics that will help us understand better the performance of the overall network."),(0,n.kt)("h2",{id:"create-aggregation"},"Create Aggregation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into the NMS"),(0,n.kt)("li",{parentName:"ol"},"Go to Administration -> Monitoring Configuration -> Object Types"),(0,n.kt)("li",{parentName:"ol"},"Change Filter to Calculation Poller"),(0,n.kt)("li",{parentName:"ol"},"Click Add\na. Name: CPU"),(0,n.kt)("li",{parentName:"ol"},"Choose CPU",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a. Click Add Atomic Indicator Type",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"i. Indicator Name: Avg CPU"),(0,n.kt)("li",{parentName:"ul"},"ii. Description: Average CPU"),(0,n.kt)("li",{parentName:"ul"},"iii. Indicator Type: GAUGE"),(0,n.kt)("li",{parentName:"ul"},"iv. Measure as: Percent"),(0,n.kt)("li",{parentName:"ul"},"v. Display as: Percent")))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(3429).Z,width:"860",height:"95"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Go to Administration -> Monitoring Configuration -> Calculation Editor"),(0,n.kt)("li",{parentName:"ol"},"Click \u2018Add Object\u2019",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a.\tParent Device: YOURDEVICE"),(0,n.kt)("li",{parentName:"ul"},"b.\tObject Type: CPU"),(0,n.kt)("li",{parentName:"ul"},"c.\tObject Name: Avg CPU"),(0,n.kt)("li",{parentName:"ul"},"d.\tObject Description: Average CPU"))),(0,n.kt)("li",{parentName:"ol"},"Save"),(0,n.kt)("li",{parentName:"ol"},"Select the CPU objects in YOURDEVICE"),(0,n.kt)("li",{parentName:"ol"},"Add Variable: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a.\tName: 1"),(0,n.kt)("li",{parentName:"ul"},"b.\tPlugin: SNMP Poller"),(0,n.kt)("li",{parentName:"ul"},"c.\tDevice: YOURDEVICE"),(0,n.kt)("li",{parentName:"ul"},"d.\tObject: CPU196608"),(0,n.kt)("li",{parentName:"ul"},"e.\tIndicator: CPU Load"))),(0,n.kt)("li",{parentName:"ol"},"Save"),(0,n.kt)("li",{parentName:"ol"},"Add Variable: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a.\tName: 2"),(0,n.kt)("li",{parentName:"ul"},"b.\tPlugin: SNMP Poller"),(0,n.kt)("li",{parentName:"ul"},"c.\tDevice: YOURDEVICE"),(0,n.kt)("li",{parentName:"ul"},"d.\tObject: CPU196609"),(0,n.kt)("li",{parentName:"ul"},"e.\tIndicator: CPU Load"))),(0,n.kt)("li",{parentName:"ol"},"Save")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(8448).Z,width:"500",height:"284"})),(0,n.kt)("p",null,"Repeat for as many CPUs you find"),(0,n.kt)("ol",{start:14},(0,n.kt)("li",{parentName:"ol"},"Expression Browser",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a. Edit CPULoad Indicator:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"i. Expression: (${1}+${2})/2"))))),(0,n.kt)("li",{parentName:"ol"},"Save")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(6218).Z,width:"604",height:"324"})),(0,n.kt)("ol",{start:16},(0,n.kt)("li",{parentName:"ol"},"Go to Devices - > Device Manager"),(0,n.kt)("li",{parentName:"ol"},"Select YOURDEVICE and click discover")),(0,n.kt)("p",null,"Review\nOnce the rediscovery is finished, your device should have one more object, the new one we have created. Edit the device, go to Object Manager, find the new object on click on the name to open a new window that will show the data it\u2019s being calculated."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(6361).Z,width:"604",height:"128"}),"\n",(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(5503).Z,width:"480",height:"524"})),(0,n.kt)("p",null,"Congratulations! You have Completed this lab."))}m.isMDXComponent=!0},3429:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Otypes-e8058b9f0dc947d66a689d5bb317376f.png"},6218:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/obrowser-0bc0ba9dc4428b908a32f90c8ba35b79.png"},6361:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ocpu-f796f9cdffd54d8b40cdb49ca4510219.png"},8448:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/oload-67988d388f98630b70af9fbe7baa0a5b.png"},5503:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/opoller-b792dd584dd5633a74d7ac56d48970ff.png"}}]);