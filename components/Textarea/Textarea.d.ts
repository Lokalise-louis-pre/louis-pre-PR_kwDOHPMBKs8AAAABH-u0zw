import { TextareaHTMLAttributes } from '../../../node_modules/react';
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean | string | string[];
}
export declare const Textarea: import('../../../node_modules/react').ForwardRefExoticComponent<TextareaProps & import('../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>;
