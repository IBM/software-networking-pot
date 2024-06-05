"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[5616],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>b});var A=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,A)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,A,n=function(e,t){if(null==e)return{};var a,A,n={},o=Object.keys(e);for(A=0;A<o.length;A++)a=o[A],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(A=0;A<o.length;A++)a=o[A],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=A.createContext({}),c=function(e){var t=A.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=c(e.components);return A.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},p=A.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,b=d["".concat(l,".").concat(p)]||d[p]||s[p]||o;return a?A.createElement(b,i(i({ref:t},g),{},{components:a})):A.createElement(b,i({ref:t},g))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:n,i[1]=r;for(var c=2;c<o;c++)i[c]=a[c];return A.createElement.apply(null,i)}return A.createElement.apply(null,a)}p.displayName="MDXCreateElement"},65249:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var A=a(87462),n=(a(67294),a(3905));const o={sidebar_position:7},i="API",r={unversionedId:"IBM SevOne Automated Network Observability/Advanced SevOne Labs/api",id:"IBM SevOne Automated Network Observability/Advanced SevOne Labs/api",title:"API",description:"In this lab we will learn how we can use the SevOne API to automate any action in SevOne.",source:"@site/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/api.md",sourceDirName:"IBM SevOne Automated Network Observability/Advanced SevOne Labs",slug:"/IBM SevOne Automated Network Observability/Advanced SevOne Labs/api",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/api",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Application Centric Report",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/appcentric"},next:{title:"RNA Labs",permalink:"/software-networking-pot/docs/category/rna-labs"}},l={},c=[],g={toc:c},d="wrapper";function s(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,A.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api"},"API"),(0,n.kt)("p",null,"In this lab we will learn how we can use the SevOne API to automate any action in SevOne."),(0,n.kt)("h1",{id:"high-frequency-poller"},"High Frequency Poller"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into your NMS")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Administration -> API Docs -> Version 3")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Users -> /api/v3/users/signin")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the following in the body field"),(0,n.kt)("p",{parentName:"li"},'{\n"password": "SevOne",'),(0,n.kt)("p",{parentName:"li"},'"username": "admin"\n}')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Try it out!"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(70382).Z,width:"488",height:"454"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy token and paste it in the \u2018Bearer Token\u2019 field\n",(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(3774).Z,width:"604",height:"40"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Metadata -> POST /api/v3/metadata/devices")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the following in the body field"),(0,n.kt)("p",{parentName:"li"},'{\n"deviceNames": [\n{\n"fuzzy": true,'),(0,n.kt)("p",{parentName:"li"},'"type": "FUZZABLE_STRING_TYPE_REGEX",'),(0,n.kt)("p",{parentName:"li"},'"value": "SIN-WLC01"\n}\n]\n}'))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(87144).Z,width:"348",height:"456"})),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"Try it Out!"),(0,n.kt)("li",{parentName:"ol"},"Save the ID field for a later stage")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(24134).Z,width:"604",height:"384"})),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Metadata -> POST /api/v3/metadata/objects")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the following in the body field"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n"deviceObjects": [\n{\n"device": "35",\n"objectDisplayName": {\n"fuzzy": true,\n"type": "FUZZABLE_STRING_TYPE_FUZZY",\n"value": "0/0/1"\n}\n}\n]\n}\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(16879).Z,width:"322",height:"512"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Try it out!")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save the ID field for a later stage"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(91601).Z,width:"604",height:"332"})),(0,n.kt)("ol",{start:15},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Polling -> POST /api/v3/polling/HFPobjects")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the following in the body field"),(0,n.kt)("p",{parentName:"li"},'{\n"deviceId": "35",\n"frequency": 10,\n"objectId": "9425",\n"pluginString": "SNMP"\n}'))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(4554).Z,width:"486",height:"262"})),(0,n.kt)("ol",{start:17},(0,n.kt)("li",{parentName:"ol"},"Try it out!")),(0,n.kt)("p",null,"Review\nTo make sure this worked, let\u2019s go back to the NMS, find the device SIN-WLC01 in device manager, go to Object Manager and find the object TenGigabitEthernet0/0/1, click on it to see all the metrics available in that object, and then click on the HC Statistics widget to open a new window with those metrics. As we want to see the difference between 5 minute polling and 10 seconds polling, let\u2019s change the timespan to Last 2 hours "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(14966).Z,width:"604",height:"168"})),(0,n.kt)("p",null,"This graph shows how HFP has worked using the API, meaning that we don\u2019t need to configure HFP manually, we can really on third party tools to communicate with SevOne to configure this feature. Also, if we go back to Device manager, search for SIN-WLC01 device, click on the \u2018spanner icon\u2019 and then go to the High Frequency Poller section, we can also verify that this configuration was configured correctly"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(21983).Z,width:"604",height:"140"}),"\n",(0,n.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(71388).Z,width:"604",height:"40"})))}s.isMDXComponent=!0},70382:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/lab10-1-ff4d3a93a39ea78439b2719f3c0bd4a5.png"},71388:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/lab10-10-37617a7666e0c7847a54f5f3fa480e08.png"},3774:(e,t,a)=>{a.d(t,{Z:()=>A});const A="data:image/png;base64,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"},87144:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/lab10-3-ebf446d37f1eec9c7fad172ffe681ab4.png"},24134:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/lab10-4-11db77e7dba2a53eb32db50c3c7ce38f.png"},16879:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/lab10-5-5a54a2d738ada2ffc5373387af0afa3a.png"},91601:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/lab10-6-8306b56b31e6de0583f258ad1541fbfb.png"},4554:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/lab10-7-92dc2663dae1ed20bf5e6a120544f18d.png"},14966:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/lab10-8-79f3d8107db423351e1aa5b15e447ae4.png"},21983:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/lab10-9-198d74bde5d8d7ce5ee06fba5fe646fa.png"}}]);