"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[7371],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(i),m=a,g=k["".concat(p,".").concat(m)]||k[m]||d[m]||r;return i?n.createElement(g,o(o({ref:t},c),{},{components:i})):n.createElement(g,o({ref:t},c))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[k]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},4377:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));const r={sidebar_position:8},o="Report Linking",l={unversionedId:"IBM SevOne Automated Network Observability/dilinking",id:"IBM SevOne Automated Network Observability/dilinking",title:"Report Linking",description:"Overview",source:"@site/docs/IBM SevOne Automated Network Observability/dilinking.md",sourceDirName:"IBM SevOne Automated Network Observability",slug:"/IBM SevOne Automated Network Observability/dilinking",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/dilinking",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/alert"},next:{title:"Maps",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/maps"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Prepare the system",id:"prepare-the-system",level:2},{value:"Global Report Linking",id:"global-report-linking",level:2},{value:"Review",id:"review",level:2},{value:"Local Report Linking",id:"local-report-linking",level:2},{value:"Review",id:"review-1",level:2},{value:"Local Value Link",id:"local-value-link",level:2},{value:"Review",id:"review-2",level:2}],c={toc:s},k="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"report-linking"},"Report Linking"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In this lab we will learn how we can define the drill-down options available when you click on an element (device, object, indicator, value) on a Data Insight report, allowing you to define the troubleshooting steps or workflows that will help you to go from a high level report to a more detailed/granular report."),(0,a.kt)("p",null,"A high level report will show aggregated data from lots of different devices and metrics, and these high level reports will help you stop issues easily. However once you have spotted an issue on the high level report, you will need to drill-down to the specific problem to have a closer look at the problem. With Report Linking we have control on which options we want to allow users to see and use to help them during the troubleshooting process."),(0,a.kt)("p",null,"In this lab we will review the two report linking options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Global: available on every single report and widget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Local: only available on the coonfiguredd widget"))),(0,a.kt)("h2",{id:"prepare-the-system"},"Prepare the system"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in DI")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Create Report'")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change new of the report from 'Untitled Report' to 'Test Report'")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the right hand side, click on Performance Metrics to add a new widget into the report"),(0,a.kt)("p",{parentName:"li"},"a. On the data column of the widget settings:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Datasource: NMS\n\nii. Resource Type: Device group\n\n    1. All device groups\n\niii. Resource Type: Object Type\n\n    1. Connections (Cisco ASA)\n\niv. Resource Type: Indicator Type\n\n    1. Current Connections\n")),(0,a.kt)("p",{parentName:"li"},"b. Click on Add to resources"),(0,a.kt)("p",{parentName:"li"},"c. Click Run"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(4217).Z,width:"1735",height:"850"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the Charts column in Widget Settings"),(0,a.kt)("p",{parentName:"li"},"a. Select the table visualization (3rd from the right side)"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(6572).Z,width:"342",height:"532"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Click Save")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(1892).Z,width:"905",height:"521"})),(0,a.kt)("p",null,"So the current status of the report allows you to see the high level status of the VPN connections, however we have to no option to drill down into any more granular/detailed metric."),(0,a.kt)("h2",{id:"global-report-linking"},"Global Report Linking"),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Configure -> Report Linking"),(0,a.kt)("p",{parentName:"li"},"a. Edit 'Global Report Link 0' "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Change the name to 'Device Links'\n\nii. Links to report:\n\n    1. Device Summary\n\niii. Field:\n\n    1. Device name\n")))),(0,a.kt)("p",null,"NOTE: leaving the Value field empty means that all 'Device names' will be considered for this link"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"b. Edit 'Global Report Link 1' \n\n    i. Change the name to 'Object Links'\n\n    ii. Links to report:\n\n        1. Object Summary\n\n    iii. Field:\n\n        1. Object name\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(2206).Z,width:"1736",height:"529"})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Add Link'"),(0,a.kt)("p",{parentName:"li"},"a. Change the name to 'Indicator Links'"),(0,a.kt)("p",{parentName:"li"},"b. Choose 'Indicator'"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(821).Z,width:"1739",height:"202"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"c. Links to report:\n    \n    1. Indicator Summary\n\n    2. Instant Graphs Workspace\n\n    3. Data Analytics Workspace\n\nd. Field:\n\n    1. Indicator type name\n\ne. Click Save\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(586).Z,width:"1737",height:"694"})),(0,a.kt)("h2",{id:"review"},"Review"),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go back to Reports -> Test Report")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on 'Device Name', 'Object Name' and 'Indicator Name' to test all the links configured"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(7401).Z,width:"881",height:"442"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(2349).Z,width:"1730",height:"938"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(8514).Z,width:"869",height:"440"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(6831).Z,width:"1725",height:"878"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(2269).Z,width:"883",height:"463"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(7225).Z,width:"1733",height:"842"})),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go back to Configure -> Report Linking")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a new link"),(0,a.kt)("p",{parentName:"li"},"a. Change the name to 'Cisco ASA'"),(0,a.kt)("p",{parentName:"li"},"  b. Choose 'Device'"),(0,a.kt)("p",{parentName:"li"},"  c. Links to report:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  i. Cisco ASA Device Summary\n")),(0,a.kt)("p",{parentName:"li"},"  d. Field:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  i. Device Type\n")),(0,a.kt)("p",{parentName:"li"},"  e. Datasource"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  i. NMS\n")),(0,a.kt)("p",{parentName:"li"},"  f. Resource Type"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  i. Device type\n\n      1. Cisco ASA (you will find it inside All Device Types -> Generic)\n")),(0,a.kt)("p",{parentName:"li"},"  e. Click Save"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(9247).Z,width:"1725",height:"526"})),(0,a.kt)("ol",{start:13},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go back to Reports -> Test Report")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on any device under 'Device Name' to see two links, first 'Device Summary' more generic, and second Cisco ASA Summary that is more specific to this type of device. This link will only appear if the device is a Cisco ASA as defined on step 12."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(718).Z,width:"891",height:"442"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(1577).Z,width:"1732",height:"902"})),(0,a.kt)("h2",{id:"local-report-linking"},"Local Report Linking"),(0,a.kt)("ol",{start:15},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go back to Reports -> Test Report")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the top right pencil icon to edit the report")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the pencil icon in the top right corner of the widget to edit the widget"),(0,a.kt)("p",{parentName:"li"},"a. Go to the Linking column of the widget settings"),(0,a.kt)("p",{parentName:"li"},"b. On Report Link 1:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"i. Clicking on: \n\n    1. Device Name\n\nii. Links to report:\n\n    1. Network Topology\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click Save"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(3706).Z,width:"1734",height:"482"})),(0,a.kt)("h2",{id:"review-1"},"Review"),(0,a.kt)("ol",{start:19},(0,a.kt)("li",{parentName:"ol"},"Click on any device under the 'Device Name' column, now there are three options. The Network Topology link will only appear on this widget, and will not appear on any other widget that we create, unless we configure it in that widget settings.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(3673).Z,width:"878",height:"457"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(4299).Z,width:"1727",height:"824"})),(0,a.kt)("h2",{id:"local-value-link"},"Local Value Link"),(0,a.kt)("ol",{start:20},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go back to Reports -> Test Report")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the top right pencil icon to edit the report")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Duplicate the widget by clicking on the second 'Duplicate' icon on the top right corner of the widget"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(8168).Z,width:"874",height:"449"})),(0,a.kt)("ol",{start:23},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the new widget"),(0,a.kt)("p",{parentName:"li"},"a. Go to the Charts column and select the first visualization (linegraph)"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(2956).Z,width:"1732",height:"874"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ab Go to the Linking column of the widget settings\n\nb. On Report Link 2:\n\n    i. Clicking on: \n\n        1. Value\n\n    ii. Links to report:\n\n        1. Data Analytics Workspace\n")),(0,a.kt)("ol",{start:24},(0,a.kt)("li",{parentName:"ol"},"Click Save")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(2390).Z,width:"1734",height:"822"})),(0,a.kt)("h2",{id:"review-2"},"Review"),(0,a.kt)("ol",{start:25},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go back to Reports -> Test Report")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the second widget, click over any data point in the chart, that should give you the open to drill down to the report link configured"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(1346).Z,width:"991",height:"809"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:i(5846).Z,width:"1736",height:"830"})))}d.isMDXComponent=!0},4217:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img1-b8ba7d777ae57a260866f2a13ddb7b92.png"},6831:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img10-1b8508fe7c7eb542faaa27a0a32f4c4b.png"},2269:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img11-ae93345dd6f980201eb82fbc8a0c205d.png"},7225:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img12-88549de9b6ff85b440027e3f7d14c7ea.png"},9247:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img13-02bf35b7288804f6e30f29374d1ac659.png"},718:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img14-e4697362fd3e4d353a830d9c6367db97.png"},1577:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img15-b998c4d14fe5e82387f03780c10bb2c5.png"},3706:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img16-71fb7d91504126afe9b1f87a61c029d0.png"},3673:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img17-2d87b1242c163849ae353c6a15371161.png"},4299:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img18-80df2e57150cc902cc465bf0357f6dde.png"},8168:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img19-c28f2d934b562542231abd524864d92e.png"},6572:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img2-1d3f6e53cd5fab51e544e287f4f0fd8c.png"},2956:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img20-4e24a919148807495e271a7d297f4feb.png"},2390:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img21-9f4b8e91ece65d9b97538bdcedc93c02.png"},1346:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img22-0c94be1ba9fc00926c53119fa3a93e5c.png"},5846:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img23-a0211035cf142e209e863068a37e8054.png"},1892:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img3-4fea7602862e6fc0447a5137bc1878d4.png"},2206:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img4-a6d8f3f62e724323cbbd6cb50c181704.png"},821:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img5-66e40675ecc13f2c31c3440392f8b1c3.png"},586:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img6-a8d2ab510c9e532f1e35b49de05e21e6.png"},7401:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img7-a57e33f977c061b9f933800be29f3cb9.png"},2349:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img8-d251aa0ba7254e065226f859e0cd1480.png"},8514:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Img9-02b1c697e543034219905f30f3511733.png"}}]);