import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-MPVjHJeJ.js";import{I as m}from"./Input-CPLHpyb9.js";import{I as f}from"./IconButton-DH8gHv83.js";import{E as u}from"./Error-BWWGylYt.js";import"./clsx-B-dksMZM.js";import"./useInputErrorMessages-gddYeL_s.js";import"./Flex-ChKls94X.js";import"./Close-CbSJyKiw.js";import"./SvgIcon-DdodcY4Y.js";import"./index-DUj0Aiku.js";import"./Tooltip-C3mkGPYQ.js";import"./Popover-BIobbZJL.js";import"./Portal-C0rvGOAr.js";import"./index-vJCRx9DD.js";import"./index-Bzm33-PM.js";import"./useMergeRefs-CgiA6E4I.js";import"./index-Bdtxe6rI.js";const B={title:"Components/Forms/Input",component:m,parameters:{controls:{sort:"requiredFirst"},docs:{description:{component:`Input is used for text input fields.

[Figma Source File | Input](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4029%3A21039)`}}},argTypes:{value:{control:{type:"text"}},error:{control:{type:"object"}},disabled:{control:{type:"boolean"}},prefix:{control:{disable:!0}},suffix:{control:{disable:!0}},onChange:{action:"changed"}}},r=e=>{const[d,p]=c.useState(e.value);return c.useEffect(()=>{p(e.value)},[e.value]),l.jsx(m,{...e,value:d,onChange:i=>{p(i.currentTarget.value),e.onChange?.(i)}})},a={args:{placeholder:"Default"},render:r},t={args:{placeholder:"Small",inputSize:"small"},render:r},o={args:{placeholder:"Input placeholder text",value:"This input can be cleared",clearable:!0},render:r},n={args:{placeholder:"Input placeholder text",error:"Please enter a valid input",value:"Some invalid input"},render:r},s={name:"Prefix / Suffix",args:{placeholder:"Prefix / Suffix",prefix:l.jsx(u,{}),suffix:l.jsx(f,{ariaLabel:"Important",children:l.jsx(u,{})})},render:r};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Default'
  },
  render: InputTemplate
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small',
    inputSize: 'small'
  },
  render: InputTemplate
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Input placeholder text',
    value: 'This input can be cleared',
    clearable: true
  },
  render: InputTemplate
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Input placeholder text',
    error: 'Please enter a valid input',
    value: 'Some invalid input'
  },
  render: InputTemplate
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Prefix / Suffix',
  args: {
    placeholder: 'Prefix / Suffix',
    prefix: <ErrorIcon />,
    suffix: <IconButton ariaLabel="Important">
                <ErrorIcon />
            </IconButton>
  },
  render: InputTemplate
}`,...s.parameters?.docs?.source}}};const O=["Default","Small","Clearable","WithError","PrefixSuffix"];export{o as Clearable,a as Default,s as PrefixSuffix,t as Small,n as WithError,O as __namedExportsOrder,B as default};
