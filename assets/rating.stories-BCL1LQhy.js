import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Kn as n,Of as r,Tf as i,Wm as a,Xd as o,Zc as s,Zd as c,gm as l,im as u,jd as d,nm as f,qc as p,qn as m,tp as h,vf as g}from"./iframe-ny1HWA6_.js";import{n as _,t as v}from"./storybook-BypOH0Lu.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{v(),y=t(a(),1),n(),f(),p(),d(),b=u(),x={component:m,title:`Components / Rating`},S=()=>(0,b.jsx)(m,{}),C=()=>(0,b.jsx)(_,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(e,t,n)=>(0,b.jsx)(m,{size:t,defaultValue:3},n)}),w=()=>(0,b.jsx)(_,{variant:`stack`,rows:l,children:(e,t,n)=>(0,b.jsx)(m,{colorScheme:t,defaultValue:3},n)}),T=()=>(0,b.jsx)(m,{defaultValue:3}),E=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{count:4}),(0,b.jsx)(m,{count:5}),(0,b.jsx)(m,{count:6})]}),D=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{defaultValue:1.5,fractions:2}),(0,b.jsx)(m,{defaultValue:2.3333333333333335,fractions:3}),(0,b.jsx)(m,{defaultValue:3.25,fractions:4})]}),O=()=>(0,b.jsx)(m,{defaultValue:3,highlightSelectedOnly:!0}),k=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{defaultValue:3,disabled:!0}),(0,b.jsx)(s,{disabled:!0,label:`How satisfied are you with Yamada UI?`,children:(0,b.jsx)(m,{defaultValue:3})})]}),A=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{defaultValue:3,readOnly:!0}),(0,b.jsx)(s,{label:`How satisfied are you with Yamada UI?`,readOnly:!0,children:(0,b.jsx)(m,{defaultValue:3})})]}),j=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{color:`green.500`,defaultValue:3}),(0,b.jsx)(m,{color:e=>{switch(e){case 1:return`red.500`;case 2:return`orange.500`;case 3:return`yellow.500`;case 4:return`green.500`;case 5:return`blue.500`;default:return}},defaultValue:3})]}),M=()=>{let e=e=>{switch(e){case 1:return(0,b.jsx)(h,{});case 2:return(0,b.jsx)(r,{});case 3:return(0,b.jsx)(c,{});case 4:return(0,b.jsx)(g,{});case 5:return(0,b.jsx)(o,{});default:return null}};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{defaultValue:3,emptyIcon:(0,b.jsx)(i,{}),filledIcon:(0,b.jsx)(i,{})}),(0,b.jsx)(m,{defaultValue:3,emptyIcon:e,filledIcon:e})]})},N=()=>{let[e,t]=(0,y.useState)(3);return(0,b.jsx)(m,{value:e,onChange:t})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
      return <Rating key={key} size={row} defaultValue={3} />;
    }}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => {
      return <Rating key={key} colorScheme={row} defaultValue={3} />;
    }}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Rating count={4} />
      <Rating count={5} />
      <Rating count={6} />
    </>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={1 + 1 / 2} fractions={2} />
      <Rating defaultValue={2 + 1 / 3} fractions={3} />
      <Rating defaultValue={3 + 1 / 4} fractions={4} />
    </>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} disabled />

      <Field.Root disabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </Field.Root>
    </>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} readOnly />

      <Field.Root label="How satisfied are you with Yamada UI?" readOnly>
        <Rating defaultValue={3} />
      </Field.Root>
    </>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const getColor = (value: number) => {
    switch (value) {
      case 1:
        return "red.500";
      case 2:
        return "orange.500";
      case 3:
        return "yellow.500";
      case 4:
        return "green.500";
      case 5:
        return "blue.500";
      default:
        return undefined;
    }
  };
  return <>
      <Rating color="green.500" defaultValue={3} />
      <Rating color={getColor} defaultValue={3} />
    </>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const getIcon = (value: number) => {
    switch (value) {
      case 1:
        return <AngryIcon />;
      case 2:
        return <FrownIcon />;
      case 3:
        return <SmileIcon />;
      case 4:
        return <LaughIcon />;
      case 5:
        return <SmilePlusIcon />;
      default:
        return null;
    }
  };
  return <>
      <Rating defaultValue={3} emptyIcon={<GhostIcon />} filledIcon={<GhostIcon />} />
      <Rating defaultValue={3} emptyIcon={getIcon} filledIcon={getIcon} />
    </>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...N.parameters?.docs?.source}}},P=[`Basic`,`Size`,`ColorScheme`,`DefaultValue`,`Count`,`Fractions`,`HighlightSelectedOnly`,`Disabled`,`ReadOnly`,`CustomColor`,`CustomIcon`,`CustomControl`]}))();export{S as Basic,w as ColorScheme,E as Count,j as CustomColor,N as CustomControl,M as CustomIcon,T as DefaultValue,k as Disabled,D as Fractions,O as HighlightSelectedOnly,A as ReadOnly,C as Size,P as __namedExportsOrder,x as default};