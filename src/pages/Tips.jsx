import Sidenav from "../components/layout/Sidenav";
import Tipwindow from "../components/layout/Tipwindow";

// let tip = Tipwindow;
// let url = window.location.href;
// let component;

// function getLastParam(url) {
//     let urlArray = [];
    
//     urlArray = url.split('/');
//     let lastMember = urlArray.length - 1;
//     let lastParam = urlArray[lastMember];

//     // capitalizes the first letter to comply with React component formatting
//     tip = lastParam.charAt(0).toUpperCase() + lastParam.slice(1);
//     component = `<${tip} />`

//     return tip;
// };

// getLastParam(url);

function Tips() {
    return(
        <article className="w-screen min-h-96 pt-16">
            <div className="flex flex-row">
                <Sidenav />
                {/* proposed routing */}
                {/* {component} */}
                <Tipwindow />
            </div>

        </article>
    )
};

export default Tips;
