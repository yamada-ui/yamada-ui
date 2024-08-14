import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{r as p,R as Po}from"./index-BwDkhjyp.js";import{P as u}from"./index-D3ylJrlI.js";import{u as _o,f as Ro,F as or}from"./form-control-C3CMmeFy.js";import{F as Io}from"./fade-CrpJXZIX.js";import{L as Lo}from"./loading-LwU3kRka.js";import{l as Mo,a1 as Bo,s as $o,e as Uo,b as cr,c as Vo,d as he}from"./factory-CZghEhwx.js";import{f as Ho}from"./forward-ref-BmTAT9U5.js";import{a as No}from"./use-component-style-CVJyvgnb.js";import{o as Ko}from"./theme-provider-DVx9I-yC.js";import{U as Ue,I as Ve}from"./upload-DtGLV-W9.js";import{X as He}from"./x-BYbrlpCG.js";import{T as s}from"./text-Z0assCpk.js";import{V as U,H as Ne}from"./stack-C1fz6XaD.js";import{B as Yo}from"./button-BCJOWwwX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Ms_xn5rh.js";import"./motion-Bd6WkMzw.js";import"./motion-CvUiUCCo.js";import"./utils-BSzVtHmY.js";import"./icon-qNXYSgNB.js";import"./index-CCkg_WlC.js";import"./extends-CF3RwP-h.js";import"./lucide-icon-sIknX4Cs.js";import"./use-ripple-Bgt6vpzY.js";const Go=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function ne(e,o){const n=Wo(e);if(typeof n.path!="string"){const{webkitRelativePath:i}=e;Object.defineProperty(n,"path",{value:typeof o=="string"?o:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Wo(e){const{name:o}=e;if(o&&o.lastIndexOf(".")!==-1&&!e.type){const i=o.split(".").pop().toLowerCase(),a=Go.get(i);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}var V=(e,o,n)=>new Promise((i,a)=>{var g=D=>{try{f(n.next(D))}catch(v){a(v)}},d=D=>{try{f(n.throw(D))}catch(v){a(v)}},f=D=>D.done?i(D.value):Promise.resolve(D.value).then(g,d);f((n=n.apply(e,o)).next())});const Xo=[".DS_Store","Thumbs.db"];function qo(e){return V(this,null,function*(){return Le(e)&&Jo(e.dataTransfer)?rn(e.dataTransfer,e.type):Qo(e)?Zo(e):Array.isArray(e)&&e.every(o=>"getFile"in o&&typeof o.getFile=="function")?en(e):[]})}function Jo(e){return Le(e)}function Qo(e){return Le(e)&&Le(e.target)}function Le(e){return typeof e=="object"&&e!==null}function Zo(e){return er(e.target.files).map(o=>ne(o))}function en(e){return V(this,null,function*(){return(yield Promise.all(e.map(n=>n.getFile()))).map(n=>ne(n))})}function rn(e,o){return V(this,null,function*(){if(e.items){const n=er(e.items).filter(a=>a.kind==="file");if(o!=="drop")return n;const i=yield Promise.all(n.map(on));return lr(jo(i))}return lr(er(e.files).map(n=>ne(n)))})}function lr(e){return e.filter(o=>Xo.indexOf(o.name)===-1)}function er(e){if(e===null)return[];const o=[];for(let n=0;n<e.length;n++){const i=e[n];o.push(i)}return o}function on(e){if(typeof e.webkitGetAsEntry!="function")return pr(e);const o=e.webkitGetAsEntry();return o&&o.isDirectory?zo(o):pr(e)}function jo(e){return e.reduce((o,n)=>[...o,...Array.isArray(n)?jo(n):[n]],[])}function pr(e){const o=e.getAsFile();if(!o)return Promise.reject(`${e} is not a File`);const n=ne(o);return Promise.resolve(n)}function nn(e){return V(this,null,function*(){return e.isDirectory?zo(e):tn(e)})}function zo(e){const o=e.createReader();return new Promise((n,i)=>{const a=[];function g(){o.readEntries(d=>V(this,null,function*(){if(d.length){const f=Promise.all(d.map(nn));a.push(f),g()}else try{const f=yield Promise.all(a);n(f)}catch(f){i(f)}}),d=>{i(d)})}g()})}function tn(e){return V(this,null,function*(){return new Promise((o,n)=>{e.file(i=>{const a=ne(i,e.fullPath);o(a)},i=>{n(i)})})})}function sn(e,o){if(e&&o){const n=Array.isArray(o)?o:o.split(","),i=e.name||"",a=(e.type||"").toLowerCase(),g=a.replace(/\/.*$/,"");return n.some(d=>{const f=d.trim().toLowerCase();return f.charAt(0)==="."?i.toLowerCase().endsWith(f):f.endsWith("/*")?g===f.replace(/\/.*$/,""):a===f})}return!0}var an=Object.defineProperty,cn=Object.defineProperties,ln=Object.getOwnPropertyDescriptors,fr=Object.getOwnPropertySymbols,pn=Object.prototype.hasOwnProperty,fn=Object.prototype.propertyIsEnumerable,dr=(e,o,n)=>o in e?an(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,dn=(e,o)=>{for(var n in o||(o={}))pn.call(o,n)&&dr(e,n,o[n]);if(fr)for(var n of fr(o))fn.call(o,n)&&dr(e,n,o[n]);return e},un=(e,o)=>cn(e,ln(o));const mn="file-invalid-type",gn="file-too-large",xn="file-too-small",hn="too-many-files",Dn=e=>{e=Array.isArray(e)&&e.length===1?e[0]:e;const o=Array.isArray(e)?`one of ${e.join(", ")}`:e;return{code:mn,message:`File type must be ${o}`}},ur=e=>({code:gn,message:`File is larger than ${e} ${e===1?"byte":"bytes"}`}),mr=e=>({code:xn,message:`File is smaller than ${e} ${e===1?"byte":"bytes"}`}),jn={code:hn,message:"Too many files"};function yo(e,o){const n=e.type==="application/x-moz-file"||sn(e,o);return[n,n?null:Dn(o)]}function bo(e,o,n){if(P(e.size))if(P(o)&&P(n)){if(e.size>n)return[!1,ur(n)];if(e.size<o)return[!1,mr(o)]}else{if(P(o)&&e.size<o)return[!1,mr(o)];if(P(n)&&e.size>n)return[!1,ur(n)]}return[!0,null]}function P(e){return e!=null}function zn({files:e,accept:o,minSize:n,maxSize:i,multiple:a,maxFiles:g,validator:d}){return!a&&e.length>1||a&&g>=1&&e.length>g?!1:e.every(f=>{const[D]=yo(f,o),[v]=bo(f,n,i),F=d?d(f):null;return D&&v&&!F})}function Me(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function De(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,o=>o==="Files"||o==="application/x-moz-file"):!!e.target&&!!e.target.files}function gr(e){e.preventDefault()}function yn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function bn(e){return e.indexOf("Edge/")!==-1}function vn(e=window.navigator.userAgent){return yn(e)||bn(e)}function S(...e){return(o,...n)=>e.some(i=>(!Me(o)&&i&&i(o,...n),Me(o)))}function kn(){return"showOpenFilePicker"in window}function Sn(e){return P(e)?[{description:"Files",accept:Object.entries(e).filter(([n,i])=>{let a=!0;return vo(n)||(console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`),a=!1),(!Array.isArray(i)||!i.every(ko))&&(console.warn(`Skipped "${n}" because an invalid file extension was provided.`),a=!1),a}).reduce((n,[i,a])=>un(dn({},n),{[i]:a}),{})}]:e}function Tn(e){if(P(e))return Object.entries(e).reduce((o,[n,i])=>[...o,n,...i],[]).filter(o=>vo(o)||ko(o)).join(",")}function An(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function wn(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function vo(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function ko(e){return/^.*\.[\w]+$/.test(e)}var Fn=Object.defineProperty,En=Object.defineProperties,On=Object.getOwnPropertyDescriptors,Be=Object.getOwnPropertySymbols,So=Object.prototype.hasOwnProperty,To=Object.prototype.propertyIsEnumerable,xr=(e,o,n)=>o in e?Fn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,z=(e,o)=>{for(var n in o||(o={}))So.call(o,n)&&xr(e,n,o[n]);if(Be)for(var n of Be(o))To.call(o,n)&&xr(e,n,o[n]);return e},w=(e,o)=>En(e,On(o)),$e=(e,o)=>{var n={};for(var i in e)So.call(e,i)&&o.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&Be)for(var i of Be(e))o.indexOf(i)<0&&To.call(e,i)&&(n[i]=e[i]);return n};const nr=p.forwardRef((e,o)=>{var n=e,{children:i}=n,a=$e(n,["children"]);const g=wo(a),{open:d}=g,f=$e(g,["open"]);return p.useImperativeHandle(o,()=>({open:d}),[d]),Po.createElement(p.Fragment,null,i(w(z({},f),{open:d})))});nr.displayName="Dropzone";const Ao={disabled:!1,getFilesFromEvent:qo,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};nr.defaultProps=Ao;nr.propTypes={children:u.func,accept:u.objectOf(u.arrayOf(u.string)),multiple:u.bool,preventDropOnDocument:u.bool,noClick:u.bool,noKeyboard:u.bool,noDrag:u.bool,noDragEventsBubbling:u.bool,minSize:u.number,maxSize:u.number,maxFiles:u.number,disabled:u.bool,getFilesFromEvent:u.func,onFileDialogCancel:u.func,onFileDialogOpen:u.func,useFsAccessApi:u.bool,autoFocus:u.bool,onDragEnter:u.func,onDragLeave:u.func,onDragOver:u.func,onDrop:u.func,onDropAccepted:u.func,onDropRejected:u.func,onError:u.func,validator:u.func};const rr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function wo(e={}){const{accept:o,disabled:n,getFilesFromEvent:i,maxSize:a,minSize:g,multiple:d,maxFiles:f,onDragEnter:D,onDragLeave:v,onDragOver:F,onDrop:E,onDropAccepted:H,onDropRejected:N,onFileDialogCancel:K,onFileDialogOpen:Y,useFsAccessApi:ie,autoFocus:se,preventDropOnDocument:G,noClick:ae,noKeyboard:W,noDrag:ce,noDragEventsBubbling:T,onError:X,validator:O}=z(z({},Ao),e),C=p.useMemo(()=>Tn(o),[o]),le=p.useMemo(()=>Sn(o),[o]),q=p.useMemo(()=>typeof Y=="function"?Y:hr,[Y]),_=p.useMemo(()=>typeof K=="function"?K:hr,[K]),x=p.useRef(null),y=p.useRef(null),[R,j]=p.useReducer(Cn,rr),{isFocused:Xe,isFileDialogActive:pe}=R,I=p.useRef(typeof window<"u"&&window.isSecureContext&&ie&&kn()),fe=()=>{!I.current&&pe&&setTimeout(()=>{if(y.current){const{files:t}=y.current;t.length||(j({type:"closeDialog"}),_())}},300)};p.useEffect(()=>(window.addEventListener("focus",fe,!1),()=>{window.removeEventListener("focus",fe,!1)}),[y,pe,_,I]);const k=p.useRef([]),L=t=>{x.current&&x.current.contains(t.target)||(t.preventDefault(),k.current=[])};p.useEffect(()=>(G&&(document.addEventListener("dragover",gr,!1),document.addEventListener("drop",L,!1)),()=>{G&&(document.removeEventListener("dragover",gr),document.removeEventListener("drop",L))}),[x,G]),p.useEffect(()=>(!n&&se&&x.current&&x.current.focus(),()=>{}),[x,se,n]);const A=p.useCallback(t=>{X?X(t):console.error(t)},[X]),J=p.useCallback(t=>{t.preventDefault(),t.persist(),xe(t),k.current=[...k.current,t.target],De(t)&&Promise.resolve(i(t)).then(c=>{if(Me(t)&&!T)return;const m=c.length,h=m>0&&zn({files:c,accept:C,minSize:g,maxSize:a,multiple:d,maxFiles:f,validator:O}),b=m>0&&!h;j({isDragAccept:h,isDragReject:b,isDragActive:!0,type:"setDraggedFiles"}),D&&D(t)}).catch(c=>A(c))},[i,D,A,T,C,g,a,d,f,O]),de=p.useCallback(t=>{t.preventDefault(),t.persist(),xe(t);const c=De(t);if(c&&t.dataTransfer)try{t.dataTransfer.dropEffect="copy"}catch{}return c&&F&&F(t),!1},[F,T]),ue=p.useCallback(t=>{t.preventDefault(),t.persist(),xe(t);const c=k.current.filter(h=>x.current&&x.current.contains(h)),m=c.indexOf(t.target);m!==-1&&c.splice(m,1),k.current=c,!(c.length>0)&&(j({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),De(t)&&v&&v(t))},[x,v,T]),M=p.useCallback((t,c)=>{const m=[],h=[];t.forEach(b=>{const[Q,Z]=yo(b,C),[Je,Qe]=bo(b,g,a),ee=O?O(b):null;if(Q&&Je&&!ee)m.push(b);else{let re=[Z,Qe];ee&&(re=re.concat(ee)),h.push({file:b,errors:re.filter(Ze=>Ze)})}}),(!d&&m.length>1||d&&f>=1&&m.length>f)&&(m.forEach(b=>{h.push({file:b,errors:[jn]})}),m.splice(0)),j({acceptedFiles:m,fileRejections:h,type:"setFiles"}),E&&E(m,h,c),h.length>0&&N&&N(h,c),m.length>0&&H&&H(m,c)},[j,d,C,g,a,f,E,H,N,O]),me=p.useCallback(t=>{t.preventDefault(),t.persist(),xe(t),k.current=[],De(t)&&Promise.resolve(i(t)).then(c=>{Me(t)&&!T||M(c,t)}).catch(c=>A(c)),j({type:"reset"})},[i,M,A,T]),B=p.useCallback(()=>{if(I.current){j({type:"openDialog"}),q();const t={multiple:d,types:le};window.showOpenFilePicker(t).then(c=>i(c)).then(c=>{M(c,null),j({type:"closeDialog"})}).catch(c=>{An(c)?(_(c),j({type:"closeDialog"})):wn(c)?(I.current=!1,y.current?(y.current.value=null,y.current.click()):A(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):A(c)});return}y.current&&(j({type:"openDialog"}),q(),y.current.value=null,y.current.click())},[j,q,_,ie,M,A,le,d]),tr=p.useCallback(t=>{!x.current||!x.current.isEqualNode(t.target)||(t.key===" "||t.key==="Enter"||t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),B())},[x,B]),ir=p.useCallback(()=>{j({type:"focus"})},[]),sr=p.useCallback(()=>{j({type:"blur"})},[]),ar=p.useCallback(()=>{ae||(vn()?setTimeout(B,0):B())},[ae,B]),$=t=>n?null:t,qe=t=>W?null:$(t),ge=t=>ce?null:$(t),xe=t=>{T&&t.stopPropagation()},Fo=p.useMemo(()=>(t={})=>{var c=t,{refKey:m="ref",role:h,onKeyDown:b,onFocus:Q,onBlur:Z,onClick:Je,onDragEnter:Qe,onDragOver:ee,onDragLeave:re,onDrop:Ze}=c,Co=$e(c,["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return z(z({onKeyDown:qe(S(b,tr)),onFocus:qe(S(Q,ir)),onBlur:qe(S(Z,sr)),onClick:$(S(Je,ar)),onDragEnter:ge(S(Qe,J)),onDragOver:ge(S(ee,de)),onDragLeave:ge(S(re,ue)),onDrop:ge(S(Ze,me)),role:typeof h=="string"&&h!==""?h:"presentation",[m]:x},!n&&!W?{tabIndex:0}:{}),Co)},[x,tr,ir,sr,ar,J,de,ue,me,W,ce,n]),Eo=p.useCallback(t=>{t.stopPropagation()},[]),Oo=p.useMemo(()=>(t={})=>{var c=t,{refKey:m="ref",onChange:h,onClick:b}=c,Q=$e(c,["refKey","onChange","onClick"]);const Z={accept:C,multiple:d,type:"file",style:{display:"none"},onChange:$(S(h,me)),onClick:$(S(b,Eo)),tabIndex:-1,[m]:y};return z(z({},Z),Q)},[y,o,d,me,n]);return w(z({},R),{isFocused:Xe&&!n,getRootProps:Fo,getInputProps:Oo,rootRef:x,inputRef:y,open:$(B)})}function Cn(e,o){switch(o.type){case"focus":return w(z({},e),{isFocused:!0});case"blur":return w(z({},e),{isFocused:!1});case"openDialog":return w(z({},rr),{isFileDialogActive:!0});case"closeDialog":return w(z({},e),{isFileDialogActive:!1});case"setDraggedFiles":return w(z({},e),{isDragActive:o.isDragActive,isDragAccept:o.isDragAccept,isDragReject:o.isDragReject});case"setFiles":return w(z({},e),{acceptedFiles:o.acceptedFiles,fileRejections:o.fileRejections});case"reset":return z({},rr);default:return e}}function hr(){}const[Pn,Ke]=Mo({name:"DropzoneContext",errorMessage:`useDropzoneContext returned is 'undefined'. Seems you forgot to wrap the components in "<Dropzone />"`}),l=Ho((e,o)=>{const[n,i]=No("Dropzone",e),{id:a,name:g,className:d,isLoading:f,overlayProps:D,loadingProps:v,openRef:F,accept:E,onDrop:H,onDropAccepted:N,onDropRejected:K,multiple:Y,maxSize:ie,maxFiles:se,autoFocus:G,noClick:ae,noDrag:W,noDragEventsBubbling:ce,noKeyboard:T,onDragEnter:X,onDragLeave:O,onDragOver:C,onFileDialogCancel:le,onFileDialogOpen:q,preventDropOnDocument:_,useFsAccessApi:x,children:y,...R}=_o(Ko(i)),j=f||R.disabled||R.readOnly,[Xe,pe]=Bo(R,Ro),{getRootProps:I,getInputProps:fe,isDragAccept:k,isDragReject:L,open:A}=wo({disabled:j,accept:$o(E)?E.reduce((ue,M)=>({...ue,[M]:[]}),{}):E,onDrop:H,onDropAccepted:N,onDropRejected:K,multiple:Y,maxSize:ie,maxFiles:se,autoFocus:G,noClick:ae,noDrag:W,noDragEventsBubbling:ce,noKeyboard:T,onDragEnter:X,onDragLeave:O,onDragOver:C,onFileDialogCancel:le,onFileDialogOpen:q,preventDropOnDocument:_,useFsAccessApi:x});Uo(F,A);const J=!k&&!L,de={position:"relative",display:"flex",justifyContent:"center",alignItems:"center",...n.container};return r.jsx(Pn,{value:{isLoading:f,isDragAccept:k,isDragReject:L,isDragIdle:J,styles:n},children:r.jsxs(cr.div,{className:Vo("ui-dropzone",d),__css:de,...pe,...I(),"data-accept":he(k),"data-reject":he(L),"data-idle":he(J),"data-loading":he(f),children:[r.jsx(_n,{loadingProps:v,...D}),r.jsx(cr.input,{ref:o,id:a,name:g,...Xe,...fe()}),y]})})}),_n=({loadingProps:e,...o})=>{const{isLoading:n,styles:i}=Ke(),a={position:"absolute",top:0,left:0,w:"100%",h:"100%",display:"flex",justifyContent:"center",alignItems:"center",...i.overlay};return r.jsx(Io,{isOpen:n,unmountOnExit:!0,className:"ui-dropzone__overlay",__css:a,...o,children:r.jsx(Lo,{className:"ui-dropzone__overlay__loading",size:"4xl",...e})})},Ye=({children:e})=>{const{isDragAccept:o}=Ke();return o?r.jsx(p.Fragment,{children:e}):null},Ge=({children:e})=>{const{isDragReject:o}=Ke();return o?r.jsx(p.Fragment,{children:e}):null},We=({children:e})=>{const{isDragIdle:o}=Ke();return o?r.jsx(p.Fragment,{children:e}):null},oe={txt:"text/plain",html:"text/html",csv:"text/csv",png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",mp3:"audio/mpeg",mpeg:"video/mpeg",mp4:"video/mp4",zip:"application/zip",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},te=[oe.png,oe.gif,oe.jpeg,oe.svg,oe.webp],st={title:"Components / Forms / Dropzone",component:l},je=()=>r.jsx(l,{children:r.jsx(s,{children:"Drag file here or click to select file"})}),ze=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{size:"xs",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{size:"sm",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{size:"md",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{size:"lg",children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),ye=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{variant:"dashed",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{variant:"solid",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{variant:"unstyled",children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),be=()=>r.jsx(l,{multiple:!0,children:r.jsx(s,{children:"Drag files here or click to select files"})}),ve=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{accept:te,children:r.jsx(s,{children:"Drag image here or click to select image"})}),r.jsx(l,{accept:{"image/*":[]},children:r.jsx(s,{children:"Drag image here or click to select image"})})]}),ke=()=>r.jsx(l,{maxSize:3*1024**2,children:r.jsxs(U,{w:"auto",gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag file here or click to select file"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})}),Se=()=>r.jsx(l,{multiple:!0,maxFiles:3,children:r.jsxs(U,{w:"auto",gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag file here or click to select file"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, can upload up to 3 files"})]})}),Te=()=>r.jsx(l,{accept:te,maxSize:3*1024**2,children:r.jsxs(Ne,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(Ye,{children:r.jsx(Ue,{fontSize:"6xl",color:"success"})}),r.jsx(Ge,{children:r.jsx(He,{fontSize:"6xl",color:"danger"})}),r.jsx(We,{children:r.jsx(Ve,{fontSize:"6xl"})}),r.jsxs(U,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Ae=()=>r.jsx(l,{accept:te,maxSize:3*1024**2,onDrop:(e,o)=>console.log("accepted files",e,"rejected files",o),children:r.jsxs(Ne,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(Ye,{children:r.jsx(Ue,{fontSize:"6xl",color:"success"})}),r.jsx(Ge,{children:r.jsx(He,{fontSize:"6xl",color:"danger"})}),r.jsx(We,{children:r.jsx(Ve,{fontSize:"6xl"})}),r.jsxs(U,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),we=()=>r.jsx(l,{accept:te,maxSize:3*1024**2,onDropAccepted:e=>console.log("accepted files",e),children:r.jsxs(Ne,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(Ye,{children:r.jsx(Ue,{fontSize:"6xl",color:"success"})}),r.jsx(Ge,{children:r.jsx(He,{fontSize:"6xl",color:"danger"})}),r.jsx(We,{children:r.jsx(Ve,{fontSize:"6xl"})}),r.jsxs(U,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Fe=()=>r.jsx(l,{accept:te,maxSize:3*1024**2,onDropRejected:e=>console.log("rejected files",e),children:r.jsxs(Ne,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(Ye,{children:r.jsx(Ue,{fontSize:"6xl",color:"success"})}),r.jsx(Ge,{children:r.jsx(He,{fontSize:"6xl",color:"danger"})}),r.jsx(We,{children:r.jsx(Ve,{fontSize:"6xl"})}),r.jsxs(U,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Ee=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{focusBorderColor:"green.500",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{isInvalid:!0,errorBorderColor:"orange.500",children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Oe=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{isDisabled:!0,variant:"dashed",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{isDisabled:!0,variant:"solid",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(or,{label:"Upload file",isDisabled:!0,children:r.jsx(l,{children:r.jsx(s,{children:"Drag file here or click to select file"})})})]}),Ce=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{isReadOnly:!0,variant:"dashed",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{isReadOnly:!0,variant:"solid",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(or,{label:"Upload file",isReadOnly:!0,children:r.jsx(l,{children:r.jsx(s,{children:"Drag file here or click to select file"})})})]}),Pe=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{isInvalid:!0,variant:"dashed",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{isInvalid:!0,variant:"solid",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(or,{label:"Upload file",isInvalid:!0,errorMessage:"File is required.",children:r.jsx(l,{children:r.jsx(s,{children:"Drag file here or click to select file"})})})]}),_e=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{isLoading:!0,variant:"dashed",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{isLoading:!0,variant:"solid",children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Re=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{isLoading:!0,loadingProps:{variant:"grid"},children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{isLoading:!0,loadingProps:{color:"secondary"},children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Ie=()=>{const e=p.useRef(null),o=()=>{var n;return(n=e.current)==null?void 0:n.call(e)};return r.jsxs(r.Fragment,{children:[r.jsx(Yo,{onClick:o,children:"Select file"}),r.jsx(l,{openRef:e,children:r.jsx(s,{children:"Drag file here or click to select file"})})]})};var Dr,jr,zr;je.parameters={...je.parameters,docs:{...(Dr=je.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <Dropzone>
      <Text>Drag file here or click to select file</Text>
    </Dropzone>;
}`,...(zr=(jr=je.parameters)==null?void 0:jr.docs)==null?void 0:zr.source}}};var yr,br,vr;ze.parameters={...ze.parameters,docs:{...(yr=ze.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
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
}`,...(vr=(br=ze.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var kr,Sr,Tr;ye.parameters={...ye.parameters,docs:{...(kr=ye.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
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
}`,...(Tr=(Sr=ye.parameters)==null?void 0:Sr.docs)==null?void 0:Tr.source}}};var Ar,wr,Fr;be.parameters={...be.parameters,docs:{...(Ar=be.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  return <Dropzone multiple>
      <Text>Drag files here or click to select files</Text>
    </Dropzone>;
}`,...(Fr=(wr=be.parameters)==null?void 0:wr.docs)==null?void 0:Fr.source}}};var Er,Or,Cr;ve.parameters={...ve.parameters,docs:{...(Er=ve.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
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
}`,...(Cr=(Or=ve.parameters)==null?void 0:Or.docs)==null?void 0:Cr.source}}};var Pr,_r,Rr;ke.parameters={...ke.parameters,docs:{...(Pr=ke.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <Dropzone maxSize={3 * 1024 ** 2}>
      <VStack w="auto" gap="2xs">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, each file should not exceed 5mb
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Rr=(_r=ke.parameters)==null?void 0:_r.docs)==null?void 0:Rr.source}}};var Ir,Lr,Mr;Se.parameters={...Se.parameters,docs:{...(Ir=Se.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <Dropzone multiple maxFiles={3}>
      <VStack w="auto" gap="2xs">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, can upload up to 3 files
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Mr=(Lr=Se.parameters)==null?void 0:Lr.docs)==null?void 0:Mr.source}}};var Br,$r,Ur;Te.parameters={...Te.parameters,docs:{...(Br=Te.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Upload fontSize="6xl" color="success" />
        </DropzoneAccept>

        <DropzoneReject>
          <X fontSize="6xl" color="danger" />
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
}`,...(Ur=($r=Te.parameters)==null?void 0:$r.docs)==null?void 0:Ur.source}}};var Vr,Hr,Nr;Ae.parameters={...Ae.parameters,docs:{...(Vr=Ae.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDrop={(acceptedFiles, fileRejections) => console.log("accepted files", acceptedFiles, "rejected files", fileRejections)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Upload fontSize="6xl" color="success" />
        </DropzoneAccept>

        <DropzoneReject>
          <X fontSize="6xl" color="danger" />
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
}`,...(Nr=(Hr=Ae.parameters)==null?void 0:Hr.docs)==null?void 0:Nr.source}}};var Kr,Yr,Gr;we.parameters={...we.parameters,docs:{...(Kr=we.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDropAccepted={files => console.log("accepted files", files)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Upload fontSize="6xl" color="success" />
        </DropzoneAccept>

        <DropzoneReject>
          <X fontSize="6xl" color="danger" />
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
}`,...(Gr=(Yr=we.parameters)==null?void 0:Yr.docs)==null?void 0:Gr.source}}};var Wr,Xr,qr;Fe.parameters={...Fe.parameters,docs:{...(Wr=Fe.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDropRejected={files => console.log("rejected files", files)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Upload fontSize="6xl" color="success" />
        </DropzoneAccept>

        <DropzoneReject>
          <X fontSize="6xl" color="danger" />
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
}`,...(qr=(Xr=Fe.parameters)==null?void 0:Xr.docs)==null?void 0:qr.source}}};var Jr,Qr,Zr;Ee.parameters={...Ee.parameters,docs:{...(Jr=Ee.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  return <>
      <Dropzone focusBorderColor="green.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isInvalid errorBorderColor="orange.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(Zr=(Qr=Ee.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};var eo,ro,oo;Oe.parameters={...Oe.parameters,docs:{...(eo=Oe.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <>
      <Dropzone isDisabled variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isDisabled variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl label="Upload file" isDisabled>
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>;
}`,...(oo=(ro=Oe.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var no,to,io;Ce.parameters={...Ce.parameters,docs:{...(no=Ce.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
  return <>
      <Dropzone isReadOnly variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isReadOnly variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl label="Upload file" isReadOnly>
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>;
}`,...(io=(to=Ce.parameters)==null?void 0:to.docs)==null?void 0:io.source}}};var so,ao,co;Pe.parameters={...Pe.parameters,docs:{...(so=Pe.parameters)==null?void 0:so.docs,source:{originalSource:`() => {
  return <>
      <Dropzone isInvalid variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isInvalid variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl label="Upload file" isInvalid errorMessage="File is required.">
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>;
}`,...(co=(ao=Pe.parameters)==null?void 0:ao.docs)==null?void 0:co.source}}};var lo,po,fo;_e.parameters={..._e.parameters,docs:{...(lo=_e.parameters)==null?void 0:lo.docs,source:{originalSource:`() => {
  return <>
      <Dropzone isLoading variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isLoading variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(fo=(po=_e.parameters)==null?void 0:po.docs)==null?void 0:fo.source}}};var uo,mo,go;Re.parameters={...Re.parameters,docs:{...(uo=Re.parameters)==null?void 0:uo.docs,source:{originalSource:`() => {
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
}`,...(go=(mo=Re.parameters)==null?void 0:mo.docs)==null?void 0:go.source}}};var xo,ho,Do;Ie.parameters={...Ie.parameters,docs:{...(xo=Ie.parameters)==null?void 0:xo.docs,source:{originalSource:`() => {
  const openRef = useRef<() => void>(null);
  const onOpen = () => openRef.current?.();
  return <>
      <Button onClick={onOpen}>Select file</Button>

      <Dropzone openRef={openRef}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(Do=(ho=Ie.parameters)==null?void 0:ho.docs)==null?void 0:Do.source}}};const at=["basic","withSize","withVariant","withMultiple","withAccept","withMaxSize","withMaxFiles","withStatus","useOnDrop","useOnDropAccepted","useOnDropRejected","withBorderColor","isDisabled","isReadonly","isInvalid","isLoading","customLoading","useOpen"];export{at as __namedExportsOrder,je as basic,Re as customLoading,st as default,Oe as isDisabled,Pe as isInvalid,_e as isLoading,Ce as isReadonly,Ae as useOnDrop,we as useOnDropAccepted,Fe as useOnDropRejected,Ie as useOpen,ve as withAccept,Ee as withBorderColor,Se as withMaxFiles,ke as withMaxSize,be as withMultiple,ze as withSize,Te as withStatus,ye as withVariant};
