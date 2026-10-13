import { InputHTMLAttributes } from '../../../node_modules/react';
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * Toggles whether the checkbox should appear as indeterminate.
     */
    indeterminate?: boolean;
    /**
     * Renders a form validation `InputErrorMessage`.
     */
    error?: boolean | string | string[];
    /**
     * Error IDs for `InputErrorMessage`, will be generated automatically if an error message is passed.
     * Used by CheckboxGroup to associate input errors with multiple checkboxes.
     * */
    errorIds?: string;
    /**
     * Sets the css class attribute.
     */
    className?: string;
}
export declare const Checkbox: import('../../../node_modules/react').ForwardRefExoticComponent<CheckboxProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
