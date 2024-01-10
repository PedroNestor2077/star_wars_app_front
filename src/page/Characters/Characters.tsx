import { useEffect, useState } from 'react';
import { InlineContainer } from '../../component/App';
import { Button } from '../../component/Button';
import { PeopleListContainer } from '../../component/PersonList';
import { Select } from '../../component/Select';
import { Spacing } from '../../component/Spacing';
import { Label, MainTitle, Paragraph, Title } from '../../component/Typograph';
import { PEOPLE_URL, PLANETS_URL } from '../../constants';
import { LoadMoreContainer, Nav, NavContainer } from './styles';
import PeopleApi from '../../service/people/people.service';
import { People } from '../../component/Person';
import { PlanetData } from '../../service/planets/types';
import PlanetsApi from '../../service/planets/planets.service';
import { SwapiGateway } from '../../gateway/swapi/swapi.gateway';

type Filter = string | null;

export const Characters = () => {
    const [filter, setFilter] = useState<Filter>(null);
    const [peopleUrl, setPeopleUrl] = useState<string | null>(PEOPLE_URL);
    const [people, setPeople] = useState<People[]>([]);
    const [planets, setPlanets] = useState<PlanetData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const _swapiGateway = new SwapiGateway();
    const peopleService = new PeopleApi(_swapiGateway);
    const planetsService = new PlanetsApi(_swapiGateway);

    const getPlanets = async (url: string) => {
        setIsLoading(true);
        const result = await planetsService.getPlanets(url);
        setPlanets(result);
    };

    const getPeoples = async (url: string) => {
        setIsLoading(true);
        const result = await peopleService.getPeople(url, planets);
        setPeopleUrl(result?.nextUrl || null);
        setPeople(result.data);
        setIsLoading(false);
    };

    const filterPeople = (people: People[], filter: Filter) => {
        if (!filter) return people;

        const filteredData = people.filter(
            ({ homeland }) => homeland === filter
        );
        return filteredData;
    };

    const handleLoadMore = async () => {
        setIsLoading(true);
        if (!peopleUrl || !planets.length) return;
        const result = await peopleService.getPeople(peopleUrl, planets);
        setPeopleUrl(result?.nextUrl || null);
        setPeople([...people, ...result.data]);
        setIsLoading(false);
    };

    const hasResults = !(!filterPeople(people, filter)?.length && !isLoading);

    useEffect(() => {
        if (!planets.length) return;
        getPeoples(peopleUrl || PEOPLE_URL);
    }, [planets]);

    useEffect(() => {
        getPlanets(PLANETS_URL);
    }, []);

    return (
        <>
            <MainTitle>Star Wars Characters</MainTitle>
            <Spacing top={25} mobileTop={10} bottom={50} mobileBottom={28}>
                <Paragraph maxWidth={934}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Paragraph>
            </Spacing>

            <Nav>
                <NavContainer>
                    <InlineContainer>
                        <Spacing right={10}>
                            <Label>Filter By:</Label>
                        </Spacing>
                        <Select
                            options={planets.map(({ name }) => ({
                                label: name,
                                value: name,
                            }))}
                            placeholder="All"
                            onSelect={setFilter}
                            maxWidth={190}
                            value={filter}
                        />
                    </InlineContainer>
                    <Button
                        maxWidth={158}
                        hideInMobile
                        onClick={() => setFilter(null)}
                        disabled={!filter}
                    >
                        CLEAR ALL
                    </Button>
                </NavContainer>
            </Nav>

            <Spacing top={50} bottom={43} mobileTop={28} mobileBottom={28}>
                <Title>All Characters</Title>
            </Spacing>
            <>
                {hasResults && (
                    <PeopleListContainer>
                        {filterPeople(people, filter)?.map((people: People) => (
                            <People {...people} key={people.name} />
                        ))}
                    </PeopleListContainer>
                )}
                {!hasResults && <Label>No Results</Label>}
            </>

            <LoadMoreContainer>
                <Spacing mobileRight={72} mobileLeft={72} fullWidth>
                    {!isLoading && (
                        <Button
                            maxWidth={486}
                            onClick={handleLoadMore}
                            disabled={!peopleUrl}
                        >
                            LOAD MORE
                        </Button>
                    )}
                    {isLoading && <Label>LOADING...</Label>}
                </Spacing>
            </LoadMoreContainer>
        </>
    );
};
