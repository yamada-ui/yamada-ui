import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Bt as n,Cp as r,Gs as i,Hl as a,Kl as o,Ls as ee,Ns as te,Op as ne,Us as re,Ut as s,Wl as ie,Ws as ae,Xp as oe,Yn as se,dp as ce,ht as le,kp as ue,mt as c,pp as de,pt as fe,qs as pe,rd as me,tr as he,yd as ge,zl as _e}from"./iframe-yoIXfJPu.js";import{n as l,t as ve}from"./storybook-B1Qen0YU.js";import{n as u,t as ye}from"./dist-CPx83k75.js";var d,f,be,p,m,h,xe,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Se;e((()=>{ve(),ye(),d=t(oe(),1),fe(),ie(),ce(),_e(),me(),re(),se(),te(),n(),f=de(),be={component:c,title:`Components / Table`},p=(e=10)=>Array.from({length:e},(e,t)=>({id:t.toString(),age:u.number.int({max:65,min:18}),createdAt:u.date.past(),email:u.internet.email(),firstName:u.person.firstName(),lastName:u.person.lastName(),phone:u.phone.number(),role:u.helpers.arrayElement([`admin`,`user`]),status:u.helpers.arrayElement([`active`,`inactive`]),updatedAt:u.date.past()})),m=le(),h=[m.accessor(`id`,{footer:e=>e.column.id,cellProps:{numeric:!0}}),m.accessor(`firstName`,{footer:e=>e.column.id}),m.accessor(`lastName`,{footer:e=>e.column.id}),m.accessor(`age`,{footer:e=>e.column.id,cellProps:{numeric:!0}}),m.accessor(`email`,{footer:e=>e.column.id,lineClamp:1})],xe=[...h,m.accessor(`phone`,{footer:e=>e.column.id}),m.accessor(`role`,{footer:e=>e.column.id}),m.accessor(`status`,{footer:e=>e.column.id}),m.accessor(`createdAt`,{cell:e=>e.getValue().toLocaleDateString(),footer:e=>e.column.id}),m.accessor(`updatedAt`,{cell:e=>e.getValue().toLocaleDateString(),footer:e=>e.column.id})],g=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[])}),_=()=>{let e=(0,d.useMemo)(()=>p(),[]);return(0,f.jsx)(l,{variant:`stack`,rows:[`line`,`outline`],children:(t,n,r)=>(0,f.jsx)(c,{variant:n,columns:h,data:e},r)})},v=()=>{let e=(0,d.useMemo)(()=>p(),[]);return(0,f.jsx)(l,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(t,n,r)=>(0,f.jsx)(c,{size:n,columns:h,data:e,enableRowSelection:!0},r)})},y=()=>{let e=(0,d.useMemo)(()=>p(),[]);return(0,f.jsx)(l,{variant:`stack`,rows:[`line`,`outline`],children:(t,n,r)=>(0,f.jsx)(c,{variant:n,columns:h,data:e,striped:!0},r)})},b=()=>{let e=(0,d.useMemo)(()=>p(),[]);return(0,f.jsx)(l,{variant:`stack`,columns:[`outline`,`striped`],rows:r,children:(t,n,r)=>(0,f.jsx)(c,{colorScheme:n,variant:t===`striped`?void 0:`outline`,columns:h,data:e,striped:t===`striped`},r)})},x=()=>{let e=(0,d.useMemo)(()=>p(),[]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c,{columns:h,data:e,withBorder:!0}),(0,f.jsx)(c,{columns:h,data:e,withBorder:!0,withColumnBorders:!0})]})},S=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),withColumnBorders:!0}),C=()=>(0,f.jsx)(c,{columns:xe,data:(0,d.useMemo)(()=>p(),[]),withScrollArea:!0}),w=()=>{let e=(0,d.useMemo)(()=>p(),[]);return(0,f.jsx)(l,{variant:`stack`,columns:[`outline`,`striped`],rows:r,children:(t,n,r)=>(0,f.jsx)(c,{colorScheme:n,variant:t===`striped`?void 0:`outline`,columns:h,data:e,highlightOnHover:!0,striped:t===`striped`},r)})},T=()=>(0,f.jsx)(c,{columns:(0,d.useMemo)(()=>[m.accessor(`id`,{footer:e=>e.column.id,cellProps:{numeric:!0}}),m.group({id:`user`,columns:[m.group({id:`name`,columns:[m.accessor(`firstName`,{footer:e=>e.column.id}),m.accessor(`lastName`,{footer:e=>e.column.id})],footer:e=>e.column.id,header:e=>e.column.id}),m.accessor(`age`,{footer:e=>e.column.id,cellProps:{numeric:!0}}),m.accessor(`email`,{footer:e=>e.column.id})],footer:e=>e.column.id,header:e=>e.column.id})],[]),data:(0,d.useMemo)(()=>p(),[]),withBorder:!0,withColumnBorders:!0}),E=()=>(0,f.jsx)(c,{columns:(0,d.useMemo)(()=>[m.accessor(`id`,{footer:e=>e.column.id,cellProps:{numeric:!0}}),m.group({id:`user`,columns:[m.group({id:`name`,columns:[m.accessor(`firstName`,{footer:e=>e.column.id}),m.accessor(`lastName`,{footer:e=>e.column.id})],footer:e=>e.column.id,header:e=>e.column.id}),m.accessor(`age`,{footer:e=>e.column.id,cellProps:{numeric:!0}}),m.accessor(`email`,{footer:e=>e.column.id})],footer:e=>e.column.id,header:e=>e.column.id})],[]),data:(0,d.useMemo)(()=>p(),[]),withBorder:!0,withColumnBorders:!0,withFooterGroups:!0}),D=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),enableKeyboardNavigation:!1}),O=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),initialFocusableCell:{colIndex:1,rowIndex:0}}),k=()=>{let e=(0,d.useMemo)(()=>p(),[]);return(0,f.jsx)(l,{variant:`stack`,rows:[`onClick`,`onDoubleClick`],children:(t,n,r)=>(0,f.jsx)(c,{columns:h,data:e,onRowClick:e=>{n===`onClick`&&console.log(`row clicked`,e)},onRowDoubleClick:e=>{n===`onDoubleClick`&&console.log(`row double clicked`,e)}},r)})},A=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),defaultSorting:[{id:`age`,desc:!0}]}),j=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),enableSorting:!1}),M=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),enableMultiSort:!1}),N=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),maxMultiSortColCount:2}),P=()=>{let e=(0,d.useMemo)(()=>p(),[]),[t,n]=(0,d.useState)(e);return(0,f.jsx)(c,{columns:h,data:t,enableMultiSort:!1,manualSorting:!0,onSortingChange:t=>{if(t.length){let{id:e,desc:r}=t[0];n(t=>t.toSorted((t,n)=>ne(t[e])&&ne(n[e])?r?t[e]-n[e]:n[e]-t[e]:ue(t[e])&&ue(n[e])?r?t[e].localeCompare(n[e]):n[e].localeCompare(t[e]):0))}else n(e)}})},F=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),sortDescFirst:!0}),I=()=>{let[e,t]=(0,d.useState)([{id:`age`,desc:!0}]);return(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),sorting:e,onSortingChange:t})},L=()=>{let{t:e}=o(`table`);return(0,f.jsx)(s,{children:(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(100),[]),enablePagination:!0,footer:t=>{let n=t.getState().pagination.pageIndex+1,r=t.getState().pagination.pageSize,i=t.getPageCount();return(0,f.jsxs)(a,{templateColumns:`1fr 1fr 1fr`,w:`full`,children:[(0,f.jsx)(he,{size:`sm`,gridColumn:`2 / 3`,page:n,total:i,onChange:e=>t.setPageIndex(e-1)}),(0,f.jsx)(ee,{size:`sm`,"aria-label":e(`Page size`),items:[{label:`10`,value:`10`},{label:`20`,value:`20`},{label:`30`,value:`30`},{label:`40`,value:`40`},{label:`50`,value:`50`}],value:r.toString(),rootProps:{justifySelf:`end`,w:`5xs`},onChange:e=>t.setPageSize(Number(e))})]})}})})},R=()=>{let{t:e}=o(`table`);return(0,f.jsx)(s,{children:(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(100),[]),defaultPagination:{pageIndex:2,pageSize:10},enablePagination:!0,footer:t=>{let n=t.getState().pagination.pageIndex+1,r=t.getState().pagination.pageSize,i=t.getPageCount();return(0,f.jsxs)(a,{templateColumns:`1fr 1fr 1fr`,w:`full`,children:[(0,f.jsx)(he,{size:`sm`,gridColumn:`2 / 3`,page:n,total:i,onChange:e=>t.setPageIndex(e-1)}),(0,f.jsx)(ee,{size:`sm`,"aria-label":e(`Page size`),items:[{label:`10`,value:`10`},{label:`20`,value:`20`},{label:`30`,value:`30`},{label:`40`,value:`40`},{label:`50`,value:`50`}],value:r.toString(),rootProps:{justifySelf:`end`,w:`5xs`},onChange:e=>t.setPageSize(Number(e))})]})}})})},z=()=>{let{t:e}=o(`table`),[t,n]=(0,d.useState)({pageIndex:0,pageSize:20}),r=(0,d.useMemo)(()=>p(100),[]);return(0,f.jsx)(s,{children:(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>r.slice(t.pageIndex*t.pageSize,(t.pageIndex+1)*t.pageSize),[r,t]),enablePagination:!0,footer:t=>{let n=t.getState().pagination.pageIndex+1,r=t.getState().pagination.pageSize,i=t.getPageCount();return(0,f.jsxs)(a,{templateColumns:`1fr 1fr 1fr`,w:`full`,children:[(0,f.jsx)(he,{size:`sm`,gridColumn:`2 / 3`,page:n,total:i,onChange:e=>t.setPageIndex(e-1)}),(0,f.jsx)(ee,{size:`sm`,"aria-label":e(`Page size`),items:[{label:`10`,value:`10`},{label:`20`,value:`20`},{label:`30`,value:`30`},{label:`40`,value:`40`},{label:`50`,value:`50`}],value:r.toString(),rootProps:{justifySelf:`end`,w:`5xs`},onChange:e=>t.setPageSize(Number(e))})]})},manualPagination:!0,pagination:t,rowCount:100,onPaginationChange:n})})},B=()=>{let[e,t]=(0,d.useState)({pageIndex:0,pageSize:20}),{t:n}=o(`table`);return(0,f.jsx)(s,{children:(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(100),[]),enablePagination:!0,footer:e=>{let t=e.getState().pagination.pageIndex+1,r=e.getState().pagination.pageSize,i=e.getPageCount();return(0,f.jsxs)(a,{templateColumns:`1fr 1fr 1fr`,w:`full`,children:[(0,f.jsx)(he,{size:`sm`,gridColumn:`2 / 3`,page:t,total:i,onChange:t=>e.setPageIndex(t-1)}),(0,f.jsx)(ee,{size:`sm`,"aria-label":n(`Page size`),items:[{label:`10`,value:`10`},{label:`20`,value:`20`},{label:`30`,value:`30`},{label:`40`,value:`40`},{label:`50`,value:`50`}],value:r.toString(),rootProps:{justifySelf:`end`,w:`5xs`},onChange:t=>e.setPageSize(Number(t))})]})},pagination:e,onPaginationChange:t})})},V=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),enableRowSelection:!0}),H=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),defaultRowSelection:{0:!0},enableRowSelection:!0}),U=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),enableRowSelection:!0,withFooterCheckbox:!0,withFooterGroups:!0}),W=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),enableRowSelection:!0,selectOnClickRow:!0}),G=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),enableRowSelection:!0,selectOnClickRow:!0,withCheckbox:!1}),K=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),enableRowSelection:e=>e.id!==`1`}),q=()=>{let[e,t]=(0,d.useState)({});return(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),enableRowSelection:!0,rowSelection:e,onRowSelectionChange:t})},J=()=>(0,f.jsx)(s,{children:(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),header:e=>{let t=e.getColumn(`email`)?.getFilterValue()??``;return(0,f.jsxs)(ae,{children:[(0,f.jsx)(i,{children:(0,f.jsx)(ge,{})}),(0,f.jsx)(pe,{placeholder:`Filter emails`,value:t,onChange:t=>e.getColumn(`email`)?.setFilterValue(t.target.value)})]})}})}),Y=()=>(0,f.jsx)(s,{children:(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),defaultColumnFilters:[{id:`email`,value:`gmail`}],header:e=>{let t=e.getColumn(`email`)?.getFilterValue()??``;return(0,f.jsxs)(ae,{children:[(0,f.jsx)(i,{children:(0,f.jsx)(ge,{})}),(0,f.jsx)(pe,{placeholder:`Filter emails`,value:t,onChange:t=>e.getColumn(`email`)?.setFilterValue(t.target.value)})]})}})}),X=()=>{let[e,t]=(0,d.useState)([{id:`email`,value:``}]);return(0,f.jsx)(s,{children:(0,f.jsx)(c,{columnFilters:e,columns:h,data:(0,d.useMemo)(()=>p(),[]),header:e=>{let t=e.getColumn(`email`)?.getFilterValue()??``;return(0,f.jsxs)(ae,{children:[(0,f.jsx)(i,{children:(0,f.jsx)(ge,{})}),(0,f.jsx)(pe,{placeholder:`Filter emails`,value:t,onChange:t=>e.getColumn(`email`)?.setFilterValue(t.target.value)})]})},onColumnFiltersChange:t})})},Z=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),enableColumnResizing:!0,withBorder:!0,withColumnBorders:!0}),Q=()=>(0,f.jsx)(c,{columns:h,data:(0,d.useMemo)(()=>p(),[]),enableAutoResizeTableWidth:!0,enableColumnResizing:!0,withBorder:!0,withColumnBorders:!0,tableProps:{maxW:`full`}}),$=()=>{let e=(0,d.useMemo)(()=>p(),[]);return(0,f.jsx)(l,{variant:`stack`,rows:[`onChange`,`onEnd`],children:(t,n,r)=>(0,f.jsx)(c,{columnResizeMode:n,columns:h,data:e,enableColumnResizing:!0,withBorder:!0,withColumnBorders:!0},r)})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} />;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <PropsTable variant="stack" rows={["line", "outline"]}>
      {(_, row, key) => <Table key={key} variant={row} columns={columns} data={data} />}
    </PropsTable>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => <Table key={key} size={row} columns={columns} data={data} enableRowSelection />}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <PropsTable variant="stack" rows={["line", "outline"]}>
      {(_, row, key) => <Table key={key} variant={row} columns={columns} data={data} striped />}
    </PropsTable>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <PropsTable variant="stack" columns={["outline", "striped"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Table key={key} colorScheme={row} variant={column !== "striped" ? "outline" : undefined} columns={columns} data={data} striped={column === "striped"} />}
    </PropsTable>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <>
      <Table columns={columns} data={data} withBorder />

      <Table columns={columns} data={data} withBorder withColumnBorders />
    </>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} withColumnBorders />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columnsFull} data={data} withScrollArea />;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <PropsTable variant="stack" columns={["outline", "striped"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Table key={key} colorScheme={row} variant={column !== "striped" ? "outline" : undefined} columns={columns} data={data} highlightOnHover striped={column === "striped"} />}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const columns = useMemo(() => [columnHelper.accessor("id", {
    footer: info => info.column.id,
    cellProps: {
      numeric: true
    }
  }), columnHelper.group({
    id: "user",
    columns: [columnHelper.group({
      id: "name",
      columns: [columnHelper.accessor("firstName", {
        footer: info => info.column.id
      }), columnHelper.accessor("lastName", {
        footer: info => info.column.id
      })],
      footer: info => info.column.id,
      header: info => info.column.id
    }), columnHelper.accessor("age", {
      footer: info => info.column.id,
      cellProps: {
        numeric: true
      }
    }), columnHelper.accessor("email", {
      footer: info => info.column.id
    })],
    footer: info => info.column.id,
    header: info => info.column.id
  })], []);
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} withBorder withColumnBorders />;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const columns = useMemo(() => [columnHelper.accessor("id", {
    footer: info => info.column.id,
    cellProps: {
      numeric: true
    }
  }), columnHelper.group({
    id: "user",
    columns: [columnHelper.group({
      id: "name",
      columns: [columnHelper.accessor("firstName", {
        footer: info => info.column.id
      }), columnHelper.accessor("lastName", {
        footer: info => info.column.id
      })],
      footer: info => info.column.id,
      header: info => info.column.id
    }), columnHelper.accessor("age", {
      footer: info => info.column.id,
      cellProps: {
        numeric: true
      }
    }), columnHelper.accessor("email", {
      footer: info => info.column.id
    })],
    footer: info => info.column.id,
    header: info => info.column.id
  })], []);
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} withBorder withColumnBorders withFooterGroups />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} enableKeyboardNavigation={false} />;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} initialFocusableCell={{
    colIndex: 1,
    rowIndex: 0
  }} />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <PropsTable variant="stack" rows={["onClick", "onDoubleClick"]}>
      {(_, row, key) => <Table key={key} columns={columns} data={data} onRowClick={data => {
      if (row !== "onClick") return;
      console.log("row clicked", data);
    }} onRowDoubleClick={data => {
      if (row !== "onDoubleClick") return;
      console.log("row double clicked", data);
    }} />}
    </PropsTable>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} defaultSorting={[{
    id: "age",
    desc: true
  }]} />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} enableSorting={false} />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} enableMultiSort={false} />;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} maxMultiSortColCount={2} />;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const defaultData = useMemo<Data[]>(() => createData(), []);
  const [data, setData] = useState<Data[]>(defaultData);
  return <Table columns={columns} data={data} enableMultiSort={false} manualSorting onSortingChange={sorting => {
    if (sorting.length) {
      const {
        id,
        desc
      } = sorting[0]!;
      setData(prev => prev.toSorted((a, b) => {
        if (isNumber(a[id]) && isNumber(b[id])) {
          return desc ? a[id] - b[id] : b[id] - a[id];
        } else if (isString(a[id]) && isString(b[id])) {
          return desc ? a[id].localeCompare(b[id]) : b[id].localeCompare(a[id]);
        }
        return 0;
      }));
    } else {
      setData(defaultData);
    }
  }} />;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} sortDescFirst />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [sorting, setSorting] = useState<SortingState<Data>>([{
    id: "age",
    desc: true
  }]);
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} sorting={sorting} onSortingChange={setSorting} />;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useI18n("table");
  const data = useMemo<Data[]>(() => createData(100), []);
  return <VStack>
      <Table columns={columns} data={data} enablePagination footer={table => {
      const page = table.getState().pagination.pageIndex + 1;
      const pageSize = table.getState().pagination.pageSize;
      const total = table.getPageCount();
      return <Grid templateColumns="1fr 1fr 1fr" w="full">
              <PaginationComponent.Root size="sm" gridColumn="2 / 3" page={page} total={total} onChange={page => table.setPageIndex(page - 1)} />

              <Select.Root size="sm" aria-label={t("Page size")} items={[{
          label: "10",
          value: "10"
        }, {
          label: "20",
          value: "20"
        }, {
          label: "30",
          value: "30"
        }, {
          label: "40",
          value: "40"
        }, {
          label: "50",
          value: "50"
        }]} value={pageSize.toString()} rootProps={{
          justifySelf: "end",
          w: "5xs"
        }} onChange={value => table.setPageSize(Number(value))} />
            </Grid>;
    }} />
    </VStack>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useI18n("table");
  const data = useMemo<Data[]>(() => createData(100), []);
  return <VStack>
      <Table columns={columns} data={data} defaultPagination={{
      pageIndex: 2,
      pageSize: 10
    }} enablePagination footer={table => {
      const page = table.getState().pagination.pageIndex + 1;
      const pageSize = table.getState().pagination.pageSize;
      const total = table.getPageCount();
      return <Grid templateColumns="1fr 1fr 1fr" w="full">
              <PaginationComponent.Root size="sm" gridColumn="2 / 3" page={page} total={total} onChange={page => table.setPageIndex(page - 1)} />

              <Select.Root size="sm" aria-label={t("Page size")} items={[{
          label: "10",
          value: "10"
        }, {
          label: "20",
          value: "20"
        }, {
          label: "30",
          value: "30"
        }, {
          label: "40",
          value: "40"
        }, {
          label: "50",
          value: "50"
        }]} value={pageSize.toString()} rootProps={{
          justifySelf: "end",
          w: "5xs"
        }} onChange={value => table.setPageSize(Number(value))} />
            </Grid>;
    }} />
    </VStack>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useI18n("table");
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20
  });
  const rowCount = 100;
  const defaultData = useMemo<Data[]>(() => createData(rowCount), []);
  const data = useMemo<Data[]>(() => defaultData.slice(pagination.pageIndex * pagination.pageSize, (pagination.pageIndex + 1) * pagination.pageSize), [defaultData, pagination]);
  return <VStack>
      <Table columns={columns} data={data} enablePagination footer={table => {
      const page = table.getState().pagination.pageIndex + 1;
      const pageSize = table.getState().pagination.pageSize;
      const total = table.getPageCount();
      return <Grid templateColumns="1fr 1fr 1fr" w="full">
              <PaginationComponent.Root size="sm" gridColumn="2 / 3" page={page} total={total} onChange={page => table.setPageIndex(page - 1)} />

              <Select.Root size="sm" aria-label={t("Page size")} items={[{
          label: "10",
          value: "10"
        }, {
          label: "20",
          value: "20"
        }, {
          label: "30",
          value: "30"
        }, {
          label: "40",
          value: "40"
        }, {
          label: "50",
          value: "50"
        }]} value={pageSize.toString()} rootProps={{
          justifySelf: "end",
          w: "5xs"
        }} onChange={value => table.setPageSize(Number(value))} />
            </Grid>;
    }} manualPagination pagination={pagination} rowCount={rowCount} onPaginationChange={setPagination} />
    </VStack>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20
  });
  const {
    t
  } = useI18n("table");
  const data = useMemo<Data[]>(() => createData(100), []);
  return <VStack>
      <Table columns={columns} data={data} enablePagination footer={table => {
      const page = table.getState().pagination.pageIndex + 1;
      const pageSize = table.getState().pagination.pageSize;
      const total = table.getPageCount();
      return <Grid templateColumns="1fr 1fr 1fr" w="full">
              <PaginationComponent.Root size="sm" gridColumn="2 / 3" page={page} total={total} onChange={page => table.setPageIndex(page - 1)} />

              <Select.Root size="sm" aria-label={t("Page size")} items={[{
          label: "10",
          value: "10"
        }, {
          label: "20",
          value: "20"
        }, {
          label: "30",
          value: "30"
        }, {
          label: "40",
          value: "40"
        }, {
          label: "50",
          value: "50"
        }]} value={pageSize.toString()} rootProps={{
          justifySelf: "end",
          w: "5xs"
        }} onChange={value => table.setPageSize(Number(value))} />
            </Grid>;
    }} pagination={pagination} onPaginationChange={setPagination} />
    </VStack>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} enableRowSelection />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} defaultRowSelection={{
    0: true
  }} enableRowSelection />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} enableRowSelection withFooterCheckbox withFooterGroups />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} enableRowSelection selectOnClickRow />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} enableRowSelection selectOnClickRow withCheckbox={false} />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} enableRowSelection={row => row.id !== "1"} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} enableRowSelection rowSelection={rowSelection} onRowSelectionChange={setRowSelection} />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <VStack>
      <Table columns={columns} data={data} header={table => {
      const value = table.getColumn("email")?.getFilterValue() as string | undefined ?? "";
      return <InputGroup.Root>
              <InputGroup.Element>
                <SearchIcon />
              </InputGroup.Element>

              <Input placeholder="Filter emails" value={value} onChange={ev => table.getColumn("email")?.setFilterValue(ev.target.value)} />
            </InputGroup.Root>;
    }} />
    </VStack>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <VStack>
      <Table columns={columns} data={data} defaultColumnFilters={[{
      id: "email",
      value: "gmail"
    }]} header={table => {
      const value = table.getColumn("email")?.getFilterValue() as string | undefined ?? "";
      return <InputGroup.Root>
              <InputGroup.Element>
                <SearchIcon />
              </InputGroup.Element>

              <Input placeholder="Filter emails" value={value} onChange={ev => table.getColumn("email")?.setFilterValue(ev.target.value)} />
            </InputGroup.Root>;
    }} />
    </VStack>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([{
    id: "email",
    value: ""
  }]);
  const data = useMemo<Data[]>(() => createData(), []);
  return <VStack>
      <Table columnFilters={columnFilters} columns={columns} data={data} header={table => {
      const value = table.getColumn("email")?.getFilterValue() as string | undefined ?? "";
      return <InputGroup.Root>
              <InputGroup.Element>
                <SearchIcon />
              </InputGroup.Element>

              <Input placeholder="Filter emails" value={value} onChange={ev => table.getColumn("email")?.setFilterValue(ev.target.value)} />
            </InputGroup.Root>;
    }} onColumnFiltersChange={setColumnFilters} />
    </VStack>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} enableColumnResizing withBorder withColumnBorders />;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <Table columns={columns} data={data} enableAutoResizeTableWidth enableColumnResizing withBorder withColumnBorders tableProps={{
    maxW: "full"
  }} />;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => createData(), []);
  return <PropsTable variant="stack" rows={["onChange", "onEnd"]}>
      {(_, row, key) => <Table key={key} columnResizeMode={row} columns={columns} data={data} enableColumnResizing withBorder withColumnBorders />}
    </PropsTable>;
}`,...$.parameters?.docs?.source}}},Se=`Basic.Variant.Size.Striped.ColorScheme.Border.ColumnBorders.ScrollArea.HighlightOnHover.HeaderGroups.FooterGroups.DisableKeyboardNavigation.InitialFocusableCell.RowClick.DefaultSorting.DisabledSorting.DisabledMultiSorting.MaxMultiSortColCount.ManualSorting.SortDescFirst.CustomControlSorting.Pagination.DefaultPageIndexAndSize.ManualPagination.CustomControlPagination.RowSelection.DefaultRowSelection.WithFooterCheckbox.SelectOnClickRow.HiddenCheckbox.DisabledRows.CustomControlRowSelection.ColumnFilters.DefaultColumnFilters.CustomControlColumnFilters.ColumnResizing.AutoResizeTableWidth.ColumnResizeMode`.split(`.`)}))();export{Q as AutoResizeTableWidth,g as Basic,x as Border,b as ColorScheme,S as ColumnBorders,J as ColumnFilters,$ as ColumnResizeMode,Z as ColumnResizing,X as CustomControlColumnFilters,B as CustomControlPagination,q as CustomControlRowSelection,I as CustomControlSorting,Y as DefaultColumnFilters,R as DefaultPageIndexAndSize,H as DefaultRowSelection,A as DefaultSorting,D as DisableKeyboardNavigation,M as DisabledMultiSorting,K as DisabledRows,j as DisabledSorting,E as FooterGroups,T as HeaderGroups,G as HiddenCheckbox,w as HighlightOnHover,O as InitialFocusableCell,z as ManualPagination,P as ManualSorting,N as MaxMultiSortColCount,L as Pagination,k as RowClick,V as RowSelection,C as ScrollArea,W as SelectOnClickRow,v as Size,F as SortDescFirst,y as Striped,_ as Variant,U as WithFooterCheckbox,Se as __namedExportsOrder,be as default};