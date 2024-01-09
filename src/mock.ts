import { imageUrl } from './constants';

interface Props {
    name: string;
    homeland: string;
    heigth: string;
    mass: string;
    gender: string;
    image: string;
}

const generateMockPerson = (index: number): Props => ({
    name: `Person ${index + 1}`,
    homeland: `Homeland ${index + 1}`,
    heigth: `${160 + index} cm`,
    mass: `${60 + index} kg`,
    gender: index % 2 === 0 ? 'Male' : 'Female',
    image: imageUrl,
});

const mockPersons: Props[] = Array.from({ length: 10 }, (_, index) =>
    generateMockPerson(index)
);

export default mockPersons;
