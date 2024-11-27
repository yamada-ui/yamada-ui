import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as j}from"./index-ClcD9ViR.js";import{B as w}from"./box-CZiiLnUQ.js";import{F as s}from"./for-CnGs9sZj.js";import{V as l}from"./stack-DgGWIYtK.js";import{C as f,a as k,b as C}from"./card-o1Gybbyz.js";import{T as a}from"./text-ACfjY0cR.js";import{E as S}from"./empty-state-CfDZsNf1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-DDeGQYl6.js";import"./use-component-style-fOirb5M1.js";import"./factory-Dfrbb1EY.js";import"./theme-provider-DSx3k1bh.js";import"./use-var-BQS3JFPa.js";import"./forward-ref-D13m8o2p.js";import"./createLucideIcon-DHJHrKis.js";const R={component:s,title:"Components / Other / For"},r=()=>{const n=j.useMemo(()=>[{name:"孫悟空",powers:["かめはめ波","元気玉"]},{name:"ベジータ",powers:["ギャリック砲","ビッグバンアタック"]},{name:"ピッコロ",powers:["魔貫光殺砲","再生能力"]}],[]);return e.jsx(l,{children:e.jsx(s,{each:n,children:({name:t,powers:h},u)=>e.jsxs(f,{size:"md",variant:"outline",children:[e.jsx(k,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:t})}),e.jsx(C,{pt:"sm",children:e.jsxs(a,{color:"muted",children:["Powers: ",h.join(", ")]})})]},u)})})},o=()=>e.jsx(l,{children:e.jsx(s,{each:[],fallback:e.jsx(S,{description:"There are no items to show",indicator:e.jsx(w,{})}),children:(n,t)=>e.jsx(a,{children:n},t)})});var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const items = useMemo(() => [{
    name: "孫悟空",
    powers: ["かめはめ波", "元気玉"]
  }, {
    name: "ベジータ",
    powers: ["ギャリック砲", "ビッグバンアタック"]
  }, {
    name: "ピッコロ",
    powers: ["魔貫光殺砲", "再生能力"]
  }], []);
  return <VStack>
      <For each={items}>
        {({
        name,
        powers
      }, index) => <Card key={index} size="md" variant="outline">
            <CardHeader>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </CardHeader>

            <CardBody pt="sm">
              <Text color="muted">Powers: {powers.join(", ")}</Text>
            </CardBody>
          </Card>}
      </For>
    </VStack>;
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <VStack>
      <For each={[]} fallback={<EmptyState description="There are no items to show" indicator={<BoxIcon />} />}>
        {(item, index) => <Text key={index}>{item}</Text>}
      </For>
    </VStack>;
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const q=["basic","withFallBack"];export{q as __namedExportsOrder,r as basic,R as default,o as withFallBack};
