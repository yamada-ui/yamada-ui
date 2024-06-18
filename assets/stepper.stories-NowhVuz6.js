import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{I as dt,f as mt}from"./icon-BQcQed63.js";import{c as St}from"./components-CaA2IFLO.js";import{r as d}from"./index-uCp2LrAq.js";import{c as xt}from"./index-Bh6_N6k1.js";import{l as st,a as Ct,b as x,c as D,d as Dt,B as _}from"./factory-Bf0a1C4O.js";import{f as B}from"./forward-ref-Dr5Hqd9a.js";import{b as Bt}from"./icon-BtMBNqBn.js";import{a as ht}from"./use-component-style-C1oydc60.js";import{o as Et}from"./theme-provider-CfMKAtcZ.js";import{H as A}from"./stack-DeQ5YYY4.js";import{B as C}from"./button-C5HSAH_Q.js";import{B as ot}from"./box-ANpItPfh.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CYZlXLuv.js";import"./index-DDmzt4a4.js";import"./_basePickBy-Bio_TAWW.js";import"./iframe-DVwPDITX.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-CqS9fqXy.js";import"./component-IvP1ueaU.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-BWp85wBy.js";import"./index-kuq29Idc.js";import"./environment-provider-BhdF2tQ4.js";import"./motion-BNFRb361.js";import"./loading-provider-CtAcKjCW.js";import"./index-CAzj2Fxr.js";import"./Combination-nrDmEbEK.js";import"./loading-CD9zg-8p.js";import"./motion-Bi86PhT5.js";import"./index-DSHhgXSs.js";import"./container-portal--tud7o6s.js";import"./notice-CYOUCK2V.js";import"./alert-EQ9Vq4UV.js";import"./close-button-B2_55Hm9.js";import"./use-ripple-BZmEDmbU.js";import"./container-BHdAVcDB.js";import"./text-BOhk0htq.js";import"./index-BkEwqnoP.js";import"./index-Dc2KQwVC.js";import"./form-control-CXekA9Vm.js";import"./flex-BWicnFVx.js";import"./index-GzwDZ30x.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-DUFiaKRG.js";import"./index-DnMy6eVY.js";import"./index-3uUm-2Os.js";import"./index-DpYz45Vm.js";import"./index-CEbtGM79.js";import"./index-Bz6F23rc.js";import"./slide-fade-DX8q9FlF.js";import"./utils-BQuDdpot.js";import"./scale-fade-C4h3A9D_.js";import"./index-3VUv5hbS.js";import"./select-d9n7a2wp.js";import"./option-C98FFlvU.js";import"./index-BeEgGBIl.js";import"./popover-content-DdSqGHqW.js";import"./index-DpNfAtp1.js";import"./index-CBqzus2r.js";import"./index-BPmMvQRx.js";import"./index-ZgcAASpW.js";const{DescendantsContextProvider:vt,useDescendants:jt,useDescendant:kt}=xt(),[ft,h]=st({name:"StepperContext",errorMessage:`useStepperContext returned is 'undefined'. Seems you forgot to wrap the components in "<Stepper />"`}),Pt=({index:e,orientation:s="horizontal",showLastSeparator:n=!1,...o})=>{const i=jt(),r=d.useCallback(p=>p<e?"complete":p>e?"incomplete":"active",[e]),u=d.useCallback((p={},c=null)=>({...o,...p,ref:c,"data-orientation":s}),[s,o]);return{descendants:i,index:e,orientation:s,showLastSeparator:n,getStepStatus:r,getContainerProps:u}},gt=()=>{var S;const{orientation:e,getStepStatus:s}=h(),{index:n,register:o,descendants:i}=kt(),r=n===0,u=n===((S=i.lastValue())==null?void 0:S.index),p=s(n),c=d.useCallback((l={},E=null)=>({...l,ref:Ct(E,o),"data-status":p,"data-orientation":e}),[e,o,p]);return{index:n,status:p,isFirst:r,isLast:u,getStepProps:c}},m=B((e,s)=>{const[n,o]=ht("Stepper",e),{className:i,steps:r,children:u,...p}=Et(o),{descendants:c,getContainerProps:S,...l}=Pt(p),E=d.useMemo(()=>u??(r==null?void 0:r.map(({title:I,description:M,hasSeparator:rt=!0,statusProps:it,titleProps:ut,descriptionProps:pt,separatorProps:ct,...at},lt)=>t.jsxs(b,{...at,children:[t.jsx(H,{...it}),t.jsxs(x.div,{flexShrink:0,children:[I?t.jsx(y,{...ut,children:I}):null,M?t.jsx(w,{...pt,children:M}):null]}),rt?t.jsx(z,{...ct}):null]},lt))),[u,r]),a={...n.stepper};return t.jsx(vt,{value:c,children:t.jsx(ft,{value:{...l,styles:n},children:t.jsx(x.div,{className:D("ui-stepper",i),__css:a,...S({},s),children:E})})})}),N=({index:e=0,count:s})=>{const[n,o]=d.useState(e),i=typeof s=="number"?s-1:0,r=n/i,u=d.useCallback(a=>a===n,[n]),p=d.useCallback(a=>a<n,[n]),c=d.useCallback(a=>a>n,[n]),S=d.useCallback(a=>a<n?"complete":a>n?"incomplete":"active",[n]),l=d.useCallback(()=>o(a=>typeof s=="number"?Math.min(s,a+1):a+1),[s]),E=d.useCallback(()=>o(a=>Math.max(0,a-1)),[]);return{activeStep:n,setActiveStep:o,activeStepPercent:r,isActiveStep:u,isCompleteStep:p,isIncompleteStep:c,getStepStatus:S,onStepNext:l,onStepPrev:E}},[Ft,v]=st({name:"StepperContext",errorMessage:`useStepContext returned is 'undefined'. Seems you forgot to wrap the components in "<Step />"`}),b=B(({className:e,...s},n)=>{const{orientation:o,showLastSeparator:i,styles:r}=h(),{index:u,status:p,isFirst:c,isLast:S,getStepProps:l}=gt(),E={...r.step};return t.jsx(Ft,{value:{index:u,status:p,isFirst:c,isLast:S},children:t.jsx(x.div,{className:D("ui-step",e),__css:E,"data-orientation":o,"data-stretch":Dt(i),...l(s,n)})})}),y=B(({className:e,...s},n)=>{const{styles:o}=h(),{status:i}=v(),r={...o.title};return t.jsx(x.h3,{ref:n,className:D("ui-step__title",e),"data-status":i,__css:r,...s})}),w=B(({className:e,...s},n)=>{const{styles:o}=h(),{status:i}=v(),r={...o.description};return t.jsx(x.p,{ref:n,className:D("ui-step__description",e),"data-status":i,__css:r,...s})}),z=B(({className:e,...s},n)=>{const{orientation:o,showLastSeparator:i,styles:r}=h(),{status:u,isLast:p}=v(),c={...r.separator};return p&&!i?null:t.jsx(x.div,{ref:n,className:D("ui-step__separator",e),role:"separator","data-orientation":o,"data-status":u,__css:c,...s})}),H=B(({className:e,complete:s=t.jsx(At,{}),incomplete:n=t.jsx(L,{}),active:o=t.jsx(L,{}),...i},r)=>{const{styles:u}=h(),{status:p,...c}=v(),S={...u.status};let l=null;switch(p){case"complete":l=_(s,c);break;case"incomplete":l=_(n,c);break;case"active":l=_(o,c);break}return t.jsx(x.div,{ref:r,className:D("ui-step__status",e),"data-status":p,__css:S,...i,children:l?t.jsx(t.Fragment,{children:l}):null})}),L=B(({className:e,children:s,...n},o)=>{const{styles:i}=h(),{status:r,index:u}=v(),p={...i.number};return t.jsx(x.div,{ref:o,className:D("ui-step__number",e),"data-status":r,__css:p,...n,children:s||u+1})}),At=B(({className:e,...s},n)=>{const{styles:o}=h(),{status:i}=v(),r=i==="complete"?Nt:void 0,u={...o.icon};return t.jsx(Bt,{ref:n,as:r,className:D("ui-step__icon",e),"data-status":i,__css:u,...s})}),Nt=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20","aria-hidden":"true",height:"1em",width:"1em",...e,children:t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),qe={title:"Components / Navigation / Stepper",component:m},j=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:o}=N({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,steps:e}),t.jsxs(A,{children:[t.jsx(C,{onClick:o,children:"Prev"}),t.jsx(C,{onClick:n,children:"Next"})]})]})},k=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return t.jsxs(t.Fragment,{children:[t.jsx(m,{size:"sm",index:1,steps:e}),t.jsx(m,{size:"md",index:1,steps:e}),t.jsx(m,{size:"lg",index:1,steps:e})]})},f=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return t.jsx(t.Fragment,{children:St.map(s=>t.jsx(m,{colorScheme:s,index:1,steps:e},s))})},P=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:o}=N({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,steps:e,orientation:"horizontal"}),t.jsx(m,{index:s,steps:e,orientation:"vertical",h:"sm"}),t.jsxs(A,{children:[t.jsx(C,{onClick:o,children:"Prev"}),t.jsx(C,{onClick:n,children:"Next"})]})]})},g=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:o}=N({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,children:e.map(({title:i,description:r},u)=>t.jsxs(b,{children:[t.jsx(H,{}),t.jsxs(ot,{flexShrink:"0",children:[t.jsx(y,{children:i}),t.jsx(w,{children:r})]}),t.jsx(z,{})]},u))}),t.jsxs(A,{children:[t.jsx(C,{onClick:o,children:"Prev"}),t.jsx(C,{onClick:n,children:"Next"})]})]})},F=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"サイヤ人編",description:"ベジータ・ナッパ",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}}],{activeStep:s,onStepNext:n,onStepPrev:o}=N({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,steps:e}),t.jsx(m,{index:s,children:e.map(({title:i,description:r},u)=>t.jsxs(b,{children:[t.jsx(H,{complete:t.jsx(dt,{icon:mt})}),t.jsxs(ot,{flexShrink:"0",children:[t.jsx(y,{children:i}),t.jsx(w,{children:r})]}),t.jsx(z,{})]},u))}),t.jsxs(A,{children:[t.jsx(C,{onClick:o,children:"Prev"}),t.jsx(C,{onClick:n,children:"Next"})]})]})};var T,R,O;j.parameters={...j.parameters,docs:{...(T=j.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(O=(R=j.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var V,W,$;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...($=(W=k.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var q,G,J;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;P.parameters={...P.parameters,docs:{...(K=P.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
}`,...(U=(Q=P.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,et,nt;F.parameters={...F.parameters,docs:{...(tt=F.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
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
            <StepStatus complete={<Icon icon={faPoo} />} />

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
}`,...(nt=(et=F.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};const Ge=["basic","withSize","withColorScheme","withOrientation","customStep","customStatus"];export{Ge as __namedExportsOrder,j as basic,F as customStatus,g as customStep,qe as default,f as withColorScheme,P as withOrientation,k as withSize};
