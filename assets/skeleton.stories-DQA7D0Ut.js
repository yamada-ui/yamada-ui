import{j as e}from"./extends-CwFRzn3r.js";import{r as v}from"./index-BwDkhjyp.js";import{u as A}from"./index-DX38EdL3.js";import{u as pe}from"./index-myp615oj.js";import{u as E}from"./index-B9IsUjMJ.js";import{f as N}from"./forward-ref-BWI-Phbn.js";import{u as xe}from"./use-component-style-D3MffxdG.js";import{o as ke}from"./theme-provider-Bpmh2ODM.js";import{al as fe,p as ae,b as H,c as I}from"./factory-BgMvz7NM.js";import{A as he}from"./avatar-nU7yjk0v.js";import{H as Se}from"./heading-DIkS6Vr3.js";import{T as Ce}from"./text-CxEGNgXo.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Du0-7Fls.js";import"./index-i7wmI0W_.js";import"./index-CzplldKp.js";import"./icon-CvhI1IwG.js";import"./use-var-Dgk44aKJ.js";import"./use-image-08rOoXzX.js";const o=N((r,t)=>{const[u,i]=xe("Skeleton",r);let{className:l,startColor:p,endColor:s,fadeDuration:d=.4,speed:x=.8,isLoaded:h,isFitContent:k,children:D,...c}=ke(i);const[F]=fe(),S=ae(D),m=pe(h),f=E(p),C=E(s),de=!!S.length;k??(k=de);const le=A({keyframes:{"0%":{opacity:0},"100%":{opacity:1}},duration:typeof d=="string"?d:`${d}s`}),ce=A({keyframes:{"0%":{borderColor:f,background:f},"100%":{borderColor:C,background:C}},duration:typeof x=="string"?x:`${x}s`,iterationCount:"infinite",direction:"alternate",timingFunction:"linear"}),me={w:k?"fit-content":"100%",maxW:"100%",h:k?"fit-content":"fallback(4, 1rem)",boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"},...u};if(h){const ue=!F()||m?"none":le;return e.jsx(H.div,{ref:t,className:I("ui-skeleton","ui-skeleton--loaded",l),...c,animation:ue,"aria-busy":"false",children:S})}else return e.jsx(H.div,{ref:t,className:I("ui-skeleton",l),__css:me,...c,animation:ce,"aria-busy":"true",children:S})});o.displayName="Skeleton";o.__ui__="Skeleton";const a=N(({className:r,boxSize:t="fallback(12, 3rem)",children:u,isFitContent:i,...l},p)=>{const s=ae(u),d=!!s.length;return i??(i=d),e.jsx(o,{ref:p,className:I("ui-skeleton__circle",r),rounded:"fallback(full, 9999px)",isFitContent:i,...i?{}:{boxSize:t},...l,children:s})});a.displayName="SkeletonCircle";a.__ui__="SkeletonCircle";const n=N(({className:r,lineClamp:t=3,startColor:u,endColor:i,fadeDuration:l,speed:p,isLoaded:s,gap:d="fallback(2, 0.5rem)",textHeight:x="fallback(2, 0.5rem)",children:h,...k},D)=>{const c=E(t),F={w:"100%"};return e.jsx(H.div,{ref:D,className:I("ui-skeleton__text",r),__css:F,...k,children:Array(c).fill(0).map((S,m)=>{if(s&&m>0)return null;const f=m+1===c,C=s?{}:{mb:f?void 0:d,w:c>1&&f?"80%":"100%",h:x};return e.jsx(o,{startColor:u,endColor:i,fadeDuration:l,speed:p,isLoaded:s,...C,children:m===0?h:void 0},m)})})});n.displayName="SkeletonText";n.__ui__="SkeletonText";const Me={title:"Components / Feedback / Skeleton",component:o},ie=r=>new Promise(t=>{setTimeout(t,r)}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(a,{}),e.jsx(n,{})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{startColor:"pink.500",endColor:"orange.500"}),e.jsx(a,{startColor:"pink.500",endColor:"orange.500"}),e.jsx(n,{startColor:"pink.500",endColor:"orange.500"})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{h:16}),e.jsx(a,{boxSize:16}),e.jsx(n,{textHeight:4})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{speed:2}),e.jsx(a,{speed:2}),e.jsx(n,{speed:2})]}),_=()=>e.jsx(n,{gap:8}),w=()=>e.jsx(n,{lineClamp:5}),T=()=>{const[r,t]=v.useState(!1);return v.useEffect(()=>{ie(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{isLoaded:r}),e.jsx(a,{isLoaded:r}),e.jsx(n,{isLoaded:r})]})},y=()=>{const[r,t]=v.useState(!1);return v.useEffect(()=>{ie(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{h:12,isLoaded:r,fadeDuration:2,children:e.jsx(Se,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e.jsx(a,{isLoaded:r,fadeDuration:2,children:e.jsx(he,{name:"Hirotomo Yamada"})}),e.jsx(n,{isLoaded:r,fadeDuration:2,children:e.jsx(Ce,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var z,P,G;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Re=["basic","withColor","withSize","withSpeed","withGap","withLineClamp","withIsLoaded","withFadeDuration"];export{Re as __namedExportsOrder,g as basic,Me as default,j as withColor,y as withFadeDuration,_ as withGap,T as withIsLoaded,w as withLineClamp,L as withSize,b as withSpeed};
