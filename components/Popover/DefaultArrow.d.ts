import { Placement } from '@floating-ui/react';
import { HTMLAttributes, RefAttributes } from '../../../node_modules/react';
export type ArrowProps = {
    placement: Placement;
} & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>;
export declare const DefaultArrow: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<ArrowProps, "ref"> & RefAttributes<HTMLDivElement>>;
