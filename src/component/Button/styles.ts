import styled from 'styled-components';
import colors from '../colors';

interface Props {
    maxWidth?: number;
    fontSize?: number;
}

export const Button = styled.button<Props>`
    max-width: ${(props) => props?.maxWidth && `${props?.maxWidth}px`};
    font-size: ${(props) =>
        props?.fontSize ? `${props?.fontSize}px` : '14px'};
    width: 100%;
    cursor: pointer;
    text-align: center;
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: ${colors.blue1};
    background-color: white;
    border: 1px solid ${colors.blue1};

    &:hover {
        color: white;
        background-color: ${colors.blue1};
        border: 1px solid white;
    }

    &:disabled {
        color: ${colors.grey4};
        border: 1px solid ${colors.grey4};
        pointer-events: none;
    }
`;
