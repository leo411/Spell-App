export interface Identifier {
  index: string;
  name: string;
  url: string;
}
export interface IdentifierWithDescription extends Identifier {
  desc: string[];
}

export interface SubClassDescStructure {
  index: string;
  class: Identifier;
  name: string;
  subclass_flavor: string;
  desc: string[];
  subclass_levels: string;
  url: string;
  spells: unknown;
}

export interface DamageAtSlotLevel {
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
}
export interface SpellInfoStructure extends Identifier {
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: {
    damage_type: Identifier;
    damage_at_slot_level: DamageAtSlotLevel;
  };
  school: Identifier;
  classes: Identifier[];
  subclasses: Identifier[];
}
