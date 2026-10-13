import { DateRangePickerPeriod } from '../DateRangePicker';
interface PeriodButtonsProps {
    periods: readonly DateRangePickerPeriod[];
    onChange: (value: DateRangePickerPeriod) => void;
}
export declare const PeriodButtons: ({ periods, onChange }: PeriodButtonsProps) => import("react").JSX.Element;
export {};
