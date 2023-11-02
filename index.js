// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,i="function"==typeof e?e.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(n){var t,e,f,u,a;if(null==n)return r.call(n);e=n[i],a=i,t=null!=(u=n)&&o.call(u,a);try{n[i]=void 0}catch(t){return r.call(n)}return f=r.call(n),t?n[i]=e:delete n[i],f}:function(n){return r.call(n)},u="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;n=function(){var n,t,r;if("function"!=typeof a)return!1;try{t=new a(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(u&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var c,l=n,p="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;c=function(){var n,t,r;if("function"!=typeof A)return!1;try{t=new A([1,3.14,-3.14,NaN]),r=t,n=(p&&r instanceof Float64Array||"[object Float64Array]"===f(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?d:function(){throw new Error("not implemented")};var U,b=c,v="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,w="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var n,t,r;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,256,257]),r=t,n=(v&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?w:function(){throw new Error("not implemented")};var s,h=U,g="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,N="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(g&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?N:function(){throw new Error("not implemented")};var S,j={uint16:s,uint8:h};(S=new j.uint16(1))[0]=4660;var E=52===new j.uint8(S.buffer)[0],T=!0===E?1:0,I=new b(1),x=new l(I.buffer);function O(n){return I[0]=n,x[T]}var G=!0===E?1:0,P=new b(1),V=new l(P.buffer),Y=Number.NEGATIVE_INFINITY,_=.6931471803691238,k=1.9082149292705877e-10,q=1048575;function z(n){var t,r,o,e,i,f,u,a,y,c,l,p;return 0===n?Y:function(n){return n!=n}(n)||n<0?NaN:(i=0,(r=O(n))<1048576&&(i-=54,r=O(n*=0x40000000000000)),r>=2146435072?n+n:(i+=(r>>20)-1023|0,i+=(a=614244+(r&=q)&1048576|0)>>20|0,u=(n=function(n,t){return P[0]=n,V[G]=t>>>0,P[0]}(n,r|1072693248^a))-1,(q&2+r)<3?0===u?0===i?0:i*_+i*k:(f=u*u*(.5-.3333333333333333*u),0===i?u-f:i*_-(f-i*k-u)):(a=r-398458|0,y=440401-r|0,e=(l=(p=(c=u/(2+u))*c)*p)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(l),o=p*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(l),f=o+e,(a|=y)>0?(t=.5*u*u,0===i?u-(t-c*(t+f)):i*_-(t-(c*(t+f)+i*k)-u)):0===i?u-c*(u-f):i*_-(c*(u-f)-i*k-u))))}return function(n,t){return z(n)/z(t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).log=t();
//# sourceMappingURL=index.js.map