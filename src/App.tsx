import { InlineContainer, App as StyledApp } from './component/App';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';
import { Select } from './component/Select';
import { Spacing } from './component/Spacing';
import { Label, MainTitle, Paragraph, Title } from './component/Typograph';
import './index.css';
import mockPersons from './mock';

interface Props {
    name: string;
    homeland: string;
    heigth: string;
    mass: string;
    gender: string;
    image: string;
}

function App() {
    return (
        <StyledApp>
            <MainTitle>Star Wars Characters</MainTitle>

            <Spacing top={25} bottom={76}>
                <Paragraph maxWidth={934}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Paragraph>
            </Spacing>
            <InlineContainer>
                <Spacing right={12}>
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

            <Spacing top={50} bottom={43}>
                <Title>All Characters</Title>
            </Spacing>

            <PersonList>
                {mockPersons?.map((person: Props) => (
                    <Person {...person} key={person?.name} />
                ))}
            </PersonList>
        </StyledApp>
    );
}

export default App;
