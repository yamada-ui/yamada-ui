import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as F}from"./index-BwPxMuoB.js";import{u as I}from"./index-kCrJIFe4.js";import{u as ke}from"./index-Cdjsi7Fd.js";import{u as H}from"./index-swnplGbx.js";import{f as A}from"./forward-ref-Ukjd1cIW.js";import{u as he}from"./use-component-style-65RA3nVD.js";import{g as de,ap as Se,b as N,c as L}from"./factory-B_KMcXyW.js";import{o as fe}from"./theme-provider-DGyR61Aa.js";import{A as Ce}from"./avatar-BQpbeicy.js";import{H as ge}from"./heading-CwZHFVcE.js";import{T as je}from"./text-clsxocLN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-qZwaV1-B.js";import"./index-HHw4H1QN.js";import"./index-AoowuF6j.js";import"./icon-DIzRaLo1.js";import"./use-var-Tj-aA0qb.js";import"./use-image-qWTdrDZe.js";const o=A((r,t)=>{const[c,{children:m,...i}]=he("Skeleton",r),a=de(m),u=!!a.length,{className:l,endColor:p,fadeDuration:x=.4,isFitContent:D=u,fitContent:S=D,isLoaded:f,loaded:k=f,speed:h=.8,startColor:z,...d}=fe(i),[C]=Se(),E=ke(f),P=H(z),G=H(p),me=I({duration:typeof x=="string"?x:`${x}s`,keyframes:{"0%":{opacity:0},"100%":{opacity:1}}}),ue=I({direction:"alternate",duration:typeof h=="string"?h:`${h}s`,iterationCount:"infinite",keyframes:{"0%":{background:P,borderColor:P},"100%":{background:G,borderColor:G}},timingFunction:"linear"}),pe={"&::before, &::after, *":{visibility:"hidden"},backgroundClip:"padding-box",boxShadow:"none",color:"transparent",cursor:"default",h:S?"fit-content":"fallback(4, 1rem)",maxW:"100%",pointerEvents:"none",userSelect:"none",w:S?"fit-content":"100%",...c};if(k){const xe=!C()||E?"none":me;return e.jsx(N.div,{ref:t,className:L("ui-skeleton","ui-skeleton--loaded",l),...d,"aria-busy":"false",animation:xe,children:a})}else return e.jsx(N.div,{ref:t,className:L("ui-skeleton",l),__css:pe,...d,"aria-busy":"true",animation:ue,children:a})});o.displayName="Skeleton";o.__ui__="Skeleton";const s=A(({className:r,boxSize:t="fallback(12, 3rem)",children:c,isFitContent:m,fitContent:i=m,...a},u)=>{const l=de(c),p=!!l.length;return i??(i=p),e.jsx(o,{ref:u,className:L("ui-skeleton__circle",r),fitContent:i,rounded:"fallback(full, 9999px)",...i?{}:{boxSize:t},...a,children:l})});s.displayName="SkeletonCircle";s.__ui__="SkeletonCircle";const n=A(({className:r,children:t,endColor:c,fadeDuration:m,gap:i="fallback(2, 0.5rem)",isLoaded:a,lineClamp:u=3,loaded:l,speed:p,startColor:x,textHeight:D="fallback(2, 0.5rem)",...S},f)=>{const k=H(u),h={w:"100%"};return e.jsx(N.div,{ref:f,className:L("ui-skeleton__text",r),__css:h,...S,children:Array(k).fill(0).map((z,d)=>{if(a&&d>0)return null;const C=d+1===k,E=a?{}:{h:D,mb:C?void 0:i,w:k>1&&C?"80%":"100%"};return e.jsx(o,{endColor:c,fadeDuration:m,loaded:l,speed:p,startColor:x,...E,children:d===0?t:void 0},d)})})});n.displayName="SkeletonText";n.__ui__="SkeletonText";const Ye={component:o,title:"Components / Feedback / Skeleton"},ce=async r=>new Promise(t=>{setTimeout(t,r)}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(s,{}),e.jsx(n,{})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{endColor:"orange.500",startColor:"pink.500"}),e.jsx(s,{endColor:"orange.500",startColor:"pink.500"}),e.jsx(n,{endColor:"orange.500",startColor:"pink.500"})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{h:16}),e.jsx(s,{boxSize:16}),e.jsx(n,{textHeight:4})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{speed:2}),e.jsx(s,{speed:2}),e.jsx(n,{speed:2})]}),w=()=>e.jsx(n,{gap:8}),T=()=>e.jsx(n,{lineClamp:5}),y=()=>{const[r,t]=F.useState(!1);return F.useEffect(()=>{ce(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{loaded:r}),e.jsx(s,{loaded:r}),e.jsx(n,{loaded:r})]})},v=()=>{const[r,t]=F.useState(!1);return F.useEffect(()=>{ce(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{fadeDuration:2,h:12,loaded:r,children:e.jsx(ge,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e.jsx(s,{fadeDuration:2,loaded:r,children:e.jsx(Ce,{name:"Hirotomo Yamada"})}),e.jsx(n,{fadeDuration:2,loaded:r,children:e.jsx(je,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var R,V,Y;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(O=(M=j.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var W,q,B;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <Skeleton h={16} />

      <SkeletonCircle boxSize={16} />

      <SkeletonText textHeight={4} />
    </>;
}`,...(B=(q=b.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var J,K,Q;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <Skeleton speed={2} />

      <SkeletonCircle speed={2} />

      <SkeletonText speed={2} />
    </>;
}`,...(Q=(K=_.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <SkeletonText gap={8} />;
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,te;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <SkeletonText lineClamp={5} />;
}`,...(te=(re=T.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ne,ae;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    wait(3000).then(() => {
      setLoaded(true);
    });
  }, []);
  return <>
      <Skeleton loaded={loaded} />

      <SkeletonCircle loaded={loaded} />

      <SkeletonText loaded={loaded} />
    </>;
}`,...(ae=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,ie,le;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    wait(3000).then(() => {
      setLoaded(true);
    });
  }, []);
  return <>
      <Skeleton fadeDuration={2} h={12} loaded={loaded}>
        <Heading isTruncated>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>

      <SkeletonCircle fadeDuration={2} loaded={loaded}>
        <Avatar name="Hirotomo Yamada" />
      </SkeletonCircle>

      <SkeletonText fadeDuration={2} loaded={loaded}>
        <Text isTruncated>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </SkeletonText>
    </>;
}`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const $e=["basic","withColor","withSize","withSpeed","withGap","withLineClamp","withLoaded","withFadeDuration"];export{$e as __namedExportsOrder,g as basic,Ye as default,j as withColor,v as withFadeDuration,w as withGap,T as withLineClamp,y as withLoaded,b as withSize,_ as withSpeed};
