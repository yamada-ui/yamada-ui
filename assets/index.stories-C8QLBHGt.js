import{a8 as A,r as d,J as U,k as F,j as r,Q as b}from"./iframe-C54neHeK.js";import{H as g}from"./h-stack-DfZ5N1Vx.js";import{b as v}from"./input-C6vVtwpv.js";import{E as H,a as P,b as B}from"./editable-7j1IryAt.js";import"./preload-helper-C1FmrZbK.js";import"./use-input-border-DSVAl3DC.js";import"./use-field-props-C26AgG-j.js";import"./index-K0OKMDPm.js";import"./index-DKsgpJN2.js";import"./index-D2sfbcuV.js";var N=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,o=[],n=0;n<t.rangeCount;n++)o.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||o.forEach(function(c){t.addRange(c)}),e&&e.focus()}},M=N,x={"text/plain":"Text","text/html":"Url",default:"Text"},V="Copy to clipboard: #{key}, Enter";function _(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function z(t,e){var o,n,c,p,i,a,u=!1;e||(e={}),o=e.debug||!1;try{c=M(),p=document.createRange(),i=document.getSelection(),a=document.createElement("span"),a.textContent=t,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(s){if(s.stopPropagation(),e.format)if(s.preventDefault(),typeof s.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=x[e.format]||x.default;window.clipboardData.setData(y,t)}else s.clipboardData.clearData(),s.clipboardData.setData(e.format,t);e.onCopy&&(s.preventDefault(),e.onCopy(s.clipboardData))}),document.body.appendChild(a),p.selectNodeContents(a),i.addRange(p);var l=document.execCommand("copy");if(!l)throw new Error("copy command was unsuccessful");u=!0}catch(s){o&&console.error("unable to copy using execCommand: ",s),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(y){o&&console.error("unable to copy using clipboardData: ",y),o&&console.error("falling back to prompt"),n=_("message"in e?e.message:V),window.prompt(n,t)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(p):i.removeAllRanges()),a&&document.body.removeChild(a),c()}return u}var J=z;const K=A(J),h=(t="",e={})=>{const[o,n]=d.useState(!1),[c,p]=d.useState(t);d.useEffect(()=>p(t),[t]);const{timeout:i=1500,...a}=U(e)?{timeout:e}:e,u=d.useCallback(l=>{F(l)?p(l):l=c;const s=K(l,a);n(s)},[c,a]);return d.useEffect(()=>{let l=null;return o&&(l=setTimeout(()=>{n(!1)},i)),()=>{l&&clearTimeout(l)}},[i,o]),{copied:o,setValue:p,value:c,onCopy:u}},ee={title:"Hooks / useClipboard"},m=()=>{const{copied:t,setValue:e,value:o,onCopy:n}=h();return r.jsxs(r.Fragment,{children:[r.jsxs(g,{children:[r.jsx(v,{placeholder:"text to be copied...",value:o,onChange:c=>e(c.target.value)}),r.jsx(b,{onClick:n,children:t?"Copied!":"Copy"})]}),r.jsxs(H,{placeholder:"Paste here",children:[r.jsx(P,{width:"full"}),r.jsx(B,{})]})]})},f=()=>{const{copied:t,setValue:e,value:o,onCopy:n}=h("",5e3);return r.jsxs(r.Fragment,{children:[r.jsxs(g,{children:[r.jsx(v,{placeholder:"text to be copied...",value:o,onChange:c=>e(c.target.value)}),r.jsx(b,{onClick:n,children:t?"Copied!":"Copy"})]}),r.jsxs(H,{placeholder:"Paste here",children:[r.jsx(P,{width:"full"}),r.jsx(B,{})]})]})},C=()=>{const{copied:t,onCopy:e}=h(),o="孫悟空";return r.jsxs(g,{children:[r.jsx(v,{"aria-label":"Copy content",readOnly:!0,value:o}),r.jsx(b,{onClick:()=>e(o),children:t?"Copied!":"Copy"})]})};var E,k,w;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var S,j,D;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(D=(j=f.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var R,I,T;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const {
    copied,
    onCopy
  } = useClipboard();
  const value = "孫悟空";
  return <HStack>
      <Input aria-label="Copy content" readOnly value={value} />
      <Button onClick={() => onCopy(value)}>
        {copied ? "Copied!" : "Copy"}
      </Button>
    </HStack>;
}`,...(T=(I=C.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const te=["Basic","Timeout","DirectCopy"];export{m as Basic,C as DirectCopy,f as Timeout,te as __namedExportsOrder,ee as default};
