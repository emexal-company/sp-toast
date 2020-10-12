import { Base } from '@spectrum/sp-base';
export declare class Toast extends Base {
    static componentStyles: (import("lit-element").CSSResult | import("lit-element").CSSResult[])[];
    width: string;
    label: string;
    content: string;
    info: boolean;
    negative: boolean;
    positive: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-toast': Toast;
    }
}
