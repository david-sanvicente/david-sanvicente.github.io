(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/chai.16809aa7.svg"},function(e,a,t){e.exports=t.p+"static/media/css3.3707da3c.svg"},function(e,a,t){e.exports=t.p+"static/media/git.43d302c6.svg"},function(e,a,t){e.exports=t.p+"static/media/html5.f0361c5e.svg"},function(e,a,t){e.exports=t.p+"static/media/nodejs.a22a4241.svg"},function(e,a,t){e.exports=t.p+"static/media/react.4009eef3.svg"},function(e,a,t){e.exports=t.p+"static/media/github-2.f2948be7.svg"},function(e,a,t){e.exports=t.p+"static/media/redux.32388bba.svg"},function(e,a,t){e.exports=t.p+"static/media/express.0fb30b49.svg"},function(e,a,t){e.exports=t.p+"static/media/sequelize.43c9d125.svg"},function(e,a,t){e.exports=t.p+"static/media/sprayrbg.dc8c5903.jpg"},function(e,a,t){e.exports=t(31)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),s=t.n(c),i=t(1),r=t(2),o=t(4),m=t(3),u=t(5),d=(t(26),t(27),document.getElementById("modal-root")),p=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).el=void 0,t.el=document.createElement("div"),t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){d.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){d.removeChild(this.el)}},{key:"render",value:function(){return s.a.createPortal(this.props.children,this.el)}}]),a}(n.Component),h=t(6),E=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleCloseClick=t.handleCloseClick.bind(Object(h.a)(Object(h.a)(t))),t.handleBodyClick=t.handleBodyClick.bind(Object(h.a)(Object(h.a)(t))),t.state={animateOut:!1},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"handleCloseClick",value:function(e){var a=this;e.isDefaultPrevented||e.preventDefault(),e.stopPropagation(),this.setState({animateOut:!0}),setTimeout(function(){a.props.close()},1e3)}},{key:"handleBodyClick",value:function(e){e.isDefaultPrevented||e.preventDefault(),e.stopPropagation()}},{key:"render",value:function(){return this.props.children({animateOut:this.state.animateOut,bodyClick:this.handleBodyClick,closeClick:this.handleCloseClick})}}]),a}(l.a.Component),g=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleOpenModalClick=function(e){e.preventDefault(),t.toggleModal()},t.toggleModal=function(){t.setState({modalOpen:!t.state.modalOpen})},t.state={modalOpen:!1},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{href:"https://www.linkedin.com/in/davidsanvicente/",className:"action",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin-in"}),l.a.createElement("span",null,"LinkedIn")),l.a.createElement("a",{href:"https://github.com/david-sanvicente",className:"action",target:"_blank"},l.a.createElement("i",{className:"fab fa-github"}),l.a.createElement("span",null,"Github")),l.a.createElement("a",{href:"https://drive.google.com/file/d/1VrxIlvWJUZJPrqPIaRQOzAPP-pieyikU/view?usp=sharing",className:"action",target:"_blank"},l.a.createElement("i",{className:"fas fa-newspaper"}),l.a.createElement("span",null,"Resume")),this.state.modalOpen&&l.a.createElement(p,null,l.a.createElement(E,{close:this.toggleModal},function(e){var a=e.animateOut,t=e.bodyClick,n=e.closeClick;return l.a.createElement("div",{className:"modal-container ".concat(a?"modal-container--animate-out":""),onClick:n},l.a.createElement("div",{className:"modal ".concat(a?"modal--animate-out":""),onClick:t},l.a.createElement("div",{className:"modal__title"},l.a.createElement("p",null,"My Email")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"my-email"},l.a.createElement("p",null,"david.sanvicente.js@gmail.com")))))})))}}]),a}(l.a.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"header"},l.a.createElement("nav",{className:"header__nav"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"David",l.a.createElement("span",null,"Sanvicente")),l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement("a",{href:"#about-me"},"About Me")),l.a.createElement("li",null,l.a.createElement("a",{href:"#projects"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:david.sanvicente.js@gmail.com?subject = Feedback&body = Message"},"Contact"))))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"header__name-tag"},l.a.createElement("h1",null,"Full Stack Software Engineer"),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-map-marker-alt",style:{marginRight:"15px"}}),l.a.createElement("strong",null,"New York Metro Area"))),l.a.createElement("div",{className:"header__actions"},l.a.createElement(g,null)))))}}]),a}(l.a.Component),b=(t(28),t(9)),v=t.n(b),N=t(10),j=t.n(N),_=t(11),y=t.n(_),O=t(12),k=t.n(O),w=t(13),C=t.n(w),x=t(14),M=t.n(x),P=t(15),R=t.n(P),D=t(16),S=t.n(D),I=t(17),U=t.n(I),B=t(18),F=t.n(B),A=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"technologies",className:"technologies-bar"},l.a.createElement("div",{className:"container"},l.a.createElement("img",{className:"technologies-bar__image",src:R.a,alt:"github"}),l.a.createElement("img",{className:"technologies-bar__image",src:y.a,alt:"git"}),l.a.createElement("img",{className:"technologies-bar__image",src:v.a,alt:"chai"}),l.a.createElement("img",{className:"technologies-bar__image",src:S.a,alt:"redux"}),l.a.createElement("img",{className:"technologies-bar__image",src:M.a,alt:"react"}),l.a.createElement("img",{className:"technologies-bar__image",src:C.a,alt:"nodejs"}),l.a.createElement("img",{className:"technologies-bar__image",src:U.a,alt:"express.js"}),l.a.createElement("img",{className:"technologies-bar__image",src:F.a,alt:"sequelize"}),l.a.createElement("img",{className:"technologies-bar__image",src:j.a,alt:"css"}),l.a.createElement("img",{className:"technologies-bar__image",src:k.a,alt:"html"})))}}]),a}(l.a.Component),T=(t(29),t(19)),V=t.n(T),q=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"projects",className:"projects"},l.a.createElement("h1",{className:"heading"},"Projects"),l.a.createElement("div",{className:"projects__grid"},l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"col-1"},l.a.createElement("h3",{className:"heading-secondary"},l.a.createElement("span",{className:"highlight"},"Spray-R")),l.a.createElement("div",{className:"project__display"},l.a.createElement("div",{className:"project__display__poster"},l.a.createElement("a",{href:"https://www.youtube.com/watch?v=p1x6HlvMUgU"},l.a.createElement("img",{src:V.a,alt:"Project Thumbnail"}))),l.a.createElement("div",{className:"project__display__actions"},l.a.createElement("a",{href:"https://www.youtube.com/watch?v=p1x6HlvMUgU",className:"link"},l.a.createElement("i",{className:"fas fa-desktop"}),l.a.createElement("span",{className:"highlight"},"Live Preview")),l.a.createElement("a",{href:"https://github.com/string-cheese-fsa/spray-r",className:"link"},l.a.createElement("i",{className:"fas fa-code-branch"}),l.a.createElement("span",{className:"highlight"},"View Source"))),l.a.createElement("p",{className:"aside"},"Spray-R is a mobile ",l.a.createElement("span",{className:"highlight"},"augmented reality")," graffiti app. Draw on real world surfaces and share your art with users nearby.")),l.a.createElement("div",{className:"project__technologies"},l.a.createElement("p",{className:"small-section-title"},"Technologies Used"),l.a.createElement("ul",{className:"project__technologies__list"},l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-dot-circle"}),l.a.createElement("p",null,"React")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-dot-circle"}),l.a.createElement("p",null,"Redux")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-dot-circle"}),l.a.createElement("p",null,"Viro")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-dot-circle"}),l.a.createElement("p",null,"Node.js")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-dot-circle"}),l.a.createElement("p",null,"Express")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-dot-circle"}),l.a.createElement("p",null,"Sequelize")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-dot-circle"}),l.a.createElement("p",null,"PostgreSQL"))))),l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"project__detail-section"},l.a.createElement("p",{className:"small-section-title"},"My Role"),l.a.createElement("p",null,"In this group project I woked extensively on the ",l.a.createElement("span",{className:"highlight"},"reducer"),". This held our application state data, an array of arrays containing the coordinate points that represent what the user draws. I also worked to complete the ",l.a.createElement("span",{className:"highlight"},"Download")," functionality, which pulled from the server geo-cached art objects saved by other nearby users and mapped it onto an AR plan on the user's device. ")),l.a.createElement("div",{className:"project__detail-section"},l.a.createElement("p",{className:"small-section-title"},"Project Difficulties"),l.a.createElement("p",null,"During development, we discovered that the Viro library we were using was incapable of rendering any non-Viro components to our AR scene. This presented a serious problem to our application, as Viro's \"Navigator\" Component wouldn't facilitate the passing of data between parent and child components.")),l.a.createElement("div",{className:"project__detail-section"},l.a.createElement("p",{className:"small-section-title"},"My Solution"),l.a.createElement("p",null,"To resolve this, we implemented ",l.a.createElement("span",{className:"highlight"},"Redux")," to connect the two components via a single store.")),l.a.createElement("div",{className:"project__detail-section"},l.a.createElement("p",{className:"small-section-title"},"Notable Features"),l.a.createElement("ul",{className:"project__technologies__list project__technologies__list--no-grid"},l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-dot-circle"}),l.a.createElement("p",null,"Augmented Reality")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-dot-circle"}),l.a.createElement("p",null,"Geo-caching"))))))))}}]),a}(n.Component),z=(t(30),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"page-grid"},l.a.createElement(f,null),l.a.createElement(A,null),l.a.createElement(q,null),l.a.createElement("footer",{id:"footer",className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Contact Me",l.a.createElement("br",null),l.a.createElement("small",null,"Please reach out with any questions or feedback")),l.a.createElement("div",{id:"emailMe"},l.a.createElement("a",{href:"mailto:david.sanvicente.js@gmail.com?subject = Feedback&body = Message"},l.a.createElement("h4",{id:"emailMe"},"david.sanvicente.js@gmail.com")))))))}}]),a}(l.a.Component)),J=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(z,null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[20,1,2]]]);
//# sourceMappingURL=main.4d50a333.chunk.js.map