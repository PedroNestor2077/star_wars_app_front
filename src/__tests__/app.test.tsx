import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from '../component/App';

describe('App Component', () => {
    it('renders correctly', () => {
        const { container } = render(<App>Content</App>);
        const appElement = container.firstChild as HTMLElement;
        expect(appElement).toBeInTheDocument();
    });
});
