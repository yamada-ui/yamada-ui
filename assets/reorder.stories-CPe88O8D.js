import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{Cn as r,Dt as i,Gn as a,Ht as o,Sn as s,Zt as c,ct as l,i as u,o as d,ot as f,tr as p,yt as m}from"./props-7EQg-ZC8.js";import{t as h}from"./jsx-runtime-BdxMnOeJ.js";import{E as g,T as _,d as v,f as y}from"./utils-DotE62IT.js";import{i as ee,t as te}from"./effect-CjnfyxRk.js";import{d as b,i as x,n as ne,r as re}from"./create-component-BYXFedxp.js";import{n as ie,t as ae}from"./ghost-icon-BmvpqEbv.js";import{n as oe,t as se}from"./grip-vertical-icon-D7jTuknh.js";import{G as ce,K as le,N as ue,P as de,X as fe,_ as pe,n as me,nt as he,t as ge,tt as _e,v as ve}from"./proxy-BWmEdZIG.js";import{i as S,n as ye,r as be,t as xe}from"./use-transform-CttT4X7G.js";import{n as Se}from"./use-drag-controls-DRgR4Goe.js";import{t as Ce}from"./react-CRCDHYXx.js";import{n as we,t as Te}from"./use-value-DXGlFUEt.js";import{n as Ee,t as De}from"./text-BtxLC071.js";import{n as Oe,t as ke}from"./separator-BCGT-7AL.js";import{n as Ae,t as je}from"./h-stack-C-d6Og3p.js";import{n as Me,t as C}from"./props-table-BpWovw3Y.js";var w,T;function E(){return(E=e((()=>{w=n(),T=(0,w.createContext)(null)})))()}function Ne(e,t,n,r){if(!r)return e;let i=e.findIndex(e=>e.value===t);if(i===-1)return e;let a=r>0?1:-1,o=e[i+a];if(!o)return e;let s=e[i],c=o.layout,l=de(c.min,c.max,.5);return a===1&&s.layout.max+n>l||a===-1&&s.layout.min+n<l?fe(e,i,i+a):e}function Pe(){return(Pe=e((()=>{ue()})))()}function Fe({children:e,as:t=`ul`,axis:n=`y`,onReorder:r,values:i,...a},o){let s=he(()=>me[t]),c=[],l=(0,O.useRef)(!1),u=(0,O.useRef)(null);le(!!i,`Reorder.Group must be provided a values prop`,`reorder-values`);let d={axis:n,groupRef:u,registerItem:(e,t)=>{let r=c.findIndex(t=>e===t.value);r===-1?c.push({value:e,layout:t[n]}):c[r].layout=t[n],c.sort(Ie)},updateOrder:(e,t,n)=>{if(l.current)return;let a=Ne(c,e,t,n);if(c!==a){l.current=!0;let e=[...i];for(let t=0;t<a.length;t++)if(c[t].value!==a[t].value){let n=i.indexOf(c[t].value),r=i.indexOf(a[t].value);n!==-1&&r!==-1&&([e[n],e[r]]=[e[r],e[n]]);break}r(e)}}};(0,O.useEffect)(()=>{l.current=!1});let f=e=>{u.current=e,typeof o==`function`?o(e):o&&(o.current=e)},p={overflowAnchor:`none`,...a.style};return(0,D.jsx)(s,{...a,style:p,ref:f,ignoreStrict:!0,children:(0,D.jsx)(T.Provider,{value:d,children:e})})}function Ie(e,t){return e.layout.min-t.layout.min}var D,O,Le;function Re(){return(Re=e((()=>{D=h(),ce(),O=n(),E(),ge(),_e(),Pe(),Le=(0,O.forwardRef)(Fe)})))()}function ze(){if(N){let e=k(N,`y`);e&&(M.delete(e),j.delete(e));let t=k(N,`x`);t&&t!==e&&(M.delete(t),j.delete(t)),N=null}}function Be(e,t){let n=getComputedStyle(e),r=t===`x`?n.overflowX:n.overflowY,i=e===document.body||e===document.documentElement;return We.has(r)||i}function k(e,t){let n=e?.parentElement;for(;n;){if(Be(n,t))return n;n=n.parentElement}return null}function Ve(e,t,n){let r=t.getBoundingClientRect(),i=n===`x`?Math.max(0,r.left):Math.max(0,r.top),a=n===`x`?Math.min(window.innerWidth,r.right):Math.min(window.innerHeight,r.bottom),o=e-i,s=a-e;if(o<A){let e=1-o/A;return{amount:-25*e*e,edge:`start`}}if(s<A){let e=1-s/A;return{amount:Ue*e*e,edge:`end`}}return{amount:0,edge:null}}function He(e,t,n,r){if(!e)return;N=e;let i=k(e,n);if(!i)return;let{amount:a,edge:o}=Ve(t-(n===`x`?window.scrollX:window.scrollY),i,n);if(o===null){M.delete(i),j.delete(i);return}let s=M.get(i),c=i===document.body||i===document.documentElement;if(s!==o){if(!(o===`start`&&r<0||o===`end`&&r>0))return;M.set(i,o);let e=n===`x`?i.scrollWidth-(c?window.innerWidth:i.clientWidth):i.scrollHeight-(c?window.innerHeight:i.clientHeight);j.set(i,e)}if(a>0){let e=j.get(i);if((n===`x`?c?window.scrollX:i.scrollLeft:c?window.scrollY:i.scrollTop)>=e)return}n===`x`?c?window.scrollBy({left:a}):i.scrollLeft+=a:c?window.scrollBy({top:a}):i.scrollTop+=a}var A,Ue,We,j,M,N;function P(){return(P=e((()=>{A=50,Ue=25,We=new Set([`auto`,`scroll`]),j=new WeakMap,M=new WeakMap,N=null})))()}function Ge(e,t=0){return ve(e)?e:S(t)}function Ke({children:e,style:t={},value:n,as:r=`li`,onDrag:i,onDragEnd:a,layout:o=!0,...s},c){let l=he(()=>me[r]),u=(0,F.useContext)(T),d={x:Ge(t.x),y:Ge(t.y)},f=ye([d.x,d.y],([e,t])=>e||t?1:`unset`);le(!!u,`Reorder.Item must be a child of Reorder.Group`,`reorder-item-child`);let{axis:p,registerItem:m,updateOrder:h,groupRef:g}=u;return(0,qe.jsx)(l,{drag:p,...s,dragSnapToOrigin:!0,style:{...t,x:d.x,y:d.y,zIndex:f},layout:o,onDrag:(e,t)=>{let{velocity:r,point:a}=t,o=d[p].get();h(n,o,r[p]),He(g.current,a[p],p,r[p]),i&&i(e,t)},onDragEnd:(e,t)=>{ze(),a&&a(e,t)},onLayoutMeasure:e=>{m(n,e)},ref:c,ignoreStrict:!0,children:e})}var qe,F,Je;function Ye(){return(Ye=e((()=>{qe=h(),pe(),ce(),F=n(),E(),ge(),_e(),be(),xe(),P(),Je=(0,F.forwardRef)(Ke)})))()}var Xe;function Ze(){return(Ze=e((()=>{b(),Xe=x({base:{item:{"&[data-has-trigger]":{cursor:`default`,userSelect:`none`},cursor:`grab`,flex:`1`,rounded:`l2`,_selected:{boxShadow:`md`,cursor:`grabbing`}},root:{display:`flex`,w:`full`},trigger:{alignItems:`center`,color:`fg.subtle`,cursor:`grab`,display:`flex`,fontSize:`2xl`,justifyContent:`center`,_selected:{cursor:`grabbing`},_disabled:{layerStyle:`disabled`}}},sizes:{sm:{item:{p:`3`},root:{gap:`3`}},md:{item:{p:`4`},root:{gap:`4`}},lg:{item:{p:`6`},root:{gap:`6`}},xl:{item:{p:`8`},root:{gap:`8`}}},variants:{elevated:{item:{bg:`bg.panel`,boxShadow:`md`,_selected:{boxShadow:`lg`}}},outline:{item:{layerStyle:`outline`,bg:`bg`}},panel:{item:{layerStyle:`panel`}},plain:{item:{flex:`inherit`,p:`0px`,rounded:`0px`,_selected:{boxShadow:`unset`}},root:{gap:`0px`}},solid:{item:{layerStyle:`solid`}},subtle:{item:{layerStyle:`subtle`}},surface:{item:{layerStyle:`surface`}}},props:{orientation:{horizontal:{root:{flexDirection:`row`}},vertical:{root:{alignItems:`stretch`,flexDirection:`column`}}}},defaultProps:{size:`md`,variant:`panel`,orientation:`vertical`}})})))()}var I,L,R,Qe,$e,et,tt,nt,rt;function it(){return(it=e((()=>{Ce(),I=n(),u(),g(),c(),r(),f(),te(),m(),L=({children:e,label:t}={})=>R(e??t),R=e=>p(e)||a(e)?JSON.stringify(e):e,[Qe,$e]=_({name:`ReorderContext`}),[et,tt]=_({name:`ReorderItemContext`}),nt=({ref:e,children:t,item:n,items:r=[],orientation:a=`vertical`,onChange:o,onCompleteChange:s,...c}={})=>{let l=a===`vertical`?`y`:`x`,u=i(t),f=!!u.length,p=(0,I.useMemo)(()=>{let e=f?u.map(({props:e})=>e.value??L(e)):r.map(e=>e.value??L(e)),t=e.filter((e,t,n)=>n.indexOf(e)===t&&t!==n.lastIndexOf(e));return t.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${t.join(`', '`)}' `),Array.from(new Set(e))},[f,u,r]),m=(0,I.useMemo)(()=>Object.fromEntries(u.map(e=>[R(e.props.value)??R(L(e.props)),e])),[u]),h=(0,I.useMemo)(()=>Object.fromEntries(r.map(e=>[R(e.value)??R(L(e)),e])),[r]),g=(0,I.useRef)(p),[_,v]=(0,I.useState)(p),y=(0,I.useRef)(p),te=(0,I.useMemo)(()=>_.map(e=>{if(f)return m[R(e)];{let t=h[R(e)];return t&&n?(0,I.cloneElement)(n,{key:R(t.value),...t}):null}}),[_,f,m,h,n]),b=(0,I.useCallback)(e=>{v(e),o?.(e)},[o]),x=(0,I.useCallback)(()=>{JSON.stringify(y.current)!==JSON.stringify(_)&&(y.current=_,s?.(_))},[s,_]);return ee(()=>{JSON.stringify(p)!==JSON.stringify(g.current)&&(y.current=p,g.current=p,v(p))},[p]),{children:te,orientation:a,values:_,getRootProps:(0,I.useCallback)((t={})=>d({axis:l,values:_},c,t,{ref:e},{onMouseUp:x,onReorder:b,onTouchEnd:x})(),[c,e,x,b,l,_])}},rt=({ref:e,label:t,value:n,...r})=>{let{orientation:i}=$e(),a=Se(),[c,u]=(0,I.useState)(!1),[f,p]=(0,I.useState)(!1),m=S(0),h=S(0),g=(0,I.useCallback)(e=>u(!!e),[]);return(0,I.useEffect)(()=>{let e=m.on(`change`,e=>{i===`horizontal`&&p(e!==0)}),t=h.on(`change`,e=>{i===`vertical`&&p(e!==0)});return()=>{e(),t()}},[i,m,h]),{getItemProps:(0,I.useCallback)((i={})=>{let s=i.children??r.children??t;return{...d({"data-has-trigger":o(c),"data-selected":o(f),dragControls:a,dragListener:!c,value:n??L({children:s})},i,r,{ref:e})(),style:{x:m,y:h,...i.style,...r.style},children:s}},[e,r,a,c,n,m,h,f,t]),getTriggerProps:(0,I.useCallback)((e={})=>({...e,ref:l(g,e.ref),"data-selected":o(f),onPointerDown:s(e.onPointerDown,e=>a.start(e))}),[f,a,g])}}})))()}var z,at,ot,B,st,V,H,U;function ct(){return(ct=e((()=>{Ce(),re(),v(),Te(),oe(),Ze(),it(),z=h(),{PropsContext:at,usePropsContext:ot,withContext:B,withProvider:st}=ne(`reorder`,Xe),V=st(({orientation:e,...t})=>{let n=we(e),{children:r,getRootProps:i}=nt({...t,item:(0,z.jsx)(H,{}),orientation:n});return(0,z.jsx)(Qe,{value:{orientation:n},children:(0,z.jsx)(y.ul,{as:Le,...i(),children:r})})},`root`,{transferProps:[`orientation`]})(),H=B(e=>{let{getItemProps:t,getTriggerProps:n}=rt(e);return(0,z.jsx)(et,{value:{getTriggerProps:n},children:(0,z.jsx)(y.li,{as:Je,...t()})})},`item`)(),U=B(`div`,`trigger`)(void 0,e=>{let{getTriggerProps:t}=tt();return{children:(0,z.jsx)(se,{}),...t(e)}})})))()}var lt=t({Basic:()=>K,Items:()=>q,OnChange:()=>Q,OnCompleteChange:()=>$,Orientation:()=>X,Size:()=>J,Trigger:()=>Z,Variant:()=>Y,__namedExportsOrder:()=>dt,default:()=>ut}),W,G,ut,K,q,J,Y,X,Z,Q,$,dt;function ft(){return(ft=e((()=>{W=n(),Me(),ct(),ie(),Oe(),Ae(),Ee(),G=h(),ut={component:V,title:`Components / Reorder`},K=()=>(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(V,{children:[(0,G.jsx)(H,{value:`ギニュー`,children:`ギニュー`}),(0,G.jsx)(H,{value:`リクーム`,children:`リクーム`}),(0,G.jsx)(H,{value:`バータ`,children:`バータ`}),(0,G.jsx)(H,{value:`ジース`,children:`ジース`}),(0,G.jsx)(H,{value:`グルド`,children:`グルド`})]}),(0,G.jsx)(ke,{}),(0,G.jsxs)(V,{children:[(0,G.jsx)(H,{children:`ギニュー`}),(0,G.jsx)(H,{children:`リクーム`}),(0,G.jsx)(H,{children:`バータ`}),(0,G.jsx)(H,{children:`ジース`}),(0,G.jsx)(H,{children:`グルド`})]})]}),q=()=>{let e=(0,W.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,G.jsx)(V,{items:e})},J=()=>{let e=(0,W.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,G.jsx)(C,{variant:`stack`,rows:[`sm`,`md`,`lg`,`xl`],children:(t,n,r)=>(0,G.jsx)(V,{size:n,items:e},r)})},Y=()=>{let e=(0,W.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,G.jsx)(C,{variant:`stack`,rows:[`panel`,`outline`,`solid`,`subtle`,`surface`,`elevated`,`plain`],children:(t,n,r)=>(0,G.jsx)(V,{variant:n,items:e},r)})},X=()=>{let e=(0,W.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,G.jsx)(C,{variant:`stack`,rows:[`vertical`,`horizontal`],children:(t,n,r)=>(0,G.jsx)(V,{items:e,orientation:n},r)})},Z=()=>(0,G.jsxs)(V,{children:[(0,G.jsx)(H,{value:`孫悟空`,children:(0,G.jsxs)(je,{children:[(0,G.jsx)(U,{}),(0,G.jsx)(De,{children:`孫悟空`})]})}),(0,G.jsx)(H,{value:`ベジータ`,children:(0,G.jsxs)(je,{children:[(0,G.jsx)(U,{children:(0,G.jsx)(ae,{})}),(0,G.jsx)(De,{children:`ベジータ`})]})})]}),Q=()=>(0,G.jsxs)(V,{onChange:e=>console.log(`changed '${e.join(`', '`)}'`),children:[(0,G.jsx)(H,{value:`ギニュー`,children:`ギニュー`}),(0,G.jsx)(H,{value:`リクーム`,children:`リクーム`}),(0,G.jsx)(H,{value:`バータ`,children:`バータ`}),(0,G.jsx)(H,{value:`ジース`,children:`ジース`}),(0,G.jsx)(H,{value:`グルド`,children:`グルド`})]}),$=()=>(0,G.jsxs)(V,{onCompleteChange:e=>console.log(`completed '${e.join(`', '`)}'`),children:[(0,G.jsx)(H,{value:`ギニュー`,children:`ギニュー`}),(0,G.jsx)(H,{value:`リクーム`,children:`リクーム`}),(0,G.jsx)(H,{value:`バータ`,children:`バータ`}),(0,G.jsx)(H,{value:`ジース`,children:`ジース`}),(0,G.jsx)(H,{value:`グルド`,children:`グルド`})]}),dt=[`Basic`,`Items`,`Size`,`Variant`,`Orientation`,`Trigger`,`OnChange`,`OnCompleteChange`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
  return <ReorderRoot items={items} />;
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
  return <PropsTable variant="stack" rows={["sm", "md", "lg", "xl"]}>
      {(_, row, key) => <ReorderRoot key={key} size={row} items={items} />}
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
  return <PropsTable variant="stack" rows={["panel", "outline", "solid", "subtle", "surface", "elevated", "plain"]}>
      {(_, row, key) => <ReorderRoot key={key} variant={row} items={items} />}
    </PropsTable>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onChange={values => console.log(\`changed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onCompleteChange={values => console.log(\`completed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...$.parameters?.docs?.source}}}})))()}export{Re as i,lt as n,Ye as r,ft as t};