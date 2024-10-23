import{j as r}from"./extends-CwFRzn3r.js";import{g as A}from"./_commonjsHelpers-BosuxZz1.js";import{r as u}from"./index-BwDkhjyp.js";import{a1 as U,g as F}from"./factory-zMrA9M4D.js";import{H as y}from"./stack-DMEesNao.js";import{I as h}from"./input-KFaQrPg-.js";import{B as b}from"./button-D-OQqBLL.js";import{E as T,a as P,b as B}from"./editable-CipvgFML.js";import"./forward-ref-BWI-Phbn.js";import"./form-control-GogIMfYi.js";import"./use-component-style-BfdzvKeB.js";import"./theme-provider-D6YJ9wXo.js";import"./use-ripple-C38FK3R5.js";import"./factory-ps7NpXEL.js";import"./motion-I-9Hg3gW.js";import"./loading-BAxQru_S.js";import"./icon-CZT7FJOE.js";import"./use-var-De9F6Sch.js";import"./index-nT_1Y3_X.js";import"./index-CsI5Apoe.js";import"./index-B_BUNkbK.js";var N=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,a=[],n=0;n<t.rangeCount;n++)a.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||a.forEach(function(s){t.addRange(s)}),e&&e.focus()}},M=N,x={"text/plain":"Text","text/html":"Url",default:"Text"},V="Copy to clipboard: #{key}, Enter";function _(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function z(t,e){var a,n,s,p,i,o,d=!1;e||(e={}),a=e.debug||!1;try{s=M(),p=document.createRange(),i=document.getSelection(),o=document.createElement("span"),o.textContent=t,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(l){if(l.stopPropagation(),e.format)if(l.preventDefault(),typeof l.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var g=x[e.format]||x.default;window.clipboardData.setData(g,t)}else l.clipboardData.clearData(),l.clipboardData.setData(e.format,t);e.onCopy&&(l.preventDefault(),e.onCopy(l.clipboardData))}),document.body.appendChild(o),p.selectNodeContents(o),i.addRange(p);var c=document.execCommand("copy");if(!c)throw new Error("copy command was unsuccessful");d=!0}catch(l){a&&console.error("unable to copy using execCommand: ",l),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(g){a&&console.error("unable to copy using clipboardData: ",g),a&&console.error("falling back to prompt"),n=_("message"in e?e.message:V),window.prompt(n,t)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(p):i.removeAllRanges()),o&&document.body.removeChild(o),s()}return d}var K=z;const L=A(K),v=(t="",e={})=>{const[a,n]=u.useState(!1),[s,p]=u.useState(t);u.useEffect(()=>p(t),[t]);const{timeout:i=1500,...o}=F(e)?{timeout:e}:e,d=u.useCallback(c=>{U(c)?p(c):c=s;const l=L(c,o);n(l)},[s,o]);return u.useEffect(()=>{let c=null;return a&&(c=window.setTimeout(()=>{n(!1)},i)),()=>{c&&window.clearTimeout(c)}},[i,a]),{hasCopied:a,setValue:p,value:s,onCopy:d}},de={title:"Hooks / useClipboard"},m=()=>{const{hasCopied:t,setValue:e,value:a,onCopy:n}=v();return r.jsxs(r.Fragment,{children:[r.jsxs(y,{gap:"md",children:[r.jsx(h,{placeholder:"text to be copied...",value:a,onChange:s=>e(s.target.value)}),r.jsx(b,{onClick:n,children:t?"Copied!":"Copy"})]}),r.jsxs(T,{placeholder:"Paste here",children:[r.jsx(P,{width:"full"}),r.jsx(B,{})]})]})},C=()=>{const{hasCopied:t,setValue:e,value:a,onCopy:n}=v("",5e3);return r.jsxs(r.Fragment,{children:[r.jsxs(y,{gap:"md",children:[r.jsx(h,{placeholder:"text to be copied...",value:a,onChange:s=>e(s.target.value)}),r.jsx(b,{onClick:n,children:t?"Copied!":"Copy"})]}),r.jsxs(T,{placeholder:"Paste here",children:[r.jsx(P,{width:"full"}),r.jsx(B,{})]})]})},f=()=>{const{hasCopied:t,onCopy:e}=v(),a="孫悟空";return r.jsxs(y,{gap:"md",children:[r.jsx(h,{isReadOnly:!0,value:a}),r.jsx(b,{onClick:()=>e(a),children:t?"Copied!":"Copy"})]})};var w,E,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(H=(R=f.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const ue=["basic","withTimeout","directCopy"];export{ue as __namedExportsOrder,m as basic,de as default,f as directCopy,C as withTimeout};
