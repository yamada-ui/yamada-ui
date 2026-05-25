import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dn as t,Du as n,Dv as r,Pd as i,Q as a,Sn as o,Z as s,ao as c,bu as l,eo as u,io as d,oo as f,qd as p}from"./iframe-DT1sT_sY.js";var m,h,g,_,v,y;e((()=>{s(),i(),u(),l(),o(),m=r(),h={title:`Hooks / useClipboard`},g=()=>{let{copied:e,setValue:r,value:i,onCopy:o}=a();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(t,{children:[(0,m.jsx)(n,{placeholder:`text to be copied...`,value:i,onChange:e=>r(e.target.value)}),(0,m.jsx)(p,{onClick:o,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(f,{placeholder:`Paste here`,children:[(0,m.jsx)(c,{width:`full`}),(0,m.jsx)(d,{})]})]})},_=()=>{let{copied:e,setValue:r,value:i,onCopy:o}=a(``,5e3);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(t,{children:[(0,m.jsx)(n,{placeholder:`text to be copied...`,value:i,onChange:e=>r(e.target.value)}),(0,m.jsx)(p,{onClick:o,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(f,{placeholder:`Paste here`,children:[(0,m.jsx)(c,{width:`full`}),(0,m.jsx)(d,{})]})]})},v=()=>{let{copied:e,onCopy:r}=a(),i=`孫悟空`;return(0,m.jsxs)(t,{children:[(0,m.jsx)(n,{"aria-label":`Copy content`,readOnly:!0,value:i}),(0,m.jsx)(p,{onClick:()=>r(i),children:e?`Copied!`:`Copy`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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