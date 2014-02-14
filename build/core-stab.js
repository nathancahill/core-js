/**
 * Core.js v0.0.5
 * http://core.zloirock.ru
 * © 2013 Denis Pushkarev
 * Available under MIT license
 */
!function(a,f,d,m,O,y,ab,_,i,j,U,c){"use strict";function X(a){return a===c?"Undefined":a==c?"Null":r(a).slice(8,-1)}function R(a){var b=this;return function(){return b.apply(a,arguments)}}function z(){return R.call(I,this)}function w(){for(var d=this,a=0,b=arguments.length,c=m(b);b>a;)c[a]=arguments[a++];return function(){for(var e=c.slice(),f=arguments.length,a=0;f>a;)e[b+a]=arguments[a++];return H.call(d,this,e)}}function Z(){var a=this;return function(b){return a.test(b)}}function B(b,c,d){for(var a in c)try{q(c,a)&&(d||!q(b,a)||!V(b[a]))&&delete b[a]&&E(b,a,C(6,c[a]))}catch(e){}return b}function C(a,b){return{enumerable:!!(1&a),configurable:!!(2&a),writable:!!(4&a),value:b}}function D(a){return O(a).split(",")}function b(a){return"[object Function]"==r(a)}function t(a){return o.call(a,1)}function S(b,c){for(var a=0,d=k(b.length);d>a;a++)if(G(b[a],c))return a;return-1}function T(b,a){return a=d(a),s(e(this),b,a),a}function k(b){var a=P(b);return a>0&&$(a)?a:0}var l="prototype",x=1/0,g=m[l],A=f[l],p=d[l],E=d.defineProperty,F=g.push,o=g.slice,H=A.apply,I=A.call,J=j.ceil,K=j.floor,L=j.max,M=j.min,N=j.random,e=d,u=m.isArray||function(a){return"[object Array]"==r(a)},Q="toString",h=z.call(z),n=h(w),q=h(p.hasOwnProperty),r=h(p[Q]),V=(h(p.propertyIsEnumerable),Z.call(/^\s*function[^{]+\{\s*\[native code\]\s*\}\s*$/)),W=d.keys,s=h(g.forEach),Y=g.map,v=d.assign||function(a,b){for(var c,d=W(b),f=d.length,e=0;f>e;)a[c=d[e++]]=b[c];return a},G=d.is||function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b},P=y.toInteger||function(a){return(a=+a)!=a?0:0!=a&&a!=x&&a!=-x?(a>0?K:J)(a):a},$=y.isFinite||function(a){return"number"==typeof a&&U(a)};!function(k,j,p,i,d,g,h){function e(a,c){return w.apply(b(a)?a:f(a),c)}if(k&&/MSIE .\./.test(k.userAgent)&&(a.setTimeout=function(a,b){return j(e(a,o.call(arguments,2)),b||1)},a.setInterval=function(a,b){return p(e(a,o.call(arguments,2)),b||1)}),!b(a[d])||!b(a[g]))if(b(i)){var l=d+N(),m=0,c={},n=function(b){var a=b.data;if(a in c)try{c[a]()}catch(d){throw d}finally{delete c[a]}};a[d]=function(b){var a=++m+l;return c[a]=e(b,t(arguments)),i(a,"*"),m},a[g]=function(a){delete c[a+l]},h?h("message",n,!1):attachEvent("onmessage",n)}else a[d]=function(a){return j(e(a,t(arguments)),1)},a[g]=f("i","clearTimeout(i)")}(a.navigator,setTimeout,setInterval,a.postMessage,"setImmediate","clearImmediate",a.addEventListener),!function(d){b(d)&&D("cast,resolve,reject,all,race").every(n(q,d))&&function(a){return new d(function(b){a=b}),b(a)}()&&function(){try{return new d(f()).then(null)}catch(a){}}()||!function(){function h(c){var a=this,f=n(d,a,e);if(!b(c))throw i("First argument of Promise constructor must be an function");if(!(a instanceof h))throw i("Promise constructor cannot be called as a function.");a[k]=[];try{c(n(j,a),f)}catch(g){f(g)}}function w(g,c,h,i){var a,k,f,l,m=b(h);if(m)try{a=h(i),f=1}catch(n){l=1,k=n}else a=i,f=1;t(c,a)||(m&&f?j(c,a):l?d(c,e,k):g==o?j(c,a):g==e&&d(c,e,a))}function q(a){return new this(function(b){b(a)})}function t(a,f){var g;try{if(a===f)throw i("A promises callback cannot return that same promise.");if(f&&b(f.then))return f.then(function(b){return g?!0:(g=!0,f!==b?j(a,b):d(a,o,b),c)},function(b){return g?!0:(g=!0,d(a,e,b),c)}),1}catch(h){return g||d(a,e,h),1}}function j(a,b){a!==b&&t(a,b)||d(a,o,b)}function d(a,b,d){a[g]===x&&(a[g]=y,a[m]=d,r(function(){a[g]=b;for(var e=a[k],d=0;e.length>d;d+=3)w(b,e[d],e[d+b],a[m]);a[k]=c}))}var x,y=0,o=1,e=2,r=a.setImmediate,k="_subscribers",g="_state",m="_detail",p="You must pass an array to race or all";a.Promise=h,v(h[l],{"catch":function(a){return this.then(c,a)},then:function(c,d){var a=this,b=new h(f());return a[g]?r(function(){w(a[g],b,arguments[a[g]-1],a[m])},c,d):a[k].push(b,c,d),b}}),v(h,{all:function(a){if(!u(a))throw i(p);return new this(function(d,g){function e(a,b){c[a]=b,--f||d(c)}var c=[],f=a.length;f?s(a,function(a,c){a&&b(a.then)?a.then(n(e,c),g):e(c,a)}):d(c)})},cast:function(a){return a instanceof this?a:q.call(this,a)},race:function(a){if(!u(a))throw i(p);return new this(function(c,d){s(a,function(a){a&&b(a.then)?a.then(c,d):c(a)})})},reject:function(a){return new this(function(c,b){b(a)})},resolve:q})}()}(a.Promise),!function(){function b(e){for(var d=0,c=a(this,e),b=0,f=k(c.length);f>b;b++)b in c&&(d+=+c[b]);return d}function d(h){for(var b,d=e(this),f=k(d.length),g=m(f),a=0;f>a;a++)a in d&&(b=d[a],g[a]=b==c?c:b[h]);return g}function a(a,b){switch(X(b)){case"Function":return Y.call(a,b);case"String":case"Number":return d.call(a,b)}return e(a)}B(g,{at:function(a){return e(this)[0>a?this.length+a:a]},pluck:d,reduceTo:T,merge:function(a){return F.apply(this,e(a)),this},sum:b,avg:function(a){return this.length?b.call(this,a)/this.length:0},min:function(b){return M.apply(c,a(this,b))},max:function(b){return L.apply(c,a(this,b))},unique:function(f){for(var c,b=[],d=a(this,f),g=k(d.length),e=0;g>e;)~S(b,c=d[e++])||b.push(c);return b}})}()}("undefined"!=typeof window?window:global,Function,Object,Array,String,Number,RegExp,Date,TypeError,Math,isFinite);
//# sourceMappingURL=./core.min.map