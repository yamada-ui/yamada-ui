import{aP as A,r as d,J as U,l as F,j as r,Q as g}from"./iframe-D_HYglKf.js";import{H as b}from"./h-stack-DUGJfnik.js";import{I as v}from"./input-B2WkzUrt.js";import{E as T,a as H,b as B}from"./editable-CRiZfkos.js";import"./preload-helper-C1FmrZbK.js";import"./use-input-border-CNq4o9Wo.js";import"./use-field-props-DKtq6E-0.js";import"./index-DlPqCcPe.js";import"./index-P37BcwQw.js";import"./index-L8BvBXnT.js";var N=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,o=[],n=0;n<t.rangeCount;n++)o.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||o.forEach(function(s){t.addRange(s)}),e&&e.focus()}},M=N,x={"text/plain":"Text","text/html":"Url",default:"Text"},V="Copy to clipboard: #{key}, Enter";function _(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function z(t,e){var o,n,s,u,i,a,p=!1;e||(e={}),o=e.debug||!1;try{s=M(),u=document.createRange(),i=document.getSelection(),a=document.createElement("span"),a.textContent=t,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(c){if(c.stopPropagation(),e.format)if(c.preventDefault(),typeof c.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=x[e.format]||x.default;window.clipboardData.setData(y,t)}else c.clipboardData.clearData(),c.clipboardData.setData(e.format,t);e.onCopy&&(c.preventDefault(),e.onCopy(c.clipboardData))}),document.body.appendChild(a),u.selectNodeContents(a),i.addRange(u);var l=document.execCommand("copy");if(!l)throw new Error("copy command was unsuccessful");p=!0}catch(c){o&&console.error("unable to copy using execCommand: ",c),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),p=!0}catch(y){o&&console.error("unable to copy using clipboardData: ",y),o&&console.error("falling back to prompt"),n=_("message"in e?e.message:V),window.prompt(n,t)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(u):i.removeAllRanges()),a&&document.body.removeChild(a),s()}return p}var J=z;const K=A(J),h=(t="",e={})=>{const[o,n]=d.useState(!1),[s,u]=d.useState(t);d.useEffect(()=>u(t),[t]);const{timeout:i=1500,...a}=U(e)?{timeout:e}:e,p=d.useCallback(l=>{F(l)?u(l):l=s;const c=K(l,a);n(c)},[s,a]);return d.useEffect(()=>{let l=null;return o&&(l=setTimeout(()=>{n(!1)},i)),()=>{l&&clearTimeout(l)}},[i,o]),{copied:o,setValue:u,value:s,onCopy:p}},ee={title:"Hooks / useClipboard"},m=()=>{const{copied:t,setValue:e,value:o,onCopy:n}=h();return r.jsxs(r.Fragment,{children:[r.jsxs(b,{children:[r.jsx(v,{placeholder:"text to be copied...",value:o,onChange:s=>e(s.target.value)}),r.jsx(g,{onClick:n,children:t?"Copied!":"Copy"})]}),r.jsxs(T,{placeholder:"Paste here",children:[r.jsx(H,{width:"full"}),r.jsx(B,{})]})]})},f=()=>{const{copied:t,setValue:e,value:o,onCopy:n}=h("",5e3);return r.jsxs(r.Fragment,{children:[r.jsxs(b,{children:[r.jsx(v,{placeholder:"text to be copied...",value:o,onChange:s=>e(s.target.value)}),r.jsx(g,{onClick:n,children:t?"Copied!":"Copy"})]}),r.jsxs(T,{placeholder:"Paste here",children:[r.jsx(H,{width:"full"}),r.jsx(B,{})]})]})},C=()=>{const{copied:t,onCopy:e}=h(),o="孫悟空";return r.jsxs(b,{children:[r.jsx(v,{readOnly:!0,value:o}),r.jsx(g,{onClick:()=>e(o),children:t?"Copied!":"Copy"})]})};var E,w,k;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const {
    copied,
    setValue,
    value,
    onCopy
  } = useClipboard();
  return <>
      <HStack>
        <Input placeholder="text to be copied..." value={value} onChange={e => setValue(e.target.value)} />
        <Button onClick={onCopy}>{copied ? "Copied!" : "Copy"}</Button>
      </HStack>

      <Editable.Root placeholder="Paste here">
        <Editable.Preview width="full" />
        <Editable.Input />
      </Editable.Root>
    </>;
}`,...(k=(w=m.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,j,D;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const {
    copied,
    setValue,
    value,
    onCopy
  } = useClipboard("", 5000);
  return <>
      <HStack>
        <Input placeholder="text to be copied..." value={value} onChange={e => setValue(e.target.value)} />
        <Button onClick={onCopy}>{copied ? "Copied!" : "Copy"}</Button>
      </HStack>

      <Editable.Root placeholder="Paste here">
        <Editable.Preview width="full" />
        <Editable.Input />
      </Editable.Root>
    </>;
}`,...(D=(j=f.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var R,I,P;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const {
    copied,
    onCopy
  } = useClipboard();
  const value = "孫悟空";
  return <HStack>
      <Input readOnly value={value} />
      <Button onClick={() => onCopy(value)}>
        {copied ? "Copied!" : "Copy"}
      </Button>
    </HStack>;
}`,...(P=(I=C.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const te=["Basic","Timeout","DirectCopy"];export{m as Basic,C as DirectCopy,f as Timeout,te as __namedExportsOrder,ee as default};
