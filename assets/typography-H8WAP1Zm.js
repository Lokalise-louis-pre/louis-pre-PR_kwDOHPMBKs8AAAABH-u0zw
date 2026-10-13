import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-CB3_FCD4.js";import"./index-DT_f3JHH.js";import{r as y}from"./index-BsdimXNc.js";import{r as g}from"./index-MPVjHJeJ.js";import{t as f,T as u}from"./ThemeSwitcher-DtENVPJS.js";import{C as d}from"./Code-A8r9MF8W.js";import{M as b,U as C}from"./index-DjnbTMjp.js";import"./preview-EMD9rg85.js";import"./iframe-BLiBCL7k.js";import"./DocsRenderer-CFRXHY34-CODBhzlk.js";import"./react-18-BlUjvyv-.js";import"./index-Bzm33-PM.js";import"./clsx-B-dksMZM.js";import"./Label-CZ63zcNf.js";import"./Flex-ChKls94X.js";import"./IconButton-DH8gHv83.js";import"./index-DUj0Aiku.js";import"./Tooltip-C3mkGPYQ.js";import"./Popover-BIobbZJL.js";import"./Portal-C0rvGOAr.js";import"./index-vJCRx9DD.js";import"./useMergeRefs-CgiA6E4I.js";import"./index-Bdtxe6rI.js";import"./SvgIcon-DdodcY4Y.js";import"./Clipboard-B2FeA22X.js";import"./index-CFeRKNTJ.js";import"./index-DrFu-skq.js";const T="_table_ahpno_1",w="_bodyCell_ahpno_6",N="_headCell_ahpno_10",i={table:T,bodyCell:w,headCell:N},O=()=>{const[n,t]=g.useState("themeLokaliseLight"),a=[],h=(r,l)=>{Object.entries(r).forEach(([o,s])=>{if(s!==null&&typeof s=="object")h(s,[...l,o]);else{const c={key:l.join("."),typographyValue:r},j=JSON.stringify(c);a.some(x=>JSON.stringify(x)===j)||a.push(c)}})};return h(f[n].typography,[]),e.jsxs(e.Fragment,{children:[e.jsx(u,{onSelectTheme:t,selectedTheme:n}),e.jsxs("table",{className:i.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:i.headCell,children:"Token"}),e.jsx("th",{className:i.headCell,children:"Value"}),e.jsx("th",{className:i.headCell,children:"Sample"})]})}),e.jsx("tbody",{children:a.map(({key:r,typographyValue:l})=>e.jsxs("tr",{children:[e.jsx("td",{className:i.bodyCell,children:e.jsxs(d,{children:["typography('",r,"')"]})}),e.jsx("td",{className:i.bodyCell,children:e.jsx(d,{children:Object.entries(l).map(([o,s])=>s===null||typeof s=="object"?null:e.jsxs("span",{children:[o,": ",s.toString(),e.jsx("br",{})]},o))})}),e.jsx("td",{className:i.bodyCell,children:e.jsx("span",{style:l,children:"Lorem Ipsum"})})]},r))})]})]})};function p(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Foundations/Typography"}),`
`,e.jsx(t.h1,{id:"typography",children:"Typography"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#figma-design-file",children:"Figma Design File"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#typography-options",children:"Typography Options"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:["At Lokalise we use Graphik typeface internally, and it is ",e.jsx(t.strong,{children:"NOT bundled"})," in Louis by default due to legal requirements. Please purchase it from their ",e.jsx(t.a,{href:"https://type.today/en/Graphik",rel:"nofollow",children:"website"})," in case you need it."]}),`
`,e.jsxs(t.p,{children:["If you'd like to install a custom font family, please see the ",e.jsx(y,{kind:"Overview/Theming",children:"Custom Fonts"})," section for more information in Theming."]}),`
`,e.jsx(t.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm install @lokalise/louis
`})}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const StyledHeading = () => (
	<h1
		style={{
			color: 'var(--lok-typography-heading-1)',
		}}
	></h1>
);
`})}),`
`,e.jsx(t.h2,{id:"figma-design-file",children:"Figma Design File"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=5398%3A21831",rel:"nofollow",children:"Figma Source File | Typography"})}),`
`]}),`
`,e.jsx(t.h2,{id:"typography-options",children:"Typography Options"}),`
`,e.jsx(C,{children:e.jsx(O,{})})]})}function ee(n={}){const{wrapper:t}={...m(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(p,{...n})}):p(n)}export{ee as default};
