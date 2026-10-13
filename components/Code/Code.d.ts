import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export type CodeProps = {
    /**
     * Renders text content and / or any HTML node as a code element.
     */
    children: ReactNode;
    /**
     * Toggles displaying newlines.
     */
    multiline?: boolean;
    /**
     * Renders a label above the code element.
     */
    labelText?: ReactNode;
    /**
     * Toggles the copy-to-clipboard button.
     */
    clipboard?: boolean;
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'style' | 'children'>;
export declare const Code: ({ labelText, multiline, clipboard, children, ...rest }: CodeProps) => import("react").JSX.Element;
