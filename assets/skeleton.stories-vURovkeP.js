import{j as e,a as l,F as m}from"./jsx-runtime-TtYKBvr-.js";import{r as I}from"./index-IybTgENJ.js";import{u as z}from"./index-FtaGmSpW.js";import{u as he}from"./index-X4SQYXzq.js";import{u as N}from"./index-ndgh9KrK.js";import{f as B}from"./forward-ref-6T0UNPU-.js";import{a as Se}from"./use-component-style-5-ma296Y.js";import{o as Ce}from"./theme-provider-Wsw433nP.js";import{G as ke,p as ue,u as O,a as _}from"./factory-yYnGGCem.js";import{A as ge}from"./avatar-RX5sCaJh.js";import{H as Le}from"./heading-2VTgucYS.js";import{T as Fe}from"./text-Kd5_YHaX.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-gWY0u-sb.js";import"./index-JdnEfjmQ.js";import"./index-i3K_3DZd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./icon-h0N_MwdT.js";import"./index-dINoAjpC.js";import"./use-image-Ymqx05na.js";const t=B((o,r)=>{const[f,a]=Se("Skeleton",o);let{className:u,startColor:h,endColor:n,fadeDuration:i=.4,speed:S=.8,isLoaded:g,isFitContent:C,children:y,...d}=Ce(a);const H=ke(),L=ue(y),c=he(g),k=N(h),F=N(n),ce=!!L.length;C??(C=ce);const le=z({keyframes:{"0%":{opacity:0},"100%":{opacity:1}},duration:typeof i=="string"?i:`${i}s`}),me=z({keyframes:{"0%":{borderColor:k,background:k},"100%":{borderColor:F,background:F}},duration:typeof S=="string"?S:`${S}s`,iterationCount:"infinite",direction:"alternate",timingFunction:"linear"}),pe={w:C?"fit-content":"full",maxW:"full",h:C?"fit-content":"4",boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"},...f};if(g){const fe=!H.current||c?"none":le;return e(O.div,{ref:r,className:_("ui-skeleton","ui-skeleton--loaded",u),...d,animation:fe,children:L})}else return e(O.div,{ref:r,className:_("ui-skeleton",u),__css:pe,...d,animation:me,children:L})}),p=B(({className:o,boxSize:r="12",children:f,isFitContent:a,...u},h)=>{const n=ue(f),i=!!n.length;return a??(a=i),e(t,{ref:h,className:_("ui-skeleton__circle",o),rounded:"full",isFitContent:a,...a?{}:{boxSize:r},...u,children:n})}),s=B(({className:o,noOfLines:r=3,startColor:f,endColor:a,fadeDuration:u,speed:h,isLoaded:n,gap:i="2",textHeight:S="2",children:g,...C},y)=>{const d=N(r),H={w:"full"};return e(O.div,{ref:y,className:_("ui-skeleton__text",o),__css:H,...C,children:Array(d).fill(0).map((L,c)=>{if(n&&c>0)return null;const k=c+1===d,F=n?{}:{mb:k?void 0:i,w:d>1&&k?"80%":"100%",h:S};return e(t,{startColor:f,endColor:a,fadeDuration:u,speed:h,isLoaded:n,...F,children:c===0?g:void 0},c)})})}),Ve={title:"Components / Feedback / Skeleton",component:t},de=o=>new Promise(r=>{setTimeout(r,o)}),x=()=>l(m,{children:[e(t,{}),e(p,{}),e(s,{})]}),w=()=>l(m,{children:[e(t,{startColor:"pink.500",endColor:"orange.500"}),e(p,{startColor:"pink.500",endColor:"orange.500"}),e(s,{startColor:"pink.500",endColor:"orange.500"})]}),T=()=>l(m,{children:[e(t,{h:16}),e(p,{boxSize:16}),e(s,{textHeight:4})]}),b=()=>l(m,{children:[e(t,{speed:2}),e(p,{speed:2}),e(s,{speed:2})]}),E=()=>e(s,{gap:8}),D=()=>e(s,{noOfLines:5}),v=()=>{const[o,r]=I.useState(!1);return I.useEffect(()=>{de(3e3).then(()=>{r(!0)})},[]),l(m,{children:[e(t,{isLoaded:o}),e(p,{isLoaded:o}),e(s,{isLoaded:o})]})},A=()=>{const[o,r]=I.useState(!1);return I.useEffect(()=>{de(3e3).then(()=>{r(!0)})},[]),l(m,{children:[e(t,{h:12,isLoaded:o,fadeDuration:2,children:e(Le,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e(p,{isLoaded:o,fadeDuration:2,children:e(ge,{name:"Hirotomo Yamada"})}),e(s,{isLoaded:o,fadeDuration:2,children:e(Fe,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var P,j,G;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...(G=(j=x.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var M,V,Y;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <Skeleton startColor="pink.500" endColor="orange.500" />

      <SkeletonCircle startColor="pink.500" endColor="orange.500" />

      <SkeletonText startColor="pink.500" endColor="orange.500" />
    </>;
}`,...(Y=(V=w.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var $,R,W;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Skeleton h={16} />

      <SkeletonCircle boxSize={16} />

      <SkeletonText textHeight={4} />
    </>;
}`,...(W=(R=T.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var q,J,K;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Skeleton speed={2} />

      <SkeletonCircle speed={2} />

      <SkeletonText speed={2} />
    </>;
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <SkeletonText gap={8} />;
}`,...(X=(U=E.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,oe;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <SkeletonText noOfLines={5} />;
}`,...(oe=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,te,ne;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,ae,ie;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(ie=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Ye=["basic","withColor","withSize","withSpeed","withGap","withNoOfLines","withIsLoaded","withFadeDuration"];export{Ye as __namedExportsOrder,x as basic,Ve as default,w as withColor,A as withFadeDuration,E as withGap,v as withIsLoaded,D as withNoOfLines,T as withSize,b as withSpeed};
