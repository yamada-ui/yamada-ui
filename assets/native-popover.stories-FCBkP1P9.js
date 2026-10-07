import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Cn as n,Ht as ee,Sn as r,Un as i,Zt as a,at as o,ct as s,fn as c,ot as l,pn as u,yn as d,zt as te}from"./props-CCQavtXy.js";import{t as f}from"./jsx-runtime-BdxMnOeJ.js";import{C as ne,d as p,f as m,w as re}from"./utils-DZVvNDIZ.js";import{n as h,r as ie}from"./create-component-CNpeiJ0q.js";import{a as ae,o as oe,r as se,t as ce}from"./use-popper-CwinYcMe.js";import{n as le,t as g}from"./text-DuXNrJf_.js";import{r as _,t as v}from"./button-BCcG2Qpy.js";import{n as ue,t as y}from"./center-BsJ6_cZ9.js";import{n as b,t as de}from"./for-vlneEBu7.js";import{n as x,t as S}from"./h-stack-C6vzXOlH.js";import{n as fe,t as C}from"./props-table-CbpR6Bxo.js";var w,T;function E(){return(E=e((()=>{w=t(),ne(),ce(),a(),l(),u(),n(),T=({autoUpdate:e,disabled:t=!1,elements:n,flip:i,gutter:a,matchWidth:l,middleware:u,offset:d,placement:f=`end`,platform:ne,popover:p=`auto`,popoverTarget:m,popoverTargetAction:h=`toggle`,preventOverflow:ie,strategy:ae,transform:oe,updateRef:ce,whileElementsMounted:le}={})=>{let{getDocument:g}=re(),_=(0,w.useId)(),v=(0,w.useId)(),ue=(0,w.useId)(),y=m??ue,b=(0,w.useRef)(null),de=(0,w.useRef)(null),x=(0,w.useRef)(null),{refs:S,update:fe,getPopperProps:C}=se({autoUpdate:e,elements:n,flip:i,gutter:a,matchWidth:l,middleware:u,offset:d,placement:f,platform:ne,preventOverflow:ie,strategy:ae,transform:oe,whileElementsMounted:le});o(ce,fe);let T=(0,w.useCallback)(e=>{t&&(e.preventDefault(),e.stopPropagation())},[t]),E=(0,w.useCallback)(({ref:e,...n}={})=>({type:`button`,"aria-controls":y,"aria-disabled":te(t),"aria-haspopup":`dialog`,popoverTarget:y,popoverTargetAction:h,role:`button`,...n,ref:s(e,de,e=>{b.current??S.setReference(e)}),onClick:r(n.onClick,T)}),[y,t,T,h,S]),D=(0,w.useCallback)(({ref:e,...t}={})=>({...t,ref:s(e,b,S.setReference)}),[S.setReference]),O=(0,w.useCallback)(e=>C(e),[C]),k=(0,w.useCallback)(({ref:e,"aria-describedby":t,"aria-labelledby":n,...r}={})=>{let i=!!g()?.getElementById(_),a=!!g()?.getElementById(v);return{id:y,"aria-describedby":c(t,a?v:void 0),"aria-labelledby":c(n,i?_:void 0),"data-popup":ee(!0),popover:p===!0?``:p,role:`dialog`,tabIndex:-1,...r,ref:s(e,x)}},[g,_,v,y,p]),pe=(0,w.useCallback)(e=>({id:_,...e}),[_]),A=(0,w.useCallback)(e=>({id:v,...e}),[v]),j=(0,w.useCallback)(e=>({...e}),[]);return{getAnchorProps:D,getBodyProps:A,getCloseTriggerProps:(0,w.useCallback)((e={})=>({popoverTarget:y,popoverTargetAction:`hide`,...e}),[y]),getContentProps:k,getFooterProps:j,getHeaderProps:pe,getPositionerProps:O,getTriggerProps:E}}})))()}var D,O,k,pe,A,j,me,M,he,N,P,F,I,L,R,z,B,V;function ge(){return(ge=e((()=>{D=t(),ie(),p(),ae(),E(),O=f(),{ComponentContext:k,PropsContext:pe,StyleContext:A,useComponentContext:j,usePropsContext:me,withContext:M,useRootComponentProps:he}=h(`native-popover`,oe),N=e=>{let[t,{children:n,...ee}]=he(e),{getAnchorProps:r,getBodyProps:i,getCloseTriggerProps:a,getContentProps:o,getFooterProps:s,getHeaderProps:c,getPositionerProps:l,getTriggerProps:u}=T(ee),d=(0,D.useMemo)(()=>({getAnchorProps:r,getBodyProps:i,getCloseTriggerProps:a,getContentProps:o,getFooterProps:s,getHeaderProps:c,getPositionerProps:l,getTriggerProps:u}),[r,i,a,o,s,c,l,u]);return(0,O.jsx)(A,{value:t,children:(0,O.jsx)(k,{value:d,children:n})})},P=M(`button`,`trigger`)({asChild:!0},e=>{let{getTriggerProps:t}=j();return t(e)}),F=M(`div`,`anchor`)({asChild:!0},e=>{let{getAnchorProps:t}=j();return t(e)}),I=M(`div`,`positioner`)({asChild:!0},e=>{let{getPositionerProps:t}=j();return t(e)}),L=M(`button`,{name:`CloseTrigger`,slot:[`trigger`,`close`]})({asChild:!0},e=>{let{getCloseTriggerProps:t}=j();return t(e)}),R=M(({children:e,...t})=>{let{getContentProps:n}=j();return(0,O.jsx)(I,{children:(0,O.jsx)(m.div,{...n(i(t)),children:e})})},`content`)({suppressHydrationWarning:!0}),z=M(`div`,`header`)(void 0,e=>{let{getHeaderProps:t}=j();return t(e)}),B=M(`div`,`body`)(void 0,e=>{let{getBodyProps:t}=j();return t(e)}),V=M(`div`,`footer`)(void 0,e=>{let{getFooterProps:t}=j();return t(e)})})))()}var H,_e,U,W,G,K,q,J,Y,X,Z,Q,$,ve;function ye(){return(ye=e((()=>{fe(),ge(),u(),_(),ue(),b(),x(),le(),H=f(),_e={component:N,parameters:{layout:`centered`},title:`Components / NativePopover`},U=()=>(0,H.jsxs)(N,{children:[(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Click me`})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`ベジータ!`}),(0,H.jsx)(B,{children:`がんばれカカロット……お前がナンバー１だ！！`})]})]}),W=()=>(0,H.jsx)(C,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`],children:(e,t,n)=>(0,H.jsxs)(N,{size:t,children:[(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Click me`})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`ベジータ!`}),(0,H.jsx)(B,{children:`がんばれカカロット……お前がナンバー１だ！！`})]})]},n)}),G=()=>(0,H.jsxs)(N,{children:[(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Click me`})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`ベジータ!`}),(0,H.jsx)(B,{children:`がんばれカカロット……お前がナンバー１だ！！`}),(0,H.jsx)(V,{children:`第280話`})]})]}),K=()=>(0,H.jsxs)(N,{children:[(0,H.jsxs)(S,{children:[(0,H.jsx)(F,{children:(0,H.jsx)(y,{borderWidth:`1px`,h:`10`,px:`3`,rounded:`l2`,textWrap:`nowrap`,children:`Display Popover Here`})}),(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Click me`})})]}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`ベジータ!`}),(0,H.jsx)(B,{children:`がんばれカカロット……お前がナンバー１だ！！`})]})]}),q=()=>(0,H.jsx)(de,{each:[`start`,`start-start`,`start-end`,`start-center`,`end`,`end-start`,`end-end`,`end-center`,`center-start`,`center-start-start`,`center-start-end`,`center-end`,`center-end-start`,`center-end-end`],children:e=>(0,H.jsxs)(N,{placement:e,children:[(0,H.jsx)(P,{children:(0,H.jsxs)(v,{children:[`Open "`,d(e),`" Popover`]})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`ベジータ!`}),(0,H.jsx)(B,{children:`がんばれカカロット……お前がナンバー１だ！！`})]})]},e)}),J=()=>(0,H.jsxs)(N,{children:[(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Click me`})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`ベジータ!`}),(0,H.jsxs)(B,{children:[(0,H.jsx)(g,{children:`がんばれカカロット……お前がナンバー１だ！！`}),(0,H.jsxs)(N,{children:[(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Click me`})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`ベジータ!`}),(0,H.jsx)(B,{children:`がんばれカカロット……お前がナンバー１だ！！`})]})]})]})]})]}),Y=()=>(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(N,{popover:`auto`,children:[(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Auto (default)`})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`Auto Popover`}),(0,H.jsx)(B,{children:`Auto popover closes automatically when clicking outside or opening another popover.`})]})]}),(0,H.jsxs)(N,{popover:`hint`,children:[(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Hint`})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`Hint Popover`}),(0,H.jsx)(B,{children:`Hint popover does not close auto popovers when displayed, but closes other hint popovers.`})]})]}),(0,H.jsxs)(N,{popover:`manual`,children:[(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Manual`})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`Manual Popover`}),(0,H.jsx)(B,{children:`Manual popover must be explicitly closed with the trigger button.`})]})]})]}),X=()=>(0,H.jsxs)(N,{offset:[16,16],children:[(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Click me`})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`ベジータ!`}),(0,H.jsx)(B,{children:`がんばれカカロット……お前がナンバー１だ！！`})]})]}),Z=()=>(0,H.jsxs)(N,{gutter:32,children:[(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Click me`})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`ベジータ!`}),(0,H.jsx)(B,{children:`がんばれカカロット……お前がナンバー１だ！！`})]})]}),Q=()=>(0,H.jsxs)(N,{disabled:!0,children:[(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Click me`})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`ベジータ!`}),(0,H.jsx)(B,{children:`がんばれカカロット……お前がナンバー１だ！！`})]})]}),$=()=>(0,H.jsxs)(N,{children:[(0,H.jsx)(P,{children:(0,H.jsx)(v,{children:`Click me`})}),(0,H.jsxs)(R,{children:[(0,H.jsx)(z,{children:`ベジータ!`}),(0,H.jsx)(B,{children:`がんばれカカロット……お前がナンバー１だ！！`}),(0,H.jsx)(V,{children:(0,H.jsx)(L,{children:(0,H.jsx)(v,{children:`Close`})})})]})]}),ve=[`Basic`,`Size`,`Footer`,`Anchor`,`Placement`,`NestedPopover`,`PopoverMode`,`Offset`,`Gutter`,`Disabled`,`CloseTrigger`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <For each={["start", "start-start", "start-end", "start-center", "end", "end-start", "end-end", "end-center", "center-start", "center-start-start", "center-start-end", "center-end", "center-end-start", "center-end-end"] as const}>
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}ye();export{K as Anchor,U as Basic,$ as CloseTrigger,Q as Disabled,G as Footer,Z as Gutter,J as NestedPopover,X as Offset,q as Placement,Y as PopoverMode,W as Size,ve as __namedExportsOrder,_e as default};