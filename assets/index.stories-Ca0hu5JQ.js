import{ai as B,r as f,L as A,l as U,j as t,S}from"./iframe-B0P9Y6nu.js";import{H as w}from"./h-stack-CdiUxd5d.js";import{b as k}from"./input-BqUpQ0eP.js";import{E as T,a as I,b as H}from"./editable-C__Yxx-x.js";import"./preload-helper-PPVm8Dsz.js";import"./use-input-border-BNPs4Mo9.js";import"./use-field-props-DDmJ1gDh.js";import"./index-ISt4vA3k.js";import"./index-ez1geDzy.js";import"./index-Dto3Pijj.js";var x,D;function q(){return D||(D=1,x=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var o=document.activeElement,n=[],c=0;c<e.rangeCount;c++)n.push(e.getRangeAt(c));switch(o.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":o.blur();break;default:o=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(s){e.addRange(s)}),o&&o.focus()}}),x}var E,R;function F(){if(R)return E;R=1;var e=q(),o={"text/plain":"Text","text/html":"Url",default:"Text"},n="Copy to clipboard: #{key}, Enter";function c(l){var a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return l.replace(/#{\s*key\s*}/g,a)}function s(l,a){var u,C,i,d,m,r,v=!1;a||(a={}),u=a.debug||!1;try{i=e(),d=document.createRange(),m=document.getSelection(),r=document.createElement("span"),r.textContent=l,r.ariaHidden="true",r.style.all="unset",r.style.position="fixed",r.style.top=0,r.style.clip="rect(0, 0, 0, 0)",r.style.whiteSpace="pre",r.style.webkitUserSelect="text",r.style.MozUserSelect="text",r.style.msUserSelect="text",r.style.userSelect="text",r.addEventListener("copy",function(p){if(p.stopPropagation(),a.format)if(p.preventDefault(),typeof p.clipboardData>"u"){u&&console.warn("unable to use e.clipboardData"),u&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var h=o[a.format]||o.default;window.clipboardData.setData(h,l)}else p.clipboardData.clearData(),p.clipboardData.setData(a.format,l);a.onCopy&&(p.preventDefault(),a.onCopy(p.clipboardData))}),document.body.appendChild(r),d.selectNodeContents(r),m.addRange(d);var P=document.execCommand("copy");if(!P)throw new Error("copy command was unsuccessful");v=!0}catch(p){u&&console.error("unable to copy using execCommand: ",p),u&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(a.format||"text",l),a.onCopy&&a.onCopy(window.clipboardData),v=!0}catch(h){u&&console.error("unable to copy using clipboardData: ",h),u&&console.error("falling back to prompt"),C=c("message"in a?a.message:n),window.prompt(C,l)}}finally{m&&(typeof m.removeRange=="function"?m.removeRange(d):m.removeAllRanges()),r&&document.body.removeChild(r),i()}return v}return E=s,E}var N=F();const L=B(N),j=(e="",o={})=>{const[n,c]=f.useState(!1),[s,l]=f.useState(e);f.useEffect(()=>l(e),[e]);const{timeout:a=1500,...u}=A(o)?{timeout:o}:o,C=f.useCallback(i=>{U(i)?l(i):i=s;const d=L(i,u);c(d)},[s,u]);return f.useEffect(()=>{let i=null;return n&&(i=setTimeout(()=>{c(!1)},a)),()=>{i&&clearTimeout(i)}},[a,n]),{copied:n,setValue:l,value:s,onCopy:C}},W={title:"Hooks / useClipboard"},y=()=>{const{copied:e,setValue:o,value:n,onCopy:c}=j();return t.jsxs(t.Fragment,{children:[t.jsxs(w,{children:[t.jsx(k,{placeholder:"text to be copied...",value:n,onChange:s=>o(s.target.value)}),t.jsx(S,{onClick:c,children:e?"Copied!":"Copy"})]}),t.jsxs(T,{placeholder:"Paste here",children:[t.jsx(I,{width:"full"}),t.jsx(H,{})]})]})},g=()=>{const{copied:e,setValue:o,value:n,onCopy:c}=j("",5e3);return t.jsxs(t.Fragment,{children:[t.jsxs(w,{children:[t.jsx(k,{placeholder:"text to be copied...",value:n,onChange:s=>o(s.target.value)}),t.jsx(S,{onClick:c,children:e?"Copied!":"Copy"})]}),t.jsxs(T,{placeholder:"Paste here",children:[t.jsx(I,{width:"full"}),t.jsx(H,{})]})]})},b=()=>{const{copied:e,onCopy:o}=j(),n="孫悟空";return t.jsxs(w,{children:[t.jsx(k,{readOnly:!0,value:n}),t.jsx(S,{onClick:()=>o(n),children:e?"Copied!":"Copy"})]})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};const Y=["Basic","Timeout","DirectCopy"];export{y as Basic,b as DirectCopy,g as Timeout,Y as __namedExportsOrder,W as default};
