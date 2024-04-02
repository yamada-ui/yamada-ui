import{j as r}from"./jsx-runtime-CKrituN3.js";import{g as A}from"./_commonjsHelpers-BosuxZz1.js";import{r as u}from"./index-CBqU2yxZ.js";import{ae as U,f as F}from"./factory-BVMa8fXZ.js";import{H as y}from"./stack-Y-4i-p3Z.js";import{I as h}from"./input-BUfxmGQi.js";import{B as b}from"./button-CwsZCG7O.js";import{E as T,a as B,b as P}from"./editable-D-RIojEs.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./forward-ref-DuAegr0M.js";import"./form-control-BYWtcG_D.js";import"./use-component-style-DFx-AFMQ.js";import"./theme-provider-BXaPRWNI.js";import"./use-ripple-qFQz7cO6.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CvgaHKJY.js";import"./loading-CvwcjMtk.js";import"./index-BtoBQEmV.js";import"./index-sakSwYJY.js";import"./index-CXM4NpVI.js";import"./icon-BlEaeaZb.js";import"./index-eENvL-zr.js";import"./index-BCwV-Nep.js";import"./index-DhdFwUso.js";var N=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,a=[],n=0;n<t.rangeCount;n++)a.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||a.forEach(function(s){t.addRange(s)}),e&&e.focus()}},M=N,x={"text/plain":"Text","text/html":"Url",default:"Text"},V="Copy to clipboard: #{key}, Enter";function _(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function z(t,e){var a,n,s,p,c,o,d=!1;e||(e={}),a=e.debug||!1;try{s=M(),p=document.createRange(),c=document.getSelection(),o=document.createElement("span"),o.textContent=t,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(i){if(i.stopPropagation(),e.format)if(i.preventDefault(),typeof i.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var g=x[e.format]||x.default;window.clipboardData.setData(g,t)}else i.clipboardData.clearData(),i.clipboardData.setData(e.format,t);e.onCopy&&(i.preventDefault(),e.onCopy(i.clipboardData))}),document.body.appendChild(o),p.selectNodeContents(o),c.addRange(p);var l=document.execCommand("copy");if(!l)throw new Error("copy command was unsuccessful");d=!0}catch(i){a&&console.error("unable to copy using execCommand: ",i),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(g){a&&console.error("unable to copy using clipboardData: ",g),a&&console.error("falling back to prompt"),n=_("message"in e?e.message:V),window.prompt(n,t)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(p):c.removeAllRanges()),o&&document.body.removeChild(o),s()}return d}var K=z;const L=A(K),v=(t="",e={})=>{const[a,n]=u.useState(!1),[s,p]=u.useState(t);u.useEffect(()=>p(t),[t]);const{timeout:c=1500,...o}=F(e)?{timeout:e}:e,d=u.useCallback(l=>{U(l)?p(l):l=s;const i=L(l,o);n(i)},[s,o]);return u.useEffect(()=>{let l=null;return a&&(l=window.setTimeout(()=>{n(!1)},c)),()=>{l&&window.clearTimeout(l)}},[c,a]),{value:s,setValue:p,onCopy:d,hasCopied:a}},fe={title:"Hooks / useClipboard"},m=()=>{const{onCopy:t,value:e,setValue:a,hasCopied:n}=v();return r.jsxs(r.Fragment,{children:[r.jsxs(y,{gap:"md",children:[r.jsx(h,{placeholder:"text to be copied...",value:e,onChange:s=>a(s.target.value)}),r.jsx(b,{onClick:t,children:n?"Copied!":"Copy"})]}),r.jsxs(T,{placeholder:"Paste here",children:[r.jsx(B,{width:"full"}),r.jsx(P,{})]})]})},C=()=>{const{onCopy:t,value:e,setValue:a,hasCopied:n}=v("",5e3);return r.jsxs(r.Fragment,{children:[r.jsxs(y,{gap:"md",children:[r.jsx(h,{placeholder:"text to be copied...",value:e,onChange:s=>a(s.target.value)}),r.jsx(b,{onClick:t,children:n?"Copied!":"Copy"})]}),r.jsxs(T,{placeholder:"Paste here",children:[r.jsx(B,{width:"full"}),r.jsx(P,{})]})]})},f=()=>{const{onCopy:t,hasCopied:e}=v(),a="孫悟空";return r.jsxs(y,{gap:"md",children:[r.jsx(h,{value:a,isReadOnly:!0}),r.jsx(b,{onClick:()=>t(a),children:e?"Copied!":"Copy"})]})};var w,E,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const {
    onCopy,
    value,
    setValue,
    hasCopied
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
}`,...(k=(E=m.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var S,j,D;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const {
    onCopy,
    value,
    setValue,
    hasCopied
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
}`,...(D=(j=C.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var I,R,H;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const {
    onCopy,
    hasCopied
  } = useClipboard();
  const value = "孫悟空";
  return <HStack gap="md">
      <Input value={value} isReadOnly />
      <Button onClick={() => onCopy(value)}>
        {hasCopied ? "Copied!" : "Copy"}
      </Button>
    </HStack>;
}`,...(H=(R=f.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const ge=["basic","withTimeout","directCopy"];export{ge as __namedExportsOrder,m as basic,fe as default,f as directCopy,C as withTimeout};
