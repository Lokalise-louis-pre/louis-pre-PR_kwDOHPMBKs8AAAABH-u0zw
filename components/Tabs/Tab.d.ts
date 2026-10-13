import { ButtonHTMLAttributes, ReactNode } from '../../../node_modules/react';
export type TabProps = {
    /**
     * Renders text content and / or any HTML node inside.
     */
    children?: ReactNode;
    /**
     * Toggles disabled state of the `Tab`.
     */
    disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Tab: import('../../../node_modules/react').ForwardRefExoticComponent<{
    /**
     * Renders text content and / or any HTML node inside.
     */
    children?: ReactNode;
    /**
     * Toggles disabled state of the `Tab`.
     */
    disabled?: boolean | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement> & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
