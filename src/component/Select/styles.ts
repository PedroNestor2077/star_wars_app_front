import styled from 'styled-components';
import colors from '../colors';

interface Props {
    maxWidth?: number;
}
export const Select = styled.select<Props>`
    border: none;
    background-color: white;
    border-bottom: 1px solid ${colors.grey5};
    width: 100%;
    color: ${colors.blue2};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    font-family: 'Helvetica Neue';
    -moz-appearance: none;
    -webkit-appearance: none;
`;

export const SelectContainer = styled.div<Props>`
    max-width: ${(props) => props?.maxWidth && `${props?.maxWidth}px`};
    position: relative;
    width: 100%;
`;

export const SelectArrow = styled.p`
    font-size: 16px;
    color: ${colors.grey6};
    position: absolute;
    top: 3px;
    right: 1px;
`;
