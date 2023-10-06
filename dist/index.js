"use strict";var e=function(i,t){return function(){return t||i((t={exports:{}}).exports,t),t.exports}};var T=e(function(yi,O){
var oe=require("process"),ae=oe.argv;O.exports=ae
});var V=e(function(Ei,k){
var le=T();k.exports=le
});var P=e(function(wi,N){
var ce=require("process");function ve(i){try{ce.chdir(i)}catch(t){return t}return null}N.exports=ve
});var I=e(function(Si,R){
var pe=P();R.exports=pe
});var A=e(function(Oi,_){
var ge=require("process");function fe(){return ge.cwd()}_.exports=fe
});var C=e(function(Ti,j){
var me=A();j.exports=me
});var B=e(function(ki,F){
var qe=require("process"),de=qe.env;F.exports=de
});var H=e(function(Vi,D){
var xe=B();D.exports=xe
});var X=e(function(Ni,M){
var be=require("process"),he=be.execPath;M.exports=he
});var K=e(function(Pi,G){
G.exports=null
});var U=e(function(Ri,L){
var ye=require('@stdlib/assert/is-node/dist'),Ee=X(),we=K(),y;ye?y=Ee:y=we;L.exports=y
});var Y=e(function(Ii,W){
function Se(){return null}W.exports=Se
});var z=e(function(_i,$){
var Oe=require("process"),Te=Oe.getegid;$.exports=Te
});var Z=e(function(Ai,Q){
var ke=require('@stdlib/assert/is-function/dist'),Ve=Y(),J=z(),Ne=ke(J)?J:Ve;Q.exports=Ne
});var er=e(function(ji,rr){
var Pe=Z();rr.exports=Pe
});var tr=e(function(Ci,ir){
function Re(){return null}ir.exports=Re
});var sr=e(function(Fi,ur){
var Ie=require("process"),_e=Ie.geteuid;ur.exports=_e
});var ar=e(function(Bi,or){
var Ae=require('@stdlib/assert/is-function/dist'),je=tr(),nr=sr(),Ce=Ae(nr)?nr:je;or.exports=Ce
});var cr=e(function(Di,lr){
var Fe=ar();lr.exports=Fe
});var pr=e(function(Hi,vr){
function Be(){return null}vr.exports=Be
});var fr=e(function(Mi,gr){
var De=require("process"),He=De.getgid;gr.exports=He
});var dr=e(function(Xi,qr){
var Me=require('@stdlib/assert/is-function/dist'),Xe=pr(),mr=fr(),Ge=Me(mr)?mr:Xe;qr.exports=Ge
});var br=e(function(Gi,xr){
var Ke=dr();xr.exports=Ke
});var yr=e(function(Ki,hr){
function Le(){return null}hr.exports=Le
});var wr=e(function(Li,Er){
var Ue=require("process"),We=Ue.getuid;Er.exports=We
});var Tr=e(function(Ui,Or){
var Ye=require('@stdlib/assert/is-function/dist'),$e=yr(),Sr=wr(),ze=Ye(Sr)?Sr:$e;Or.exports=ze
});var Vr=e(function(Wi,kr){
var Je=Tr();kr.exports=Je
});var Pr=e(function(Yi,Nr){
var Qe=require("process");Nr.exports=Qe
});var Ir=e(function($i,Rr){
var Ze=Pr(),ri=Ze.versions.node;Rr.exports=ri
});var Ar=e(function(zi,_r){
_r.exports=null
});var Cr=e(function(Ji,jr){
var ei=require('@stdlib/assert/is-node/dist'),ii=Ir(),ti=Ar(),E;ei?E=ii:E=ti;jr.exports=E
});var Hr=e(function(Qi,Dr){
var ui=require('@stdlib/assert/is-function/dist'),si=require('@stdlib/assert/is-string/dist').isPrimitive,ni=require('@stdlib/buffer/ctor/dist'),Fr=require('@stdlib/buffer/from-string/dist'),d=require('@stdlib/streams/node/stdin/dist'),oi=require('@stdlib/utils/next-tick/dist'),Br=require('@stdlib/string/format/dist');function ai(){var i,t,r,o;if(arguments.length===1)i=arguments[0];else{if(r=arguments[0],!si(r))throw new TypeError(Br('0nh6q',r));i=arguments[1]}if(!ui(i))throw new TypeError(Br('0nh2b',i));if(r&&d.setEncoding(r),d.isTTY)return oi(u);t=[],o=0,d.on("readable",n),d.on("error",f),d.on("end",a);function u(){if(r)return i(null,"");i(null,Fr(""))}function n(){for(var c;c=d.read(),c!==null;)typeof c=="string"&&(c=Fr(c)),t.push(c),o+=c.length}function f(c){i(c)}function a(){if(r)return i(null,t.join(""));i(null,ni.concat(t,o))}}Dr.exports=ai
});var Xr=e(function(Zi,Mr){
var li=Hr();Mr.exports=li
});var Gr=e(function(rt,ci){ci.exports={"0":"rwx","1":"rw","2":"rx","3":"r","4":"wx","5":"w","6":"x","7":""}});var Lr=e(function(et,Kr){
var vi=require('@stdlib/string/left-pad/dist'),w=Gr();function pi(i){var t;return i=i.toString(8),i=vi(i,4,"0"),t="",t+="u="+w[i[1]],t+=",",t+="g="+w[i[2]],t+=",",t+="o="+w[i[3]],t}Kr.exports=pi
});var $r=e(function(it,Yr){
var gi=require('@stdlib/string/format/dist'),fi=require('@stdlib/string/left-pad/dist'),mi=/^(u{0,1}g{0,1}o{0,1}a{0,1}|)([+\-=])(r{0,1}w{0,1}x{0,1})$/,S={r:2,w:1,x:0},x={s:0,u:1,g:2,o:3};function Wr(i){return 1<<i>>>0}function qi(i,t){return(i|Wr(t))>>>0}function Ur(i,t){return(i&~Wr(t))>>>0}function di(i,t){var r,o,u,n,f,a,c,h,q,l,p,s;for(r=fi(i.toString(8),4,"0").split(""),l=0;l<r.length;l++)r[l]=parseInt(r[l],10);for(o=t.split(","),l=0;l<o.length;l++){if(f=o[l].match(mi),f===null)return new Error(gi('0nh6t',t));if(n=f[1],n==="")n="ugo";else{for(h="",s=0;s<n.length;s++)n[s]==="a"?h+="ugo":h+=n[s];n=h}if(c=f[2],u=f[3],c==="-"){if(u==="")continue;for(p=0;p<u.length;p++)for(q=S[u[p]],s=0;s<n.length;s++)a=x[n[s]],r[a]=qi(r[a],q)}else if(c==="+"){if(u==="")continue;for(p=0;p<u.length;p++)for(q=S[u[p]],s=0;s<n.length;s++)a=x[n[s]],r[a]=Ur(r[a],q)}else if(u==="")for(s=0;s<n.length;s++)a=x[n[s]],r[a]=7;else{for(s=0;s<n.length;s++)a=x[n[s]],r[a]=7;for(p=0;p<u.length;p++)for(q=S[u[p]],s=0;s<n.length;s++)a=x[n[s]],r[a]=Ur(r[a],q)}}for(l=0;l<r.length;l++)r[l]=r[l].toString();return parseInt(r.join(""),8)}Yr.exports=di
});var ue=e(function(tt,te){
var m=require("process"),zr=require('@stdlib/assert/is-string/dist').isPrimitive,Jr=require('@stdlib/assert/is-nonnegative-integer/dist').isPrimitive,Qr=require('@stdlib/assert/is-boolean/dist').isPrimitive,Zr=require('@stdlib/assert/is-plain-object/dist'),re=require('@stdlib/assert/has-own-property/dist'),b=require('@stdlib/string/format/dist'),ee=Lr(),ie=$r();function xi(){var i,t,r,o,u;if(t=arguments.length,t===0)return m.umask();if(o={},u=arguments[0],t===1){if(zr(u)){if(r=ie(m.umask(),u),r instanceof Error)throw r;return m.umask(r)}if(Jr(u))return m.umask(u);if(Zr(u)){if(re(u,"symbolic")&&(o.symbolic=u.symbolic,!Qr(o.symbolic)))throw new TypeError(b('0nh2o',"symbolic",o.symbolic));return r=m.umask(),o.symbolic&&(r=ee(r)),r}throw new TypeError(b('0nh6r',u))}if(i=arguments[1],!Zr(i))throw new TypeError(b('0nh2V',i));if(re(i,"symbolic")&&(o.symbolic=i.symbolic,!Qr(o.symbolic)))throw new TypeError(b('0nh2o',"symbolic",o.symbolic));if(zr(u)){if(r=ie(m.umask(),u),r instanceof Error)throw r}else if(Jr(u))r=u;else throw new TypeError(b('0nh6s',u));return r=m.umask(r),o.symbolic&&(r=ee(r)),r}te.exports=xi
});var ne=e(function(ut,se){
var bi=ue();se.exports=bi
});var g=require('@stdlib/utils/define-read-only-property/dist'),v={};g(v,"ARGV",V());g(v,"chdir",I());g(v,"cwd",C());g(v,"ENV",H());g(v,"EXEC_PATH",U());g(v,"getegid",er());g(v,"geteuid",cr());g(v,"getgid",br());g(v,"getuid",Vr());g(v,"NODE_VERSION",Cr());g(v,"stdin",Xr());g(v,"umask",ne());module.exports=v;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
