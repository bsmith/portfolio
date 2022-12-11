import StockReadyProject from './StockReadyProject';
import DummyProject from './DummyProject';

import './App.scss';

const Header = () => {
    return <header className="App-header">
        <h1>Benjamin Smith</h1>
    </header>
}

function App() {
    return (
        <div className="App">
            <Header />
            <section>
                <p>I am a junior software developer. ...</p>
            </section>
            <section>
                <header>
                    <h2>Portfolio</h2>
                </header>
                <StockReadyProject />
                <DummyProject type="group" />
                <DummyProject type="capstone" />
            </section>
        </div>
    );
}

export default App;
