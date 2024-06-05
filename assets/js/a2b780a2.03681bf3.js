"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[9781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,v=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:3},o="User Administration",l={unversionedId:"IBM SevOne Automated Network Observability/administration",id:"IBM SevOne Automated Network Observability/administration",title:"User Administration",description:"Creating User Account",source:"@site/docs/IBM SevOne Automated Network Observability/administration.md",sourceDirName:"IBM SevOne Automated Network Observability",slug:"/IBM SevOne Automated Network Observability/administration",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/administration",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"TechZone lab environment",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/lab-env"},next:{title:"Add Devices",permalink:"/software-networking-pot/docs/IBM SevOne Automated Network Observability/add-devices"}},s={},c=[{value:"Creating User Account",id:"creating-user-account",level:2},{value:"Review",id:"review",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-administration"},"User Administration"),(0,a.kt)("h2",{id:"creating-user-account"},"Creating User Account"),(0,a.kt)("p",null,"In this lab, we will set up an additional local user account. We will assign them a different Role and scope so you can see the difference between them."),(0,a.kt)("p",null,"Add User Role"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into the NMS"),(0,a.kt)("li",{parentName:"ol"},"Go to Administration -> Access Configuration -> User Role Manager"),(0,a.kt)("li",{parentName:"ol"},"Expand System Administrators and Administrators roles"),(0,a.kt)("li",{parentName:"ol"},"Click on Administrators and click on \u2018Add Role\u2019\na.\tName: your name\nb.\tSave"),(0,a.kt)("li",{parentName:"ol"},"Select the new role you have created and enable all the permissions"),(0,a.kt)("li",{parentName:"ol"},"Click Save Changes as shown below in Image Below")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(12354).Z,width:"755",height:"280"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Go to Devices and Devices Groups Access and enable Group View / Group Edit / Device View\n/ Device Edit for All device Groups and All Device Types"),(0,a.kt)("li",{parentName:"ol"},"Click Save Changes")),(0,a.kt)("p",null,"Image Below"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(96403).Z,width:"755",height:"78"})),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Go to Users and User Roles Access"),(0,a.kt)("li",{parentName:"ol"},"Enable Role View / Role Edit / User View / User Edit for Administrators"),(0,a.kt)("li",{parentName:"ol"},"Click Save Changes")),(0,a.kt)("p",null,"![IBM SevOne Automated Network Observability]","(img/addtargets/userrole.png"),(0,a.kt)("p",null,"Add User"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into the NMS"),(0,a.kt)("li",{parentName:"ol"},"Go to Administration -> Access Configuration -> User Manager"),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Add User"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"a. Name: your name"),(0,a.kt)("li",{parentName:"ul"},"b. Surname: your surname"),(0,a.kt)("li",{parentName:"ul"},"c. Email: your email"),(0,a.kt)("li",{parentName:"ul"},"d. Username: your name"),(0,a.kt)("li",{parentName:"ul"},"e. Authentication: SevOne"),(0,a.kt)("li",{parentName:"ul"},"f. Password: any password"),(0,a.kt)("li",{parentName:"ul"},"g. Confirm: any password"),(0,a.kt)("li",{parentName:"ul"},"h. Role Assignments: your name"))),(0,a.kt)("li",{parentName:"ol"},"Save")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM SevOne Automated Network Observability",src:n(4040).Z,width:"705",height:"455"})),(0,a.kt)("p",null,'You will see the User Management Page and see two options: LOCAL USERS or EXTERNAL AUTHENTICATION. In this lab, we will be creating "Local Users". Currently, two user accounts are configured: the admin user you used to log into SevOne.'),(0,a.kt)("h2",{id:"review"},"Review"),(0,a.kt)("p",null,"Log out and log in again using the new username that you have created to make sure you have access to SevOne with this new credential. The level of access between user Admin and your user will be very similar because we have given all the possible credentials to the new role."),(0,a.kt)("p",null,"You have now finished the administration lab and can move on to the next lab."))}m.isMDXComponent=!0},12354:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clusteradmin-33a7cb9d768fab04a792f45a5ed1c500.png"},96403:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/devicerole-6a98abffcdaad7bb0957112e0f0f64c4.png"},4040:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/useradd-c4c4f01277b466718928c61102d43295.png"}}]);