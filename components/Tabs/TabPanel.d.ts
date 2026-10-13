import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export type TabPanelProps = {
    /**
     * Renders text content and / or any HTML node inside.
     */
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export declare const TabPanel: import('../../../node_modules/react').ForwardRefExoticComponent<{
    /**
     * Renders text content and / or any HTML node inside.
     */
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
