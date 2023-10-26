import { render, screen } from '@testing-library/react'
import Footer from '../../src/components/Footer/Footer';

describe('Something', () => {
    it('test 2', () => {
        render(<Footer />);
        expect(screen.getByTestId("footer-logo")).toBeInTheDocument();

    });

});