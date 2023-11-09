"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[714],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),k=i,u=c["".concat(p,".").concat(k)]||c[k]||d[k]||r;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:5},o="Uncover New Data Feeds",l={unversionedId:"IBM SevOne Automated Network Observability/RNA Labs/data feed",id:"IBM SevOne Automated Network Observability/RNA Labs/data feed",title:"Uncover New Data Feeds",description:"Overview",source:"@site/docs/IBM SevOne Automated Network Observability/RNA Labs/data feed.md",sourceDirName:"IBM SevOne Automated Network Observability/RNA Labs",slug:"/IBM SevOne Automated Network Observability/RNA Labs/data feed",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/data feed",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Democratize Network Automation",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/democratize"},next:{title:"CLI Monitoring",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/lab cli"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Collect number of alerts triggered",id:"collect-number-of-alerts-triggered",level:2},{value:"Create Scheduled Job",id:"create-scheduled-job",level:2},{value:"Review",id:"review",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uncover-new-data-feeds"},"Uncover New Data Feeds"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this lab we will review how we can collect new sources of data."),(0,i.kt)("p",null,"SevOne is capable or monitoring any kind of time series data, however only a few protocols are supported out of the box (SNMP, ICMP, Netflow....). However, there is a framework called Universal Collector that allows us to monitor any time of data, regardless of the source/protocol."),(0,i.kt)("p",null,"In this lab we are collecting data that is available only using REST API calls. In this case, we are collecting data from the SevOne API, but it could be done with any other API available (as in this lab we only have access to SevOne, it makes sense to use the SevOne API as source of data). "),(0,i.kt)("p",null,"The data we are collecting is the number of active alerts triggered in SevOne, and we are ingesting this data back into SevOne to monitor this metric. This is an important metric to monitor, because if we have an abnormal high level of alerts triggered, that would mean that something big might be happening on the network."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log into SevOne")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Go to Administration -> Monitoring Configuration -> Object Types")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Change the Filter to Deferred Data")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click Add"),(0,i.kt)("p",{parentName:"li"},"a. Name: Alerts"))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select the new object type created ("Alerts") and click on "Add Atomic Indicator Type"'),(0,i.kt)("p",{parentName:"li"},"a. Indicator Name: Alerts"),(0,i.kt)("p",{parentName:"li"},"b. Description: Alerts"),(0,i.kt)("p",{parentName:"li"},"c. Indicator Type: GAUGE"),(0,i.kt)("p",{parentName:"li"},"d. Measure As: Number"),(0,i.kt)("p",{parentName:"li"},"e. Display As: Number"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(2672).Z,width:"1914",height:"683"})),(0,i.kt)("h2",{id:"collect-number-of-alerts-triggered"},"Collect number of alerts triggered"),(0,i.kt)("p",null,"If SevOne authentication has already been created, please skip this block of actions and continue to step 9."),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Log into SANO automation platform")),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Go to Authentications")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click  Create Authentication"),(0,i.kt)("p",{parentName:"li"},"a. Name: SevOne"),(0,i.kt)("p",{parentName:"li"},"b. Service: SevOne"),(0,i.kt)("p",{parentName:"li"},"c. ",(0,i.kt)("strong",{parentName:"p"},"Protocol: http://")," (<-- important)"),(0,i.kt)("p",{parentName:"li"},"d. Host: 10.0.0.10"),(0,i.kt)("p",{parentName:"li"},"e. Username: admin"),(0,i.kt)("p",{parentName:"li"},"f. Password: SevOne"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(3351).Z,width:"579",height:"758"})),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Workflows"))),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click Create Workflow"),(0,i.kt)("p",{parentName:"li"},"a. Name: Your Name - Collect SevOne Alerts"),(0,i.kt)("p",{parentName:"li"},"b. Layout type: Sequence"))),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add variables to Start"),(0,i.kt)("p",{parentName:"li"},"a. NMSCredentials"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: NMSCredentials\n\nii. Type: Authentication -> SevOne\n\niii. Default Value: "admin/SevOne"\n\niv. In\n\nv. Required\n')),(0,i.kt)("p",{parentName:"li"},"b. DeviceName"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: DeviceName\n\nii. Type: String\n\niii. Default Value: "NMS"\n\niv. In\n\nv. Required\n')),(0,i.kt)("p",{parentName:"li"},"c. ObjectType"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: ObjectType\n\nii. Type: String\n\niii. Default Value: "Alerts"\n\niv. In\n\nv. Required\n')),(0,i.kt)("p",{parentName:"li"},"d. ObjectName"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: ObjectName\n\nii. Type: String\n\niii. Default Value: "Alerts"\n\niv. In\n\nv. Required\n')),(0,i.kt)("p",{parentName:"li"},"e. IndicatorName"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: IndicatorName\n\nii. Type: String\n\niii. Default Value: "Alerts"\n\niv. In\n\nv. Required\n')),(0,i.kt)("p",{parentName:"li"},"f. IndicatorFormat"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: IndicatorFormat\n\nii. Type: String\n\niii. Default Value: "GAUGE"\n\niv. In\n\nv. Required\n')),(0,i.kt)("p",{parentName:"li"},"g. IndicatorUnit"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: IndicatorUnit\n\nii. Type: String\n\niii. Default Value: "Number"\n\niv. In\n\nv. Required\n')))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(4596).Z,width:"971",height:"652"})),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},"Change to Flow View")),(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},"On the left hand side panel, search for SevOne, Click on SevOne -> REST v3 -> Alerts ")),(0,i.kt)("ol",{start:14},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select "Alerts Alerts" and drop it after the building block START'),(0,i.kt)("p",{parentName:"li"},"a. Change name to SevOne_Alerts"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. authKey: $NMSCredentials\n\nii. body -> query -> alertStatus: OPEN\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(2184).Z,width:"460",height:"728"})),(0,i.kt)("ol",{start:15},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> Array -> ArraySize"),(0,i.kt)("p",{parentName:"li"},"a. Change name to Number_Alerts"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. array: $SevOne_Alerts.result.alerts\n")))),(0,i.kt)("ol",{start:16},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> DateTime -> TimestampNow"),(0,i.kt)("p",{parentName:"li"},"a. No need to edit anything"))),(0,i.kt)("ol",{start:17},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, SevOne -> REST v3 -> Devices -> Devices Data"),(0,i.kt)("p",{parentName:"li"},"a. Change name to SevOne_Ingest_Data"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. authKey: $NMSCredentials\n\nii. body    \n\n    1. automaticCreation: TRUE\n\n    2. name: $DeviceName\n\n    3. objects -> Append Child\n\n        a. 0 \n\n            i. automaticCreation: TRUE\n\n            ii. description: $ObjectName\n\n            iii. name: $ObjectName\n\n            iv. pluginName: "DEFERRED"\n\n            v. timestamps -> Append Child\n\n                1. 0\n\n                    a. indicators -> Append Child\n\n                        i. 0\n\n                            1. format: $IndicatorFormat\n\n                            2. name: $IndicatorName\n\n                            3. units: $IndicatorUnit\n\n                            4. value: $Number_Alerts.result\n\n                    b. timestamp: $TimestampNow_1.result\n\n            vi. type: $ObjectType\n\n    4. type: $DeviceName\n')))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(2880).Z,width:"455",height:"500"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(4170).Z,width:"454",height:"702"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(8589).Z,width:"450",height:"706"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(1170).Z,width:"449",height:"707"})),(0,i.kt)("ol",{start:18},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If there is an 'Assign' building block, use it for the next step, otherwise go to Common -> Assign, and add the building block to the end of the workflow"),(0,i.kt)("p",{parentName:"li"},"a. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. variable: $result\n\nii. value: $SevOne_Ingest_Data.result\n")))),(0,i.kt)("h2",{id:"create-scheduled-job"},"Create Scheduled Job"),(0,i.kt)("ol",{start:19},(0,i.kt)("li",{parentName:"ol"},"Go to JOBS")),(0,i.kt)("ol",{start:20},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click Create Job"),(0,i.kt)("p",{parentName:"li"},"a. Name: Collect SevOne Alerts"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Flow: Your Name -  Collect SevOne Alerts\n\nii. Seconds: 0\n\niii. Minutes: */5\n\niv. Hours: *\n\nv. Day of Month: ?\n\nvi. Use Default Parameters: ENABLED\n\nvii. ENABLED\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(9550).Z,width:"1880",height:"855"})),(0,i.kt)("h2",{id:"review"},"Review"),(0,i.kt)("ol",{start:21},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to DI -> Create Report")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on + Add Widget"),(0,i.kt)("p",{parentName:"li"},"a. Performance Metrics"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Resource Type: Device Groups\n    \n    1. All Device Groups\n\nii. Resource Type: Object Type\n\n    1. Alerts\n\niii. Resource Type: Indicator Type\n\n    1. Alerts\n")),(0,i.kt)("p",{parentName:"li"},"b. Click 'Add to resources' "),(0,i.kt)("p",{parentName:"li"},"c. Click 'Run'"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(8711).Z,width:"416",height:"805"})))}d.isMDXComponent=!0},3351:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img1-ee5e510d0e0ff3ba9618fef58df14677.png"},4596:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img2-02cf17dfe0ee526079c2d6b4a9e92eee.png"},2184:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img3-0c798cda3b9478a892d56bd86d026207.png"},2880:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img4-83ab2f5d998fcb8fd681b76cd34fac2a.png"},4170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img5-db8a0053f6a8a900c5f2ca670c827918.png"},8589:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img6-0f1ab3d759169ccc1dbf0c491cf9674f.png"},1170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img7-dc1513aaf752f2a13243524bce7412d8.png"},9550:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img8-8e66d626e14f08588fd034a3a3b9507f.png"},8711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img9-db4872107361e0c2db0ecc4f1d71b450.png"},2672:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ImgA-4464647d0b0746b6cc17d47b2dbdf656.png"}}]);