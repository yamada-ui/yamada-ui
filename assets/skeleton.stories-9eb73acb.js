import{j as e,a,F as i}from"./jsx-runtime-29545a09.js";import{r as y}from"./index-76fb7be0.js";import{u as P}from"./index-e5d610e5.js";import{u as ue}from"./index-b0053e1f.js";import{u as O}from"./index-e993c520.js";import{R as me,d as A,e as D}from"./factory-5f559ecf.js";import{f as z}from"./forward-ref-8b7d2a6f.js";import{u as pe}from"./use-component-style-5e7d3fa1.js";import{o as fe}from"./theme-ee3e3fce.js";import{H as Se}from"./heading-bf320e1e.js";import{A as ke}from"./avatar-10cfede2.js";import{T as he}from"./text-d2a6f75b.js";import"./_commonjsHelpers-de833af9.js";import"./index-d68d7549.js";import"./index-55be9bf6.js";import"./index-a4d0044e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./icon-96427744.js";import"./index-d06ecb96.js";import"./use-image-fdb0a72c.js";const t=z((o,r)=>{let[c,l]=pe("Skeleton",o);const{className:S,startColor:E,endColor:u,fadeDuration:m=.4,speed:p=.8,isLoaded:k,isFitContent:H,...h}=fe(l),f=me(),N=ue(k),F=O(E),s=O(u),C=P({keyframes:{"0%":{opacity:0},"100%":{opacity:1}},duration:typeof m=="string"?m:`${m}s`}),_=P({keyframes:{"0%":{borderColor:F,background:F},"100%":{borderColor:s,background:s}},duration:typeof p=="string"?p:`${p}s`,iterationCount:"infinite",direction:"alternate",timingFunction:"linear"}),ce={w:H?"fit-content":"full",h:"4",boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"},...c};if(k){const le=!f.current||N?"none":C;return e(A.div,{ref:r,className:D("ui-skeleton",S),...h,animation:le})}else return e(A.div,{ref:r,className:D("ui-skeleton",S),__css:ce,...h,animation:_})}),d=z(({className:o,boxSize:r="12",...c},l)=>e(t,{ref:l,className:D("ui-skeleton-circle",o),rounded:"full",boxSize:r,...c})),n=z(({className:o,noOfLines:r=3,startColor:c,endColor:l,fadeDuration:S,speed:E,isLoaded:u,gap:m="2",textHeight:p="2",children:k,...H},h)=>{const f=O(r),N={w:"full"};return e(A.div,{ref:h,className:D("ui-skeleton-text",o),__css:N,...H,children:Array(f).fill(0).map((F,s)=>{if(u&&s>0)return null;const C=s+1===f,_=u?{}:{mb:C?void 0:m,w:f>1&&C?"80%":"100%",h:p};return e(t,{startColor:c,endColor:l,fadeDuration:S,speed:E,isLoaded:u,..._,children:s===0?k:void 0},s)})})}),je={title:"Components / Feedback / Skeleton",component:t},de=o=>new Promise(r=>{setTimeout(r,o)}),g=()=>a(i,{children:[e(t,{}),e(d,{}),e(n,{})]}),L=()=>a(i,{children:[e(t,{startColor:"pink.500",endColor:"orange.500"}),e(d,{startColor:"pink.500",endColor:"orange.500"}),e(n,{startColor:"pink.500",endColor:"orange.500"})]}),w=()=>a(i,{children:[e(t,{h:16}),e(d,{boxSize:16}),e(n,{textHeight:4})]}),x=()=>a(i,{children:[e(t,{speed:2}),e(d,{speed:2}),e(n,{speed:2})]}),T=()=>e(n,{gap:8}),b=()=>e(n,{noOfLines:5}),v=()=>{const[o,r]=y.useState(!1);return y.useEffect(()=>{de(3e3).then(()=>{r(!0)})},[]),a(i,{children:[e(t,{isLoaded:o}),e(d,{isLoaded:o}),e(n,{isLoaded:o})]})},I=()=>{const[o,r]=y.useState(!1);return y.useEffect(()=>{de(3e3).then(()=>{r(!0)})},[]),a(i,{children:[e(t,{h:12,isLoaded:o,fadeDuration:2,children:e(Se,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e(d,{isLoaded:o,fadeDuration:2,children:e(ke,{name:"Hirotomo Yamada"})}),e(n,{isLoaded:o,fadeDuration:2,children:e(he,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var j,G,M;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var R,Y,$;L.parameters={...L.parameters,docs:{...(R=L.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <>
      <Skeleton startColor='pink.500' endColor='orange.500' />

      <SkeletonCircle startColor='pink.500' endColor='orange.500' />

      <SkeletonText startColor='pink.500' endColor='orange.500' />
    </>;
}`,...($=(Y=L.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var V,q,B;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Skeleton h={16} />

      <SkeletonCircle boxSize={16} />

      <SkeletonText textHeight={4} />
    </>;
}`,...(B=(q=w.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <Skeleton speed={2} />

      <SkeletonCircle speed={2} />

      <SkeletonText speed={2} />
    </>;
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <SkeletonText gap={8} />;
}`,...(X=(W=T.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,oe;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <SkeletonText noOfLines={5} />;
}`,...(oe=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,te,ne;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,ae,ie;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
        <Avatar name='Hirotomo Yamada' />
      </SkeletonCircle>

      <SkeletonText isLoaded={isLoaded} fadeDuration={2}>
        <Text isTruncated>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </SkeletonText>
    </>;
}`,...(ie=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Ge=["basic","withColor","withSize","withSpeed","withGap","withNoOfLines","withIsLoaded","withFadeDuration"];export{Ge as __namedExportsOrder,g as basic,je as default,L as withColor,I as withFadeDuration,T as withGap,v as withIsLoaded,b as withNoOfLines,w as withSize,x as withSpeed};
//# sourceMappingURL=skeleton.stories-9eb73acb.js.map
