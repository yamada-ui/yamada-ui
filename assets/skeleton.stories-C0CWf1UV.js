import{i as e}from"./preload-helper-usAeo7Bx.js";import{$ as t,Bn as n,Dn as r,Dv as i,Fn as a,Hv as o,In as s,Jl as c,Ma as l,Rf as u,Rn as d,Sn as f,Tn as p,Zl as m,et as h,eu as g,ja as _,ql as v,wv as y,zf as b}from"./iframe-B_JZPEyf.js";import{n as x,t as S}from"./storybook-DyX9vPgK.js";var C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{S(),t(),y(),m(),v(),_(),f(),u(),a(),C=i(),w={component:n,title:`Components / Skeleton`},T=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(n,{}),(0,C.jsx)(d,{}),(0,C.jsx)(s,{})]}),E=()=>(0,C.jsx)(x,{variant:`stack`,rows:[`pulse`,`shine`],children:(e,t,i)=>(0,C.jsxs)(p,{gap:`md`,children:[(0,C.jsxs)(r,{children:[(0,C.jsx)(d,{variant:t}),(0,C.jsx)(s,{variant:t,lineClamp:2})]}),(0,C.jsx)(n,{variant:t,h:`4xs`})]},i)}),D=()=>(0,C.jsxs)(p,{children:[(0,C.jsxs)(r,{children:[(0,C.jsx)(d,{boxSize:`14`}),(0,C.jsx)(s,{h:`6`,lineClamp:2})]}),(0,C.jsx)(n,{h:`20`})]}),O=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(r,{children:[(0,C.jsx)(n,{children:(0,C.jsx)(c,{children:`Badge`})}),(0,C.jsx)(n,{loading:!1,children:(0,C.jsx)(c,{children:`Badge`})})]}),(0,C.jsxs)(r,{children:[(0,C.jsx)(d,{children:(0,C.jsx)(g,{name:`Hirotomo Yamada`,src:`https://avatars.githubusercontent.com/u/84060430?v=4`})}),(0,C.jsx)(d,{loading:!1,children:(0,C.jsx)(g,{name:`Hirotomo Yamada`,src:`https://avatars.githubusercontent.com/u/84060430?v=4`})})]})]}),k=()=>(0,C.jsxs)(p,{children:[(0,C.jsxs)(r,{children:[(0,C.jsx)(d,{variant:`shine`,endColor:`pink.500`,startColor:`orange.500`}),(0,C.jsx)(s,{variant:`shine`,endColor:`pink.500`,lineClamp:2,startColor:`orange.500`})]}),(0,C.jsx)(n,{variant:`shine`,endColor:`pink.500`,h:`4xs`,startColor:`orange.500`})]}),A=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(n,{duration:2}),(0,C.jsx)(d,{duration:2}),(0,C.jsx)(s,{duration:2})]}),j=()=>(0,C.jsx)(s,{gap:`md`}),M=()=>(0,C.jsx)(s,{lineClamp:5}),N=()=>{let{loading:e}=h(async()=>{await o(3e3)});return(0,C.jsxs)(p,{children:[(0,C.jsxs)(r,{children:[(0,C.jsx)(d,{loading:e,children:(0,C.jsx)(g,{name:`Hirotomo Yamada`,src:`https://avatars.githubusercontent.com/u/84060430?v=4`,size:`xl`})}),(0,C.jsxs)(s,{lineClamp:2,loading:e,_loading:{h:`5`},children:[(0,C.jsx)(b,{fontWeight:`bold`,lineClamp:1,children:`Hirotomo Yamada`}),(0,C.jsx)(b,{lineClamp:1,children:`Developer of Yamada UI. Designer, design system and UI engineer.`})]})]}),(0,C.jsx)(n,{loading:e,children:(0,C.jsx)(l,{lineClamp:1,children:`ギャルのパンティーおくれーーーっ！！！！！`})})]})},P=()=>{let{loading:e}=h(async()=>{await o(3e3)});return(0,C.jsxs)(p,{children:[(0,C.jsxs)(r,{children:[(0,C.jsx)(d,{fadeDuration:2,loading:e,children:(0,C.jsx)(g,{name:`Hirotomo Yamada`,src:`https://avatars.githubusercontent.com/u/84060430?v=4`,size:`xl`})}),(0,C.jsxs)(s,{fadeDuration:2,lineClamp:2,loading:e,_loading:{h:`5`},children:[(0,C.jsx)(b,{fontWeight:`bold`,lineClamp:1,children:`Hirotomo Yamada`}),(0,C.jsx)(b,{lineClamp:1,children:`Developer of Yamada UI. Designer, design system and UI engineer.`})]})]}),(0,C.jsx)(n,{fadeDuration:2,loading:e,children:(0,C.jsx)(l,{lineClamp:1,children:`ギャルのパンティーおくれーーーっ！！！！！`})})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["pulse", "shine"]}>
      {(_, row, key) => <VStack key={key} gap="md">
          <HStack>
            <SkeletonCircle variant={row} />

            <SkeletonText variant={row} lineClamp={2} />
          </HStack>

          <Skeleton variant={row} h="4xs" />
        </VStack>}
    </PropsTable>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <HStack>
        <SkeletonCircle boxSize="14" />

        <SkeletonText h="6" lineClamp={2} />
      </HStack>

      <Skeleton h="20" />
    </VStack>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <>
      <HStack>
        <Skeleton>
          <Badge>Badge</Badge>
        </Skeleton>

        <Skeleton loading={false}>
          <Badge>Badge</Badge>
        </Skeleton>
      </HStack>

      <HStack>
        <SkeletonCircle>
          <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
        </SkeletonCircle>

        <SkeletonCircle loading={false}>
          <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
        </SkeletonCircle>
      </HStack>
    </>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <HStack>
        <SkeletonCircle variant="shine" endColor="pink.500" startColor="orange.500" />

        <SkeletonText variant="shine" endColor="pink.500" lineClamp={2} startColor="orange.500" />
      </HStack>

      <Skeleton variant="shine" endColor="pink.500" h="4xs" startColor="orange.500" />
    </VStack>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Skeleton duration={2} />

      <SkeletonCircle duration={2} />

      <SkeletonText duration={2} />
    </>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <SkeletonText gap="md" />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <SkeletonText lineClamp={5} />;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const {
    loading
  } = useAsync(async () => {
    await wait(3000);
  });
  return <VStack>
      <HStack>
        <SkeletonCircle loading={loading}>
          <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" size="xl" />
        </SkeletonCircle>

        <SkeletonText lineClamp={2} loading={loading} _loading={{
        h: "5"
      }}>
          <Text fontWeight="bold" lineClamp={1}>
            Hirotomo Yamada
          </Text>
          <Text lineClamp={1}>
            Developer of Yamada UI. Designer, design system and UI engineer.
          </Text>
        </SkeletonText>
      </HStack>

      <Skeleton loading={loading}>
        <Heading lineClamp={1}>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>
    </VStack>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const {
    loading
  } = useAsync(async () => {
    await wait(3000);
  });
  return <VStack>
      <HStack>
        <SkeletonCircle fadeDuration={2} loading={loading}>
          <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" size="xl" />
        </SkeletonCircle>

        <SkeletonText fadeDuration={2} lineClamp={2} loading={loading} _loading={{
        h: "5"
      }}>
          <Text fontWeight="bold" lineClamp={1}>
            Hirotomo Yamada
          </Text>
          <Text lineClamp={1}>
            Developer of Yamada UI. Designer, design system and UI engineer.
          </Text>
        </SkeletonText>
      </HStack>

      <Skeleton fadeDuration={2} loading={loading}>
        <Heading lineClamp={1}>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>
    </VStack>;
}`,...P.parameters?.docs?.source}}},F=[`Basic`,`Variant`,`Size`,`Children`,`StartAndEndColor`,`Duration`,`TextGap`,`TextLineClamp`,`Loaded`,`FadeDuration`]}))();export{T as Basic,O as Children,A as Duration,P as FadeDuration,N as Loaded,D as Size,k as StartAndEndColor,j as TextGap,M as TextLineClamp,E as Variant,F as __namedExportsOrder,w as default};