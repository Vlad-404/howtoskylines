function Sidenav() {
    return (
        <aside  className="w-1/4 xl:pl-[10rem] border-r border-slate-300 px-3">
            <h1 className="mb-2 font-bold text-xl">
                <a href="/tips">Navigation</a>
            </h1>
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
                    <a href="/tips/startingbudget">
                        - Starting Budget
                    </a>
                </li>
            </ul>
        </aside>
    )
};

export default Sidenav;
