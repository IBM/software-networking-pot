"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[5590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,h=m["".concat(l,".").concat(k)]||m[k]||d[k]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},91022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:4},o="Geographic Steering",p={unversionedId:"NS1 PoT/Geo-steering",id:"NS1 PoT/Geo-steering",title:"Geographic Steering",description:"Overview",source:"@site/docs/NS1 PoT/4 - Geo-steering.md",sourceDirName:"NS1 PoT",slug:"/NS1 PoT/Geo-steering",permalink:"/software-networking-pot/docs/NS1 PoT/Geo-steering",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"DNS Failover",permalink:"/software-networking-pot/docs/NS1 PoT/failover"},next:{title:"Instana - NS1 Integration",permalink:"/software-networking-pot/docs/NS1 PoT/instana"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Geographic Steering",id:"geographic-steering-1",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geographic-steering"},"Geographic Steering"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this lab we will test NS1 ability to peformance geographic steering."),(0,r.kt)("p",null,"In order to provide better performance and resiliency, it is recommended to provide the closest answer possible based on the location of the user doing the DNS query. If someone is in the US, it would be better to reply to their query with an endpoint in the US, rather than in Asia (for example), and vice versa."),(0,r.kt)("p",null,"NS1 can provide different answers base on the geolocation of the querier. In this lab we will configure a DNS record that provides different answers for in China and outside China, improving the performance of the end users avoiding the great firewall of China (one of the most important bottlenecks in terms of performance)."),(0,r.kt)("h2",{id:"geographic-steering-1"},"Geographic Steering"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: If there is any configuration from another lab, please delete all those configurations as some of them may impact this lab. This includes DNS records, filter chains, monitors, etc...")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into ",(0,r.kt)("a",{parentName:"p",href:"https://my.nsone.net/"},"https://my.nsone.net/")," with your username and password")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the DNS tab"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM NS1",src:n(25459).Z,width:"1750",height:"896"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the + icon on the top right side"),(0,r.kt)("p",{parentName:"li"},"a. Domain name: yourname.example (raulg.example)"),(0,r.kt)("p",{parentName:"li"},"b. leave all the other settings as is"),(0,r.kt)("p",{parentName:"li"},"c. Click 'Save Zone'"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM NS1",src:n(23870).Z,width:"1799",height:"950"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the '1 Record' box next to the zone just created")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Add record'"),(0,r.kt)("p",{parentName:"li"},"a. Record Type: CNAME"),(0,r.kt)("p",{parentName:"li"},"b. name: geofence"),(0,r.kt)("p",{parentName:"li"},"c. TTL: 60 ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Save Record'"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM NS1",src:n(469).Z,width:"958",height:"627"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on '0 answers'"),(0,r.kt)("p",{parentName:"li"},"a. Click 'Add answer group'"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. Name: China\n\nii. Save Answer group\n")),(0,r.kt)("p",{parentName:"li"},"b. Click '+ Add answer to Group'"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. china-endpoint\n")),(0,r.kt)("p",{parentName:"li"},"c. Click 'Add answer group'"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. Name: Rest-of-world\n\nii. Save Answer group\n")),(0,r.kt)("p",{parentName:"li"},"d. Click '+ Add answer to Group'"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. london-endpoint\n")),(0,r.kt)("p",{parentName:"li"},"e. Click '+ Add answer to Group'"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. new-york-endpoint\n")),(0,r.kt)("p",{parentName:"li"},"f. Click 'Save record'"))),(0,r.kt)("p",null,"NOTE: for mac users, please use the commands provided. For windows users, either download DIG NSLOOKUP or use the online service ",(0,r.kt)("a",{parentName:"p",href:"https://www.diggui.com/"},"https://www.diggui.com/")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test the results with command:"),(0,r.kt)("p",{parentName:"li"},"a. dig @dns1.p04.nsone.net geofence.YOURNAME.example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. dig @dns1.p04.nsone.net geofence.raulg.example\n")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM NS1",src:n(36228).Z,width:"1265",height:"292"}),"\n",(0,r.kt)("strong",{parentName:"p"},"For MAC users")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM NS1",src:n(31770).Z,width:"1022",height:"945"}),"\n",(0,r.kt)("strong",{parentName:"p"},"For Windows users")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Create Filter Chain'"),(0,r.kt)("p",{parentName:"li"},"a. Click the '+' icon next to the 'Geofence Country' filter"),(0,r.kt)("p",{parentName:"li"},"a. Click the '+' icon next to the 'Up' filter"),(0,r.kt)("p",{parentName:"li"},"b. Click the '+' icon next to the 'Shuffle' filter"),(0,r.kt)("p",{parentName:"li"},"c. Click the '+' icon next to the 'Select First N' filter"),(0,r.kt)("p",{parentName:"li"},"d. Click 'Save Filter Chain'"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM NS1",src:n(12287).Z,width:"1481",height:"840"})),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's add metadata values to the answers, click in the middle of the 'Geofence Country' filter to highlight the up metadata on the answers"),(0,r.kt)("p",{parentName:"li"},"a. Click the 'Country' metadata under the 'china-endpoint' answer"),(0,r.kt)("p",{parentName:"li"},"b. Select Asia -> Eastern Asia -> China"),(0,r.kt)("p",{parentName:"li"},"c. Click 'OK'")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Save record'"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM NS1",src:n(82405).Z,width:"1545",height:"587"})),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click in the middle of 'Up' filter and change all metadata values of 'china-endpoint', 'london-endpoint' and 'new-york-endpoint' to up"),(0,r.kt)("p",{parentName:"li"},"a. Click on 'up: unset'"),(0,r.kt)("p",{parentName:"li"},"b. Click 'Choose up'"),(0,r.kt)("p",{parentName:"li"},"c. Select 'UP'"),(0,r.kt)("p",{parentName:"li"},"d. Click 'OK'"),(0,r.kt)("p",{parentName:"li"},"e. Repeat the same operation for the three answers.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Save record'"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM NS1",src:n(71069).Z,width:"1530",height:"655"})),(0,r.kt)("ol",{start:13},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If test again the results of the query, if we are outside China we should receive only one result, either 'london-endpoint' or 'new-york-endpoint' with a 50% chance. If we are in China, we would always receive the same result (china-endpoint)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test the results with command:"),(0,r.kt)("p",{parentName:"li"},"a. dig @dns1.p04.nsone.net geofence.YOURNAME.example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"i. dig @dns1.p04.nsone.net geofence.raulg.example\n")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM NS1",src:n(93447).Z,width:"1031",height:"947"})),(0,r.kt)("ol",{start:15},(0,r.kt)("li",{parentName:"ol"},"If we are not testing from China, we can change the country on 'china-endpoint' to the country were you are (or to US if you are testing from ",(0,r.kt)("a",{parentName:"li",href:"https://www.diggui.com/"},"https://www.diggui.com/"),") and test again.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM NS1",src:n(75106).Z,width:"1506",height:"662"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Changed country to US")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IBM NS1",src:n(32507).Z,width:"1031",height:"947"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Result test from US")))}d.isMDXComponent=!0},25459:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img1-db53d338d458d0c484b313caeff624e5.png"},23870:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img2-e6d5b28325e17adad7cf55b6ca17a666.png"},469:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img1-82e5a00d41693fae4615113fa347784a.png"},36228:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img2-e54e6255951b1418397704b19ef76168.png"},31770:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img3-28759241efb999daa5825cb3cbe81a77.png"},12287:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img4-5d1e7a47024ace26f623eaeec02a3c42.png"},82405:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img5-61e7d0290aa53f1b5698953ebc189632.png"},71069:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img6-d3fb8018e40f041101a450546fd05ca3.png"},93447:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img7-e83bb344c13295d207e9f1ad77268a2b.png"},75106:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img8-32d3bb045d544c17e4d2a6fe4110f74d.png"},32507:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Img9-1110b5ae9e71a0459b0e6f2f5846ac0e.png"}}]);