import{n as e,o as t,t as n}from"./rolldown-runtime-C0FnF6B9.js";import{t as r}from"./react-DiVRNtpo.js";import{Zn as i,tr as a}from"./props-Bz1FL_va.js";import{t as o}from"./jsx-runtime-BdxMnOeJ.js";import{r as s,t as c}from"./button-CFBNyQlD.js";import{r as l,t as u}from"./input-Dl7woXLW.js";import{a as d,i as f,l as p,o as m}from"./editable-PDlpvoK8.js";import{n as h,t as g}from"./h-stack-CueUnXBe.js";var _=n(((e,t)=>{t.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case`INPUT`:case`TEXTAREA`:t.blur();break;default:t=null}return e.removeAllRanges(),function(){e.type===`Caret`&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}})),v=n(((e,t)=>{var n=_(),r={"text/plain":`Text`,"text/html":`Url`,default:`Text`},i=`Copy to clipboard: #{key}, Enter`;function a(e){var t=(/mac os x/i.test(navigator.userAgent)?`⌘`:`Ctrl`)+`+C`;return e.replace(/#{\s*key\s*}/g,t)}function o(e,t){var o,s,c,l,u,d,f=!1;t||={},o=t.debug||!1;try{if(c=n(),l=document.createRange(),u=document.getSelection(),d=document.createElement(`span`),d.textContent=e,d.ariaHidden=`true`,d.style.all=`unset`,d.style.position=`fixed`,d.style.top=0,d.style.clip=`rect(0, 0, 0, 0)`,d.style.whiteSpace=`pre`,d.style.webkitUserSelect=`text`,d.style.MozUserSelect=`text`,d.style.msUserSelect=`text`,d.style.userSelect=`text`,d.addEventListener(`copy`,function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),n.clipboardData===void 0){o&&console.warn(`unable to use e.clipboardData`),o&&console.warn(`trying IE specific stuff`),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),l.selectNodeContents(d),u.addRange(l),!document.execCommand(`copy`))throw Error(`copy command was unsuccessful`);f=!0}catch(n){o&&console.error(`unable to copy using execCommand: `,n),o&&console.warn(`trying IE specific stuff`);try{window.clipboardData.setData(t.format||`text`,e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(n){o&&console.error(`unable to copy using clipboardData: `,n),o&&console.error(`falling back to prompt`),s=a(`message`in t?t.message:i),window.prompt(s,e)}}finally{u&&(typeof u.removeRange==`function`?u.removeRange(l):u.removeAllRanges()),d&&document.body.removeChild(d),c()}return f}t.exports=o})),y,b,x;function S(){return(S=e((()=>{y=t(v(),1),b=r(),x=(e=``,t={})=>{let[n,r]=(0,b.useState)(!1),[o,s]=(0,b.useState)(e);(0,b.useEffect)(()=>s(e),[e]);let{timeout:c=1500,...l}=i(t)?{timeout:t}:t,u=(0,b.useCallback)(e=>{a(e)?s(e):e=o;let t=(0,y.default)(e,l);r(t)},[o,l]);return(0,b.useEffect)(()=>{let e=null;return n&&(e=setTimeout(()=>{r(!1)},c)),()=>{e&&clearTimeout(e)}},[c,n]),{copied:n,setValue:s,value:o,onCopy:u}}})))()}var C,w,T,E,D,O;function k(){return(k=e((()=>{S(),s(),p(),l(),h(),C=o(),w={title:`Hooks / useClipboard`},T=()=>{let{copied:e,setValue:t,value:n,onCopy:r}=x();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{placeholder:`text to be copied...`,value:n,onChange:e=>t(e.target.value)}),(0,C.jsx)(c,{onClick:r,children:e?`Copied!`:`Copy`})]}),(0,C.jsxs)(m,{placeholder:`Paste here`,children:[(0,C.jsx)(d,{width:`full`}),(0,C.jsx)(f,{})]})]})},E=()=>{let{copied:e,setValue:t,value:n,onCopy:r}=x(``,5e3);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{placeholder:`text to be copied...`,value:n,onChange:e=>t(e.target.value)}),(0,C.jsx)(c,{onClick:r,children:e?`Copied!`:`Copy`})]}),(0,C.jsxs)(m,{placeholder:`Paste here`,children:[(0,C.jsx)(d,{width:`full`}),(0,C.jsx)(f,{})]})]})},D=()=>{let{copied:e,onCopy:t}=x(),n=`孫悟空`;return(0,C.jsxs)(g,{children:[(0,C.jsx)(u,{"aria-label":`Copy content`,readOnly:!0,value:n}),(0,C.jsx)(c,{onClick:()=>t(n),children:e?`Copied!`:`Copy`})]})},O=[`Basic`,`Timeout`,`DirectCopy`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}}})))()}k();export{T as Basic,D as DirectCopy,E as Timeout,O as __namedExportsOrder,w as default};