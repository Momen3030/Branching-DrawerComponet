import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'branching-drawer',
  styleUrl: 'branching-drawer.css',
  shadow: true,
})
export class BranchingDrawer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
