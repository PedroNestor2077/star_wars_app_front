import { People } from '../../component/Person';
import { PlanetData } from '../planets/types';
import { PeopleData } from './types';

export const transformPerson = (
    person: PeopleData,
    planets: PlanetData[]
): People => {
    return {
        gender: person.gender,
        heigth: person.height,
        homeland:
            planets.find(({ url }) => url === person.homeworld)?.name ||
            'Unknown',
        mass: person.mass,
        name: person.name,
    };
};
