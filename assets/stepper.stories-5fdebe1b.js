import{a as l,j as e,F as P}from"./jsx-runtime-276775ef.js";import{I as me,f as he}from"./fontawesome-icon-fa719382.js";import{r as m}from"./index-1cdf6ce0.js";import{c as xe}from"./index-049f74af.js";import{o as re,w as ve,d as x,e as k,x as I}from"./factory-75cc801c.js";import{f as C}from"./forward-ref-86842115.js";import{o as ke,d as Ce}from"./theme-8f32df8a.js";import{b as ge}from"./icon-e7971e5d.js";import{a as fe}from"./use-component-style-9ee8741d.js";import{H as D}from"./stack-960c90c9.js";import{B as v}from"./button-aae638aa.js";import{B as ie}from"./box-34b29ebb.js";import"./index-53e63a74.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./index-71f4e961.js";import"./loading-b1bbd31e.js";import"./index-7a67cca8.js";import"./index-cb49aa84.js";const{DescendantsContextProvider:Pe,useDescendants:Ne,useDescendant:ye}=xe(),[Be,g]=re({name:"StepperContext",errorMessage:`useStepperContext returned is 'undefined'. Seems you forgot to wrap the components in "<Stepper />"`}),be=({index:t,orientation:s="horizontal",showLastSeparator:n=!1,...o})=>{const i=Ne(),r=m.useCallback(a=>a<t?"complete":a>t?"incomplete":"active",[t]),p=m.useCallback((a={},d=null)=>({...o,...a,ref:d,"data-orientation":s}),[s,o]);return{descendants:i,index:t,orientation:s,showLastSeparator:n,getStepStatus:r,getContainerProps:p}},we=()=>{var h;const{orientation:t,getStepStatus:s}=g(),{index:n,register:o,descendants:i}=ye(),r=n===0,p=n===((h=i.lastValue())==null?void 0:h.index),a=s(n),d=m.useCallback((u={},f=null)=>({...u,ref:ve(f,o),"data-status":a,"data-orientation":t}),[t,o,a]);return{index:n,status:a,isFirst:r,isLast:p,getStepProps:d}},c=C((t,s)=>{const[n,o]=fe("Stepper",t),{className:i,steps:r,children:p,...a}=ke(o),{descendants:d,getContainerProps:h,...u}=be(a),f=m.useMemo(()=>p??(r==null?void 0:r.map(({title:j,description:A,hasSeparator:ce=!0,statusProps:pe,titleProps:ae,descriptionProps:le,separatorProps:de,...Se},ue)=>l(M,{...Se,children:[e(R,{...pe}),l(x.div,{flexShrink:0,children:[j?e(L,{...ae,children:j}):null,A?e(T,{...le,children:A}):null]}),ce?e(F,{...de}):null]},ue))),[p,r]),S={...n.stepper};return e(Pe,{value:d,children:e(Be,{value:{...u,styles:n},children:e(x.div,{className:k("ui-stepper",i),__css:S,...h({},s),children:f})})})}),H=({index:t=0,count:s})=>{const[n,o]=m.useState(t),i=typeof s=="number"?s-1:0,r=n/i,p=m.useCallback(S=>S===n,[n]),a=m.useCallback(S=>S<n,[n]),d=m.useCallback(S=>S>n,[n]),h=m.useCallback(S=>S<n?"complete":S>n?"incomplete":"active",[n]),u=m.useCallback(()=>o(S=>typeof s=="number"?Math.min(s,S+1):S+1),[s]),f=m.useCallback(()=>o(S=>Math.max(0,S-1)),[]);return{activeStep:n,setActiveStep:o,activeStepPercent:r,isActiveStep:p,isCompleteStep:a,isIncompleteStep:d,getStepStatus:h,onStepNext:u,onStepPrev:f}},[_e,N]=re({name:"StepperContext",errorMessage:`useStepContext returned is 'undefined'. Seems you forgot to wrap the components in "<Step />"`}),M=C(({className:t,...s},n)=>{const{orientation:o,showLastSeparator:i,styles:r}=g(),{index:p,status:a,isFirst:d,isLast:h,getStepProps:u}=we(),f={...r.step};return e(_e,{value:{index:p,status:a,isFirst:d,isLast:h},children:e(x.div,{className:k("ui-step",t),__css:f,"data-orientation":o,"data-stretch":Ce(i),...u(s,n)})})}),L=C(({className:t,...s},n)=>{const{styles:o}=g(),{status:i}=N(),r={...o.title};return e(x.h3,{ref:n,className:k("ui-step-title",t),"data-status":i,__css:r,...s})}),T=C(({className:t,...s},n)=>{const{styles:o}=g(),{status:i}=N(),r={...o.description};return e(x.p,{ref:n,className:k("ui-step-description",t),"data-status":i,__css:r,...s})}),F=C(({className:t,...s},n)=>{const{orientation:o,showLastSeparator:i,styles:r}=g(),{status:p,isLast:a}=N(),d={...r.separator};return a&&!i?null:e(x.div,{ref:n,className:k("ui-step-separator",t),role:"separator","data-orientation":o,"data-status":p,__css:d,...s})}),R=C(({className:t,complete:s=e(ze,{}),incomplete:n=e(O,{}),active:o=e(O,{}),...i},r)=>{const{styles:p}=g(),{status:a,...d}=N(),h={...p.status};let u=null;switch(a){case"complete":u=I(s,d);break;case"incomplete":u=I(n,d);break;case"active":u=I(o,d);break}return e(x.div,{ref:r,className:k("ui-step-status",t),"data-status":a,__css:h,...i,children:u?e(P,{children:u}):null})}),O=C(({className:t,children:s,...n},o)=>{const{styles:i}=g(),{status:r,index:p}=N(),a={...i.number};return e(x.div,{ref:o,className:k("ui-step-number",t),"data-status":r,__css:a,...n,children:s||p+1})}),ze=C(({className:t,...s},n)=>{const{styles:o}=g(),{status:i}=N(),r=i==="complete"?De:void 0,p={...o.icon};return e(ge,{ref:n,as:r,className:k("ui-step-icon",t),"data-status":i,__css:p,...s})}),De=t=>e("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20","aria-hidden":"true",height:"1em",width:"1em",...t,children:e("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),Ue={title:"Components / Navigation / Stepper",component:c},y=()=>{const t=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:o}=H({index:1,count:t.length});return l(P,{children:[e(c,{index:s,steps:t}),l(D,{children:[e(v,{onClick:o,children:"Prev"}),e(v,{onClick:n,children:"Next"})]})]})},B=()=>{const t=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return l(P,{children:[e(c,{size:"sm",index:1,steps:t}),e(c,{size:"md",index:1,steps:t}),e(c,{size:"lg",index:1,steps:t})]})},b=()=>{const t=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}];return l(P,{children:[e(c,{colorScheme:"primary",index:1,steps:t}),e(c,{colorScheme:"secondary",index:1,steps:t}),e(c,{colorScheme:"warning",index:1,steps:t}),e(c,{colorScheme:"danger",index:1,steps:t}),e(c,{colorScheme:"link",index:1,steps:t}),e(c,{colorScheme:"gray",index:1,steps:t}),e(c,{colorScheme:"red",index:1,steps:t}),e(c,{colorScheme:"orange",index:1,steps:t}),e(c,{colorScheme:"yellow",index:1,steps:t}),e(c,{colorScheme:"green",index:1,steps:t}),e(c,{colorScheme:"teal",index:1,steps:t}),e(c,{colorScheme:"blue",index:1,steps:t}),e(c,{colorScheme:"cyan",index:1,steps:t}),e(c,{colorScheme:"purple",index:1,steps:t}),e(c,{colorScheme:"pink",index:1,steps:t})]})},w=()=>{const t=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:o}=H({index:1,count:t.length});return l(P,{children:[e(c,{index:s,steps:t,orientation:"horizontal"}),e(c,{index:s,steps:t,orientation:"vertical",h:"sm"}),l(D,{children:[e(v,{onClick:o,children:"Prev"}),e(v,{onClick:n,children:"Next"})]})]})},_=()=>{const t=[{title:"孫悟空少年編",description:"レッドリボン軍"},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王"},{title:"サイヤ人編",description:"ベジータ・ナッパ"}],{activeStep:s,onStepNext:n,onStepPrev:o}=H({index:1,count:t.length});return l(P,{children:[e(c,{index:s,children:t.map(({title:i,description:r},p)=>l(M,{children:[e(R,{}),l(ie,{flexShrink:"0",children:[e(L,{children:i}),e(T,{children:r})]}),e(F,{})]},p))}),l(D,{children:[e(v,{onClick:o,children:"Prev"}),e(v,{onClick:n,children:"Next"})]})]})},z=()=>{const t=[{title:"孫悟空少年編",description:"レッドリボン軍",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"ピッコロ大魔王編",description:"ピッコロ大魔王",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}},{title:"サイヤ人編",description:"ベジータ・ナッパ",statusProps:{complete:"😇",incomplete:"😑",active:"😎"}}],{activeStep:s,onStepNext:n,onStepPrev:o}=H({index:1,count:t.length});return l(P,{children:[e(c,{index:s,steps:t}),e(c,{index:s,children:t.map(({title:i,description:r},p)=>l(M,{children:[e(R,{complete:e(me,{icon:he})}),l(ie,{flexShrink:"0",children:[e(L,{children:i}),e(T,{children:r})]}),e(F,{})]},p))}),l(D,{children:[e(v,{onClick:o,children:"Prev"}),e(v,{onClick:n,children:"Next"})]})]})};var E,V,W;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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

      <Stepper colorScheme='red' index={1} steps={steps} />

      <Stepper colorScheme='orange' index={1} steps={steps} />

      <Stepper colorScheme='yellow' index={1} steps={steps} />

      <Stepper colorScheme='green' index={1} steps={steps} />

      <Stepper colorScheme='teal' index={1} steps={steps} />

      <Stepper colorScheme='blue' index={1} steps={steps} />

      <Stepper colorScheme='cyan' index={1} steps={steps} />

      <Stepper colorScheme='purple' index={1} steps={steps} />

      <Stepper colorScheme='pink' index={1} steps={steps} />
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
}`,...(oe=(se=z.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const Xe=["basic","withSize","withColorScheme","withOrientation","customStep","customStatus"];export{Xe as __namedExportsOrder,y as basic,z as customStatus,_ as customStep,Ue as default,b as withColorScheme,w as withOrientation,B as withSize};
//# sourceMappingURL=stepper.stories-5fdebe1b.js.map
