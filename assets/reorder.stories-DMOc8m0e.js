import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{Dn as r,En as i,Kt as a,Yn as o,ar as s,i as c,jt as l,lt as u,o as d,st as f,tn as p,xt as m}from"./props-sAZv67b_.js";import{t as h}from"./jsx-runtime-BdxMnOeJ.js";import{E as g,T as _,d as v,f as y}from"./utils-DU-a_DAF.js";import{i as ee,t as b}from"./effect-DSHKlzEK.js";import{d as te,i as x,n as S,r as ne}from"./create-component-DQMvd0DD.js";import{n as re,t as ie}from"./ghost-icon-8bOfyvWo.js";import{n as ae,t as oe}from"./grip-vertical-icon-fY5DJJlB.js";import{G as se,K as ce,N as le,P as ue,X as de,_ as fe,n as pe,nt as me,t as he,tt as ge,v as _e}from"./proxy-Bb5cK8yE.js";import{i as C,n as ve,r as ye,t as be}from"./use-transform-BgrYf9bP.js";import{n as xe}from"./use-drag-controls-BIO9eb4I.js";import{t as Se}from"./react-CF1xLFhS.js";import{n as Ce,t as we}from"./use-value-BrbCLF9e.js";import{n as Te,t as Ee}from"./text-iKFupaae.js";import{n as De,t as Oe}from"./separator-BpYRCmLX.js";import{n as ke,t as Ae}from"./h-stack-UPIjmWkk.js";import{n as je,t as w}from"./props-table-4oG1zn7C.js";var Me,T;function E(){return(E=e((()=>{Me=n(),T=(0,Me.createContext)(null)})))()}function Ne(e,t,n,r){if(!r)return e;let i=e.findIndex(e=>e.value===t);if(i===-1)return e;let a=r>0?1:-1,o=e[i+a];if(!o)return e;let s=e[i],c=o.layout,l=ue(c.min,c.max,.5);return a===1&&s.layout.max+n>l||a===-1&&s.layout.min+n<l?de(e,i,i+a):e}function Pe(){return(Pe=e((()=>{le()})))()}function Fe({children:e,as:t=`ul`,axis:n=`y`,onReorder:r,values:i,...a},o){let s=me(()=>pe[t]),c=[],l=(0,O.useRef)(!1),u=(0,O.useRef)(null);ce(!!i,`Reorder.Group must be provided a values prop`,`reorder-values`);let d={axis:n,groupRef:u,registerItem:(e,t)=>{let r=c.findIndex(t=>e===t.value);r===-1?c.push({value:e,layout:t[n]}):c[r].layout=t[n],c.sort(Ie)},updateOrder:(e,t,n)=>{if(l.current)return;let a=Ne(c,e,t,n);if(c!==a){l.current=!0;let e=[...i];for(let t=0;t<a.length;t++)if(c[t].value!==a[t].value){let n=i.indexOf(c[t].value),r=i.indexOf(a[t].value);n!==-1&&r!==-1&&([e[n],e[r]]=[e[r],e[n]]);break}r(e)}}};(0,O.useEffect)(()=>{l.current=!1});let f=e=>{u.current=e,typeof o==`function`?o(e):o&&(o.current=e)},p={overflowAnchor:`none`,...a.style};return(0,D.jsx)(s,{...a,style:p,ref:f,ignoreStrict:!0,children:(0,D.jsx)(T.Provider,{value:d,children:e})})}function Ie(e,t){return e.layout.min-t.layout.min}var D,O,Le;function Re(){return(Re=e((()=>{D=h(),se(),O=n(),E(),he(),ge(),Pe(),Le=(0,O.forwardRef)(Fe)})))()}function ze(){if(N){let e=k(N,`y`);e&&(M.delete(e),j.delete(e));let t=k(N,`x`);t&&t!==e&&(M.delete(t),j.delete(t)),N=null}}function Be(e,t){let n=getComputedStyle(e),r=t===`x`?n.overflowX:n.overflowY,i=e===document.body||e===document.documentElement;return We.has(r)||i}function k(e,t){let n=e?.parentElement;for(;n;){if(Be(n,t))return n;n=n.parentElement}return null}function Ve(e,t,n){let r=t.getBoundingClientRect(),i=n===`x`?Math.max(0,r.left):Math.max(0,r.top),a=n===`x`?Math.min(window.innerWidth,r.right):Math.min(window.innerHeight,r.bottom),o=e-i,s=a-e;if(o<A){let e=1-o/A;return{amount:-25*e*e,edge:`start`}}if(s<A){let e=1-s/A;return{amount:Ue*e*e,edge:`end`}}return{amount:0,edge:null}}function He(e,t,n,r){if(!e)return;N=e;let i=k(e,n);if(!i)return;let{amount:a,edge:o}=Ve(t-(n===`x`?window.scrollX:window.scrollY),i,n);if(o===null){M.delete(i),j.delete(i);return}let s=M.get(i),c=i===document.body||i===document.documentElement;if(s!==o){if(!(o===`start`&&r<0||o===`end`&&r>0))return;M.set(i,o);let e=n===`x`?i.scrollWidth-(c?window.innerWidth:i.clientWidth):i.scrollHeight-(c?window.innerHeight:i.clientHeight);j.set(i,e)}if(a>0){let e=j.get(i);if((n===`x`?c?window.scrollX:i.scrollLeft:c?window.scrollY:i.scrollTop)>=e)return}n===`x`?c?window.scrollBy({left:a}):i.scrollLeft+=a:c?window.scrollBy({top:a}):i.scrollTop+=a}var A,Ue,We,j,M,N;function P(){return(P=e((()=>{A=50,Ue=25,We=new Set([`auto`,`scroll`]),j=new WeakMap,M=new WeakMap,N=null})))()}function Ge(e,t=0){return _e(e)?e:C(t)}function Ke({children:e,style:t={},value:n,as:r=`li`,onDrag:i,onDragEnd:a,layout:o=!0,...s},c){let l=me(()=>pe[r]),u=(0,F.useContext)(T),d={x:Ge(t.x),y:Ge(t.y)},f=ve([d.x,d.y],([e,t])=>e||t?1:`unset`);ce(!!u,`Reorder.Item must be a child of Reorder.Group`,`reorder-item-child`);let{axis:p,registerItem:m,updateOrder:h,groupRef:g}=u;return(0,qe.jsx)(l,{drag:p,...s,dragSnapToOrigin:!0,style:{...t,x:d.x,y:d.y,zIndex:f},layout:o,onDrag:(e,t)=>{let{velocity:r,point:a}=t,o=d[p].get();h(n,o,r[p]),He(g.current,a[p],p,r[p]),i&&i(e,t)},onDragEnd:(e,t)=>{ze(),a&&a(e,t)},onLayoutMeasure:e=>{m(n,e)},ref:c,ignoreStrict:!0,children:e})}var qe,F,Je;function Ye(){return(Ye=e((()=>{qe=h(),fe(),se(),F=n(),E(),he(),ge(),ye(),be(),P(),Je=(0,F.forwardRef)(Ke)})))()}var Xe;function Ze(){return(Ze=e((()=>{te(),Xe=x({base:{item:{"&[data-has-trigger]":{cursor:`default`,userSelect:`none`},cursor:`grab`,flex:`1`,rounded:`l2`,_selected:{boxShadow:`md`,cursor:`grabbing`}},root:{display:`flex`,w:`full`},trigger:{alignItems:`center`,color:`fg.subtle`,cursor:`grab`,display:`flex`,fontSize:`2xl`,justifyContent:`center`,_selected:{cursor:`grabbing`},_disabled:{layerStyle:`disabled`}}},sizes:{sm:{item:{p:`3`},root:{gap:`3`}},md:{item:{p:`4`},root:{gap:`4`}},lg:{item:{p:`6`},root:{gap:`6`}},xl:{item:{p:`8`},root:{gap:`8`}}},variants:{elevated:{item:{bg:`bg.panel`,boxShadow:`md`,_selected:{boxShadow:`lg`}}},outline:{item:{layerStyle:`outline`,bg:`bg`}},panel:{item:{layerStyle:`panel`}},plain:{item:{flex:`inherit`,p:`0px`,rounded:`0px`,_selected:{boxShadow:`unset`}},root:{gap:`0px`}},solid:{item:{layerStyle:`solid`}},subtle:{item:{layerStyle:`subtle`}},surface:{item:{layerStyle:`surface`}}},props:{orientation:{horizontal:{root:{flexDirection:`row`}},vertical:{root:{alignItems:`stretch`,flexDirection:`column`}}}},defaultProps:{size:`md`,variant:`panel`,orientation:`vertical`}})})))()}var I,L,R,Qe,$e,et,tt,nt,rt;function it(){return(it=e((()=>{Se(),I=n(),c(),g(),p(),r(),f(),b(),m(),L=({children:e,label:t}={})=>R(e??t),R=e=>s(e)||o(e)?JSON.stringify(e):e,[Qe,$e]=_({name:`ReorderContext`}),[et,tt]=_({name:`ReorderItemContext`}),nt=({ref:e,children:t,item:n,items:r=[],orientation:i=`vertical`,onChange:a,onCompleteChange:o,...s}={})=>{let c=i===`vertical`?`y`:`x`,u=l(t),[f]=l(n),p=!!u.length,m=(0,I.useMemo)(()=>{let e=p?u.map(({props:e})=>e.value??L(e)):r.map(e=>e.value??L(e)),t=e.filter((e,t,n)=>n.indexOf(e)===t&&t!==n.lastIndexOf(e));return t.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${t.join(`', '`)}' `),Array.from(new Set(e))},[p,u,r]),h=(0,I.useMemo)(()=>Object.fromEntries(u.map(e=>[R(e.props.value)??R(L(e.props)),e])),[u]),g=(0,I.useMemo)(()=>Object.fromEntries(r.map(e=>[R(e.value)??R(L(e)),e])),[r]),_=(0,I.useRef)(m),[v,y]=(0,I.useState)(m),b=(0,I.useRef)(m),te=(0,I.useMemo)(()=>v.map(e=>{if(p)return h[R(e)];{let t=g[R(e)];return t&&f?(0,I.cloneElement)(f,{key:R(t.value),...t}):null}}),[v,p,h,g,f]),x=(0,I.useCallback)(e=>{y(e),a?.(e)},[a]),S=(0,I.useCallback)(()=>{JSON.stringify(b.current)!==JSON.stringify(v)&&(b.current=v,o?.(v))},[o,v]);return ee(()=>{JSON.stringify(m)!==JSON.stringify(_.current)&&(b.current=m,_.current=m,y(m))},[m]),{children:te,orientation:i,values:v,getRootProps:(0,I.useCallback)((t={})=>d({axis:c,values:v},s,t,{ref:e},{onMouseUp:S,onReorder:x,onTouchEnd:S})(),[s,e,S,x,c,v])}},rt=({ref:e,label:t,value:n,...r})=>{let{orientation:o}=$e(),s=xe(),[c,l]=(0,I.useState)(!1),[f,p]=(0,I.useState)(!1),m=C(0),h=C(0),g=(0,I.useCallback)(e=>l(!!e),[]);return(0,I.useEffect)(()=>{let e=m.on(`change`,e=>{o===`horizontal`&&p(e!==0)}),t=h.on(`change`,e=>{o===`vertical`&&p(e!==0)});return()=>{e(),t()}},[o,m,h]),{getItemProps:(0,I.useCallback)((i={})=>{let o=i.children??r.children??t;return{...d({"data-has-trigger":a(c),"data-selected":a(f),dragControls:s,dragListener:!c,value:n??L({children:o})},i,r,{ref:e})(),style:{x:m,y:h,...i.style,...r.style},children:o}},[e,r,s,c,n,m,h,f,t]),getTriggerProps:(0,I.useCallback)((e={})=>({...e,ref:u(g,e.ref),"data-selected":a(f),onPointerDown:i(e.onPointerDown,e=>s.start(e))}),[f,s,g])}}})))()}var z,at,ot,B,st,V,H,U;function ct(){return(ct=e((()=>{Se(),ne(),v(),we(),ae(),Ze(),it(),z=h(),{PropsContext:at,usePropsContext:ot,withContext:B,withProvider:st}=S(`reorder`,Xe),V=st(({orientation:e,...t})=>{let n=Ce(e),{children:r,getRootProps:i}=nt({...t,item:(0,z.jsx)(H,{}),orientation:n});return(0,z.jsx)(Qe,{value:{orientation:n},children:(0,z.jsx)(y.ul,{as:Le,...i(),children:r})})},`root`,{transferProps:[`orientation`]})(),H=B(e=>{let{getItemProps:t,getTriggerProps:n}=rt(e);return(0,z.jsx)(et,{value:{getTriggerProps:n},children:(0,z.jsx)(y.li,{as:Je,...t()})})},`item`)(),U=B(`div`,`trigger`)(void 0,e=>{let{getTriggerProps:t}=tt();return{children:(0,z.jsx)(oe,{}),...t(e)}})})))()}var lt=t({Basic:()=>K,Items:()=>q,OnChange:()=>Q,OnCompleteChange:()=>$,Orientation:()=>X,Size:()=>J,Trigger:()=>Z,Variant:()=>Y,__namedExportsOrder:()=>dt,default:()=>ut}),W,G,ut,K,q,J,Y,X,Z,Q,$,dt;function ft(){return(ft=e((()=>{W=n(),je(),ct(),re(),De(),ke(),Te(),G=h(),ut={component:V,title:`Components / Reorder`},K=()=>(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(V,{children:[(0,G.jsx)(H,{value:`ギニュー`,children:`ギニュー`}),(0,G.jsx)(H,{value:`リクーム`,children:`リクーム`}),(0,G.jsx)(H,{value:`バータ`,children:`バータ`}),(0,G.jsx)(H,{value:`ジース`,children:`ジース`}),(0,G.jsx)(H,{value:`グルド`,children:`グルド`})]}),(0,G.jsx)(Oe,{}),(0,G.jsxs)(V,{children:[(0,G.jsx)(H,{children:`ギニュー`}),(0,G.jsx)(H,{children:`リクーム`}),(0,G.jsx)(H,{children:`バータ`}),(0,G.jsx)(H,{children:`ジース`}),(0,G.jsx)(H,{children:`グルド`})]})]}),q=()=>{let e=(0,W.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,G.jsx)(V,{items:e})},J=()=>{let e=(0,W.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,G.jsx)(w,{variant:`stack`,rows:[`sm`,`md`,`lg`,`xl`],children:(t,n,r)=>(0,G.jsx)(V,{size:n,items:e},r)})},Y=()=>{let e=(0,W.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,G.jsx)(w,{variant:`stack`,rows:[`panel`,`outline`,`solid`,`subtle`,`surface`,`elevated`,`plain`],children:(t,n,r)=>(0,G.jsx)(V,{variant:n,items:e},r)})},X=()=>{let e=(0,W.useMemo)(()=>[{label:`ギニュー`,value:`ギニュー`},{label:`リクーム`,value:`リクーム`},{label:`バータ`,value:`バータ`},{label:`ジース`,value:`ジース`},{label:`グルド`,value:`グルド`}],[]);return(0,G.jsx)(w,{variant:`stack`,rows:[`vertical`,`horizontal`],children:(t,n,r)=>(0,G.jsx)(V,{items:e,orientation:n},r)})},Z=()=>(0,G.jsxs)(V,{children:[(0,G.jsx)(H,{value:`孫悟空`,children:(0,G.jsxs)(Ae,{children:[(0,G.jsx)(U,{}),(0,G.jsx)(Ee,{children:`孫悟空`})]})}),(0,G.jsx)(H,{value:`ベジータ`,children:(0,G.jsxs)(Ae,{children:[(0,G.jsx)(U,{children:(0,G.jsx)(ie,{})}),(0,G.jsx)(Ee,{children:`ベジータ`})]})})]}),Q=()=>(0,G.jsxs)(V,{onChange:e=>console.log(`changed '${e.join(`', '`)}'`),children:[(0,G.jsx)(H,{value:`ギニュー`,children:`ギニュー`}),(0,G.jsx)(H,{value:`リクーム`,children:`リクーム`}),(0,G.jsx)(H,{value:`バータ`,children:`バータ`}),(0,G.jsx)(H,{value:`ジース`,children:`ジース`}),(0,G.jsx)(H,{value:`グルド`,children:`グルド`})]}),$=()=>(0,G.jsxs)(V,{onCompleteChange:e=>console.log(`completed '${e.join(`', '`)}'`),children:[(0,G.jsx)(H,{value:`ギニュー`,children:`ギニュー`}),(0,G.jsx)(H,{value:`リクーム`,children:`リクーム`}),(0,G.jsx)(H,{value:`バータ`,children:`バータ`}),(0,G.jsx)(H,{value:`ジース`,children:`ジース`}),(0,G.jsx)(H,{value:`グルド`,children:`グルド`})]}),dt=[`Basic`,`Items`,`Size`,`Variant`,`Orientation`,`Trigger`,`OnChange`,`OnCompleteChange`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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