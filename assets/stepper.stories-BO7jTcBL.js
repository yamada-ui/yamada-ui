import{j as t}from"./jsx-runtime-CfatFE5O.js";import{c as ut}from"./components-CxTYaNXJ.js";import{r as u}from"./index-ClcD9ViR.js";import{c as St}from"./index-LBOEXu_2.js";import{p as rt,b as xt,a as x,d as ht,c as v,C as M}from"./factory-BPYpkDor.js";import{f as j}from"./forward-ref-D13m8o2p.js";import{b as vt}from"./icon-DT11Nal8.js";import{a as jt}from"./use-component-style-CYL4T5vM.js";import{o as _t}from"./theme-provider-Bsm-0rKu.js";import{H as I}from"./stack-D7aiW26x.js";import{B as h}from"./button-BN1WQcNU.js";import{B as ot}from"./box-b6fbDiUh.js";import{G as kt}from"./ghost-B8tYvxfH.js";import"./index-CZjm_Dlq.js";import"./index-DaKwFS8s.js";import"./index-oHEGJEIa.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./ui-provider-DT4ZJWc8.js";import"./index-CCPRJsEV.js";import"./proxy-DwHv-pG9.js";import"./loading-provider-BNFf8qfE.js";import"./index-C5Gv9kmK.js";import"./Combination-__ZWiWyr.js";import"./loading-Bd8HLEYZ.js";import"./use-var-DoLXLJEg.js";import"./index-2WvfircW.js";import"./portal-Bwu6AgAB.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-BiXCYStP.js";import"./notice-06IzLkX9.js";import"./alert-DuAaTs7C.js";import"./close-button-BMgTv_5f.js";import"./use-ripple-EznoQwCc.js";import"./container-C7BHOlHf.js";import"./text-Y1d9IDh4.js";import"./checkbox-BslYf1VK.js";import"./index-BawWMpfG.js";import"./form-control-BcwAaE7G.js";import"./index-5_K1p_ZM.js";import"./index-k5AD2Mr8.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-JyxElFjD.js";import"./index-CUasfp9R.js";import"./index-B6_HQi_x.js";import"./index-BoVnf8IZ.js";import"./index-DLDmaCYR.js";import"./index-W-WXU9X0.js";import"./slide-fade-DWJKgb--.js";import"./utils-iiSVxag3.js";import"./forward-ref-2BKBy0Yi.js";import"./scale-fade-CUVSWOgb.js";import"./index-Ds3gfiOt.js";import"./select-DHuQSSGm.js";import"./select-list-siiT5znq.js";import"./index-B-CNuTHF.js";import"./popover-trigger-BK228ndd.js";import"./index-CctIhTei.js";import"./index-gGKStiao.js";import"./index-gbrMdviE.js";import"./createLucideIcon-Czt4prMK.js";const{DescendantsContextProvider:Ct,useDescendant:ft,useDescendants:Nt}=St(),[gt,_]=rt({name:"StepperContext",errorMessage:`useStepperContext returned is 'undefined'. Seems you forgot to wrap the components in "<Stepper />"`}),Pt=({index:e,orientation:s="horizontal",showLastSeparator:n=!1,...r})=>{const o=Nt(),i=u.useCallback(c=>c<e?"complete":c>e?"incomplete":"active",[e]),p=u.useCallback((c={},a=null)=>({...r,...c,ref:a,"data-orientation":s}),[s,r]);return{descendants:o,getStepStatus:i,index:e,orientation:s,showLastSeparator:n,getContainerProps:p}},Bt=()=>{var S;const{getStepStatus:e,orientation:s}=_(),{descendants:n,index:r,register:o}=ft(),i=r===0,p=r===((S=n.lastValue())==null?void 0:S.index),c=e(r),a=u.useCallback((d={},k=null)=>({...d,ref:xt(k,o),"data-orientation":s,"data-status":c}),[s,o,c]);return{index:r,isFirst:i,isLast:p,status:c,getStepProps:a}},[yt,C]=rt({name:"StepperContext",errorMessage:`useStepContext returned is 'undefined'. Seems you forgot to wrap the components in "<Step />"`}),f=j(({className:e,...s},n)=>{const{orientation:r,showLastSeparator:o,styles:i}=_(),{index:p,isFirst:c,isLast:a,status:S,getStepProps:d}=Bt(),k={...i.step};return t.jsx(yt,{value:{index:p,isFirst:c,isLast:a,status:S},children:t.jsx(x.div,{className:v("ui-step",e),"data-orientation":r,"data-stretch":ht(o),__css:k,...d(s,n)})})});f.displayName="Step";f.__ui__="Step";const N=j(({className:e,...s},n)=>{const{styles:r}=_(),{status:o}=C(),i={...r.description};return t.jsx(x.p,{ref:n,className:v("ui-step__description",e),"data-status":o,__css:i,...s})});N.displayName="StepDescription";N.__ui__="StepDescription";const g=j(({className:e,...s},n)=>{const{orientation:r,showLastSeparator:o,styles:i}=_(),{isLast:p,status:c}=C(),a={...i.separator};return p&&!o?null:t.jsx(x.div,{ref:n,className:v("ui-step__separator",e),"data-orientation":r,"data-status":c,role:"separator",__css:a,...s})});g.displayName="StepSeparator";g.__ui__="StepSeparator";const P=j(({className:e,active:s=t.jsx(F,{}),complete:n=t.jsx(L,{}),incomplete:r=t.jsx(F,{}),...o},i)=>{const{styles:p}=_(),{status:c,...a}=C(),S={...p.status};let d=null;switch(c){case"complete":d=M(n,a);break;case"incomplete":d=M(r,a);break;case"active":d=M(s,a);break}return t.jsx(x.div,{ref:i,className:v("ui-step__status",e),"data-status":c,__css:S,...o,children:d||null})});P.displayName="StepStatus";P.__ui__="StepStatus";const F=j(({className:e,children:s,...n},r)=>{const{styles:o}=_(),{index:i,status:p}=C(),c={...o.number};return t.jsx(x.div,{ref:r,className:v("ui-step__number",e),"data-status":p,__css:c,...n,children:s||i+1})});F.displayName="StepNumber";F.__ui__="StepNumber";const L=j(({className:e,...s},n)=>{const{styles:r}=_(),{status:o}=C(),i=o==="complete"?bt:void 0,p={...r.icon};return t.jsx(vt,{ref:n,as:i,className:v("ui-step__icon",e),"data-status":o,__css:p,...s})});L.displayName="StepIcon";L.__ui__="StepIcon";const bt=e=>t.jsx("svg",{"aria-hidden":"true",fill:"currentColor",height:"1em",stroke:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20",width:"1em",...e,children:t.jsx("path",{clipRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",fillRule:"evenodd"})}),B=j(({className:e,...s},n)=>{const{styles:r}=_(),{status:o}=C(),i={...r.title};return t.jsx(x.h3,{ref:n,className:v("ui-step__title",e),"data-status":o,__css:i,...s})});B.displayName="StepTitle";B.__ui__="StepTitle";const m=j((e,s)=>{const[n,r]=jt("Stepper",e),{className:o,children:i,steps:p,...c}=_t(r),{descendants:a,getContainerProps:S,...d}=Pt(c),k=u.useMemo(()=>i??(p==null?void 0:p.map(({description:R,hasSeparator:it=!0,title:A,descriptionProps:pt,separatorProps:ct,statusProps:at,titleProps:lt,...dt},mt)=>t.jsxs(f,{...dt,children:[t.jsx(P,{...at}),t.jsxs(x.div,{flexShrink:0,children:[A?t.jsx(B,{...lt,children:A}):null,R?t.jsx(N,{...pt,children:R}):null]}),it?t.jsx(g,{...ct}):null]},mt))),[i,p]),l={...n.stepper};return t.jsx(Ct,{value:a,children:t.jsx(gt,{value:{...d,styles:n},children:t.jsx(x.div,{className:v("ui-stepper",o),__css:l,...S({},s),children:k})})})});m.displayName="Stepper";m.__ui__="Stepper";const T=({count:e,index:s=0})=>{const[n,r]=u.useState(s),o=typeof e=="number"?e-1:0,i=n/o,p=u.useCallback(l=>l===n,[n]),c=u.useCallback(l=>l<n,[n]),a=u.useCallback(l=>l>n,[n]),S=u.useCallback(l=>l<n?"complete":l>n?"incomplete":"active",[n]),d=u.useCallback(()=>r(l=>typeof e=="number"?Math.min(e,l+1):l+1),[e]),k=u.useCallback(()=>r(l=>Math.max(0,l-1)),[]);return{activeStep:n,activeStepPercent:i,getStepStatus:S,isActiveStep:p,isCompleteStep:c,isIncompleteStep:a,setActiveStep:r,onStepNext:d,onStepPrev:k}},Re={component:m,title:"Components / Navigation / Stepper"},y=()=>{const e=[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],{activeStep:s,onStepNext:n,onStepPrev:r}=T({count:e.length,index:1});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,steps:e}),t.jsxs(I,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})},b=()=>{const e=[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}];return t.jsxs(t.Fragment,{children:[t.jsx(m,{size:"sm",index:1,steps:e}),t.jsx(m,{size:"md",index:1,steps:e}),t.jsx(m,{size:"lg",index:1,steps:e})]})},w=()=>{const e=[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}];return t.jsx(t.Fragment,{children:ut.map(s=>t.jsx(m,{colorScheme:s,index:1,steps:e},s))})},z=()=>{const e=[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],{activeStep:s,onStepNext:n,onStepPrev:r}=T({count:e.length,index:1});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,orientation:"horizontal",steps:e}),t.jsx(m,{h:"sm",index:s,orientation:"vertical",steps:e}),t.jsxs(I,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})},D=()=>{const e=[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],{activeStep:s,onStepNext:n,onStepPrev:r}=T({count:e.length,index:1});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,children:e.map(({description:o,title:i},p)=>t.jsxs(f,{children:[t.jsx(P,{}),t.jsxs(ot,{flexShrink:"0",children:[t.jsx(B,{children:i}),t.jsx(N,{children:o})]}),t.jsx(g,{})]},p))}),t.jsxs(I,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})},H=()=>{const e=[{description:"レッドリボン軍",title:"孫悟空少年編",statusProps:{active:"😎",complete:"😇",incomplete:"😑"}},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編",statusProps:{active:"😎",complete:"😇",incomplete:"😑"}},{description:"ベジータ・ナッパ",title:"サイヤ人編",statusProps:{active:"😎",complete:"😇",incomplete:"😑"}}],{activeStep:s,onStepNext:n,onStepPrev:r}=T({count:e.length,index:1});return t.jsxs(t.Fragment,{children:[t.jsx(m,{index:s,steps:e}),t.jsx(m,{index:s,children:e.map(({description:o,title:i},p)=>t.jsxs(f,{children:[t.jsx(P,{complete:t.jsx(kt,{fontSize:"xl"})}),t.jsxs(ot,{flexShrink:"0",children:[t.jsx(B,{children:i}),t.jsx(N,{children:o})]}),t.jsx(g,{})]},p))}),t.jsxs(I,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})};var E,G,O;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    count: steps.length,
    index: 1
  });
  return <>
      <Stepper index={activeStep} steps={steps} />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(O=(G=y.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var V,W,q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }];
  return <>
      <Stepper size="sm" index={1} steps={steps} />

      <Stepper size="md" index={1} steps={steps} />

      <Stepper size="lg" index={1} steps={steps} />
    </>;
}`,...(q=(W=b.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }];
  return <>
      {colorSchemes.map(colorScheme => <Stepper key={colorScheme} colorScheme={colorScheme} index={1} steps={steps} />)}
    </>;
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;z.parameters={...z.parameters,docs:{...(U=z.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    count: steps.length,
    index: 1
  });
  return <>
      <Stepper index={activeStep} orientation="horizontal" steps={steps} />

      <Stepper h="sm" index={activeStep} orientation="vertical" steps={steps} />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(Y=(X=z.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,tt;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    count: steps.length,
    index: 1
  });
  return <>
      <Stepper index={activeStep}>
        {steps.map(({
        description,
        title
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
}`,...(tt=($=D.parameters)==null?void 0:$.docs)==null?void 0:tt.source}}};var et,nt,st;H.parameters={...H.parameters,docs:{...(et=H.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    description: "レッドリボン軍",
    title: "孫悟空少年編",
    statusProps: {
      active: \`😎\`,
      complete: \`😇\`,
      incomplete: \`😑\`
    }
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編",
    statusProps: {
      active: \`😎\`,
      complete: \`😇\`,
      incomplete: \`😑\`
    }
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編",
    statusProps: {
      active: \`😎\`,
      complete: \`😇\`,
      incomplete: \`😑\`
    }
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    count: steps.length,
    index: 1
  });
  return <>
      <Stepper index={activeStep} steps={steps} />

      <Stepper index={activeStep}>
        {steps.map(({
        description,
        title
      }, index) => <Step key={index}>
            <StepStatus complete={<GhostIcon fontSize="xl" />} />

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
}`,...(st=(nt=H.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};const Ae=["basic","withSize","withColorScheme","withOrientation","customStep","customStatus"];export{Ae as __namedExportsOrder,y as basic,H as customStatus,D as customStep,Re as default,w as withColorScheme,z as withOrientation,b as withSize};
