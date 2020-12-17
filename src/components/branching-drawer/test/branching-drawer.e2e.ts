import { newE2EPage } from '@stencil/core/testing';

describe('branching-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<branching-drawer></branching-drawer>');

    const element = await page.find('branching-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
