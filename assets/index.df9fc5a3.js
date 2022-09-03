(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const _ of r.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&o(_)}).observe(document,{childList:!0,subtree:!0});function a(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=a(l);fetch(l.href,r)}})();function T(){}function me(e){return e()}function ue(){return Object.create(null)}function F(e){e.forEach(me)}function ge(e){return typeof e=="function"}function be(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let V;function b(e,t){return V||(V=document.createElement("a")),V.href=t,e===V.href}function ke(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function xe(e,t,a){e.insertBefore(t,a||null)}function pe(e){e.parentNode.removeChild(e)}function n(e){return document.createElement(e)}function ye(e){return document.createTextNode(e)}function u(){return ye(" ")}function i(e,t,a){a==null?e.removeAttribute(t):e.getAttribute(t)!==a&&e.setAttribute(t,a)}function we(e){return Array.from(e.childNodes)}let G;function C(e){G=e}const S=[],_e=[],B=[],fe=[],$e=Promise.resolve();let z=!1;function Le(){z||(z=!0,$e.then(ve))}function D(e){B.push(e)}const K=new Set;let Y=0;function ve(){const e=G;do{for(;Y<S.length;){const t=S[Y];Y++,C(t),je(t.$$)}for(C(null),S.length=0,Y=0;_e.length;)_e.pop()();for(let t=0;t<B.length;t+=1){const a=B[t];K.has(a)||(K.add(a),a())}B.length=0}while(S.length);for(;fe.length;)fe.pop()();z=!1,K.clear(),C(e)}function je(e){if(e.fragment!==null){e.update(),F(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}const Ee=new Set;function Ae(e,t){e&&e.i&&(Ee.delete(e),e.i(t))}function He(e,t,a,o){const{fragment:l,on_mount:r,on_destroy:_,after_update:p}=e.$$;l&&l.m(t,a),o||D(()=>{const m=r.map(me).filter(ge);_?_.push(...m):F(m),e.$$.on_mount=[]}),p.forEach(D)}function Se(e,t){const a=e.$$;a.fragment!==null&&(F(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function Te(e,t){e.$$.dirty[0]===-1&&(S.push(e),Le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ce(e,t,a,o,l,r,_,p=[-1]){const m=G;C(e);const c=e.$$={fragment:null,ctx:null,props:r,update:T,not_equal:l,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:ue(),dirty:p,skip_bound:!1,root:t.target||m.$$.root};_&&_(c.root);let v=!1;if(c.ctx=a?a(e,t.props||{},(f,k,...h)=>{const x=h.length?h[0]:k;return c.ctx&&l(c.ctx[f],c.ctx[f]=x)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](x),v&&Te(e,f)),k}):[],c.update(),v=!0,F(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const f=we(t.target);c.fragment&&c.fragment.l(f),f.forEach(pe)}else c.fragment&&c.fragment.c();t.intro&&Ae(e.$$.fragment),He(e,t.target,t.anchor,t.customElement),ve()}C(m)}class Me{$destroy(){Se(this,1),this.$destroy=T}$on(t,a){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(a),()=>{const l=o.indexOf(a);l!==-1&&o.splice(l,1)}}$set(t){this.$$set&&!ke(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ne=""+new URL("giphy.051d5c34.gif",import.meta.url).href,Pe=""+new URL("1.4654fd45.jpg",import.meta.url).href,Re=""+new URL("2.4ff444ac.jpg",import.meta.url).href,qe=""+new URL("3.24cfcbb1.jpg",import.meta.url).href,Oe=""+new URL("4.a50152e0.jpg",import.meta.url).href,Ue=""+new URL("5.792d4806.jpg",import.meta.url).href,Ie=""+new URL("6.93b36d39.jpg",import.meta.url).href;function Ve(e){let t,a,o,l,r,_,p,m,c,v,f,k,h,x,y,Q,g,M,W,d,N,w,X,Z,P,$,ee,te,R,L,se,ie,q,j,le,ae,O,E,ne,ce,U,A,re,oe,H,de,I;return{c(){t=n("main"),a=n("header"),a.innerHTML=`<nav class="nav bd-grid"><div><a href="#home" class="nav__logo">Your Name</a></div> 

      <div class="nav__menu" id="nav-menu"><ul class="nav__list"><li class="nav__item"><a href="#home" class="nav__link active">Home</a></li> 
          <li class="nav__item"><a href="#about" class="nav__link">About</a></li> 
          <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li> 
          <li class="nav__item"><a href="#work" class="nav__link">Portfolio</a></li> 
          <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li></ul></div> 

      <div class="nav__toggle" id="nav-toggle"><i class="bx bx-menu"></i></div></nav>`,o=u(),l=n("section"),r=n("div"),r.innerHTML=`<h1 class="home__title">Hi there,<br/>I&#39;m <span class="home__title-color">Your-Name</span><br/>
        Your-desigination</h1> 

      <a href="#contact" class="button">Contact</a>`,_=u(),p=n("div"),p.innerHTML=`<a href="#linkedin_link" class="home__social-icon"><i class="bx bxl-linkedin"></i></a> 
      <a href="#behance_link" class="home__social-icon"><i class="bx bxl-behance"></i></a> 
      <a href="#github_link" class="home__social-icon"><i class="bx bxl-github"></i></a>`,m=u(),c=n("div"),v=n("img"),k=u(),h=n("section"),h.innerHTML=`<h2 class="section-title">About</h2> 

    <div class="about__container bd-grid"><div class="about__img"></div> 

      <div><h2 class="about__subtitle">I&#39;am Your-Name</h2> 
        <p class="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
          soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias
          accusamus atque.</p></div></div>`,x=u(),y=n("section"),y.innerHTML=`<h2 class="section-title">Skills</h2> 

    <div class="skills__container bd-grid"><div><h2 class="skills__subtitle">Profesional Skills</h2> 
        <p class="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio
          id vero amet, alias architecto consectetur error eum eaque sit.</p> 
        <div class="skills__data"><div class="skills__names"><i class="bx bxl-html5 skills__icon"></i> 
            <span class="skills__name">HTML5</span></div> 
          <div class="skills__bar skills__html"></div> 
          <div><span class="skills__percentage">90%</span></div></div> 
        <div class="skills__data"><div class="skills__names"><i class="bx bxl-css3 skills__icon"></i> 
            <span class="skills__name">CSS3</span></div> 
          <div class="skills__bar skills__css"></div> 
          <div><span class="skills__percentage">80%</span></div></div> 
        <div class="skills__data"><div class="skills__names"><i class="bx bxl-javascript skills__icon"></i> 
            <span class="skills__name">JAVASCRIPT</span></div> 
          <div class="skills__bar skills__js"></div> 
          <div><span class="skills__percentage">60%</span></div></div> 
        <div class="skills__data"><div class="skills__names"><i class="bx bxs-paint skills__icon"></i> 
            <span class="skills__name">PHP</span></div> 
          <div class="skills__bar skills__ux"></div> 
          <div><span class="skills__percentage">75%</span></div></div></div> 

      <div></div></div>`,Q=u(),g=n("section"),M=n("h2"),M.textContent="Portfolio",W=u(),d=n("div"),N=n("div"),w=n("img"),Z=u(),P=n("div"),$=n("img"),te=u(),R=n("div"),L=n("img"),ie=u(),q=n("div"),j=n("img"),ae=u(),O=n("div"),E=n("img"),ce=u(),U=n("div"),A=n("img"),oe=u(),H=n("section"),H.innerHTML=`<h2 class="section-title">Contact</h2> 

    <div class="contact__container bd-grid"><form action="" class="contact__form"><input type="text" placeholder="Name" class="contact__input"/> 
        <input type="mail" placeholder="Email" class="contact__input"/> 
        <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea> 
        <input type="button" value="Enter" class="contact__button button"/></form></div>`,de=u(),I=n("footer"),I.innerHTML=`<div class="container"><div class=""><div class="site-logo"><a href="#home"><img src="" alt="your-logo"/></a></div> 
            <div class="copyrights"><p class="para">Copyright \xA92022 All rights reserved | This template is made with by
                    <a href="https://www.github.com/iamevs"><span style="color: var(--primary-color);">EVS</span></a></p></div></div></div>`,i(a,"class","l-header"),i(r,"class","home__data"),i(p,"class","home__social"),b(v.src,f=Ne)||i(v,"src",f),i(v,"alt",""),i(c,"class","home__img"),i(l,"class","home bd-grid"),i(l,"id","home"),i(h,"class","about section "),i(h,"id","about"),i(y,"class","skills section"),i(y,"id","skills"),i(M,"class","section-title"),b(w.src,X=Pe)||i(w,"src",X),i(w,"alt",""),i(N,"class","work__img"),b($.src,ee=Re)||i($,"src",ee),i($,"alt",""),i(P,"class","work__img"),b(L.src,se=qe)||i(L,"src",se),i(L,"alt",""),i(R,"class","work__img"),b(j.src,le=Oe)||i(j,"src",le),i(j,"alt",""),i(q,"class","work__img"),b(E.src,ne=Ue)||i(E,"src",ne),i(E,"alt",""),i(O,"class","work__img"),b(A.src,re=Ie)||i(A,"src",re),i(A,"alt",""),i(U,"class","work__img"),i(d,"class","work__container bd-grid"),i(g,"class","work section"),i(g,"id","work"),i(H,"class","contact section"),i(H,"id","contact"),i(I,"class","footer-area")},m(J,he){xe(J,t,he),s(t,a),s(t,o),s(t,l),s(l,r),s(l,_),s(l,p),s(l,m),s(l,c),s(c,v),s(t,k),s(t,h),s(t,x),s(t,y),s(t,Q),s(t,g),s(g,M),s(g,W),s(g,d),s(d,N),s(N,w),s(d,Z),s(d,P),s(P,$),s(d,te),s(d,R),s(R,L),s(d,ie),s(d,q),s(q,j),s(d,ae),s(d,O),s(O,E),s(d,ce),s(d,U),s(U,A),s(t,oe),s(t,H),s(t,de),s(t,I)},p:T,i:T,o:T,d(J){J&&pe(t)}}}class Ye extends Me{constructor(t){super(),Ce(this,t,null,Ve,be,{})}}new Ye({target:document.getElementById("app")});
