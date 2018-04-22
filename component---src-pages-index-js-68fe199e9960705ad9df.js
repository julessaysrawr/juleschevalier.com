webpackJsonp([35783957827783],{143:function(e,t,n){"use strict";function a(e){return e}function o(e,t,n){function o(e,t){var n=N.hasOwnProperty(t)?N[t]:null;b.hasOwnProperty(t)&&l("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,n){if(n){l("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,r=a.__reactAutoBindPairs;n.hasOwnProperty(c)&&v.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==c){var s=n[i],u=a.hasOwnProperty(i);if(o(u,i),v.hasOwnProperty(i))v[i](e,s);else{var p=N.hasOwnProperty(i),m="function"==typeof s,E=m&&!p&&!u&&n.autobind!==!1;if(E)r.push(i,s),a[i]=s;else if(u){var h=N[i];l(p&&("DEFINE_MANY_MERGED"===h||"DEFINE_MANY"===h),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",h,i),"DEFINE_MANY_MERGED"===h?a[i]=f(a[i],s):"DEFINE_MANY"===h&&(a[i]=d(a[i],s))}else a[i]=s}}}else;}function u(e,t){if(t)for(var n in t){var a=t[n];if(t.hasOwnProperty(n)){var o=n in v;l(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in e;if(r){var i=g.hasOwnProperty(n)?g[n]:null;return l("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=f(e[n],a))}e[n]=a}}}function p(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(l(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),a=t.apply(this,arguments);if(null==n)return a;if(null==a)return n;var o={};return p(o,n),p(o,a),o}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function E(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var a=t[n],o=t[n+1];e[a]=m(e,o)}}function h(e){var t=a(function(e,a,o){this.__reactAutoBindPairs.length&&E(this),this.props=e,this.context=a,this.refs=s,this.updater=o||n,this.state=null;var r=this.getInitialState?this.getInitialState():null;l("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new I,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(r.bind(null,t)),r(t,_),r(t,e),r(t,D),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in N)t.prototype[o]||(t.prototype[o]=null);return t}var y=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},D={componentWillUnmount:function(){this.__isMounted=!1}},b={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},I=function(){};return i(I.prototype,e.prototype,b),h}var r,i=n(4),s=n(42),l=n(1),c="mixins";r={},e.exports=o},4:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,s,l=n(e),c=1;c<arguments.length;c++){a=Object(arguments[c]);for(var u in a)r.call(a,u)&&(l[u]=a[u]);if(o){s=o(a);for(var p=0;p<s.length;p++)i.call(a,s[p])&&(l[s[p]]=a[s[p]])}}return l}},392:function(e,t,n){e.exports=n.p+"static/jules.63210edf.jpg"},191:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(6),r=a(o);n(267),n(268);var i=n(392),s=a(i);t.default=function(){return r.default.createElement("div",null,r.default.createElement("header",null,r.default.createElement("div",{className:"center space-above space-below"},r.default.createElement("h1",null,"Jules Chevalier"))),r.default.createElement("main",{className:"space-below-m"},r.default.createElement("div",{className:"card"},r.default.createElement("div",null,r.default.createElement("img",{className:"profile",src:s.default,alt:"jules"})),r.default.createElement("div",{className:"cards"},r.default.createElement("div",{className:"card-content"},r.default.createElement("h3",{className:"space-below"},"Me in 10 seconds"),r.default.createElement("p",null,"Native nomad.  I currently live in Western Massachusetts with my handsome husband David and our kids: Mr. Gizmo, Lucius, and General Grievous."),r.default.createElement("p",null,"Prospector of adventure and beauty. Mindfulness.  Food is medicine.  Gymnastic strength training.  On a minimalist journey."),r.default.createElement("p",null,"INTJ, though most would guess I'm an extravert.  Strategic and analytical, which leads to overthinking 😆"),r.default.createElement("p",null,"I'm driven to improve through experiments.  My super power is I'm a growth catalyst."),r.default.createElement("p",null,"Interested in helping people.  Creating value that lasts.")),r.default.createElement("div",{className:"card-content space-above"},r.default.createElement("h3",{className:"space-below"},"What I'm doing now"),r.default.createElement("p",null,"Letting go and finding I am happier with less"),r.default.createElement("p",null,"Trying to live in the present moment"),r.default.createElement("p",null,"Becoming a morning person"),r.default.createElement("p",null,"Employed in software engineering"),r.default.createElement("p",null,"Experimenting with 75% plant based diet.  Keto-ish."),r.default.createElement("p",{className:"space-above"},"Updated on: January 27, 2018"))))))},e.exports=t.default},267:function(e,t){},268:function(e,t){}});
//# sourceMappingURL=component---src-pages-index-js-68fe199e9960705ad9df.js.map