import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{$n as n,Bt as r,Tt as i,Un as a,Yt as o,_t as s,bn as c,i as l,it as u,o as d,ot as f,xn as p}from"./props-Bz1FL_va.js";import{t as m}from"./jsx-runtime-BdxMnOeJ.js";import{E as h,T as g,d as _,f as v}from"./utils-DG4lHdyV.js";import{i as ee,t as y}from"./effect-CjnfyxRk.js";import{d as b,i as x,n as S,r as te}from"./create-component-DtmnY_ce.js";import{n as ne,t as re}from"./ghost-icon-jFHi5ewr.js";import{n as ie,t as ae}from"./grip-vertical-icon-2GTr6Sa6.js";import"./proxy-BbkvH48K.js";import{i as oe}from"./use-transform-Decm3Pgf.js";import{n as se}from"./use-drag-controls-ChFkUDGV.js";import{t as ce}from"./react-DhJdH1Jr.js";import{n as le,t as ue}from"./use-value-DpgqT3Bp.js";import{n as de,t as fe}from"./text-b2W5euYI.js";import{n as pe,t as me}from"./separator-BY4pc48O.js";import{n as he,t as C}from"./h-stack-CueUnXBe.js";import{n as ge,t as w}from"./props-table-CLkISL0o.js";var _e,ve,T;function E(){return(E=e((()=>{b(),T=x({base:{item:{"&[data-has-trigger]":{cursor:`default`,userSelect:`none`},cursor:`grab`,flex:`1`,rounded:`l2`,_selected:{boxShadow:`md`,cursor:`grabbing`}},root:{display:`flex`,w:`full`},trigger:{alignItems:`center`,color:`fg.subtle`,cursor:`grab`,display:`flex`,fontSize:`2xl`,justifyContent:`center`,_selected:{cursor:`grabbing`},_disabled:{layerStyle:`disabled`}}},sizes:{sm:{item:{p:`3`},root:{gap:`3`}},md:{item:{p:`4`},root:{gap:`4`}},lg:{item:{p:`6`},root:{gap:`6`}},xl:{item:{p:`8`},root:{gap:`8`}}},variants:{elevated:{item:{bg:`bg.panel`,boxShadow:`md`,_selected:{boxShadow:`lg`}}},outline:{item:{layerStyle:`outline`,bg:`bg`}},panel:{item:{layerStyle:`panel`}},plain:{item:{flex:`inherit`,p:`0px`,rounded:`0px`,_selected:{boxShadow:`unset`}},root:{gap:`0px`}},solid:{item:{layerStyle:`solid`}},subtle:{item:{layerStyle:`subtle`}},surface:{item:{layerStyle:`surface`}}},props:{orientation:{horizontal:{root:{flexDirection:`row`}},vertical:{root:{alignItems:`stretch`,flexDirection:`column`}}}},defaultProps:{size:`md`,variant:`panel`,orientation:`vertical`}})})))()}var D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{ce(),D=t(),l(),h(),o(),p(),u(),y(),s(),O=({children:e,label:t}={})=>k(e??t),k=e=>n(e)||a(e)?JSON.stringify(e):e,[A,j]=g({name:`ReorderContext`}),[M,N]=g({name:`ReorderItemContext`}),P=({ref:e,children:t,item:n,items:r=[],orientation:a=`vertical`,onChange:o,onCompleteChange:s,...c}={})=>{let l=a===`vertical`?`y`:`x`,u=i(t),f=!!u.length,p=(0,D.useMemo)(()=>{let e=f?u.map(({props:e})=>e.value??O(e)):r.map(e=>e.value??O(e)),t=e.filter((e,t,n)=>n.indexOf(e)===t&&t!==n.lastIndexOf(e));return t.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${t.join(`', '`)}' `),Array.from(new Set(e))},[f,u,r]),m=(0,D.useMemo)(()=>Object.fromEntries(u.map(e=>[k(e.props.value)??k(O(e.props)),e])),[u]),h=(0,D.useMemo)(()=>Object.fromEntries(r.map(e=>[k(e.value)??k(O(e)),e])),[r]),g=(0,D.useRef)(p),[_,v]=(0,D.useState)(p),y=(0,D.useRef)(p),b=(0,D.useMemo)(()=>_.map(e=>{if(f)return m[k(e)];{let t=h[k(e)];return t&&n?(0,D.cloneElement)(n,{key:k(t.value),...t}):null}}),[_,f,m,h,n]),x=(0,D.useCallback)(e=>{v(e),o?.(e)},[o]),S=(0,D.useCallback)(()=>{JSON.stringify(y.current)!==JSON.stringify(_)&&(y.current=_,s?.(_))},[s,_]);return ee(()=>{JSON.stringify(p)!==JSON.stringify(g.current)&&(y.current=p,g.current=p,v(p))},[p]),{children:b,orientation:a,values:_,getRootProps:(0,D.useCallback)((t={})=>d({axis:l,values:_},c,t,{ref:e},{onMouseUp:S,onReorder:x,onTouchEnd:S})(),[c,e,S,x,l,_])}},F=({ref:e,label:t,value:n,...i})=>{let{orientation:a}=j(),o=se(),[s,l]=(0,D.useState)(!1),[u,p]=(0,D.useState)(!1),m=oe(0),h=oe(0),g=(0,D.useCallback)(e=>l(!!e),[]);return(0,D.useEffect)(()=>{let e=m.on(`change`,e=>{a===`horizontal`&&p(e!==0)}),t=h.on(`change`,e=>{a===`vertical`&&p(e!==0)});return()=>{e(),t()}},[a,m,h]),{getItemProps:(0,D.useCallback)((a={})=>{let c=a.children??i.children??t;return{...d({"data-has-trigger":r(s),"data-selected":r(u),dragControls:o,dragListener:!s,value:n??O({children:c})},a,i,{ref:e})(),style:{x:m,y:h,...a.style,...i.style},children:c}},[e,i,o,s,n,m,h,u,t]),getTriggerProps:(0,D.useCallback)((e={})=>({...e,ref:f(g,e.ref),"data-selected":r(u),onPointerDown:c(e.onPointerDown,e=>o.start(e))}),[u,o,g])}}})))()}var L,ye,be,R,z,B,V,H;function xe(){return(xe=e((()=>{ce(),te(),_(),ue(),ie(),E(),I(),L=m(),{PropsContext:ye,usePropsContext:be,withContext:R,withProvider:z}=S(`reorder`,T),B=z(({orientation:e,...t})=>{let n=le(e),{children:r,getRootProps:i}=P({...t,item:(0,L.jsx)(V,{}),orientation:n});return(0,L.jsx)(A,{value:{orientation:n},children:(0,L.jsx)(v.ul,{as:_e,...i(),children:r})})},`root`,{transferProps:[`orientation`]})(),V=R(e=>{let{getItemProps:t,getTriggerProps:n}=F(e);return(0,L.jsx)(M,{value:{getTriggerProps:n},children:(0,L.jsx)(v.li,{as:ve,...t()})})},`item`)(),H=R(`div`,`trigger`)(void 0,e=>{let{getTriggerProps:t}=N();return{children:(0,L.jsx)(ae,{}),...t(e)}})})))()}var U,W,Se,G,K,q,J,Y,X,Z,Q,Ce;function $(){return($=e((()=>{U=t(),ge(),xe(),ne(),pe(),he(),de(),W=m(),Se={component:B,title:`Components / Reorder`},G=()=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(B,{children:[(0,W.jsx)(V,{value:`ギニュー`,children:`ギニュー`}),(0,W.jsx)(V,{value:`リクーム`,children:`リクーム`}),(0,W.jsx)(V,{value:`バータ`,children:`バータ`}),(0,W.jsx)(V,{value:`ジース`,children:`ジース`}),(0,W.jsx)(V,{value:`グルド`,children:`グルド`})]}),(0,W.jsx)(me,{}),(0,W.jsxs)(B,{children:[(0,W.jsx)(V,{children:`ギニュー`}),(0,W.jsx)(V,{children:`リクーム`}),(0,W.jsx)(V,{children:`バータ`}),(0,W.jsx)(V,{children:`ジース`}),(0,W.jsx)(V,{children:`グルド`})]})]}),K=()=>{let e=(0,U.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,W.jsx)(B,{items:e})},q=()=>{let e=(0,U.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,W.jsx)(w,{variant:`stack`,rows:[`sm`,`md`,`lg`,`xl`],children:(t,n,r)=>(0,W.jsx)(B,{size:n,items:e},r)})},J=()=>{let e=(0,U.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,W.jsx)(w,{variant:`stack`,rows:[`panel`,`outline`,`solid`,`subtle`,`surface`,`elevated`,`plain`],children:(t,n,r)=>(0,W.jsx)(B,{variant:n,items:e},r)})},Y=()=>{let e=(0,U.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,W.jsx)(w,{variant:`stack`,rows:[`vertical`,`horizontal`],children:(t,n,r)=>(0,W.jsx)(B,{items:e,orientation:n},r)})},X=()=>(0,W.jsxs)(B,{children:[(0,W.jsx)(V,{value:`孫悟空`,children:(0,W.jsxs)(C,{children:[(0,W.jsx)(H,{}),(0,W.jsx)(fe,{children:`孫悟空`})]})}),(0,W.jsx)(V,{value:`ベジータ`,children:(0,W.jsxs)(C,{children:[(0,W.jsx)(H,{children:(0,W.jsx)(re,{})}),(0,W.jsx)(fe,{children:`ベジータ`})]})})]}),Z=()=>(0,W.jsxs)(B,{onChange:e=>console.log(`changed '${e.join(`', '`)}'`),children:[(0,W.jsx)(V,{value:`ギニュー`,children:`ギニュー`}),(0,W.jsx)(V,{value:`リクーム`,children:`リクーム`}),(0,W.jsx)(V,{value:`バータ`,children:`バータ`}),(0,W.jsx)(V,{value:`ジース`,children:`ジース`}),(0,W.jsx)(V,{value:`グルド`,children:`グルド`})]}),Q=()=>(0,W.jsxs)(B,{onCompleteChange:e=>console.log(`completed '${e.join(`', '`)}'`),children:[(0,W.jsx)(V,{value:`ギニュー`,children:`ギニュー`}),(0,W.jsx)(V,{value:`リクーム`,children:`リクーム`}),(0,W.jsx)(V,{value:`バータ`,children:`バータ`}),(0,W.jsx)(V,{value:`ジース`,children:`ジース`}),(0,W.jsx)(V,{value:`グルド`,children:`グルド`})]}),Ce=[`Basic`,`Items`,`Size`,`Variant`,`Orientation`,`Trigger`,`OnChange`,`OnCompleteChange`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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