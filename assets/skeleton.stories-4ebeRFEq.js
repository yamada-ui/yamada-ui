import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as I}from"./index-BwDkhjyp.js";import{u as N}from"./index-h-jaBLlY.js";import{u as pe}from"./index-myp615oj.js";import{u as F}from"./index-Cf9riCBR.js";import{f as A}from"./forward-ref-BmTAT9U5.js";import{u as xe}from"./use-component-style-D81cq1tY.js";import{o as fe}from"./theme-provider-C2d9AdUa.js";import{ac as he,t as ae,b as H,c as _}from"./factory-CUXX-tpD.js";import{A as ke}from"./avatar-CVJZfHHc.js";import{H as Se}from"./heading-DZ0YHYUX.js";import{T as Ce}from"./text-BYRi2Qag.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Du0-7Fls.js";import"./index-Do1128IA.js";import"./index-BtGZwc5R.js";import"./extends-CF3RwP-h.js";import"./icon-AfnI_U7a.js";import"./index-Bg9mmZcs.js";import"./use-image-Cu-4Utlz.js";const o=A((r,t)=>{const[u,a]=xe("Skeleton",r);let{className:d,startColor:p,endColor:n,fadeDuration:i=.4,speed:x=.8,isLoaded:k,isFitContent:f,children:D,...c}=fe(a);const[E]=he(),S=ae(D),l=pe(k),h=F(p),C=F(n),de=!!S.length;f??(f=de);const ce=N({keyframes:{"0%":{opacity:0},"100%":{opacity:1}},duration:typeof i=="string"?i:`${i}s`}),le=N({keyframes:{"0%":{borderColor:h,background:h},"100%":{borderColor:C,background:C}},duration:typeof x=="string"?x:`${x}s`,iterationCount:"infinite",direction:"alternate",timingFunction:"linear"}),me={w:f?"fit-content":"100%",maxW:"100%",h:f?"fit-content":"fallback(4, 1rem)",boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"},...u};if(k){const ue=!E()||l?"none":ce;return e.jsx(H.div,{ref:t,className:_("ui-skeleton","ui-skeleton--loaded",d),...c,animation:ue,"aria-busy":"false",children:S})}else return e.jsx(H.div,{ref:t,className:_("ui-skeleton",d),__css:me,...c,animation:le,"aria-busy":"true",children:S})}),m=A(({className:r,boxSize:t="fallback(12, 3rem)",children:u,isFitContent:a,...d},p)=>{const n=ae(u),i=!!n.length;return a??(a=i),e.jsx(o,{ref:p,className:_("ui-skeleton__circle",r),rounded:"fallback(full, 9999px)",isFitContent:a,...a?{}:{boxSize:t},...d,children:n})}),s=A(({className:r,lineClamp:t=3,startColor:u,endColor:a,fadeDuration:d,speed:p,isLoaded:n,gap:i="fallback(2, 0.5rem)",textHeight:x="fallback(2, 0.5rem)",children:k,...f},D)=>{const c=F(t),E={w:"100%"};return e.jsx(H.div,{ref:D,className:_("ui-skeleton__text",r),__css:E,...f,children:Array(c).fill(0).map((S,l)=>{if(n&&l>0)return null;const h=l+1===c,C=n?{}:{mb:h?void 0:i,w:c>1&&h?"80%":"100%",h:x};return e.jsx(o,{startColor:u,endColor:a,fadeDuration:d,speed:p,isLoaded:n,...C,children:l===0?k:void 0},l)})})}),Re={title:"Components / Feedback / Skeleton",component:o},ie=r=>new Promise(t=>{setTimeout(t,r)}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(m,{}),e.jsx(s,{})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{startColor:"pink.500",endColor:"orange.500"}),e.jsx(m,{startColor:"pink.500",endColor:"orange.500"}),e.jsx(s,{startColor:"pink.500",endColor:"orange.500"})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{h:16}),e.jsx(m,{boxSize:16}),e.jsx(s,{textHeight:4})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{speed:2}),e.jsx(m,{speed:2}),e.jsx(s,{speed:2})]}),w=()=>e.jsx(s,{gap:8}),T=()=>e.jsx(s,{lineClamp:5}),v=()=>{const[r,t]=I.useState(!1);return I.useEffect(()=>{ie(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{isLoaded:r}),e.jsx(m,{isLoaded:r}),e.jsx(s,{isLoaded:r})]})},y=()=>{const[r,t]=I.useState(!1);return I.useEffect(()=>{ie(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{h:12,isLoaded:r,fadeDuration:2,children:e.jsx(Se,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e.jsx(m,{isLoaded:r,fadeDuration:2,children:e.jsx(ke,{name:"Hirotomo Yamada"})}),e.jsx(s,{isLoaded:r,fadeDuration:2,children:e.jsx(Ce,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var z,P,G;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...(G=(P=g.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var M,R,V;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <Skeleton startColor="pink.500" endColor="orange.500" />

      <SkeletonCircle startColor="pink.500" endColor="orange.500" />

      <SkeletonText startColor="pink.500" endColor="orange.500" />
    </>;
}`,...(V=(R=j.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var Y,$,O;L.parameters={...L.parameters,docs:{...(Y=L.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Skeleton h={16} />

      <SkeletonCircle boxSize={16} />

      <SkeletonText textHeight={4} />
    </>;
}`,...(O=($=L.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var W,q,B;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <Skeleton speed={2} />

      <SkeletonCircle speed={2} />

      <SkeletonText speed={2} />
    </>;
}`,...(B=(q=b.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <SkeletonText gap={8} />;
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <SkeletonText lineClamp={5} />;
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ne,se;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Ve=["basic","withColor","withSize","withSpeed","withGap","withLineClamp","withIsLoaded","withFadeDuration"];export{Ve as __namedExportsOrder,g as basic,Re as default,j as withColor,y as withFadeDuration,w as withGap,v as withIsLoaded,T as withLineClamp,L as withSize,b as withSpeed};
