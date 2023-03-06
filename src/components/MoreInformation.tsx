import { Link } from "react-router-dom";

const MoreInformationButton = ({
  url,
  text,
}: {
  url: string;
  text: string;
}) => {
  if (!url) return null;

  return (
    <Link className="font-medium" to={url}>
      {`ℹ️ ${text}`}
    </Link>
  );
};

export default MoreInformationButton;
