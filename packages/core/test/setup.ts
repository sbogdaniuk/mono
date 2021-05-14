import { configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import 'jest-canvas-mock';

configure( { adapter: new ReactSixteenAdapter() } );
