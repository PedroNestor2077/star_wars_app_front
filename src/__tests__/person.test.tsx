import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Person } from '../component/Person';

describe('Person Component', () => {
    const mockPersonData = {
        name: 'Luke Skywalker',
        homeland: 'Tatooine',
        heigth: '172 cm',
        mass: '77 kg',
        gender: 'Male',
        image: 'path/to/image.jpg',
    };

    it('renders Person component with correct data', () => {
        const { getByText } = render(<Person {...mockPersonData} />);
        expect(getByText('Luke Skywalker')).toBeInTheDocument();
        expect(getByText('Tatooine')).toBeInTheDocument();
        expect(getByText('HEIGTH • 172 cm')).toBeInTheDocument();
        expect(getByText('MASS • 77 kg')).toBeInTheDocument();
        expect(getByText('GENDER • Male')).toBeInTheDocument();
    });

    it('renders Person component with correct spacing', () => {
        const { getByTestId } = render(<Person {...mockPersonData} />);
        expect(getByTestId('spacing-person-name')).toHaveStyle(
            'margin-top: 16px'
        );
        expect(getByTestId('spacing-person-homeland')).toHaveStyle(
            'margin-top: 4px'
        );
        expect(getByTestId('spacing-person-info')).toHaveStyle(
            'margin-top: 12px'
        );
    });
});
