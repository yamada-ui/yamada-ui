import{j as e,bz as u,bA as g,T as i,bK as p,K as C,C as f,F as b}from"./iframe-COpE3uSe.js";import{H as l}from"./heading-B0z9i4jI.js";import{F as d}from"./for-DdiNkdzb.js";import{G as r}from"./grid-C-W568Cz.js";import{B as m}from"./box-D7U2gjmM.js";import{C as s,a,b as x}from"./container-BTiXZTjQ.js";import"./preload-helper-D9Z9MdNV.js";const B={title:"Theme / Tokens / Colors"},h=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Colors"}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{size:"2xl",children:"Tokens"})}),e.jsx(x,{gap:"sm",children:e.jsx(d,{each:u,children:(n,o)=>e.jsx(r,{gap:"sm",templateColumns:`repeat(${g.length}, 1fr)`,w:"full",children:e.jsx(d,{each:g,children:(t,c)=>e.jsxs(r,{gap:"xs",children:[e.jsx(m,{bg:`${n}.${t}`,h:"12",rounded:"l2",w:"full"}),e.jsx(i,{color:"muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:`${n}.${t}`})]},c)})},o)})})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{size:"2xl",children:"Semantic Tokens"})}),e.jsx(x,{gap:"sm",children:e.jsx(d,{each:p,children:(n,o)=>e.jsx(r,{gap:"sm",templateColumns:`repeat(${g.length}, 1fr)`,w:"full",children:e.jsx(d,{each:g,children:(t,c)=>e.jsxs(r,{gap:"xs",children:[e.jsx(m,{bg:`${n}.${t}`,h:"12",rounded:"l2",w:"full"}),e.jsx(i,{color:"muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:`${n}.${t}`})]},c)})},o)})})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{size:"xl",children:"Background"})}),e.jsx(x,{gap:"sm",children:e.jsx(r,{gap:"sm",templateColumns:"repeat(6, 1fr)",w:"full",children:e.jsx(d,{each:["","subtle","overlay","muted","emphasized","contrast","panel","info","success","warning","error"],children:(n,o)=>e.jsxs(r,{gap:"xs",children:[e.jsx(m,{bg:n?`bg.${n}`:"bg",borderColor:"border.muted",borderWidth:"1px",h:"24",rounded:"l2",w:"full"}),e.jsx(i,{color:"muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:n?`bg.${n}`:"bg"})]},o)})})})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{size:"xl",children:"Foreground"})}),e.jsx(x,{gap:"sm",children:e.jsx(r,{gap:"sm",templateColumns:"repeat(6, 1fr)",w:"full",children:e.jsx(d,{each:["","subtle","muted","emphasized","contrast","info","success","warning","error"],children:(n,o)=>e.jsxs(r,{gap:"xs",children:[e.jsx(C,{bg:n==="contrast"?"bg.contrast":void 0,borderColor:"border.muted",borderWidth:"1px",h:"24",rounded:"l2",w:"full",children:e.jsx(i,{color:n?`fg.${n}`:"fg",children:"Ag"})}),e.jsx(i,{color:"muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:n?`fg.${n}`:"fg"})]},o)})})})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{size:"xl",children:"Border"})}),e.jsx(x,{gap:"sm",children:e.jsx(r,{gap:"sm",templateColumns:"repeat(6, 1fr)",w:"full",children:e.jsx(d,{each:["","subtle","muted","emphasized","contrast","info","success","warning","error"],children:(n,o)=>e.jsxs(r,{gap:"xs",children:[e.jsx(m,{borderColor:n?`border.${n}`:"border",borderWidth:"3px",h:"24",rounded:"l2",w:"full"}),e.jsx(i,{color:"muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:n?`border.${n}`:"border"})]},o)})})})]}),e.jsx(d,{each:f,children:(n,o)=>e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{size:"xl",children:b(n)})}),e.jsx(x,{gap:"sm",children:e.jsx(r,{gap:"sm",templateColumns:"repeat(6, 1fr)",w:"full",children:e.jsx(d,{each:["","contrast","fg","bg","ghost","subtle","muted","emphasized","solid","outline"],children:(t,c)=>e.jsxs(r,{gap:"xs",children:[e.jsx(m,{bg:t?`${n}.${t}`:n,borderColor:"border.muted",borderWidth:"1px",h:"24",rounded:"l2",w:"full"}),e.jsx(i,{color:"muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:t?`${n}.${t}`:n})]},c)})})})]},o)})]});h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
                      <Text color="muted" fontSize="xs" lineClamp={1} textAlign="center">{\`\${colorScheme}.\${tone}\`}</Text>
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
                      <Text color="muted" fontSize="xs" lineClamp={1} textAlign="center">{\`\${colorScheme}.\${tone}\`}</Text>
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
            <For each={["", "subtle", "overlay", "muted", "emphasized", "contrast", "panel", "info", "success", "warning", "error"]}>
              {(value, index) => <Grid key={index} gap="xs">
                  <Box bg={value ? \`bg.\${value}\` : "bg"} borderColor="border.muted" borderWidth="1px" h="24" rounded="l2" w="full" />

                  <Text color="muted" fontSize="xs" lineClamp={1} textAlign="center">
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

                  <Text color="muted" fontSize="xs" lineClamp={1} textAlign="center">
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

                  <Text color="muted" fontSize="xs" lineClamp={1} textAlign="center">
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

                      <Text color="muted" fontSize="xs" lineClamp={1} textAlign="center">
                        {value ? \`\${colorScheme}.\${value}\` : colorScheme}
                      </Text>
                    </Grid>}
                </For>
              </Grid>
            </Container.Body>
          </Container.Root>}
      </For>
    </>;
}`,...h.parameters?.docs?.source}}};const F=["Basic"];export{h as Basic,F as __namedExportsOrder,B as default};
