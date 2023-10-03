function Cityentry() {
    return(
        <div className="px-5 prose prose-slate max-w-none dark:text-white">
            <h2 className="px-10 mb-10 dark:text-white">Connection to the highway</h2>
            <p class="text-justify">
                So you want to start a new city. You might have thought about how to organize it, where to put what or just wanted to throw random stuff in it to test them. In any case, the very first obstacle you encounter is how do you connect to the highway?
            </p>
            <h3 className="mt-5 mb-2 dark:text-white">A roundabout</h3>
            <p class="text-justify">
                This is the most common solution and it helps you quickly start a new city and get the ideas out there. Build a simple 2 way road, and the one way road will unlock. Now you can <a href="#" className="dark:text-white underline-white">build your own roundabout</a>. Depending on your city development, it will have to be replaced eventually, so leave plenty of space for an upgrade.
            </p>
            
            <h3 className="mt-5 mb-2 dark:text-white">Avenue</h3>
            <p class="text-justify">
                This is the simplest one. It evolves after your city has grown a bit. You can continue the highway exit with an avenue, but you will have to use 2 one way streets to connect the avenue to the highway exit. Minimum effort and you can make the avenue as long as you wish. This entrance will have to be replaced very soon, depending on your city demands and is prone to traffic issues. It will serve you a short time, but by then you will have enough money to upgrade it to something better.
            </p>
            
            <h3 class="mt-5 mb-2 dark:text-white">Interchange(M)</h3>
            <p class="text-justify">
                This one is only available to modded version of Skylines, or the ones that have everything unlocked. You can also build this with vanilla Skylines, but the highway is often outside of the buildable area. This costs the most out of the three options and is not recommended if you play with a budget. You can build a custom interchange of your own design or you can import something from the workshop. It would be good if you already had a general idea how your city will look like so you can build it right now and later focus on your city development.
            </p>

            <p className="text-justify border-t border-slate-300 mt-5 pt-2">
                All of these entrance have good and bad sides. The most important thing to know is that you can always change this. For that reason, it is good to leave some extra space for the entrance, because it's not easy to demolish that level 5 house or business that's in the way of progress.
            </p>
        </div>
    )
};

export default Cityentry;
