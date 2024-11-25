"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[6790],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),b=o,k=d["".concat(s,".").concat(b)]||d[b]||m[b]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},97216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_position:2},i="Variables",l={unversionedId:"IBM SevOne Automated Network Observability/RNA Labs/rna-variables",id:"IBM SevOne Automated Network Observability/RNA Labs/rna-variables",title:"Variables",description:"Overview",source:"@site/docs/IBM SevOne Automated Network Observability/RNA Labs/rna-variables.md",sourceDirName:"IBM SevOne Automated Network Observability/RNA Labs",slug:"/IBM SevOne Automated Network Observability/RNA Labs/rna-variables",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/rna-variables",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"IBM Rapid Network Automation Primer",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/irna-primer"},next:{title:"Logic",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/rna-logic"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Steps:",id:"steps",level:2},{value:"1 Create an authentication to connect to the SevOne NMS",id:"1-create-an-authentication-to-connect-to-the-sevone-nms",level:3},{value:"2 Create a new workflow",id:"2-create-a-new-workflow",level:3},{value:"3 Check if the body that we have built works with the template available in the community to ingest data into SevOne",id:"3-check-if-the-body-that-we-have-built-works-with-the-template-available-in-the-community-to-ingest-data-into-sevone",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"variables"},"Variables"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In this lab you will build this $body structure using a no-code action block workflow:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Result",src:a(80609).Z,width:"1016",height:"832"})),(0,o.kt)("p",null,"You will then pass it to an IBM Community workflow that will import the data into SevOne."),(0,o.kt)("h2",{id:"steps"},"Steps:"),(0,o.kt)("h3",{id:"1-create-an-authentication-to-connect-to-the-sevone-nms"},"[1]"," Create an authentication to connect to the SevOne NMS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Protocol: http://\n- IP: 10.0.0.10\n- User: admin\n- Password: SevOne\n")),(0,o.kt)("h3",{id:"2-create-a-new-workflow"},"[2]"," Create a new workflow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add the following initial variable in the Start block:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Name: body\n- Type: object\n- Default value: {}\n- Out (selected)\n- Log (selected)\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Let\u2019s add the first \u2018key-value\u2019 pair to the empty variable \u2018body\u2019:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Add an action block: Common -> Assign\n- Variable: $body['device1']\n- Value: {}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: what we are doing here is creating a key-value pair as follows { 'device1': {} }. The key is 'device1'\xa0and the value is an empty object '{}', this way we are paving the way to add more key-value pairs inside that object.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:a(45006).Z,width:"1890",height:"894"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add another Assign action block:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Variable: $body['device1']['object1']\n- Value: ['Objecttype1', {}]\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: we have created a new key-value pair where the key is ",(0,o.kt)("em",{parentName:"p"},"object1")," and the value is an ",(0,o.kt)("em",{parentName:"p"},"array")," ([]) that contains two items: a ",(0,o.kt)("em",{parentName:"p"},"string")," ('Objecttype1') in the first position, and an ",(0,o.kt)("em",{parentName:"p"},"object")," ({}) in the second position.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Add another Assign action block:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Variable: $body['device1']['object1'][1]['timestamp1']\n- Value: {}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:a(40592).Z,width:"1804",height:"1042"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Add another Assign action block:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Variable: $body['device1']['object1'][1]['timestamp1']['timestamp']\n- Value: 1710950061 \n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: go to ",(0,o.kt)("a",{parentName:"p",href:"https://www.epochconverter.com/"},"https://www.epochconverter.com/")," and paste the value that\nappears there, mine was 1710950061 ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:a(55675).Z,width:"1624",height:"502"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Add another Assign action block:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Variable: $body['device1']['object1'][1]['timestamp1']['indicatorname']\n- Value: [1, 'Number', 'GAUGE\u2019]\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:a(61191).Z,width:"3596",height:"1392"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: In this step, we have not created a new nested key-value pair--we have added a new one to the key 'timestamp1', meaning that the value of the key 'timestamp1' will be an object with two key-value pairs inside:  \u201ctimestamp\u201d and \u201cindicatorname\u201d.\n",(0,o.kt)("img",{alt:"Image",src:a(5416).Z,width:"1484",height:"734"}))),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Click Save and click run, the output should look like this:\n",(0,o.kt)("img",{alt:"Image",src:a(47744).Z,width:"3516",height:"438"}))),(0,o.kt)("h3",{id:"3-check-if-the-body-that-we-have-built-works-with-the-template-available-in-the-community-to-ingest-data-into-sevone"},"[3]"," Check if the body that we have built works with the template available in the community to ingest data into SevOne"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the ",(0,o.kt)("em",{parentName:"p"},"SevOne Ingest Data - APIv3")," workflow from ",(0,o.kt)("a",{parentName:"p",href:"https://community.ibm.com/community/user/aiops/viewdocument/sevone-data-ingestion-api-v3?CommunityKey=fe9d91df-352c-4846-9060-189fd98d00ca&tab=librarydocuments"},"https://community.ibm.com/community/user/aiops/viewdocument/sevone-data-ingestion-api-v3?CommunityKey=fe9d91df-352c-4846-9060-189fd98d00ca&tab=librarydocuments")," and import it into RNA.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go back to your original workflow and add the newly downloaded workflow as an action block at the end of the workflow. "),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The imported workflow should be under ",(0,o.kt)("em",{parentName:"p"},"User")," in the API selection menu.")))),(0,o.kt)("p",null,"Add these settings to the downloaded workflow's action block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Content: $body\n- NMSCredentials: 'admin/SevOne'\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:a(48345).Z,width:"3440",height:"980"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save and click ",(0,o.kt)("em",{parentName:"p"},"Run"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the NMS (",(0,o.kt)("a",{parentName:"p",href:"https://10.0.0.10"},"https://10.0.0.10"),").  Login and navigate to ",(0,o.kt)("em",{parentName:"p"},"Devices")," > ",(0,o.kt)("em",{parentName:"p"},"Device Manager"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"There should be a new device called 'device1\u2019 that has one object 'object1\u2019 which has one indicator 'indicatorname'\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:a(4567).Z,width:"1598",height:"612"})))}m.isMDXComponent=!0},45006:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/body1-584dbd2c74d3c2d7a79e9a94ab1ac77a.png"},40592:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/body2-184c181d40ff7a8c1e9f5503820542f0.png"},55675:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/body3-4db961c9b92c8cc329579f8149a90f04.png"},5416:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/body4-7622544c6bb70c2499f82e5806d6c2a6.png"},61191:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/body4a-2b61f0164e88ccb87f4dae0083161544.png"},47744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/body5-841861f931b3abf237fa71d4b20bf521.png"},48345:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/body6-6aeda1bbb6405eb4cfae4c0b6d2d179e.png"},4567:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/device_mgr-be2dc797bd52c98a747ed9b4cccdfeba.png"},80609:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/variables.1-a6d0279a29c2fca7d1bbd6c9cdc47987.png"}}]);