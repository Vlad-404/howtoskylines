import Sidenav from "../components/layout/Sidenav";
import Tipwindow from "../components/layout/Tipwindow";

function Tips() {
    return(
        <article className="w-screen min-h-96 pt-16">
            <div className="flex flex-row">
                <Sidenav />
                <Tipwindow />
            </div>

        </article>
    )
};

export default Tips;
