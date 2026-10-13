import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as u,e as _}from"./index-MPVjHJeJ.js";import{c as fe}from"./clsx-B-dksMZM.js";import{u as yn,_ as Se,a as bn,b as wn,c as xn,S as Cn}from"./Select-1B7fnwo2.js";import{I as Mn}from"./IconButton-DH8gHv83.js";import{C as Sn}from"./Close-CbSJyKiw.js";import{a as B,b as ft,c as Fn}from"./tslib.es6-BUas5LQb.js";import{P as En}from"./Portal-C0rvGOAr.js";import{T as On,s as Je}from"./index-Dyl7uRg4.js";import{B as O}from"./Button-D-IpMAX6.js";import{T as mt}from"./Tooltip-C3mkGPYQ.js";import{D as kn}from"./DatePicker-Dr4l0bCi.js";import{I as Tn}from"./Input-CPLHpyb9.js";import"./index-vJCRx9DD.js";import"./index-Bzm33-PM.js";import"./Popover-BIobbZJL.js";import"./useMergeRefs-CgiA6E4I.js";import"./Dropdown-BngKrX1A.js";import"./SvgIcon-DdodcY4Y.js";import"./useInputErrorMessages-gddYeL_s.js";import"./Error-BWWGylYt.js";import"./index-DUj0Aiku.js";import"./index-Bdtxe6rI.js";import"./Info-CijO5JYg.js";import"./Warning-D0eZcNR0.js";import"./DatePicker.module-BJefO77g.js";import"./CaretRight-C8W8m3I1.js";import"./Flex-ChKls94X.js";const _n="_header_1bzld_1",Nn="_title_1bzld_8",In="_main_1bzld_15",Bn="_mainOverFlow_1bzld_20",Rn="_footer_1bzld_25",Dn="_content_1bzld_32",Pn="_actions_1bzld_80",Vn="_dialogOverlay_1bzld_91",jn="_dialog_1bzld_91",An="_small_1bzld_124",Ln="_wide_1bzld_133",N={header:_n,title:Nn,main:In,mainOverFlow:Bn,footer:Rn,content:Dn,actions:Pn,dialogOverlay:Vn,dialog:jn,small:An,wide:Ln,default:"_default_1bzld_142"},U=({children:e,className:t})=>{const n=u.useRef(null),r=yn(n.current);return c.jsx("div",{ref:n,className:fe(N.main,t,{[N.mainOverFlow]:r}),children:e})};try{U.displayName="ModalBody",U.__docgenInfo={description:"",displayName:"ModalBody",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const X=({children:e,className:t})=>c.jsx("footer",{className:fe(N.footer,t),children:e});try{X.displayName="ModalFooter",X.__docgenInfo={description:"",displayName:"ModalFooter",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const qn=()=>{},pt=u.createContext({onClose:qn}),{Provider:Fe}=pt;try{Fe.displayName="Provider",Fe.__docgenInfo={description:"",displayName:"Provider",props:{}}}catch{}const Ee=({className:e})=>{const{onClose:t}=u.useContext(pt);return c.jsx(Mn,{ariaLabel:"Close dialog",tooltipOverride:"Close",onClick:t,className:e,disableTooltipOnFocus:!0,children:c.jsx(Sn,{})})};try{Ee.displayName="ModalCloseButton",Ee.__docgenInfo={description:"",displayName:"ModalCloseButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const z=({children:e,className:t})=>c.jsxs("header",{className:fe(N.header,t),children:[c.jsx("h2",{className:N.title,children:e}),c.jsx(Ee,{})]});try{z.displayName="ModalHeader",z.__docgenInfo={description:"",displayName:"ModalHeader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}var Oe="data-focus-lock",vt="data-focus-lock-disabled",Wn="data-no-focus-lock",Hn="data-autofocus-inside",Un="data-no-autofocus";function ge(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function zn(e,t){var n=u.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Gn=typeof window<"u"?u.useLayoutEffect:u.useEffect,et=new WeakMap;function ht(e,t){var n=zn(null,function(r){return e.forEach(function(o){return ge(o,r)})});return Gn(function(){var r=et.get(n);if(r){var o=new Set(r),a=new Set(e),l=n.current;o.forEach(function(i){a.has(i)||ge(i,null)}),a.forEach(function(i){o.has(i)||ge(i,l)})}et.set(n,e)},[e]),n}var ye={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"};function gt(e){return e}function yt(e,t){t===void 0&&(t=gt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var l=t(a,r);return n.push(l),function(){n=n.filter(function(i){return i!==l})}},assignSyncMedium:function(a){for(r=!0;n.length;){var l=n;n=[],l.forEach(a)}n={push:function(i){return a(i)},filter:function(){return n}}},assignMedium:function(a){r=!0;var l=[];if(n.length){var i=n;n=[],i.forEach(a),l=n}var f=function(){var g=l;l=[],g.forEach(a)},d=function(){return Promise.resolve().then(f)};d(),n={push:function(g){l.push(g),d()},filter:function(g){return l=l.filter(g),n}}}};return o}function Re(e,t){return t===void 0&&(t=gt),yt(e,t)}function bt(e){e===void 0&&(e={});var t=yt(null);return t.options=B({async:!0,ssr:!1},e),t}var wt=function(e){var t=e.sideCar,n=ft(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return u.createElement(r,B({},n))};wt.isSideCarExport=!0;function $n(e,t){return e.useMedium(t),wt}var xt=Re({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),Ct=Re(),Yn=Re(),Xn=bt({async:!0,ssr:typeof document<"u"}),Zn=u.createContext(void 0),Qn=[],De=u.forwardRef(function(t,n){var r,o=u.useState(),a=o[0],l=o[1],i=u.useRef(),f=u.useRef(!1),d=u.useRef(null),g=u.useState({}),p=g[1],m=t.children,y=t.disabled,h=y===void 0?!1:y,s=t.noFocusGuards,v=s===void 0?!1:s,x=t.persistentFocus,w=x===void 0?!1:x,b=t.crossFrame,M=b===void 0?!0:b,C=t.autoFocus,F=C===void 0?!0:C;t.allowTextSelection;var E=t.group,I=t.className,J=t.whiteList,en=t.hasPositiveIndices,$e=t.shards,pe=$e===void 0?Qn:$e,Ye=t.as,tn=Ye===void 0?"div":Ye,Xe=t.lockProps,nn=Xe===void 0?{}:Xe,rn=t.sideCar,Ze=t.returnFocus,ee=Ze===void 0?!1:Ze,on=t.focusOptions,ve=t.onActivation,he=t.onDeactivation,an=u.useState({}),ln=an[0],un=u.useCallback(function(T){var V=T.captureFocusRestore;if(!d.current){var j,R=(j=document)==null?void 0:j.activeElement;d.current=R,R!==document.body&&(d.current=V(R))}i.current&&ve&&ve(i.current),f.current=!0,p()},[ve]),sn=u.useCallback(function(){f.current=!1,he&&he(i.current),p()},[he]),cn=u.useCallback(function(T){var V=d.current;if(V){var j=(typeof V=="function"?V():V)||document.body,R=typeof ee=="function"?ee(j):ee;if(R){var Ke=typeof R=="object"?R:void 0;d.current=null,T?Promise.resolve().then(function(){return j.focus(Ke)}):j.focus(Ke)}}},[ee]),dn=u.useCallback(function(T){f.current&&xt.useMedium(T)},[]),fn=Ct.useMedium,mn=u.useCallback(function(T){i.current!==T&&(i.current=T,l(T))},[]),pn=Se((r={},r[vt]=h&&"disabled",r[Oe]=E,r),nn),Qe=v!==!0,vn=Qe&&v!=="tail",hn=ht([n,mn]),gn=u.useMemo(function(){return{observed:i,shards:pe,enabled:!h,active:f.current}},[h,f.current,pe,a]);return _.createElement(u.Fragment,null,Qe&&[_.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:h?-1:0,style:ye}),en?_.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:h?-1:1,style:ye}):null],!h&&_.createElement(rn,{id:ln,sideCar:Xn,observed:a,disabled:h,persistentFocus:w,crossFrame:M,autoFocus:F,whiteList:J,shards:pe,onActivation:un,onDeactivation:sn,returnFocus:cn,focusOptions:on,noFocusGuards:v}),_.createElement(tn,Se({ref:hn},pn,{className:I,onBlur:fn,onFocus:dn}),_.createElement(Zn.Provider,{value:gn},m)),vn&&_.createElement("div",{"data-focus-guard":!0,tabIndex:h?-1:0,style:ye}))});De.propTypes={};function Kn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,bn(e,t)}function Jn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],l;function i(){l=e(a.map(function(d){return d.props})),t(l)}var f=function(d){Kn(g,d);function g(){return d.apply(this,arguments)||this}g.peek=function(){return l};var p=g.prototype;return p.componentDidMount=function(){a.push(this),i()},p.componentDidUpdate=function(){i()},p.componentWillUnmount=function(){var y=a.indexOf(this);a.splice(y,1),i()},p.render=function(){return _.createElement(o,this.props)},g}(u.PureComponent);return wn(f,"displayName","SideEffect("+n(o)+")"),f}}var k=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},P=function(e){return Array.isArray(e)?e:[e]},Mt=function(e){return Array.isArray(e)?e[0]:e},er=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},St=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},Ft=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},tr=function(e){return e.hasAttribute("inert")},nr=function(e,t){return!e||Ft(e)||!er(e)&&!tr(e)&&t(St(e))},Et=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=nr(t,Et.bind(void 0,e));return e.set(t,r),r},rr=function(e,t){return e&&!Ft(e)?lr(e)?t(St(e)):!1:!0},Ot=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=rr(t,Ot.bind(void 0,e));return e.set(t,r),r},kt=function(e){return e.dataset},or=function(e){return e.tagName==="BUTTON"},Tt=function(e){return e.tagName==="INPUT"},_t=function(e){return Tt(e)&&e.type==="radio"},ar=function(e){return!((Tt(e)||or(e))&&(e.type==="hidden"||e.disabled))},lr=function(e){var t=e.getAttribute(Un);return![!0,"true",""].includes(t)},Pe=function(e){var t;return!!(e&&(!((t=kt(e))===null||t===void 0)&&t.focusGuard))},ke=function(e){return!Pe(e)},ir=function(e){return!!e},ur=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},sr=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},Ve=function(e,t,n){return k(e).map(function(r,o){var a=sr(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(ur)},cr=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],je=cr.join(","),dr="".concat(je,", [data-focus-guard]"),Nt=function(e,t){return k((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?dr:je)?[r]:[],Nt(r))},[])},fr=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?G([e.contentDocument.body],t):[e]},G=function(e,t){return e.reduce(function(n,r){var o,a=Nt(r,t),l=(o=[]).concat.apply(o,a.map(function(i){return fr(i,t)}));return n.concat(l,r.parentNode?k(r.parentNode.querySelectorAll(je)).filter(function(i){return i===r}):[])},[])},mr=function(e){var t=e.querySelectorAll("[".concat(Hn,"]"));return k(t).map(function(n){return G([n])}).reduce(function(n,r){return n.concat(r)},[])},Ae=function(e,t){return k(e).filter(function(n){return Et(t,n)}).filter(function(n){return ar(n)})},tt=function(e,t){return t===void 0&&(t=new Map),k(e).filter(function(n){return Ot(t,n)})},Le=function(e,t,n){return Ve(Ae(G(e,n),t),!0,n)},Z=function(e,t){return Ve(Ae(G(e),t),!1)},pr=function(e,t){return Ae(mr(e),t)},D=function(e,t){return e.shadowRoot?D(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:k(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?D(o,t):!1}return D(n,t)})},vr=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(l,i){return!t.has(i)})},It=function(e){return e.parentNode?It(e.parentNode):e},qe=function(e){var t=P(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(Oe);return n.push.apply(n,o?vr(k(It(r).querySelectorAll("[".concat(Oe,'="').concat(o,'"]:not([').concat(vt,'="disabled"])')))):[r]),n},[])},hr=function(e){try{return e()}catch{return}},Q=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?Q(t.shadowRoot):t instanceof HTMLIFrameElement&&hr(function(){return t.contentWindow.document})?Q(t.contentWindow.document):t}},gr=function(e,t){return e===t},yr=function(e,t){return!!k(e.querySelectorAll("iframe")).some(function(n){return gr(n,t)})},Bt=function(e,t){return t===void 0&&(t=Q(Mt(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:qe(e).some(function(n){return D(n,t)||yr(n,t)})},br=function(e){e===void 0&&(e=document);var t=Q(e);return t?k(e.querySelectorAll("[".concat(Wn,"]"))).some(function(n){return D(n,t)}):!1},wr=function(e,t){return t.filter(_t).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},We=function(e,t){return _t(e)&&e.name?wr(e,t):e},xr=function(e){var t=new Set;return e.forEach(function(n){return t.add(We(n,e))}),e.filter(function(n){return t.has(n)})},nt=function(e){return e[0]&&e.length>1?We(e[0],e):e[0]},rt=function(e,t){return e.indexOf(We(t,e))},Te="NEW_FOCUS",Cr=function(e,t,n,r,o){var a=e.length,l=e[0],i=e[a-1],f=Pe(r);if(!(r&&e.indexOf(r)>=0)){var d=r!==void 0?n.indexOf(r):-1,g=o?n.indexOf(o):d,p=o?e.indexOf(o):-1;if(d===-1)return p!==-1?p:Te;if(p===-1)return Te;var m=d-g,y=n.indexOf(l),h=n.indexOf(i),s=xr(n),v=r!==void 0?s.indexOf(r):-1,x=o?s.indexOf(o):v,w=s.filter(function(I){return I.tabIndex>=0}),b=r!==void 0?w.indexOf(r):-1,M=o?w.indexOf(o):b,C=b>=0&&M>=0?M-b:x-v;if(!m&&p>=0||t.length===0)return p;var F=rt(e,t[0]),E=rt(e,t[t.length-1]);if(d<=y&&f&&Math.abs(m)>1)return E;if(d>=h&&f&&Math.abs(m)>1)return F;if(m&&Math.abs(C)>1)return p;if(d<=y)return E;if(d>h)return F;if(m)return Math.abs(m)>1?p:(a+p+m)%a}},Mr=function(e){return function(t){var n,r=(n=kt(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},ot=function(e,t,n){var r=e.map(function(a){var l=a.node;return l}),o=tt(r.filter(Mr(n)));return o&&o.length?nt(o):nt(tt(t))},_e=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&_e(e.parentNode.host||e.parentNode,t),t},be=function(e,t){for(var n=_e(e),r=_e(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},Rt=function(e,t,n){var r=P(e),o=P(t),a=r[0],l=!1;return o.filter(Boolean).forEach(function(i){l=be(l||i,i)||l,n.filter(Boolean).forEach(function(f){var d=be(a,f);d&&(!l||D(d,l)?l=d:l=be(d,l))})}),l},at=function(e,t){return e.reduce(function(n,r){return n.concat(pr(r,t))},[])},Sr=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(ir)},Fr=function(e,t){var n=Q(P(e).length>0?document:Mt(e).ownerDocument),r=qe(e).filter(ke),o=Rt(n||e,e,r),a=new Map,l=Z(r,a),i=l.filter(function(h){var s=h.node;return ke(s)});if(i[0]){var f=Z([o],a).map(function(h){var s=h.node;return s}),d=Sr(f,i),g=d.map(function(h){var s=h.node;return s}),p=d.filter(function(h){var s=h.tabIndex;return s>=0}).map(function(h){var s=h.node;return s}),m=Cr(g,p,f,n,t);if(m===Te){var y=ot(l,p,at(r,a))||ot(l,g,at(r,a));if(y)return{node:y};console.warn("focus-lock: cannot find any node to move focus into");return}return m===void 0?m:d[m]}},Er=function(e){var t=qe(e).filter(ke),n=Rt(e,e,t),r=Ve(G([n],!0),!0,!0),o=G(t,!1);return r.map(function(a){var l=a.node,i=a.index;return{node:l,index:i,lockItem:o.indexOf(l)>=0,guard:Pe(l)}})},He=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},we=0,xe=!1,Dt=function(e,t,n){n===void 0&&(n={});var r=Fr(e,t);if(!xe&&r){if(we>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),xe=!0,setTimeout(function(){xe=!1},1);return}we++,He(r.node,n.focusOptions),we--}};function Y(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return t?.deref()||null}}var Or=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:Y(n),parent:Y(n.parentElement),left:Y(n.previousElementSibling),right:Y(n.nextElementSibling)}),n=n.parentElement;return{element:Y(e),stack:t,ownerDocument:e.ownerDocument}},kr=function(e){var t,n,r,o,a;if(e)for(var l=e.stack,i=e.ownerDocument,f=new Map,d=0,g=l;d<g.length;d++){var p=g[d],m=(t=p.parent)===null||t===void 0?void 0:t.call(p);if(m&&i.contains(m)){for(var y=(n=p.left)===null||n===void 0?void 0:n.call(p),h=p.current(),s=m.contains(h)?h:void 0,v=(r=p.right)===null||r===void 0?void 0:r.call(p),x=Le([m],f),w=(a=(o=s??y?.nextElementSibling)!==null&&o!==void 0?o:v)!==null&&a!==void 0?a:y;w;){for(var b=0,M=x;b<M.length;b++){var C=M[b];if(w?.contains(C.node))return C.node}w=w.nextElementSibling}if(x.length)return x[0].node}}},Pt=function(e){var t=Or(e);return function(){return kr(t)}},Tr=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=P(t);if(r.every(function(l){return!D(l,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?Le(r,new Map):Z(r,new Map),a=o.findIndex(function(l){var i=l.node;return i===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},_r=function(e,t){var n=t?Le(P(e),new Map):Z(P(e),new Map);return{first:n[0],last:n[n.length-1]}},Nr=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},Vt=function(e,t,n){t===void 0&&(t={});var r=Nr(t),o=Tr(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&He(a.node,r.focusOptions)}},Ir=function(e,t){t===void 0&&(t={}),Vt(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},Br=function(e,t){t===void 0&&(t={}),Vt(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},jt=function(e,t,n){var r,o=_r(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&He(a.node,t.focusOptions)},Rr=function(e,t){t===void 0&&(t={}),jt(e,t,"first")},Dr=function(e,t){t===void 0&&(t={}),jt(e,t,"last")};function Ue(e){setTimeout(e,1)}var Pr=function(t){return t&&"current"in t?t.current:t},At=function(){return document&&document.activeElement===document.body},Vr=function(){return At()||br()},q=null,S=null,lt=function(){return null},W=null,K=!1,ze=!1,jr=function(){return!0},Ar=function(t){return(q.whiteList||jr)(t)},Lr=function(t,n){W={observerNode:t,portaledElement:n}},qr=function(t){return W&&W.portaledElement===t};function it(e,t,n,r){var o=null,a=e;do{var l=r[a];if(l.guard)l.node.dataset.focusAutoGuard&&(o=l);else if(l.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var Wr=function(t){return t?!!K:K==="meanwhile"},Hr=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Ur=function(t,n){return n.some(function(r){return Hr(t,r,r)})},Lt=function(t){return Z(t,new Map)},zr=function(t){return!Lt([t.parentNode]).some(function(n){return n.node===t})},ce=function(){var t=!1;if(q){var n=q,r=n.observed,o=n.persistentFocus,a=n.autoFocus,l=n.shards,i=n.crossFrame,f=n.focusOptions,d=n.noFocusGuards,g=r||W&&W.portaledElement;if(At()&&S&&S!==document.body&&(!document.body.contains(S)||zr(S))){var p=lt();p&&p.focus()}var m=document&&document.activeElement;if(g){var y=[g].concat(l.map(Pr).filter(Boolean)),h=function(){if(!Wr(i)||!d||!S||ze)return!1;var b=Lt(y),M=b.findIndex(function(C){var F=C.node;return F===S});return M===0||M===b.length-1};if((!m||Ar(m))&&(o||h()||!Vr()||!S&&a)&&(g&&!(Bt(y)||m&&Ur(m,y)||qr(m))&&(document&&!S&&m&&!a?(m.blur&&m.blur(),document.body.focus()):(t=Dt(y,S,{focusOptions:f}),W={})),S=document&&document.activeElement,S!==document.body&&(lt=Pt(S)),K=!1),document&&m!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var s=document&&document.activeElement,v=Er(y),x=v.map(function(w){var b=w.node;return b}).indexOf(s);x>-1&&(v.filter(function(w){var b=w.guard,M=w.node;return b&&M.dataset.focusAutoGuard}).forEach(function(w){var b=w.node;return b.removeAttribute("tabIndex")}),it(x,v.length,1,v),it(x,-1,-1,v))}}}return t},qt=function(t){ce()&&t&&(t.stopPropagation(),t.preventDefault())},Ge=function(){return Ue(ce)},Gr=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Lr(r,n)},$r=function(){return null},Wt=function(){ze=!0},Ht=function(){ze=!1,K="just",Ue(function(){K="meanwhile"})},Yr=function(){document.addEventListener("focusin",qt),document.addEventListener("focusout",Ge),window.addEventListener("focus",Wt),window.addEventListener("blur",Ht)},Xr=function(){document.removeEventListener("focusin",qt),document.removeEventListener("focusout",Ge),window.removeEventListener("focus",Wt),window.removeEventListener("blur",Ht)};function Zr(e){return e.filter(function(t){var n=t.disabled;return!n})}var Ut={moveFocusInside:Dt,focusInside:Bt,focusNextElement:Ir,focusPrevElement:Br,focusFirstElement:Rr,focusLastElement:Dr,captureFocusRestore:Pt};function Qr(e){var t=e.slice(-1)[0];t&&!q&&Yr();var n=q,r=n&&t&&t.id===n.id;q=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(S=null,(!r||n.observed!==t.observed)&&t.onActivation(Ut),ce(),Ue(ce)):(Xr(),S=null)}xt.assignSyncMedium(Gr);Ct.assignMedium(Ge);Yn.assignMedium(function(e){return e(Ut)});const Kr=Jn(Zr,Qr)($r);var zt=u.forwardRef(function(t,n){return _.createElement(De,Se({sideCar:Kr,ref:n},t))}),Gt=De.propTypes||{};Gt.sideCar;xn(Gt,["sideCar"]);zt.propTypes={};var ue="right-scroll-bar-position",se="width-before-scroll-bar",Jr="with-scroll-bars-hidden",eo="--removed-body-scroll-bar-size",$t=bt(),Ce=function(){},me=u.forwardRef(function(e,t){var n=u.useRef(null),r=u.useState({onScrollCapture:Ce,onWheelCapture:Ce,onTouchMoveCapture:Ce}),o=r[0],a=r[1],l=e.forwardProps,i=e.children,f=e.className,d=e.removeScrollBar,g=e.enabled,p=e.shards,m=e.sideCar,y=e.noRelative,h=e.noIsolation,s=e.inert,v=e.allowPinchZoom,x=e.as,w=x===void 0?"div":x,b=e.gapMode,M=ft(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=m,F=ht([n,t]),E=B(B({},M),o);return u.createElement(u.Fragment,null,g&&u.createElement(C,{sideCar:$t,removeScrollBar:d,shards:p,noRelative:y,noIsolation:h,inert:s,setCallbacks:a,allowPinchZoom:!!v,lockRef:n,gapMode:b}),l?u.cloneElement(u.Children.only(i),B(B({},E),{ref:F})):u.createElement(w,B({},E,{className:f,ref:F}),i))});me.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};me.classNames={fullWidth:se,zeroRight:ue};var to=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function no(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=to();return t&&e.setAttribute("nonce",t),e}function ro(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function oo(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var ao=function(){var e=0,t=null;return{add:function(n){e==0&&(t=no())&&(ro(t,n),oo(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},lo=function(){var e=ao();return function(t,n){u.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Yt=function(){var e=lo(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},io={left:0,top:0,right:0,gap:0},Me=function(e){return parseInt(e||"",10)||0},uo=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Me(n),Me(r),Me(o)]},so=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return io;var t=uo(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},co=Yt(),H="data-scroll-locked",fo=function(e,t,n,r){var o=e.left,a=e.top,l=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Jr,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(H,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ue,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(se,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(ue," .").concat(ue,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(se," .").concat(se,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(H,`] {
    `).concat(eo,": ").concat(i,`px;
  }
`)},ut=function(){var e=parseInt(document.body.getAttribute(H)||"0",10);return isFinite(e)?e:0},mo=function(){u.useEffect(function(){return document.body.setAttribute(H,(ut()+1).toString()),function(){var e=ut()-1;e<=0?document.body.removeAttribute(H):document.body.setAttribute(H,e.toString())}},[])},po=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;mo();var a=u.useMemo(function(){return so(o)},[o]);return u.createElement(co,{styles:fo(a,!t,o,n?"":"!important")})},Ne=!1;if(typeof window<"u")try{var te=Object.defineProperty({},"passive",{get:function(){return Ne=!0,!0}});window.addEventListener("test",te,te),window.removeEventListener("test",te,te)}catch{Ne=!1}var A=Ne?{passive:!1}:!1,vo=function(e){return e.tagName==="TEXTAREA"},Xt=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!vo(e)&&n[t]==="visible")},ho=function(e){return Xt(e,"overflowY")},go=function(e){return Xt(e,"overflowX")},st=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Zt(e,r);if(o){var a=Qt(e,r),l=a[1],i=a[2];if(l>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},yo=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},bo=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Zt=function(e,t){return e==="v"?ho(t):go(t)},Qt=function(e,t){return e==="v"?yo(t):bo(t)},wo=function(e,t){return e==="h"&&t==="rtl"?-1:1},xo=function(e,t,n,r,o){var a=wo(e,window.getComputedStyle(t).direction),l=a*r,i=n.target,f=t.contains(i),d=!1,g=l>0,p=0,m=0;do{var y=Qt(e,i),h=y[0],s=y[1],v=y[2],x=s-v-a*h;(h||x)&&Zt(e,i)&&(p+=x,m+=h),i=i.parentNode.host||i.parentNode}while(!f&&i!==document.body||f&&(t.contains(i)||t===i));return(g&&Math.abs(p)<1||!g&&Math.abs(m)<1)&&(d=!0),d},ne=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ct=function(e){return[e.deltaX,e.deltaY]},dt=function(e){return e&&"current"in e?e.current:e},Co=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Mo=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},So=0,L=[];function Fo(e){var t=u.useRef([]),n=u.useRef([0,0]),r=u.useRef(),o=u.useState(So++)[0],a=u.useState(Yt)[0],l=u.useRef(e);u.useEffect(function(){l.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var s=Fn([e.lockRef.current],(e.shards||[]).map(dt),!0).filter(Boolean);return s.forEach(function(v){return v.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),s.forEach(function(v){return v.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=u.useCallback(function(s,v){if("touches"in s&&s.touches.length===2||s.type==="wheel"&&s.ctrlKey)return!l.current.allowPinchZoom;var x=ne(s),w=n.current,b="deltaX"in s?s.deltaX:w[0]-x[0],M="deltaY"in s?s.deltaY:w[1]-x[1],C,F=s.target,E=Math.abs(b)>Math.abs(M)?"h":"v";if("touches"in s&&E==="h"&&F.type==="range")return!1;var I=st(E,F);if(!I)return!0;if(I?C=E:(C=E==="v"?"h":"v",I=st(E,F)),!I)return!1;if(!r.current&&"changedTouches"in s&&(b||M)&&(r.current=C),!C)return!0;var J=r.current||C;return xo(J,v,s,J==="h"?b:M)},[]),f=u.useCallback(function(s){var v=s;if(!(!L.length||L[L.length-1]!==a)){var x="deltaY"in v?ct(v):ne(v),w=t.current.filter(function(C){return C.name===v.type&&(C.target===v.target||v.target===C.shadowParent)&&Co(C.delta,x)})[0];if(w&&w.should){v.cancelable&&v.preventDefault();return}if(!w){var b=(l.current.shards||[]).map(dt).filter(Boolean).filter(function(C){return C.contains(v.target)}),M=b.length>0?i(v,b[0]):!l.current.noIsolation;M&&v.cancelable&&v.preventDefault()}}},[]),d=u.useCallback(function(s,v,x,w){var b={name:s,delta:v,target:x,should:w,shadowParent:Eo(x)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(M){return M!==b})},1)},[]),g=u.useCallback(function(s){n.current=ne(s),r.current=void 0},[]),p=u.useCallback(function(s){d(s.type,ct(s),s.target,i(s,e.lockRef.current))},[]),m=u.useCallback(function(s){d(s.type,ne(s),s.target,i(s,e.lockRef.current))},[]);u.useEffect(function(){return L.push(a),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:m}),document.addEventListener("wheel",f,A),document.addEventListener("touchmove",f,A),document.addEventListener("touchstart",g,A),function(){L=L.filter(function(s){return s!==a}),document.removeEventListener("wheel",f,A),document.removeEventListener("touchmove",f,A),document.removeEventListener("touchstart",g,A)}},[]);var y=e.removeScrollBar,h=e.inert;return u.createElement(u.Fragment,null,h?u.createElement(a,{styles:Mo(o)}):null,y?u.createElement(po,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Eo(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Oo=$n($t,Fo);var Kt=u.forwardRef(function(e,t){return u.createElement(me,B({},e,{ref:t,sideCar:Oo}))});Kt.classNames=me.classNames;const ko=()=>{const[e,t]=u.useState(0);return u.useLayoutEffect(()=>{const n=document.createElement("div");n.style.visibility="hidden",n.style.overflow="scroll",document.body.appendChild(n);const r=document.createElement("div");n.appendChild(r),t(n.offsetWidth-r.offsetWidth),n?.parentNode?.removeChild(n)},[]),e},$=({children:e,opened:t,title:n,onClose:r,size:o="default",overflow:a="auto",inPortal:l=!0,className:i})=>{const f=u.useRef(null),d=u.useRef(null);u.useEffect(()=>{const m=f.current,y=d.current;if(!t||!y||!m)return;const h=s=>{!s.defaultPrevented&&s.key==="Escape"&&r()};return y.open||y.show(),document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}},[t,r]);const g=ko();if(!t)return null;const p=c.jsx(zt,{children:c.jsx(Kt,{children:c.jsx("div",{className:N.dialogOverlay,ref:f,children:c.jsx("dialog",{ref:d,"aria-label":n??"Dialog","aria-modal":"true",className:fe(N.dialog,i,{[N[o]]:o}),style:{"--louis-modal-overflow":a},children:c.jsx(Fe,{value:{onClose:r},children:c.jsx("div",{className:N.content,style:{"--louis-modal-scrollbar-width":`${g}px`},children:e})})})})})});return l?c.jsx(En,{children:p}):p};try{$.displayName="ModalShell",$.__docgenInfo={description:"",displayName:"ModalShell",props:{opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string"}},overflow:{defaultValue:{value:"auto"},description:"Sets css overflow.",name:"overflow",required:!1,type:{name:"Overflow"}},inPortal:{defaultValue:{value:"true"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user presses "Escape". Not executed when the user clicks outside the modal.',name:"onClose",required:!0,type:{name:"() => void"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"default"},description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"wide"'}]}}}}}catch{}const Ie=({children:e,confirmText:t,closeText:n="Close",loading:r=!1,title:o,tooltipTitle:a,onClose:l,onConfirm:i,...f})=>c.jsxs($,{title:o,onClose:l,...f,children:[c.jsx(z,{children:o}),c.jsx(U,{children:e}),c.jsxs(X,{children:[c.jsx(O,{appearance:"accent",variant:"tertiary",onClick:l,children:n}),c.jsx(mt,{tooltip:a,show:!!a,children:c.jsx(O,{appearance:"accent",variant:"primary",loading:r,onClick:i,children:t})})]})]});try{Ie.displayName="ConfirmModal",Ie.__docgenInfo={description:"",displayName:"ConfirmModal",props:{opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"Sets css overflow.",name:"overflow",required:!1,type:{name:"Overflow"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user presses "Escape". Not executed when the user clicks outside the modal.',name:"onClose",required:!0,type:{name:"() => void"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"wide"'}]}},confirmText:{defaultValue:null,description:"Renders text content in the confirm button.",name:"confirmText",required:!0,type:{name:"string"}},closeText:{defaultValue:{value:"Close"},description:"Renders text content in the close button.",name:"closeText",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading state for the confirm button.",name:"loading",required:!1,type:{name:"boolean"}},tooltipTitle:{defaultValue:null,description:"Renders a tooltip on the confirm button when passed.",name:"tooltipTitle",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Function executed when the confirm button is clicked.",name:"onConfirm",required:!0,type:{name:"() => void"}}}}}catch{}const Be=({children:e,confirmText:t,closeText:n="Close",loading:r=!1,title:o,tooltipTitle:a,onClose:l,onConfirm:i,...f})=>c.jsxs($,{title:o,onClose:l,...f,children:[c.jsx(z,{children:o}),c.jsx(U,{children:e}),c.jsxs(X,{children:[c.jsx(O,{appearance:"accent",variant:"tertiary",onClick:l,children:n}),c.jsx(mt,{tooltip:a,show:!!a,children:c.jsx(O,{appearance:"danger",variant:"primary",loading:r,onClick:i,children:t})})]})]});try{Be.displayName="DangerModal",Be.__docgenInfo={description:"",displayName:"DangerModal",props:{opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"Sets css overflow.",name:"overflow",required:!1,type:{name:"Overflow"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user presses "Escape". Not executed when the user clicks outside the modal.',name:"onClose",required:!0,type:{name:"() => void"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"wide"'}]}},confirmText:{defaultValue:null,description:"Renders text content in the confirm button.",name:"confirmText",required:!0,type:{name:"string"}},closeText:{defaultValue:{value:"Close"},description:"Renders text content in the close button.",name:"closeText",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading state for the confirm button.",name:"loading",required:!1,type:{name:"boolean"}},tooltipTitle:{defaultValue:null,description:"Renders a tooltip on the confirm button when passed.",name:"tooltipTitle",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Function executed when the confirm button is clicked.",name:"onConfirm",required:!0,type:{name:"() => void"}}}}}catch{}const de=({children:e,title:t,...n})=>c.jsxs($,{title:t,...n,children:[c.jsx(z,{children:t}),c.jsx(U,{children:e})]});try{de.displayName="Modal",de.__docgenInfo={description:"",displayName:"Modal",props:{opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"Sets css overflow.",name:"overflow",required:!1,type:{name:"Overflow"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user presses "Escape". Not executed when the user clicks outside the modal.',name:"onClose",required:!0,type:{name:"() => void"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"wide"'}]}}}}}catch{}const la={title:"Components/Modal",component:de,parameters:{controls:{sort:"requiredFirst",exclude:["children"]},docs:{source:{excludeDecorators:!0},description:{component:"Modal is a window overlaid on either the primary window or another dialog window. Content behind a modal is inert, meaning that users cannot interact with it.\n\nModal exports 3 facade components that are used for common modal use cases:\n- `Modal`: Opinionated facade component that provides reasonable defaults for most situations.\n- `ConfirmModal`: Used to quickly create a confirmation modal with a primary confirm button and a secondary close button.\n- `DangerModal`: Used to quickly create a danger modal with a primary danger button and a secondary close button.\n\nModal exports 5 components to help you create any modal dialog:\n- `ModalShell`: A modal with all the functionality but without header, close button, and paddings.\n- `ModalCloseButton`: Button that closes the modal.\n- `ModalHeader`: Component that wraps modal heading and close button.\n- `ModalBody`: Wrapper for the content that adds spacing from the sides.\n- `ModalFooter`: Wrapper that houses the modal actions. If used together with `ModalBody` it makes `ModalBody` scrollable.\n- `ModalActions`: Wrapper that houses the modal actions.\n\n[Figma Source File | Modal](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A36149)"}}},argTypes:{overflow:{control:{type:"text"}},onClose:{action:"closed"},onConfirm:{action:"confirmed"}},decorators:[e=>c.jsxs(c.Fragment,{children:[c.jsx(On,{}),e()]})]},To=e=>{const[t,n]=u.useState(e.opened||!1);return u.useEffect(()=>{n(e.opened||!1)},[e.opened]),c.jsxs(c.Fragment,{children:[c.jsx(O,{variant:"secondary",onClick:()=>n(!0),children:"Open Modal"}),c.jsx(de,{...e,opened:t,onClose:()=>{n(!1),e.onClose?.()},children:"This is a simple modal that has heading, close button and some spacing on the sides. ".repeat(10)})]})},_o=e=>{const[t,n]=u.useState(e.opened||!1),[r,o]=u.useState(e.inputValue||""),[a,l]=u.useState(e.dateValue||null),i=u.useRef(null);return u.useEffect(()=>{n(e.opened||!1),o(e.inputValue||""),l(e.dateValue||null)},[e.opened,e.inputValue,e.dateValue]),u.useEffect(()=>{t&&i.current!==null&&i.current.focus()},[t]),c.jsxs(c.Fragment,{children:[c.jsx(O,{variant:"secondary",onClick:()=>n(!0),children:"Open ConfirmModal"}),c.jsx(O,{onClick:()=>{Je({type:"success",title:"System-wide notification",autoClose:!1})},variant:"secondary",style:{marginLeft:"5px"},children:"Trigger toast notification"}),c.jsxs(Ie,{...e,opened:t,onClose:()=>{n(!1),e.onClose?.()},onConfirm:()=>{n(!1),e.onConfirm?.()},children:[c.jsx(O,{onClick:()=>{Je({type:"success",title:"Modal notification",autoClose:!1})},variant:"secondary",children:"Trigger toast notification"}),c.jsx("p",{children:"This is a modal that already provides all the necessary action buttons, and can take any other content or form fields."}),c.jsx(Tn,{value:r,onChange:f=>o(f.target.value),placeholder:"Enter text"},"textinput"),c.jsx("p",{children:"For example, a DatePicker, using the positioning prop to ensure it can overlap outside of the Modal."}),c.jsx(kn,{onChange:l,value:a??void 0,positioning:"fixed"}),c.jsx("p",{children:"Or a Select menu that gets focus through useRef and useEffect, and uses the menuPosition prop to overlap outside of the Modal."}),c.jsx(Cn,{options:[...new Array(41).keys()].slice(1).map(f=>({value:`option${f}`,label:`Option ${f}`})),ref:i,openMenuOnFocus:!0,isMulti:!0,menuPosition:"fixed"})]})]})},Jt=e=>{const[t,n]=u.useState(e.opened||!1);u.useEffect(()=>{n(e.opened||!1)},[e.opened]);const r=e.children||"This is a modal that already provides all the necessary action buttons. ";return c.jsxs(c.Fragment,{children:[c.jsx(O,{variant:"secondary",onClick:()=>n(!0),children:"Open DangerModal"}),c.jsx(Be,{...e,opened:t,onClose:()=>{n(!1),e.onClose?.()},onConfirm:()=>{n(!1),e.onConfirm?.()},children:typeof r=="string"?r.repeat(e.title==="Scrollable danger modal"?100:1):r})]})},No=e=>{const[t,n]=u.useState(e.opened||!1);return u.useEffect(()=>{n(e.opened||!1)},[e.opened]),c.jsxs(c.Fragment,{children:[c.jsx(O,{variant:"secondary",onClick:()=>n(!0),children:"Open Modal"}),c.jsx("form",{action:"",children:c.jsxs($,{...e,opened:t,onClose:()=>{n(!1),e.onClose?.()},children:[c.jsx(z,{children:e.title}),c.jsx(U,{children:"This modal is special with a modal body which is scrollable. If ModalBody and ModalFooter are used together inside ModalShell then ModalBody will become scrollable and modal will not exceed viewport height. ".repeat(100)}),c.jsx(X,{children:c.jsx(O,{variant:"primary",onClick:()=>n(!1),children:"Close"})})]})})]})},re={args:{opened:!1,title:"Default modal"},render:To,parameters:{docs:{source:{code:`
import { useState } from 'react';
import { Modal, Button } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal opened={opened} title="Default modal" onClose={() => setOpened(false)}>
        'This is a simple modal that has heading, close button and some spacing on the sides.'
      </Modal>
    </>
  );
};`}}}},oe={name:"ConfirmModal",args:{opened:!1,title:"Confirm modal",closeText:"Cancel",confirmText:"Confirm",loading:!1,tooltipTitle:"Click here to confirm",inputValue:"",dateValue:null},render:_o,parameters:{docs:{source:{code:`
import { useState, useRef, useEffect } from 'react';
import { ConfirmModal, Button, Input, DatePicker, Select } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dateValue, setDateValue] = useState(null);
  const selectEl = useRef(null);

  useEffect(() => {
    if (opened && selectEl.current !== null) {
      selectEl.current.focus();
    }
  }, [opened]);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open ConfirmModal</Button>
      <ConfirmModal
        opened={opened}
        title="Confirm modal"
        onClose={() => setOpened(false)}
        onConfirm={() => setOpened(false)}
      >
        <p>
          This is a modal that already provides all the necessary action buttons, and can take any other
          content or form fields.
        </p>
        <Input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter text" 
        />
        <p>
          For example, a DatePicker, using the positioning prop to ensure it can overlap outside of the Modal.
        </p>
        <DatePicker onChange={setDateValue} value={dateValue} positioning="fixed" />
        <p>
          Or a Select menu that gets focus through useRef and useEffect, and uses the menuPosition prop to
          overlap outside of the Modal.
        </p>
        <Select
          options={[...Array(41).keys()].slice(1).map((e) => {
            return { value: 'option' + e, label: 'Option ' + e };
          })}
          ref={selectEl}
          openMenuOnFocus
          isMulti
          menuPosition="fixed"
        />
      </ConfirmModal>
    </>
  );
};`}}}},ae={name:"DangerModal",args:{opened:!1,title:"Danger modal",closeText:"Cancel",confirmText:"Delete",loading:!1,tooltipTitle:"Click here to delete"},render:Jt,parameters:{docs:{source:{code:`
import { useState } from 'react';
import { DangerModal, Button } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open DangerModal</Button>
      <DangerModal
        opened={opened}
        title="Danger modal"
        onClose={() => setOpened(false)}
        onConfirm={() => setOpened(false)}
      >
        'This is a modal that already provides all the necessary action buttons.'
      </DangerModal>
    </>
  );
};`}}}},le={args:{opened:!1,title:"Scrollable"},render:No,parameters:{docs:{description:{story:"\nMake `Modal` contents scrollable by using `ModalBody` together with `ModalFooter` inside `ModalShell`. `ModalHeader` and `ModalFooter` will stay fixed and modal will not exceed viewport height.\n\nSource order matters, so make sure `ModalFooter` is used right after `ModalBody`. For cases where `ModalBody` and `ModalFooter` might be wrapped in a `form` element, just wrap whole `ModalShell` in that element.\n\n#### Edge cases\n\nThis implementation is based on `:has` CSS selector which currently is not supported in Firefox. In Firefox modal will have default scroll.\n"},source:{code:`
import { useState } from 'react';
import { Modal, ModalShell, ModalHeader, ModalBody, ModalFooter, Button } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Scrollable modal</Button>
      <Modal opened={opened} title="Scrollable" onClose={() => setOpened(false)}>
        <form action="">
          <ModalShell title="Scrollable" onClose={() => setOpened(false)}>
            <ModalHeader>Scrollable</ModalHeader>
            <ModalBody>
              This modal is special with a modal body which is scrollable. If ModalBody and ModalFooter
              are used together inside ModalShell then ModalBody will become scrollable and modal will not
              exceed viewport height.
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setOpened(false)}>
                Close
              </Button>
            </ModalFooter>
          </ModalShell>
        </form>
      </Modal>
    </>
  );
};`}}}},ie={args:{opened:!1,title:"Scrollable danger modal",closeText:"Cancel",confirmText:"Delete",loading:!1,tooltipTitle:"Click here to delete"},render:Jt};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false,
    title: 'Default modal'
  },
  render: ModalTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
import { useState } from 'react';
import { Modal, Button } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal opened={opened} title="Default modal" onClose={() => setOpened(false)}>
        'This is a simple modal that has heading, close button and some spacing on the sides.'
      </Modal>
    </>
  );
};\`
      }
    }
  }
}`,...re.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  name: 'ConfirmModal',
  args: {
    opened: false,
    title: 'Confirm modal',
    closeText: 'Cancel',
    confirmText: 'Confirm',
    loading: false,
    tooltipTitle: 'Click here to confirm',
    inputValue: '',
    dateValue: null
  },
  render: ConfirmModalTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
