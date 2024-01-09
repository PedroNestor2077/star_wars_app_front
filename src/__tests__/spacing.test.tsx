import { render } from '@testing-library/react';
import { Spacing } from '../component/Spacing';
import '@testing-library/jest-dom/extend-expect';

describe('Spacing Component', () => {
    it('renders with spacing values', () => {
        const { container } = render(
            <Spacing top={10} bottom={20} left={5} right={15}>
                Content
            </Spacing>
        );
        const spacingElement = container.firstChild as HTMLElement;

        expect(spacingElement).toHaveStyle('margin-top: 10px');
        expect(spacingElement).toHaveStyle('margin-bottom: 20px');
        expect(spacingElement).toHaveStyle('margin-left: 5px');
        expect(spacingElement).toHaveStyle('margin-right: 15px');
        expect(spacingElement.textContent).toBe('Content');
    });

    it('renders without spacing values', () => {
        const { container } = render(<Spacing>Content</Spacing>);

        const spacingElement = container.firstChild as HTMLElement;

        expect(spacingElement).toHaveStyle('margin-top:');
        expect(spacingElement).toHaveStyle('margin-bottom:');
        expect(spacingElement).toHaveStyle('margin-left:');
        expect(spacingElement).toHaveStyle('margin-right:');
        expect(spacingElement.textContent).toBe('Content');
    });
});
