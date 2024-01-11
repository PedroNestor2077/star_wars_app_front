import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { Select } from '../component/Select';
const mockOnSelect = jest.fn();
const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
];

describe('Select Component', () => {
    it('renders select with options and placeholder', () => {
        const { getByText, getByTestId } = render(
            <Select
                options={options}
                placeholder="Select an option"
                onSelect={mockOnSelect}
                value=""
            />
        );

        const select = getByTestId('select');
        const placeholderOption = getByText('Select an option');

        expect(select).toBeInTheDocument();
        expect(placeholderOption).toBeInTheDocument();

        options.forEach((option) => {
            const renderedOption = getByTestId(option.label);
            expect(renderedOption).toBeInTheDocument();
        });
    });

    it('calls onSelect callback when an option is selected', () => {
        const { getByTestId } = render(
            <Select
                options={options}
                placeholder="Select an option"
                onSelect={mockOnSelect}
                value=""
            />
        );

        const select = getByTestId('select');
        fireEvent.change(select, { target: { value: 'option1' } });

        expect(mockOnSelect).toHaveBeenCalledWith('option1');
    });

    it('renders with maxWidth style', () => {
        const { getByTestId } = render(
            <Select
                options={options}
                placeholder="Select an option"
                onSelect={mockOnSelect}
                value=""
                maxWidth={300}
            />
        );

        const selectContainer = getByTestId('select-container');

        expect(selectContainer).toHaveStyleRule('max-width', '300px');
    });
});
