import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{An as n,Mn as r,Wm as i,im as a,jn as o}from"./iframe-e5Q0HVQf.js";import{n as s,t as c}from"./storybook-yRZpcV0e.js";var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{c(),l=t(i(),1),n(),u=a(),d={component:r,title:`Components / SegmentedControl`},f=()=>(0,u.jsxs)(r,{defaultValue:`ハチワレ`,children:[(0,u.jsx)(o,{value:`ハチワレ`,children:`ハチワレ`}),(0,u.jsx)(o,{value:`うさぎ`,children:`うさぎ`}),(0,u.jsx)(o,{value:`モモンガ`,children:`モモンガ`})]}),p=()=>{let e=(0,l.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,u.jsx)(r,{defaultValue:`ハチワレ`,items:e})},m=()=>{let e=(0,l.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,u.jsx)(s,{variant:`stack`,rows:[`sm`,`md`,`lg`,`xl`],children:(t,n,i)=>(0,u.jsx)(r,{size:n,defaultValue:`ハチワレ`,items:e},i)})},h=()=>{let e=(0,l.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,u.jsx)(s,{variant:`stack`,rows:[`horizontal`,`vertical`],children:(t,n,i)=>(0,u.jsx)(r,{defaultValue:`ハチワレ`,items:e,orientation:n},i)})},g=()=>{let e=(0,l.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,u.jsx)(r,{defaultValue:`ハチワレ`,fullRounded:!0,items:e})},_=()=>{let e=(0,l.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{defaultValue:`ハチワレ`,disabled:!0,items:e}),(0,u.jsxs)(r,{defaultValue:`ハチワレ`,children:[(0,u.jsx)(o,{value:`ハチワレ`,children:`ハチワレ`}),(0,u.jsx)(o,{disabled:!0,value:`うさぎ`,children:`うさぎ`}),(0,u.jsx)(o,{value:`モモンガ`,children:`モモンガ`})]})]})},v=()=>{let e=(0,l.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{defaultValue:`ハチワレ`,items:e,readOnly:!0}),(0,u.jsxs)(r,{defaultValue:`ハチワレ`,children:[(0,u.jsx)(o,{value:`ハチワレ`,children:`ハチワレ`}),(0,u.jsx)(o,{readOnly:!0,value:`うさぎ`,children:`うさぎ`}),(0,u.jsx)(o,{value:`モモンガ`,children:`モモンガ`})]})]})},y=()=>{let[e,t]=(0,l.useState)(`ハチワレ`),n=(0,l.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,u.jsx)(r,{items:n,value:e,onChange:t})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <SegmentedControl.Root defaultValue="ハチワレ">
      <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
      <SegmentedControl.Item value="うさぎ">うさぎ</SegmentedControl.Item>
      <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
    </SegmentedControl.Root>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.Item[]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <SegmentedControl.Root defaultValue="ハチワレ" items={items} />;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.Item[]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <PropsTable variant="stack" rows={["sm", "md", "lg", "xl"]}>
      {(_, row, key) => <SegmentedControl.Root key={key} size={row} defaultValue="ハチワレ" items={items} />}
    </PropsTable>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.Item[]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <PropsTable variant="stack" rows={["horizontal", "vertical"]}>
      {(_, row, key) => <SegmentedControl.Root key={key} defaultValue="ハチワレ" items={items} orientation={row} />}
    </PropsTable>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.Item[]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <SegmentedControl.Root defaultValue="ハチワレ" fullRounded items={items} />;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.Item[]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <>
      <SegmentedControl.Root defaultValue="ハチワレ" disabled items={items} />

      <SegmentedControl.Root defaultValue="ハチワレ">
        <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
        <SegmentedControl.Item disabled value="うさぎ">
          うさぎ
        </SegmentedControl.Item>
        <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
      </SegmentedControl.Root>
    </>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.Item[]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <>
      <SegmentedControl.Root defaultValue="ハチワレ" items={items} readOnly />

      <SegmentedControl.Root defaultValue="ハチワレ">
        <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
        <SegmentedControl.Item readOnly value="うさぎ">
          うさぎ
        </SegmentedControl.Item>
        <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
      </SegmentedControl.Root>
    </>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("ハチワレ");
  const items = useMemo<SegmentedControl.Item[]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <SegmentedControl.Root items={items} value={value} onChange={setValue} />;
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`Items`,`Size`,`Orientation`,`FullRounded`,`Disabled`,`ReadOnly`,`CustomControl`]}))();export{f as Basic,y as CustomControl,_ as Disabled,g as FullRounded,p as Items,h as Orientation,v as ReadOnly,m as Size,b as __namedExportsOrder,d as default};