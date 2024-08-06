"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[3617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),k=r,b=m["".concat(p,".").concat(k)]||m[k]||d[k]||n;return a?i.createElement(b,l(l({ref:t},s),{},{components:a})):i.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}k.displayName="MDXCreateElement"},17781:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=a(87462),r=(a(67294),a(3905));const n={sidebar_position:3},l="Object Subtype",o={unversionedId:"IBM SevOne Automated Network Observability/Advanced SevOne Labs/objectsubtype",id:"IBM SevOne Automated Network Observability/Advanced SevOne Labs/objectsubtype",title:"Object Subtype",description:"In this lab we will learn how we can leverage object subtypes for better grouping and alerting.",source:"@site/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/objectsubtype.md",sourceDirName:"IBM SevOne Automated Network Observability/Advanced SevOne Labs",slug:"/IBM SevOne Automated Network Observability/Advanced SevOne Labs/objectsubtype",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/objectsubtype",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Object Rules",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/objectrules"},next:{title:"High Frequency Polling",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/Advanced SevOne Labs/hfpoller"}},p={},c=[{value:"Frame Relay Circuit Type",id:"frame-relay-circuit-type",level:2},{value:"F5 Load Balancer Status",id:"f5-load-balancer-status",level:2},{value:"Close the loop",id:"close-the-loop",level:2}],s={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"object-subtype"},"Object Subtype"),(0,r.kt)("p",null,"In this lab we will learn how we can leverage object subtypes for better grouping and alerting."),(0,r.kt)("p",null,"This lab has two sections: the first one where we use object subtypes to categorize better the objects monitored, and a second one where we can use this feature to get more information from the objects to reduce the number of object monitored."),(0,r.kt)("h2",{id:"frame-relay-circuit-type"},"Frame Relay Circuit Type"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into the NMS")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to administration -> Monitoring Configuration -> Object Types")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for Frame Relay (Cisco IOS)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Frame Relay (Cisco IOS) click the wrench icon to edit"),(0,r.kt)("p",{parentName:"li"},"a. On Subtype, add 1.3.6.1.2.1.10.32.2.1.16"),(0,r.kt)("p",{parentName:"li"},"b. Click Save"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(82978).Z,width:"716",height:"808"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to administration -> Monitoring Configuration -> Object Subtype manager")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Object Type, find Frame Relay (Cisco IOS)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Add Subtype"),(0,r.kt)("p",{parentName:"li"},"a. Name: Static"),(0,r.kt)("p",{parentName:"li"},"b. Description: Static"),(0,r.kt)("p",{parentName:"li"},"c. Under Rules, click Add"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. Identifier: 1\n\nii. Click Update\n")),(0,r.kt)("p",{parentName:"li"},"d. Click Save")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Add Subtype"),(0,r.kt)("p",{parentName:"li"},"a. Name: Dynamic"),(0,r.kt)("p",{parentName:"li"},"b. Description: Dynamic"),(0,r.kt)("p",{parentName:"li"},"c. Under Rules, click Add"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. Identifier: 2\n\nii. Click Update\n")),(0,r.kt)("p",{parentName:"li"},"d. Click Save"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(479).Z,width:"670",height:"262"})),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Device -> Device Manager")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select CHI-EDGE01, click the gear icon -> Discovery -> Discover")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the wrench icon on that device to edit the device and click on Object Manager"),(0,r.kt)("p",{parentName:"li"},"a. Search for Frame Relay"))),(0,r.kt)("p",null,"This is how it looks before the discovery is finished"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(74845).Z,width:"1430",height:"286"})),(0,r.kt)("p",null,"This is how it looks after the discovery is finished"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(54173).Z,width:"1440",height:"270"})),(0,r.kt)("h2",{id:"f5-load-balancer-status"},"F5 Load Balancer Status"),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to administration -> Monitoring Configuration -> Object Types")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for Virtual Server (F5 BIG-IP v9)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Virtual Server (F5 BIG-IP v9) click the wrench icon to edit"),(0,r.kt)("p",{parentName:"li"},"a. On Subtype, add .1.3.6.1.4.1.3375.2.2.10.1.2.1.9"),(0,r.kt)("p",{parentName:"li"},"b. Click Save"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(94861).Z,width:"712",height:"811"})),(0,r.kt)("ol",{start:15},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to administration -> Monitoring Configuration -> Object Subtype manager")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Object Type, find Virtual Server (F5 BIG-IP v9)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Add Subtype"),(0,r.kt)("p",{parentName:"li"},"a. Name: Enabled"),(0,r.kt)("p",{parentName:"li"},"b. Description: Enabled"),(0,r.kt)("p",{parentName:"li"},"c. Under Rules, click Add"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. Identifier: 1\n\nii. Click Update\n")),(0,r.kt)("p",{parentName:"li"},"d. Click Save")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Add Subtype"),(0,r.kt)("p",{parentName:"li"},"a. Name: Disabled"),(0,r.kt)("p",{parentName:"li"},"b. Description: Disabled"),(0,r.kt)("p",{parentName:"li"},"c. Under Rules, click Add"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. Identifier: 0\n\nii. Click Update\n")),(0,r.kt)("p",{parentName:"li"},"d. Click Save"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(80497).Z,width:"647",height:"250"})),(0,r.kt)("ol",{start:19},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Device -> Device Manager")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select LON-LB01, click the gear icon -> Discovery -> Discover")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Device -> Object Manager"),(0,r.kt)("p",{parentName:"li"},"a. Click Clear Filter"),(0,r.kt)("p",{parentName:"li"},"b. Click Set Filter"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. Object Type: Virtual Server (F5 BIG-IP v9) (remember to unselect All Object Types)\n\nii. Click Apply\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait until the discovery is finished (max 5 minutes), once it is finished you should see something like this"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(51107).Z,width:"1552",height:"628"})),(0,r.kt)("h2",{id:"close-the-loop"},"Close the loop"),(0,r.kt)("ol",{start:23},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now that we have this info, let's create an object rule to stop monitoring those virtual servers that are disabled.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Administration -> Monitoring Configuration -> Object Rules")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Add Rule"),(0,r.kt)("p",{parentName:"li"},"a. Device Group or Type: All Device Groups"),(0,r.kt)("p",{parentName:"li"},"b. Plugin: SNMP Poller"),(0,r.kt)("p",{parentName:"li"},"c. Object Type: Virtual Server (F5 BIG-IP v9)"),(0,r.kt)("p",{parentName:"li"},"d. Subtype: Disabled"),(0,r.kt)("p",{parentName:"li"},"e. ",(0,r.kt)("strong",{parentName:"p"},"Match")," the object name with this expression: .*"),(0,r.kt)("p",{parentName:"li"},"f. Enabled: ticked"),(0,r.kt)("p",{parentName:"li"},"g. Status: Exclude"),(0,r.kt)("p",{parentName:"li"},"h. Click Save"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(97415).Z,width:"500",height:"580"})),(0,r.kt)("ol",{start:26},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Device -> Device Manager")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select LON-LB01, click the gear icon -> Discovery -> Discover")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Device -> Object Manager"),(0,r.kt)("p",{parentName:"li"},"a. Click Clear Filter"),(0,r.kt)("p",{parentName:"li"},"b. Click Set Filter"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. Object Type: Virtual Server (F5 BIG-IP v9) (remember to unselect All Object Types)\n\nii. Click Apply\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait until the discovery is finished (max 5 minutes), once it is finished, all virtual servers that are detected as Subtype: Disabled will not be monitored any more."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(66409).Z,width:"1303",height:"537"})),(0,r.kt)("ol",{start:30},(0,r.kt)("li",{parentName:"ol"},"Discover device NYC-LB01, and now also the virtual servers that are disabled from that load balancer will be removed from monitoring.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(52847).Z,width:"1307",height:"428"})))}d.isMDXComponent=!0},82978:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Img1-4802890b5201431121514ce913fb7ccc.png"},52847:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Img10-bf4c54d90fda13a3aa0e3eb574e969fa.png"},479:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Img2-e3fa17de4b4ad1bc980790a3c26d2fc5.png"},74845:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Img3-94f1df01fc52a82fac6ca09ea6a84b9b.png"},54173:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Img4-5d6a7cafae1c0ab520df2ee90639801d.png"},94861:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Img5-4ffbef3ca0b1cabf692188dc6bdb8477.png"},80497:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Img6-9f925e468eda997b1df029a10542c22d.png"},51107:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Img7-f39fbf0dd832cee2848dff5e528e09aa.png"},97415:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Img8-464fa9c371239ca8e4492e4e08fd0d3b.png"},66409:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Img9-3fcf96e724fed825f1fd2952d87e7e97.png"}}]);