(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(41)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),l=a(10),s=a(5),o=a(6),u=a(8),m=a(7),f=a(9),p=(a(31),a(14)),d=a(11),b=(a(32),a(33),function(e){var t=e.title,a=e.description,n=e.imgUrl,c=e.imdbUrl,i=e.id;return r.a.createElement(p.b,{to:"/film/".concat(i),className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:n,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:c},"IMDB"))))});b.defaultProps={description:""};var h=a(25);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var v={ADD_NEW_FILM:"FILM::ADD"},O=function(e){return{type:v.ADD_NEW_FILM,payload:e}},y={films:[]};var E=function(e){var t=e(),a=[];return{getState:function(){return t},dispatch:function(n){t=e(t,n),a.forEach(function(e){return e(t)})},subscribe:function(e){if("function"!==typeof e)throw new Error("Callback should be a function");return a.push(e),function(){a=a.filter(function(t){return t!==e})}}}}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v.ADD_NEW_FILM:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{films:[].concat(Object(h.a)(e.films),[t.payload])});default:return e}}),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={films:E.getState().films},a.unsubscribe=null,a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=E.subscribe(function(){return e.setState({films:E.getState().films})})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.state.films;return r.a.createElement("div",{className:"films"},e.map(function(e){return r.a.createElement(b,Object.assign({key:e.id},e))}))}}]),t}(r.a.Component);j.defaultProps={films:[]};var N=j,w=a(19),P=a(18),D=a.n(P),S=(a(39),Object(n.memo)(function(e){var t=e.error,a=e.name,n=e.label,c=e.type,i=e.onChange,l=e.placeholder,s=e.value,o=D()("input",{"is-danger":!!t}),u=D()("control",{"has-icons-right":!!t}),m="textarea"===c?c:"input";return r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:a,className:"label"},n),r.a.createElement("div",{className:u},r.a.createElement(m,{name:a,id:a,className:o,type:c,placeholder:l,value:s,onChange:i}),t&&r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-exclamation-triangle"}))),t&&r.a.createElement("p",{className:"help is-danger"},t))}));S.defaultProps={error:"",type:"text",placeholder:"Type text here"};var k=function(e,t){return t?null:"Field ".concat(e," is required")};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var U={title:{value:"",error:null},description:{value:"",error:null},imgUrl:{value:"",error:null},imdbUrl:{value:"",error:null}},A={title:k,imgUrl:k,imdbUrl:k},F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=U,a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(function(e){return Object(l.a)({},n,{value:r,error:e[n].error})})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.onAdd,n=a.getFormValue(),r=a.validate(),c=r.hasError,i=r.errors;c?a.setState(function(e){var t=i.map(function(t){var a=Object(w.a)(t,2),n=a[0];return[n,{error:a[1],value:e[n].value}]});return Object.fromEntries(t)}):(a.setState(U),t(n))},a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"getFormValue",value:function(){return Object.entries(this.state).reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(l.a)({},t[0],t[1].value))},{})}},{key:"validate",value:function(){var e=Object.entries(this.state).map(function(e){var t=Object(w.a)(e,2),a=t[0],n=t[1],r=A[a];return[a,r?r(a,n.value):null]});return{hasError:e.some(function(e){return!!e[1]}),errors:e}}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.imgUrl,c=e.imdbUrl;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(S,Object.assign({},t,{name:"title",placeholder:"Input film title",label:"Title",onChange:this.handleChange})),r.a.createElement(S,Object.assign({},a,{type:"textarea",name:"description",placeholder:"Input film description",label:"Description",onChange:this.handleChange})),r.a.createElement(S,Object.assign({},n,{name:"imgUrl",placeholder:"Paste image url",label:"Image url",onChange:this.handleChange})),r.a.createElement(S,Object.assign({},c,{name:"imdbUrl",placeholder:"Paste IMDB url",label:"IMDB url",onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"button is-primary"},"Add film"))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={film:E.getState().films.find(function(e){return String(e.id)===a.props.match.params.id})},a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=E.subscribe(function(){return e.setState({film:E.getState().films.find(function(t){return String(t.id)===e.props.match.params.id})})})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.state.film,t=e.title,a=e.description,n=e.imgUrl,c=e.imdbUrl;return console.log(this.state.film),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:n,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:c},"IMDB"))))}}]),t}(n.Component);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}I.defaultProps={description:""};var W="https://www.omdbapi.com/?apikey=2f4a38c9&t=",M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchWord:""},a.unsubscribe=null,a.handleAddFilm=function(e){var t=E.getState().films;E.dispatch(O(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{id:t[t.length-1].id+1})))},a.handleSearchChange=function(e){var t=e.target;a.setState({searchWord:t.value})},a.searchFilm=function(e){fetch("".concat(W).concat(e)).then(function(e){return e.json()}).then(function(e){var t=e.Title,a=e.Plot,n=e.Poster,r=e.Website,c={id:e.imdbID,title:t,description:a,imgUrl:n,imdbUrl:r};E.dispatch(O(c))})},a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.searchFilm("spider"),this.unsubscribe=E.subscribe(function(){return e.setState()})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this,t=this.state.searchWord;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"box"},r.a.createElement(S,{value:t,name:"searchWord",placeholder:"Type search word",label:"Search film",onChange:this.handleSearchChange}),r.a.createElement("button",{onClick:function(){return e.searchFilm(t)},type:"button",className:"button is-primary"},"Search film")),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:N}),r.a.createElement(d.a,{exact:!0,path:"/film/:id",component:I}))),r.a.createElement("div",{className:"sidebar"},r.a.createElement(F,{onAdd:this.handleAddFilm}))))}}]),t}(n.Component);a(40);i.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0a9fc5a4.chunk.js.map