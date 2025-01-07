import{j as r}from"./jsx-runtime-CfatFE5O.js";import{g as A}from"./_commonjsHelpers-Cpj98o6Y.js";import{r as u}from"./index-ClcD9ViR.js";import{a1 as U,p as F}from"./factory-D0ba2aB7.js";import{H as y}from"./stack-CcCHu966.js";import{I as h}from"./input-Bk4SJExX.js";import{B as b}from"./button-CtWzhuL8.js";import{E as T,a as P,b as B}from"./editable-D9rcyRu-.js";import"./forward-ref-D13m8o2p.js";import"./form-control-BjOXh3qv.js";import"./use-component-style-B--WxH8d.js";import"./theme-provider-r-UN7Xzc.js";import"./use-ripple-DRMVQrUo.js";import"./index-YDlv44yi.js";import"./proxy-DYgA1A03.js";import"./factory-COvmBIaQ.js";import"./loading-1q-H-TJ4.js";import"./icon-47ftZrjE.js";import"./use-var-CTLjK8Sl.js";import"./index-CUCM51Cx.js";import"./index-DQZtUkQ0.js";import"./index-I8sPqzTA.js";var N=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,a=[],n=0;n<t.rangeCount;n++)a.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||a.forEach(function(s){t.addRange(s)}),e&&e.focus()}},M=N,x={"text/plain":"Text","text/html":"Url",default:"Text"},V="Copy to clipboard: #{key}, Enter";function _(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function z(t,e){var a,n,s,p,i,o,d=!1;e||(e={}),a=e.debug||!1;try{s=M(),p=document.createRange(),i=document.getSelection(),o=document.createElement("span"),o.textContent=t,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(l){if(l.stopPropagation(),e.format)if(l.preventDefault(),typeof l.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var g=x[e.format]||x.default;window.clipboardData.setData(g,t)}else l.clipboardData.clearData(),l.clipboardData.setData(e.format,t);e.onCopy&&(l.preventDefault(),e.onCopy(l.clipboardData))}),document.body.appendChild(o),p.selectNodeContents(o),i.addRange(p);var c=document.execCommand("copy");if(!c)throw new Error("copy command was unsuccessful");d=!0}catch(l){a&&console.error("unable to copy using execCommand: ",l),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(g){a&&console.error("unable to copy using clipboardData: ",g),a&&console.error("falling back to prompt"),n=_("message"in e?e.message:V),window.prompt(n,t)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(p):i.removeAllRanges()),o&&document.body.removeChild(o),s()}return d}var K=z;const L=A(K),v=(t="",e={})=>{const[a,n]=u.useState(!1),[s,p]=u.useState(t);u.useEffect(()=>p(t),[t]);const{timeout:i=1500,...o}=F(e)?{timeout:e}:e,d=u.useCallback(c=>{U(c)?p(c):c=s;const l=L(c,o);n(l)},[s,o]);return u.useEffect(()=>{let c=null;return a&&(c=window.setTimeout(()=>{n(!1)},i)),()=>{c&&window.clearTimeout(c)}},[i,a]),{hasCopied:a,setValue:p,value:s,onCopy:d}},ue={title:"Hooks / useClipboard"},m=()=>{const{hasCopied:t,setValue:e,value:a,onCopy:n}=v();return r.jsxs(r.Fragment,{children:[r.jsxs(y,{gap:"md",children:[r.jsx(h,{placeholder:"text to be copied...",value:a,onChange:s=>e(s.target.value)}),r.jsx(b,{onClick:n,children:t?"Copied!":"Copy"})]}),r.jsxs(T,{placeholder:"Paste here",children:[r.jsx(P,{width:"full"}),r.jsx(B,{})]})]})},C=()=>{const{hasCopied:t,setValue:e,value:a,onCopy:n}=v("",5e3);return r.jsxs(r.Fragment,{children:[r.jsxs(y,{gap:"md",children:[r.jsx(h,{placeholder:"text to be copied...",value:a,onChange:s=>e(s.target.value)}),r.jsx(b,{onClick:n,children:t?"Copied!":"Copy"})]}),r.jsxs(T,{placeholder:"Paste here",children:[r.jsx(P,{width:"full"}),r.jsx(B,{})]})]})},f=()=>{const{hasCopied:t,onCopy:e}=v(),a="孫悟空";return r.jsxs(y,{gap:"md",children:[r.jsx(h,{isReadOnly:!0,value:a}),r.jsx(b,{onClick:()=>e(a),children:t?"Copied!":"Copy"})]})};var w,E,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(k=(E=m.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var S,j,D;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(D=(j=C.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var I,R,H;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const {
    hasCopied,
    onCopy
  } = useClipboard();
  const value = "孫悟空";
  return <HStack gap="md">
      <Input isReadOnly value={value} />
      <Button onClick={() => onCopy(value)}>
        {hasCopied ? "Copied!" : "Copy"}
      </Button>
    </HStack>;
}`,...(H=(R=f.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const me=["basic","withTimeout","directCopy"];export{me as __namedExportsOrder,m as basic,ue as default,f as directCopy,C as withTimeout};
