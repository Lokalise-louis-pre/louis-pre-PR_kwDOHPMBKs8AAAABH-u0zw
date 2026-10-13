import { ButtonHTMLAttributes, ReactNode } from '../../../node_modules/react';
export declare const ToggleIcon: import('../../../node_modules/react').ForwardRefExoticComponent<{
    label: string;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    onToggle: () => void;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
