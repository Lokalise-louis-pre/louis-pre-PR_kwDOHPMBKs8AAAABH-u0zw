import { StepWizardPageData } from '../StepWizardPage';
export type HorizontalPageCounterProps = {
    currentPageIndex: number;
    onNavigateToPage: (index: number) => void;
    pages: StepWizardPageData[];
};
export declare const HorizontalPageCounter: {
    ({ currentPageIndex, onNavigateToPage, pages, }: HorizontalPageCounterProps): import("react").JSX.Element;
    displayName: string;
};
