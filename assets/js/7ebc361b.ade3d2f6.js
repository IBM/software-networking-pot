"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[254],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>N});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=i,N=m["".concat(p,".").concat(d)]||m[d]||k[d]||r;return a?n.createElement(N,o(o({ref:t},c),{},{components:a})):n.createElement(N,o({ref:t},c))}));function N(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9591:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:4},o="Advanced Load Balancing - SANO integration",l={unversionedId:"NS1 PoT/SANO NS1 integration",id:"NS1 PoT/SANO NS1 integration",title:"Advanced Load Balancing - SANO integration",description:"In this lab we will see how we can load balance traffic among different servers based on how busy those servers are using SANO and NS1.",source:"@site/docs/NS1 PoT/4 - SANO NS1 integration.md",sourceDirName:"NS1 PoT",slug:"/NS1 PoT/SANO NS1 integration",permalink:"/software-networking-pot/docs/NS1 PoT/SANO NS1 integration",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Geographic Steering",permalink:"/software-networking-pot/docs/NS1 PoT/Geo-steering"}},p={},s=[{value:"Create Aggregation",id:"create-aggregation",level:2},{value:"Rapid Network Automation Configuration",id:"rapid-network-automation-configuration",level:2},{value:"Send data to RNA using alerts",id:"send-data-to-rna-using-alerts",level:2},{value:"SevOne Alert Configuration",id:"sevone-alert-configuration",level:2},{value:"NS1 Configuration",id:"ns1-configuration",level:2}],c={toc:s},m="wrapper";function k(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"advanced-load-balancing---sano-integration"},"Advanced Load Balancing - SANO integration"),(0,i.kt)("p",null,"In this lab we will see how we can load balance traffic among different servers based on how busy those servers are using SANO and NS1."),(0,i.kt)("p",null,"On the first step of this lab, we will configure SevOne to create a new custom metric call 'load' that includes the number of connections plus how busy the CPU is. Also, we will configure an alert to send the value of this new custom metric to Rapid Network Automation (RNA)."),(0,i.kt)("p",null,"The second step will be to configure RNA to process the values received, format them in a way that NS1 understands, and send them to NS1."),(0,i.kt)("p",null,"Finally we will configure NS1 to change the cost of the different answers based on the value received from SevOne + RNA, therefore when we query for an answer to NS1, it will reply with the server with less connections and CPU load."),(0,i.kt)("p",null,"NOTE: For a real world scenario, we would recommend using 'Shed Load' rather than 'Cost' to provide a smoother solution by providing more than one response until one of the answers becomes overloaded. However, in this lab we have chosen 'Cost' to see changes on the answers quicker."),(0,i.kt)("h2",{id:"create-aggregation"},"Create Aggregation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log into the NMS")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Administration -> Monitoring Configuration -> Object Types")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change Filter to Calculation Poller")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click Add"),(0,i.kt)("p",{parentName:"li"},"a. Name: Load"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(6953).Z,width:"1913",height:"801"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose Load:"),(0,i.kt)("p",{parentName:"li"},"a. Click Add Atomic Indicator Type"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Indicator Name: Load\n\nii. Description: Load\n\niii. Indicator Type: GAUGE\n\niv. Measure as: Number\n\nv. Display as: Number\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(7897).Z,width:"1300",height:"661"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Administration -> Monitoring Configuration -> Calculation Editor")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click \u2018Add Object\u2019"),(0,i.kt)("p",{parentName:"li"},"a. Parent Device: LON-SRV01"),(0,i.kt)("p",{parentName:"li"},"b. Object Type: Calculation Poller -> Load"),(0,i.kt)("p",{parentName:"li"},"c. Object Name: Load"),(0,i.kt)("p",{parentName:"li"},"d. Object Description: Load"),(0,i.kt)("p",{parentName:"li"},"e. Click 'Save'"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(6405).Z,width:"1216",height:"610"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the 'Load' object in 'LON-SRV01'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add Variable:"),(0,i.kt)("p",{parentName:"li"},"a. Name: cpu"),(0,i.kt)("p",{parentName:"li"},"b. Plugin: SNMP Poller"),(0,i.kt)("p",{parentName:"li"},"c. Device: LON-SRV01"),(0,i.kt)("p",{parentName:"li"},"d. Object: CPU2"),(0,i.kt)("p",{parentName:"li"},"e. Indicator: CPU Load"),(0,i.kt)("p",{parentName:"li"},"f. Click 'Save'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add Variable:"),(0,i.kt)("p",{parentName:"li"},"a. Name: conn"),(0,i.kt)("p",{parentName:"li"},"b. Plugin: SNMP Poller"),(0,i.kt)("p",{parentName:"li"},"c. Device: LON-SRV01"),(0,i.kt)("p",{parentName:"li"},"d. Object: TCP"),(0,i.kt)("p",{parentName:"li"},"e. Indicator: Established TCP Connections"),(0,i.kt)("p",{parentName:"li"},"f. Click 'Save'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the section below named 'Expression Browser for Load', click on the spanner symbol of the indicator 'Load'"),(0,i.kt)("p",{parentName:"li"},"a. Indicator Expression: $cpu + $conn"),(0,i.kt)("p",{parentName:"li"},"b. Click 'Save'"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(7398).Z,width:"1906",height:"475"})),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Let's repeat the steps for LON-SRV02")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click \u2018Add Object\u2019"),(0,i.kt)("p",{parentName:"li"},"a. Parent Device: LON-SRV02"),(0,i.kt)("p",{parentName:"li"},"b. Object Type: Calculation Poller -> Load"),(0,i.kt)("p",{parentName:"li"},"c. Object Name: Load"),(0,i.kt)("p",{parentName:"li"},"d. Object Description: Load"),(0,i.kt)("p",{parentName:"li"},"e. Click 'Save'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the 'Load' object in 'LON-SRV02'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add Variable:"),(0,i.kt)("p",{parentName:"li"},"a. Name: cpu"),(0,i.kt)("p",{parentName:"li"},"b. Plugin: SNMP Poller"),(0,i.kt)("p",{parentName:"li"},"c. Device: LON-SRV02"),(0,i.kt)("p",{parentName:"li"},"d. Object: CPU2"),(0,i.kt)("p",{parentName:"li"},"e. Indicator: CPU Load"),(0,i.kt)("p",{parentName:"li"},"f. Click 'Save'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add Variable:"),(0,i.kt)("p",{parentName:"li"},"a. Name: conn"),(0,i.kt)("p",{parentName:"li"},"b. Plugin: SNMP Poller"),(0,i.kt)("p",{parentName:"li"},"c. Device: LON-SRV02"),(0,i.kt)("p",{parentName:"li"},"d. Object: TCP"),(0,i.kt)("p",{parentName:"li"},"e. Indicator: Established TCP Connections"),(0,i.kt)("p",{parentName:"li"},"f. Click 'Save'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the section below named 'Expression Browser for Load', click on the spanner symbol of the indicator 'Load'"),(0,i.kt)("p",{parentName:"li"},"a. Indicator Expression: $cpu + $conn"),(0,i.kt)("p",{parentName:"li"},"b. Click 'Save'"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(5487).Z,width:"1636",height:"447"})),(0,i.kt)("ol",{start:18},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Devices -> Device Manager"),(0,i.kt)("p",{parentName:"li"},"a. Search for LON-SRV"),(0,i.kt)("p",{parentName:"li"},"b. Select both devices and click on the 'gear' icon on the top left corner -> Discovery -> Discover"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(5702).Z,width:"1112",height:"341"})),(0,i.kt)("h2",{id:"rapid-network-automation-configuration"},"Rapid Network Automation Configuration"),(0,i.kt)("ol",{start:19},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log into ",(0,i.kt)("a",{parentName:"p",href:"https://my.nsone.net/"},"https://my.nsone.net/")," with your username and password")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the top right corner where you see your username"),(0,i.kt)("p",{parentName:"li"},"a. Click on your username -> Settings -> Account Settings"),(0,i.kt)("p",{parentName:"li"},"b. Click on 'API KEYS'"),(0,i.kt)("p",{parentName:"li"},"c. Click 'Add key'"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. App Name: RNA\n\nii. Click Save API Key\n")),(0,i.kt)("p",{parentName:"li"},"d. Click on the i icon next to the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("strong",{parentName:"strong"},"***"))," to uncover the API key"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Copy that API key for future use\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(2246).Z,width:"1517",height:"384"})),(0,i.kt)("ol",{start:21},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log into Rapid Network Automation platform")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Authentications")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click 'Create Authentication'"),(0,i.kt)("p",{parentName:"li"},"a. Name: NS1"),(0,i.kt)("p",{parentName:"li"},"b. Service: NS1"),(0,i.kt)("p",{parentName:"li"},"c. Protocol: https://"),(0,i.kt)("p",{parentName:"li"},"d. Host: api.nsone.net"),(0,i.kt)("p",{parentName:"li"},"e. X-NSONE-key: paste your key from NS1"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(8592).Z,width:"576",height:"751"})),(0,i.kt)("ol",{start:24},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Workflows"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click 'Create Workflow'"),(0,i.kt)("p",{parentName:"li"},"a. Name: SevOne to NS1 Cost"),(0,i.kt)("p",{parentName:"li"},"b. Layout type: Sequence")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add variables to Start"),(0,i.kt)("p",{parentName:"li"},"a. NS1Credentials"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: NS1Credentials\n\nii. Type: Authentication -> NS1\n\niii. Default Value: "admin/NS1"\n')),(0,i.kt)("p",{parentName:"li"},"b. Devicename"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: Devicename\n\nii. Type: String\n\niii. Default Value: ""\n\niv. In\n\nv. Required\n')),(0,i.kt)("p",{parentName:"li"},"c. Value"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: Value\n\nii. Type: String\n\niii. Default Value: ""\n\niv. In\n\nv. Required\n')),(0,i.kt)("p",{parentName:"li"},"d. body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Name: body\n\nii. Type: Object\n\niii. Default Value: {}\n\niv. Out\n\nv. Log\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(639).Z,width:"1039",height:"477"})),(0,i.kt)("ol",{start:27},(0,i.kt)("li",{parentName:"ol"},"Change to Flow View")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(7426).Z,width:"1051",height:"632"})),(0,i.kt)("ol",{start:28},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the left hand side panel, search for NS1, Click on NS1 -> Data Sources & Feeds -> Data Sources -> View active data sources"),(0,i.kt)("p",{parentName:"li"},"a. Change name to NS1_sources"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. authKey: $NS1Credentials\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> ForEach"),(0,i.kt)("p",{parentName:"li"},"a. Change name to ForEach_source"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. list: $NS1_sources.result\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(6675).Z,width:"1892",height:"661"})),(0,i.kt)("ol",{start:30},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the right side of the foreach, add a new building block, Common -> If"),(0,i.kt)("p",{parentName:"li"},"a. Change name to If_same_device"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. condition: $ForEach_source.item.name == $Devicename\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the TRUE side of the If, add a new building block, Common -> Assign"),(0,i.kt)("p",{parentName:"li"},"a. Change name to Assign_url"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. variable: $url\n\nii. value: "https://api.nsone.net/v1/feed/" + $ForEach_source.item.id\n')))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(258).Z,width:"1889",height:"550"})),(0,i.kt)("ol",{start:32},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> String -> StringRemove"),(0,i.kt)("p",{parentName:"li"},"a. Change name to CleanValue"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. str1: $Value\n\nii. str2: "Threshold triggered -- "\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> Assign"),(0,i.kt)("p",{parentName:"li"},"a. Change name to Assign_body"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. variable: $body[$Devicename]\n\nii. value: \n")))),(0,i.kt)("p",null,"{"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"up": "1",\n\n"cost": $CleanValue.result\n')),(0,i.kt)("p",null,"}"),(0,i.kt)("ol",{start:34},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> HttpRequest"),(0,i.kt)("p",{parentName:"li"},"a. Change name to Send_data"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. method: POST\n\nii. host: $url\n\niii. protocol: https\n\niv. headers: \n")))),(0,i.kt)("p",null,"{"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"X-NSONE-key": "PASTE_HERE_THE_KEY_FROM_NS1"\n')),(0,i.kt)("p",null,"}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    v. body: $body\n")),(0,i.kt)("ol",{start:35},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Move the last building block of the workflow 'Assign_1' next to 'Send_data'. You can do 'drag and drop'"),(0,i.kt)("p",{parentName:"li"},"a. Change value to '$Send_data.result'"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(5755).Z,width:"1502",height:"803"})),(0,i.kt)("ol",{start:36},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click 'Save'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to APIs")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on Create API"),(0,i.kt)("p",{parentName:"li"},"a. Name: cost"),(0,i.kt)("p",{parentName:"li"},"b. Authentications"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Authentication: API Keys\n\nii. Click \u2018Add API Key\u2019\n\n    1. Name: cost\n    \n    2. Copy the api key for later use\n       \n")),(0,i.kt)("p",{parentName:"li"},"c. Click \u2018Create\u2019"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(5823).Z,width:"1921",height:"810"})),(0,i.kt)("ol",{start:39},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In workflow deployments, click \u2018Create\u2019"),(0,i.kt)("p",{parentName:"li"},"a. Workflow -> Choose the workflow you created clicking on the folder icon on the top right side of that field"),(0,i.kt)("p",{parentName:"li"},"b. Stage - > Click on + icon -> leave everything as it is, click 'Create'"),(0,i.kt)("p",{parentName:"li"},"c. Endpoint -> Click on + icon "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Change Path to /Cost\n\nii. Method: POST\n\niii. Click \u2018Create\u2019\n    \n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(4273).Z,width:"1904",height:"845"})),(0,i.kt)("ol",{start:40},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Deploy"),"  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Swagger UI")),(0,i.kt)("p",{parentName:"li"},"a. Click on Authorize "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Paste the API Key copied before\n\nii. Click 'Authorize'\n\niii. Click 'Close'\n")),(0,i.kt)("p",{parentName:"li"},"b. Click 'Try it out'"),(0,i.kt)("p",{parentName:"li"},"c. Click 'Execute'"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. We don't care about the result, we want to get the request URL\n\nii. Copy the Request URL for future use\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(4283).Z,width:"1438",height:"876"})),(0,i.kt)("h2",{id:"send-data-to-rna-using-alerts"},"Send data to RNA using alerts"),(0,i.kt)("ol",{start:42},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to the SevOne GUI (vPAS)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Events -> Configuration -> Webhook Definition Manager")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on Add Webhook Definition"),(0,i.kt)("p",{parentName:"li"},"a. Webhook Definition Name: RNA Cost"),(0,i.kt)("p",{parentName:"li"},"b. Destination URL: paste the Request URL from the four steps above"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Replace 'na4.techzone-services.com:xxxxx' from the URL for '10.0.0.12'\n")),(0,i.kt)("p",{parentName:"li"},"c. Allow insecure webhook connection: TRUE"),(0,i.kt)("p",{parentName:"li"},"c. Request Method: POST"),(0,i.kt)("p",{parentName:"li"},"d. Body:"))),(0,i.kt)("p",null,"{"),(0,i.kt)("p",null,'"Devicename": "$deviceName",'),(0,i.kt)("p",null,'"Value": "$alertMessage"'),(0,i.kt)("p",null,"}"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(5850).Z,width:"1280",height:"780"})),(0,i.kt)("h2",{id:"sevone-alert-configuration"},"SevOne Alert Configuration"),(0,i.kt)("ol",{start:45},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Events -> Configuration -> Policy Browser")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click 'Create Policy'"),(0,i.kt)("p",{parentName:"li"},"a. Name: Server Load - NS1"),(0,i.kt)("p",{parentName:"li"},"b. Device Group: All device groups"),(0,i.kt)("p",{parentName:"li"},"c. Object type: Calculation Poller -> Load"),(0,i.kt)("p",{parentName:"li"},"d. Severity: Debug"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(5).Z,width:"1607",height:"572"})),(0,i.kt)("ol",{start:47},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click 'Trigger Conditions'"),(0,i.kt)("p",{parentName:"li"},"a. Under Conditions, click on the menu icon and click 'Create New'"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Indicator: Load\n\nii. Type: Static\n\niii. Comparison: Greater than equal to\n\niv. Threshold: 0 Number **(not centinumber)**\n\nv. Duration: 1\n\nvi. Aggregation: Average\n\nvii. Custom message: $dataValue\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(0).Z,width:"1904",height:"365"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"b. Under Webhooks:\n\n    i. Enable 'Override Webhook per Alert'\n\n    ii. Disable 'One webhook per Alert'\n\n    iii. Move 'RNA Cost' to the right side\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(6890).Z,width:"719",height:"750"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"c. Click 'Save as New'\n")),(0,i.kt)("h2",{id:"ns1-configuration"},"NS1 Configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE: If there is any configuration from another lab, please delete all the NS1 configurations as some of them may impact this lab. This includes DNS records, filter chains, monitors, etc...")),(0,i.kt)("ol",{start:48},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log into ",(0,i.kt)("a",{parentName:"p",href:"https://my.nsone.net/"},"https://my.nsone.net/")," with your username and password")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to the DNS tab")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the + icon on the top right side"),(0,i.kt)("p",{parentName:"li"},"a. Domain name: yourname.loadbalancer (raulg.loadbalancer)"),(0,i.kt)("p",{parentName:"li"},"b. leave all the other settings as is"),(0,i.kt)("p",{parentName:"li"},"c. Click 'Save Zone'"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(575).Z,width:"1001",height:"910"})),(0,i.kt)("ol",{start:51},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the '1 Record' box next to the zone just created")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click 'Add record'"),(0,i.kt)("p",{parentName:"li"},"a. Record Type: A"),(0,i.kt)("p",{parentName:"li"},"b. name: app1"),(0,i.kt)("p",{parentName:"li"},"c. TTL: 60 "),(0,i.kt)("p",{parentName:"li"},"d. Answers:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. 172.24.147.195\n\nii. 172.24.147.196\n")))),(0,i.kt)("ol",{start:53},(0,i.kt)("li",{parentName:"ol"},"Click 'Save Record'")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(5732).Z,width:"1522",height:"839"})),(0,i.kt)("ol",{start:54},(0,i.kt)("li",{parentName:"ol"},"Click on '2 answers' on app1.yourname.loadbalancer")),(0,i.kt)("ol",{start:55},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click 'Create Filter Chain'"),(0,i.kt)("p",{parentName:"li"},"a. Click the '+' icon next to the 'Cost' filter"),(0,i.kt)("p",{parentName:"li"},"b. Click the '+' icon next to the 'Up' filter"),(0,i.kt)("p",{parentName:"li"},"d. Click 'Save Filter Chain'"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(6035).Z,width:"1491",height:"705"})),(0,i.kt)("ol",{start:56},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Let's create the integrations to read the cost from SevOne data. Click on 'Integrations' (top bar)"),(0,i.kt)("p",{parentName:"li"},"a. Click on the + icon on the top right to create a Data Source"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. NS1 API integration\n\nii. Name: LON-SRV01\n\niii. Click on 'Create a new feed with this data source?'\n\n    1. Name: LON-SRV01\n\n    2. Label: LON-SRV01\n\niv. Click 'Save changes'\n")),(0,i.kt)("p",{parentName:"li"},"b. Go back to Data Sources and click the + icon to do the same with the other server"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. NS1 API integration\n\nii. Name: LON-SRV02\n\niii. Click on 'Create a new feed with this data source?'\n\n    1. Name: LON-SRV02\n\n    2. Label: LON-SRV02\n\niv. Click 'Save changes'\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(72).Z,width:"1395",height:"853"})),(0,i.kt)("ol",{start:56},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to DNS -> yourname.loadbalancer -> app1.yourname.loadbalancer, click in the middle of the 'Cost' filter to highlight the up metadata on the answers"),(0,i.kt)("p",{parentName:"li"},"a. Click on 'cost: unset' of the first answer (172.24.147.195)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. click on the feed icon and select LON-SRV01\n\nii. Click 'OK'\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(1612).Z,width:"1447",height:"768"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"b. Click on 'cost: unset' of the first answer (172.24.147.196)\n\n    i. click on the feed icon and select LON-SRV02\n\n    ii. Click 'OK' \n\nc. Enable the option 'Select answers instead of sorting' inside the 'Cost' box on the left hand side\n")),(0,i.kt)("ol",{start:57},(0,i.kt)("li",{parentName:"ol"},"Click in the middle of the 'Up' filter to highlight the up metadata on the answer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"a. Click on 'cost: unset' of the first answer (172.24.147.195)\n\n    i. click on the feed icon and select LON-SRV01\n\n    ii. Click 'OK'\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(1612).Z,width:"1447",height:"768"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"b. Click on 'cost: unset' of the first answer (172.24.147.196)\n\n    i. click on the feed icon and select LON-SRV02\n\n    ii. Click 'OK' \n")),(0,i.kt)("ol",{start:58},(0,i.kt)("li",{parentName:"ol"},"Click 'Save record'")),(0,i.kt)("p",null,"NOTE: It will take a minute for the UP monitors to show up. Don't get alarmed if they show red for one minute or two"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(5477).Z,width:"1386",height:"624"})),(0,i.kt)("ol",{start:59},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now it's time to test which result we get back based on the load of the server. Test the results with command:"),(0,i.kt)("p",{parentName:"li"},"a. dig @dns1.p04.nsone.net app1.YOURNAME.loadbalancer"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. dig @dns1.p04.nsone.net app1.raulg.loadbalancer\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(6729).Z,width:"695",height:"890"})),(0,i.kt)("ol",{start:60},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Let's force the other result to appear by editing the formular")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to SevOne (vPAS) and go to Administration -> Monitoring Configuration -> Calculation Editor"),(0,i.kt)("p",{parentName:"li"},"a. In my case the server with less load is LON-SRV01, therefore I will click on 'Load' on that device and edit the formula"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Indicator Expression: ${cpu}+${conn} + 1000000\n\nii. Click 'Save'\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(8202).Z,width:"1915",height:"491"})),(0,i.kt)("ol",{start:62},(0,i.kt)("li",{parentName:"ol"},"As we poll every 5 minutes by default, we can speed up the process by editing the devices in SevOne and change the polling frequency to 1 minute, and check the results again in 3-4 minutes")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(6601).Z,width:"965",height:"531"})),(0,i.kt)("ol",{start:63},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Otherwise we can wait around 10 minutes and test again the results:"),(0,i.kt)("p",{parentName:"li"},"a. dig @dns1.p04.nsone.net app1.YOURNAME.loadbalancer"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. dig @dns1.p04.nsone.net app1.raulg.loadbalancer\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM NS1",src:a(1700).Z,width:"679",height:"880"})))}k.isMDXComponent=!0},2246:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_NS1_1-667456bf58360347847b620cbefcb1cf.png"},575:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_NS1_2-148ee994055129c223cec12d9b8a3fd9.png"},5732:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_NS1_3-7a7a5e4e3b33dba69403e879f68acd6c.png"},6035:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_NS1_4-9b680018261b723d165f8557afe08487.png"},72:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_NS1_5-fa128a3862fcc9ffdf07c2e8cb157193.png"},1612:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_NS1_6-04d58374f52fa9e3e3bb82c0a3b15a6d.png"},5477:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_NS1_7-438724578f95f05776159eaf0197989a.png"},6729:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_NS1_8-74bd44807e7c52a3db98cd6628849a44.png"},1700:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_NS1_9-33b9b27e782bdca6409b155bc1d1ea18.png"},8592:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_RNA_1-57c09e1b81e7b42b8d602f4bc1f790a6.png"},5850:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_RNA_10-160c306086e876708ad70fa85c31abdd.png"},639:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_RNA_2-b73d8ab8c8d0cff91c256e2ffd53e601.png"},7426:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_RNA_3-42a20afd0105f6805893e08cb1b30887.png"},6675:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_RNA_4-178da7519c17b54d0bdc28a23b15cf33.png"},258:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_RNA_5-d523f2219b2ab697792e6a8e0fa1669b.png"},5755:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_RNA_6-4e964720f7842993e3295042dd5601d3.png"},5823:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_RNA_7-806a52df97e6f2e6076deacaabbce084.png"},4273:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_RNA_8-81379f0591312e1826e3f75c28ee1083.png"},4283:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_RNA_9-4a6bd3510c2e39af6b2a3fd0bf8add76.png"},6953:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_SevOne_1-b1ac21a2a49dce75e968c1bbad00f692.png"},8202:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_SevOne_10-717f975c1150746e3a89657a47b84667.png"},6601:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_SevOne_11-0ae94b01f724135bf619808dc0cd3fa3.png"},7897:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_SevOne_2-edc32d213e0ce2a377631298f101dbbb.png"},6405:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_SevOne_3-bd396939fc787df42f09199cd0f9b25f.png"},7398:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_SevOne_4-48139f7e2a02e64d5663e6052b77ebc2.png"},5487:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_SevOne_5-8389351e3b24e692b7a0a66447f156b7.png"},5702:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_SevOne_6-30e6f3714073fa5c8d216c590ea6359f.png"},5:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_SevOne_7-a05d6c38c085cac533a8f62a2b0f4711.png"},0:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_SevOne_8-746a367b7be2467aaba1b536292229b4.png"},6890:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Img_SevOne_9-e34807810f40b12388de48a2bc957794.png"}}]);