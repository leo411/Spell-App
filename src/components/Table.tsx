import List from "./List";
import MoreInformationButton from "./MoreInformation";
import { DamageAtSlotLevel } from "../types";

const Table = ({
  name,
  url,
  damageAtSlotLevel,
}: {
  name: string;
  url: string;
  damageAtSlotLevel: DamageAtSlotLevel;
}) => {
  if (!name || !url || !damageAtSlotLevel) return null;

  return (
    <>
      <p className="text-center text-base font-bold">Damage</p>
      <table className="table-auto mb-6">
        <thead>
          <tr>
            <th>Damage Type</th>
            <th>Damage At Slot Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-cell text-center">{name || "🤷"}</td>
            <td>
              <List {...{ damageAtSlotLevel }} />
            </td>
            <td>
              <MoreInformationButton
                {...{ url, text: "More information about this damage type" }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
