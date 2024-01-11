import styled from 'styled-components';
import colors from '../../component/colors';
import { breakpoints } from '../../component/breakpoints';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    width: calc(100vw - 50px);
    padding-top: 26px;
    padding-bottom: 26px;
    padding-left: 50px;
    margin-left: -50px;
    border-top: 1px solid ${colors.grey5};
    border-bottom: 1px solid ${colors.grey5};

    @media ${breakpoints.mobile} {
        padding-left: 25px;
        margin-left: -25px;
        width: calc(100vw - 25px);
        padding-top: 16px;
        padding-bottom: 16px;
        border-bottom: none;
    }
`;

export const NavContainer = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    padding-right: 50px;

    @media ${breakpoints.mobile} {
        padding-right: 25px;
    }
`;

export const LoadMoreContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 110px;

    @media ${breakpoints.mobile} {
    }
`;
