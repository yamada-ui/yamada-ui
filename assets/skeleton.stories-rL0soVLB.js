import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as D}from"./index-CBqU2yxZ.js";import{u as B}from"./index-BD2nhDml.js";import{u as pe}from"./index-wawZIfVM.js";import{u as _}from"./index-DK4v3cZe.js";import{f as H}from"./forward-ref-DuAegr0M.js";import{u as xe}from"./use-component-style-CmIXnChI.js";import{o as he}from"./theme-provider-CEHzOwEc.js";import{ad as Ce,x as ae,u as y,c as v}from"./factory-D_l0e62Z.js";import{A as Se}from"./avatar-D742Z6w8.js";import{H as fe}from"./heading-CGa8RWtO.js";import{T as ke}from"./text-BchYLgs8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-rYLD436_.js";import"./index-CMBKrRO_.js";import"./index-pz7Fi0wz.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./icon-CzIo1teI.js";import"./index-BdoGeE0l.js";import"./use-image-UgVxW6R_.js";const o=H((r,t)=>{const[m,a]=xe("Skeleton",r);let{className:u,startColor:p,endColor:n,fadeDuration:i=.4,speed:x=.8,isLoaded:S,isFitContent:h,children:A,...d}=he(a);const[I]=Ce(),f=ae(A),c=pe(S),C=_(p),k=_(n),ue=!!f.length;h??(h=ue);const de=B({keyframes:{"0%":{opacity:0},"100%":{opacity:1}},duration:typeof i=="string"?i:`${i}s`}),ce=B({keyframes:{"0%":{borderColor:C,background:C},"100%":{borderColor:k,background:k}},duration:typeof x=="string"?x:`${x}s`,iterationCount:"infinite",direction:"alternate",timingFunction:"linear"}),le={w:h?"fit-content":"100%",maxW:"100%",h:h?"fit-content":"1rem",boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"},...m};if(S){const me=!I()||c?"none":de;return e.jsx(y.div,{ref:t,className:v("ui-skeleton","ui-skeleton--loaded",u),...d,animation:me,children:f})}else return e.jsx(y.div,{ref:t,className:v("ui-skeleton",u),__css:le,...d,animation:ce,children:f})}),l=H(({className:r,boxSize:t="12",children:m,isFitContent:a,...u},p)=>{const n=ae(m),i=!!n.length;return a??(a=i),e.jsx(o,{ref:p,className:v("ui-skeleton__circle",r),rounded:"9999px",isFitContent:a,...a?{}:{boxSize:t},...u,children:n})}),s=H(({className:r,lineClamp:t=3,startColor:m,endColor:a,fadeDuration:u,speed:p,isLoaded:n,gap:i="0.5rem",textHeight:x="0.5rem",children:S,...h},A)=>{const d=_(t),I={w:"100%"};return e.jsx(y.div,{ref:A,className:v("ui-skeleton__text",r),__css:I,...h,children:Array(d).fill(0).map((f,c)=>{if(n&&c>0)return null;const C=c+1===d,k=n?{}:{mb:C?void 0:i,w:d>1&&C?"80%":"100%",h:x};return e.jsx(o,{startColor:m,endColor:a,fadeDuration:u,speed:p,isLoaded:n,...k,children:c===0?S:void 0},c)})})}),Me={title:"Components / Feedback / Skeleton",component:o},ie=r=>new Promise(t=>{setTimeout(t,r)}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(l,{}),e.jsx(s,{})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{startColor:"pink.500",endColor:"orange.500"}),e.jsx(l,{startColor:"pink.500",endColor:"orange.500"}),e.jsx(s,{startColor:"pink.500",endColor:"orange.500"})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{h:16}),e.jsx(l,{boxSize:16}),e.jsx(s,{textHeight:4})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{speed:2}),e.jsx(l,{speed:2}),e.jsx(s,{speed:2})]}),w=()=>e.jsx(s,{gap:8}),T=()=>e.jsx(s,{lineClamp:5}),b=()=>{const[r,t]=D.useState(!1);return D.useEffect(()=>{ie(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{isLoaded:r}),e.jsx(l,{isLoaded:r}),e.jsx(s,{isLoaded:r})]})},E=()=>{const[r,t]=D.useState(!1);return D.useEffect(()=>{ie(3e3).then(()=>{t(!0)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(o,{h:12,isLoaded:r,fadeDuration:2,children:e.jsx(fe,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e.jsx(l,{isLoaded:r,fadeDuration:2,children:e.jsx(Se,{name:"Hirotomo Yamada"})}),e.jsx(s,{isLoaded:r,fadeDuration:2,children:e.jsx(ke,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var N,z,P;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(q=(W=L.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <SkeletonText gap={8} />;
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <SkeletonText lineClamp={5} />;
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(te=(re=b.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ne,se;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(se=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Re=["basic","withColor","withSize","withSpeed","withGap","withLineClamp","withIsLoaded","withFadeDuration"];export{Re as __namedExportsOrder,g as basic,Me as default,j as withColor,E as withFadeDuration,w as withGap,b as withIsLoaded,T as withLineClamp,F as withSize,L as withSpeed};
