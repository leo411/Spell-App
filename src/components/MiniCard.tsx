import MoreInformationButton from "./MoreInformation";

const MiniCard = ({
  name,
  url,
  text,
}: {
  name: string;
  url: string;
  text: string;
}) => (
  <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center flex-col space-x-4 mb-3 gap-4">
    <span data-testid="miniCardName" className="mb-2 font-medium italic">
      {name}
    </span>
    <MoreInformationButton {...{ url, text }} />
  </div>
);

export default MiniCard;
