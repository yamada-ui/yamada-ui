import{j as r}from"./jsx-runtime-CfatFE5O.js";import{r as d,R as Po}from"./index-ClcD9ViR.js";import{P as u}from"./index-CpCSUgdU.js";import{c as Io,f as Ro,d as or}from"./form-control-DiJsSBY_.js";import{F as Lo}from"./fade-C8ScaGFA.js";import{L as Mo}from"./loading-BptEEwSR.js";import{p as Bo,Z as $o,J as No,e as Uo,b as lr,c as Vo,d as je}from"./factory-Db31n_eg.js";import{f as Ho}from"./forward-ref-D13m8o2p.js";import{a as Ko}from"./use-component-style-5HWcAXul.js";import{o as Yo}from"./theme-provider-C-TvIt_J.js";import{U as He,I as Ke}from"./upload-GWQN5C1o.js";import{X as Ye}from"./x-CD7qd52f.js";import{T as s}from"./text-BffdhSXQ.js";import{V as N,H as Ge}from"./stack-CE6YRnd8.js";import{B as Go}from"./button-BDTEGqqa.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./forward-ref-2BKBy0Yi.js";import"./factory-BRZ9AYsk.js";import"./utils-KhqytcjU.js";import"./icon-BfxegGWg.js";import"./use-var-BbJRqi2C.js";import"./createLucideIcon-DHJHrKis.js";import"./use-ripple-shOr3g-0.js";const ae={csv:"text/csv",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",exe:"application/vnd.microsoft.portable-executable",gif:"image/gif",html:"text/html",jpeg:"image/jpeg",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",pdf:"application/pdf",png:"image/png",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",svg:"image/svg+xml",txt:"text/plain",webp:"image/webp",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",zip:"application/zip"},ce=[ae.png,ae.gif,ae.jpeg,ae.svg,ae.webp],Wo=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function le(e,o){const n=Xo(e);if(typeof n.path!="string"){const{webkitRelativePath:i}=e;Object.defineProperty(n,"path",{value:typeof o=="string"?o:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Xo(e){const{name:o}=e;if(o&&o.lastIndexOf(".")!==-1&&!e.type){const i=o.split(".").pop().toLowerCase(),c=Wo.get(i);c&&Object.defineProperty(e,"type",{value:c,writable:!1,configurable:!1,enumerable:!0})}return e}var U=(e,o,n)=>new Promise((i,c)=>{var g=D=>{try{p(n.next(D))}catch(v){c(v)}},f=D=>{try{p(n.throw(D))}catch(v){c(v)}},p=D=>D.done?i(D.value):Promise.resolve(D.value).then(g,f);p((n=n.apply(e,o)).next())});const qo=[".DS_Store","Thumbs.db"];function Jo(e){return U(this,null,function*(){return $e(e)&&Zo(e.dataTransfer)?on(e.dataTransfer,e.type):Qo(e)?en(e):Array.isArray(e)&&e.every(o=>"getFile"in o&&typeof o.getFile=="function")?rn(e):[]})}function Zo(e){return $e(e)}function Qo(e){return $e(e)&&$e(e.target)}function $e(e){return typeof e=="object"&&e!==null}function en(e){return er(e.target.files).map(o=>le(o))}function rn(e){return U(this,null,function*(){return(yield Promise.all(e.map(n=>n.getFile()))).map(n=>le(n))})}function on(e,o){return U(this,null,function*(){if(e.items){const n=er(e.items).filter(c=>c.kind==="file");if(o!=="drop")return n;const i=yield Promise.all(n.map(nn));return pr(jo(i))}return pr(er(e.files).map(n=>le(n)))})}function pr(e){return e.filter(o=>qo.indexOf(o.name)===-1)}function er(e){if(e===null)return[];const o=[];for(let n=0;n<e.length;n++){const i=e[n];o.push(i)}return o}function nn(e){if(typeof e.webkitGetAsEntry!="function")return dr(e);const o=e.webkitGetAsEntry();return o&&o.isDirectory?yo(o):dr(e)}function jo(e){return e.reduce((o,n)=>[...o,...Array.isArray(n)?jo(n):[n]],[])}function dr(e){const o=e.getAsFile();if(!o)return Promise.reject(`${e} is not a File`);const n=le(o);return Promise.resolve(n)}function tn(e){return U(this,null,function*(){return e.isDirectory?yo(e):sn(e)})}function yo(e){const o=e.createReader();return new Promise((n,i)=>{const c=[];function g(){o.readEntries(f=>U(this,null,function*(){if(f.length){const p=Promise.all(f.map(tn));c.push(p),g()}else try{const p=yield Promise.all(c);n(p)}catch(p){i(p)}}),f=>{i(f)})}g()})}function sn(e){return U(this,null,function*(){return new Promise((o,n)=>{e.file(i=>{const c=le(i,e.fullPath);o(c)},i=>{n(i)})})})}function an(e,o){if(e&&o){const n=Array.isArray(o)?o:o.split(","),i=e.name||"",c=(e.type||"").toLowerCase(),g=c.replace(/\/.*$/,"");return n.some(f=>{const p=f.trim().toLowerCase();return p.charAt(0)==="."?i.toLowerCase().endsWith(p):p.endsWith("/*")?g===p.replace(/\/.*$/,""):c===p})}return!0}var cn=Object.defineProperty,ln=Object.defineProperties,pn=Object.getOwnPropertyDescriptors,fr=Object.getOwnPropertySymbols,dn=Object.prototype.hasOwnProperty,fn=Object.prototype.propertyIsEnumerable,ur=(e,o,n)=>o in e?cn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,un=(e,o)=>{for(var n in o||(o={}))dn.call(o,n)&&ur(e,n,o[n]);if(fr)for(var n of fr(o))fn.call(o,n)&&ur(e,n,o[n]);return e},mn=(e,o)=>ln(e,pn(o));const gn="file-invalid-type",xn="file-too-large",hn="file-too-small",Dn="too-many-files",zn=e=>{e=Array.isArray(e)&&e.length===1?e[0]:e;const o=Array.isArray(e)?`one of ${e.join(", ")}`:e;return{code:gn,message:`File type must be ${o}`}},mr=e=>({code:xn,message:`File is larger than ${e} ${e===1?"byte":"bytes"}`}),gr=e=>({code:hn,message:`File is smaller than ${e} ${e===1?"byte":"bytes"}`}),jn={code:Dn,message:"Too many files"};function bo(e,o){const n=e.type==="application/x-moz-file"||an(e,o);return[n,n?null:zn(o)]}function vo(e,o,n){if(O(e.size))if(O(o)&&O(n)){if(e.size>n)return[!1,mr(n)];if(e.size<o)return[!1,gr(o)]}else{if(O(o)&&e.size<o)return[!1,gr(o)];if(O(n)&&e.size>n)return[!1,mr(n)]}return[!0,null]}function O(e){return e!=null}function yn({files:e,accept:o,minSize:n,maxSize:i,multiple:c,maxFiles:g,validator:f}){return!c&&e.length>1||c&&g>=1&&e.length>g?!1:e.every(p=>{const[D]=bo(p,o),[v]=vo(p,n,i),T=f?f(p):null;return D&&v&&!T})}function Ne(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ye(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,o=>o==="Files"||o==="application/x-moz-file"):!!e.target&&!!e.target.files}function xr(e){e.preventDefault()}function bn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function vn(e){return e.indexOf("Edge/")!==-1}function kn(e=window.navigator.userAgent){return bn(e)||vn(e)}function S(...e){return(o,...n)=>e.some(i=>(!Ne(o)&&i&&i(o,...n),Ne(o)))}function Sn(){return"showOpenFilePicker"in window}function Tn(e){return O(e)?[{description:"Files",accept:Object.entries(e).filter(([n,i])=>{let c=!0;return ko(n)||(console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`),c=!1),(!Array.isArray(i)||!i.every(So))&&(console.warn(`Skipped "${n}" because an invalid file extension was provided.`),c=!1),c}).reduce((n,[i,c])=>mn(un({},n),{[i]:c}),{})}]:e}function An(e){if(O(e))return Object.entries(e).reduce((o,[n,i])=>[...o,n,...i],[]).filter(o=>ko(o)||So(o)).join(",")}function wn(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function _n(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function ko(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function So(e){return/^.*\.[\w]+$/.test(e)}var En=Object.defineProperty,Fn=Object.defineProperties,On=Object.getOwnPropertyDescriptors,Ue=Object.getOwnPropertySymbols,To=Object.prototype.hasOwnProperty,Ao=Object.prototype.propertyIsEnumerable,hr=(e,o,n)=>o in e?En(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,j=(e,o)=>{for(var n in o||(o={}))To.call(o,n)&&hr(e,n,o[n]);if(Ue)for(var n of Ue(o))Ao.call(o,n)&&hr(e,n,o[n]);return e},_=(e,o)=>Fn(e,On(o)),Ve=(e,o)=>{var n={};for(var i in e)To.call(e,i)&&o.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&Ue)for(var i of Ue(e))o.indexOf(i)<0&&Ao.call(e,i)&&(n[i]=e[i]);return n};const nr=d.forwardRef((e,o)=>{var n=e,{children:i}=n,c=Ve(n,["children"]);const g=_o(c),{open:f}=g,p=Ve(g,["open"]);return d.useImperativeHandle(o,()=>({open:f}),[f]),Po.createElement(d.Fragment,null,i(_(j({},p),{open:f})))});nr.displayName="Dropzone";const wo={disabled:!1,getFilesFromEvent:Jo,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};nr.defaultProps=wo;nr.propTypes={children:u.func,accept:u.objectOf(u.arrayOf(u.string)),multiple:u.bool,preventDropOnDocument:u.bool,noClick:u.bool,noKeyboard:u.bool,noDrag:u.bool,noDragEventsBubbling:u.bool,minSize:u.number,maxSize:u.number,maxFiles:u.number,disabled:u.bool,getFilesFromEvent:u.func,onFileDialogCancel:u.func,onFileDialogOpen:u.func,useFsAccessApi:u.bool,autoFocus:u.bool,onDragEnter:u.func,onDragLeave:u.func,onDragOver:u.func,onDrop:u.func,onDropAccepted:u.func,onDropRejected:u.func,onError:u.func,validator:u.func};const rr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function _o(e={}){const{accept:o,disabled:n,getFilesFromEvent:i,maxSize:c,minSize:g,multiple:f,maxFiles:p,onDragEnter:D,onDragLeave:v,onDragOver:T,onDrop:Y,onDropAccepted:G,onDropRejected:W,onFileDialogCancel:X,onFileDialogOpen:q,useFsAccessApi:pe,autoFocus:de,preventDropOnDocument:J,noClick:fe,noKeyboard:Z,noDrag:ue,noDragEventsBubbling:A,onError:Q,validator:E}=j(j({},wo),e),F=d.useMemo(()=>An(o),[o]),me=d.useMemo(()=>Tn(o),[o]),ee=d.useMemo(()=>typeof q=="function"?q:Dr,[q]),C=d.useMemo(()=>typeof X=="function"?X:Dr,[X]),x=d.useRef(null),y=d.useRef(null),[P,z]=d.useReducer(Cn,rr),{isFocused:Xe,isFileDialogActive:re}=P,I=d.useRef(typeof window<"u"&&window.isSecureContext&&pe&&Sn()),R=()=>{!I.current&&re&&setTimeout(()=>{if(y.current){const{files:t}=y.current;t.length||(z({type:"closeDialog"}),C())}},300)};d.useEffect(()=>(window.addEventListener("focus",R,!1),()=>{window.removeEventListener("focus",R,!1)}),[y,re,C,I]);const k=d.useRef([]),ge=t=>{x.current&&x.current.contains(t.target)||(t.preventDefault(),k.current=[])};d.useEffect(()=>(J&&(document.addEventListener("dragover",xr,!1),document.addEventListener("drop",ge,!1)),()=>{J&&(document.removeEventListener("dragover",xr),document.removeEventListener("drop",ge))}),[x,J]),d.useEffect(()=>(!n&&de&&x.current&&x.current.focus(),()=>{}),[x,de,n]);const w=d.useCallback(t=>{Q?Q(t):console.error(t)},[Q]),xe=d.useCallback(t=>{t.preventDefault(),t.persist(),ze(t),k.current=[...k.current,t.target],ye(t)&&Promise.resolve(i(t)).then(l=>{if(Ne(t)&&!A)return;const m=l.length,h=m>0&&yn({files:l,accept:F,minSize:g,maxSize:c,multiple:f,maxFiles:p,validator:E}),b=m>0&&!h;z({isDragAccept:h,isDragReject:b,isDragActive:!0,type:"setDraggedFiles"}),D&&D(t)}).catch(l=>w(l))},[i,D,w,A,F,g,c,f,p,E]),oe=d.useCallback(t=>{t.preventDefault(),t.persist(),ze(t);const l=ye(t);if(l&&t.dataTransfer)try{t.dataTransfer.dropEffect="copy"}catch{}return l&&T&&T(t),!1},[T,A]),he=d.useCallback(t=>{t.preventDefault(),t.persist(),ze(t);const l=k.current.filter(h=>x.current&&x.current.contains(h)),m=l.indexOf(t.target);m!==-1&&l.splice(m,1),k.current=l,!(l.length>0)&&(z({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ye(t)&&v&&v(t))},[x,v,A]),L=d.useCallback((t,l)=>{const m=[],h=[];t.forEach(b=>{const[ne,te]=bo(b,F),[Je,Ze]=vo(b,g,c),ie=E?E(b):null;if(ne&&Je&&!ie)m.push(b);else{let se=[te,Ze];ie&&(se=se.concat(ie)),h.push({file:b,errors:se.filter(Qe=>Qe)})}}),(!f&&m.length>1||f&&p>=1&&m.length>p)&&(m.forEach(b=>{h.push({file:b,errors:[jn]})}),m.splice(0)),z({acceptedFiles:m,fileRejections:h,type:"setFiles"}),Y&&Y(m,h,l),h.length>0&&W&&W(h,l),m.length>0&&G&&G(m,l)},[z,f,F,g,c,p,Y,G,W,E]),M=d.useCallback(t=>{t.preventDefault(),t.persist(),ze(t),k.current=[],ye(t)&&Promise.resolve(i(t)).then(l=>{Ne(t)&&!A||L(l,t)}).catch(l=>w(l)),z({type:"reset"})},[i,L,w,A]),B=d.useCallback(()=>{if(I.current){z({type:"openDialog"}),ee();const t={multiple:f,types:me};window.showOpenFilePicker(t).then(l=>i(l)).then(l=>{L(l,null),z({type:"closeDialog"})}).catch(l=>{wn(l)?(C(l),z({type:"closeDialog"})):_n(l)?(I.current=!1,y.current?(y.current.value=null,y.current.click()):w(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):w(l)});return}y.current&&(z({type:"openDialog"}),ee(),y.current.value=null,y.current.click())},[z,ee,C,pe,L,w,me,f]),ir=d.useCallback(t=>{!x.current||!x.current.isEqualNode(t.target)||(t.key===" "||t.key==="Enter"||t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),B())},[x,B]),sr=d.useCallback(()=>{z({type:"focus"})},[]),ar=d.useCallback(()=>{z({type:"blur"})},[]),cr=d.useCallback(()=>{fe||(kn()?setTimeout(B,0):B())},[fe,B]),$=t=>n?null:t,qe=t=>Z?null:$(t),De=t=>ue?null:$(t),ze=t=>{A&&t.stopPropagation()},Eo=d.useMemo(()=>(t={})=>{var l=t,{refKey:m="ref",role:h,onKeyDown:b,onFocus:ne,onBlur:te,onClick:Je,onDragEnter:Ze,onDragOver:ie,onDragLeave:se,onDrop:Qe}=l,Co=Ve(l,["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return j(j({onKeyDown:qe(S(b,ir)),onFocus:qe(S(ne,sr)),onBlur:qe(S(te,ar)),onClick:$(S(Je,cr)),onDragEnter:De(S(Ze,xe)),onDragOver:De(S(ie,oe)),onDragLeave:De(S(se,he)),onDrop:De(S(Qe,M)),role:typeof h=="string"&&h!==""?h:"presentation",[m]:x},!n&&!Z?{tabIndex:0}:{}),Co)},[x,ir,sr,ar,cr,xe,oe,he,M,Z,ue,n]),Fo=d.useCallback(t=>{t.stopPropagation()},[]),Oo=d.useMemo(()=>(t={})=>{var l=t,{refKey:m="ref",onChange:h,onClick:b}=l,ne=Ve(l,["refKey","onChange","onClick"]);const te={accept:F,multiple:f,type:"file",style:{display:"none"},onChange:$(S(h,M)),onClick:$(S(b,Fo)),tabIndex:-1,[m]:y};return j(j({},te),ne)},[y,o,f,M,n]);return _(j({},P),{isFocused:Xe&&!n,getRootProps:Eo,getInputProps:Oo,rootRef:x,inputRef:y,open:$(B)})}function Cn(e,o){switch(o.type){case"focus":return _(j({},e),{isFocused:!0});case"blur":return _(j({},e),{isFocused:!1});case"openDialog":return _(j({},rr),{isFileDialogActive:!0});case"closeDialog":return _(j({},e),{isFileDialogActive:!1});case"setDraggedFiles":return _(j({},e),{isDragActive:o.isDragActive,isDragAccept:o.isDragAccept,isDragReject:o.isDragReject});case"setFiles":return _(j({},e),{acceptedFiles:o.acceptedFiles,fileRejections:o.fileRejections});case"reset":return j({},rr);default:return e}}function Dr(){}const[Pn,We]=Bo({name:"DropzoneContext",errorMessage:`useDropzoneContext returned is 'undefined'. Seems you forgot to wrap the components in "<Dropzone />"`}),a=Ho((e,o)=>{const[n,i]=Ko("Dropzone",e),{id:c,name:g,className:f,accept:p,autoFocus:D,children:v,isLoading:T,maxFiles:Y,maxSize:G,multiple:W,noClick:X,noDrag:q,noDragEventsBubbling:pe,noKeyboard:de,openRef:J,preventDropOnDocument:fe,useFsAccessApi:Z,loadingProps:ue,overlayProps:A,onDragEnter:Q,onDragLeave:E,onDragOver:F,onDrop:me,onDropAccepted:ee,onDropRejected:C,onFileDialogCancel:x,onFileDialogOpen:y,...P}=Io(Yo(i)),z=T||P.disabled||P.readOnly,[{"aria-readonly":Xe,...re},I]=$o(P,Ro),{isDragAccept:R,isDragReject:k,open:ge,getInputProps:w,getRootProps:xe}=_o({accept:No(p)?p.reduce((L,M)=>({...L,[M]:[]}),{}):p,autoFocus:D,disabled:z,maxFiles:Y,maxSize:G,multiple:W,noClick:X,noDrag:q,noDragEventsBubbling:pe,noKeyboard:de,preventDropOnDocument:fe,useFsAccessApi:Z,onDragEnter:Q,onDragLeave:E,onDragOver:F,onDrop:me,onDropAccepted:ee,onDropRejected:C,onFileDialogCancel:x,onFileDialogOpen:y});Uo(J,ge);const oe=!R&&!k,he={alignItems:"center",display:"flex",justifyContent:"center",position:"relative",...n.container};return r.jsx(Pn,{value:{isDragAccept:R,isDragIdle:oe,isDragReject:k,isLoading:T,styles:n},children:r.jsxs(lr.div,{className:Vo("ui-dropzone",f),__css:he,...re,...I,...xe({}),"data-accept":je(R),"data-idle":je(oe),"data-loading":je(T),"data-reject":je(k),children:[r.jsx(tr,{loadingProps:ue,...A}),r.jsx(lr.input,{id:c,ref:o,name:g,"aria-readonly":Xe,...re,...w()}),v]})})});a.displayName="Dropzone";a.__ui__="Dropzone";const tr=({loadingProps:e,...o})=>{const{isLoading:n,styles:i}=We(),c={alignItems:"center",display:"flex",h:"100%",justifyContent:"center",left:0,position:"absolute",top:0,w:"100%",...i.overlay};return r.jsx(Lo,{className:"ui-dropzone__overlay",isOpen:n,unmountOnExit:!0,__css:c,...o,children:r.jsx(Mo,{className:"ui-dropzone__overlay__loading",fontSize:"4xl",...e})})};tr.displayName="DropzoneLoadingOverlay";tr.__ui__="DropzoneLoadingOverlay";const V=({children:e})=>{const{isDragAccept:o}=We();return o?e:null};V.displayName="DropzoneAccept";V.__ui__="DropzoneAccept";const H=({children:e})=>{const{isDragReject:o}=We();return o?e:null};H.displayName="DropzoneReject";H.__ui__="DropzoneReject";const K=({children:e})=>{const{isDragIdle:o}=We();return o?e:null};K.displayName="DropzoneIdle";K.__ui__="DropzoneIdle";const st={component:a,title:"Components / Forms / Dropzone"},be=()=>r.jsx(a,{children:r.jsx(s,{children:"Drag file here or click to select file"})}),ve=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{size:"xs",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{size:"sm",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{size:"md",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{size:"lg",children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),ke=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"dashed",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{variant:"solid",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{variant:"unstyled",children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Se=()=>r.jsx(a,{multiple:!0,children:r.jsx(s,{children:"Drag files here or click to select files"})}),Te=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{accept:ce,children:r.jsx(s,{children:"Drag image here or click to select image"})}),r.jsx(a,{accept:{"image/*":[]},children:r.jsx(s,{children:"Drag image here or click to select image"})})]}),Ae=()=>r.jsx(a,{maxSize:3*1024**2,children:r.jsxs(N,{gap:"2xs",w:"auto",children:[r.jsx(s,{fontSize:"xl",children:"Drag file here or click to select file"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})}),we=()=>r.jsx(a,{maxFiles:3,multiple:!0,children:r.jsxs(N,{gap:"2xs",w:"auto",children:[r.jsx(s,{fontSize:"xl",children:"Drag file here or click to select file"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, can upload up to 3 files"})]})}),_e=()=>r.jsx(a,{accept:ce,maxSize:3*1024**2,children:r.jsxs(Ge,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(V,{children:r.jsx(He,{color:"success",fontSize:"6xl"})}),r.jsx(H,{children:r.jsx(Ye,{color:"danger",fontSize:"6xl"})}),r.jsx(K,{children:r.jsx(Ke,{fontSize:"6xl"})}),r.jsxs(N,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Ee=()=>r.jsx(a,{accept:ce,maxSize:3*1024**2,onDrop:(e,o)=>console.log("accepted files",e,"rejected files",o),children:r.jsxs(Ge,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(V,{children:r.jsx(He,{color:"success",fontSize:"6xl"})}),r.jsx(H,{children:r.jsx(Ye,{color:"danger",fontSize:"6xl"})}),r.jsx(K,{children:r.jsx(Ke,{fontSize:"6xl"})}),r.jsxs(N,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Fe=()=>r.jsx(a,{accept:ce,maxSize:3*1024**2,onDropAccepted:e=>console.log("accepted files",e),children:r.jsxs(Ge,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(V,{children:r.jsx(He,{color:"success",fontSize:"6xl"})}),r.jsx(H,{children:r.jsx(Ye,{color:"danger",fontSize:"6xl"})}),r.jsx(K,{children:r.jsx(Ke,{fontSize:"6xl"})}),r.jsxs(N,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Oe=()=>r.jsx(a,{accept:ce,maxSize:3*1024**2,onDropRejected:e=>console.log("rejected files",e),children:r.jsxs(Ge,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(V,{children:r.jsx(He,{color:"success",fontSize:"6xl"})}),r.jsx(H,{children:r.jsx(Ye,{color:"danger",fontSize:"6xl"})}),r.jsx(K,{children:r.jsx(Ke,{fontSize:"6xl"})}),r.jsxs(N,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Ce=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{focusBorderColor:"green.500",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{errorBorderColor:"orange.500",isInvalid:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Pe=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"dashed",isDisabled:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{variant:"solid",isDisabled:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(or,{isDisabled:!0,label:"Upload file",children:r.jsx(a,{children:r.jsx(s,{children:"Drag file here or click to select file"})})})]}),Ie=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"dashed",isReadOnly:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{variant:"solid",isReadOnly:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(or,{isReadOnly:!0,label:"Upload file",children:r.jsx(a,{children:r.jsx(s,{children:"Drag file here or click to select file"})})})]}),Re=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"dashed",isInvalid:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{variant:"solid",isInvalid:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(or,{errorMessage:"File is required.",isInvalid:!0,label:"Upload file",children:r.jsx(a,{children:r.jsx(s,{children:"Drag file here or click to select file"})})})]}),Le=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"dashed",isLoading:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{variant:"solid",isLoading:!0,children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Me=()=>r.jsxs(r.Fragment,{children:[r.jsx(a,{isLoading:!0,loadingProps:{variant:"grid"},children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(a,{isLoading:!0,loadingProps:{color:"secondary"},children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Be=()=>{const e=d.useRef(null),o=()=>{var n;return(n=e.current)==null?void 0:n.call(e)};return r.jsxs(r.Fragment,{children:[r.jsx(Go,{onClick:o,children:"Select file"}),r.jsx(a,{openRef:e,children:r.jsx(s,{children:"Drag file here or click to select file"})})]})};var zr,jr,yr;be.parameters={...be.parameters,docs:{...(zr=be.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  return <Dropzone>
      <Text>Drag file here or click to select file</Text>
    </Dropzone>;
}`,...(yr=(jr=be.parameters)==null?void 0:jr.docs)==null?void 0:yr.source}}};var br,vr,kr;ve.parameters={...ve.parameters,docs:{...(br=ve.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
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
}`,...(kr=(vr=ve.parameters)==null?void 0:vr.docs)==null?void 0:kr.source}}};var Sr,Tr,Ar;ke.parameters={...ke.parameters,docs:{...(Sr=ke.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
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
}`,...(Ar=(Tr=ke.parameters)==null?void 0:Tr.docs)==null?void 0:Ar.source}}};var wr,_r,Er;Se.parameters={...Se.parameters,docs:{...(wr=Se.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <Dropzone multiple>
      <Text>Drag files here or click to select files</Text>
    </Dropzone>;
}`,...(Er=(_r=Se.parameters)==null?void 0:_r.docs)==null?void 0:Er.source}}};var Fr,Or,Cr;Te.parameters={...Te.parameters,docs:{...(Fr=Te.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
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
}`,...(Cr=(Or=Te.parameters)==null?void 0:Or.docs)==null?void 0:Cr.source}}};var Pr,Ir,Rr;Ae.parameters={...Ae.parameters,docs:{...(Pr=Ae.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <Dropzone maxSize={3 * 1024 ** 2}>
      <VStack gap="2xs" w="auto">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, each file should not exceed 5mb
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Rr=(Ir=Ae.parameters)==null?void 0:Ir.docs)==null?void 0:Rr.source}}};var Lr,Mr,Br;we.parameters={...we.parameters,docs:{...(Lr=we.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  return <Dropzone maxFiles={3} multiple>
      <VStack gap="2xs" w="auto">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, can upload up to 3 files
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Br=(Mr=we.parameters)==null?void 0:Mr.docs)==null?void 0:Br.source}}};var $r,Nr,Ur;_e.parameters={..._e.parameters,docs:{...($r=_e.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
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
}`,...(Ur=(Nr=_e.parameters)==null?void 0:Nr.docs)==null?void 0:Ur.source}}};var Vr,Hr,Kr;Ee.parameters={...Ee.parameters,docs:{...(Vr=Ee.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
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
}`,...(Kr=(Hr=Ee.parameters)==null?void 0:Hr.docs)==null?void 0:Kr.source}}};var Yr,Gr,Wr;Fe.parameters={...Fe.parameters,docs:{...(Yr=Fe.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
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
}`,...(Wr=(Gr=Fe.parameters)==null?void 0:Gr.docs)==null?void 0:Wr.source}}};var Xr,qr,Jr;Oe.parameters={...Oe.parameters,docs:{...(Xr=Oe.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
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
}`,...(Jr=(qr=Oe.parameters)==null?void 0:qr.docs)==null?void 0:Jr.source}}};var Zr,Qr,eo;Ce.parameters={...Ce.parameters,docs:{...(Zr=Ce.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
  return <>
      <Dropzone focusBorderColor="green.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone errorBorderColor="orange.500" isInvalid>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(eo=(Qr=Ce.parameters)==null?void 0:Qr.docs)==null?void 0:eo.source}}};var ro,oo,no;Pe.parameters={...Pe.parameters,docs:{...(ro=Pe.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
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
}`,...(no=(oo=Pe.parameters)==null?void 0:oo.docs)==null?void 0:no.source}}};var to,io,so;Ie.parameters={...Ie.parameters,docs:{...(to=Ie.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
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
}`,...(so=(io=Ie.parameters)==null?void 0:io.docs)==null?void 0:so.source}}};var ao,co,lo;Re.parameters={...Re.parameters,docs:{...(ao=Re.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
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
}`,...(lo=(co=Re.parameters)==null?void 0:co.docs)==null?void 0:lo.source}}};var po,fo,uo;Le.parameters={...Le.parameters,docs:{...(po=Le.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
  return <>
      <Dropzone variant="dashed" isLoading>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="solid" isLoading>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(uo=(fo=Le.parameters)==null?void 0:fo.docs)==null?void 0:uo.source}}};var mo,go,xo;Me.parameters={...Me.parameters,docs:{...(mo=Me.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
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
}`,...(xo=(go=Me.parameters)==null?void 0:go.docs)==null?void 0:xo.source}}};var ho,Do,zo;Be.parameters={...Be.parameters,docs:{...(ho=Be.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  const openRef = useRef<() => void>(null);
  const onOpen = () => openRef.current?.();
  return <>
      <Button onClick={onOpen}>Select file</Button>

      <Dropzone openRef={openRef}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(zo=(Do=Be.parameters)==null?void 0:Do.docs)==null?void 0:zo.source}}};const at=["basic","withSize","withVariant","withMultiple","withAccept","withMaxSize","withMaxFiles","withStatus","useOnDrop","useOnDropAccepted","useOnDropRejected","withBorderColor","isDisabled","isReadonly","isInvalid","isLoading","customLoading","useOpen"];export{at as __namedExportsOrder,be as basic,Me as customLoading,st as default,Pe as isDisabled,Re as isInvalid,Le as isLoading,Ie as isReadonly,Ee as useOnDrop,Fe as useOnDropAccepted,Oe as useOnDropRejected,Be as useOpen,Te as withAccept,Ce as withBorderColor,we as withMaxFiles,Ae as withMaxSize,Se as withMultiple,ve as withSize,_e as withStatus,ke as withVariant};
