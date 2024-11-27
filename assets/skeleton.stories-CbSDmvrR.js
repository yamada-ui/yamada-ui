import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as v}from"./index-ClcD9ViR.js";import{u as A}from"./index-DYgLfGUQ.js";import{u as pe}from"./index-ZUM2VoAh.js";import{u as E}from"./index-D_3Ilmao.js";import{f as N}from"./forward-ref-D13m8o2p.js";import{u as xe}from"./use-component-style-fOirb5M1.js";import{o as ke}from"./theme-provider-DSx3k1bh.js";import{as as fe,A as ae,b as H,c as I}from"./factory-Dfrbb1EY.js";import{A as he}from"./avatar-Bsodc2rn.js";import{H as Se}from"./heading-ec8qUXoy.js";import{T as Ce}from"./text-ACfjY0cR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-gGKStiao.js";import"./index-DqeO0dAp.js";import"./index-CKnINgQh.js";import"./icon-DDeGQYl6.js";import"./use-var-BQS3JFPa.js";import"./use-image-CeRA-Pvi.js";const o=N((r,t)=>{const[p,a]=xe("Skeleton",r);let{className:l,children:i,endColor:c,fadeDuration:d=.4,isFitContent:x,isLoaded:h,speed:k=.8,startColor:D,...m}=ke(a);const[F]=fe(),S=ae(i),u=pe(h),f=E(D),C=E(c),de=!!S.length;x??(x=de);const le=A({duration:typeof d=="string"?d:`${d}s`,keyframes:{"0%":{opacity:0},"100%":{opacity:1}}}),ce=A({direction:"alternate",duration:typeof k=="string"?k:`${k}s`,iterationCount:"infinite",keyframes:{"0%":{background:f,borderColor:f},"100%":{background:C,borderColor:C}},timingFunction:"linear"}),me={"&::before, &::after, *":{visibility:"hidden"},backgroundClip:"padding-box",boxShadow:"none",color:"transparent",cursor:"default",h:x?"fit-content":"fallback(4, 1rem)",maxW:"100%",pointerEvents:"none",userSelect:"none",w:x?"fit-content":"100%",...p};if(h){const ue=!F()||u?"none":le;return e.jsx(H.div,{ref:t,className:I("ui-skeleton","ui-skeleton--loaded",l),...m,"aria-busy":"false",animation:ue,children:S})}else return e.jsx(H.div,{ref:t,className:I("ui-skeleton",l),__css:me,...m,"aria-busy":"true",animation:ce,children:S})});o.displayName="Skeleton";o.__ui__="Skeleton";const s=N(({className:r,boxSize:t="fallback(12, 3rem)",children:p,isFitContent:a,...l},i)=>{const c=ae(p),d=!!c.length;return a??(a=d),e.jsx(o,{ref:i,className:I("ui-skeleton__circle",r),isFitContent:a,rounded:"fallback(full, 9999px)",...a?{}:{boxSize:t},...l,children:c})});s.displayName="SkeletonCircle";s.__ui__="SkeletonCircle";const n=N(({className:r,children:t,endColor:p,fadeDuration:a,gap:l="fallback(2, 0.5rem)",isLoaded:i,lineClamp:c=3,speed:d,startColor:x,textHeight:h="fallback(2, 0.5rem)",...k},D)=>{const m=E(c),F={w:"100%"};return e.jsx(H.div,{ref:D,className:I("ui-skeleton__text",r),__css:F,...k,children:Array(m).fill(0).map((S,u)=>{if(i&&u>0)return null;const f=u+1===m,C=i?{}:{h,mb:f?void 0:l,w:m>1&&f?"80%":"100%"};return e.jsx(o,{endColor:p,fadeDuration:a,isLoaded:i,speed:d,startColor:x,...C,children:u===0?t:void 0},u)})})});n.displayName="SkeletonText";n.__ui__="SkeletonText";const Me={component:o,title:"Components / Feedback / Skeleton"},ie=async r=>new Promise(t=>{setTimeout(t,r)}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(s,{}),e.jsx(n,{})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{endColor:"orange.500",startColor:"pink.500"}),e.jsx(s,{endColor:"orange.500",startColor:"pink.500"}),e.jsx(n,{endColor:"orange.500",startColor:"pink.500"})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{h:16}),e.jsx(s,{boxSize:16}),e.jsx(n,{textHeight:4})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{speed:2}),e.jsx(s,{speed:2}),e.jsx(n,{speed:2})]}),_=()=>e.jsx(n,{gap:8}),w=()=>e.jsx(n,{lineClamp:5}),T=()=>{const[r,t]=v.useState(!1);return v.useEffect(()=>{ie(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{isLoaded:r}),e.jsx(s,{isLoaded:r}),e.jsx(n,{isLoaded:r})]})},y=()=>{const[r,t]=v.useState(!1);return v.useEffect(()=>{ie(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{fadeDuration:2,h:12,isLoaded:r,children:e.jsx(Se,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e.jsx(s,{fadeDuration:2,isLoaded:r,children:e.jsx(he,{name:"Hirotomo Yamada"})}),e.jsx(n,{fadeDuration:2,isLoaded:r,children:e.jsx(Ce,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var z,P,G;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...(G=(P=g.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var M,R,V;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <Skeleton endColor="orange.500" startColor="pink.500" />

      <SkeletonCircle endColor="orange.500" startColor="pink.500" />

      <SkeletonText endColor="orange.500" startColor="pink.500" />
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
}`,...(B=(q=b.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var J,K,Q;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <SkeletonText gap={8} />;
}`,...(Q=(K=_.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <SkeletonText lineClamp={5} />;
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,te;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(te=(re=T.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ne,se;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    wait(3000).then(() => {
      setIsLoaded(true);
    });
  }, []);
  return <>
      <Skeleton fadeDuration={2} h={12} isLoaded={isLoaded}>
        <Heading isTruncated>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>

      <SkeletonCircle fadeDuration={2} isLoaded={isLoaded}>
        <Avatar name="Hirotomo Yamada" />
      </SkeletonCircle>

      <SkeletonText fadeDuration={2} isLoaded={isLoaded}>
        <Text isTruncated>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </SkeletonText>
    </>;
}`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Re=["basic","withColor","withSize","withSpeed","withGap","withLineClamp","withIsLoaded","withFadeDuration"];export{Re as __namedExportsOrder,g as basic,Me as default,j as withColor,y as withFadeDuration,_ as withGap,T as withIsLoaded,w as withLineClamp,L as withSize,b as withSpeed};
