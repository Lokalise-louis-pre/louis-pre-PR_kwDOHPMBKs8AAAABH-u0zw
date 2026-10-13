import { HTMLAttributes, MutableRefObject, ReactNode } from '../../../node_modules/react';
export type TableHeaderProps = {
    /**
     * Renders text content and / or any HTML node.
     */
    children: ReactNode;
    /**
     * Forwards a ref to the table header element.
     */
    ref?: MutableRefObject<HTMLTableSectionElement>;
} & Omit<HTMLAttributes<HTMLTableSectionElement>, 'children'>;
export declare const TableHeader: {
    ({ ref, children, ...rest }: TableHeaderProps): import("react").JSX.Element;
    displayName: string;
};
