import { People } from '../../component/Person';

export type PeopleData = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
};

export type PeopleResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PeopleData[];
};

export type PeopleDataResult = {
    data: People[];
    nextUrl: string | null;
};
