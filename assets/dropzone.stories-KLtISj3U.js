import{j as o,a as m,F as E}from"./jsx-runtime-TtYKBvr-.js";import{I as T,s as Ue,i as Ke,t as Ye}from"./fontawesome-icon-XmXrmOUL.js";import{r as p,a as Ro}from"./index-IybTgENJ.js";import{P as u}from"./index-tvtfaFq4.js";import{u as Lo,f as Mo,F as ir}from"./form-control-XK8tZY5Y.js";import{F as Bo}from"./fade-d5sVglrO.js";import{L as $o}from"./loading-t4SoIc4G.js";import{c as Vo,Z as Ho,f as No,Y as Uo,u as fr,a as Ko,I as ye}from"./factory-LHs-Bkmb.js";import{f as Yo}from"./forward-ref-6T0UNPU-.js";import{u as Go}from"./use-component-style-eqg6O7Tm.js";import{o as Wo}from"./theme-provider-AD5gKQ6i.js";import{T as a}from"./text-dQvy8j4x.js";import{V as U,H as Ge}from"./stack-eN2E0mK0.js";import{B as Xo}from"./button-FPtidzDX.js";import"./icon-lGxzm-PJ.js";import"./index-S2htefC9.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./utils-C-nC6PHZ.js";import"./index-OsV4SKtw.js";import"./index-Z94ctYOZ.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./use-ripple-cz0_rK7P.js";import"./motion-HWUA2jNq.js";const qo=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function ae(e,r){const n=Jo(e);if(typeof n.path!="string"){const{webkitRelativePath:i}=e;Object.defineProperty(n,"path",{value:typeof r=="string"?r:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Jo(e){const{name:r}=e;if(r&&r.lastIndexOf(".")!==-1&&!e.type){const i=r.split(".").pop().toLowerCase(),c=qo.get(i);c&&Object.defineProperty(e,"type",{value:c,writable:!1,configurable:!1,enumerable:!0})}return e}var K=(e,r,n)=>new Promise((i,c)=>{var h=z=>{try{f(n.next(z))}catch(A){c(A)}},d=z=>{try{f(n.throw(z))}catch(A){c(A)}},f=z=>z.done?i(z.value):Promise.resolve(z.value).then(h,d);f((n=n.apply(e,r)).next())});const Zo=[".DS_Store","Thumbs.db"];function Qo(e){return K(this,null,function*(){return $e(e)&&en(e.dataTransfer)?tn(e.dataTransfer,e.type):rn(e)?on(e):Array.isArray(e)&&e.every(r=>"getFile"in r&&typeof r.getFile=="function")?nn(e):[]})}function en(e){return $e(e)}function rn(e){return $e(e)&&$e(e.target)}function $e(e){return typeof e=="object"&&e!==null}function on(e){return nr(e.target.files).map(r=>ae(r))}function nn(e){return K(this,null,function*(){return(yield Promise.all(e.map(n=>n.getFile()))).map(n=>ae(n))})}function tn(e,r){return K(this,null,function*(){if(e.items){const n=nr(e.items).filter(c=>c.kind==="file");if(r!=="drop")return n;const i=yield Promise.all(n.map(an));return dr(bo(i))}return dr(nr(e.files).map(n=>ae(n)))})}function dr(e){return e.filter(r=>Zo.indexOf(r.name)===-1)}function nr(e){if(e===null)return[];const r=[];for(let n=0;n<e.length;n++){const i=e[n];r.push(i)}return r}function an(e){if(typeof e.webkitGetAsEntry!="function")return ur(e);const r=e.webkitGetAsEntry();return r&&r.isDirectory?vo(r):ur(e)}function bo(e){return e.reduce((r,n)=>[...r,...Array.isArray(n)?bo(n):[n]],[])}function ur(e){const r=e.getAsFile();if(!r)return Promise.reject(`${e} is not a File`);const n=ae(r);return Promise.resolve(n)}function cn(e){return K(this,null,function*(){return e.isDirectory?vo(e):sn(e)})}function vo(e){const r=e.createReader();return new Promise((n,i)=>{const c=[];function h(){r.readEntries(d=>K(this,null,function*(){if(d.length){const f=Promise.all(d.map(cn));c.push(f),h()}else try{const f=yield Promise.all(c);n(f)}catch(f){i(f)}}),d=>{i(d)})}h()})}function sn(e){return K(this,null,function*(){return new Promise((r,n)=>{e.file(i=>{const c=ae(i,e.fullPath);r(c)},i=>{n(i)})})})}function ln(e,r){if(e&&r){const n=Array.isArray(r)?r:r.split(","),i=e.name||"",c=(e.type||"").toLowerCase(),h=c.replace(/\/.*$/,"");return n.some(d=>{const f=d.trim().toLowerCase();return f.charAt(0)==="."?i.toLowerCase().endsWith(f):f.endsWith("/*")?h===f.replace(/\/.*$/,""):c===f})}return!0}var pn=Object.defineProperty,fn=Object.defineProperties,dn=Object.getOwnPropertyDescriptors,mr=Object.getOwnPropertySymbols,un=Object.prototype.hasOwnProperty,mn=Object.prototype.propertyIsEnumerable,gr=(e,r,n)=>r in e?pn(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,gn=(e,r)=>{for(var n in r||(r={}))un.call(r,n)&&gr(e,n,r[n]);if(mr)for(var n of mr(r))mn.call(r,n)&&gr(e,n,r[n]);return e},hn=(e,r)=>fn(e,dn(r));const Dn="file-invalid-type",xn="file-too-large",zn="file-too-small",yn="too-many-files",kn=e=>{e=Array.isArray(e)&&e.length===1?e[0]:e;const r=Array.isArray(e)?`one of ${e.join(", ")}`:e;return{code:Dn,message:`File type must be ${r}`}},hr=e=>({code:xn,message:`File is larger than ${e} ${e===1?"byte":"bytes"}`}),Dr=e=>({code:zn,message:`File is smaller than ${e} ${e===1?"byte":"bytes"}`}),bn={code:yn,message:"Too many files"};function To(e,r){const n=e.type==="application/x-moz-file"||ln(e,r);return[n,n?null:kn(r)]}function Ao(e,r,n){if(R(e.size))if(R(r)&&R(n)){if(e.size>n)return[!1,hr(n)];if(e.size<r)return[!1,Dr(r)]}else{if(R(r)&&e.size<r)return[!1,Dr(r)];if(R(n)&&e.size>n)return[!1,hr(n)]}return[!0,null]}function R(e){return e!=null}function vn({files:e,accept:r,minSize:n,maxSize:i,multiple:c,maxFiles:h,validator:d}){return!c&&e.length>1||c&&h>=1&&e.length>h?!1:e.every(f=>{const[z]=To(f,r),[A]=Ao(f,n,i),P=d?d(f):null;return z&&A&&!P})}function Ve(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ke(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,r=>r==="Files"||r==="application/x-moz-file"):!!e.target&&!!e.target.files}function xr(e){e.preventDefault()}function Tn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function An(e){return e.indexOf("Edge/")!==-1}function wn(e=window.navigator.userAgent){return Tn(e)||An(e)}function F(...e){return(r,...n)=>e.some(i=>(!Ve(r)&&i&&i(r,...n),Ve(r)))}function Fn(){return"showOpenFilePicker"in window}function En(e){return R(e)?[{description:"Files",accept:Object.entries(e).filter(([n,i])=>{let c=!0;return wo(n)||(console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`),c=!1),(!Array.isArray(i)||!i.every(Fo))&&(console.warn(`Skipped "${n}" because an invalid file extension was provided.`),c=!1),c}).reduce((n,[i,c])=>hn(gn({},n),{[i]:c}),{})}]:e}function Sn(e){if(R(e))return Object.entries(e).reduce((r,[n,i])=>[...r,n,...i],[]).filter(r=>wo(r)||Fo(r)).join(",")}function On(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Cn(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function wo(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Fo(e){return/^.*\.[\w]+$/.test(e)}var Pn=Object.defineProperty,_n=Object.defineProperties,In=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,Eo=Object.prototype.hasOwnProperty,So=Object.prototype.propertyIsEnumerable,zr=(e,r,n)=>r in e?Pn(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,k=(e,r)=>{for(var n in r||(r={}))Eo.call(r,n)&&zr(e,n,r[n]);if(He)for(var n of He(r))So.call(r,n)&&zr(e,n,r[n]);return e},C=(e,r)=>_n(e,In(r)),Ne=(e,r)=>{var n={};for(var i in e)Eo.call(e,i)&&r.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&He)for(var i of He(e))r.indexOf(i)<0&&So.call(e,i)&&(n[i]=e[i]);return n};const ar=p.forwardRef((e,r)=>{var n=e,{children:i}=n,c=Ne(n,["children"]);const h=Co(c),{open:d}=h,f=Ne(h,["open"]);return p.useImperativeHandle(r,()=>({open:d}),[d]),Ro.createElement(p.Fragment,null,i(C(k({},f),{open:d})))});ar.displayName="Dropzone";const Oo={disabled:!1,getFilesFromEvent:Qo,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ar.defaultProps=Oo;ar.propTypes={children:u.func,accept:u.objectOf(u.arrayOf(u.string)),multiple:u.bool,preventDropOnDocument:u.bool,noClick:u.bool,noKeyboard:u.bool,noDrag:u.bool,noDragEventsBubbling:u.bool,minSize:u.number,maxSize:u.number,maxFiles:u.number,disabled:u.bool,getFilesFromEvent:u.func,onFileDialogCancel:u.func,onFileDialogOpen:u.func,useFsAccessApi:u.bool,autoFocus:u.bool,onDragEnter:u.func,onDragLeave:u.func,onDragOver:u.func,onDrop:u.func,onDropAccepted:u.func,onDropRejected:u.func,onError:u.func,validator:u.func};const tr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Co(e={}){const{accept:r,disabled:n,getFilesFromEvent:i,maxSize:c,minSize:h,multiple:d,maxFiles:f,onDragEnter:z,onDragLeave:A,onDragOver:P,onDrop:_,onDropAccepted:Y,onDropRejected:G,onFileDialogCancel:W,onFileDialogOpen:X,useFsAccessApi:se,autoFocus:le,preventDropOnDocument:q,noClick:pe,noKeyboard:J,noDrag:fe,noDragEventsBubbling:S,onError:Z,validator:I}=k(k({},Oo),e),j=p.useMemo(()=>Sn(r),[r]),de=p.useMemo(()=>En(r),[r]),Q=p.useMemo(()=>typeof X=="function"?X:yr,[X]),L=p.useMemo(()=>typeof W=="function"?W:yr,[W]),D=p.useRef(null),b=p.useRef(null),[M,y]=p.useReducer(jn,tr),{isFocused:Ze,isFileDialogActive:ue}=M,B=p.useRef(typeof window<"u"&&window.isSecureContext&&se&&Fn()),me=()=>{!B.current&&ue&&setTimeout(()=>{if(b.current){const{files:t}=b.current;t.length||(y({type:"closeDialog"}),L())}},300)};p.useEffect(()=>(window.addEventListener("focus",me,!1),()=>{window.removeEventListener("focus",me,!1)}),[b,ue,L,B]);const w=p.useRef([]),$=t=>{D.current&&D.current.contains(t.target)||(t.preventDefault(),w.current=[])};p.useEffect(()=>(q&&(document.addEventListener("dragover",xr,!1),document.addEventListener("drop",$,!1)),()=>{q&&(document.removeEventListener("dragover",xr),document.removeEventListener("drop",$))}),[D,q]),p.useEffect(()=>(!n&&le&&D.current&&D.current.focus(),()=>{}),[D,le,n]);const O=p.useCallback(t=>{Z?Z(t):console.error(t)},[Z]),ee=p.useCallback(t=>{t.preventDefault(),t.persist(),ze(t),w.current=[...w.current,t.target],ke(t)&&Promise.resolve(i(t)).then(s=>{if(Ve(t)&&!S)return;const g=s.length,x=g>0&&vn({files:s,accept:j,minSize:h,maxSize:c,multiple:d,maxFiles:f,validator:I}),v=g>0&&!x;y({isDragAccept:x,isDragReject:v,isDragActive:!0,type:"setDraggedFiles"}),z&&z(t)}).catch(s=>O(s))},[i,z,O,S,j,h,c,d,f,I]),ge=p.useCallback(t=>{t.preventDefault(),t.persist(),ze(t);const s=ke(t);if(s&&t.dataTransfer)try{t.dataTransfer.dropEffect="copy"}catch{}return s&&P&&P(t),!1},[P,S]),he=p.useCallback(t=>{t.preventDefault(),t.persist(),ze(t);const s=w.current.filter(x=>D.current&&D.current.contains(x)),g=s.indexOf(t.target);g!==-1&&s.splice(g,1),w.current=s,!(s.length>0)&&(y({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ke(t)&&A&&A(t))},[D,A,S]),V=p.useCallback((t,s)=>{const g=[],x=[];t.forEach(v=>{const[re,oe]=To(v,j),[er,rr]=Ao(v,h,c),ne=I?I(v):null;if(re&&er&&!ne)g.push(v);else{let te=[oe,rr];ne&&(te=te.concat(ne)),x.push({file:v,errors:te.filter(or=>or)})}}),(!d&&g.length>1||d&&f>=1&&g.length>f)&&(g.forEach(v=>{x.push({file:v,errors:[bn]})}),g.splice(0)),y({acceptedFiles:g,fileRejections:x,type:"setFiles"}),_&&_(g,x,s),x.length>0&&G&&G(x,s),g.length>0&&Y&&Y(g,s)},[y,d,j,h,c,f,_,Y,G,I]),De=p.useCallback(t=>{t.preventDefault(),t.persist(),ze(t),w.current=[],ke(t)&&Promise.resolve(i(t)).then(s=>{Ve(t)&&!S||V(s,t)}).catch(s=>O(s)),y({type:"reset"})},[i,V,O,S]),H=p.useCallback(()=>{if(B.current){y({type:"openDialog"}),Q();const t={multiple:d,types:de};window.showOpenFilePicker(t).then(s=>i(s)).then(s=>{V(s,null),y({type:"closeDialog"})}).catch(s=>{On(s)?(L(s),y({type:"closeDialog"})):Cn(s)?(B.current=!1,b.current?(b.current.value=null,b.current.click()):O(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):O(s)});return}b.current&&(y({type:"openDialog"}),Q(),b.current.value=null,b.current.click())},[y,Q,L,se,V,O,de,d]),cr=p.useCallback(t=>{!D.current||!D.current.isEqualNode(t.target)||(t.key===" "||t.key==="Enter"||t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),H())},[D,H]),sr=p.useCallback(()=>{y({type:"focus"})},[]),lr=p.useCallback(()=>{y({type:"blur"})},[]),pr=p.useCallback(()=>{pe||(wn()?setTimeout(H,0):H())},[pe,H]),N=t=>n?null:t,Qe=t=>J?null:N(t),xe=t=>fe?null:N(t),ze=t=>{S&&t.stopPropagation()},Po=p.useMemo(()=>(t={})=>{var s=t,{refKey:g="ref",role:x,onKeyDown:v,onFocus:re,onBlur:oe,onClick:er,onDragEnter:rr,onDragOver:ne,onDragLeave:te,onDrop:or}=s,jo=Ne(s,["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return k(k({onKeyDown:Qe(F(v,cr)),onFocus:Qe(F(re,sr)),onBlur:Qe(F(oe,lr)),onClick:N(F(er,pr)),onDragEnter:xe(F(rr,ee)),onDragOver:xe(F(ne,ge)),onDragLeave:xe(F(te,he)),onDrop:xe(F(or,De)),role:typeof x=="string"&&x!==""?x:"presentation",[g]:D},!n&&!J?{tabIndex:0}:{}),jo)},[D,cr,sr,lr,pr,ee,ge,he,De,J,fe,n]),_o=p.useCallback(t=>{t.stopPropagation()},[]),Io=p.useMemo(()=>(t={})=>{var s=t,{refKey:g="ref",onChange:x,onClick:v}=s,re=Ne(s,["refKey","onChange","onClick"]);const oe={accept:j,multiple:d,type:"file",style:{display:"none"},onChange:N(F(x,De)),onClick:N(F(v,_o)),tabIndex:-1,[g]:b};return k(k({},oe),re)},[b,r,d,De,n]);return C(k({},M),{isFocused:Ze&&!n,getRootProps:Po,getInputProps:Io,rootRef:D,inputRef:b,open:N(H)})}function jn(e,r){switch(r.type){case"focus":return C(k({},e),{isFocused:!0});case"blur":return C(k({},e),{isFocused:!1});case"openDialog":return C(k({},tr),{isFileDialogActive:!0});case"closeDialog":return C(k({},e),{isFileDialogActive:!1});case"setDraggedFiles":return C(k({},e),{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return C(k({},e),{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return k({},tr);default:return e}}function yr(){}const[Rn,We]=Vo({name:"DropzoneContext",errorMessage:`useDropzoneContext returned is 'undefined'. Seems you forgot to wrap the components in "<Dropzone />"`}),l=Yo((e,r)=>{const[n,i]=Go("Dropzone",e),{id:c,name:h,className:d,isLoading:f,overlayProps:z,loadingProps:A,openRef:P,accept:_,onDrop:Y,onDropAccepted:G,onDropRejected:W,multiple:X,maxSize:se,maxFiles:le,autoFocus:q,noClick:pe,noDrag:J,noDragEventsBubbling:fe,noKeyboard:S,onDragEnter:Z,onDragLeave:I,onDragOver:j,onFileDialogCancel:de,onFileDialogOpen:Q,preventDropOnDocument:L,useFsAccessApi:D,children:b,...M}=Lo(Wo(i)),y=f||M.disabled||M.readOnly,[Ze,ue]=Ho(M,Mo),{getRootProps:B,getInputProps:me,isDragAccept:w,isDragReject:$,open:O}=Co({disabled:y,accept:No(_)?_.reduce((he,V)=>({...he,[V]:[]}),{}):_,onDrop:Y,onDropAccepted:G,onDropRejected:W,multiple:X,maxSize:se,maxFiles:le,autoFocus:q,noClick:pe,noDrag:J,noDragEventsBubbling:fe,noKeyboard:S,onDragEnter:Z,onDragLeave:I,onDragOver:j,onFileDialogCancel:de,onFileDialogOpen:Q,preventDropOnDocument:L,useFsAccessApi:D});Uo(P,O);const ee=!w&&!$,ge={position:"relative",display:"flex",justifyContent:"center",alignItems:"center",...n.container};return o(Rn,{value:{isLoading:f,isDragAccept:w,isDragReject:$,isDragIdle:ee,styles:n},children:m(fr.div,{className:Ko("ui-dropzone",d),__css:ge,...ue,...B(),"data-accept":ye(w),"data-reject":ye($),"data-idle":ye(ee),"data-loading":ye(f),children:[o(Ln,{loadingProps:A,...z}),o(fr.input,{ref:r,id:c,name:h,...Ze,...me()}),b]})})}),Ln=({loadingProps:e,...r})=>{const{isLoading:n,styles:i}=We(),c={position:"absolute",top:0,left:0,w:"100%",h:"100%",display:"flex",justifyContent:"center",alignItems:"center",...i.overlay};return o(Bo,{isOpen:n,unmountOnExit:!0,className:"ui-dropzone__overlay",__css:c,...r,children:o($o,{className:"ui-dropzone__overlay__loading",size:"4xl",...e})})},Xe=({children:e})=>{const{isDragAccept:r}=We();return r?o(p.Fragment,{children:e}):null},qe=({children:e})=>{const{isDragReject:r}=We();return r?o(p.Fragment,{children:e}):null},Je=({children:e})=>{const{isDragIdle:r}=We();return r?o(p.Fragment,{children:e}):null},ie={txt:"text/plain",html:"text/html",csv:"text/csv",png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",mp3:"audio/mpeg",mpeg:"video/mpeg",mp4:"video/mp4",zip:"application/zip",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},ce=[ie.png,ie.gif,ie.jpeg,ie.svg,ie.webp],lt={title:"Components / Forms / Dropzone",component:l},be=()=>o(l,{children:o(a,{children:"Drag file here or click to select file"})}),ve=()=>m(E,{children:[o(l,{size:"xs",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{size:"sm",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{size:"md",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{size:"lg",children:o(a,{children:"Drag file here or click to select file"})})]}),Te=()=>m(E,{children:[o(l,{variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{variant:"solid",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{variant:"unstyled",children:o(a,{children:"Drag file here or click to select file"})})]}),Ae=()=>o(l,{multiple:!0,children:o(a,{children:"Drag files here or click to select files"})}),we=()=>m(E,{children:[o(l,{accept:ce,children:o(a,{children:"Drag image here or click to select image"})}),o(l,{accept:{"image/*":[]},children:o(a,{children:"Drag image here or click to select image"})})]}),Fe=()=>o(l,{maxSize:3*1024**2,children:m(U,{w:"auto",gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag file here or click to select file"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})}),Ee=()=>o(l,{multiple:!0,maxFiles:3,children:m(U,{w:"auto",gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag file here or click to select file"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, can upload up to 3 files"})]})}),Se=()=>o(l,{accept:ce,maxSize:3*1024**2,children:m(Ge,{color:["blackAlpha.500","whiteAlpha.500"],children:[o(Xe,{children:o(T,{icon:Ue,size:"6xl",color:"success"})}),o(qe,{children:o(T,{icon:Ke,size:"6xl",color:"danger"})}),o(Je,{children:o(T,{icon:Ye,size:"6xl"})}),m(U,{gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag images here or click to select files"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Oe=()=>o(l,{accept:ce,maxSize:3*1024**2,onDrop:(e,r)=>console.log("accepted files",e,"rejected files",r),children:m(Ge,{color:["blackAlpha.500","whiteAlpha.500"],children:[o(Xe,{children:o(T,{icon:Ue,size:"6xl",color:"success"})}),o(qe,{children:o(T,{icon:Ke,size:"6xl",color:"danger"})}),o(Je,{children:o(T,{icon:Ye,size:"6xl"})}),m(U,{gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag images here or click to select files"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Ce=()=>o(l,{accept:ce,maxSize:3*1024**2,onDropAccepted:e=>console.log("accepted files",e),children:m(Ge,{color:["blackAlpha.500","whiteAlpha.500"],children:[o(Xe,{children:o(T,{icon:Ue,size:"6xl",color:"success"})}),o(qe,{children:o(T,{icon:Ke,size:"6xl",color:"danger"})}),o(Je,{children:o(T,{icon:Ye,size:"6xl"})}),m(U,{gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag images here or click to select files"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),Pe=()=>o(l,{accept:ce,maxSize:3*1024**2,onDropRejected:e=>console.log("rejected files",e),children:m(Ge,{color:["blackAlpha.500","whiteAlpha.500"],children:[o(Xe,{children:o(T,{icon:Ue,size:"6xl",color:"success"})}),o(qe,{children:o(T,{icon:Ke,size:"6xl",color:"danger"})}),o(Je,{children:o(T,{icon:Ye,size:"6xl"})}),m(U,{gap:"2xs",children:[o(a,{fontSize:"xl",children:"Drag images here or click to select files"}),o(a,{fontSize:"sm",children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}),_e=()=>m(E,{children:[o(l,{focusBorderColor:"green.500",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isInvalid:!0,errorBorderColor:"orange.500",children:o(a,{children:"Drag file here or click to select file"})})]}),Ie=()=>m(E,{children:[o(l,{isDisabled:!0,variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isDisabled:!0,variant:"solid",children:o(a,{children:"Drag file here or click to select file"})}),o(ir,{label:"Upload file",isDisabled:!0,children:o(l,{children:o(a,{children:"Drag file here or click to select file"})})})]}),je=()=>m(E,{children:[o(l,{isReadOnly:!0,variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isReadOnly:!0,variant:"solid",children:o(a,{children:"Drag file here or click to select file"})}),o(ir,{label:"Upload file",isReadOnly:!0,children:o(l,{children:o(a,{children:"Drag file here or click to select file"})})})]}),Re=()=>m(E,{children:[o(l,{isInvalid:!0,variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isInvalid:!0,variant:"solid",children:o(a,{children:"Drag file here or click to select file"})}),o(ir,{label:"Upload file",isInvalid:!0,errorMessage:"File is required.",children:o(l,{children:o(a,{children:"Drag file here or click to select file"})})})]}),Le=()=>m(E,{children:[o(l,{isLoading:!0,variant:"dashed",children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isLoading:!0,variant:"solid",children:o(a,{children:"Drag file here or click to select file"})})]}),Me=()=>m(E,{children:[o(l,{isLoading:!0,loadingProps:{variant:"grid"},children:o(a,{children:"Drag file here or click to select file"})}),o(l,{isLoading:!0,loadingProps:{color:"secondary"},children:o(a,{children:"Drag file here or click to select file"})})]}),Be=()=>{const e=p.useRef(null);return m(E,{children:[o(Xo,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.call(e)},children:"Select file"}),o(l,{openRef:e,children:o(a,{children:"Drag file here or click to select file"})})]})};var kr,br,vr;be.parameters={...be.parameters,docs:{...(kr=be.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
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
}`,...(Ur=(Nr=Se.parameters)==null?void 0:Nr.docs)==null?void 0:Ur.source}}};var Kr,Yr,Gr;Oe.parameters={...Oe.parameters,docs:{...(Kr=Oe.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
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
}`,...(Gr=(Yr=Oe.parameters)==null?void 0:Yr.docs)==null?void 0:Gr.source}}};var Wr,Xr,qr;Ce.parameters={...Ce.parameters,docs:{...(Wr=Ce.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
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
}`,...(qr=(Xr=Ce.parameters)==null?void 0:Xr.docs)==null?void 0:qr.source}}};var Jr,Zr,Qr;Pe.parameters={...Pe.parameters,docs:{...(Jr=Pe.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
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
}`,...(Qr=(Zr=Pe.parameters)==null?void 0:Zr.docs)==null?void 0:Qr.source}}};var eo,ro,oo;_e.parameters={..._e.parameters,docs:{...(eo=_e.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
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
}`,...(ko=(yo=Be.parameters)==null?void 0:yo.docs)==null?void 0:ko.source}}};const pt=["basic","withSize","withVariant","withMultiple","withAccept","withMaxSize","withMaxFiles","withStatus","useOnDrop","useOnDropAccepted","useOnDropRejected","withBorderColor","isDisabled","isReadonly","isInvalid","isLoading","customLoading","useOpen"];export{pt as __namedExportsOrder,be as basic,Me as customLoading,lt as default,Ie as isDisabled,Re as isInvalid,Le as isLoading,je as isReadonly,Oe as useOnDrop,Ce as useOnDropAccepted,Pe as useOnDropRejected,Be as useOpen,we as withAccept,_e as withBorderColor,Ee as withMaxFiles,Fe as withMaxSize,Ae as withMultiple,ve as withSize,Se as withStatus,Te as withVariant};
