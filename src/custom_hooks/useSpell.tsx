import { useEffect, useState } from "react";
import { SpellInfoStructure } from "../types";

const useSpell = (
  index?: string
): [SpellInfoStructure | undefined, Error | undefined] => {
  const [spell, setSpell] = useState<SpellInfoStructure>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        let data;
        const res = await fetch(`https://www.dnd5eapi.co/api/spells/${index}`);
        if (res.ok) {
          data = await res.json();
        } else {
          throw new Error(res.statusText);
        }
        setSpell(data);
      } catch (error) {
        alert(`The spells cannot be loaded: ${error}`);
        setError(error as Error);
      }
    };
    if (index) {
      fetchSpells();
    } else {
      setSpell(undefined);
      setError(undefined);
    }
  }, [index]);

  return [spell, error];
};

export default useSpell;
