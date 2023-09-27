import Sidenav from "../components/layout/Sidenav";
import Tipwindow from "../components/layout/Tipwindow";

function Tips() {
    return(
        <article className="w-screen min-h-96">
            <div className="flex flex-row">
                <div className="w-1/4 border-r border-slate-300 px-3">
                    <Sidenav />
                </div>
                <div className="w-3/4 px-5">
                    <Tipwindow />
                </div>
            </div>

        </article>
    )
};

export default Tips;