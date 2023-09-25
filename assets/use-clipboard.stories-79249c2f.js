import{a as d,F as B,j as c}from"./jsx-runtime-29545a09.js";import{g as F}from"./_commonjsHelpers-de833af9.js";import{r as m}from"./index-76fb7be0.js";import{C as N,i as M}from"./factory-0893e977.js";import{H as h}from"./stack-e0824e8f.js";import{E as A,a as U,b as j}from"./editable-0dc3f249.js";import{I as b}from"./input-3a706cfc.js";import{B as v}from"./button-29566724.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./index-7847f267.js";import"./index-dcdadb06.js";import"./index-cee88dbe.js";import"./theme-53967a8a.js";import"./form-control-e02ecf9c.js";import"./use-component-style-1d64e7de.js";import"./loading-0658c608.js";import"./index-500c6d69.js";import"./index-24d8bf0d.js";import"./index-7b119b1a.js";import"./icon-1cfd45cb.js";var V=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,a=[],r=0;r<t.rangeCount;r++)a.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||a.forEach(function(n){t.addRange(n)}),e&&e.focus()}},_=V,E={"text/plain":"Text","text/html":"Url",default:"Text"},z="Copy to clipboard: #{key}, Enter";function K(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function L(t,e){var a,r,n,p,i,o,u=!1;e||(e={}),a=e.debug||!1;try{n=_(),p=document.createRange(),i=document.getSelection(),o=document.createElement("span"),o.textContent=t,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(s){if(s.stopPropagation(),e.format)if(s.preventDefault(),typeof s.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=E[e.format]||E.default;window.clipboardData.setData(y,t)}else s.clipboardData.clearData(),s.clipboardData.setData(e.format,t);e.onCopy&&(s.preventDefault(),e.onCopy(s.clipboardData))}),document.body.appendChild(o),p.selectNodeContents(o),i.addRange(p);var l=document.execCommand("copy");if(!l)throw new Error("copy command was unsuccessful");u=!0}catch(s){a&&console.error("unable to copy using execCommand: ",s),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(y){a&&console.error("unable to copy using clipboardData: ",y),a&&console.error("falling back to prompt"),r=K("message"in e?e.message:z),window.prompt(r,t)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(p):i.removeAllRanges()),o&&document.body.removeChild(o),n()}return u}var X=L;const $=F(X),w=(t="",e={})=>{const[a,r]=m.useState(!1),[n,p]=m.useState(t);m.useEffect(()=>p(t),[t]);const{timeout:i=1500,...o}=M(e)?{timeout:e}:e,u=m.useCallback(l=>{N(l)?p(l):l=n;const s=$(l,o);r(s)},[n,o]);return m.useEffect(()=>{let l=null;return a&&(l=window.setTimeout(()=>{r(!1)},i)),()=>{l&&window.clearTimeout(l)}},[i,a]),{value:n,setValue:p,onCopy:u,hasCopied:a}},me={title:"Hooks / useClipboard"},C=()=>{const{onCopy:t,value:e,setValue:a,hasCopied:r}=w();return d(B,{children:[d(h,{gap:"md",children:[c(b,{placeholder:"text to be copied...",value:e,onChange:n=>a(n.target.value)}),c(v,{onClick:t,children:r?"Copied!":"Copy"})]}),d(A,{placeholder:"Paste here",children:[c(U,{width:"full"}),c(j,{})]})]})},f=()=>{const{onCopy:t,value:e,setValue:a,hasCopied:r}=w("",5e3);return d(B,{children:[d(h,{gap:"md",children:[c(b,{placeholder:"text to be copied...",value:e,onChange:n=>a(n.target.value)}),c(v,{onClick:t,children:r?"Copied!":"Copy"})]}),d(A,{placeholder:"Paste here",children:[c(U,{width:"full"}),c(j,{})]})]})},g=()=>{const{onCopy:t,hasCopied:e}=w(),a="孫悟空";return d(h,{gap:"md",children:[c(b,{value:a,isReadOnly:!0}),c(v,{onClick:()=>t(a),children:e?"Copied!":"Copy"})]})};var k,S,x;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(P=(T=g.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const Ce=["basic","withTimeout","directCopy"];export{Ce as __namedExportsOrder,C as basic,me as default,g as directCopy,f as withTimeout};
//# sourceMappingURL=use-clipboard.stories-79249c2f.js.map
