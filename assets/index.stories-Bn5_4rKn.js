import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Gt as n,O as r,Us as i,_i as a,jl as o,k as s,pi as c,pp as l,qs as u,vi as d,xl as f,yi as p}from"./iframe-BNI00s7o.js";var m,h,g,_,v,y;e((()=>{r(),f(),c(),i(),t(),m=l(),h={title:`Hooks / useClipboard`},g=()=>{let{copied:e,setValue:t,value:r,onCopy:i}=s();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(n,{children:[(0,m.jsx)(u,{placeholder:`text to be copied...`,value:r,onChange:e=>t(e.target.value)}),(0,m.jsx)(o,{onClick:i,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(p,{placeholder:`Paste here`,children:[(0,m.jsx)(d,{width:`full`}),(0,m.jsx)(a,{})]})]})},_=()=>{let{copied:e,setValue:t,value:r,onCopy:i}=s(``,5e3);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(n,{children:[(0,m.jsx)(u,{placeholder:`text to be copied...`,value:r,onChange:e=>t(e.target.value)}),(0,m.jsx)(o,{onClick:i,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(p,{placeholder:`Paste here`,children:[(0,m.jsx)(d,{width:`full`}),(0,m.jsx)(a,{})]})]})},v=()=>{let{copied:e,onCopy:t}=s(),r=`孫悟空`;return(0,m.jsxs)(n,{children:[(0,m.jsx)(u,{"aria-label":`Copy content`,readOnly:!0,value:r}),(0,m.jsx)(o,{onClick:()=>t(r),children:e?`Copied!`:`Copy`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`Timeout`,`DirectCopy`]}))();export{g as Basic,v as DirectCopy,_ as Timeout,y as __namedExportsOrder,h as default};