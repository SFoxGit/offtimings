const Melee_TempDamage = 107.0897
const Melee_HealSelf = 120.4759
const Melee_Ones = 1

const procs = {
  "Accurate Defense Debuff": [{ name: "Shield Breaker", ppm: 3.5, damage: (0.67 * Melee_TempDamage), damageType: "Lethal damage" }],
  "Blaster Archetype Sets": [{ name: "Superior Blasters Wrath", ppm: 5, damage: (1.0 * Melee_TempDamage), damageType: "Fire damage", recharge: 23.2 }],
  "Corruptor Archetype Sets": [{ name: "Superior Malice of the Corruptor", ppm: 5, damage: (1.0 * Melee_TempDamage), damageType: "Negative Energy damage", recharge: 23.2 }],
  "Defense Debuff": [{ name: "Touch of Lady Grey", ppm: 3.5, damage: (0.67 * Melee_TempDamage), damageType: "Negative Energy damage" }],
  "Ranged Damage": [{ name: "Gladiators Javelin", ppm: 3.5, damage: (1.0 * Melee_TempDamage), damageType: "Toxic damage" }, { name: "Apocalypse", ppm: 4.5, damage: (1.0 * Melee_TempDamage), damageType: "Negative Energy damage" }],
  "Universal Damage Sets": [],
  "Knockback": [{ name: "Explosive Strike", ppm: 3.5, damage: (0.67 * Melee_TempDamage), damageType: "Smashing damage" }],
  "Sniper Attacks": [{ name: "Sting of the Manticore", ppm: 3.5, damage: (0.67 * Melee_TempDamage), damageType: "Toxic damage" }],
  "Stuns": [],
  "Accurate Healing": [{ name: "Touch of the Nictus", ppm: 3.5, damage: (0.67 * Melee_TempDamage), damageType: "Negative Energy damage" }],
  "Accurate To-Hit Debuff": [{ name: "Cloud Senses", ppm: 3.5, damage: (0.67 * Melee_TempDamage), damageType: "Negative Energy damage" }],
  "Healing": [],
  "To Hit Debuff": [],
  "Holds": [{ name: "Neuronic Shutdown", ppm: 3.5, damage: (0.67 * Melee_TempDamage), damageType: "Psionic damage" }, { name: "Ghost Widows Embrace", ppm: 3.5, damage: (0.67 * Melee_TempDamage), damageType: "Psionic damage" }, { name: "Gladiators Net", ppm: 3.5, damage: (1.0 * Melee_TempDamage), damageType: "Lethal damage" }, { name: "Unbreakable Constraint", ppm: 4.5, damage: (1.0 * Melee_TempDamage), damageType: "Smashing damage" }],
  "Slow Movement": [{ name: "Impeded Swiftness", ppm: 3.5, damage: (0.67 * Melee_TempDamage), damageType: "Smashing damage" }],
  "Ranged AoE Damage": [{ name: "Positrons Blast", ppm: 3.5, damage: (0.67 * Melee_TempDamage), damageType: "Energy damage" }, { name: "Javelin Volley", ppm: 3.5, damage: (1.0 * Melee_TempDamage), damageType: "Lethal damage" }, { name: "Bombardment", ppm: 3.5, damage: (0.67 * Melee_TempDamage), damageType: "Fire damage" }, { name: "Annihilation", ppm: 3, damage: (-0.125 * Melee_Ones), damageType: "Damage Resistance" }],
  "Endurance Modification": [{ name: "Power Transfer", ppm: 3, damage: (0.5 * Melee_HealSelf), damageType: "heal damage" }],
  "Sleep": [{ name: "Fortunata Hypnosis", ppm: 4.5, damage: (5.336 * Melee_Ones), damageType: "Placate damage" }, { name: "Call of the Sandman", ppm: 2, damage: (1.5 * Melee_HealSelf), damageType: "heal damage" }],
  "Immobilize": [{ name: "Trap of the Hunter", ppm: 3.5, damage: (0.67 * Melee_TempDamage), damageType: "Lethal damage" }],
  "Dominator Archetype Sets": [],
  "Controller Archetype Sets": [{ name: "Superior Will of the Controller", ppm: 5, damage: (1.0 * Melee_TempDamage), damageType: "Psionic damage", recharge: 23.2 }],
  "Defense Sets": [],
  "To Hit Buff": [],
  "Defender Archetype Sets": [],
  "Resist Damage": [],
}

export default procs