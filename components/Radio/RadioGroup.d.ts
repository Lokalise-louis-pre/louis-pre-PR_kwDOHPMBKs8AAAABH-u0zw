import { RadioContextProps } from './RadioContext';
export interface RadioGroupProps extends RadioContextProps {
    /**
     * Renders a form validation `InputErrorMessage`.
     */
    error?: string | string[];
    /**
     * Sets the css class attribute.
     */
    className?: string;
}
export declare const RadioGroup: {
    ({ children, error, className, ...props }: RadioGroupProps): import("react").JSX.Element;
    displayName: string;
};
