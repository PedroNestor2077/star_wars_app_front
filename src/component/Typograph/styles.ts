import styled from 'styled-components';
import colors from '../colors';

interface Props {
    maxWidth?: number;
}

export const Typograph = styled.div<Props>`
    font-family: 'Helvetica Neue';
    max-width: ${(props) => props?.maxWidth && `${props?.maxWidth}px`};
`;

export const MainTitle = styled(Typograph)`
    font-size: 54px;
    font-style: normal;
    font-weight: 300;
    line-height: 64px;
    color: ${(props) => (props.color ? props.color : colors.grey1)};
`;

export const Title = styled(Typograph)`
    font-size: 34px;
    font-style: normal;
    font-weight: 300;
    line-height: 40px;
    color: ${(props) => (props.color ? props.color : colors.grey1)};
`;

export const Paragraph = styled(Typograph)`
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 0.917px;
    color: ${(props) => (props.color ? props.color : colors.grey2)};
`;

export const Label = styled(Typograph)`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${(props) => (props.color ? props.color : colors.grey2)};
`;
