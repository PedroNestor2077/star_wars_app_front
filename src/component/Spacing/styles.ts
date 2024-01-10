import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

interface SpacingProps {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    mobileTop?: number;
    mobileBottom?: number;
    mobileLeft?: number;
    mobileRight?: number;
    fullWidth?: boolean;
}

export const Spacing = styled.div<SpacingProps>`
    margin-top: ${(props) => props?.top && `${props.top}px`};
    margin-bottom: ${(props) => props?.bottom && `${props.bottom}px`};
    margin-left: ${(props) => props?.left && `${props.left}px`};
    margin-right: ${(props) => props?.right && `${props.right}px`};
    ${(props) =>
        props?.fullWidth && `width:100%;display:flex;justify-content:center;`};

    @media ${breakpoints.mobile} {
        margin-top: ${(props) => props?.mobileTop && `${props.mobileTop}px`};
        margin-bottom: ${(props) =>
            props?.mobileBottom && `${props.mobileBottom}px`};
        margin-left: ${(props) => props?.mobileLeft && `${props.mobileLeft}px`};
        margin-right: ${(props) =>
            props?.mobileRight && `${props.mobileRight}px`};
    }
`;
