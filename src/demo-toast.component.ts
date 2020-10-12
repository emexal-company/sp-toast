import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-toast.styles';
import template from './demo-toast.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Toast } from '@spectrum/sp-toast';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-toast')
export class DemoToast extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-toast': DemoToast;
  }
}
