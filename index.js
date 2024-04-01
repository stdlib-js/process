// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("process"),require("buffer")):"function"==typeof define&&define.amd?define(["process","buffer"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e(r.require$$0,r.require$$0$1)}(this,(function(r,e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function i(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var u=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function l(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var s=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,b=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,y=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function j(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":s(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=g.call(t,w,"$1e"),t=g.call(t,m,"e"),t=g.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,b,"e-0$1"),r.alternate&&(t=g.call(t,h,"$1."),t=g.call(t,v,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):f.call(t)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var T=String.fromCharCode,O=isNaN,S=Array.isArray;function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,o,u,c,s,f,p,g,d,b;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",c=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,O(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(o)?String(n.arg):T(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+E(b):E(b)+p)),u+=n.arg||"",c+=1}return u}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var P,A=Object.prototype,$=A.toString,N=A.__defineGetter__,C=A.__defineSetter__,R=A.__lookupGetter__,B=A.__lookupSetter__;P=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var G=P;function L(r,e,t){G(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}var M=r.argv,Z=r;var q=r;var U=r.env;function W(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(r){return"boolean"==typeof r}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Y&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;function J(r,e){return null!=r&&H.call(r,e)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var rr=z()?function(r){var e,t,n;if(null==r)return D.call(r);t=r[Q],e=J(r,Q);try{r[Q]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[Q]=t:delete r[Q],n}:function(r){return D.call(r)},er=Boolean,tr=Boolean.prototype.toString;var nr=z();function ir(r){return"object"==typeof r&&(r instanceof er||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function or(r){return X(r)||ir(r)}W(or,"isPrimitive",X),W(or,"isObject",ir);var ar,ur="object"==typeof self?self:null,cr="object"==typeof window?window:null,lr="object"==typeof global?global:null,sr="object"==typeof globalThis?globalThis:null;function fr(r){if(arguments.length){if(!X(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(sr)return sr;if(ur)return ur;if(cr)return cr;if(lr)return lr;throw new Error("unexpected error. Unable to resolve global object.")}ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};var pr=ar;var gr=/./,dr=fr(),br=dr.document&&dr.document.childNodes,hr=Int8Array;function vr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;function mr(r){return null!==r&&"object"==typeof r}W(vr,"REGEXP",yr);var wr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(mr);function jr(r){return mr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function Er(r){var e,t,n;if(("Object"===(t=rr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return jr(r)?"Buffer":t}W(mr,"isObjectLikeArray",wr);var Tr="function"==typeof gr||"object"==typeof hr||"function"==typeof br?function(r){return Er(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Er(r).toLowerCase():e};function Or(r){return"function"===Tr(r)}var Sr,_r=Object,xr=Object.getPrototypeOf;Sr=Or(Object.getPrototypeOf)?xr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Vr=Sr;var kr=Object.prototype;function Ir(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(e=function(r){return null==r?null:(r=_r(r),Vr(r))}(r),!e||!J(r,"constructor")&&J(e,"constructor")&&Or(e.constructor)&&"[object Function]"===rr(e.constructor)&&J(e,"isPrototypeOf")&&Or(e.isPrototypeOf)&&(e===kr||function(r){var e;for(e in r)if(!J(r,e))return!1;return!0}(r)))}function Fr(r){return"string"==typeof r}var Pr=String.prototype.valueOf;var Ar=z();function $r(r){return"object"==typeof r&&(r instanceof String||(Ar?function(r){try{return Pr.call(r),!0}catch(r){return!1}}(r):"[object String]"===rr(r)))}function Nr(r){return Fr(r)||$r(r)}W(Nr,"isPrimitive",Fr),W(Nr,"isObject",$r);var Cr=Object.prototype.toString;var Rr=new Function("try {return this === global;} catch ( err ) {return false;}")(),Br=r,Gr=fr(),Lr=/node|io\.js/;var Mr,Zr="object"==typeof global&&global===Gr&&Gr===Gr.global&&("[object global]"===rr(Gr)||"[object Object]"===rr(Gr))&&!0===Rr&&"object"==typeof Br&&"[object process]"===(Mr=Br,Cr.call(Mr))&&Ir(Br.versions)&&Fr(Br.versions.node)&&(void 0===Br.release||Ir(Br.release)&&Fr(Br.release.name)&&Lr.test(Br.release.name)),qr=r.execPath,Ur=Zr?qr:null;var Wr=r.getegid,Xr=Or(Wr)?Wr:function(){return null};var Yr=r.geteuid,zr=Or(Yr)?Yr:function(){return null};var Dr=r.getgid,Hr=Or(Dr)?Dr:function(){return null};var Jr=r.getuid,Kr=Or(Jr)?Jr:function(){return null},Qr=r.versions.node,re=Zr?Qr:null,ee="function"==typeof Buffer?Buffer:null;var te,ne=e.Buffer;te=function(){var r,e;if("function"!=typeof ee)return!1;try{r=jr(e="function"==typeof ee.from?ee.from([1,2,3,4]):new ee([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?ne:function(){throw new Error("not implemented")};var ie,oe=te;ie=Or(oe.from)?function(r,e){if(!Fr(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!Fr(e))throw new TypeError(F("invalid argument. Second argument must be a string. Value: `%s`.",e));return oe.from(r,e)}return oe.from(r,"utf8")}:function(r,e){if(!Fr(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!Fr(e))throw new TypeError(F("invalid argument. Second argument must be a string. Value: `%s`.",e));return new oe(r,e)}return new oe(r,"utf8")};var ae=ie,ue=r.stdin,ce=r;function le(r){return"number"==typeof r}var se=Number,fe=se.prototype.toString;var pe=z();function ge(r){return"object"==typeof r&&(r instanceof se||(pe?function(r){try{return fe.call(r),!0}catch(r){return!1}}(r):"[object Number]"===rr(r)))}function de(r){return le(r)||ge(r)}W(de,"isPrimitive",le),W(de,"isObject",ge);var be=Number.POSITIVE_INFINITY,he=se.NEGATIVE_INFINITY,ve=Math.floor;function ye(r){return r<be&&r>he&&ve(e=r)===e;var e}function me(r){return le(r)&&ye(r)}function we(r){return ge(r)&&ye(r.valueOf())}function je(r){return me(r)||we(r)}function Ee(r){return me(r)&&r>=0}function Te(r){return we(r)&&r.valueOf()>=0}function Oe(r){return Ee(r)||Te(r)}W(je,"isPrimitive",me),W(je,"isObject",we),W(Oe,"isPrimitive",Ee),W(Oe,"isObject",Te);var Se=9007199254740991,_e=void 0!==String.prototype.repeat;var xe=String.prototype.repeat;var Ve=_e?function(r,e){return xe.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t},ke=Math.ceil;function Ie(r,e,t){var n;if(!Fr(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Ee(e))throw new TypeError(F("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Fr(n=t))throw new TypeError(F("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(e>Se)throw new RangeError(F("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return function(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=ke(n),Ve(t,n)+r)}(r,e,n)}var Fe={0:"rwx",1:"rw",2:"rx",3:"r",4:"wx",5:"w",6:"x",7:""};function Pe(r){var e;return r=Ie(r=r.toString(8),4,"0"),e="",e+="u="+Fe[r[1]],e+=",",e+="g="+Fe[r[2]],e+=",",e+="o="+Fe[r[3]]}var Ae=/^(u{0,1}g{0,1}o{0,1}a{0,1}|)([+\-=])(r{0,1}w{0,1}x{0,1})$/,$e={r:2,w:1,x:0},Ne={s:0,u:1,g:2,o:3};function Ce(r){return 1<<r>>>0}function Re(r,e){return(r|Ce(e))>>>0}function Be(r,e){return(r&~Ce(e))>>>0}function Ge(r,e){var t,n,i,o,a,u,c,l,s,f,p,g;for(t=Ie(r.toString(8),4,"0").split(""),f=0;f<t.length;f++)t[f]=parseInt(t[f],10);for(n=e.split(","),f=0;f<n.length;f++){if(null===(a=n[f].match(Ae)))return new Error(F('invalid argument. Unable to parse mask expression. Ensure the expression is properly formatted, only uses the class letters "u", "g", "o", and "a", only uses the operators "+", "-", and "=", and only uses the permission symbols "r", "w", and "x". Value: `%s`.',e));if(""===(o=a[1]))o="ugo";else{for(l="",g=0;g<o.length;g++)"a"===o[g]?l+="ugo":l+=o[g];o=l}if(c=a[2],i=a[3],"-"===c){if(""===i)continue;for(p=0;p<i.length;p++)for(s=$e[i[p]],g=0;g<o.length;g++)t[u=Ne[o[g]]]=Re(t[u],s)}else if("+"===c){if(""===i)continue;for(p=0;p<i.length;p++)for(s=$e[i[p]],g=0;g<o.length;g++)t[u=Ne[o[g]]]=Be(t[u],s)}else if(""===i)for(g=0;g<o.length;g++)t[u=Ne[o[g]]]=7;else{for(g=0;g<o.length;g++)t[u=Ne[o[g]]]=7;for(p=0;p<i.length;p++)for(s=$e[i[p]],g=0;g<o.length;g++)t[u=Ne[o[g]]]=Be(t[u],s)}}for(f=0;f<t.length;f++)t[f]=t[f].toString();return parseInt(t.join(""),8)}var Le=r;var Me={};return L(Me,"ARGV",M),L(Me,"chdir",(function(r){try{Z.chdir(r)}catch(r){return r}return null})),L(Me,"cwd",(function(){return q.cwd()})),L(Me,"ENV",U),L(Me,"EXEC_PATH",Ur),L(Me,"getegid",Xr),L(Me,"geteuid",zr),L(Me,"getgid",Hr),L(Me,"getuid",Kr),L(Me,"NODE_VERSION",re),L(Me,"stdin",(function(){var r,e,t,n;if(1===arguments.length)r=arguments[0];else{if(!Fr(t=arguments[0]))throw new TypeError(F("invalid argument. Encoding argument must be a string. Value: `%s`.",t));r=arguments[1]}if(!Or(r))throw new TypeError(F("invalid argument. Callback argument must be a function. Value: `%s`.",r));if(t&&ue.setEncoding(t),ue.isTTY)return function(r){var e,t;for(e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);ce.nextTick((function(){r.apply(null,e)}))}((function(){if(t)return r(null,"");r(null,ae(""))}));e=[],n=0,ue.on("readable",(function(){var r;for(;null!==(r=ue.read());)"string"==typeof r&&(r=ae(r)),e.push(r),n+=r.length})),ue.on("error",(function(e){r(e)})),ue.on("end",(function(){if(t)return r(null,e.join(""));r(null,oe.concat(e,n))}))})),L(Me,"umask",(function(){var r,e,t,n,i;if(0===(e=arguments.length))return Le.umask();if(n={},i=arguments[0],1===e){if(Fr(i)){if((t=Ge(Le.umask(),i))instanceof Error)throw t;return Le.umask(t)}if(Ee(i))return Le.umask(i);if(Ir(i)){if(J(i,"symbolic")&&(n.symbolic=i.symbolic,!X(n.symbolic)))throw new TypeError(F("invalid option. `%s` option must be a boolean. Option: `%s`.","symbolic",n.symbolic));return t=Le.umask(),n.symbolic&&(t=Pe(t)),t}throw new TypeError(F("invalid argument. Must provide either a string, nonnegative integer, or an options object. Value: `%s`.",i))}if(!Ir(r=arguments[1]))throw new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",r));if(J(r,"symbolic")&&(n.symbolic=r.symbolic,!X(n.symbolic)))throw new TypeError(F("invalid option. `%s` option must be a boolean. Option: `%s`.","symbolic",n.symbolic));if(Fr(i)){if((t=Ge(Le.umask(),i))instanceof Error)throw t}else{if(!Ee(i))throw new TypeError(F("invalid argument. First argument must be either a string or nonnegative integer. Value: `%s`.",i));t=i}return t=Le.umask(t),n.symbolic&&(t=Pe(t)),t})),Me}));
//# sourceMappingURL=index.js.map
