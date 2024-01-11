import { Spacing } from '../Spacing';
import {
    PersonImage,
    PersonContainer,
    PersonHomeland,
    PersonInfo,
    PersonName,
    PersonNameHomelandContainer,
} from './styles';

export interface People {
    name: string;
    homeland: string;
    heigth: string;
    mass: string;
    gender: string;
}

/**
 * @typedef {Object} People
 * @property {string} name - The name of the person.
 * @property {string} homeland - The homeland of the person.
 * @property {string} heigth - The height of the person.
 * @property {string} mass - The mass of the person.
 * @property {string} gender - The gender of the person.
 */

/**
 * Functional component for rendering information about a person.
 *
 * @component
 * @param {People} props - The properties of the person.
 * @returns {JSX.Element} - The JSX element representing the person.
 */

export const People = ({ name, homeland, heigth, mass, gender }: People) => {
    return (
        <PersonContainer className="person">
            <PersonImage />
            <PersonNameHomelandContainer>
                <Spacing
                    top={16}
                    data-testid="spacing-person-name"
                    mobileTop={0}
                >
                    <PersonName>{name}</PersonName>
                </Spacing>
                <Spacing top={4} data-testid="spacing-person-homeland">
                    <PersonHomeland>{homeland}</PersonHomeland>
                </Spacing>
            </PersonNameHomelandContainer>

            <Spacing top={12} data-testid="spacing-person-info">
                <PersonInfo>HEIGTH • {heigth}</PersonInfo>
                <PersonInfo>MASS • {mass}</PersonInfo>
                <PersonInfo>GENDER • {gender}</PersonInfo>
            </Spacing>
        </PersonContainer>
    );
};
