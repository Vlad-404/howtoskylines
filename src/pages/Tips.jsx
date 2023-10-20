import Sidenav from "../components/layout/Sidenav";
import Tipwindow from "../components/layout/Tipwindow";

let tip = Tipwindow;
let urlArray = [];
let url = window.location.href;

let urlArray = url.split('/');
let lastMember = urlArray.length - 1;
let lastParam = urlArray[lastMember];

tip = lastParam.charAt(0).toUpperCase() + str.slice(1);

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
