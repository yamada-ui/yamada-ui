import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Dn as n,On as r,Xn as i,i as a,jt as o,lt as s,nn as c,o as l,or as u,qt as d,st as f,xt as p}from"./props-DIwllvnO.js";import{t as m}from"./jsx-runtime-BB9-612F.js";import{E as h,T as g,d as _,f as v}from"./utils-SJUSBa7w.js";import{i as ee,t as y}from"./effect-BX-3lD32.js";import{d as b,i as te,n as x,r as S}from"./create-component-BVL_n9ri.js";import{n as ne,t as re}from"./ghost-icon-fzp7wW3j.js";import{n as ie,t as ae}from"./grip-vertical-icon-zhOUdcW3.js";import{a as oe,c as se,g as ce,r as le,t as ue}from"./react-COrYa_fR.js";import{n as de,t as fe}from"./use-value-B5cxFrgt.js";import{n as pe,t as C}from"./text-C7fvWSeG.js";import{n as me,t as he}from"./separator-B-3WojiT.js";import{n as ge,t as w}from"./h-stack-DIPI3-R3.js";import{n as _e,t as T}from"./props-table-Cbmwv9eT.js";var E;function D(){return(D=e((()=>{b(),E=te({base:{item:{"&[data-has-trigger]":{cursor:`default`,userSelect:`none`},cursor:`grab`,flex:`1`,rounded:`l2`,_selected:{boxShadow:`md`,cursor:`grabbing`}},root:{display:`flex`,w:`full`},trigger:{alignItems:`center`,color:`fg.subtle`,cursor:`grab`,display:`flex`,fontSize:`2xl`,justifyContent:`center`,_selected:{cursor:`grabbing`},_disabled:{layerStyle:`disabled`}}},sizes:{sm:{item:{p:`3`},root:{gap:`3`}},md:{item:{p:`4`},root:{gap:`4`}},lg:{item:{p:`6`},root:{gap:`6`}},xl:{item:{p:`8`},root:{gap:`8`}}},variants:{elevated:{item:{bg:`bg.panel`,boxShadow:`md`,_selected:{boxShadow:`lg`}}},outline:{item:{layerStyle:`outline`,bg:`bg`}},panel:{item:{layerStyle:`panel`}},plain:{item:{flex:`inherit`,p:`0px`,rounded:`0px`,_selected:{boxShadow:`unset`}},root:{gap:`0px`}},solid:{item:{layerStyle:`solid`}},subtle:{item:{layerStyle:`subtle`}},surface:{item:{layerStyle:`surface`}}},props:{orientation:{horizontal:{root:{flexDirection:`row`}},vertical:{root:{alignItems:`stretch`,flexDirection:`column`}}}},defaultProps:{size:`md`,variant:`panel`,orientation:`vertical`}})})))()}var O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{ue(),O=t(),a(),h(),c(),r(),f(),y(),p(),k=({children:e,label:t}={})=>A(e??t),A=e=>u(e)||i(e)?JSON.stringify(e):e,[j,M]=g({name:`ReorderContext`}),[N,P]=g({name:`ReorderItemContext`}),F=({ref:e,children:t,item:n,items:r=[],orientation:i=`vertical`,onChange:a,onCompleteChange:s,...c}={})=>{let u=i===`vertical`?`y`:`x`,d=o(t),[f]=o(n),p=!!d.length,m=(0,O.useMemo)(()=>{let e=p?d.map(({props:e})=>e.value??k(e)):r.map(e=>e.value??k(e)),t=e.filter((e,t,n)=>n.indexOf(e)===t&&t!==n.lastIndexOf(e));return t.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${t.join(`', '`)}' `),Array.from(new Set(e))},[p,d,r]),h=(0,O.useMemo)(()=>Object.fromEntries(d.map(e=>[A(e.props.value)??A(k(e.props)),e])),[d]),g=(0,O.useMemo)(()=>Object.fromEntries(r.map(e=>[A(e.value)??A(k(e)),e])),[r]),_=(0,O.useRef)(m),[v,y]=(0,O.useState)(m),b=(0,O.useRef)(m),te=(0,O.useMemo)(()=>v.map(e=>{if(p)return h[A(e)];{let t=g[A(e)];return t&&f?(0,O.cloneElement)(f,{key:A(t.value),...t}):null}}),[v,p,h,g,f]),x=(0,O.useCallback)(e=>{y(e),a?.(e)},[a]),S=(0,O.useCallback)(()=>{JSON.stringify(b.current)!==JSON.stringify(v)&&(b.current=v,s?.(v))},[s,v]);return ee(()=>{JSON.stringify(m)!==JSON.stringify(_.current)&&(b.current=m,_.current=m,y(m))},[m]),{children:te,orientation:i,values:v,getRootProps:(0,O.useCallback)((t={})=>l({axis:u,values:v},c,t,{ref:e},{onMouseUp:S,onReorder:x,onTouchEnd:S})(),[c,e,S,x,u,v])}},I=({ref:e,label:t,value:r,...i})=>{let{orientation:a}=M(),o=se(),[c,u]=(0,O.useState)(!1),[f,p]=(0,O.useState)(!1),m=ce(0),h=ce(0),g=(0,O.useCallback)(e=>u(!!e),[]);return(0,O.useEffect)(()=>{let e=m.on(`change`,e=>{a===`horizontal`&&p(e!==0)}),t=h.on(`change`,e=>{a===`vertical`&&p(e!==0)});return()=>{e(),t()}},[a,m,h]),{getItemProps:(0,O.useCallback)((n={})=>{let a=n.children??i.children??t;return{...l({"data-has-trigger":d(c),"data-selected":d(f),dragControls:o,dragListener:!c,value:r??k({children:a})},n,i,{ref:e})(),style:{x:m,y:h,...n.style,...i.style},children:a}},[e,i,o,c,r,m,h,f,t]),getTriggerProps:(0,O.useCallback)((e={})=>({...e,ref:s(g,e.ref),"data-selected":d(f),onPointerDown:n(e.onPointerDown,e=>o.start(e))}),[f,o,g])}}})))()}var R,ve,ye,z,be,B,V,H;function xe(){return(xe=e((()=>{ue(),S(),_(),fe(),ie(),D(),L(),R=m(),{PropsContext:ve,usePropsContext:ye,withContext:z,withProvider:be}=x(`reorder`,E),B=be(({orientation:e,...t})=>{let n=de(e),{children:r,getRootProps:i}=F({...t,item:(0,R.jsx)(V,{}),orientation:n});return(0,R.jsx)(j,{value:{orientation:n},children:(0,R.jsx)(v.ul,{as:oe,...i(),children:r})})},`root`,{transferProps:[`orientation`]})(),V=z(e=>{let{getItemProps:t,getTriggerProps:n}=I(e);return(0,R.jsx)(N,{value:{getTriggerProps:n},children:(0,R.jsx)(v.li,{as:le,...t()})})},`item`)(),H=z(`div`,`trigger`)(void 0,e=>{let{getTriggerProps:t}=P();return{children:(0,R.jsx)(ae,{}),...t(e)}})})))()}var U,W,Se,G,K,q,J,Y,X,Z,Q,Ce;function $(){return($=e((()=>{U=t(),_e(),xe(),ne(),me(),ge(),pe(),W=m(),Se={component:B,title:`Components / Reorder`},G=()=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(B,{children:[(0,W.jsx)(V,{value:`ギニュー`,children:`ギニュー`}),(0,W.jsx)(V,{value:`リクーム`,children:`リクーム`}),(0,W.jsx)(V,{value:`バータ`,children:`バータ`}),(0,W.jsx)(V,{value:`ジース`,children:`ジース`}),(0,W.jsx)(V,{value:`グルド`,children:`グルド`})]}),(0,W.jsx)(he,{}),(0,W.jsxs)(B,{children:[(0,W.jsx)(V,{children:`ギニュー`}),(0,W.jsx)(V,{children:`リクーム`}),(0,W.jsx)(V,{children:`バータ`}),(0,W.jsx)(V,{children:`ジース`}),(0,W.jsx)(V,{children:`グルド`})]})]}),K=()=>{let e=(0,U.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,W.jsx)(B,{items:e})},q=()=>{let e=(0,U.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,W.jsx)(T,{variant:`stack`,rows:[`sm`,`md`,`lg`,`xl`],children:(t,n,r)=>(0,W.jsx)(B,{size:n,items:e},r)})},J=()=>{let e=(0,U.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,W.jsx)(T,{variant:`stack`,rows:[`panel`,`outline`,`solid`,`subtle`,`surface`,`elevated`,`plain`],children:(t,n,r)=>(0,W.jsx)(B,{variant:n,items:e},r)})},Y=()=>{let e=(0,U.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,W.jsx)(T,{variant:`stack`,rows:[`vertical`,`horizontal`],children:(t,n,r)=>(0,W.jsx)(B,{items:e,orientation:n},r)})},X=()=>(0,W.jsxs)(B,{children:[(0,W.jsx)(V,{value:`孫悟空`,children:(0,W.jsxs)(w,{children:[(0,W.jsx)(H,{}),(0,W.jsx)(C,{children:`孫悟空`})]})}),(0,W.jsx)(V,{value:`ベジータ`,children:(0,W.jsxs)(w,{children:[(0,W.jsx)(H,{children:(0,W.jsx)(re,{})}),(0,W.jsx)(C,{children:`ベジータ`})]})})]}),Z=()=>(0,W.jsxs)(B,{onChange:e=>console.log(`changed '${e.join(`', '`)}'`),children:[(0,W.jsx)(V,{value:`ギニュー`,children:`ギニュー`}),(0,W.jsx)(V,{value:`リクーム`,children:`リクーム`}),(0,W.jsx)(V,{value:`バータ`,children:`バータ`}),(0,W.jsx)(V,{value:`ジース`,children:`ジース`}),(0,W.jsx)(V,{value:`グルド`,children:`グルド`})]}),Q=()=>(0,W.jsxs)(B,{onCompleteChange:e=>console.log(`completed '${e.join(`', '`)}'`),children:[(0,W.jsx)(V,{value:`ギニュー`,children:`ギニュー`}),(0,W.jsx)(V,{value:`リクーム`,children:`リクーム`}),(0,W.jsx)(V,{value:`バータ`,children:`バータ`}),(0,W.jsx)(V,{value:`ジース`,children:`ジース`}),(0,W.jsx)(V,{value:`グルド`,children:`グルド`})]}),Ce=[`Basic`,`Items`,`Size`,`Variant`,`Orientation`,`Trigger`,`OnChange`,`OnCompleteChange`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onChange={values => console.log(\`changed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onCompleteChange={values => console.log(\`completed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...Q.parameters?.docs?.source}}}})))()}$();export{G as Basic,K as Items,Z as OnChange,Q as OnCompleteChange,Y as Orientation,q as Size,X as Trigger,J as Variant,Ce as __namedExportsOrder,Se as default};