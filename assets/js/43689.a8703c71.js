(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43689],{43689:()=>{var o=function(){var o=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function t(o,r){if(!n[o]){n[o]={};for(var e=0;e<o.length;e++)n[o][o.charAt(e)]=e}return n[o][r]}var s={compressToBase64:function(o){if(null==o)return"";var e=s._compress(o,6,(function(o){return r.charAt(o)}));switch(e.length%4){default:case 0:return e;case 1:return e+"===";case 2:return e+"==";case 3:return e+"="}},decompressFromBase64:function(o){return null==o?"":""==o?null:s._decompress(o.length,32,(function(e){return t(r,o.charAt(e))}))},compressToUTF16:function(r){return null==r?"":s._compress(r,15,(function(r){return o(r+32)}))+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:s._decompress(o.length,16384,(function(r){return o.charCodeAt(r)-32}))},compressToUint8Array:function(o){for(var r=s.compress(o),e=new Uint8Array(2*r.length),n=0,t=r.length;n<t;n++){var i=r.charCodeAt(n);e[2*n]=i>>>8,e[2*n+1]=i%256}return e},decompressFromUint8Array:function(r){if(null==r)return s.decompress(r);for(var e=new Array(r.length/2),n=0,t=e.length;n<t;n++)e[n]=256*r[2*n]+r[2*n+1];var i=[];return e.forEach((function(r){i.push(o(r))})),s.decompress(i.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":s._compress(o,6,(function(o){return e.charAt(o)}))},decompressFromEncodedURIComponent:function(o){return null==o?"":""==o?null:(o=o.replace(/ /g,"+"),s._decompress(o.length,32,(function(r){return t(e,o.charAt(r))})))},compress:function(r){return s._compress(r,16,(function(r){return o(r)}))},_compress:function(o,r,e){if(null==o)return"";var n,t,s,i={},c={},p="",a="",u="",l=2,f=3,h=2,d=[],m=0,v=0;for(s=0;s<o.length;s+=1)if(p=o.charAt(s),Object.prototype.hasOwnProperty.call(i,p)||(i[p]=f++,c[p]=!0),a=u+p,Object.prototype.hasOwnProperty.call(i,a))u=a;else{if(Object.prototype.hasOwnProperty.call(c,u)){if(u.charCodeAt(0)<256){for(n=0;n<h;n++)m<<=1,v==r-1?(v=0,d.push(e(m)),m=0):v++;for(t=u.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&t,v==r-1?(v=0,d.push(e(m)),m=0):v++,t>>=1}else{for(t=1,n=0;n<h;n++)m=m<<1|t,v==r-1?(v=0,d.push(e(m)),m=0):v++,t=0;for(t=u.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&t,v==r-1?(v=0,d.push(e(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete c[u]}else for(t=i[u],n=0;n<h;n++)m=m<<1|1&t,v==r-1?(v=0,d.push(e(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++),i[a]=f++,u=String(p)}if(""!==u){if(Object.prototype.hasOwnProperty.call(c,u)){if(u.charCodeAt(0)<256){for(n=0;n<h;n++)m<<=1,v==r-1?(v=0,d.push(e(m)),m=0):v++;for(t=u.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&t,v==r-1?(v=0,d.push(e(m)),m=0):v++,t>>=1}else{for(t=1,n=0;n<h;n++)m=m<<1|t,v==r-1?(v=0,d.push(e(m)),m=0):v++,t=0;for(t=u.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&t,v==r-1?(v=0,d.push(e(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete c[u]}else for(t=i[u],n=0;n<h;n++)m=m<<1|1&t,v==r-1?(v=0,d.push(e(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(t=2,n=0;n<h;n++)m=m<<1|1&t,v==r-1?(v=0,d.push(e(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(e(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:s._decompress(o.length,32768,(function(r){return o.charCodeAt(r)}))},_decompress:function(r,e,n){var t,s,i,c,p,a,u,l=[],f=4,h=4,d=3,m="",v=[],w={val:n(0),position:e,index:1};for(t=0;t<3;t+=1)l[t]=t;for(i=0,p=Math.pow(2,2),a=1;a!=p;)c=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=n(w.index++)),i|=(c>0?1:0)*a,a<<=1;switch(i){case 0:for(i=0,p=Math.pow(2,8),a=1;a!=p;)c=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=n(w.index++)),i|=(c>0?1:0)*a,a<<=1;u=o(i);break;case 1:for(i=0,p=Math.pow(2,16),a=1;a!=p;)c=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=n(w.index++)),i|=(c>0?1:0)*a,a<<=1;u=o(i);break;case 2:return""}for(l[3]=u,s=u,v.push(u);;){if(w.index>r)return"";for(i=0,p=Math.pow(2,d),a=1;a!=p;)c=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=n(w.index++)),i|=(c>0?1:0)*a,a<<=1;switch(u=i){case 0:for(i=0,p=Math.pow(2,8),a=1;a!=p;)c=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=n(w.index++)),i|=(c>0?1:0)*a,a<<=1;l[h++]=o(i),u=h-1,f--;break;case 1:for(i=0,p=Math.pow(2,16),a=1;a!=p;)c=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=n(w.index++)),i|=(c>0?1:0)*a,a<<=1;l[h++]=o(i),u=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),l[u])m=l[u];else{if(u!==h)return null;m=s+s.charAt(0)}v.push(m),l[h++]=s+m.charAt(0),s=m,0==--f&&(f=Math.pow(2,d),d++)}}};return s}();onmessage=r=>{let{data:e}=r;const{code:n}=e??{};if(n){const r=o.compressToEncodedURIComponent(n);postMessage({compressed:r})}}}}]);