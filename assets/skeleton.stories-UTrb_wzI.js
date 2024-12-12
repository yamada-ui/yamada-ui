import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as F}from"./index-ClcD9ViR.js";import{u as P}from"./index-X5oM7jx7.js";import{u as ke}from"./index-ZUM2VoAh.js";import{u as E}from"./index-CpbJQdhj.js";import{f as N}from"./forward-ref-D13m8o2p.js";import{u as he}from"./use-component-style-DXYrx7jC.js";import{o as Se}from"./theme-provider-BsBO7Bt7.js";import{as as fe,g as de,b as H,c as I}from"./factory-Nur_zO5a.js";import{A as Ce}from"./avatar-CnoCZyAe.js";import{H as ge}from"./heading-NqGE2IEg.js";import{T as je}from"./text-62Futka0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-gGKStiao.js";import"./index-DdZUI5bP.js";import"./index-0izHGgc0.js";import"./icon-M07mMfJs.js";import"./use-var-BmU0CMcq.js";import"./use-image-CmKgOqFG.js";const t=N((r,o)=>{const[u,s]=he("Skeleton",r);let{className:c,children:m,endColor:p,fadeDuration:a=.4,fitContent:i,isFitContent:D,isLoaded:h,loaded:S,speed:x=.8,startColor:k,...f}=Se(s);const[A]=fe(),d=de(m),C=ke(h),g=E(k),z=E(p),ce=!!d.length;i??(i=D),S??(S=h),i??(i=ce);const me=P({duration:typeof a=="string"?a:`${a}s`,keyframes:{"0%":{opacity:0},"100%":{opacity:1}}}),ue=P({direction:"alternate",duration:typeof x=="string"?x:`${x}s`,iterationCount:"infinite",keyframes:{"0%":{background:g,borderColor:g},"100%":{background:z,borderColor:z}},timingFunction:"linear"}),pe={"&::before, &::after, *":{visibility:"hidden"},backgroundClip:"padding-box",boxShadow:"none",color:"transparent",cursor:"default",h:i?"fit-content":"fallback(4, 1rem)",maxW:"100%",pointerEvents:"none",userSelect:"none",w:i?"fit-content":"100%",...u};if(S){const xe=!A()||C?"none":me;return e.jsx(H.div,{ref:o,className:I("ui-skeleton","ui-skeleton--loaded",c),...f,"aria-busy":"false",animation:xe,children:d})}else return e.jsx(H.div,{ref:o,className:I("ui-skeleton",c),__css:pe,...f,"aria-busy":"true",animation:ue,children:d})});t.displayName="Skeleton";t.__ui__="Skeleton";const l=N(({className:r,boxSize:o="fallback(12, 3rem)",children:u,fitContent:s,isFitContent:c,...m},p)=>{const a=de(u),i=!!a.length;return s??(s=c),s??(s=i),e.jsx(t,{ref:p,className:I("ui-skeleton__circle",r),fitContent:s,rounded:"fallback(full, 9999px)",...s?{}:{boxSize:o},...m,children:a})});l.displayName="SkeletonCircle";l.__ui__="SkeletonCircle";const n=N(({className:r,children:o,endColor:u,fadeDuration:s,gap:c="fallback(2, 0.5rem)",isLoaded:m,lineClamp:p=3,loaded:a,speed:i,startColor:D,textHeight:h="fallback(2, 0.5rem)",...S},x)=>{const k=E(p),f={w:"100%"};return e.jsx(H.div,{ref:x,className:I("ui-skeleton__text",r),__css:f,...S,children:Array(k).fill(0).map((A,d)=>{if(m&&d>0)return null;const C=d+1===k,g=m?{}:{h,mb:C?void 0:c,w:k>1&&C?"80%":"100%"};return e.jsx(t,{endColor:u,fadeDuration:s,loaded:a,speed:i,startColor:D,...g,children:d===0?o:void 0},d)})})});n.displayName="SkeletonText";n.__ui__="SkeletonText";const Ye={component:t,title:"Components / Feedback / Skeleton"},le=async r=>new Promise(o=>{setTimeout(o,r)}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{}),e.jsx(l,{}),e.jsx(n,{})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{endColor:"orange.500",startColor:"pink.500"}),e.jsx(l,{endColor:"orange.500",startColor:"pink.500"}),e.jsx(n,{endColor:"orange.500",startColor:"pink.500"})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{h:16}),e.jsx(l,{boxSize:16}),e.jsx(n,{textHeight:4})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{speed:2}),e.jsx(l,{speed:2}),e.jsx(n,{speed:2})]}),w=()=>e.jsx(n,{gap:8}),T=()=>e.jsx(n,{lineClamp:5}),y=()=>{const[r,o]=F.useState(!1);return F.useEffect(()=>{le(3e3).then(()=>{o(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(t,{isLoaded:r}),e.jsx(l,{isLoaded:r}),e.jsx(n,{isLoaded:r})]})},v=()=>{const[r,o]=F.useState(!1);return F.useEffect(()=>{le(3e3).then(()=>{o(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(t,{fadeDuration:2,h:12,isLoaded:r,children:e.jsx(ge,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e.jsx(l,{fadeDuration:2,isLoaded:r,children:e.jsx(Ce,{name:"Hirotomo Yamada"})}),e.jsx(n,{fadeDuration:2,isLoaded:r,children:e.jsx(je,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var G,R,V;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...(V=(R=j.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var Y,$,M;L.parameters={...L.parameters,docs:{...(Y=L.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Skeleton endColor="orange.500" startColor="pink.500" />

      <SkeletonCircle endColor="orange.500" startColor="pink.500" />

      <SkeletonText endColor="orange.500" startColor="pink.500" />
    </>;
}`,...(M=($=L.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var O,W,q;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <>
      <Skeleton h={16} />

      <SkeletonCircle boxSize={16} />

      <SkeletonText textHeight={4} />
    </>;
}`,...(q=(W=b.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var B,J,K;_.parameters={..._.parameters,docs:{...(B=_.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <>
      <Skeleton speed={2} />

      <SkeletonCircle speed={2} />

      <SkeletonText speed={2} />
    </>;
}`,...(K=(J=_.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <SkeletonText gap={8} />;
}`,...(X=(U=w.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,re;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <SkeletonText lineClamp={5} />;
}`,...(re=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,te,ne;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,ae,ie;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(ie=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const $e=["basic","withColor","withSize","withSpeed","withGap","withLineClamp","withIsLoaded","withFadeDuration"];export{$e as __namedExportsOrder,j as basic,Ye as default,L as withColor,v as withFadeDuration,w as withGap,y as withIsLoaded,T as withLineClamp,b as withSize,_ as withSpeed};
