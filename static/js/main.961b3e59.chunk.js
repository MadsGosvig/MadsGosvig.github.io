(this["webpackJsonprestuaruant-gosse"]=this["webpackJsonprestuaruant-gosse"]||[]).push([[0],{174:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),s=a.n(c),i=(a(85),a(7)),l=a(10),o=a(22),m=a(182).createClient({space:"wdg89rpqhpev",accessToken:"4NdEMIEctHC8ORP-VbjqD4P51Wn9AV7YCbnllZTQszE",environment:"master"});a(174);var u=a(75),p=a.n(u),d=a(76),f=a.n(d);var v=function(e){var t=e.match,a=Object(n.useState)([]),c=Object(o.a)(a,2),s=c[0],l=c[1];return Object(n.useEffect)((function(){(function(e){var t={content_type:"recipe"};if(e){var a=e.replace(/^\w/,(function(e){return e.toUpperCase()}));t["fields.type"]=a}return m.getEntries(t)})(t.params.category).then((function(e){var t=e.items.sort((function(e,t){var a=e.fields.title.toUpperCase(),n=t.fields.title.toUpperCase();return a<n?-1:a>n?1:0}));l(t)}))}),[t.params.category]),console.log(s),r.a.createElement("div",{className:"container content"},s.length>0?r.a.createElement("div",null,r.a.createElement("p",{className:"total-count"},s.length," opskrifter"),r.a.createElement("div",{className:"recipes-container"},s.map((function(e){return r.a.createElement(i.b,{className:"recipe",to:"/recipe/"+e.sys.id,key:e.sys.id},r.a.createElement("div",{className:"recipe-container"},r.a.createElement("img",{className:"recipe-image",src:e.fields.image?e.fields.image.fields.file.url:"http://via.placeholder.com/4000x3000?text=Billede%20mangler"}),r.a.createElement("div",{className:"recipe-info-container"},r.a.createElement("p",{className:"recipe-header"},e.fields.title),r.a.createElement("p",{className:"recipe-subheader"},e.fields.subtitle?e.fields.subtitle:""),r.a.createElement("div",{className:"recipe-logos"},r.a.createElement("div",{className:"recipe-logo-container"},r.a.createElement("img",{src:p.a,className:"recipe-logo"}),r.a.createElement("p",{className:"recipe-time-text"},e.fields.time?e.fields.time:"ukendt")),r.a.createElement("div",{className:"recipe-logo-container"},r.a.createElement("img",{src:f.a,className:"recipe-logo"}),r.a.createElement("p",{className:"recipe-amount-text"},e.fields.amount))))))})))):r.a.createElement("p",null,"Tilf\xf8j nogle opskrifter..."))},E=a(79),g=a.n(E);a(179);var h=function(){var e=Object(l.e)().pathname;return console.log(e),r.a.createElement("header",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{src:g.a,alt:"logo",className:"logo"})),r.a.createElement("nav",{className:"scroll"},r.a.createElement(i.b,{to:"/",className:"/"===e?"active":""},"Alle"),r.a.createElement(i.b,{to:"/forret",className:"/forret"===e?"active":""},"Forretter"),r.a.createElement(i.b,{to:"/hovedret",className:"/hovedret"===e?"active":""},"Hovedretter"),r.a.createElement(i.b,{to:"/dessert",className:"/dessert"===e?"active":""},"Desserter"),r.a.createElement(i.b,{to:"/vegetar",className:"/vegetar"===e?"active":""},"Vegetar")))},N=a(41);a(180);var b=function(e){var t=e.match,a=Object(n.useState)(void 0),c=Object(o.a)(a,2),s=c[0],i=c[1];if(Object(n.useEffect)((function(){(function(e){var t={content_type:"recipe"};return e&&(t["sys.id"]=e),m.getEntries(t)})(t.params.id).then((function(e){i(e.items[0])}))}),[t.params.id]),s){var l=s.fields,u=l.amount,p=l.ingredients,d=l.instructions,f=l.title;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header"}," ",f," "),r.a.createElement("h2",{className:"sub-header"},"M\xe6ngde: ",u),r.a.createElement("h3",{className:"sub-sub-header"},"Ingredienser:"),r.a.createElement("div",null,Object(N.documentToReactComponents)(p)),r.a.createElement("h3",{className:"sub-sub-header"},"Instruktioner:"),r.a.createElement("div",null,Object(N.documentToReactComponents)(d)))}return r.a.createElement("p",null,"Henter opskrift...")};a(181);var k=function(){return r.a.createElement(i.a,null,r.a.createElement(h,null),r.a.createElement(l.a,{exact:!0,path:"/:category?",component:v}),r.a.createElement(l.a,{path:"/recipe/:id",component:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,t){},75:function(e,t,a){e.exports=a.p+"static/media/clock.040c46ac.svg"},76:function(e,t,a){e.exports=a.p+"static/media/cookies.f90f6917.svg"},79:function(e,t,a){e.exports=a.p+"static/media/logo.7f01d83d.svg"},80:function(e,t,a){e.exports=a(183)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.961b3e59.chunk.js.map