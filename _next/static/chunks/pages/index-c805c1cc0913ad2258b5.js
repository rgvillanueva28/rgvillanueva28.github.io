(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4937:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var i=n(5893),l=n(9008),r=n(1664),a=n(7294),s=n(9583),o=n(489),c=n(6261),d=[{label:"About",id:"about"},{label:"Portfolio",id:"portfolio"},{label:"Contact",id:"contact"}],x=n(4479);function h(e){var t=(0,a.useState)(!1),n=t[0],l=t[1];return(0,i.jsxs)("header",{id:"header",className:"fixed w-full lg:px-16 px-6 lg:py-0 py-2 flex flex-wrap items-center "+(n?"bg-accent-dark":e.onTop?"bg-transparent":"bg-accent-dark"),children:[(0,i.jsxs)("div",{className:"flex-1 flex justify-between items-center",children:[(0,i.jsx)(r.default,{href:"/",children:(0,i.jsx)("a",{className:"fill-current",children:(0,i.jsx)(x.E.img,{initial:{backgroundColor:"#EEF4ED"},whileHover:{backgroundColor:"#8DA9C4"},transition:{type:"tween",duration:.3},className:"rounded-full",alt:"RG Logo",src:"/logo.png",width:"32",height:"32",onClick:function(){c.NY.scrollToTop({duration:500})}})})}),(0,i.jsx)("div",{className:"m-0 mr-auto p-0 pl-1 my-auto",children:(0,i.jsxs)(x.E.h1,{initial:{color:"#EEF4ED"},className:"ranegillian text-2xl cursor-default",whileHover:{color:"#8DA9C4"},transition:{type:"tween",duration:.3},children:[(0,i.jsx)("strong",{children:"RANE"}),"GILLIAN"]})})]}),(0,i.jsx)("div",{className:"transition duration-200 cursor-pointer lg:hidden  focus:outline-none hover:bg-accent-light border border-transparent hover:border-foreground rounded-md p-1 py-3 relative",style:{minHeight:42,minWidth:42},onClick:function(){return l(!n)},id:"toggle-menu",children:(0,i.jsx)("div",{className:"container",children:n?(0,i.jsx)("div",{className:"absolute",style:{top:"4px"},children:(0,i.jsx)(s.IkZ,{style:e,color:"#EEF4ED",size:32})}):(0,i.jsx)("div",{className:"absolute",style:{top:"4px"},children:(0,i.jsx)(s.Fm7,{style:e,color:"#EEF4ED",size:32})})})}),(0,i.jsx)(o.AM,{native:!0,force:!0,config:{tension:2e3,friction:100,precision:1},from:{height:n?0:"auto"},to:{height:n?"auto":0},children:function(e){return(0,i.jsx)(o.q.div,{style:e,className:"lg:flex lg:items-center lg:w-auto w-full text-foreground lg:h-auto",id:"menu",children:(0,i.jsx)("nav",{className:n?"visible":"invisible lg:visible",children:(0,i.jsxs)("ul",{className:"lg:flex items-center justify-between text-base pt-4 lg:pt-0",children:[(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{href:"/",activeClass:"border-foreground",to:"home",spy:!0,smooth:!0,duration:500,onClick:function(){return l(!1)},className:"cursor-pointer transition duration-200 lg:py-4 py-3 px-5 block border-b-2 border-transparent hover:border-foreground hover:bg-accent-light",children:"Home"})}),d.map((function(e){var t=e.label,n=e.id;return(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{href:"/#"+n,activeClass:"border-foreground",to:n,spy:!0,hashSpy:!0,smooth:!0,duration:500,onClick:function(){return l(!1)},className:"cursor-pointer transition duration-200 lg:py-4 py-3 px-5 block border-b-2 border-transparent hover:border-foreground hover:bg-accent-light",children:t})},t)}))]})})})}})]})}function m(e){var t=e.children,n=null,r=(0,a.useState)(!0),s=r[0],o=r[1];return(0,a.useEffect)((function(){return n=document.addEventListener("scroll",(function(e){var t,n=null===(t=document.scrollingElement)||void 0===t?void 0:t.scrollTop;o(!(n>=60))})),function(){document.removeEventListener("scroll",n)}}),[s]),(0,i.jsxs)("div",{className:"",children:[(0,i.jsxs)(l.default,{children:[(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico",type:"image/ico",sizes:"16x16"}),(0,i.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,i.jsx)("meta",{name:"description",content:"Personal website of Rane Gillian created with Next.JS"}),(0,i.jsx)("meta",{name:"theme-color",content:"#134074"}),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"/logo.png"})]}),(0,i.jsx)(h,{onTop:s}),(0,i.jsx)(x.E.div,{initial:"pageInitial",animate:"pageAnimate",variants:{pageInitial:{opacity:0,y:-100},pageAnimate:{opacity:1,y:0,transition:{duration:1,delay:.25,type:"spring",stiffness:500}}},children:t},"mainContainer")]})}function u(e){var t=e.onTop,n={top:{y:[0,-10,0],scale:[1,1,1],transition:{duration:1,ease:"easeInOut",times:[0,.5,1],loop:1/0,repeatDelay:.2}},notTop:{y:[0,0,0],scale:[1,1,1]}},l=Array.from("Rane Gillian.");return(0,i.jsx)("div",{className:"flex flex-col text-center container-sm p-10 sm:px-12 md:px-20 lg:px-24 mt-5 rounded-md lg:flex lg:flex-row",children:(0,i.jsxs)(x.E.div,{className:"text-left lg:pt-0 min-h-full lg:justify-center lg:flex lg:flex-col lg:mr-64 lg:pr-20 xl:pr-32",initial:"hidden",animate:"visible",variants:{visible:{opacity:1,transition:{delay:.5,type:"spring"}},hidden:{opacity:0}},children:[(0,i.jsx)("p",{className:"text-accent-light text-base lg:text-lg ",children:(0,i.jsx)("strong",{children:"Hi there! I am"})}),(0,i.jsx)(x.E.div,{className:"flex",initial:"hidden",animate:"show",variants:{hidden:{x:100,opacity:0},show:{x:0,opacity:1,transition:{delay:1,type:"spring",stiffness:1e3}}},children:l.map((function(e,t){return" "==e?(0,i.jsx)("span",{className:"w-2"},t):(0,i.jsx)(x.E.strong,{whileHover:{y:-2,color:"#8DA9C4",transition:{type:"spring",stiffness:1500}},className:"cursor-pointer text-foreground  text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-left",children:e},t)}))}),(0,i.jsx)("p",{className:"mb-3 text-2xl md:text-2xl lg:text-4xl xl:text-5xl",children:(0,i.jsx)("strong",{children:(0,i.jsx)("span",{className:"gradText",children:"Aspiring Developer."})})}),(0,i.jsxs)("p",{className:"text-accent-light text-base lg:text-lg mb-5",children:["I am currently a Bachelor of Science in Computer Engineering student at Map\xfaa University. I am interested to learn the fields of Cybersecurity, Web Development, Mobile Development, Data Analysis and Visualization, and Artificial Intelligence. I have also created several projects. Check out the"," ",(0,i.jsx)(c.rU,{href:"/#portfolio",activeClass:"border-foreground",to:"portfolio",smooth:!0,duration:500,children:(0,i.jsx)("span",{className:"text-foreground opacity-100 hover:opacity-75",children:"portfolio"})})," ","tab for more information about these projects."]}),(0,i.jsx)(x.E.button,{animate:t?"top":"notTop",variants:n,className:"cursor-pointer mr-auto py-2 px-4 bg-transparent rounded-md text-accent-light border-2 border-accent-light hover:bg-accent-light hover:text-foreground focus:outline-none ",children:(0,i.jsx)(c.rU,{href:"#contact",activeClass:"border-foreground",to:"contact",smooth:!0,duration:500,ignoreCancelEvents:!0,children:"Contact"})})]})})}var p=n(5434);var g=function(e){return(0,i.jsx)("div",{className:"mx-5 sm:mx-10 md:mx-16 py-10 px-2 sm:px-5 md:px-10 lg:px-16 "+e.className,children:e.children})};function f(){return(0,i.jsxs)(g,{className:"md:flex md:flex-wrap h-auto",children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{alt:"RG Logo",width:"128",height:"128",src:"/logo.png",className:"w-24 md:w-32 xl:w-40 md:mr-5 mx-auto mb-5 md:mb-0 bg-gray-500 rounded-full "})}),(0,i.jsx)("div",{className:"text-center md:text-left md:flex md:flex-1 md:flex-wrap justify-between",children:(0,i.jsxs)("div",{className:"p-1",children:[(0,i.jsx)("h4",{className:"text-xl sm:text-2xl xl:text-4xl text-foreground",children:(0,i.jsx)("strong",{children:"Rane Gillian Villanueva"})}),(0,i.jsxs)("p",{className:"text-accent-light",children:[(0,i.jsx)(p.eAf,{className:"inline text-accent-light mr-1 my-auto"}),"B.S. Computer Engineering"]}),(0,i.jsxs)("p",{className:"text-accent-light",children:[(0,i.jsx)(s.m17,{className:"inline text-accent-light mr-1 my-auto"}),"Map\xfaa University"]}),(0,i.jsxs)("p",{className:"text-accent-light",children:[(0,i.jsx)(s.tpH,{className:"inline text-accent-light mr-1 my-auto"}),"2018 - present"]}),(0,i.jsxs)("p",{className:"text-accent-light",children:[(0,i.jsx)(p.h6V,{className:"inline text-accent-light mr-1 my-auto"}),"rgvillanueva28@gmail.com"]})]})})]})}var j=n(6893);var v=function(){return(0,i.jsx)(g,{className:"flex flex-wrap",children:(0,i.jsxs)("div",{className:"mx-auto text-center inline-flex ",children:[(0,i.jsxs)("div",{className:"container inline",children:[(0,i.jsx)("div",{className:"inline-block mx-2 bg-blue-700 rounded-full border-0",children:(0,i.jsx)("a",{href:"https://www.facebook.com/ranegillian/",rel:"noreferrer noopener",target:"_blank",children:(0,i.jsx)(s.tBk,{size:64,className:"inline text-white p-2"})})}),(0,i.jsx)("p",{className:"text-accent-light",children:"Facebook"})]}),(0,i.jsxs)("div",{className:"container inline",children:[(0,i.jsx)("div",{className:"inline-block mx-2 bg-blue-600 rounded-full border-0",children:(0,i.jsx)("a",{href:"https://www.linkedin.com/in/ranegv/",rel:"noreferrer noopener",target:"_blank",children:(0,i.jsx)(s.BUd,{size:64,className:"inline text-white p-2"})})}),(0,i.jsx)("p",{className:"text-accent-light",children:"LinkedIn"})]}),(0,i.jsxs)("div",{className:"container inline",children:[(0,i.jsx)("div",{className:"inline-block mx-2 bg-white rounded-full",children:(0,i.jsx)("a",{href:"https://github.com/rgvillanueva28",rel:"noreferrer noopener",target:"_blank",children:(0,i.jsx)(s.hJX,{size:64,className:"inline  text-black"})})}),(0,i.jsx)("p",{className:"text-accent-light",children:"Github"})]}),(0,i.jsxs)("div",{className:"container inline",children:[(0,i.jsx)("div",{className:"inline-block mx-2 bg-red-700 rounded-full border-0",children:(0,i.jsx)("a",{href:"mailto:rgvillanueva28@gmail.com",children:(0,i.jsx)(j.Imn,{size:64,className:"inline text-white p-2"})})}),(0,i.jsx)("p",{className:"text-accent-light",children:"Mail"})]})]})})};function b(e){var t=e.title,n=e.description,l=e.ghLink,r=e.link,a=e.tags;return(0,i.jsx)("div",{className:"flex flex-wrap w-full px-4 py-4 md:w-1/2 lg:w-1/3",children:(0,i.jsxs)("div",{className:"flex flex-col items-stretch w-full min-h-full bg-accent-dark p-6",children:[(0,i.jsx)("h4",{className:"text-foreground mb-4",children:t}),(0,i.jsx)("p",{className:"text-accent-light mb-10",children:n}),(0,i.jsx)("div",{className:"text-accent-light text-sm mb-4",children:a.map((function(e){return(0,i.jsx)("span",{className:"inline-block bg-accent-mid rounded-lg p-2 mr-2 mb-2",children:e},e)}))}),(0,i.jsxs)("div",{className:"flex flex-row space-x-4 text-accent-light ml-auto mt-auto",children:[(0,i.jsx)("a",{href:l,target:"_blank",rel:"noreferrer noopener",className:"hover:text-foreground ",children:(0,i.jsx)(s.hJX,{size:28})}),r?(0,i.jsx)("a",{href:r,target:"_blank",rel:"noreferrer noopener",className:"hover:text-foreground ",children:(0,i.jsx)(s.CkN,{size:28})}):null]})]})})}var N=[{title:"Covid Chatbot PH",description:"\ud83e\udda0 A Facebook Messenger chatbot for covid-19 cases monitoring in the Philippines",ghLink:"https://github.com/rgvillanueva28/covid-chatbot-ph/",link:"https://covid-chatbot-ph.herokuapp.com/",tags:["Python","Flask","REST"]},{title:"Covid-19 Chatbot",description:"\ud83e\udd16 An AI chatbot for Covid-19 information created with Python Django Framework",ghLink:"https://github.com/CoDev-20/Covid19Chatbot",tags:["Python","Django","AI"]},{title:"RaneGB Remote",description:"\ud83c\udf08 An IoT remote for controlling my RGB LED strip lights using IR remote and ESP8266",ghLink:"https://github.com/rgvillanueva28/RaneGB-remote",tags:["Flutter","IoT"]},{title:"Mapua GWA Calculator",description:"\ud83e\uddee A calculator for computing GWA. For the students who hopes to have scholarships.",ghLink:"https://github.com/rgvillanueva28/random-mini-projects/tree/mapuaGwaCalcu",link:"https://www.ranegillian.me/random-mini-projects/",tags:["HTML","TailwindCSS","Vanilla JS"]},{title:"Personal Website",description:"\ud83d\udd78 My personal website created with Next.JS and TailwindCSS",ghLink:"https://github.com/rgvillanueva28/rgvillanueva28.github.io.source-NextJS",link:"https://www.ranegillian.me/",tags:["Next.JS","React","TailwindCSS"]},{title:"Personal Blog",description:"\ud83d\udcdd My personal blog created with Next.JS and powered by Strapi",ghLink:"https://github.com/rgvillanueva28/rgvillanueva28-blog",link:"https://blog.ranegillian.me/",tags:["Next.JS","React","TailwindCSS","Strapi"]}];function w(){return(0,i.jsx)(g,{className:"flex flex-row flex-wrap mx-auto",children:N.map((function(e){return(0,i.jsx)(b,{title:e.title,description:e.description,ghLink:e.ghLink,link:e.link,tags:e.tags},e.title)}))})}var y=n(7516);function k(e){return(0,i.jsx)("div",{className:"flex w-full content-center mt-5",children:(0,i.jsx)(c.rU,{className:"mx-auto",href:e.href,to:e.to,smooth:!0,duration:500,children:(0,i.jsx)(y.c3i,{className:"text-accent-light mx-auto hover:text-foreground",size:52})})})}function E(){var e=null,t=(0,a.useState)(!0),n=t[0],r=t[1];return(0,a.useEffect)((function(){return e=document.addEventListener("scroll",(function(e){var t,n=null===(t=document.scrollingElement)||void 0===t?void 0:t.scrollTop;r(!(n>=60))})),function(){document.removeEventListener("scroll",e)}}),[n]),(0,i.jsxs)(m,{children:[(0,i.jsx)(l.default,{children:(0,i.jsx)("title",{children:"RANE GILLIAN"})}),(0,i.jsxs)("div",{className:"container mx-auto flex flex-col",children:[(0,i.jsx)("section",{id:"home",className:"",children:(0,i.jsxs)("div",{className:"min-h-screen pt-20 flex flex-col justify-center items-center",children:[(0,i.jsx)(u,{onTop:n}),(0,i.jsx)(k,{href:"/#about",to:"about"})]})}),(0,i.jsxs)("section",{id:"about",className:"min-h-screen pt-20",children:[(0,i.jsx)("h3",{className:"text-accent-light text-center pb-5 font-bold",children:(0,i.jsx)("span",{className:"gradText",children:"About me"})}),(0,i.jsx)(f,{}),(0,i.jsx)(k,{href:"/#portfolio",to:"portfolio"})]}),(0,i.jsxs)("section",{id:"portfolio",className:"min-h-screen pt-20",children:[(0,i.jsx)("h3",{className:"text-accent-light text-center pb-5 font-bold",children:(0,i.jsx)("span",{className:"gradText",children:"Portfolio"})}),(0,i.jsx)(w,{}),(0,i.jsx)(k,{href:"/#contact",to:"contact"})]}),(0,i.jsxs)("section",{id:"contact",className:"min-h-screen pt-20",children:[(0,i.jsx)("h3",{className:"text-accent-light text-center pb-5 font-bold",children:(0,i.jsx)("span",{className:"gradText",children:"Contact"})}),(0,i.jsx)(v,{})]})]}),(0,i.jsx)(x.E.div,{animate:n?{opacity:0,y:-5}:{opacity:1,y:0,transition:{type:"spring",stiffness:1e3}},className:"fixed bottom-0 right-0 ",children:(0,i.jsxs)("button",{onClick:function(){c.NY.scrollToTop({duration:500})},className:"mb-5 mr-5 px-4  h-16 w-16 bg-accent-mid rounded-full hover:bg-accent-light active:shadow-lg  mouse shadow focus:outline-none border border-dark",children:[(0,i.jsx)(y.Vc9,{className:"text-foreground mx-auto",size:28}),(0,i.jsx)("p",{className:"text-xs text-white",children:"TOP"})]})},"container")]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4937)}])}},function(e){e.O(0,[774,228,445,874,351,532],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);