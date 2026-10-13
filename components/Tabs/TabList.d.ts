import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export type TabListProps = {
    /**
     * Renders text content and / or any HTML node inside. Expects multiple `Tab` components as children.
     */
    children?: ReactNode;
} & {
    ariaLabelledBy?: string;
    ariaLabel?: string;
} & HTMLAttributes<HTMLDivElement>;
export declare const TabList: import('../../../node_modules/react').ForwardRefExoticComponent<{
    /**
     * Renders text content and / or any HTML node inside. Expects multiple `Tab` components as children.
     */
    children?: ReactNode;
} & {
    ariaLabelledBy?: string | undefined;
    ariaLabel?: string | undefined;
} & HTMLAttributes<HTMLDivElement> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
