import styled from 'styled-components';
import colors from '../colors';
import { breakpoints } from '../breakpoints';

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

    @media ${breakpoints.mobile} {
        font-size: 32px;
        line-height: 40px;
    }
`;

export const Title = styled(Typograph)`
    font-size: 34px;
    font-style: normal;
    font-weight: 300;
    line-height: 40px;
    color: ${(props) => (props.color ? props.color : colors.grey1)};

    @media ${breakpoints.mobile} {
        font-size: 32px;
    }
`;

export const Paragraph = styled(Typograph)`
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 0.917px;
    color: ${(props) => (props.color ? props.color : colors.grey2)};

    @media ${breakpoints.mobile} {
        font-size: 16px;
        line-height: 24px;
    }
`;

export const Label = styled(Typograph)`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    min-width: 64px;
    line-height: normal;
    color: ${(props) => (props.color ? props.color : colors.grey2)};
`;
