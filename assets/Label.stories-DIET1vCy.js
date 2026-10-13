import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{L as i}from"./Label-CZ63zcNf.js";import{I as m}from"./Input-CPLHpyb9.js";import"./clsx-B-dksMZM.js";import"./index-MPVjHJeJ.js";import"./useInputErrorMessages-gddYeL_s.js";import"./Error-BWWGylYt.js";import"./SvgIcon-DdodcY4Y.js";import"./Flex-ChKls94X.js";import"./IconButton-DH8gHv83.js";import"./index-DUj0Aiku.js";import"./Tooltip-C3mkGPYQ.js";import"./Popover-BIobbZJL.js";import"./Portal-C0rvGOAr.js";import"./index-vJCRx9DD.js";import"./index-Bzm33-PM.js";import"./useMergeRefs-CgiA6E4I.js";import"./index-Bdtxe6rI.js";import"./Close-CbSJyKiw.js";const E={title:"Components/Forms/Label",component:i,parameters:{controls:{sort:"requiredFirst"},docs:{description:{component:"Label is used to describe input fields in forms."}}}},s={render:a=>n.jsx(i,{...a,children:n.jsx(m,{placeholder:"Enter your first name"})})},e={...s,args:{text:"First name"}},r={...s,args:{text:"Project name",description:"This will be used to identify your project within your org"}},t={...s,args:{text:"First name",required:!0}},o={...s,args:{text:"First name",underline:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    text: 'First name'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    text: 'Project name',
    description: 'This will be used to identify your project within your org'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    text: 'First name',
    required: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    text: 'First name',
    underline: true
  }
}`,...o.parameters?.docs?.source}}};const R=["Default","Description","Required","Underline"];export{e as Default,r as Description,t as Required,o as Underline,R as __namedExportsOrder,E as default};
