import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { Button } from '../component/Button';
import colors from '../component/colors';

describe('Button Component', () => {
    it('renders button with default styles', () => {
        const { getByText } = render(<Button>Click me</Button>);

        const button = getByText('Click me');

        expect(button).toHaveStyleRule('font-size', '14px');
        expect(button).toHaveStyleRule('color', colors.blue1);
    });

    it('applies styles based on props', () => {
        const { getByText } = render(
            <Button maxWidth={200} fontSize={16}>
                Click me
            </Button>
        );

        const button = getByText('Click me');
        expect(button).toHaveStyleRule('max-width', '200px');
        expect(button).toHaveStyleRule('font-size', '16px');
    });

    it('applies hover styles on mouse over', () => {
        const { getByText } = render(<Button>Click me</Button>);

        const button = getByText('Click me');

        fireEvent.mouseOver(button);

        expect(button).toHaveStyleRule('color', 'white', {
            modifier: ':hover',
        });
        expect(button).toHaveStyleRule('background-color', colors.blue1, {
            modifier: ':hover',
        });
    });

    it('applies disabled styles when disabled', () => {
        const { getByText } = render(<Button disabled>Click me</Button>);

        const button = getByText('Click me');

        expect(button).toHaveStyleRule('color', colors.grey4, {
            modifier: ':disabled',
        });
        expect(button).toHaveStyleRule(`border', '1px solid ${colors.grey4}`);
    });
});
