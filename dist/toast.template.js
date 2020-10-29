import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-icon';
export default function template() {
    const classes = {
        'spectrum-Toast--info': this.info,
        'spectrum-Toast--negative': this.negative,
        'spectrum-Toast--positive': this.positive,
    };
    const iconTemplate = [];
    if (this.info) {
        iconTemplate.push(html `
            <sp-icon name="InfoMedium" class="spectrum-Toast-typeIcon"></sp-icon>
        `);
    }
    else if (this.negative) {
        iconTemplate.push(html `
            <sp-icon name="AlertMedium" class="spectrum-Toast-typeIcon"></sp-icon>
        `);
    }
    else if (this.positive) {
        iconTemplate.push(html `
            <sp-icon name="SuccessMedium" class="spectrum-Toast-typeIcon"></sp-icon>
        `);
    }
    return html `
    <div style="width: 100%;">
        <div class="spectrum-Toast ${classMap(classes)}" style="width: 100%;">
            ${iconTemplate}
            <div class="spectrum-Toast-body">
                <div class="spectrum-Toast-content">${this.content}</div>
                <slot name="button" style="float: right; margin-right: var(--spectrum-global-dimension-size-130);" ></slot>
            </div>
            <div class="spectrum-Toast-buttons">
                <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
                    <sp-icon name="CrossSmall"></sp-icon>
                </button>
            </div>
        </div>
    </div>
    `;
}
//# sourceMappingURL=toast.template.js.map