import { ClassAttributes, HTMLAttributes, RefAttributes } from '../../../node_modules/react';
export type ContentProps = HTMLAttributes<HTMLDivElement> & ClassAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>;
export declare const DefaultContent: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<ContentProps, "ref"> & RefAttributes<HTMLDivElement>>;
