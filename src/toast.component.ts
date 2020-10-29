import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import toastStyles from './toast.styles';
import template from './toast.template';

import { Button } from '@spectrum/sp-button';

@customElement('sp-toast')
export class Toast extends Base {
  public static componentStyles = Button.componentStyles.concat(toastStyles);

  @property({ type: String }) public width = '';
  @property({ type: String }) public label = '';
  @property({ type: String }) public content = '';
  @property({ type: Boolean }) public info = false;
  @property({ type: Boolean }) public negative = false;
  @property({ type: Boolean }) public positive = false;

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-toast': Toast;
  }
}
