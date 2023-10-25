import Home from "../../src/pages/index";
import { render } from '@testing-library/react'

describe('Something', () => {
    it('should something', () => {
        const { container } = render(<Home></Home>);
        expect(container).toMatchSnapshot();
    });
});