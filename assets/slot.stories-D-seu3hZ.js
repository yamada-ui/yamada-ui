import{i as e}from"./preload-helper-B45gAKPr.js";import{I as t,L as n,R as r}from"./core-RNiP33lW.js";import{t as i}from"./jsx-runtime-BBQGix-2.js";var a,o,s,c,l;e((()=>{r(),a=i(),o={component:t,title:`Components / Slot`},s=()=>(0,a.jsx)(({asChild:e,...n})=>(0,a.jsx)(e?t:`button`,{...n}),{asChild:!0,onClick:e=>{e.defaultPrevented||console.log(`Not logged because default is prevented.`)},children:(0,a.jsx)(`a`,{href:`/about`,onClick:e=>e.preventDefault(),children:`About`})}),c=()=>(0,a.jsx)(({asChild:e,children:r,endIcon:i,startIcon:o,...s})=>(0,a.jsxs)(e?t:`button`,{...s,children:[o,(0,a.jsx)(n,{children:r}),i]}),{asChild:!0,children:(0,a.jsx)(`a`,{href:`/about`,children:`About`})}),s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const Button: FC<HTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  }> = ({
    asChild,
    ...props
  }) => {
    const Component = asChild ? Slot : "button";
    return <Component {...props} />;
  };
  return <Button asChild onClick={ev => {
    if (!ev.defaultPrevented) console.log("Not logged because default is prevented.");
  }}>
      <a href="/about" onClick={ev => ev.preventDefault()}>
        About
      </a>
    </Button>;
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const Button: FC<HTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    endIcon?: ReactNode;
    startIcon?: ReactNode;
  }> = ({
    asChild,
    children,
    endIcon,
    startIcon,
    ...props
  }) => {
    const Component = asChild ? Slot : "button";
    return <Component {...props}>
        {startIcon}
        <Slottable>{children}</Slottable>
        {endIcon}
      </Component>;
  };
  return <Button asChild>
      <a href="/about">About</a>
    </Button>;
}`,...c.parameters?.docs?.source}}},l=[`Basic`,`MultipleChildren`]}))();export{s as Basic,c as MultipleChildren,l as __namedExportsOrder,o as default};