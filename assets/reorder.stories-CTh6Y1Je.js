import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{At as n,Dn as r,En as i,Kt as a,Yn as o,ar as s,bt as c,i as l,lt as u,o as ee,st as d,tn as f}from"./props-DZ_NCL29.js";import{t as p}from"./jsx-runtime-BB9-612F.js";import{E as m,T as h,d as g,f as _}from"./utils-op0kJ2Xc.js";import{i as te,t as v}from"./effect-BX-3lD32.js";import{d as y,i as b,n as x,r as S}from"./create-component-Ct2AiAAx.js";import{n as ne,t as re}from"./ghost-icon-BkSEMkfb.js";import{n as ie,t as ae}from"./grip-vertical-icon-BNwPwP-6.js";import{a as oe,c as se,g as ce,r as le,t as ue}from"./react-zeiFZhY-.js";import{n as de,t as fe}from"./use-value-CKWBa4D6.js";import{n as pe,t as me}from"./text-BcgvdG46.js";import{n as he,t as ge}from"./separator-Ezdv0mnw.js";import{n as _e,t as C}from"./h-stack-DLrlCWvV.js";import{n as ve,t as w}from"./props-table-CU-k6wL6.js";var T;function E(){return(E=e((()=>{y(),T=b({base:{item:{"&[data-has-trigger]":{cursor:`default`,userSelect:`none`},cursor:`grab`,flex:`1`,rounded:`l2`,_selected:{boxShadow:`md`,cursor:`grabbing`}},root:{display:`flex`,w:`full`},trigger:{alignItems:`center`,color:`fg.subtle`,cursor:`grab`,display:`flex`,fontSize:`2xl`,justifyContent:`center`,_selected:{cursor:`grabbing`},_disabled:{layerStyle:`disabled`}}},sizes:{sm:{item:{p:`3`},root:{gap:`3`}},md:{item:{p:`4`},root:{gap:`4`}},lg:{item:{p:`6`},root:{gap:`6`}},xl:{item:{p:`8`},root:{gap:`8`}}},variants:{elevated:{item:{bg:`bg.panel`,boxShadow:`md`,_selected:{boxShadow:`lg`}}},outline:{item:{layerStyle:`outline`,bg:`bg`}},panel:{item:{layerStyle:`panel`}},plain:{item:{flex:`inherit`,p:`0px`,rounded:`0px`,_selected:{boxShadow:`unset`}},root:{gap:`0px`}},solid:{item:{layerStyle:`solid`}},subtle:{item:{layerStyle:`subtle`}},surface:{item:{layerStyle:`surface`}}},props:{orientation:{horizontal:{root:{flexDirection:`row`}},vertical:{root:{alignItems:`stretch`,flexDirection:`column`}}}},defaultProps:{size:`md`,variant:`panel`,orientation:`vertical`}})})))()}var D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{ue(),D=t(),l(),m(),f(),r(),d(),v(),c(),O=({children:e,label:t}={})=>k(e??t),k=e=>s(e)||o(e)?JSON.stringify(e):e,[A,j]=h({name:`ReorderContext`}),[M,N]=h({name:`ReorderItemContext`}),P=({ref:e,children:t,item:r,items:i=[],orientation:a=`vertical`,onChange:o,onCompleteChange:s,...c}={})=>{let l=a===`vertical`?`y`:`x`,u=n(t),[d]=n(r),f=!!u.length,p=(0,D.useMemo)(()=>{let e=f?u.map(({props:e})=>e.value??O(e)):i.map(e=>e.value??O(e)),t=e.filter((e,t,n)=>n.indexOf(e)===t&&t!==n.lastIndexOf(e));return t.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${t.join(`', '`)}' `),Array.from(new Set(e))},[f,u,i]),m=(0,D.useMemo)(()=>Object.fromEntries(u.map(e=>[k(e.props.value)??k(O(e.props)),e])),[u]),h=(0,D.useMemo)(()=>Object.fromEntries(i.map(e=>[k(e.value)??k(O(e)),e])),[i]),g=(0,D.useRef)(p),[_,v]=(0,D.useState)(p),y=(0,D.useRef)(p),b=(0,D.useMemo)(()=>_.map(e=>{if(f)return m[k(e)];{let t=h[k(e)];return t&&d?(0,D.cloneElement)(d,{key:k(t.value),...t}):null}}),[_,f,m,h,d]),x=(0,D.useCallback)(e=>{v(e),o?.(e)},[o]),S=(0,D.useCallback)(()=>{JSON.stringify(y.current)!==JSON.stringify(_)&&(y.current=_,s?.(_))},[s,_]);return te(()=>{JSON.stringify(p)!==JSON.stringify(g.current)&&(y.current=p,g.current=p,v(p))},[p]),{children:b,orientation:a,values:_,getRootProps:(0,D.useCallback)((t={})=>ee({axis:l,values:_},c,t,{ref:e},{onMouseUp:S,onReorder:x,onTouchEnd:S})(),[c,e,S,x,l,_])}},F=({ref:e,label:t,value:n,...r})=>{let{orientation:o}=j(),s=se(),[c,l]=(0,D.useState)(!1),[d,f]=(0,D.useState)(!1),p=ce(0),m=ce(0),h=(0,D.useCallback)(e=>l(!!e),[]);return(0,D.useEffect)(()=>{let e=p.on(`change`,e=>{o===`horizontal`&&f(e!==0)}),t=m.on(`change`,e=>{o===`vertical`&&f(e!==0)});return()=>{e(),t()}},[o,p,m]),{getItemProps:(0,D.useCallback)((i={})=>{let o=i.children??r.children??t;return{...ee({"data-has-trigger":a(c),"data-selected":a(d),dragControls:s,dragListener:!c,value:n??O({children:o})},i,r,{ref:e})(),style:{x:p,y:m,...i.style,...r.style},children:o}},[e,r,s,c,n,p,m,d,t]),getTriggerProps:(0,D.useCallback)((e={})=>({...e,ref:u(h,e.ref),"data-selected":a(d),onPointerDown:i(e.onPointerDown,e=>s.start(e))}),[d,s,h])}}})))()}var L,ye,be,R,z,B,V,H;function xe(){return(xe=e((()=>{ue(),S(),g(),fe(),ie(),E(),I(),L=p(),{PropsContext:ye,usePropsContext:be,withContext:R,withProvider:z}=x(`reorder`,T),B=z(({orientation:e,...t})=>{let n=de(e),{children:r,getRootProps:i}=P({...t,item:(0,L.jsx)(V,{}),orientation:n});return(0,L.jsx)(A,{value:{orientation:n},children:(0,L.jsx)(_.ul,{as:oe,...i(),children:r})})},`root`,{transferProps:[`orientation`]})(),V=R(e=>{let{getItemProps:t,getTriggerProps:n}=F(e);return(0,L.jsx)(M,{value:{getTriggerProps:n},children:(0,L.jsx)(_.li,{as:le,...t()})})},`item`)(),H=R(`div`,`trigger`)(void 0,e=>{let{getTriggerProps:t}=N();return{children:(0,L.jsx)(ae,{}),...t(e)}})})))()}var U,W,Se,G,K,q,J,Y,X,Z,Q,Ce;function $(){return($=e((()=>{U=t(),ve(),xe(),ne(),he(),_e(),pe(),W=p(),Se={component:B,title:`Components / Reorder`},G=()=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(B,{children:[(0,W.jsx)(V,{value:`ギニュー`,children:`ギニュー`}),(0,W.jsx)(V,{value:`リクーム`,children:`リクーム`}),(0,W.jsx)(V,{value:`バータ`,children:`バータ`}),(0,W.jsx)(V,{value:`ジース`,children:`ジース`}),(0,W.jsx)(V,{value:`グルド`,children:`グルド`})]}),(0,W.jsx)(ge,{}),(0,W.jsxs)(B,{children:[(0,W.jsx)(V,{children:`ギニュー`}),(0,W.jsx)(V,{children:`リクーム`}),(0,W.jsx)(V,{children:`バータ`}),(0,W.jsx)(V,{children:`ジース`}),(0,W.jsx)(V,{children:`グルド`})]})]}),K=()=>{let e=(0,U.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,W.jsx)(B,{items:e})},q=()=>{let e=(0,U.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,W.jsx)(w,{variant:`stack`,rows:[`sm`,`md`,`lg`,`xl`],children:(t,n,r)=>(0,W.jsx)(B,{size:n,items:e},r)})},J=()=>{let e=(0,U.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,W.jsx)(w,{variant:`stack`,rows:[`panel`,`outline`,`solid`,`subtle`,`surface`,`elevated`,`plain`],children:(t,n,r)=>(0,W.jsx)(B,{variant:n,items:e},r)})},Y=()=>{let e=(0,U.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,W.jsx)(w,{variant:`stack`,rows:[`vertical`,`horizontal`],children:(t,n,r)=>(0,W.jsx)(B,{items:e,orientation:n},r)})},X=()=>(0,W.jsxs)(B,{children:[(0,W.jsx)(V,{value:`孫悟空`,children:(0,W.jsxs)(C,{children:[(0,W.jsx)(H,{}),(0,W.jsx)(me,{children:`孫悟空`})]})}),(0,W.jsx)(V,{value:`ベジータ`,children:(0,W.jsxs)(C,{children:[(0,W.jsx)(H,{children:(0,W.jsx)(re,{})}),(0,W.jsx)(me,{children:`ベジータ`})]})})]}),Z=()=>(0,W.jsxs)(B,{onChange:e=>console.log(`changed '${e.join(`', '`)}'`),children:[(0,W.jsx)(V,{value:`ギニュー`,children:`ギニュー`}),(0,W.jsx)(V,{value:`リクーム`,children:`リクーム`}),(0,W.jsx)(V,{value:`バータ`,children:`バータ`}),(0,W.jsx)(V,{value:`ジース`,children:`ジース`}),(0,W.jsx)(V,{value:`グルド`,children:`グルド`})]}),Q=()=>(0,W.jsxs)(B,{onCompleteChange:e=>console.log(`completed '${e.join(`', '`)}'`),children:[(0,W.jsx)(V,{value:`ギニュー`,children:`ギニュー`}),(0,W.jsx)(V,{value:`リクーム`,children:`リクーム`}),(0,W.jsx)(V,{value:`バータ`,children:`バータ`}),(0,W.jsx)(V,{value:`ジース`,children:`ジース`}),(0,W.jsx)(V,{value:`グルド`,children:`グルド`})]}),Ce=[`Basic`,`Items`,`Size`,`Variant`,`Orientation`,`Trigger`,`OnChange`,`OnCompleteChange`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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