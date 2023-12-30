import{a as d,F as P,j as l}from"./jsx-runtime-5BUNAZ9W.js";import{g as j}from"./_commonjsHelpers-4gQjN7DL.js";import{r as m}from"./index-4g5l5LRQ.js";import{a5 as N,i as M}from"./factory-d-SMqVb2.js";import{H as h}from"./stack-LEtCveQr.js";import{I as b}from"./input-dSR365qk.js";import{B as v}from"./button-EhfgdiYF.js";import{E as A,a as U,b as F}from"./editable-hKUtQ-Xn.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./forward-ref-A-8Arhkk.js";import"./form-control-8aS5KveV.js";import"./use-component-style-PZEwb5ud.js";import"./theme-provider-ra3mBbD9.js";import"./use-ripple-Z-W-SYoZ.js";import"./index-EargzzxG.js";import"./motion-ukEXpwwk.js";import"./motion-8v_Pxw1E.js";import"./loading-PFbLA4vV.js";import"./index-as8PIm5E.js";import"./index-JersHic9.js";import"./index-JczG5yj_.js";import"./icon-tPRIl-kA.js";import"./index--H2JViwD.js";import"./index-LYdImxTq.js";import"./index-tSscwESH.js";var V=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,a=[],r=0;r<t.rangeCount;r++)a.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||a.forEach(function(n){t.addRange(n)}),e&&e.focus()}},_=V,E={"text/plain":"Text","text/html":"Url",default:"Text"},z="Copy to clipboard: #{key}, Enter";function K(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function L(t,e){var a,r,n,p,c,o,u=!1;e||(e={}),a=e.debug||!1;try{n=_(),p=document.createRange(),c=document.getSelection(),o=document.createElement("span"),o.textContent=t,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(s){if(s.stopPropagation(),e.format)if(s.preventDefault(),typeof s.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=E[e.format]||E.default;window.clipboardData.setData(y,t)}else s.clipboardData.clearData(),s.clipboardData.setData(e.format,t);e.onCopy&&(s.preventDefault(),e.onCopy(s.clipboardData))}),document.body.appendChild(o),p.selectNodeContents(o),c.addRange(p);var i=document.execCommand("copy");if(!i)throw new Error("copy command was unsuccessful");u=!0}catch(s){a&&console.error("unable to copy using execCommand: ",s),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(y){a&&console.error("unable to copy using clipboardData: ",y),a&&console.error("falling back to prompt"),r=K("message"in e?e.message:z),window.prompt(r,t)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(p):c.removeAllRanges()),o&&document.body.removeChild(o),n()}return u}var X=L;const $=j(X),w=(t="",e={})=>{const[a,r]=m.useState(!1),[n,p]=m.useState(t);m.useEffect(()=>p(t),[t]);const{timeout:c=1500,...o}=M(e)?{timeout:e}:e,u=m.useCallback(i=>{N(i)?p(i):i=n;const s=$(i,o);r(s)},[n,o]);return m.useEffect(()=>{let i=null;return a&&(i=window.setTimeout(()=>{r(!1)},c)),()=>{i&&window.clearTimeout(i)}},[c,a]),{value:n,setValue:p,onCopy:u,hasCopied:a}},ye={title:"Hooks / useClipboard"},C=()=>{const{onCopy:t,value:e,setValue:a,hasCopied:r}=w();return d(P,{children:[d(h,{gap:"md",children:[l(b,{placeholder:"text to be copied...",value:e,onChange:n=>a(n.target.value)}),l(v,{onClick:t,children:r?"Copied!":"Copy"})]}),d(A,{placeholder:"Paste here",children:[l(U,{width:"full"}),l(F,{})]})]})},f=()=>{const{onCopy:t,value:e,setValue:a,hasCopied:r}=w("",5e3);return d(P,{children:[d(h,{gap:"md",children:[l(b,{placeholder:"text to be copied...",value:e,onChange:n=>a(n.target.value)}),l(v,{onClick:t,children:r?"Copied!":"Copy"})]}),d(A,{placeholder:"Paste here",children:[l(U,{width:"full"}),l(F,{})]})]})},g=()=>{const{onCopy:t,hasCopied:e}=w(),a="孫悟空";return d(h,{gap:"md",children:[l(b,{value:a,isReadOnly:!0}),l(v,{onClick:()=>t(a),children:e?"Copied!":"Copy"})]})};var k,S,x;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(x=(S=C.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var D,I,R;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(R=(I=f.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var H,T,B;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(B=(T=g.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const he=["basic","withTimeout","directCopy"];export{he as __namedExportsOrder,C as basic,ye as default,g as directCopy,f as withTimeout};
