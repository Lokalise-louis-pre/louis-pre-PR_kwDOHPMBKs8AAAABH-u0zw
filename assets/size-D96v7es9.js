import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CB3_FCD4.js";import"./index-DT_f3JHH.js";import{t as d,T as m}from"./ThemeSwitcher-DtENVPJS.js";import{r as o}from"./index-MPVjHJeJ.js";import{g as p}from"./tokenValues-BQyP9yJ8.js";import{M as x,U as j}from"./index-DjnbTMjp.js";import"./preview-EMD9rg85.js";import"./iframe-BLiBCL7k.js";import"./DocsRenderer-CFRXHY34-CODBhzlk.js";import"./react-18-BlUjvyv-.js";import"./index-Bzm33-PM.js";import"./index-vJCRx9DD.js";import"./index-CFeRKNTJ.js";import"./index-DrFu-skq.js";const u="_container_hqg07_1",g="_block_hqg07_10",r={container:u,block:g},v=()=>{const t={code:"code",div:"div",span:"span",...s()},[n,l]=o.useState("themeLokaliseLight"),a=p(d[n].size);return e.jsxs(e.Fragment,{children:[e.jsx(m,{selectedTheme:n,onSelectTheme:l}),e.jsx(t.div,{className:r.container,children:a.map(({key:i,tokenValue:h})=>e.jsxs(o.Fragment,{children:[e.jsx(t.span,{children:e.jsxs(t.code,{children:["value('size.",i,"')"]})}),e.jsx(t.div,{className:r.block,style:{height:h}})]},i))})]})};function c(t){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Foundations/Size"}),`
`,e.jsx(n.h1,{id:"size",children:"Size"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#size-options",children:"Size Options"})}),`
`]}),`
`,e.jsx("h2",{id:"overview",children:"Overview"}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @lokalise/louis
`})}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const StyledButton = () => (
	<button
		style={{
			height: 'var(--lok-size-height-button-default)',
		}}
	></button>
);
`})}),`
`,e.jsx("h2",{id:"size-options",children:"Size Options"}),`
`,e.jsx(j,{children:e.jsx(v,{})})]})}function E(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{v as Size,E as default};
