import styled from 'styled-components';
import { Typograph } from '../Typograph';
import colors from '../colors';

export const PersonContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    width: 432px;
    height: auto;
`;

export const PersonImage = styled.img`
    width: 432px;
    height: 230px;
`;

export const PersonName = styled(Typograph)`
    color: ${colors.black};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 1px;
`;

export const PersonHomeland = styled(Typograph)`
    color: ${colors.black};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 1px;
`;

export const PersonInfo = styled(Typograph)`
    color: ${colors.grey3};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;
