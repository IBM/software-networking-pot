"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[509],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},A="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),A=u(a),c=l,k=A["".concat(s,".").concat(c)]||A[c]||d[c]||i;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[A]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const i={sidebar_position:1},r="Automate HFP",o={unversionedId:"IBM SevOne Automated Network Observability/RNA Labs/RNA_hfp",id:"IBM SevOne Automated Network Observability/RNA Labs/RNA_hfp",title:"Automate HFP",description:"Overview",source:"@site/docs/IBM SevOne Automated Network Observability/RNA Labs/RNA_hfp.md",sourceDirName:"IBM SevOne Automated Network Observability/RNA Labs",slug:"/IBM SevOne Automated Network Observability/RNA Labs/RNA_hfp",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/RNA_hfp",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"RNA Labs",permalink:"/software-networking-pot/docs/category/rna-labs"},next:{title:"Custom Device Grouping",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/RNA Labs/rna_grouping"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Review",id:"review",level:2}],p={toc:u},A="wrapper";function d(e){let{components:t,...i}=e;return(0,l.kt)(A,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"automate-hfp"},"Automate HFP"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"In this lab we will learn how we can use SevOne automation capabilities to automate actions in SevOne without the need of coding."),(0,l.kt)("p",null,"In this lab we will configure RNA to change the polling frequency of an object in SevOne when an alert is triggered on that object. For example, this could be used when SevOne detects that a device stopped replying to ping (ICMP). As the normal polling frequency is 5 minutes, that would mean that when the device comes back up (starts replying to ICMP again), it might take up to 5 minutes (polling frequency) for SevOne to detect it. "),(0,l.kt)("p",null,"Therefore, configuring the following workflow, we would be able to change the polling frequency to 10 seconds (instead of 5 minutes), when we detect that the device went down, in order to detect when the device comes back up faster (up to 10 seconds, compared with the 5 minutes by default). "),(0,l.kt)("p",null,"This configuration can be used in multiple situations, not only on ICMP, for example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When errors appear on an interface"),(0,l.kt)("li",{parentName:"ul"},"When traffic is higher than 90% so we get a more clear view of the traffic spikes"),(0,l.kt)("li",{parentName:"ul"},"When CPU is high, so we get a closer look when the CPU becomes less busy"),(0,l.kt)("li",{parentName:"ul"},"When firewall rule hit counts goes abnormaly high, to understand if this is some kind of attack")),(0,l.kt)("h1",{id:"high-frequency-polling"},"High Frequency Polling"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Log into Automation platform"),(0,l.kt)("li",{parentName:"ol"},"Go to Authentications"),(0,l.kt)("li",{parentName:"ol"},"Click  Create Authentication",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a. Name: SevOne"),(0,l.kt)("li",{parentName:"ul"},"b. Service: SevOne"),(0,l.kt)("li",{parentName:"ul"},"c. ",(0,l.kt)("strong",{parentName:"li"},"Protocol: http://")," (<-- important)"),(0,l.kt)("li",{parentName:"ul"},"d. Host: 10.0.0.10"),(0,l.kt)("li",{parentName:"ul"},"e. Username: admin"),(0,l.kt)("li",{parentName:"ul"},"f. Password: SevOne")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(6694).Z,width:"602",height:"64"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"Workflows")),(0,l.kt)("li",{parentName:"ol"},"Click Create Workflow",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a. Name: Your Name \u2013 HFP"),(0,l.kt)("li",{parentName:"ul"},"b. Layout type: Sequence")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(1646).Z,width:"602",height:"328"})),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add variables to Start"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a. Name: deviceid -> Type: Number -> Default Value: 1 -> In -> Required"),(0,l.kt)("li",{parentName:"ul"},"b. Name: objectid -> Type: Number -> Default Value: 1  -> In -> Required"),(0,l.kt)("li",{parentName:"ul"},"c. Name: frequency -> Type: Number -> Default Value: 20  -> In Required   "),(0,l.kt)("li",{parentName:"ul"},'d. Name: action -> Type: String -> Default Value: "Set"  -> In -> Required'),(0,l.kt)("li",{parentName:"ul"},'e. Name: plugin -> Type: String -> Default Value: "ICMP\u201c -> In -> Required'),(0,l.kt)("li",{parentName:"ul"},"f. Name: NMSCredentials -> Type: Authentication (SevOne) -> Default Value: \u201cadmin/SevOne\u201c -> In ")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(3464).Z,width:"1287",height:"582"})),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Change view to Flow ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(3266).Z,width:"343",height:"78"})),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the left hand side panel, search for SevOne -> REST v3 -> Polling -> Polling Remove HFP Object"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a. Drag and drop that building block to the first position in the workflow after Start"),(0,l.kt)("li",{parentName:"ul"},"b. Change Name of building block to SevOne_Delete_HFP"),(0,l.kt)("li",{parentName:"ul"},"c. Complete the details in Object Editor"),(0,l.kt)("li",{parentName:"ul"},"d. AuthKey: $NMSCredentials "),(0,l.kt)("li",{parentName:"ul"},"e. deviceId: $deviceid"),(0,l.kt)("li",{parentName:"ul"},"f. objectId: $objectid")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(394).Z,width:"602",height:"145"})),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"On the left hand side panel, go to Common -> Assign and click on the star icon to make it a favourite")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(9008).Z,width:"376",height:"193"})),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},"Click on the + icon under SevOne_Delete_HFP and select Assign",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a. Variable: $result"),(0,l.kt)("li",{parentName:"ul"},"b. $value: $SevOne_Delete_HFP.result")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(6545).Z,width:"602",height:"252"})),(0,l.kt)("ol",{start:11},(0,l.kt)("li",{parentName:"ol"},"On the left hand side panel, go to Common -> If and move it under the last building block ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'a. Condition-> $action == "Set" '),(0,l.kt)("li",{parentName:"ul"},"b. On the TRUE branch add building block SevOne -> REST v3 -> Polling -> Polling Add Hfp Object    ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"i. Name of the building block: SevOne_Add_HFP    "),(0,l.kt)("li",{parentName:"ul"},"ii. authKey: $NMSCredentials",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Body:")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a. DeviceId: $deviceid"),(0,l.kt)("li",{parentName:"ul"},"b. Frequency: $frequency"),(0,l.kt)("li",{parentName:"ul"},"c. ObjectId: $objectid"),(0,l.kt)("li",{parentName:"ul"},"d. pluginString: $plugin")))))))))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(6545).Z,width:"602",height:"252"})),(0,l.kt)("ol",{start:12},(0,l.kt)("li",{parentName:"ol"},"Click on the + icon after the SevOne_Add_HFP building block statement and add \u2018Assign\u2019",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a. Variable: $result    "),(0,l.kt)("li",{parentName:"ul"},"b. $value: $SevOne_Add_HFP.result"))),(0,l.kt)("li",{parentName:"ol"},"Delete any other building block after the one you just created (There might be another Assign building block with \u2018Hello World\u2019 that we don\u2019t know, so please remove it)")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(3408).Z,width:"602",height:"346"})),(0,l.kt)("ol",{start:14},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Save workflow")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to APIs")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on Create API"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a. Name: hfp    "),(0,l.kt)("li",{parentName:"ul"},"b. Authentications",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"i. Authentication: API Keys"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click \u2018Add API Key\u2019")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Name: hfpkey"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"- ii. Copy the api key for later use\n       \n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"c. Click \u2018Create\u2019")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(2720).Z,width:"602",height:"435"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- d. In workflow deployments, click \u2018Create\u2019\n    - i. Workflow -> Choose the workflow you created clicking on the folder icon on the top right side of that field\n    - ii. Stage - > Click on + icon -> leave everything as it is, click Save\n    \n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(3194).Z,width:"316",height:"315"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    - iii. Endpoint -> Click on + icon \n    \n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Change Path to /SevOneHFP  "),(0,l.kt)("li",{parentName:"ol"},"Method: POST"),(0,l.kt)("li",{parentName:"ol"},"Click \u2018Save\u2019\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(5619).Z,width:"227",height:"145"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- e. Click **Deploy**  \n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(4224).Z,width:"602",height:"115"})),(0,l.kt)("h2",{id:"review"},"Review"),(0,l.kt)("p",null,"To make sure this is working as expected, we have a few ways to test it. The first thing we will do is click on the Swagger UI available on the current page. "),(0,l.kt)("p",null,"To test it, first we will configure the authorization by clicking on Authorize and pasting the Key that we saved before."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(3880).Z,width:"602",height:"259"})),(0,l.kt)("p",null,"Click \u2018Close\u2019\nNow we can test if this API is working, for example test the following body by clicking on Try it Out"),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"deviceid"),": 1,\n",(0,l.kt)("strong",{parentName:"p"},"objectid"),": 1,\n",(0,l.kt)("strong",{parentName:"p"},"frequency"),": 10,\n",(0,l.kt)("strong",{parentName:"p"},"action"),": Set,\n",(0,l.kt)("strong",{parentName:"p"},"plugin"),": ICMP"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(609).Z,width:"602",height:"302"})),(0,l.kt)("p",null,"The outcome of this operation should be successful with a 200 code response."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(6360).Z,width:"602",height:"259"})),(0,l.kt)("p",null,'Now if you go back to the NMS, find the device "NMS" (127.0.0.1), edit the device, go to High Frequency Poller, you should see the object IP of Device being monitored every 10 seconds.'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:a(4746).Z,width:"602",height:"58"})))}d.isMDXComponent=!0},6694:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 1-b6f294cf6b301abaea0a460e35c85704.png"},2720:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 10-c23fdd885010c303cd7f683163675125.png"},3194:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 11-3c56136e46564bcdd5f98072ddb9c643.png"},5619:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAACRCAYAAAAxZA+GAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABJnSURBVHhe7Z35V1VV/8f5m2qt+q21qh+qVZbftNIc+upjguaQWlqP9iihhpiRE0KCIzlrmWMC4kgIOaEM4oioKTjjDPJ57mt7j8+NLnBwAfcg79da78UZ9hk4Z7/3Z59z994nbtOmTVZSUmJnzpyxU6dOSZIUI8UdPXrUhBCxJ+7kyZPhSSFELIk7ceJEeFIIEUtkRiECgswoRECQGYUICDKjEAFBZhQiILTZjJWVlbZz5067detWeEnbefjwoT1+/Dg890/Yd2Fhoe3Zs8d2795tx44ds8bGxvDa6Jw7d86qqqrCc61TXl5uFy9eDM/9k/r6+laPKUR70iYzLlq0yF577TV7+eWXrV+/fs4AHmRej4aGhvDUEyLXYa5ly5bZgwcP3HzTtHDgwAF75ZVX7NVXX3V/v/zyy7/toymY5scff3TyiGb2R48ehafMfvvtNzt48GB47sk+PNasWWM///xziwWGEO2NbzOWlZVZjx497Pfff3cRaOrUqUbrncOHD9uCBQtc5r106ZJt3rzZ5s6d65rXYTjSf//997Zhwwa7ceOGjRs3zt5++223PxoczJ8/321DtPTIycmxjz76yEVE0hHBiJarVq2y5cuX27x586yiosKlpTlfenq6ffLJJ5aSkmKlpaWWlZVlaWlptnbtWmdi9s0050zEhdWrV9sff/xhf/75py1dutQyMzNty5Ytdu3aNevbt687xwsXLri0QviFAryuri48Z3b37t2/5e2W8G1GzDR+/Pjw3P8gWr755pu2a9cuF1F69+7tDPfpp5860/7666/OcO+8847t37/fkpOTLT4+3oqLi+2zzz6z0aNH2/vvv+9M5UH19KWXXnL7+uCDDyw7O9suX77spqdMmWITJkywpKQkF9kwDpGWgoJCYMWKFW565cqV9vHHH9v27dudEYcNG+bMPGjQIDt+/LiNHTvWbbdw4UK338WLF1uvXr1c9XXkyJE2ZMgQu379eviMhPAHxiOAUGusra21I0eO2O3bt8NrW8a3GYkagwcPflpdJApStfvpp5+cMYDI9OGHHzpTTJw40UU+MvysWbPsvffec1GIyMZ6DPHWW2/Zd999Z998840zjEd+fr4zFAZhe7YjOiYkJLjt8vLy3P6JgGwLRF+OjwmJgMBxp0+f7sxLQQFfffWVi4IsIyJSmKSmprp1mBIzss3s2bPdMiHaCjVCAg+B4ObNm+GlrePbjDU1Na7qOGrUKJfpiWYcMCMjw77++muXBvMQUTgJlJuba++++64zTc+ePV3Ew1wYgqg2YMAAW7JkiTMiJvOgmvr666+77dgnURNjE9WIqDzvEdlIRwGBWdnXjBkznBmpslJdJQKzbwqMSZMmuWr10KFDraCgwEaMGOGiIudPgXDv3j0Xvdlu2rRpbv9UMYRoCwSoK1euuHzKIxERMtp7kWi06QUOhiETE+XmzJlj9+/ft61bt7roApQCZGxMQ3Tj+SsxMdFlbP5iAiIP+8BIvJXFvGT+yCohz4r9+/d3kYqqI1GQf4poxdtc/kmqvtTPWTZ8+HBX3f3ll1/csyDbcUz2i8kw1cyZM91Lp/Xr17tj8NxJgbFt2za3DaXZ5MmT3XMihQxV3MgXPEL4gWoqgYN3HNQiya9+f3lokxm7ArxMogoqRFfjuTMjb3GJrEJ0NZ47MwrRVZEZhQgIMqMQAUFmFCIgyIxCBASZUYiAIDMKERDiaP5FC5U7d+5IkhRDxdHCnGZlkiTFVs6MQojYIzMKERBkRiECgswoRECQGYUICDKjEAFBZhQiIMiMQgQEmVGIgCAzChEQfJuR9quMnNZ0pCua8XhD9Xswz8CtfkdSFs8fDFnIyNpe3mD0v2iffYj85EJTvKEySUe+a5rPnjd8m5GRkRkdnLFPz58/b1evXnVD7DMkI2NEnjp16un3KljPsIkMdCy6J+SFHTt2uLzBkJ6M5s7nHRgZniE8GQ6TT0MwZCdDfJKeYQ1Ji4kZJpNvrgDr161b59Y/z8R536xoDS4cgwdzgfbu3esGI963b5/7TgaGZPxUDApcUEZpa6nUE883mItxcckrhw4dcgU5o/Yx3i7fX6GwZvxbxrFlvTfoL/msqKjIfS4CwwIR9ezZs3/7hsXziO/+jERGulsxQCsXjotJSYU5Wc6FjvwqlejeULUsKSlxHxeioKZGhcmIhH/99ZebplbGwNheQY/h+EoZBmY5hX13wrcZqVpQQiGG0+dCEwkxKdUPqhJ+P/Ahnn94l0CeQTwvklfII5iTxxiMR+2JZaznWyoYkaHxWU46prsT6ukvRECQGYUICHGVlTKjEB2J34/Rx5WWlocnW6eh4fHT50ZJIj+0xOPHjfbwYX2U7bqPHj0Kqd7nJ+EOHGj9IzEN7qI+evp5NUlC5Afv47nR4Ket7p5n+P/5qc/7Db4l4oqKWjdjyIuu9YO3c0lC5IeWWsWQCaNt193EdSJKtoYvMwJN22RGKVIyoz91ihm5EV41paUL750I6aOtR2zPMZjmr9eulW29Y3jrpWCoLWb00nEvmW96T7nP/DYZ2WqrpfzSldShZuQiM007Q1rfbNy40f2oywFJx0UkDX9ZRjMn0vDjLhebNMgzIMtYx/64SbTQoF0r29AKg2/xM00LH+9mSrGXXzOShnu6YcMG19oGaH1DKy5+/Od5ioYkNJ+jJRdN5GiRQx7oCobkHMnH3ryXt735DjUjB6+qqnIXc+XKle4C0wqHUZFpXU+rCtJiMsy0adMm93fLli3OdDU1NVZbW+tOmPTskzaytHOlxYbXBnbNmjWupwg3MS8vz32DH9NH/uNS7NQWM9L8jWZxtEvdtm2bK1xpe8o0f5nHiLTOWbp0qUtHPorM1EEU50feJx8TKBDnzTLv3DvUjJgsNzfXmZDW9DSJoxRLTk62yZMnu4tZXl7uGvsuX778aY8OmjilpaXZ/PnzbeHCha40TExMtKSkJNcUasqUKbZ48WL74YcfrKCgwFasWOFMiyk5HjcIM8uMwZBfM3K/MByFMZ0KaCzu9cDgvmNIoiFNLMnMREjaQHeFWhBVa/Lq1KlTXc2uurravv32W9frhHWk6TAz8pc2g0QqjMHB6B5DlMRUTGM6Li6lHQaixOPGsA1GpZU+RszMzLSUlBSXlptC5MO0tPBnnv1hdIyLMSk1KQgiL4YUO7XFjDQUT01NNVp8eY3GyaB0s2Ka+0rBTiYmn/D40xUKXf5//qanp1tCQoLFx8dbVlaWW+6t6zAz4navVT1VSqqQXMTTp0+7C0urfKqSTFO60QAYo2ZnZztTUvpRKnJTeBaktOTmsD03gtIQM3MzEOakVOXYXaGk7E7ya0b+8ozIow33k3xDIU2tibzk9X/l8YTHEmpcvB/wMnPQxXlSmGRkZLiaHcaLPPcOMyMHxUiEZA7kGY7lPAuyjjozPThYz0mwHgNygt4Xd7xe4Fx81pGeZWzjTUfOc2ympeDIrxmRd9+ZJq9gSPIKz1qkY5q8QH7hfntpu4q4Dpw7ivy/UYeZkZ1HlnhEKy4u86RhnuWcnJeO9d5JNhXrvG0Q6b1tI+f5KwVLbTFj5P1E5BXyhHdvI/NR07RdRc2dd4eaUZJQW8zYndWuZmxoaAxdWDWHk/4u8gOFdHOoRvNEXCfetbSGLzOGnrlDhnwyCpwXiiWJ/NBSJvOqodG27U5qqcCKxHc1VQjRsciMQgQEmVGIgBBXckzD+wsRBDQglRABQWYUIiDIjEIEBJlRiIDg24x0m/K+q+HnR0waAEfCNvwASgNgIcQ/8W1G+h/SlYmOlAyVQG8NtqVHBt2i6NtI30Pm6ViM6EpF30W6yNDbn32wjG29Po50o6JrjRDdHd9mxGi0s2MsE4ZPYLgNRN9D+iHSJ5GuU5iPCOrJ+9QXfdU4Fj326dtGtyk6EdOfjSE5aL8nRHfGtxkxEMbyzIX4WhB90Oihz/g1TNPpmEiHQYmiGA0jY0zWYVqiIZGR4RXoREpklRlFd8f3l4vp6IvBvK8RU1XFyIz5gaF4FmRfjFlDvzSeGRlOgXFwWEeHUUxKvzXSU1Ulnfcc6adVuxDPM3E823UUelkjhH/004YQAUFmFCIg+DYjo3p545RIkuRffobcAN9mZKfeEAKSJPkXvvE17IZfM2pAKkl6NuEbXwNSyYyS1LGSGSUpIJIZJSkgkhklKSCSGSUpIJIZJSkgkhklKSCSGSUpIJIZJSkgkhklKSCSGSUpIJIZJSkgkhklKSCSGSUpIJIZJSkgkhklKSCSGSUpIJIZJSkgkhklKSCSGSUpIJIZJSkgkhklKSCSGSUpIJIZJSkgkhklKSCSGSUpIGp3M+pbG5L0bOKDwHw4qjV8mxFwtyRJbZPfr3K3yYxCiI5DZhQiIMRVVFSEJ4UQsSSurKwsPCmEiCUyoxABQWYUIiDIjEIEBJlRiIAQV1paavX19ZIkxVjOjGrmJkmxl6qpQgQEmVGIgCAzChEQZEYhAoLMKERAkBlFu0G/vWj9+TpDfjrvNjQ0Wn39Y6tv6CS5Y7V+Xh5x5eXl4Ukhnh2GZamrq7Pbt2/HRHfu3HGjUUQDEx44VGvpy8otfWnZk7+doaXllrakzHL3XrT7D9px2A0hWuLmzZvOkLGCoS04h2gRsqb2vg0dt8/eH5xrHw7d2anq/a8865uQb0fLrobPpnlkRtEuEJ1oRRIrKAgwY7RzqL54xxni42H51v+zXZ2unv+fawXFl8Jn0zwyo2gXgmDGGzduRD2HC5fuOFM0Z8YPPs0LGSbHRc6+Pg3LvnoPybN+w6Ovj1SvwXkhM14Mn03zyIyiXWjJjESszMxMW7RokV2/fj28tO1gtiNHjrimY015FjNipD7x+fbv6cW2ZHWlzV543IaM2+vMifqEoqlX3SQt0ZXlzA8avccmJf9pA0fsdvMs7zc8upFlRtGpNGdGls+cOdMSEhKsb9++Nn/+fLe8oKDADh8+7N7AVlZWWmFhoXlv9qurqy0/P/+p6YqLi+3y5ctWUlJiI0eOtKqqKrc8kmcxY9+EnTYxZKiSsmu2Y9cFOx+qzi5eVWlfTS22GXOP2uffFDrD/WfGIWe0EV8XWDLLJxXanMxSq75016bMPGRj/lNoU1OP2MCRu6NGX5lRdCrNmXHv3r32+eefP12HkbZv3259+vRx2rNnz1OjDhkyxM1/8cUXNnDgQMvOznbq0aOHxcfH2+bNm23ixInOrE1pqxmfRMWdtnlHlRUfqXXV1GET9tvX04rteMUNO3z8mm3cXmWlJ27YidO3bMWG07Ylp9pNHzhUYzv3XbLaa/ft9/wLdrT0up08e8vW/HbmH8dBMqPoVJoz4+7du23s2LFPxw6tqamxjRs3OgO++OKLtnLlShs1apRt27bNpk+fbuPHj7ekpCRnrLNnz1qvXr3shRdesDfeeMPmzp1rkydPblczbsk5b0Uhc733SY4NHrPHRcVz1XWW9fMJy9lz0W7XPbIzVXVWeLDGpT1TddvOnK+z9VvO2ZHjV217frXV3a13yzE11Veqs95xkMwoOpXmzMjzIuYiOhL5srKyLDEx0Zmsf//+lpGR4aqeVFunTZtmaWlpNmbMGKfVq1dbcnKyDRgwwFJTUy0nJ8ftpz2rqZNnHnTRb9OO83byzG1bt+msnb9wx35aXmHzFpVZ9cW7lhsy5Yr1p+1syIQnTt10xiMd6w6WXLXKM7ds34ErLj0mR5HHkRlFp9KcGeHKlSvOTHPmzHGGOXnypKWnp9vWrVuNRidFRUUuDc+QRE6qtikpKS4dL3zmzZvnoum1a9dcWn7gb8ozv8AJRbHEWYds1a+nbcGScvdc+P2CY/ZlYpFLk7Gs3JaurrTRk/6wlHkltmztSZuVfswmJBXZ3KwyS804brMXllr2+lOhNIVR38b6NqNa4Ij2oCUzdgbPYkZP/ERBNfX/BuU6c/ITx0ehKixm7RlaxvMkVdpe/8p16dz6oTtdeqYRy0kTbf+KjKJT6cpm7GjJjKJTCbIZvRY4yHum60zRAmd/0YXw2TSPzCjaBV7UPHjwwLUNjYUYx4lnSnpwNKX22r3Q81yB+2HeM2Vn6UkDgd1WUnolfDbNIzOKdgEj8rKFFzCxUG1tres1Eu3za48fN9rxilrLXl9hy9eWWfa68k7R8rXltmxNme0/cN7u3rtvoVIjfEbRkRlFu0EXJnpPeF/s7Uxx3GhR8X/Ql/FhqDr7oNPV0PAo5MPWv9EoMwoREGRGIQKCzChEQIijxbwQIvaoBY4QASGO1vK8EhZCxI7Gxkb7L7Zicb1iCCyIAAAAAElFTkSuQmCC"},4224:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 13-e1badf3b27109f8ba40e87a642a1b8e8.png"},3880:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 14-433dd0e559e44bc062ca3728dd16e40e.png"},609:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 15-16409cd6aaf08e72099a3bba72c8938c.png"},6360:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 16-9f704d48c1caaab3ff15ef17477f56d3.png"},4746:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 17-9db4dd261f7c8f25bd81cad51c350e80.png"},1646:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 2-8b68bf6022d0496a00ae9b4f5b24361d.png"},3464:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 3-76fec744729cb6481e8e16f915f61b62.png"},3266:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 5-dce786d936b22229d400d67aef65b1c5.png"},9008:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},6545:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 8-2bea94590bd6994d3a2383adc0f53155.png"},3408:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab 9 - 9-5cf3c1d53e6dfa2469546ba7d3e852d1.png"}}]);