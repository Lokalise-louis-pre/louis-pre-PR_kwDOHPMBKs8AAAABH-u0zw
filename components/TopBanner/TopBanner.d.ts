import { HTMLAttributes } from '../../../node_modules/react';
export declare const AllStatus: readonly ["info", "warning", "error"];
export declare const AllInnerAlignments: readonly ["top", "center"];
export type Status = (typeof AllStatus)[number];
export type Alignment = (typeof AllInnerAlignments)[number];
export type TopBannerProps = {
    /**
     * Changes background color.
     */
    status?: Status;
    /**
     * Aligns the content and the close button.
     */
    align?: Alignment;
    /**
     * Allows to close the banner.
     */
    onClose?: () => void;
    className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;
export declare const TopBanner: {
    ({ status, align, onClose, children, className, ...props }: TopBannerProps): import("react").JSX.Element;
    displayName: string;
};
