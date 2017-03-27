import { expect } from 'chai';
import { shallow } from 'enzyme';
import PageFrame from './PageFrame';
import generateTitle from './generateTitle';

describe('<PageFrame />', () => {
  it('it adds page title', () => {
    const ctx = { routeName: 'index', siteTitle: 'Site' };
    const expectedTitle = generateTitle(ctx);

    const wrapper = shallow(<PageFrame {...ctx} />);
    const title = wrapper.find('title').node;

    expect(title).to.exist;
    expect(title.props.children).to.equal(expectedTitle);
  });

  it('renders children', () => {
    const wrapper = shallow(
      <PageFrame>
        <div className="expected" />
      </PageFrame>,
    );

    expect(wrapper.find('.expected').node).to.exist;
  });
});
