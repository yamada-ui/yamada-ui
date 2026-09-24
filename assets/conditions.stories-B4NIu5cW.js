import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./text-b2W5euYI.js";import{n as i,t as a}from"./center-C6NHygeb.js";import{n as o,t as s}from"./box-C47iDJeO.js";import{n as c,t as l}from"./h-stack-CueUnXBe.js";import{n as u,t as d}from"./v-stack-DgxvBjIl.js";import{n as f,t as p}from"./wrap-Dg19SbjB.js";var m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{o(),i(),c(),u(),n(),f(),m=t(),h={title:`Styled System / Conditions`},g=()=>(0,m.jsx)(s,{bg:`bg.contrast`,color:`fg.contrast`,m:`lg`,p:`lg`,pos:`relative`,rounded:`l3`,_after:{bg:`secondary`,color:`white`,content:`'after'`,left:`lg`,p:`lg`,pos:`absolute`,rounded:`lg`,top:`lg`},children:`Box`}),_=()=>(0,m.jsx)(s,{bg:`bg.contrast`,color:`fg.contrast`,m:`lg`,p:`lg`,pos:`relative`,rounded:`l3`,_before:{bg:`secondary`,color:`white`,content:`'before'`,left:`-lg`,p:`lg`,pos:`absolute`,rounded:`lg`,top:`-lg`},children:`Box`}),v=()=>(0,m.jsx)(s,{bg:`bg.contrast`,color:`fg.contrast`,cursor:`pointer`,p:`md`,rounded:`l2`,transitionDuration:`slower`,transitionProperty:`all`,transitionTimingFunction:`ease-in-out`,_hover:{bg:`secondary`},children:`Please Hover`}),y=()=>(0,m.jsxs)(d,{borderWidth:`1px`,focusVisibleRing:`outline`,p:`md`,role:`group`,rounded:`l2`,tabIndex:0,w:`auto`,children:[(0,m.jsx)(r,{textAlign:`center`,children:`Focus me!`}),(0,m.jsxs)(l,{children:[(0,m.jsx)(a,{p:`md`,_groupFocus:{color:`success`},children:`1`}),(0,m.jsx)(a,{p:`md`,_groupFocus:{color:`warning`},children:`2`}),(0,m.jsx)(a,{p:`md`,_groupFocus:{color:`danger`},children:`3`})]})]}),b=()=>(0,m.jsxs)(l,{children:[(0,m.jsx)(a,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,_peerFocus:{bg:`secondary`},children:`Focus the peer`}),(0,m.jsx)(a,{"data-peer":!0,borderWidth:`1px`,focusVisibleRing:`outline`,p:`md`,rounded:`l2`,tabIndex:0,children:`Focus me!`}),(0,m.jsx)(a,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,_peerFocus:{bg:`secondary`},children:`Focus the peer`})]}),x=()=>(0,m.jsx)(s,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l3`,_portrait:{bg:`secondary`},children:`Box`}),S=()=>(0,m.jsx)(p,{gap:`md`,children:[1,2,3,4,5,6,7,8].map(e=>(0,m.jsx)(a,{boxSize:`5xs`,color:`white`,rounded:`l2`,_even:{bg:`blue.500`},_odd:{bg:`red.500`},children:e},e))}),C=[`After`,`Before`,`Hover`,`Group`,`Peer`,`Orientation`,`Other`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" cursor="pointer" p="md" rounded="l2" transitionDuration="slower" transitionProperty="all" transitionTimingFunction="ease-in-out" _hover={{
    bg: "secondary"
  }}>
      Please Hover
    </Box>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" p="md" rounded="l3" _portrait={{
    bg: "secondary"
  }}>
      Box
    </Box>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{g as After,_ as Before,y as Group,v as Hover,x as Orientation,S as Other,b as Peer,C as __namedExportsOrder,h as default};