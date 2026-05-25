import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Dm as n,Dn as r,Dv as i,Ir as a,Lr as o,Rf as s,Rr as c,Sn as l,_r as u,by as d,gr as f,mg as p,zf as m,zr as h}from"./iframe-DT1sT_sY.js";import{n as g,t as _}from"./storybook-DAstIQj7.js";var v,y,b,x,S,C,w,T,E,D,O,k;t((()=>{v=e(d(),1),_(),a(),n(),f(),l(),s(),y=i(),b={component:c,title:`Components / Reorder`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(c,{children:[(0,y.jsx)(o,{value:`ギニュー`,children:`ギニュー`}),(0,y.jsx)(o,{value:`リクーム`,children:`リクーム`}),(0,y.jsx)(o,{value:`バータ`,children:`バータ`}),(0,y.jsx)(o,{value:`ジース`,children:`ジース`}),(0,y.jsx)(o,{value:`グルド`,children:`グルド`})]}),(0,y.jsx)(u,{}),(0,y.jsxs)(c,{children:[(0,y.jsx)(o,{children:`ギニュー`}),(0,y.jsx)(o,{children:`リクーム`}),(0,y.jsx)(o,{children:`バータ`}),(0,y.jsx)(o,{children:`ジース`}),(0,y.jsx)(o,{children:`グルド`})]})]}),S=()=>(0,y.jsx)(c,{items:(0,v.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[])}),C=()=>{let e=(0,v.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,y.jsx)(g,{variant:`stack`,rows:[`sm`,`md`,`lg`,`xl`],children:(t,n,r)=>(0,y.jsx)(c,{size:n,items:e},r)})},w=()=>{let e=(0,v.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,y.jsx)(g,{variant:`stack`,rows:[`panel`,`outline`,`solid`,`subtle`,`surface`,`elevated`,`plain`],children:(t,n,r)=>(0,y.jsx)(c,{variant:n,items:e},r)})},T=()=>{let e=(0,v.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,y.jsx)(g,{variant:`stack`,rows:[`vertical`,`horizontal`],children:(t,n,r)=>(0,y.jsx)(c,{items:e,orientation:n},r)})},E=()=>(0,y.jsxs)(c,{children:[(0,y.jsx)(o,{value:`孫悟空`,children:(0,y.jsxs)(r,{children:[(0,y.jsx)(h,{}),(0,y.jsx)(m,{children:`孫悟空`})]})}),(0,y.jsx)(o,{value:`ベジータ`,children:(0,y.jsxs)(r,{children:[(0,y.jsx)(h,{children:(0,y.jsx)(p,{})}),(0,y.jsx)(m,{children:`ベジータ`})]})})]}),D=()=>(0,y.jsxs)(c,{onChange:e=>console.log(`changed '${e.join(`', '`)}'`),children:[(0,y.jsx)(o,{value:`ギニュー`,children:`ギニュー`}),(0,y.jsx)(o,{value:`リクーム`,children:`リクーム`}),(0,y.jsx)(o,{value:`バータ`,children:`バータ`}),(0,y.jsx)(o,{value:`ジース`,children:`ジース`}),(0,y.jsx)(o,{value:`グルド`,children:`グルド`})]}),O=()=>(0,y.jsxs)(c,{onCompleteChange:e=>console.log(`completed '${e.join(`', '`)}'`),children:[(0,y.jsx)(o,{value:`ギニュー`,children:`ギニュー`}),(0,y.jsx)(o,{value:`リクーム`,children:`リクーム`}),(0,y.jsx)(o,{value:`バータ`,children:`バータ`}),(0,y.jsx)(o,{value:`ジース`,children:`ジース`}),(0,y.jsx)(o,{value:`グルド`,children:`グルド`})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Reorder.Root>
        <Reorder.Item value="ギニュー">ギニュー</Reorder.Item>
        <Reorder.Item value="リクーム">リクーム</Reorder.Item>
        <Reorder.Item value="バータ">バータ</Reorder.Item>
        <Reorder.Item value="ジース">ジース</Reorder.Item>
        <Reorder.Item value="グルド">グルド</Reorder.Item>
      </Reorder.Root>

      <Separator />

      <Reorder.Root>
        <Reorder.Item>ギニュー</Reorder.Item>
        <Reorder.Item>リクーム</Reorder.Item>
        <Reorder.Item>バータ</Reorder.Item>
        <Reorder.Item>ジース</Reorder.Item>
        <Reorder.Item>グルド</Reorder.Item>
      </Reorder.Root>
    </>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Reorder.Item[]>(() => [{
    label: "ギニュー",
    value: "ギニュー"
  }, {
    label: "リクーム",
    value: "リクーム"
  }, {
    label: "バータ",
    value: "バータ"
  }, {
    label: "ジース",
    value: "ジース"
  }, {
    label: "グルド",
    value: "グルド"
  }], []);
  return <ReorderRoot items={items} />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Reorder.Item[]>(() => [{
    label: "ギニュー",
    value: "ギニュー"
  }, {
    label: "リクーム",
    value: "リクーム"
  }, {
    label: "バータ",
    value: "バータ"
  }, {
    label: "ジース",
    value: "ジース"
  }, {
    label: "グルド",
    value: "グルド"
  }], []);
  return <PropsTable variant="stack" rows={["sm", "md", "lg", "xl"]}>
      {(_, row, key) => <ReorderRoot key={key} size={row} items={items} />}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Reorder.Item[]>(() => [{
    label: "ギニュー",
    value: "ギニュー"
  }, {
    label: "リクーム",
    value: "リクーム"
  }, {
    label: "バータ",
    value: "バータ"
  }, {
    label: "ジース",
    value: "ジース"
  }, {
    label: "グルド",
    value: "グルド"
  }], []);
  return <PropsTable variant="stack" rows={["panel", "outline", "solid", "subtle", "surface", "elevated", "plain"]}>
      {(_, row, key) => <ReorderRoot key={key} variant={row} items={items} />}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Reorder.Item[]>(() => [{
    label: "ギニュー",
    value: "ギニュー"
  }, {
    label: "リクーム",
    value: "リクーム"
  }, {
    label: "バータ",
    value: "バータ"
  }, {
    label: "ジース",
    value: "ジース"
  }, {
    label: "グルド",
    value: "グルド"
  }], []);
  return <PropsTable variant="stack" rows={["vertical", "horizontal"]}>
      {(_, row, key) => <ReorderRoot key={key} items={items} orientation={row} />}
    </PropsTable>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot>
      <ReorderItem value="孫悟空">
        <HStack>
          <ReorderTrigger />
          <Text>孫悟空</Text>
        </HStack>
      </ReorderItem>

      <ReorderItem value="ベジータ">
        <HStack>
          <ReorderTrigger>
            <GhostIcon />
          </ReorderTrigger>
          <Text>ベジータ</Text>
        </HStack>
      </ReorderItem>
    </ReorderRoot>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onChange={values => console.log(\`changed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onCompleteChange={values => console.log(\`completed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...O.parameters?.docs?.source}}},k=[`Basic`,`Items`,`Size`,`Variant`,`Orientation`,`Trigger`,`OnChange`,`OnCompleteChange`]}))();export{x as Basic,S as Items,D as OnChange,O as OnCompleteChange,T as Orientation,C as Size,E as Trigger,w as Variant,k as __namedExportsOrder,b as default};