import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import toastStyles from './toast.styles';
import template from './toast.template';

import { Button } from '@spectrum/sp-button';

@customElement('sp-toast')
export class Toast extends Base {
  public static componentStyles = [ Button.componentStyles, toastStyles ];

  @property({ type: String }) width = "";
  @property({ type: String }) label = "";
  @property({ type: String }) content = "";
  @property({ type: Boolean }) info = false;
  @property({ type: Boolean }) negative = false;
  @property({ type: Boolean }) positive = false;

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-toast': Toast;
  }
}
