"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[847],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,u=d["".concat(p,".").concat(k)]||d[k]||c[k]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:14},l="Uncover New Data Feeds",o={unversionedId:"IBM SevOne Automated Network Observability/data feed",id:"IBM SevOne Automated Network Observability/data feed",title:"Uncover New Data Feeds",description:"Overview",source:"@site/docs/IBM SevOne Automated Network Observability/data feed.md",sourceDirName:"IBM SevOne Automated Network Observability",slug:"/IBM SevOne Automated Network Observability/data feed",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/data feed",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Automate Automations",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/automate"},next:{title:"Predictive Alerting",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/predictive"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Collect number of alerts triggered",id:"collect-number-of-alerts-triggered",level:2},{value:"Create Scheduled Job",id:"create-scheduled-job",level:2}],m={toc:s},d="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uncover-new-data-feeds"},"Uncover New Data Feeds"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this lab we will review how we can collect new sources of data"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log into SevOne")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Go to Administration -> Monitoring Configuration -> Object Types")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Change the Filter to Deferred Data")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Add"),(0,r.kt)("p",{parentName:"li"},"a. Name: Alerts"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Select the new object type created ("Alerts") and click on "Add Atomic Indicator Type"'),(0,r.kt)("p",{parentName:"li"},"a. Indicator Name: Alerts"),(0,r.kt)("p",{parentName:"li"},"b. Description: Alerts"),(0,r.kt)("p",{parentName:"li"},"c. Indicator Type: GAUGE"),(0,r.kt)("p",{parentName:"li"},"d. Measure As: Number"),(0,r.kt)("p",{parentName:"li"},"e. Display As: Number"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(3711).Z,width:"1914",height:"683"})),(0,r.kt)("h2",{id:"collect-number-of-alerts-triggered"},"Collect number of alerts triggered"),(0,r.kt)("p",null,"If SevOne authentication has already been created, please skip this block of actions and continue to step 9."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Log into SANO automation platform")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Go to Authentications")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click  Create Authentication"),(0,r.kt)("p",{parentName:"li"},"a. Name: SevOne"),(0,r.kt)("p",{parentName:"li"},"b. Service: SevOne"),(0,r.kt)("p",{parentName:"li"},"c. ",(0,r.kt)("strong",{parentName:"p"},"Protocol: http://")," (<-- important)"),(0,r.kt)("p",{parentName:"li"},"d. Host: 10.0.0.10"),(0,r.kt)("p",{parentName:"li"},"e. Username: admin"),(0,r.kt)("p",{parentName:"li"},"f. Password: SevOne"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(359).Z,width:"579",height:"758"})),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Workflows"))),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Create Workflow"),(0,r.kt)("p",{parentName:"li"},"a. Name: Your Name - Collect SevOne Alerts"),(0,r.kt)("p",{parentName:"li"},"b. Layout type: Sequence"))),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add variables to Start"),(0,r.kt)("p",{parentName:"li"},"a. NMSCredentials"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'i. Name: NMSCredentials\n\nii. Type: Authentication -> SevOne\n\niii. Default Value: "admin/SevOne"\n\niv. In\n\nv. Required\n')),(0,r.kt)("p",{parentName:"li"},"b. DeviceName"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'i. Name: DeviceName\n\nii. Type: String\n\niii. Default Value: "NMS"\n\niv. In\n\nv. Required\n')),(0,r.kt)("p",{parentName:"li"},"c. ObjectType"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'i. Name: ObjectType\n\nii. Type: String\n\niii. Default Value: "Alerts"\n\niv. In\n\nv. Required\n')),(0,r.kt)("p",{parentName:"li"},"d. ObjectName"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'i. Name: ObjectName\n\nii. Type: String\n\niii. Default Value: "Alerts"\n\niv. In\n\nv. Required\n')),(0,r.kt)("p",{parentName:"li"},"e. IndicatorName"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'i. Name: IndicatorName\n\nii. Type: String\n\niii. Default Value: "Alerts"\n\niv. In\n\nv. Required\n')),(0,r.kt)("p",{parentName:"li"},"f. IndicatorFormat"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'i. Name: IndicatorFormat\n\nii. Type: String\n\niii. Default Value: "GAUGE"\n\niv. In\n\nv. Required\n')),(0,r.kt)("p",{parentName:"li"},"g. IndicatorUnit"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'i. Name: IndicatorUnit\n\nii. Type: String\n\niii. Default Value: "Number"\n\niv. In\n\nv. Required\n')))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(1027).Z,width:"971",height:"652"})),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"Change to Flow View")),(0,r.kt)("ol",{start:13},(0,r.kt)("li",{parentName:"ol"},"On the left hand side panel, search for SevOne, Click on SevOne -> REST v3 -> Alerts ")),(0,r.kt)("ol",{start:14},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Select "Alerts Alerts" and drop it after the tile START'),(0,r.kt)("p",{parentName:"li"},"a. Change name to SevOne_Alerts"),(0,r.kt)("p",{parentName:"li"},"b. Click on the tile to open the right side panel and complete the following fields"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. authKey: $NMSCredentials\n\nii. body -> query -> alertStatus: OPEN\n")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(9570).Z,width:"460",height:"728"})),(0,r.kt)("ol",{start:15},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a new tile, Common -> Array -> ArraySize"),(0,r.kt)("p",{parentName:"li"},"a. Change name to Number_Alerts"),(0,r.kt)("p",{parentName:"li"},"b. Click on the tile to open the right side panel and complete the following fields"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. array: $SevOne_Alerts.result.alerts\n")))),(0,r.kt)("ol",{start:16},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a new tile, Common -> DateTime -> TimestampNow"),(0,r.kt)("p",{parentName:"li"},"a. No need to edit anything"))),(0,r.kt)("ol",{start:17},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a new tile, SevOne -> REST v3 -> Devices -> Devices Data"),(0,r.kt)("p",{parentName:"li"},"a. Change name to SevOne_Ingest_Data"),(0,r.kt)("p",{parentName:"li"},"b. Click on the tile to open the right side panel and complete the following fields"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'i. authKey: $NMSCredentials\n\nii. body    \n\n    1. automaticCreation: TRUE\n\n    2. name: $DeviceName\n\n    3. objects -> Append Child\n\n        a. 0 \n\n            i. automaticCreation: TRUE\n\n            ii. description: $ObjectName\n\n            iii. name: $ObjectName\n\n            iv. pluginName: "DEFERRED"\n\n            v. timestamps -> Append Child\n\n                1. 0\n\n                    a. indicators -> Append Child\n\n                        i. 0\n\n                            1. format: $IndicatorFormat\n\n                            2. name: $IndicatorName\n\n                            3. units: $IndicatorUnit\n\n                            4. value: $Number_Alerts.result\n\n                    b. timestamp: $TimestampNow_1.result\n\n            vi. type: $ObjectType\n\n    4. type: $DeviceName\n')))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(5311).Z,width:"455",height:"500"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(682).Z,width:"454",height:"702"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(8712).Z,width:"450",height:"706"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(5094).Z,width:"449",height:"707"})),(0,r.kt)("ol",{start:18},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If there is an 'Assign' tile, use it for the next step, otherwise go to Common -> Assign, and add the tile to the end of the workflow"),(0,r.kt)("p",{parentName:"li"},"a. Click on the tile to open the right side panel and complete the following fields"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. variable: $result\n\nii. value: $SevOne_Ingest_Data.result\n")))),(0,r.kt)("h2",{id:"create-scheduled-job"},"Create Scheduled Job"),(0,r.kt)("ol",{start:19},(0,r.kt)("li",{parentName:"ol"},"Go to JOBS")),(0,r.kt)("ol",{start:20},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Create Job"),(0,r.kt)("p",{parentName:"li"},"a. Name: Collect SevOne Alerts"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. Flow: Your Name -  Collect SevOne Alerts\n\nii. Seconds: 0\n\niii. Minutes: */5\n\niv. Hours: *\n\nv. Day of Month: ?\n\nvi. Use Default Parameters: ENABLED\n\nvii. ENABLED\n")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(9222).Z,width:"1880",height:"855"})))}c.isMDXComponent=!0},359:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img1-ee5e510d0e0ff3ba9618fef58df14677.png"},1027:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img2-02cf17dfe0ee526079c2d6b4a9e92eee.png"},9570:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img3-0c798cda3b9478a892d56bd86d026207.png"},5311:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img4-83ab2f5d998fcb8fd681b76cd34fac2a.png"},682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img5-db8a0053f6a8a900c5f2ca670c827918.png"},8712:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img6-0f1ab3d759169ccc1dbf0c491cf9674f.png"},5094:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img7-dc1513aaf752f2a13243524bce7412d8.png"},9222:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img8-8e66d626e14f08588fd034a3a3b9507f.png"},3711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ImgA-4464647d0b0746b6cc17d47b2dbdf656.png"}}]);