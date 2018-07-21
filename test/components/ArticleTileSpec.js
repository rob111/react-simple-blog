import ArticleTile from '../../src/components/ArticleTile';

import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('ArticleTile', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <ArticleTile
        title="How to Build a Spaceship"
        body="Go to NASA maybe"
      />
    )
  });

  it('renders a paragraph tag with the article title', () => {
    expect(wrapper.find('p')).toBePresent();

  });

  it('renders the article title', () => {
    expect(wrapper.text()).toEqual('How to Build a Spaceship');
  })
})
