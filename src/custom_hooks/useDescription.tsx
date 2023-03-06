import { useEffect, useState } from "react";

const useDescription = (
  type: "damage-types" | "magic-schools" | "subclasses",
  name?: string
): [string[] | undefined, Error | undefined] => {
  const [description, setDescription] = useState<string[]>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        let data;
        const res = await fetch(`https://www.dnd5eapi.co/api/${type}/${name}`);

        if (res.ok) {
          data = await res.json();
        } else {
          throw new Error(res.statusText);
        }
        setDescription(data.desc);
      } catch (error) {
        alert(`The description cannot be loaded: ${error}`);
        setError(error as Error);
      }
    };
    if (name) {
      fetchDescription();
    } else {
      setDescription(undefined);
      setError(undefined);
    }
  }, [name, type]);

  return [description, error];
};

export default useDescription;
