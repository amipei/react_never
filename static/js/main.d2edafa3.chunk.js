(window.webpackJsonpreast_never=window.webpackJsonpreast_never||[]).push([[0],{35:function(e,t,n){e.exports=n(64)},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchStarted",function(){return me}),n.d(a,"fetchSuccess",function(){return Ee}),n.d(a,"fetchFailure",function(){return fe});var r,c,l=n(0),o=n.n(l),s=n(20),u=n.n(s),i=n(5),m=n(14),E=n(31),f=n(15),p=n(3),h=(n(44),n(9)),d=function(e){return o.a.createElement("div",{className:"app-bar"},o.a.createElement(C,{icon:o.a.createElement(p.g,null),style:{marginLeft:"-12px"}}),o.a.createElement("div",{className:"".concat("app-bar","__title")},o.a.createElement("h1",null)),o.a.createElement(h.a,{to:"/search",className:"".concat("app-bar","__right")},o.a.createElement(C,{icon:o.a.createElement(p.i,null),style:{marginRight:"-12px"}})))},_=(n(46),function(){return o.a.createElement("div",{className:"dividers"})}),b=n(22),S=(n(47),function(e){var t=e.title,n=e.extra,a=Object(b.a)(e,["title","extra"]);return o.a.createElement("div",{className:"header"},o.a.createElement("h2",{className:"".concat("header","__title")},t),o.a.createElement("div",Object.assign({className:"".concat("header","__extra")},a),n))}),v=(n(48),function(e){var t=e.title,n=e.data,a=e.renderItem,r=e.to;return o.a.createElement("div",{className:"express"},o.a.createElement(S,{title:t,extra:o.a.createElement(h.a,{to:r},"\u67e5\u770b\u5168\u90e8")}),o.a.createElement("div",{className:"".concat("express","__content")},n.map(function(e,t){return t>5?null:a(e,t)})))}),C=(n(49),function(e){var t=e.className,n=e.icon,a=Object(b.a)(e,["className","icon"]);return o.a.createElement("span",Object.assign({className:"icon-wrap ".concat(t)},a),n)}),O=n(34),N=(n(50),function(e){var t=e.src,n=e.alt,a=e.style,r=Object(l.useState)("loading"),c=Object(O.a)(r,2),s=c[0],u=c[1];return o.a.createElement("div",{className:"img-wrap",style:a},o.a.createElement("img",{className:"".concat("img-wrap","__img"),src:t,alt:n,onLoad:function(){return u("loaded")},onError:function(){return u("failed")}}),"loading"===s?o.a.createElement("div",{className:"".concat("img-wrap","__mask")},o.a.createElement(p.h,null)):null)}),y=function(e){var t=e.dataSource,n=e.renderItem;return o.a.createElement("ul",null,t.map(n))},g=function(e){var t=e.children,n=e.metaData,a=e.onClick;return o.a.createElement("li",{onClick:function(e){a&&a(n,e)}},t)},A=(n(51),function(e){var t=e.panels;return o.a.createElement("div",{className:"tabs-content"},t)}),w=function(e){var t=e.classPrefix,n=e.panels;return o.a.createElement("nav",{className:"".concat(t,"__nav")},o.a.createElement("div",{className:"".concat(t,"__bar")},o.a.Children.map(n,function(e){if(e){var n=e.props.path,a=e.props.tab;return o.a.createElement(h.a,{to:n,className:"".concat(t,"__tab")},o.a.createElement(a,null))}})))},j=function(e){var t=e.classPrefix,n=void 0===t?"m-tabs":t,a=(e.className,e.children);return o.a.createElement("div",{className:""},o.a.createElement(A,{classPrefix:n,panels:a}),o.a.createElement(w,{classPrefix:n,panels:a}))},H=n(4),F=function(e){var t=e.path,n=e.component;return o.a.createElement(H.b,{path:t,render:function(e){return o.a.createElement(n,null)}})},k=(n(52),function(e){var t=e.children,n=e.onClick,a=void 0===n?function(e){}:n,r=e.metaData;return console.log(r),o.a.createElement("span",{className:"tag",onClick:function(){return a(r)}},t)}),R=(n(53),function(e){var t=e.data,n=T(t);return o.a.createElement("div",{className:"summary"},o.a.createElement("h3",{className:"".concat("summary","__title")},"\u5185\u5bb9\u7b80\u4ecb"),n.map(function(e,t){return o.a.createElement("p",{className:"".concat("summary","__p"),key:t+"text"},e)}))}),T=function(e){for(var t=/([^]*?[\n\r])/g,n=[];;){var a=t.exec(e);if(!a)break;n.push(a[0])}return n},I=(n(54),function(){return o.a.createElement("div",{className:"interest"},o.a.createElement("div",{className:"".concat("interest","__item")},o.a.createElement("span",{className:"".concat("interest","__icon")},o.a.createElement(p.e,null)),o.a.createElement("span",null,"\u559c\u6b22")),o.a.createElement("div",{className:"".concat("interest","__item")},o.a.createElement("span",{className:"".concat("interest","__icon")},o.a.createElement(p.j,null)),o.a.createElement("span",null,"\u5206\u4eab")),o.a.createElement("div",{className:"".concat("interest","__item")},o.a.createElement("span",{className:"".concat("interest","__icon")},o.a.createElement(p.c,null)),o.a.createElement("span",null,"\u5728\u770b")))}),D=n(16);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach(function(t){Object(D.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}!function(e){e.FETCH_STARTED="DETAILS/FETCH_STARTE",e.FETCH_SUCCESS="DETAILS/FETCH_SUCCESS",e.FETCH_FAILURE="DETAILS/FETCH_FAILURE"}(r||(r={})),function(e){e[e.LOADING=0]="LOADING",e[e.SUCCESS=1]="SUCCESS",e[e.FAILURE=2]="FAILURE"}(c||(c={}));var L,P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:c.LOADING},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.FETCH_STARTED:return{status:c.LOADING};case r.FETCH_SUCCESS:return U({},e,{status:c.SUCCESS,result:t.result});case r.FETCH_FAILURE:return{status:c.FAILURE};default:return e}},G=i.f,B=n(13),M=n.n(B),q=n(18),J=n(19),V=n.n(J),W="0df993c66c0c636e29ecbb5344252a4a",Y="https://api.douban.com/v2/book",z=function(e){return"".concat(Y,"/search?apikey=").concat(W,"&q=").concat(e,"&fields=title,isbn13&count=10")},K=function(e){return"".concat(Y,"/search?apikey=").concat(W,"&q=").concat(e,"&fields=title,subtitle,author,rating,pubdate,images,publisher,isbn13,alt&count=10")},Q=function(e){return"".concat(Y,"/isbn/").concat(e,"?apikey=").concat(W)},X="".concat(Y,"/search?apikey=").concat(W,"&tag=2019"),Z=function(){var e=Object(q.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V()(z(t)).then(function(e){return e.json()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(q.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V()(K(t)).then(function(e){return e.json()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(q.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V()(Q(t)).then(function(e){return e.json()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(q.a)(M.a.mark(function e(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V()(X).then(function(e){return e.json()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ne=function(e){return function(t){t(ae()),ee(e).then(function(e){t(re(e))}).catch(function(e){t(ce(e))})}},ae=function(){return{type:r.FETCH_STARTED}},re=function(e){return{type:r.FETCH_SUCCESS,result:e}},ce=function(e){return{type:r.FETCH_FAILURE,error:e}},le=(n(56),function(e){var t=function(e){var t=Object(i.e)();Object(l.useEffect)(function(){t(ne(e))},[]);return{state:G(function(e){return e.details},i.d),setDetailsState:function(e){return t(ne(e))}}}(e.match.params.isbn),n=t.state,a=(t.setDetailsState,n.status,n.result);return n.status===c.LOADING?null:n.status===c.FAILURE?null:o.a.createElement("div",{className:"details"},o.a.createElement("nav",{className:"details__nav"},o.a.createElement("span",{className:"details__link",onClick:e.history.goBack},o.a.createElement(p.a,null))),o.a.createElement("div",{className:"".concat("details","__info")},o.a.createElement("div",{className:"".concat("details","__img-wrap")},o.a.createElement("img",{className:"".concat("details","__img"),src:a.image,alt:a.alt})),o.a.createElement("div",{className:"".concat("details","__description")},o.a.createElement("h2",{className:"".concat("details","__title")},a.title),o.a.createElement("span",{className:"".concat("details","__author")},"\u4f5c\u8005\uff1a",a.author),o.a.createElement("span",{className:"".concat("details","__author-intro")}," ",a.author_intro))),o.a.createElement(_,null),o.a.createElement(I,null),o.a.createElement(_,null),o.a.createElement(R,{data:a.summary}))});!function(e){e.CHANGE_VALUE="SEARCH/CHANGE_VALUE",e.CHANGE_HISTORY_SEARCH="SEARCH/CHANGE_HISTORY_SEARCH",e.CHANGE_NOW_SEARCH="SEARCH/CHANGE_NOW_SEARCH",e.CHANGE_SPECIFIC_SEARCH="SEARCH/CHANGE_SPECIFIC_SEARCH"}(L||(L={}));var oe,se=L;!function(e){e.FETCH_STARTED="COMMON/FETCH_STARTED",e.FETCH_SUCCESS="COMMON/FETCH_SUCCESS",e.FETCH_FAILURE="COMMON/FETCH_FAILURE"}(oe||(oe={}));var ue,ie=oe,me=function(){return{type:ie.FETCH_STARTED}},Ee=function(e){return{type:ie.FETCH_SUCCESS,result:e}},fe=function(e){return{type:ie.FETCH_FAILURE,error:e}};!function(e){e.LOADING="loading",e.SUCCESS="success",e.FAILURE="failure"}(ue||(ue={}));var pe=ue;function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach(function(t){Object(D.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var _e={value:"",historySearch:new Set,nowSearch:null,specificSearch:null},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.CHANGE_VALUE:return de({},e,{value:t.value});case se.CHANGE_HISTORY_SEARCH:return console.log(t.historySearch),de({},e,{historySearch:t.historySearch});case se.CHANGE_NOW_SEARCH:return de({},e,{nowSearch:t.nowSearch});case se.CHANGE_SPECIFIC_SEARCH:return de({},e,{historySearch:t.specificSearch});case ie.FETCH_STARTED:return de({},e,{status:pe.LOADING});case ie.FETCH_SUCCESS:return de({},e,{status:pe.SUCCESS,nowSearch:t.result});case ie.FETCH_FAILURE:return de({},e,{status:pe.FAILURE});default:return e}};function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(n,!0).forEach(function(t){Object(D.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Ce,Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:pe.LOADING},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie.FETCH_FAILURE:return{status:pe.LOADING};case ie.FETCH_SUCCESS:return ve({},e,{status:pe.SUCCESS},t.result);case ie.FETCH_FAILURE:return{status:pe.FAILURE};default:return e}},Ne=n(8),ye=n(29),ge=Object(Ne.a)(),Ae=(Ce=ge,Object(m.c)({router:Object(f.b)(Ce),search:be,newBook:Oe,details:P}));n(57);var we,je=function(e){var t=e.classPrefix,n=e.item;e.index;return o.a.createElement(h.a,{to:"/details/".concat(n.isbn13),className:"".concat(t,"__item")},o.a.createElement("div",{className:"".concat(t,"__img-wrap")},o.a.createElement("img",{className:"".concat(t,"__img"),src:"".concat(n.image,"?apikey=").concat(W)})),o.a.createElement("h3",{className:"".concat(t,"__title")},n.title),o.a.createElement("span",{className:"".concat(t,"__author")},n.author))},He=(n(58),function(){return function(e,t){e(a.fetchStarted()),te().then(function(t){e(a.fetchSuccess(t))}).catch(function(t){e(a.fetchFailure(t))})}}),Fe=function(){var e=function(){var e=Object(i.e)();Object(l.useEffect)(function(){e(He())},[]);return{data:G(function(e){return e.newBook},i.d),fetchNewBookData:function(){return e(He())}}}(),t=e.data,n=(e.fetchNewBookData,t.books),a=t.status;console.log(n);return o.a.createElement("div",{className:"new-book"},a===pe.SUCCESS?o.a.createElement(v,{title:"\u65b0\u4e66\u901f\u9012",to:"/newBook/all",data:n,renderItem:function(e,t){return o.a.createElement(je,{classPrefix:"new-book",key:"newbook"+t,index:t,item:e})}}):null)},ke=function(){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement(Fe,null))},Re=(n(59),n(33)),Te=n(6),Ie=n(60),De=function(e){return{type:se.CHANGE_VALUE,value:e}},xe=function(e){return function(t){t(a.fetchStarted),Z(e).then(function(e){t(a.fetchSuccess(e))}).catch(function(e){t(a.fetchFailure(e))})}},Ue=function(e){return function(t){var n;t(De(e)),t((n=null,{type:se.CHANGE_NOW_SEARCH,nowSearch:n})),t(Object(Te.d)("/search/match")),t(Pe(e)),t(Le(e))}},Le=function(e){return function(t){t(a.fetchStarted),$(e).then(function(e){t(a.fetchSuccess(e))}).catch(function(e){t(a.fetchFailure(e))})}},Pe=function(e){return function(t,n){var a=n().search.historySearch,r=Me(a);t(Be(r.add(e))),t(Ge(r))}},Ge=function(e){return function(t){var n=JSON.stringify(Object(Re.a)(e));localStorage.setItem("react-book",n)}},Be=function(e){return{type:se.CHANGE_HISTORY_SEARCH,historySearch:e}},Me=function(e){var t=new Set;return e.forEach(function(e){return t.add(e)}),t},qe=function(){var e=Object(i.e)();return{value:G(function(e){return e.search.value},i.d),onChange:function(t){return e(function(e){return function(t){t(De(e)),0!==e.length?(t(Object(Te.d)("/search/q")),Ie(function(){t(xe(e))},300)()):t(Object(Te.d)("/search"))}}(t))}}},Je=function(){return{nowSearch:G(function(e){return e.search.nowSearch},i.d)}},Ve=function(){var e=Object(i.e)();return{clickResultAction:function(t){return e(Ue(t))}}},We=function(){var e=Object(i.e)();return{loading:function(){return e(function(e){var t,n=localStorage.getItem("react-book");n&&(t=JSON.parse(n)),console.log(t),e(Be(new Set(t)))})},delHistory:function(){return e(function(e){e(Be(new Set)),localStorage.setItem("react-book","")})},historySearch:G(function(e){return e.search.historySearch})}},Ye=function(){var e=We(),t=e.loading,n=e.delHistory,a=e.historySearch,r=Ve().clickResultAction;Object(l.useEffect)(function(){t()},[]);return 0===a.size?null:o.a.createElement("div",{className:"search-history"},o.a.createElement(S,{title:"\u5386\u53f2\u641c\u7d22",extra:o.a.createElement(C,{icon:o.a.createElement(p.k,null)}),onClick:n}),o.a.createElement("div",null,function(){var e=[];return a.forEach(function(t){e.push(o.a.createElement(k,{key:"tag"+t,metaData:t,onClick:r},t))}),e}()))},ze=(n(61),function(e){var t=qe(),n=t.value,a=t.onChange,r=Object(l.useRef)(null);return o.a.createElement("div",{className:"".concat("search-bar")},o.a.createElement(h.a,{className:"".concat("search-bar","__left"),to:"/home"},o.a.createElement(C,{icon:o.a.createElement(p.a,null)})),o.a.createElement("input",{className:"".concat("search-bar","__input"),onChange:function(e){a(e.target.value)},ref:r,type:"text",value:n,placeholder:"\u641c\u7d22"}),n?o.a.createElement(C,{className:"".concat("search-bar","__x"),icon:o.a.createElement(p.l,null),onClick:function(){a("");var e=r.current;e&&e.focus()}}):null)}),Ke=(n(62),function(e){var t=Je().nowSearch,n=Ve().clickResultAction;if(null===t)return null;return o.a.createElement("div",null,o.a.createElement(y,{dataSource:t.books,renderItem:function(e){return o.a.createElement(g,{onClick:n,metaData:e.title,key:e.isbn13},o.a.createElement("div",{className:"".concat("search-list","__item")},e.title))}}))}),Qe=(n(63),{flex:"none",width:"72px",height:"106px",borderRadius:"4px",overflow:"hidden"}),Xe=function(e){var t=e.dataSource;if(console.log(t),null===t)return null;return o.a.createElement("div",{className:"details-list"},o.a.createElement(y,{dataSource:t.books,renderItem:function(e){return o.a.createElement(g,{key:e.isbn13},o.a.createElement(h.a,{className:"".concat("details-list","__wrap"),to:"/details/".concat(e.isbn13)},o.a.createElement(N,{style:Qe,src:e.images.small,alt:e.alt}),o.a.createElement("div",{className:"".concat("details-list","__info")},o.a.createElement("h3",{className:"".concat("details-list","__title")},e.title),e.subtitle?o.a.createElement("h4",{className:"".concat("details-list","__subtitle")}," ",e.subtitle):null,o.a.createElement("span",{className:"".concat("details-list","__other")},e.rating.average," / ",e.author," / ",e.pubdate," / ",e.publisher))))}}))},Ze=function(e){var t=Je().nowSearch;return o.a.createElement("div",null,o.a.createElement(ze,null),o.a.createElement(H.d,null,o.a.createElement(H.b,{exact:!0,path:"/search/",component:Ye}),o.a.createElement(H.b,{exact:!0,path:"/search/q",component:Ke}),o.a.createElement(H.b,{exact:!0,path:"/search/match",render:function(){return o.a.createElement(Xe,{dataSource:t})}})))},$e=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(H.a,{from:"/",to:"/home"}),o.a.createElement(H.d,null,o.a.createElement(H.b,{path:"/newbook/all",component:le}),o.a.createElement(H.b,{path:"/details/:isbn",component:le}),o.a.createElement(H.b,{path:"/search",component:Ze}),o.a.createElement(H.b,{path:"/",render:function(e){return o.a.createElement(j,null,o.a.createElement(F,{path:"/home",component:ke,tab:et}),o.a.createElement(F,{path:"/find",component:ke,tab:tt}),o.a.createElement(F,{path:"/shelf",component:ke,tab:nt}))}})))},et=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"m-tabs__icon"},o.a.createElement(p.f,null)),o.a.createElement("span",{className:"m-tabs__title"},"\u9996\u9875"))},tt=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"m-tabs__icon"},o.a.createElement(p.d,null)),o.a.createElement("span",{className:"m-tabs__title"},"\u63a2\u7d22"))},nt=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"m-tabs__icon"},o.a.createElement(p.b,null)),o.a.createElement("span",{className:"m-tabs__title"},"\u4e66\u67b6"))},at=(we=void 0,Object(m.e)(Ae,we,Object(m.d)(Object(m.a)(Object(ye.a)(ge),E.a))));u.a.render(o.a.createElement(i.a,{store:at},o.a.createElement(f.a,{history:ge},o.a.createElement($e,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d2edafa3.chunk.js.map