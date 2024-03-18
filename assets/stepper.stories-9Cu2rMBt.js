import{a as l,j as t,F as k}from"./jsx-runtime-2xDJh5tt.js";import{I as St,f as Ct}from"./fontawesome-icon-Dp0uKqnG.js";import{c as Dt}from"./components-YHOB1S89.js";import{r as m}from"./index-CBqU2yxZ.js";import{c as Bt}from"./index-DeEl9i-o.js";import{a as rt,w as ht,u as D,c as h,M as xt,B as w}from"./factory-DLpD49Xl.js";import{f as x}from"./forward-ref-DuAegr0M.js";import{b as Et}from"./icon-D30_Pagv.js";import{a as vt}from"./use-component-style-D9HuanlY.js";import{o as kt}from"./theme-provider-DXhTM26K.js";import{H as b}from"./stack-BJO0HI5d.js";import{B}from"./button-DQ4BMoEA.js";import{B as ut}from"./box-YqUOaFa2.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-81ytNefq.js";import"./mapValues-BIZneCWx.js";import"./_basePickBy-Dt7h7ShX.js";import"./isPlainObject-COn-XCqr.js";import"./index-DrFu-skq.js";import"./ui-provider-DB99Xib9.js";import"./index-DkqtbZN0.js";import"./environment-provider-Cx6a0V9s.js";import"./motion-JgkBPv6g.js";import"./loading-provider-D0eaBW50.js";import"./index-WdxzPEVz.js";import"./Combination-D2LZdSm3.js";import"./loading-De1VEe6t.js";import"./index-CpntKjHS.js";import"./index-DiSCNHbg.js";import"./index-5JVG-Iiz.js";import"./motion-CIylrsRE.js";import"./index-_tcQm2Fk.js";import"./container-portal-mTUMNiRO.js";import"./index-BtM5VmRH.js";import"./notice-jcMkuZku.js";import"./alert-CcHmE75f.js";import"./close-button-DavmcEIC.js";import"./use-ripple-Df_aFKka.js";import"./container-p_JhnM9J.js";import"./text-D-2-8y30.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";const{DescendantsContextProvider:ft,useDescendants:Pt,useDescendant:At}=Bt(),[Ft,E]=rt({name:"StepperContext",errorMessage:`useStepperContext returned is 'undefined'. Seems you forgot to wrap the components in "<Stepper />"`}),gt=({index:e,orientation:s="horizontal",showLastSeparator:n=!1,...o})=>{const u=Pt(),r=m.useCallback(c=>c<e?"complete":c>e?"incomplete":"active",[e]),i=m.useCallback((c={},p=null)=>({...o,...c,ref:p,"data-orientation":s}),[s,o]);return{descendants:u,index:e,orientation:s,showLastSeparator:n,getStepStatus:r,getContainerProps:i}},Nt=()=>{var C;const{orientation:e,getStepStatus:s}=E(),{index:n,register:o,descendants:u}=At(),r=n===0,i=n===((C=u.lastValue())==null?void 0:C.index),c=s(n),p=m.useCallback((d={},v=null)=>({...d,ref:ht(v,o),"data-status":c,"data-orientation":e}),[e,o,c]);return{index:n,status:c,isFirst:r,isLast:i,getStepProps:p}},S=x((e,s)=>{const[n,o]=vt("Stepper",e),{className:u,steps:r,children:i,...c}=kt(o),{descendants:p,getContainerProps:C,...d}=gt(c),v=m.useMemo(()=>i??(r==null?void 0:r.map(({title:T,description:R,hasSeparator:it=!0,statusProps:ct,titleProps:pt,descriptionProps:at,separatorProps:lt,...dt},mt)=>l(z,{...dt,children:[t(L,{...ct}),l(D.div,{flexShrink:0,children:[T?t(H,{...pt,children:T}):null,R?t(I,{...at,children:R}):null]}),it?t(M,{...lt}):null]},mt))),[i,r]),a={...n.stepper};return t(ft,{value:p,children:t(Ft,{value:{...d,styles:n},children:t(D.div,{className:h("ui-stepper",u),__css:a,...C({},s),children:v})})})}),y=({index:e=0,count:s})=>{const[n,o]=m.useState(e),u=typeof s=="number"?s-1:0,r=n/u,i=m.useCallback(a=>a===n,[n]),c=m.useCallback(a=>a<n,[n]),p=m.useCallback(a=>a>n,[n]),C=m.useCallback(a=>a<n?"complete":a>n?"incomplete":"active",[n]),d=m.useCallback(()=>o(a=>typeof s=="number"?Math.min(s,a+1):a+1),[s]),v=m.useCallback(()=>o(a=>Math.max(0,a-1)),[]);return{activeStep:n,setActiveStep:o,activeStepPercent:r,isActiveStep:i,isCompleteStep:c,isIncompleteStep:p,getStepStatus:C,onStepNext:d,onStepPrev:v}},[_t,f]=rt({name:"StepperContext",errorMessage:`useStepContext returned is 'undefined'. Seems you forgot to wrap the components in "<Step />"`}),z=x(({className:e,...s},n)=>{const{orientation:o,showLastSeparator:u,styles:r}=E(),{index:i,status:c,isFirst:p,isLast:C,getStepProps:d}=Nt(),v={...r.step};return t(_t,{value:{index:i,status:c,isFirst:p,isLast:C},children:t(D.div,{className:h("ui-step",e),__css:v,"data-orientation":o,"data-stretch":xt(u),...d(s,n)})})}),H=x(({className:e,...s},n)=>{const{styles:o}=E(),{status:u}=f(),r={...o.title};return t(D.h3,{ref:n,className:h("ui-step__title",e),"data-status":u,__css:r,...s})}),I=x(({className:e,...s},n)=>{const{styles:o}=E(),{status:u}=f(),r={...o.description};return t(D.p,{ref:n,className:h("ui-step__description",e),"data-status":u,__css:r,...s})}),M=x(({className:e,...s},n)=>{const{orientation:o,showLastSeparator:u,styles:r}=E(),{status:i,isLast:c}=f(),p={...r.separator};return c&&!u?null:t(D.div,{ref:n,className:h("ui-step__separator",e),role:"separator","data-orientation":o,"data-status":i,__css:p,...s})}),L=x(({className:e,complete:s=t(bt,{}),incomplete:n=t(j,{}),active:o=t(j,{}),...u},r)=>{const{styles:i}=E(),{status:c,...p}=f(),C={...i.status};let d=null;switch(c){case"complete":d=w(s,p);break;case"incomplete":d=w(n,p);break;case"active":d=w(o,p);break}return t(D.div,{ref:r,className:h("ui-step__status",e),"data-status":c,__css:C,...u,children:d?t(k,{children:d}):null})}),j=x(({className:e,children:s,...n},o)=>{const{styles:u}=E(),{status:r,index:i}=f(),c={...u.number};return t(D.div,{ref:o,className:h("ui-step__number",e),"data-status":r,__css:c,...n,children:s||i+1})}),bt=x(({className:e,...s},n)=>{const{styles:o}=E(),{status:u}=f(),r=u==="complete"?yt:void 0,i={...o.icon};return t(Et,{ref:n,as:r,className:h("ui-step__icon",e),"data-status":u,__css:i,...s})}),yt=e=>t("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20","aria-hidden":"true",height:"1em",width:"1em",...e,children:t("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),ve={title:"Components / Navigation / Stepper",component:S},P=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:o}=y({index:1,count:e.length});return l(k,{children:[t(S,{index:s,steps:e}),l(b,{children:[t(B,{onClick:o,children:"Prev"}),t(B,{onClick:n,children:"Next"})]})]})},A=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return l(k,{children:[t(S,{size:"sm",index:1,steps:e}),t(S,{size:"md",index:1,steps:e}),t(S,{size:"lg",index:1,steps:e})]})},F=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return t(k,{children:Dt.map(s=>t(S,{colorScheme:s,index:1,steps:e},s))})},g=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:o}=y({index:1,count:e.length});return l(k,{children:[t(S,{index:s,steps:e,orientation:"horizontal"}),t(S,{index:s,steps:e,orientation:"vertical",h:"sm"}),l(b,{children:[t(B,{onClick:o,children:"Prev"}),t(B,{onClick:n,children:"Next"})]})]})},N=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:o}=y({index:1,count:e.length});return l(k,{children:[t(S,{index:s,children:e.map(({title:u,description:r},i)=>l(z,{children:[t(L,{}),l(ut,{flexShrink:"0",children:[t(H,{children:u}),t(I,{children:r})]}),t(M,{})]},i))}),l(b,{children:[t(B,{onClick:o,children:"Prev"}),t(B,{onClick:n,children:"Next"})]})]})},_=()=>{const e=[{title:"孫悟空少年編",description:"レッドリボン軍",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"サイヤ人編",description:"ベジータ・ナッパ",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}}],{activeStep:s,onStepNext:n,onStepPrev:o}=y({index:1,count:e.length});return l(k,{children:[t(S,{index:s,steps:e}),t(S,{index:s,children:e.map(({title:u,description:r},i)=>l(z,{children:[t(L,{complete:t(St,{icon:Ct})}),l(ut,{flexShrink:"0",children:[t(H,{children:u}),t(I,{children:r})]}),t(M,{})]},i))}),l(b,{children:[t(B,{onClick:o,children:"Prev"}),t(B,{onClick:n,children:"Next"})]})]})};var O,V,W;P.parameters={...P.parameters,docs:{...(O=P.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(W=(V=P.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var $,q,G;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(G=(q=A.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;F.parameters={...F.parameters,docs:{...(J=F.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(Q=(K=F.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,tt,et;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(et=(tt=N.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var nt,st,ot;_.parameters={..._.parameters,docs:{...(nt=_.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
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
}`,...(ot=(st=_.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};const ke=["basic","withSize","withColorScheme","withOrientation","customStep","customStatus"];export{ke as __namedExportsOrder,P as basic,_ as customStatus,N as customStep,ve as default,F as withColorScheme,g as withOrientation,A as withSize};
