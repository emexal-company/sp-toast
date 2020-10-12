import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import toastStyles from './toast.styles';
import template from './toast.template';
import { Button } from '@spectrum/sp-button';
let Toast = class Toast extends Base {
    constructor() {
        super(...arguments);
        this.width = "";
        this.label = "";
        this.content = "";
        this.info = false;
        this.negative = false;
        this.positive = false;
    }
    render() {
        return template.call(this);
    }
};
Toast.componentStyles = [Button.componentStyles, toastStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Toast.prototype, "width", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Toast.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Toast.prototype, "content", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Toast.prototype, "info", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Toast.prototype, "negative", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Toast.prototype, "positive", void 0);
Toast = __decorate([
    customElement('sp-toast')
], Toast);
export { Toast };
//# sourceMappingURL=toast.component.js.map