import MiniCard from "../components/MiniCard";
import Table from "../components/Table";
import { useParams } from "react-router-dom";
import TopTable from "../components/TopTable";
import useSpell from "../custom_hooks/useSpell";
import ErrorView from "../components/ErrorView";

const Spell = () => {
  const { index } = useParams();
  const [spell, error] = useSpell(index);

  if (!spell) {
    return <div>Loading....</div>;
  }

  if (error) return <ErrorView />;

  return (
    <div className="container mx-auto">
      <div className="p-6 max-w-7xl mx-auto bg-white rounded-xl shadow-lg flex flex-col space-x-4 my-2">
        <p className="text-center text-base font-bold mb-6">{spell.name}</p>
        <p className="text-center italic mb-6">{spell.desc}</p>
        <p className="text-center italic mb-6">{spell.higher_level}</p>
        <TopTable
          {...{
            range: spell.range,
            components: spell.components,
            material: spell.material,
            ritual: spell.ritual,
            duration: spell.duration,
            concentration: spell.concentration,
            casting_time: spell.casting_time,
            level: spell.level,
            attack_type: spell.attack_type,
          }}
        />
        {!!spell.damage && (
          <Table
            {...{
              name: spell.damage.damage_type.name,
              url: spell.damage.damage_type.url,
              damageAtSlotLevel: spell.damage.damage_at_slot_level,
            }}
          />
        )}
        <div className="flex flex-col mb-4">
          <span className="text-center text-base font-bold">School</span>
          <MiniCard
            {...{
              name: spell.school.name,
              url: spell.school.url,
              text: "More about this school",
            }}
          />
        </div>
        <div className="flex flex-col mb-4">
          <span className="text-center text-base font-bold">Classes</span>
          {spell.classes.map(({ name, url }, index) => (
            <MiniCard
              key={index}
              {...{ name, url, text: "More about this class" }}
            />
          ))}
        </div>
        <div className="flex flex-col mb-4">
          <span className="text-center text-base font-bold">SubClasses</span>
          {spell.subclasses.map(({ name, url }, index) => (
            <MiniCard
              key={index}
              {...{ name, url, text: "More about this subclass" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spell;
