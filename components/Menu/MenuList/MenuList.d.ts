import { Placement } from '@floating-ui/react';
import { ReactNode } from '../../../../node_modules/react';
export interface MenuListProps {
    /**
     * Renders any HTML node, including `MenuItem` and `MenuDivider`.
     */
    children: ReactNode;
    /**
     *  Changes the placement of the MenuList relative to the element used to open the menu.
     */
    placement?: Placement;
    /**
     * Toggles full width rendering of the MenuList.
     */
    fullWidth?: boolean;
    /**
     * Sets the css class attribute.
     */
    className?: string;
}
export declare const MenuList: import('../../../../node_modules/react').ForwardRefExoticComponent<MenuListProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
