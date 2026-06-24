import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{$n as r,dt as i}from"./core-DkLkzQLq.js";import{t as a}from"./jsx-runtime-O9QVJvLM.js";import{Er as o,Ht as s,J as c,K as l,in as u,t as d,un as f}from"./icon-BJ0kjvJ7.js";import{Hr as p,Vr as m,rd as h,sd as g}from"./iframe-QFtltEr1.js";import{n as _,t as v}from"./storybook-DaILEofl.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;t((()=>{y=e(n(),1),v(),m(),i(),h(),d(),b=a(),x={component:p,title:`Components / Rating`},S=()=>(0,b.jsx)(p,{}),C=()=>(0,b.jsx)(_,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(e,t,n)=>(0,b.jsx)(p,{size:t,defaultValue:3},n)}),w=()=>(0,b.jsx)(_,{variant:`stack`,rows:r,children:(e,t,n)=>(0,b.jsx)(p,{colorScheme:t,defaultValue:3},n)}),T=()=>(0,b.jsx)(p,{defaultValue:3}),E=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p,{count:4}),(0,b.jsx)(p,{count:5}),(0,b.jsx)(p,{count:6})]}),D=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p,{defaultValue:1.5,fractions:2}),(0,b.jsx)(p,{defaultValue:2.3333333333333335,fractions:3}),(0,b.jsx)(p,{defaultValue:3.25,fractions:4})]}),O=()=>(0,b.jsx)(p,{defaultValue:3,highlightSelectedOnly:!0}),k=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p,{defaultValue:3,disabled:!0}),(0,b.jsx)(g,{disabled:!0,label:`How satisfied are you with Yamada UI?`,children:(0,b.jsx)(p,{defaultValue:3})})]}),A=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p,{defaultValue:3,readOnly:!0}),(0,b.jsx)(g,{label:`How satisfied are you with Yamada UI?`,readOnly:!0,children:(0,b.jsx)(p,{defaultValue:3})})]}),j=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p,{color:`green.500`,defaultValue:3}),(0,b.jsx)(p,{color:e=>{switch(e){case 1:return`red.500`;case 2:return`orange.500`;case 3:return`yellow.500`;case 4:return`green.500`;case 5:return`blue.500`;default:return}},defaultValue:3})]}),M=()=>{let e=e=>{switch(e){case 1:return(0,b.jsx)(o,{});case 2:return(0,b.jsx)(f,{});case 3:return(0,b.jsx)(c,{});case 4:return(0,b.jsx)(s,{});case 5:return(0,b.jsx)(l,{});default:return null}};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p,{defaultValue:3,emptyIcon:(0,b.jsx)(u,{}),filledIcon:(0,b.jsx)(u,{})}),(0,b.jsx)(p,{defaultValue:3,emptyIcon:e,filledIcon:e})]})},N=()=>{let[e,t]=(0,y.useState)(3);return(0,b.jsx)(p,{value:e,onChange:t})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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