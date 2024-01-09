import styled from 'styled-components';

interface SpacingProps {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}

export const Spacing = styled.div<SpacingProps>`
    margin-top: ${(props) => props?.top && `${props.top}px`};
    margin-bottom: ${(props) => props?.bottom && `${props.bottom}px`};
    margin-left: ${(props) => props?.left && `${props.left}px`};
    margin-right: ${(props) => props?.right && `${props.right}px`};
`;
