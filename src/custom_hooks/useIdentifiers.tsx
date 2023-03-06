import { useEffect, useState } from "react";
import { Identifier } from "../types";

const useIdentifiers = (): [Identifier[] | undefined, Error | undefined] => {
  const [identifier, setIdentifier] = useState<Identifier[]>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchIdentifiers = async () => {
      try {
        const res = await fetch(`https://www.dnd5eapi.co/api/spells`);
        const data = await res.json();
        setIdentifier(data.results);
      } catch (error) {
        alert(`The spell cannot be loaded: ${error}`);
        setError(error as Error);
      }
    };
    fetchIdentifiers();
  }, []);

  return [identifier, error];
};

export default useIdentifiers;
