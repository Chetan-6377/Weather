(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){},69:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(14),i=n.n(s),r=(n(65),n(66),n(11)),o=n(32),j=n(2),d={width:"100%",height:"500px"};function l(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(r.a)(s,2),l=i[0],u=i[1];Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){c(e.coords.latitude),u(e.coords.longitude)}))}),[n,l]);var b={lat:+n,lng:+l};return Object(o.c)({id:"google-map-script",googleMapsApiKey:"AIzaSyAZSDjQGRLzyHt90brGMVLQ8Ggs6ZVRonA"}).isLoaded?Object(j.jsx)("div",{className:"map ",children:Object(j.jsxs)(o.a,{mapContainerStyle:d,center:b,zoom:10,children:[Object(j.jsx)(o.b,{position:b},"marker_1"),Object(j.jsx)(j.Fragment,{})]})}):Object(j.jsx)(j.Fragment,{})}var u,b=c.a.memo(l),h=n(21),O=n.n(h),m=n(45),x=n(29),f=(n(69),n(25)),p=n.n(f),v=n(106),g=n(13),w=n(30),N=n(12);function S(e){var t=e.weatherData,n=w.a.div(u||(u=Object(x.a)(["\n  color: whitesmoke;\n"]))),a=null;return a="Thunderstorm"===t.weather[0].main?Object(j.jsx)(N.a,{icon:g.a}):"Drizzle"===t.weather[0].main?Object(j.jsx)(N.a,{icon:g.c}):"Rain"===t.weather[0].main?Object(j.jsx)(N.a,{icon:g.d}):"Snow"===t.weather[0].main?Object(j.jsx)(N.a,{icon:g.f}):"Clear"===t.weather[0].main?Object(j.jsx)(N.a,{icon:g.g}):"Clouds"===t.weather[0].main?Object(j.jsx)(N.a,{icon:g.b}):Object(j.jsx)(N.a,{icon:g.e}),Object(j.jsxs)("div",{className:"main ",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)("p",{className:"header",children:t.name}),Object(j.jsx)(v.a,{className:"button",inverted:!0,color:"blue",circular:!0,icon:"refresh",onClick:function(){window.location.reload()}})]}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsxs)("p",{className:"day",children:[p()().format("dddd"),", ",Object(j.jsx)("span",{children:p()().format("LLL")})]}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)(n,{style:{fontSize:30,marginTop:15},children:a}),Object(j.jsx)("p",{className:"description",children:t.weather[0].main})]})]}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsxs)("p",{className:"temp",children:["Temprature: ",t.main.temp," \xb0F"]}),Object(j.jsxs)("p",{className:"temp",children:["Humidity: ",t.main.humidity," %"]})]}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsxs)("p",{className:"sunrise-sunset",children:["Sunrise: ",new Date(1e3*t.sys.sunrise).toLocaleTimeString("en-IN")]}),Object(j.jsxs)("p",{className:"sunrise-sunset",children:["Sunset: ",new Date(1e3*t.sys.sunset).toLocaleTimeString("en-IN")]})]})]})}var y,C=n(107);function D(e,t){t.weatherData;var n=w.a.div(y||(y=Object(x.a)(["\n  color: whitesmoke;\n"]))),a=e.forecast;console.log("Forecast",a);var c=a.map((function(e,t){var a=null;return a="Thunderstorm"===e.description?Object(j.jsx)(N.a,{icon:g.a}):"Drizzle"===e.description?Object(j.jsx)(N.a,{icon:g.c}):"Rain"===e.description?Object(j.jsx)(N.a,{icon:g.d}):"Snow"===e.description?Object(j.jsx)(N.a,{icon:g.f}):"Clear"===e.description?Object(j.jsx)(N.a,{icon:g.g}):"Clouds"===e.description?Object(j.jsx)(N.a,{icon:g.b}):Object(j.jsx)(N.a,{icon:g.e}),Object(j.jsx)("div",{className:"forecast",children:Object(j.jsxs)("div",{className:"flex-forecast",children:[Object(j.jsx)("p",{children:p()(e.dt_txt).format("dddd")}),Object(j.jsx)(n,{style:{fontSize:25,marginTop:4},children:a}),Object(j.jsxs)("p",{children:[e.temperature," \xb0F"]})]})},t)}));return Object(j.jsx)("div",{children:Object(j.jsx)(C.a,{"aria-label":"forecast data",children:c})})}function F(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(r.a)(s,2),o=i[0],d=i[1],l=Object(a.useState)([]),u=Object(r.a)(l,2),b=u[0],h=u[1],x=Object(a.useState)([]),f=Object(r.a)(x,2),p=f[0],v=f[1];function g(e,t){return fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(e,"&lon=").concat(t,"&appid=f0590081a00ab7af9d5a2db817ea04be")).then((function(e){return e.json()})).then((function(e){if(Object.entries(e).length)return e.list.filter((function(e){return e.dt_txt.match(/09:00:00/)})).map(w)}))}function w(e){var t={date:1e3*e.dt,description:e.weather[0].main,temperature:Math.round(e.main.temp)};return e.dt_txt&&(t.dt_txt=e.dt_txt),t}return Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){c(e.coords.latitude),d(e.coords.longitude)})),g(n,o).then((function(e){v(e)})).catch((function(e){})),e.next=4,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(o,"&appid=f0590081a00ab7af9d5a2db817ea04be")).then((function(e){return e.json()})).then((function(e){h(e),console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n,o]),Object(j.jsx)("div",{className:"App",children:"undefined"!=typeof b.main?Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)(S,{weatherData:b}),Object(j.jsx)("h1",{children:"Next Five days forecast :"}),Object(j.jsx)(D,{forecast:p,weatherData:b})]}):Object(j.jsx)("div",{})})}var L=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)(F,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};n(81);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),z()}},[[82,1,2]]]);
//# sourceMappingURL=main.dd49a3b5.chunk.js.map