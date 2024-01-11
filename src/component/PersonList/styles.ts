import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

export const PeopleListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    row-gap: 110px;
    height: auto;

    @media ${breakpoints.mobile} {
        row-gap: 46px;
    }
`;
