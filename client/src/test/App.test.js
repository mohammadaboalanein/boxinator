import App from '../App';
import AddBox from "../views/AddBox"
import ListBoxes from "../views/ListBoxes"
import { Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<App/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap);

  })
  it('Should show AddBox Feed component for /addbox router)', () => {
    expect(pathMap['/addbox']).toBe(AddBox);
  })
  it('Should show ListBoxes Feed component for /listboxes router', () => {
    expect(pathMap['/listboxes']).toBe(ListBoxes);
  })
})




