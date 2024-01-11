import styled from 'styled-components';
import { Typograph } from '../Typograph';
import colors from '../colors';
import { breakpoints } from '../breakpoints';
import { DESKTOP_IMAGE_URL, MOBILE_IMAGE_URL } from '../../constants';

export const PersonContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    width: 432px;
    height: auto;

    @media ${breakpoints.mobile} {
        flex-direction: row;
        align-items: flex-start;
    }
`;

export const PersonNameHomelandContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;

    /* @media ${breakpoints.mobile} {
        flex-direction: row;
        align-items: flex-start;
    } */
`;

export const PersonImage = styled.div`
    width: 432px;
    height: 230px;
    background-color: ${colors.grey2};
    border-radius: 2px;
    background:
        url(${DESKTOP_IMAGE_URL}),
        lightgray 0px -28.193px / 100% 124.515% no-repeat;

    @media ${breakpoints.mobile} {
        width: 115px;
        height: 130px;
        margin-right: 12px;

        background:
            url(${MOBILE_IMAGE_URL}),
            lightgray -63.08px 0px / 209.704% 100% no-repeat;
    }
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

    @media ${breakpoints.mobile} {
        display: none;
    }
`;
