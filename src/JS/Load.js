import logo from './platzi.webp';
function Load(){
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edita el archivo <code>src/App.js</code> y guarda para recargar.
            </p>
            <a className="App-link"href="https://platzi.com/reactjs"
                target="_blank" rel="noopener noreferrer">
            Learn React
            </a>
        </header>
    )
}

export {Load}