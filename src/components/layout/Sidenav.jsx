import {Link} from 'react-router-dom'


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
                    <Link to="/tips/cityentry">
                        - Connection to the Highway
                    </Link>
                </li>
                <li className="pb-2">
                    <Link to="/tips/startingbudget">
                        - Starting Budget
                    </Link>
                </li>
            </ul>
        </aside>
    )
};

export default Sidenav;
