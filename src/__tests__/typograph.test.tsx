import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Typograph } from '../component/Typograph';

describe('Typograph Component', () => {
    it('renders correctly', () => {
        const { container } = render(<Typograph>Content</Typograph>);
        const typographElement = container.firstChild as HTMLElement;
        expect(typographElement).toBeInTheDocument();
    });

    it('renders content', () => {
        const { container } = render(<Typograph>Content</Typograph>);
        const typographElement = container.firstChild as HTMLElement;
        expect(typographElement.textContent).toBe('Content');
    });
});
