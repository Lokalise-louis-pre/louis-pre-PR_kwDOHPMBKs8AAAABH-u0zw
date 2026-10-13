import { default as React, ButtonHTMLAttributes } from '../../../node_modules/react';
import { ButtonProps } from '../Button';
export interface TopBannerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: ButtonProps['variant'];
    appearance?: ButtonProps['appearance'];
}
export declare const TopBannerButton: {
    ({ variant, appearance, children, ...props }: TopBannerButtonProps): React.JSX.Element;
    displayName: string;
};
