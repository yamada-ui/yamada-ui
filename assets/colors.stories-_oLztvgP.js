import{n as e}from"./chunk-zsgVPwQN.js";import{Cp as t,Cu as n,Du as r,Ep as i,Eu as a,Hl as o,Jr as s,Tp as c,Xr as l,Zr as u,da as d,dp as f,ds as p,fa as m,pa as h,pp as g,qr as _,ua as v,us as y,wp as b,wu as x,yp as S,zl as C}from"./iframe-DZGIdQv0.js";var w,T,E,D;e((()=>{y(),n(),v(),l(),C(),_(),a(),f(),w=g(),T={title:`Theme / Tokens`},E=()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{children:`Colors`}),(0,w.jsxs)(h,{children:[(0,w.jsx)(m,{children:(0,w.jsx)(s,{size:`2xl`,children:`Tokens`})}),(0,w.jsx)(d,{gap:`sm`,children:(0,w.jsx)(u,{each:b,children:(e,t)=>(0,w.jsx)(o,{gap:`sm`,templateColumns:`repeat(${i.length}, 1fr)`,w:`full`,children:(0,w.jsx)(u,{each:i,children:(t,n)=>(0,w.jsxs)(o,{gap:`xs`,children:[(0,w.jsx)(p,{bg:`${e}.${t}`,h:`12`,rounded:`l2`,w:`full`}),(0,w.jsx)(r,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:`${e}.${t}`})]},n)})},t)})})]}),(0,w.jsxs)(h,{children:[(0,w.jsx)(m,{children:(0,w.jsx)(s,{size:`2xl`,children:`Semantic Tokens`})}),(0,w.jsx)(d,{gap:`sm`,children:(0,w.jsx)(u,{each:c,children:(e,t)=>(0,w.jsx)(o,{gap:`sm`,templateColumns:`repeat(${i.length}, 1fr)`,w:`full`,children:(0,w.jsx)(u,{each:i,children:(t,n)=>(0,w.jsxs)(o,{gap:`xs`,children:[(0,w.jsx)(p,{bg:`${e}.${t}`,h:`12`,rounded:`l2`,w:`full`}),(0,w.jsx)(r,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:`${e}.${t}`})]},n)})},t)})})]}),(0,w.jsxs)(h,{children:[(0,w.jsx)(m,{children:(0,w.jsx)(s,{size:`xl`,children:`Background`})}),(0,w.jsx)(d,{gap:`sm`,children:(0,w.jsx)(o,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(u,{each:[``,`subtle`,`overlay`,`ghost`,`muted`,`emphasized`,`contrast`,`panel`,`float`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,w.jsxs)(o,{gap:`xs`,children:[(0,w.jsx)(p,{bg:e?`bg.${e}`:`bg`,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`}),(0,w.jsx)(r,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`bg.${e}`:`bg`})]},t)})})})]}),(0,w.jsxs)(h,{children:[(0,w.jsx)(m,{children:(0,w.jsx)(s,{size:`xl`,children:`Foreground`})}),(0,w.jsx)(d,{gap:`sm`,children:(0,w.jsx)(o,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(u,{each:[``,`subtle`,`muted`,`emphasized`,`contrast`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,w.jsxs)(o,{gap:`xs`,children:[(0,w.jsx)(x,{bg:e===`contrast`?`bg.contrast`:void 0,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`,children:(0,w.jsx)(r,{color:e?`fg.${e}`:`fg`,children:`Ag`})}),(0,w.jsx)(r,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`fg.${e}`:`fg`})]},t)})})})]}),(0,w.jsxs)(h,{children:[(0,w.jsx)(m,{children:(0,w.jsx)(s,{size:`xl`,children:`Border`})}),(0,w.jsx)(d,{gap:`sm`,children:(0,w.jsx)(o,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(u,{each:[``,`subtle`,`muted`,`emphasized`,`contrast`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,w.jsxs)(o,{gap:`xs`,children:[(0,w.jsx)(p,{borderColor:e?`border.${e}`:`border`,borderWidth:`3px`,h:`24`,rounded:`l2`,w:`full`}),(0,w.jsx)(r,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`border.${e}`:`border`})]},t)})})})]}),(0,w.jsx)(u,{each:t,children:(e,t)=>(0,w.jsxs)(h,{children:[(0,w.jsx)(m,{children:(0,w.jsx)(s,{size:`xl`,children:S(e)})}),(0,w.jsx)(d,{gap:`sm`,children:(0,w.jsx)(o,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(u,{each:[``,`contrast`,`fg`,`bg`,`ghost`,`subtle`,`muted`,`emphasized`,`solid`,`outline`],children:(t,n)=>(0,w.jsxs)(o,{gap:`xs`,children:[(0,w.jsx)(p,{bg:t?`${e}.${t}`:e,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`}),(0,w.jsx)(r,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:t?`${e}.${t}`:e})]},n)})})})]},t)})]}),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Colors</Heading>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Tokens</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <For each={DEFAULT_COLOR_SCHEMES}>
            {(colorScheme, index) => <Grid key={index} gap="sm" templateColumns={\`repeat(\${TONES.length}, 1fr)\`} w="full">
                <For each={TONES}>
                  {(tone, index) => <Grid key={index} gap="xs">
                      <Box bg={\`\${colorScheme}.\${tone}\`} h="12" rounded="l2" w="full" />
                      <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">{\`\${colorScheme}.\${tone}\`}</Text>
                    </Grid>}
                </For>
              </Grid>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Semantic Tokens</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <For each={SEMANTIC_COLOR_SCHEMES}>
            {(colorScheme, index) => <Grid key={index} gap="sm" templateColumns={\`repeat(\${TONES.length}, 1fr)\`} w="full">
                <For each={TONES}>
                  {(tone, index) => <Grid key={index} gap="xs">
                      <Box bg={\`\${colorScheme}.\${tone}\`} h="12" rounded="l2" w="full" />
                      <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">{\`\${colorScheme}.\${tone}\`}</Text>
                    </Grid>}
                </For>
              </Grid>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="xl">Background</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
            <For each={["", "subtle", "overlay", "ghost", "muted", "emphasized", "contrast", "panel", "float", "info", "success", "warning", "error"]}>
              {(value, index) => <Grid key={index} gap="xs">
                  <Box bg={value ? \`bg.\${value}\` : "bg"} borderColor="border.muted" borderWidth="1px" h="24" rounded="l2" w="full" />

                  <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">
                    {value ? \`bg.\${value}\` : "bg"}
                  </Text>
                </Grid>}
            </For>
          </Grid>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="xl">Foreground</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
            <For each={["", "subtle", "muted", "emphasized", "contrast", "info", "success", "warning", "error"]}>
              {(value, index) => <Grid key={index} gap="xs">
                  <Center bg={value === "contrast" ? "bg.contrast" : undefined} borderColor="border.muted" borderWidth="1px" h="24" rounded="l2" w="full">
                    <Text color={value ? \`fg.\${value}\` : "fg"}>Ag</Text>
                  </Center>

                  <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">
                    {value ? \`fg.\${value}\` : "fg"}
                  </Text>
                </Grid>}
            </For>
          </Grid>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="xl">Border</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
            <For each={["", "subtle", "muted", "emphasized", "contrast", "info", "success", "warning", "error"]}>
              {(value, index) => <Grid key={index} gap="xs">
                  <Box borderColor={value ? \`border.\${value}\` : "border"} borderWidth="3px" h="24" rounded="l2" w="full" />

                  <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">
                    {value ? \`border.\${value}\` : "border"}
                  </Text>
                </Grid>}
            </For>
          </Grid>
        </Container.Body>
      </Container.Root>

      <For each={COLOR_SCHEMES}>
        {(colorScheme, index) => <Container.Root key={index}>
            <Container.Header>
              <Heading size="xl">{toTitleCase(colorScheme)}</Heading>
            </Container.Header>

            <Container.Body gap="sm">
              <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
                <For each={["", "contrast", "fg", "bg", "ghost", "subtle", "muted", "emphasized", "solid", "outline"]}>
                  {(value, index) => <Grid key={index} gap="xs">
                      <Box bg={value ? \`\${colorScheme}.\${value}\` : colorScheme} borderColor="border.muted" borderWidth="1px" h="24" rounded="l2" w="full" />

                      <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">
                        {value ? \`\${colorScheme}.\${value}\` : colorScheme}
                      </Text>
                    </Grid>}
                </For>
              </Grid>
            </Container.Body>
          </Container.Root>}
      </For>
    </>;
}`,...E.parameters?.docs?.source}}},D=[`Colors`]}))();export{E as Colors,D as __namedExportsOrder,T as default};