"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[9656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,k=d["".concat(l,".").concat(b)]||d[b]||m[b]||r;return n?i.createElement(k,o(o({ref:t},s),{},{components:n})):i.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},26862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:5},o="TopN Reports",p={unversionedId:"IBM SevOne Automated Network Observability/Advanced SevOne Labs/topn",id:"IBM SevOne Automated Network Observability/Advanced SevOne Labs/topn",title:"TopN Reports",description:"In this lab we will learn how we can create new TopN views to be used on Data Insight reports.",source:"@site/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/topn.md",sourceDirName:"IBM SevOne Automated Network Observability/Advanced SevOne Labs",slug:"/IBM SevOne Automated Network Observability/Advanced SevOne Labs/topn",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/topn",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"High Frequency Polling",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/hfpoller"},next:{title:"Application Centric Report",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/appcentric"}},l={},c=[],s={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"topn-reports"},"TopN Reports"),(0,a.kt)("p",null,"In this lab we will learn how we can create new TopN views to be used on Data Insight reports."),(0,a.kt)("p",null,"TopN views allows us to optimze reports by calculating in the background the top devices/objects based on a specific indicator. Out of the box there are several TopN views available, however it is recommended creating custom TopN views based on the KPIs collected on your network."),(0,a.kt)("p",null,"In this lab we will create custom TopN views to show top QoS classes by bytes dropped as well as another TopN view to show top devices by temperature."),(0,a.kt)("h1",{id:"topn-view"},"TopN View"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Login into your NMS")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Reports -> TopN Reports")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Add View"),(0,a.kt)("p",{parentName:"li"},"a. Report View Name: QoS - Bytes Dropped"),(0,a.kt)("p",{parentName:"li"},"b. Indicator Selection"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Plugin: SNMP\n\nii. Object Type: QoS (Cisco IOS XR)\n\niii. Disable 'Only Display Common Subtypes'\n\niv. Object Subtype: any\n\nv. Indicator Type: Class Dropped bytes\n\nvi. Click Add Indicator\n")),(0,a.kt)("p",{parentName:"li"},"c. Indicator Selection"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Plugin: SNMP\n\nii. Object Type: QoS (Cisco IOS XR)\n\niii. Disable 'Only Display Common Subtypes'\n\niv. Object Subtype: any\n\nv. Indicator Type: Class HC Dropped bytes\n\nvi. Click Add Indicator\n")),(0,a.kt)("p",{parentName:"li"},"d. Indicator Selection"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Plugin: SNMP\n\nii. Object Type: QoS (Cisco IOS)\n\niii. Disable 'Only Display Common Subtypes'\n\niv. Object Subtype: any\n\nv. Indicator Type: Class Dropped bytes\n\nvi. Click Add Indicator\n")),(0,a.kt)("p",{parentName:"li"},"e. Indicator Selection"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Plugin: SNMP\n\nii. Object Type: QoS (Cisco IOS)\n\niii. Disable 'Only Display Common Subtypes'\n\niv. Object Subtype: any\n\nv. Indicator Type: Class HC Dropped bytes\n\nvi. Click Add Indicator\n")),(0,a.kt)("p",{parentName:"li"},"f. Click Save"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(5895).Z,width:"995",height:"522"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Add View"),(0,a.kt)("p",{parentName:"li"},"a. Report View Name: QoS - Bytes Dropped"),(0,a.kt)("p",{parentName:"li"},"b. Indicator Selection"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Plugin: SNMP\n\nii. Object Type: QoS (Cisco IOS XR)\n\niii. Disable 'Only Display Common Subtypes'\n\niv. Object Subtype: any\n\nv. Indicator Type: Class Out Bytes\n\nvi. Click Add Indicator\n")),(0,a.kt)("p",{parentName:"li"},"c. Indicator Selection"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Plugin: SNMP\n\nii. Object Type: QoS (Cisco IOS XR)\n\niii. Disable 'Only Display Common Subtypes'\n\niv. Object Subtype: any\n\nv. Indicator Type: Class HC Out bytes\n\nvi. Click Add Indicator\n")),(0,a.kt)("p",{parentName:"li"},"d. Indicator Selection"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Plugin: SNMP\n\nii. Object Type: QoS (Cisco IOS)\n\niii. Disable 'Only Display Common Subtypes'\n\niv. Object Subtype: any\n\nv. Indicator Type: Class Out bytes\n\nvi. Click Add Indicator\n")),(0,a.kt)("p",{parentName:"li"},"e. Indicator Selection"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Plugin: SNMP\n\nii. Object Type: QoS (Cisco IOS)\n\niii. Disable 'Only Display Common Subtypes'\n\niv. Object Subtype: any\n\nv. Indicator Type: Class HC Out bytes\n\nvi. Click Add Indicator\n")),(0,a.kt)("p",{parentName:"li"},"f. Click Save"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(13699).Z,width:"997",height:"518"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Add View"),(0,a.kt)("p",{parentName:"li"},"a. Report View Name: Temperature"),(0,a.kt)("p",{parentName:"li"},"b. Indicator Selection"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Plugin: SNMP\n\nii. Object Type: Tmperature Sensor\n\niii. Disable 'Only Display Common Subtypes'\n\niv. Object Subtype: any\n\nv. Indicator Type: Temperature\n\nvi. Click Add Indicator\n")),(0,a.kt)("p",{parentName:"li"},"c. Indicator Selection"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Plugin: SNMP\n\nii. Object Type: Temperature Monitor (F5 BIG-IP v9)\n\niii. Disable 'Only Display Common Subtypes'\n\niv. Object Subtype: any\n\nv. Indicator Type: Temperature\n\nvi. Click Add Indicator\n")),(0,a.kt)("p",{parentName:"li"},"d. Indicator Selection"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Plugin: SNMP\n\nii. Object Type: Temperature Monitor (Cisco IOS)\n\niii. Disable 'Only Display Common Subtypes'\n\niv. Object Subtype: any\n\nv. Indicator Type: Temperature\n\nvi. Click Add Indicator\n")),(0,a.kt)("p",{parentName:"li"},"e. Click Save"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(82947).Z,width:"1000",height:"497"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log into Data Insight")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Create Report"),(0,a.kt)("p",{parentName:"li"},'a. Change Report name to "QoS and Temperature"'),(0,a.kt)("p",{parentName:"li"},'b. Change Section name to "QoS"'),(0,a.kt)("p",{parentName:"li"},"c. Click Add Widget"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Click on TopN\n\n    1. Resource Type: Device group -> All device Groups\n\n    2. TopN view: Qos - Bytes Dropped\n\nii. Click Run\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(84191).Z,width:"351",height:"603"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"d. Click Add Widget\n\n    i. Click on TopN\n\n        1. Resource Type: Device group -> All device Groups\n\n        2. TopN view: Qos - Bytes Dropped\n\n    ii. Click Run\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(60755).Z,width:"1732",height:"837"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"e. On the first widget created\n\n    i. Click on the name (TopN) and change it to 'Bytes Dropped'\n\n    ii. Click on the pencil icon, go to Charts and disable 'Show title'\n\n    iii. Click on the + symbol on the top right corner of the widget and select Performance Metrics\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(6184).Z,width:"881",height:"468"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    iv. move the new widget alongside the first widget\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(24284).Z,width:"1741",height:"816"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"e. On the second TopN widget created\n\n    i. Click on the name (TopN) and change it to 'Bytes Sent'\n\n    ii. Click on the pencil icon, go to Charts and disable 'Show title'\n\n    iii. Click on the + symbol on the top right corner of the widget and select Performance Metrics\n\n    iv. move the new widget alongside the first widget\n \n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(26981).Z,width:"1732",height:"810"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'f. Create a new section by clicking on the + icon next to section "QoS"\n\n    i. Change the name of the section to Temperature\n\ng. Click Add widget\n\n    i. Click on TopN\n\n        1. Resource Type: Device group -> All device Groups\n\n        2. TopN view: Temperature\n\n        3. Result limit: 20\n\n    ii. Click Run\n\nh. Expand the widget to show all the 20 results\n\ni. Click on the + symbol on the top right corner of the widget and select Performance Metrics\n\nj. Move the new widget alongside the first widget\n\nk. Expand the new widget to match the length of the first widget\n')),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Click Save (top right corner of the report)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(35466).Z,width:"1736",height:"756"})))}m.isMDXComponent=!0},5895:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Img1-ee52bac9438f83e261cf563dec6c4b1a.png"},82947:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Img2-f97ed6eb45d664b0abb1c5e9dcdbc6c8.png"},13699:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Img3-4cd64497b4331922c38917ea32c01ab2.png"},84191:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Img4-48d1f751ec64ad4acebf708289243348.png"},60755:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Img5-a87b1ce9d60459b5b65351ca0f836d36.png"},6184:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Img6-08e660b4a80a3e869cadf466489362c0.png"},24284:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Img7-5bef2dab514068f0caff53a3cdf5dd84.png"},26981:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Img8-f27f44158859af2f4f6c266493d3c67a.png"},35466:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Img9-a5ac0a1ec1e7d29e63db6be58c7928f4.png"}}]);