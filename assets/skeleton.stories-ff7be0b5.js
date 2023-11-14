import{a as e,j as a,F as i}from"./jsx-runtime-b08f8875.js";import{r as _}from"./index-8ee6c85d.js";import{u as P}from"./index-8b904657.js";import{u as ue}from"./index-eb92a01e.js";import{u as O}from"./index-a8e328c0.js";import{f as z}from"./forward-ref-cf7188bd.js";import{u as me}from"./use-component-style-b6002d28.js";import{o as pe}from"./theme-provider-78d359c6.js";import{Q as fe,d as A,e as y}from"./factory-2d442159.js";import{H as Se}from"./heading-e87eb660.js";import{A as ke}from"./avatar-97e86635.js";import{T as he}from"./text-c7eceae7.js";import"./_commonjsHelpers-de833af9.js";import"./index-c3db8104.js";import"./index-98029261.js";import"./index-0e02ae64.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./icon-a76117e5.js";import"./index-7636bab8.js";import"./use-image-9c7f5b4b.js";const t=z((o,r)=>{const[c,l]=me("Skeleton",o),{className:S,startColor:D,endColor:u,fadeDuration:m=.4,speed:p=.8,isLoaded:k,isFitContent:E,...h}=pe(l),f=fe(),H=ue(k),N=O(D),s=O(u),C=P({keyframes:{"0%":{opacity:0},"100%":{opacity:1}},duration:typeof m=="string"?m:`${m}s`}),F=P({keyframes:{"0%":{borderColor:N,background:N},"100%":{borderColor:s,background:s}},duration:typeof p=="string"?p:`${p}s`,iterationCount:"infinite",direction:"alternate",timingFunction:"linear"}),ce={w:E?"fit-content":"full",h:"4",boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"},...c};if(k){const le=!f.current||H?"none":C;return e(A.div,{ref:r,className:y("ui-skeleton","ui-skeleton--loaded",S),...h,animation:le})}else return e(A.div,{ref:r,className:y("ui-skeleton",S),__css:ce,...h,animation:F})}),d=z(({className:o,boxSize:r="12",...c},l)=>e(t,{ref:l,className:y("ui-skeleton__circle",o),rounded:"full",boxSize:r,...c})),n=z(({className:o,noOfLines:r=3,startColor:c,endColor:l,fadeDuration:S,speed:D,isLoaded:u,gap:m="2",textHeight:p="2",children:k,...E},h)=>{const f=O(r),H={w:"full"};return e(A.div,{ref:h,className:y("ui-skeleton__text",o),__css:H,...E,children:Array(f).fill(0).map((N,s)=>{if(u&&s>0)return null;const C=s+1===f,F=u?{}:{mb:C?void 0:m,w:f>1&&C?"80%":"100%",h:p};return e(t,{startColor:c,endColor:l,fadeDuration:S,speed:D,isLoaded:u,...F,children:s===0?k:void 0},s)})})}),je={title:"Components / Feedback / Skeleton",component:t},de=o=>new Promise(r=>{setTimeout(r,o)}),g=()=>a(i,{children:[e(t,{}),e(d,{}),e(n,{})]}),L=()=>a(i,{children:[e(t,{startColor:"pink.500",endColor:"orange.500"}),e(d,{startColor:"pink.500",endColor:"orange.500"}),e(n,{startColor:"pink.500",endColor:"orange.500"})]}),w=()=>a(i,{children:[e(t,{h:16}),e(d,{boxSize:16}),e(n,{textHeight:4})]}),x=()=>a(i,{children:[e(t,{speed:2}),e(d,{speed:2}),e(n,{speed:2})]}),T=()=>e(n,{gap:8}),b=()=>e(n,{noOfLines:5}),v=()=>{const[o,r]=_.useState(!1);return _.useEffect(()=>{de(3e3).then(()=>{r(!0)})},[]),a(i,{children:[e(t,{isLoaded:o}),e(d,{isLoaded:o}),e(n,{isLoaded:o})]})},I=()=>{const[o,r]=_.useState(!1);return _.useEffect(()=>{de(3e3).then(()=>{r(!0)})},[]),a(i,{children:[e(t,{h:12,isLoaded:o,fadeDuration:2,children:e(Se,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e(d,{isLoaded:o,fadeDuration:2,children:e(ke,{name:"Hirotomo Yamada"})}),e(n,{isLoaded:o,fadeDuration:2,children:e(he,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var j,G,M;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var Y,$,Q;L.parameters={...L.parameters,docs:{...(Y=L.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Skeleton startColor="pink.500" endColor="orange.500" />

      <SkeletonCircle startColor="pink.500" endColor="orange.500" />

      <SkeletonText startColor="pink.500" endColor="orange.500" />
    </>;
}`,...(Q=($=L.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var R,V,q;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <>
      <Skeleton h={16} />

      <SkeletonCircle boxSize={16} />

      <SkeletonText textHeight={4} />
    </>;
}`,...(q=(V=w.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var B,J,K;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <>
      <Skeleton speed={2} />

      <SkeletonCircle speed={2} />

      <SkeletonText speed={2} />
    </>;
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,W,X;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
        <Avatar name="Hirotomo Yamada" />
      </SkeletonCircle>

      <SkeletonText isLoaded={isLoaded} fadeDuration={2}>
        <Text isTruncated>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </SkeletonText>
    </>;
}`,...(ie=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Ge=["basic","withColor","withSize","withSpeed","withGap","withNoOfLines","withIsLoaded","withFadeDuration"];export{Ge as __namedExportsOrder,g as basic,je as default,L as withColor,I as withFadeDuration,T as withGap,v as withIsLoaded,b as withNoOfLines,w as withSize,x as withSpeed};
//# sourceMappingURL=skeleton.stories-ff7be0b5.js.map
