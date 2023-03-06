import { DamageAtSlotLevel } from "../types";

const List = ({
  damageAtSlotLevel,
}: {
  damageAtSlotLevel: DamageAtSlotLevel;
}) => {
  if (!damageAtSlotLevel) return <span>Sorry we haven't retrieved any</span>;
  return (
    <div className="flex flex-row justify-center">
      <span data-testid="damage2">{`💥${damageAtSlotLevel["2"]} 💥`}</span>
      <span data-testid="damage3">{`${damageAtSlotLevel["3"]} 💥`} </span>
      <span data-testid="damage4">{`${damageAtSlotLevel["4"]} 💥`}</span>
      <span data-testid="damage5">{`${damageAtSlotLevel["5"]} 💥`}</span>
      <span data-testid="damage6">{`${damageAtSlotLevel["6"]} 💥`}</span>
      <span data-testid="damage7">{`${damageAtSlotLevel["7"]} 💥`}</span>
      <span data-testid="damage8">{`${damageAtSlotLevel["8"]} 💥`}</span>
      <span data-testid="damage9">{`${damageAtSlotLevel["9"]} `}</span>
    </div>
  );
};

export default List;
