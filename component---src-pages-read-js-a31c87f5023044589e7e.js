(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(145),a(149));t.default=function(){return r.a.createElement("div",null,r.a.createElement(l.a,null),r.a.createElement("main",{className:"non-flex-container"},r.a.createElement("h3",{className:"space-below-m"},"Currently reading: I Will Teach You To Be Rich"),r.a.createElement("h2",null,"Blogs"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.theminimalists.com",target:"_blank",rel:"noopener noreferrer"},"The Minimalists")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://sivers.org/",target:"_blank",rel:"noopener noreferrer"},"Derek Sivers")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://zenhabits.net",target:"_blank",rel:"noopener noreferrer"},"Zen Habits")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://seths.blog",target:"_blank",rel:"noopener noreferrer"},"Seth's Blog")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://calnewport.com/blog/",target:"_blank",rel:"noopener noreferrer"},"Cal Newport"))),r.a.createElement("h2",{className:"space-above-m"},"Style"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.uselesswardrobe.dk",target:"_blank",rel:"noopener noreferrer"},"Useless")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.stylebee.ca",target:"_blank",rel:"noopener noreferrer"},"Stylebee")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.un-fancy.com",target:"_blank",rel:"noopener noreferrer"},"Unfancy"))),r.a.createElement("h2",{className:"space-above-m"},"Programming"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.reddit.com/r/reactjs/",target:"_blank",rel:"noopener noreferrer"},"/r/reactjs")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.reddit.com/r/javascript/",target:"_blank",rel:"noopener noreferrer"},"/r/javascript"))),r.a.createElement("h2",{className:"space-above-m"},"Longform"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://medium.com/",target:"_blank",rel:"noopener noreferrer"},"Medium")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://read.amazon.com/",target:"_blank",rel:"noopener noreferrer"},"Kindle")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://read.amazon.com/notebook",target:"_blank",rel:"noopener noreferrer"},"Kindle Highlights and Notes")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.audible.com",target:"_blank",rel:"noopener noreferrer"},"Audible")),r.a.createElement("li",null,r.a.createElement("p",null,"Podcasts")))))}},144:function(e,t,a){"use strict";var n=a(35);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(150)),l=n(a(151)),o=n(a(7)),i=n(a(48)),s=n(a(49)),c=n(a(4)),u=n(a(0)),p=a(15),f=a(147);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,i.default)((0,i.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,l.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,i=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=d(a);return u.default.createElement(p.Link,(0,l.default)({to:v,state:c,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return i&&i(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:c,replace:m})),!0}},h))},t}(u.default.Component);h.propTypes=(0,l.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(d(e),t)};t.navigate=g;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},145:function(e,t,a){},146:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(144),s=a.n(i);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var c=a(146),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var p=a(33);a.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),d=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(47),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(147);a(145);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("header",{className:"center space-above space-below"},r.a.createElement("h1",{className:"name-plate"},"Jules Chevalier"),r.a.createElement("h3",{className:"tag-line"},"Progress not perfection")),r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/blog"},"Blog")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/about"},"About")))))}},150:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},151:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a}}]);
//# sourceMappingURL=component---src-pages-read-js-a31c87f5023044589e7e.js.map