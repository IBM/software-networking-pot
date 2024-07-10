"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[3501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),k=i,b=s["".concat(p,".").concat(k)]||s[k]||m[k]||r;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},26771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:3},o="Custom Object Grouping",l={unversionedId:"IBM SevOne Automated Network Observability/RNA Labs/rna_objectgrouping",id:"IBM SevOne Automated Network Observability/RNA Labs/rna_objectgrouping",title:"Custom Object Grouping",description:"Overview",source:"@site/docs/IBM SevOne Automated Network Observability/RNA Labs/rna_objectgrouping.md",sourceDirName:"IBM SevOne Automated Network Observability/RNA Labs",slug:"/IBM SevOne Automated Network Observability/RNA Labs/rna_objectgrouping",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/rna_objectgrouping",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custom Device Grouping",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/rna_grouping"},next:{title:"Democratize Network Automation",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/democratize"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Object Group Creation",id:"object-group-creation",level:2},{value:"Review",id:"review",level:2}],d={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-object-grouping"},"Custom Object Grouping"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this lab we will review how we can create custom groups in SevOne using RNA."),(0,i.kt)("p",null,"In this lab we will cover the following scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create new object groups and add the specified objects to the groups")),(0,i.kt)("p",null,"Even though these tasks can be completed manually in SevOne, if the number of groups is quite large (100s or even 1000s) it would take a very long time to finish this task, and there is a big change there would be errors or typos. Therefore automating these tasks with RNA helps us to reduce the amount of time required to create and maintain groups as well as make sure there aren't any human errors during the process."),(0,i.kt)("h2",{id:"object-group-creation"},"Object Group Creation"),(0,i.kt)("p",null,"If SevOne authentication has already been created, please skip this block of actions and continue to step 4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log into SANO automation platform")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Authentications")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click  Create Authentication"),(0,i.kt)("p",{parentName:"li"},"a. Name: SevOne"),(0,i.kt)("p",{parentName:"li"},"b. Service: SevOne"),(0,i.kt)("p",{parentName:"li"},"c. ",(0,i.kt)("strong",{parentName:"p"},"Protocol: http://")," (<-- important)"),(0,i.kt)("p",{parentName:"li"},"d. Host: 10.0.0.10"),(0,i.kt)("p",{parentName:"li"},"e. Username: admin"),(0,i.kt)("p",{parentName:"li"},"f. Password: SevOne"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(83351).Z,width:"579",height:"758"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Workflows"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click Create Workflow"),(0,i.kt)("p",{parentName:"li"},"a. Name: Object Group Creation"),(0,i.kt)("p",{parentName:"li"},"b. Layout type: Sequence"))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add variables to Start"),(0,i.kt)("p",{parentName:"li"},"a. NMSCredentials"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: NMSCredentials\n\nii. Type: Authentication -> SevOne\n\niii. Default Value: "admin/SevOne"\n\niv. In\n\nv. Required\n')),(0,i.kt)("p",{parentName:"li"},"b. list"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'i. Name: list\n\nii. Type: object\n\niii. Default Value: \n\n\n        {\n\n            "Critical Interfaces": {\n\n                "CHI-EDGE01": ["GigabitEthernet1/1/0/0", "GigabitEthernet1/1/0/10", "TenGigE0/1/1/0"],\n\n                "SIN-EDGE01": ["GigabitEthernet1/1/0/0", "GigabitEthernet1/1/0/10"],\n\n                "SFO-EDGE01": ["GigabitEthernet1/1/0/0","GigabitEthernet1/1/0/10","TenGigE0/1/1/0","TenGigE0/1/1/1","TenGigE0/1/1/2"]\n            },\n\n            "Internet Interfaces": {\n\n                "CHI-EDGE01": ["GigabitEthernet1/1/0/0", "GigabitEthernet1/1/0/10"],\n\n                "SIN-EDGE01": ["GigabitEthernet1/1/0/0"],\n\n                "SFO-EDGE01": ["GigabitEthernet1/1/0/0", "GigabitEthernet1/1/0/10"],\n\n                "NYC-EDGE01": ["GigabitEthernet1/1/0/0"],\n\n                "LON-EDGE01": ["ge-4/0/0", "ge-4/0/1"]\n\n            }\n\n        }\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    iv. In\n\n    v. Required\n\nb. Object_Class\n\n    i. Name: Object_Class\n\n    ii. Type: String\n\n    iii. Default Value: "Interface"\n\n    iv. In\n\n    v. Required\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(55444).Z,width:"1002",height:"647"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change to Flow View")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the left hand side panel, search for SevOne, Click on Common -> Object")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select the "Object Keys" building block and drag and drop it after the Start '),(0,i.kt)("p",{parentName:"li"},"a. Change name to Object_Groups"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Object: OneOf -> Object\n\n    1. Click Ok\n\n    2. Click on the pencil icon\n\n    3. Type $list\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(65275).Z,width:"1513",height:"498"})),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building bloc, SevOne -> Rest v2 -> Object Group -> Find Object Group"),(0,i.kt)("p",{parentName:"li"},"a. Change name to SevOne_Class"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. authKey: $NMSCredentials\n\nii. filterDto:\n\n    1. name: $Object_Class\n\n    2. parentIds: [ 0 ]\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> ForEach"),(0,i.kt)("p",{parentName:"li"},"a. Change name to ForEach_Group"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. list: $Object_Groups.result\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Inside the loop, add a new building block, SevOne -> Rest v2 -> Object Group -> Find Object Group"),(0,i.kt)("p",{parentName:"li"},"a. Change name to SevOne_Find_Group"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. authKey: $NMSCredentials\n\nii. filterDto:\n\n    1. name: $ForEach_Group.item\n\n    2. parentIds: [ $SevOne_Class.result.content[0].id ]\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> Array -> ArraySize"),(0,i.kt)("p",{parentName:"li"},"a. Change name to Groups_Found"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. array: $SevOne_Find_Group.result.content\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(77309).Z,width:"1483",height:"711"})),(0,i.kt)("ol",{start:14},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> If"),(0,i.kt)("p",{parentName:"li"},"a. Change name to If_Group_Found"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. condition: $Groups_Found.result > 0 \n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the TRUE branch of the IF, add a new building block, Common -> Assign"),(0,i.kt)("p",{parentName:"li"},"a. Change name to Assign_groupid"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. variable: $groupid\n\nii. value: $SevOne_Find_Group.result.content[0].id\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the FALSE branch of the IF, add a new building block, SeVOne -> REST v3 -> Object Groups -> Object Groups Create Object Group:"),(0,i.kt)("p",{parentName:"li"},"a. Change name to SevOne_Create_Group"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. authKey: $NMSCredentials\n\nii. body:\n        \n        1. name: $ForEach_Group.item\n\n        2. parentId: $SevOne_Class.result.content[0].id\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, add a new building block, Common -> Assign"),(0,i.kt)("p",{parentName:"li"},"a. Change name to Assign_groupid2"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. variable: $groupid\n\nii. value: $SevOne_Create_Group.result.id\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(92370).Z,width:"1492",height:"752"})),(0,i.kt)("ol",{start:18},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the loop, add a new building block, Common -> Object -> Object Keys"),(0,i.kt)("p",{parentName:"li"},"a. Change name to Devices"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. Object: OneOf -> Object\n\n    1. Click Ok\n\n    2. Click on the pencil icon\n\n    3. Type $list[$ForEach_Group.item]\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> ForEach"),(0,i.kt)("p",{parentName:"li"},"a. Change name to ForEach_Device"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. list: $Devices.result\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Inside the loop, add a new building block, Common -> Assign"),(0,i.kt)("p",{parentName:"li"},"a. Change name to Assign_Interfaces"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. variable: $interfaces\n\nii. value: $list[$ForEach_Group.item][$ForEach_Device.item]\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, SeVOne -> REST v3 -> Metadata -> Metadata Devices (POST)"),(0,i.kt)("p",{parentName:"li"},"a. Change name to SevOne_Find_Device"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. authKey: $NMSCredentials\n\nii. body:\n        \n        1. name: \n        \n                a. value: $ForEach_Device.item\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a new building block, Common -> ForEach"),(0,i.kt)("p",{parentName:"li"},"a. Change name to ForEach_Interface"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. list: $interfaces\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Inside the loop, add a new building block, SeVOne -> REST v3 -> Metadata -> Metadata Objects (POST)"),(0,i.kt)("p",{parentName:"li"},"a. Change name to SevOne_Find_Interface"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. authKey: $NMSCredentials\n\nii. body:\n\n        1. deviceIds: [ $SevOne_Find_Device.result.devices[0].id ]\n        \n        2. name: \n        \n                a. value: $ForEach_Interface.item\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Inside the loop, add a new building block, SeVOne -> REST v3 -> Object Groups -> Object Group Add Object to Object Group"),(0,i.kt)("p",{parentName:"li"},"a. Change name to SevOne_Add_Object"),(0,i.kt)("p",{parentName:"li"},"b. Click on the building block to open the right side panel and complete the following fields"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"i. authKey: $NMSCredentials\n\nii. id: $groupid\n\niii. body:\n\n        1. deviceId: $SevOne_Find_Device.result.devices[0].id\n\n        2. objectId: $SevOne_Find_Interface.result.objects[0].id\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(97113).Z,width:"1497",height:"772"})),(0,i.kt)("h2",{id:"review"},"Review"),(0,i.kt)("ol",{start:26},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log into the NMS")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Devices -> Grouping -> Object Groups")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Expand Interface, click in Critical Interfaces and Internet Interfaces, to see if there are objects populated"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(35668).Z,width:"918",height:"635"})))}m.isMDXComponent=!0},83351:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img1-ee5e510d0e0ff3ba9618fef58df14677.png"},55444:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img1-7793baf0be664381146263e2d15e5a53.png"},65275:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img2-cf5c37564a1335fc2e014abe11bcffb8.png"},77309:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img3-fb9271cc52cbb2ac90d5ddfa2d9247b3.png"},92370:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img4-81cd96d0b76e46ce7aa985ff66ff5bde.png"},97113:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img5-8c7b9ae65bd9e0239b8a82788fba7c57.png"},35668:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img6-4710bb6ea5de296f0fa0d46514a39619.png"}}]);