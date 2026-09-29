(()=>{var Bx=Object.defineProperty;var zx=(s,t,e)=>t in s?Bx(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Vt=(s,t,e)=>zx(s,typeof t!="symbol"?t+"":t,e);function bs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Lm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ia={duration:.5,overwrite:!1,delay:0},Ff,wn,Ve,Pi=1e8,Ie=1/Pi,Af=Math.PI*2,kx=Af/4,Vx=0,Dm=Math.sqrt,Hx=Math.cos,Gx=Math.sin,fn=function(t){return typeof t=="string"},Ze=function(t){return typeof t=="function"},Ts=function(t){return typeof t=="number"},Tc=function(t){return typeof t>"u"},os=function(t){return typeof t=="object"},si=function(t){return t!==!1},Bf=function(){return typeof window<"u"},gc=function(t){return Ze(t)||fn(t)},Nm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,Wx=/random\([^)]+\)/g,Xx=/,\s*/g,wm=/(?:-?\.?\d|\.)+/gi,zf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kf=/[+-]=-?[.\d]+/,Yx=/[^,'"\[\]\s]+/gi,qx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,We,ss,Cf,Vf,mi={},yc={},Um,Om=function(t){return(yc=ho(t,mi))&&Nn},Ec=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},La=function(t,e){return!e&&console.warn(t)},Fm=function(t,e){return t&&(mi[t]=e)&&yc&&(yc[t]=e)||mi},Da=function(){return 0},Zx={suppressEvents:!0,isStart:!0,kill:!1},_c={suppressEvents:!0,kill:!1},$x={suppressEvents:!0},Hf={},$s=[],Rf={},Bm,ni={},Sf={},Tm=30,xc=[],Gf="",Wf=function(t){var e=t[0],n,i;if(os(e)||Ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=xc.length;i--&&!xc[i].targetTest(e););n=xc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Zf(t[i],n)))||t.splice(i,1);return t},Js=function(t){return t._gsap||Wf(Ii(t))[0]._gsap},Xf=function(t,e,n){return(n=t[e])&&Ze(n)?t[e]():Tc(n)&&t.getAttribute&&t.getAttribute(e)||n},Yn=function(t,e){return(t=t.split(",")).forEach(e)||t},$e=function(t){return Math.round(t*1e5)/1e5||0},Ge=function(t){return Math.round(t*1e7)/1e7||0},Rr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Jx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Sc=function(){var t=$s.length,e=$s.slice(0),n,i;for(Rf={},$s.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Yf=function(t){return!!(t._initted||t._startAt||t.add)},zm=function(t,e,n,i){$s.length&&!wn&&Sc(),t.render(e,n,i||!!(wn&&e<0&&Yf(t))),$s.length&&!wn&&Sc()},km=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Yx).length<2?e:fn(t)?t.trim():t},Vm=function(t){return t},gi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Kx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ho=function(t,e){for(var n in e)t[n]=e[n];return t},Em=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=os(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Mc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ca=function(t){var e=t.parent||We,n=t.keyframes?Kx(Dn(t.keyframes)):gi;if(si(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Qx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Hm=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ac=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ks=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Tr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},jx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Pf=function(t,e,n,i){return t._startAt&&(wn?t._startAt.revert(_c):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},tv=function s(t){return!t||t._ts&&s(t.parent)},Am=function(t){return t._repeat?uo(t._tTime,t=t.duration()+t._rDelay)*t:0},uo=function(t,e){var n=Math.floor(t=Ge(t/e));return t&&n===t?n-1:n},bc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Cc=function(t){return t._end=Ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ie)||0))},Rc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Cc(t),n._dirty||Tr(n,t)),t},Gm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=bc(t.rawTime(),e),(!e._dur||Oa(0,e.totalDuration(),n)-e._tTime>Ie)&&e.render(n,!0)),Tr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ie}},rs=function(t,e,n,i){return e.parent&&Ks(e),e._start=Ge((Ts(n)?n:n||t!==We?Ri(t,n,e):t._time)+e._delay),e._end=Ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Hm(t,e,"_first","_last",t._sort?"_start":0),If(e)||(t._recent=e),i||Gm(t,e),t._ts<0&&Rc(t,t._tTime),t},Wm=function(t,e){return(mi.ScrollTrigger||Ec("scrollTrigger",e))&&mi.ScrollTrigger.create(e,t)},Xm=function(t,e,n,i,r){if(Kf(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!wn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Bm!==ii.frame)return $s.push(t),t._lazy=[r,i],1},ev=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},If=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},nv=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&ev(t)&&!(!t._initted&&If(t))||(t._ts<0||t._dp._ts<0)&&!If(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Oa(0,t._tDur,e),h=uo(l,a),t._yoyo&&h&1&&(o=1-o),h!==uo(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||wn||i||t._zTime===Ie||!e&&t._zTime){if(!t._initted&&Xm(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ie:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Pf(t,e,n,!0),t._onUpdate&&!n&&pi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&pi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ks(t,1),!n&&!wn&&(pi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},iv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},fo=function(t,e,n,i){var r=t._repeat,o=Ge(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ge(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Rc(t,t._tTime=t._tDur*a),t.parent&&Cc(t),n||Tr(t.parent,t),t},Cm=function(t){return t instanceof Ln?Tr(t):fo(t,t._dur)},sv={_start:0,endTime:Da,totalDuration:Da},Ri=function s(t,e,n){var i=t.labels,r=t._recent||sv,o=t.duration()>=Pi?r.endTime(!1):t._dur,a,l,c;return fn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Dn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ra=function(t,e,n){var i=Ts(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=si(l.vars.inherit)&&l.parent;o.immediateRender=si(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new je(e[0],o,e[r+1])},Qs=function(t,e){return t||t===0?e(t):e},Oa=function(t,e,n){return n<t?t:n>e?e:n},Tn=function(t,e){return!fn(t)||!(e=qx.exec(t))?"":e[1]},rv=function(t,e,n){return Qs(n,function(i){return Oa(t,e,i)})},Lf=[].slice,Ym=function(t,e){return t&&os(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&os(t[0]))&&!t.nodeType&&t!==ss},ov=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return fn(i)&&!e||Ym(i,1)?(r=n).push.apply(r,Ii(i)):n.push(i)})||n},Ii=function(t,e,n){return Ve&&!e&&Ve.selector?Ve.selector(t):fn(t)&&!n&&(Cf||!po())?Lf.call((e||Vf).querySelectorAll(t),0):Dn(t)?ov(t,n):Ym(t)?Lf.call(t,0):t?[t]:[]},Df=function(t){return t=Ii(t)[0]||La("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ii(e,n.querySelectorAll?n:n===t?La("Invalid scope")||Vf.createElement("div"):t)}},qm=function(t){return t.sort(function(){return .5-Math.random()})},Zm=function(t){if(Ze(t))return t;var e=os(t)?t:{each:t},n=Er(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return fn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,p){var _=(p||e).length,m=o[_],g,S,A,x,M,b,T,v,w;if(!m){if(w=e.grid==="auto"?0:(e.grid||[1,Pi])[1],!w){for(T=-Pi;T<(T=p[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(m=o[_]=[],g=l?Math.min(w,_)*h-.5:i%w,S=w===Pi?0:l?_*d/w-.5:i/w|0,T=0,v=Pi,b=0;b<_;b++)A=b%w-g,x=S-(b/w|0),m[b]=M=c?Math.abs(c==="y"?x:A):Dm(A*A+x*x),M>T&&(T=M),M<v&&(v=M);i==="random"&&qm(m),m.max=T-v,m.min=v,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Tn(e.amount||e.each)||0,n=n&&_<0?vv(n):n}return _=(m[u]-m.min)/m.max||0,Ge(m.b+(n?n(_):_)*m.v)+m.u}},Nf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ts(n)?0:Tn(n))}},$m=function(t,e){var n=Dn(t),i,r;return!n&&os(t)&&(i=n=t.radius||Pi,t.values?(t=Ii(t.values),(r=!Ts(t[0]))&&(i*=i)):t=Nf(t.increment)),Qs(e,n?Ze(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Pi,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,r||h===o||Ts(o)?h:h+Tn(o)}:Nf(t))},Jm=function(t,e,n,i){return Qs(Dn(t)?!e:n===!0?!!(n=0):!i,function(){return Dn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},av=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},lv=function(t,e){return function(n){return t(parseFloat(n))+(e||Tn(n))}},cv=function(t,e,n){return Qm(t,e,0,1,n)},Km=function(t,e,n){return Qs(n,function(i){return t[~~e(i)]})},hv=function s(t,e,n){var i=e-t;return Dn(t)?Km(t,s(0,t.length),e):Qs(n,function(r){return(i+(r-t)%i)%i+t})},uv=function s(t,e,n){var i=e-t,r=i*2;return Dn(t)?Km(t,s(0,t.length-1),e):Qs(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},mo=function(t){return t.replace(Wx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Xx);return Jm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Qm=function(t,e,n,i,r){var o=e-t,a=i-n;return Qs(r,function(l){return n+((l-t)/o*a||0)})},fv=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=fn(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Dn(t)&&!Dn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var _=Math.min(u,~~p);return h[_](p-_)},n=e}else i||(t=ho(Dn(t)?[]:{},t));if(!h){for(l in e)$f.call(a,t,l,"get",e[l]);r=function(p){return td(p,a)||(o?t.p:t)}}}return Qs(n,r)},Rm=function(t,e,n){var i=t.labels,r=Pi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},pi=function(t,e,n){var i=t.vars,r=i[e],o=Ve,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&$s.length&&Sc(),a&&(Ve=a),h=l?r.apply(c,l):r.call(c),Ve=o,h},Ea=function(t){return Ks(t),t.scrollTrigger&&t.scrollTrigger.kill(!!wn),t.progress()<1&&pi(t,"onInterrupt"),t},co,jm=[],tg=function(t){if(t)if(t=!t.name&&t.default||t,Bf()||t.headless){var e=t.name,n=Ze(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Da,render:td,add:$f,kill:Rv,modifier:Cv,rawVars:0},o={targetTest:0,get:0,getSetter:Pc,aliases:{},register:0};if(po(),t!==i){if(ni[e])return;gi(i,gi(Mc(t,r),o)),ho(i.prototype,ho(r,Mc(t,o))),ni[i.prop=e]=i,t.targetTest&&(xc.push(i),Hf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Fm(e,i),t.register&&t.register(Nn,i,qn)}else jm.push(t)},Pe=255,Aa={aqua:[0,Pe,Pe],lime:[0,Pe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pe],navy:[0,0,128],white:[Pe,Pe,Pe],olive:[128,128,0],yellow:[Pe,Pe,0],orange:[Pe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pe,0,0],pink:[Pe,192,203],cyan:[0,Pe,Pe],transparent:[Pe,Pe,Pe,0]},Mf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Pe+.5|0},eg=function(t,e,n){var i=t?Ts(t)?[t>>16,t>>8&Pe,t&Pe]:0:Aa.black,r,o,a,l,c,h,d,u,f,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Aa[t])i=Aa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Pe,i&Pe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Pe,t&Pe]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(wm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Mf(l+1/3,r,o),i[1]=Mf(l,r,o),i[2]=Mf(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(zf),n&&i.length<4&&(i[3]=1),i}else i=t.match(wm)||Aa.transparent;i=i.map(Number)}return e&&!p&&(r=i[0]/Pe,o=i[1]/Pe,a=i[2]/Pe,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ng=function(t){var e=[],n=[],i=-1;return t.split(ws).forEach(function(r){var o=r.match(Cr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Pm=function(t,e,n){var i="",r=(t+i).match(ws),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=eg(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=ng(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ws,"1").split(Cr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ws),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},ws=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Aa)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),dv=/hsl[a]?\(/,qf=function(t){var e=t.join(" "),n;if(ws.lastIndex=0,ws.test(e))return n=dv.test(e),t[1]=Pm(t[1],n),t[0]=Pm(t[0],n,ng(t[1])),!0},Na,ii=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,u,f,p=function _(m){var g=s()-i,S=m===!0,A,x,M,b;if((g>t||g<0)&&(n+=g-e),i+=g,M=i-n,A=M-o,(A>0||S)&&(b=++d.frame,u=M-d.time*1e3,d.time=M=M/1e3,o+=A+(A>=r?4:r-A),x=1),S||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](M,u,b,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Um&&(!Cf&&Bf()&&(ss=Cf=window,Vf=ss.document||{},mi.gsap=Nn,(ss.gsapVersions||(ss.gsapVersions=[])).push(Nn.version),Om(yc||ss.GreenSockGlobals||!ss.gsap&&ss||{}),jm.forEach(tg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Na=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Na=0,c=Da},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,g,S){var A=g?function(x,M,b,T){m(x,M,b,T),d.remove(A)}:m;return d.remove(m),a[S?"unshift":"push"](A),po(),A},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),po=function(){return!Na&&ii.wake()},_e={},pv=/^[\d.\-M][\d.\-,\s]/,mv=/["']/g,gv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(mv,"").trim():+c,i=l.substr(a+1).trim();return e},_v=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},xv=function(t){var e=(t+"").split("("),n=_e[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[gv(e[1])]:_v(t).split(",").map(km)):_e._CE&&pv.test(t)?_e._CE("",t):n},vv=function(t){return function(e){return 1-t(1-e)}},Er=function(t,e){return t&&(Ze(t)?t:_e[t]||xv(t))||e},Pr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Yn(t,function(a){_e[a]=mi[a]=r,_e[o=a.toLowerCase()]=n;for(var l in r)_e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_e[a+"."+l]=r[l]}),r},ig=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},bf=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Af*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Gx((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:ig(a);return r=Af/r,l.config=function(c,h){return s(t,c,h)},l},wf=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:ig(n);return i.config=function(r){return s(t,r)},i};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Pr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});_e.Linear.easeNone=_e.none=_e.Linear.easeIn;Pr("Elastic",bf("in"),bf("out"),bf());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Pr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Pr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Pr("Circ",function(s){return-(Dm(1-s*s)-1)});Pr("Sine",function(s){return s===1?1:-Hx(s*kx)+1});Pr("Back",wf("in"),wf("out"),wf());_e.SteppedEase=_e.steps=mi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Ie;return function(a){return((i*Oa(0,o,a)|0)+r)*n}}};Ia.ease=_e["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Gf+=s+","+s+"Params,"});var Zf=function(t,e){this.id=Vx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Xf,this.set=e?e.getSetter:Pc},Ua=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,fo(this,+e.duration,1,1),this.data=e.data,Ve&&(this._ctx=Ve,Ve.data.push(this)),Na||ii.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,fo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(po(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Rc(this,n),!r._dp||r.parent||Gm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&rs(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ie||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),zm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Am(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Am(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?uo(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ie?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?bc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ie?0:this._rts,this.totalTime(Oa(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Cc(this),jx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(po(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ie&&(this._tTime-=Ie)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ge(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&rs(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(si(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=$x);var i=wn;return wn=n,Yf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Cm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ri(this,n),si(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,si(i)),this._dur||(this._zTime=-Ie),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ie:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ie,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ie)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ze(n)?n:Vm,l=function(){var h=i.then;i.then=null,r&&r(),Ze(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ea(this)},s})();gi(Ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ie,_prom:0,_ps:!1,_rts:1});var Ln=(function(s){Lm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=si(n.sortChildren),We&&rs(n.parent||We,bs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Wm(bs(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Ra(0,arguments,this),this},e.from=function(i,r,o){return Ra(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Ra(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Ca(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new je(i,r,Ri(this,o),1),this},e.call=function(i,r,o){return rs(this,je.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new je(i,o,Ri(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Ca(o).immediateRender=si(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Ca(a).immediateRender=si(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ge(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,p,_,m,g,S,A,x,M,b,T;if(this!==We&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,x=this._start,A=this._ts,g=!A,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(u=Ge(h%m),h===l?(_=this._repeat,u=c):(M=Ge(h/m),_=~~M,_&&_===M&&(u=c,_--),u>c&&(u=c)),M=uo(this._tTime,m),!a&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),b&&_&1&&(u=c-u,T=1),_!==M&&!this._lock){var v=b&&M&1,w=v===(b&&_&1);if(_<M&&(v=!v),a=v?0:h%c?c:h,this._lock=1,this.render(a||(T?0:Ge(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&pi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=iv(this,Ge(a),Ge(u)),S&&(h-=u-(u=S._start))),this._tTime=h,this._time=u,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!M&&(pi(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!g){S=0,p&&(h+=this._zTime=-Ie);break}}f=p}else{f=this._last;for(var C=i<0?i:u;f;){if(p=f._prev,(f._act||C<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,r,o||wn&&Yf(f)),u!==this._time||!this._ts&&!g){S=0,p&&(h+=this._zTime=C?-Ie:Ie);break}}f=p}}if(S&&!r&&(this.pause(),S.render(u>=a?0:-Ie)._zTime=u>=a?1:-1,this._ts))return this._start=x,Cc(this),this.render(i,r,o);this._onUpdate&&!r&&pi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ks(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(pi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Ts(r)||(r=Ri(this,r,i)),!(i instanceof Ua)){if(Dn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(fn(i))return this.addLabel(i,r);if(Ze(i))i=je.delayedCall(0,i);else return this}return this!==i?rs(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Pi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof je?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return fn(i)?this.removeLabel(i):Ze(i)?this.killTweensOf(i):(i.parent===this&&Ac(this,i),i===this._recent&&(this._recent=this._last),Tr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ge(ii.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ri(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=je.delayedCall(0,r||Da,o);return a.data="isPause",this._hasPause=1,rs(this,a,Ri(this,i))},e.removePause=function(i){var r=this._first;for(i=Ri(this,i);r;)r._start===i&&r.data==="isPause"&&Ks(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Zs!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Ii(i),l=this._first,c=Ts(r),h;l;)l instanceof je?Jx(l._targets,a)&&(c?(!Zs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Ri(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=je.to(o,gi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ie,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&fo(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},r));return u?p.render(0):p},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,gi({startAt:{time:Ri(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Rm(this,Ri(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Rm(this,Ri(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ie)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ge(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Tr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Tr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Pi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,rs(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ge(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;fo(o,o===We&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(We._ts&&(zm(We,bc(i,We)),Bm=ii.frame),ii.frame>=Tm){Tm+=ri.autoSleep||120;var r=We._first;if((!r||!r._ts)&&ri.autoSleep&&ii._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ii.sleep()}}},t})(Ua);gi(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var yv=function(t,e,n,i,r,o,a){var l=new qn(this._pt,t,e,0,1,jf,null,r),c=0,h=0,d,u,f,p,_,m,g,S;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=mo(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),u=n.match(yf)||[];d=yf.exec(i);)p=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?Rr(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=yf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(kf.test(i)||g)&&(l.e=0),this._pt=l,l},$f=function(t,e,n,i,r,o,a,l,c,h){Ze(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:Ze(d)?c?t[e.indexOf("set")||!Ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Ze(d)?c?Tv:og:Qf,p;if(fn(i)&&(~i.indexOf("random(")&&(i=mo(i)),i.charAt(1)==="="&&(p=Rr(u,i)+(Tn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||Uf)return!isNaN(u*i)&&i!==""?(p=new qn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?Av:ag,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&Ec(e,i),yv.call(this,t,e,u,i,f,l||ri.stringFilter,c))},Sv=function(t,e,n,i,r){if(Ze(t)&&(t=Pa(t,r,e,n,i)),!os(t)||t.style&&t.nodeType||Dn(t)||Nm(t))return fn(t)?Pa(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Pa(t[a],r,e,n,i);return o},Jf=function(t,e,n,i,r,o){var a,l,c,h;if(ni[t]&&(a=new ni[t]).init(r,a.rawVars?e[t]:Sv(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new qn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==co))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Zs,Uf,Kf=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,S=g&&g.data==="nested"?g.vars.targets:m,A=t._overwrite==="auto"&&!Ff,x=t.timeline,M=i.easeReverse||d,b,T,v,w,C,D,L,V,I,U,H,k,j;if(x&&(!u||!r)&&(r="none"),t._ease=Er(r,Ia.ease),t._rEase=M&&(Er(M)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||u&&!i.stagger){if(V=m[0]?Js(m[0]).harness:0,k=V&&i[V.prop],b=Mc(i,Hf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&p?_c:Zx),_._lazy=0),o){if(Ks(t._startAt=je.set(m,gi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&si(l),startAt:null,delay:0,onUpdate:c&&function(){return pi(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(wn||!a&&!f)&&t._startAt.revert(_c),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),v=gi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&si(l),immediateRender:a,stagger:0,parent:g},b),k&&(v[V.prop]=k),Ks(t._startAt=je.set(m,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(wn?t._startAt.revert(_c):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Ie,Ie);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&si(l)||l&&!p,T=0;T<m.length;T++){if(C=m[T],L=C._gsap||Wf(m)[T]._gsap,t._ptLookup[T]=U={},Rf[L.id]&&$s.length&&Sc(),H=S===m?T:S.indexOf(C),V&&(I=new V).init(C,k||b,t,H,S)!==!1&&(t._pt=w=new qn(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){U[W]=w}),I.priority&&(D=1)),!V||k)for(v in b)ni[v]&&(I=Jf(v,b,t,H,C,S))?I.priority&&(D=1):U[v]=w=$f.call(t,C,v,"get",b[v],H,S,0,i.stringFilter);t._op&&t._op[T]&&t.kill(C,t._op[T]),A&&t._pt&&(Zs=t,We.killTweensOf(C,U,t.globalTime(e)),j=!t.parent,Zs=0),t._pt&&l&&(Rf[L.id]=1)}D&&ed(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!j,u&&e<=0&&x.render(Pi,!0,!0)},Mv=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Uf=1,t.vars[e]="+=0",Kf(t,a),Uf=0,l?La(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=$e(n)+Tn(d.e)),d.b&&(d.b=h.s+Tn(d.b))},bv=function(t,e){var n=t[0]?Js(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=ho({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},wv=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Dn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Pa=function(t,e,n,i,r){return Ze(t)?t.call(e,n,i,r):fn(t)&&~t.indexOf("random(")?mo(t):t},sg=Gf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",rg={};Yn(sg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return rg[s]=1});var je=(function(s){Lm(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Ca(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||We,S=(Dn(n)||Nm(n)?Ts(n[0]):"length"in i)?[n]:Ii(n),A,x,M,b,T,v,w,C;if(a._targets=S.length?Wf(S):La("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||gc(c)||gc(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(A=a.timeline=new Ln({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:S}),A.kill(),A.parent=A._dp=bs(a),A._start=0,u||gc(c)||gc(h)){if(b=S.length,w=u&&Zm(u),os(u))for(T in u)~sg.indexOf(T)&&(C||(C={}),C[T]=u[T]);for(x=0;x<b;x++)M=Mc(i,rg),M.stagger=0,D&&(M.easeReverse=D),C&&ho(M,C),v=S[x],M.duration=+Pa(c,bs(a),x,v,S),M.delay=(+Pa(h,bs(a),x,v,S)||0)-a._delay,!u&&b===1&&M.delay&&(a._delay=h=M.delay,a._start+=h,M.delay=0),A.to(v,M,w?w(x,v,S):0),A._ease=_e.none;A.duration()?c=h=0:a.timeline=0}else if(p){Ca(gi(A.vars.defaults,{ease:"none"})),A._ease=Er(p.ease||i.ease||"none");var L=0,V,I,U;if(Dn(p))p.forEach(function(H){return A.to(S,H,">")}),A.duration();else{M={};for(T in p)T==="ease"||T==="easeEach"||wv(T,p[T],M,p.easeEach);for(T in M)for(V=M[T].sort(function(H,k){return H.t-k.t}),L=0,x=0;x<V.length;x++)I=V[x],U={ease:I.e,duration:(I.t-(x?V[x-1].t:0))/100*c},U[T]=I.v,A.to(S,U,L),L+=U.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||a.duration(c=A.duration())}else a.timeline=0;return f===!0&&!Ff&&(Zs=bs(a),We.killTweensOf(S),Zs=0),rs(g,bs(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===Ge(g._time)&&si(d)&&tv(bs(a))&&g.data!=="nested")&&(a._tTime=-Ie,a.render(Math.max(0,-h)||0)),m&&Wm(bs(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Ie&&!h?l:i<Ie?0:i,u,f,p,_,m,g,S,A;if(!c)nv(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(u=Ge(d%_),d===l?(p=this._repeat,u=c):(m=Ge(d/_),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=uo(this._tTime,_),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Ge(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Xm(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var x=u<a;if(x!==this._inv){var M=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(x?-1:1)/M:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(u/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!m&&(pi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Pf(this,i,r,o),pi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&pi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Pf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ks(this,1),!r&&!(h&&!a)&&(d||a||g)&&(pi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Na||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Kf(this,c),h=this._ease(c/this._dur),Mv(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Rc(this,0),this.parent||Hm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ea(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Zs&&Zs.vars.overwrite!==!0)._first||Ea(this),this.parent&&o!==this.timeline.totalDuration()&&fo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ii(i):a,c=this._ptLookup,h=this._pt,d,u,f,p,_,m,g;if((!r||r==="all")&&Qx(a,l))return r==="all"&&(this._pt=0),Ea(this);for(d=this._op=this._op||[],r!=="all"&&(fn(r)&&(_={},Yn(r,function(S){return _[S]=1}),r=_),r=bv(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],r==="all"?(d[g]=r,p=u,f={}):(f=d[g]=d[g]||{},p=r);for(_ in p)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ac(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Ea(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Ra(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Ra(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return We.killTweensOf(i,r,o)},t})(Ua);gi(je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(s){je[s]=function(){var t=new Ln,e=Lf.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Qf=function(t,e,n){return t[e]=n},og=function(t,e,n){return t[e](n)},Tv=function(t,e,n,i){return t[e](i.fp,n)},Ev=function(t,e,n){return t.setAttribute(e,n)},Pc=function(t,e){return Ze(t[e])?og:Tc(t[e])&&t.setAttribute?Ev:Qf},ag=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Av=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},jf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},td=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Cv=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Rv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ac(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Pv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ed=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},qn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||ag,this.d=l||this,this.set=c||Qf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Pv,this.m=n,this.mt=r,this.tween=i},s})();Yn(Gf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Hf[s]=1});mi.TweenMax=mi.TweenLite=je;mi.TimelineLite=mi.TimelineMax=Ln;We=new Ln({sortChildren:!1,defaults:Ia,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=qf;var Ar=[],vc={},Iv=[],Im=0,Lv=0,Tf=function(t){return(vc[t]||Iv).map(function(e){return e()})},Of=function(){var t=Date.now(),e=[];t-Im>2&&(Tf("matchMediaInit"),Ar.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=ss.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Tf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Im=t,Tf("matchMedia"))},lg=(function(){function s(e,n){this.selector=n&&Df(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Lv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ze(n)&&(r=i,i=n,n=Ze);var o=this,a=function(){var c=Ve,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Df(r)),Ve=o,d=i.apply(o,arguments),Ze(d)&&o._r.push(d),Ve=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ze?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ve;Ve=null,n(this),Ve=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof je&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof je)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ar.length;o--;)Ar[o].id===this.id&&Ar.splice(o,1)},t.revert=function(n){this.kill(n||{})},s})(),Dv=(function(){function s(e){this.contexts=[],this.scope=e,Ve&&Ve.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){os(n)||(n={matches:n});var o=new lg(0,r||this.scope),a=o.conditions={},l,c,h;Ve&&!o.selector&&(o.selector=Ve.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=ss.matchMedia(n[c]),l&&(Ar.indexOf(o)<0&&Ar.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Of):l.addEventListener("change",Of)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),wc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return tg(i)})},timeline:function(t){return new Ln(t)},getTweensOf:function(t,e){return We.getTweensOf(t,e)},getProperty:function(t,e,n,i){fn(t)&&(t=Ii(t)[0]);var r=Js(t||{}).get,o=n?Vm:km;return n==="native"&&(n=""),t&&(e?o((ni[e]&&ni[e].get||r)(t,e,n,i)):function(a,l,c){return o((ni[a]&&ni[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Ii(t),t.length>1){var i=t.map(function(h){return Nn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=ni[e],a=Js(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;co._pt=0,d.init(t,n?h+n:h,co,0,[t]),d.render(1,d),co._pt&&td(1,co)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Nn.to(t,gi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return We.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Er(t.ease,Ia.ease)),Em(Ia,t||{})},config:function(t){return Em(ri,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ni[a]&&!mi[a]&&La(e+" effect requires "+a+" plugin.")}),Sf[e]=function(a,l,c){return n(Ii(a),gi(l||{},r),c)},o&&(Ln.prototype[e]=function(a,l,c){return this.add(Sf[e](a,os(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){_e[t]=Er(e)},parseEase:function(t,e){return arguments.length?Er(t,e):_e},getById:function(t){return We.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ln(t),i,r;for(n.smoothChildTiming=si(t.smoothChildTiming),We.remove(n),n._dp=0,n._time=n._tTime=We._time,i=We._first;i;)r=i._next,(e||!(!i._dur&&i instanceof je&&i.vars.onComplete===i._targets[0]))&&rs(n,i,i._start-i._delay),i=r;return rs(We,n,0),n},context:function(t,e){return t?new lg(t,e):Ve},matchMedia:function(t){return new Dv(t)},matchMediaRefresh:function(){return Ar.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Of()},addEventListener:function(t,e){var n=vc[t]||(vc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=vc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:hv,wrapYoyo:uv,distribute:Zm,random:Jm,snap:$m,normalize:cv,getUnit:Tn,clamp:rv,splitColor:eg,toArray:Ii,selector:Df,mapRange:Qm,pipe:av,unitize:lv,interpolate:fv,shuffle:qm},install:Om,effects:Sf,ticker:ii,updateRoot:Ln.updateRoot,plugins:ni,globalTimeline:We,core:{PropTween:qn,globals:Fm,Tween:je,Timeline:Ln,Animation:Ua,getCache:Js,_removeLinkedListItem:Ac,reverting:function(){return wn},context:function(t){return t&&Ve&&(Ve.data.push(t),t._ctx=Ve),Ve},suppressOverwrites:function(t){return Ff=t}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return wc[s]=je[s]});ii.add(Ln.updateRoot);co=wc.to({},{duration:0});var Nv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Uv=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Nv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Ef=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(fn(r)&&(l={},Yn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Uv(a,r)}}}},Nn=wc.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)wn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ef("roundProps",Nf),Ef("modifiers"),Ef("snap",$m))||wc;je.version=Ln.version=Nn.version="3.15.0";Um=1;Bf()&&po();var Ov=_e.Power0,Fv=_e.Power1,Bv=_e.Power2,zv=_e.Power3,kv=_e.Power4,Vv=_e.Linear,Hv=_e.Quad,Gv=_e.Cubic,Wv=_e.Quart,Xv=_e.Quint,Yv=_e.Strong,qv=_e.Elastic,Zv=_e.Back,$v=_e.SteppedEase,Jv=_e.Bounce,Kv=_e.Sine,Qv=_e.Expo,jv=_e.Circ;var cg,js,_o,ad,Nr,ty,hg,ld,ey=function(){return typeof window<"u"},As={},Dr=180/Math.PI,xo=Math.PI/180,go=Math.atan2,ug=1e8,cd=/([A-Z])/g,ny=/(left|right|width|margin|padding|x)/i,iy=/[\s,\(]\S/,as={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},id=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},sy=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ry=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},oy=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ay=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},vg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},yg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},ly=function(t,e,n){return t.style[e]=n},cy=function(t,e,n){return t.style.setProperty(e,n)},hy=function(t,e,n){return t._gsap[e]=n},uy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},fy=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},dy=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Xe="transform",oi=Xe+"Origin",py=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in As&&r){if(this.tfm=this.tfm||{},t!=="transform")t=as[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Es(i,a)}):this.tfm[t]=o.x?o[t]:Es(i,t),t===oi&&(this.tfm.zOrigin=o.zOrigin);else return as.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Xe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(oi,e,"")),t=Xe}(r||e)&&this.props.push(t,e,r[t])},Sg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},my=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(cd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ld(),(!r||!r.isStart)&&!n[Xe]&&(Sg(n),i.zOrigin&&n[oi]&&(n[oi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Mg=function(t,e){var n={target:t,props:[],revert:my,save:py};return t._gsap||Nn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},bg,sd=function(t,e){var n=js.createElementNS?js.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):js.createElement(t);return n&&n.style?n:js.createElement(t)},_i=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(cd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,vo(e)||e,1)||""},fg="O,Moz,ms,Ms,Webkit".split(","),vo=function(t,e,n){var i=e||Nr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(fg[o]+t in r););return o<0?null:(o===3?"ms":o>=0?fg[o]:"")+t},rd=function(){ey()&&window.document&&(cg=window,js=cg.document,_o=js.documentElement,Nr=sd("div")||{style:{}},ty=sd("div"),Xe=vo(Xe),oi=Xe+"Origin",Nr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bg=!!vo("perspective"),ld=Nn.core.reverting,ad=1)},dg=function(t){var e=t.ownerSVGElement,n=sd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),_o.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),_o.removeChild(n),r},pg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},wg=function(t){var e,n;try{e=t.getBBox()}catch{e=dg(t),n=1}return e&&(e.width||e.height)||n||(e=dg(t)),e&&!e.width&&!e.x&&!e.y?{x:+pg(t,["x","cx","x1"])||0,y:+pg(t,["y","cy","y1"])||0,width:0,height:0}:e},Tg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&wg(t))},er=function(t,e){if(e){var n=t.style,i;e in As&&e!==oi&&(e=Xe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(cd,"-$1").toLowerCase())):n.removeAttribute(e)}},tr=function(t,e,n,i,r,o){var a=new qn(t._pt,e,n,0,1,o?yg:vg);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},mg={deg:1,rad:1,turn:1},gy={grid:1,flex:1},nr=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Nr.style,l=ny.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",p,_,m,g;if(i===o||!r||mg[i]||mg[o])return r;if(o!=="px"&&!u&&(r=s(t,e,n,"px")),g=t.getCTM&&Tg(t),(f||o==="%")&&(As[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],$e(f?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===js||!_.appendChild)&&(_=js.body),m=_._gsap,m&&f&&m.width&&l&&m.time===ii.time&&!m.uncache)return $e(r/m.width*d);if(f&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=d+i,p=t[h],S?t.style[e]=S:er(t,e)}else(f||o==="%")&&!gy[_i(_,"display")]&&(a.position=_i(t,"position")),_===t&&(a.position="static"),_.appendChild(Nr),p=Nr[h],_.removeChild(Nr),a.position="absolute";return l&&f&&(m=Js(_),m.time=ii.time,m.width=_[h]),$e(u?p*r/d:p&&r?d/p*r:0)},Es=function(t,e,n,i){var r;return ad||rd(),e in as&&e!=="transform"&&(e=as[e],~e.indexOf(",")&&(e=e.split(",")[0])),As[e]&&e!=="transform"?(r=za(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Lc(_i(t,oi))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ic[e]&&Ic[e](t,e,n)||_i(t,e)||Xf(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?nr(t,e,r,n)+n:r},_y=function(t,e,n,i){if(!n||n==="none"){var r=vo(e,t,1),o=r&&_i(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=_i(t,"borderTopColor"))}var a=new qn(this._pt,t.style,e,0,1,jf),l=0,c=0,h,d,u,f,p,_,m,g,S,A,x,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=_i(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=_i(t,e)||i,_?t.style[e]=_:er(t,e)),h=[n,i],qf(h),n=h[0],i=h[1],u=n.match(Cr)||[],M=i.match(Cr)||[],M.length){for(;d=Cr.exec(i);)m=d[0],S=i.substring(l,d.index),p?p=(p+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(p=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=Rr(f,m)+x),g=parseFloat(m),A=m.substr((g+"").length),l=Cr.lastIndex-A.length,A||(A=A||ri.units[e]||x,l===i.length&&(i+=A,a.e+=A)),x!==A&&(f=nr(t,e,_,A)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:g-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?yg:vg;return kf.test(i)&&(a.e=0),this._pt=a,a},gg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=gg[n]||n,e[1]=gg[i]||i,e.join(" ")},vy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],As[a]&&(l=1,a=a==="transformOrigin"?oi:Xe),er(n,a);l&&(er(n,Xe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",za(n,1),o.uncache=1,Sg(i)))}},Ic={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new qn(t._pt,e,n,0,0,vy);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Ba=[1,0,0,1,0,0],Eg={},Ag=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},_g=function(t){var e=_i(t,Xe);return Ag(e)?Ba:e.substr(7).match(zf).map($e)},hd=function(t,e){var n=t._gsap||Js(t),i=t.style,r=_g(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ba:r):(r===Ba&&!t.offsetParent&&t!==_o&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,_o.appendChild(t)),r=_g(t),l?i.display=l:er(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):_o.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},od=function(t,e,n,i,r,o){var a=t._gsap,l=r||hd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],S=l[5],A=e.split(" "),x=parseFloat(A[0])||0,M=parseFloat(A[1])||0,b,T,v,w;n?l!==Ba&&(T=f*m-p*_)&&(v=x*(m/T)+M*(-_/T)+(_*S-m*g)/T,w=x*(-p/T)+M*(f/T)-(f*S-p*g)/T,x=v,M=w):(b=wg(t),x=b.x+(~A[0].indexOf("%")?x/100*b.width:x),M=b.y+(~(A[1]||A[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&a.smooth?(g=x-c,S=M-h,a.xOffset=d+(g*f+S*_)-g,a.yOffset=u+(g*p+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=M,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[oi]="0px 0px",o&&(tr(o,a,"xOrigin",c,x),tr(o,a,"yOrigin",h,M),tr(o,a,"xOffset",d,a.xOffset),tr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+M)},za=function(t,e){var n=t._gsap||new Zf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=_i(t,oi)||"0",h,d,u,f,p,_,m,g,S,A,x,M,b,T,v,w,C,D,L,V,I,U,H,k,j,W,R,J,wt,Tt,Xt,Ht;return h=d=u=_=m=g=S=A=x=0,f=p=1,n.svg=!!(t.getCTM&&Tg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xe]!=="none"?l[Xe]:"")),i.scale=i.rotate=i.translate="none"),T=hd(t,n.svg),n.svg&&(n.uncache?(j=t.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),od(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,T)),M=n.xOrigin||0,b=n.yOrigin||0,T!==Ba&&(D=T[0],L=T[1],V=T[2],I=T[3],h=U=T[4],d=H=T[5],T.length===6?(f=Math.sqrt(D*D+L*L),p=Math.sqrt(I*I+V*V),_=D||L?go(L,D)*Dr:0,S=V||I?go(V,I)*Dr+_:0,S&&(p*=Math.abs(Math.cos(S*xo))),n.svg&&(h-=M-(M*D+b*V),d-=b-(M*L+b*I))):(Ht=T[6],Tt=T[7],R=T[8],J=T[9],wt=T[10],Xt=T[11],h=T[12],d=T[13],u=T[14],v=go(Ht,wt),m=v*Dr,v&&(w=Math.cos(-v),C=Math.sin(-v),k=U*w+R*C,j=H*w+J*C,W=Ht*w+wt*C,R=U*-C+R*w,J=H*-C+J*w,wt=Ht*-C+wt*w,Xt=Tt*-C+Xt*w,U=k,H=j,Ht=W),v=go(-V,wt),g=v*Dr,v&&(w=Math.cos(-v),C=Math.sin(-v),k=D*w-R*C,j=L*w-J*C,W=V*w-wt*C,Xt=I*C+Xt*w,D=k,L=j,V=W),v=go(L,D),_=v*Dr,v&&(w=Math.cos(v),C=Math.sin(v),k=D*w+L*C,j=U*w+H*C,L=L*w-D*C,H=H*w-U*C,D=k,U=j),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=$e(Math.sqrt(D*D+L*L+V*V)),p=$e(Math.sqrt(H*H+Ht*Ht)),v=go(U,H),S=Math.abs(v)>2e-4?v*Dr:0,x=Xt?1/(Xt<0?-Xt:Xt):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ag(_i(t,Xe)),k&&t.setAttribute("transform",k))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=$e(f),n.scaleY=$e(p),n.rotation=$e(_)+a,n.rotationX=$e(m)+a,n.rotationY=$e(g)+a,n.skewX=S+a,n.skewY=A+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[oi]=Lc(c)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?Sy:bg?Cg:yy,n.uncache=0,n},Lc=function(t){return(t=t.split(" "))[0]+" "+t[1]},nd=function(t,e,n){var i=Tn(e);return $e(parseFloat(e)+parseFloat(nr(t,"x",n+"px",i)))+i},yy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Cg(t,e)},Ir="0deg",Fa="0px",Lr=") ",Cg=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,S=n.target,A=n.zOrigin,x="",M=g==="auto"&&t&&t!==1||g===!0;if(A&&(d!==Ir||h!==Ir)){var b=parseFloat(h)*xo,T=Math.sin(b),v=Math.cos(b),w;b=parseFloat(d)*xo,w=Math.cos(b),o=nd(S,o,T*w*-A),a=nd(S,a,-Math.sin(b)*-A),l=nd(S,l,v*w*-A+A)}m!==Fa&&(x+="perspective("+m+Lr),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(M||o!==Fa||a!==Fa||l!==Fa)&&(x+=l!==Fa||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Lr),c!==Ir&&(x+="rotate("+c+Lr),h!==Ir&&(x+="rotateY("+h+Lr),d!==Ir&&(x+="rotateX("+d+Lr),(u!==Ir||f!==Ir)&&(x+="skew("+u+", "+f+Lr),(p!==1||_!==1)&&(x+="scale("+p+", "+_+Lr),S.style[Xe]=x||"translate(0, 0)"},Sy=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,S=n.forceCSS,A=parseFloat(o),x=parseFloat(a),M,b,T,v,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=xo,c*=xo,M=Math.cos(l)*d,b=Math.sin(l)*d,T=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=xo,w=Math.tan(c-h),w=Math.sqrt(1+w*w),T*=w,v*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),M*=w,b*=w)),M=$e(M),b=$e(b),T=$e(T),v=$e(v)):(M=d,v=u,b=T=0),(A&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(A=nr(f,"x",o,"px"),x=nr(f,"y",a,"px")),(p||_||m||g)&&(A=$e(A+p-(p*M+_*T)+m),x=$e(x+_-(p*b+_*v)+g)),(i||r)&&(w=f.getBBox(),A=$e(A+i/100*w.width),x=$e(x+r/100*w.height)),w="matrix("+M+","+b+","+T+","+v+","+A+","+x+")",f.setAttribute("transform",w),S&&(f.style[Xe]=w)},My=function(t,e,n,i,r){var o=360,a=fn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Dr:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*ug)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*ug)%o-~~(c/o)*o)),t._pt=u=new qn(t._pt,e,n,i,c,sy),u.e=h,u.u="deg",t._props.push(n),u},xg=function(t,e){for(var n in e)t[n]=e[n];return t},by=function(t,e,n){var i=xg({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Xe]=e,a=za(n,1),er(n,Xe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xe],o[Xe]=e,a=za(n,1),o[Xe]=c);for(l in As)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=Tn(c),p=Tn(h),d=f!==p?nr(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new qn(t._pt,a,l,d,u-d,id),t._pt.u=p||0,t._props.push(l));xg(a,i)};Yn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Ic[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return Es(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,_){return f[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var ud={name:"css",register:rd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,p,_,m,g,S,A,x,M,b,T,v,w;ad||rd(),this.styles=this.styles||Mg(t),v=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(ni[_]&&Jf(_,e,n,i,t,r)))){if(f=typeof h,p=Ic[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=mo(h)),p)p(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ws.lastIndex=0,ws.test(c)||(m=Tn(c),g=Tn(h),g?m!==g&&(c=nr(t,_,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),v.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],fn(c)&&~c.indexOf("random(")&&(c=mo(c)),Tn(c+"")||c==="auto"||(c+=ri.units[_]||Tn(Es(t,_))||""),(c+"").charAt(1)==="="&&(c=Es(t,_))):c=Es(t,_),u=parseFloat(c),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),d=parseFloat(h),_ in as&&(_==="autoAlpha"&&(u===1&&Es(t,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,a.visibility),tr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=as[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in As,A){if(this.styles.save(_),w=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=_i(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=_i(t,"perspective"),C?t.style.perspective=C:er(t,"perspective")}d=parseFloat(h)}if(x||(M=t._gsap,M.renderTransform&&!e.parseTransform||za(t,e.parseTransform),b=e.smoothOrigin!==!1&&M.smooth,x=this._pt=new qn(this._pt,a,Xe,0,1,M.renderTransform,M,0,-1),x.dep=1),_==="scale")this._pt=new qn(this._pt,M,"scaleY",M.scaleY,(S?Rr(M.scaleY,S+d):d)-M.scaleY||0,id),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(oi,0,a[oi]),h=xy(h),M.svg?od(t,h,0,b,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==M.zOrigin&&tr(this,M,"zOrigin",M.zOrigin,g),tr(this,a,_,Lc(c),Lc(h)));continue}else if(_==="svgOrigin"){od(t,h,1,b,0,this);continue}else if(_ in Eg){My(this,M,_,u,S?Rr(u,S+h):h);continue}else if(_==="smoothOrigin"){tr(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){by(this,h,t);continue}}else _ in a||(_=vo(_)||_);if(A||(d||d===0)&&(u||u===0)&&!iy.test(h)&&_ in a)m=(c+"").substr((u+"").length),d||(d=0),g=Tn(h)||(_ in ri.units?ri.units[_]:m),m!==g&&(u=nr(t,_,c,g)),this._pt=new qn(this._pt,A?M:a,_,u,(S?Rr(u,S+d):d)-u,!A&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?ay:id),this._pt.u=g||0,A&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=oy):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=ry);else if(_ in a)_y.call(this,t,_,c,S?S+h:h);else if(_ in t)this.add(t,_,c||t[_],S?S+h:h,i,r);else if(_!=="parseTransform"){Ec(_,h);continue}A||(_ in a?v.push(_,0,a[_]):typeof t[_]=="function"?v.push(_,2,t[_]()):v.push(_,1,c||t[_])),o.push(_)}}T&&ed(this)},render:function(t,e){if(e.tween._time||!ld())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Es,aliases:as,getSetter:function(t,e,n){var i=as[e];return i&&i.indexOf(",")<0&&(e=i),e in As&&e!==oi&&(t._gsap.x||Es(t,"x"))?n&&hg===n?e==="scale"?uy:hy:(hg=n||{})&&(e==="scale"?fy:dy):t.style&&!Tc(t.style[e])?ly:~e.indexOf("-")?cy:Pc(t,e)},core:{_removeProperty:er,_getMatrix:hd}};Nn.utils.checkPrefix=vo;Nn.core.getStyleSaver=Mg;(function(s,t,e,n){var i=Yn(s+","+t+","+e,function(r){As[r]=1});Yn(t,function(r){ri.units[r]="deg",Eg[r]=1}),as[i[13]]=s+","+t,Yn(n,function(r){var o=r.split(":");as[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ri.units[s]="px"});Nn.registerPlugin(ud);var ai=Nn.registerPlugin(ud)||Nn,IE=ai.core.Tween;function Rg(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function wy(s,t,e){return t&&Rg(s.prototype,t),e&&Rg(s,e),s}var En,Uc,Ty,xi,ir,sr,So,Ig,Ur,Mo,Lg,Cs,Gi,Dg,Ng=function(){return En||typeof window<"u"&&(En=window.gsap)&&En.registerPlugin&&En},Ug=1,yo=[],ce=[],Wi=[],Va=Date.now,fd=function(t,e){return e},Ey=function(){var t=Mo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ce),i.push.apply(i,Wi),ce=n,Wi=i,fd=function(o,a){return e[o](a)}},Ps=function(t,e){return~Wi.indexOf(t)&&Wi[Wi.indexOf(t)+1][e]},Ha=function(t){return!!~Lg.indexOf(t)},$n=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},Zn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Dc="scrollLeft",Nc="scrollTop",dd=function(){return Cs&&Cs.isPressed||ce.cache++},Oc=function(t,e){var n=function i(r){if(r||r===0){Ug&&(xi.history.scrollRestoration="manual");var o=Cs&&Cs.isPressed;r=i.v=Math.round(r)||(Cs&&Cs.iOS?1:0),t(r),i.cacheID=ce.cache,o&&fd("ss",r)}else(e||ce.cache!==i.cacheID||fd("ref"))&&(i.cacheID=ce.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Un={s:Dc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Oc(function(s){return arguments.length?xi.scrollTo(s,on.sc()):xi.pageXOffset||ir[Dc]||sr[Dc]||So[Dc]||0})},on={s:Nc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:Oc(function(s){return arguments.length?xi.scrollTo(Un.sc(),s):xi.pageYOffset||ir[Nc]||sr[Nc]||So[Nc]||0})},Jn=function(t,e){return(e&&e._ctx&&e._ctx.selector||En.utils.toArray)(t)[0]||(typeof t=="string"&&En.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Ay=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Rs=function(t,e){var n=e.s,i=e.sc;Ha(t)&&(t=ir.scrollingElement||sr);var r=ce.indexOf(t),o=i===on.sc?1:2;!~r&&(r=ce.push(t)-1),ce[r+o]||$n(t,"scroll",dd);var a=ce[r+o],l=a||(ce[r+o]=Oc(Ps(t,n),!0)||(Ha(t)?i:Oc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=En.getProperty(t,"scrollBehavior")==="smooth"),l},Fc=function(t,e,n){var i=t,r=t,o=Va(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var m=Va();_||m-o>l?(r=i,i=p,a=o,o=m):n?i+=p:i=r+(p-r)/(m-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},u=function(p){var _=a,m=r,g=Va();return(p||p===0)&&p!==i&&h(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},ka=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Pg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Og=function(){Mo=En.core.globals().ScrollTrigger,Mo&&Mo.core&&Ey()},Fg=function(t){return En=t||Ng(),!Uc&&En&&typeof document<"u"&&document.body&&(xi=window,ir=document,sr=ir.documentElement,So=ir.body,Lg=[xi,ir,sr,So],Ty=En.utils.clamp,Dg=En.core.context||function(){},Ur="onpointerenter"in So?"pointer":"mouse",Ig=Je.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Gi=Je.eventTypes=("ontouchstart"in sr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in sr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ug=0},500),Uc=1),Mo||Og(),Uc};Un.op=on;ce.cache=0;var Je=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Uc||Fg(En)||console.warn("Please gsap.registerPlugin(Observer)"),Mo||Og();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,S=n.onDrag,A=n.onPress,x=n.onRelease,M=n.onRight,b=n.onLeft,T=n.onUp,v=n.onDown,w=n.onChangeX,C=n.onChangeY,D=n.onChange,L=n.onToggleX,V=n.onToggleY,I=n.onHover,U=n.onHoverEnd,H=n.onMove,k=n.ignoreCheck,j=n.isNormalizer,W=n.onGestureStart,R=n.onGestureEnd,J=n.onWheel,wt=n.onEnable,Tt=n.onDisable,Xt=n.onClick,Ht=n.scrollSpeed,$t=n.capture,$=n.allowClicks,et=n.lockAxis,dt=n.onLockAxis;this.target=a=Jn(a)||sr,this.vars=n,f&&(f=En.utils.toArray(f)),i=i||1e-9,r=r||0,p=p||1,Ht=Ht||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(xi.getComputedStyle(So).lineHeight)||22);var kt,_t,Rt,Pt,K,st,at,N=this,ut=0,Nt=0,Lt=n.passive||!h&&n.passive!==!1,Ct=Rs(a,Un),Qt=Rs(a,on),O=Ct(),ue=Qt(),Jt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Gi[0]==="pointerdown",P=Ha(a),y=a.ownerDocument||ir,G=[0,0,0],X=[0,0,0],Q=0,mt=function(){return Q=Va()},ct=function(ot,Yt){return(N.event=ot)&&f&&Ay(ot.target,f)||Yt&&Jt&&ot.pointerType!=="touch"||k&&k(ot,Yt)},tt=function(){N._vx.reset(),N._vy.reset(),_t.pause(),d&&d(N)},it=function(){var ot=N.deltaX=Pg(G),Yt=N.deltaY=Pg(X),lt=Math.abs(ot)>=i,Kt=Math.abs(Yt)>=i;D&&(lt||Kt)&&D(N,ot,Yt,G,X),lt&&(M&&N.deltaX>0&&M(N),b&&N.deltaX<0&&b(N),w&&w(N),L&&N.deltaX<0!=ut<0&&L(N),ut=N.deltaX,G[0]=G[1]=G[2]=0),Kt&&(v&&N.deltaY>0&&v(N),T&&N.deltaY<0&&T(N),C&&C(N),V&&N.deltaY<0!=Nt<0&&V(N),Nt=N.deltaY,X[0]=X[1]=X[2]=0),(Pt||Rt)&&(H&&H(N),Rt&&(m&&Rt===1&&m(N),S&&S(N),Rt=0),Pt=!1),st&&!(st=!1)&&dt&&dt(N),K&&(J(N),K=!1),kt=0},vt=function(ot,Yt,lt){G[lt]+=ot,X[lt]+=Yt,N._vx.update(ot),N._vy.update(Yt),c?kt||(kt=requestAnimationFrame(it)):it()},Ot=function(ot,Yt){et&&!at&&(N.axis=at=Math.abs(ot)>Math.abs(Yt)?"x":"y",st=!0),at!=="y"&&(G[2]+=ot,N._vx.update(ot,!0)),at!=="x"&&(X[2]+=Yt,N._vy.update(Yt,!0)),c?kt||(kt=requestAnimationFrame(it)):it()},yt=function(ot){if(!ct(ot,1)){ot=ka(ot,h);var Yt=ot.clientX,lt=ot.clientY,Kt=Yt-N.x,Ft=lt-N.y,se=N.isDragging;N.x=Yt,N.y=lt,(se||(Kt||Ft)&&(Math.abs(N.startX-Yt)>=r||Math.abs(N.startY-lt)>=r))&&(Rt||(Rt=se?2:1),se||(N.isDragging=!0),Ot(Kt,Ft))}},xt=N.onPress=function(ht){ct(ht,1)||ht&&ht.button||(N.axis=at=null,_t.pause(),N.isPressed=!0,ht=ka(ht),ut=Nt=0,N.startX=N.x=ht.clientX,N.startY=N.y=ht.clientY,N._vx.reset(),N._vy.reset(),$n(j?a:y,Gi[1],yt,Lt,!0),N.deltaX=N.deltaY=0,A&&A(N))},ft=N.onRelease=function(ht){if(!ct(ht,1)){Zn(j?a:y,Gi[1],yt,!0);var ot=!isNaN(N.y-N.startY),Yt=N.isDragging,lt=Yt&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),Kt=ka(ht);!lt&&ot&&(N._vx.reset(),N._vy.reset(),h&&$&&En.delayedCall(.08,function(){if(Va()-Q>300&&!ht.defaultPrevented){if(ht.target.click)ht.target.click();else if(y.createEvent){var Ft=y.createEvent("MouseEvents");Ft.initMouseEvent("click",!0,!0,xi,1,Kt.screenX,Kt.screenY,Kt.clientX,Kt.clientY,!1,!1,!1,!1,0,null),ht.target.dispatchEvent(Ft)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,d&&Yt&&!j&&_t.restart(!0),Rt&&it(),g&&Yt&&g(N),x&&x(N,lt)}},Gt=function(ot){return ot.touches&&ot.touches.length>1&&(N.isGesturing=!0)&&W(ot,N.isDragging)},jt=function(){return(N.isGesturing=!1)||R(N)},B=function(ot){if(!ct(ot)){var Yt=Ct(),lt=Qt();vt((Yt-O)*Ht,(lt-ue)*Ht,1),O=Yt,ue=lt,d&&_t.restart(!0)}},gt=function(ot){if(!ct(ot)){ot=ka(ot,h),J&&(K=!0);var Yt=(ot.deltaMode===1?l:ot.deltaMode===2?xi.innerHeight:1)*p;vt(ot.deltaX*Yt,ot.deltaY*Yt,0),d&&!j&&_t.restart(!0)}},nt=function(ot){if(!ct(ot)){var Yt=ot.clientX,lt=ot.clientY,Kt=Yt-N.x,Ft=lt-N.y;N.x=Yt,N.y=lt,Pt=!0,d&&_t.restart(!0),(Kt||Ft)&&Ot(Kt,Ft)}},St=function(ot){N.event=ot,I(N)},bt=function(ot){N.event=ot,U(N)},rt=function(ot){return ct(ot)||ka(ot,h)&&Xt(N)};_t=N._dc=En.delayedCall(u||.25,tt).pause(),N.deltaX=N.deltaY=0,N._vx=Fc(0,50,!0),N._vy=Fc(0,50,!0),N.scrollX=Ct,N.scrollY=Qt,N.isDragging=N.isGesturing=N.isPressed=!1,Dg(this),N.enable=function(ht){return N.isEnabled||($n(P?y:a,"scroll",dd),o.indexOf("scroll")>=0&&$n(P?y:a,"scroll",B,Lt,$t),o.indexOf("wheel")>=0&&$n(a,"wheel",gt,Lt,$t),(o.indexOf("touch")>=0&&Ig||o.indexOf("pointer")>=0)&&($n(a,Gi[0],xt,Lt,$t),$n(y,Gi[2],ft),$n(y,Gi[3],ft),$&&$n(a,"click",mt,!0,!0),Xt&&$n(a,"click",rt),W&&$n(y,"gesturestart",Gt),R&&$n(y,"gestureend",jt),I&&$n(a,Ur+"enter",St),U&&$n(a,Ur+"leave",bt),H&&$n(a,Ur+"move",nt)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=Pt=Rt=!1,N._vx.reset(),N._vy.reset(),O=Ct(),ue=Qt(),ht&&ht.type&&xt(ht),wt&&wt(N)),N},N.disable=function(){N.isEnabled&&(yo.filter(function(ht){return ht!==N&&Ha(ht.target)}).length||Zn(P?y:a,"scroll",dd),N.isPressed&&(N._vx.reset(),N._vy.reset(),Zn(j?a:y,Gi[1],yt,!0)),Zn(P?y:a,"scroll",B,$t),Zn(a,"wheel",gt,$t),Zn(a,Gi[0],xt,$t),Zn(y,Gi[2],ft),Zn(y,Gi[3],ft),Zn(a,"click",mt,!0),Zn(a,"click",rt),Zn(y,"gesturestart",Gt),Zn(y,"gestureend",jt),Zn(a,Ur+"enter",St),Zn(a,Ur+"leave",bt),Zn(a,Ur+"move",nt),N.isEnabled=N.isPressed=N.isDragging=!1,Tt&&Tt(N))},N.kill=N.revert=function(){N.disable();var ht=yo.indexOf(N);ht>=0&&yo.splice(ht,1),Cs===N&&(Cs=0)},yo.push(N),j&&Ha(a)&&(Cs=N),N.enable(_)},wy(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Je.version="3.15.0";Je.create=function(s){return new Je(s)};Je.register=Fg;Je.getAll=function(){return yo.slice()};Je.getById=function(s){return yo.filter(function(t){return t.vars.id===s})[0]};Ng()&&En.registerPlugin(Je);var Ut,Eo,de,we,Si,Me,Ad,jc,nl,$a,Wa,Bc,On,nh,yd,Qn,Bg,zg,Ao,e0,pd,n0,Kn,Sd,i0,s0,rr,Md,Cd,Co,Rd,Ja,bd,md,zc=1,Fn=Date.now,gd=Fn(),Ni=0,Xa=0,kg=function(t,e,n){var i=yi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Vg=function(t,e){return e&&(!yi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Cy=function s(){return Xa&&requestAnimationFrame(s)},Hg=function(){return nh=1},Gg=function(){return nh=0},ls=function(t){return t},Ya=function(t){return Math.round(t*1e5)/1e5||0},r0=function(){return typeof window<"u"},o0=function(){return Ut||r0()&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},Vr=function(t){return!!~Ad.indexOf(t)},a0=function(t){return(t==="Height"?Rd:de["inner"+t])||Si["client"+t]||Me["client"+t]},l0=function(t){return Ps(t,"getBoundingClientRect")||(Vr(t)?function(){return Qc.width=de.innerWidth,Qc.height=Rd,Qc}:function(){return Is(t)})},Ry=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=Ps(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?a0(r):t["client"+r])||0}},Py=function(t,e){return!e||~Wi.indexOf(t)?l0(t):function(){return Qc}},cs=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Ps(t,n))?o()-l0(t)()[r]:Vr(t)?(Si[n]||Me[n])-a0(i):t[n]-t["offset"+i])},kc=function(t,e){for(var n=0;n<Ao.length;n+=3)(!e||~e.indexOf(Ao[n+1]))&&t(Ao[n],Ao[n+1],Ao[n+2])},yi=function(t){return typeof t=="string"},Bn=function(t){return typeof t=="function"},qa=function(t){return typeof t=="number"},Or=function(t){return typeof t=="object"},Ga=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},bo=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},wo=Math.abs,c0="left",h0="top",Pd="right",Id="bottom",Br="width",zr="height",Ka="Right",Qa="Left",ja="Top",tl="Bottom",an="padding",Li="margin",Po="Width",Ld="Height",dn="px",Di=function(t){return de.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Iy=function(t){var e=Di(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Wg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Is=function(t,e){var n=e&&Di(t)[yd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ut.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},th=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},u0=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},Ly=function(t){return function(e){return Ut.utils.snap(u0(t),e)}},Dd=function(t){var e=Ut.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},Dy=function(t){return function(e,n){return Dd(u0(t))(e,n.direction)}},Vc=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},vn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},xn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Hc=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Xg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Gc={toggleActions:"play",anticipatePin:0},eh={top:0,left:0,center:.5,bottom:1,right:1},Zc=function(t,e){if(yi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in eh?eh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Wc=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,p=we.createElement("div"),_=Vr(n)||Ps(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?Me:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,A=S?c:h,x="border-color:"+A+";font-size:"+d+";color:"+A+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===on?Pd:Id)+":"+(o+parseFloat(u))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=S,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=x,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],$c(p,0,i,S),p},$c=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Po]=1,r["border"+a+Po]=0,r[n.p]=e+"px",Ut.set(t,r)},he=[],wd={},il,Yg=function(){return Fn()-Ni>34&&(il||(il=requestAnimationFrame(Ls)))},To=function(){(!Kn||!Kn.isPressed||Kn.startX>Me.clientWidth)&&(ce.cache++,Kn?il||(il=requestAnimationFrame(Ls)):Ls(),Ni||Gr("scrollStart"),Ni=Fn())},_d=function(){s0=de.innerWidth,i0=de.innerHeight},Za=function(t){ce.cache++,(t===!0||!On&&!n0&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!Sd||s0!==de.innerWidth||Math.abs(de.innerHeight-i0)>de.innerHeight*.25))&&jc.restart(!0)},Hr={},Ny=[],f0=function s(){return xn(te,"scrollEnd",s)||Fr(!0)},Gr=function(t){return Hr[t]&&Hr[t].map(function(e){return e()})||Ny},vi=[],d0=function(t){for(var e=0;e<vi.length;e+=5)(!t||vi[e+4]&&vi[e+4].query===t)&&(vi[e].style.cssText=vi[e+1],vi[e].getBBox&&vi[e].setAttribute("transform",vi[e+2]||""),vi[e+3].uncache=1)},p0=function(){return ce.forEach(function(t){return Bn(t)&&++t.cacheID&&(t.rec=t())})},Nd=function(t,e){var n;for(Qn=0;Qn<he.length;Qn++)n=he[Qn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ja=!0,e&&d0(e),e||Gr("revert")},m0=function(t,e){ce.cache++,(e||!jn)&&ce.forEach(function(n){return Bn(n)&&n.cacheID++&&(n.rec=0)}),yi(t)&&(de.history.scrollRestoration=Cd=t)},jn,kr=0,qg,Uy=function(){if(qg!==kr){var t=qg=kr;requestAnimationFrame(function(){return t===kr&&Fr(!0)})}},g0=function(){Me.appendChild(Co),Rd=!Kn&&Co.offsetHeight||de.innerHeight,Me.removeChild(Co)},Zg=function(t){return nl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Fr=function(t,e){if(Si=we.documentElement,Me=we.body,Ad=[de,we,Si,Me],Ni&&!t&&!Ja){vn(te,"scrollEnd",f0);return}g0(),jn=te.isRefreshing=!0,Ja||p0();var n=Gr("refreshInit");e0&&te.sort(),e||Nd(),ce.forEach(function(i){Bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),he.slice(0).forEach(function(i){return i.refresh()}),Ja=!1,he.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),bd=1,Zg(!0),he.forEach(function(i){var r=cs(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Zg(!1),bd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ce.forEach(function(i){Bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),m0(Cd,1),jc.pause(),kr++,jn=2,Ls(2),he.forEach(function(i){return Bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),jn=te.isRefreshing=!1,Gr("refresh")},Td=0,Jc=1,el,Ls=function(t){if(t===2||!jn&&!Ja){te.isUpdating=!0,el&&el.update(0);var e=he.length,n=Fn(),i=n-gd>=50,r=e&&he[0].scroll();if(Jc=Td>r?-1:1,jn||(Td=r),i&&(Ni&&!nh&&n-Ni>200&&(Ni=0,Gr("scrollEnd")),Wa=gd,gd=n),Jc<0){for(Qn=e;Qn-- >0;)he[Qn]&&he[Qn].update(0,i);Jc=1}else for(Qn=0;Qn<e;Qn++)he[Qn]&&he[Qn].update(0,i);te.isUpdating=!1}il=0},Ed=[c0,h0,Id,Pd,Li+tl,Li+Ka,Li+ja,Li+Qa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Kc=Ed.concat([Br,zr,"boxSizing","max"+Po,"max"+Ld,"position",Li,an,an+ja,an+Ka,an+tl,an+Qa]),Oy=function(t,e,n){Ro(n);var i=t._gsap;if(i.spacerIsNative)Ro(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},xd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Ed.length,o=e.style,a=t.style,l;r--;)l=Ed[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Id]=a[Pd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Br]=th(t,Un)+dn,o[zr]=th(t,on)+dn,o[an]=a[Li]=a[h0]=a[c0]="0",Ro(i),a[Br]=a["max"+Po]=n[Br],a[zr]=a["max"+Ld]=n[zr],a[an]=n[an],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Fy=/([A-Z])/g,Ro=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Ut.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(Fy,"-$1").toLowerCase())}},Xc=function(t){for(var e=Kc.length,n=t.style,i=[],r=0;r<e;r++)i.push(Kc[r],n[Kc[r]]);return i.t=t,i},By=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Qc={left:0,top:0},$g=function(t,e,n,i,r,o,a,l,c,h,d,u,f,p){Bn(t)&&(t=t(l)),yi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Zc("0"+t.substr(3),n):0));var _=f?f.time():0,m,g,S;if(f&&f.seek(0),isNaN(t)||(t=+t),qa(t))f&&(t=Ut.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&$c(a,n,i,!0);else{Bn(e)&&(e=e(l));var A=(t||"0").split(" "),x,M,b,T;S=Jn(e,l)||Me,x=Is(S)||{},(!x||!x.left&&!x.top)&&Di(S).display==="none"&&(T=S.style.display,S.style.display="block",x=Is(S),T?S.style.display=T:S.style.removeProperty("display")),M=Zc(A[0],x[i.d]),b=Zc(A[1]||"0",n),t=x[i.p]-c[i.p]-h+M+r-b,a&&$c(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var v=t+n,w=o._isStart;m="scroll"+i.d2,$c(o,v,i,w&&v>20||!w&&(d?Math.max(Me[m],Si[m]):o.parentNode[m])<=v+1),d&&(c=Is(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+dn))}return f&&S&&(m=Is(S),f.seek(u),g=Is(S),f._caScrollDist=m[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},zy=/(webkit|moz|length|cssText|inset)/i,Jg=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===Me){t._stOrig=r.cssText,a=Di(t);for(o in a)!+o&&!zy.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Ut.core.getCache(t).uncache=1,e.appendChild(t)}},_0=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Yc=function(t,e,n){var i={};i[e.p]="+="+n,Ut.set(t,i)},Kg=function(t,e){var n=Rs(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||n();var _=_0(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){ce.cache++,o.tween&&Ls()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ut.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},vn(t,"wheel",n.wheelHandler),te.isTouch&&vn(t,"touchmove",n.wheelHandler),r},te=(function(){function s(e,n){Eo||s.register(Ut)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Md(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Xa){this.update=this.refresh=this.kill=ls;return}n=Wg(yi(n)||qa(n)||n.nodeType?{trigger:n}:n,Gc);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,p=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,S=r.onSnapComplete,A=r.once,x=r.snap,M=r.pinReparent,b=r.pinSpacer,T=r.containerAnimation,v=r.fastScrollEnd,w=r.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:on,D=!d&&d!==0,L=Jn(n.scroller||de),V=Ut.core.getCache(L),I=Vr(L),U=("pinType"in n?n.pinType:Ps(L,"pinType")||I&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=D&&n.toggleActions.split(" "),j="markers"in n?n.markers:Gc.markers,W=I?0:parseFloat(Di(L)["border"+C.p2+Po])||0,R=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(R)},wt=Ry(L,I,C),Tt=Py(L,I),Xt=0,Ht=0,$t=0,$=Rs(L,C),et,dt,kt,_t,Rt,Pt,K,st,at,N,ut,Nt,Lt,Ct,Qt,O,ue,Jt,P,y,G,X,Q,mt,ct,tt,it,vt,Ot,yt,xt,ft,Gt,jt,B,gt,nt,St,bt;if(R._startClamp=R._endClamp=!1,R._dir=C,m*=45,R.scroller=L,R.scroll=T?T.time.bind(T):$,_t=$(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(e0=1,n.refreshPriority===-9999&&(el=R)),V.tweenScroll=V.tweenScroll||{top:Kg(L,on),left:Kg(L,Un)},R.tweenTo=et=V.tweenScroll[C.p],R.scrubDuration=function(lt){Gt=qa(lt)&&lt,Gt?ft?ft.duration(lt):ft=Ut.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Gt,paused:!0,onComplete:function(){return g&&g(R)}}):(ft&&ft.progress(1).kill(),ft=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),yt=0,l||(l=i.vars.id)),x&&((!Or(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Me.style&&Ut.set(I?[Me,Si]:L,{scrollBehavior:"auto"}),ce.forEach(function(lt){return Bn(lt)&&lt.target===(I?we.scrollingElement||Si:L)&&(lt.smooth=!1)}),kt=Bn(x.snapTo)?x.snapTo:x.snapTo==="labels"?Ly(i):x.snapTo==="labelsDirectional"?Dy(i):x.directional!==!1?function(lt,Kt){return Dd(x.snapTo)(lt,Fn()-Ht<500?0:Kt.direction)}:Ut.utils.snap(x.snapTo),jt=x.duration||{min:.1,max:2},jt=Or(jt)?$a(jt.min,jt.max):$a(jt,jt),B=Ut.delayedCall(x.delay||Gt/2||.1,function(){var lt=$(),Kt=Fn()-Ht<500,Ft=et.tween;if((Kt||Math.abs(R.getVelocity())<10)&&!Ft&&!nh&&Xt!==lt){var se=(lt-Pt)/Ct,nn=i&&!D?i.totalProgress():se,fe=Kt?0:(nn-xt)/(Fn()-Wa)*1e3||0,Oe=Ut.utils.clamp(-se,1-se,wo(fe/2)*fe/.185),gn=se+(x.inertia===!1?0:Oe),Fe,Ce,ge=x,Gn=ge.onStart,Ne=ge.onInterrupt,Pn=ge.onComplete;if(Fe=kt(gn,R),qa(Fe)||(Fe=gn),Ce=Math.max(0,Math.round(Pt+Fe*Ct)),lt<=K&&lt>=Pt&&Ce!==lt){if(Ft&&!Ft._initted&&Ft.data<=wo(Ce-lt))return;x.inertia===!1&&(Oe=Fe-se),et(Ce,{duration:jt(wo(Math.max(wo(gn-nn),wo(Fe-nn))*.185/fe/.05||0)),ease:x.ease||"power3",data:wo(Ce-lt),onInterrupt:function(){return B.restart(!0)&&Ne&&bo(R,Ne)},onComplete:function(){R.update(),Xt=$(),i&&!D&&(ft?ft.resetTo("totalProgress",Fe,i._tTime/i._tDur):i.progress(Fe)),yt=xt=i&&!D?i.totalProgress():R.progress,S&&S(R),Pn&&bo(R,Pn)}},lt,Oe*Ct,Ce-lt-Oe*Ct),Gn&&bo(R,Gn,et.tween)}}else R.isActive&&Xt!==lt&&B.restart(!0)}).pause()),l&&(wd[l]=R),u=R.trigger=Jn(u||f!==!0&&f),bt=u&&u._gsap&&u._gsap.stRevert,bt&&(bt=bt(R)),f=f===!0?u:Jn(f),yi(a)&&(a={targets:u,className:a}),f&&(p===!1||p===Li||(p=!p&&f.parentNode&&f.parentNode.style&&Di(f.parentNode).display==="flex"?!1:an),R.pin=f,dt=Ut.core.getCache(f),dt.spacer?Qt=dt.pinState:(b&&(b=Jn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),dt.spacerIsNative=!!b,b&&(dt.spacerState=Xc(b))),dt.spacer=Jt=b||we.createElement("div"),Jt.classList.add("pin-spacer"),l&&Jt.classList.add("pin-spacer-"+l),dt.pinState=Qt=Xc(f)),n.force3D!==!1&&Ut.set(f,{force3D:!0}),R.spacer=Jt=dt.spacer,Ot=Di(f),mt=Ot[p+C.os2],y=Ut.getProperty(f),G=Ut.quickSetter(f,C.a,dn),xd(f,Jt,Ot),ue=Xc(f)),j){Nt=Or(j)?Wg(j,Xg):Xg,N=Wc("scroller-start",l,L,C,Nt,0),ut=Wc("scroller-end",l,L,C,Nt,0,N),P=N["offset"+C.op.d2];var rt=Jn(Ps(L,"content")||L);st=this.markerStart=Wc("start",l,rt,C,Nt,P,0,T),at=this.markerEnd=Wc("end",l,rt,C,Nt,P,0,T),T&&(St=Ut.quickSetter([st,at],C.a,dn)),!U&&!(Wi.length&&Ps(L,"fixedMarkers")===!0)&&(Iy(I?Me:L),Ut.set([N,ut],{force3D:!0}),tt=Ut.quickSetter(N,C.a,dn),vt=Ut.quickSetter(ut,C.a,dn))}if(T){var ht=T.vars.onUpdate,ot=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){R.update(0,0,1),ht&&ht.apply(T,ot||[])})}if(R.previous=function(){return he[he.indexOf(R)-1]},R.next=function(){return he[he.indexOf(R)+1]},R.revert=function(lt,Kt){if(!Kt)return R.kill(!0);var Ft=lt!==!1||!R.enabled,se=On;Ft!==R.isReverted&&(Ft&&(gt=Math.max($(),R.scroll.rec||0),$t=R.progress,nt=i&&i.progress()),st&&[st,at,N,ut].forEach(function(nn){return nn.style.display=Ft?"none":"block"}),Ft&&(On=R,R.update(Ft)),f&&(!M||!R.isActive)&&(Ft?Oy(f,Jt,Qt):xd(f,Jt,Di(f),ct)),Ft||R.update(Ft),On=se,R.isReverted=Ft)},R.refresh=function(lt,Kt,Ft,se){if(!((On||!R.enabled)&&!Kt)){if(f&&lt&&Ni){vn(s,"scrollEnd",f0);return}!jn&&J&&J(R),On=R,et.tween&&!Ft&&(et.tween.kill(),et.tween=0),ft&&ft.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Mt){return Mt.vars.immediateRender&&Mt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var nn=wt(),fe=Tt(),Oe=T?T.duration():cs(L,C),gn=Ct<=.01||!Ct,Fe=0,Ce=se||0,ge=Or(Ft)?Ft.end:n.end,Gn=n.endTrigger||u,Ne=Or(Ft)?Ft.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),Pn=R.pinnedContainer=n.pinnedContainer&&Jn(n.pinnedContainer,R),Wn=u&&Math.max(0,he.indexOf(R))||0,sn=Wn,qe,un,ns,ro,_n,Ke,Ai,oo,E,z,Z,Y,q;for(j&&Or(Ft)&&(Y=Ut.getProperty(N,C.p),q=Ut.getProperty(ut,C.p));sn-- >0;)Ke=he[sn],Ke.end||Ke.refresh(0,1)||(On=R),Ai=Ke.pin,Ai&&(Ai===u||Ai===f||Ai===Pn)&&!Ke.isReverted&&(z||(z=[]),z.unshift(Ke),Ke.revert(!0,!0)),Ke!==he[sn]&&(Wn--,sn--);for(Bn(Ne)&&(Ne=Ne(R)),Ne=kg(Ne,"start",R),Pt=$g(Ne,u,nn,C,$(),st,N,R,fe,W,U,Oe,T,R._startClamp&&"_startClamp")||(f?-.001:0),Bn(ge)&&(ge=ge(R)),yi(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(yi(Ne)?Ne.split(" ")[0]:"")+ge:(Fe=Zc(ge.substr(2),nn),ge=yi(Ne)?Ne:(T?Ut.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Pt):Pt)+Fe,Gn=u)),ge=kg(ge,"end",R),K=Math.max(Pt,$g(ge||(Gn?"100% 0":Oe),Gn,nn,C,$()+Fe,at,ut,R,fe,W,U,Oe,T,R._endClamp&&"_endClamp"))||-.001,Fe=0,sn=Wn;sn--;)Ke=he[sn]||{},Ai=Ke.pin,Ai&&Ke.start-Ke._pinPush<=Pt&&!T&&Ke.end>0&&(qe=Ke.end-(R._startClamp?Math.max(0,Ke.start):Ke.start),(Ai===u&&Ke.start-Ke._pinPush<Pt||Ai===Pn)&&isNaN(Ne)&&(Fe+=qe*(1-Ke.progress)),Ai===f&&(Ce+=qe));if(Pt+=Fe,K+=Fe,R._startClamp&&(R._startClamp+=Fe),R._endClamp&&!jn&&(R._endClamp=K||-.001,K=Math.min(K,cs(L,C))),Ct=K-Pt||(Pt-=.01)&&.001,gn&&($t=Ut.utils.clamp(0,1,Ut.utils.normalize(Pt,K,gt))),R._pinPush=Ce,st&&Fe&&(qe={},qe[C.a]="+="+Fe,Pn&&(qe[C.p]="-="+$()),Ut.set([st,at],qe)),f&&!(bd&&R.end>=cs(L,C)))qe=Di(f),ro=C===on,ns=$(),X=parseFloat(y(C.a))+Ce,!Oe&&K>1&&(Z=(I?we.scrollingElement||Si:L).style,Z={style:Z,value:Z["overflow"+C.a.toUpperCase()]},I&&Di(Me)["overflow"+C.a.toUpperCase()]!=="scroll"&&(Z.style["overflow"+C.a.toUpperCase()]="scroll")),xd(f,Jt,qe),ue=Xc(f),un=Is(f,!0),oo=U&&Rs(L,ro?Un:on)(),p?(ct=[p+C.os2,Ct+Ce+dn],ct.t=Jt,sn=p===an?th(f,C)+Ct+Ce:0,sn&&(ct.push(C.d,sn+dn),Jt.style.flexBasis!=="auto"&&(Jt.style.flexBasis=sn+dn)),Ro(ct),Pn&&he.forEach(function(Mt){Mt.pin===Pn&&Mt.vars.pinSpacing!==!1&&(Mt._subPinOffset=!0)}),U&&$(gt)):(sn=th(f,C),sn&&Jt.style.flexBasis!=="auto"&&(Jt.style.flexBasis=sn+dn)),U&&(_n={top:un.top+(ro?ns-Pt:oo)+dn,left:un.left+(ro?oo:ns-Pt)+dn,boxSizing:"border-box",position:"fixed"},_n[Br]=_n["max"+Po]=Math.ceil(un.width)+dn,_n[zr]=_n["max"+Ld]=Math.ceil(un.height)+dn,_n[Li]=_n[Li+ja]=_n[Li+Ka]=_n[Li+tl]=_n[Li+Qa]="0",_n[an]=qe[an],_n[an+ja]=qe[an+ja],_n[an+Ka]=qe[an+Ka],_n[an+tl]=qe[an+tl],_n[an+Qa]=qe[an+Qa],O=By(Qt,_n,M),jn&&$(0)),i?(E=i._initted,pd(1),i.render(i.duration(),!0,!0),Q=y(C.a)-X+Ct+Ce,it=Math.abs(Ct-Q)>1,U&&it&&O.splice(O.length-2,2),i.render(0,!0,!0),E||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),pd(0)):Q=Ct,Z&&(Z.value?Z.style["overflow"+C.a.toUpperCase()]=Z.value:Z.style.removeProperty("overflow-"+C.a));else if(u&&$()&&!T)for(un=u.parentNode;un&&un!==Me;)un._pinOffset&&(Pt-=un._pinOffset,K-=un._pinOffset),un=un.parentNode;z&&z.forEach(function(Mt){return Mt.revert(!1,!0)}),R.start=Pt,R.end=K,_t=Rt=jn?gt:$(),!T&&!jn&&(_t<gt&&$(gt),R.scroll.rec=0),R.revert(!1,!0),Ht=Fn(),B&&(Xt=-1,B.restart(!0)),On=0,i&&D&&(i._initted||nt)&&i.progress()!==nt&&i.progress(nt||0,!0).render(i.time(),!0,!0),(gn||$t!==R.progress||T||_||i&&!i._initted)&&(i&&!D&&(i._initted||$t||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Pt<-.001&&!$t?Ut.utils.normalize(Pt,K,0):$t,!0),R.progress=gn||(_t-Pt)/Ct===$t?0:$t),f&&p&&(Jt._pinOffset=Math.round(R.progress*Q)),ft&&ft.invalidate(),isNaN(Y)||(Y-=Ut.getProperty(N,C.p),q-=Ut.getProperty(ut,C.p),Yc(N,C,Y),Yc(st,C,Y-(se||0)),Yc(ut,C,q),Yc(at,C,q-(se||0))),gn&&!jn&&R.update(),h&&!jn&&!Lt&&(Lt=!0,h(R),Lt=!1)}},R.getVelocity=function(){return($()-Rt)/(Fn()-Wa)*1e3||0},R.endAnimation=function(){Ga(R.callbackAnimation),i&&(ft?ft.progress(1):i.paused()?D||Ga(i,R.direction<0,1):Ga(i,i.reversed()))},R.labelToScroll=function(lt){return i&&i.labels&&(Pt||R.refresh()||Pt)+i.labels[lt]/i.duration()*Ct||0},R.getTrailing=function(lt){var Kt=he.indexOf(R),Ft=R.direction>0?he.slice(0,Kt).reverse():he.slice(Kt+1);return(yi(lt)?Ft.filter(function(se){return se.vars.preventOverlaps===lt}):Ft).filter(function(se){return R.direction>0?se.end<=Pt:se.start>=K})},R.update=function(lt,Kt,Ft){if(!(T&&!Ft&&!lt)){var se=jn===!0?gt:R.scroll(),nn=lt?0:(se-Pt)/Ct,fe=nn<0?0:nn>1?1:nn||0,Oe=R.progress,gn,Fe,Ce,ge,Gn,Ne,Pn,Wn;if(Kt&&(Rt=_t,_t=T?$():se,x&&(xt=yt,yt=i&&!D?i.totalProgress():fe)),m&&f&&!On&&!zc&&Ni&&(!fe&&Pt<se+(se-Rt)/(Fn()-Wa)*m?fe=1e-4:fe===1&&K>se+(se-Rt)/(Fn()-Wa)*m&&(fe=.9999)),fe!==Oe&&R.enabled){if(gn=R.isActive=!!fe&&fe<1,Fe=!!Oe&&Oe<1,Ne=gn!==Fe,Gn=Ne||!!fe!=!!Oe,R.direction=fe>Oe?1:-1,R.progress=fe,Gn&&!On&&(Ce=fe&&!Oe?0:fe===1?1:Oe===1?2:3,D&&(ge=!Ne&&k[Ce+1]!=="none"&&k[Ce+1]||k[Ce],Wn=i&&(ge==="complete"||ge==="reset"||ge in i))),w&&(Ne||Wn)&&(Wn||d||!i)&&(Bn(w)?w(R):R.getTrailing(w).forEach(function(ns){return ns.endAnimation()})),D||(ft&&!On&&!zc?(ft._dp._time-ft._start!==ft._time&&ft.render(ft._dp._time-ft._start),ft.resetTo?ft.resetTo("totalProgress",fe,i._tTime/i._tDur):(ft.vars.totalProgress=fe,ft.invalidate().restart())):i&&i.totalProgress(fe,!!(On&&(Ht||lt)))),f){if(lt&&p&&(Jt.style[p+C.os2]=mt),!U)G(Ya(X+Q*fe));else if(Gn){if(Pn=!lt&&fe>Oe&&K+1>se&&se+1>=cs(L,C),M)if(!lt&&(gn||Pn)){var sn=Is(f,!0),qe=se-Pt;Jg(f,Me,sn.top+(C===on?qe:0)+dn,sn.left+(C===on?0:qe)+dn)}else Jg(f,Jt);Ro(gn||Pn?O:ue),it&&fe<1&&gn||G(X+(fe===1&&!Pn?Q:0))}}x&&!et.tween&&!On&&!zc&&B.restart(!0),a&&(Ne||A&&fe&&(fe<1||!md))&&nl(a.targets).forEach(function(ns){return ns.classList[gn||A?"add":"remove"](a.className)}),o&&!D&&!lt&&o(R),Gn&&!On?(D&&(Wn&&(ge==="complete"?i.pause().totalProgress(1):ge==="reset"?i.restart(!0).pause():ge==="restart"?i.restart(!0):i[ge]()),o&&o(R)),(Ne||!md)&&(c&&Ne&&bo(R,c),H[Ce]&&bo(R,H[Ce]),A&&(fe===1?R.kill(!1,1):H[Ce]=0),Ne||(Ce=fe===1?1:3,H[Ce]&&bo(R,H[Ce]))),v&&!gn&&Math.abs(R.getVelocity())>(qa(v)?v:2500)&&(Ga(R.callbackAnimation),ft?ft.progress(1):Ga(i,ge==="reverse"?1:!fe,1))):D&&o&&!On&&o(R)}if(vt){var un=T?se/T.duration()*(T._caScrollDist||0):se;tt(un+(N._isFlipped?1:0)),vt(un)}St&&St(-se/T.duration()*(T._caScrollDist||0))}},R.enable=function(lt,Kt){R.enabled||(R.enabled=!0,vn(L,"resize",Za),I||vn(L,"scroll",To),J&&vn(s,"refreshInit",J),lt!==!1&&(R.progress=$t=0,_t=Rt=Xt=$()),Kt!==!1&&R.refresh())},R.getTween=function(lt){return lt&&et?et.tween:ft},R.setPositions=function(lt,Kt,Ft,se){if(T){var nn=T.scrollTrigger,fe=T.duration(),Oe=nn.end-nn.start;lt=nn.start+Oe*lt/fe,Kt=nn.start+Oe*Kt/fe}R.refresh(!1,!1,{start:Vg(lt,Ft&&!!R._startClamp),end:Vg(Kt,Ft&&!!R._endClamp)},se),R.update()},R.adjustPinSpacing=function(lt){if(ct&&lt){var Kt=ct.indexOf(C.d)+1;ct[Kt]=parseFloat(ct[Kt])+lt+dn,ct[1]=parseFloat(ct[1])+lt+dn,Ro(ct)}},R.disable=function(lt,Kt){if(lt!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Kt||ft&&ft.pause(),gt=0,dt&&(dt.uncache=1),J&&xn(s,"refreshInit",J),B&&(B.pause(),et.tween&&et.tween.kill()&&(et.tween=0)),!I)){for(var Ft=he.length;Ft--;)if(he[Ft].scroller===L&&he[Ft]!==R)return;xn(L,"resize",Za),I||xn(L,"scroll",To)}},R.kill=function(lt,Kt){R.disable(lt,Kt),ft&&!Kt&&ft.kill(),l&&delete wd[l];var Ft=he.indexOf(R);Ft>=0&&he.splice(Ft,1),Ft===Qn&&Jc>0&&Qn--,Ft=0,he.forEach(function(se){return se.scroller===R.scroller&&(Ft=1)}),Ft||jn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,lt&&i.revert({kill:!1}),Kt||i.kill()),st&&[st,at,N,ut].forEach(function(se){return se.parentNode&&se.parentNode.removeChild(se)}),el===R&&(el=0),f&&(dt&&(dt.uncache=1),Ft=0,he.forEach(function(se){return se.pin===f&&Ft++}),Ft||(dt.spacer=0)),n.onKill&&n.onKill(R)},he.push(R),R.enable(!1,!1),bt&&bt(R),i&&i.add&&!Ct){var Yt=R.update;R.update=function(){R.update=Yt,ce.cache++,Pt||K||R.refresh()},Ut.delayedCall(.01,R.update),Ct=.01,Pt=K=0}else R.refresh();f&&Uy()},s.register=function(n){return Eo||(Ut=n||o0(),r0()&&window.document&&s.enable(),Eo=Xa),Eo},s.defaults=function(n){if(n)for(var i in n)Gc[i]=n[i];return Gc},s.disable=function(n,i){Xa=0,he.forEach(function(o){return o[i?"kill":"disable"](n)}),xn(de,"wheel",To),xn(we,"scroll",To),clearInterval(Bc),xn(we,"touchcancel",ls),xn(Me,"touchstart",ls),Vc(xn,we,"pointerdown,touchstart,mousedown",Hg),Vc(xn,we,"pointerup,touchend,mouseup",Gg),jc.kill(),kc(xn);for(var r=0;r<ce.length;r+=3)Hc(xn,ce[r],ce[r+1]),Hc(xn,ce[r],ce[r+2])},s.enable=function(){if(de=window,we=document,Si=we.documentElement,Me=we.body,Ut){if(nl=Ut.utils.toArray,$a=Ut.utils.clamp,Md=Ut.core.context||ls,pd=Ut.core.suppressOverwrites||ls,Cd=de.history.scrollRestoration||"auto",Td=de.pageYOffset||0,Ut.core.globals("ScrollTrigger",s),Me){Xa=1,Co=document.createElement("div"),Co.style.height="100vh",Co.style.position="absolute",g0(),Cy(),Je.register(Ut),s.isTouch=Je.isTouch,rr=Je.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sd=Je.isTouch===1,vn(de,"wheel",To),Ad=[de,we,Si,Me],Ut.matchMedia?(s.matchMedia=function(h){var d=Ut.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ut.addEventListener("matchMediaInit",function(){p0(),Nd()}),Ut.addEventListener("matchMediaRevert",function(){return d0()}),Ut.addEventListener("matchMedia",function(){Fr(0,1),Gr("matchMedia")}),Ut.matchMedia().add("(orientation: portrait)",function(){return _d(),_d})):console.warn("Requires GSAP 3.11.0 or later"),_d(),vn(we,"scroll",To);var n=Me.hasAttribute("style"),i=Me.style,r=i.borderTopStyle,o=Ut.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Is(Me),on.m=Math.round(a.top+on.sc())||0,Un.m=Math.round(a.left+Un.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Me.setAttribute("style",""),Me.removeAttribute("style")),Bc=setInterval(Yg,250),Ut.delayedCall(.5,function(){return zc=0}),vn(we,"touchcancel",ls),vn(Me,"touchstart",ls),Vc(vn,we,"pointerdown,touchstart,mousedown",Hg),Vc(vn,we,"pointerup,touchend,mouseup",Gg),yd=Ut.utils.checkPrefix("transform"),Kc.push(yd),Eo=Fn(),jc=Ut.delayedCall(.2,Fr).pause(),Ao=[we,"visibilitychange",function(){var h=de.innerWidth,d=de.innerHeight;we.hidden?(Bg=h,zg=d):(Bg!==h||zg!==d)&&Za()},we,"DOMContentLoaded",Fr,de,"load",Fr,de,"resize",Za],kc(vn),he.forEach(function(h){return h.enable(0,1)}),l=0;l<ce.length;l+=3)Hc(xn,ce[l],ce[l+1]),Hc(xn,ce[l],ce[l+2])}else if(we){var c=function h(){s.enable(),we.removeEventListener("DOMContentLoaded",h)};we.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(md=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Bc)||(Bc=i)&&setInterval(Yg,i),"ignoreMobileResize"in n&&(Sd=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(kc(xn)||kc(vn,n.autoRefreshEvents||"none"),n0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Jn(n),o=ce.indexOf(r),a=Vr(r);~o&&ce.splice(o,a?6:2),i&&(a?Wi.unshift(de,i,Me,i,Si,i):Wi.unshift(r,i))},s.clearMatchMedia=function(n){he.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(yi(n)?Jn(n):n).getBoundingClientRect(),a=o[r?Br:zr]*i||0;return r?o.right-a>0&&o.left+a<de.innerWidth:o.bottom-a>0&&o.top+a<de.innerHeight},s.positionInViewport=function(n,i,r){yi(n)&&(n=Jn(n));var o=n.getBoundingClientRect(),a=o[r?Br:zr],l=i==null?a/2:i in eh?eh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/de.innerWidth:(o.top+l)/de.innerHeight},s.killAll=function(n){if(he.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Hr.killAll||[];Hr={},i.forEach(function(r){return r()})}},s})();te.version="3.15.0";te.saveStyles=function(s){return s?nl(s).forEach(function(t){if(t&&t.style){var e=vi.indexOf(t);e>=0&&vi.splice(e,5),vi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ut.core.getCache(t),Md())}}):vi};te.revert=function(s,t){return Nd(!s,t)};te.create=function(s,t){return new te(s,t)};te.refresh=function(s){return s?Za(!0):(Eo||te.register())&&Fr(!0)};te.update=function(s){return++ce.cache&&Ls(s===!0?2:0)};te.clearScrollMemory=m0;te.maxScroll=function(s,t){return cs(s,t?Un:on)};te.getScrollFunc=function(s,t){return Rs(Jn(s),t?Un:on)};te.getById=function(s){return wd[s]};te.getAll=function(){return he.filter(function(s){return s.vars.id!=="ScrollSmoother"})};te.isScrolling=function(){return!!Ni};te.snapDirectional=Dd;te.addEventListener=function(s,t){var e=Hr[s]||(Hr[s]=[]);~e.indexOf(t)||e.push(t)};te.removeEventListener=function(s,t){var e=Hr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};te.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ut.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),r<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Bn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Bn(r)&&(r=r(),vn(te,"refresh",function(){return r=t.batchMax()})),nl(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(te.create(c))}),e};var Qg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},vd=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Je.isTouch?" pinch-zoom":""):"none",t===Si&&s(Me,e)},qc={auto:1,scroll:1},ky=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Ut.core.getCache(r),a=Fn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Me&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(qc[(l=Di(r)).overflowY]||qc[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Vr(r)&&(qc[(l=Di(r)).overflowY]||qc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},x0=function(t,e,n,i){return Je.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&ky,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&vn(we,Je.eventTypes[0],t0,!1,!0)},onDisable:function(){return xn(we,Je.eventTypes[0],t0,!0)}})},Vy=/(input|label|select|textarea)/i,jg,t0=function(t){var e=Vy.test(t.target.tagName);(e||jg)&&(t._gsapAllow=!0,jg=e)},Hy=function(t){Or(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Jn(t.target)||Si,h=Ut.core.globals().ScrollSmoother,d=h&&h.get(),u=rr&&(t.content&&Jn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=Rs(c,on),p=Rs(c,Un),_=1,m=(Je.isTouch&&de.visualViewport?de.visualViewport.scale*de.visualViewport.width:de.outerWidth)/de.innerWidth,g=0,S=Bn(i)?function(){return i(a)}:function(){return i||2.8},A,x,M=x0(c,t.type,!0,r),b=function(){return x=!1},T=ls,v=ls,w=function(){l=cs(c,on),v=$a(rr?1:0,l),n&&(T=$a(0,cs(c,Un))),A=kr},C=function(){u._gsap.y=Ya(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(x){requestAnimationFrame(b);var j=Ya(a.deltaY/2),W=v(f.v-j);if(u&&W!==f.v+f.offset){f.offset=W-f.v;var R=Ya((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=ce.cache,Ls()}return!0}f.offset&&C(),x=!0},L,V,I,U,H=function(){w(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return u&&Ut.set(u,{y:"+=0"}),t.ignoreCheck=function(k){return rr&&k.type==="touchmove"&&D(k)||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},t.onPress=function(){x=!1;var k=_;_=Ya((de.visualViewport&&de.visualViewport.scale||1)/m),L.pause(),k!==_&&vd(c,_>1.01?!0:n?!1:"x"),V=p(),I=f(),w(),A=kr},t.onRelease=t.onGestureStart=function(k,j){if(f.offset&&C(),!j)U.restart(!0);else{ce.cache++;var W=S(),R,J;n&&(R=p(),J=R+W*.05*-k.velocityX/.227,W*=Qg(p,R,J,cs(c,Un)),L.vars.scrollX=T(J)),R=f(),J=R+W*.05*-k.velocityY/.227,W*=Qg(f,R,J,cs(c,on)),L.vars.scrollY=v(J),L.invalidate().duration(W).play(.01),(rr&&L.vars.scrollY>=l||R>=l-1)&&Ut.to({},{onUpdate:H,duration:W})}o&&o(k)},t.onWheel=function(){L._ts&&L.pause(),Fn()-g>1e3&&(A=0,g=Fn())},t.onChange=function(k,j,W,R,J){if(kr!==A&&w(),j&&n&&p(T(R[2]===j?V+(k.startX-k.x):p()+j-R[1])),W){f.offset&&C();var wt=J[2]===W,Tt=wt?I+k.startY-k.y:f()+W-J[1],Xt=v(Tt);wt&&Tt!==Xt&&(I+=Xt-Tt),f(Xt)}(W||j)&&Ls()},t.onEnable=function(){vd(c,n?!1:"x"),te.addEventListener("refresh",H),vn(de,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),M.enable()},t.onDisable=function(){vd(c,!0),xn(de,"resize",H),te.removeEventListener("refresh",H),M.kill()},t.lockAxis=t.lockAxis!==!1,a=new Je(t),a.iOS=rr,rr&&!f()&&f(1),rr&&Ut.ticker.add(ls),U=a._dc,L=Ut.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:_0(f,f(),function(){return L.pause()})},onUpdate:Ls,onComplete:U.vars.onComplete}),a};te.sort=function(s){if(Bn(s))return he.sort(s);var t=de.pageYOffset||0;return te.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+de.innerHeight}),he.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};te.observe=function(s){return new Je(s)};te.normalizeScroll=function(s){if(typeof s>"u")return Kn;if(s===!0&&Kn)return Kn.enable();if(s===!1){Kn&&Kn.kill(),Kn=s;return}var t=s instanceof Je?s:Hy(s);return Kn&&Kn.target===t.target&&Kn.kill(),Vr(t.target)&&(Kn=t),t};te.core={_getVelocityProp:Fc,_inputObserver:x0,_scrollers:ce,_proxies:Wi,bridge:{ss:function(){Ni||Gr("scrollStart"),Ni=Fn()},ref:function(){return On}}};o0()&&Ut.registerPlugin(te);var v0="1.3.26";function M0(s,t,e){return Math.max(s,Math.min(t,e))}function Gy(s,t,e){return(1-e)*s+e*t}function Wy(s,t,e,n){return Gy(s,t,1-Math.exp(-e*n))}function Xy(s,t){return(s%t+t)%t}var Yy=class{constructor(){Vt(this,"isRunning",!1);Vt(this,"value",0);Vt(this,"from",0);Vt(this,"to",0);Vt(this,"currentTime",0);Vt(this,"lerp");Vt(this,"duration");Vt(this,"easing");Vt(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=M0(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Wy(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function qy(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var Zy=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Vt(this,"width",0);Vt(this,"height",0);Vt(this,"scrollHeight",0);Vt(this,"scrollWidth",0);Vt(this,"debouncedResize");Vt(this,"wrapperResizeObserver");Vt(this,"contentResizeObserver");Vt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Vt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Vt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=qy(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},b0=class{constructor(){Vt(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},$y=100/6,or={passive:!1};function y0(s,t){return s===1?$y:s===2?t:1}var Jy=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Vt(this,"touchStart",{x:0,y:0});Vt(this,"lastDelta",{x:0,y:0});Vt(this,"window",{width:0,height:0});Vt(this,"emitter",new b0);Vt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Vt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Vt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Vt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=y0(n,this.window.width),r=y0(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Vt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,or),this.element.addEventListener("touchstart",this.onTouchStart,or),this.element.addEventListener("touchmove",this.onTouchMove,or),this.element.addEventListener("touchend",this.onTouchEnd,or)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,or),this.element.removeEventListener("touchstart",this.onTouchStart,or),this.element.removeEventListener("touchmove",this.onTouchMove,or),this.element.removeEventListener("touchend",this.onTouchEnd,or)}},S0=s=>Math.min(1,1.001-2**(-10*s)),w0=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:S=!0,autoRaf:A=!1,anchors:x=!1,autoToggle:M=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:v=T,stopInertiaOnNavigate:w=!1,respectReducedMotion:C=!0}={}){Vt(this,"_isScrolling",!1);Vt(this,"_isStopped",!1);Vt(this,"_isLocked",!1);Vt(this,"_preventNextNativeScrollEvent",!1);Vt(this,"_resetVelocityTimeout",null);Vt(this,"_rafId",null);Vt(this,"_isDraggingSelection",!1);Vt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Vt(this,"isTouching");Vt(this,"isIos");Vt(this,"time",0);Vt(this,"userData",{});Vt(this,"lastVelocity",0);Vt(this,"velocity",0);Vt(this,"direction",0);Vt(this,"options");Vt(this,"targetScroll");Vt(this,"animatedScroll");Vt(this,"animate",new Yy);Vt(this,"emitter",new b0);Vt(this,"dimensions");Vt(this,"virtualScroll");Vt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Vt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Vt(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Vt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Vt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Vt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Vt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Vt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=v0,window.lenis||(window.lenis={}),window.lenis.version=v0,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=S0:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:S,autoRaf:A,anchors:x,autoToggle:M,allowNestedScroll:b,naiveDimensions:v,stopInertiaOnNavigate:w,respectReducedMotion:C},this.dimensions=new Zy(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Jy(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(p=u),p){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?x.left:x.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),S=getComputedStyle(this.rootElement),A=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(A)?0:A)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=M0(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=S0:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,u,f,p;if(n-(i.time??0)>2e3){i.time=Date.now();let b=window.getComputedStyle(s);if(i.computedStyle=b,r=["auto","overlay","scroll"].includes(b.overflowX),o=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),h=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,p=s.clientHeight,a=d>f,l=u>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,S,A,x,M;if(_==="horizontal")m=Math.round(s.scrollLeft),g=d-f,S=t,A=r,x=a,M=c;else if(_==="vertical")m=Math.round(s.scrollTop),g=u-p,S=e,A=o,x=l,M=h;else return!1;return!M&&(m>=g||m<=0)?!0:(S>0?m<g:m>0)&&A&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Xy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var i_=0,xp=1,s_=2;var Jl=1,r_=2,fa=3,_r=0,Rn=1,Bi=2,ys=0,da=1,Kl=2,vp=3,yp=4,du=5;var Hs=100,o_=101,a_=102,l_=103,c_=104,eo=200,h_=201,u_=202,f_=203,Sp=204,Mp=205,d_=206,p_=207,m_=208,g_=209,__=210,x_=211,v_=212,y_=213,S_=214,Ph=0,Ih=1,Lh=2,Jo=3,Dh=4,Nh=5,Uh=6,Oh=7,pu=0,M_=1,b_=2,Ki=0,bp=1,wp=2,Tp=3,Ql=4,Ep=5,Ap=6,Cp=7;var Rp=300,xr=301,no=302,mu=303,gu=304,jl=306,Ko=1e3,us=1001,Fh=1002,Sn=1003,w_=1004;var tc=1005;var Cn=1006,_u=1007;var vr=1008;var fi=1009,Pp=1010,Ip=1011,pa=1012,xu=1013,Qi=1014,zi=1015,ji=1016,vu=1017,yu=1018,ma=1020,Lp=35902,Dp=35899,Np=1021,Up=1022,ki=1023,ds=1026,yr=1027,Su=1028,Mu=1029,Sr=1030,bu=1031;var wu=1033,ec=33776,nc=33777,ic=33778,sc=33779,Tu=35840,Eu=35841,Au=35842,Cu=35843,Ru=36196,Pu=37492,Iu=37496,Lu=37488,Du=37489,rc=37490,Nu=37491,Uu=37808,Ou=37809,Fu=37810,Bu=37811,zu=37812,ku=37813,Vu=37814,Hu=37815,Gu=37816,Wu=37817,Xu=37818,Yu=37819,qu=37820,Zu=37821,$u=36492,Ju=36494,Ku=36495,Qu=36283,ju=36284,oc=36285,tf=36286;var xl=2300,Bh=2301,Ch=2302,op=2303,ap=2400,lp=2401,cp=2402;var T_=3200;var ac=0,E_=1,Gs="",Vn="srgb",vl="srgb-linear",yl="linear",be="srgb";var Rh=7680;var A_=519,C_=512,R_=513,P_=514,ef=515,I_=516,L_=517,nf=518,D_=519,Op=35044;var Fp="300 es",Ji=2e3,Qo=2001;function Ky(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Qy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Sl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function N_(){let s=Sl("canvas");return s.style.display="block",s}var T0={},jo=null;function Ml(...s){let t="THREE."+s.shift();jo?jo("log",t,...s):console.log(t,...s)}function U_(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ee(...s){s=U_(s);let t="THREE."+s.shift();if(jo)jo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ne(...s){s=U_(s);let t="THREE."+s.shift();if(jo)jo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function $r(...s){let t=s.join(" ");t in T0||(T0[t]=!0,ee(...s))}function O_(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var F_={[Ph]:Ih,[Lh]:Uh,[Dh]:Oh,[Jo]:Nh,[Ih]:Ph,[Uh]:Lh,[Oh]:Dh,[Nh]:Jo},ps=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],E0=1234567,pl=Math.PI/180,ta=180/Math.PI;function fs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[e&63|128]+zn[e>>8&255]+"-"+zn[e>>16&255]+zn[e>>24&255]+zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]).toLowerCase()}function ae(s,t,e){return Math.max(t,Math.min(e,s))}function Bp(s,t){return(s%t+t)%t}function jy(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function tS(s,t,e){return s!==t?(e-s)/(t-s):0}function ml(s,t,e){return(1-e)*s+e*t}function eS(s,t,e,n){return ml(s,t,1-Math.exp(-e*n))}function nS(s,t=1){return t-Math.abs(Bp(s,t*2)-t)}function iS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function sS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function rS(s,t){return s+Math.floor(Math.random()*(t-s+1))}function oS(s,t){return s+Math.random()*(t-s)}function aS(s){return s*(.5-Math.random())}function lS(s){s!==void 0&&(E0=s);let t=E0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cS(s){return s*pl}function hS(s){return s*ta}function uS(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function fS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function dS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pS(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $i(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zp={DEG2RAD:pl,RAD2DEG:ta,generateUUID:fs,clamp:ae,euclideanModulo:Bp,mapLinear:jy,inverseLerp:tS,lerp:ml,damp:eS,pingpong:nS,smoothstep:iS,smootherstep:sS,randInt:rS,randFloat:oS,randFloatSpread:aS,seededRandom:lS,degToRad:cS,radToDeg:hS,isPowerOfTwo:uS,ceilPowerOfTwo:fS,floorPowerOfTwo:dS,setQuaternionFromProperEuler:pS,normalize:Te,denormalize:$i},Xp=class Xp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xp.prototype.isVector2=!0;var pt=Xp,ms=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*_;m<0&&(u=-u,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);g=Math.sin(g*S)/A,a=Math.sin(a*S)/A,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yp=class Yp{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(A0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(A0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ud.copy(this).projectOnVector(t),this.sub(Ud)}reflect(t){return this.sub(Ud.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yp.prototype.isVector3=!0;var F=Yp,Ud=new F,A0=new ms,qp=class qp{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],S=i[1],A=i[4],x=i[7],M=i[2],b=i[5],T=i[8];return r[0]=o*_+a*S+l*M,r[3]=o*m+a*A+l*b,r[6]=o*g+a*x+l*T,r[1]=c*_+h*S+d*M,r[4]=c*m+h*A+d*b,r[7]=c*g+h*x+d*T,r[2]=u*_+f*S+p*M,r[5]=u*m+f*A+p*b,r[8]=u*g+f*x+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return $r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Od.makeScale(t,e)),this}rotate(t){return $r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Od.makeRotation(-t)),this}translate(t,e){return $r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Od.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};qp.prototype.isMatrix3=!0;var re=qp,Od=new re,C0=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R0=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mS(){let s={enabled:!0,workingColorSpace:vl,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(i.r=zs(i.r),i.g=zs(i.g),i.b=zs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(i.r=$o(i.r),i.g=$o(i.g),i.b=$o(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gs?yl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return $r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return $r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[vl]:{primaries:t,whitePoint:n,transfer:yl,toXYZ:C0,fromXYZ:R0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:t,whitePoint:n,transfer:be,toXYZ:C0,fromXYZ:R0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),s}var me=mS();function zs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $o(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Io,zh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Io===void 0&&(Io=Sl("canvas")),Io.width=t.width,Io.height=t.height;let i=Io.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Io}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sl("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=zs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zs(e[n]/255)*255):e[n]=zs(e[n]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gS=0,ea=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Fd(i[o].image)):r.push(Fd(i[o]))}else r=Fd(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var _S=0,Bd=new F,ei=class s extends ps{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=us,i=us,r=Cn,o=vr,a=ki,l=fi,c=s.DEFAULT_ANISOTROPY,h=Gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=fs(),this.name="",this.source=new ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bd).x}get height(){return this.source.getSize(Bd).y}get depth(){return this.source.getSize(Bd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ko:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case Fh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ko:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case Fh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Rp;ei.DEFAULT_ANISOTROPY=1;var Zp=class Zp{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,x=(f+1)/2,M=(g+1)/2,b=(h+u)/4,T=(d+_)/4,v=(p+m)/4;return A>x&&A>M?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=b/n,r=T/n):x>M?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=v/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=T/r,i=v/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zp.prototype.isVector4=!0;var He=Zp,kh=class extends ps{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new ei(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ea(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends kh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bl=class extends ei{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vh=class extends ei{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fu=class fu{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fu().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Lo.setFromMatrixColumn(t,0).length(),r=1/Lo.setFromMatrixColumn(t,1).length(),o=1/Lo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xS,t,vS)}lookAt(t,e,n){let i=this.elements;return Mi.subVectors(t,e),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),ar.crossVectors(n,Mi),ar.lengthSq()===0&&(Math.abs(n.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),ar.crossVectors(n,Mi)),ar.normalize(),ih.crossVectors(Mi,ar),i[0]=ar.x,i[4]=ih.x,i[8]=Mi.x,i[1]=ar.y,i[5]=ih.y,i[9]=Mi.y,i[2]=ar.z,i[6]=ih.z,i[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],S=n[3],A=n[7],x=n[11],M=n[15],b=i[0],T=i[4],v=i[8],w=i[12],C=i[1],D=i[5],L=i[9],V=i[13],I=i[2],U=i[6],H=i[10],k=i[14],j=i[3],W=i[7],R=i[11],J=i[15];return r[0]=o*b+a*C+l*I+c*j,r[4]=o*T+a*D+l*U+c*W,r[8]=o*v+a*L+l*H+c*R,r[12]=o*w+a*V+l*k+c*J,r[1]=h*b+d*C+u*I+f*j,r[5]=h*T+d*D+u*U+f*W,r[9]=h*v+d*L+u*H+f*R,r[13]=h*w+d*V+u*k+f*J,r[2]=p*b+_*C+m*I+g*j,r[6]=p*T+_*D+m*U+g*W,r[10]=p*v+_*L+m*H+g*R,r[14]=p*w+_*V+m*k+g*J,r[3]=S*b+A*C+x*I+M*j,r[7]=S*T+A*D+x*U+M*W,r[11]=S*v+A*L+x*H+M*R,r[15]=S*w+A*V+x*k+M*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],S=l*f-c*u,A=a*f-c*d,x=a*u-l*d,M=o*f-c*h,b=o*u-l*h,T=o*d-a*h;return e*(_*S-m*A+g*x)-n*(p*S-m*M+g*b)+i*(p*A-_*M+g*T)-r*(p*x-_*b+m*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],S=e*a-n*o,A=e*l-i*o,x=e*c-r*o,M=n*l-i*a,b=n*c-r*a,T=i*c-r*l,v=h*_-d*p,w=h*m-u*p,C=h*g-f*p,D=d*m-u*_,L=d*g-f*_,V=u*g-f*m,I=S*V-A*L+x*D+M*C-b*w+T*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return t[0]=(a*V-l*L+c*D)*U,t[1]=(i*L-n*V-r*D)*U,t[2]=(_*T-m*b+g*M)*U,t[3]=(u*b-d*T-f*M)*U,t[4]=(l*C-o*V-c*w)*U,t[5]=(e*V-i*C+r*w)*U,t[6]=(m*x-p*T-g*A)*U,t[7]=(h*T-u*x+f*A)*U,t[8]=(o*L-a*C+c*v)*U,t[9]=(n*C-e*L-r*v)*U,t[10]=(p*b-_*x+g*S)*U,t[11]=(d*x-h*b-f*S)*U,t[12]=(a*w-o*D-l*v)*U,t[13]=(e*D-n*w+i*v)*U,t[14]=(_*A-p*M-m*S)*U,t[15]=(h*M-d*A+u*S)*U,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,_=o*h,m=o*d,g=a*d,S=l*c,A=l*h,x=l*d,M=n.x,b=n.y,T=n.z;return i[0]=(1-(_+g))*M,i[1]=(f+x)*M,i[2]=(p-A)*M,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(u+g))*b,i[6]=(m+S)*b,i[7]=0,i[8]=(p+A)*T,i[9]=(m-S)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Lo.set(i[0],i[1],i[2]).length(),a=Lo.set(i[4],i[5],i[6]).length(),l=Lo.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Xi.copy(this);let c=1/o,h=1/a,d=1/l;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=h,Xi.elements[5]*=h,Xi.elements[6]*=h,Xi.elements[8]*=d,Xi.elements[9]*=d,Xi.elements[10]*=d,e.setFromRotationMatrix(Xi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Ji,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Ji)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Qo)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ji,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Ji)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Qo)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};fu.prototype.isMatrix4=!0;var Ae=fu,Lo=new F,Xi=new Ae,xS=new F(0,0,0),vS=new F(1,1,1),ar=new F,ih=new F,Mi=new F,P0=new Ae,I0=new ms,gs=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return P0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(P0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return I0.setFromEuler(this),this.setFromQuaternion(I0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gs.DEFAULT_ORDER="XYZ";var wl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yS=0,L0=new F,Do=new ms,Ds=new Ae,sh=new F,sl=new F,SS=new F,MS=new ms,D0=new F(1,0,0),N0=new F(0,1,0),U0=new F(0,0,1),O0={type:"added"},bS={type:"removed"},No={type:"childadded",child:null},zd={type:"childremoved",child:null},tn=class s extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new F,e=new gs,n=new ms,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new re}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Do.setFromAxisAngle(t,e),this.quaternion.multiply(Do),this}rotateOnWorldAxis(t,e){return Do.setFromAxisAngle(t,e),this.quaternion.premultiply(Do),this}rotateX(t){return this.rotateOnAxis(D0,t)}rotateY(t){return this.rotateOnAxis(N0,t)}rotateZ(t){return this.rotateOnAxis(U0,t)}translateOnAxis(t,e){return L0.copy(t).applyQuaternion(this.quaternion),this.position.add(L0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(D0,t)}translateY(t){return this.translateOnAxis(N0,t)}translateZ(t){return this.translateOnAxis(U0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ds.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sh.copy(t):sh.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ds.lookAt(sl,sh,this.up):Ds.lookAt(sh,sl,this.up),this.quaternion.setFromRotationMatrix(Ds),i&&(Ds.extractRotation(i.matrixWorld),Do.setFromRotationMatrix(Ds),this.quaternion.premultiply(Do.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(O0),No.child=t,this.dispatchEvent(No),No.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bS),zd.child=t,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(O0),No.child=t,this.dispatchEvent(No),No.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,t,SS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,MS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new F(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},wS={type:"move"},na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},rh={h:0,s:0,l:0};function kd(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=Bp(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=kd(o,r,t+1/3),this.g=kd(o,r,t),this.b=kd(o,r,t-1/3)}return me.colorSpaceToWorking(this,i),this}setStyle(t,e=Vn){function n(r){r!==void 0&&parseFloat(r)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Vn){let n=B_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}copyLinearToSRGB(t){return this.r=$o(t.r),this.g=$o(t.g),this.b=$o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vn){return me.workingToColorSpace(kn.copy(this),t),Math.round(ae(kn.r*255,0,255))*65536+Math.round(ae(kn.g*255,0,255))*256+Math.round(ae(kn.b*255,0,255))}getHexString(t=Vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(kn.copy(this),e);let n=kn.r,i=kn.g,r=kn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(kn.copy(this),e),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Vn){me.workingToColorSpace(kn.copy(this),t);let e=kn.r,n=kn.g,i=kn.b;return t!==Vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(lr),this.setHSL(lr.h+t,lr.s+e,lr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(lr),t.getHSL(rh);let n=ml(lr.h,rh.h,e),i=ml(lr.s,rh.s,e),r=ml(lr.l,rh.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kn=new ie;ie.NAMES=B_;var Jr=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gs,this.environmentIntensity=1,this.environmentRotation=new gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Yi=new F,Ns=new F,Vd=new F,Us=new F,Uo=new F,Oo=new F,F0=new F,Hd=new F,Gd=new F,Wd=new F,Xd=new He,Yd=new He,qd=new He,Bs=class s{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Yi.subVectors(t,e),i.cross(Yi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Yi.subVectors(i,e),Ns.subVectors(n,e),Vd.subVectors(t,e);let o=Yi.dot(Yi),a=Yi.dot(Ns),l=Yi.dot(Vd),c=Ns.dot(Ns),h=Ns.dot(Vd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Us)===null?!1:Us.x>=0&&Us.y>=0&&Us.x+Us.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Us)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Us.x),l.addScaledVector(o,Us.y),l.addScaledVector(a,Us.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Xd.setScalar(0),Yd.setScalar(0),qd.setScalar(0),Xd.fromBufferAttribute(t,e),Yd.fromBufferAttribute(t,n),qd.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Xd,r.x),o.addScaledVector(Yd,r.y),o.addScaledVector(qd,r.z),o}static isFrontFacing(t,e,n,i){return Yi.subVectors(n,e),Ns.subVectors(t,e),Yi.cross(Ns).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),Ns.subVectors(this.a,this.b),Yi.cross(Ns).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Uo.subVectors(i,n),Oo.subVectors(r,n),Hd.subVectors(t,n);let l=Uo.dot(Hd),c=Oo.dot(Hd);if(l<=0&&c<=0)return e.copy(n);Gd.subVectors(t,i);let h=Uo.dot(Gd),d=Oo.dot(Gd);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Uo,o);Wd.subVectors(t,r);let f=Uo.dot(Wd),p=Oo.dot(Wd);if(p>=0&&f<=p)return e.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Oo,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return F0.subVectors(r,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(F0,a);let g=1/(m+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(Uo,o).addScaledVector(Oo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_s=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qi):qi.fromBufferAttribute(r,o),qi.applyMatrix4(t.matrixWorld),this.expandByPoint(qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oh.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oh.copy(n.boundingBox)),oh.applyMatrix4(t.matrixWorld),this.union(oh)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qi),qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rl),ah.subVectors(this.max,rl),Fo.subVectors(t.a,rl),Bo.subVectors(t.b,rl),zo.subVectors(t.c,rl),cr.subVectors(Bo,Fo),hr.subVectors(zo,Bo),Wr.subVectors(Fo,zo);let e=[0,-cr.z,cr.y,0,-hr.z,hr.y,0,-Wr.z,Wr.y,cr.z,0,-cr.x,hr.z,0,-hr.x,Wr.z,0,-Wr.x,-cr.y,cr.x,0,-hr.y,hr.x,0,-Wr.y,Wr.x,0];return!Zd(e,Fo,Bo,zo,ah)||(e=[1,0,0,0,1,0,0,0,1],!Zd(e,Fo,Bo,zo,ah))?!1:(lh.crossVectors(cr,hr),e=[lh.x,lh.y,lh.z],Zd(e,Fo,Bo,zo,ah))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Os),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Os=[new F,new F,new F,new F,new F,new F,new F,new F],qi=new F,oh=new _s,Fo=new F,Bo=new F,zo=new F,cr=new F,hr=new F,Wr=new F,rl=new F,ah=new F,lh=new F,Xr=new F;function Zd(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Xr.fromArray(s,r);let a=i.x*Math.abs(Xr.x)+i.y*Math.abs(Xr.y)+i.z*Math.abs(Xr.z),l=t.dot(Xr),c=e.dot(Xr),h=n.dot(Xr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ln=new F,ch=new pt,TS=0,li=class extends ps{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Op,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ch.fromBufferAttribute(this,e),ch.applyMatrix3(t),this.setXY(e,ch.x,ch.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Tl=class extends li{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var El=class extends li{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends li{constructor(t,e,n){super(new Float32Array(t),e,n)}},ES=new _s,ol=new F,$d=new F,fr=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ES.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ol.subVectors(t,this.center);let e=ol.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ol,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($d.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ol.copy(t.center).add($d)),this.expandByPoint(ol.copy(t.center).sub($d))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},AS=0,Ui=new Ae,Jd=new tn,ko=new F,bi=new _s,al=new _s,yn=new F,Mn=class s extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ky(t)?El:Tl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,e,n){return Ui.makeTranslation(t,e,n),this.applyMatrix4(Ui),this}scale(t,e,n){return Ui.makeScale(t,e,n),this.applyMatrix4(Ui),this}lookAt(t){return Jd.lookAt(t),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ko).negate(),this.translate(ko.x,ko.y,ko.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ye(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];bi.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(bi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];al.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(bi.min,al.min),bi.expandByPoint(yn),yn.addVectors(bi.max,al.max),bi.expandByPoint(yn)):(bi.expandByPoint(al.min),bi.expandByPoint(al.max))}bi.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)yn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(yn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yn.fromBufferAttribute(a,c),l&&(ko.fromBufferAttribute(t,c),yn.add(ko)),i=Math.max(i,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new li(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new F,l[v]=new F;let c=new F,h=new F,d=new F,u=new pt,f=new pt,p=new pt,_=new F,m=new F;function g(v,w,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),a[v].add(_),a[w].add(_),a[C].add(_),l[v].add(m),l[w].add(m),l[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,w=S.length;v<w;++v){let C=S[v],D=C.start,L=C.count;for(let V=D,I=D+L;V<I;V+=3)g(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let A=new F,x=new F,M=new F,b=new F;function T(v){M.fromBufferAttribute(i,v),b.copy(M);let w=a[v];A.copy(w),A.sub(M.multiplyScalar(M.dot(w))).normalize(),x.crossVectors(b,w);let D=x.dot(l[v])<0?-1:1;o.setXYZW(v,A.x,A.y,A.z,D)}for(let v=0,w=S.length;v<w;++v){let C=S[v],D=C.start,L=C.count;for(let V=D,I=D+L;V<I;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new li(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)yn.fromBufferAttribute(t,e),yn.normalize(),t.setXYZ(e,yn.x,yn.y,yn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new li(u,h,d)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Op,this.updateRanges=[],this.version=0,this.uuid=fs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},ti=new F,Al=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ti.fromBufferAttribute(this,e),ti.applyMatrix4(t),this.setXYZ(e,ti.x,ti.y,ti.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ti.fromBufferAttribute(this,e),ti.applyNormalMatrix(t),this.setXYZ(e,ti.x,ti.y,ti.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ti.fromBufferAttribute(this,e),ti.transformDirection(t),this.setXYZ(e,ti.x,ti.y,ti.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ml("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new li(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ml("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kd=new F,CS=new F,RS=new re,Zi=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Kd.subVectors(n,e).cross(CS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Kd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||RS.getNormalMatrix(t),i=this.coplanarPoint(Kd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},PS=0,xs=class extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=da,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sp,this.blendDst=Mp,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rh,this.stencilZFail=Rh,this.stencilZPass=Rh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ie().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Zi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ia=class extends xs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vo,ll=new F,Ho=new F,Go=new F,Wo=new pt,cl=new pt,z_=new Ae,hh=new F,hl=new F,uh=new F,B0=new pt,Qd=new pt,z0=new pt,Cl=class extends tn{constructor(t=new ia){if(super(),this.isSprite=!0,this.type="Sprite",Vo===void 0){Vo=new Mn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hh(e,5);Vo.setIndex([0,1,2,0,2,3]),Vo.setAttribute("position",new Al(n,3,0,!1)),Vo.setAttribute("uv",new Al(n,2,3,!1))}this.geometry=Vo,this.material=t,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ho.setFromMatrixScale(this.matrixWorld),z_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Go.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ho.multiplyScalar(-Go.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;fh(hh.set(-.5,-.5,0),Go,o,Ho,i,r),fh(hl.set(.5,-.5,0),Go,o,Ho,i,r),fh(uh.set(.5,.5,0),Go,o,Ho,i,r),B0.set(0,0),Qd.set(1,0),z0.set(1,1);let a=t.ray.intersectTriangle(hh,hl,uh,!1,ll);if(a===null&&(fh(hl.set(-.5,.5,0),Go,o,Ho,i,r),Qd.set(0,1),a=t.ray.intersectTriangle(hh,uh,hl,!1,ll),a===null))return;let l=t.ray.origin.distanceTo(ll);l<t.near||l>t.far||e.push({distance:l,point:ll.clone(),uv:Bs.getInterpolation(ll,hh,hl,uh,B0,Qd,z0,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function fh(s,t,e,n,i,r){Wo.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(cl.x=r*Wo.x-i*Wo.y,cl.y=i*Wo.x+r*Wo.y):cl.copy(Wo),s.copy(t),s.x+=cl.x,s.y+=cl.y,s.applyMatrix4(z_)}var Fs=new F,jd=new F,dh=new F,ph=new F,Gh=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fs.copy(this.origin).addScaledVector(this.direction,e),Fs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){jd.copy(t).add(e).multiplyScalar(.5),dh.copy(e).sub(t).normalize(),ph.copy(this.origin).sub(jd);let r=t.distanceTo(e)*.5,o=-this.direction.dot(dh),a=ph.dot(this.direction),l=-ph.dot(dh),c=ph.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(jd).addScaledVector(dh,u),f}intersectSphere(t,e){if(t.radius<0)return null;Fs.subVectors(t.center,this.origin);let n=Fs.dot(this.direction),i=Fs.dot(Fs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=n.x-o.x,S=n.y-o.y,A=n.z-o.z,x=Math.abs(l),M=Math.abs(c),b=Math.abs(h),T,v,w,C,D,L,V,I,U,H,k,j;if(x>=M&&x>=b?(w=l,L=d,U=p,j=g,l>=0?(T=c,v=h,C=u,D=f,V=_,I=m,H=S,k=A):(T=h,v=c,C=f,D=u,V=m,I=_,H=A,k=S)):M>=b?(w=c,L=u,U=_,j=S,c>=0?(T=h,v=l,C=f,D=d,V=m,I=p,H=A,k=g):(T=l,v=h,C=d,D=f,V=p,I=m,H=g,k=A)):(w=h,L=f,U=m,j=A,h>=0?(T=l,v=c,C=d,D=u,V=p,I=_,H=g,k=S):(T=c,v=l,C=u,D=d,V=_,I=p,H=S,k=g)),w===0)return null;let W=T/w,R=v/w,J=1/w,wt=C-W*L,Tt=D-R*L,Xt=V-W*U,Ht=I-R*U,$t=H-W*j,$=k-R*j,et=$t*Ht-$*Xt,dt=wt*$-Tt*$t,kt=Xt*Tt-Ht*wt;if(i){if(et<0||dt<0||kt<0)return null}else if((et<0||dt<0||kt<0)&&(et>0||dt>0||kt>0))return null;let _t=et+dt+kt;if(_t===0)return null;let Rt=J*(et*L+dt*U+kt*j);return(_t>0?Rt<0:Rt>0)?null:this.at(Rt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hi=class extends xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},k0=new Ae,Yr=new Gh,mh=new fr,V0=new F,gh=new F,_h=new F,xh=new F,tp=new F,vh=new F,H0=new F,yh=new F,qt=class extends tn{constructor(t=new Mn,e=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){vh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(tp.fromBufferAttribute(d,t),o?vh.addScaledVector(tp,h):vh.addScaledVector(tp.sub(e),h))}e.add(vh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mh.copy(n.boundingSphere),mh.applyMatrix4(r),Yr.copy(t.ray).recast(t.near),!(mh.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(mh,V0)===null||Yr.origin.distanceToSquared(V0)>(t.far-t.near)**2))&&(k0.copy(r).invert(),Yr.copy(t.ray).applyMatrix4(k0),!(n.boundingBox!==null&&Yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,M=A;x<M;x+=3){let b=a.getX(x),T=a.getX(x+1),v=a.getX(x+2);i=Sh(this,g,t,n,c,h,d,b,T,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let S=a.getX(m),A=a.getX(m+1),x=a.getX(m+2);i=Sh(this,o,t,n,c,h,d,S,A,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,M=A;x<M;x+=3){let b=x,T=x+1,v=x+2;i=Sh(this,g,t,n,c,h,d,b,T,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let S=m,A=m+1,x=m+2;i=Sh(this,o,t,n,c,h,d,S,A,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function IS(s,t,e,n,i,r,o,a){let l;if(t.side===Rn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===_r,a),l===null)return null;yh.copy(a),yh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(yh);return c<e.near||c>e.far?null:{distance:c,point:yh.clone(),object:s}}function Sh(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,gh),s.getVertexPosition(l,_h),s.getVertexPosition(c,xh);let h=IS(s,t,e,n,gh,_h,xh,H0);if(h){let d=new F;Bs.getBarycoord(H0,gh,_h,xh,d),i&&(h.uv=Bs.getInterpolatedAttribute(i,a,l,c,d,new pt)),r&&(h.uv1=Bs.getInterpolatedAttribute(r,a,l,c,d,new pt)),o&&(h.normal=Bs.getInterpolatedAttribute(o,a,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new F,materialIndex:0};Bs.getNormal(gh,_h,xh,u.normal),h.face=u,h.barycoord=d}return h}var Rl=class extends ei{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Sn,h=Sn,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pl=class extends li{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Xo=new Ae,G0=new Ae,Mh=[],W0=new _s,LS=new Ae,ul=new qt,fl=new fr,Il=class extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,LS)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _s),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xo),W0.copy(t.boundingBox).applyMatrix4(Xo),this.boundingBox.union(W0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xo),fl.copy(t.boundingSphere).applyMatrix4(Xo),this.boundingSphere.union(fl)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ul.geometry=this.geometry,ul.material=this.material,ul.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(n),t.ray.intersectsSphere(fl)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xo),G0.multiplyMatrices(n,Xo),ul.matrixWorld=G0,ul.raycast(t,Mh);for(let o=0,a=Mh.length;o<a;o++){let l=Mh[o];l.instanceId=r,l.object=this,e.push(l)}Mh.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Pl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rl(new Float32Array(i*this.count),i,this.count,Su,zi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qr=new fr,DS=new pt(.5,.5),bh=new F,sa=class{constructor(t=new Zi,e=new Zi,n=new Zi,i=new Zi,r=new Zi,o=new Zi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ji,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],S=r[12],A=r[13],x=r[14],M=r[15];if(i[0].setComponents(c-o,f-h,g-p,M-S).normalize(),i[1].setComponents(c+o,f+h,g+p,M+S).normalize(),i[2].setComponents(c+a,f+d,g+_,M+A).normalize(),i[3].setComponents(c-a,f-d,g-_,M-A).normalize(),n)i[4].setComponents(l,u,m,x).normalize(),i[5].setComponents(c-l,f-u,g-m,M-x).normalize();else if(i[4].setComponents(c-l,f-u,g-m,M-x).normalize(),e===Ji)i[5].setComponents(c+l,f+u,g+m,M+x).normalize();else if(e===Qo)i[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(t){qr.center.set(0,0,0);let e=DS.distanceTo(t.center);return qr.radius=.7071067811865476+e,qr.applyMatrix4(t.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(bh.x=i.normal.x>0?t.max.x:t.min.x,bh.y=i.normal.y>0?t.max.y:t.min.y,bh.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(bh)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ll=class extends ei{constructor(t=[],e=xr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dl=class extends ei{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var dr=class extends ei{constructor(t,e,n=Qi,i,r,o,a=Sn,l=Sn,c,h=ds,d=1){if(h!==ds&&h!==yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ea(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wh=class extends dr{constructor(t,e=Qi,n=xr,i,r,o=Sn,a=Sn,l,c=ds){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Nl=class extends ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ui=class s extends Mn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(d,2));function p(_,m,g,S,A,x,M,b,T,v,w){let C=x/T,D=M/v,L=x/2,V=M/2,I=b/2,U=T+1,H=v+1,k=0,j=0,W=new F;for(let R=0;R<H;R++){let J=R*D-V;for(let wt=0;wt<U;wt++){let Tt=wt*C-L;W[_]=Tt*S,W[m]=J*A,W[g]=I,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[g]=b>0?1:-1,h.push(W.x,W.y,W.z),d.push(wt/T),d.push(1-R/v),k+=1}}for(let R=0;R<v;R++)for(let J=0;J<T;J++){let wt=u+J+U*R,Tt=u+J+U*(R+1),Xt=u+(J+1)+U*(R+1),Ht=u+(J+1)+U*R;l.push(wt,Tt,Ht),l.push(Tt,Xt,Ht),j+=6}a.addGroup(f,j,w),f+=j,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Kr=class s extends Mn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new F,h=new pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Oi=class s extends Mn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,_=[],m=n/2,g=0;S(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function S(){let x=new F,M=new F,b=0,T=(e-t)/n;for(let v=0;v<=r;v++){let w=[],C=v/r,D=C*(e-t)+t;for(let L=0;L<=i;L++){let V=L/i,I=V*l+a,U=Math.sin(I),H=Math.cos(I);M.x=D*U,M.y=-C*n+m,M.z=D*H,d.push(M.x,M.y,M.z),x.set(U,T,H).normalize(),u.push(x.x,x.y,x.z),f.push(V,1-C),w.push(p++)}_.push(w)}for(let v=0;v<i;v++)for(let w=0;w<r;w++){let C=_[w][v],D=_[w+1][v],L=_[w+1][v+1],V=_[w][v+1];(t>0||w!==0)&&(h.push(C,D,V),b+=3),(e>0||w!==r-1)&&(h.push(D,L,V),b+=3)}c.addGroup(g,b,0),g+=b}function A(x){let M=p,b=new pt,T=new F,v=0,w=x===!0?t:e,C=x===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),p++;let D=p;for(let L=0;L<=i;L++){let I=L/i*l+a,U=Math.cos(I),H=Math.sin(I);T.x=w*H,T.y=m*C,T.z=w*U,d.push(T.x,T.y,T.z),u.push(0,C,0),b.x=U*.5+.5,b.y=H*.5*C+.5,f.push(b.x,b.y),p++}for(let L=0;L<i;L++){let V=M+L,I=D+L;x===!0?h.push(I,I+1,V):h.push(I+1,I,V),v+=3}c.addGroup(g,v,x===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var wi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new pt:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,i=[],r=[],o=[],a=new F,l=new Ae;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ae(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ae(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ra=class extends wi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xh=class extends ra{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kp(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var X0=new F,Y0=new F,ep=new kp,np=new kp,ip=new kp,Yh=class extends wi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new F){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Y0.subVectors(i[0],i[1]).add(i[0]),c=Y0);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(X0.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=X0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),ep.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,m),np.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,m),ip.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(ep.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),np.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ip.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ep.calc(l),np.calc(l),ip.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new F().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function q0(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function NS(s,t){let e=1-s;return e*e*t}function US(s,t){return 2*(1-s)*s*t}function OS(s,t){return s*s*t}function gl(s,t,e,n){return NS(s,t)+US(s,e)+OS(s,n)}function FS(s,t){let e=1-s;return e*e*e*t}function BS(s,t){let e=1-s;return 3*e*e*s*t}function zS(s,t){return 3*(1-s)*s*s*t}function kS(s,t){return s*s*s*t}function _l(s,t,e,n,i){return FS(s,t)+BS(s,e)+zS(s,n)+kS(s,i)}var Ul=class extends wi{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_l(t,i.x,r.x,o.x,a.x),_l(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qh=class extends wi{constructor(t=new F,e=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new F){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_l(t,i.x,r.x,o.x,a.x),_l(t,i.y,r.y,o.y,a.y),_l(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ol=class extends wi{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zh=class extends wi{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fl=class extends wi{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(gl(t,i.x,r.x,o.x),gl(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$h=class extends wi{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(gl(t,i.x,r.x,o.x),gl(t,i.y,r.y,o.y),gl(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bl=class extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(q0(a,l.x,c.x,h.x,d.x),q0(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new pt().fromArray(i))}return this}},hp=Object.freeze({__proto__:null,ArcCurve:Xh,CatmullRomCurve3:Yh,CubicBezierCurve:Ul,CubicBezierCurve3:qh,EllipseCurve:ra,LineCurve:Ol,LineCurve3:Zh,QuadraticBezierCurve:Fl,QuadraticBezierCurve3:$h,SplineCurve:Bl}),Jh=class extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hp[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new hp[i.type]().fromJSON(i))}return this}},zl=class extends Jh{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ol(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Fl(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Ul(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Bl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new ra(t,e,n,i,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Qr=class extends zl{constructor(t){super(t),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new zl().fromJSON(i))}return this}};function VS(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=k_(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=YS(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let u=e;u<i;u+=e){let f=s[u],p=s[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return kl(r,o,e,a,l,c,0),o}function k_(s,t,e,n,i){let r;if(i===iM(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Z0(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Z0(o/n|0,s[o],s[o+1],r);return r&&oa(r,r.next)&&(Hl(r),r=r.next),r}function jr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(oa(e,e.next)||Ye(e.prev,e,e.next)===0)){if(Hl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function kl(s,t,e,n,i,r,o){if(!s)return;!o&&r&&KS(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?GS(s,n,i,r):HS(s)){t.push(l.i,s.i,c.i),Hl(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=WS(jr(s),t),kl(s,t,e,n,i,r,2)):o===2&&XS(s,t,e,n,i,r):kl(jr(s),t,e,n,i,r,1);break}}}function HS(s){let t=s.prev,e=s,n=s.next;if(Ye(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),u=Math.max(i,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&dl(i,a,r,l,o,c,p.x,p.y)&&Ye(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function GS(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ye(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),_=Math.max(a,l,c),m=Math.max(h,d,u),g=up(f,p,t,e,n),S=up(_,m,t,e,n),A=s.prevZ,x=s.nextZ;for(;A&&A.z>=g&&x&&x.z<=S;){if(A.x>=f&&A.x<=_&&A.y>=p&&A.y<=m&&A!==i&&A!==o&&dl(a,h,l,d,c,u,A.x,A.y)&&Ye(A.prev,A,A.next)>=0||(A=A.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&dl(a,h,l,d,c,u,x.x,x.y)&&Ye(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;A&&A.z>=g;){if(A.x>=f&&A.x<=_&&A.y>=p&&A.y<=m&&A!==i&&A!==o&&dl(a,h,l,d,c,u,A.x,A.y)&&Ye(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&dl(a,h,l,d,c,u,x.x,x.y)&&Ye(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function WS(s,t){let e=s;do{let n=e.prev,i=e.next.next;!oa(n,i)&&H_(n,e,e.next,i)&&Vl(n,i)&&Vl(i,n)&&(t.push(n.i,e.i,i.i),Hl(e),Hl(e.next),e=s=i),e=e.next}while(e!==s);return jr(e)}function XS(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tM(o,a)){let l=G_(o,a);o=jr(o,o.next),l=jr(l,l.next),kl(o,t,e,n,i,r,0),kl(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function YS(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=k_(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(jS(c))}i.sort(qS);for(let r=0;r<i.length;r++)e=ZS(i[r],e);return e}function qS(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function ZS(s,t){let e=$S(s,t);if(!e)return t;let n=G_(e,s);return jr(n,n.next),jr(e,e.next)}function $S(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(oa(s,e))return e;do{if(oa(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&V_(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Vl(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&JS(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function JS(s,t){return Ye(s.prev,s,t.prev)<0&&Ye(t.next,s,s.next)<0}function KS(s,t,e,n){let i=s;do i.z===0&&(i.z=up(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,QS(i)}function QS(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function up(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function jS(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function V_(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function dl(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&V_(s,t,e,n,i,r,o,a)}function tM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!eM(s,t)&&(Vl(s,t)&&Vl(t,s)&&nM(s,t)&&(Ye(s.prev,s,t.prev)||Ye(s,t.prev,t))||oa(s,t)&&Ye(s.prev,s,s.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function oa(s,t){return s.x===t.x&&s.y===t.y}function H_(s,t,e,n){let i=Th(Ye(s,t,e)),r=Th(Ye(s,t,n)),o=Th(Ye(e,n,s)),a=Th(Ye(e,n,t));return!!(i!==r&&o!==a||i===0&&wh(s,e,t)||r===0&&wh(s,n,t)||o===0&&wh(e,s,n)||a===0&&wh(e,t,n))}function wh(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Th(s){return s>0?1:s<0?-1:0}function eM(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&H_(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Vl(s,t){return Ye(s.prev,s,s.next)<0?Ye(s,t,s.next)>=0&&Ye(s,s.prev,t)>=0:Ye(s,t,s.prev)<0||Ye(s,s.next,t)<0}function nM(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function G_(s,t){let e=fp(s.i,s.x,s.y),n=fp(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Z0(s,t,e,n){let i=fp(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Hl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fp(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function iM(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var dp=class{static triangulate(t,e,n=2){return VS(t,e,n)}},Zr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];$0(t),J0(n,t);let o=t.length;e.forEach($0);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,J0(n,e[l]);let a=dp.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function $0(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function J0(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var aa=class s extends Mn{constructor(t=new Qr([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ye(i,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:sM,A,x=!1,M,b,T,v;if(g){A=g.getSpacedPoints(h),x=!0,u=!1;let K=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,K),b=new F,T=new F,v=new F}u||(m=0,f=0,p=0,_=0);let w=a.extractPoints(c),C=w.shape,D=w.holes;if(!Zr.isClockWise(C)){C=C.reverse();for(let K=0,st=D.length;K<st;K++){let at=D[K];Zr.isClockWise(at)&&(D[K]=at.reverse())}}function V(K){let at=10000000000000001e-36,N=K[0];for(let ut=1;ut<=K.length;ut++){let Nt=ut%K.length,Lt=K[Nt],Ct=Lt.x-N.x,Qt=Lt.y-N.y,O=Ct*Ct+Qt*Qt,ue=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(N.x),Math.abs(N.y)),Jt=at*ue*ue;if(O<=Jt){K.splice(Nt,1),ut--;continue}N=Lt}}V(C),D.forEach(V);let I=D.length,U=C;for(let K=0;K<I;K++){let st=D[K];C=C.concat(st)}function H(K,st,at){return st||ne("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(st,at)}let k=C.length;function j(K,st,at){let N,ut,Nt,Lt=K.x-st.x,Ct=K.y-st.y,Qt=at.x-K.x,O=at.y-K.y,ue=Lt*Lt+Ct*Ct,Jt=Lt*O-Ct*Qt;if(Math.abs(Jt)>Number.EPSILON){let P=Math.sqrt(ue),y=Math.sqrt(Qt*Qt+O*O),G=st.x-Ct/P,X=st.y+Lt/P,Q=at.x-O/y,mt=at.y+Qt/y,ct=((Q-G)*O-(mt-X)*Qt)/(Lt*O-Ct*Qt);N=G+Lt*ct-K.x,ut=X+Ct*ct-K.y;let tt=N*N+ut*ut;if(tt<=2)return new pt(N,ut);Nt=Math.sqrt(tt/2)}else{let P=!1;Lt>Number.EPSILON?Qt>Number.EPSILON&&(P=!0):Lt<-Number.EPSILON?Qt<-Number.EPSILON&&(P=!0):Math.sign(Ct)===Math.sign(O)&&(P=!0),P?(N=-Ct,ut=Lt,Nt=Math.sqrt(ue)):(N=Lt,ut=Ct,Nt=Math.sqrt(ue/2))}return new pt(N/Nt,ut/Nt)}let W=[];for(let K=0,st=U.length,at=st-1,N=K+1;K<st;K++,at++,N++)at===st&&(at=0),N===st&&(N=0),W[K]=j(U[K],U[at],U[N]);let R=[],J,wt=W.concat();for(let K=0,st=I;K<st;K++){let at=D[K];J=[];for(let N=0,ut=at.length,Nt=ut-1,Lt=N+1;N<ut;N++,Nt++,Lt++)Nt===ut&&(Nt=0),Lt===ut&&(Lt=0),J[N]=j(at[N],at[Nt],at[Lt]);R.push(J),wt=wt.concat(J)}let Tt;if(m===0)Tt=Zr.triangulateShape(U,D);else{let K=[],st=[];for(let at=0;at<m;at++){let N=at/m,ut=f*Math.cos(N*Math.PI/2),Nt=p*Math.sin(N*Math.PI/2)+_;for(let Lt=0,Ct=U.length;Lt<Ct;Lt++){let Qt=H(U[Lt],W[Lt],Nt);dt(Qt.x,Qt.y,-ut),N===0&&K.push(Qt)}for(let Lt=0,Ct=I;Lt<Ct;Lt++){let Qt=D[Lt];J=R[Lt];let O=[];for(let ue=0,Jt=Qt.length;ue<Jt;ue++){let P=H(Qt[ue],J[ue],Nt);dt(P.x,P.y,-ut),N===0&&O.push(P)}N===0&&st.push(O)}}Tt=Zr.triangulateShape(K,st)}let Xt=Tt.length,Ht=p+_;for(let K=0;K<k;K++){let st=u?H(C[K],wt[K],Ht):C[K];x?(T.copy(M.normals[0]).multiplyScalar(st.x),b.copy(M.binormals[0]).multiplyScalar(st.y),v.copy(A[0]).add(T).add(b),dt(v.x,v.y,v.z)):dt(st.x,st.y,0)}for(let K=1;K<=h;K++)for(let st=0;st<k;st++){let at=u?H(C[st],wt[st],Ht):C[st];x?(T.copy(M.normals[K]).multiplyScalar(at.x),b.copy(M.binormals[K]).multiplyScalar(at.y),v.copy(A[K]).add(T).add(b),dt(v.x,v.y,v.z)):dt(at.x,at.y,d/h*K)}for(let K=m-1;K>=0;K--){let st=K/m,at=f*Math.cos(st*Math.PI/2),N=p*Math.sin(st*Math.PI/2)+_;for(let ut=0,Nt=U.length;ut<Nt;ut++){let Lt=H(U[ut],W[ut],N);dt(Lt.x,Lt.y,d+at)}for(let ut=0,Nt=D.length;ut<Nt;ut++){let Lt=D[ut];J=R[ut];for(let Ct=0,Qt=Lt.length;Ct<Qt;Ct++){let O=H(Lt[Ct],J[Ct],N);x?dt(O.x,O.y+A[h-1].y,A[h-1].x+at):dt(O.x,O.y,d+at)}}}$t(),$();function $t(){let K=i.length/3;if(u){let st=0,at=k*st;for(let N=0;N<Xt;N++){let ut=Tt[N];kt(ut[2]+at,ut[1]+at,ut[0]+at)}st=h+m*2,at=k*st;for(let N=0;N<Xt;N++){let ut=Tt[N];kt(ut[0]+at,ut[1]+at,ut[2]+at)}}else{for(let st=0;st<Xt;st++){let at=Tt[st];kt(at[2],at[1],at[0])}for(let st=0;st<Xt;st++){let at=Tt[st];kt(at[0]+k*h,at[1]+k*h,at[2]+k*h)}}n.addGroup(K,i.length/3-K,0)}function $(){let K=i.length/3,st=0;et(U,st),st+=U.length;for(let at=0,N=D.length;at<N;at++){let ut=D[at];et(ut,st),st+=ut.length}n.addGroup(K,i.length/3-K,1)}function et(K,st){let at=K.length;for(;--at>=0;){let N=at,ut=at-1;ut<0&&(ut=K.length-1);for(let Nt=0,Lt=h+m*2;Nt<Lt;Nt++){let Ct=k*Nt,Qt=k*(Nt+1),O=st+N+Ct,ue=st+ut+Ct,Jt=st+ut+Qt,P=st+N+Qt;_t(O,ue,Jt,P)}}}function dt(K,st,at){l.push(K),l.push(st),l.push(at)}function kt(K,st,at){Rt(K),Rt(st),Rt(at);let N=i.length/3,ut=S.generateTopUV(n,i,N-3,N-2,N-1);Pt(ut[0]),Pt(ut[1]),Pt(ut[2])}function _t(K,st,at,N){Rt(K),Rt(st),Rt(N),Rt(st),Rt(at),Rt(N);let ut=i.length/3,Nt=S.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);Pt(Nt[0]),Pt(Nt[1]),Pt(Nt[3]),Pt(Nt[1]),Pt(Nt[2]),Pt(Nt[3])}function Rt(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function Pt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rM(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new hp[i.type]().fromJSON(i)),new s(n,t.options)}},sM={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new pt(r,o),new pt(a,l),new pt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new pt(o,1-l),new pt(c,1-d),new pt(u,1-p),new pt(_,1-g)]:[new pt(a,1-l),new pt(h,1-d),new pt(f,1-p),new pt(m,1-g)]}};function rM(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Gl=class s extends Mn{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ae(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new F,u=new pt,f=new F,p=new F,_=new F,m=0,g=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let S=0;S<=e;S++){let A=n+S*h*i,x=Math.sin(A),M=Math.cos(A);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*x,d.y=t[b].y,d.z=t[b].x*M,o.push(d.x,d.y,d.z),u.x=S/e,u.y=b/(t.length-1),a.push(u.x,u.y);let T=l[3*b+0]*x,v=l[3*b+1],w=l[3*b+0]*M;c.push(T,v,w)}}for(let S=0;S<e;S++)for(let A=0;A<t.length-1;A++){let x=A+S*t.length,M=x,b=x+t.length,T=x+t.length+1,v=x+1;r.push(M,b,v),r.push(T,v,b)}this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("uv",new ye(a,2)),this.setAttribute("normal",new ye(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var vs=class s extends Mn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let S=g*u-o;for(let A=0;A<c;A++){let x=A*d-r;p.push(x,-S,0),_.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let A=S+c*g,x=S+c*(g+1),M=S+1+c*(g+1),b=S+1+c*g;f.push(A,x,b),f.push(x,M,b)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},to=class s extends Mn{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/i,f=new F,p=new pt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let g=r+m/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let _=0;_<i;_++){let m=_*(n+1);for(let g=0;g<n;g++){let S=g+m,A=S,x=S+n+1,M=S+n+2,b=S+1;a.push(A,x,b),a.push(x,M,b)}}this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ks=class s extends Mn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new F,u=new F,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let S=[],A=g/n,x=o+A*a,M=t*Math.cos(x),b=Math.sqrt(t*t-M*M),T=0;g===0&&o===0?T=.5/e:g===n&&l===Math.PI&&(T=-.5/e);for(let v=0;v<=e;v++){let w=v/e,C=i+w*r;d.x=-b*Math.cos(C),d.y=M,d.z=b*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+T,1-A),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){let A=h[g][S+1],x=h[g][S],M=h[g+1][S],b=h[g+1][S+1];(g!==0||o>0)&&f.push(A,x,b),(g!==n-1||l<Math.PI)&&f.push(x,M,b)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var la=class s extends Mn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new F,f=new F,p=new F;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=i;g++){let S=g/i*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let g=(i+1)*_+m-1,S=(i+1)*(_-1)+m-1,A=(i+1)*(_-1)+m,x=(i+1)*_+m;l.push(g,S,x),l.push(S,A,x)}this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function io(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(K0(i))i.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(K0(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Hn(s){let t={};for(let e=0;e<s.length;e++){let n=io(s[e]);for(let i in n)t[i]=n[i]}return t}function K0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function oM(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Vp(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var W_={clone:io,merge:Hn},aM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ti=class extends xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aM,this.fragmentShader=lM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=oM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ie().setHex(i.value);break;case"v2":this.uniforms[n].value=new pt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new He().fromArray(i.value);break;case"m3":this.uniforms[n].value=new re().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Kh=class extends Ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vs=class extends xs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Fi=class extends Vs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Wl=class extends xs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=pu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Qh=class extends xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jh=class extends xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Yo(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function sp(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var pr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tu=class extends pr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ap,endingEnd:ap}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case lp:r=t,a=2*e-n;break;case cp:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lp:o=t,l=2*n-e;break;case cp:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,A=(-1-f)*m+(1.5+f)*_+.5*p,x=f*m-f*_;for(let M=0;M!==a;++M)r[M]=g*o[h+M]+S*o[c+M]+A*o[l+M]+x*o[d+M];return r}},eu=class extends pr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},nu=class extends pr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},iu=class extends pr{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=f*u+p*2,S=d[g],A=d[g+1],x=t*u+p*2,M=h[x],b=h[x+1],T=hM(n,e,S,M,i);r[p]=X_(T,_,A,b,m)}return r}};function X_(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function cM(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function hM(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=X_(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=cM(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ei=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yo(e,this.TimeBufferType),this.values=Yo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yo(t.times,Array),values:Yo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),sp(t.settings)&&(n.settings={inTangents:Yo(t.settings.inTangents,Array),outTangents:Yo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new eu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new iu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xl:e=this.InterpolantFactoryMethodDiscrete;break;case Bh:e=this.InterpolantFactoryMethodLinear;break;case Ch:e=this.InterpolantFactoryMethodSmooth;break;case op:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ee("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xl;case this.InterpolantFactoryMethodLinear:return Bh;case this.InterpolantFactoryMethodSmooth:return Ch;case this.InterpolantFactoryMethodBezier:return op}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;sp(this.settings)&&(Q0(this.settings.inTangents,t),Q0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ne("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Qy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ch,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,sp(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Q0(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Ei.prototype.ValueTypeName="";Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=Bh;var mr=class extends Ei{constructor(t,e,n){super(t,e,n)}};mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=xl;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var su=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}};su.prototype.ValueTypeName="color";var ru=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}};ru.prototype.ValueTypeName="number";var ou=class extends pr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)ms.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xl=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ou(this.times,this.values,this.getValueSize(),t)}};Xl.prototype.ValueTypeName="quaternion";Xl.prototype.InterpolantFactoryMethodSmooth=void 0;var gr=class extends Ei{constructor(t,e,n){super(t,e,n)}};gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=xl;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var au=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}};au.prototype.ValueTypeName="vector";var lu=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Y_=new lu,cu=class{constructor(t){this.manager=t!==void 0?t:Y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};cu.DEFAULT_MATERIAL_NAME="__DEFAULT";var ca=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Yl=class extends ca{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rp=new Ae,j0=new F,t_=new F,ql=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;j0.setFromMatrixPosition(t.matrixWorld),e.position.copy(j0),t_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(t_),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){rp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(rp,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Qo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(rp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Eh=new F,Ah=new ms,hs=new F,Zl=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Eh,Ah,hs),hs.x===1&&hs.y===1&&hs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eh,Ah,hs.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Eh,Ah,hs),hs.x===1&&hs.y===1&&hs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eh,Ah,hs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ur=new F,e_=new pt,n_=new pt,An=class extends Zl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ur.x,ur.y).multiplyScalar(-t/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-t/ur.z)}getViewSize(t,e){return this.getViewBounds(t,e_,n_),e.subVectors(n_,e_)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var pp=class extends ql{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}},$l=class extends ca{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ha=class extends Zl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},mp=class extends ql{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ua=class extends ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new mp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var qo=-90,Zo=1,hu=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new An(qo,Zo,t,e);i.layers=this.layers,this.add(i);let r=new An(qo,Zo,t,e);r.layers=this.layers,this.add(r);let o=new An(qo,Zo,t,e);o.layers=this.layers,this.add(o);let a=new An(qo,Zo,t,e);a.layers=this.layers,this.add(a);let l=new An(qo,Zo,t,e);l.layers=this.layers,this.add(l);let c=new An(qo,Zo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},uu=class extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Hp="\\[\\]\\.:\\/",uM=new RegExp("["+Hp+"]","g"),Gp="[^"+Hp+"]",fM="[^"+Hp.replace("\\.","")+"]",dM=/((?:WC+[\/:])*)/.source.replace("WC",Gp),pM=/(WCOD+)?/.source.replace("WCOD",fM),mM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gp),gM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gp),_M=new RegExp("^"+dM+pM+mM+gM+"$"),xM=["material","materials","bones","map"],gp=class{constructor(t,e,n){let i=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uM,"")}static parseTrackName(t){let e=_M.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);xM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=gp;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var GE=new Float32Array(1);var $p=class $p{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};$p.prototype.isMatrix2=!0;var _p=$p;function Wp(s,t,e,n){let i=vM(n);switch(e){case Np:return s*t;case Su:return s*t/i.components*i.byteLength;case Mu:return s*t/i.components*i.byteLength;case Sr:return s*t*2/i.components*i.byteLength;case bu:return s*t*2/i.components*i.byteLength;case Up:return s*t*3/i.components*i.byteLength;case ki:return s*t*4/i.components*i.byteLength;case wu:return s*t*4/i.components*i.byteLength;case ec:case nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ic:case sc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Eu:case Cu:return Math.max(s,16)*Math.max(t,8)/4;case Tu:case Au:return Math.max(s,8)*Math.max(t,8)/2;case Ru:case Pu:case Lu:case Du:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Iu:case rc:case Nu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Uu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ou:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Fu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Bu:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case zu:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ku:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Vu:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Hu:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Gu:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xu:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Yu:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case qu:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Zu:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $u:case Ju:case Ku:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Qu:case ju:return Math.ceil(s/4)*Math.ceil(t/4)*8;case oc:case tf:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vM(s){switch(s){case fi:case Pp:return{byteLength:1,components:1};case pa:case Ip:case ji:return{byteLength:2,components:1};case vu:case yu:return{byteLength:2,components:4};case Qi:case xu:case zi:return{byteLength:4,components:1};case Lp:case Dp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function px(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function SM(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var MM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,IM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,GM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,XM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,db=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ib=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ob=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,a1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,S1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,P1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,V1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,G1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,W1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:MM,alphahash_pars_fragment:bM,alphamap_fragment:wM,alphamap_pars_fragment:TM,alphatest_fragment:EM,alphatest_pars_fragment:AM,aomap_fragment:CM,aomap_pars_fragment:RM,batching_pars_vertex:PM,batching_vertex:IM,begin_vertex:LM,beginnormal_vertex:DM,bsdfs:NM,iridescence_fragment:UM,bumpmap_pars_fragment:OM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:zM,clipping_planes_vertex:kM,color_fragment:VM,color_pars_fragment:HM,color_pars_vertex:GM,color_vertex:WM,common:XM,cube_uv_reflection_fragment:YM,defaultnormal_vertex:qM,displacementmap_pars_vertex:ZM,displacementmap_vertex:$M,emissivemap_fragment:JM,emissivemap_pars_fragment:KM,colorspace_fragment:QM,colorspace_pars_fragment:jM,envmap_fragment:tb,envmap_common_pars_fragment:eb,envmap_pars_fragment:nb,envmap_pars_vertex:ib,envmap_physical_pars_fragment:pb,envmap_vertex:sb,fog_vertex:rb,fog_pars_vertex:ob,fog_fragment:ab,fog_pars_fragment:lb,gradientmap_pars_fragment:cb,lightmap_pars_fragment:hb,lights_lambert_fragment:ub,lights_lambert_pars_fragment:fb,lights_pars_begin:db,lights_toon_fragment:mb,lights_toon_pars_fragment:gb,lights_phong_fragment:_b,lights_phong_pars_fragment:xb,lights_physical_fragment:vb,lights_physical_pars_fragment:yb,lights_fragment_begin:Sb,lights_fragment_maps:Mb,lights_fragment_end:bb,lightprobes_pars_fragment:wb,logdepthbuf_fragment:Tb,logdepthbuf_pars_fragment:Eb,logdepthbuf_pars_vertex:Ab,logdepthbuf_vertex:Cb,map_fragment:Rb,map_pars_fragment:Pb,map_particle_fragment:Ib,map_particle_pars_fragment:Lb,metalnessmap_fragment:Db,metalnessmap_pars_fragment:Nb,morphinstance_vertex:Ub,morphcolor_vertex:Ob,morphnormal_vertex:Fb,morphtarget_pars_vertex:Bb,morphtarget_vertex:zb,normal_fragment_begin:kb,normal_fragment_maps:Vb,normal_pars_fragment:Hb,normal_pars_vertex:Gb,normal_vertex:Wb,normalmap_pars_fragment:Xb,clearcoat_normal_fragment_begin:Yb,clearcoat_normal_fragment_maps:qb,clearcoat_pars_fragment:Zb,iridescence_pars_fragment:$b,opaque_fragment:Jb,packing:Kb,premultiplied_alpha_fragment:Qb,project_vertex:jb,dithering_fragment:t1,dithering_pars_fragment:e1,roughnessmap_fragment:n1,roughnessmap_pars_fragment:i1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:r1,shadowmap_vertex:o1,shadowmask_pars_fragment:a1,skinbase_vertex:l1,skinning_pars_vertex:c1,skinning_vertex:h1,skinnormal_vertex:u1,specularmap_fragment:f1,specularmap_pars_fragment:d1,tonemapping_fragment:p1,tonemapping_pars_fragment:m1,transmission_fragment:g1,transmission_pars_fragment:_1,uv_pars_fragment:x1,uv_pars_vertex:v1,uv_vertex:y1,worldpos_vertex:S1,background_vert:M1,background_frag:b1,backgroundCube_vert:w1,backgroundCube_frag:T1,cube_vert:E1,cube_frag:A1,depth_vert:C1,depth_frag:R1,distance_vert:P1,distance_frag:I1,equirect_vert:L1,equirect_frag:D1,linedashed_vert:N1,linedashed_frag:U1,meshbasic_vert:O1,meshbasic_frag:F1,meshlambert_vert:B1,meshlambert_frag:z1,meshmatcap_vert:k1,meshmatcap_frag:V1,meshnormal_vert:H1,meshnormal_frag:G1,meshphong_vert:W1,meshphong_frag:X1,meshphysical_vert:Y1,meshphysical_frag:q1,meshtoon_vert:Z1,meshtoon_frag:$1,points_vert:J1,points_frag:K1,shadow_vert:Q1,shadow_frag:j1,sprite_vert:tw,sprite_frag:ew},Et={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ms={basic:{uniforms:Hn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Hn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Hn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Hn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Hn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new ie(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Hn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Hn([Et.points,Et.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Hn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Hn([Et.common,Et.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Hn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Hn([Et.sprite,Et.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:Hn([Et.common,Et.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:Hn([Et.lights,Et.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ms.physical={uniforms:Hn([Ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var sf={r:0,b:0,g:0},nw=new Ae,mx=new re;mx.set(-1,0,0,0,1,0,0,0,1);function iw(s,t,e,n,i,r){let o=new ie(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let x=S.backgroundBlurriness>0;A=t.get(A,x)}return A}function p(S){let A=!1,x=f(S);x===null?m(o,a):x&&x.isColor&&(m(x,1),A=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(S,A){let x=f(A);x&&(x.isCubeTexture||x.mapping===jl)?(c===void 0&&(c=new qt(new ui(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:io(Ms.backgroundCube.uniforms),vertexShader:Ms.backgroundCube.vertexShader,fragmentShader:Ms.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nw.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mx),c.material.toneMapped=me.getTransfer(x.colorSpace)!==be,(h!==x||d!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new qt(new vs(2,2),new Ti({name:"BackgroundMaterial",uniforms:io(Ms.background.uniforms),vertexShader:Ms.background.vertexShader,fragmentShader:Ms.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=me.getTransfer(x.colorSpace)!==be,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(sf,Vp(s)),e.buffers.color.setClear(sf.r,sf.g,sf.b,A,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:p,addToRenderList:_,dispose:g}}function sw(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(D,L,V,I,U){let H=!1,k=d(D,I,V,L);r!==k&&(r=k,c(r.object)),H=f(D,I,V,U),H&&p(D,I,V,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(D,L,V,I),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,L,V,I){let U=I.wireframe===!0,H=n[L.id];H===void 0&&(H={},n[L.id]=H);let k=D.isInstancedMesh===!0?D.id:0,j=H[k];j===void 0&&(j={},H[k]=j);let W=j[V.id];W===void 0&&(W={},j[V.id]=W);let R=W[U];return R===void 0&&(R=u(l()),W[U]=R),R}function u(D){let L=[],V=[],I=[];for(let U=0;U<e;U++)L[U]=0,V[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,L,V,I){let U=r.attributes,H=L.attributes,k=0,j=V.getAttributes();for(let W in j)if(j[W].location>=0){let J=U[W],wt=H[W];if(wt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(wt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(wt=D.instanceColor)),J===void 0||J.attribute!==wt||wt&&J.data!==wt.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function p(D,L,V,I){let U={},H=L.attributes,k=0,j=V.getAttributes();for(let W in j)if(j[W].location>=0){let J=H[W];J===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));let wt={};wt.attribute=J,J&&J.data&&(wt.data=J.data),U[W]=wt,k++}r.attributes=U,r.attributesNum=k,r.index=I}function _(){let D=r.newAttributes;for(let L=0,V=D.length;L<V;L++)D[L]=0}function m(D){g(D,0)}function g(D,L){let V=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;V[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),U[D]!==L&&(s.vertexAttribDivisor(D,L),U[D]=L)}function S(){let D=r.newAttributes,L=r.enabledAttributes;for(let V=0,I=L.length;V<I;V++)L[V]!==D[V]&&(s.disableVertexAttribArray(V),L[V]=0)}function A(D,L,V,I,U,H,k){k===!0?s.vertexAttribIPointer(D,L,V,U,H):s.vertexAttribPointer(D,L,V,I,U,H)}function x(D,L,V,I){_();let U=I.attributes,H=V.getAttributes(),k=L.defaultAttributeValues;for(let j in H){let W=H[j];if(W.location>=0){let R=U[j];if(R===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let J=R.normalized,wt=R.itemSize,Tt=t.get(R);if(Tt===void 0)continue;let Xt=Tt.buffer,Ht=Tt.type,$t=Tt.bytesPerElement,$=Ht===s.INT||Ht===s.UNSIGNED_INT||R.gpuType===xu;if(R.isInterleavedBufferAttribute){let et=R.data,dt=et.stride,kt=R.offset;if(et.isInstancedInterleavedBuffer){for(let _t=0;_t<W.locationSize;_t++)g(W.location+_t,et.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let _t=0;_t<W.locationSize;_t++)m(W.location+_t);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let _t=0;_t<W.locationSize;_t++)A(W.location+_t,wt/W.locationSize,Ht,J,dt*$t,(kt+wt/W.locationSize*_t)*$t,$)}else{if(R.isInstancedBufferAttribute){for(let et=0;et<W.locationSize;et++)g(W.location+et,R.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let et=0;et<W.locationSize;et++)m(W.location+et);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let et=0;et<W.locationSize;et++)A(W.location+et,wt/W.locationSize,Ht,J,wt*$t,wt/W.locationSize*et*$t,$)}}else if(k!==void 0){let J=k[j];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(W.location,J);break;case 3:s.vertexAttrib3fv(W.location,J);break;case 4:s.vertexAttrib4fv(W.location,J);break;default:s.vertexAttrib1fv(W.location,J)}}}}S()}function M(){w();for(let D in n){let L=n[D];for(let V in L){let I=L[V];for(let U in I){let H=I[U];for(let k in H)h(H[k].object),delete H[k];delete I[U]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let V in L){let I=L[V];for(let U in I){let H=I[U];for(let k in H)h(H[k].object),delete H[k];delete I[U]}}delete n[D.id]}function T(D){for(let L in n){let V=n[L];for(let I in V){let U=V[I];if(U[D.id]===void 0)continue;let H=U[D.id];for(let k in H)h(H[k].object),delete H[k];delete U[D.id]}}}function v(D){for(let L in n){let V=n[L],I=D.isInstancedMesh===!0?D.id:0,U=V[I];if(U!==void 0){for(let H in U){let k=U[H];for(let j in k)h(k[j].object),delete k[j];delete U[H]}delete V[I],Object.keys(V).length===0&&delete n[L]}}}function w(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function rw(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ow(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==ki&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let v=T===ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==fi&&T!==zi&&!v&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:x,maxSamples:M,samples:b}}function aw(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Zi,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,A=S*4,x=g.clippingState||null;l.value=x,x=h(p,u,A,f);for(let M=0;M!==A;++M)x[M]=e[M];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,x=f;A!==_;++A,x+=4)o.copy(d[A]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var _a=4,lw=6,cw=20,hw=256,lc=new ha,q_=new ie,Jp=null,Kp=0,Qp=0,jp=!1,uw=new F,so=new F,va=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=uw}=r;Jp=this._renderer.getRenderTarget(),Kp=this._renderer.getActiveCubeFace(),Qp=this._renderer.getActiveMipmapLevel(),jp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jp,Kp,Qp),this._renderer.xr.enabled=jp,t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jp=this._renderer.getRenderTarget(),Kp=this._renderer.getActiveCubeFace(),Qp=this._renderer.getActiveMipmapLevel(),jp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:ji,format:ki,colorSpace:vl,depthBuffer:!1},i=Z_(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z_(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fw(r)),this._blurMaterial=pw(r,t,e),this._ggxMaterial=dw(r,t,e)}return i}_compileMaterial(t){let e=new qt(new Mn,t);this._renderer.compile(e,lc)}_sceneToCubeUV(t,e,n,i,r){let l=new An(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(q_),d.toneMapping=Ki,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new ui,new hi({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,g=!0):(m.color.copy(q_),g=!0);for(let A=0;A<6;A++){let x=A%3;x===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):x===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let M=this._cubeSize;ga(i,x*M,A>2?M:0,M,M),d.setRenderTarget(i),g&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===xr||t.mapping===no;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$_());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ga(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,lc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-_a?n-p+_a:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,ga(r,m,g,3*_,2*_),i.setRenderTarget(r),i.render(a,lc),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,ga(t,m,g,3*_,2*_),i.setRenderTarget(t),i.render(a,lc)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-_a?i-this._lodMax+_a:0),u=4*(this._cubeSize-h);ga(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,lc)}};function fw(s){let t=[],e=[],n=s,i=s-_a+1+lw;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let g=0;g<d;g++){let S=g%3*2/3-1,A=g>2?0:-1,x=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];p.set(x,f*u*g);for(let M=0;M<u;M++){let b=h[M*2]*2-1,T=h[M*2+1]*2-1;g===0?so.set(1,T,b):g===1?so.set(-b,1,-T):g===2?so.set(-b,T,1):g===3?so.set(-1,T,-b):g===4?so.set(-b,-1,T):so.set(b,T,-1),so.toArray(_,(g*u+M)*f)}}let m=new Mn;m.setAttribute("position",new li(p,f)),m.setAttribute("outputDirection",new li(_,f)),e.push(new qt(m,null)),n>_a&&n--}return{lodMeshes:e,sizeLods:t}}function Z_(s,t,e){let n=new ci(s,t,e);return n.texture.mapping=jl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function dw(s,t,e){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function pw(s,t,e){return new Ti({name:"SphericalGaussianBlur",defines:{SAMPLES:cw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function $_(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function J_(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function lf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var of=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ll(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ui(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:ys});r.uniforms.tEquirect.value=e;let o=new qt(i,r),a=e.minFilter;return e.minFilter===vr&&(e.minFilter=Cn),new hu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function mw(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===mu||f===gu)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new of(p.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===mu||f===gu,_=f===xr||f===no;if(p||_){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new va(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new va(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===mu?u.mapping=xr:f===gu&&(u.mapping=no),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function gw(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&$r("WebGLRenderer: "+n+" extension not supported."),i}}}function _w(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let S=f.array;_=f.version;for(let A=0,x=S.length;A<x;A+=3){let M=S[A+0],b=S[A+1],T=S[A+2];u.push(M,b,b,T,T,M)}}else{let S=p.array;_=p.version;for(let A=0,x=S.length/3-1;A<x;A+=3){let M=A+0,b=A+1,T=A+2;u.push(M,b,b,T,T,M)}}let m=new(p.count>=65535?El:Tl)(u,1);m.version=_;let g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function xw(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vw(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function yw(s,t,e){let n=new WeakMap,i=new He;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],A=0;f===!0&&(A=1),p===!0&&(A=2),_===!0&&(A=3);let x=a.attributes.position.count*A,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*M*4*d),T=new bl(b,x,M,d);T.type=zi,T.needsUpdate=!0;let v=A*4;for(let C=0;C<d;C++){let D=m[C],L=g[C],V=S[C],I=x*M*4*C;for(let U=0;U<D.count;U++){let H=U*v;f===!0&&(i.fromBufferAttribute(D,U),b[I+H+0]=i.x,b[I+H+1]=i.y,b[I+H+2]=i.z,b[I+H+3]=0),p===!0&&(i.fromBufferAttribute(L,U),b[I+H+4]=i.x,b[I+H+5]=i.y,b[I+H+6]=i.z,b[I+H+7]=0),_===!0&&(i.fromBufferAttribute(V,U),b[I+H+8]=i.x,b[I+H+9]=i.y,b[I+H+10]=i.z,b[I+H+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:T,size:new pt(x,M)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Sw(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Mw={[bp]:"LINEAR_TONE_MAPPING",[wp]:"REINHARD_TONE_MAPPING",[Tp]:"CINEON_TONE_MAPPING",[Ql]:"ACES_FILMIC_TONE_MAPPING",[Ap]:"AGX_TONE_MAPPING",[Cp]:"NEUTRAL_TONE_MAPPING",[Ep]:"CUSTOM_TONE_MAPPING"};function bw(s,t,e,n,i,r){let o=new ci(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Mn;c.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ye([0,2,0,0,2,0],2));let h=new Kh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new qt(c,h),u=new ha(-1,1,1,-1,0,1),f=null,p=null,_=!1,m,g=null,S=[],A=!1;this.setSize=function(x,M){o.setSize(x,M),a!==null&&a.setSize(x,M),l!==null&&l.setSize(x,M);for(let b=0;b<S.length;b++){let T=S[b];T.setSize&&T.setSize(x,M)}},this.setEffects=function(x){S=x,A=S.length>0&&S[0].isRenderPass===!0;let M=o.width,b=o.height;S.length>0&&a===null&&(a=new ci(M,b,{type:ji,depthBuffer:!1,stencilBuffer:!1}),l=new ci(M,b,{type:ji,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<S.length;T++){let v=S[T];v.setSize&&v.setSize(M,b)}},this.begin=function(x,M){if(_||x.toneMapping===Ki&&S.length===0)return!1;if(g=M,M!==null){let b=M.width,T=M.height;(o.width!==b||o.height!==T)&&this.setSize(b,T)}return A===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=Ki,!0},this.hasRenderPass=function(){return A},this.end=function(x,M){x.toneMapping=m,_=!0;let b=o,T=a;for(let v=0;v<S.length;v++){let w=S[v];w.enabled!==!1&&(w.render(x,T,b,M),w.needsSwap!==!1&&(b=T,T=T===a?l:a))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},me.getTransfer(f)===be&&(h.defines.SRGB_TRANSFER="");let v=Mw[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(g),x.render(d,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var gx=new ei,nm=new dr(1,1),_x=new bl,xx=new Vh,vx=new Ll,K_=[],Q_=[],j_=new Float32Array(16),tx=new Float32Array(9),ex=new Float32Array(4);function ya(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=K_[i];if(r===void 0&&(r=new Float32Array(i),K_[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function pn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function mn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function cf(s,t){let e=Q_[t];e===void 0&&(e=new Int32Array(t),Q_[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ww(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Tw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;s.uniform2fv(this.addr,t),mn(e,t)}}function Ew(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pn(e,t))return;s.uniform3fv(this.addr,t),mn(e,t)}}function Aw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;s.uniform4fv(this.addr,t),mn(e,t)}}function Cw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;ex.set(n),s.uniformMatrix2fv(this.addr,!1,ex),mn(e,n)}}function Rw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;tx.set(n),s.uniformMatrix3fv(this.addr,!1,tx),mn(e,n)}}function Pw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;j_.set(n),s.uniformMatrix4fv(this.addr,!1,j_),mn(e,n)}}function Iw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Lw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;s.uniform2iv(this.addr,t),mn(e,t)}}function Dw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;s.uniform3iv(this.addr,t),mn(e,t)}}function Nw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;s.uniform4iv(this.addr,t),mn(e,t)}}function Uw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ow(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;s.uniform2uiv(this.addr,t),mn(e,t)}}function Fw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;s.uniform3uiv(this.addr,t),mn(e,t)}}function Bw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;s.uniform4uiv(this.addr,t),mn(e,t)}}function zw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(nm.compareFunction=e.isReversedDepthBuffer()?nf:ef,r=nm):r=gx,e.setTexture2D(t||r,i)}function kw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xx,i)}function Vw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||vx,i)}function Hw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||_x,i)}function Gw(s){switch(s){case 5126:return ww;case 35664:return Tw;case 35665:return Ew;case 35666:return Aw;case 35674:return Cw;case 35675:return Rw;case 35676:return Pw;case 5124:case 35670:return Iw;case 35667:case 35671:return Lw;case 35668:case 35672:return Dw;case 35669:case 35673:return Nw;case 5125:return Uw;case 36294:return Ow;case 36295:return Fw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return kw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return Hw}}function Ww(s,t){s.uniform1fv(this.addr,t)}function Xw(s,t){let e=ya(t,this.size,2);s.uniform2fv(this.addr,e)}function Yw(s,t){let e=ya(t,this.size,3);s.uniform3fv(this.addr,e)}function qw(s,t){let e=ya(t,this.size,4);s.uniform4fv(this.addr,e)}function Zw(s,t){let e=ya(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function $w(s,t){let e=ya(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Jw(s,t){let e=ya(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Kw(s,t){s.uniform1iv(this.addr,t)}function Qw(s,t){s.uniform2iv(this.addr,t)}function jw(s,t){s.uniform3iv(this.addr,t)}function tT(s,t){s.uniform4iv(this.addr,t)}function eT(s,t){s.uniform1uiv(this.addr,t)}function nT(s,t){s.uniform2uiv(this.addr,t)}function iT(s,t){s.uniform3uiv(this.addr,t)}function sT(s,t){s.uniform4uiv(this.addr,t)}function rT(s,t,e){let n=this.cache,i=t.length,r=cf(e,i);pn(n,r)||(s.uniform1iv(this.addr,r),mn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=nm:o=gx;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function oT(s,t,e){let n=this.cache,i=t.length,r=cf(e,i);pn(n,r)||(s.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||xx,r[o])}function aT(s,t,e){let n=this.cache,i=t.length,r=cf(e,i);pn(n,r)||(s.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||vx,r[o])}function lT(s,t,e){let n=this.cache,i=t.length,r=cf(e,i);pn(n,r)||(s.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||_x,r[o])}function cT(s){switch(s){case 5126:return Ww;case 35664:return Xw;case 35665:return Yw;case 35666:return qw;case 35674:return Zw;case 35675:return $w;case 35676:return Jw;case 5124:case 35670:return Kw;case 35667:case 35671:return Qw;case 35668:case 35672:return jw;case 35669:case 35673:return tT;case 5125:return eT;case 36294:return nT;case 36295:return iT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return lT}}var im=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gw(e.type)}},sm=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cT(e.type)}},rm=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},tm=/(\w+)(\])?(\[|\.)?/g;function nx(s,t){s.seq.push(t),s.map[t.id]=t}function hT(s,t,e){let n=s.name,i=n.length;for(tm.lastIndex=0;;){let r=tm.exec(n),o=tm.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){nx(e,c===void 0?new im(a,s,t):new sm(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new rm(a),nx(e,d)),e=d}}}var xa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);hT(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function ix(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var uT=37297,fT=0;function dT(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var sx=new re;function pT(s){me._getMatrix(sx,me.workingColorSpace,s);let t=`mat3( ${sx.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(s)){case yl:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function rx(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+dT(s.getShaderSource(t),a)}else return r}function mT(s,t){let e=pT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var gT={[bp]:"Linear",[wp]:"Reinhard",[Tp]:"Cineon",[Ql]:"ACESFilmic",[Ap]:"AgX",[Cp]:"Neutral",[Ep]:"Custom"};function _T(s,t){let e=gT[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rf=new F;function xT(){me.getLuminanceCoefficients(rf);let s=rf.x.toFixed(4),t=rf.y.toFixed(4),e=rf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hc).join(`
`)}function yT(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ST(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function hc(s){return s!==""}function ox(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ax(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var MT=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(s){return s.replace(MT,wT)}var bT=new Map;function wT(s,t){let e=le[t];if(e===void 0){let n=bT.get(t);if(n!==void 0)e=le[n],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return om(e)}var TT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lx(s){return s.replace(TT,ET)}function ET(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cx(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var AT={[Jl]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};function CT(s){return AT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var RT={[xr]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE",[jl]:"ENVMAP_TYPE_CUBE_UV"};function PT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":RT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var IT={[no]:"ENVMAP_MODE_REFRACTION"};function LT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":IT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DT={[pu]:"ENVMAP_BLENDING_MULTIPLY",[M_]:"ENVMAP_BLENDING_MIX",[b_]:"ENVMAP_BLENDING_ADD"};function NT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":DT[s.combine]||"ENVMAP_BLENDING_NONE"}function UT(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function OT(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=CT(e),c=PT(e),h=LT(e),d=NT(e),u=UT(e),f=vT(e),p=yT(r),_=i.createProgram(),m,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(hc).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(hc).join(`
`),g.length>0&&(g+=`
`)):(m=[cx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hc).join(`
`),g=[cx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?le.tonemapping_pars_fragment:"",e.toneMapping!==Ki?_T("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,mT("linearToOutputTexel",e.outputColorSpace),xT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hc).join(`
`)),o=om(o),o=ox(o,e),o=ax(o,e),a=om(a),a=ox(a,e),a=ax(a,e),o=lx(o),a=lx(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=S+m+o,x=S+g+a,M=ix(i,i.VERTEX_SHADER,A),b=ix(i,i.FRAGMENT_SHADER,x);i.attachShader(_,M),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(D){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",V=i.getShaderInfoLog(M)||"",I=i.getShaderInfoLog(b)||"",U=L.trim(),H=V.trim(),k=I.trim(),j=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,b);else{let R=rx(i,M,"vertex"),J=rx(i,b,"fragment");ne("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+R+`
`+J)}else U!==""?ee("WebGLProgram: Program Info Log:",U):(H===""||k==="")&&(W=!1);W&&(D.diagnostics={runnable:j,programLog:U,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:g}})}i.deleteShader(M),i.deleteShader(b),v=new xa(i,_),w=ST(i,_)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,uT)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fT++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}var FT=0,am=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lm(t),e.set(t,n)),n}},lm=class{constructor(t){this.id=FT++,this.code=t,this.usedTimes=0}};function BT(s){return s===Sr||s===rc||s===oc}function zT(s,t,e,n,i,r){let o=new wl,a=new am,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,C,D,L,V){let I=D.fog,U=L.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=t.get(v.envMap||H,k),W=j&&j.mapping===jl?j.image.height:null,R=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&ee("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,wt=J!==void 0?J.length:0,Tt=0;U.morphAttributes.position!==void 0&&(Tt=1),U.morphAttributes.normal!==void 0&&(Tt=2),U.morphAttributes.color!==void 0&&(Tt=3);let Xt,Ht,$t,$;if(R){let Yt=Ms[R];Xt=Yt.vertexShader,Ht=Yt.fragmentShader}else{Xt=v.vertexShader,Ht=v.fragmentShader;let Yt=a.getVertexShaderStage(v),lt=a.getFragmentShaderStage(v);a.update(v,Yt,lt),$t=Yt.id,$=lt.id}let et=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),kt=L.isInstancedMesh===!0,_t=L.isBatchedMesh===!0,Rt=!!v.map,Pt=!!v.matcap,K=!!j,st=!!v.aoMap,at=!!v.lightMap,N=!!v.bumpMap&&v.wireframe===!1,ut=!!v.normalMap,Nt=!!v.displacementMap,Lt=!!v.emissiveMap,Ct=!!v.metalnessMap,Qt=!!v.roughnessMap,O=v.anisotropy>0,ue=v.clearcoat>0,Jt=v.dispersion>0,P=v.retroreflectivity>0,y=v.iridescence>0,G=v.sheen>0,X=v.transmission>0,Q=O&&!!v.anisotropyMap,mt=ue&&!!v.clearcoatMap,ct=ue&&!!v.clearcoatNormalMap,tt=ue&&!!v.clearcoatRoughnessMap,it=y&&!!v.iridescenceMap,vt=y&&!!v.iridescenceThicknessMap,Ot=G&&!!v.sheenColorMap,yt=G&&!!v.sheenRoughnessMap,xt=!!v.specularMap,ft=!!v.specularColorMap,Gt=!!v.specularIntensityMap,jt=X&&!!v.transmissionMap,B=X&&!!v.thicknessMap,gt=!!v.gradientMap,nt=!!v.alphaMap,St=v.alphaTest>0,bt=!!v.alphaHash,rt=!!v.extensions,ht=Ki;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ht=s.toneMapping);let ot={shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:Xt,fragmentShader:Ht,defines:v.defines,customVertexShaderID:$t,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:_t,batchingColor:_t&&L._colorsTexture!==null,instancing:kt,instancingColor:kt&&L.instanceColor!==null,instancingMorph:kt&&L.morphTexture!==null,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Rt,matcap:Pt,envMap:K,envMapMode:K&&j.mapping,envMapCubeUVHeight:W,aoMap:st,lightMap:at,bumpMap:N,normalMap:ut,displacementMap:Nt,emissiveMap:Lt,normalMapObjectSpace:ut&&v.normalMapType===E_,normalMapTangentSpace:ut&&v.normalMapType===ac,packedNormalMap:ut&&v.normalMapType===ac&&BT(v.normalMap.format),metalnessMap:Ct,roughnessMap:Qt,anisotropy:O,anisotropyMap:Q,clearcoat:ue,clearcoatMap:mt,clearcoatNormalMap:ct,clearcoatRoughnessMap:tt,dispersion:Jt,retroreflection:P,iridescence:y,iridescenceMap:it,iridescenceThicknessMap:vt,sheen:G,sheenColorMap:Ot,sheenRoughnessMap:yt,specularMap:xt,specularColorMap:ft,specularIntensityMap:Gt,transmission:X,transmissionMap:jt,thicknessMap:B,gradientMap:gt,opaque:v.transparent===!1&&v.blending===da&&v.alphaToCoverage===!1,alphaMap:nt,alphaTest:St,alphaHash:bt,combine:v.combine,mapUv:Rt&&p(v.map.channel),aoMapUv:st&&p(v.aoMap.channel),lightMapUv:at&&p(v.lightMap.channel),bumpMapUv:N&&p(v.bumpMap.channel),normalMapUv:ut&&p(v.normalMap.channel),displacementMapUv:Nt&&p(v.displacementMap.channel),emissiveMapUv:Lt&&p(v.emissiveMap.channel),metalnessMapUv:Ct&&p(v.metalnessMap.channel),roughnessMapUv:Qt&&p(v.roughnessMap.channel),anisotropyMapUv:Q&&p(v.anisotropyMap.channel),clearcoatMapUv:mt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&p(v.sheenRoughnessMap.channel),specularMapUv:xt&&p(v.specularMap.channel),specularColorMapUv:ft&&p(v.specularColorMap.channel),specularIntensityMapUv:Gt&&p(v.specularIntensityMap.channel),transmissionMapUv:jt&&p(v.transmissionMap.channel),thicknessMapUv:B&&p(v.thicknessMap.channel),alphaMapUv:nt&&p(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ut||O),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Rt||nt),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&ut===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Tt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:Rt&&v.map.isVideoTexture===!0&&me.getTransfer(v.map.colorSpace)===be,decodeVideoTextureEmissive:Lt&&v.emissiveMap.isVideoTexture===!0&&me.getTransfer(v.emissiveMap.colorSpace)===be,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bi,flipSided:v.side===Rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:rt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&v.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(g(w,v),S(w,v),w.push(s.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function A(v){let w=f[v.type],C;if(w){let D=Ms[w];C=W_.clone(D.uniforms)}else C=v.uniforms;return C}function x(v,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new OT(s,w,v,i),c.push(C),h.set(w,C)),C}function M(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:A,acquireProgram:x,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:T}}function kT(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function VT(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function hx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ux(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,m,g){let S=s[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},s[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=p,S.materialVariant=o(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=m,S.group=g),t++,S}function l(u,f,p,_,m,g,S){S.reversedDepth===!0&&(m=-m);let A=a(u,f,p,_,m,g);p.transmission>0?n.push(A):p.transparent===!0?i.push(A):e.push(A)}function c(u,f,p,_,m,g){let S=a(u,f,p,_,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||VT),n.length>1&&n.sort(f||hx),i.length>1&&i.sort(f||hx)}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function HT(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new ux,s.set(n,[o])):i>=r.length?(o=new ux,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function GT(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new ie};break;case"SpotLight":e={position:new F,direction:new F,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function WT(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var XT=0;function YT(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qT(s){let t=new GT,e=WT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,r=new Ae,o=new Ae;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,S=0,A=0,x=0,M=0,b=0,T=0,v=0,w=0,C=0;c.sort(YT);for(let L=0,V=c.length;L<V;L++){let I=c[L],U=I.color,H=I.intensity,k=I.distance,j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Sr?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*H,d+=U.g*H,u+=U.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],H);C++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,J=e.get(I);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=j;let wt=R.getViewportCount();for(let Tt=0;Tt<wt;Tt++)n.sunShadowMatrix[_+Tt]=R.getMatrix(Tt),n.sunShadowCascade[_+Tt]=R._cascadeData[Tt];_+=wt,p++}n.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,J=e.get(I);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize=R.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(U).multiplyScalar(H),W.distance=k,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[S]=W;let R=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,R.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[S]=R.matrix,I.castShadow){let J=e.get(I);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize=R.mapSize,n.spotShadow[S]=J,n.spotShadowMap[S]=j,T++}S++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(U).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=W,A++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let R=I.shadow,J=e.get(I);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize=R.mapSize,J.shadowCameraNear=R.camera.near,J.shadowCameraFar=R.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[x]=W,x++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==x||D.numSunShadows!==p||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==T||D.numSpotMaps!==v||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=x,D.numSunShadows=p,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=T,D.numSpotMaps=v,D.numLightProbes=C,n.version=XT++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let x=c[S];if(x.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),d++}else if(x.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),u++}else if(x.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function fx(s){let t=new qT(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ZT(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new fx(s),t.set(i,[a])):r>=o.length?(a=new fx(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var $T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,KT=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],QT=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],dx=new Ae,cc=new F,em=new F;function jT(s,t,e){let n=new sa,i=new pt,r=new pt,o=new He,a=new Qh,l=new jh,c={},h=e.maxTextureSize,d={[_r]:Rn,[Rn]:_r,[Bi]:Bi},u=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:$T,fragmentShader:JT}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Mn;p.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new qt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let g=this.type;this.render=function(b,T,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===r_&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jl);let w=s.getRenderTarget(),C=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(ys),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let V=g!==this.type;V&&T.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=b.length;I<U;I++){let H=b[I],k=H.shadow;if(k===void 0){ee("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let j=k.getFrameExtents();i.multiply(j),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,k.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===fa){if(H.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ci(i.x,i.y,{format:Sr,type:ji,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new dr(i.x,i.y,zi),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=ds,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Sn,k.map.depthTexture.magFilter=Sn}else H.isPointLight?(k.map=new of(i.x),k.map.depthTexture=new Wh(i.x,Qi)):(k.map=new ci(i.x,i.y),k.map.depthTexture=new dr(i.x,i.y,Qi)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=ds,this.type===Jl?(k.map.depthTexture.compareFunction=W?nf:ef,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Sn,k.map.depthTexture.magFilter=Sn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let R=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();H.isPointLight!==!0&&k.updateMatrices(H,v);for(let J=0;J<R;J++){let wt=k.getCamera(J);if(H.isPointLight){let Tt=k.camera,Xt=k.matrix,Ht=H.distance||Tt.far;Ht!==Tt.far&&(Tt.far=Ht,Tt.updateProjectionMatrix()),cc.setFromMatrixPosition(H.matrixWorld),Tt.position.copy(cc),em.copy(Tt.position),em.add(KT[J]),Tt.up.copy(QT[J]),Tt.lookAt(em),Tt.updateMatrixWorld(),Xt.makeTranslation(-cc.x,-cc.y,-cc.z),dx.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(dx,Tt.coordinateSystem,Tt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,J),s.clear();else{J===0&&(s.setRenderTarget(k.map),s.clear());let Tt=k.getViewport(J);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),L.viewport(o)}n=k.getFrustum(J),x(T,v,wt,H,this.type)}k.isPointLightShadow!==!0&&this.type===fa&&S(k,v),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(w,C,D)};function S(b,T){let v=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new ci(i.x,i.y,{format:Sr,type:ji}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,v,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,v,f,_,null)}function A(b,T,v,w){let C=null,D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=C.uuid,V=T.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let U=I[V];U===void 0&&(U=C.clone(),I[V]=U,T.addEventListener("dispose",M)),C=U}if(C.visible=T.visible,C.wireframe=T.wireframe,w===fa?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:d[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=s.properties.get(C);L.light=v}return C}function x(b,T,v,w,C){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===fa)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let V=t.update(b),I=b.material;if(Array.isArray(I)){let U=V.groups;for(let H=0,k=U.length;H<k;H++){let j=U[H],W=I[j.materialIndex];if(W&&W.visible){let R=A(b,W,w,C);b.onBeforeShadow(s,b,T,v,V,R,j),s.renderBufferDirect(v,null,V,R,b,j),b.onAfterShadow(s,b,T,v,V,R,j)}}}else if(I.visible){let U=A(b,I,w,C);b.onBeforeShadow(s,b,T,v,V,U,null),s.renderBufferDirect(v,null,V,U,b,null),b.onAfterShadow(s,b,T,v,V,U,null)}}let L=b.children;for(let V=0,I=L.length;V<I;V++)x(L[V],T,v,w,C)}function M(b){b.target.removeEventListener("dispose",M);for(let v in c){let w=c[v],C=b.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function tE(s,t){function e(){let B=!1,gt=new He,nt=null,St=new He(0,0,0,0);return{setMask:function(bt){nt!==bt&&!B&&(s.colorMask(bt,bt,bt,bt),nt=bt)},setLocked:function(bt){B=bt},setClear:function(bt,rt,ht,ot,Yt){Yt===!0&&(bt*=ot,rt*=ot,ht*=ot),gt.set(bt,rt,ht,ot),St.equals(gt)===!1&&(s.clearColor(bt,rt,ht,ot),St.copy(gt))},reset:function(){B=!1,nt=null,St.set(-1,0,0,0)}}}function n(){let B=!1,gt=!1,nt=null,St=null,bt=null;return{setReversed:function(rt){if(gt!==rt){let ht=t.get("EXT_clip_control");rt?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),gt=rt;let ot=bt;bt=null,this.setClear(ot)}},getReversed:function(){return gt},setTest:function(rt){rt?et(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(rt){nt!==rt&&!B&&(s.depthMask(rt),nt=rt)},setFunc:function(rt){if(gt&&(rt=F_[rt]),St!==rt){switch(rt){case Ph:s.depthFunc(s.NEVER);break;case Ih:s.depthFunc(s.ALWAYS);break;case Lh:s.depthFunc(s.LESS);break;case Jo:s.depthFunc(s.LEQUAL);break;case Dh:s.depthFunc(s.EQUAL);break;case Nh:s.depthFunc(s.GEQUAL);break;case Uh:s.depthFunc(s.GREATER);break;case Oh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=rt}},setLocked:function(rt){B=rt},setClear:function(rt){bt!==rt&&(bt=rt,gt&&(rt=1-rt),s.clearDepth(rt))},reset:function(){B=!1,nt=null,St=null,bt=null,gt=!1}}}function i(){let B=!1,gt=null,nt=null,St=null,bt=null,rt=null,ht=null,ot=null,Yt=null;return{setTest:function(lt){B||(lt?et(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function(lt){gt!==lt&&!B&&(s.stencilMask(lt),gt=lt)},setFunc:function(lt,Kt,Ft){(nt!==lt||St!==Kt||bt!==Ft)&&(s.stencilFunc(lt,Kt,Ft),nt=lt,St=Kt,bt=Ft)},setOp:function(lt,Kt,Ft){(rt!==lt||ht!==Kt||ot!==Ft)&&(s.stencilOp(lt,Kt,Ft),rt=lt,ht=Kt,ot=Ft)},setLocked:function(lt){B=lt},setClear:function(lt){Yt!==lt&&(s.clearStencil(lt),Yt=lt)},reset:function(){B=!1,gt=null,nt=null,St=null,bt=null,rt=null,ht=null,ot=null,Yt=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,S=null,A=null,x=null,M=null,b=null,T=null,v=new ie(0,0,0),w=0,C=!1,D=null,L=null,V=null,I=null,U=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=j>=2);let R=null,J={},wt=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),Xt=new He().fromArray(wt),Ht=new He().fromArray(Tt);function $t(B,gt,nt,St){let bt=new Uint8Array(4),rt=s.createTexture();s.bindTexture(B,rt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<nt;ht++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(gt+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return rt}let $={};$[s.TEXTURE_2D]=$t(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=$t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=$t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=$t(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(s.DEPTH_TEST),o.setFunc(Jo),N(!1),ut(xp),et(s.CULL_FACE),st(ys);function et(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function dt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function kt(B,gt){return u[B]!==gt?(s.bindFramebuffer(B,gt),u[B]=gt,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=gt),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function _t(B,gt){let nt=p,St=!1;if(B){nt=f.get(gt),nt===void 0&&(nt=[],f.set(gt,nt));let bt=B.textures;if(nt.length!==bt.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,ht=bt.length;rt<ht;rt++)nt[rt]=s.COLOR_ATTACHMENT0+rt;nt.length=bt.length,St=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,St=!0);St&&s.drawBuffers(nt)}function Rt(B){return _!==B?(s.useProgram(B),_=B,!0):!1}let Pt={[Hs]:s.FUNC_ADD,[o_]:s.FUNC_SUBTRACT,[a_]:s.FUNC_REVERSE_SUBTRACT};Pt[l_]=s.MIN,Pt[c_]=s.MAX;let K={[eo]:s.ZERO,[h_]:s.ONE,[u_]:s.SRC_COLOR,[Sp]:s.SRC_ALPHA,[__]:s.SRC_ALPHA_SATURATE,[m_]:s.DST_COLOR,[d_]:s.DST_ALPHA,[f_]:s.ONE_MINUS_SRC_COLOR,[Mp]:s.ONE_MINUS_SRC_ALPHA,[g_]:s.ONE_MINUS_DST_COLOR,[p_]:s.ONE_MINUS_DST_ALPHA,[x_]:s.CONSTANT_COLOR,[v_]:s.ONE_MINUS_CONSTANT_COLOR,[y_]:s.CONSTANT_ALPHA,[S_]:s.ONE_MINUS_CONSTANT_ALPHA};function st(B,gt,nt,St,bt,rt,ht,ot,Yt,lt){if(B===ys){m===!0&&(dt(s.BLEND),m=!1);return}if(m===!1&&(et(s.BLEND),m=!0),B!==du){if(B!==g||lt!==C){if((S!==Hs||M!==Hs)&&(s.blendEquation(s.FUNC_ADD),S=Hs,M=Hs),lt)switch(B){case da:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kl:s.blendFunc(s.ONE,s.ONE);break;case vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ne("WebGLState: Invalid blending: ",B);break}else switch(B){case da:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case vp:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yp:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",B);break}A=null,x=null,b=null,T=null,v.set(0,0,0),w=0,g=B,C=lt}return}bt=bt||gt,rt=rt||nt,ht=ht||St,(gt!==S||bt!==M)&&(s.blendEquationSeparate(Pt[gt],Pt[bt]),S=gt,M=bt),(nt!==A||St!==x||rt!==b||ht!==T)&&(s.blendFuncSeparate(K[nt],K[St],K[rt],K[ht]),A=nt,x=St,b=rt,T=ht),(ot.equals(v)===!1||Yt!==w)&&(s.blendColor(ot.r,ot.g,ot.b,Yt),v.copy(ot),w=Yt),g=B,C=!1}function at(B,gt){B.side===Bi?dt(s.CULL_FACE):et(s.CULL_FACE);let nt=B.side===Rn;gt&&(nt=!nt),N(nt),B.blending===da&&B.transparent===!1?st(ys):st(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let St=B.stencilWrite;a.setTest(St),St&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Lt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function N(B){D!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),D=B)}function ut(B){B!==i_?(et(s.CULL_FACE),B!==L&&(B===xp?s.cullFace(s.BACK):B===s_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),L=B}function Nt(B){B!==V&&(k&&s.lineWidth(B),V=B)}function Lt(B,gt,nt){B?(et(s.POLYGON_OFFSET_FILL),(I!==gt||U!==nt)&&(I=gt,U=nt,o.getReversed()&&(gt=-gt),s.polygonOffset(gt,nt))):dt(s.POLYGON_OFFSET_FILL)}function Ct(B){B?et(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function Qt(B){B===void 0&&(B=s.TEXTURE0+H-1),R!==B&&(s.activeTexture(B),R=B)}function O(B,gt,nt){nt===void 0&&(R===null?nt=s.TEXTURE0+H-1:nt=R);let St=J[nt];St===void 0&&(St={type:void 0,texture:void 0},J[nt]=St),(St.type!==B||St.texture!==gt)&&(R!==nt&&(s.activeTexture(nt),R=nt),s.bindTexture(B,gt||$[B]),St.type=B,St.texture=gt)}function ue(){let B=J[R];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Jt(){try{s.compressedTexImage2D(...arguments)}catch(B){ne("WebGLState:",B)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(B){ne("WebGLState:",B)}}function y(){try{s.texSubImage2D(...arguments)}catch(B){ne("WebGLState:",B)}}function G(){try{s.texSubImage3D(...arguments)}catch(B){ne("WebGLState:",B)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(B){ne("WebGLState:",B)}}function Q(){try{s.compressedTexSubImage3D(...arguments)}catch(B){ne("WebGLState:",B)}}function mt(){try{s.texStorage2D(...arguments)}catch(B){ne("WebGLState:",B)}}function ct(){try{s.texStorage3D(...arguments)}catch(B){ne("WebGLState:",B)}}function tt(){try{s.texImage2D(...arguments)}catch(B){ne("WebGLState:",B)}}function it(){try{s.texImage3D(...arguments)}catch(B){ne("WebGLState:",B)}}function vt(B){return d[B]!==void 0?d[B]:s.getParameter(B)}function Ot(B,gt){d[B]!==gt&&(s.pixelStorei(B,gt),d[B]=gt)}function yt(B){Xt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Xt.copy(B))}function xt(B){Ht.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Ht.copy(B))}function ft(B,gt){let nt=c.get(gt);nt===void 0&&(nt=new WeakMap,c.set(gt,nt));let St=nt.get(B);St===void 0&&(St=s.getUniformBlockIndex(gt,B.name),nt.set(B,St))}function Gt(B,gt){let St=c.get(gt).get(B);l.get(gt)!==St&&(s.uniformBlockBinding(gt,St,B.__bindingPointIndex),l.set(gt,St))}function jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,J={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,S=null,A=null,x=null,M=null,b=null,T=null,v=new ie(0,0,0),w=0,C=!1,D=null,L=null,V=null,I=null,U=null,Xt.set(0,0,s.canvas.width,s.canvas.height),Ht.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:dt,bindFramebuffer:kt,drawBuffers:_t,useProgram:Rt,setBlending:st,setMaterial:at,setFlipSided:N,setCullFace:ut,setLineWidth:Nt,setPolygonOffset:Lt,setScissorTest:Ct,activeTexture:Qt,bindTexture:O,unbindTexture:ue,compressedTexImage2D:Jt,compressedTexImage3D:P,texImage2D:tt,texImage3D:it,pixelStorei:Ot,getParameter:vt,updateUBOMapping:ft,uniformBlockBinding:Gt,texStorage2D:mt,texStorage3D:ct,texSubImage2D:y,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:yt,viewport:xt,reset:jt}}function eE(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return p?new OffscreenCanvas(P,y):Sl("canvas")}function m(P,y,G){let X=1,Q=Jt(P);if((Q.width>G||Q.height>G)&&(X=G/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let mt=Math.floor(X*Q.width),ct=Math.floor(X*Q.height);u===void 0&&(u=_(mt,ct));let tt=y?_(mt,ct):u;return tt.width=mt,tt.height=ct,tt.getContext("2d").drawImage(P,0,0,mt,ct),ee("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+mt+"x"+ct+")."),tt}else return"data"in P&&ee("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function g(P){return P.generateMipmaps}function S(P){s.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(P,y,G,X,Q,mt=!1){if(P!==null){if(s[P]!==void 0)return s[P];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ct;X&&(ct=t.get("EXT_texture_norm16"),ct||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=y;if(y===s.RED&&(G===s.FLOAT&&(tt=s.R32F),G===s.HALF_FLOAT&&(tt=s.R16F),G===s.UNSIGNED_BYTE&&(tt=s.R8),G===s.UNSIGNED_SHORT&&ct&&(tt=ct.R16_EXT),G===s.SHORT&&ct&&(tt=ct.R16_SNORM_EXT)),y===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(tt=s.R8UI),G===s.UNSIGNED_SHORT&&(tt=s.R16UI),G===s.UNSIGNED_INT&&(tt=s.R32UI),G===s.BYTE&&(tt=s.R8I),G===s.SHORT&&(tt=s.R16I),G===s.INT&&(tt=s.R32I)),y===s.RG&&(G===s.FLOAT&&(tt=s.RG32F),G===s.HALF_FLOAT&&(tt=s.RG16F),G===s.UNSIGNED_BYTE&&(tt=s.RG8),G===s.UNSIGNED_SHORT&&ct&&(tt=ct.RG16_EXT),G===s.SHORT&&ct&&(tt=ct.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(tt=s.RG8UI),G===s.UNSIGNED_SHORT&&(tt=s.RG16UI),G===s.UNSIGNED_INT&&(tt=s.RG32UI),G===s.BYTE&&(tt=s.RG8I),G===s.SHORT&&(tt=s.RG16I),G===s.INT&&(tt=s.RG32I)),y===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),G===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),G===s.UNSIGNED_INT&&(tt=s.RGB32UI),G===s.BYTE&&(tt=s.RGB8I),G===s.SHORT&&(tt=s.RGB16I),G===s.INT&&(tt=s.RGB32I)),y===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),G===s.UNSIGNED_INT&&(tt=s.RGBA32UI),G===s.BYTE&&(tt=s.RGBA8I),G===s.SHORT&&(tt=s.RGBA16I),G===s.INT&&(tt=s.RGBA32I)),y===s.RGB&&(G===s.UNSIGNED_SHORT&&ct&&(tt=ct.RGB16_EXT),G===s.SHORT&&ct&&(tt=ct.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(tt=s.R11F_G11F_B10F)),y===s.RGBA){let it=mt?yl:me.getTransfer(Q);G===s.FLOAT&&(tt=s.RGBA32F),G===s.HALF_FLOAT&&(tt=s.RGBA16F),G===s.UNSIGNED_BYTE&&(tt=it===be?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&ct&&(tt=ct.RGBA16_EXT),G===s.SHORT&&ct&&(tt=ct.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(P,y){let G;return P?y===null||y===Qi||y===ma?G=s.DEPTH24_STENCIL8:y===zi?G=s.DEPTH32F_STENCIL8:y===pa&&(G=s.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qi||y===ma?G=s.DEPTH_COMPONENT24:y===zi?G=s.DEPTH_COMPONENT32F:y===pa&&(G=s.DEPTH_COMPONENT16),G}function b(P,y){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==Cn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function T(P){let y=P.target;y.removeEventListener("dispose",T),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function v(P){let y=P.target;y.removeEventListener("dispose",v),D(y)}function w(P){let y=n.get(P);if(y.__webglInit===void 0)return;let G=P.source,X=f.get(G);if(X){let Q=X[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(P),Object.keys(X).length===0&&f.delete(G)}n.remove(P)}function C(P){let y=n.get(P);s.deleteTexture(y.__webglTexture);let G=P.source,X=f.get(G);delete X[y.__cacheKey],o.memory.textures--}function D(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let Q=0;Q<y.__webglFramebuffer[X].length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[X][Q]);else s.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)s.deleteFramebuffer(y.__webglFramebuffer[X]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let G=P.textures;for(let X=0,Q=G.length;X<Q;X++){let mt=n.get(G[X]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(G[X])}n.remove(P)}let L=0;function V(){L=0}function I(){return L}function U(P){L=P}function H(){let P=L;return P>=i.maxTextures&&ee("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function k(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function j(P,y){let G=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let X=P.image;if(X===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(G,P,y);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+y)}function W(P,y){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){dt(G,P,y);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+y)}function R(P,y){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){dt(G,P,y);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+y)}function J(P,y){let G=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){kt(G,P,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+y)}let wt={[Ko]:s.REPEAT,[us]:s.CLAMP_TO_EDGE,[Fh]:s.MIRRORED_REPEAT},Tt={[Sn]:s.NEAREST,[w_]:s.NEAREST_MIPMAP_NEAREST,[tc]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[_u]:s.LINEAR_MIPMAP_NEAREST,[vr]:s.LINEAR_MIPMAP_LINEAR},Xt={[C_]:s.NEVER,[D_]:s.ALWAYS,[R_]:s.LESS,[ef]:s.LEQUAL,[P_]:s.EQUAL,[nf]:s.GEQUAL,[I_]:s.GREATER,[L_]:s.NOTEQUAL};function Ht(P,y){if(y.type===zi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Cn||y.magFilter===_u||y.magFilter===tc||y.magFilter===vr||y.minFilter===Cn||y.minFilter===_u||y.minFilter===tc||y.minFilter===vr)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,wt[y.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,wt[y.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,wt[y.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Tt[y.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Tt[y.minFilter]),y.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Xt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Sn||y.minFilter!==tc&&y.minFilter!==vr||y.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $t(P,y){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",T));let X=y.source,Q=f.get(X);Q===void 0&&(Q={},f.set(X,Q));let mt=k(y);if(mt!==P.__cacheKey){Q[mt]===void 0&&(Q[mt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[mt].usedTimes++;let ct=Q[P.__cacheKey];ct!==void 0&&(Q[P.__cacheKey].usedTimes--,ct.usedTimes===0&&C(y)),P.__cacheKey=mt,P.__webglTexture=Q[mt].texture}return G}function $(P,y,G){return Math.floor(Math.floor(P/G)/y)}function et(P,y,G,X){let mt=P.updateRanges;if(mt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,G,X,y.data);else{mt.sort((Ot,yt)=>Ot.start-yt.start);let ct=0;for(let Ot=1;Ot<mt.length;Ot++){let yt=mt[ct],xt=mt[Ot],ft=yt.start+yt.count,Gt=$(xt.start,y.width,4),jt=$(yt.start,y.width,4);xt.start<=ft+1&&Gt===jt&&$(xt.start+xt.count-1,y.width,4)===Gt?yt.count=Math.max(yt.count,xt.start+xt.count-yt.start):(++ct,mt[ct]=xt)}mt.length=ct+1;let tt=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Ot=0,yt=mt.length;Ot<yt;Ot++){let xt=mt[Ot],ft=Math.floor(xt.start/4),Gt=Math.ceil(xt.count/4),jt=ft%y.width,B=Math.floor(ft/y.width),gt=Gt,nt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(s.UNPACK_SKIP_ROWS,B),e.texSubImage2D(s.TEXTURE_2D,0,jt,B,gt,nt,G,X,y.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,tt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function dt(P,y,G){let X=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=s.TEXTURE_3D);let Q=$t(P,y),mt=y.source;e.bindTexture(X,P.__webglTexture,s.TEXTURE0+G);let ct=n.get(mt);if(mt.version!==ct.__version||Q===!0){if(e.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let nt=me.getPrimaries(me.workingColorSpace),St=y.colorSpace===Gs?null:me.getPrimaries(y.colorSpace),bt=y.colorSpace===Gs||nt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let it=m(y.image,!1,i.maxTextureSize);it=ue(y,it);let vt=r.convert(y.format,y.colorSpace),Ot=r.convert(y.type),yt=x(y.internalFormat,vt,Ot,y.normalized,y.colorSpace,y.isVideoTexture);Ht(X,y);let xt,ft=y.mipmaps,Gt=y.isVideoTexture!==!0,jt=ct.__version===void 0||Q===!0,B=mt.dataReady,gt=b(y,it);if(y.isDepthTexture)yt=M(y.format===yr,y.type),jt&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,yt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,yt,it.width,it.height,0,vt,Ot,null));else if(y.isDataTexture)if(ft.length>0){Gt&&jt&&e.texStorage2D(s.TEXTURE_2D,gt,yt,ft[0].width,ft[0].height);for(let nt=0,St=ft.length;nt<St;nt++)xt=ft[nt],Gt?B&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,xt.width,xt.height,vt,Ot,xt.data):e.texImage2D(s.TEXTURE_2D,nt,yt,xt.width,xt.height,0,vt,Ot,xt.data);y.generateMipmaps=!1}else Gt?(jt&&e.texStorage2D(s.TEXTURE_2D,gt,yt,it.width,it.height),B&&et(y,it,vt,Ot)):e.texImage2D(s.TEXTURE_2D,0,yt,it.width,it.height,0,vt,Ot,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Gt&&jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,yt,ft[0].width,ft[0].height,it.depth);for(let nt=0,St=ft.length;nt<St;nt++)if(xt=ft[nt],y.format!==ki)if(vt!==null)if(Gt){if(B)if(y.layerUpdates.size>0){let bt=Wp(xt.width,xt.height,y.format,y.type);for(let rt of y.layerUpdates){let ht=xt.data.subarray(rt*bt/xt.data.BYTES_PER_ELEMENT,(rt+1)*bt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,rt,xt.width,xt.height,1,vt,ht)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,it.depth,vt,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,yt,xt.width,xt.height,it.depth,0,xt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,it.depth,vt,Ot,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,yt,xt.width,xt.height,it.depth,0,vt,Ot,xt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Gt&&jt&&e.texStorage2D(s.TEXTURE_2D,gt,yt,ft[0].width,ft[0].height);for(let nt=0,St=ft.length;nt<St;nt++)xt=ft[nt],y.format!==ki?vt!==null?Gt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,yt,xt.width,xt.height,0,xt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?B&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,xt.width,xt.height,vt,Ot,xt.data):e.texImage2D(s.TEXTURE_2D,nt,yt,xt.width,xt.height,0,vt,Ot,xt.data)}else if(y.isDataArrayTexture)if(Gt){if(jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,yt,it.width,it.height,it.depth),B)if(y.layerUpdates.size>0){let nt=Wp(it.width,it.height,y.format,y.type);for(let St of y.layerUpdates){let bt=it.data.subarray(St*nt/it.data.BYTES_PER_ELEMENT,(St+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,St,it.width,it.height,1,vt,Ot,bt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,Ot,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,it.width,it.height,it.depth,0,vt,Ot,it.data);else if(y.isData3DTexture)Gt?(jt&&e.texStorage3D(s.TEXTURE_3D,gt,yt,it.width,it.height,it.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,Ot,it.data)):e.texImage3D(s.TEXTURE_3D,0,yt,it.width,it.height,it.depth,0,vt,Ot,it.data);else if(y.isFramebufferTexture){if(jt)if(Gt)e.texStorage2D(s.TEXTURE_2D,gt,yt,it.width,it.height);else{let nt=it.width,St=it.height;for(let bt=0;bt<gt;bt++)e.texImage2D(s.TEXTURE_2D,bt,yt,nt,St,0,vt,Ot,null),nt>>=1,St>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let nt=s.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),d.add(y),nt.onpaint=St=>{let bt=St.changedElements;for(let rt of d)bt.includes(rt.image)&&(rt.needsUpdate=!0)},nt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let bt=s.RGBA,rt=s.RGBA,ht=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,bt,rt,ht,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ft.length>0){if(Gt&&jt){let nt=Jt(ft[0]);e.texStorage2D(s.TEXTURE_2D,gt,yt,nt.width,nt.height)}for(let nt=0,St=ft.length;nt<St;nt++)xt=ft[nt],Gt?B&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,vt,Ot,xt):e.texImage2D(s.TEXTURE_2D,nt,yt,vt,Ot,xt);y.generateMipmaps=!1}else if(Gt){if(jt){let nt=Jt(it);e.texStorage2D(s.TEXTURE_2D,gt,yt,nt.width,nt.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Ot,it)}else e.texImage2D(s.TEXTURE_2D,0,yt,vt,Ot,it);g(y)&&S(X),ct.__version=mt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function kt(P,y,G){if(y.image.length!==6)return;let X=$t(P,y),Q=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);let mt=n.get(Q);if(Q.version!==mt.__version||X===!0){e.activeTexture(s.TEXTURE0+G);let ct=me.getPrimaries(me.workingColorSpace),tt=y.colorSpace===Gs?null:me.getPrimaries(y.colorSpace),it=y.colorSpace===Gs||ct===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let vt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ot=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let rt=0;rt<6;rt++)!vt&&!Ot?yt[rt]=m(y.image[rt],!0,i.maxCubemapSize):yt[rt]=Ot?y.image[rt].image:y.image[rt],yt[rt]=ue(y,yt[rt]);let xt=yt[0],ft=r.convert(y.format,y.colorSpace),Gt=r.convert(y.type),jt=x(y.internalFormat,ft,Gt,y.normalized,y.colorSpace),B=y.isVideoTexture!==!0,gt=mt.__version===void 0||X===!0,nt=Q.dataReady,St=b(y,xt);Ht(s.TEXTURE_CUBE_MAP,y);let bt;if(vt){B&&gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,St,jt,xt.width,xt.height);for(let rt=0;rt<6;rt++){bt=yt[rt].mipmaps;for(let ht=0;ht<bt.length;ht++){let ot=bt[ht];y.format!==ki?ft!==null?B?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht,0,0,ot.width,ot.height,ft,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht,jt,ot.width,ot.height,0,ot.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht,0,0,ot.width,ot.height,ft,Gt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht,jt,ot.width,ot.height,0,ft,Gt,ot.data)}}}else{if(bt=y.mipmaps,B&&gt){bt.length>0&&St++;let rt=Jt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,St,jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ot){B?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,yt[rt].width,yt[rt].height,ft,Gt,yt[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,yt[rt].width,yt[rt].height,0,ft,Gt,yt[rt].data);for(let ht=0;ht<bt.length;ht++){let Yt=bt[ht].image[rt].image;B?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht+1,0,0,Yt.width,Yt.height,ft,Gt,Yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht+1,jt,Yt.width,Yt.height,0,ft,Gt,Yt.data)}}else{B?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,ft,Gt,yt[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,ft,Gt,yt[rt]);for(let ht=0;ht<bt.length;ht++){let ot=bt[ht];B?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht+1,0,0,ft,Gt,ot.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht+1,jt,ft,Gt,ot.image[rt])}}}g(y)&&S(s.TEXTURE_CUBE_MAP),mt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function _t(P,y,G,X,Q,mt){let ct=r.convert(G.format,G.colorSpace),tt=r.convert(G.type),it=x(G.internalFormat,ct,tt,G.normalized,G.colorSpace),vt=n.get(y),Ot=n.get(G);if(Ot.__renderTarget=y,!vt.__hasExternalTextures){let yt=Math.max(1,y.width>>mt),xt=Math.max(1,y.height>>mt);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,mt,it,yt,xt,y.depth,0,ct,tt,null):e.texImage2D(Q,mt,it,yt,xt,0,ct,tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Qt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Q,Ot.__webglTexture,0,Ct(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Q,Ot.__webglTexture,mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(P,y,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),y.depthBuffer){let X=y.depthTexture,Q=X&&X.isDepthTexture?X.type:null,mt=M(y.stencilBuffer,Q),ct=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Qt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(y),mt,y.width,y.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(y),mt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,mt,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,P)}else{let X=y.textures;for(let Q=0;Q<X.length;Q++){let mt=X[Q],ct=r.convert(mt.format,mt.colorSpace),tt=r.convert(mt.type),it=x(mt.internalFormat,ct,tt,mt.normalized,mt.colorSpace);Qt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(y),it,y.width,y.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(y),it,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,it,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(P,y,G){let X=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,y.depthTexture);let vt=r.convert(y.depthTexture.format),Ot=r.convert(y.depthTexture.type),yt;y.depthTexture.format===ds?yt=s.DEPTH_COMPONENT24:y.depthTexture.format===yr&&(yt=s.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,yt,y.width,y.height,0,vt,Ot,null)}}else j(y.depthTexture,0);let mt=Q.__webglTexture,ct=Ct(y),tt=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,it=y.depthTexture.format===yr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===ds)Qt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,tt,mt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,it,tt,mt,0);else if(y.depthTexture.format===yr)Qt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,tt,mt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,it,tt,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(P){let y=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=X}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)Pt(y.__webglFramebuffer[X],P,X);else{let X=P.texture.mipmaps;X&&X.length>0?Pt(y.__webglFramebuffer[0],P,0):Pt(y.__webglFramebuffer,P,0)}else if(G){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=s.createRenderbuffer(),Rt(y.__webglDepthbuffer[X],P,!1);else{let Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=y.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,mt)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Rt(y.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,mt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(P,y,G){let X=n.get(P);y!==void 0&&_t(X.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&K(P)}function at(P){let y=P.texture,G=n.get(P),X=n.get(y);P.addEventListener("dispose",v);let Q=P.textures,mt=P.isWebGLCubeRenderTarget===!0,ct=Q.length>1;if(ct||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=y.version,o.memory.textures++),mt){G.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[tt]=[];for(let it=0;it<y.mipmaps.length;it++)G.__webglFramebuffer[tt][it]=s.createFramebuffer()}else G.__webglFramebuffer[tt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let tt=0;tt<y.mipmaps.length;tt++)G.__webglFramebuffer[tt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(ct)for(let tt=0,it=Q.length;tt<it;tt++){let vt=n.get(Q[tt]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&Qt(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let tt=0;tt<Q.length;tt++){let it=Q[tt];G.__webglColorRenderbuffer[tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[tt]);let vt=r.convert(it.format,it.colorSpace),Ot=r.convert(it.type),yt=x(it.internalFormat,vt,Ot,it.normalized,it.colorSpace,P.isXRRenderTarget===!0),xt=Ct(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,yt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,G.__webglColorRenderbuffer[tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,y);for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)_t(G.__webglFramebuffer[tt][it],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else _t(G.__webglFramebuffer[tt],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);g(y)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let tt=0,it=Q.length;tt<it;tt++){let vt=Q[tt],Ot=n.get(vt),yt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ot.__webglTexture),Ht(yt,vt),_t(G.__webglFramebuffer,P,vt,s.COLOR_ATTACHMENT0+tt,yt,0),g(vt)&&S(yt)}e.unbindTexture()}else{let tt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,X.__webglTexture),Ht(tt,y),y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)_t(G.__webglFramebuffer[it],P,y,s.COLOR_ATTACHMENT0,tt,it);else _t(G.__webglFramebuffer,P,y,s.COLOR_ATTACHMENT0,tt,0);g(y)&&S(tt),e.unbindTexture()}P.depthBuffer&&K(P)}function N(P){let y=P.textures;for(let G=0,X=y.length;G<X;G++){let Q=y[G];if(g(Q)){let mt=A(P),ct=n.get(Q).__webglTexture;e.bindTexture(mt,ct),S(mt),e.unbindTexture()}}}let ut=[],Nt=[];function Lt(P){if(P.samples>0){if(Qt(P)===!1){let y=P.textures,G=P.width,X=P.height,Q=s.COLOR_BUFFER_BIT,mt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(P),tt=y.length>1;if(tt)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let it=P.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[vt]);let Ot=n.get(y[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ot,0)}s.blitFramebuffer(0,0,G,X,0,0,G,X,Q,s.NEAREST),l===!0&&(ut.length=0,Nt.length=0,ut.push(s.COLOR_ATTACHMENT0+vt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ut.push(mt),Nt.push(mt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Nt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),tt)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,ct.__webglColorRenderbuffer[vt]);let Ot=n.get(y[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ct(P){return Math.min(i.maxSamples,P.samples)}function Qt(P){let y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(P){let y=o.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function ue(P,y){let G=P.colorSpace,X=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==vl&&G!==Gs&&(me.getTransfer(G)===be?(X!==ki||Q!==fi)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",G)),y}function Jt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.getTextureUnits=I,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=R,this.setTextureCube=J,this.rebindTextures=st,this.setupRenderTarget=at,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function nE(s,t){function e(n,i=Gs){let r,o=me.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===vu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===yu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Lp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Dp)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pp)return s.BYTE;if(n===Ip)return s.SHORT;if(n===pa)return s.UNSIGNED_SHORT;if(n===xu)return s.INT;if(n===Qi)return s.UNSIGNED_INT;if(n===zi)return s.FLOAT;if(n===ji)return s.HALF_FLOAT;if(n===Np)return s.ALPHA;if(n===Up)return s.RGB;if(n===ki)return s.RGBA;if(n===ds)return s.DEPTH_COMPONENT;if(n===yr)return s.DEPTH_STENCIL;if(n===Su)return s.RED;if(n===Mu)return s.RED_INTEGER;if(n===Sr)return s.RG;if(n===bu)return s.RG_INTEGER;if(n===wu)return s.RGBA_INTEGER;if(n===ec||n===nc||n===ic||n===sc)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ec)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ic)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tu||n===Eu||n===Au||n===Cu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Au)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ru||n===Pu||n===Iu||n===Lu||n===Du||n===rc||n===Nu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ru||n===Pu)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Iu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lu)return r.COMPRESSED_R11_EAC;if(n===Du)return r.COMPRESSED_SIGNED_R11_EAC;if(n===rc)return r.COMPRESSED_RG11_EAC;if(n===Nu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uu||n===Ou||n===Fu||n===Bu||n===zu||n===ku||n===Vu||n===Hu||n===Gu||n===Wu||n===Xu||n===Yu||n===qu||n===Zu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ou)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ku)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zu)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$u||n===Ju||n===Ku)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$u)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ju)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ku)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qu||n===ju||n===oc||n===tf)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ju)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ma?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var iE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Nl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ti({vertexShader:iE,fragmentShader:sE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hm=class extends ps{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new cm,g={},S=e.getContextAttributes(),A=null,x=null,M=[],b=[],T=new pt,v=null,w=null,C=new An;C.viewport=new He;let D=new An;D.viewport=new He;let L=[C,D],V=new uu,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=M[$];return et===void 0&&(et=new na,M[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=M[$];return et===void 0&&(et=new na,M[$]=et),et.getGripSpace()},this.getHand=function($){let et=M[$];return et===void 0&&(et=new na,M[$]=et),et.getHandSpace()};function H($){let et=b.indexOf($.inputSource);if(et===-1)return;let dt=M[et];dt!==void 0&&(dt.update($.inputSource,$.frame,c||o),dt.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",j);for(let $=0;$<M.length;$++){let et=b[$];et!==null&&(b[$]=null,M[$].disconnect(et))}I=null,U=null,m.reset();for(let $ in g)delete g[$];if(t.setRenderTarget(A),f=null,u=null,d=null,i=null,x=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(T.width,T.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",k),i.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,kt=null,_t=null;S.depth&&(_t=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=S.stencil?yr:ds,kt=S.stencil?ma:Qi);let Rt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Rt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new ci(u.textureWidth,u.textureHeight,{format:ki,type:fi,depthTexture:new dr(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let dt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ci(f.framebufferWidth,f.framebufferHeight,{format:ki,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j($){for(let et=0;et<$.removed.length;et++){let dt=$.removed[et],kt=b.indexOf(dt);kt>=0&&(b[kt]=null,M[kt].disconnect(dt))}for(let et=0;et<$.added.length;et++){let dt=$.added[et],kt=b.indexOf(dt);if(kt===-1){for(let Rt=0;Rt<M.length;Rt++)if(Rt>=b.length){b.push(dt),kt=Rt;break}else if(b[Rt]===null){b[Rt]=dt,kt=Rt;break}if(kt===-1)break}let _t=M[kt];_t&&_t.connect(dt)}}let W=new F,R=new F;function J($,et,dt){W.setFromMatrixPosition(et.matrixWorld),R.setFromMatrixPosition(dt.matrixWorld);let kt=W.distanceTo(R),_t=et.projectionMatrix.elements,Rt=dt.projectionMatrix.elements,Pt=_t[14]/(_t[10]-1),K=_t[14]/(_t[10]+1),st=(_t[9]+1)/_t[5],at=(_t[9]-1)/_t[5],N=(_t[8]-1)/_t[0],ut=(Rt[8]+1)/Rt[0],Nt=Pt*N,Lt=Pt*ut,Ct=kt/(-N+ut),Qt=Ct*-N;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Qt),$.translateZ(Ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_t[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let O=Pt+Ct,ue=K+Ct,Jt=Nt-Qt,P=Lt+(kt-Qt),y=st*K/ue*O,G=at*K/ue*O;$.projectionMatrix.makePerspective(Jt,P,y,G,O,ue),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function wt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let et=$.near,dt=$.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),V.near=D.near=C.near=et,V.far=D.far=C.far=dt,(I!==V.near||U!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,U=V.far),V.layers.mask=$.layers.mask|6,C.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let kt=$.parent,_t=V.cameras;wt(V,kt);for(let Rt=0;Rt<_t.length;Rt++)wt(_t[Rt],kt);_t.length===2?J(V,C,D):V.projectionMatrix.copy(C.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),Tt($,V,kt)};function Tt($,et,dt){dt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(dt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ta*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function($){return g[$]};let Xt=null;function Ht($,et){if(h=et.getViewerPose(c||o),p=et,h!==null){let dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let kt=!1;dt.length!==V.cameras.length&&(V.cameras.length=0,kt=!0);for(let K=0;K<dt.length;K++){let st=dt[K],at=null;if(f!==null)at=f.getViewport(st);else{let ut=d.getViewSubImage(u,st);at=ut.viewport,K===0&&(t.setRenderTargetTextures(x,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(x))}let N=L[K];N===void 0&&(N=new An,N.layers.enable(K),N.viewport=new He,L[K]=N),N.matrix.fromArray(st.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(st.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(at.x,at.y,at.width,at.height),K===0&&(V.matrix.copy(N.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),kt===!0&&V.cameras.push(N)}let _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let K=d.getDepthInformation(dt[0]);K&&K.isValid&&K.texture&&m.init(K,i.renderState)}if(_t&&_t.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let K=0;K<dt.length;K++){let st=dt[K].camera;if(st){let at=g[st];at||(at=new Nl,g[st]=at);let N=d.getCameraImage(st);at.sourceTexture=N}}}}for(let dt=0;dt<M.length;dt++){let kt=b[dt],_t=M[dt];kt!==null&&_t!==void 0&&_t.update(kt,et,c||o)}Xt&&Xt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}let $t=new px;$t.setAnimationLoop(Ht),this.setAnimationLoop=function($){Xt=$},this.dispose=function(){}}},rE=new Ae,yx=new re;yx.set(-1,0,0,0,1,0,0,0,1);function oE(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Vp(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,S,A,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,S,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Rn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Rn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let S=t.get(g),A=S.envMap,x=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(rE.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yx),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=A*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,S){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aE(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let b=M.program;n.uniformBlockBinding(x,b)}function c(x,M){let b=i[x.id];b===void 0&&(m(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",S));let T=M.program;n.updateUBOMapping(x,T);let v=t.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){let M=d();x.__bindingPointIndex=M;let b=s.createBuffer(),T=x.__size,v=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,T,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,b),b}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let M=i[x.id],b=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let v=0,w=b.length;v<w;v++){let C=b[v];if(Array.isArray(C))for(let D=0,L=C.length;D<L;D++)f(C[D],v,D,T);else f(C,v,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,M,b,T){if(_(x,M,b,T)===!0){let v=x.__offset,w=x.value;if(Array.isArray(w)){let C=0;for(let D=0;D<w.length;D++){let L=w[D],V=g(L);p(L,x.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,x.__data)}}function p(x,M,b){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,b)}function _(x,M,b,T){let v=x.value,w=M+"_"+b;if(T[w]===void 0)return typeof v=="number"||typeof v=="boolean"?T[w]=v:ArrayBuffer.isView(v)?T[w]=v.slice():T[w]=v.clone(),!0;{let C=T[w];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return T[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(x){let M=x.uniforms,b=0,T=16;for(let w=0,C=M.length;w<C;w++){let D=Array.isArray(M[w])?M[w]:[M[w]];for(let L=0,V=D.length;L<V;L++){let I=D[L],U=Array.isArray(I.value)?I.value:[I.value];for(let H=0,k=U.length;H<k;H++){let j=U[H],W=g(j),R=b%T,J=R%W.boundary,wt=R+J;b+=J,wt!==0&&T-wt<W.storage&&(b+=T-wt),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=W.storage}}}let v=b%T;return v>0&&(b+=T-v),x.__size=b,x.__cache={},this}function g(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",x),M}function S(x){let M=x.target;M.removeEventListener("dispose",S);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function A(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:A}}var lE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ss=null;function cE(){return Ss===null&&(Ss=new Rl(lE,16,16,Sr,ji),Ss.name="DFG_LUT",Ss.minFilter=Cn,Ss.magFilter=Cn,Ss.wrapS=us,Ss.wrapT=us,Ss.generateMipmaps=!1,Ss.needsUpdate=!0),Ss}var af=class{constructor(t={}){let{canvas:e=N_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=fi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,m=new Set([wu,bu,Mu]),g=new Set([fi,Qi,pa,ma,vu,yu]),S=new Uint32Array(4),A=new Int32Array(4),x=new F,M=null,b=null,T=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,L=null,V=null,I=null,U=null;this._outputColorSpace=Vn;let H=0,k=0,j=null,W=-1,R=null,J=new He,wt=new He,Tt=null,Xt=new ie(0),Ht=0,$t=e.width,$=e.height,et=1,dt=null,kt=null,_t=new He(0,0,$t,$),Rt=new He(0,0,$t,$),Pt=!1,K=new sa,st=!1,at=!1,N=new Ae,ut=new F,Nt=new He,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Qt(){return j===null?et:1}let O=n;function ue(E,z){return e.getContext(E,z)}let Jt,P,y,G,X,Q,mt,ct,tt,it,vt,Ot,yt,xt,ft,Gt,jt,B,gt,nt,St,bt,rt;try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Yt,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",Kt,!1),O===null){let z="webgl2";if(O=ue(z,E),O===null)throw ue(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(E){throw e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),ne("WebGLRenderer: "+E.message),E}function ht(){Jt=new gw(O),Jt.init(),St=new nE(O,Jt),P=new ow(O,Jt,t,St),y=new tE(O,Jt),P.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),V=O.createFramebuffer(),I=O.createFramebuffer(),U=O.createFramebuffer(),G=new vw(O),X=new kT,Q=new eE(O,Jt,y,X,P,St,G),mt=new mw(C),ct=new SM(O),bt=new sw(O,ct),tt=new _w(O,ct,G,bt),it=new Sw(O,tt,ct,bt,G),B=new yw(O,P,Q),ft=new aw(X),vt=new zT(C,mt,Jt,P,bt,ft),Ot=new oE(C,X),yt=new HT,xt=new ZT(Jt),jt=new iw(C,mt,y,it,p,l),Gt=new jT(C,it,P),rt=new aE(O,G,P,y),gt=new rw(O,Jt,G),nt=new xw(O,Jt,G),G.programs=vt.programs,C.capabilities=P,C.extensions=Jt,C.properties=X,C.renderLists=yt,C.shadowMap=Gt,C.state=y,C.info=G}_!==fi&&(w=new bw(_,e.width,e.height,a,i,r));let ot=new hm(C,O);this.xr=ot,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=Jt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Jt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize($t,$,!1))},this.getSize=function(E){return E.set($t,$)},this.setSize=function(E,z,Z=!0){if(ot.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=E,$=z,e.width=Math.floor(E*et),e.height=Math.floor(z*et),Z===!0&&(e.style.width=E+"px",e.style.height=z+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set($t*et,$*et).floor()},this.setDrawingBufferSize=function(E,z,Z){$t=E,$=z,et=Z,e.width=Math.floor(E*Z),e.height=Math.floor(z*Z),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(_===fi){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,z,Z,Y){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,z,Z,Y),y.viewport(J.copy(_t).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,z,Z,Y){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,z,Z,Y),y.scissor(wt.copy(Rt).multiplyScalar(et).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(E){y.setScissorTest(Pt=E)},this.setOpaqueSort=function(E){dt=E},this.setTransparentSort=function(E){kt=E},this.getClearColor=function(E){return E.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,Z=!0){let Y=0;if(E){let q=!1;if(j!==null){let Mt=j.texture.format;q=m.has(Mt)}if(q){let Mt=j.texture.type,Dt=g.has(Mt),At=jt.getClearColor(),Bt=jt.getClearAlpha(),Wt=At.r,oe=At.g,pe=At.b;Dt?(S[0]=Wt,S[1]=oe,S[2]=pe,S[3]=Bt,O.clearBufferuiv(O.COLOR,0,S)):(A[0]=Wt,A[1]=oe,A[2]=pe,A[3]=Bt,O.clearBufferiv(O.COLOR,0,A))}else Y|=O.COLOR_BUFFER_BIT}z&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),jt.dispose(),yt.dispose(),xt.dispose(),X.dispose(),mt.dispose(),it.dispose(),bt.dispose(),rt.dispose(),vt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Fe),ot.removeEventListener("sessionend",Ce),ge.stop()};function Yt(E){E.preventDefault(),Ml("WebGLRenderer: Context Lost."),D=!0}function lt(){Ml("WebGLRenderer: Context Restored."),D=!1;let E=G.autoReset,z=Gt.enabled,Z=Gt.autoUpdate,Y=Gt.needsUpdate,q=Gt.type;ht(),G.autoReset=E,Gt.enabled=z,Gt.autoUpdate=Z,Gt.needsUpdate=Y,Gt.type=q}function Kt(E){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ft(E){let z=E.target;z.removeEventListener("dispose",Ft),se(z)}function se(E){nn(E),X.remove(E)}function nn(E){let z=X.get(E).programs;z!==void 0&&(z.forEach(function(Z){vt.releaseProgram(Z)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Z,Y,q,Mt){z===null&&(z=Lt);let Dt=q.isMesh&&q.matrixWorld.determinantAffine()<0,At=_n(E,z,Z,Y,q);y.setMaterial(Y,Dt);let Bt=Z.index,Wt=1;if(Y.wireframe===!0){if(Bt=tt.getWireframeAttribute(Z),Bt===void 0)return;Wt=2}let oe=Z.drawRange,pe=Z.attributes.position,zt=oe.start*Wt,Se=(oe.start+oe.count)*Wt;Mt!==null&&(zt=Math.max(zt,Mt.start*Wt),Se=Math.min(Se,(Mt.start+Mt.count)*Wt)),Bt!==null?(zt=Math.max(zt,0),Se=Math.min(Se,Bt.count)):pe!=null&&(zt=Math.max(zt,0),Se=Math.min(Se,pe.count));let rn=Se-zt;if(rn<0||rn===1/0)return;bt.setup(q,Y,At,Z,Bt);let Be,Re=gt;if(Bt!==null&&(Be=ct.get(Bt),Re=nt,Re.setIndex(Be)),q.isMesh)Y.wireframe===!0?(y.setLineWidth(Y.wireframeLinewidth*Qt()),Re.setMode(O.LINES)):Re.setMode(O.TRIANGLES);else if(q.isLine){let In=Y.linewidth;In===void 0&&(In=1),y.setLineWidth(In*Qt()),q.isLineSegments?Re.setMode(O.LINES):q.isLineLoop?Re.setMode(O.LINE_LOOP):Re.setMode(O.LINE_STRIP)}else q.isPoints?Re.setMode(O.POINTS):q.isSprite&&Re.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))Re.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let In=q._multiDrawStarts,It=q._multiDrawCounts,Xn=q._multiDrawCount,xe=Bt?ct.get(Bt).bytesPerElement:1,Ci=X.get(Y).currentProgram.getUniforms();for(let is=0;is<Xn;is++)Ci.setValue(O,"_gl_DrawID",is),Re.render(In[is]/xe,It[is])}else if(q.isInstancedMesh)Re.renderInstances(zt,rn,q.count);else if(Z.isInstancedBufferGeometry){let In=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,It=Math.min(Z.instanceCount,In);Re.renderInstances(zt,rn,It)}else Re.render(zt,rn)};function fe(E,z,Z,Y){L!==null&&E.isNodeMaterial&&L.setObject(Y,E),st===!0&&ft.setState(E,Z,!1),E.transparent===!0&&E.side===Bi&&E.forceSinglePass===!1?(E.side=Rn,E.needsUpdate=!0,qe(E,z,Y),E.side=_r,E.needsUpdate=!0,qe(E,z,Y),E.side=Bi):qe(E,z,Y)}this.compile=function(E,z,Z=null){Z===null&&(Z=E),L!==null&&L.renderStart(E,z,Z),b=xt.get(Z),b.init(z),v.push(b),Z.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),E!==Z&&E.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),at=this.localClippingEnabled,st=ft.init(this.clippingPlanes,at),st===!0&&ft.setGlobalState(this.clippingPlanes,z),L!==null&&Gt.render(b.state.shadowsArray,Z,z);let Y=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Mt=q.material;if(Mt)if(Array.isArray(Mt))for(let Dt=0;Dt<Mt.length;Dt++){let At=Mt[Dt];fe(At,Z,z,q),Y.add(At)}else fe(Mt,Z,z,q),Y.add(Mt)}),b=v.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(E,z,Z=null){let Y=this.compile(E,z,Z);return new Promise(q=>{function Mt(){if(Y.forEach(function(Dt){let Bt=X.get(Dt).currentProgram;(Bt===void 0||Bt.isReady())&&Y.delete(Dt)}),Y.size===0){q(E);return}setTimeout(Mt,10)}Jt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Oe=null;function gn(E){Oe&&Oe(E)}function Fe(){ge.stop()}function Ce(){ge.start()}let ge=new px;ge.setAnimationLoop(gn),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(E){Oe=E,ot.setAnimationLoop(E),E===null?ge.stop():ge.start()},ot.addEventListener("sessionstart",Fe),ot.addEventListener("sessionend",Ce),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(E,z);let Z=ot.enabled===!0&&ot.isPresenting===!0,Y=w!==null&&(j===null||Z)&&w.begin(C,j);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(z),z=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,z,j),b=xt.get(E,v.length),b.init(z),b.state.textureUnits=Q.getTextureUnits(),v.push(b),N.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(N,Ji,z.reversedDepth),at=this.localClippingEnabled,st=ft.init(this.clippingPlanes,at),M=yt.get(E,T.length),M.init(),T.push(M),ot.enabled===!0&&ot.isPresenting===!0){let Dt=C.xr.getDepthSensingMesh();Dt!==null&&Gn(Dt,z,-1/0,C.sortObjects)}Gn(E,z,0,C.sortObjects),M.finish(),L!==null&&L.updateLights(b.state.lightsArray),C.sortObjects===!0&&M.sort(dt,kt),Ct=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ct&&jt.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&ft.beginShadows();let q=b.state.shadowsArray;if(Gt.render(q,E,z),st===!0&&ft.endShadows(),(Y&&w.hasRenderPass())===!1){let Dt=M.opaque,At=M.transmissive;if(b.setupLights(),z.isArrayCamera){let Bt=z.cameras;if(At.length>0)for(let Wt=0,oe=Bt.length;Wt<oe;Wt++){let pe=Bt[Wt];Pn(Dt,At,E,pe)}Ct&&jt.render(E);for(let Wt=0,oe=Bt.length;Wt<oe;Wt++){let pe=Bt[Wt];Ne(M,E,pe,pe.viewport)}}else At.length>0&&Pn(Dt,At,E,z),Ct&&jt.render(E),Ne(M,E,z)}j!==null&&k===0&&(Q.updateMultisampleRenderTarget(j),Q.updateRenderTargetMipmap(j)),Y&&w.end(C),E.isScene===!0&&E.onAfterRender(C,E,z),bt.resetDefaultState(),W=-1,R=null,v.pop(),v.length>0?(b=v[v.length-1],Q.setTextureUnits(b.state.textureUnits),st===!0&&ft.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?M=T[T.length-1]:M=null,L!==null&&L.renderEnd()};function Gn(E,z,Z,Y){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(K)){Y&&Nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(N);let Dt=it.update(E),At=E.material;At.visible&&M.push(E,Dt,At,Z,Nt.z,null,z)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(K))){let Dt=it.update(E),At=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Nt.copy(E.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Nt.copy(Dt.boundingSphere.center)),Nt.applyMatrix4(E.matrixWorld).applyMatrix4(N)),Array.isArray(At)){let Bt=Dt.groups;for(let Wt=0,oe=Bt.length;Wt<oe;Wt++){let pe=Bt[Wt],zt=At[pe.materialIndex];zt&&zt.visible&&M.push(E,Dt,zt,Z,Nt.z,pe,z)}}else At.visible&&M.push(E,Dt,At,Z,Nt.z,null,z)}}let Mt=E.children;for(let Dt=0,At=Mt.length;Dt<At;Dt++)Gn(Mt[Dt],z,Z,Y)}function Ne(E,z,Z,Y){let{opaque:q,transmissive:Mt,transparent:Dt}=E;b.setupLightsView(Z),st===!0&&ft.setGlobalState(C.clippingPlanes,Z),Y&&y.viewport(J.copy(Y)),q.length>0&&Wn(q,z,Z),Mt.length>0&&Wn(Mt,z,Z),Dt.length>0&&Wn(Dt,z,Z),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Pn(E,z,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){let zt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new ci(1,1,{generateMipmaps:!0,type:zt?ji:fi,minFilter:vr,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Mt=b.state.transmissionRenderTarget[Y.id],Dt=Y.viewport||J;Mt.setSize(Dt.z*C.transmissionResolutionScale,Dt.w*C.transmissionResolutionScale);let At=C.getRenderTarget(),Bt=C.getActiveCubeFace(),Wt=C.getActiveMipmapLevel();C.setRenderTarget(Mt),C.getClearColor(Xt),Ht=C.getClearAlpha(),Ht<1&&C.setClearColor(16777215,.5),C.clear(),Ct&&jt.render(Z);let oe=C.toneMapping;C.toneMapping=Ki;let pe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),st===!0&&ft.setGlobalState(C.clippingPlanes,Y),Wn(E,Z,Y),Q.updateMultisampleRenderTarget(Mt),Q.updateRenderTargetMipmap(Mt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Se=0,rn=z.length;Se<rn;Se++){let Be=z[Se],{object:Re,geometry:In,material:It,group:Xn}=Be;if(It.side===Bi&&Re.layers.test(Y.layers)){let xe=It.side;It.side=Rn,It.needsUpdate=!0,sn(Re,Z,Y,In,It,Xn),It.side=xe,It.needsUpdate=!0,zt=!0}}zt===!0&&(Q.updateMultisampleRenderTarget(Mt),Q.updateRenderTargetMipmap(Mt))}C.setRenderTarget(At,Bt,Wt),C.setClearColor(Xt,Ht),pe!==void 0&&(Y.viewport=pe),C.toneMapping=oe}function Wn(E,z,Z){let Y=z.isScene===!0?z.overrideMaterial:null;for(let q=0,Mt=E.length;q<Mt;q++){let Dt=E[q],{object:At,geometry:Bt,group:Wt}=Dt,oe=Dt.material;oe.allowOverride===!0&&Y!==null&&(oe=Y),At.layers.test(Z.layers)&&sn(At,z,Z,Bt,oe,Wt)}}function sn(E,z,Z,Y,q,Mt){L!==null&&q.isNodeMaterial&&L.setObject(E,q),E.onBeforeRender(C,z,Z,Y,q,Mt),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(C,z,Z,Y,E,Mt),q.transparent===!0&&q.side===Bi&&q.forceSinglePass===!1?(q.side=Rn,q.needsUpdate=!0,C.renderBufferDirect(Z,z,Y,q,E,Mt),q.side=_r,q.needsUpdate=!0,C.renderBufferDirect(Z,z,Y,q,E,Mt),q.side=Bi):C.renderBufferDirect(Z,z,Y,q,E,Mt),E.onAfterRender(C,z,Z,Y,q,Mt)}function qe(E,z,Z){z.isScene!==!0&&(z=Lt);let Y=X.get(E),q=b.state.lights,Mt=b.state.shadowsArray,Dt=q.state.version,At=vt.getParameters(E,q.state,Mt,z,Z,b.state.lightProbeGridArray),Bt=vt.getProgramCacheKey(At),Wt=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let oe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=mt.get(E.envMap||Y.environment,oe),Y.envMapRotation=Y.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",Ft),Wt=new Map,Y.programs=Wt);let pe=Wt.get(Bt);if(pe!==void 0){if(Y.currentProgram===pe&&Y.lightsStateVersion===Dt)return ns(E,At),pe}else At.uniforms=vt.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,Z,At),E.onBeforeCompile(At,C),pe=vt.acquireProgram(At,Bt),Wt.set(Bt,pe),Y.uniforms=At.uniforms;let zt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(zt.clippingPlanes=ft.uniform),ns(E,At),Y.needsLights=Ai(E),Y.lightsStateVersion=Dt,Y.needsLights&&(zt.ambientLightColor.value=q.state.ambient,zt.lightProbe.value=q.state.probe,zt.sunLights.value=q.state.sun,zt.sunLightShadows.value=q.state.sunShadow,zt.directionalLights.value=q.state.directional,zt.directionalLightShadows.value=q.state.directionalShadow,zt.spotLights.value=q.state.spot,zt.spotLightShadows.value=q.state.spotShadow,zt.rectAreaLights.value=q.state.rectArea,zt.ltc_1.value=q.state.rectAreaLTC1,zt.ltc_2.value=q.state.rectAreaLTC2,zt.pointLights.value=q.state.point,zt.pointLightShadows.value=q.state.pointShadow,zt.hemisphereLights.value=q.state.hemi,zt.sunShadowMatrix.value=q.state.sunShadowMatrix,zt.sunShadowCascade.value=q.state.sunShadowCascade,zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,zt.spotLightMatrix.value=q.state.spotLightMatrix,zt.spotLightMap.value=q.state.spotLightMap,zt.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=pe,Y.uniformsList=null,pe}function un(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=xa.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function ns(E,z){let Z=X.get(E);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function ro(E,z){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let Z=0,Y=E.length;Z<Y;Z++){let q=E[Z];if(q.texture!==null&&q.boundingBox.containsPoint(x))return q}return null}function _n(E,z,Z,Y,q){z.isScene!==!0&&(z=Lt),Q.resetTextureUnits();let Mt=z.fog,Dt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,At=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:me.workingColorSpace,Bt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Wt=mt.get(Y.envMap||Dt,Bt),oe=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pe=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),zt=!!Z.morphAttributes.position,Se=!!Z.morphAttributes.normal,rn=!!Z.morphAttributes.color,Be=Ki;Y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Be=C.toneMapping);let Re=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,In=Re!==void 0?Re.length:0,It=X.get(Y),Xn=b.state.lights;if(st===!0&&(at===!0||E!==R)){let Ue=E===R&&Y.id===W;ft.setState(Y,E,Ue)}let xe=!1;Y.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Xn.state.version||It.outputColorSpace!==At||q.isBatchedMesh&&It.batching===!1||!q.isBatchedMesh&&It.batching===!0||q.isBatchedMesh&&It.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&It.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||q.isInstancedMesh&&It.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&It.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&It.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&It.instancingMorph===!1&&q.morphTexture!==null||It.envMap!==Wt||Y.fog===!0&&It.fog!==Mt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ft.numPlanes||It.numIntersection!==ft.numIntersection)||It.vertexAlphas!==oe||It.vertexTangents!==pe||It.morphTargets!==zt||It.morphNormals!==Se||It.morphColors!==rn||It.toneMapping!==Be||It.morphTargetsCount!==In||!!It.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,It.__version=Y.version);let Ci=It.currentProgram;xe===!0&&(Ci=qe(Y,z,q),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,Ci,It));let is=!1,Xs=!1,ao=!1,Ee=Ci.getUniforms(),Qe=It.uniforms;if(y.useProgram(Ci.program)&&(is=!0,Xs=!0,ao=!0),Y.id!==W&&(W=Y.id,Xs=!0),It.needsLights){let Ue=ro(b.state.lightProbeGridArray,q);It.lightProbeGrid!==Ue&&(It.lightProbeGrid=Ue,Xs=!0)}if(is||R!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ee.setValue(O,"projectionMatrix",E.projectionMatrix),Ee.setValue(O,"viewMatrix",E.matrixWorldInverse);let qs=Ee.map.cameraPosition;qs!==void 0&&qs.setValue(O,ut.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&Ee.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),R!==E&&(R=E,Xs=!0,ao=!0)}if(It.needsLights&&(Xn.state.sunShadowMap.length>0&&Ee.setValue(O,"sunShadowMap",Xn.state.sunShadowMap,Q),Xn.state.directionalShadowMap.length>0&&Ee.setValue(O,"directionalShadowMap",Xn.state.directionalShadowMap,Q),Xn.state.spotShadowMap.length>0&&Ee.setValue(O,"spotShadowMap",Xn.state.spotShadowMap,Q),Xn.state.pointShadowMap.length>0&&Ee.setValue(O,"pointShadowMap",Xn.state.pointShadowMap,Q)),q.isSkinnedMesh){Ee.setOptional(O,q,"bindMatrix"),Ee.setOptional(O,q,"bindMatrixInverse");let Ue=q.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ee.setValue(O,"boneTexture",Ue.boneTexture,Q))}q.isBatchedMesh&&(Ee.setOptional(O,q,"batchingTexture"),Ee.setValue(O,"batchingTexture",q._matricesTexture,Q),Ee.setOptional(O,q,"batchingIdTexture"),Ee.setValue(O,"batchingIdTexture",q._indirectTexture,Q),Ee.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Ee.setValue(O,"batchingColorTexture",q._colorsTexture,Q));let Ys=Z.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&B.update(q,Z,Ci),(Xs||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,Ee.setValue(O,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(Qe.envMapIntensity.value=z.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=cE()),Xs){if(Ee.setValue(O,"toneMappingExposure",C.toneMappingExposure),It.needsLights&&Ke(Qe,ao),Mt&&Y.fog===!0&&Ot.refreshFogUniforms(Qe,Mt),Ot.refreshMaterialUniforms(Qe,Y,et,$,b.state.transmissionRenderTarget[E.id]),It.needsLights&&It.lightProbeGrid){let Ue=It.lightProbeGrid;Qe.probesSH.value=Ue.texture,Qe.probesMin.value.copy(Ue.boundingBox.min),Qe.probesMax.value.copy(Ue.boundingBox.max),Qe.probesResolution.value.copy(Ue.resolution)}xa.upload(O,un(It),Qe,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(xa.upload(O,un(It),Qe,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(O,"center",q.center),Ee.setValue(O,"modelViewMatrix",q.modelViewMatrix),Ee.setValue(O,"normalMatrix",q.normalMatrix),Ee.setValue(O,"modelMatrix",q.matrixWorld),Y.uniformsGroups!==void 0){let Ue=Y.uniformsGroups;for(let qs=0,lo=Ue.length;qs<lo;qs++){let bm=Ue[qs];rt.update(bm,Ci),rt.bind(bm,Ci)}}return Ci}function Ke(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.sunLights.needsUpdate=z,E.sunLightShadows.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Ai(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(E,z,Z){let Y=X.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=z,X.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let Z=X.get(E);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Z=0){j=E,H=z,k=Z;let Y=null,q=!1,Mt=!1;if(E){let At=X.get(E);if(At.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,At.__webglFramebuffer),J.copy(E.viewport),wt.copy(E.scissor),Tt=E.scissorTest,y.viewport(J),y.scissor(wt),y.setScissorTest(Tt),W=-1;return}else if(At.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(At.__hasExternalTextures)Q.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let oe=E.depthTexture;if(At.__boundDepthTexture!==oe){if(oe!==null&&X.has(oe)&&(E.width!==oe.image.width||E.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}let Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Mt=!0);let Wt=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[z])?Y=Wt[z][Z]:Y=Wt[z],q=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?Y=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[Z]:Y=Wt,J.copy(E.viewport),wt.copy(E.scissor),Tt=E.scissorTest}else J.copy(_t).multiplyScalar(et).floor(),wt.copy(Rt).multiplyScalar(et).floor(),Tt=Pt;if(Z!==0&&(Y=V),y.bindFramebuffer(O.FRAMEBUFFER,Y)&&y.drawBuffers(E,Y),y.viewport(J),y.scissor(wt),y.setScissorTest(Tt),q){let At=X.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,At.__webglTexture,Z)}else if(Mt){let At=z;for(let Bt=0;Bt<E.textures.length;Bt++){let Wt=X.get(E.textures[Bt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Bt,Wt.__webglTexture,Z,At)}}else if(E!==null&&Z!==0){let At=X.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,Z)}W=-1};function oo(E){let z=X.get(E);return(z.__readFormat!==E.format||z.__readType!==E.type)&&(z.__readFormat=E.format,z.__readType=E.type,z.__formatReadable=P.textureFormatReadable(E.format),z.__typeReadable=P.textureTypeReadable(E.type)),z}this.readRenderTargetPixels=function(E,z,Z,Y,q,Mt,Dt,At=0){if(!(E&&E.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){y.bindFramebuffer(O.FRAMEBUFFER,Bt);try{let Wt=E.textures[At],oe=Wt.format,pe=Wt.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+At);let zt=oo(Wt);if(zt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Y&&Z>=0&&Z<=E.height-q&&O.readPixels(z,Z,Y,q,St.convert(oe),St.convert(pe),Mt)}finally{let Wt=j!==null?X.get(j).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(E,z,Z,Y,q,Mt,Dt,At=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(z>=0&&z<=E.width-Y&&Z>=0&&Z<=E.height-q){y.bindFramebuffer(O.FRAMEBUFFER,Bt);let Wt=E.textures[At],oe=Wt.format,pe=Wt.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+At);let zt=oo(Wt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Se),O.bufferData(O.PIXEL_PACK_BUFFER,Mt.byteLength,O.STREAM_READ),O.readPixels(z,Z,Y,q,St.convert(oe),St.convert(pe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let rn=j!==null?X.get(j).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,rn);let Be=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await O_(O,Be,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Se),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Mt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Se),O.deleteSync(Be),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,Z=0){let Y=Math.pow(2,-Z),q=Math.floor(E.image.width*Y),Mt=Math.floor(E.image.height*Y),Dt=z!==null?z.x:0,At=z!==null?z.y:0;Q.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Dt,At,q,Mt),y.unbindTexture()},this.copyTextureToTexture=function(E,z,Z=null,Y=null,q=0,Mt=0){let Dt,At,Bt,Wt,oe,pe,zt,Se,rn,Be=E.isCompressedTexture?E.mipmaps[Mt]:E.image;if(Z!==null)Dt=Z.max.x-Z.min.x,At=Z.max.y-Z.min.y,Bt=Z.isBox3?Z.max.z-Z.min.z:1,Wt=Z.min.x,oe=Z.min.y,pe=Z.isBox3?Z.min.z:0;else{let Qe=Math.pow(2,-q);Dt=Math.floor(Be.width*Qe),At=Math.floor(Be.height*Qe),E.isDataArrayTexture?Bt=Be.depth:E.isData3DTexture?Bt=Math.floor(Be.depth*Qe):Bt=1,Wt=0,oe=0,pe=0}Y!==null?(zt=Y.x,Se=Y.y,rn=Y.z):(zt=0,Se=0,rn=0);let Re=St.convert(z.format),In=St.convert(z.type),It;z.isData3DTexture?(Q.setTexture3D(z,0),It=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Q.setTexture2DArray(z,0),It=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(z,0),It=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let Xn=y.getParameter(O.UNPACK_ROW_LENGTH),xe=y.getParameter(O.UNPACK_IMAGE_HEIGHT),Ci=y.getParameter(O.UNPACK_SKIP_PIXELS),is=y.getParameter(O.UNPACK_SKIP_ROWS),Xs=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,Be.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Be.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Wt),y.pixelStorei(O.UNPACK_SKIP_ROWS,oe),y.pixelStorei(O.UNPACK_SKIP_IMAGES,pe);let ao=E.isDataArrayTexture||E.isData3DTexture,Ee=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let Qe=X.get(E),Ys=X.get(z),Ue=X.get(Qe.__renderTarget),qs=X.get(Ys.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,Ue.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,qs.__webglFramebuffer);for(let lo=0;lo<Bt;lo++)ao&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(E).__webglTexture,q,pe+lo),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(z).__webglTexture,Mt,rn+lo)),O.blitFramebuffer(Wt,oe,Dt,At,zt,Se,Dt,At,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||X.has(E)){let Qe=X.get(E),Ys=X.get(z);y.bindFramebuffer(O.READ_FRAMEBUFFER,I),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,U);for(let Ue=0;Ue<Bt;Ue++)ao?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qe.__webglTexture,q,pe+Ue):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Qe.__webglTexture,q),Ee?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ys.__webglTexture,Mt,rn+Ue):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ys.__webglTexture,Mt),q!==0?O.blitFramebuffer(Wt,oe,Dt,At,zt,Se,Dt,At,O.COLOR_BUFFER_BIT,O.NEAREST):Ee?O.copyTexSubImage3D(It,Mt,zt,Se,rn+Ue,Wt,oe,Dt,At):O.copyTexSubImage2D(It,Mt,zt,Se,Wt,oe,Dt,At);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ee?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(It,Mt,zt,Se,rn,Dt,At,Bt,Re,In,Be.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(It,Mt,zt,Se,rn,Dt,At,Bt,Re,Be.data):O.texSubImage3D(It,Mt,zt,Se,rn,Dt,At,Bt,Re,In,Be):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Mt,zt,Se,Dt,At,Re,In,Be.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Mt,zt,Se,Be.width,Be.height,Re,Be.data):O.texSubImage2D(O.TEXTURE_2D,Mt,zt,Se,Dt,At,Re,In,Be);y.pixelStorei(O.UNPACK_ROW_LENGTH,Xn),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Ci),y.pixelStorei(O.UNPACK_SKIP_ROWS,is),y.pixelStorei(O.UNPACK_SKIP_IMAGES,Xs),Mt===0&&z.generateMipmaps&&O.generateMipmap(It),y.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){H=0,k=0,j=null,y.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var hf=class extends Jr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ui;t.deleteAttribute("uv");let e=new Vs({side:Rn}),n=new Vs,i=new $l(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new qt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Il(t,n,6),a=new tn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new qt(t,Sa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new qt(t,Sa(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new qt(t,Sa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new qt(t,Sa(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new qt(t,Sa(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new qt(t,Sa(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Sa(s){return new Wl({color:0,emissive:16777215,emissiveIntensity:s})}var uc=new F;function Vi(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;uc.copy(t),uc[n]=0,uc.normalize();let c=.5*o/(o+a),h=1-uc.angleTo(s)/l;return Math.sign(uc[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Mr=class s extends ui{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new F,c=new F,h=new F(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,_=new F,m=.5/o;for(let g=0,S=0;g<d.length;g+=3,S+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),f[S+0]=Vi(_,c,"z","y",r,n),f[S+1]=1-Vi(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[S+0]=1-Vi(_,c,"z","y",r,n),f[S+1]=1-Vi(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[S+0]=1-Vi(_,c,"x","z",r,t),f[S+1]=Vi(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[S+0]=1-Vi(_,c,"x","z",r,t),f[S+1]=1-Vi(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[S+0]=1-Vi(_,c,"x","y",r,t),f[S+1]=1-Vi(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[S+0]=Vi(_,c,"x","y",r,t),f[S+1]=1-Vi(_,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var df=2.7,fm=.44;function pf(s,t,e){let n=document.createElement("canvas");n.width=s,n.height=t,e(n.getContext("2d"),s,t);let i=new Dl(n);return i.colorSpace=Vn,i}var um=s=>pf(256,256,(t,e)=>{let n=t.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);s.forEach(([i,r])=>n.addColorStop(i,r)),t.fillStyle=n,t.fillRect(0,0,e,e)});function uE(){let s=pf(128,128,(t,e)=>{t.fillStyle="#1a1b1e",t.fillRect(0,0,e,e);let n=8;for(let i=0;i<e;i+=n)for(let r=0;r<e;r+=n){let a=(r/n+i/n)%2===0?t.createLinearGradient(r,i,r+n,i):t.createLinearGradient(r,i,r,i+n);a.addColorStop(0,"#16171a"),a.addColorStop(.5,"#2c2e33"),a.addColorStop(1,"#16171a"),t.fillStyle=a,t.fillRect(r,i,n,n)}});return s.wrapS=s.wrapT=Ko,s.repeat.set(2,6),s}function uf(s,t,e=.38,n=2.7,i=0){let r=new Qr,o=80;for(let a=0;a<=o;a++){let l=a/o*Math.PI*2,c=Math.cos(l),h=Math.sin(l),d=s*Math.sign(c)*Math.pow(Math.abs(c),2/n),u=t*Math.sign(h)*Math.pow(Math.abs(h),2/n);d*=1-e*Math.max(0,u/t),a?r.lineTo(d,-(u+i)):r.moveTo(d,-(u+i))}return r}function ff(s,t,e,n){let i=new aa(s,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e*.9,bevelSegments:5,curveSegments:8});return i.rotateX(-Math.PI/2),i.translate(0,n+e,0),i}var mf=class{constructor(t){this.canvas=t;let e=this.renderer=new af({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance",premultipliedAlpha:!0});e.setClearColor(0,0),e.toneMapping=Ql,e.toneMappingExposure=1.05,e.outputColorSpace=Vn,this.scene=new Jr;let n=new va(e);this.scene.environment=n.fromScene(new hf,.04).texture,this.camera=new An(28,1,.01,200),this.camera.position.set(0,0,14);let i=new ua(16777215,2.2);i.position.set(-4,6,5);let r=this.rim=new ua(16742981,3);r.position.set(5,2,-6);let o=new Yl(16777215,2236962,.6);this.scene.add(i,r,o),this.stage=new cn,this.craft=new cn,this.pivot=new cn,this.stage.add(this.craft),this.craft.add(this.pivot),this.scene.add(this.stage),this.parts=[],this.anchors={},this.props=[],this.leds=[],this.build(),this.shadow=new qt(new vs(3.4,3.4),new hi({map:um([[0,"rgba(0,0,0,.55)"],[.45,"rgba(0,0,0,.2)"],[1,"rgba(0,0,0,0)"]]),transparent:!0,depthWrite:!1,opacity:0})),this.shadow.rotation.x=-Math.PI/2,this.stage.add(this.shadow),this.buildPad(),this.state={x:0,y:0,s:400,yaw:0,pitch:0,roll:0,tilt:.35,explode:0,prop:1,shadow:0,lift:0,lens:0,vis:1,pad:0,padX:0,padY:0,padS:0,padTilt:.5,padGlow:0},this.time=0,this.propAngle=0,this.flip=0,this.color=new ie("#1b1c1f"),this.targetColor=this.color.clone(),this.ledColor=new ie("#ff4a17"),this.resize()}build(){let t=this.pivot,e=this.mat={shell:new Fi({color:"#1b1c1f",roughness:.32,metalness:.25,clearcoat:.8,clearcoatRoughness:.2}),body:new Fi({color:"#111214",roughness:.55,metalness:.2}),carbon:new Fi({map:uE(),roughness:.38,metalness:.35,clearcoat:.5}),accent:new Fi({color:"#ff4a17",roughness:.35,metalness:.1,emissive:"#ff2a00",emissiveIntensity:.08}),metal:new Fi({color:"#2b2c30",roughness:.28,metalness:.9}),glass:new Fi({color:"#050507",roughness:.04,metalness:1}),lens:new Fi({color:"#08080c",roughness:.02,metalness:.9,iridescence:1,iridescenceIOR:1.8,iridescenceThicknessRange:[180,700],clearcoat:1}),blade:new Fi({color:"#16171a",roughness:.45,metalness:.1,transparent:!0}),rubber:new Vs({color:"#0d0d0e",roughness:.9})},n=(I,U,H,k)=>(U.userData.home=U.position.clone(),U.userData.dir=H||new F,U.userData.rot=k||new F,t.add(U),this.parts.push(U),U),i=(I,U,H,k,j)=>{let W=new tn;W.position.set(H,k,j),U.add(W),this.anchors[I]=W},r=new cn;r.add(new qt(ff(uf(.26,.58,.38),.12,.05,-.17),e.body));let o=new qt(ff(uf(.312,.632,.36),.012,0,-.075),e.accent);r.add(o);let a=new ks(.03,20,16);[[-.075,-.05,.6],[.075,-.05,.6],[-.1,-.05,-.62],[.1,-.05,-.62],[.3,-.05,.02],[-.3,-.05,.02]].forEach(I=>{let U=new qt(a,e.glass);U.position.set(...I),r.add(U)}),n("core",r);let l=new cn;l.add(new qt(ff(uf(.2,.34,.45,2.6,.2),.03,.04,.03),e.shell));let c=new qt(ff(uf(.1,.1,.5,2.4,.4),.004,.008,.14),e.glass);l.add(c);let h=new qt(new ks(.07,32,16,0,Math.PI*2,0,Math.PI/2),e.glass);h.position.set(0,.15,.1),l.add(h);let d=new qt(new la(.072,.008,8,40),e.accent);d.rotation.x=Math.PI/2,d.position.set(0,.152,.1),l.add(d);let u=new qt(new vs(.22,.055),new hi({transparent:!0,map:pf(512,128,I=>{I.fillStyle="rgba(255,255,255,.9)",I.font="700 92px Geist, Arial, sans-serif",I.textAlign="center",I.textBaseline="middle",I.fillText("AERIS",256,68)})}));u.rotation.x=-Math.PI/2,u.position.set(0,.153,-.08),l.add(u),i("lidar",l,0,.2,.1),n("shell",l,new F(0,.9,.05),new F(-.2,0,0));let f=new cn;f.add(new qt(new Mr(.34,.12,.36,4,.035),e.shell));let p=new qt(new ui(.345,.018,.2),e.accent);p.position.set(0,0,-.04),f.add(p);for(let I=0;I<4;I++){let U=new qt(new ui(.03,.01,.012),new hi({color:I<3?"#2fd3ff":"#333"}));U.position.set(-.06+I*.04,.062,-.14),f.add(U)}for(let I=0;I<3;I++){let U=new qt(new ui(.2,.006,.012),e.body);U.position.set(0,.062,.02+I*.04),f.add(U)}f.position.set(0,.09,-.35),i("battery",f,.17,.06,0),n("battery",f,new F(0,.35,-1.05));let _=new Qr;_.moveTo(.035,-.016),_.quadraticCurveTo(.13,-.055,.31,-.032),_.quadraticCurveTo(.43,-.022,.43,0),_.quadraticCurveTo(.42,.02,.31,.018),_.quadraticCurveTo(.13,.045,.035,.016),_.closePath();let m=new aa(_,{depth:.006,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:2});m.rotateX(-Math.PI/2);let g=new Gl([[0,0],[.1,0],[.116,.02],[.116,.085],[.1,.11],[.045,.122],[0,.122]].map(I=>new pt(I[0],I[1])),40),S=()=>new hi({map:um([[0,"rgba(255,255,255,0)"],[.16,"rgba(255,255,255,0)"],[.2,"rgba(255,255,255,.35)"],[.72,"rgba(255,255,255,.18)"],[.9,"rgba(255,255,255,.3)"],[.97,"rgba(255,255,255,.08)"],[1,"rgba(255,255,255,0)"]]),transparent:!0,depthWrite:!1,opacity:0,color:"#f4f4f4"}),A=um([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,.45)"],[1,"rgba(255,255,255,0)"]]);[[.2,.3,.86,.7,1],[-.2,.3,-.86,.7,-1],[.22,-.3,.86,-.64,-1],[-.22,-.3,-.86,-.64,1]].forEach(([I,U,H,k,j],W)=>{let R=new cn,J=new F(I,-.03,U),wt=new F(H,.03,k),Tt=J.distanceTo(wt),Xt=new Oi(.034,.055,Tt,20);Xt.rotateX(Math.PI/2),Xt.scale(1,.7,1);let Ht=new qt(Xt,e.carbon);Ht.position.copy(J).lerp(wt,.5),Ht.lookAt(wt),R.add(Ht);let $t=J.clone().lerp(wt,.62),$=new qt(new Oi(.014,.022,.42,12),e.body);$.position.set($t.x*1.02,-.22,$t.z*1.02),$.rotation.z=Math.sign($t.x)*.08,R.add($);let et=new qt(new ks(.03,16,12),e.rubber);et.position.set($t.x*1.04,-.42,$t.z*1.04),R.add(et);let dt=new qt(new Oi(.075,.085,.05,32),e.carbon);dt.position.set(H,.03,k),R.add(dt);let kt=new qt(g,e.metal);kt.position.set(H,.055,k),R.add(kt);let _t=new qt(new Oi(.045,.045,.02,32),e.accent);_t.position.set(H,.185,k),R.add(_t);let Rt=new qt(new ks(.022,12,10),new hi({color:"#ff4a17",toneMapped:!1}));Rt.position.set(H,0,k+(k>0?.08:-.08)),R.add(Rt);let Pt=new Cl(new ia({map:A,color:"#ff4a17",transparent:!0,blending:Kl,depthWrite:!1}));Pt.scale.set(.28,.28,1),Pt.position.copy(Rt.position),R.add(Pt),this.leds.push({led:Rt,glow:Pt,front:k>0});let K=new cn;K.position.set(H,.2,k);let st=new cn;for(let Nt=0;Nt<2;Nt++){let Lt=new qt(m,e.blade);Lt.rotation.set(j*.16,Nt*Math.PI,0),st.add(Lt)}let at=new qt(new Oi(.03,.03,.03,20),e.metal),N=new qt(new Kr(.45,64),S());N.rotation.x=-Math.PI/2,N.position.y=.004,K.add(st,at,N),R.add(K),this.props.push({blades:st,disc:N,spin:j}),W===0&&(i("motor",R,H,.12,k),i("arm",R,(I+H)/2+.05,0,(U+k)/2));let ut=new F(H,0,k).normalize().multiplyScalar(.75);ut.y=.15,n("arm"+W,R,ut),R.userData.propDir=new F(0,.55,0),R.userData.prop=K});let M=new cn,b=new qt(new Mr(.06,.09,.06,2,.015),e.body);b.position.set(0,-.2,.42),M.add(b);let T=new qt(new Oi(.045,.045,.06,24),e.metal);T.rotation.x=Math.PI/2,T.position.set(0,-.25,.46),M.add(T);let v=new qt(new Mr(.34,.03,.05,2,.012),e.body);v.position.set(0,-.25,.5),M.add(v),[-1,1].forEach(I=>{let U=new qt(new Mr(.03,.1,.05,2,.012),e.body);U.position.set(I*.155,-.3,.5),M.add(U);let H=new qt(new Oi(.035,.035,.025,20),e.metal);H.rotation.z=Math.PI/2,H.position.set(I*.14,-.31,.5),M.add(H)}),i("gimbal",M,.16,-.3,.5),n("gimbal",M,new F(0,-.55,.45));let w=new cn;w.add(new qt(new Mr(.24,.17,.2,4,.045),e.shell));let C=new qt(new Oi(.078,.082,.07,40,1,!0),e.metal);C.rotation.x=Math.PI/2,C.position.z=.125,w.add(C);let D=new qt(new la(.078,.007,10,48),e.accent);D.position.z=.16,w.add(D);let L=new qt(new ks(.2,40,20,0,Math.PI*2,0,.38),e.lens);L.rotation.x=Math.PI/2,L.position.z=.16-.2*Math.cos(.38)+0,w.add(L),this.holeMat=new hi({transparent:!0,depthWrite:!1,blending:du,blendEquation:Hs,blendSrc:eo,blendDst:eo,blendSrcAlpha:eo,blendDstAlpha:eo});let V=this.hole=new qt(new Kr(.074,48),this.holeMat);V.position.z=.175,V.renderOrder=999,V.scale.setScalar(.001),w.add(V),w.position.set(0,-.31,.5),i("camera",w,0,0,.17),i("lensEdge",w,.074,0,.17),n("camera",w,new F(0,-.45,1.05)),this.lensLocal=new F(0,-.31,.67)}buildPad(){let t=this.padGroup=new cn,e=(i,r,o)=>{let a=new qt(i,new hi({color:r,transparent:!0,opacity:o,depthWrite:!1,side:Bi}));return a.rotation.x=-Math.PI/2,t.add(a),a};this.padBase=e(new Kr(1.25,96),"#000000",.16),this.padRing=e(new to(1.18,1.25,96),"#ffffff",.95),e(new to(.86,.875,96),"#ffffff",.5),this.padPulse=e(new to(1.25,1.29,96),"#ffffff",0);let n=new qt(new vs(1.1,1.1),new hi({transparent:!0,depthWrite:!1,map:pf(256,256,i=>{i.fillStyle="rgba(255,255,255,.95)",i.font="700 190px Geist, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("H",128,140)})}));n.rotation.x=-Math.PI/2,n.position.y=.002,t.add(n);for(let i=0;i<4;i++){let r=e(new vs(.04,.22),"#ffffff",.9),o=i*Math.PI/2+Math.PI/4;r.position.set(Math.cos(o)*1.42,0,Math.sin(o)*1.42),r.rotation.z=-o+Math.PI/2}t.visible=!1,this.scene.add(t)}resize(){let t=window.innerWidth,e=window.innerHeight;this.w=t,this.h=e,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t<800?1.5:2)),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.wpp=2*Math.tan(zp.degToRad(this.camera.fov/2))*this.camera.position.z/e}setColor(t){this.targetColor.set(t)}setLed(t){this.ledColor.set(t)}doFlip(){this.flipT=0,this.flipping=!0}project(t){let e=new F;return t.getWorldPosition(e),e.project(this.camera),{x:(e.x+1)/2*this.w,y:(1-e.y)/2*this.h}}anchorScreen(t){return this.anchors[t]?this.project(this.anchors[t]):null}lensScreen(){let t=this.project(this.anchors.camera),e=this.project(this.anchors.lensEdge);return{x:t.x,y:t.y,r:Math.hypot(e.x-t.x,e.y-t.y)}}update(t){let e=this.state;this.time+=t;let n=this.time;this.color.lerp(this.targetColor,1-Math.exp(-t*6)),this.mat.shell.color.copy(this.color);let i=this.color.getHSL({}).l>.6;this.mat.shell.roughness=i?.4:.32;let r=e.s*this.wpp/df;this.stage.visible=e.vis>.01&&e.s>1,this.stage.position.set(e.x*this.wpp,-e.y*this.wpp,0),this.stage.scale.setScalar(r),this.stage.rotation.set(e.tilt,0,0),this.pivot.position.copy(this.lensLocal).multiplyScalar(-e.lens);let o=e.prop,a=Math.sin(n*1.7)*.035*o*(1-e.lens);this.craft.position.set(0,a+e.lift,0),this.flipping&&(this.flipT+=t/.9,this.flipT>=1&&(this.flipping=!1,this.flipT=1));let l=this.flipping?this.flipT:0,c=l?(1-Math.pow(1-l,3))*Math.PI*2:0;this.craft.rotation.set(e.pitch+Math.sin(n*1.3)*.02*o,e.yaw,e.roll+Math.sin(n*1.1+1)*.02*o+c,"YXZ");let h=e.explode;for(let _ of this.parts)_.position.copy(_.userData.home).addScaledVector(_.userData.dir,h*.6),_.rotation.set(_.userData.rot.x*h,_.userData.rot.y*h,_.userData.rot.z*h),_.userData.prop&&(_.userData.prop.position.y=.2+_.userData.propDir.y*h);this.propAngle+=t*(4+36*e.prop),this.props.forEach((_,m)=>{_.blades.rotation.y=this.propAngle*_.spin+m,_.disc.material.opacity=Math.min(1,e.prop*1.1)*.55,_.blades.children.forEach(g=>g.material.opacity=1-e.prop*.55)});let d=Math.sin(n*6)>.6?1:.25;this.leds.forEach(_=>{let m=_.front?this.ledColor:new ie("#2fd3ff");_.led.material.color.copy(m),_.glow.material.color.copy(m),_.glow.material.opacity=(_.front?.9:d)*(e.prop>.05?1:.35)});let u=e.lens>.6?Math.min(1,(e.lens-.6)/.25):0;this.hole.scale.setScalar(Math.max(.001,u)),this.shadow.position.y=-fm-e.lift,this.shadow.material.opacity=e.shadow;let f=1+e.lift*.6;this.shadow.scale.set(f,f,f);let p=this.padGroup;if(p.visible=e.pad>.01,p.visible){let _=e.padS*this.wpp/df;p.position.set(e.padX*this.wpp,-e.padY*this.wpp,-.01),p.scale.setScalar(_*(.9+.1*e.pad)),p.rotation.set(e.padTilt,0,0),this.padBase.material.opacity=.16*e.pad,this.padRing.material.opacity=.95*e.pad;let m=n*.8%1;this.padPulse.scale.setScalar(1+m*.35*e.padGlow),this.padPulse.material.opacity=(1-m)*.7*e.padGlow*e.pad}this.renderer.render(this.scene,this.camera)}};ai.registerPlugin(te);var Zt=(s,t=document)=>t.querySelector(s),ke=(s,t=document)=>[...t.querySelectorAll(s)],ts=(s,t,e)=>Math.min(e,Math.max(t,s)),br=(s,t,e)=>s+(t-s)*e,fE=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,ba=(s,t=0)=>s.toLocaleString("pt-BR",{minimumFractionDigits:t,maximumFractionDigits:t}),mc=matchMedia("(hover:none),(pointer:coarse)").matches,dc=()=>innerWidth<900,pm=window.AERIS_MEDIA||{};ke("[data-media]").forEach(s=>{let t=pm[s.dataset.media];t&&(s.src=t)});ke("[data-barcode]").forEach(s=>{let t=0,e=7,n="",i=()=>(e=(e*9301+49297)%233280)/233280;for(;t<250;){let r=1+Math.floor(i()*3);i()>.35&&(n+=`<rect x="${t}" y="${i()>.8?14:0}" width="${r}" height="40"/>`),t+=r+1}s.setAttribute("viewBox","0 0 250 40"),s.setAttribute("preserveAspectRatio","none"),s.innerHTML=n});ke(".split-words").forEach(s=>{let t=e=>[...e.childNodes].forEach(n=>{if(n.nodeType===3){let i=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(r=>{if(r)if(/^\s+$/.test(r))i.append(" ");else{let o=document.createElement("span");o.className="w",o.innerHTML=`<span>${r}</span>`,i.append(o)}}),n.replaceWith(i)}else t(n)});t(s)});var Ta=new w0({lerp:.09,smoothWheel:!0});Ta.on("scroll",te.update);ai.ticker.add(s=>Ta.raf(s*1e3));ai.ticker.lagSmoothing(0);Ta.stop();ke('a[href^="#"]').forEach(s=>s.addEventListener("click",t=>{let e=Zt(s.getAttribute("href"));e&&(t.preventDefault(),Ta.scrollTo(e,{duration:1.8}))}));var bn=null;try{bn=new mf(Zt(".drone-canvas"))}catch(s){console.warn("WebGL indispon\xEDvel",s),Zt(".drone-canvas").remove()}addEventListener("resize",()=>{bn&&bn.resize()});var hn={x:innerWidth/2,y:innerHeight/2,nx:0,ny:0,active:!1};addEventListener("pointermove",s=>{hn.x=s.clientX,hn.y=s.clientY,hn.nx=s.clientX/innerWidth*2-1,hn.ny=s.clientY/innerHeight*2-1,hn.active=!0});var fc=Zt(".cursor");if(!mc&&fc){document.documentElement.classList.add("has-cursor");let s=Zt(".cursor-dot"),t=Zt(".cursor-ring"),e=Zt(".cursor-label"),n=hn.x,i=hn.y;ai.ticker.add(()=>{n=br(n,hn.x,.18),i=br(i,hn.y,.18),s.style.transform=`translate(${hn.x}px,${hn.y}px)`,t.style.transform=`translate(${n}px,${i}px)`}),addEventListener("pointerover",r=>{let o=r.target.closest("[data-cursor]");o?(e.textContent=o.dataset.cursor,fc.classList.add("is-label")):fc.classList.remove("is-label")}),addEventListener("pointerdown",()=>fc.classList.add("is-down")),addEventListener("pointerup",()=>fc.classList.remove("is-down"))}ke(".magnetic").forEach(s=>{s.addEventListener("pointermove",t=>{let e=s.getBoundingClientRect();ai.to(s,{x:(t.clientX-e.left-e.width/2)*.25,y:(t.clientY-e.top-e.height/2)*.35,duration:.4})}),s.addEventListener("pointerleave",()=>ai.to(s,{x:0,y:0,duration:.7,ease:"elastic.out(1,.4)"}))});var di={wind:38,gust:40,alt:120,paused:!1,mode:"cine"},Ex={cine:{led:"#ff4a17",agility:.6},normal:{led:"#2fd3ff",agility:1},sport:{led:"#ff2d55",agility:1.7}};ke(".slider input").forEach(s=>{let t=()=>{let e=s.dataset.key,n=+s.value;di[e]=n,s.style.setProperty("--p",(n-s.min)/(s.max-s.min)*100+"%"),Zt(`[data-out="${e}"]`).textContent=e==="wind"?`${n} km/h`:e==="gust"?`${n}%`:`${n} m`};s.addEventListener("input",t),t()});Zt(".panel-pause").addEventListener("click",s=>{di.paused=!di.paused,s.currentTarget.setAttribute("aria-pressed",di.paused)});ke(".modes button").forEach(s=>s.addEventListener("click",()=>{ke(".modes button").forEach(t=>{t.classList.toggle("is-on",t===s),t.setAttribute("aria-checked",t===s)}),di.mode=s.dataset.mode,bn&&bn.setLed(Ex[di.mode].led),Zt(".osd-mode").textContent=di.mode.toUpperCase()}));Zt(".s-hero").addEventListener("click",s=>{!s.target.closest(".hero-panel,a,button")&&bn&&bn.doFlip()});var wa=Zt(".wind-canvas"),Ws=wa.getContext("2d"),Ax=[];function Cx(){let s=wa.getBoundingClientRect(),t=Math.min(devicePixelRatio,2);wa.width=s.width*t,wa.height=s.height*t,Ws.setTransform(t,0,0,t,0,0),Ax=Array.from({length:140},()=>({x:Math.random()*s.width,y:Math.random()*s.height,z:Math.random()}))}Cx();addEventListener("resize",Cx);var Rx=!0,xf=0;function dE(s){if(!Rx)return;let t=wa.clientWidth,e=wa.clientHeight;Ws.clearRect(0,0,t,e),di.paused&&(s=0),xf=br(xf,(Math.sin(performance.now()/700)*.5+.5)*di.gust/100,.05);let n=di.wind/90*(1+xf),i=-.25-n*.9;Ws.lineCap="round";for(let r of Ax){let o=(220+r.z*700)*(.25+n*1.6);r.x+=Math.cos(i+Math.PI/2)*-o*s*Math.sin(-i)*2+o*s*n,r.y+=o*s*.9,(r.y>e+40||r.x>t+60)&&(r.y=-40,r.x=Math.random()*(t+200)-200);let a=14+r.z*40*(.4+n);Ws.strokeStyle=`rgba(255,255,255,${.12+r.z*.35})`,Ws.lineWidth=.6+r.z*1.2,Ws.beginPath(),Ws.moveTo(r.x,r.y),Ws.lineTo(r.x-n*a*1.2,r.y-a*.9),Ws.stroke()}}var pE=Zt(".stat-num"),Hi=Zt(".fpv-video"),ym=Zt(".fpv-view"),mm=7;Hi.addEventListener("loadedmetadata",()=>{mm=Hi.duration||7});Hi.addEventListener("error",()=>ym.classList.add("no-video"));setTimeout(()=>{Hi.readyState<1&&ym.classList.add("no-video")},9e3);pm.fpv&&fetch(pm.fpv).then(s=>s.ok?s.blob():Promise.reject()).then(s=>{let t=Hi.currentTime;Hi.src=URL.createObjectURL(s),Hi.currentTime=t}).catch(()=>{});var Px=Zt(".compass-tape"),mE={0:"N",45:"NE",90:"L",135:"SE",180:"S",225:"SO",270:"O",315:"NO"},Ix="";for(let s=0;s<3;s++)for(let t=0;t<360;t+=15)Ix+=`<span class="${t%45?"":"major"}">${mE[t]||t}</span>`;Px.innerHTML=Ix;var gE=ke(".chapter"),Lx=0,dm=0,gm=ke(".callout"),vf=Zt(".anat-lines");vf.innerHTML=gm.map(()=>'<path/><circle r="4"/><circle class="ring" r="9"/>').join("");var Dx=0,wr=Zt(".sense-canvas"),ve=wr.getContext("2d");function Nx(){let s=Math.min(devicePixelRatio,2);wr.width=wr.clientWidth*s,wr.height=wr.clientHeight*s,ve.setTransform(s,0,0,s,0,0)}Nx();addEventListener("resize",Nx);var Le={x:0,y:0,vx:0,vy:0,count:0,alert:!1},_m=!1,Sm=null;Zt(".s-sense").addEventListener("pointerdown",s=>{mc&&(Sm={x:s.clientX,y:s.clientY,t:0})});function _E(s,t){return Math.sin(s*1.3+t*.7)*.5+Math.sin(s*.37-t*1.1+2)*.7+Math.sin(s*2.1+t*2.7)*.2}function xE(s){let t=wr.clientWidth,e=wr.clientHeight,n=performance.now()/1e3;ve.clearRect(0,0,t,e);let i=34,r=70,o=n*.25%1;for(let p=0;p<i;p++){let _=p/i,m=e*.45+Math.pow(_,1.6)*e*.62,g=.5+_*1.6,S=1-Math.min(1,Math.abs(_-o)*8);for(let A=0;A<r;A++){let x=A/(r-1)-.5,M=t/2+x*t*g,b=m-_E(x*8,_*6+n*.15)*26*(1-_*.3),T=.08+_*.3+S*.6;ve.fillStyle=S>.1?`rgba(255,${120-S*60},${60-S*40},${T})`:`rgba(47,211,255,${T*.7})`,ve.fillRect(M,b,1.4+_*1.2,1.4+_*1.2)}}if(!s)return;let{x:a,y:l}=s,c=wr.getBoundingClientRect().top,h=l-c;for(let p=1;p<=4;p++)ve.strokeStyle=`rgba(255,255,255,${.14-p*.02})`,ve.lineWidth=1,ve.beginPath(),ve.arc(a,h,70*p+Math.sin(n*2+p)*3,0,Math.PI*2),ve.stroke();let d=n*2.2,u=ve.createConicGradient?ve.createConicGradient(d,a,h):null;u&&(u.addColorStop(0,"rgba(255,74,23,.28)"),u.addColorStop(.12,"rgba(255,74,23,0)"),u.addColorStop(1,"rgba(255,74,23,0)"),ve.fillStyle=u,ve.beginPath(),ve.arc(a,h,290,0,Math.PI*2),ve.fill());let f=mc?Sm:hn.active?{x:hn.x,y:hn.y}:null;if(f){let p=f.y-c,_=Math.hypot(f.x-a,p-h),m=_<260;if(ve.setLineDash([4,6]),ve.strokeStyle=m?"rgba(255,74,23,.9)":"rgba(255,255,255,.35)",ve.beginPath(),ve.moveTo(a,h),ve.lineTo(f.x,p),ve.stroke(),ve.setLineDash([]),ve.strokeStyle=m?"#ff4a17":"rgba(255,255,255,.6)",ve.strokeRect(f.x-14,p-14,28,28),m){let g=Math.atan2(p-h,f.x-a);ve.strokeStyle="#ff4a17",ve.lineWidth=4,ve.beginPath(),ve.arc(a,h,120,g-.5,g+.5),ve.stroke(),ve.lineWidth=1}ve.fillStyle="#fff",ve.font='11px "Geist Mono", monospace',ve.fillText(`${ba(_/40,1)} m`,f.x+20,p-18)}}var xm=Zt(".gal-track"),vm=0,vE=ke(".gc-img img"),Sx=Zt(".mq-track"),Ma=0;ke(".sw").forEach(s=>s.addEventListener("click",()=>{ke(".sw").forEach(t=>{t.classList.toggle("is-on",t===s),t.setAttribute("aria-checked",t===s)}),bn&&bn.setColor(s.dataset.color),Zt(".cta-color").textContent=s.dataset.name}));ke(".kit").forEach(s=>s.addEventListener("click",()=>{ke(".kit").forEach(n=>{n.classList.toggle("is-on",n===s),n.setAttribute("aria-checked",n===s)});let t=+s.dataset.price,e={v:parseFloat(Zt(".pr-inst").textContent.replace(/\./g,"").replace(",","."))};ai.to(e,{v:t/12,duration:.8,ease:"power3.out",onUpdate:()=>{Zt(".pr-inst").textContent=ba(e.v,2)}}),Zt(".pr-pix").textContent=ba(t*.95,2),Zt(".cta-kit").textContent=s.dataset.name}));var pc=new Date;pc.setDate(pc.getDate()+((7-pc.getDay())%7||7));pc.setHours(23,59,59,0);function Ux(){let s=Math.max(0,(pc-Date.now())/1e3),t={d:s/86400|0,h:s%86400/3600|0,m:s%3600/60|0,s:s%60|0};for(let e in t)Zt(`[data-cd="${e}"]`).textContent=String(t[e]).padStart(2,"0")}Ux();setInterval(Ux,1e3);var en={};en.hero=te.create({trigger:".s-hero",start:"top top",end:"bottom top",onToggle:s=>Rx=s.isActive});en.fpv=te.create({trigger:".s-fpv",start:"top top",end:"+=520%",pin:".fpv-stage",scrub:!0,onUpdate:s=>Lx=s.progress});en.anat=te.create({trigger:".s-anat",start:"top top",end:"+=380%",pin:".anat-stage",scrub:!0,onUpdate:s=>Dx=s.progress});en.sense=te.create({trigger:".s-sense",start:"top top",end:"+=120%",pin:".sense-stage",onToggle:s=>_m=s.isActive});en.gal=te.create({trigger:".s-gal",start:"top top",end:()=>"+="+Math.max(1,xm.scrollWidth-innerWidth),pin:".gal-stage",scrub:!0,invalidateOnRefresh:!0,onUpdate:s=>vm=s.progress});en.land=te.create({trigger:"#pad",start:"center bottom",end:"center 58%"});en.all=te.create({start:0,end:"max"});ke("[data-theme]").forEach(s=>te.create({trigger:s,start:"top 60px",end:"bottom 60px",onToggle:t=>{t.isActive&&(document.body.classList.toggle("theme-light",s.dataset.theme==="light"),document.body.classList.toggle("theme-dark",s.dataset.theme==="dark"))}}));ke("[data-section]").forEach(s=>te.create({trigger:s,start:"top center",end:"bottom center",onToggle:t=>t.isActive&&ke("[data-nav]").forEach(e=>e.classList.toggle("is-active",e.dataset.nav===s.dataset.section))}));ke(".split-words").forEach(s=>ai.from(ke(".w>span",s),{yPercent:110,duration:1.1,ease:"expo.out",stagger:.05,scrollTrigger:{trigger:s,start:"top 85%"}}));ke("[data-count]").forEach(s=>te.create({trigger:s,start:"top 90%",once:!0,onEnter:()=>ai.to({v:0},{v:+s.dataset.count,duration:1.6,ease:"power3.out",onUpdate(){s.textContent=Math.round(this.targets()[0].v)}})}));te.create({trigger:".stock",start:"top 90%",once:!0,onEnter:()=>Zt(".stock").classList.add("is-in")});ai.from(".ft-word span",{yPercent:100,duration:1.2,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:".footer",start:"top 70%"}});var yE=()=>{let s=dc();return[{at:["hero",0],x:s?.18:.2,y:s?-.1:-.12,s:s?.62:.36,yaw:-.6,tilt:.42,pitch:.05,prop:1},{at:["hero",.6],x:.06,y:.05,s:s?.6:.3,yaw:-.25,tilt:.3},{at:["fpv",0],x:0,y:0,s:s?.75:.38,yaw:0,tilt:.06,pitch:0,lens:0},{at:["fpv",.05],s:s?1.2:.6,lens:1},{at:["fpv",.13],s:s?24:12,lens:1},{at:["fpv",.14],vis:0},{at:["fpv",.86],vis:0},{at:["fpv",.87],vis:1,s:s?24:12,lens:1},{at:["fpv",.96],s:s?.85:.45,lens:0,yaw:0,tilt:.1},{at:["anat",0],x:0,y:s?-.08:.06,s:s?.85:.42,yaw:.5,tilt:.45,explode:0,shadow:.35},{at:["anat",.25],yaw:1.1,tilt:.55,explode:0},{at:["anat",.6],yaw:2.2,tilt:.62,explode:1,s:s?.8:.4},{at:["anat",.85],yaw:2.8,explode:1},{at:["anat",1],yaw:3.4,tilt:.35,explode:0,shadow:0},{at:["sense",0],x:s?0:.08,y:.02,s:s?.6:.26,yaw:6.28+.4,tilt:.5},{at:["sense",1],x:s?0:.08,y:.02},{at:["gal",0],x:-.44,y:.41,s:s?.16:.07,yaw:1.57,tilt:.25,pitch:.15},{at:["gal",1],x:.44,y:.41},{at:["land",0],anchor:"pad",lift:1.4,s:s?.6:.34,yaw:.5,tilt:.5,pitch:0,prop:1,shadow:.15,pad:1,glow:1},{at:["land",.75],lift:.12,prop:1,shadow:.45},{at:["land",1],lift:0,prop:0,shadow:.55,glow:0}]},Ox={x:0,y:0,s:.3,yaw:0,tilt:.3,pitch:0,roll:0,explode:0,prop:1,shadow:0,lift:0,lens:0,vis:1,pad:0,glow:0,anchor:null},es=[];function Mm(){let s={...Ox};es=yE().map(t=>{let e=en[t.at[0]],n={...s,...t};return n.pos=e.start+t.at[1]*(e.end-e.start),s=n,n}).sort((t,e)=>t.pos-e.pos)}te.addEventListener("refresh",Mm);function SE(){let s=Zt("#pad").getBoundingClientRect();return{x:s.left+s.width/2-innerWidth/2,y:s.top+s.height*.56-innerHeight/2,s:Math.min(s.width*.78,s.height*1.1)}}function gf(s,t,e){let n={...s};if(s.anchor==="pad"){n.s=e.s/t;let i=e.s/df;n.x=e.x/innerWidth,n.y=(e.y-(fm+s.lift)*i*Math.cos(s.tilt))/innerHeight}return n}var De={...Ox,x:.2,y:.6,s:.1},Mx=performance.now(),bx=0,wx=["x","y","s","yaw","tilt","pitch","explode","prop","shadow","lift","lens","vis","glow"];function Fx(){let s=performance.now(),t=Math.min(.05,(s-Mx)/1e3);Mx=s;let e=scrollY,n=Math.min(innerWidth,innerHeight*1.5),i=SE(),r;if(es.length||Mm(),e<=es[0].pos)r=gf(es[0],n,i);else if(e>=es[es.length-1].pos)r=gf(es[es.length-1],n,i);else{let x=0;for(;es[x+1].pos<e;)x++;let M=gf(es[x],n,i),b=gf(es[x+1],n,i),T=fE(ts((e-M.pos)/Math.max(1,b.pos-M.pos),0,1));r={},wx.forEach(v=>r[v]=v==="s"?Math.exp(br(Math.log(M.s),Math.log(b.s),T)):br(M[v],b[v],T)),r.vis=b.vis<.5||M.vis<.5?Math.min(M.vis,b.vis):1}let o=ts(1-e/(innerHeight*.6),0,1),a=Ex[di.mode].agility,l=di.paused?0:di.wind/90*(1+xf),c=s/1e3;if(r.x+=(hn.nx*.03+Math.sin(c*2.3)*.006*l)*o,r.y+=(-(di.alt-120)/900+hn.ny*.02+Math.sin(c*3.1)*.008*l)*o,_m&&!dc()||_m&&mc){let x=innerWidth/2+De.x*innerWidth,M=innerHeight/2+De.y*innerHeight,b=mc?Sm:hn.active?hn:null,T=-Le.x*6,v=-Le.y*6;if(Le.alert=!1,b){let w=x-b.x,C=M-b.y,D=Math.hypot(w,C)||1;if(D<260){let L=(260-D)/260;T+=w/D*L*90,v+=C/D*L*90,Le.alert=!0}Zt(".sr-dist").textContent=`${ba(D/40,1)} m`}Le.alert&&!Le.was&&(Le.count++,Zt(".sr-count").textContent=String(Le.count).padStart(3,"0")),Le.was=Le.alert,Zt(".sr-status").textContent=Le.alert?"DESVIANDO":"LIVRE",Zt(".sr-status").classList.toggle("is-alert",Le.alert),Le.vx=(Le.vx+T*t)*.9,Le.vy=(Le.vy+v*t)*.9,Le.x=ts(Le.x+Le.vx*t,-.3,.3),Le.y=ts(Le.y+Le.vy*t,-.25,.25)}else Le.x*=.9,Le.y*=.9;r.x+=Le.x,r.y+=Le.y;let d=1-Math.exp(-t*(r.lens>.5?30:7*a));wx.forEach(x=>De[x]=x==="vis"?r.vis:x==="s"?Math.exp(br(Math.log(De.s),Math.log(r.s),d)):br(De[x],r[x],d));let u=(De.x-bx)/Math.max(t,.001);if(bx=De.x,bn){let x=bn.state;x.x=De.x*innerWidth,x.y=De.y*innerHeight,x.s=De.s*n,x.yaw=De.yaw+hn.nx*.25*o,x.tilt=De.tilt+hn.ny*.12*o,x.pitch=De.pitch+ts(Math.abs(u)*.4,0,.3)*(1-De.lens),x.roll=ts(-u*.5,-.5,.5)*(1-De.lens)+Math.sin(c*4)*.04*l*o+Le.vx*-.4,Object.assign(x,{explode:De.explode,prop:De.prop,shadow:De.shadow,lift:De.lift,lens:De.lens,vis:De.vis,pad:i.s&&e>en.gal.end-innerHeight?1:0,padX:i.x,padY:i.y,padS:i.s,padTilt:.5,padGlow:De.glow}),bn.update(t)}let f=Zt(".link-layer");if(o>0&&bn&&!dc()){let x=Zt(".stat-pill").getBoundingClientRect(),M=bn.anchorScreen("motor"),b=Zt(".hero-link");b.setAttribute("x1",x.left+10),b.setAttribute("y1",x.bottom),b.setAttribute("x2",M.x),b.setAttribute("y2",M.y),Zt(".hero-link-dot").setAttribute("cx",M.x),Zt(".hero-link-dot").setAttribute("cy",M.y),f.style.opacity=o}else f.style.opacity=0;if(pE.textContent=ba(99.9-l*.35-Math.abs(Math.sin(c*2))*.1*l,1),dE(t),en.fpv.isActive||e>en.fpv.start-innerHeight&&e<en.fpv.end+innerHeight){let x=Lx,M;if(De.vis<.5)M="circle(150% at 50% 50%)";else if(bn&&De.lens>.55){let v=bn.lensScreen();M=`circle(${v.r*1.25}px at ${v.x}px ${v.y}px)`}else M="circle(0px at 50% 50%)";ym.style.clipPath=M,Zt(".fpv-pre").style.opacity=ts(1-(x-.02)*12,0,1)+(x>.85?ts((x-.9)*12,0,1):0);let b=ts((x-.12)/.76,0,1);dm=b*mm,Hi.readyState>=1&&!Hi.seeking&&Math.abs(Hi.currentTime-dm)>.02&&(Hi.currentTime=br(Hi.currentTime,dm,.5)),Zt(".osd-alt").textContent=String(Math.round(2+Math.pow(b,1.3)*478)).padStart(3,"0"),Zt(".osd-spd").textContent=String(Math.round(18+Math.sin(b*Math.PI)*54)).padStart(2,"0"),Zt(".osd-dist").textContent=ba(b*2.84,2),Zt(".osd-bat").textContent=Math.round(98-b*6);let T=b*mm;Zt(".osd-tc").textContent=`00:00:${String(T|0).padStart(2,"0")}:${String(T%1*30|0).padStart(2,"0")}`,Px.style.transform=`translateX(${-(400+b*110)/15*30+190}px)`,Zt(".osd-horizon").style.transform=`translate(-50%,-50%) rotate(${Math.sin(b*11)*5}deg)`,Zt(".fpv-progress i").style.transform=`scaleX(${b})`,gE.forEach(v=>{let w=+v.dataset.from,C=+v.dataset.to,D=ts(Math.min((x-w)/.03,(C-x)/.03),0,1);v.style.opacity=D,v.style.visibility=D>0?"visible":"hidden",v.style.transform=`translateY(${(1-D)*30}px)`})}if(en.anat.isActive&&bn){let x=De.explode;Zt(".am-bar i").style.transform=`scaleX(${x})`,Zt(".am-val").textContent=Math.round(x*100)+"%",Zt(".aw-num").textContent=Math.round(249*(.2+.8*Math.min(1,Dx*3)));let M=ke("path",vf),b=ke("circle",vf);gm.forEach((T,v)=>{let w=x>.35+v*.06;T.classList.toggle("is-in",w);let C=bn.anchorScreen(T.dataset.anchor),D=T.getBoundingClientRect(),L=T.dataset.side==="left",V=L?D.right+12:D.left-12,I=D.top+30,U=L?V+40:V-40;M[v].setAttribute("d",`M${V},${I} L${U},${I} L${C.x},${C.y}`),M[v].style.opacity=w&&!dc()?.55:0,[b[v*2],b[v*2+1]].forEach(H=>{H.setAttribute("cx",C.x),H.setAttribute("cy",C.y),H.style.opacity=w&&!dc()?1:0})})}else en.anat.isActive||(gm.forEach(x=>x.classList.remove("is-in")),ke("path,circle",vf).forEach(x=>x.style.opacity=0));if(e>en.sense.start-innerHeight&&e<en.sense.end+innerHeight&&xE({x:innerWidth/2+De.x*innerWidth,y:innerHeight/2+De.y*innerHeight}),e>en.gal.start-innerHeight&&e<en.gal.end+innerHeight){let x=Math.max(0,xm.scrollWidth-innerWidth);xm.style.transform=`translate3d(${-vm*x}px,0,0)`,Zt(".fl-fill").style.transform=`scaleX(${vm})`,vE.forEach(M=>{let b=M.parentElement.getBoundingClientRect(),T=(b.left+b.width/2)/innerWidth-.5;M.style.transform=`translate3d(${T*-8}%,0,0)`})}let p=Ta.velocity||0;Ma-=(1.2+Math.abs(p)*.25)*(p<0?-1:1);let _=Sx.scrollWidth/2;Ma<-_&&(Ma+=_),Ma>0&&(Ma-=_),Sx.style.transform=`translate3d(${Ma}px,0,0) skewX(${ts(-p*.4,-12,12)}deg)`;let m=en.land.progress>.98,g=Zt(".pz-status");g.textContent=m?"POUSO CONFIRMADO \u2713":en.land.progress>0?"APROXIMANDO":"AGUARDANDO",g.classList.toggle("is-landed",m);let S=en.all.progress||0;Zt(".scroll-rail i").style.transform=`scaleY(${S})`;let A=Zt(".rail-alt");A.style.top=S*100+"%",A.textContent=`ALT ${String(Math.round(480*(1-S))).padStart(3,"0")} m`,requestAnimationFrame(Fx)}var Tx=Zt(".preloader"),ME=ke(".pre-checks li"),_f={v:0};ai.to(_f,{v:100,duration:2.2,ease:"power2.inOut",onUpdate:()=>{Zt(".pre-num").textContent=String(Math.round(_f.v)).padStart(3,"0"),Zt(".pre-bar i").style.transform=`scaleX(${_f.v/100})`,ME.forEach((s,t)=>s.classList.toggle("ok",_f.v>(t+1)*15))},onComplete:()=>{Zt(".pre-status").textContent="Pronto para decolar",ai.timeline({delay:.25}).to(Tx,{yPercent:-100,duration:1.1,ease:"expo.inOut"}).from(".ht-inner",{yPercent:110,duration:1.2,ease:"expo.out",stagger:.08},"-=.45").from(".hero-pilot",{yPercent:12,opacity:0,duration:1.4,ease:"expo.out"},"<").from(".hero-panel,.hero-stat,.hero-brand,.hero-card,.hero-hint,.nav",{y:24,opacity:0,duration:1,ease:"expo.out",stagger:.06},"<.2").add(()=>{Tx.remove(),document.body.classList.remove("is-loading"),Ta.start(),te.refresh()})}});te.refresh();Mm();requestAnimationFrame(Fx);})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
