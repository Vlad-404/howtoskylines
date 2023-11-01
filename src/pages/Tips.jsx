// import { useEffect, useState } from "react";

// Import components
import Sidenav from "../components/layout/Sidenav";
import Tipwindow from "../components/layout/Tipwindow";
import Cityentry from '../components/tips/Cityentry';
import StartingBudget from '../components/tips/StartingBudget';

function Tips() {
    let urlArray = [];
    let url = window.location.href;
    console.log(`URL is: ${url}`);
    
    urlArray = url.split('/');
    let lastMember = urlArray.length - 1;
    let endpoint = urlArray[lastMember];
    console.log(`Endpoint is: ${endpoint}`);

    switch(endpoint) {
        case 'cityentry':
            endpoint = <Cityentry />;
            break
            // return <Cityentry />;
        case 'startingbudget':
            endpoint = <StartingBudget />;
            break
            // return <StartingBudget />;
        default:
            endpoint = <Tipwindow />;
            break
            // return <Tipwindow />
    }

    return(
        <article className="w-screen min-h-96 pt-16">
            <div className="flex flex-row">
                <Sidenav />
                { endpoint }
            </div>

        </article>
    )
};

export default Tips;
