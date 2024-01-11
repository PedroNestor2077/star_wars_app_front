import { App as StyledApp } from './component/App';
import './index.css';
import { Characters } from './page/Characters/Characters';

function App() {
    return (
        <StyledApp>
            <Characters />
        </StyledApp>
    );
}

export default App;
