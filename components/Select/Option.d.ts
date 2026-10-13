import { GroupBase, OptionProps } from 'react-select';
export type { OptionProps };
export declare const Option: <Option, IsMulti extends boolean, Group extends GroupBase<Option> = GroupBase<Option>>({ children, innerProps, ...props }: OptionProps<Option, IsMulti, Group>) => import("react").JSX.Element;
