import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{I as b,F as He,i as Ne,G as Ue}from"./icon-BQcQed63.js";import{r as p,R as _o}from"./index-uCp2LrAq.js";import{P as u}from"./index-D3ylJrlI.js";import{u as Io,f as Ro,F as nr}from"./form-control-CXekA9Vm.js";import{F as Lo}from"./fade-DtUkreix.js";import{L as Mo}from"./loading-CD9zg-8p.js";import{l as Bo,a0 as $o,s as Vo,e as Ho,b as lr,c as No,d as De}from"./factory-Bf0a1C4O.js";import{f as Uo}from"./forward-ref-Dr5Hqd9a.js";import{a as Ko}from"./use-component-style-C1oydc60.js";import{o as Yo}from"./theme-provider-CfMKAtcZ.js";import{T as s}from"./text-BOhk0htq.js";import{V as H,H as Ke}from"./stack-DeQ5YYY4.js";import{B as Go}from"./button-C5HSAH_Q.js";import"./icon-BtMBNqBn.js";import"./index-ZgcAASpW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-Bi86PhT5.js";import"./utils-BQuDdpot.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./use-ripple-BZmEDmbU.js";const Wo=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function te(e,o){const n=Xo(e);if(typeof n.path!="string"){const{webkitRelativePath:i}=e;Object.defineProperty(n,"path",{value:typeof o=="string"?o:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Xo(e){const{name:o}=e;if(o&&o.lastIndexOf(".")!==-1&&!e.type){const i=o.split(".").pop().toLowerCase(),a=Wo.get(i);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}var N=(e,o,n)=>new Promise((i,a)=>{var g=D=>{try{d(n.next(D))}catch(v){a(v)}},f=D=>{try{d(n.throw(D))}catch(v){a(v)}},d=D=>D.done?i(D.value):Promise.resolve(D.value).then(g,f);d((n=n.apply(e,o)).next())});const qo=[".DS_Store","Thumbs.db"];function Jo(e){return N(this,null,function*(){return Me(e)&&Qo(e.dataTransfer)?on(e.dataTransfer,e.type):Zo(e)?en(e):Array.isArray(e)&&e.every(o=>"getFile"in o&&typeof o.getFile=="function")?rn(e):[]})}function Qo(e){return Me(e)}function Zo(e){return Me(e)&&Me(e.target)}function Me(e){return typeof e=="object"&&e!==null}function en(e){return rr(e.target.files).map(o=>te(o))}function rn(e){return N(this,null,function*(){return(yield Promise.all(e.map(n=>n.getFile()))).map(n=>te(n))})}function on(e,o){return N(this,null,function*(){if(e.items){const n=rr(e.items).filter(a=>a.kind==="file");if(o!=="drop")return n;const i=yield Promise.all(n.map(nn));return pr(zo(i))}return pr(rr(e.files).map(n=>te(n)))})}function pr(e){return e.filter(o=>qo.indexOf(o.name)===-1)}function rr(e){if(e===null)return[];const o=[];for(let n=0;n<e.length;n++){const i=e[n];o.push(i)}return o}function nn(e){if(typeof e.webkitGetAsEntry!="function")return dr(e);const o=e.webkitGetAsEntry();return o&&o.isDirectory?yo(o):dr(e)}function zo(e){return e.reduce((o,n)=>[...o,...Array.isArray(n)?zo(n):[n]],[])}function dr(e){const o=e.getAsFile();if(!o)return Promise.reject(`${e} is not a File`);const n=te(o);return Promise.resolve(n)}function tn(e){return N(this,null,function*(){return e.isDirectory?yo(e):sn(e)})}function yo(e){const o=e.createReader();return new Promise((n,i)=>{const a=[];function g(){o.readEntries(f=>N(this,null,function*(){if(f.length){const d=Promise.all(f.map(tn));a.push(d),g()}else try{const d=yield Promise.all(a);n(d)}catch(d){i(d)}}),f=>{i(f)})}g()})}function sn(e){return N(this,null,function*(){return new Promise((o,n)=>{e.file(i=>{const a=te(i,e.fullPath);o(a)},i=>{n(i)})})})}function an(e,o){if(e&&o){const n=Array.isArray(o)?o:o.split(","),i=e.name||"",a=(e.type||"").toLowerCase(),g=a.replace(/\/.*$/,"");return n.some(f=>{const d=f.trim().toLowerCase();return d.charAt(0)==="."?i.toLowerCase().endsWith(d):d.endsWith("/*")?g===d.replace(/\/.*$/,""):a===d})}return!0}var cn=Object.defineProperty,ln=Object.defineProperties,pn=Object.getOwnPropertyDescriptors,fr=Object.getOwnPropertySymbols,dn=Object.prototype.hasOwnProperty,fn=Object.prototype.propertyIsEnumerable,ur=(e,o,n)=>o in e?cn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,un=(e,o)=>{for(var n in o||(o={}))dn.call(o,n)&&ur(e,n,o[n]);if(fr)for(var n of fr(o))fn.call(o,n)&&ur(e,n,o[n]);return e},mn=(e,o)=>ln(e,pn(o));const gn="file-invalid-type",xn="file-too-large",hn="file-too-small",Dn="too-many-files",jn=e=>{e=Array.isArray(e)&&e.length===1?e[0]:e;const o=Array.isArray(e)?`one of ${e.join(", ")}`:e;return{code:gn,message:`File type must be ${o}`}},mr=e=>({code:xn,message:`File is larger than ${e} ${e===1?"byte":"bytes"}`}),gr=e=>({code:hn,message:`File is smaller than ${e} ${e===1?"byte":"bytes"}`}),zn={code:Dn,message:"Too many files"};function ko(e,o){const n=e.type==="application/x-moz-file"||an(e,o);return[n,n?null:jn(o)]}function bo(e,o,n){if(_(e.size))if(_(o)&&_(n)){if(e.size>n)return[!1,mr(n)];if(e.size<o)return[!1,gr(o)]}else{if(_(o)&&e.size<o)return[!1,gr(o)];if(_(n)&&e.size>n)return[!1,mr(n)]}return[!0,null]}function _(e){return e!=null}function yn({files:e,accept:o,minSize:n,maxSize:i,multiple:a,maxFiles:g,validator:f}){return!a&&e.length>1||a&&g>=1&&e.length>g?!1:e.every(d=>{const[D]=ko(d,o),[v]=bo(d,n,i),S=f?f(d):null;return D&&v&&!S})}function Be(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function je(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,o=>o==="Files"||o==="application/x-moz-file"):!!e.target&&!!e.target.files}function xr(e){e.preventDefault()}function kn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function bn(e){return e.indexOf("Edge/")!==-1}function vn(e=window.navigator.userAgent){return kn(e)||bn(e)}function A(...e){return(o,...n)=>e.some(i=>(!Be(o)&&i&&i(o,...n),Be(o)))}function Tn(){return"showOpenFilePicker"in window}function An(e){return _(e)?[{description:"Files",accept:Object.entries(e).filter(([n,i])=>{let a=!0;return vo(n)||(console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`),a=!1),(!Array.isArray(i)||!i.every(To))&&(console.warn(`Skipped "${n}" because an invalid file extension was provided.`),a=!1),a}).reduce((n,[i,a])=>mn(un({},n),{[i]:a}),{})}]:e}function wn(e){if(_(e))return Object.entries(e).reduce((o,[n,i])=>[...o,n,...i],[]).filter(o=>vo(o)||To(o)).join(",")}function Fn(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function En(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function vo(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function To(e){return/^.*\.[\w]+$/.test(e)}var Sn=Object.defineProperty,On=Object.defineProperties,Cn=Object.getOwnPropertyDescriptors,$e=Object.getOwnPropertySymbols,Ao=Object.prototype.hasOwnProperty,wo=Object.prototype.propertyIsEnumerable,hr=(e,o,n)=>o in e?Sn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,z=(e,o)=>{for(var n in o||(o={}))Ao.call(o,n)&&hr(e,n,o[n]);if($e)for(var n of $e(o))wo.call(o,n)&&hr(e,n,o[n]);return e},E=(e,o)=>On(e,Cn(o)),Ve=(e,o)=>{var n={};for(var i in e)Ao.call(e,i)&&o.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&$e)for(var i of $e(e))o.indexOf(i)<0&&wo.call(e,i)&&(n[i]=e[i]);return n};const tr=p.forwardRef((e,o)=>{var n=e,{children:i}=n,a=Ve(n,["children"]);const g=Eo(a),{open:f}=g,d=Ve(g,["open"]);return p.useImperativeHandle(o,()=>({open:f}),[f]),_o.createElement(p.Fragment,null,i(E(z({},d),{open:f})))});tr.displayName="Dropzone";const Fo={disabled:!1,getFilesFromEvent:Jo,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};tr.defaultProps=Fo;tr.propTypes={children:u.func,accept:u.objectOf(u.arrayOf(u.string)),multiple:u.bool,preventDropOnDocument:u.bool,noClick:u.bool,noKeyboard:u.bool,noDrag:u.bool,noDragEventsBubbling:u.bool,minSize:u.number,maxSize:u.number,maxFiles:u.number,disabled:u.bool,getFilesFromEvent:u.func,onFileDialogCancel:u.func,onFileDialogOpen:u.func,useFsAccessApi:u.bool,autoFocus:u.bool,onDragEnter:u.func,onDragLeave:u.func,onDragOver:u.func,onDrop:u.func,onDropAccepted:u.func,onDropRejected:u.func,onError:u.func,validator:u.func};const or={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Eo(e={}){const{accept:o,disabled:n,getFilesFromEvent:i,maxSize:a,minSize:g,multiple:f,maxFiles:d,onDragEnter:D,onDragLeave:v,onDragOver:S,onDrop:O,onDropAccepted:U,onDropRejected:K,onFileDialogCancel:Y,onFileDialogOpen:G,useFsAccessApi:se,autoFocus:ae,preventDropOnDocument:W,noClick:ce,noKeyboard:X,noDrag:le,noDragEventsBubbling:w,onError:q,validator:C}=z(z({},Fo),e),P=p.useMemo(()=>wn(o),[o]),pe=p.useMemo(()=>An(o),[o]),J=p.useMemo(()=>typeof G=="function"?G:Dr,[G]),I=p.useMemo(()=>typeof Y=="function"?Y:Dr,[Y]),x=p.useRef(null),y=p.useRef(null),[R,j]=p.useReducer(Pn,or),{isFocused:qe,isFileDialogActive:de}=R,L=p.useRef(typeof window<"u"&&window.isSecureContext&&se&&Tn()),fe=()=>{!L.current&&de&&setTimeout(()=>{if(y.current){const{files:t}=y.current;t.length||(j({type:"closeDialog"}),I())}},300)};p.useEffect(()=>(window.addEventListener("focus",fe,!1),()=>{window.removeEventListener("focus",fe,!1)}),[y,de,I,L]);const T=p.useRef([]),M=t=>{x.current&&x.current.contains(t.target)||(t.preventDefault(),T.current=[])};p.useEffect(()=>(W&&(document.addEventListener("dragover",xr,!1),document.addEventListener("drop",M,!1)),()=>{W&&(document.removeEventListener("dragover",xr),document.removeEventListener("drop",M))}),[x,W]),p.useEffect(()=>(!n&&ae&&x.current&&x.current.focus(),()=>{}),[x,ae,n]);const F=p.useCallback(t=>{q?q(t):console.error(t)},[q]),Q=p.useCallback(t=>{t.preventDefault(),t.persist(),he(t),T.current=[...T.current,t.target],je(t)&&Promise.resolve(i(t)).then(c=>{if(Be(t)&&!w)return;const m=c.length,h=m>0&&yn({files:c,accept:P,minSize:g,maxSize:a,multiple:f,maxFiles:d,validator:C}),k=m>0&&!h;j({isDragAccept:h,isDragReject:k,isDragActive:!0,type:"setDraggedFiles"}),D&&D(t)}).catch(c=>F(c))},[i,D,F,w,P,g,a,f,d,C]),ue=p.useCallback(t=>{t.preventDefault(),t.persist(),he(t);const c=je(t);if(c&&t.dataTransfer)try{t.dataTransfer.dropEffect="copy"}catch{}return c&&S&&S(t),!1},[S,w]),me=p.useCallback(t=>{t.preventDefault(),t.persist(),he(t);const c=T.current.filter(h=>x.current&&x.current.contains(h)),m=c.indexOf(t.target);m!==-1&&c.splice(m,1),T.current=c,!(c.length>0)&&(j({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),je(t)&&v&&v(t))},[x,v,w]),B=p.useCallback((t,c)=>{const m=[],h=[];t.forEach(k=>{const[Z,ee]=ko(k,P),[Qe,Ze]=bo(k,g,a),re=C?C(k):null;if(Z&&Qe&&!re)m.push(k);else{let oe=[ee,Ze];re&&(oe=oe.concat(re)),h.push({file:k,errors:oe.filter(er=>er)})}}),(!f&&m.length>1||f&&d>=1&&m.length>d)&&(m.forEach(k=>{h.push({file:k,errors:[zn]})}),m.splice(0)),j({acceptedFiles:m,fileRejections:h,type:"setFiles"}),O&&O(m,h,c),h.length>0&&K&&K(h,c),m.length>0&&U&&U(m,c)},[j,f,P,g,a,d,O,U,K,C]),ge=p.useCallback(t=>{t.preventDefault(),t.persist(),he(t),T.current=[],je(t)&&Promise.resolve(i(t)).then(c=>{Be(t)&&!w||B(c,t)}).catch(c=>F(c)),j({type:"reset"})},[i,B,F,w]),$=p.useCallback(()=>{if(L.current){j({type:"openDialog"}),J();const t={multiple:f,types:pe};window.showOpenFilePicker(t).then(c=>i(c)).then(c=>{B(c,null),j({type:"closeDialog"})}).catch(c=>{Fn(c)?(I(c),j({type:"closeDialog"})):En(c)?(L.current=!1,y.current?(y.current.value=null,y.current.click()):F(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):F(c)});return}y.current&&(j({type:"openDialog"}),J(),y.current.value=null,y.current.click())},[j,J,I,se,B,F,pe,f]),ir=p.useCallback(t=>{!x.current||!x.current.isEqualNode(t.target)||(t.key===" "||t.key==="Enter"||t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),$())},[x,$]),sr=p.useCallback(()=>{j({type:"focus"})},[]),ar=p.useCallback(()=>{j({type:"blur"})},[]),cr=p.useCallback(()=>{ce||(vn()?setTimeout($,0):$())},[ce,$]),V=t=>n?null:t,Je=t=>X?null:V(t),xe=t=>le?null:V(t),he=t=>{w&&t.stopPropagation()},So=p.useMemo(()=>(t={})=>{var c=t,{refKey:m="ref",role:h,onKeyDown:k,onFocus:Z,onBlur:ee,onClick:Qe,onDragEnter:Ze,onDragOver:re,onDragLeave:oe,onDrop:er}=c,Po=Ve(c,["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return z(z({onKeyDown:Je(A(k,ir)),onFocus:Je(A(Z,sr)),onBlur:Je(A(ee,ar)),onClick:V(A(Qe,cr)),onDragEnter:xe(A(Ze,Q)),onDragOver:xe(A(re,ue)),onDragLeave:xe(A(oe,me)),onDrop:xe(A(er,ge)),role:typeof h=="string"&&h!==""?h:"presentation",[m]:x},!n&&!X?{tabIndex:0}:{}),Po)},[x,ir,sr,ar,cr,Q,ue,me,ge,X,le,n]),Oo=p.useCallback(t=>{t.stopPropagation()},[]),Co=p.useMemo(()=>(t={})=>{var c=t,{refKey:m="ref",onChange:h,onClick:k}=c,Z=Ve(c,["refKey","onChange","onClick"]);const ee={accept:P,multiple:f,type:"file",style:{display:"none"},onChange:V(A(h,ge)),onClick:V(A(k,Oo)),tabIndex:-1,[m]:y};return z(z({},ee),Z)},[y,o,f,ge,n]);return E(z({},R),{isFocused:qe&&!n,getRootProps:So,getInputProps:Co,rootRef:x,inputRef:y,open:V($)})}function Pn(e,o){switch(o.type){case"focus":return E(z({},e),{isFocused:!0});case"blur":return E(z({},e),{isFocused:!1});case"openDialog":return E(z({},or),{isFileDialogActive:!0});case"closeDialog":return E(z({},e),{isFileDialogActive:!1});case"setDraggedFiles":return E(z({},e),{isDragActive:o.isDragActive,isDragAccept:o.isDragAccept,isDragReject:o.isDragReject});case"setFiles":return E(z({},e),{acceptedFiles:o.acceptedFiles,fileRejections:o.fileRejections});case"reset":return z({},or);default:return e}}function Dr(){}const[_n,Ye]=Bo({name:"DropzoneContext",errorMessage:`useDropzoneContext returned is 'undefined'. Seems you forgot to wrap the components in "<Dropzone />"`}),l=Uo((e,o)=>{const[n,i]=Ko("Dropzone",e),{id:a,name:g,className:f,isLoading:d,overlayProps:D,loadingProps:v,openRef:S,accept:O,onDrop:U,onDropAccepted:K,onDropRejected:Y,multiple:G,maxSize:se,maxFiles:ae,autoFocus:W,noClick:ce,noDrag:X,noDragEventsBubbling:le,noKeyboard:w,onDragEnter:q,onDragLeave:C,onDragOver:P,onFileDialogCancel:pe,onFileDialogOpen:J,preventDropOnDocument:I,useFsAccessApi:x,children:y,...R}=Io(Yo(i)),j=d||R.disabled||R.readOnly,[qe,de]=$o(R,Ro),{getRootProps:L,getInputProps:fe,isDragAccept:T,isDragReject:M,open:F}=Eo({disabled:j,accept:Vo(O)?O.reduce((me,B)=>({...me,[B]:[]}),{}):O,onDrop:U,onDropAccepted:K,onDropRejected:Y,multiple:G,maxSize:se,maxFiles:ae,autoFocus:W,noClick:ce,noDrag:X,noDragEventsBubbling:le,noKeyboard:w,onDragEnter:q,onDragLeave:C,onDragOver:P,onFileDialogCancel:pe,onFileDialogOpen:J,preventDropOnDocument:I,useFsAccessApi:x});Ho(S,F);const Q=!T&&!M,ue={position:"relative",display:"flex",justifyContent:"center",alignItems:"center",...n.container};return r.jsx(_n,{value:{isLoading:d,isDragAccept:T,isDragReject:M,isDragIdle:Q,styles:n},children:r.jsxs(lr.div,{className:No("ui-dropzone",f),__css:ue,...de,...L(),"data-accept":De(T),"data-reject":De(M),"data-idle":De(Q),"data-loading":De(d),children:[r.jsx(In,{loadingProps:v,...D}),r.jsx(lr.input,{ref:o,id:a,name:g,...qe,...fe()}),y]})})}),In=({loadingProps:e,...o})=>{const{isLoading:n,styles:i}=Ye(),a={position:"absolute",top:0,left:0,w:"100%",h:"100%",display:"flex",justifyContent:"center",alignItems:"center",...i.overlay};return r.jsx(Lo,{isOpen:n,unmountOnExit:!0,className:"ui-dropzone__overlay",__css:a,...o,children:r.jsx(Mo,{className:"ui-dropzone__overlay__loading",size:"4xl",...e})})},Ge=({children:e})=>{const{isDragAccept:o}=Ye();return o?r.jsx(p.Fragment,{children:e}):null},We=({children:e})=>{const{isDragReject:o}=Ye();return o?r.jsx(p.Fragment,{children:e}):null},Xe=({children:e})=>{const{isDragIdle:o}=Ye();return o?r.jsx(p.Fragment,{children:e}):null},ne={txt:"text/plain",html:"text/html",csv:"text/csv",png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",mp3:"audio/mpeg",mpeg:"video/mpeg",mp4:"video/mp4",zip:"application/zip",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},ie=[ne.png,ne.gif,ne.jpeg,ne.svg,ne.webp],it={title:"Components / Forms / Dropzone",component:l},ze=()=>r.jsx(l,{children:r.jsx(s,{children:"Drag file here or click to select file"})}),ye=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{size:"xs",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{size:"sm",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{size:"md",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{size:"lg",children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),ke=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{variant:"dashed",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{variant:"solid",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{variant:"unstyled",children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),be=()=>r.jsx(l,{multiple:!0,children:r.jsx(s,{children:"Drag files here or click to select files"})}),ve=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{accept:ie,children:r.jsx(s,{children:"Drag image here or click to select image"})}),r.jsx(l,{accept:{"image/*":[]},children:r.jsx(s,{children:"Drag image here or click to select image"})})]}),Te=()=>r.jsx(l,{maxSize:3*1024**2,children:r.jsxs(H,{w:"auto",gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag file here or click to select file"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})}),Ae=()=>r.jsx(l,{multiple:!0,maxFiles:3,children:r.jsxs(H,{w:"auto",gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag file here or click to select file"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, can upload up to 3 files"})]})}),we=()=>r.jsx(l,{accept:ie,maxSize:3*1024**2,children:r.jsxs(Ke,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(Ge,{children:r.jsx(b,{icon:He,size:"6xl",color:"success"})}),r.jsx(We,{children:r.jsx(b,{icon:Ne,size:"6xl",color:"danger"})}),r.jsx(Xe,{children:r.jsx(b,{icon:Ue,size:"6xl"})}),r.jsxs(H,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Fe=()=>r.jsx(l,{accept:ie,maxSize:3*1024**2,onDrop:(e,o)=>console.log("accepted files",e,"rejected files",o),children:r.jsxs(Ke,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(Ge,{children:r.jsx(b,{icon:He,size:"6xl",color:"success"})}),r.jsx(We,{children:r.jsx(b,{icon:Ne,size:"6xl",color:"danger"})}),r.jsx(Xe,{children:r.jsx(b,{icon:Ue,size:"6xl"})}),r.jsxs(H,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Ee=()=>r.jsx(l,{accept:ie,maxSize:3*1024**2,onDropAccepted:e=>console.log("accepted files",e),children:r.jsxs(Ke,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(Ge,{children:r.jsx(b,{icon:He,size:"6xl",color:"success"})}),r.jsx(We,{children:r.jsx(b,{icon:Ne,size:"6xl",color:"danger"})}),r.jsx(Xe,{children:r.jsx(b,{icon:Ue,size:"6xl"})}),r.jsxs(H,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Se=()=>r.jsx(l,{accept:ie,maxSize:3*1024**2,onDropRejected:e=>console.log("rejected files",e),children:r.jsxs(Ke,{color:["blackAlpha.500","whiteAlpha.500"],children:[r.jsx(Ge,{children:r.jsx(b,{icon:He,size:"6xl",color:"success"})}),r.jsx(We,{children:r.jsx(b,{icon:Ne,size:"6xl",color:"danger"})}),r.jsx(Xe,{children:r.jsx(b,{icon:Ue,size:"6xl"})}),r.jsxs(H,{gap:"2xs",children:[r.jsx(s,{fontSize:"xl",children:"Drag images here or click to select files"}),r.jsx(s,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Oe=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{focusBorderColor:"green.500",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{isInvalid:!0,errorBorderColor:"orange.500",children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Ce=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{isDisabled:!0,variant:"dashed",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{isDisabled:!0,variant:"solid",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(nr,{label:"Upload file",isDisabled:!0,children:r.jsx(l,{children:r.jsx(s,{children:"Drag file here or click to select file"})})})]}),Pe=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{isReadOnly:!0,variant:"dashed",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{isReadOnly:!0,variant:"solid",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(nr,{label:"Upload file",isReadOnly:!0,children:r.jsx(l,{children:r.jsx(s,{children:"Drag file here or click to select file"})})})]}),_e=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{isInvalid:!0,variant:"dashed",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{isInvalid:!0,variant:"solid",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(nr,{label:"Upload file",isInvalid:!0,errorMessage:"File is required.",children:r.jsx(l,{children:r.jsx(s,{children:"Drag file here or click to select file"})})})]}),Ie=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{isLoading:!0,variant:"dashed",children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{isLoading:!0,variant:"solid",children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Re=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{isLoading:!0,loadingProps:{variant:"grid"},children:r.jsx(s,{children:"Drag file here or click to select file"})}),r.jsx(l,{isLoading:!0,loadingProps:{color:"secondary"},children:r.jsx(s,{children:"Drag file here or click to select file"})})]}),Le=()=>{const e=p.useRef(null),o=()=>{var n;return(n=e.current)==null?void 0:n.call(e)};return r.jsxs(r.Fragment,{children:[r.jsx(Go,{onClick:o,children:"Select file"}),r.jsx(l,{openRef:e,children:r.jsx(s,{children:"Drag file here or click to select file"})})]})};var jr,zr,yr;ze.parameters={...ze.parameters,docs:{...(jr=ze.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <Dropzone>
      <Text>Drag file here or click to select file</Text>
    </Dropzone>;
}`,...(yr=(zr=ze.parameters)==null?void 0:zr.docs)==null?void 0:yr.source}}};var kr,br,vr;ye.parameters={...ye.parameters,docs:{...(kr=ye.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
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
}`,...(vr=(br=ye.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var Tr,Ar,wr;ke.parameters={...ke.parameters,docs:{...(Tr=ke.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
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
}`,...(wr=(Ar=ke.parameters)==null?void 0:Ar.docs)==null?void 0:wr.source}}};var Fr,Er,Sr;be.parameters={...be.parameters,docs:{...(Fr=be.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <Dropzone multiple>
      <Text>Drag files here or click to select files</Text>
    </Dropzone>;
}`,...(Sr=(Er=be.parameters)==null?void 0:Er.docs)==null?void 0:Sr.source}}};var Or,Cr,Pr;ve.parameters={...ve.parameters,docs:{...(Or=ve.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
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
}`,...(Pr=(Cr=ve.parameters)==null?void 0:Cr.docs)==null?void 0:Pr.source}}};var _r,Ir,Rr;Te.parameters={...Te.parameters,docs:{...(_r=Te.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <Dropzone maxSize={3 * 1024 ** 2}>
      <VStack w="auto" gap="2xs">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, each file should not exceed 5mb
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Rr=(Ir=Te.parameters)==null?void 0:Ir.docs)==null?void 0:Rr.source}}};var Lr,Mr,Br;Ae.parameters={...Ae.parameters,docs:{...(Lr=Ae.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  return <Dropzone multiple maxFiles={3}>
      <VStack w="auto" gap="2xs">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, can upload up to 3 files
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Br=(Mr=Ae.parameters)==null?void 0:Mr.docs)==null?void 0:Br.source}}};var $r,Vr,Hr;we.parameters={...we.parameters,docs:{...($r=we.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Icon icon={faArrowUpFromBracket} size="6xl" color="success" />
        </DropzoneAccept>

        <DropzoneReject>
          <Icon icon={faXmark} size="6xl" color="danger" />
        </DropzoneReject>

        <DropzoneIdle>
          <Icon icon={faImage} size="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>;
}`,...(Hr=(Vr=we.parameters)==null?void 0:Vr.docs)==null?void 0:Hr.source}}};var Nr,Ur,Kr;Fe.parameters={...Fe.parameters,docs:{...(Nr=Fe.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDrop={(acceptedFiles, fileRejections) => console.log("accepted files", acceptedFiles, "rejected files", fileRejections)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Icon icon={faArrowUpFromBracket} size="6xl" color="success" />
        </DropzoneAccept>

        <DropzoneReject>
          <Icon icon={faXmark} size="6xl" color="danger" />
        </DropzoneReject>

        <DropzoneIdle>
          <Icon icon={faImage} size="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>;
}`,...(Kr=(Ur=Fe.parameters)==null?void 0:Ur.docs)==null?void 0:Kr.source}}};var Yr,Gr,Wr;Ee.parameters={...Ee.parameters,docs:{...(Yr=Ee.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDropAccepted={files => console.log("accepted files", files)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Icon icon={faArrowUpFromBracket} size="6xl" color="success" />
        </DropzoneAccept>

        <DropzoneReject>
          <Icon icon={faXmark} size="6xl" color="danger" />
        </DropzoneReject>

        <DropzoneIdle>
          <Icon icon={faImage} size="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>;
}`,...(Wr=(Gr=Ee.parameters)==null?void 0:Gr.docs)==null?void 0:Wr.source}}};var Xr,qr,Jr;Se.parameters={...Se.parameters,docs:{...(Xr=Se.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDropRejected={files => console.log("rejected files", files)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Icon icon={faArrowUpFromBracket} size="6xl" color="success" />
        </DropzoneAccept>

        <DropzoneReject>
          <Icon icon={faXmark} size="6xl" color="danger" />
        </DropzoneReject>

        <DropzoneIdle>
          <Icon icon={faImage} size="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>;
}`,...(Jr=(qr=Se.parameters)==null?void 0:qr.docs)==null?void 0:Jr.source}}};var Qr,Zr,eo;Oe.parameters={...Oe.parameters,docs:{...(Qr=Oe.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <>
      <Dropzone focusBorderColor="green.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isInvalid errorBorderColor="orange.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(eo=(Zr=Oe.parameters)==null?void 0:Zr.docs)==null?void 0:eo.source}}};var ro,oo,no;Ce.parameters={...Ce.parameters,docs:{...(ro=Ce.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
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
}`,...(no=(oo=Ce.parameters)==null?void 0:oo.docs)==null?void 0:no.source}}};var to,io,so;Pe.parameters={...Pe.parameters,docs:{...(to=Pe.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
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
}`,...(so=(io=Pe.parameters)==null?void 0:io.docs)==null?void 0:so.source}}};var ao,co,lo;_e.parameters={..._e.parameters,docs:{...(ao=_e.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
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
}`,...(lo=(co=_e.parameters)==null?void 0:co.docs)==null?void 0:lo.source}}};var po,fo,uo;Ie.parameters={...Ie.parameters,docs:{...(po=Ie.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
  return <>
      <Dropzone isLoading variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isLoading variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(uo=(fo=Ie.parameters)==null?void 0:fo.docs)==null?void 0:uo.source}}};var mo,go,xo;Re.parameters={...Re.parameters,docs:{...(mo=Re.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
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
}`,...(xo=(go=Re.parameters)==null?void 0:go.docs)==null?void 0:xo.source}}};var ho,Do,jo;Le.parameters={...Le.parameters,docs:{...(ho=Le.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  const openRef = useRef<() => void>(null);
  const onOpen = () => openRef.current?.();
  return <>
      <Button onClick={onOpen}>Select file</Button>

      <Dropzone openRef={openRef}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(jo=(Do=Le.parameters)==null?void 0:Do.docs)==null?void 0:jo.source}}};const st=["basic","withSize","withVariant","withMultiple","withAccept","withMaxSize","withMaxFiles","withStatus","useOnDrop","useOnDropAccepted","useOnDropRejected","withBorderColor","isDisabled","isReadonly","isInvalid","isLoading","customLoading","useOpen"];export{st as __namedExportsOrder,ze as basic,Re as customLoading,it as default,Ce as isDisabled,_e as isInvalid,Ie as isLoading,Pe as isReadonly,Fe as useOnDrop,Ee as useOnDropAccepted,Se as useOnDropRejected,Le as useOpen,ve as withAccept,Oe as withBorderColor,Ae as withMaxFiles,Te as withMaxSize,be as withMultiple,ye as withSize,we as withStatus,ke as withVariant};
