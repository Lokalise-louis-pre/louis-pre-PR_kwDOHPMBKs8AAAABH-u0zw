import { InputHTMLAttributes } from '../../../node_modules/react';
export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * Sets the value attribute for the option.
     */
    value: string;
    /**
     * Sets the css class attribute.
     */
    className?: string;
}
export declare const Radio: import('../../../node_modules/react').ForwardRefExoticComponent<RadioProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
