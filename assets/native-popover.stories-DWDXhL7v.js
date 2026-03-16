import{ay as ue,r as n,a2 as Ne,h as ge,m as G,e as he,b as xe,f as J,j as e,s as me,L as je,l as Ce,W as Be,Q as a,T as ye,P as Te}from"./iframe-1jXkjttE.js";import{P as He}from"./props-table-6bEoLrKl.js";import{H as ke}from"./h-stack-DJG4lz9Q.js";import{F as Re}from"./for-97YvSO2o.js";import{a as be,n as fe}from"./index-BNKE8aJ2.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BFeokbW8.js";import"./grid-item-B4aqBGwd.js";import"./flex-DQXuIXai.js";import"./heading-4hOOjByT.js";const Se=({autoUpdate:o,disabled:r=!1,elements:P,flip:O,gutter:m,matchWidth:j,middleware:C,offset:B,placement:y="end",platform:T,popover:N="auto",popoverTarget:H,popoverTargetAction:k="toggle",preventOverflow:U,strategy:V,transform:X,updateRef:Y,whileElementsMounted:Z}={})=>{const{getDocument:z}=ue(),h=n.useId(),x=n.useId(),$=n.useId(),u=H??$,L=n.useRef(null),ee=n.useRef(null),oe=n.useRef(null),{refs:R,update:re,getPopperProps:Q}=be({autoUpdate:o,elements:P,flip:O,gutter:m,matchWidth:j,middleware:C,offset:B,placement:y,platform:T,preventOverflow:U,strategy:V,transform:X,whileElementsMounted:Z});Ne(Y,re);const q=n.useCallback(t=>{r&&(t.preventDefault(),t.stopPropagation())},[r]),te=n.useCallback(({ref:t,...g}={})=>({type:"button","aria-controls":u,"aria-disabled":he(r),"aria-haspopup":"dialog",popoverTarget:u,popoverTargetAction:k,role:"button",...g,ref:G(t,ee,_=>{L.current==null&&R.setReference(_)}),onClick:ge(g.onClick,q)}),[u,r,q,k,R]),ne=n.useCallback(({ref:t,...g}={})=>({...g,ref:G(t,L,R.setReference)}),[R.setReference]),ae=n.useCallback(t=>Q(t),[Q]),se=n.useCallback(({ref:t,"aria-describedby":g,"aria-labelledby":_,...de}={})=>{const le=!!z()?.getElementById(h),Pe=!!z()?.getElementById(x);return{id:u,"aria-describedby":J(g,Pe?x:void 0),"aria-labelledby":J(_,le?h:void 0),"data-popup":xe(!0),popover:N===!0?"":N,role:"dialog",tabIndex:-1,...de,ref:G(t,oe)}},[z,h,x,u,N]),ie=n.useCallback(t=>({id:h,...t}),[h]),ve=n.useCallback(t=>({id:x,...t}),[x]),pe=n.useCallback(t=>({...t}),[]),ce=n.useCallback((t={})=>({popoverTarget:u,popoverTargetAction:"hide",...t}),[u]);return{getAnchorProps:ne,getBodyProps:ve,getCloseTriggerProps:ce,getContentProps:se,getFooterProps:pe,getHeaderProps:ie,getPositionerProps:ae,getTriggerProps:te}},{ComponentContext:Ae,StyleContext:Fe,useComponentContext:d,withContext:l,useRootComponentProps:we}=Ce("native-popover",fe),s=o=>{const[r,{children:P,...O}]=we(o),{getAnchorProps:m,getBodyProps:j,getCloseTriggerProps:C,getContentProps:B,getFooterProps:y,getHeaderProps:T,getPositionerProps:N,getTriggerProps:H}=Se(O),k=n.useMemo(()=>({getAnchorProps:m,getBodyProps:j,getCloseTriggerProps:C,getContentProps:B,getFooterProps:y,getHeaderProps:T,getPositionerProps:N,getTriggerProps:H}),[m,j,C,B,y,T,N,H]);return e.jsx(Fe,{value:r,children:e.jsx(Ae,{value:k,children:P})})},i=l("button","trigger")({asChild:!0},o=>{const{getTriggerProps:r}=d();return r(o)}),Ie=l("div","anchor")({asChild:!0},o=>{const{getAnchorProps:r}=d();return r(o)}),Me=l("div","positioner")({asChild:!0},o=>{const{getPositionerProps:r}=d();return r(o)}),De=l("button",{name:"CloseTrigger",slot:["trigger","close"]})({asChild:!0},o=>{const{getCloseTriggerProps:r}=d();return r(o)}),v=l(({children:o,...r})=>{const{getContentProps:P}=d();return e.jsx(Me,{children:e.jsx(me.div,{...P(je(r)),children:o})})},"content")({suppressHydrationWarning:!0}),p=l("div","header")(void 0,o=>{const{getHeaderProps:r}=d();return r(o)}),c=l("div","body")(void 0,o=>{const{getBodyProps:r}=d();return r(o)}),K=l("div","footer")(void 0,o=>{const{getFooterProps:r}=d();return r(o)}),Ke={component:s,parameters:{layout:"centered"},title:"Components / NativePopover"},b=()=>e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]}),f=()=>e.jsx(He,{variant:"stack",rows:["xs","sm","md","lg"],children:(o,r,P)=>e.jsxs(s,{size:r,children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]},P)}),S=()=>e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"}),e.jsx(K,{children:"第280話"})]})]}),A=()=>e.jsxs(s,{children:[e.jsxs(ke,{children:[e.jsx(Ie,{children:e.jsx(Be,{borderWidth:"1px",h:"10",px:"3",rounded:"l2",textWrap:"nowrap",children:"Display Popover Here"})}),e.jsx(i,{children:e.jsx(a,{children:"Click me"})})]}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]}),F=()=>e.jsx(Re,{each:["start","start-start","start-end","start-center","end","end-start","end-end","end-center","center-start","center-end"],children:o=>e.jsxs(s,{placement:o,children:[e.jsx(i,{children:e.jsxs(a,{children:['Open "',Te(o),'" Popover']})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]},o)}),w=()=>e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsxs(c,{children:[e.jsx(ye,{children:"がんばれカカロット……お前がナンバー１だ！！"}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]})]})]})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{popover:"auto",children:[e.jsx(i,{children:e.jsx(a,{children:"Auto (default)"})}),e.jsxs(v,{children:[e.jsx(p,{children:"Auto Popover"}),e.jsx(c,{children:"Auto popover closes automatically when clicking outside or opening another popover."})]})]}),e.jsxs(s,{popover:"hint",children:[e.jsx(i,{children:e.jsx(a,{children:"Hint"})}),e.jsxs(v,{children:[e.jsx(p,{children:"Hint Popover"}),e.jsx(c,{children:"Hint popover does not close auto popovers when displayed, but closes other hint popovers."})]})]}),e.jsxs(s,{popover:"manual",children:[e.jsx(i,{children:e.jsx(a,{children:"Manual"})}),e.jsxs(v,{children:[e.jsx(p,{children:"Manual Popover"}),e.jsx(c,{children:"Manual popover must be explicitly closed with the trigger button."})]})]})]}),M=()=>e.jsxs(s,{offset:[16,16],children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]}),D=()=>e.jsxs(s,{gutter:32,children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]}),E=()=>e.jsxs(s,{disabled:!0,children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"})]})]}),W=()=>e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:"Click me"})}),e.jsxs(v,{children:[e.jsx(p,{children:"ベジータ!"}),e.jsx(c,{children:"がんばれカカロット……お前がナンバー１だ！！"}),e.jsx(K,{children:e.jsx(De,{children:e.jsx(a,{children:"Close"})})})]})]});b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}};const Ue=["Basic","Size","Footer","Anchor","Placement","NestedPopover","PopoverMode","Offset","Gutter","Disabled","CloseTrigger"];export{A as Anchor,b as Basic,W as CloseTrigger,E as Disabled,S as Footer,D as Gutter,w as NestedPopover,M as Offset,F as Placement,I as PopoverMode,f as Size,Ue as __namedExportsOrder,Ke as default};
