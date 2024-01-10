import { InlineContainer } from '../../component/App';
import { Button } from '../../component/Button';
import { Person } from '../../component/Person';
import { PersonList } from '../../component/PersonList';
import { Select } from '../../component/Select';
import { Spacing } from '../../component/Spacing';
import { Label, MainTitle, Paragraph, Title } from '../../component/Typograph';
import mockPersons from '../../mock';
import { LoadMoreContainer, Nav, NavContainer } from './styles';
interface Props {
    name: string;
    homeland: string;
    heigth: string;
    mass: string;
    gender: string;
}
export const Characters = () => {
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
                            options={[{ label: 'teste', value: 'value' }]}
                            placeholder="All"
                            onSelect={(v) => {
                                console.log(v);
                            }}
                            maxWidth={190}
                            value={undefined}
                        />
                    </InlineContainer>
                    <Button maxWidth={158} hideInMobile>
                        CLEAR ALL
                    </Button>
                </NavContainer>
            </Nav>

            <Spacing top={50} bottom={43} mobileTop={28} mobileBottom={28}>
                <Title>All Characters</Title>
            </Spacing>

            <PersonList>
                {mockPersons?.map((person: Props) => (
                    <Person {...person} key={person?.name} />
                ))}
            </PersonList>
            <LoadMoreContainer>
                <Spacing mobileRight={72} mobileLeft={72} fullWidth>
                    <Button maxWidth={486}>LOAD MORE</Button>
                </Spacing>
            </LoadMoreContainer>
        </>
    );
};
