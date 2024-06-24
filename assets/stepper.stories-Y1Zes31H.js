import{j as t}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{c as dt}from"./components-DmCPkutk.js";import{r as d}from"./index-BwDkhjyp.js";import{c as mt}from"./index-Dk1mP1up.js";import{l as st,a as St,b as x,c as D,d as xt,B as _}from"./factory-CJjTzqIw.js";import{f as B}from"./forward-ref-BmTAT9U5.js";import{b as Ct}from"./icon-932iDb3I.js";import{a as Dt}from"./use-component-style-BHPJug4L.js";import{o as Bt}from"./theme-provider-QhVoByOm.js";import{H as P}from"./stack-DAUYtLCM.js";import{B as C}from"./button-rS3w-u9-.js";import{B as rt}from"./box-D9DbeuYV.js";import{G as ht}from"./ghost-Bb9dtjBQ.js";import"./index-DS3HKw2q.js";import"./index-7lGSOue3.js";import"./_basePickBy-BnWAZlNn.js";import"./iframe-Bt6wjpLE.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./component-o6OrGXrC.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-C9-pOVrq.js";import"./index-B8e45Elc.js";import"./environment-provider-ChTqlOMC.js";import"./motion-Ceh1Zhyk.js";import"./loading-provider-CZSQS1oy.js";import"./index-C0N86Ahx.js";import"./Combination--D52Dw1Q.js";import"./loading-BQdsdx3B.js";import"./motion-B0bI6Xcj.js";import"./index-CSNxn7VS.js";import"./container-portal-CH8_15h1.js";import"./notice-BVeSRnXU.js";import"./alert-BkGI-yA3.js";import"./close-button-DgNeJdEj.js";import"./use-ripple-wDY3RbRD.js";import"./container-8CVTVcoK.js";import"./text-rr6Q65aJ.js";import"./index-DtgtGtD-.js";import"./index-D8-nW8Om.js";import"./form-control-P6f_9pXl.js";import"./flex-DpdDxX4h.js";import"./index-CYn1E4d3.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-B0NaL7kn.js";import"./index-0B4xF-cu.js";import"./index-CXrE4vub.js";import"./index-hT-y6TS8.js";import"./index-Br_odY0O.js";import"./index-DhPU70lj.js";import"./slide-fade-BeKQgcMH.js";import"./utils-BIOBGn56.js";import"./scale-fade-BtEYc4i1.js";import"./index-C5_X1M3g.js";import"./select-BndEwMh4.js";import"./option-BaWDXpNZ.js";import"./index-Bwtna2_q.js";import"./popover-content-CDvGxZAU.js";import"./index-pi5p6VHu.js";import"./index-Du0-7Fls.js";import"./index-yOlLmrbe.js";import"./index-DARK8rH5.js";import"./lucide-icon-DuYAgJii.js";const{DescendantsContextProvider:Et,useDescendants:vt,useDescendant:jt}=mt(),[kt,h]=st({name:"StepperContext",errorMessage:`useStepperContext returned is 'undefined'. Seems you forgot to wrap the components in "<Stepper />"`}),ft=({index:e,orientation:s="horizontal",showLastSeparator:n=!1,...r})=>{const i=vt(),o=d.useCallback(p=>p<e?"complete":p>e?"incomplete":"active",[e]),u=d.useCallback((p={},c=null)=>({...r,...p,ref:c,"data-orientation":s}),[s,r]);return{descendants:i,index:e,orientation:s,showLastSeparator:n,getStepStatus:o,getContainerProps:u}},gt=()=>{var S;const{orientation:e,getStepStatus:s}=h(),{index:n,register:r,descendants:i}=jt(),o=n===0,u=n===((S=i.lastValue())==null?void 0:S.index),p=s(n),c=d.useCallback((l={},E=null)=>({...l,ref:St(E,r),"data-status":p,"data-orientation":e}),[e,r,p]);return{index:n,status:p,isFirst:o,isLast:u,getStepProps:c}},m=B((e,s)=>{const[n,r]=Dt("Stepper",e),{className:i,steps:o,children:u,...p}=Bt(r),{descendants:c,getContainerProps:S,...l}=ft(p),E=d.useMemo(()=>u??(o==null?void 0:o.map(({title:M,description:L,hasSeparator:ot=!0,statusProps:it,titleProps:ut,descriptionProps:pt,separatorProps:ct,...at},lt)=>t.jsxs(b,{...at,children:[t.jsx(H,{...it}),t.jsxs(x.div,{flexShrink:0,children:[M?t.jsx(y,{...ut,children:M}):null,L?t.jsx(w,{...pt,children:L}):null]}),ot?t.jsx(z,{...ct}):null]},lt))),[u,o]),a={...n.stepper};return t.jsx(Et,{value:c,children:t.jsx(kt,{value:{...l,styles:n},children:t.jsx(x.div,{className:D("ui-stepper",i),__css:a,...S({},s),children:E})})})}),N=({index:e=0,count:s})=>{const[n,r]=d.useState(e),i=typeof s=="number"?s-1:0,o=n/i,u=d.useCallback(a=>a===n,[n]),p=d.useCallback(a=>a<n,[n]),c=d.useCallback(a=>a>n,[n]),S=d.useCallback(a=>a<n?"complete":a>n?"incomplete":"active",[n]),l=d.useCallback(()=>r(a=>typeof s=="number"?Math.min(s,a+1):a+1),[s]),E=d.useCallback(()=>r(a=>Math.max(0,a-1)),[]);return{activeStep:n,setActiveStep:r,activeStepPercent:o,isActiveStep:u,isCompleteStep:p,isIncompleteStep:c,getStepStatus:S,onStepNext:l,onStepPrev:E}},[Ft,v]=st({name:"StepperContext",errorMessage:`useStepContext returned is 'undefined'. Seems you forgot to wrap the components in "<Step />"`}),b=B(({className:e,...s},n)=>{const{orientation:r,showLastSeparator:i,styles:o}=h(),{index:u,status:p,isFirst:c,isLast:S,getStepProps:l}=gt(),E={...o.step};return t.jsx(Ft,{value:{index:u,status:p,isFirst:c,isLast:S},children:t.jsx(x.div,{className:D("ui-step",e),__css:E,"data-orientation":r,"data-stretch":xt(i),...l(s,n)})})}),y=B(({className:e,...s},n)=>{const{styles:r}=h(),{status:i}=v(),o={...r.title};return t.jsx(x.h3,{ref:n,className:D("ui-step__title",e),"data-status":i,__css:o,...s})}),w=B(({className:e,...s},n)=>{const{styles:r}=h(),{status:i}=v(),o={...r.description};return t.jsx(x.p,{ref:n,className:D("ui-step__description",e),"data-status":i,__css:o,...s})}),z=B(({className:e,...s},n)=>{const{orientation:r,showLastSeparator:i,styles:o}=h(),{status:u,isLast:p}=v(),c={...o.separator};return p&&!i?null:t.jsx(x.div,{ref:n,className:D("ui-step__separator",e),role:"separator","data-orientation":r,"data-status":u,__css:c,...s})}),H=B(({className:e,complete:s=t.jsx(At,{}),incomplete:n=t.jsx(T,{}),active:r=t.jsx(T,{}),...i},o)=>{const{styles:u}=h(),{status:p,...c}=v(),S={...u.status};let l=null;switch(p){case"complete":l=_(s,c);break;case"incomplete":l=_(n,c);break;case"active":l=_(r,c);break}return t.jsx(x.div,{ref:o,className:D("ui-step__status",e),"data-status":p,__css:S,...i,children:l?t.jsx(t.Fragment,{children:l}):null})}),T=B(({className:e,children:s,...n},r)=>{const{styles:i}=h(),{status:o,index:u}=v(),p={...i.number};return t.jsx(x.div,{ref:r,className:D("ui-step__number",e),"data-status":o,__css:p,...n,children:s||u+1})}),At=B(({className:e,...s},n)=>{const{styles:r}=h(),{status:i}=v(),o=i==="complete"?Pt:void 0,u={...r.icon};return t.jsx(Ct,{ref:n,as:o,className:D("ui-step__icon",e),"data-status":i,__css:u,...s})}),Pt=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20","aria-hidden":"true",height:"1em",width:"1em",...e,children:t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),Ve={title:"Components / Navigation / Stepper",component:m},j=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=N({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,steps:e}),t.jsxs(P,{children:[t.jsx(C,{onClick:r,children:"Prev"}),t.jsx(C,{onClick:n,children:"Next"})]})]})},k=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return t.jsxs(t.Fragment,{children:[t.jsx(m,{size:"sm",index:1,steps:e}),t.jsx(m,{size:"md",index:1,steps:e}),t.jsx(m,{size:"lg",index:1,steps:e})]})},f=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return t.jsx(t.Fragment,{children:dt.map(s=>t.jsx(m,{colorScheme:s,index:1,steps:e},s))})},g=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=N({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,steps:e,orientation:"horizontal"}),t.jsx(m,{index:s,steps:e,orientation:"vertical",h:"sm"}),t.jsxs(P,{children:[t.jsx(C,{onClick:r,children:"Prev"}),t.jsx(C,{onClick:n,children:"Next"})]})]})},F=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=N({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,children:e.map(({title:i,description:o},u)=>t.jsxs(b,{children:[t.jsx(H,{}),t.jsxs(rt,{flexShrink:"0",children:[t.jsx(y,{children:i}),t.jsx(w,{children:o})]}),t.jsx(z,{})]},u))}),t.jsxs(P,{children:[t.jsx(C,{onClick:r,children:"Prev"}),t.jsx(C,{onClick:n,children:"Next"})]})]})},A=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"サイヤ人編",description:"ベジータ・ナッパ",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}}],{activeStep:s,onStepNext:n,onStepPrev:r}=N({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,steps:e}),t.jsx(m,{index:s,children:e.map(({title:i,description:o},u)=>t.jsxs(b,{children:[t.jsx(H,{complete:t.jsx(ht,{fontSize:"xl"})}),t.jsxs(rt,{flexShrink:"0",children:[t.jsx(y,{children:i}),t.jsx(w,{children:o})]}),t.jsx(z,{})]},u))}),t.jsxs(P,{children:[t.jsx(C,{onClick:r,children:"Prev"}),t.jsx(C,{onClick:n,children:"Next"})]})]})};var I,R,G;j.parameters={...j.parameters,docs:{...(I=j.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(nt=(et=A.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};const We=["basic","withSize","withColorScheme","withOrientation","customStep","customStatus"];export{We as __namedExportsOrder,j as basic,A as customStatus,F as customStep,Ve as default,f as withColorScheme,g as withOrientation,k as withSize};
