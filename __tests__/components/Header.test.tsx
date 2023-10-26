import Header from "../../src/components/Header/Header";
import { render, screen } from '@testing-library/react'

describe('Something', () => {
    it('test 2', () => {
        render(<Header />);
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("About Us")).toBeInTheDocument();

    });

});