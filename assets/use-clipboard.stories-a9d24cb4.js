import{a as d,F as B,j as c}from"./jsx-runtime-276775ef.js";import{g as F,r as m}from"./index-1cdf6ce0.js";import{Q as N,i as M}from"./factory-54465b8b.js";import{H as h}from"./stack-952495ca.js";import{E as A,a as U,b as j}from"./editable-280b7b0e.js";import{I as b}from"./input-d1c50c59.js";import{B as v}from"./button-ffa0d6e0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./forward-ref-86842115.js";import"./index-c0c82167.js";import"./index-afc7c4b2.js";import"./index-9326d079.js";import"./theme-ead977c1.js";import"./form-control-2b7a4da4.js";import"./use-component-style-645da9e2.js";import"./loading-8f06ecf4.js";import"./index-553b807d.js";import"./index-e7dbc2a5.js";import"./index-4cdec95f.js";import"./icon-a990f23f.js";var V=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,a=[],r=0;r<t.rangeCount;r++)a.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||a.forEach(function(n){t.addRange(n)}),e&&e.focus()}},_=V,E={"text/plain":"Text","text/html":"Url",default:"Text"},z="Copy to clipboard: #{key}, Enter";function K(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function L(t,e){var a,r,n,p,i,o,u=!1;e||(e={}),a=e.debug||!1;try{n=_(),p=document.createRange(),i=document.getSelection(),o=document.createElement("span"),o.textContent=t,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(s){if(s.stopPropagation(),e.format)if(s.preventDefault(),typeof s.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=E[e.format]||E.default;window.clipboardData.setData(y,t)}else s.clipboardData.clearData(),s.clipboardData.setData(e.format,t);e.onCopy&&(s.preventDefault(),e.onCopy(s.clipboardData))}),document.body.appendChild(o),p.selectNodeContents(o),i.addRange(p);var l=document.execCommand("copy");if(!l)throw new Error("copy command was unsuccessful");u=!0}catch(s){a&&console.error("unable to copy using execCommand: ",s),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(y){a&&console.error("unable to copy using clipboardData: ",y),a&&console.error("falling back to prompt"),r=K("message"in e?e.message:z),window.prompt(r,t)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(p):i.removeAllRanges()),o&&document.body.removeChild(o),n()}return u}var Q=L;const X=F(Q),w=(t="",e={})=>{const[a,r]=m.useState(!1),[n,p]=m.useState(t);m.useEffect(()=>p(t),[t]);const{timeout:i=1500,...o}=M(e)?{timeout:e}:e,u=m.useCallback(l=>{N(l)?p(l):l=n;const s=X(l,o);r(s)},[n,o]);return m.useEffect(()=>{let l=null;return a&&(l=window.setTimeout(()=>{r(!1)},i)),()=>{l&&window.clearTimeout(l)}},[i,a]),{value:n,setValue:p,onCopy:u,hasCopied:a}},ue={title:"Hooks / useClipboard"},C=()=>{const{onCopy:t,value:e,setValue:a,hasCopied:r}=w();return d(B,{children:[d(h,{gap:"md",children:[c(b,{placeholder:"text to be copied...",value:e,onChange:n=>a(n.target.value)}),c(v,{onClick:t,children:r?"Copied!":"Copy"})]}),d(A,{placeholder:"Paste here",children:[c(U,{width:"full"}),c(j,{})]})]})},f=()=>{const{onCopy:t,value:e,setValue:a,hasCopied:r}=w("",5e3);return d(B,{children:[d(h,{gap:"md",children:[c(b,{placeholder:"text to be copied...",value:e,onChange:n=>a(n.target.value)}),c(v,{onClick:t,children:r?"Copied!":"Copy"})]}),d(A,{placeholder:"Paste here",children:[c(U,{width:"full"}),c(j,{})]})]})},g=()=>{const{onCopy:t,hasCopied:e}=w(),a="孫悟空";return d(h,{gap:"md",children:[c(b,{value:a,isReadOnly:!0}),c(v,{onClick:()=>t(a),children:e?"Copied!":"Copy"})]})};var k,S,x;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const {
    onCopy,
    value,
    setValue,
    hasCopied
  } = useClipboard();
  return <>
      <HStack gap='md'>
        <Input placeholder='text to be copied...' value={value} onChange={e => setValue(e.target.value)} />
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </HStack>

      <Editable placeholder='Paste here'>
        <EditablePreview width='full' />
        <EditableInput />
      </Editable>
    </>;
}`,...(x=(S=C.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var D,I,R;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const {
    onCopy,
    value,
    setValue,
    hasCopied
  } = useClipboard('', 5000);
  return <>
      <HStack gap='md'>
        <Input placeholder='text to be copied...' value={value} onChange={e => setValue(e.target.value)} />
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </HStack>

      <Editable placeholder='Paste here'>
        <EditablePreview width='full' />
        <EditableInput />
      </Editable>
    </>;
}`,...(R=(I=f.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var H,T,P;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const {
    onCopy,
    hasCopied
  } = useClipboard();
  const value = '孫悟空';
  return <HStack gap='md'>
      <Input value={value} isReadOnly />
      <Button onClick={() => onCopy(value)}>
        {hasCopied ? 'Copied!' : 'Copy'}
      </Button>
    </HStack>;
}`,...(P=(T=g.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const me=["basic","withTimeout","directCopy"];export{me as __namedExportsOrder,C as basic,ue as default,g as directCopy,f as withTimeout};
//# sourceMappingURL=use-clipboard.stories-a9d24cb4.js.map
