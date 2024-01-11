import { SelectArrow, SelectContainer, Select as StyledSelect } from './styles';

/**
 * Represents an option for the Select component.
 *
 * @typedef {Object} Option
 * @property {string} label - The label for the option.
 * @property {any} value - The value associated with the option.
 */

/**
 * @typedef {Object} Props
 * @property {Option[]} options - An array of options for the Select component.
 * @property {string} placeholder - The placeholder text for the Select component.
 * @property {(value: any) => void} onSelect - The callback function invoked when an option is selected.
 * @property {any} value - The currently selected value.
 * @property {number} [maxWidth] - The maximum width of the Select component.
 */

/**
 * Select component for handling user input selection.
 *
 * @component
 * @param {Props} props - The properties of the Select component.
 * @returns {JSX.Element} - The JSX element representing the Select component.
 */

type Option = {
    label: string;
    value: any;
};
interface Props {
    options: Option[];
    placeholder: string;
    onSelect: (value: any) => void;
    value: any;
    maxWidth?: number;
}

export const Select = ({
    options,
    placeholder,
    onSelect,
    maxWidth,
    value,
}: Props) => {
    return (
        <SelectContainer maxWidth={maxWidth} data-testid="select-container">
            <StyledSelect
                onChange={({ target: { value } }) => onSelect(value)}
                data-testid="select"
                disabled={!options.length}
            >
                <>
                    <option value="" selected={!value}>
                        {placeholder}
                    </option>
                    {options.map((option) => (
                        <option
                            data-testid={option.label}
                            {...option}
                            key={option.value}
                            selected={value === option.value}
                        />
                    ))}
                </>
            </StyledSelect>
            <SelectArrow>&#8964;</SelectArrow>
        </SelectContainer>
    );
};
