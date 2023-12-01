"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[7293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=i,u=d["".concat(p,".").concat(k)]||d[k]||m[k]||r;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:9},o="Alert Suppression",l={unversionedId:"IBM SevOne Automated Network Observability/RNA Labs/alertsup",id:"IBM SevOne Automated Network Observability/RNA Labs/alertsup",title:"Alert Suppression",description:"Overview",source:"@site/docs/IBM SevOne Automated Network Observability/RNA Labs/alertsup.md",sourceDirName:"IBM SevOne Automated Network Observability/RNA Labs",slug:"/IBM SevOne Automated Network Observability/RNA Labs/alertsup",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/alertsup",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Predictive Alerting",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/predictive"},next:{title:"CMDB Integration",permalink:"/software-networking-pot/docs/category/cmdb-integration"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequirements",id:"prerequirements",level:2},{value:"Alert Suppression - ServiceNow Integration",id:"alert-suppression---servicenow-integration",level:2},{value:"Review",id:"review",level:2}],s={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"alert-suppression"},"Alert Suppression"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this lab we will review how RNA can suppress alerts based on specific situations."),(0,i.kt)("p",null,"SevOne has the capability of sending alerts based on policies, however SevOne does not have alert correlation or alert suppression capabilities. However with RNA we can expand SevOne capabilities to only forward specific alerts to 3rd party ticketing systems (such as ServiceNow) based on the conditions we define."),(0,i.kt)("p",null,"In this lab we will review how we can suppress alerts of devices that became unavailable in offices where the internet connection has been lost. This is a well-know situation that generates multiple alerts (from 100s to 1000s) however the actual issue is just one device going down (internet router)."),(0,i.kt)("h2",{id:"prerequirements"},"Prerequirements"),(0,i.kt)("p",null,"In order to complete this lab, it is required to have access to a ServiceNow instance. If you don't have one already, please create one using following the steps defined on this ",(0,i.kt)("a",{parentName:"p",href:"https://developer.servicenow.com/dev.do#!/learn/learning-plans/utah/new_to_servicenow/app_store_learnv2_buildmyfirstapp_utah_personal_developer_instances"},"link"),"."),(0,i.kt)("p",null,"It's important to change your role to admin to be able to use the instance properly (see link ",(0,i.kt)("a",{parentName:"p",href:"https://www.servicenow.com/community/user/ssoregistrationpage?dest_url=https:%2F%2Fwww.servicenow.com%2Fcommunity%2Finstance-help-forum%2Fhow-to-get-out-of-app-engine-studio-and-go-back-to-the-main%2Fm-p%2F286367%2Fthread-id%2F23136"},"here")," )"),(0,i.kt)("h2",{id:"alert-suppression---servicenow-integration"},"Alert Suppression - ServiceNow Integration"),(0,i.kt)("p",null,"If SevOne authentication has already been created, please skip this block of actions and continue to step 5."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log into SANO automation platform")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Authentications")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click  Create Authentication"),(0,i.kt)("p",{parentName:"li"},"a. Name: SevOne"),(0,i.kt)("p",{parentName:"li"},"b. Service: SevOne"),(0,i.kt)("p",{parentName:"li"},"c. ",(0,i.kt)("strong",{parentName:"p"},"Protocol: http://")," (<-- important)"),(0,i.kt)("p",{parentName:"li"},"d. Host: 10.0.0.10"),(0,i.kt)("p",{parentName:"li"},"e. Username: admin"),(0,i.kt)("p",{parentName:"li"},"f. Password: SevOne"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(3351).Z,width:"579",height:"758"})),(0,i.kt)("p",null,"If ServiceNow authentication has already been created, please skip this block of actions and continue to step 5."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click Create Authentication"),(0,i.kt)("p",{parentName:"li"},"a. Name: ServiceNow"),(0,i.kt)("p",{parentName:"li"},"b. Service: ServiceNow"),(0,i.kt)("p",{parentName:"li"},"c. Protocol: https://"),(0,i.kt)("p",{parentName:"li"},"d. Host: (Your SNOW instance URL, example: dev109667.service-now.com)"),(0,i.kt)("p",{parentName:"li"},"e. Username: (Your SNOW instance username, example: admin)"),(0,i.kt)("p",{parentName:"li"},"f. Password: (Your SNOW instance password)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Workflows"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click Create Workflow"),(0,i.kt)("p",{parentName:"li"},"a. Name: Alert Suppression"),(0,i.kt)("p",{parentName:"li"},"b. Layout type: Sequence"))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add variables to Start"),(0,i.kt)("p",{parentName:"li"},"a. NMSCredentials"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: NMSCredentials\n\nii. Type: Authentication -> SevOne\n\niii. Default Value: "admin/SevOne"\n\niv. In\n\nv. Required\n')),(0,i.kt)("p",{parentName:"li"},"b. ServiceNowCredentials"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: ServiceNowCredentials\n\nii. Type: Authentication -> ServiceNow\n\niii. Default Value: "admin/ServiceNow"\n\niv. In\n\nv. Required\n')),(0,i.kt)("p",{parentName:"li"},"c. devicename"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: devicename\n\nii. Type: String\n\niii. Default Value: ""\n\niv. In\n\nv. Required\n')))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(3125).Z,width:"997",height:"418"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change to Flow View")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the left hand side panel, Click on Common -> String ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select "StringIncludes" and drop it after the building block START'),(0,i.kt)("p",{parentName:"li"},"a. Change name to devicename_contains_edge"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. str: $devicename\n\nii. searchString: "EDGE"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> If"),(0,i.kt)("p",{parentName:"li"},"a. Change name to If_contains_edge"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. condition: $devicename_contains_edge.result\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the 'TRUE' branch of the If, add a new building block, ServiceNow -> createTable"),(0,i.kt)("p",{parentName:"li"},"a. Change name to ServiceNow_Create_Incident"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. authKey: $ServiceNowCredentials\n\nii. tableName: "incident"\n\niii. Table: \n\n    1. short_description: "Internet router " + $devicename + " is down"\n\n    2. urgency: 1\n\n    3. impact: 1\n\niv. content_type: "application/json"\n')))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(5616).Z,width:"942",height:"703"})),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the 'FALSE' branch of the If, add a new building block, Common -> Sleep"),(0,i.kt)("p",{parentName:"li"},"a. Change name to wait_1_minute"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. seconds: 60\n")),(0,i.kt)("p",{parentName:"li"},"c. Disable this building block by clicking on On/Off icon"))),(0,i.kt)("p",null,"NOTE: we are disabling this building block because when we test this workflow we don't want to wait 60 seconds, however in a production environment we will want to wait some time, to make sure SevOne is able to capture the status of the EDGE return before pushing the alert to ServiceNow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(8e3).Z,width:"1295",height:"500"})),(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> Assign"),(0,i.kt)("p",{parentName:"li"},"a. Change name to Office_Router"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. variable: $officerouter\n\nii. value: $devicename.slice(0,3)+ "-EDGE01"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, SevOne -> REST v3 -> Metadata -> Metadata Devies (POST)"),(0,i.kt)("p",{parentName:"li"},"a. Change name to SevOne_Find_Router"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. authKey: $NMSCredentials\n\nii. body:\n\n    1. name:\n\n        a. value: $officerouter\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> If"),(0,i.kt)("p",{parentName:"li"},"a. Change name to If_internet_router_found"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. condition: $SevOne_Find_Router.result.devices.length > 0\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the 'TRUE' branch of the If, add a new building block, SevOne -> Rest v3 -> Data -> Data Last Data Point (POST)"),(0,i.kt)("p",{parentName:"li"},"a. Change name to SevOne_get_last_value"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. authKey: $NMSCredentials\n\nii. body:\n\n    1. indicatorFilters: click on the three little dots that appear on the right side of this property and click Append child\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(9907).Z,width:"447",height:"427"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(8854).Z,width:"446",height:"619"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'            a. On the new line ( 0 ):\n\n                i. deviceIds: [ $SevOne_Find_Router.result.devices[0].id ]\n            \n                ii. indicatorTypeNames: click on the three little dots that appear on the right side of this property and click Append child\n\n                    1. On the new line ( 0 ): \n                    \n                        a. value: "availability"\n\n                ii. plugins: ["ICMP"]\n')),(0,i.kt)("p",null,"Note: to confirm, click on the square icon next to body and compare with the screenshot below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(969).Z,width:"576",height:"408"})),(0,i.kt)("ol",{start:15},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> If"),(0,i.kt)("p",{parentName:"li"},"a. Change name to If_router_down"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. condition: $SevOne_get_last_value.result.indicatorResults[0].dataPoint.value == 0\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the 'FALSE' branch of the If, add a new building block, ServiceNow -> createTable"),(0,i.kt)("p",{parentName:"li"},"a. Change name to ServiceNow_Create_Incident2"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. authKey: $ServiceNowCredentials\n\nii. tableName: "incident"\n\niii. Table: \n\n    1. short_description:  "Device " + $devicename + " is down"\n\n    2. urgency: 2\n\n    3. impact: 2\n\niv. content_type: "application/json"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to the 'If_internet_router_found', on the 'FALSE' branch of this If, add a new building block, ServiceNow -> createTable"),(0,i.kt)("p",{parentName:"li"},"a. Change name to ServiceNow_Create_Incident3"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. authKey: $ServiceNowCredentials\n\nii. tableName: "incident"\n\niii. Table: \n\n    1. short_description:  "Device " + $devicename + " is down"\n\n    2. urgency: 2\n\n    3. impact: 2\n\niv. content_type: "application/json"\n')))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(300).Z,width:"873",height:"763"})),(0,i.kt)("ol",{start:18},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"APIS")," section")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click create API"),(0,i.kt)("p",{parentName:"li"},"a. Name: suppress"),(0,i.kt)("p",{parentName:"li"},"b. Authentications: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. authentication: Api Keys\n\nii. Click on Add API Key\n\n    1. Name: suppress\n\n    2. Click on the 'tick' icon\n\n    3. copy the content of value for future use\n")),(0,i.kt)("p",{parentName:"li"},"c. Click Create")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click Create (top right corner)"),(0,i.kt)("p",{parentName:"li"},"a. Workflow: click on the folder icon and choose the workflow 'Alert Suppression;"),(0,i.kt)("p",{parentName:"li"},"b. Stage: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. click on the + icon\n\nii. click 'Create' on the new window that appeared\n")),(0,i.kt)("p",{parentName:"li"},"c. Endpoint:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. click on the + icon\n\nii. Path: /suppress\n\niii. Method: POST\n\niv. click Create\n")),(0,i.kt)("p",{parentName:"li"},"d. Click Deploy")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on Swagger UI"),(0,i.kt)("p",{parentName:"li"},"a. Click on Authorize"),(0,i.kt)("p",{parentName:"li"},"b. Paste the API key created before and click authorize and close"),(0,i.kt)("p",{parentName:"li"},"c. Expand the endpoint /suppress and click 'Try it out'"),(0,i.kt)("p",{parentName:"li"},"d. Click Execute"))),(0,i.kt)("p",null,"NOTE: the test will fail, however this doesn't matter because we are interested in the Request URL created. Copy it for future use"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(8673).Z,width:"1413",height:"406"})),(0,i.kt)("ol",{start:22},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the NMS -> Events -> Configuration -> Webhook Definition Manager")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on Add Webhook Definition"),(0,i.kt)("p",{parentName:"li"},"a. Webhook Definition Name: supress RNA"),(0,i.kt)("p",{parentName:"li"},'b. Destination URL: paste the URL copied from SWAGGER but replacing the "na4.techzone-services.com:XXXXX" (including port number) for "10.0.0.12" '),(0,i.kt)("p",{parentName:"li"},"c. Allow insecure webhook connection: Enabled"),(0,i.kt)("p",{parentName:"li"},"d. Request Method: POST"),(0,i.kt)("p",{parentName:"li"},"e. Body:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'    {\n\n        "NMSCredentials": "admin/SevOne",\n\n        "ServiceNowCredentials": "admin/ServiceNow",\n\n        "devicename": "$deviceName"\n\n    }\n')),(0,i.kt)("p",{parentName:"li"},"e. Click Save"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(9707).Z,width:"652",height:"637"})),(0,i.kt)("ol",{start:22},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the NMS -> Events -> Configuration -> Policy Browser")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on Create Policy"),(0,i.kt)("p",{parentName:"li"},"a. Name: Device Down (Suppression)"),(0,i.kt)("p",{parentName:"li"},"b. Device Group: All Device Groups"),(0,i.kt)("p",{parentName:"li"},"c. Object Type: ICMP Poller -> Ping Data"),(0,i.kt)("p",{parentName:"li"},"d. Click on Trigger Conditions:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Under Conditions, click on the menu icon -> Create New\n\n    1. Indicator: Availability\n\n    2. Type: Static\n\n    3. Comparison: equal to\n\n    4. Threshold: 0\n\n    5. Duration: 1 \n\n    6. Aggregation: Minimum\n\nii. Click Save\n")),(0,i.kt)("p",{parentName:"li"},"e. On Webhooks, move suppress RNA to the right side"),(0,i.kt)("p",{parentName:"li"},"f. Click on Clear Conditions:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Under Conditions, click on the menu icon -> Create New\n\n    1. Indicator: Availability\n\n    2. Type: Static\n\n    3. Comparison: equal to\n\n    4. Threshold: 100 Percent\n\n    5. Duration: 1 \n\n    6. Aggregation: Average\n\nii. Click Save\n")),(0,i.kt)("p",{parentName:"li"},"g. Click Save as New"))),(0,i.kt)("h2",{id:"review"},"Review"),(0,i.kt)("ol",{start:24},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the NMS -> Devices -> Device Manager")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the device CHI-EDGE01"),(0,i.kt)("p",{parentName:"li"},"a. Click High Frequency Poller:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"1. Click on Add Object Poll Frequency\n\n    1. Device: CHI-EDGE01\n\n    2. Object: IP of device\n\n    3. Frequency: 10 \n")),(0,i.kt)("p",{parentName:"li"},"b. Click High Frequency Poller:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"1. Click on Add Object Poll Frequency\n\n    1. Device: CHI-AP01\n\n    2. Object: IP of device\n\n    3. Frequency: 10 \n")),(0,i.kt)("p",{parentName:"li"},"c. Click High Frequency Poller:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"1. Click on Add Object Poll Frequency\n\n    1. Device: CHI-AP02\n\n    2. Object: IP of device\n\n    3. Frequency: 10 \n")))),(0,i.kt)("ol",{start:26},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to Device Manager and edit CHI-EDGE01"),(0,i.kt)("p",{parentName:"li"},"a. Change IP to 1.1.0.0 to force it to go down"),(0,i.kt)("p",{parentName:"li"},"b. Click Save"))),(0,i.kt)("p",null,"NOTE: we need to wait to rediscover the device, but after a few minutes we should see an incident in ServiceNow (the image below has two alerts on CHI-EDGE01 due to some testing, in your instance there should be one alert only)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(2154).Z,width:"1910",height:"833"})),(0,i.kt)("p",null,"NOTE: If now we do the same with CHI-AP1, it should not generate any alert, because the workflow will suppress any alert for devices in CHI office"),(0,i.kt)("ol",{start:27},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to Device Manager and edit CHI-AP01"),(0,i.kt)("p",{parentName:"li"},"a. Change IP to 1.1.0.0 to force it to go down"),(0,i.kt)("p",{parentName:"li"},"b. Click Save"))),(0,i.kt)("p",null,"(the image below has two alerts on CHI-EDGE01 due to some testing, in your instance there should be one alert only)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(2154).Z,width:"1910",height:"833"})," "),(0,i.kt)("ol",{start:28},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit CHI-EDGE01 and CHI-AP01 to the correct IPs"),(0,i.kt)("p",{parentName:"li"},"a. CHI-EDGE01: 172.24.147.5"),(0,i.kt)("p",{parentName:"li"},"b. CHI-AP01: 172.24.148.4")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait a few minutes until the discovery of the devices has finished"))),(0,i.kt)("p",null,"NOTE: on the next step we choose a different device from CHI office to get the result faster, but we could choose CHI-AP1 again but we would need to make sure that the original alert has been clear in SevOne before changin the IP again"),(0,i.kt)("ol",{start:30},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to Device Manager and edit CHI-AP02 "),(0,i.kt)("p",{parentName:"li"},"a. Change IP to 1.1.0.0 to force it to go down"),(0,i.kt)("p",{parentName:"li"},"b. Click Save"))),(0,i.kt)("p",null,"NOTE: now the workflow won't suppress the alert because the internet router of that office is active"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(4570).Z,width:"1146",height:"127"})))}m.isMDXComponent=!0},3351:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img1-ee5e510d0e0ff3ba9618fef58df14677.png"},9707:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img10-89c185a32fceec77423101409846c6bb.png"},2154:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img11-6febea1d1cc054d5b66af71efb27c722.png"},4570:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img12-96d6508c7b2f1658b98a3fb5edef5781.png"},3125:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img2-54fcd11d99c94adb3ffd3fe568438977.png"},5616:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img3-c583a1fdab07a2418f799d5ed05ddcef.png"},8e3:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img4-7052bb8c7267cad152cba0466d87ba5f.png"},9907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img5-5d7e7904449eeb82f1bd442fba2f24d7.png"},8854:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img6-80162dbe220658b6601ff311c645e6f5.png"},969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img7-4b3f98028fb2d38d7313772bd9eb1b0b.png"},300:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img8-3f5a0993643c9e071e599a1c30a11510.png"},8673:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img9-5e7c10bba2a5e3f789cca561b8a8d88e.png"}}]);