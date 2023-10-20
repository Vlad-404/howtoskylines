import Sidenav from "../components/layout/Sidenav";
import Tipwindow from "../components/layout/Tipwindow";

let tip = Tipwindow;
let url = window.location.href;

function getLastParam(url) {
    let urlArray = [];
    
    let urlArray = url.split('/');
    let lastMember = urlArray.length - 1;
    let lastParam = urlArray[lastMember];

    // capitalizes the first letter to comply with React component formating
    tip = lastParam.charAt(0).toUpperCase() + lastParam.slice(1);

    return tip;
};

getLastParam(url);

function Tips(tip) {
    return(
        <article className="w-screen min-h-96 pt-16">
            <div className="flex flex-row">
                <Sidenav />
                {/* proposed routing */}
                <{tip} />
                {/*<Tipwindow /> */}
            </div>

        </article>
    )
};

export default Tips;