import { useState, useRef, useEffect } from 'react';
import { ConfirmModal, Button, Input, DatePicker, Select } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dateValue, setDateValue] = useState(null);
  const selectEl = useRef(null);

  useEffect(() => {
    if (opened && selectEl.current !== null) {
      selectEl.current.focus();
    }
  }, [opened]);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open ConfirmModal</Button>
      <ConfirmModal
        opened={opened}
        title="Confirm modal"
        onClose={() => setOpened(false)}
        onConfirm={() => setOpened(false)}
      >
        <p>
          This is a modal that already provides all the necessary action buttons, and can take any other
          content or form fields.
        </p>
        <Input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter text" 
        />
        <p>
          For example, a DatePicker, using the positioning prop to ensure it can overlap outside of the Modal.
        </p>
        <DatePicker onChange={setDateValue} value={dateValue} positioning="fixed" />
        <p>
          Or a Select menu that gets focus through useRef and useEffect, and uses the menuPosition prop to
          overlap outside of the Modal.
        </p>
        <Select
          options={[...Array(41).keys()].slice(1).map((e) => {
            return { value: 'option' + e, label: 'Option ' + e };
          })}
          ref={selectEl}
          openMenuOnFocus
          isMulti
          menuPosition="fixed"
        />
      </ConfirmModal>
    </>
  );
};\`
      }
    }
  }
}`,...oe.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  name: 'DangerModal',
  args: {
    opened: false,
    title: 'Danger modal',
    closeText: 'Cancel',
    confirmText: 'Delete',
    loading: false,
    tooltipTitle: 'Click here to delete'
  },
  render: DangerModalTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
