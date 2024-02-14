// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=t(),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty;function e(t,n){return null!=t&&o.call(t,n)}var i,f="function"==typeof Symbol?Symbol:void 0,u="function"==typeof f?f.toStringTag:"",a=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,o,i;if(null==t)return r.call(t);o=t[u],n=e(t,u);try{t[u]=void 0}catch(n){return r.call(t)}return i=r.call(t),n?t[u]=o:delete t[u],i}:function(t){return r.call(t)},c="function"==typeof Uint32Array,l="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;i=function(){var t,n,r;if("function"!=typeof l)return!1;try{n=new l(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(c&&r instanceof Uint32Array||"[object Uint32Array]"===a(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?y:function(){throw new Error("not implemented")};var p,b=i,m=t(),v=Object.prototype.toString,A="function"==typeof Symbol?Symbol:void 0,d="function"==typeof A?A.toStringTag:"",S=m&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return v.call(t);r=t[d],n=e(t,d);try{t[d]=void 0}catch(n){return v.call(t)}return o=v.call(t),n?t[d]=r:delete t[d],o}:function(t){return v.call(t)},g="function"==typeof Float64Array,w="function"==typeof Float64Array?Float64Array:null,U="function"==typeof Float64Array?Float64Array:void 0;p=function(){var t,n,r;if("function"!=typeof w)return!1;try{n=new w([1,3.14,-3.14,NaN]),r=n,t=(g&&r instanceof Float64Array||"[object Float64Array]"===S(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?U:function(){throw new Error("not implemented")};var s,h=p,F=t(),T=Object.prototype.toString,j="function"==typeof Symbol?Symbol:void 0,N="function"==typeof j?j.toStringTag:"",E=F&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return T.call(t);r=t[N],n=e(t,N);try{t[N]=void 0}catch(n){return T.call(t)}return o=T.call(t),n?t[N]=r:delete t[N],o}:function(t){return T.call(t)},O="function"==typeof Uint8Array,I="function"==typeof Uint8Array?Uint8Array:null,x="function"==typeof Uint8Array?Uint8Array:void 0;s=function(){var t,n,r;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,256,257]),r=n,t=(O&&r instanceof Uint8Array||"[object Uint8Array]"===E(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?x:function(){throw new Error("not implemented")};var G,P=s,V=t(),Y=Object.prototype.toString,_="function"==typeof Symbol?Symbol:void 0,k="function"==typeof _?_.toStringTag:"",q=V&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return Y.call(t);r=t[k],n=e(t,k);try{t[k]=void 0}catch(n){return Y.call(t)}return o=Y.call(t),n?t[k]=r:delete t[k],o}:function(t){return Y.call(t)},z="function"==typeof Uint16Array,B="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var t,n,r;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,65536,65537]),r=n,t=(z&&r instanceof Uint16Array||"[object Uint16Array]"===q(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?C:function(){throw new Error("not implemented")};var D,H={uint16:G,uint8:P};(D=new H.uint16(1))[0]=4660;var J=52===new H.uint8(D.buffer)[0],K=!0===J?1:0,L=new h(1),M=new b(L.buffer);function Q(t){return L[0]=t,M[K]}var R,W=t(),X=Object.prototype.toString,Z="function"==typeof Symbol?Symbol:void 0,$="function"==typeof Z?Z.toStringTag:"",tt=W&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return X.call(t);r=t[$],n=e(t,$);try{t[$]=void 0}catch(n){return X.call(t)}return o=X.call(t),n?t[$]=r:delete t[$],o}:function(t){return X.call(t)},nt="function"==typeof Float64Array,rt="function"==typeof Float64Array?Float64Array:null,ot="function"==typeof Float64Array?Float64Array:void 0;R=function(){var t,n,r;if("function"!=typeof rt)return!1;try{n=new rt([1,3.14,-3.14,NaN]),r=n,t=(nt&&r instanceof Float64Array||"[object Float64Array]"===tt(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?ot:function(){throw new Error("not implemented")};var et=!0===J?1:0,it=new R(1),ft=new b(it.buffer),ut=Number.NEGATIVE_INFINITY,at=.6931471803691238,ct=1.9082149292705877e-10,lt=1048575;function yt(t){var n,r,o,e,i,f,u,a,c,l,y,p;return 0===t?ut:function(t){return t!=t}(t)||t<0?NaN:(i=0,(r=Q(t))<1048576&&(i-=54,r=Q(t*=0x40000000000000)),r>=2146435072?t+t:(i+=(r>>20)-1023|0,i+=(a=614244+(r&=lt)&1048576|0)>>20|0,u=(t=function(t,n){return it[0]=t,ft[et]=n>>>0,it[0]}(t,r|1072693248^a))-1,(lt&2+r)<3?0===u?0===i?0:i*at+i*ct:(f=u*u*(.5-.3333333333333333*u),0===i?u-f:i*at-(f-i*ct-u)):(a=r-398458|0,c=440401-r|0,e=(y=(p=(l=u/(2+u))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),o=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),f=o+e,(a|=c)>0?(n=.5*u*u,0===i?u-(n-l*(n+f)):i*at-(n-(l*(n+f)+i*ct)-u)):0===i?u-l*(u-f):i*at-(l*(u-f)-i*ct-u))))}return function(t,n){return yt(t)/yt(n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).log=n();
//# sourceMappingURL=index.js.map
