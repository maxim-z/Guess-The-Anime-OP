import { useFilterContext } from "@components/ContextProviders/FilterContext";
import Dropdown from "@components/MainContent/DropDown/DropDown";
import { type SongFilterType, type SongType } from "@types";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

function Dev() {
    const { filter } = useFilterContext();
    const [page, setPage] = useState(1);
    const [songs, setSongs] = useState<SongType[]>([]);
    const devCategories : SongFilterType[] = [
                                            "id",
                                            "rank",
                                            "yt_viewcount",
                                            "score",
                                            "eng_title",
                                            "def_title",
                                            "song_title",
                                            "song_artist",
                                            "anime_id",
                                            ];

    // what base to fetch with
    const API_BASE = import.meta.env.VITE_API_BASE ?? "http://localhost:8080";

    // grab the song details with the fast api
    const fetchPage = (page: number) => {
        if (!page) {
            console.log(`Page ${page} with ${filter} does not exist`);
            return;
        }
        fetch(`${API_BASE}/page?pageNum=${page}&filter=${filter}`)
            .then(async (res) => {
                // const text = await res.text();
                // console.log("Fetch response text:", text);
                if (!res.ok) {
                    console.log(`${res.status}: Error fetching song ${page}`);
                    throw new Error(`Error fetching song ${page}: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setSongs(data))
            .catch((err) => console.error("Fetch error:", err));
    }

    useEffect(() => {
        fetchPage(page);
    }, [page, filter]);

    return (
        <div className="flex flex-col items-center w-[100%]">
            <Dropdown />
            <div className="flex flex-col">
                <h1>Page Number: {page}</h1>
                <div className="flex gap-4">
                    <button className="bg-slate-500" onClick={() => setPage((prev) => prev-1 <= 0 ? prev : prev-1)}>Prev</button>
                    <button className="bg-slate-500" onClick={() => setPage((prev) => prev+1 >= 100 ? prev : prev+1)}>Next</button>
                </div>
            </div>
            {[...songs].map((song) => {
              return (
                <div className="flex gap-8 w-[100%] h-[300px] md:h-[360px]">
                    <img 
                        className="aspect-[2/3] max-h-[300px]" 
                        src={song?.img_url} />
                    <div className="flex flex-col w-[350px]">
                        {song && devCategories.map((atr) => {
                            return (
                                <div>{atr}: {song[atr]}</div>
                            )
                        })}
                    </div>
                    <div className='w-[360px] h-[240px] md:w-[640px] md:h-[360px]'>
                        <YouTube
                            videoId={song?.yt_video_id}
                            opts={{
                                width: '360',
                                height: '240',
                                playerVars: {
                                    autoplay: 0,
                                    controls: 1,
                                    modestbranding: 1,
                                    rel: 0,
                                    enablejsapi: 1,
                                    playsinline: 1,
                                },
                            }}
                        />
                    </div>
                </div>
              )  
            })}
            <div className="flex flex-col h-[200px]">
                <h1>Page Number: {page}</h1>
                <div className="flex gap-4">
                    <button className="bg-slate-500" onClick={() => setPage((prev) => prev-1 <= 0 ? prev : prev-1)}>Prev</button>
                    <button className="bg-slate-500" onClick={() => setPage((prev) => prev+1 >= 100 ? prev : prev+1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Dev