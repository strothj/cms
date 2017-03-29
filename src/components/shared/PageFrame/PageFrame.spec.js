import { expect } from 'chai';
import { shallow } from 'enzyme';
import PageFrame from './PageFrame';
import generateTitle from './generateTitle';

// TODO: Add fonts unit tests

const pageFrame = props => (shallow(
  <PageFrame fonts={[{ id: 0, name: 'Roboto' }]} {...props} />,
));

describe('<PageFrame />', () => {
  it('it adds page title', () => {
    const ctx = { routeName: 'index', siteTitle: 'Site' };
    const expectedTitle = generateTitle(ctx);

    const wrapper = pageFrame(ctx);
    const title = wrapper.find('title').node;

    expect(title).to.exist;
    expect(title.props.children).to.equal(expectedTitle);
  });

  it('renders children', () => {
    const wrapper = pageFrame({ children: <div className="expected" /> });

    expect(wrapper.find('.expected').node).to.exist;
  });
});
