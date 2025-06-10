import{j as t}from"./jsx-runtime-DztICxWZ.js";import{g as z}from"./_commonjsHelpers-Cpj98o6Y.js";import{r as C}from"./index-Bv9Y92EF.js";import{p as K,a1 as L}from"./factory-7Z88KRtK.js";import{H as w}from"./stack-DL8tKm2J.js";import{I as S}from"./input-BdtNRY2X.js";import{B as k}from"./button-nZ2ZqBRb.js";import{E as N,a as M,b as V}from"./editable-23snPF-e.js";import"./forward-ref-DH6f5tnY.js";import"./form-control-C8eO6U25.js";import"./use-component-style-DHLtMqa5.js";import"./theme-provider-DsbwOWxu.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./loading-DVofVDF_.js";import"./icon-DKuqv-9Z.js";import"./use-var-Bz9rJ8_M.js";import"./index-D3uVnNfI.js";import"./index-BimsXrcc.js";import"./index-BhIdR6KT.js";var x,D;function X(){return D||(D=1,x=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var o=document.activeElement,n=[],s=0;s<e.rangeCount;s++)n.push(e.getRangeAt(s));switch(o.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":o.blur();break;default:o=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(i){e.addRange(i)}),o&&o.focus()}}),x}var E,T;function G(){if(T)return E;T=1;var e=X(),o={"text/plain":"Text","text/html":"Url",default:"Text"},n="Copy to clipboard: #{key}, Enter";function s(l){var a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return l.replace(/#{\s*key\s*}/g,a)}function i(l,a){var p,f,c,u,m,r,b=!1;a||(a={}),p=a.debug||!1;try{c=e(),u=document.createRange(),m=document.getSelection(),r=document.createElement("span"),r.textContent=l,r.ariaHidden="true",r.style.all="unset",r.style.position="fixed",r.style.top=0,r.style.clip="rect(0, 0, 0, 0)",r.style.whiteSpace="pre",r.style.webkitUserSelect="text",r.style.MozUserSelect="text",r.style.msUserSelect="text",r.style.userSelect="text",r.addEventListener("copy",function(d){if(d.stopPropagation(),a.format)if(d.preventDefault(),typeof d.clipboardData>"u"){p&&console.warn("unable to use e.clipboardData"),p&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var v=o[a.format]||o.default;window.clipboardData.setData(v,l)}else d.clipboardData.clearData(),d.clipboardData.setData(a.format,l);a.onCopy&&(d.preventDefault(),a.onCopy(d.clipboardData))}),document.body.appendChild(r),u.selectNodeContents(r),m.addRange(u);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");b=!0}catch(d){p&&console.error("unable to copy using execCommand: ",d),p&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(a.format||"text",l),a.onCopy&&a.onCopy(window.clipboardData),b=!0}catch(v){p&&console.error("unable to copy using clipboardData: ",v),p&&console.error("falling back to prompt"),f=s("message"in a?a.message:n),window.prompt(f,l)}}finally{m&&(typeof m.removeRange=="function"?m.removeRange(u):m.removeAllRanges()),r&&document.body.removeChild(r),c()}return b}return E=i,E}var J=G();const O=z(J),j=(e="",o={})=>{const[n,s]=C.useState(!1),[i,l]=C.useState(e);C.useEffect(()=>l(e),[e]);const{timeout:a=1500,...p}=K(o)?{timeout:o}:o,f=C.useCallback(c=>{L(c)?l(c):c=i;const u=O(c,p);s(u)},[i,p]);return C.useEffect(()=>{let c=null;return n&&(c=window.setTimeout(()=>{s(!1)},a)),()=>{c&&window.clearTimeout(c)}},[a,n]),{hasCopied:n,setValue:l,value:i,onCopy:f}},ye={title:"Hooks / useClipboard"},g=()=>{const{hasCopied:e,setValue:o,value:n,onCopy:s}=j();return t.jsxs(t.Fragment,{children:[t.jsxs(w,{gap:"md",children:[t.jsx(S,{placeholder:"text to be copied...",value:n,onChange:i=>o(i.target.value)}),t.jsx(k,{onClick:s,children:e?"Copied!":"Copy"})]}),t.jsxs(N,{placeholder:"Paste here",children:[t.jsx(M,{width:"full"}),t.jsx(V,{})]})]})},y=()=>{const{hasCopied:e,setValue:o,value:n,onCopy:s}=j("",5e3);return t.jsxs(t.Fragment,{children:[t.jsxs(w,{gap:"md",children:[t.jsx(S,{placeholder:"text to be copied...",value:n,onChange:i=>o(i.target.value)}),t.jsx(k,{onClick:s,children:e?"Copied!":"Copy"})]}),t.jsxs(N,{placeholder:"Paste here",children:[t.jsx(M,{width:"full"}),t.jsx(V,{})]})]})},h=()=>{const{hasCopied:e,onCopy:o}=j(),n="孫悟空";return t.jsxs(w,{gap:"md",children:[t.jsx(S,{readOnly:!0,value:n}),t.jsx(k,{onClick:()=>o(n),children:e?"Copied!":"Copy"})]})};var I,R,H;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const {
    hasCopied,
    setValue,
    value,
    onCopy
  } = useClipboard();
  return <>
      <HStack gap="md">
        <Input placeholder="text to be copied..." value={value} onChange={e => setValue(e.target.value)} />
        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
      </HStack>

      <Editable placeholder="Paste here">
        <EditablePreview width="full" />
        <EditableInput />
      </Editable>
    </>;
}`,...(H=(R=g.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var P,B,A;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const {
    hasCopied,
    setValue,
    value,
    onCopy
  } = useClipboard("", 5000);
  return <>
      <HStack gap="md">
        <Input placeholder="text to be copied..." value={value} onChange={e => setValue(e.target.value)} />
        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
      </HStack>

      <Editable placeholder="Paste here">
        <EditablePreview width="full" />
        <EditableInput />
      </Editable>
    </>;
}`,...(A=(B=y.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var U,q,F;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const {
    hasCopied,
    onCopy
  } = useClipboard();
  const value = "孫悟空";
  return <HStack gap="md">
      <Input readOnly value={value} />
      <Button onClick={() => onCopy(value)}>
        {hasCopied ? "Copied!" : "Copy"}
      </Button>
    </HStack>;
}`,...(F=(q=h.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const he=["basic","withTimeout","directCopy"];export{he as __namedExportsOrder,g as basic,ye as default,h as directCopy,y as withTimeout};
