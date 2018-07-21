import ArticleShow from '../../src/components/ArticleShow';


import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('ArticleShow', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <ArticleShow
        title="How to Build a Spaceship"
        body="Go to NASA maybe"
      />
    )
  });

  it('renders a paragraph tag', () => {
    expect(wrapper.find('html')).toBePresent();

  });

  it('renders the article title', () => {
    expect(wrapper.text()).toBe('How to Build a SpaceshipGo to NASA maybeBack');
  })
})
