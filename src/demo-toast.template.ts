import { html } from 'lit-element';
import { DemoToast } from './demo-toast.component';

import '@spectrum/sp-toast';
import '@spectrum/sp-container';
import '@spectrum/sp-button';


export default function template(this: DemoToast) {
  return html`
  <sp-container>
      <sp-rule medium label="Toast - Standard"></sp-rule>
      <sp-demo width="400">
        <pre><sp-toast content="Content of toast">
          <sp-button slot="button" quiet type="over-background" label="Undo"></sp-button>
        </sp-toast></pre>
      </sp-demo>
      <sp-rule medium label="Toast - Info"></sp-rule>
      <sp-demo width="400">
        <pre><sp-toast info width="400" content="Content of toast" label="Undo"></sp-toast></pre>
      </sp-demo>
      <sp-rule medium label="Toast - Negative"></sp-rule>
      <sp-demo width="400">
        <pre><sp-toast Negative width="400" content="Content of toast" label="Undo"></sp-toast></pre>
      </sp-demo>
      <sp-rule medium label="Toast - Success"></sp-rule>
      <sp-demo width="400">
        <pre><sp-toast positive width="400" content="Content of toast" label="Undo"></sp-toast></pre>
      </sp-demo>
    </sp-container>
  `;
}
