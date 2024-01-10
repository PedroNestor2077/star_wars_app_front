import { Spacing } from '../Spacing';
import {
    PersonImage,
    PersonContainer,
    PersonHomeland,
    PersonInfo,
    PersonName,
    PersonNameHomelandContainer,
} from './styles';

interface Props {
    name: string;
    homeland: string;
    heigth: string;
    mass: string;
    gender: string;
}

export const Person = ({ name, homeland, heigth, mass, gender }: Props) => {
    return (
        <PersonContainer>
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
