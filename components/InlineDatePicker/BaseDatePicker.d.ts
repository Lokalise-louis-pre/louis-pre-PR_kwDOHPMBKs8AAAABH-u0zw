import { PropsBase, PropsRange, PropsSingle } from 'react-day-picker';
type OmittedProps = 'weekStartsOn' | 'showOutsideDays' | 'defaultMonth' | 'components';
type SelectionModes = 'range' | 'single';
export type BaseDatePickerProps<SelectionMode extends SelectionModes> = PropsBase & (SelectionMode extends 'range' ? Omit<PropsRange, OmittedProps> : Omit<PropsSingle, OmittedProps>);
export declare const BaseDatePicker: <SelectionMode_1 extends SelectionModes>({ ...props }: BaseDatePickerProps<SelectionMode_1>) => import("react").JSX.Element;
export {};
