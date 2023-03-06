import { useParams } from "react-router-dom";

const ClassDescriptionCard = () => {
  const { name } = useParams();

  if (!name) {
    return <div>Loading....</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex items-center flex-col space-x-4 mb-3">
      <span className="mb-2 font-medium capitalize">{name}</span>
      <p className="text-center text-orange-400">
        Sorry I'm unable to display the information related to this class. I
        wish I had more time to write this component 😭
      </p>
    </div>
  );
};

export default ClassDescriptionCard;
