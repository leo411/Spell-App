import { useParams } from "react-router-dom";
import useDescription from "../custom_hooks/useDescription";

import ErrorView from "./ErrorView";

const DescriptionCard = ({
  type,
}: {
  type: "damage-types" | "magic-schools" | "subclasses";
}) => {
  const { name } = useParams();
  const [description, error] = useDescription(type, name);

  if (!description) {
    return <div data-testid="loading">Loading....</div>;
  }

  if (error) return <ErrorView />;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex items-center flex-col space-x-4 mb-3">
      <span className="mb-2 font-medium capitalize">{name}</span>
      <p className="text-center italic ">{description}</p>
    </div>
  );
};

export default DescriptionCard;
