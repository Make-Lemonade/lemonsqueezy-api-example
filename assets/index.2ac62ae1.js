import{r as e,c as t,a as r,b as s,o as a,g as o,d as n,F as i,e as l,w as d,t as c,f as u,h,s as p,i as m,j as f,v,k as g,l as k,m as y,n as b}from"./vendor.5be2ffd3.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const w={},x={class:"bg-gray-100"},C={class:"max-w-60 mx-auto h-screen overflow-auto bg-white"};w.render=function(o,n){const i=e("router-view");return a(),t("div",x,[r("div",C,[s(i)])])};var L={get(e,t={}){return this.request("get",e,t)},post(e,t={}){return this.request("post",e,t)},put(e,t={}){return this.request("put",e,t)},patch(e,t={}){return this.request("patch",e,t)},delete(e,t={}){return this.request("delete",e,t)},request:(e,t,r={})=>o("user.token").then((s=>n({method:e,url:`https://api.lemonsqueezy.com/${t}`,headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json",Authorization:`Bearer ${s}`},params:"get"===e?r:{},data:"get"!==e?r:{}})))};const q={data:()=>({stores:{}}),created(){this.getStores()},methods:{getStores(){L.get("v1/stores").then((e=>{this.stores=e.data})).catch((e=>{console.error(e)}))}}},F={class:"p-4"},$=r("h1",{class:"text-24 font-medium px-2"},"Dashboard",-1),S={class:"py-2"},j=["onClick"],M={class:"flex-shrink-0 w-6 h-6 mr-2"},I=["src"],A={class:"flex-grow truncate"},K={class:"font-medium dark:text-dark-95 truncate overflow-ellipsis"},_={class:"text-grey dark:text-dark-grey"},z=r("div",{class:"flex-shrink-0 ml-2"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-3 h-3 stroke-current fill-transparent"},[r("path",{d:"M4.75 11.98h14.5M12.75 5.75l6.5 6.25-6.5 6.25",stroke:"#25252D","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1);q.render=function(e,s,o,n,u,h){return a(),t("div",F,[$,r("div",S,[(a(!0),t(i,null,l(u.stores.data,(s=>(a(),t("a",{href:"#",class:"flex items-center px-2 py-1.5 rounded hover:bg-light-97 dark:hover:bg-dark-19",key:s.id,onClick:d((t=>e.$router.push({name:"store",params:{id:s.id}})),["prevent"])},[r("div",M,[r("img",{src:s.attributes.avatar_url,alt:"",class:"w-full h-full rounded-full"},null,8,I)]),r("div",A,[r("h4",K,c(s.attributes.name),1),r("p",_,c(s.attributes.domain),1)]),z],8,j)))),128))])])};const D={data:()=>({store:{},orders:{}}),created(){this.$watch((()=>this.$route.params),(()=>{this.fetchData()}),{immediate:!0})},methods:{fetchData(){this.$route.params.id&&this.getStore()},getStore(){L.get(`v1/stores/${this.$route.params.id}`).then((e=>{this.store=e.data,this.getOrders()})).catch((e=>{console.error(e)}))},getOrders(){L.get(`v1/stores/${this.store.data.id}/orders`).then((e=>{this.orders=e.data})).catch((e=>{console.error(e)}))},formatCurrency:(e,t)=>(e>0&&(e/=100),new Intl.NumberFormat("en-US",{style:"currency",currency:t}).format(e))}},P={class:"p-4"},N={class:"px-2 mb-2"},E=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-3 h-3 stroke-current fill-transparent"},[r("path",{d:"M4.75 11.98h14.5M11.25 18.25 4.75 12l6.5-6.25",stroke:"#25252D","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)],O={key:0},B={class:"flex items-center px-2"},U={class:"flex-shrink-0 w-6 h-6 mr-2"},T=["src"],V={class:"text-18 font-medium truncate overflow-ellipsis"},G={class:"py-2"},H={class:"inline-flex items-center flex-shrink-0 justify-center bg-light-95 w-8 h-6 rounded mr-2 dark:bg-dark-22"},J={class:"font-medium dark:text-dark-95"},Q={class:"mr-2 truncate"},R={class:"flex items-center"},W={class:"font-medium truncate overflow-ellipsis dark:text-dark-95"},X={class:"text-grey dark:text-dark-grey"},Y=h(" Free "),Z=r("div",{class:"ml-auto"},null,-1);D.render=function(e,s,o,n,p,m){return a(),t("div",P,[r("div",N,[r("a",{href:"#",class:"block w-5 h-5 p-1 rounded hover:bg-light-91",onClick:s[0]||(s[0]=d((t=>e.$router.push({name:"dashboard"})),["prevent"]))},E)]),p.store.data?(a(),t("div",O,[r("div",B,[r("div",U,[r("img",{src:p.store.data.attributes.avatar_url,alt:"",class:"w-full h-full rounded-full"},null,8,T)]),r("div",null,[r("h1",V,c(p.store.data.attributes.name),1)])]),r("div",G,[(a(!0),t(i,null,l(p.orders.data,(e=>(a(),t("a",{href:"#",class:"flex items-center px-2 py-1.5 rounded hover:bg-light-97 dark:hover:bg-dark-19",key:e.id,onClick:s[1]||(s[1]=d((()=>{}),["prevent"]))},[r("div",H,[r("span",J,c(e.attributes.order_number),1)]),r("div",Q,[r("div",R,[r("h4",W,c(e.attributes.user_name?e.attributes.user_name:e.attributes.user_email),1)]),r("p",X,[e.attributes.total>0?(a(),t(i,{key:0},[h(c(m.formatCurrency(e.attributes.total,e.attributes.currency)),1)],64)):(a(),t(i,{key:1},[Y],64))])]),Z])))),128))])])):u("",!0)])};const ee={data:()=>({apiKey:"",error:"",working:!1}),emits:["login"],methods:{submit(){this.error="",this.working=!0,p("user.token",this.apiKey).then((()=>{L.get("v1/stores").then((e=>{200===e.status?this.$router.push({name:"dashboard"}):(this.error="Invalid API key",m("user.token"))})).catch((()=>{this.error="Invalid API key",m("user.token")})).finally((()=>{this.working=!1}))}))}},watch:{apiKey(){this.error=""}}},te={class:"p-6 py-15"},re=g('<div class="flex items-center justify-center"><a href="https://www.lemonsqueezy.com"><svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.44011 24.4129L15.506 28.1336C16.5057 28.595 17.2114 29.3693 17.5924 30.2575C18.5563 32.5067 17.239 34.8071 15.1709 35.6343C13.1025 36.4613 10.8981 35.9291 9.89582 33.5901L6.38556 25.3782C6.11354 24.7416 6.79687 24.1162 7.44011 24.4129" fill="#FFC233"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.92482 22.0046L16.2509 18.8643C19.018 17.8206 22.0408 19.7953 22 22.6646C21.9994 22.7021 21.9987 22.7395 21.9977 22.7773C21.938 25.5714 18.9993 27.4494 16.293 26.4609L7.93271 23.4078C7.26581 23.1644 7.26088 22.255 7.92482 22.0046" fill="#FFC233"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.45767 20.9168L15.6425 17.4468C18.3623 16.2936 19.0525 12.8325 16.9224 10.8326C16.8945 10.8063 16.8666 10.7803 16.8383 10.7543C14.7499 8.82013 11.2974 9.50112 10.1085 12.0487L6.43564 19.9194C6.14259 20.5471 6.8049 21.1935 7.45767 20.9168" fill="#FFC233"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.35143 19.5456L8.32719 11.4044C8.69612 10.395 8.62779 9.36556 8.24637 8.47734C7.28051 6.22905 4.66482 5.50331 2.5971 6.33186C0.529704 7.16073 -0.638522 9.04315 0.365771 11.3812L3.89903 19.5843C4.17302 20.2199 5.11424 20.1948 5.35143 19.5456" fill="#FFC233"></path></svg></a></div><div class="text-center my-5"><h1 class="text-24 font-medium">Sign in to Lemon Squeezy</h1></div>',2),se={class:"form-group"},ae=["disabled"],oe={key:0,class:"form-error"},ne=r("p",{class:"form-input-desc"},[h(" Create an API key in your "),r("a",{href:"https://app.lemonsqueezy.com/account",target:"_blank",class:"text-wtf-majorelle hover:underline"},"account settings"),h(". ")],-1),ie=["disabled"],le=[r("span",{class:"mx-auto"},"Login",-1)];ee.render=function(e,s,o,n,i,l){return a(),t("div",te,[re,r("form",{onSubmit:s[1]||(s[1]=d(((...e)=>l.submit&&l.submit(...e)),["prevent"])),class:"flex flex-col"},[r("div",se,[f(r("input",{type:"text",class:"form-input","onUpdate:modelValue":s[0]||(s[0]=e=>i.apiKey=e),placeholder:"Enter your Lemon Squeezy API key",required:"",disabled:i.working},null,8,ae),[[v,i.apiKey]]),i.error?(a(),t("p",oe,c(i.error),1)):u("",!0),ne]),r("button",{class:"btn btn-primary",disabled:!i.apiKey||i.working},le,8,ie)],32)])};const de=k({history:y(),routes:[{path:"/",component:q,name:"dashboard"},{path:"/store/:id",component:D,name:"store"},{path:"/login",component:ee,name:"login"}]});de.beforeEach((async(e,t)=>{const r=await o("user.token");return"/login"===e.path&&r?"/":"/login"===e.path||r?void 0:"/login"}));const ce=b(w);ce.use(de),ce.mount("#app");