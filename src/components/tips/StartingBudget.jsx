import Sidenav from "../layout/Sidenav";

function StartingBudget() {
    return(
        <article className="w-screen min-h-96 pt-16">
            <div className="flex flex-row">
                <div className="w-1/4 border-r border-slate-300 px-3">
                    <Sidenav />
                </div>
                <div className="w-3/4 px-5">
                    <div className="px-5 prose max-w-none text-black dark:text-white">
                        <p>This is where the budget text is coming</p>
                    </div>
                </div>
            </div>
        </article>


        
    )
};

export default StartingBudget;
