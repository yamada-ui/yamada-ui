import{a as o,j as m,F as S}from"./jsx-runtime-b08f8875.js";import{I as T,v as Ue,h as Ke,w as Ye}from"./fontawesome-icon-55aa2a9e.js";import{r as p,a as Ro}from"./index-8ee6c85d.js";import{P as u}from"./index-8d47fad6.js";import{u as Lo,f as Mo,F as ir}from"./form-control-cf335ace.js";import{F as Bo}from"./fade-f5f4a666.js";import{L as $o}from"./loading-9c6ba408.js";import{k as Vo,D as Ho,h as No,a0 as Uo,d as dr,e as Ko,v as ye}from"./factory-2d442159.js";import{f as Yo}from"./forward-ref-cf7188bd.js";import{a as Go}from"./use-component-style-b6002d28.js";import{o as Wo}from"./theme-provider-78d359c6.js";import{T as a}from"./text-c7eceae7.js";import{V as N,H as Ge}from"./stack-57e4b232.js";import{B as Xo}from"./button-a09a9cfc.js";import"./icon-a76117e5.js";import"./index-7636bab8.js";import"./_commonjsHelpers-de833af9.js";import"./index-709acde9.js";import"./motion-5447b2d8.js";import"./utils-83ab8863.js";import"./index-a8e328c0.js";import"./index-0e02ae64.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";const qo=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function te(e,r){const n=Jo(e);if(typeof n.path!="string"){const{webkitRelativePath:i}=e;Object.defineProperty(n,"path",{value:typeof r=="string"?r:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Jo(e){const{name:r}=e;if(r&&r.lastIndexOf(".")!==-1&&!e.type){const i=r.split(".").pop().toLowerCase(),c=qo.get(i);c&&Object.defineProperty(e,"type",{value:c,writable:!1,configurable:!1,enumerable:!0})}return e}var U=(e,r,n)=>new Promise((i,c)=>{var h=z=>{try{d(n.next(z))}catch(A){c(A)}},f=z=>{try{d(n.throw(z))}catch(A){c(A)}},d=z=>z.done?i(z.value):Promise.resolve(z.value).then(h,f);d((n=n.apply(e,r)).next())});const Qo=[".DS_Store","Thumbs.db"];function Zo(e){return U(this,null,function*(){return $e(e)&&en(e.dataTransfer)?tn(e.dataTransfer,e.type):rn(e)?on(e):Array.isArray(e)&&e.every(r=>"getFile"in r&&typeof r.getFile=="function")?nn(e):[]})}function en(e){return $e(e)}function rn(e){return $e(e)&&$e(e.target)}function $e(e){return typeof e=="object"&&e!==null}function on(e){return nr(e.target.files).map(r=>te(r))}function nn(e){return U(this,null,function*(){return(yield Promise.all(e.map(n=>n.getFile()))).map(n=>te(n))})}function tn(e,r){return U(this,null,function*(){if(e.items){const n=nr(e.items).filter(c=>c.kind==="file");if(r!=="drop")return n;const i=yield Promise.all(n.map(an));return fr(bo(i))}return fr(nr(e.files).map(n=>te(n)))})}function fr(e){return e.filter(r=>Qo.indexOf(r.name)===-1)}function nr(e){if(e===null)return[];const r=[];for(let n=0;n<e.length;n++){const i=e[n];r.push(i)}return r}function an(e){if(typeof e.webkitGetAsEntry!="function")return ur(e);const r=e.webkitGetAsEntry();return r&&r.isDirectory?vo(r):ur(e)}function bo(e){return e.reduce((r,n)=>[...r,...Array.isArray(n)?bo(n):[n]],[])}function ur(e){const r=e.getAsFile();if(!r)return Promise.reject(`${e} is not a File`);const n=te(r);return Promise.resolve(n)}function cn(e){return U(this,null,function*(){return e.isDirectory?vo(e):sn(e)})}function vo(e){const r=e.createReader();return new Promise((n,i)=>{const c=[];function h(){r.readEntries(f=>U(this,null,function*(){if(f.length){const d=Promise.all(f.map(cn));c.push(d),h()}else try{const d=yield Promise.all(c);n(d)}catch(d){i(d)}}),f=>{i(f)})}h()})}function sn(e){return U(this,null,function*(){return new Promise((r,n)=>{e.file(i=>{const c=te(i,e.fullPath);r(c)},i=>{n(i)})})})}function ln(e,r){if(e&&r){const n=Array.isArray(r)?r:r.split(","),i=e.name||"",c=(e.type||"").toLowerCase(),h=c.replace(/\/.*$/,"");return n.some(f=>{const d=f.trim().toLowerCase();return d.charAt(0)==="."?i.toLowerCase().endsWith(d):d.endsWith("/*")?h===d.replace(/\/.*$/,""):c===d})}return!0}var pn=Object.defineProperty,dn=Object.defineProperties,fn=Object.getOwnPropertyDescriptors,mr=Object.getOwnPropertySymbols,un=Object.prototype.hasOwnProperty,mn=Object.prototype.propertyIsEnumerable,gr=(e,r,n)=>r in e?pn(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,gn=(e,r)=>{for(var n in r||(r={}))un.call(r,n)&&gr(e,n,r[n]);if(mr)for(var n of mr(r))mn.call(r,n)&&gr(e,n,r[n]);return e},hn=(e,r)=>dn(e,fn(r));const Dn="file-invalid-type",xn="file-too-large",zn="file-too-small",yn="too-many-files",kn=e=>{e=Array.isArray(e)&&e.length===1?e[0]:e;const r=Array.isArray(e)?`one of ${e.join(", ")}`:e;return{code:Dn,message:`File type must be ${r}`}},hr=e=>({code:xn,message:`File is larger than ${e} ${e===1?"byte":"bytes"}`}),Dr=e=>({code:zn,message:`File is smaller than ${e} ${e===1?"byte":"bytes"}`}),bn={code:yn,message:"Too many files"};function To(e,r){const n=e.type==="application/x-moz-file"||ln(e,r);return[n,n?null:kn(r)]}function Ao(e,r,n){if(L(e.size))if(L(r)&&L(n)){if(e.size>n)return[!1,hr(n)];if(e.size<r)return[!1,Dr(r)]}else{if(L(r)&&e.size<r)return[!1,Dr(r)];if(L(n)&&e.size>n)return[!1,hr(n)]}return[!0,null]}function L(e){return e!=null}function vn({files:e,accept:r,minSize:n,maxSize:i,multiple:c,maxFiles:h,validator:f}){return!c&&e.length>1||c&&h>=1&&e.length>h?!1:e.every(d=>{const[z]=To(d,r),[A]=Ao(d,n,i),P=f?f(d):null;return z&&A&&!P})}function Ve(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ke(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,r=>r==="Files"||r==="application/x-moz-file"):!!e.target&&!!e.target.files}function xr(e){e.preventDefault()}function Tn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function An(e){return e.indexOf("Edge/")!==-1}function wn(e=window.navigator.userAgent){return Tn(e)||An(e)}function E(...e){return(r,...n)=>e.some(i=>(!Ve(r)&&i&&i(r,...n),Ve(r)))}function Fn(){return"showOpenFilePicker"in window}function En(e){return L(e)?[{description:"Files",accept:Object.entries(e).filter(([n,i])=>{let c=!0;return wo(n)||(console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`),c=!1),(!Array.isArray(i)||!i.every(Fo))&&(console.warn(`Skipped "${n}" because an invalid file extension was provided.`),c=!1),c}).reduce((n,[i,c])=>hn(gn({},n),{[i]:c}),{})}]:e}function Sn(e){if(L(e))return Object.entries(e).reduce((r,[n,i])=>[...r,n,...i],[]).filter(r=>wo(r)||Fo(r)).join(",")}function On(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Cn(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function wo(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Fo(e){return/^.*\.[\w]+$/.test(e)}var Pn=Object.defineProperty,_n=Object.defineProperties,In=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,Eo=Object.prototype.hasOwnProperty,So=Object.prototype.propertyIsEnumerable,zr=(e,r,n)=>r in e?Pn(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,k=(e,r)=>{for(var n in r||(r={}))Eo.call(r,n)&&zr(e,n,r[n]);if(He)for(var n of He(r))So.call(r,n)&&zr(e,n,r[n]);return e},C=(e,r)=>_n(e,In(r)),Ne=(e,r)=>{var n={};for(var i in e)Eo.call(e,i)&&r.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&He)for(var i of He(e))r.indexOf(i)<0&&So.call(e,i)&&(n[i]=e[i]);return n};const ar=p.forwardRef((e,r)=>{var n=e,{children:i}=n,c=Ne(n,["children"]);const h=Co(c),{open:f}=h,d=Ne(h,["open"]);return p.useImperativeHandle(r,()=>({open:f}),[f]),Ro.createElement(p.Fragment,null,i(C(k({},d),{open:f})))});ar.displayName="Dropzone";const Oo={disabled:!1,getFilesFromEvent:Zo,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ar.defaultProps=Oo;ar.propTypes={children:u.func,accept:u.objectOf(u.arrayOf(u.string)),multiple:u.bool,preventDropOnDocument:u.bool,noClick:u.bool,noKeyboard:u.bool,noDrag:u.bool,noDragEventsBubbling:u.bool,minSize:u.number,maxSize:u.number,maxFiles:u.number,disabled:u.bool,getFilesFromEvent:u.func,onFileDialogCancel:u.func,onFileDialogOpen:u.func,useFsAccessApi:u.bool,autoFocus:u.bool,onDragEnter:u.func,onDragLeave:u.func,onDragOver:u.func,onDrop:u.func,onDropAccepted:u.func,onDropRejected:u.func,onError:u.func,validator:u.func};const tr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Co(e={}){const{accept:r,disabled:n,getFilesFromEvent:i,maxSize:c,minSize:h,multiple:f,maxFiles:d,onDragEnter:z,onDragLeave:A,onDragOver:P,onDrop:_,onDropAccepted:K,onDropRejected:Y,onFileDialogCancel:G,onFileDialogOpen:W,useFsAccessApi:ae,autoFocus:ce,preventDropOnDocument:X,noClick:se,noKeyboard:q,noDrag:le,noDragEventsBubbling:O,onError:J,validator:I}=k(k({},Oo),e),j=p.useMemo(()=>Sn(r),[r]),pe=p.useMemo(()=>En(r),[r]),Q=p.useMemo(()=>typeof W=="function"?W:yr,[W]),M=p.useMemo(()=>typeof G=="function"?G:yr,[G]),D=p.useRef(null),b=p.useRef(null),[R,y]=p.useReducer(jn,tr),{isFocused:Qe,isFileDialogActive:de}=R,B=p.useRef(typeof window<"u"&&window.isSecureContext&&ae&&Fn()),$=()=>{!B.current&&de&&setTimeout(()=>{if(b.current){const{files:t}=b.current;t.length||(y({type:"closeDialog"}),M())}},300)};p.useEffect(()=>(window.addEventListener("focus",$,!1),()=>{window.removeEventListener("focus",$,!1)}),[b,de,M,B]);const w=p.useRef([]),fe=t=>{D.current&&D.current.contains(t.target)||(t.preventDefault(),w.current=[])};p.useEffect(()=>(X&&(document.addEventListener("dragover",xr,!1),document.addEventListener("drop",fe,!1)),()=>{X&&(document.removeEventListener("dragover",xr),document.removeEventListener("drop",fe))}),[D,X]),p.useEffect(()=>(!n&&ce&&D.current&&D.current.focus(),()=>{}),[D,ce,n]);const F=p.useCallback(t=>{J?J(t):console.error(t)},[J]),ue=p.useCallback(t=>{t.preventDefault(),t.persist(),ze(t),w.current=[...w.current,t.target],ke(t)&&Promise.resolve(i(t)).then(s=>{if(Ve(t)&&!O)return;const g=s.length,x=g>0&&vn({files:s,accept:j,minSize:h,maxSize:c,multiple:f,maxFiles:d,validator:I}),v=g>0&&!x;y({isDragAccept:x,isDragReject:v,isDragActive:!0,type:"setDraggedFiles"}),z&&z(t)}).catch(s=>F(s))},[i,z,F,O,j,h,c,f,d,I]),me=p.useCallback(t=>{t.preventDefault(),t.persist(),ze(t);const s=ke(t);if(s&&t.dataTransfer)try{t.dataTransfer.dropEffect="copy"}catch{}return s&&P&&P(t),!1},[P,O]),ge=p.useCallback(t=>{t.preventDefault(),t.persist(),ze(t);const s=w.current.filter(x=>D.current&&D.current.contains(x)),g=s.indexOf(t.target);g!==-1&&s.splice(g,1),w.current=s,!(s.length>0)&&(y({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ke(t)&&A&&A(t))},[D,A,O]),he=p.useCallback((t,s)=>{const g=[],x=[];t.forEach(v=>{const[Z,ee]=To(v,j),[er,rr]=Ao(v,h,c),re=I?I(v):null;if(Z&&er&&!re)g.push(v);else{let oe=[ee,rr];re&&(oe=oe.concat(re)),x.push({file:v,errors:oe.filter(or=>or)})}}),(!f&&g.length>1||f&&d>=1&&g.length>d)&&(g.forEach(v=>{x.push({file:v,errors:[bn]})}),g.splice(0)),y({acceptedFiles:g,fileRejections:x,type:"setFiles"}),_&&_(g,x,s),x.length>0&&Y&&Y(x,s),g.length>0&&K&&K(g,s)},[y,f,j,h,c,d,_,K,Y,I]),De=p.useCallback(t=>{t.preventDefault(),t.persist(),ze(t),w.current=[],ke(t)&&Promise.resolve(i(t)).then(s=>{Ve(t)&&!O||he(s,t)}).catch(s=>F(s)),y({type:"reset"})},[i,he,F,O]),V=p.useCallback(()=>{if(B.current){y({type:"openDialog"}),Q();const t={multiple:f,types:pe};window.showOpenFilePicker(t).then(s=>i(s)).then(s=>{he(s,null),y({type:"closeDialog"})}).catch(s=>{On(s)?(M(s),y({type:"closeDialog"})):Cn(s)?(B.current=!1,b.current?(b.current.value=null,b.current.click()):F(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):F(s)});return}b.current&&(y({type:"openDialog"}),Q(),b.current.value=null,b.current.click())},[y,Q,M,ae,he,F,pe,f]),cr=p.useCallback(t=>{!D.current||!D.current.isEqualNode(t.target)||(t.key===" "||t.key==="Enter"||t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),V())},[D,V]),sr=p.useCallback(()=>{y({type:"focus"})},[]),lr=p.useCallback(()=>{y({type:"blur"})},[]),pr=p.useCallback(()=>{se||(wn()?setTimeout(V,0):V())},[se,V]),H=t=>n?null:t,Ze=t=>q?null:H(t),xe=t=>le?null:H(t),ze=t=>{O&&t.stopPropagation()},Po=p.useMemo(()=>(t={})=>{var s=t,{refKey:g="ref",role:x,onKeyDown:v,onFocus:Z,onBlur:ee,onClick:er,onDragEnter:rr,onDragOver:re,onDragLeave:oe,onDrop:or}=s,jo=Ne(s,["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return k(k({onKeyDown:Ze(E(v,cr)),onFocus:Ze(E(Z,sr)),onBlur:Ze(E(ee,lr)),onClick:H(E(er,pr)),onDragEnter:xe(E(rr,ue)),onDragOver:xe(E(re,me)),onDragLeave:xe(E(oe,ge)),onDrop:xe(E(or,De)),role:typeof x=="string"&&x!==""?x:"presentation",[g]:D},!n&&!q?{tabIndex:0}:{}),jo)},[D,cr,sr,lr,pr,ue,me,ge,De,q,le,n]),_o=p.useCallback(t=>{t.stopPropagation()},[]),Io=p.useMemo(()=>(t={})=>{var s=t,{refKey:g="ref",onChange:x,onClick:v}=s,Z=Ne(s,["refKey","onChange","onClick"]);const ee={accept:j,multiple:f,type:"file",style:{display:"none"},onChange:H(E(x,De)),onClick:H(E(v,_o)),tabIndex:-1,[g]:b};return k(k({},ee),Z)},[b,r,f,De,n]);return C(k({},R),{isFocused:Qe&&!n,getRootProps:Po,getInputProps:Io,rootRef:D,inputRef:b,open:H(V)})}function jn(e,r){switch(r.type){case"focus":return C(k({},e),{isFocused:!0});case"blur":return C(k({},e),{isFocused:!1});case"openDialog":return C(k({},tr),{isFileDialogActive:!0});case"closeDialog":return C(k({},e),{isFileDialogActive:!1});case"setDraggedFiles":return C(k({},e),{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return C(k({},e),{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return k({},tr);default:return e}}function yr(){}const[Rn,We]=Vo({name:"NativeSelectContext",errorMessage:`useDropzoneContext returned is 'undefined'. Seems you forgot to wrap the components in "<Dropzone />"`}),l=Yo((e,r)=>{const[n,i]=Go("Dropzone",e),{id:c,name:h,className:f,isLoading:d,overlayProps:z,loadingProps:A,openRef:P,accept:_,onDrop:K,onDropAccepted:Y,onDropRejected:G,multiple:W,maxSize:ae,maxFiles:ce,autoFocus:X,noClick:se,noDrag:q,noDragEventsBubbling:le,noKeyboard:O,onDragEnter:J,onDragLeave:I,onDragOver:j,onFileDialogCancel:pe,onFileDialogOpen:Q,preventDropOnDocument:M,useFsAccessApi:D,children:b,...R}=Lo(Wo(i)),y=d||R.disabled||R.readOnly,Qe=Ho(R,Mo),{getRootProps:de,getInputProps:B,isDragAccept:$,isDragReject:w,open:fe}=Co({disabled:y,accept:No(_)?_.reduce((me,ge)=>({...me,[ge]:[]}),{}):_,onDrop:K,onDropAccepted:Y,onDropRejected:G,multiple:W,maxSize:ae,maxFiles:ce,autoFocus:X,noClick:se,noDrag:q,noDragEventsBubbling:le,noKeyboard:O,onDragEnter:J,onDragLeave:I,onDragOver:j,onFileDialogCancel:pe,onFileDialogOpen:Q,preventDropOnDocument:M,useFsAccessApi:D});Uo(P,fe);const F=!$&&!w,ue={position:"relative",display:"flex",justifyContent:"center",alignItems:"center",...n.container};return o(Rn,{value:{isLoading:d,isDragAccept:$,isDragReject:w,isDragIdle:F,styles:n},children:m(dr.div,{className:Ko("ui-dropzone",f),__css:ue,...R,...de(),"data-accept":ye($),"data-reject":ye(w),"data-idle":ye(F),"data-loading":ye(d),children:[o(Ln,{loadingProps:A,...z}),o(dr.input,{ref:r,id:c,name:h,...Qe,...B()}),b]})})}),Ln=({loadingProps:e,...r})=>{const{isLoading:n,styles:i}=We(),c={position:"absolute",top:0,left:0,w:"100%",h:"100%",display:"flex",justifyContent:"center",alignItems:"center",...i.overlay};return o(Bo,{isOpen:n,unmountOnExit:!0,className:"ui-dropzone__overlay",__css:c,...r,children:o($o,{className:"ui-dropzone__overlay__loading",size:"4xl",...e})})},Xe=({children:e})=>{const{isDragAccept:r}=We();return r?o(p.Fragment,{children:e}):null},qe=({children:e})=>{const{isDragReject:r}=We();return r?o(p.Fragment,{children:e}):null},Je=({children:e})=>{const{isDragIdle:r}=We();return r?o(p.Fragment,{children:e}):null},ne={txt:"text/plain",html:"text/html",csv:"text/csv",png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",mp3:"audio/mpeg",mpeg:"video/mpeg",mp4:"video/mp4",zip:"application/zip",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},ie=[ne.png,ne.gif,ne.jpeg,ne.svg,ne.webp],ct={title:"Components / Forms / Dropzone",component:l},be=()=>o(l,{children:o(a,{children:"Drag file here or click to select file"})}),ve=()=>m(S,{children:[o(l,{size:"xs",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{size:"sm",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{size:"md",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{size:"lg",children:o(a,{children:"Drag file here or click to select file"})})]}),Te=()=>m(S,{children:[o(l,{variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{variant:"solid",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{variant:"unstyled",children:o(a,{children:"Drag file here or click to select file"})})]}),Ae=()=>o(l,{multiple:!0,children:o(a,{children:"Drag files here or click to select files"})}),we=()=>m(S,{children:[o(l,{accept:ie,children:o(a,{children:"Drag image here or click to select image"})}),o(l,{accept:{"image/*":[]},children:o(a,{children:"Drag image here or click to select image"})})]}),Fe=()=>o(l,{maxSize:3*1024**2,children:m(N,{w:"auto",gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag file here or click to select file"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})}),Ee=()=>o(l,{multiple:!0,maxFiles:3,children:m(N,{w:"auto",gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag file here or click to select file"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, can upload up to 3 files"})]})}),Se=()=>o(l,{accept:ie,maxSize:3*1024**2,children:m(Ge,{color:["blackAlpha.500","whiteAlpha.500"],children:[o(Xe,{children:o(T,{icon:Ue,size:"6xl",color:"primary"})}),o(qe,{children:o(T,{icon:Ke,size:"6xl",color:"danger"})}),o(Je,{children:o(T,{icon:Ye,size:"6xl"})}),m(N,{gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag images here or click to select files"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Oe=()=>o(l,{accept:ie,maxSize:3*1024**2,onDrop:(e,r)=>console.log("accepted files",e,"rejected files",r),children:m(Ge,{color:["blackAlpha.500","whiteAlpha.500"],children:[o(Xe,{children:o(T,{icon:Ue,size:"6xl",color:"primary"})}),o(qe,{children:o(T,{icon:Ke,size:"6xl",color:"danger"})}),o(Je,{children:o(T,{icon:Ye,size:"6xl"})}),m(N,{gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag images here or click to select files"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Ce=()=>o(l,{accept:ie,maxSize:3*1024**2,onDropAccepted:e=>console.log("accepted files",e),children:m(Ge,{color:["blackAlpha.500","whiteAlpha.500"],children:[o(Xe,{children:o(T,{icon:Ue,size:"6xl",color:"primary"})}),o(qe,{children:o(T,{icon:Ke,size:"6xl",color:"danger"})}),o(Je,{children:o(T,{icon:Ye,size:"6xl"})}),m(N,{gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag images here or click to select files"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Pe=()=>o(l,{accept:ie,maxSize:3*1024**2,onDropRejected:e=>console.log("rejected files",e),children:m(Ge,{color:["blackAlpha.500","whiteAlpha.500"],children:[o(Xe,{children:o(T,{icon:Ue,size:"6xl",color:"primary"})}),o(qe,{children:o(T,{icon:Ke,size:"6xl",color:"danger"})}),o(Je,{children:o(T,{icon:Ye,size:"6xl"})}),m(N,{gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag images here or click to select files"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),_e=()=>m(S,{children:[o(l,{focusBorderColor:"green.500",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isInvalid:!0,errorBorderColor:"orange.500",children:o(a,{children:"Drag file here or click to select file"})})]}),Ie=()=>m(S,{children:[o(l,{isDisabled:!0,variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isDisabled:!0,variant:"solid",children:o(a,{children:"Drag file here or click to select file"})}),o(ir,{label:"Upload file",isDisabled:!0,children:o(l,{children:o(a,{children:"Drag file here or click to select file"})})})]}),je=()=>m(S,{children:[o(l,{isReadOnly:!0,variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isReadOnly:!0,variant:"solid",children:o(a,{children:"Drag file here or click to select file"})}),o(ir,{label:"Upload file",isReadOnly:!0,children:o(l,{children:o(a,{children:"Drag file here or click to select file"})})})]}),Re=()=>m(S,{children:[o(l,{isInvalid:!0,variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isInvalid:!0,variant:"solid",children:o(a,{children:"Drag file here or click to select file"})}),o(ir,{label:"Upload file",isInvalid:!0,errorMessage:"File is required.",children:o(l,{children:o(a,{children:"Drag file here or click to select file"})})})]}),Le=()=>m(S,{children:[o(l,{isLoading:!0,variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isLoading:!0,variant:"solid",children:o(a,{children:"Drag file here or click to select file"})})]}),Me=()=>m(S,{children:[o(l,{isLoading:!0,loadingProps:{variant:"grid"},children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isLoading:!0,loadingProps:{color:"secondary"},children:o(a,{children:"Drag file here or click to select file"})})]}),Be=()=>{const e=p.useRef(null);return m(S,{children:[o(Xo,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.call(e)},children:"Select file"}),o(l,{openRef:e,children:o(a,{children:"Drag file here or click to select file"})})]})};var kr,br,vr;be.parameters={...be.parameters,docs:{...(kr=be.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
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
}`,...(wr=(Ar=ve.parameters)==null?void 0:Ar.docs)==null?void 0:wr.source}}};var Fr,Er,Sr;Te.parameters={...Te.parameters,docs:{...(Fr=Te.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
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
}`,...(Sr=(Er=Te.parameters)==null?void 0:Er.docs)==null?void 0:Sr.source}}};var Or,Cr,Pr;Ae.parameters={...Ae.parameters,docs:{...(Or=Ae.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <Dropzone multiple>
      <Text>Drag files here or click to select files</Text>
    </Dropzone>;
}`,...(Pr=(Cr=Ae.parameters)==null?void 0:Cr.docs)==null?void 0:Pr.source}}};var _r,Ir,jr;we.parameters={...we.parameters,docs:{...(_r=we.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
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
}`,...(jr=(Ir=we.parameters)==null?void 0:Ir.docs)==null?void 0:jr.source}}};var Rr,Lr,Mr;Fe.parameters={...Fe.parameters,docs:{...(Rr=Fe.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  return <Dropzone maxSize={3 * 1024 ** 2}>
      <VStack w="auto" gap="2xs">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, each file should not exceed 5mb
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Mr=(Lr=Fe.parameters)==null?void 0:Lr.docs)==null?void 0:Mr.source}}};var Br,$r,Vr;Ee.parameters={...Ee.parameters,docs:{...(Br=Ee.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <Dropzone multiple maxFiles={3}>
      <VStack w="auto" gap="2xs">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, can upload up to 3 files
        </Text>
      </VStack>
    </Dropzone>;
}`,...(Vr=($r=Ee.parameters)==null?void 0:$r.docs)==null?void 0:Vr.source}}};var Hr,Nr,Ur;Se.parameters={...Se.parameters,docs:{...(Hr=Se.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
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
}`,...(Ur=(Nr=Se.parameters)==null?void 0:Nr.docs)==null?void 0:Ur.source}}};var Kr,Yr,Gr;Oe.parameters={...Oe.parameters,docs:{...(Kr=Oe.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
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
}`,...(Gr=(Yr=Oe.parameters)==null?void 0:Yr.docs)==null?void 0:Gr.source}}};var Wr,Xr,qr;Ce.parameters={...Ce.parameters,docs:{...(Wr=Ce.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
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
}`,...(qr=(Xr=Ce.parameters)==null?void 0:Xr.docs)==null?void 0:qr.source}}};var Jr,Qr,Zr;Pe.parameters={...Pe.parameters,docs:{...(Jr=Pe.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
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
}`,...(Zr=(Qr=Pe.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};var eo,ro,oo;_e.parameters={..._e.parameters,docs:{...(eo=_e.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <>
      <Dropzone focusBorderColor="green.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isInvalid errorBorderColor="orange.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(oo=(ro=_e.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var no,to,io;Ie.parameters={...Ie.parameters,docs:{...(no=Ie.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
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
}`,...(io=(to=Ie.parameters)==null?void 0:to.docs)==null?void 0:io.source}}};var ao,co,so;je.parameters={...je.parameters,docs:{...(ao=je.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
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
}`,...(so=(co=je.parameters)==null?void 0:co.docs)==null?void 0:so.source}}};var lo,po,fo;Re.parameters={...Re.parameters,docs:{...(lo=Re.parameters)==null?void 0:lo.docs,source:{originalSource:`() => {
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
}`,...(fo=(po=Re.parameters)==null?void 0:po.docs)==null?void 0:fo.source}}};var uo,mo,go;Le.parameters={...Le.parameters,docs:{...(uo=Le.parameters)==null?void 0:uo.docs,source:{originalSource:`() => {
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
}`,...(xo=(Do=Me.parameters)==null?void 0:Do.docs)==null?void 0:xo.source}}};var zo,yo,ko;Be.parameters={...Be.parameters,docs:{...(zo=Be.parameters)==null?void 0:zo.docs,source:{originalSource:`() => {
  const openRef = useRef<() => void>(null);
  const onOpen = () => openRef.current?.();
  return <>
      <Button onClick={onOpen}>Select file</Button>

      <Dropzone openRef={openRef}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>;
}`,...(ko=(yo=Be.parameters)==null?void 0:yo.docs)==null?void 0:ko.source}}};const st=["basic","withSize","withVariant","withMultiple","withAccept","withMaxSize","withMaxFiles","withStatus","useOnDrop","useOnDropAccepted","useOnDropRejected","withBorderColor","isDisabled","isReadonly","isInvalid","isLoading","customLoading","useOpen"];export{st as __namedExportsOrder,be as basic,Me as customLoading,ct as default,Ie as isDisabled,Re as isInvalid,Le as isLoading,je as isReadonly,Oe as useOnDrop,Ce as useOnDropAccepted,Pe as useOnDropRejected,Be as useOpen,we as withAccept,_e as withBorderColor,Ee as withMaxFiles,Fe as withMaxSize,Ae as withMultiple,ve as withSize,Se as withStatus,Te as withVariant};
//# sourceMappingURL=dropzone.stories-c25122f3.js.map
