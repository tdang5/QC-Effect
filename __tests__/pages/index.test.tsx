import Home from "../../src/pages/index";
import { render, screen } from '@testing-library/react'

describe('Something', () => {
    it('should something', () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });
    it('test 2', () => {
        render(<Home />);
        expect(screen.getByText("World-Class Special Effects")).toBeInTheDocument();
    });

});