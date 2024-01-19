import{j as e,a as l,F as m}from"./jsx-runtime-5BUNAZ9W.js";import{r as I}from"./index-4g5l5LRQ.js";import{u as P}from"./index-yqLFhgGW.js";import{u as fe}from"./index-6kAfjqEG.js";import{u as B}from"./index-_j_eT4tT.js";import{f as z}from"./forward-ref-A-8Arhkk.js";import{a as Ce}from"./use-component-style-UguhvTUx.js";import{o as Se}from"./theme-provider-YeTkYVXb.js";import{L as ke,v as ue,u as N,a as _}from"./factory-cZuM5uc7.js";import{A as ge}from"./avatar-QDE-Ok6L.js";import{H as Le}from"./heading-GKenIkBr.js";import{T as Fe}from"./text-3Ui1tvgC.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-YuXFfT5-.js";import"./index-LREwicdH.js";import"./index-o8caY6Jh.js";import"./icon-bIO0usjb.js";import"./index-R-iIN9fN.js";import"./use-image-eJzrk7Nf.js";const t=z((o,r)=>{const[h,s]=Ce("Skeleton",o);let{className:u,startColor:f,endColor:n,fadeDuration:i=.4,speed:C=.8,isLoaded:g,isFitContent:S,children:y,...d}=Se(s);const[H]=ke(),L=ue(y),c=fe(g),k=B(f),F=B(n),ce=!!L.length;S??(S=ce);const le=P({keyframes:{"0%":{opacity:0},"100%":{opacity:1}},duration:typeof i=="string"?i:`${i}s`}),me=P({keyframes:{"0%":{borderColor:k,background:k},"100%":{borderColor:F,background:F}},duration:typeof C=="string"?C:`${C}s`,iterationCount:"infinite",direction:"alternate",timingFunction:"linear"}),pe={w:S?"fit-content":"full",maxW:"full",h:S?"fit-content":"4",boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"},...h};if(g){const he=!H()||c?"none":le;return e(N.div,{ref:r,className:_("ui-skeleton","ui-skeleton--loaded",u),...d,animation:he,children:L})}else return e(N.div,{ref:r,className:_("ui-skeleton",u),__css:pe,...d,animation:me,children:L})}),p=z(({className:o,boxSize:r="12",children:h,isFitContent:s,...u},f)=>{const n=ue(h),i=!!n.length;return s??(s=i),e(t,{ref:f,className:_("ui-skeleton__circle",o),rounded:"full",isFitContent:s,...s?{}:{boxSize:r},...u,children:n})}),a=z(({className:o,lineClamp:r=3,startColor:h,endColor:s,fadeDuration:u,speed:f,isLoaded:n,gap:i="2",textHeight:C="2",children:g,...S},y)=>{const d=B(r),H={w:"full"};return e(N.div,{ref:y,className:_("ui-skeleton__text",o),__css:H,...S,children:Array(d).fill(0).map((L,c)=>{if(n&&c>0)return null;const k=c+1===d,F=n?{}:{mb:k?void 0:i,w:d>1&&k?"80%":"100%",h:C};return e(t,{startColor:h,endColor:s,fadeDuration:u,speed:f,isLoaded:n,...F,children:c===0?g:void 0},c)})})}),Ve={title:"Components / Feedback / Skeleton",component:t},de=o=>new Promise(r=>{setTimeout(r,o)}),x=()=>l(m,{children:[e(t,{}),e(p,{}),e(a,{})]}),w=()=>l(m,{children:[e(t,{startColor:"pink.500",endColor:"orange.500"}),e(p,{startColor:"pink.500",endColor:"orange.500"}),e(a,{startColor:"pink.500",endColor:"orange.500"})]}),T=()=>l(m,{children:[e(t,{h:16}),e(p,{boxSize:16}),e(a,{textHeight:4})]}),b=()=>l(m,{children:[e(t,{speed:2}),e(p,{speed:2}),e(a,{speed:2})]}),E=()=>e(a,{gap:8}),D=()=>e(a,{lineClamp:5}),v=()=>{const[o,r]=I.useState(!1);return I.useEffect(()=>{de(3e3).then(()=>{r(!0)})},[]),l(m,{children:[e(t,{isLoaded:o}),e(p,{isLoaded:o}),e(a,{isLoaded:o})]})},A=()=>{const[o,r]=I.useState(!1);return I.useEffect(()=>{de(3e3).then(()=>{r(!0)})},[]),l(m,{children:[e(t,{h:12,isLoaded:o,fadeDuration:2,children:e(Le,{isTruncated:!0,children:"ギャルのパンティーおくれーーーっ！！！！！"})}),e(p,{isLoaded:o,fadeDuration:2,children:e(ge,{name:"Hirotomo Yamada"})}),e(a,{isLoaded:o,fadeDuration:2,children:e(Fe,{isTruncated:!0,children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var j,G,M;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...(M=(G=x.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var V,Y,$;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Skeleton startColor="pink.500" endColor="orange.500" />

      <SkeletonCircle startColor="pink.500" endColor="orange.500" />

      <SkeletonText startColor="pink.500" endColor="orange.500" />
    </>;
}`,...($=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var O,R,W;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
  return <SkeletonText lineClamp={5} />;
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
}`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,se,ie;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(ie=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const Ye=["basic","withColor","withSize","withSpeed","withGap","withLineClamp","withIsLoaded","withFadeDuration"];export{Ye as __namedExportsOrder,x as basic,Ve as default,w as withColor,A as withFadeDuration,E as withGap,v as withIsLoaded,D as withLineClamp,T as withSize,b as withSpeed};
