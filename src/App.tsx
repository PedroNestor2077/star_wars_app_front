import { App as StyledApp } from './component/App';
import { Person } from './component/Person';
import { imageUrl } from './constants';
import './index.css';

function App() {
    return (
        <StyledApp>
            <Person
                name="Luke Skywalker"
                homeland="Tatooine"
                gender="Male"
                heigth="172"
                mass="77"
                image={imageUrl}
            />
        </StyledApp>
    );
}

export default App;
