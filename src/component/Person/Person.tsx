import { Spacing } from '../Spacing';
import {
    PersonImage,
    PersonContainer,
    PersonHomeland,
    PersonInfo,
    PersonName,
} from './styles';

interface Props {
    name: string;
    homeland: string;
    heigth: string;
    mass: string;
    gender: string;
    image: string;
}

export const Person = ({
    name,
    homeland,
    heigth,
    mass,
    gender,
    image,
}: Props) => {
    return (
        <PersonContainer>
            <PersonImage src={image} alt="Person Image" />
            <Spacing top={16} data-testid="spacing-person-name">
                <PersonName>{name}</PersonName>
            </Spacing>
            <Spacing top={4} data-testid="spacing-person-homeland">
                <PersonHomeland>{homeland}</PersonHomeland>
            </Spacing>
            <Spacing top={12} data-testid="spacing-person-info">
                <PersonInfo>HEIGTH • {heigth}</PersonInfo>
                <PersonInfo>MASS • {mass}</PersonInfo>
                <PersonInfo>GENDER • {gender}</PersonInfo>
            </Spacing>
        </PersonContainer>
    );
};
