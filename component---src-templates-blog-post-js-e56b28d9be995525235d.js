(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(t,e,n){"use strict";n.r(e);n(96),n(97);var a=n(9),i=n.n(a),r=n(0),o=n.n(r),c=n(30),s=n(5),l=n.n(s),d=n(174),h=n(175),m=n(205),u=n.n(m),g=n(173),p=function(t){var e=t.twitterUsername,n=t.style;return o.a.createElement(h.Flex,{style:n},o.a.createElement(h.Box,null,o.a.createElement("img",{src:u.a,alt:"Dmitriy An",style:{margin:0,marginRight:Object(g.a)(.5),maxWidth:"100px",borderRadius:"50%"}})),o.a.createElement(h.Box,{style:{maxWidth:"250px"}},o.a.createElement(d.a,{to:"/"},o.a.createElement("h3",{style:{margin:0}},"dmitriyaa.github.io")),o.a.createElement("p",{style:{margin:0}},"Personal website and blog by"," ",o.a.createElement("a",{href:"https://twitter.com/"+e},"Dmitriy An"))))},f=n(185),A=n(183),y=n(193);n.d(e,"pageQuery",function(){return j});var b=c.default.hr.withConfig({displayName:"blog-post__HorizontalLine",componentId:"sc-1993m0e-0"})(["margin:"," 0;border-bottom:1.5px solid ",";"],Object(g.a)(.25),function(t){return l()(t.theme.colorAccent).darken().alpha(.5)}),v=c.default.h1.withConfig({displayName:"blog-post__Title",componentId:"sc-1993m0e-1"})(["",";margin:0;"],Object(g.b)(1.1)),w=c.default.p.withConfig({displayName:"blog-post__AdditionalInfo",componentId:"sc-1993m0e-2"})(["",";display:block;margin-bottom:",";color:",";opacity:0.85;"],Object(g.b)(-1/3),Object(g.a)(1),function(t){return t.theme.colorAccent}),x=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=t.fileAbsolutePath.includes("/blog/");return o.a.createElement(f.a,{isSingleColLayout:!0},o.a.createElement(A.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),o.a.createElement(d.a,{to:e?"/#blog":"/#projects"},"← home"),o.a.createElement(v,null,t.frontmatter.title),o.a.createElement(b,null),o.a.createElement(w,null,t.frontmatter.date," • "+Object(y.a)(t.timeToRead)),o.a.createElement("div",{style:{marginBottom:Object(g.a)(3)},dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement(b,{style:{marginBottom:Object(g.a)(1.5)}}),o.a.createElement(p,{twitterUsername:this.props.data.site.siteMetadata.social.twitter,style:{marginBottom:Object(g.a)(1)}}))},e}(r.Component),j=(e.default=x,"2513111148")},173:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return d});n(21);var a=n(189),i=n.n(a),r=n(190),o=n.n(r),c=Object.assign({},o.a,{headerFontFamily:["Open Sans","sans-serif"],googleFonts:[{name:"Open Sans",styles:["300"]},{name:"Quattrocento Sans",styles:["400","400i","700"]}],headerWeight:300});c.overrideThemeStyles=function(){return{a:{backgroundImage:"none",textShadow:"none"}}};var s=new i.a(c);var l=s.rhythm,d=s.scale},174:function(t,e,n){"use strict";n.d(e,"b",function(){return d});var a=n(0),i=n.n(a),r=n(1),o=n.n(r),c=n(40),s=n.n(c);n.d(e,"a",function(){return s.a});n(176);var l=i.a.createContext({}),d=function(t){return i.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},176:function(t,e,n){var a;t.exports=(a=n(177))&&a.default||a},177:function(t,e,n){"use strict";n.r(e);n(21);var a=n(0),i=n.n(a),r=n(1),o=n.n(r),c=n(67),s=n(3),l=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?i.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},178:function(t){t.exports={data:{site:{siteMetadata:{social:{twitter:"just_dmitriy_an",github:"dmitriyaa",instagram:"tbat_dima",linkedin:"dmitriy-an-431465106"}}}}}},179:function(t,e,n){t.exports=n.p+"static/logo-4d4da3f7a86e7446e3e8dc47963921ec.png"},180:function(t,e){t.exports="data:image/png;base64,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"},181:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAABlJJREFUWAm1V3tsFEUcntnXvXu0tBWo1ZZHihBjCEWqkHiNaMLDRKOtQSKaiCFKQtS/SbxiFCHGCIkmkBSMwZhQNTFoQZD0DFiwtCDFAkdDqBBBKFj63rvdnfH7zfVo5aFBj0l2Z/dm5vd98/0es8dYjlpr62azufnDQNZcU1PciMfjWvb9rvZSMk4Ayfb36pLH13189GC8LAtIRLLPt+pzwrCuLq4ISEv/gHmitrAwfPbEkXc/ad4dL6iujrvyX0jcitgd/yZlZqftP6995Mr5TVLa22Tn8XVX2g/XLSRjUu7Q79jonS7I7hS7/0oOb5VyqF52n98oj7esXX07EjlxwXWisRmSnm3b29TTM8iYrjmFBWExubxwY/uhNas4r/WySl1fc5cetDMd7ydl+lMJJRw5WC8ud62Xx5rfepzwxgZmbhUYNS5Stvsj4yo2GXJEFBVHWDBkfdbR9HpYBaaUajDnBLKKpl1xRKYcgGtMCqEzTaSnThk/SQT0uJqTqFNBmXMCsZE48DzRZRMBRjv1GHNdk3HBImF9ZUvTyxM40pMKVc4JZBXQOLOFoDeKSxdp6HIQcO4rjYT9fn0pjbz9GLt7BAAODmjSVReXUMFzNW5x5vfxp2mIxZjIuQKJxAmFa+is2DQJJQ0JyBVExNOYcJnPxx/6/utnijmP555ALEagKAGGnGn64QORBjARcIA/yJk7JMJBLRrNtybTvH88KGjCf2jK86bhzmMcwDKFZEQvbIhxFYhChoMWMzU2iWznlIBEVJOsP+1bdX/ALx9l7jApADeDAEcMkE90JnUmmGl4USKQ0xhoW3JB5XY0YrxYWhLwMZZypUyjDGH35AbNwgUGiFBPpuGbHCpAOV1ZGXf2f/taftAv31DyeymN2d1IhAFAwTOmnzF/kKcdh3me7CYCOVNgycju84u8DeVlwfFq9/ZlTfldYrMUjOlrkjkD+rU+WzCROkcEchIDHR011syZW9JHD7y07N6JvhWMpz3pugaTkB6lWFVCKkhck0zzeMp2utq+uHrmfxOgoCO/Z8CXPlEQ1bdH8wgvhSIkEG0ICcQeExIFGdimjvKka7btJFZuaXOammIGKUCFQ53j9EN1dYKWqHf0t2w407W2tgs6h89ZnImjB55flh81tt9XirjjDuSl+oIPRQ0iWPgNZ5GqTqbBe3vSzEl5n5PhWKwocyR2HlqYN61qV18WjYjE8JLARZPQsUSim8foIRYTlGr02Ly7piASFRtKJ4VfieYhxdS2JcDVMN6xVOKZyrCGm8b108lrLRVzvptLH7IoEFLFANes6KnDi+uxfmvFnF17oALq5u1agu3/YfHkcSFzeSggV5eXRfIB7CHNcO5SUI+Ih5Ir7f4MAV9IqdFzdZgNpZw1Gcs1mNvgGbTbqQ9/cz7ZuuhgyYRQ49ljTyWHhr2DwpNHHFf+5gnWZ3Bharo+0TD5dNMw5vv9RlVpSRDHK4TlnoukhtYApuOHejSZQuo5g/A9BysdKRCyLl6062fN37OXMDlvUJtUrtmxo0avrW3wTrYs3jJ9RvRVChrmSmanPMpX2OXMsmDGh6AiEIwBAlvkOqIdBy+8JyAz8pz7QxiDth4KDy5uAlwzrWTnwC8Vc4KVAMZ3YUZ+IqoIjP3h5KFFX1ZMy3uW+7RhEDHgTi0zC9rS7uhPCDiNrGFyqBeERtKN/B0YlyFCkw0NJ5C0Ojv7zvT1a1WV1TuvZDdL4NTgB7CASYpsen6gqvG5jmTf5qHedADgkBl3D0nkSgNhZACDyi0FUKZRr3IdRjgN4WPPoFMIIegIK3mqd38fS80mcJKelM4szNyzZtQbkchGePuBRS8Eg9pHU8ojRQpSqs+ajAIwTjjUMQ/nvTNM0kicwYxZIYMh/891DYi+fvedB+c1xsm4lDU6ya+Axtz+RiAzEVYbajQOpq17F0R9QevNcEhfcU+xvyQQUalGJBSesqOkgPQ4YNyUZL9fSvUPDjoNAwN8/dwFjaczNkc3ptaMud1EIDtGcmXTcefO2cGSvKIFfp/2JIJxlq7xEl3nVPM4fDeIbPkD16/ptNc0bDu7qxbsu0R2JGywWMIjF2ft3tjfloAyQAGXiOn8hrqwbVvMXzaO+QeHXP6nF0wvX74Hf4NGG5GPjSlYoyM3P/0FbCT6zvM/yYoAAAAASUVORK5CYII="},183:function(t,e,n){"use strict";n(21);var a=n(184),i=n(0),r=n.n(i),o=n(1),c=n.n(o),s=n(192),l=n.n(s);function d(t){var e=t.description,n=t.lang,i=t.meta,o=t.keywords,c=t.title,s=a.data.site,d=e||s.siteMetadata.description;return r.a.createElement(l.a,Object.assign({htmlAttributes:{lang:n}},c?{titleTemplate:"%s — "+s.siteMetadata.title,title:c}:{title:s.siteMetadata.title+" — Frontend Developer"},{meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)}))}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d},184:function(t){t.exports={data:{site:{siteMetadata:{title:"Dmitriy An",description:"Personal website and blog by Dmitriy An.",author:"Dmitriy An"}}}}},185:function(t,e,n){"use strict";var a=n(0),i=n.n(a),r=n(30),o=n(175),c=n(173),s=n(174),l=(n(21),n(178)),d=n(186),h=n(187),m=r.default.a.withConfig({displayName:"Socials__SocialLink",componentId:"p6ktwf-0"})(["display:inline-flex;padding:0.25rem;border-bottom:none;",";line-height:1;transition:0.5s;&:hover{transform:rotate(1turn);}@media (max-width:","){",";}"],Object(c.b)(.8),function(t){return t.theme.bp.mobile},Object(c.b)(.9)),u=function(t){var e=t.faIcon,n=t.url;return i.a.createElement(m,{href:n,target:"_blank"},i.a.createElement(d.a,{icon:e}))},g=function(t){var e=t.direction,n=t.data.site.siteMetadata.social;return i.a.createElement(o.Flex,{flexDirection:"vertical"===e?["row","column"]:["row"]},i.a.createElement(u,{faIcon:h.b,url:"https://github.com/"+n.github}),i.a.createElement(u,{faIcon:h.e,url:"https://twitter.com/"+n.twitter}),i.a.createElement(u,{faIcon:h.d,url:"https://www.linkedin.com/in/"+n.linkedin}),i.a.createElement(u,{faIcon:h.c,url:"https://www.instagram.com/"+n.instagram}))},p=function(t){return i.a.createElement(s.b,{query:"91053698",render:function(e){return i.a.createElement(g,Object.assign({data:e},t))},data:l})},f=n(179),A=n.n(f),y=r.default.div.withConfig({displayName:"Sidebar__Logo",componentId:"sc-1i2xt1f-0"})(["max-width:200px;margin:0 auto;transition:0.3s;"]),b=function(t){var e=t.isSingleColLayout;return i.a.createElement("div",null,i.a.createElement(s.a,{to:"/",style:{border:"none"}},i.a.createElement(y,null,i.a.createElement("img",{src:A.a,alt:"Dmitriy An",style:{marginBottom:0}}))),i.a.createElement(o.Flex,{justifyContent:e?["center"]:["center","flex-end"]},i.a.createElement(p,{direction:e?"horizontal":"vertical"})))},v=n(9),w=n.n(v),x=n(33),j=n(66),I=n(94),E=n.n(I),C=(n(191),Object(r.withTheme)(function(t){var e=t.theme,n=t.icons,a=t.checked,r=t.onChange,o=E()(t,["theme","icons","checked","onChange"]);return console.log(a),i.a.createElement("div",{className:"react-toggle "+(a?"react-toggle--checked":"react-toggle--disabled"),onClick:r},i.a.createElement("div",{className:"react-toggle-track"},i.a.createElement("div",{className:"react-toggle-track-check"},n.checked),i.a.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),i.a.createElement("div",{className:"react-toggle-thumb",style:{boxShadow:"0px 0px 2px 3px "+e.colorMain}}),i.a.createElement("input",Object.assign({},o,{className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))})),S=n(180),k=n.n(S),O=n(181),M=n.n(O),G=function(t){function e(){return t.apply(this,arguments)||this}return w()(e,t),e.prototype.render=function(){var t=this.props,e=t.isDarkMode,n=t.toggleDarkMode;return i.a.createElement(C,{icons:{checked:i.a.createElement("img",{src:M.a,width:"16",height:"16",alt:"presentation",style:{pointerEvents:"none"}}),unchecked:i.a.createElement("img",{src:k.a,width:"16",height:"16",alt:"presentation",style:{pointerEvents:"none"}})},checked:e,onChange:function(){console.log("toggling dark mode "+e),n()}})},e}(i.a.Component),R=Object(x.b)(function(t){return{isDarkMode:t.app.isDarkMode}},function(t){return{toggleDarkMode:function(){t(Object(j.b)())}}})(G),Z=r.default.div.withConfig({displayName:"FixedBackground",componentId:"sc-1ije9v2-0"})(["position:fixed;top:0;right:0;width:100vw;height:100vh;z-index:",";display:flex;justify-content:stretch;align-items:stretch;"],function(t){return t.zIndex?t.zIndex:-1}),B=function(t){var e=t.zIndex,n=t.children;return i.a.createElement(Z,{zIndex:e},n)},L=(n(182),n(5)),F=n.n(L),N={init:function(t,e){void 0===e&&(e="#9aa4c2");var n=this;this.config={perspective:3,star_color:e,speed:.1,stars_count:3},this.canvas=t,this.context=this.canvas.getContext("2d"),this.start(),window.onresize=function(){n.start()}},start:function(){this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight,this.canvas_center_x=this.canvas.width/2,this.canvas_center_y=this.canvas.height/2,this.stars_count=this.canvas.width/this.config.stars_count,this.focal_length=this.canvas.width/this.config.perspective,this.speed=this.config.speed*this.canvas.width/2e3,this.stars=[];for(var t=0;t<this.stars_count;t++)this.stars.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,z:Math.random()*this.canvas.width});window.cancelAnimationFrame(this.animation_frame),this.canvas.style.opacity=1,this.render()},render:function(){var t=this;this.animation_frame=window.requestAnimationFrame(function(){t.render()}),this.context.clearRect(0,0,this.canvas.width,this.canvas.height);for(var e=0,n=this.stars.length;e<n;e+=1){var a=this.stars[e];a.z-=this.speed,a.z<=0&&(this.stars[e]={x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,z:this.canvas.width});var i=(a.x-this.canvas_center_x)*(this.focal_length/a.z)+this.canvas_center_x,r=(a.y-this.canvas_center_y)*(this.focal_length/a.z)+this.canvas_center_y,o=Math.max(0,this.focal_length/a.z*1.4/2),c=1.2-a.z/this.canvas.width,s=Math.max(.1,this.focal_length/a.z*100/2);a.cow?(this.context.save(),this.context.translate(i-s+s/2,r-s+s/2),this.context.rotate(a.z/a.rotation_speed),this.context.translate(-(i-s+s/2),-(r-s+s/2)),this.context.globalAlpha=c,this.context.drawImage(this.cow,0,0,this.cow.width,this.cow.width,i-s,r-s,s,s),this.context.restore()):(this.context.fillStyle=F()(this.config.star_color).alpha(c),this.context.beginPath(),this.context.arc(i,r,o,0,2*Math.PI),this.context.fill())}}},D=function(t){function e(e){var n;return(n=t.call(this,e)||this).canvas=i.a.createRef(),n}w()(e,t);var n=e.prototype;return n.componentDidMount=function(){N.init(this.canvas.current,this.props.theme.colorSpaceBackgroundStars)},n.componentDidUpdate=function(t){this.props.theme.colorSpaceBackgroundStars!==t.theme.colorSpaceBackgroundStars&&N.init(this.canvas.current,this.props.theme.colorSpaceBackgroundStars)},n.render=function(){return i.a.createElement("canvas",{style:{width:"100%",height:"100%",background:this.props.theme.colorBackground,transition:".3s"},ref:this.canvas})},e}(a.Component),Y=Object(r.withTheme)(D),z=r.default.main.withConfig({displayName:"Layout__PageWrapper",componentId:"g3mgjj-0"})(["position:relative;display:flex;align-items:center;justify-content:center;height:100%;min-height:100vh;"]),W=r.default.div.withConfig({displayName:"Layout__ContentWrapper",componentId:"g3mgjj-1"})(["display:flex;flex-wrap:wrap;width:100%;max-width:",";margin:"," auto;@media (max-width:","){max-width:540px;margin:"," auto;}"],function(t){return t.isSingleColLayout?"700px":"880px"},Object(c.a)(2),function(t){return t.theme.bp.mobile},Object(c.a)(2)),J=Object(r.default)(o.Box).withConfig({displayName:"Layout__SidebarBox",componentId:"g3mgjj-2"})(["border-right:2px solid ",";",";@media (max-width:","){border-right:none;}"],function(t){return t.theme.colorLayoutSeparator},function(t){return t.isSingleColLayout?"border-right: none":""},function(t){return t.theme.bp.mobile}),K=r.default.div.withConfig({displayName:"Layout__ThemeToggleContainer",componentId:"g3mgjj-3"})(["position:absolute;top:",";right:",";"],Object(c.a)(1),Object(c.a)(1));e.a=function(t){var e=t.isSingleColLayout,n=void 0!==e&&e,a=t.children;return i.a.createElement(z,null,i.a.createElement(W,{isSingleColLayout:n},i.a.createElement(J,{isSingleColLayout:n,width:n?[1]:[1,.22],p:Object(c.a)(.5)},i.a.createElement(b,{isSingleColLayout:n})),i.a.createElement(o.Box,{width:n?[1]:[1,.78],p:Object(c.a)(.75)},a)),i.a.createElement(K,null,i.a.createElement(R,null)),i.a.createElement(B,null,i.a.createElement(Y,null)))}},193:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(182);function a(t){var e=Math.round(t/5);return e>5?new Array(Math.round(e/Math.E)).fill("🍱").join("")+" "+t+" min read":new Array(e||1).fill("☕️").join("")+" "+t+" min read"}},205:function(t,e,n){t.exports=n.p+"static/avatar-9b1fe77c78f9ab2bd35cd60932b864f1.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e56b28d9be995525235d.js.map