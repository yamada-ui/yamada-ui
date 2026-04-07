import{n as e}from"./chunk-zsgVPwQN.js";import{B as t,Bt as n,Cu as r,Du as i,Eu as a,Gt as o,Ut as s,ds as c,pp as l,us as u,wu as d,z as f}from"./iframe-a-xI_IFE.js";var p,m,h,g,_,v,y,b,x,S;e((()=>{u(),r(),n(),a(),f(),p=l(),m={title:`Styled System / Conditions`},h=()=>(0,p.jsx)(c,{bg:`bg.contrast`,color:`fg.contrast`,m:`lg`,p:`lg`,pos:`relative`,rounded:`l3`,_after:{bg:`secondary`,color:`white`,content:`'after'`,left:`lg`,p:`lg`,pos:`absolute`,rounded:`lg`,top:`lg`},children:`Box`}),g=()=>(0,p.jsx)(c,{bg:`bg.contrast`,color:`fg.contrast`,m:`lg`,p:`lg`,pos:`relative`,rounded:`l3`,_before:{bg:`secondary`,color:`white`,content:`'before'`,left:`-lg`,p:`lg`,pos:`absolute`,rounded:`lg`,top:`-lg`},children:`Box`}),_=()=>(0,p.jsx)(c,{bg:`bg.contrast`,color:`fg.contrast`,cursor:`pointer`,p:`md`,rounded:`l2`,transitionDuration:`slower`,transitionProperty:`all`,transitionTimingFunction:`ease-in-out`,_hover:{bg:`secondary`},children:`Please Hover`}),v=()=>(0,p.jsxs)(s,{borderWidth:`1px`,focusVisibleRing:`outline`,p:`md`,role:`group`,rounded:`l2`,tabIndex:0,w:`auto`,children:[(0,p.jsx)(i,{textAlign:`center`,children:`Focus me!`}),(0,p.jsxs)(o,{children:[(0,p.jsx)(d,{p:`md`,_groupFocus:{color:`success`},children:`1`}),(0,p.jsx)(d,{p:`md`,_groupFocus:{color:`warning`},children:`2`}),(0,p.jsx)(d,{p:`md`,_groupFocus:{color:`danger`},children:`3`})]})]}),y=()=>(0,p.jsxs)(o,{children:[(0,p.jsx)(d,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,_peerFocus:{bg:`secondary`},children:`Focus the peer`}),(0,p.jsx)(d,{"data-peer":!0,borderWidth:`1px`,focusVisibleRing:`outline`,p:`md`,rounded:`l2`,tabIndex:0,children:`Focus me!`}),(0,p.jsx)(d,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,_peerFocus:{bg:`secondary`},children:`Focus the peer`})]}),b=()=>(0,p.jsx)(c,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l3`,_portrait:{bg:`secondary`},children:`Box`}),x=()=>(0,p.jsx)(t,{gap:`md`,children:[1,2,3,4,5,6,7,8].map(e=>(0,p.jsx)(d,{boxSize:`5xs`,color:`white`,rounded:`l2`,_even:{bg:`blue.500`},_odd:{bg:`red.500`},children:e},e))}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" m="lg" p="lg" pos="relative" rounded="l3" _after={{
    bg: "secondary",
    color: "white",
    content: "'after'",
    left: "lg",
    p: "lg",
    pos: "absolute",
    rounded: "lg",
    top: "lg"
  }}>
      Box
    </Box>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" m="lg" p="lg" pos="relative" rounded="l3" _before={{
    bg: "secondary",
    color: "white",
    content: "'before'",
    left: "-lg",
    p: "lg",
    pos: "absolute",
    rounded: "lg",
    top: "-lg"
  }}>
      Box
    </Box>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" cursor="pointer" p="md" rounded="l2" transitionDuration="slower" transitionProperty="all" transitionTimingFunction="ease-in-out" _hover={{
    bg: "secondary"
  }}>
      Please Hover
    </Box>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" focusVisibleRing="outline" p="md" role="group" rounded="l2" tabIndex={0} w="auto">
      <Text textAlign="center">Focus me!</Text>

      <HStack>
        <Center p="md" _groupFocus={{
        color: "success"
      }}>
          1
        </Center>
        <Center p="md" _groupFocus={{
        color: "warning"
      }}>
          2
        </Center>
        <Center p="md" _groupFocus={{
        color: "danger"
      }}>
          3
        </Center>
      </HStack>
    </VStack>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" _peerFocus={{
      bg: "secondary"
    }}>
        Focus the peer
      </Center>

      <Center data-peer borderWidth="1px" focusVisibleRing="outline" p="md" rounded="l2" tabIndex={0}>
        Focus me!
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" _peerFocus={{
      bg: "secondary"
    }}>
        Focus the peer
      </Center>
    </HStack>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" p="md" rounded="l3" _portrait={{
    bg: "secondary"
  }}>
      Box
    </Box>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return <Wrap gap="md">
      {numbers.map(number => <Center key={number} boxSize="5xs" color="white" rounded="l2" _even={{
      bg: "blue.500"
    }} _odd={{
      bg: "red.500"
    }}>
          {number}
        </Center>)}
    </Wrap>;
}`,...x.parameters?.docs?.source}}},S=[`After`,`Before`,`Hover`,`Group`,`Peer`,`Orientation`,`Other`]}))();export{h as After,g as Before,v as Group,_ as Hover,b as Orientation,x as Other,y as Peer,S as __namedExportsOrder,m as default};