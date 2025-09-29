function About() {

    return (
        <div className="grid md:grid-cols-2 text-[#351f23]
                        bg-gradient-to-b to-[rgba(224,208,234,0.9)] from-[rgba(247,200,210,0.9)]">
            <h2 className="col-span-6 col-start-3 text-2xl md:text-3xl text-center">
                Welcome to Guess the Anime Opening!!!
            </h2> 
            <span className="row-start-2 col-start-2 col-span-2 text-left">Yahoo, I'll be your humbwle guide today!</span>
            <span className="row-start-2 col-start-5 col-span-5 row-span-3">
                How this works: There are two main modes guessing the Openings and the Ending songs.
                In each mode there are filters which make the guessing order of songs different.
                There is a filter, Top 1000 By Anime Score, that sorts the song order based on the ratings an Anime received on MAL.
                The other filter, Top 1000 By Song Viewcount, sorts the song order based on the number of views it has accumulated on YT.

            </span>
        </div>
        // <div className="grid md:grid-cols-2 gap-6 text-black">
        //     <div className="p-4 bg-white shadow rounded-2xl">
        //         <h3 className="text-xl font-semibold mb-2">By Anime Score</h3>
        //         <p>Sort songs based on anime ratings on MAL.</p>
        //     </div>
        //     <div className="p-4 bg-white shadow rounded-2xl">
        //         <h3 className="text-xl font-semibold mb-2">By Song Viewcount</h3>
        //         <p>Sort songs based on YouTube popularity.</p>
        //     </div>
        // </div>
    )
}

export default About