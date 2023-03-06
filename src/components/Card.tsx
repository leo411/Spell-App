import { Link } from "react-router-dom";
import { useFavouriteSpells } from "../custom_hooks/useFavoriteSpells";
import { Identifier } from "../types";

const Card: React.FC<Pick<Identifier, "name" | "index">> = ({
  name,
  index,
}) => {
  const [favouriteSpells, toggleFavouriteSpell] = useFavouriteSpells();

  return (
    <div className="p-6 max-w-sm w-full rounded-xl shadow-lg flex items-center justify-between space-x-4 my-2 bg-white drop-in-animation">
      <div className="flex-grow flex justify-center flex-col">
        <div className="shrink-0">
          <img className="h-12 w-12" src="./magic-wand.png" alt="magic-wand" />
        </div>
        <div className="flex flex-col gap-4">
          <span
            data-testid="spell-name"
            className="text-base font-medium text-black"
          >
            {name}
          </span>
          <Link
            className="text-sm underline underline-offset-2 italic text-slate-500"
            to={`/spells/${index}`}
          >
            More information
          </Link>
        </div>
      </div>
      <div className="flex">
        <button onClick={() => toggleFavouriteSpell(name)}>
          {favouriteSpells.includes(name) ? (
            <img className="h-7 w-7" src="./yellow-star.png" alt="star" />
          ) : (
            <img className="h-7 w-7" src="./star-icon.png" alt="star" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
