import { InputHTMLAttributes, ReactNode } from '../../../node_modules/react';
type InputSizeVariants = 'small' | 'default';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
    /**
     * Toggles a clear button to empty the input.
     */
    clearable?: boolean;
    /**
     * Renders a form validation `InputErrorMessage` when passed as `string | string[]`, or just applies error styling when `true`.
     */
    error?: boolean | string | string[];
    /**
     * Renders text content and / or any HTML node on the left side of the input.
     */
    prefix?: ReactNode;
    /**
     * Renders text content and / or any HTML node on the right side of the input.
     */
    suffix?: ReactNode;
    /**
     * Controls height of input element.
     */
    inputSize?: InputSizeVariants;
    /**
     * Sets the css class attribute.
     */
    className?: string;
}
export declare const Input: import('../../../node_modules/react').ForwardRefExoticComponent<InputProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export {};
