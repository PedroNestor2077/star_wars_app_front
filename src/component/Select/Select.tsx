import { SelectArrow, SelectContainer, Select as StyledSelect } from './styles';

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