import { useState } from 'react';
import { DangerModal, Button } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open DangerModal</Button>
      <DangerModal
        opened={opened}
        title="Danger modal"
        onClose={() => setOpened(false)}
        onConfirm={() => setOpened(false)}
      >
        'This is a modal that already provides all the necessary action buttons.'
      </DangerModal>
    </>
  );
};\`
      }
    }
  }
}`,...ae.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false,
    title: 'Scrollable'
  },
  render: ScrollableModalTemplate,
  parameters: {
    docs: {
      description: {
        story: \`
Make \\\`Modal\\\` contents scrollable by using \\\`ModalBody\\\` together with \\\`ModalFooter\\\` inside \\\`ModalShell\\\`. \\\`ModalHeader\\\` and \\\`ModalFooter\\\` will stay fixed and modal will not exceed viewport height.

Source order matters, so make sure \\\`ModalFooter\\\` is used right after \\\`ModalBody\\\`. For cases where \\\`ModalBody\\\` and \\\`ModalFooter\\\` might be wrapped in a \\\`form\\\` element, just wrap whole \\\`ModalShell\\\` in that element.

#### Edge cases

This implementation is based on \\\`:has\\\` CSS selector which currently is not supported in Firefox. In Firefox modal will have default scroll.
\`
      },
      source: {
        code: \`
import { useState } from 'react';
import { Modal, ModalShell, ModalHeader, ModalBody, ModalFooter, Button } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Scrollable modal</Button>
      <Modal opened={opened} title="Scrollable" onClose={() => setOpened(false)}>
        <form action="">
          <ModalShell title="Scrollable" onClose={() => setOpened(false)}>
            <ModalHeader>Scrollable</ModalHeader>
            <ModalBody>
              This modal is special with a modal body which is scrollable. If ModalBody and ModalFooter
              are used together inside ModalShell then ModalBody will become scrollable and modal will not
              exceed viewport height.
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setOpened(false)}>
                Close
              </Button>
            </ModalFooter>
          </ModalShell>
        </form>
      </Modal>
    </>
  );
};\`
      }
    }
  }
}`,...le.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false,
    title: 'Scrollable danger modal',
    closeText: 'Cancel',
    confirmText: 'Delete',
    loading: false,
    tooltipTitle: 'Click here to delete'
  },
  render: DangerModalTemplate
}`,...ie.parameters?.docs?.source}}};const ia=["Default","ConfirmModalStory","DangerModalStory","Scrollable","ScrollableDangerModal"];export{oe as ConfirmModalStory,ae as DangerModalStory,re as Default,le as Scrollable,ie as ScrollableDangerModal,ia as __namedExportsOrder,la as default};
