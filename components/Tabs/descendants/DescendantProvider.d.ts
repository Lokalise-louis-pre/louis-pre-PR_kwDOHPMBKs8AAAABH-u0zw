import { Context, Dispatch, ReactNode, SetStateAction } from '../../../../node_modules/react';
import { Descendant, DescendantContextValue } from './createDescendantsContext';
export declare const DescendantProvider: <DescendantType extends Descendant>({ context: Ctx, children, items, set, }: {
    context: Context<DescendantContextValue<DescendantType>>;
    children: ReactNode;
    items: DescendantType[];
    set: Dispatch<SetStateAction<DescendantType[]>>;
}) => import("react").JSX.Element;
