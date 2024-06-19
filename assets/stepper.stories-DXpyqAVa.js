import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{c as dt}from"./components-DTR4gzI_.js";import{r as d}from"./index-uCp2LrAq.js";import{c as mt}from"./index-Bh6_N6k1.js";import{l as st,a as St,b as x,c as D,d as xt,B as _}from"./factory-Bf0a1C4O.js";import{f as B}from"./forward-ref-Dr5Hqd9a.js";import{b as Ct}from"./icon-CVBZDjqd.js";import{a as Dt}from"./use-component-style-C0MoE1pt.js";import{o as Bt}from"./theme-provider-zwL-D6eR.js";import{H as P}from"./stack-DeQ5YYY4.js";import{B as C}from"./button-BybGdL7z.js";import{B as rt}from"./box-ANpItPfh.js";import{G as ht}from"./ghost-CkQVrR-f.js";import"./index-CYZlXLuv.js";import"./index-B0w9kC-B.js";import"./_basePickBy-Bopr7Tk3.js";import"./iframe-D4D1OP4u.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-CqS9fqXy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./component-IvP1ueaU.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-CxPUyHK1.js";import"./index-DnMxUhsW.js";import"./environment-provider-BhdF2tQ4.js";import"./motion-BNFRb361.js";import"./loading-provider-djBs2Xfh.js";import"./index-CAzj2Fxr.js";import"./Combination-nrDmEbEK.js";import"./loading-BMMGc-Ko.js";import"./motion-Bi86PhT5.js";import"./index-DSHhgXSs.js";import"./container-portal--tud7o6s.js";import"./notice-BpKxsod_.js";import"./alert-DkZClwrL.js";import"./close-button-B1_yQc18.js";import"./use-ripple-BZmEDmbU.js";import"./container-BvbqXqT5.js";import"./text-MYjKvx39.js";import"./index-BkEwqnoP.js";import"./index-Dc2KQwVC.js";import"./form-control-WczVVmWv.js";import"./flex-BWicnFVx.js";import"./index-GzwDZ30x.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-P1eC5o-h.js";import"./index-DnMy6eVY.js";import"./index-3uUm-2Os.js";import"./index-jdyvIJfp.js";import"./index-BaBVWS6a.js";import"./index-FZO-VaWv.js";import"./slide-fade-74xRJqp6.js";import"./utils-BQuDdpot.js";import"./scale-fade-C4h3A9D_.js";import"./index-3VUv5hbS.js";import"./select-DWTwZ0M4.js";import"./option-C7XewFFe.js";import"./index-BeEgGBIl.js";import"./popover-content-CjB4tTse.js";import"./index-C2NYhR29.js";import"./index-CBqzus2r.js";import"./index-BPmMvQRx.js";import"./index-BJ39ysE2.js";import"./lucide-icon-BNUZiTU8.js";const{DescendantsContextProvider:Et,useDescendants:vt,useDescendant:jt}=mt(),[kt,h]=st({name:"StepperContext",errorMessage:`useStepperContext returned is 'undefined'. Seems you forgot to wrap the components in "<Stepper />"`}),ft=({index:e,orientation:s="horizontal",showLastSeparator:n=!1,...r})=>{const i=vt(),o=d.useCallback(p=>p<e?"complete":p>e?"incomplete":"active",[e]),u=d.useCallback((p={},c=null)=>({...r,...p,ref:c,"data-orientation":s}),[s,r]);return{descendants:i,index:e,orientation:s,showLastSeparator:n,getStepStatus:o,getContainerProps:u}},gt=()=>{var S;const{orientation:e,getStepStatus:s}=h(),{index:n,register:r,descendants:i}=jt(),o=n===0,u=n===((S=i.lastValue())==null?void 0:S.index),p=s(n),c=d.useCallback((l={},E=null)=>({...l,ref:St(E,r),"data-status":p,"data-orientation":e}),[e,r,p]);return{index:n,status:p,isFirst:o,isLast:u,getStepProps:c}},m=B((e,s)=>{const[n,r]=Dt("Stepper",e),{className:i,steps:o,children:u,...p}=Bt(r),{descendants:c,getContainerProps:S,...l}=ft(p),E=d.useMemo(()=>u??(o==null?void 0:o.map(({title:M,description:L,hasSeparator:ot=!0,statusProps:it,titleProps:ut,descriptionProps:pt,separatorProps:ct,...at},lt)=>t.jsxs(b,{...at,children:[t.jsx(H,{...it}),t.jsxs(x.div,{flexShrink:0,children:[M?t.jsx(y,{...ut,children:M}):null,L?t.jsx(w,{...pt,children:L}):null]}),ot?t.jsx(z,{...ct}):null]},lt))),[u,o]),a={...n.stepper};return t.jsx(Et,{value:c,children:t.jsx(kt,{value:{...l,styles:n},children:t.jsx(x.div,{className:D("ui-stepper",i),__css:a,...S({},s),children:E})})})}),N=({index:e=0,count:s})=>{const[n,r]=d.useState(e),i=typeof s=="number"?s-1:0,o=n/i,u=d.useCallback(a=>a===n,[n]),p=d.useCallback(a=>a<n,[n]),c=d.useCallback(a=>a>n,[n]),S=d.useCallback(a=>a<n?"complete":a>n?"incomplete":"active",[n]),l=d.useCallback(()=>r(a=>typeof s=="number"?Math.min(s,a+1):a+1),[s]),E=d.useCallback(()=>r(a=>Math.max(0,a-1)),[]);return{activeStep:n,setActiveStep:r,activeStepPercent:o,isActiveStep:u,isCompleteStep:p,isIncompleteStep:c,getStepStatus:S,onStepNext:l,onStepPrev:E}},[Ft,v]=st({name:"StepperContext",errorMessage:`useStepContext returned is 'undefined'. Seems you forgot to wrap the components in "<Step />"`}),b=B(({className:e,...s},n)=>{const{orientation:r,showLastSeparator:i,styles:o}=h(),{index:u,status:p,isFirst:c,isLast:S,getStepProps:l}=gt(),E={...o.step};return t.jsx(Ft,{value:{index:u,status:p,isFirst:c,isLast:S},children:t.jsx(x.div,{className:D("ui-step",e),__css:E,"data-orientation":r,"data-stretch":xt(i),...l(s,n)})})}),y=B(({className:e,...s},n)=>{const{styles:r}=h(),{status:i}=v(),o={...r.title};return t.jsx(x.h3,{ref:n,className:D("ui-step__title",e),"data-status":i,__css:o,...s})}),w=B(({className:e,...s},n)=>{const{styles:r}=h(),{status:i}=v(),o={...r.description};return t.jsx(x.p,{ref:n,className:D("ui-step__description",e),"data-status":i,__css:o,...s})}),z=B(({className:e,...s},n)=>{const{orientation:r,showLastSeparator:i,styles:o}=h(),{status:u,isLast:p}=v(),c={...o.separator};return p&&!i?null:t.jsx(x.div,{ref:n,className:D("ui-step__separator",e),role:"separator","data-orientation":r,"data-status":u,__css:c,...s})}),H=B(({className:e,complete:s=t.jsx(At,{}),incomplete:n=t.jsx(T,{}),active:r=t.jsx(T,{}),...i},o)=>{const{styles:u}=h(),{status:p,...c}=v(),S={...u.status};let l=null;switch(p){case"complete":l=_(s,c);break;case"incomplete":l=_(n,c);break;case"active":l=_(r,c);break}return t.jsx(x.div,{ref:o,className:D("ui-step__status",e),"data-status":p,__css:S,...i,children:l?t.jsx(t.Fragment,{children:l}):null})}),T=B(({className:e,children:s,...n},r)=>{const{styles:i}=h(),{status:o,index:u}=v(),p={...i.number};return t.jsx(x.div,{ref:r,className:D("ui-step__number",e),"data-status":o,__css:p,...n,children:s||u+1})}),At=B(({className:e,...s},n)=>{const{styles:r}=h(),{status:i}=v(),o=i==="complete"?Pt:void 0,u={...r.icon};return t.jsx(Ct,{ref:n,as:o,className:D("ui-step__icon",e),"data-status":i,__css:u,...s})}),Pt=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20","aria-hidden":"true",height:"1em",width:"1em",...e,children:t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),We={title:"Components / Navigation / Stepper",component:m},j=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=N({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,steps:e}),t.jsxs(P,{children:[t.jsx(C,{onClick:r,children:"Prev"}),t.jsx(C,{onClick:n,children:"Next"})]})]})},k=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return t.jsxs(t.Fragment,{children:[t.jsx(m,{size:"sm",index:1,steps:e}),t.jsx(m,{size:"md",index:1,steps:e}),t.jsx(m,{size:"lg",index:1,steps:e})]})},f=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return t.jsx(t.Fragment,{children:dt.map(s=>t.jsx(m,{colorScheme:s,index:1,steps:e},s))})},g=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=N({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,steps:e,orientation:"horizontal"}),t.jsx(m,{index:s,steps:e,orientation:"vertical",h:"sm"}),t.jsxs(P,{children:[t.jsx(C,{onClick:r,children:"Prev"}),t.jsx(C,{onClick:n,children:"Next"})]})]})},F=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=N({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,children:e.map(({title:i,description:o},u)=>t.jsxs(b,{children:[t.jsx(H,{}),t.jsxs(rt,{flexShrink:"0",children:[t.jsx(y,{children:i}),t.jsx(w,{children:o})]}),t.jsx(z,{})]},u))}),t.jsxs(P,{children:[t.jsx(C,{onClick:r,children:"Prev"}),t.jsx(C,{onClick:n,children:"Next"})]})]})},A=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"サイヤ人編",description:"ベジータ・ナッパ",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}}],{activeStep:s,onStepNext:n,onStepPrev:r}=N({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,steps:e}),t.jsx(m,{index:s,children:e.map(({title:i,description:o},u)=>t.jsxs(b,{children:[t.jsx(H,{complete:t.jsx(ht,{fontSize:"xl"})}),t.jsxs(rt,{flexShrink:"0",children:[t.jsx(y,{children:i}),t.jsx(w,{children:o})]}),t.jsx(z,{})]},u))}),t.jsxs(P,{children:[t.jsx(C,{onClick:r,children:"Prev"}),t.jsx(C,{onClick:n,children:"Next"})]})]})};var I,R,G;j.parameters={...j.parameters,docs:{...(I=j.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: "孫悟空少年編",
    description: "レッドリボン軍"
  }, {
    title: "ピッコロ大魔王編",
    description: "ピッコロ大魔王"
  }, {
    title: "サイヤ人編",
    description: "ベジータ・ナッパ"
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    index: 1,
    count: steps.length
  });
  return <>
      <Stepper index={activeStep} steps={steps} />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(G=(R=j.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var O,V,W;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: "孫悟空少年編",
    description: "レッドリボン軍"
  }, {
    title: "ピッコロ大魔王編",
    description: "ピッコロ大魔王"
  }, {
    title: "サイヤ人編",
    description: "ベジータ・ナッパ"
  }];
  return <>
      <Stepper size="sm" index={1} steps={steps} />

      <Stepper size="md" index={1} steps={steps} />

      <Stepper size="lg" index={1} steps={steps} />
    </>;
}`,...(W=(V=k.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var q,J,K;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: "孫悟空少年編",
    description: "レッドリボン軍"
  }, {
    title: "ピッコロ大魔王編",
    description: "ピッコロ大魔王"
  }, {
    title: "サイヤ人編",
    description: "ベジータ・ナッパ"
  }];
  return <>
      {colorSchemes.map(colorScheme => <Stepper key={colorScheme} colorScheme={colorScheme} index={1} steps={steps} />)}
    </>;
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: "孫悟空少年編",
    description: "レッドリボン軍"
  }, {
    title: "ピッコロ大魔王編",
    description: "ピッコロ大魔王"
  }, {
    title: "サイヤ人編",
    description: "ベジータ・ナッパ"
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    index: 1,
    count: steps.length
  });
  return <>
      <Stepper index={activeStep} steps={steps} orientation="horizontal" />

      <Stepper index={activeStep} steps={steps} orientation="vertical" h="sm" />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;F.parameters={...F.parameters,docs:{...(Y=F.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: "孫悟空少年編",
    description: "レッドリボン軍"
  }, {
    title: "ピッコロ大魔王編",
    description: "ピッコロ大魔王"
  }, {
    title: "サイヤ人編",
    description: "ベジータ・ナッパ"
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    index: 1,
    count: steps.length
  });
  return <>
      <Stepper index={activeStep}>
        {steps.map(({
        title,
        description
      }, index) => <Step key={index}>
            <StepStatus />

            <Box flexShrink="0">
              <StepTitle>{title}</StepTitle>
              <StepDescription>{description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>)}
      </Stepper>

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...($=(Z=F.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var tt,et,nt;A.parameters={...A.parameters,docs:{...(tt=A.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: "孫悟空少年編",
    description: "レッドリボン軍",
    statusProps: {
      complete: \`😇\`,
      incomplete: \`😑\`,
      active: \`😎\`
    }
  }, {
    title: "ピッコロ大魔王編",
    description: "ピッコロ大魔王",
    statusProps: {
      complete: \`😇\`,
      incomplete: \`😑\`,
      active: \`😎\`
    }
  }, {
    title: "サイヤ人編",
    description: "ベジータ・ナッパ",
    statusProps: {
      complete: \`😇\`,
      incomplete: \`😑\`,
      active: \`😎\`
    }
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    index: 1,
    count: steps.length
  });
  return <>
      <Stepper index={activeStep} steps={steps} />

      <Stepper index={activeStep}>
        {steps.map(({
        title,
        description
      }, index) => <Step key={index}>
            <StepStatus complete={<Ghost fontSize="xl" />} />

            <Box flexShrink="0">
              <StepTitle>{title}</StepTitle>
              <StepDescription>{description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>)}
      </Stepper>

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(nt=(et=A.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};const qe=["basic","withSize","withColorScheme","withOrientation","customStep","customStatus"];export{qe as __namedExportsOrder,j as basic,A as customStatus,F as customStep,We as default,f as withColorScheme,g as withOrientation,k as withSize};
