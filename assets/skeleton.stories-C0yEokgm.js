import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as D}from"./index-BwDkhjyp.js";import{u as B}from"./index-pi5p6VHu.js";import{u as pe}from"./index-myp615oj.js";import{u as _}from"./index-Br_odY0O.js";import{f as H}from"./forward-ref-BmTAT9U5.js";import{u as xe}from"./use-component-style-BHPJug4L.js";import{o as he}from"./theme-provider-QhVoByOm.js";import{ae as fe,t as ae,b as y,c as v}from"./factory-CJjTzqIw.js";import{A as Ce}from"./avatar-acgrl_mm.js";import{H as ke}from"./heading-CkpbD4FA.js";import{T as Se}from"./text-rr6Q65aJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Du0-7Fls.js";import"./index-0B4xF-cu.js";import"./index-DhPU70lj.js";import"./icon-932iDb3I.js";import"./index-DARK8rH5.js";import"./use-image-CWa-dmOF.js";const o=H((r,t)=>{const[m,a]=xe("Skeleton",r);let{className:u,startColor:p,endColor:n,fadeDuration:i=.4,speed:x=.8,isLoaded:C,isFitContent:h,children:A,...d}=he(a);const[I]=fe(),k=ae(A),c=pe(C),f=_(p),S=_(n),ue=!!k.length;h??(h=ue);const de=B({keyframes:{"0%":{opacity:0},"100%":{opacity:1}},duration:typeof i=="string"?i:`${i}s`}),ce=B({keyframes:{"0%":{borderColor:f,background:f},"100%":{borderColor:S,background:S}},duration:typeof x=="string"?x:`${x}s`,iterationCount:"infinite",direction:"alternate",timingFunction:"linear"}),le={w:h?"fit-content":"100%",maxW:"100%",h:h?"fit-content":"fallback(4, 1rem)",boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"},...m};if(C){const me=!I()||c?"none":de;return e.jsx(y.div,{ref:t,className:v("ui-skeleton","ui-skeleton--loaded",u),...d,animation:me,children:k})}else return e.jsx(y.div,{ref:t,className:v("ui-skeleton",u),__css:le,...d,animation:ce,children:k})}),l=H(({className:r,boxSize:t="fallback(12, 3rem)",children:m,isFitContent:a,...u},p)=>{const n=ae(m),i=!!n.length;return a??(a=i),e.jsx(o,{ref:p,className:v("ui-skeleton__circle",r),rounded:"fallback(full, 9999px)",isFitContent:a,...a?{}:{boxSize:t},...u,children:n})}),s=H(({className:r,lineClamp:t=3,startColor:m,endColor:a,fadeDuration:u,speed:p,isLoaded:n,gap:i="fallback(2, 0.5rem)",textHeight:x="fallback(2, 0.5rem)",children:C,...h},A)=>{const d=_(t),I={w:"100%"};return e.jsx(y.div,{ref:A,className:v("ui-skeleton__text",r),__css:I,...h,children:Array(d).fill(0).map((k,c)=>{if(n&&c>0)return null;const f=c+1===d,S=n?{}:{mb:f?void 0:i,w:d>1&&f?"80%":"100%",h:x};return e.jsx(o,{startColor:m,endColor:a,fadeDuration:u,speed:p,isLoaded:n,...S,children:c===0?C:void 0},c)})})}),Ge={title:"Components / Feedback / Skeleton",component:o},ie=r=>new Promise(t=>{setTimeout(t,r)}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(l,{}),e.jsx(s,{})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{startColor:"pink.500",endColor:"orange.500"}),e.jsx(l,{startColor:"pink.500",endColor:"orange.500"}),e.jsx(s,{startColor:"pink.500",endColor:"orange.500"})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{h:16}),e.jsx(l,{boxSize:16}),e.jsx(s,{textHeight:4})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{speed:2}),e.jsx(l,{speed:2}),e.jsx(s,{speed:2})]}),b=()=>e.jsx(s,{gap:8}),w=()=>e.jsx(s,{lineClamp:5}),T=()=>{const[r,t]=D.useState(!1);return D.useEffect(()=>{ie(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{isLoaded:r}),e.jsx(l,{isLoaded:r}),e.jsx(s,{isLoaded:r})]})},E=()=>{const[r,t]=D.useState(!1);return D.useEffect(()=>{ie(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{h:12,isLoaded:r,fadeDuration:2,children:e.jsx(ke,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e.jsx(l,{isLoaded:r,fadeDuration:2,children:e.jsx(Ce,{name:"Hirotomo Yamada"})}),e.jsx(s,{isLoaded:r,fadeDuration:2,children:e.jsx(Se,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var N,z,P;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...(P=(z=g.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var G,M,R;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <Skeleton startColor="pink.500" endColor="orange.500" />

      <SkeletonCircle startColor="pink.500" endColor="orange.500" />

      <SkeletonText startColor="pink.500" endColor="orange.500" />
    </>;
}`,...(R=(M=j.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var V,Y,$;F.parameters={...F.parameters,docs:{...(V=F.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Skeleton h={16} />

      <SkeletonCircle boxSize={16} />

      <SkeletonText textHeight={4} />
    </>;
}`,...($=(Y=F.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var O,W,q;L.parameters={...L.parameters,docs:{...(O=L.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <>
      <Skeleton speed={2} />

      <SkeletonCircle speed={2} />

      <SkeletonText speed={2} />
    </>;
}`,...(q=(W=L.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <SkeletonText gap={8} />;
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(te=(re=T.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ne,se;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(se=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Me=["basic","withColor","withSize","withSpeed","withGap","withLineClamp","withIsLoaded","withFadeDuration"];export{Me as __namedExportsOrder,g as basic,Ge as default,j as withColor,E as withFadeDuration,b as withGap,T as withIsLoaded,w as withLineClamp,F as withSize,L as withSpeed};
