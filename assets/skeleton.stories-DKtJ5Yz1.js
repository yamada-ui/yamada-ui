import{j as e,a as l,F as m}from"./jsx-runtime-2xDJh5tt.js";import{r as I}from"./index-CBqU2yxZ.js";import{u as P}from"./index-Bg6pPbCO.js";import{u as Ce}from"./index-wawZIfVM.js";import{u as B}from"./index-DTWJYyBb.js";import{f as z}from"./forward-ref-DuAegr0M.js";import{a as Se}from"./use-component-style-C8HPJoXa.js";import{o as fe}from"./theme-provider-BSSgazaQ.js";import{L as ke,v as ue,u as N,a as _}from"./factory-DpmudyXM.js";import{A as ge}from"./avatar-CraAvKrz.js";import{H as Le}from"./heading-CFAmLACf.js";import{T as Fe}from"./text-BC__m9gv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-rYLD436_.js";import"./index-kMjdInsO.js";import"./index-Dft46qqu.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./icon-BPDO9FjE.js";import"./index-CjPoKz7c.js";import"./use-image-CDPUeViy.js";const t=z((r,o)=>{const[h,s]=Se("Skeleton",r);let{className:u,startColor:C,endColor:n,fadeDuration:i=.4,speed:S=.8,isLoaded:g,isFitContent:f,children:y,...d}=fe(s);const[H]=ke(),L=ue(y),c=Ce(g),k=B(C),F=B(n),ce=!!L.length;f??(f=ce);const le=P({keyframes:{"0%":{opacity:0},"100%":{opacity:1}},duration:typeof i=="string"?i:`${i}s`}),me=P({keyframes:{"0%":{borderColor:k,background:k},"100%":{borderColor:F,background:F}},duration:typeof S=="string"?S:`${S}s`,iterationCount:"infinite",direction:"alternate",timingFunction:"linear"}),pe={w:f?"fit-content":"100%",maxW:"100%",h:f?"fit-content":"1rem",boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"},...h};if(g){const he=!H()||c?"none":le;return e(N.div,{ref:o,className:_("ui-skeleton","ui-skeleton--loaded",u),...d,animation:he,children:L})}else return e(N.div,{ref:o,className:_("ui-skeleton",u),__css:pe,...d,animation:me,children:L})}),p=z(({className:r,boxSize:o="12",children:h,isFitContent:s,...u},C)=>{const n=ue(h),i=!!n.length;return s??(s=i),e(t,{ref:C,className:_("ui-skeleton__circle",r),rounded:"9999px",isFitContent:s,...s?{}:{boxSize:o},...u,children:n})}),a=z(({className:r,lineClamp:o=3,startColor:h,endColor:s,fadeDuration:u,speed:C,isLoaded:n,gap:i="0.5rem",textHeight:S="0.5rem",children:g,...f},y)=>{const d=B(o),H={w:"100%"};return e(N.div,{ref:y,className:_("ui-skeleton__text",r),__css:H,...f,children:Array(d).fill(0).map((L,c)=>{if(n&&c>0)return null;const k=c+1===d,F=n?{}:{mb:k?void 0:i,w:d>1&&k?"80%":"100%",h:S};return e(t,{startColor:h,endColor:s,fadeDuration:u,speed:C,isLoaded:n,...F,children:c===0?g:void 0},c)})})}),Ye={title:"Components / Feedback / Skeleton",component:t},de=r=>new Promise(o=>{setTimeout(o,r)}),x=()=>l(m,{children:[e(t,{}),e(p,{}),e(a,{})]}),w=()=>l(m,{children:[e(t,{startColor:"pink.500",endColor:"orange.500"}),e(p,{startColor:"pink.500",endColor:"orange.500"}),e(a,{startColor:"pink.500",endColor:"orange.500"})]}),T=()=>l(m,{children:[e(t,{h:16}),e(p,{boxSize:16}),e(a,{textHeight:4})]}),b=()=>l(m,{children:[e(t,{speed:2}),e(p,{speed:2}),e(a,{speed:2})]}),E=()=>e(a,{gap:8}),D=()=>e(a,{lineClamp:5}),v=()=>{const[r,o]=I.useState(!1);return I.useEffect(()=>{de(3e3).then(()=>{o(!0)})},[]),l(m,{children:[e(t,{isLoaded:r}),e(p,{isLoaded:r}),e(a,{isLoaded:r})]})},A=()=>{const[r,o]=I.useState(!1);return I.useEffect(()=>{de(3e3).then(()=>{o(!0)})},[]),l(m,{children:[e(t,{h:12,isLoaded:r,fadeDuration:2,children:e(Le,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e(p,{isLoaded:r,fadeDuration:2,children:e(ge,{name:"Hirotomo Yamada"})}),e(a,{isLoaded:r,fadeDuration:2,children:e(Fe,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var j,G,M;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...(M=(G=x.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var V,Y,$;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Skeleton startColor="pink.500" endColor="orange.500" />

      <SkeletonCircle startColor="pink.500" endColor="orange.500" />

      <SkeletonText startColor="pink.500" endColor="orange.500" />
    </>;
}`,...($=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var O,R,W;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <>
      <Skeleton h={16} />

      <SkeletonCircle boxSize={16} />

      <SkeletonText textHeight={4} />
    </>;
}`,...(W=(R=T.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var q,J,K;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Skeleton speed={2} />

      <SkeletonCircle speed={2} />

      <SkeletonText speed={2} />
    </>;
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <SkeletonText gap={8} />;
}`,...(X=(U=E.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,re;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <SkeletonText lineClamp={5} />;
}`,...(re=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,te,ne;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    wait(3000).then(() => {
      setIsLoaded(true);
    });
  }, []);
  return <>
      <Skeleton isLoaded={isLoaded} />

      <SkeletonCircle isLoaded={isLoaded} />

      <SkeletonText isLoaded={isLoaded} />
    </>;
}`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,se,ie;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    wait(3000).then(() => {
      setIsLoaded(true);
    });
  }, []);
  return <>
      <Skeleton h={12} isLoaded={isLoaded} fadeDuration={2}>
        <Heading isTruncated>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>

      <SkeletonCircle isLoaded={isLoaded} fadeDuration={2}>
        <Avatar name="Hirotomo Yamada" />
      </SkeletonCircle>

      <SkeletonText isLoaded={isLoaded} fadeDuration={2}>
        <Text isTruncated>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </SkeletonText>
    </>;
}`,...(ie=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const $e=["basic","withColor","withSize","withSpeed","withGap","withLineClamp","withIsLoaded","withFadeDuration"];export{$e as __namedExportsOrder,x as basic,Ye as default,w as withColor,A as withFadeDuration,E as withGap,v as withIsLoaded,D as withLineClamp,T as withSize,b as withSpeed};
