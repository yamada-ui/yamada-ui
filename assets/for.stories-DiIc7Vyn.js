import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Bo as n,Bt as r,Du as i,Eu as a,Lo as o,Ro as s,Ut as c,Vo as l,Xp as u,Xr as d,Zr as f,li as p,oi as m,pp as h,rd as g,tf as _}from"./iframe-DZGIdQv0.js";import{n as v,t as y}from"./dist-CPx83k75.js";var b,x,S,C,w,T,E,D,O,k,A;e((()=>{y(),b=t(u(),1),d(),o(),m(),g(),r(),a(),x=h(),S={component:f,title:`Components / For`},C=()=>(0,x.jsx)(c,{children:(0,x.jsx)(f,{each:(0,b.useMemo)(()=>Array.from({length:10},(e,t)=>({id:t,name:`${v.person.firstName()} ${v.person.lastName()}`,email:v.internet.email()})),[]),children:({id:e,name:t,email:r})=>(0,x.jsxs)(l,{size:`md`,variant:`outline`,children:[(0,x.jsx)(n,{children:(0,x.jsx)(i,{as:`h1`,fontSize:`lg`,children:t})}),(0,x.jsxs)(s,{pt:`sm`,children:[(0,x.jsxs)(i,{color:`muted`,children:[`Id (Index): `,e]}),(0,x.jsxs)(i,{color:`muted`,children:[`Email: `,r]})]})]},e)})}),w=()=>(0,x.jsx)(c,{children:(0,x.jsx)(f,{each:[],fallback:(0,x.jsx)(p,{description:`There are no items to show`,indicator:(0,x.jsx)(_,{})}),children:(e,t)=>(0,x.jsx)(i,{children:e},t)})}),T=()=>(0,x.jsx)(c,{children:(0,x.jsx)(f,{each:(0,b.useMemo)(()=>Array.from({length:10},(e,t)=>({id:t,name:`${v.person.firstName()} ${v.person.lastName()}`,email:v.internet.email()})),[]),filter:({email:e})=>e.includes(`gmail`),children:({id:e,name:t,email:r})=>(0,x.jsxs)(l,{size:`md`,variant:`outline`,children:[(0,x.jsx)(n,{children:(0,x.jsx)(i,{as:`h1`,fontSize:`lg`,children:t})}),(0,x.jsxs)(s,{pt:`sm`,children:[(0,x.jsxs)(i,{color:`muted`,children:[`Id (Index): `,e]}),(0,x.jsxs)(i,{color:`muted`,children:[`Email: `,r]})]})]},e)})}),E=()=>(0,x.jsx)(c,{children:(0,x.jsx)(f,{each:(0,b.useMemo)(()=>Array.from({length:10},(e,t)=>({id:t,name:`${v.person.firstName()} ${v.person.lastName()}`,email:v.internet.email()})),[]),sort:(e,t)=>e.name.localeCompare(t.name),children:({id:e,name:t,email:r})=>(0,x.jsxs)(l,{size:`md`,variant:`outline`,children:[(0,x.jsx)(n,{children:(0,x.jsx)(i,{as:`h1`,fontSize:`lg`,children:t})}),(0,x.jsxs)(s,{pt:`sm`,children:[(0,x.jsxs)(i,{color:`muted`,children:[`Id (Index): `,e]}),(0,x.jsxs)(i,{color:`muted`,children:[`Email: `,r]})]})]},e)})}),D=()=>(0,x.jsx)(c,{children:(0,x.jsx)(f,{each:(0,b.useMemo)(()=>Array.from({length:10},(e,t)=>({id:t,name:`${v.person.firstName()} ${v.person.lastName()}`,email:v.internet.email()})),[]),offset:5,children:({id:e,name:t,email:r})=>(0,x.jsxs)(l,{size:`md`,variant:`outline`,children:[(0,x.jsx)(n,{children:(0,x.jsx)(i,{as:`h1`,fontSize:`lg`,children:t})}),(0,x.jsxs)(s,{pt:`sm`,children:[(0,x.jsxs)(i,{color:`muted`,children:[`Id (Index): `,e]}),(0,x.jsxs)(i,{color:`muted`,children:[`Email: `,r]})]})]},e)})}),O=()=>(0,x.jsx)(c,{children:(0,x.jsx)(f,{each:(0,b.useMemo)(()=>Array.from({length:10},(e,t)=>({id:t,name:`${v.person.firstName()} ${v.person.lastName()}`,email:v.internet.email()})),[]),limit:5,children:({id:e,name:t,email:r})=>(0,x.jsxs)(l,{size:`md`,variant:`outline`,children:[(0,x.jsx)(n,{children:(0,x.jsx)(i,{as:`h1`,fontSize:`lg`,children:t})}),(0,x.jsxs)(s,{pt:`sm`,children:[(0,x.jsxs)(i,{color:`muted`,children:[`Id (Index): `,e]}),(0,x.jsxs)(i,{color:`muted`,children:[`Email: `,r]})]})]},e)})}),k=()=>(0,x.jsx)(c,{children:(0,x.jsx)(f,{each:(0,b.useMemo)(()=>Array.from({length:10},(e,t)=>({id:t,name:`${v.person.firstName()} ${v.person.lastName()}`,email:v.internet.email()})),[]),reverse:!0,children:({id:e,name:t,email:r})=>(0,x.jsxs)(l,{size:`md`,variant:`outline`,children:[(0,x.jsx)(n,{children:(0,x.jsx)(i,{as:`h1`,fontSize:`lg`,children:t})}),(0,x.jsxs)(s,{pt:`sm`,children:[(0,x.jsxs)(i,{color:`muted`,children:[`Id (Index): `,e]}),(0,x.jsxs)(i,{color:`muted`,children:[`Email: `,r]})]})]},e)})}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <For each={[]} fallback={<EmptyState.Root description="There are no items to show" indicator={<BoxIcon />} />}>
        {(item, index) => <Text key={index}>{item}</Text>}
      </For>
    </VStack>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} filter={({
      email
    }) => email.includes("gmail")}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} sort={(a, b) => a.name.localeCompare(b.name)}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} offset={5}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} limit={5}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} reverse>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...k.parameters?.docs?.source}}},A=[`Basic`,`FallBack`,`Filter`,`Sort`,`Offset`,`Limit`,`Reverse`]}))();export{C as Basic,w as FallBack,T as Filter,O as Limit,D as Offset,k as Reverse,E as Sort,A as __namedExportsOrder,S as default};