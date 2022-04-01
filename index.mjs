// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-node@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-ctor@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-stdin@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-next-tick@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";function g(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var h="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function p(){throw new Error("setTimeout has not been defined")}function v(){throw new Error("clearTimeout has not been defined")}var b=p,w=v;function j(e){if(b===setTimeout)return setTimeout(e,0);if((b===p||!b)&&setTimeout)return b=setTimeout,setTimeout(e,0);try{return b(e,0)}catch(t){try{return b.call(null,e,0)}catch(t){return b.call(this,e,0)}}}"function"==typeof h.setTimeout&&(b=setTimeout),"function"==typeof h.clearTimeout&&(w=clearTimeout);var y,T=[],x=!1,E=-1;function k(){x&&y&&(x=!1,y.length?T=y.concat(T):E=-1,T.length&&O())}function O(){if(!x){var e=j(k);x=!0;for(var t=T.length;t;){for(y=T,T=[];++E<t;)y&&y[E].run();E=-1,t=T.length}y=null,x=!1,function(e){if(w===clearTimeout)return clearTimeout(e);if((w===v||!w)&&clearTimeout)return w=clearTimeout,clearTimeout(e);try{w(e)}catch(t){try{return w.call(null,e)}catch(t){return w.call(this,e)}}}(e)}}function V(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];T.push(new _(e,t)),1!==T.length||x||j(O)}function _(e,t){this.fun=e,this.array=t}_.prototype.run=function(){this.fun.apply(null,this.array)};var N={},P=[],A={},D={},L={};function M(){}var S=M,I=M,R=M,C=M,z=M,G=M,H=M;function X(e){throw new Error("process.binding is not supported")}function F(){return"/"}function U(e){throw new Error("process.chdir is not supported")}function Y(){return 0}var $=h.performance||{},q=$.now||$.mozNow||$.msNow||$.oNow||$.webkitNow||function(){return(new Date).getTime()};function B(e){var t=.001*q.call($),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var J=new Date;function K(){return(new Date-J)/1e3}var Q={nextTick:V,title:"browser",browser:true,env:N,argv:P,version:"",versions:A,on:S,addListener:I,once:R,off:C,removeListener:z,removeAllListeners:G,emit:H,binding:X,cwd:F,chdir:U,umask:Y,hrtime:B,platform:"browser",release:D,config:L,uptime:K},W=g(Object.freeze({__proto__:null,addListener:I,argv:P,binding:X,browser:true,chdir:U,config:L,cwd:F,default:Q,emit:H,env:N,hrtime:B,nextTick:V,off:C,on:S,once:R,platform:"browser",release:D,removeAllListeners:G,removeListener:z,title:"browser",umask:Y,uptime:K,version:"",versions:A})),Z=W.argv,ee=W;var te=function(e){try{ee.chdir(e)}catch(e){return e}return null},re=W;var ne=function(){return re.cwd()},ie=W.env,oe=W.execPath,se=t?oe:null;var ue=function(){return null},le=W.getegid,ae=r(le)?le:ue;var fe=function(){return null},me=W.geteuid,ce=r(me)?me:fe;var de=function(){return null},ge=W.getgid,he=r(ge)?ge:de;var pe=function(){return null},ve=W.getuid,be=r(ve)?ve:pe,we=W.versions.node,je=t?we:null,ye=r,Te=n.isPrimitive,xe=i,Ee=o,ke=s,Oe=u,Ve=l;var _e=function(){var e,t,r,n;if(1===arguments.length)e=arguments[0];else{if(!Te(r=arguments[0]))throw new TypeError(Ve("invalid argument. Encoding argument must be a string. Value: `%s`.",r));e=arguments[1]}if(!ye(e))throw new TypeError(Ve("invalid argument. Callback argument must be a function. Value: `%s`.",e));if(r&&ke.setEncoding(r),ke.isTTY)return Oe(i);function i(){if(r)return e(null,"");e(null,Ee(""))}function o(){for(var e;null!==(e=ke.read());)"string"==typeof e&&(e=Ee(e)),t.push(e),n+=e.length}function s(t){e(t)}function u(){if(r)return e(null,t.join(""));e(null,xe.concat(t,n))}t=[],n=0,ke.on("readable",o),ke.on("error",s),ke.on("end",u)},Ne=d,Pe={0:"rwx",1:"rw",2:"rx",3:"r",4:"wx",5:"w",6:"x",7:""};var Ae=function(e){var t;return e=e.toString(8),e=Ne(e,4,"0"),t="",t+="u="+Pe[e[1]],t+=",",t+="g="+Pe[e[2]],t+=",",t+="o="+Pe[e[3]]},De=l,Le=d,Me=/^(u{0,1}g{0,1}o{0,1}a{0,1}|)([+\-=])(r{0,1}w{0,1}x{0,1})$/,Se={r:2,w:1,x:0},Ie={s:0,u:1,g:2,o:3};function Re(e){return 1<<e>>>0}function Ce(e,t){return(e&~Re(t))>>>0}var ze=function(e,t){var r,n,i,o,s,u,l,a,f,m,c,d;for(r=Le(e.toString(8),4,"0").split(""),m=0;m<r.length;m++)r[m]=parseInt(r[m],10);for(n=t.split(","),m=0;m<n.length;m++){if(null===(s=n[m].match(Me)))return new Error(De('invalid argument. Unable to parse mask expression. Ensure the expression is properly formatted, only uses the class letters "u", "g", "o", and "a", only uses the operators "+", "-", and "=", and only uses the permission symbols "r", "w", and "x". Value: `%s`.',t));if(""===(o=s[1]))o="ugo";else{for(a="",d=0;d<o.length;d++)"a"===o[d]?a+="ugo":a+=o[d];o=a}if(l=s[2],i=s[3],"-"===l){if(""===i)continue;for(c=0;c<i.length;c++)for(f=Se[i[c]],d=0;d<o.length;d++)r[u=Ie[o[d]]]=(r[u]|Re(f))>>>0}else if("+"===l){if(""===i)continue;for(c=0;c<i.length;c++)for(f=Se[i[c]],d=0;d<o.length;d++)r[u=Ie[o[d]]]=Ce(r[u],f)}else if(""===i)for(d=0;d<o.length;d++)r[u=Ie[o[d]]]=7;else{for(d=0;d<o.length;d++)r[u=Ie[o[d]]]=7;for(c=0;c<i.length;c++)for(f=Se[i[c]],d=0;d<o.length;d++)r[u=Ie[o[d]]]=Ce(r[u],f)}}for(m=0;m<r.length;m++)r[m]=r[m].toString();return parseInt(r.join(""),8)},Ge=W,He=n.isPrimitive,Xe=a.isPrimitive,Fe=f.isPrimitive,Ue=m,Ye=c,$e=l,qe=Ae,Be=ze;var Je=function(){var e,t,r,n,i;if(0===(t=arguments.length))return Ge.umask();if(n={},i=arguments[0],1===t){if(He(i)){if((r=Be(Ge.umask(),i))instanceof Error)throw r;return Ge.umask(r)}if(Xe(i))return Ge.umask(i);if(Ue(i)){if(Ye(i,"symbolic")&&(n.symbolic=i.symbolic,!Fe(n.symbolic)))throw new TypeError($e("invalid option. `%s` option must be a boolean. Option: `%s`.","symbolic",n.symbolic));return r=Ge.umask(),n.symbolic&&(r=qe(r)),r}throw new TypeError($e("invalid argument. Must provide either a string, nonnegative integer, or an options object. Value: `%s`.",i))}if(!Ue(e=arguments[1]))throw new TypeError($e("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Ye(e,"symbolic")&&(n.symbolic=e.symbolic,!Fe(n.symbolic)))throw new TypeError($e("invalid option. `%s` option must be a boolean. Option: `%s`.","symbolic",n.symbolic));if(He(i)){if((r=Be(Ge.umask(),i))instanceof Error)throw r}else{if(!Xe(i))throw new TypeError($e("invalid argument. First argument must be either a string or nonnegative integer. Value: `%s`.",i));r=i}return r=Ge.umask(r),n.symbolic&&(r=qe(r)),r},Ke=e,Qe={};Ke(Qe,"ARGV",Z),Ke(Qe,"chdir",te),Ke(Qe,"cwd",ne),Ke(Qe,"ENV",ie),Ke(Qe,"EXEC_PATH",se),Ke(Qe,"getegid",ae),Ke(Qe,"geteuid",ce),Ke(Qe,"getgid",he),Ke(Qe,"getuid",be),Ke(Qe,"NODE_VERSION",je),Ke(Qe,"stdin",_e),Ke(Qe,"umask",Je);var We=Qe;export{Z as ARGV,ie as ENV,se as EXEC_PATH,je as NODE_VERSION,te as chdir,ne as cwd,We as default,ae as getegid,ce as geteuid,he as getgid,be as getuid,_e as stdin,Je as umask};
//# sourceMappingURL=index.mjs.map
