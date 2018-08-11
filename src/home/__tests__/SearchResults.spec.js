import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchResults from '../SearchResults';
Enzyme.configure({ adapter: new Adapter() });

const props = {
  results: [
    { user: { screen_name: 'user-test' }, id_str: '1', text: 'text-ipsum' },
    { user: { screen_name: 'user-test' }, id_str: '1', text: 'text-ipsum' }
  ]
};
describe('components', () => {
  describe('SearchResults', () => {
    it('should render self', () => {
      const wrapper = mount(<SearchResults {...props} />);
      expect(wrapper.find('div.search-box')).toHaveLength(1);
      expect(wrapper.find('div.search-item')).toHaveLength(2);
    });
  });
});
