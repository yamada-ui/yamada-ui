import{a as o,j as m,F}from"./jsx-runtime-b08f8875.js";import{I as A,w as Ue,h as Ke,x as We}from"./fontawesome-icon-3d38e7e9.js";import{r as p,a as Bo}from"./index-8ee6c85d.js";import{g as $o}from"./_commonjsHelpers-de833af9.js";import{u as No,f as Vo,F as ir}from"./form-control-cf335ace.js";import{F as Ho}from"./fade-f5f4a666.js";import{L as Uo}from"./loading-9c6ba408.js";import{k as Ko,D as Wo,h as Yo,a0 as Go,d as fr,e as qo,v as ze}from"./factory-2d442159.js";import{f as Xo}from"./forward-ref-cf7188bd.js";import{a as Jo}from"./use-component-style-b6002d28.js";import{o as Qo}from"./theme-provider-78d359c6.js";import{T as a}from"./text-c7eceae7.js";import{V as H,H as Ye}from"./stack-57e4b232.js";import{B as Zo}from"./button-a09a9cfc.js";import"./index-8d47fad6.js";import"./icon-a76117e5.js";import"./index-7636bab8.js";import"./index-709acde9.js";import"./motion-5447b2d8.js";import"./utils-83ab8863.js";import"./index-a8e328c0.js";import"./index-0e02ae64.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";var bo={exports:{}},en="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rn=en,on=rn;function vo(){}function To(){}To.resetWarningCache=vo;var nn=function(){function e(i,c,g,d,f,D){if(D!==on){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}e.isRequired=e;function r(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:To,resetWarningCache:vo};return n.PropTypes=n,n};bo.exports=nn();var tn=bo.exports;const u=$o(tn),an=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function te(e,r){const n=cn(e);if(typeof n.path!="string"){const{webkitRelativePath:i}=e;Object.defineProperty(n,"path",{value:typeof r=="string"?r:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function cn(e){const{name:r}=e;if(r&&r.lastIndexOf(".")!==-1&&!e.type){const i=r.split(".").pop().toLowerCase(),c=an.get(i);c&&Object.defineProperty(e,"type",{value:c,writable:!1,configurable:!1,enumerable:!0})}return e}var U=(e,r,n)=>new Promise((i,c)=>{var g=D=>{try{f(n.next(D))}catch(b){c(b)}},d=D=>{try{f(n.throw(D))}catch(b){c(b)}},f=D=>D.done?i(D.value):Promise.resolve(D.value).then(g,d);f((n=n.apply(e,r)).next())});const sn=[".DS_Store","Thumbs.db"];function ln(e){return U(this,null,function*(){return $e(e)&&pn(e.dataTransfer)?mn(e.dataTransfer,e.type):fn(e)?dn(e):Array.isArray(e)&&e.every(r=>"getFile"in r&&typeof r.getFile=="function")?un(e):[]})}function pn(e){return $e(e)}function fn(e){return $e(e)&&$e(e.target)}function $e(e){return typeof e=="object"&&e!==null}function dn(e){return nr(e.target.files).map(r=>te(r))}function un(e){return U(this,null,function*(){return(yield Promise.all(e.map(n=>n.getFile()))).map(n=>te(n))})}function mn(e,r){return U(this,null,function*(){if(e.items){const n=nr(e.items).filter(c=>c.kind==="file");if(r!=="drop")return n;const i=yield Promise.all(n.map(gn));return dr(Ao(i))}return dr(nr(e.files).map(n=>te(n)))})}function dr(e){return e.filter(r=>sn.indexOf(r.name)===-1)}function nr(e){if(e===null)return[];const r=[];for(let n=0;n<e.length;n++){const i=e[n];r.push(i)}return r}function gn(e){if(typeof e.webkitGetAsEntry!="function")return ur(e);const r=e.webkitGetAsEntry();return r&&r.isDirectory?wo(r):ur(e)}function Ao(e){return e.reduce((r,n)=>[...r,...Array.isArray(n)?Ao(n):[n]],[])}function ur(e){const r=e.getAsFile();if(!r)return Promise.reject(`${e} is not a File`);const n=te(r);return Promise.resolve(n)}function hn(e){return U(this,null,function*(){return e.isDirectory?wo(e):Dn(e)})}function wo(e){const r=e.createReader();return new Promise((n,i)=>{const c=[];function g(){r.readEntries(d=>U(this,null,function*(){if(d.length){const f=Promise.all(d.map(hn));c.push(f),g()}else try{const f=yield Promise.all(c);n(f)}catch(f){i(f)}}),d=>{i(d)})}g()})}function Dn(e){return U(this,null,function*(){return new Promise((r,n)=>{e.file(i=>{const c=te(i,e.fullPath);r(c)},i=>{n(i)})})})}function xn(e,r){if(e&&r){const n=Array.isArray(r)?r:r.split(","),i=e.name||"",c=(e.type||"").toLowerCase(),g=c.replace(/\/.*$/,"");return n.some(d=>{const f=d.trim().toLowerCase();return f.charAt(0)==="."?i.toLowerCase().endsWith(f):f.endsWith("/*")?g===f.replace(/\/.*$/,""):c===f})}return!0}var yn=Object.defineProperty,zn=Object.defineProperties,kn=Object.getOwnPropertyDescriptors,mr=Object.getOwnPropertySymbols,bn=Object.prototype.hasOwnProperty,vn=Object.prototype.propertyIsEnumerable,gr=(e,r,n)=>r in e?yn(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,Tn=(e,r)=>{for(var n in r||(r={}))bn.call(r,n)&&gr(e,n,r[n]);if(mr)for(var n of mr(r))vn.call(r,n)&&gr(e,n,r[n]);return e},An=(e,r)=>zn(e,kn(r));const wn="file-invalid-type",En="file-too-large",Sn="file-too-small",Fn="too-many-files",On=e=>{e=Array.isArray(e)&&e.length===1?e[0]:e;const r=Array.isArray(e)?`one of ${e.join(", ")}`:e;return{code:wn,message:`File type must be ${r}`}},hr=e=>({code:En,message:`File is larger than ${e} ${e===1?"byte":"bytes"}`}),Dr=e=>({code:Sn,message:`File is smaller than ${e} ${e===1?"byte":"bytes"}`}),Pn={code:Fn,message:"Too many files"};function Eo(e,r){const n=e.type==="application/x-moz-file"||xn(e,r);return[n,n?null:On(r)]}function So(e,r,n){if(L(e.size))if(L(r)&&L(n)){if(e.size>n)return[!1,hr(n)];if(e.size<r)return[!1,Dr(r)]}else{if(L(r)&&e.size<r)return[!1,Dr(r)];if(L(n)&&e.size>n)return[!1,hr(n)]}return[!0,null]}function L(e){return e!=null}function _n({files:e,accept:r,minSize:n,maxSize:i,multiple:c,maxFiles:g,validator:d}){return!c&&e.length>1||c&&g>=1&&e.length>g?!1:e.every(f=>{const[D]=Eo(f,r),[b]=So(f,n,i),_=d?d(f):null;return D&&b&&!_})}function Ne(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ke(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,r=>r==="Files"||r==="application/x-moz-file"):!!e.target&&!!e.target.files}function xr(e){e.preventDefault()}function Cn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function In(e){return e.indexOf("Edge/")!==-1}function Rn(e=window.navigator.userAgent){return Cn(e)||In(e)}function S(...e){return(r,...n)=>e.some(i=>(!Ne(r)&&i&&i(r,...n),Ne(r)))}function jn(){return"showOpenFilePicker"in window}function Ln(e){return L(e)?[{description:"Files",accept:Object.entries(e).filter(([n,i])=>{let c=!0;return Fo(n)||(console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`),c=!1),(!Array.isArray(i)||!i.every(Oo))&&(console.warn(`Skipped "${n}" because an invalid file extension was provided.`),c=!1),c}).reduce((n,[i,c])=>An(Tn({},n),{[i]:c}),{})}]:e}function Mn(e){if(L(e))return Object.entries(e).reduce((r,[n,i])=>[...r,n,...i],[]).filter(r=>Fo(r)||Oo(r)).join(",")}function Bn(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function $n(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function Fo(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Oo(e){return/^.*\.[\w]+$/.test(e)}var Nn=Object.defineProperty,Vn=Object.defineProperties,Hn=Object.getOwnPropertyDescriptors,Ve=Object.getOwnPropertySymbols,Po=Object.prototype.hasOwnProperty,_o=Object.prototype.propertyIsEnumerable,yr=(e,r,n)=>r in e?Nn(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,k=(e,r)=>{for(var n in r||(r={}))Po.call(r,n)&&yr(e,n,r[n]);if(Ve)for(var n of Ve(r))_o.call(r,n)&&yr(e,n,r[n]);return e},P=(e,r)=>Vn(e,Hn(r)),He=(e,r)=>{var n={};for(var i in e)Po.call(e,i)&&r.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&Ve)for(var i of Ve(e))r.indexOf(i)<0&&_o.call(e,i)&&(n[i]=e[i]);return n};const ar=p.forwardRef((e,r)=>{var n=e,{children:i}=n,c=He(n,["children"]);const g=Io(c),{open:d}=g,f=He(g,["open"]);return p.useImperativeHandle(r,()=>({open:d}),[d]),Bo.createElement(p.Fragment,null,i(P(k({},f),{open:d})))});ar.displayName="Dropzone";const Co={disabled:!1,getFilesFromEvent:ln,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ar.defaultProps=Co;ar.propTypes={children:u.func,accept:u.objectOf(u.arrayOf(u.string)),multiple:u.bool,preventDropOnDocument:u.bool,noClick:u.bool,noKeyboard:u.bool,noDrag:u.bool,noDragEventsBubbling:u.bool,minSize:u.number,maxSize:u.number,maxFiles:u.number,disabled:u.bool,getFilesFromEvent:u.func,onFileDialogCancel:u.func,onFileDialogOpen:u.func,useFsAccessApi:u.bool,autoFocus:u.bool,onDragEnter:u.func,onDragLeave:u.func,onDragOver:u.func,onDrop:u.func,onDropAccepted:u.func,onDropRejected:u.func,onError:u.func,validator:u.func};const tr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Io(e={}){const{accept:r,disabled:n,getFilesFromEvent:i,maxSize:c,minSize:g,multiple:d,maxFiles:f,onDragEnter:D,onDragLeave:b,onDragOver:_,onDrop:C,onDropAccepted:K,onDropRejected:W,onFileDialogCancel:Y,onFileDialogOpen:G,useFsAccessApi:ae,autoFocus:ce,preventDropOnDocument:q,noClick:se,noKeyboard:X,noDrag:le,noDragEventsBubbling:O,onError:J,validator:I}=k(k({},Co),e),R=p.useMemo(()=>Mn(r),[r]),pe=p.useMemo(()=>Ln(r),[r]),Q=p.useMemo(()=>typeof G=="function"?G:zr,[G]),M=p.useMemo(()=>typeof Y=="function"?Y:zr,[Y]),x=p.useRef(null),v=p.useRef(null),[j,z]=p.useReducer(Un,tr),{isFocused:Qe,isFileDialogActive:fe}=j,B=p.useRef(typeof window<"u"&&window.isSecureContext&&ae&&jn()),$=()=>{!B.current&&fe&&setTimeout(()=>{if(v.current){const{files:t}=v.current;t.length||(z({type:"closeDialog"}),M())}},300)};p.useEffect(()=>(window.addEventListener("focus",$,!1),()=>{window.removeEventListener("focus",$,!1)}),[v,fe,M,B]);const w=p.useRef([]),de=t=>{x.current&&x.current.contains(t.target)||(t.preventDefault(),w.current=[])};p.useEffect(()=>(q&&(document.addEventListener("dragover",xr,!1),document.addEventListener("drop",de,!1)),()=>{q&&(document.removeEventListener("dragover",xr),document.removeEventListener("drop",de))}),[x,q]),p.useEffect(()=>(!n&&ce&&x.current&&x.current.focus(),()=>{}),[x,ce,n]);const E=p.useCallback(t=>{J?J(t):console.error(t)},[J]),ue=p.useCallback(t=>{t.preventDefault(),t.persist(),ye(t),w.current=[...w.current,t.target],ke(t)&&Promise.resolve(i(t)).then(s=>{if(Ne(t)&&!O)return;const h=s.length,y=h>0&&_n({files:s,accept:R,minSize:g,maxSize:c,multiple:d,maxFiles:f,validator:I}),T=h>0&&!y;z({isDragAccept:y,isDragReject:T,isDragActive:!0,type:"setDraggedFiles"}),D&&D(t)}).catch(s=>E(s))},[i,D,E,O,R,g,c,d,f,I]),me=p.useCallback(t=>{t.preventDefault(),t.persist(),ye(t);const s=ke(t);if(s&&t.dataTransfer)try{t.dataTransfer.dropEffect="copy"}catch{}return s&&_&&_(t),!1},[_,O]),ge=p.useCallback(t=>{t.preventDefault(),t.persist(),ye(t);const s=w.current.filter(y=>x.current&&x.current.contains(y)),h=s.indexOf(t.target);h!==-1&&s.splice(h,1),w.current=s,!(s.length>0)&&(z({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ke(t)&&b&&b(t))},[x,b,O]),he=p.useCallback((t,s)=>{const h=[],y=[];t.forEach(T=>{const[Z,ee]=Eo(T,R),[er,rr]=So(T,g,c),re=I?I(T):null;if(Z&&er&&!re)h.push(T);else{let oe=[ee,rr];re&&(oe=oe.concat(re)),y.push({file:T,errors:oe.filter(or=>or)})}}),(!d&&h.length>1||d&&f>=1&&h.length>f)&&(h.forEach(T=>{y.push({file:T,errors:[Pn]})}),h.splice(0)),z({acceptedFiles:h,fileRejections:y,type:"setFiles"}),C&&C(h,y,s),y.length>0&&W&&W(y,s),h.length>0&&K&&K(h,s)},[z,d,R,g,c,f,C,K,W,I]),De=p.useCallback(t=>{t.preventDefault(),t.persist(),ye(t),w.current=[],ke(t)&&Promise.resolve(i(t)).then(s=>{Ne(t)&&!O||he(s,t)}).catch(s=>E(s)),z({type:"reset"})},[i,he,E,O]),N=p.useCallback(()=>{if(B.current){z({type:"openDialog"}),Q();const t={multiple:d,types:pe};window.showOpenFilePicker(t).then(s=>i(s)).then(s=>{he(s,null),z({type:"closeDialog"})}).catch(s=>{Bn(s)?(M(s),z({type:"closeDialog"})):$n(s)?(B.current=!1,v.current?(v.current.value=null,v.current.click()):E(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):E(s)});return}v.current&&(z({type:"openDialog"}),Q(),v.current.value=null,v.current.click())},[z,Q,M,ae,he,E,pe,d]),cr=p.useCallback(t=>{!x.current||!x.current.isEqualNode(t.target)||(t.key===" "||t.key==="Enter"||t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),N())},[x,N]),sr=p.useCallback(()=>{z({type:"focus"})},[]),lr=p.useCallback(()=>{z({type:"blur"})},[]),pr=p.useCallback(()=>{se||(Rn()?setTimeout(N,0):N())},[se,N]),V=t=>n?null:t,Ze=t=>X?null:V(t),xe=t=>le?null:V(t),ye=t=>{O&&t.stopPropagation()},Ro=p.useMemo(()=>(t={})=>{var s=t,{refKey:h="ref",role:y,onKeyDown:T,onFocus:Z,onBlur:ee,onClick:er,onDragEnter:rr,onDragOver:re,onDragLeave:oe,onDrop:or}=s,Mo=He(s,["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return k(k({onKeyDown:Ze(S(T,cr)),onFocus:Ze(S(Z,sr)),onBlur:Ze(S(ee,lr)),onClick:V(S(er,pr)),onDragEnter:xe(S(rr,ue)),onDragOver:xe(S(re,me)),onDragLeave:xe(S(oe,ge)),onDrop:xe(S(or,De)),role:typeof y=="string"&&y!==""?y:"presentation",[h]:x},!n&&!X?{tabIndex:0}:{}),Mo)},[x,cr,sr,lr,pr,ue,me,ge,De,X,le,n]),jo=p.useCallback(t=>{t.stopPropagation()},[]),Lo=p.useMemo(()=>(t={})=>{var s=t,{refKey:h="ref",onChange:y,onClick:T}=s,Z=He(s,["refKey","onChange","onClick"]);const ee={accept:R,multiple:d,type:"file",style:{display:"none"},onChange:V(S(y,De)),onClick:V(S(T,jo)),tabIndex:-1,[h]:v};return k(k({},ee),Z)},[v,r,d,De,n]);return P(k({},j),{isFocused:Qe&&!n,getRootProps:Ro,getInputProps:Lo,rootRef:x,inputRef:v,open:V(N)})}function Un(e,r){switch(r.type){case"focus":return P(k({},e),{isFocused:!0});case"blur":return P(k({},e),{isFocused:!1});case"openDialog":return P(k({},tr),{isFileDialogActive:!0});case"closeDialog":return P(k({},e),{isFileDialogActive:!1});case"setDraggedFiles":return P(k({},e),{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return P(k({},e),{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return k({},tr);default:return e}}function zr(){}const[Kn,Ge]=Ko({name:"NativeSelectContext",errorMessage:`useDropzoneContext returned is 'undefined'. Seems you forgot to wrap the components in "<Dropzone />"`}),l=Xo((e,r)=>{const[n,i]=Jo("Dropzone",e),{id:c,name:g,className:d,isLoading:f,overlayProps:D,loadingProps:b,openRef:_,accept:C,onDrop:K,onDropAccepted:W,onDropRejected:Y,multiple:G,maxSize:ae,maxFiles:ce,autoFocus:q,noClick:se,noDrag:X,noDragEventsBubbling:le,noKeyboard:O,onDragEnter:J,onDragLeave:I,onDragOver:R,onFileDialogCancel:pe,onFileDialogOpen:Q,preventDropOnDocument:M,useFsAccessApi:x,children:v,...j}=No(Qo(i)),z=f||j.disabled||j.readOnly,Qe=Wo(j,Vo),{getRootProps:fe,getInputProps:B,isDragAccept:$,isDragReject:w,open:de}=Io({disabled:z,accept:Yo(C)?C.reduce((me,ge)=>({...me,[ge]:[]}),{}):C,onDrop:K,onDropAccepted:W,onDropRejected:Y,multiple:G,maxSize:ae,maxFiles:ce,autoFocus:q,noClick:se,noDrag:X,noDragEventsBubbling:le,noKeyboard:O,onDragEnter:J,onDragLeave:I,onDragOver:R,onFileDialogCancel:pe,onFileDialogOpen:Q,preventDropOnDocument:M,useFsAccessApi:x});Go(_,de);const E=!$&&!w,ue={position:"relative",display:"flex",justifyContent:"center",alignItems:"center",...n.container};return o(Kn,{value:{isLoading:f,isDragAccept:$,isDragReject:w,isDragIdle:E,styles:n},children:m(fr.div,{className:qo("ui-dropzone",d),__css:ue,...j,...fe(),"data-accept":ze($),"data-reject":ze(w),"data-idle":ze(E),"data-loading":ze(f),children:[o(Wn,{loadingProps:b,...D}),o(fr.input,{ref:r,id:c,name:g,...Qe,...B()}),v]})})}),Wn=({loadingProps:e,...r})=>{const{isLoading:n,styles:i}=Ge(),c={position:"absolute",top:0,left:0,w:"100%",h:"100%",display:"flex",justifyContent:"center",alignItems:"center",...i.overlay};return o(Ho,{isOpen:n,unmountOnExit:!0,className:"ui-dropzone__overlay",__css:c,...r,children:o(Uo,{className:"ui-dropzone__overlay__loading",size:"4xl",...e})})},qe=({children:e})=>{const{isDragAccept:r}=Ge();return r?o(p.Fragment,{children:e}):null},Xe=({children:e})=>{const{isDragReject:r}=Ge();return r?o(p.Fragment,{children:e}):null},Je=({children:e})=>{const{isDragIdle:r}=Ge();return r?o(p.Fragment,{children:e}):null},ne={txt:"text/plain",html:"text/html",csv:"text/csv",png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",mp3:"audio/mpeg",mpeg:"video/mpeg",mp4:"video/mp4",zip:"application/zip",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},ie=[ne.png,ne.gif,ne.jpeg,ne.svg,ne.webp],ht={title:"Components / Forms / Dropzone",component:l},be=()=>o(l,{children:o(a,{children:"Drag file here or click to select file"})}),ve=()=>m(F,{children:[o(l,{size:"xs",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{size:"sm",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{size:"md",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{size:"lg",children:o(a,{children:"Drag file here or click to select file"})})]}),Te=()=>m(F,{children:[o(l,{variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{variant:"solid",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{variant:"unstyled",children:o(a,{children:"Drag file here or click to select file"})})]}),Ae=()=>o(l,{multiple:!0,children:o(a,{children:"Drag files here or click to select files"})}),we=()=>m(F,{children:[o(l,{accept:ie,children:o(a,{children:"Drag image here or click to select image"})}),o(l,{accept:{"image/*":[]},children:o(a,{children:"Drag image here or click to select image"})})]}),Ee=()=>o(l,{maxSize:3*1024**2,children:m(H,{w:"auto",gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag file here or click to select file"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})}),Se=()=>o(l,{multiple:!0,maxFiles:3,children:m(H,{w:"auto",gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag file here or click to select file"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, can upload up to 3 files"})]})}),Fe=()=>o(l,{accept:ie,maxSize:3*1024**2,children:m(Ye,{color:["blackAlpha.500","whiteAlpha.500"],children:[o(qe,{children:o(A,{icon:Ue,size:"6xl",color:"primary"})}),o(Xe,{children:o(A,{icon:Ke,size:"6xl",color:"danger"})}),o(Je,{children:o(A,{icon:We,size:"6xl"})}),m(H,{gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag images here or click to select files"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Oe=()=>o(l,{accept:ie,maxSize:3*1024**2,onDrop:(e,r)=>console.log("accepted files",e,"rejected files",r),children:m(Ye,{color:["blackAlpha.500","whiteAlpha.500"],children:[o(qe,{children:o(A,{icon:Ue,size:"6xl",color:"primary"})}),o(Xe,{children:o(A,{icon:Ke,size:"6xl",color:"danger"})}),o(Je,{children:o(A,{icon:We,size:"6xl"})}),m(H,{gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag images here or click to select files"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Pe=()=>o(l,{accept:ie,maxSize:3*1024**2,onDropAccepted:e=>console.log("accepted files",e),children:m(Ye,{color:["blackAlpha.500","whiteAlpha.500"],children:[o(qe,{children:o(A,{icon:Ue,size:"6xl",color:"primary"})}),o(Xe,{children:o(A,{icon:Ke,size:"6xl",color:"danger"})}),o(Je,{children:o(A,{icon:We,size:"6xl"})}),m(H,{gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag images here or click to select files"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),_e=()=>o(l,{accept:ie,maxSize:3*1024**2,onDropRejected:e=>console.log("rejected files",e),children:m(Ye,{color:["blackAlpha.500","whiteAlpha.500"],children:[o(qe,{children:o(A,{icon:Ue,size:"6xl",color:"primary"})}),o(Xe,{children:o(A,{icon:Ke,size:"6xl",color:"danger"})}),o(Je,{children:o(A,{icon:We,size:"6xl"})}),m(H,{gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag images here or click to select files"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Ce=()=>m(F,{children:[o(l,{focusBorderColor:"green.500",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isInvalid:!0,errorBorderColor:"orange.500",children:o(a,{children:"Drag file here or click to select file"})})]}),Ie=()=>m(F,{children:[o(l,{isDisabled:!0,variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isDisabled:!0,variant:"solid",children:o(a,{children:"Drag file here or click to select file"})}),o(ir,{label:"Upload file",isDisabled:!0,children:o(l,{children:o(a,{children:"Drag file here or click to select file"})})})]}),Re=()=>m(F,{children:[o(l,{isReadOnly:!0,variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isReadOnly:!0,variant:"solid",children:o(a,{children:"Drag file here or click to select file"})}),o(ir,{label:"Upload file",isReadOnly:!0,children:o(l,{children:o(a,{children:"Drag file here or click to select file"})})})]}),je=()=>m(F,{children:[o(l,{isInvalid:!0,variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isInvalid:!0,variant:"solid",children:o(a,{children:"Drag file here or click to select file"})}),o(ir,{label:"Upload file",isInvalid:!0,errorMessage:"File is required.",children:o(l,{children:o(a,{children:"Drag file here or click to select file"})})})]}),Le=()=>m(F,{children:[o(l,{isLoading:!0,variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isLoading:!0,variant:"solid",children:o(a,{children:"Drag file here or click to select file"})})]}),Me=()=>m(F,{children:[o(l,{isLoading:!0,loadingProps:{variant:"grid"},children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isLoading:!0,loadingProps:{color:"secondary"},children:o(a,{children:"Drag file here or click to select file"})})]}),Be=()=>{const e=p.useRef(null);return m(F,{children:[o(Zo,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.call(e)},children:"Select file"}),o(l,{openRef:e,children:o(a,{children:"Drag file here or click to select file"})})]})};var kr,br,vr;be.parameters={...be.parameters,docs:{...(kr=be.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <Dropzone>
      <Text>Drag file here or click to select file</Text>
    </Dropzone>;
}`,...(vr=(br=be.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var Tr,Ar,wr;ve.parameters={...ve.parameters,docs:{...(Tr=ve.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
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
}`,...(wr=(Ar=ve.parameters)==null?void 0:Ar.docs)==null?void 0:wr.source}}};var Er,Sr,Fr;Te.parameters={...Te.parameters,docs:{...(Er=Te.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
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
}`,...(Fr=(Sr=Te.parameters)==null?void 0:Sr.docs)==null?void 0:Fr.source}}};var Or,Pr,_r;Ae.parameters={...Ae.parameters,docs:{...(Or=Ae.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <Dropzone multiple>
      <Text>Drag files here or click to select files</Text>
    </Dropzone>;
}`,...(_r=(Pr=Ae.parameters)==null?void 0:Pr.docs)==null?void 0:_r.source}}};var Cr,Ir,Rr;we.parameters={...we.parameters,docs:{...(Cr=we.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
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
}`,...(Rr=(Ir=we.parameters)==null?void 0:Ir.docs)==null?void 0:Rr.source}}};var jr,Lr,Mr;Ee.parameters={...Ee.parameters,docs:{...(jr=Ee.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <Dropzone maxSize={3 * 1024 ** 2}>
      <VStack w="auto" gap="2xs">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, each file should not exceed 5mb
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Mr=(Lr=Ee.parameters)==null?void 0:Lr.docs)==null?void 0:Mr.source}}};var Br,$r,Nr;Se.parameters={...Se.parameters,docs:{...(Br=Se.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <Dropzone multiple maxFiles={3}>
      <VStack w="auto" gap="2xs">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, can upload up to 3 files
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Nr=($r=Se.parameters)==null?void 0:$r.docs)==null?void 0:Nr.source}}};var Vr,Hr,Ur;Fe.parameters={...Fe.parameters,docs:{...(Vr=Fe.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Icon icon={faArrowUpFromBracket} size="6xl" color="primary" />
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
}`,...(Ur=(Hr=Fe.parameters)==null?void 0:Hr.docs)==null?void 0:Ur.source}}};var Kr,Wr,Yr;Oe.parameters={...Oe.parameters,docs:{...(Kr=Oe.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDrop={(acceptedFiles, fileRejections) => console.log("accepted files", acceptedFiles, "rejected files", fileRejections)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Icon icon={faArrowUpFromBracket} size="6xl" color="primary" />
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
}`,...(Yr=(Wr=Oe.parameters)==null?void 0:Wr.docs)==null?void 0:Yr.source}}};var Gr,qr,Xr;Pe.parameters={...Pe.parameters,docs:{...(Gr=Pe.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDropAccepted={files => console.log("accepted files", files)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Icon icon={faArrowUpFromBracket} size="6xl" color="primary" />
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
}`,...(Xr=(qr=Pe.parameters)==null?void 0:qr.docs)==null?void 0:Xr.source}}};var Jr,Qr,Zr;_e.parameters={..._e.parameters,docs:{...(Jr=_e.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  return <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2} onDropRejected={files => console.log("rejected files", files)}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Icon icon={faArrowUpFromBracket} size="6xl" color="primary" />
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
}`,...(Zr=(Qr=_e.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};var eo,ro,oo;Ce.parameters={...Ce.parameters,docs:{...(eo=Ce.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <>
      <Dropzone focusBorderColor="green.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isInvalid errorBorderColor="orange.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(oo=(ro=Ce.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var no,to,io;Ie.parameters={...Ie.parameters,docs:{...(no=Ie.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
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
}`,...(io=(to=Ie.parameters)==null?void 0:to.docs)==null?void 0:io.source}}};var ao,co,so;Re.parameters={...Re.parameters,docs:{...(ao=Re.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
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
}`,...(so=(co=Re.parameters)==null?void 0:co.docs)==null?void 0:so.source}}};var lo,po,fo;je.parameters={...je.parameters,docs:{...(lo=je.parameters)==null?void 0:lo.docs,source:{originalSource:`() => {
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
}`,...(fo=(po=je.parameters)==null?void 0:po.docs)==null?void 0:fo.source}}};var uo,mo,go;Le.parameters={...Le.parameters,docs:{...(uo=Le.parameters)==null?void 0:uo.docs,source:{originalSource:`() => {
  return <>
      <Dropzone isLoading variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isLoading variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(go=(mo=Le.parameters)==null?void 0:mo.docs)==null?void 0:go.source}}};var ho,Do,xo;Me.parameters={...Me.parameters,docs:{...(ho=Me.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
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
}`,...(xo=(Do=Me.parameters)==null?void 0:Do.docs)==null?void 0:xo.source}}};var yo,zo,ko;Be.parameters={...Be.parameters,docs:{...(yo=Be.parameters)==null?void 0:yo.docs,source:{originalSource:`() => {
  const openRef = useRef<() => void>(null);
  const onOpen = () => openRef.current?.();
  return <>
      <Button onClick={onOpen}>Select file</Button>

      <Dropzone openRef={openRef}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(ko=(zo=Be.parameters)==null?void 0:zo.docs)==null?void 0:ko.source}}};const Dt=["basic","withSize","withVariant","withMultiple","withAccept","withMaxSize","withMaxFiles","withStatus","useOnDrop","useOnDropAccepted","useOnDropRejected","withBorderColor","isDisabled","isReadonly","isInvalid","isLoading","customLoading","useOpen"];export{Dt as __namedExportsOrder,be as basic,Me as customLoading,ht as default,Ie as isDisabled,je as isInvalid,Le as isLoading,Re as isReadonly,Oe as useOnDrop,Pe as useOnDropAccepted,_e as useOnDropRejected,Be as useOpen,we as withAccept,Ce as withBorderColor,Se as withMaxFiles,Ee as withMaxSize,Ae as withMultiple,ve as withSize,Fe as withStatus,Te as withVariant};
//# sourceMappingURL=dropzone.stories-d0583bd5.js.map
