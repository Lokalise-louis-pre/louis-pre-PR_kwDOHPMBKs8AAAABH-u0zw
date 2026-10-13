import { InputHTMLAttributes } from '../../../node_modules/react';
export interface ManagedCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * Sets the value attribute for the checkbox option.
     */
    value: string;
    /**
     * Toggles whether the checkbox should appear as indeterminate.
     */
    indeterminate?: boolean;
}
export declare const ManagedCheckbox: import('../../../node_modules/react').ForwardRefExoticComponent<ManagedCheckboxProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
