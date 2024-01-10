import { Characters } from '../page/Characters/Characters';
import { App } from '../component/App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para adicionar expectativas específicas do Jest-Dom

describe('Characters Page', () => {
    test('Should match snapshot', () => {
        const { container } = render(
            <App>
                <Characters />
            </App>
        );
        expect(container).toMatchSnapshot();
    });

    test('Should match snapshot (mobile)', () => {
        window.innerWidth = 500;

        const { container } = render(
            <App>
                <Characters />
            </App>
        );
        expect(container).toMatchSnapshot();

        window.innerWidth = 1024;
    });
});
