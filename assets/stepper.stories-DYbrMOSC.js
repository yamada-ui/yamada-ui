import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{c as mt}from"./components-DMM6TwGm.js";import{r as m}from"./index-BwDkhjyp.js";import{c as ut}from"./index-DCuOK1Fs.js";import{l as st,a as St,b as x,c as v,d as xt,B as z}from"./factory-CSM9sPSx.js";import{f as j}from"./forward-ref-BmTAT9U5.js";import{b as ht}from"./icon-BiToCgiA.js";import{a as vt}from"./use-component-style-j75HgCyZ.js";import{o as jt}from"./theme-provider-DvoMT5nL.js";import{H as y}from"./stack-D_EkarGi.js";import{B as h}from"./button-BNYY7Slw.js";import{B as rt}from"./box-DFfDP5ur.js";import{G as kt}from"./ghost-Dy0vjv9A.js";import"./index-CvfKnqoV.js";import"./index-DD8JGwS4.js";import"./index-dZARYsYs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ui-provider-GdLgx1gG.js";import"./index-_GaN7vHp.js";import"./motion-D_mik6Sq.js";import"./loading-provider-C8Z6XtvO.js";import"./index-DWEUlx1C.js";import"./Combination-CONbhR2A.js";import"./loading-tpmCqo-t.js";import"./motion-DbFL6ada.js";import"./index-CLw4Dysw.js";import"./container-portal-D-ohbITJ.js";import"./index-DxjWwZXO.js";import"./notice-BmWJYkwq.js";import"./alert-B0brJ8vH.js";import"./close-button-BVdHRSIP.js";import"./use-ripple-D-GIaEzw.js";import"./container-S-dunOYk.js";import"./text-CBdZvdFv.js";import"./checkbox-D-X4yNm8.js";import"./index-CeDrGg2i.js";import"./index-DtwaELu4.js";import"./form-control-Cp0a3Pr6.js";import"./flex-DB7lh134.js";import"./index-CA0CoE9D.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-DQTSWLtk.js";import"./index-WMSiNdqI.js";import"./index-D5mciU3Y.js";import"./index-Cr2guPtB.js";import"./index-BKYuqN1t.js";import"./index-ByQ-4Nbs.js";import"./slide-fade-DDxrfz9y.js";import"./utils-C1onMfPn.js";import"./scale-fade-B2zoeb24.js";import"./index-BWqXm89Y.js";import"./select-BlNv78Iv.js";import"./option-1JqBCY_G.js";import"./index-DCjskD-V.js";import"./popover-content-DFdHmdvF.js";import"./index-DCtBRtRG.js";import"./index-Du0-7Fls.js";import"./index-C8fXWcF1.js";import"./extends-CF3RwP-h.js";import"./index-D_rx36I2.js";import"./lucide-icon-X7txYP3r.js";const{DescendantsContextProvider:Ct,useDescendants:ft,useDescendant:gt}=ut(),[Pt,k]=st({name:"StepperContext",errorMessage:`useStepperContext returned is 'undefined'. Seems you forgot to wrap the components in "<Stepper />"`}),Nt=({index:e,orientation:s="horizontal",showLastSeparator:n=!1,...r})=>{const i=ft(),o=m.useCallback(c=>c<e?"complete":c>e?"incomplete":"active",[e]),p=m.useCallback((c={},a=null)=>({...r,...c,ref:a,"data-orientation":s}),[s,r]);return{descendants:i,index:e,orientation:s,showLastSeparator:n,getStepStatus:o,getContainerProps:p}},_t=()=>{var S;const{orientation:e,getStepStatus:s}=k(),{index:n,register:r,descendants:i}=gt(),o=n===0,p=n===((S=i.lastValue())==null?void 0:S.index),c=s(n),a=m.useCallback((d={},C=null)=>({...d,ref:St(C,r),"data-status":c,"data-orientation":e}),[e,r,c]);return{index:n,status:c,isFirst:o,isLast:p,getStepProps:a}},u=j((e,s)=>{const[n,r]=vt("Stepper",e),{className:i,steps:o,children:p,...c}=jt(r),{descendants:a,getContainerProps:S,...d}=Nt(c),C=m.useMemo(()=>p??(o==null?void 0:o.map(({title:T,description:I,hasSeparator:ot=!0,statusProps:it,titleProps:pt,descriptionProps:ct,separatorProps:at,...lt},dt)=>t.jsxs(D,{...lt,children:[t.jsx(L,{...it}),t.jsxs(x.div,{flexShrink:0,children:[T?t.jsx(F,{...pt,children:T}):null,I?t.jsx(H,{...ct,children:I}):null]}),ot?t.jsx(M,{...at}):null]},dt))),[p,o]),l={...n.stepper};return t.jsx(Ct,{value:a,children:t.jsx(Pt,{value:{...d,styles:n},children:t.jsx(x.div,{className:v("ui-stepper",i),__css:l,...S({},s),children:C})})})}),w=({index:e=0,count:s})=>{const[n,r]=m.useState(e),i=typeof s=="number"?s-1:0,o=n/i,p=m.useCallback(l=>l===n,[n]),c=m.useCallback(l=>l<n,[n]),a=m.useCallback(l=>l>n,[n]),S=m.useCallback(l=>l<n?"complete":l>n?"incomplete":"active",[n]),d=m.useCallback(()=>r(l=>typeof s=="number"?Math.min(s,l+1):l+1),[s]),C=m.useCallback(()=>r(l=>Math.max(0,l-1)),[]);return{activeStep:n,setActiveStep:r,activeStepPercent:o,isActiveStep:p,isCompleteStep:c,isIncompleteStep:a,getStepStatus:S,onStepNext:d,onStepPrev:C}},[Bt,f]=st({name:"StepperContext",errorMessage:`useStepContext returned is 'undefined'. Seems you forgot to wrap the components in "<Step />"`}),D=j(({className:e,...s},n)=>{const{orientation:r,showLastSeparator:i,styles:o}=k(),{index:p,status:c,isFirst:a,isLast:S,getStepProps:d}=_t(),C={...o.step};return t.jsx(Bt,{value:{index:p,status:c,isFirst:a,isLast:S},children:t.jsx(x.div,{className:v("ui-step",e),__css:C,"data-orientation":r,"data-stretch":xt(i),...d(s,n)})})}),F=j(({className:e,...s},n)=>{const{styles:r}=k(),{status:i}=f(),o={...r.title};return t.jsx(x.h3,{ref:n,className:v("ui-step__title",e),"data-status":i,__css:o,...s})}),H=j(({className:e,...s},n)=>{const{styles:r}=k(),{status:i}=f(),o={...r.description};return t.jsx(x.p,{ref:n,className:v("ui-step__description",e),"data-status":i,__css:o,...s})}),M=j(({className:e,...s},n)=>{const{orientation:r,showLastSeparator:i,styles:o}=k(),{status:p,isLast:c}=f(),a={...o.separator};return c&&!i?null:t.jsx(x.div,{ref:n,className:v("ui-step__separator",e),role:"separator","data-orientation":r,"data-status":p,__css:a,...s})}),L=j(({className:e,complete:s=t.jsx(bt,{}),incomplete:n=t.jsx(R,{}),active:r=t.jsx(R,{}),...i},o)=>{const{styles:p}=k(),{status:c,...a}=f(),S={...p.status};let d=null;switch(c){case"complete":d=z(s,a);break;case"incomplete":d=z(n,a);break;case"active":d=z(r,a);break}return t.jsx(x.div,{ref:o,className:v("ui-step__status",e),"data-status":c,__css:S,...i,children:d?t.jsx(t.Fragment,{children:d}):null})}),R=j(({className:e,children:s,...n},r)=>{const{styles:i}=k(),{status:o,index:p}=f(),c={...i.number};return t.jsx(x.div,{ref:r,className:v("ui-step__number",e),"data-status":o,__css:c,...n,children:s||p+1})}),bt=j(({className:e,...s},n)=>{const{styles:r}=k(),{status:i}=f(),o=i==="complete"?yt:void 0,p={...r.icon};return t.jsx(ht,{ref:n,as:o,className:v("ui-step__icon",e),"data-status":i,__css:p,...s})}),yt=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20","aria-hidden":"true",height:"1em",width:"1em",...e,children:t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),Re={title:"Components / Navigation / Stepper",component:u},g=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=w({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(u,{index:s,steps:e}),t.jsxs(y,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})},P=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return t.jsxs(t.Fragment,{children:[t.jsx(u,{size:"sm",index:1,steps:e}),t.jsx(u,{size:"md",index:1,steps:e}),t.jsx(u,{size:"lg",index:1,steps:e})]})},N=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return t.jsx(t.Fragment,{children:mt.map(s=>t.jsx(u,{colorScheme:s,index:1,steps:e},s))})},_=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=w({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(u,{index:s,steps:e,orientation:"horizontal"}),t.jsx(u,{index:s,steps:e,orientation:"vertical",h:"sm"}),t.jsxs(y,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})},B=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=w({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(u,{index:s,children:e.map(({title:i,description:o},p)=>t.jsxs(D,{children:[t.jsx(L,{}),t.jsxs(rt,{flexShrink:"0",children:[t.jsx(F,{children:i}),t.jsx(H,{children:o})]}),t.jsx(M,{})]},p))}),t.jsxs(y,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})},b=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"サイヤ人編",description:"ベジータ・ナッパ",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}}],{activeStep:s,onStepNext:n,onStepPrev:r}=w({index:1,count:e.length});return t.jsxs(t.Fragment,{children:[t.jsx(u,{index:s,steps:e}),t.jsx(u,{index:s,children:e.map(({title:i,description:o},p)=>t.jsxs(D,{children:[t.jsx(L,{complete:t.jsx(kt,{fontSize:"xl"})}),t.jsxs(rt,{flexShrink:"0",children:[t.jsx(F,{children:i}),t.jsx(H,{children:o})]}),t.jsx(M,{})]},p))}),t.jsxs(y,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})};var A,E,G;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(G=(E=g.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var O,V,W;P.parameters={...P.parameters,docs:{...(O=P.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(W=(V=P.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var q,J,K;N.parameters={...N.parameters,docs:{...(q=N.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
}`,...(K=(J=N.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(X=(U=_.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...($=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var tt,et,nt;b.parameters={...b.parameters,docs:{...(tt=b.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
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
}`,...(nt=(et=b.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};const Ae=["basic","withSize","withColorScheme","withOrientation","customStep","customStatus"];export{Ae as __namedExportsOrder,g as basic,b as customStatus,B as customStep,Re as default,N as withColorScheme,_ as withOrientation,P as withSize};
