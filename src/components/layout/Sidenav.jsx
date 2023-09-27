function Sidenav() {
    return (
        <div>
            <h1 className="mb-2 font-bold text-xl">Navigation</h1>
            <p className="text-sm pb-3">
                Use the links below to quickly jump from one topic to another:
            </p>
            <ul>
                <li className="pb-2">
                    <a href="/tips/cityentry">
                        - Connection to the Highway
                    </a>
                </li>
                <li className="pb-2">
                    <a href="/tips/cityentry">
                        - Starting Budget
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Sidenav;