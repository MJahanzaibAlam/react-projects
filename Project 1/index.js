function Header() {
    return (
        <header>
            <nav>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2023 Alam development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited for React</h1>
            <ol>
                <li>First frontend framework</li>
                <li>Not bad</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, $('#root')[0])