import { useFavouriteSpells } from "../custom_hooks/useFavoriteSpells";
import NoFav from "../components/NoFav";

const FavoriteSpells = () => {
  const [favouriteSpells] = useFavouriteSpells();

  if (!favouriteSpells) return <NoFav />;

  return (
    <div className="p-6 max-w-sm mx-auto bg- rounded-xl shadow-lg flex items-center flex-col space-x-4 my-2 bg-white">
      <span className="text-lg font-bold">My favorite spells:</span>
      <span className="text-2xl gap-4 ">🧙🪄</span>
      <br />
      <ul className="list-disc">
        {favouriteSpells.map((spellName, index) => (
          <li key={index}>{spellName}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteSpells;
