"use strict";(self.webpackChunksn_pot=self.webpackChunksn_pot||[]).push([[6437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(r),u=a,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||o;return r?i.createElement(m,n(n({ref:t},d),{},{components:r})):i.createElement(m,n({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:a,n[1]=s;for(var l=2;l<o;l++)n[l]=r[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},80399:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(87462),a=(r(67294),r(3905));const o={sidebar_position:8},n="HTTPS Redirect",s={unversionedId:"NS1 PoT/HTTPS Redirect",id:"NS1 PoT/HTTPS Redirect",title:"HTTPS Redirect",description:"Overview",source:"@site/docs/NS1 PoT/8 - HTTPS Redirect.md",sourceDirName:"NS1 PoT",slug:"/NS1 PoT/HTTPS Redirect",permalink:"/software-networking-pot/docs/NS1 PoT/HTTPS Redirect",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Advanced Load Balancing - SANO integration",permalink:"/software-networking-pot/docs/NS1 PoT/SANO NS1 integration"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Story",id:"story",level:2},{value:"Create Redirect",id:"create-redirect",level:2}],d={toc:l},h="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"https-redirect"},"HTTPS Redirect"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This POT walkthrough will give you steps needed to setup an HTTPS Re-direct, allowing for the ability to re-direct to HTTPS domains, provide and handle SSL certificates and SSL termination, providing a fully secure redirect. "),(0,a.kt)("p",null,"NS1 provides the auto-renewing certificate management and shows a \u201csecure connection\u201d in the address bar when visiting the relevant URL. "),(0,a.kt)("p",null,"This feature is unique in that no other DNS provider can offer this feature as standard in their platform and means customers can consolidate this necessary evil to their DNS provider instead of offloading this work to a proxy/server, that may require maintenance, labour and cost."),(0,a.kt)("p",null,'NOTE: As this is a "Premium" feature, please email NS1 Project Office ',(0,a.kt)("a",{parentName:"p",href:"mailto:NS1.Project.Office@ibm.com"},"NS1.Project.Office@ibm.com")," with your Account ID to enable this feature."),(0,a.kt)("h2",{id:"story"},"Story"),(0,a.kt)("p",null,"During this POT, we want to show the customer the ease of use for setting up certificates and configuring the redirect, so that they can see the value of consolidating this sometimes time-consuming and costly task to their Managed DNS solution. "),(0,a.kt)("p",null,"They will need access to a test domain/record for redirection, during this process. This does not have to mean a full production domain but possibly an older marketing campaign domain, that still gets some traffic. "),(0,a.kt)("p",null,"This makes it easier to demonstrate the value of visibility into metrics and show how easy it to setup and import existing configs for future redirects (of which there may be quite a few, especially in the case of large enterprises with many brands/subsidiaries). This test/low-traffic domain will need to be delegated to NS1 before the setup."),(0,a.kt)("h2",{id:"create-redirect"},"Create Redirect"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://my.nsone.net/"},"Log into NS1 with your username and password"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Along the top bar, click into "Redirects"'))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM NS1",src:r(37328).Z,width:"1772",height:"208"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'Within the "Source and Target" URL page, talk through the different options for importing existing redirect configs that can be used to save time when given a large batch/spreadsheet from another team of domains to configure (XML or CSV file containing the URL redirect configuration details). This shows how quickly customers can import their existing setups into NS1.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM NS1",src:r(95537).Z,width:"2982",height:"1604"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on the "Create" button to create a new Redirect.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Within the "Create URL redirect" panel, we have a wizard to go through to show how easy it is to setup one or multiple redirects at one time.'),(0,a.kt)("p",{parentName:"li"},'a. Define source URLs - Specfify the source URL. This will be the test/dummy record mentioned previously, that should live on the NS1 platform already. My example URL is as follows: "redirect.ns1demo.com/*". Once added, you can also show how you can add multiple URLs, to setup multiple redirects that all go to the same target URL. ',(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/ns1-connect?topic=redirects-configuring-url-redirect#configuring_url_redirects__title__2"},"Wildcard records/subomains are also supported"),'. This is a key feature for speeding up redirects for brand protection domains/acquired companies that need to point to a new target URL. Make sure you also check off/tick the "Enable HTTPS" and "Enforce HTTPS" to secure the redirect through SSL/TLS encryption.\nNOTE: HTTP Redirects can also be setup here, without the need for certificates. '))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM NS1",src:r(38045).Z,width:"1786",height:"496"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'b. Define target URL. This can be something simple like "ibm.com" - Specify the target destination for which the source URLs should redirect to. This URL does not need to exist on the NS1 platorm. Once added, you have the option to select the Redirect type:\n\n        i. 301 Permanent indicates to search engines that they should remove the old page from their database and replace it with the target page. This approach is recommended for SEO. Pick this one as your option for the POT/Demo.\n        \n        ii. 302 Temporary is less common and indicates that search engines should retain the old domain or page indexed as the redirect is only temporary. While both pages may appear in search results, the search engine will prioritize the new page.\n\n        iii. Masking(URL cloaking or domain masking) indicates that the browser should display the requested URL even though the content shown is generated from the target URL.\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM NS1",src:r(91271).Z,width:"1788",height:"618"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'c. Define Path forwarding mode - Specify the target destination for which the source URLs should redirect to. This URL does not need to exist on the NS1 platorm. Once added, you have the option to select the Redirect type:\n\n        i. The "all" path forwarding mode indicates that the entire URL path included in incoming requests to the source URL is appended to the target URL. Pick this one.\n        \n        ii. The "capture" path forwarding mode indicates that only the segment of the requested URL path matching the wildcard segment defined in the source URL should be appended to the target URL.\n\n        iii. The "none" path forwarding mode indicates that no part of the requested URL path should be appended to the target URL.     \n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM NS1",src:r(99435).Z,width:"880",height:"352"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'d. Enable query forwarding - Enable query forwarding to apply the incoming query string following the URL path (the segment after the question mark) to the new target URL. We can leave this unchecked.\n\ne. Add tags - Tags can be applied to Redirects just like other object types on the NS1 platform. This helps for tracking, filtering and reporting on any related plain-text tagged objects to the relevant apps/teams/projects etc. For this POT, you can add something simple like "team: marketing" and hit enter.\n')),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},'Once created, the new redirect will show within the list of active redirects and there is also a certificate being auto-created in the background. While the cert is being created, we can navigate to the "SSL/TLS Certs" tab to show more info about the cert itself.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM NS1",src:r(20779).Z,width:"2344",height:"1032"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},'Click into the "SSL/TLS Certs" tab to show the cert being created. The NS1 platform leverages the Let\u2019s Encrypt service to generate SSL/TLS certificates, using the DNS01 challenge as validation. When a new certificate is generated (automatically or manually), the platform creates a TXT record for the corresponding domain with information about the SSL/TLS certificate. We want to show how a lot of the manual process that any user setting up their own SSL-enabled Redirects is now automated, including both the day-to-day maintenance but also setting up of multiple redirects.\nNOTE: There will be support for bring-your-own certs in the future.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM NS1",src:r(49902).Z,width:"2350",height:"1036"})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},'Click into "Create" and show how you can create a single domain or wildcard certificate in here. Creating wildcard certs also saves the customer time as it can cover mutliple subdomains.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM NS1",src:r(25845).Z,width:"1268",height:"864"})),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},'The cert auto-created should now show as "Ready". Navigate to the "Zone" where the redirect sits and navigate to the Record itself. It should show alongside other DNS records within the Zone, giving the customer the ability to differentiate it from other DNS-specific records but also showing how it is now consolidated and easily identifiable alongside their whole DNS estate.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM NS1",src:r(24666).Z,width:"1986",height:"854"})),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Now let's finally test it in our Browser. Type in the URL and hit enter. You should see a redirect being performed to the target URL without any issues around certificates, which would normally show up in your browser's cert. This shows the value of a completely secure connection to prevent unauthorized third parties from intercepting data while it is in transit and to validate the website's authenticity.")),(0,a.kt)("p",null,"We can also show our Developer Tools (Browser>View>Developer>Developer Tools>Network>All) to verify the 301 redirect (or other type of redirect) has taken place successfully."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM NS1",src:r(20715).Z,width:"2374",height:"954"})),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},'Finally, let\'s look at the metrics. We can go back to the "Redirects" page to see the amount of redirects in the past 24 hours.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM NS1",src:r(35445).Z,width:"1052",height:"390"})),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"We can also utilise NS1's data-set reporting functionality to run a report on the Redirects for more detailed info. Navigate to Observability > Data Sets > Generate Data Set. Now we have data types we can pull from to generate a report on redirects, where we can show to the customer they can export this data to share with their relevant teams (ex. Marketing may want to know how many redirects to their new campaign are happening)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IBM NS1",src:r(99384).Z,width:"1332",height:"1278"})))}p.isMDXComponent=!0},37328:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/1-cbb3f251a9894655f8e481a02093a5f5.png"},25845:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/10-c4033047126f1a8508903faf0116881e.png"},24666:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/11-09853a7ddc99d06883a7e0ed66f3a99f.png"},35445:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/12-6f0ae8f0bc72036f98fb58e8779abf58.png"},99384:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/13-b6d1f3fc2b07df1f93ef3b3fceb2c938.png"},20715:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/14-f63d131e50d24f6adc4f4ac9ef2c74d2.png"},95537:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/2-eed74aca2d73fc0306292196050072ed.png"},38045:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/3-66a1221679ce9044b2cc8b18b5c8502a.png"},99435:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/6-aeff0f3d5426bbac0f442a4fc3e65f00.png"},91271:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/7-f3dab75ce12c419f2566c744dc03569e.png"},20779:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/8-e104fe13437994b7cf50383911ea1b66.png"},49902:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/9-62162ce868962015df4951b890d3534c.png"}}]);