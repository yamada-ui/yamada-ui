import{j as r}from"./jsx-runtime-CfatFE5O.js";import{r as d,R as Po}from"./index-ClcD9ViR.js";import{P as u}from"./index-CpCSUgdU.js";import{c as Io,f as Ro,d as nr}from"./form-control-C2QLAsqZ.js";import{F as Lo}from"./fade-WdbTOJ-L.js";import{L as Mo}from"./loading-DkRHwhPr.js";import{p as Bo,Z as $o,J as No,e as Uo,b as lr,c as Vo,d as be}from"./factory-Cp1Ju9mN.js";import{f as Ho}from"./forward-ref-D13m8o2p.js";import{a as Ko}from"./use-component-style-BGLOU3Ga.js";import{o as Yo}from"./theme-provider-DMHFYkuw.js";import{U as Ye,I as Ge}from"./upload-BZfT9oQE.js";import{X as We}from"./x-cY8xpFbP.js";import{T as s}from"./text-CIX2g0cs.js";import{V as N,H as Xe}from"./stack-oDGa6EY5.js";import{B as Go}from"./button-vnBqyEiG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./forward-ref-2BKBy0Yi.js";import"./factory-CYGsRDnQ.js";import"./utils-CehLRonx.js";import"./icon-Ch8QFxk9.js";import"./use-var-cHPN6Ir7.js";import"./createLucideIcon-DHJHrKis.js";import"./use-ripple-SSdhQaN8.js";const ie={csv:"text/csv",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",exe:"application/vnd.microsoft.portable-executable",gif:"image/gif",html:"text/html",jpeg:"image/jpeg",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",pdf:"application/pdf",png:"image/png",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",svg:"image/svg+xml",txt:"text/plain",webp:"image/webp",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",zip:"application/zip"},se=[ie.png,ie.gif,ie.jpeg,ie.svg,ie.webp],Wo=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function ae(e,o){const n=Xo(e);if(typeof n.path!="string"){const{webkitRelativePath:i}=e;Object.defineProperty(n,"path",{value:typeof o=="string"?o:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Xo(e){const{name:o}=e;if(o&&o.lastIndexOf(".")!==-1&&!e.type){const i=o.split(".").pop().toLowerCase(),c=Wo.get(i);c&&Object.defineProperty(e,"type",{value:c,writable:!1,configurable:!1,enumerable:!0})}return e}var U=(e,o,n)=>new Promise((i,c)=>{var g=z=>{try{p(n.next(z))}catch(v){c(v)}},f=z=>{try{p(n.throw(z))}catch(v){c(v)}},p=z=>z.done?i(z.value):Promise.resolve(z.value).then(g,f);p((n=n.apply(e,o)).next())});const qo=[".DS_Store","Thumbs.db"];function Jo(e){return U(this,null,function*(){return Ue(e)&&Zo(e.dataTransfer)?on(e.dataTransfer,e.type):Qo(e)?en(e):Array.isArray(e)&&e.every(o=>"getFile"in o&&typeof o.getFile=="function")?rn(e):[]})}function Zo(e){return Ue(e)}function Qo(e){return Ue(e)&&Ue(e.target)}function Ue(e){return typeof e=="object"&&e!==null}function en(e){return rr(e.target.files).map(o=>ae(o))}function rn(e){return U(this,null,function*(){return(yield Promise.all(e.map(n=>n.getFile()))).map(n=>ae(n))})}function on(e,o){return U(this,null,function*(){if(e.items){const n=rr(e.items).filter(c=>c.kind==="file");if(o!=="drop")return n;const i=yield Promise.all(n.map(nn));return pr(jo(i))}return pr(rr(e.files).map(n=>ae(n)))})}function pr(e){return e.filter(o=>qo.indexOf(o.name)===-1)}function rr(e){if(e===null)return[];const o=[];for(let n=0;n<e.length;n++){const i=e[n];o.push(i)}return o}function nn(e){if(typeof e.webkitGetAsEntry!="function")return dr(e);const o=e.webkitGetAsEntry();return o&&o.isDirectory?yo(o):dr(e)}function jo(e){return e.reduce((o,n)=>[...o,...Array.isArray(n)?jo(n):[n]],[])}function dr(e){const o=e.getAsFile();if(!o)return Promise.reject(`${e} is not a File`);const n=ae(o);return Promise.resolve(n)}function tn(e){return U(this,null,function*(){return e.isDirectory?yo(e):sn(e)})}function yo(e){const o=e.createReader();return new Promise((n,i)=>{const c=[];function g(){o.readEntries(f=>U(this,null,function*(){if(f.length){const p=Promise.all(f.map(tn));c.push(p),g()}else try{const p=yield Promise.all(c);n(p)}catch(p){i(p)}}),f=>{i(f)})}g()})}function sn(e){return U(this,null,function*(){return new Promise((o,n)=>{e.file(i=>{const c=ae(i,e.fullPath);o(c)},i=>{n(i)})})})}function an(e,o){if(e&&o){const n=Array.isArray(o)?o:o.split(","),i=e.name||"",c=(e.type||"").toLowerCase(),g=c.replace(/\/.*$/,"");return n.some(f=>{const p=f.trim().toLowerCase();return p.charAt(0)==="."?i.toLowerCase().endsWith(p):p.endsWith("/*")?g===p.replace(/\/.*$/,""):c===p})}return!0}var cn=Object.defineProperty,ln=Object.defineProperties,pn=Object.getOwnPropertyDescriptors,fr=Object.getOwnPropertySymbols,dn=Object.prototype.hasOwnProperty,fn=Object.prototype.propertyIsEnumerable,ur=(e,o,n)=>o in e?cn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,un=(e,o)=>{for(var n in o||(o={}))dn.call(o,n)&&ur(e,n,o[n]);if(fr)for(var n of fr(o))fn.call(o,n)&&ur(e,n,o[n]);return e},mn=(e,o)=>ln(e,pn(o));const gn="file-invalid-type",xn="file-too-large",hn="file-too-small",Dn="too-many-files",zn=e=>{e=Array.isArray(e)&&e.length===1?e[0]:e;const o=Array.isArray(e)?`one of ${e.join(", ")}`:e;return{code:gn,message:`File type must be ${o}`}},mr=e=>({code:xn,message:`File is larger than ${e} ${e===1?"byte":"bytes"}`}),gr=e=>({code:hn,message:`File is smaller than ${e} ${e===1?"byte":"bytes"}`}),jn={code:Dn,message:"Too many files"};function bo(e,o){const n=e.type==="application/x-moz-file"||an(e,o);return[n,n?null:zn(o)]}function vo(e,o,n){if(I(e.size))if(I(o)&&I(n)){if(e.size>n)return[!1,mr(n)];if(e.size<o)return[!1,gr(o)]}else{if(I(o)&&e.size<o)return[!1,gr(o)];if(I(n)&&e.size>n)return[!1,mr(n)]}return[!0,null]}function I(e){return e!=null}function yn({files:e,accept:o,minSize:n,maxSize:i,multiple:c,maxFiles:g,validator:f}){return!c&&e.length>1||c&&g>=1&&e.length>g?!1:e.every(p=>{const[z]=bo(p,o),[v]=vo(p,n,i),F=f?f(p):null;return z&&v&&!F})}function Ve(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ve(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,o=>o==="Files"||o==="application/x-moz-file"):!!e.target&&!!e.target.files}function xr(e){e.preventDefault()}function bn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function vn(e){return e.indexOf("Edge/")!==-1}function kn(e=window.navigator.userAgent){return bn(e)||vn(e)}function S(...e){return(o,...n)=>e.some(i=>(!Ve(o)&&i&&i(o,...n),Ve(o)))}function Sn(){return"showOpenFilePicker"in window}function Tn(e){return I(e)?[{description:"Files",accept:Object.entries(e).filter(([n,i])=>{let c=!0;return ko(n)||(console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`),c=!1),(!Array.isArray(i)||!i.every(So))&&(console.warn(`Skipped "${n}" because an invalid file extension was provided.`),c=!1),c}).reduce((n,[i,c])=>mn(un({},n),{[i]:c}),{})}]:e}function An(e){if(I(e))return Object.entries(e).reduce((o,[n,i])=>[...o,n,...i],[]).filter(o=>ko(o)||So(o)).join(",")}function wn(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function _n(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function ko(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function So(e){return/^.*\.[\w]+$/.test(e)}var En=Object.defineProperty,Fn=Object.defineProperties,On=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,To=Object.prototype.hasOwnProperty,Ao=Object.prototype.propertyIsEnumerable,hr=(e,o,n)=>o in e?En(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,j=(e,o)=>{for(var n in o||(o={}))To.call(o,n)&&hr(e,n,o[n]);if(He)for(var n of He(o))Ao.call(o,n)&&hr(e,n,o[n]);return e},E=(e,o)=>Fn(e,On(o)),Ke=(e,o)=>{var n={};for(var i in e)To.call(e,i)&&o.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&He)for(var i of He(e))o.indexOf(i)<0&&Ao.call(e,i)&&(n[i]=e[i]);return n};const tr=d.forwardRef((e,o)=>{var n=e,{children:i}=n,c=Ke(n,["children"]);const g=_o(c),{open:f}=g,p=Ke(g,["open"]);return d.useImperativeHandle(o,()=>({open:f}),[f]),Po.createElement(d.Fragment,null,i(E(j({},p),{open:f})))});tr.displayName="Dropzone";const wo={disabled:!1,getFilesFromEvent:Jo,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};tr.defaultProps=wo;tr.propTypes={children:u.func,accept:u.objectOf(u.arrayOf(u.string)),multiple:u.bool,preventDropOnDocument:u.bool,noClick:u.bool,noKeyboard:u.bool,noDrag:u.bool,noDragEventsBubbling:u.bool,minSize:u.number,maxSize:u.number,maxFiles:u.number,disabled:u.bool,getFilesFromEvent:u.func,onFileDialogCancel:u.func,onFileDialogOpen:u.func,useFsAccessApi:u.bool,autoFocus:u.bool,onDragEnter:u.func,onDragLeave:u.func,onDragOver:u.func,onDrop:u.func,onDropAccepted:u.func,onDropRejected:u.func,onError:u.func,validator:u.func};const or={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function _o(e={}){const{accept:o,disabled:n,getFilesFromEvent:i,maxSize:c,minSize:g,multiple:f,maxFiles:p,onDragEnter:z,onDragLeave:v,onDragOver:F,onDrop:A,onDropAccepted:Y,onDropRejected:G,onFileDialogCancel:W,onFileDialogOpen:X,useFsAccessApi:ce,autoFocus:le,preventDropOnDocument:q,noClick:pe,noKeyboard:J,noDrag:de,noDragEventsBubbling:T,onError:Z,validator:O}=j(j({},wo),e),C=d.useMemo(()=>An(o),[o]),fe=d.useMemo(()=>Tn(o),[o]),Q=d.useMemo(()=>typeof X=="function"?X:Dr,[X]),R=d.useMemo(()=>typeof W=="function"?W:Dr,[W]),x=d.useRef(null),y=d.useRef(null),[ue,h]=d.useReducer(Cn,or),{isFocused:me,isFileDialogActive:ge}=ue,L=d.useRef(typeof window<"u"&&window.isSecureContext&&ce&&Sn()),ee=()=>{!L.current&&ge&&setTimeout(()=>{if(y.current){const{files:t}=y.current;t.length||(h({type:"closeDialog"}),R())}},300)};d.useEffect(()=>(window.addEventListener("focus",ee,!1),()=>{window.removeEventListener("focus",ee,!1)}),[y,ge,R,L]);const w=d.useRef([]),M=t=>{x.current&&x.current.contains(t.target)||(t.preventDefault(),w.current=[])};d.useEffect(()=>(q&&(document.addEventListener("dragover",xr,!1),document.addEventListener("drop",M,!1)),()=>{q&&(document.removeEventListener("dragover",xr),document.removeEventListener("drop",M))}),[x,q]),d.useEffect(()=>(!n&&le&&x.current&&x.current.focus(),()=>{}),[x,le,n]);const k=d.useCallback(t=>{Z?Z(t):console.error(t)},[Z]),xe=d.useCallback(t=>{t.preventDefault(),t.persist(),ye(t),w.current=[...w.current,t.target],ve(t)&&Promise.resolve(i(t)).then(l=>{if(Ve(t)&&!T)return;const m=l.length,D=m>0&&yn({files:l,accept:C,minSize:g,maxSize:c,multiple:f,maxFiles:p,validator:O}),b=m>0&&!D;h({isDragAccept:D,isDragReject:b,isDragActive:!0,type:"setDraggedFiles"}),z&&z(t)}).catch(l=>k(l))},[i,z,k,T,C,g,c,f,p,O]),he=d.useCallback(t=>{t.preventDefault(),t.persist(),ye(t);const l=ve(t);if(l&&t.dataTransfer)try{t.dataTransfer.dropEffect="copy"}catch{}return l&&F&&F(t),!1},[F,T]),De=d.useCallback(t=>{t.preventDefault(),t.persist(),ye(t);const l=w.current.filter(D=>x.current&&x.current.contains(D)),m=l.indexOf(t.target);m!==-1&&l.splice(m,1),w.current=l,!(l.length>0)&&(h({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ve(t)&&v&&v(t))},[x,v,T]),P=d.useCallback((t,l)=>{const m=[],D=[];t.forEach(b=>{const[re,oe]=bo(b,C),[Ze,Qe]=vo(b,g,c),ne=O?O(b):null;if(re&&Ze&&!ne)m.push(b);else{let te=[oe,Qe];ne&&(te=te.concat(ne)),D.push({file:b,errors:te.filter(er=>er)})}}),(!f&&m.length>1||f&&p>=1&&m.length>p)&&(m.forEach(b=>{D.push({file:b,errors:[jn]})}),m.splice(0)),h({acceptedFiles:m,fileRejections:D,type:"setFiles"}),A&&A(m,D,l),D.length>0&&G&&G(D,l),m.length>0&&Y&&Y(m,l)},[h,f,C,g,c,p,A,Y,G,O]),B=d.useCallback(t=>{t.preventDefault(),t.persist(),ye(t),w.current=[],ve(t)&&Promise.resolve(i(t)).then(l=>{Ve(t)&&!T||P(l,t)}).catch(l=>k(l)),h({type:"reset"})},[i,P,k,T]),_=d.useCallback(()=>{if(L.current){h({type:"openDialog"}),Q();const t={multiple:f,types:fe};window.showOpenFilePicker(t).then(l=>i(l)).then(l=>{P(l,null),h({type:"closeDialog"})}).catch(l=>{wn(l)?(R(l),h({type:"closeDialog"})):_n(l)?(L.current=!1,y.current?(y.current.value=null,y.current.click()):k(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):k(l)});return}y.current&&(h({type:"openDialog"}),Q(),y.current.value=null,y.current.click())},[h,Q,R,ce,P,k,fe,f]),ze=d.useCallback(t=>{!x.current||!x.current.isEqualNode(t.target)||(t.key===" "||t.key==="Enter"||t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),_())},[x,_]),sr=d.useCallback(()=>{h({type:"focus"})},[]),ar=d.useCallback(()=>{h({type:"blur"})},[]),cr=d.useCallback(()=>{pe||(kn()?setTimeout(_,0):_())},[pe,_]),$=t=>n?null:t,Je=t=>J?null:$(t),je=t=>de?null:$(t),ye=t=>{T&&t.stopPropagation()},Eo=d.useMemo(()=>(t={})=>{var l=t,{refKey:m="ref",role:D,onKeyDown:b,onFocus:re,onBlur:oe,onClick:Ze,onDragEnter:Qe,onDragOver:ne,onDragLeave:te,onDrop:er}=l,Co=Ke(l,["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return j(j({onKeyDown:Je(S(b,ze)),onFocus:Je(S(re,sr)),onBlur:Je(S(oe,ar)),onClick:$(S(Ze,cr)),onDragEnter:je(S(Qe,xe)),onDragOver:je(S(ne,he)),onDragLeave:je(S(te,De)),onDrop:je(S(er,B)),role:typeof D=="string"&&D!==""?D:"presentation",[m]:x},!n&&!J?{tabIndex:0}:{}),Co)},[x,ze,sr,ar,cr,xe,he,De,B,J,de,n]),Fo=d.useCallback(t=>{t.stopPropagation()},[]),Oo=d.useMemo(()=>(t={})=>{var l=t,{refKey:m="ref",onChange:D,onClick:b}=l,re=Ke(l,["refKey","onChange","onClick"]);const oe={accept:C,multiple:f,type:"file",style:{display:"none"},onChange:$(S(D,B)),onClick:$(S(b,Fo)),tabIndex:-1,[m]:y};return j(j({},oe),re)},[y,o,f,B,n]);return E(j({},ue),{isFocused:me&&!n,getRootProps:Eo,getInputProps:Oo,rootRef:x,inputRef:y,open:$(_)})}function Cn(e,o){switch(o.type){case"focus":return E(j({},e),{isFocused:!0});case"blur":return E(j({},e),{isFocused:!1});case"openDialog":return E(j({},or),{isFileDialogActive:!0});case"closeDialog":return E(j({},e),{isFileDialogActive:!1});case"setDraggedFiles":return E(j({},e),{isDragActive:o.isDragActive,isDragAccept:o.isDragAccept,isDragReject:o.isDragReject});case"setFiles":return E(j({},e),{acceptedFiles:o.acceptedFiles,fileRejections:o.fileRejections});case"reset":return j({},or);default:return e}}function Dr(){}const[Pn,qe]=Bo({name:"DropzoneContext",errorMessage:`useDropzoneContext returned is 'undefined'. Seems you forgot to wrap the components in "<Dropzone />"`}),a=Ho((e,o)=>{const[n,i]=Ko("Dropzone",e);let{id:c,name:g,className:f,accept:p,autoFocus:z,children:v,isLoading:F,loading:A,maxFiles:Y,maxSize:G,multiple:W,noClick:X,noDrag:ce,noDragEventsBubbling:le,noKeyboard:q,openRef:pe,preventDropOnDocument:J,useFsAccessApi:de,loadingProps:T,overlayProps:Z,onDragEnter:O,onDragLeave:C,onDragOver:fe,onDrop:Q,onDropAccepted:R,onDropRejected:x,onFileDialogCancel:y,onFileDialogOpen:ue,...h}=Io(Yo(i));const me=d.useId();A??(A=F);const ge=A||h.disabled||h.readOnly,[{"aria-readonly":L,...ee},w]=$o(h,Ro),{isDragAccept:M,isDragReject:k,open:xe,getInputProps:he,getRootProps:De}=_o({accept:No(p)?p.reduce((_,ze)=>({..._,[ze]:[]}),{}):p,autoFocus:z,disabled:ge,maxFiles:Y,maxSize:G,multiple:W,noClick:X,noDrag:ce,noDragEventsBubbling:le,noKeyboard:q,preventDropOnDocument:J,useFsAccessApi:de,onDragEnter:O,onDragLeave:C,onDragOver:fe,onDrop:Q,onDropAccepted:R,onDropRejected:x,onFileDialogCancel:y,onFileDialogOpen:ue});Uo(pe,xe);const P=!M&&!k,B={alignItems:"center",display:"flex",justifyContent:"center",position:"relative",...n.container};return r.jsx(Pn,{value:{dragAccept:M,dragIdle:P,dragReject:k,loading:A,styles:n},children:r.jsxs(lr.div,{id:me,className:Vo("ui-dropzone",f),__css:B,...ee,...w,...De({}),"data-accept":be(M),"data-idle":be(P),"data-loading":be(A),"data-reject":be(k),children:[r.jsx(ir,{loadingProps:T,...Z}),r.jsx(lr.input,{id:c,ref:o,name:g,"aria-labelledby":me,"aria-readonly":L,...ee,...he()}),v]})})});a.displayName="Dropzone";a.__ui__="Dropzone";const ir=({loadingProps:e,...o})=>{const{loading:n,styles:i}=qe(),c={alignItems:"center",display:"flex",h:"100%",justifyContent:"center",left:0,position:"absolute",top:0,w:"100%",...i.overlay};return r.jsx(Lo,{className:"ui-dropzone__overlay",open:n,unmountOnExit:!0,__css:c,...o,children:r.jsx(Mo,{className:"ui-dropzone__overlay__loading",fontSize:"4xl",...e})})};ir.displayName="DropzoneLoadingOverlay";ir.__ui__="DropzoneLoadingOverlay";const V=({children:e})=>{const{dragAccept:o}=qe();return o?e:null};V.displayName="DropzoneAccept";V.__ui__="DropzoneAccept";const H=({children:e})=>{const{dragReject:o}=qe();return o?e:null};H.displayName="DropzoneReject";H.__ui__="DropzoneReject";const K=({children:e})=>{const{dragIdle:o}=qe();return o?e:null};K.displayName="DropzoneIdle";K.__ui__="DropzoneIdle";const st={component:a,title:"Components / Forms / Dropzone"},ke=()=>r.jsx(a,{children:r.jsx(s,{children:"Drag file here or click to select file"})}),Se=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{size:"xs",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{size:"sm",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{size:"md",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{size:"lg",children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Te=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"dashed",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{variant:"solid",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{variant:"unstyled",children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Ae=()=>r.jsx(a,{multiple:!0,children:r.jsx(s,{children:"Drag files here or click to select files"})}),we=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{accept:se,children:r.jsx(s,{children:"Drag image here or click to select image"})}),r.jsx(a,{accept:{"image/*":[]},children:r.jsx(s,{children:"Drag image here or click to select image"})})]}),_e=()=>r.jsx(a,{maxSize:3*1024**2,children:r.jsxs(N,{gap:"2xs",w:"auto",children:[r.jsx(s,{fontSize:"xl",children:"Drag file here or click to select file"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})}),Ee=()=>r.jsx(a,{maxFiles:3,multiple:!0,children:r.jsxs(N,{gap:"2xs",w:"auto",children:[r.jsx(s,{fontSize:"xl",children:"Drag file here or click to select file"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, can upload up to 3 files"})]})}),Fe=()=>r.jsx(a,{accept:se,maxSize:3*1024**2,children:r.jsxs(Xe,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(V,{children:r.jsx(Ye,{color:"success",fontSize:"6xl"})}),r.jsx(H,{children:r.jsx(We,{color:"danger",fontSize:"6xl"})}),r.jsx(K,{children:r.jsx(Ge,{fontSize:"6xl"})}),r.jsxs(N,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Oe=()=>r.jsx(a,{accept:se,maxSize:3*1024**2,onDrop:(e,o)=>console.log("accepted files",e,"rejected files",o),children:r.jsxs(Xe,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(V,{children:r.jsx(Ye,{color:"success",fontSize:"6xl"})}),r.jsx(H,{children:r.jsx(We,{color:"danger",fontSize:"6xl"})}),r.jsx(K,{children:r.jsx(Ge,{fontSize:"6xl"})}),r.jsxs(N,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Ce=()=>r.jsx(a,{accept:se,maxSize:3*1024**2,onDropAccepted:e=>console.log("accepted files",e),children:r.jsxs(Xe,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(V,{children:r.jsx(Ye,{color:"success",fontSize:"6xl"})}),r.jsx(H,{children:r.jsx(We,{color:"danger",fontSize:"6xl"})}),r.jsx(K,{children:r.jsx(Ge,{fontSize:"6xl"})}),r.jsxs(N,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Pe=()=>r.jsx(a,{accept:se,maxSize:3*1024**2,onDropRejected:e=>console.log("rejected files",e),children:r.jsxs(Xe,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(V,{children:r.jsx(Ye,{color:"success",fontSize:"6xl"})}),r.jsx(H,{children:r.jsx(We,{color:"danger",fontSize:"6xl"})}),r.jsx(K,{children:r.jsx(Ge,{fontSize:"6xl"})}),r.jsxs(N,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Ie=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{focusBorderColor:"green.500",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{errorBorderColor:"orange.500",isInvalid:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Re=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"dashed",isDisabled:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{variant:"solid",isDisabled:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(nr,{isDisabled:!0,label:"Upload file",children:r.jsx(a,{children:r.jsx(s,{children:"Drag file here or click to select file"})})})]}),Le=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"dashed",isReadOnly:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{variant:"solid",isReadOnly:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(nr,{isReadOnly:!0,label:"Upload file",children:r.jsx(a,{children:r.jsx(s,{children:"Drag file here or click to select file"})})})]}),Me=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"dashed",isInvalid:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{variant:"solid",isInvalid:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(nr,{errorMessage:"File is required.",isInvalid:!0,label:"Upload file",children:r.jsx(a,{children:r.jsx(s,{children:"Drag file here or click to select file"})})})]}),Be=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"dashed",isLoading:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{variant:"solid",isLoading:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),$e=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{isLoading:!0,loadingProps:{variant:"grid"},children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{isLoading:!0,loadingProps:{color:"secondary"},children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Ne=()=>{const e=d.useRef(null),o=()=>{var n;return(n=e.current)==null?void 0:n.call(e)};return r.jsxs(r.Fragment,{children:[r.jsx(Go,{onClick:o,children:"Select file"}),r.jsx(a,{openRef:e,children:r.jsx(s,{children:"Drag file here or click to select file"})})]})};var zr,jr,yr;ke.parameters={...ke.parameters,docs:{...(zr=ke.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  return <Dropzone>
      <Text>Drag file here or click to select file</Text>
    </Dropzone>;
}`,...(yr=(jr=ke.parameters)==null?void 0:jr.docs)==null?void 0:yr.source}}};var br,vr,kr;Se.parameters={...Se.parameters,docs:{...(br=Se.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <>
      <Dropzone size="xs">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone size="sm">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone size="md">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone size="lg">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(kr=(vr=Se.parameters)==null?void 0:vr.docs)==null?void 0:kr.source}}};var Sr,Tr,Ar;Te.parameters={...Te.parameters,docs:{...(Sr=Te.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  return <>
      <Dropzone variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="unstyled">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(Ar=(Tr=Te.parameters)==null?void 0:Tr.docs)==null?void 0:Ar.source}}};var wr,_r,Er;Ae.parameters={...Ae.parameters,docs:{...(wr=Ae.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <Dropzone multiple>
      <Text>Drag files here or click to select files</Text>
    </Dropzone>;
}`,...(Er=(_r=Ae.parameters)==null?void 0:_r.docs)==null?void 0:Er.source}}};var Fr,Or,Cr;we.parameters={...we.parameters,docs:{...(Fr=we.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <>
      <Dropzone accept={IMAGE_ACCEPT_TYPE}>
        <Text>Drag image here or click to select image</Text>
      </Dropzone>

      <Dropzone accept={{
      "image/*": []
    }}>
        <Text>Drag image here or click to select image</Text>
      </Dropzone>
    </>;
}`,...(Cr=(Or=we.parameters)==null?void 0:Or.docs)==null?void 0:Cr.source}}};var Pr,Ir,Rr;_e.parameters={..._e.parameters,docs:{...(Pr=_e.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <Dropzone maxSize={3 * 1024 ** 2}>
      <VStack gap="2xs" w="auto">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, each file should not exceed 5mb
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Rr=(Ir=_e.parameters)==null?void 0:Ir.docs)==null?void 0:Rr.source}}};var Lr,Mr,Br;Ee.parameters={...Ee.parameters,docs:{...(Lr=Ee.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  return <Dropzone maxFiles={3} multiple>
      <VStack gap="2xs" w="auto">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, can upload up to 3 files
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Br=(Mr=Ee.parameters)==null?void 0:Mr.docs)==null?void 0:Br.source}}};var $r,Nr,Ur;Fe.parameters={...Fe.parameters,docs:{...($r=Fe.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <UploadIcon color="success" fontSize="6xl" />
        </DropzoneAccept>

        <DropzoneReject>
          <XIcon color="danger" fontSize="6xl" />
        </DropzoneReject>

        <DropzoneIdle>
          <UploadImage fontSize="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>;
}`,...(Ur=(Nr=Fe.parameters)==null?void 0:Nr.docs)==null?void 0:Ur.source}}};var Vr,Hr,Kr;Oe.parameters={...Oe.parameters,docs:{...(Vr=Oe.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDrop={(acceptedFiles, fileRejections) => console.log("accepted files", acceptedFiles, "rejected files", fileRejections)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <UploadIcon color="success" fontSize="6xl" />
        </DropzoneAccept>

        <DropzoneReject>
          <XIcon color="danger" fontSize="6xl" />
        </DropzoneReject>

        <DropzoneIdle>
          <UploadImage fontSize="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>;
}`,...(Kr=(Hr=Oe.parameters)==null?void 0:Hr.docs)==null?void 0:Kr.source}}};var Yr,Gr,Wr;Ce.parameters={...Ce.parameters,docs:{...(Yr=Ce.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDropAccepted={files => console.log("accepted files", files)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <UploadIcon color="success" fontSize="6xl" />
        </DropzoneAccept>

        <DropzoneReject>
          <XIcon color="danger" fontSize="6xl" />
        </DropzoneReject>

        <DropzoneIdle>
          <UploadImage fontSize="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>;
}`,...(Wr=(Gr=Ce.parameters)==null?void 0:Gr.docs)==null?void 0:Wr.source}}};var Xr,qr,Jr;Pe.parameters={...Pe.parameters,docs:{...(Xr=Pe.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDropRejected={files => console.log("rejected files", files)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <UploadIcon color="success" fontSize="6xl" />
        </DropzoneAccept>

        <DropzoneReject>
          <XIcon color="danger" fontSize="6xl" />
        </DropzoneReject>

        <DropzoneIdle>
          <UploadImage fontSize="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>;
}`,...(Jr=(qr=Pe.parameters)==null?void 0:qr.docs)==null?void 0:Jr.source}}};var Zr,Qr,eo;Ie.parameters={...Ie.parameters,docs:{...(Zr=Ie.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
  return <>
      <Dropzone focusBorderColor="green.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone errorBorderColor="orange.500" isInvalid>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(eo=(Qr=Ie.parameters)==null?void 0:Qr.docs)==null?void 0:eo.source}}};var ro,oo,no;Re.parameters={...Re.parameters,docs:{...(ro=Re.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
  return <>
      <Dropzone variant="dashed" isDisabled>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="solid" isDisabled>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl isDisabled label="Upload file">
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>;
}`,...(no=(oo=Re.parameters)==null?void 0:oo.docs)==null?void 0:no.source}}};var to,io,so;Le.parameters={...Le.parameters,docs:{...(to=Le.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  return <>
      <Dropzone variant="dashed" isReadOnly>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="solid" isReadOnly>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl isReadOnly label="Upload file">
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>;
}`,...(so=(io=Le.parameters)==null?void 0:io.docs)==null?void 0:so.source}}};var ao,co,lo;Me.parameters={...Me.parameters,docs:{...(ao=Me.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
  return <>
      <Dropzone variant="dashed" isInvalid>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="solid" isInvalid>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl errorMessage="File is required." isInvalid label="Upload file">
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>;
}`,...(lo=(co=Me.parameters)==null?void 0:co.docs)==null?void 0:lo.source}}};var po,fo,uo;Be.parameters={...Be.parameters,docs:{...(po=Be.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
  return <>
      <Dropzone variant="dashed" isLoading>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="solid" isLoading>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(uo=(fo=Be.parameters)==null?void 0:fo.docs)==null?void 0:uo.source}}};var mo,go,xo;$e.parameters={...$e.parameters,docs:{...(mo=$e.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <>
      <Dropzone isLoading loadingProps={{
      variant: "grid"
    }}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isLoading loadingProps={{
      color: "secondary"
    }}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(xo=(go=$e.parameters)==null?void 0:go.docs)==null?void 0:xo.source}}};var ho,Do,zo;Ne.parameters={...Ne.parameters,docs:{...(ho=Ne.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  const openRef = useRef<() => void>(null);
  const onOpen = () => openRef.current?.();
  return <>
      <Button onClick={onOpen}>Select file</Button>

      <Dropzone openRef={openRef}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(zo=(Do=Ne.parameters)==null?void 0:Do.docs)==null?void 0:zo.source}}};const at=["basic","withSize","withVariant","withMultiple","withAccept","withMaxSize","withMaxFiles","withStatus","useOnDrop","useOnDropAccepted","useOnDropRejected","withBorderColor","isDisabled","isReadonly","isInvalid","isLoading","customLoading","useOpen"];export{at as __namedExportsOrder,ke as basic,$e as customLoading,st as default,Re as isDisabled,Me as isInvalid,Be as isLoading,Le as isReadonly,Oe as useOnDrop,Ce as useOnDropAccepted,Pe as useOnDropRejected,Ne as useOpen,we as withAccept,Ie as withBorderColor,Ee as withMaxFiles,_e as withMaxSize,Ae as withMultiple,Se as withSize,Fe as withStatus,Te as withVariant};