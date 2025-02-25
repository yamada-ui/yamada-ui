import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as v}from"./index-BwPxMuoB.js";import{u as G}from"./index-MIa0NvBw.js";import{u as ke}from"./index-Cdjsi7Fd.js";import{u as E}from"./index-Boyzt1qu.js";import{f as N}from"./forward-ref-Ukjd1cIW.js";import{u as he}from"./use-component-style-CpB_lyT3.js";import{g as le,ap as Se,b as H,c as F}from"./factory-DbNU74ts.js";import{o as fe}from"./theme-provider-ChqdwXGn.js";import{A as Ce}from"./avatar-BXKzqxBf.js";import{H as ge}from"./heading-DsYXOt72.js";import{T as je}from"./text-DKjBQKmK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-qZwaV1-B.js";import"./index-ZCRYeFYt.js";import"./index-CssvN-gw.js";import"./icon-Dk5VwDTI.js";import"./use-var-DlbRU9j0.js";import"./use-image-D0o6TYRh.js";const o=N((r,t)=>{const[c,{children:m,...i}]=he("Skeleton",r),s=le(m),u=!!s.length,{className:d,endColor:p,fadeDuration:x=.4,isFitContent:I=u,fitContent:S=I,isLoaded:f,loaded:k=f,speed:h=.8,startColor:A,...l}=fe(i),[C]=Se(),D=ke(f),z=E(A),P=E(p),me=G({duration:typeof x=="string"?x:`${x}s`,keyframes:{"0%":{opacity:0},"100%":{opacity:1}}}),ue=G({direction:"alternate",duration:typeof h=="string"?h:`${h}s`,iterationCount:"infinite",keyframes:{"0%":{background:z,borderColor:z},"100%":{background:P,borderColor:P}},timingFunction:"linear"}),pe={"&::before, &::after, *":{visibility:"hidden"},backgroundClip:"padding-box",boxShadow:"none",color:"transparent",cursor:"default",h:S?"fit-content":"fallback(4, 1rem)",maxW:"100%",pointerEvents:"none",userSelect:"none",w:S?"fit-content":"100%",...c};if(k){const xe=!C()||D?"none":me;return e.jsx(H.div,{ref:t,className:F("ui-skeleton","ui-skeleton--loaded",d),...l,"aria-busy":"false",animation:xe,children:s})}else return e.jsx(H.div,{ref:t,className:F("ui-skeleton",d),__css:pe,...l,"aria-busy":"true",animation:ue,children:s})});o.displayName="Skeleton";o.__ui__="Skeleton";const a=N(({className:r,boxSize:t="fallback(12, 3rem)",children:c,isFitContent:m,fitContent:i=m,...s},u)=>{const d=le(c),p=!!d.length;return i??(i=p),e.jsx(o,{ref:u,className:F("ui-skeleton__circle",r),fitContent:i,rounded:"fallback(full, 9999px)",...i?{}:{boxSize:t},...s,children:d})});a.displayName="SkeletonCircle";a.__ui__="SkeletonCircle";const n=N(({className:r,children:t,endColor:c,fadeDuration:m,gap:i="fallback(2, 0.5rem)",isLoaded:s,lineClamp:u=3,loaded:d,speed:p,startColor:x,textHeight:I="fallback(2, 0.5rem)",...S},f)=>{const k=E(u),h={w:"100%"};return e.jsx(H.div,{ref:f,className:F("ui-skeleton__text",r),__css:h,...S,children:Array(k).fill(0).map((A,l)=>{if(s&&l>0)return null;const C=l+1===k,D=s?{}:{h:I,mb:C?void 0:i,w:k>1&&C?"80%":"100%"};return e.jsx(o,{endColor:c,fadeDuration:m,loaded:d,speed:p,startColor:x,...D,children:l===0?t:void 0},l)})})});n.displayName="SkeletonText";n.__ui__="SkeletonText";const Ye={component:o,title:"Components / Feedback / Skeleton"},ce=async r=>new Promise(t=>{setTimeout(t,r)}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(a,{}),e.jsx(n,{})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{endColor:"orange.500",startColor:"pink.500"}),e.jsx(a,{endColor:"orange.500",startColor:"pink.500"}),e.jsx(n,{endColor:"orange.500",startColor:"pink.500"})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{h:16}),e.jsx(a,{boxSize:16}),e.jsx(n,{textHeight:4})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{speed:2}),e.jsx(a,{speed:2}),e.jsx(n,{speed:2})]}),_=()=>e.jsx(n,{gap:8}),w=()=>e.jsx(n,{lineClamp:5}),T=()=>{const[r,t]=v.useState(!1);return v.useEffect(()=>{ce(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{isLoaded:r}),e.jsx(a,{isLoaded:r}),e.jsx(n,{isLoaded:r})]})},y=()=>{const[r,t]=v.useState(!1);return v.useEffect(()=>{ce(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{fadeDuration:2,h:12,isLoaded:r,children:e.jsx(ge,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e.jsx(a,{fadeDuration:2,isLoaded:r,children:e.jsx(Ce,{name:"Hirotomo Yamada"})}),e.jsx(n,{fadeDuration:2,isLoaded:r,children:e.jsx(je,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var R,V,Y;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...(Y=(V=g.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var $,M,O;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Skeleton endColor="orange.500" startColor="pink.500" />

      <SkeletonCircle endColor="orange.500" startColor="pink.500" />

      <SkeletonText endColor="orange.500" startColor="pink.500" />
    </>;
}`,...(O=(M=j.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var W,q,B;L.parameters={...L.parameters,docs:{...(W=L.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <Skeleton h={16} />

      <SkeletonCircle boxSize={16} />

      <SkeletonText textHeight={4} />
    </>;
}`,...(B=(q=L.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <Skeleton speed={2} />

      <SkeletonCircle speed={2} />

      <SkeletonText speed={2} />
    </>;
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <SkeletonText gap={8} />;
}`,...(Z=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,te;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <SkeletonText lineClamp={5} />;
}`,...(te=(re=w.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ne,se;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(se=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,ie,de;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(de=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const $e=["basic","withColor","withSize","withSpeed","withGap","withLineClamp","withIsLoaded","withFadeDuration"];export{$e as __namedExportsOrder,g as basic,Ye as default,j as withColor,y as withFadeDuration,_ as withGap,T as withIsLoaded,w as withLineClamp,L as withSize,b as withSpeed};
