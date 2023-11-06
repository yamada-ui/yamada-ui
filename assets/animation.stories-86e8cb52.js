import{a as n,j as c,F as dn}from"./jsx-runtime-03b4ddbf.js";import{r as s}from"./index-76fb7be0.js";import{L as M}from"./motion-90200a2f.js";import{u as ln,A as un}from"./index-033cf86e.js";import{M as o}from"./motion-9f301354.js";import{C as a}from"./center-b95d9abd.js";import{u as b}from"./index-d68d7549.js";import{B as mn}from"./button-0fc0cb94.js";import{B as hn}from"./box-c0031f2e.js";import{V as S,H as k}from"./stack-dbacd227.js";import{H as L}from"./heading-3128b2c7.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./factory-c9bc4a28.js";import"./loading-24ec3d24.js";import"./index-f08d32bc.js";import"./theme-provider-a03ffa08.js";import"./index-a701aaa0.js";import"./index-85f341f5.js";import"./icon-e1655999.js";import"./use-component-style-ab2b35f8.js";const xn=s.createContext(null),wn=e=>!e.isLayoutDirty&&e.willUpdate(!1);function G(){const e=new Set,t=new WeakMap,i=()=>e.forEach(wn);return{add:r=>{e.add(r),t.set(r,r.addEventListener("willUpdate",i))},remove:r=>{e.delete(r);const p=t.get(r);p&&(p(),t.delete(r)),i()},dirty:i}}const on=e=>e===!0,gn=e=>on(e===!0)||e==="id",yn=({children:e,id:t,inheritId:i,inherit:r=!0})=>{i!==void 0&&(r=i);const p=s.useContext(M),an=s.useContext(xn),[cn,sn]=ln(),v=s.useRef(null),C=p.id||an;v.current===null&&(gn(r)&&C&&(t=t?C+"-"+t:C),v.current={id:t,group:on(r)&&p.group||G()});const pn=s.useMemo(()=>({...v.current,forceRender:cn}),[sn]);return s.createElement(M.Provider,{value:pn},e)},Un={title:"Components / Motion / Animation",component:o},d=()=>n(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(o,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),l=()=>n(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(o,{animate:{x:100},transition:{ease:"easeOut",duration:2},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),u=()=>n(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(o,{initial:{scale:0},animate:{rotate:360,scale:1},transition:{type:"spring",stiffness:260,damping:20},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),m=()=>n(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(o,{initial:{x:-100},animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),h=()=>{const[e,{toggle:t}]=b();return c(dn,{children:[n(mn,{onClick:t,children:"Please click"}),n(un,{children:e?n(o,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},x=()=>n(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(o,{animate:{x:[0,100,0]},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),w=()=>n(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(o,{animate:{x:[0,100,0]},transition:{duration:3,times:[0,.2,1]},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),g=()=>n(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(o,{animate:{scale:[1,2,2,1,1],rotate:[0,0,180,180,0],borderRadius:["0%","0%","50%","50%","0%"]},transition:{duration:2,ease:"easeInOut",times:[0,.2,.5,.8,1],repeat:1/0,repeatDelay:1},w:"xs",h:"xs",bg:"primary"})}),y=()=>{const[e,{toggle:t}]=b();return n(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(hn,{as:"button",bg:"primary",p:"1",rounded:"full",w:"14",h:"8",display:"flex",justifyContent:e?"flex-end":"flex-start",onClick:t,children:n(o,{layout:!0,transition:{type:"spring",stiffness:700,damping:30},bg:"white",w:"6",h:"6",rounded:"full"})})})},f=()=>{const e=()=>{const[t,{toggle:i}]=b(!1);return n(o,{as:"button",layout:!0,w:t?"32":"16",h:"16",p:"md",bg:"primary",rounded:"md",onClick:i,display:"flex",placeContent:"center"})};return c(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:[c(S,{children:[n(L,{size:"md",children:"Not using LayoutGroup"}),c(k,{children:[n(e,{}),n(e,{})]})]}),c(S,{children:[n(L,{size:"md",children:"Using LayoutGroup"}),n(k,{children:c(yn,{children:[n(e,{}),n(e,{})]})})]})]})};var A,B,H;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion animate={{
      x: 100
    }} bg='primary' color='white' p='md' rounded='md'>
        Motion
      </Motion>
    </Center>;
}`,...(H=(B=d.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var I,V,O;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion animate={{
      x: 100
    }} transition={{
      ease: 'easeOut',
      duration: 2
    }} bg='primary' color='white' p='md' rounded='md'>
        Motion
      </Motion>
    </Center>;
}`,...(O=(V=l.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var T,E,P;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion initial={{
      scale: 0
    }} animate={{
      rotate: 360,
      scale: 1
    }} transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20
    }} bg='primary' color='white' p='md' rounded='md'>
        Motion
      </Motion>
    </Center>;
}`,...(P=(E=u.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var R,j,z;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion initial={{
      x: -100
    }} animate={{
      x: 100
    }} bg='primary' color='white' p='md' rounded='md'>
        Motion
      </Motion>
    </Center>;
}`,...(z=(j=m.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var U,D,F;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [isVisible, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please click</Button>

      <AnimatePresence>
        {isVisible ? <Motion initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} bg='primary' color='white' p='md' rounded='md'>
            Motion
          </Motion> : null}
      </AnimatePresence>
    </>;
}`,...(F=(D=h.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var K,N,_;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion animate={{
      x: [0, 100, 0]
    }} bg='primary' color='white' p='md' rounded='md'>
        Motion
      </Motion>
    </Center>;
}`,...(_=(N=x.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var W,q,J;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion animate={{
      x: [0, 100, 0]
    }} transition={{
      duration: 3,
      times: [0, 0.2, 1]
    }} bg='primary' color='white' p='md' rounded='md'>
        Motion
      </Motion>
    </Center>;
}`,...(J=(q=w.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 180, 180, 0],
      borderRadius: ['0%', '0%', '50%', '50%', '0%']
    }} transition={{
      duration: 2,
      ease: 'easeInOut',
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1
    }} w='xs' h='xs' bg='primary' />
    </Center>;
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,nn;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Box as='button' bg='primary' p='1' rounded='full' w='14' h='8' display='flex' justifyContent={!flg ? 'flex-start' : 'flex-end'} onClick={toggle}>
        <Motion layout transition={{
        type: 'spring',
        stiffness: 700,
        damping: 30
      }} bg='white' w='6' h='6' rounded='full' />
      </Box>
    </Center>;
}`,...(nn=($=y.parameters)==null?void 0:$.docs)==null?void 0:nn.source}}};var en,tn,rn;f.parameters={...f.parameters,docs:{...(en=f.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
  const Accordion: FC = () => {
    const [isOpen, {
      toggle
    }] = useBoolean(false);
    return <Motion as='button' layout w={isOpen ? '32' : '16'} h='16' p='md' bg='primary' rounded='md' onClick={toggle} display='flex' placeContent='center' />;
  };
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)' gap='md'>
      <VStack>
        <Heading size='md'>Not using LayoutGroup</Heading>

        <HStack>
          <Accordion />
          <Accordion />
        </HStack>
      </VStack>

      <VStack>
        <Heading size='md'>Using LayoutGroup</Heading>

        <HStack>
          <LayoutGroup>
            <Accordion />
            <Accordion />
          </LayoutGroup>
        </HStack>
      </VStack>
    </Center>;
}`,...(rn=(tn=f.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};const Dn=["basic","withTransition","withTransitionType","withInitial","withExit","useKeyframes","withTimes","withRepeat","withLayout","useLayoutGroup"];export{Dn as __namedExportsOrder,d as basic,Un as default,x as useKeyframes,f as useLayoutGroup,h as withExit,m as withInitial,y as withLayout,g as withRepeat,w as withTimes,l as withTransition,u as withTransitionType};
//# sourceMappingURL=animation.stories-86e8cb52.js.map
