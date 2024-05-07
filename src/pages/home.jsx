import { useEffect } from "react";
import { GifState } from "../context/gif-context";
import Gif from "../components/Gif";

const Home = () => {
  const { gf, gifs, setGifs, filter, setFilter, favorites } = GifState();
  const fetchTrendingGIFs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      ratinf: "g",
    });
    setGifs(data);
  };
  useEffect(() => {
    fetchTrendingGIFs();
  }, [filter]);
  return (
    <div>
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif) => {
          return <Gif gif={gif} key={gif.title} />;
        })}
      </div>
    </div>
  );
};

export default Home;
