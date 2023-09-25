import{a as l,j as e,F as P}from"./jsx-runtime-29545a09.js";import{I as ue,f as he}from"./fontawesome-icon-f04ed178.js";import{r as u}from"./index-76fb7be0.js";import{c as xe}from"./index-ba282c84.js";import{o as re,w as ve,d as x,e as k,x as I}from"./factory-0893e977.js";import{f as g}from"./forward-ref-8b7d2a6f.js";import{o as ke,d as ge}from"./theme-53967a8a.js";import{b as Ce}from"./icon-1cfd45cb.js";import{a as fe}from"./use-component-style-1d64e7de.js";import{H as D}from"./stack-e0824e8f.js";import{B as v}from"./button-29566724.js";import{B as ce}from"./box-17a9b8c9.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-500c6d69.js";import"./loading-0658c608.js";import"./index-24d8bf0d.js";import"./index-7b119b1a.js";const{DescendantsContextProvider:Pe,useDescendants:Ne,useDescendant:ye}=xe(),[Be,C]=re({name:"StepperContext",errorMessage:`useStepperContext returned is 'undefined'. Seems you forgot to wrap the components in "<Stepper />"`}),be=({index:t,orientation:s="horizontal",showLastSeparator:n=!1,...r})=>{const i=Ne(),c=u.useCallback(a=>a<t?"complete":a>t?"incomplete":"active",[t]),p=u.useCallback((a={},d=null)=>({...r,...a,ref:d,"data-orientation":s}),[s,r]);return{descendants:i,index:t,orientation:s,showLastSeparator:n,getStepStatus:c,getContainerProps:p}},we=()=>{var h;const{orientation:t,getStepStatus:s}=C(),{index:n,register:r,descendants:i}=ye(),c=n===0,p=n===((h=i.lastValue())==null?void 0:h.index),a=s(n),d=u.useCallback((m={},f=null)=>({...m,ref:ve(f,r),"data-status":a,"data-orientation":t}),[t,r,a]);return{index:n,status:a,isFirst:c,isLast:p,getStepProps:d}},o=g((t,s)=>{const[n,r]=fe("Stepper",t),{className:i,steps:c,children:p,...a}=ke(r),{descendants:d,getContainerProps:h,...m}=be(a),f=u.useMemo(()=>p??(c==null?void 0:c.map(({title:j,description:A,hasSeparator:ie=!0,statusProps:pe,titleProps:ae,descriptionProps:le,separatorProps:de,...Se},me)=>l(M,{...Se,children:[e(R,{...pe}),l(x.div,{flexShrink:0,children:[j?e(L,{...ae,children:j}):null,A?e(T,{...le,children:A}):null]}),ie?e(F,{...de}):null]},me))),[p,c]),S={...n.stepper};return e(Pe,{value:d,children:e(Be,{value:{...m,styles:n},children:e(x.div,{className:k("ui-stepper",i),__css:S,...h({},s),children:f})})})}),H=({index:t=0,count:s})=>{const[n,r]=u.useState(t),i=typeof s=="number"?s-1:0,c=n/i,p=u.useCallback(S=>S===n,[n]),a=u.useCallback(S=>S<n,[n]),d=u.useCallback(S=>S>n,[n]),h=u.useCallback(S=>S<n?"complete":S>n?"incomplete":"active",[n]),m=u.useCallback(()=>r(S=>typeof s=="number"?Math.min(s,S+1):S+1),[s]),f=u.useCallback(()=>r(S=>Math.max(0,S-1)),[]);return{activeStep:n,setActiveStep:r,activeStepPercent:c,isActiveStep:p,isCompleteStep:a,isIncompleteStep:d,getStepStatus:h,onStepNext:m,onStepPrev:f}},[_e,N]=re({name:"StepperContext",errorMessage:`useStepContext returned is 'undefined'. Seems you forgot to wrap the components in "<Step />"`}),M=g(({className:t,...s},n)=>{const{orientation:r,showLastSeparator:i,styles:c}=C(),{index:p,status:a,isFirst:d,isLast:h,getStepProps:m}=we(),f={...c.step};return e(_e,{value:{index:p,status:a,isFirst:d,isLast:h},children:e(x.div,{className:k("ui-step",t),__css:f,"data-orientation":r,"data-stretch":ge(i),...m(s,n)})})}),L=g(({className:t,...s},n)=>{const{styles:r}=C(),{status:i}=N(),c={...r.title};return e(x.h3,{ref:n,className:k("ui-step-title",t),"data-status":i,__css:c,...s})}),T=g(({className:t,...s},n)=>{const{styles:r}=C(),{status:i}=N(),c={...r.description};return e(x.p,{ref:n,className:k("ui-step-description",t),"data-status":i,__css:c,...s})}),F=g(({className:t,...s},n)=>{const{orientation:r,showLastSeparator:i,styles:c}=C(),{status:p,isLast:a}=N(),d={...c.separator};return a&&!i?null:e(x.div,{ref:n,className:k("ui-step-separator",t),role:"separator","data-orientation":r,"data-status":p,__css:d,...s})}),R=g(({className:t,complete:s=e(ze,{}),incomplete:n=e(O,{}),active:r=e(O,{}),...i},c)=>{const{styles:p}=C(),{status:a,...d}=N(),h={...p.status};let m=null;switch(a){case"complete":m=I(s,d);break;case"incomplete":m=I(n,d);break;case"active":m=I(r,d);break}return e(x.div,{ref:c,className:k("ui-step-status",t),"data-status":a,__css:h,...i,children:m?e(P,{children:m}):null})}),O=g(({className:t,children:s,...n},r)=>{const{styles:i}=C(),{status:c,index:p}=N(),a={...i.number};return e(x.div,{ref:r,className:k("ui-step-number",t),"data-status":c,__css:a,...n,children:s||p+1})}),ze=g(({className:t,...s},n)=>{const{styles:r}=C(),{status:i}=N(),c=i==="complete"?De:void 0,p={...r.icon};return e(Ce,{ref:n,as:c,className:k("ui-step-icon",t),"data-status":i,__css:p,...s})}),De=t=>e("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20","aria-hidden":"true",height:"1em",width:"1em",...t,children:e("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),Xe={title:"Components / Navigation / Stepper",component:o},y=()=>{const t=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=H({index:1,count:t.length});return l(P,{children:[e(o,{index:s,steps:t}),l(D,{children:[e(v,{onClick:r,children:"Prev"}),e(v,{onClick:n,children:"Next"})]})]})},B=()=>{const t=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return l(P,{children:[e(o,{size:"sm",index:1,steps:t}),e(o,{size:"md",index:1,steps:t}),e(o,{size:"lg",index:1,steps:t})]})},b=()=>{const t=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return l(P,{children:[e(o,{colorScheme:"primary",index:1,steps:t}),e(o,{colorScheme:"secondary",index:1,steps:t}),e(o,{colorScheme:"warning",index:1,steps:t}),e(o,{colorScheme:"danger",index:1,steps:t}),e(o,{colorScheme:"link",index:1,steps:t}),e(o,{colorScheme:"gray",index:1,steps:t}),e(o,{colorScheme:"zinc",index:1,steps:t}),e(o,{colorScheme:"neutral",index:1,steps:t}),e(o,{colorScheme:"stone",index:1,steps:t}),e(o,{colorScheme:"red",index:1,steps:t}),e(o,{colorScheme:"rose",index:1,steps:t}),e(o,{colorScheme:"pink",index:1,steps:t}),e(o,{colorScheme:"orange",index:1,steps:t}),e(o,{colorScheme:"amber",index:1,steps:t}),e(o,{colorScheme:"yellow",index:1,steps:t}),e(o,{colorScheme:"lime",index:1,steps:t}),e(o,{colorScheme:"green",index:1,steps:t}),e(o,{colorScheme:"emerald",index:1,steps:t}),e(o,{colorScheme:"teal",index:1,steps:t}),e(o,{colorScheme:"cyan",index:1,steps:t}),e(o,{colorScheme:"sky",index:1,steps:t}),e(o,{colorScheme:"blue",index:1,steps:t}),e(o,{colorScheme:"indigo",index:1,steps:t}),e(o,{colorScheme:"violet",index:1,steps:t}),e(o,{colorScheme:"purple",index:1,steps:t}),e(o,{colorScheme:"fuchsia",index:1,steps:t})]})},w=()=>{const t=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=H({index:1,count:t.length});return l(P,{children:[e(o,{index:s,steps:t,orientation:"horizontal"}),e(o,{index:s,steps:t,orientation:"vertical",h:"sm"}),l(D,{children:[e(v,{onClick:r,children:"Prev"}),e(v,{onClick:n,children:"Next"})]})]})},_=()=>{const t=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:r}=H({index:1,count:t.length});return l(P,{children:[e(o,{index:s,children:t.map(({title:i,description:c},p)=>l(M,{children:[e(R,{}),l(ce,{flexShrink:"0",children:[e(L,{children:i}),e(T,{children:c})]}),e(F,{})]},p))}),l(D,{children:[e(v,{onClick:r,children:"Prev"}),e(v,{onClick:n,children:"Next"})]})]})},z=()=>{const t=[{title:"孫悟空少年編",description:"レッドリボン軍",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"サイヤ人編",description:"ベジータ・ナッパ",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}}],{activeStep:s,onStepNext:n,onStepPrev:r}=H({index:1,count:t.length});return l(P,{children:[e(o,{index:s,steps:t}),e(o,{index:s,children:t.map(({title:i,description:c},p)=>l(M,{children:[e(R,{complete:e(ue,{icon:he})}),l(ce,{flexShrink:"0",children:[e(L,{children:i}),e(T,{children:c})]}),e(F,{})]},p))}),l(D,{children:[e(v,{onClick:r,children:"Prev"}),e(v,{onClick:n,children:"Next"})]})]})};var E,V,W;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: '孫悟空少年編',
    description: 'レッドリボン軍'
  }, {
    title: 'ピッコロ大魔王編',
    description: 'ピッコロ大魔王'
  }, {
    title: 'サイヤ人編',
    description: 'ベジータ・ナッパ'
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
}`,...(W=(V=y.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var $,q,G;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: '孫悟空少年編',
    description: 'レッドリボン軍'
  }, {
    title: 'ピッコロ大魔王編',
    description: 'ピッコロ大魔王'
  }, {
    title: 'サイヤ人編',
    description: 'ベジータ・ナッパ'
  }];
  return <>
      <Stepper size='sm' index={1} steps={steps} />

      <Stepper size='md' index={1} steps={steps} />

      <Stepper size='lg' index={1} steps={steps} />
    </>;
}`,...(G=(q=B.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: '孫悟空少年編',
    description: 'レッドリボン軍'
  }, {
    title: 'ピッコロ大魔王編',
    description: 'ピッコロ大魔王'
  }, {
    title: 'サイヤ人編',
    description: 'ベジータ・ナッパ'
  }];
  return <>
      <Stepper colorScheme='primary' index={1} steps={steps} />

      <Stepper colorScheme='secondary' index={1} steps={steps} />

      <Stepper colorScheme='warning' index={1} steps={steps} />

      <Stepper colorScheme='danger' index={1} steps={steps} />

      <Stepper colorScheme='link' index={1} steps={steps} />

      <Stepper colorScheme='gray' index={1} steps={steps} />

      <Stepper colorScheme='zinc' index={1} steps={steps} />

      <Stepper colorScheme='neutral' index={1} steps={steps} />

      <Stepper colorScheme='stone' index={1} steps={steps} />

      <Stepper colorScheme='red' index={1} steps={steps} />

      <Stepper colorScheme='rose' index={1} steps={steps} />

      <Stepper colorScheme='pink' index={1} steps={steps} />

      <Stepper colorScheme='orange' index={1} steps={steps} />

      <Stepper colorScheme='amber' index={1} steps={steps} />

      <Stepper colorScheme='yellow' index={1} steps={steps} />

      <Stepper colorScheme='lime' index={1} steps={steps} />

      <Stepper colorScheme='green' index={1} steps={steps} />

      <Stepper colorScheme='emerald' index={1} steps={steps} />

      <Stepper colorScheme='teal' index={1} steps={steps} />

      <Stepper colorScheme='cyan' index={1} steps={steps} />

      <Stepper colorScheme='sky' index={1} steps={steps} />

      <Stepper colorScheme='blue' index={1} steps={steps} />

      <Stepper colorScheme='indigo' index={1} steps={steps} />

      <Stepper colorScheme='violet' index={1} steps={steps} />

      <Stepper colorScheme='purple' index={1} steps={steps} />

      <Stepper colorScheme='fuchsia' index={1} steps={steps} />
    </>;
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: '孫悟空少年編',
    description: 'レッドリボン軍'
  }, {
    title: 'ピッコロ大魔王編',
    description: 'ピッコロ大魔王'
  }, {
    title: 'サイヤ人編',
    description: 'ベジータ・ナッパ'
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
      <Stepper index={activeStep} steps={steps} orientation='horizontal' />

      <Stepper index={activeStep} steps={steps} orientation='vertical' h='sm' />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: '孫悟空少年編',
    description: 'レッドリボン軍'
  }, {
    title: 'ピッコロ大魔王編',
    description: 'ピッコロ大魔王'
  }, {
    title: 'サイヤ人編',
    description: 'ベジータ・ナッパ'
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
        {/* @ts-ignore */}
        {steps.map(({
        title,
        description
      }, index) => <Step key={index}>
            <StepStatus />

            <Box flexShrink='0'>
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
}`,...(te=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,se,oe;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    title: '孫悟空少年編',
    description: 'レッドリボン軍',
    statusProps: {
      complete: \`😇\`,
      incomplete: \`😑\`,
      active: \`😎\`
    }
  }, {
    title: 'ピッコロ大魔王編',
    description: 'ピッコロ大魔王',
    statusProps: {
      complete: \`😇\`,
      incomplete: \`😑\`,
      active: \`😎\`
    }
  }, {
    title: 'サイヤ人編',
    description: 'ベジータ・ナッパ',
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
        {/* @ts-ignore */}
        {steps.map(({
        title,
        description
      }, index) => <Step key={index}>
            <StepStatus complete={<Icon icon={faPoo} />} />

            <Box flexShrink='0'>
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
}`,...(oe=(se=z.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const Ye=["basic","withSize","withColorScheme","withOrientation","customStep","customStatus"];export{Ye as __namedExportsOrder,y as basic,z as customStatus,_ as customStep,Xe as default,b as withColorScheme,w as withOrientation,B as withSize};
//# sourceMappingURL=stepper.stories-5e080a81.js.map
