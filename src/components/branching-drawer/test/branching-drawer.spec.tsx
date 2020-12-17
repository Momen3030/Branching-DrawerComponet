import { newSpecPage } from '@stencil/core/testing';
import { BranchingDrawer } from '../branching-drawer';

describe('branching-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BranchingDrawer],
      html: `<branching-drawer></branching-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <branching-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </branching-drawer>
    `);
  });
});
