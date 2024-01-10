import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

export const App = styled.div`
    min-height: 100vh;
    min-width: calc(100vw - 100px);
    max-width: 100vw;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-left: 50px;
    margin-right: 50px;

    @media ${breakpoints.mobile} {
        margin-left: 25px;
        margin-right: 25px;
    }
`;

export const InlineContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    @media ${breakpoints.mobile} {
        justify-content: space-between;
    }
`;
