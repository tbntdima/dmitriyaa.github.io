(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(t,e,a){"use strict";a.r(e);var n=a(9),r=a.n(n),i=a(0),o=a.n(i),c=a(175),l=a(30),s=a(185),m=a(183),d=a(173),h=l.default.em.withConfig({displayName:"Bio__CustomEM",componentId:"sc-1xze3le-0"})(["color:",";font-style:normal;"],function(t){return t.theme.colorMain}),u=function(){return o.a.createElement("div",null,o.a.createElement("h1",{style:{marginTop:0}},"I'm Dmitriy An"),o.a.createElement("p",{style:{marginBottom:Object(d.a)(.5)}},"Professional self-taught ",o.a.createElement(h,null,"Frontend Developer"),", who is building beautiful, clean and modern websites."),o.a.createElement("p",{style:{marginBottom:Object(d.a)(.5)}},"I love ",o.a.createElement(h,null,"JavaScript"),", and currently specialized at"," ",o.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React")," ","library and its huge ecosystem."),o.a.createElement("p",{style:{marginBottom:Object(d.a)(.5)}},"Working on"," ",o.a.createElement("a",{href:"https://www.strv.com/",target:"_blank",rel:"noopener noreferrer"},"@STRV")))},g=a(219),p=a(297),f=a(20),b=Object(l.keyframes)(["",""],g.bounceInDown),y=l.default.div.withConfig({displayName:"AnimatedCollapse__AnimatedDiv",componentId:"sc-1n73y2e-0"})(["overflow:hidden;animation-name:",";animation-duration:","s;"],function(t){return t.isActive?b:""},function(t){return t.animationDuration}),v=l.default.h2.withConfig({displayName:"AnimatedCollapse__Heading",componentId:"sc-1n73y2e-1"})(["margin-top:",";transition:0.3s;cursor:pointer;&:hover{transform:translateX(",");}"],Object(d.a)(.25),function(t){return t.active?0:Object(d.a)(.25)}),A=function(t){var e=t.title,a=t.currentHash,n=t.animationDuration,r=void 0===n?1:n,i=t.children,c=e.toLowerCase(),l="#"+c;return o.a.createElement("div",null,o.a.createElement(v,{onClick:function(){Object(f.navigate)(a===l?"/":"/"+l),a!==l&&setTimeout(function(){document.getElementById(c).scrollIntoView({behavior:"smooth"})},200*r)},active:a===l,id:c},e),o.a.createElement(p.Collapse,{isOpened:a===l,style:{overflow:"hidden"}},o.a.createElement(y,{isActive:a===l,animationDuration:r},o.a.createElement("div",null,i))))},x=(a(203),a(174)),w=a(5),j=a.n(w),E=a(193),I=l.default.div.withConfig({displayName:"Blog__TitleWrapper",componentId:"sc-129x0oi-0"})(["display:flex;align-items:center;justify-content:flex-start;padding-bottom:",";border-bottom:1.5px solid ",";"],Object(d.a)(.25),function(t){return j()(t.theme.colorAccent).darken().alpha(.5)}),C=l.default.h3.withConfig({displayName:"Blog__Title",componentId:"sc-129x0oi-1"})(["",";margin:0;"],Object(d.b)(.25)),O=l.default.div.withConfig({displayName:"Blog__Tag",componentId:"sc-129x0oi-2"})(["padding:0.25rem 0.5rem;border-radius:2px;background:",";color:#fff;font-size:0.7rem;line-height:1;text-transform:uppercase;box-shadow:0 1px 3px rgba(0,0,0,0.15);"],function(t){return j()(t.theme.colorAccent).darken(1)}),k=l.default.small.withConfig({displayName:"Blog__Subtitle",componentId:"sc-129x0oi-3"})(["color:",";opacity:0.85;"],function(t){return t.theme.colorAccent}),S=l.default.p.withConfig({displayName:"Blog__Description",componentId:"sc-129x0oi-4"})(["",";margin-top:",";"],Object(d.b)(-1/6),Object(d.a)(.25)),M=Object(l.withTheme)(function(t){var e=t.posts;t.theme;return o.a.createElement("div",{style:{paddingTop:Object(d.a)(.5)}},e.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return o.a.createElement("article",{key:e.fields.slug},o.a.createElement(x.a,{to:e.fields.slug},o.a.createElement(I,null,e.frontmatter.tags.map(function(t){return o.a.createElement(O,{key:t,style:{marginRight:Object(d.a)(.5)}},t)}),o.a.createElement(C,null,a))),o.a.createElement(k,null,e.frontmatter.date," • "+Object(E.a)(e.timeToRead)),o.a.createElement(S,{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))}),B=(a(308),a(186)),R=a(187),G=a(309),N=l.default.div.withConfig({displayName:"Projects__TitleWrapper",componentId:"sc-1xcqapw-0"})(["display:flex;align-items:center;justify-content:flex-start;padding-bottom:",";border-bottom:1.5px solid ",";"],Object(d.a)(.25),function(t){return j()(t.theme.colorAccent).darken().alpha(.5)}),L=l.default.h3.withConfig({displayName:"Projects__Title",componentId:"sc-1xcqapw-1"})(["",";margin:0;"],Object(d.b)(.25)),Z=l.default.div.withConfig({displayName:"Projects__Tag",componentId:"sc-1xcqapw-2"})(["padding:0.25rem 0.5rem;border-radius:2px;background:",";color:#fff;font-size:0.7rem;line-height:1;text-transform:uppercase;box-shadow:0 1px 3px rgba(0,0,0,0.15);"],function(t){return j()(t.theme.colorAccent).darken(1)}),F=l.default.small.withConfig({displayName:"Projects__Subtitle",componentId:"sc-1xcqapw-3"})(["color:",";opacity:0.85;"],function(t){return t.theme.colorAccent}),D=l.default.div.withConfig({displayName:"Projects__ProjectLinks",componentId:"sc-1xcqapw-4"})(["margin-top:",";margin-bottom:",";margin-left:",";"],Object(d.a)(.5),Object(d.a)(.5),Object(d.a)(.25)),T=l.default.a.withConfig({displayName:"Projects__ProjectLink",componentId:"sc-1xcqapw-5"})(["margin-right:",";border-bottom:none;",";& svg{margin-right:",";font-size:1.2rem;transition:0.3s;}&:hover svg{transform:rotate(1turn) scale(1.2);}"],Object(d.a)(.5),Object(d.b)(-.25),Object(d.a)(.25)),z=l.default.p.withConfig({displayName:"Projects__Description",componentId:"sc-1xcqapw-6"})(["",";margin-top:",";margin-bottom:",";"],Object(d.b)(-1/6),Object(d.a)(.25),Object(d.a)(1/3)),W=l.default.div.withConfig({displayName:"Projects__ImagesWrapper",componentId:"sc-1xcqapw-7"})(["display:flex;flex-wrap:wrap;"]),Y=l.default.img.withConfig({displayName:"Projects__Image",componentId:"sc-1xcqapw-8"})(["margin-bottom:0;border-radius:4px;box-shadow:3px 3px 5px rgba(0,0,0,0.15);transform:scale(0.98);transition:0.3s;&:hover{transform:scale(0.99);box-shadow:3px 3px 10px rgba(0,0,0,0.35);}"]),J=Object(l.withTheme)(function(t){var e=t.posts;t.theme;return o.a.createElement("div",{style:{paddingTop:Object(d.a)(.5)}},e.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return o.a.createElement("article",{key:e.fields.slug,style:{marginBottom:Object(d.a)(1)}},o.a.createElement(x.a,{to:e.fields.slug},o.a.createElement(N,null,e.frontmatter.tags.map(function(t){return o.a.createElement(Z,{key:t,style:{marginRight:Object(d.a)(.5)}},t)}),o.a.createElement(L,null,a))),o.a.createElement(F,null,e.frontmatter.date),o.a.createElement(z,{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}),(e.frontmatter.githubUrl||e.frontmatter.liveUrl)&&o.a.createElement(D,null,e.frontmatter.githubUrl&&o.a.createElement(T,{href:e.frontmatter.githubUrl,target:"_blank"},o.a.createElement(B.a,{icon:R.a}),"github"),e.frontmatter.liveUrl&&o.a.createElement(T,{href:e.frontmatter.liveUrl,target:"_blank"},o.a.createElement(B.a,{icon:G.a}),"live")),o.a.createElement(W,null,o.a.createElement(c.Box,{order:[2,1,1],width:[1,1/3,1/3],p:2,style:{textAlign:"center"}},e.frontmatter.mobileImage&&"no-image"!==e.frontmatter.mobileImage.name&&o.a.createElement(x.a,{to:e.fields.slug,style:{borderBottom:"none"}},o.a.createElement(Y,{src:e.frontmatter.mobileImage.publicURL,alt:a}))),o.a.createElement(c.Box,{order:[1,2,2],width:[1,2/3,2/3],p:2,style:{textAlign:"center"}},e.frontmatter.desktopImage&&"no-image"!==e.frontmatter.desktopImage.name&&o.a.createElement(x.a,{to:e.fields.slug,style:{borderBottom:"none"}},o.a.createElement(Y,{src:e.frontmatter.desktopImage.publicURL,alt:a})))))}))});a.d(e,"pageQuery",function(){return P});var K=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.location,a=t.data,n=a.blogData,r=a.projectsData.edges,i=n.edges,l=e.hash;return o.a.createElement(s.a,null,o.a.createElement(m.a,{title:""}),o.a.createElement(c.Box,{style:{maxWidth:"540px"},mb:Object(d.a)(1)},o.a.createElement(u,null)),o.a.createElement(A,{title:"Projects",currentHash:l},o.a.createElement(J,{posts:r})),o.a.createElement(A,{title:"Blog",currentHash:l},o.a.createElement(M,{posts:i})))},e}(o.a.Component),P=(e.default=Object(l.withTheme)(K),"3228953189")},173:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return m});a(21);var n=a(189),r=a.n(n),i=a(190),o=a.n(i),c=Object.assign({},o.a,{headerFontFamily:["Open Sans","sans-serif"],googleFonts:[{name:"Open Sans",styles:["300"]},{name:"Quattrocento Sans",styles:["400","400i","700"]}],headerWeight:300});c.overrideThemeStyles=function(){return{a:{backgroundImage:"none",textShadow:"none"}}};var l=new r.a(c);var s=l.rhythm,m=l.scale},174:function(t,e,a){"use strict";a.d(e,"b",function(){return m});var n=a(0),r=a.n(n),i=a(1),o=a.n(i),c=a(40),l=a.n(c);a.d(e,"a",function(){return l.a});a(176);var s=r.a.createContext({}),m=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},176:function(t,e,a){var n;t.exports=(n=a(177))&&n.default||n},177:function(t,e,a){"use strict";a.r(e);a(21);var n=a(0),r=a.n(n),i=a(1),o=a.n(i),c=a(67),l=a(3),s=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},178:function(t){t.exports={data:{site:{siteMetadata:{social:{twitter:"just_dmitriy_an",github:"dmitriyaa",instagram:"tbat_dima",linkedin:"dmitriy-an-431465106"}}}}}},179:function(t,e,a){t.exports=a.p+"static/logo-4d4da3f7a86e7446e3e8dc47963921ec.png"},180:function(t,e){t.exports="data:image/png;base64,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"},181:function(t,e){t.exports="data:image/png;base64,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"},183:function(t,e,a){"use strict";a(21);var n=a(184),r=a(0),i=a.n(r),o=a(1),c=a.n(o),l=a(192),s=a.n(l);function m(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title,l=n.data.site,m=e||l.siteMetadata.description;return i.a.createElement(s.a,Object.assign({htmlAttributes:{lang:a}},c?{titleTemplate:"%s — "+l.siteMetadata.title,title:c}:{title:l.siteMetadata.title+" — Frontend Developer"},{meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)}))}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=m},184:function(t){t.exports={data:{site:{siteMetadata:{title:"Dmitriy An",description:"Personal website and blog by Dmitriy An.",author:"Dmitriy An"}}}}},185:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(30),o=a(175),c=a(173),l=a(174),s=(a(21),a(178)),m=a(186),d=a(187),h=i.default.a.withConfig({displayName:"Socials__SocialLink",componentId:"p6ktwf-0"})(["display:inline-flex;padding:0.25rem;border-bottom:none;",";line-height:1;transition:0.5s;&:hover{transform:rotate(1turn);}@media (max-width:","){",";}"],Object(c.b)(.8),function(t){return t.theme.bp.mobile},Object(c.b)(.9)),u=function(t){var e=t.faIcon,a=t.url;return r.a.createElement(h,{href:a,target:"_blank"},r.a.createElement(m.a,{icon:e}))},g=function(t){var e=t.direction,a=t.data.site.siteMetadata.social;return r.a.createElement(o.Flex,{flexDirection:"vertical"===e?["row","column"]:["row"]},r.a.createElement(u,{faIcon:d.b,url:"https://github.com/"+a.github}),r.a.createElement(u,{faIcon:d.e,url:"https://twitter.com/"+a.twitter}),r.a.createElement(u,{faIcon:d.d,url:"https://www.linkedin.com/in/"+a.linkedin}),r.a.createElement(u,{faIcon:d.c,url:"https://www.instagram.com/"+a.instagram}))},p=function(t){return r.a.createElement(l.b,{query:"91053698",render:function(e){return r.a.createElement(g,Object.assign({data:e},t))},data:s})},f=a(179),b=a.n(f),y=i.default.div.withConfig({displayName:"Sidebar__Logo",componentId:"sc-1i2xt1f-0"})(["max-width:200px;margin:0 auto;transition:0.3s;"]),v=function(t){var e=t.isSingleColLayout;return r.a.createElement("div",null,r.a.createElement(l.a,{to:"/",style:{border:"none"}},r.a.createElement(y,null,r.a.createElement("img",{src:b.a,alt:"Dmitriy An",style:{marginBottom:0}}))),r.a.createElement(o.Flex,{justifyContent:e?["center"]:["center","flex-end"]},r.a.createElement(p,{direction:e?"horizontal":"vertical"})))},A=a(9),x=a.n(A),w=a(33),j=a(66),E=a(94),I=a.n(E),C=(a(191),Object(i.withTheme)(function(t){var e=t.theme,a=t.icons,n=t.checked,i=t.onChange,o=I()(t,["theme","icons","checked","onChange"]);return console.log(n),r.a.createElement("div",{className:"react-toggle "+(n?"react-toggle--checked":"react-toggle--disabled"),onClick:i},r.a.createElement("div",{className:"react-toggle-track"},r.a.createElement("div",{className:"react-toggle-track-check"},a.checked),r.a.createElement("div",{className:"react-toggle-track-x"},a.unchecked)),r.a.createElement("div",{className:"react-toggle-thumb",style:{boxShadow:"0px 0px 2px 3px "+e.colorMain}}),r.a.createElement("input",Object.assign({},o,{className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))})),O=a(180),k=a.n(O),S=a(181),M=a.n(S),B=function(t){function e(){return t.apply(this,arguments)||this}return x()(e,t),e.prototype.render=function(){var t=this.props,e=t.isDarkMode,a=t.toggleDarkMode;return r.a.createElement(C,{icons:{checked:r.a.createElement("img",{src:M.a,width:"16",height:"16",alt:"presentation",style:{pointerEvents:"none"}}),unchecked:r.a.createElement("img",{src:k.a,width:"16",height:"16",alt:"presentation",style:{pointerEvents:"none"}})},checked:e,onChange:function(){console.log("toggling dark mode "+e),a()}})},e}(r.a.Component),R=Object(w.b)(function(t){return{isDarkMode:t.app.isDarkMode}},function(t){return{toggleDarkMode:function(){t(Object(j.b)())}}})(B),G=i.default.div.withConfig({displayName:"FixedBackground",componentId:"sc-1ije9v2-0"})(["position:fixed;top:0;right:0;width:100vw;height:100vh;z-index:",";display:flex;justify-content:stretch;align-items:stretch;"],function(t){return t.zIndex?t.zIndex:-1}),N=function(t){var e=t.zIndex,a=t.children;return r.a.createElement(G,{zIndex:e},a)},L=(a(182),a(5)),Z=a.n(L),F={init:function(t,e){void 0===e&&(e="#9aa4c2");var a=this;this.config={perspective:3,star_color:e,speed:.1,stars_count:3},this.canvas=t,this.context=this.canvas.getContext("2d"),this.start(),window.onresize=function(){a.start()}},start:function(){this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight,this.canvas_center_x=this.canvas.width/2,this.canvas_center_y=this.canvas.height/2,this.stars_count=this.canvas.width/this.config.stars_count,this.focal_length=this.canvas.width/this.config.perspective,this.speed=this.config.speed*this.canvas.width/2e3,this.stars=[];for(var t=0;t<this.stars_count;t++)this.stars.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,z:Math.random()*this.canvas.width});window.cancelAnimationFrame(this.animation_frame),this.canvas.style.opacity=1,this.render()},render:function(){var t=this;this.animation_frame=window.requestAnimationFrame(function(){t.render()}),this.context.clearRect(0,0,this.canvas.width,this.canvas.height);for(var e=0,a=this.stars.length;e<a;e+=1){var n=this.stars[e];n.z-=this.speed,n.z<=0&&(this.stars[e]={x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,z:this.canvas.width});var r=(n.x-this.canvas_center_x)*(this.focal_length/n.z)+this.canvas_center_x,i=(n.y-this.canvas_center_y)*(this.focal_length/n.z)+this.canvas_center_y,o=Math.max(0,this.focal_length/n.z*1.4/2),c=1.2-n.z/this.canvas.width,l=Math.max(.1,this.focal_length/n.z*100/2);n.cow?(this.context.save(),this.context.translate(r-l+l/2,i-l+l/2),this.context.rotate(n.z/n.rotation_speed),this.context.translate(-(r-l+l/2),-(i-l+l/2)),this.context.globalAlpha=c,this.context.drawImage(this.cow,0,0,this.cow.width,this.cow.width,r-l,i-l,l,l),this.context.restore()):(this.context.fillStyle=Z()(this.config.star_color).alpha(c),this.context.beginPath(),this.context.arc(r,i,o,0,2*Math.PI),this.context.fill())}}},D=function(t){function e(e){var a;return(a=t.call(this,e)||this).canvas=r.a.createRef(),a}x()(e,t);var a=e.prototype;return a.componentDidMount=function(){F.init(this.canvas.current,this.props.theme.colorSpaceBackgroundStars)},a.componentDidUpdate=function(t){this.props.theme.colorSpaceBackgroundStars!==t.theme.colorSpaceBackgroundStars&&F.init(this.canvas.current,this.props.theme.colorSpaceBackgroundStars)},a.render=function(){return r.a.createElement("canvas",{style:{width:"100%",height:"100%",background:this.props.theme.colorBackground,transition:".3s"},ref:this.canvas})},e}(n.Component),T=Object(i.withTheme)(D),z=i.default.main.withConfig({displayName:"Layout__PageWrapper",componentId:"g3mgjj-0"})(["position:relative;display:flex;align-items:center;justify-content:center;height:100%;min-height:100vh;"]),W=i.default.div.withConfig({displayName:"Layout__ContentWrapper",componentId:"g3mgjj-1"})(["display:flex;flex-wrap:wrap;width:100%;max-width:",";margin:"," auto;@media (max-width:","){max-width:540px;margin:"," auto;}"],function(t){return t.isSingleColLayout?"700px":"880px"},Object(c.a)(2),function(t){return t.theme.bp.mobile},Object(c.a)(2)),Y=Object(i.default)(o.Box).withConfig({displayName:"Layout__SidebarBox",componentId:"g3mgjj-2"})(["border-right:2px solid ",";",";@media (max-width:","){border-right:none;}"],function(t){return t.theme.colorLayoutSeparator},function(t){return t.isSingleColLayout?"border-right: none":""},function(t){return t.theme.bp.mobile}),J=i.default.div.withConfig({displayName:"Layout__ThemeToggleContainer",componentId:"g3mgjj-3"})(["position:absolute;top:",";right:",";"],Object(c.a)(1),Object(c.a)(1));e.a=function(t){var e=t.isSingleColLayout,a=void 0!==e&&e,n=t.children;return r.a.createElement(z,null,r.a.createElement(W,{isSingleColLayout:a},r.a.createElement(Y,{isSingleColLayout:a,width:a?[1]:[1,.22],p:Object(c.a)(.5)},r.a.createElement(v,{isSingleColLayout:a})),r.a.createElement(o.Box,{width:a?[1]:[1,.78],p:Object(c.a)(.75)},n)),r.a.createElement(J,null,r.a.createElement(R,null)),r.a.createElement(N,null,r.a.createElement(T,null)))}},193:function(t,e,a){"use strict";a.d(e,"a",function(){return n});a(182);function n(t){var e=Math.round(t/5);return e>5?new Array(Math.round(e/Math.E)).fill("🍱").join("")+" "+t+" min read":new Array(e||1).fill("☕️").join("")+" "+t+" min read"}}}]);
//# sourceMappingURL=component---src-pages-index-js-f66b1e22f974e04a44c0.js.map