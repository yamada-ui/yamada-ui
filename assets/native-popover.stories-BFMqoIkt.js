import{ax as Ve,r as n,a2 as Xe,h as Ye,m as G,e as Ze,b as $e,f as U,j as e,s as eo,L as oo,l as ro,W as to,Q as a,T as no,P as ao}from"./iframe-DUA3oqMy.js";import{P as so}from"./props-table-Cj5B83mD.js";import{H as io}from"./h-stack-D3FXFbV1.js";import{F as vo}from"./for-B0PAANOF.js";import{a as po,n as co}from"./index-DcMOQm89.js";import"./preload-helper-C1FmrZbK.js";import"./grid-BjdtNp2g.js";import"./grid-item-BYxt1f2b.js";import"./flex-BtD-iYsF.js";import"./heading-Bp7J583J.js";const lo=({autoUpdate:o,disabled:r=!1,elements:P,flip:O,gutter:m,matchWidth:j,middleware:C,offset:B,placement:y="end",platform:T,popover:N="auto",popoverTarget:H,popoverTargetAction:k="toggle",preventOverflow:fe,strategy:Se,transform:Ae,updateRef:Fe,whileElementsMounted:we}={})=>{const{getDocument:z}=Ve(),h=n.useId(),x=n.useId(),Ie=n.useId(),u=H??Ie,L=n.useRef(null),Me=n.useRef(null),De=n.useRef(null),{refs:R,update:Ee,getPopperProps:Q}=po({autoUpdate:o,elements:P,flip:O,gutter:m,matchWidth:j,middleware:C,offset:B,placement:y,platform:T,preventOverflow:fe,strategy:Se,transform:Ae,whileElementsMounted:we});Xe(Fe,Ee);const q=n.useCallback(t=>{r&&(t.preventDefault(),t.stopPropagation())},[r]),We=n.useCallback(({ref:t,...g}={})=>({type:"button","aria-controls":u,"aria-disabled":Ze(r),"aria-haspopup":"dialog",popoverTarget:u,popoverTargetAction:k,role:"button",...g,ref:G(t,Me,_=>{L.current==null&&R.setReference(_)}),onClick:Ye(g.onClick,q)}),[u,r,q,k,R]),Oe=n.useCallback(({ref:t,...g}={})=>({...g,ref:G(t,L,R.setReference)}),[R.setReference]),ze=n.useCallback(Q,[Q]),_e=n.useCallback(({ref:t,"aria-describedby":g,"aria-labelledby":_,...Je}={})=>{var J,K;const Ke=!!((J=z())!=null&&J.getElementById(h)),Ue=!!((K=z())!=null&&K.getElementById(x));return{id:u,"aria-describedby":U(g,Ue?x:void 0),"aria-labelledby":U(_,Ke?h:void 0),"data-popup":$e(!0),popover:N===!0?"":N,role:"dialog",tabIndex:-1,...Je,ref:G(t,De)}},[z,h,x,u,N]),Ge=n.useCallback(t=>({id:h,...t}),[h]),Le=n.useCallback(t=>({id:x,...t}),[x]),Qe=n.useCallback(t=>({...t}),[]),qe=n.useCallback((t={})=>({popoverTarget:u,popoverTargetAction:"hide",...t}),[u]);return{getAnchorProps:Oe,getBodyProps:Le,getCloseTriggerProps:qe,getContentProps:_e,getFooterProps:Qe,getHeaderProps:Ge,getPositionerProps:ze,getTriggerProps:We}},{ComponentContext:Po,StyleContext:uo,useComponentContext:d,withContext:l,useRootComponentProps:No}=ro("native-popover",co),s=o=>{const[r,{children:P,...O}]=No(o),{getAnchorProps:m,getBodyProps:j,getCloseTriggerProps:C,getContentProps:B,getFooterProps:y,getHeaderProps:T,getPositionerProps:N,getTriggerProps:H}=lo(O),k=n.useMemo(()=>({getAnchorProps:m,getBodyProps:j,getCloseTriggerProps:C,getContentProps:B,getFooterProps:y,getHeaderProps:T,getPositionerProps:N,getTriggerProps:H}),[m,j,C,B,y,T,N,H]);return e.jsx(uo,{value:r,children:e.jsx(Po,{value:k,children:P})})},i=l("button","trigger")({asChild:!0},o=>{const{getTriggerProps:r}=d();return r(o)}),go=l("div","anchor")({asChild:!0},o=>{const{getAnchorProps:r}=d();return r(o)}),ho=l("div","positioner")({asChild:!0},o=>{const{getPositionerProps:r}=d();return r(o)}),xo=l("button",{name:"CloseTrigger",slot:["trigger","close"]})({asChild:!0},o=>{const{getCloseTriggerProps:r}=d();return r(o)}),v=l(({children:o,...r})=>{const{getContentProps:P}=d();return e.jsx(ho,{children:e.jsx(eo.div,{...P(oo(r)),children:o})})},"content")({suppressHydrationWarning:!0}),p=l("div","header")(void 0,o=>{const{getHeaderProps:r}=d();return r(o)}),c=l("div","body")(void 0,o=>{const{getBodyProps:r}=d();return r(o)}),be=l("div","footer")(void 0,o=>{const{getFooterProps:r}=d();return r(o)}),fo={component:s,parameters:{layout:"centered"},title:"Components / NativePopover"},b=()=>e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]}),f=()=>e.jsx(so,{variant:"stack",rows:["xs","sm","md","lg"],children:(o,r,P)=>e.jsxs(s,{size:r,children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]},P)}),S=()=>e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"}),e.jsx(be,{children:"第280話"})]})]}),A=()=>e.jsxs(s,{children:[e.jsxs(io,{children:[e.jsx(go,{children:e.jsx(to,{borderWidth:"1px",h:"10",px:"3",rounded:"l2",textWrap:"nowrap",children:"Display Popover Here"})}),e.jsx(i,{children:e.jsx(a,{children:"Click me"})})]}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]}),F=()=>e.jsx(vo,{each:["start","start-start","start-end","start-center","end","end-start","end-end","end-center","center-start","center-end"],children:o=>e.jsxs(s,{placement:o,children:[e.jsx(i,{children:e.jsxs(a,{children:['Open "',ao(o),'" Popover']})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]},o)}),w=()=>e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsxs(c,{children:[e.jsx(no,{children:"がんばれカカロット……お前がナンバー１だ！！"}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]})]})]})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{popover:"auto",children:[e.jsx(i,{children:e.jsx(a,{children:"Auto (default)"})}),e.jsxs(v,{children:[e.jsx(p,{children:"Auto Popover"}),e.jsx(c,{children:"Auto popover closes automatically when clicking outside or opening another popover."})]})]}),e.jsxs(s,{popover:"hint",children:[e.jsx(i,{children:e.jsx(a,{children:"Hint"})}),e.jsxs(v,{children:[e.jsx(p,{children:"Hint Popover"}),e.jsx(c,{children:"Hint popover does not close auto popovers when displayed, but closes other hint popovers."})]})]}),e.jsxs(s,{popover:"manual",children:[e.jsx(i,{children:e.jsx(a,{children:"Manual"})}),e.jsxs(v,{children:[e.jsx(p,{children:"Manual Popover"}),e.jsx(c,{children:"Manual popover must be explicitly closed with the trigger button."})]})]})]}),M=()=>e.jsxs(s,{offset:[16,16],children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]}),D=()=>e.jsxs(s,{gutter:32,children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]}),E=()=>e.jsxs(s,{disabled:!0,children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]}),W=()=>e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"}),e.jsx(be,{children:e.jsx(xo,{children:e.jsx(a,{children:"Close"})})})]})]});var V,X,Y;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <NativePopover.Root>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
      </NativePopover.Content>
    </NativePopover.Root>;
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg"]}>
      {(_, row, key) => <NativePopover.Root key={key} size={row}>
          <NativePopover.Trigger>
            <Button>Click me</Button>
          </NativePopover.Trigger>

          <NativePopover.Content>
            <NativePopover.Header>ベジータ!</NativePopover.Header>
            <NativePopover.Body>
              がんばれカカロット……お前がナンバー１だ！！
            </NativePopover.Body>
          </NativePopover.Content>
        </NativePopover.Root>}
    </PropsTable>;
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var oe,re,te;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <NativePopover.Root>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
        <NativePopover.Footer>第280話</NativePopover.Footer>
      </NativePopover.Content>
    </NativePopover.Root>;
}`,...(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,ae,se;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <NativePopover.Root>
      <HStack>
        <NativePopover.Anchor>
          <Center borderWidth="1px" h="10" px="3" rounded="l2" textWrap="nowrap">
            Display Popover Here
          </Center>
        </NativePopover.Anchor>

        <NativePopover.Trigger>
          <Button>Click me</Button>
        </NativePopover.Trigger>
      </HStack>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
      </NativePopover.Content>
    </NativePopover.Root>;
}`,...(se=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,ve,pe;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <For each={["start", "start-start", "start-end", "start-center", "end", "end-start", "end-end", "end-center", "center-start", "center-end"] as const}>
      {placement => <NativePopover.Root key={placement} placement={placement}>
          <NativePopover.Trigger>
            <Button>Open "{toTitleCase(placement)}" Popover</Button>
          </NativePopover.Trigger>

          <NativePopover.Content>
            <NativePopover.Header>ベジータ!</NativePopover.Header>
            <NativePopover.Body>
              がんばれカカロット……お前がナンバー１だ！！
            </NativePopover.Body>
          </NativePopover.Content>
        </NativePopover.Root>}
    </For>;
}`,...(pe=(ve=F.parameters)==null?void 0:ve.docs)==null?void 0:pe.source}}};var ce,de,le;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <NativePopover.Root>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          <Text>がんばれカカロット……お前がナンバー１だ！！</Text>

          <NativePopover.Root>
            <NativePopover.Trigger>
              <Button>Click me</Button>
            </NativePopover.Trigger>

            <NativePopover.Content>
              <NativePopover.Header>ベジータ!</NativePopover.Header>
              <NativePopover.Body>
                がんばれカカロット……お前がナンバー１だ！！
              </NativePopover.Body>
            </NativePopover.Content>
          </NativePopover.Root>
        </NativePopover.Body>
      </NativePopover.Content>
    </NativePopover.Root>;
}`,...(le=(de=w.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var Pe,ue,Ne;I.parameters={...I.parameters,docs:{...(Pe=I.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <>
      <NativePopover.Root popover="auto">
        <NativePopover.Trigger>
          <Button>Auto (default)</Button>
        </NativePopover.Trigger>

        <NativePopover.Content>
          <NativePopover.Header>Auto Popover</NativePopover.Header>
          <NativePopover.Body>
            Auto popover closes automatically when clicking outside or opening
            another popover.
          </NativePopover.Body>
        </NativePopover.Content>
      </NativePopover.Root>

      <NativePopover.Root popover="hint">
        <NativePopover.Trigger>
          <Button>Hint</Button>
        </NativePopover.Trigger>

        <NativePopover.Content>
          <NativePopover.Header>Hint Popover</NativePopover.Header>
          <NativePopover.Body>
            Hint popover does not close auto popovers when displayed, but closes
            other hint popovers.
          </NativePopover.Body>
        </NativePopover.Content>
      </NativePopover.Root>

      <NativePopover.Root popover="manual">
        <NativePopover.Trigger>
          <Button>Manual</Button>
        </NativePopover.Trigger>

        <NativePopover.Content>
          <NativePopover.Header>Manual Popover</NativePopover.Header>
          <NativePopover.Body>
            Manual popover must be explicitly closed with the trigger button.
          </NativePopover.Body>
        </NativePopover.Content>
      </NativePopover.Root>
    </>;
}`,...(Ne=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:Ne.source}}};var ge,he,xe;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <NativePopover.Root offset={[16, 16]}>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
      </NativePopover.Content>
    </NativePopover.Root>;
}`,...(xe=(he=M.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var me,je,Ce;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <NativePopover.Root gutter={32}>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
      </NativePopover.Content>
    </NativePopover.Root>;
}`,...(Ce=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Be,ye,Te;E.parameters={...E.parameters,docs:{...(Be=E.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <NativePopover.Root disabled>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
      </NativePopover.Content>
    </NativePopover.Root>;
}`,...(Te=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var He,ke,Re;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  return <NativePopover.Root>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
        <NativePopover.Footer>
          <NativePopover.CloseTrigger>
            <Button>Close</Button>
          </NativePopover.CloseTrigger>
        </NativePopover.Footer>
      </NativePopover.Content>
    </NativePopover.Root>;
}`,...(Re=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};const So=["Basic","Size","Footer","Anchor","Placement","NestedPopover","PopoverMode","Offset","Gutter","Disabled","CloseTrigger"];export{A as Anchor,b as Basic,W as CloseTrigger,E as Disabled,S as Footer,D as Gutter,w as NestedPopover,M as Offset,F as Placement,I as PopoverMode,f as Size,So as __namedExportsOrder,fo as default};
