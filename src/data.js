const attacks = [
  ['Burst', 8, 8, 0.2664, 999999999, 30, 32, 1.1988, 'AssaultRiffle', 90, 0.266, -0.932, 'primary', ['blaster', 'corruptor', 'defender'], 4.0, 0.4159, [
    "Accurate Defense Debuff",
    "Blaster Archetype Sets",
    "Defense Debuff",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Slug', 32, 32, 1.0656, 999999999, 50, 52, 1.8648, 'AssaultRiffle', 100, 1.066, -0.799, 'primary', ['blaster', 'corruptor', 'defender'], 8.0, 1.8892, [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['SniperRifle', 50, 52, 1.7316, 999999999, 45, 48, 1.7316, 'AssaultRiffle', 80, 1.732, 0.000, 'primary', ['blaster', 'corruptor', 'defender']],
  ['SnapShot', 22, 24, 0.7992, 300, 30, 32, 1.1988, 'Archery', 80, 1.099, -0.100, 'primary', ['blaster', 'corruptor', 'defender']],
  ['AimedShot', 24, 24, 0.7992, 300, 50, 52, 1.8648, 'Archery', 80, 1.099, -0.766, 'primary', ['blaster', 'corruptor', 'defender']],
  ['RangedShot', 24, 24, 0.7992, 300, 50, 52, 1.8648, 'Archery', 80, 1.099, -0.766, 'primary', ['blaster', 'corruptor', 'defender']],
  ['BlazingArrow', 48, 48, 1.5984, 300, 55, 56, 1.998, 'Archery', 80, 1.898, -0.100, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Disintegrate', 29, 32, 1.0656, 999999999, 57, 60, 2.1312, 'Beam', 80, 1.066, -1.066, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Lancer', 23, 24, 0.7992, 999999999, 57, 60, 2.1312, 'Beam', 80, 0.799, -1.332, 'primary', ['blaster', 'corruptor', 'defender']],
  ['SingleShot', 13, 16, 0.5328, 105, 30, 32, 1.1988, 'Beam', 80, 1.390, 0.191, 'primary', ['blaster', 'corruptor', 'defender']],
  ['ChargedShot', 29, 32, 1.0656, 155, 50, 52, 1.8648, 'Beam', 80, 1.646, -0.219, 'primary', ['blaster', 'corruptor', 'defender']],
  ['PRay', 29, 32, 1.0656, 60, 50, 52, 1.8648, 'Beam', 80, 2.566, 0.701, 'primary', ['blaster', 'corruptor', 'defender']],
  ['LifeDrain', 25, 28, 0.9324, 999999999, 58, 60, 2.1312, 'Dark', 60, 0.932, -1.199, 'primary', ['blaster', 'corruptor', 'defender']],
  ['AbysallHitScan', 30, 32, 1.0656, 999999999, 50, 52, 1.8648, 'Dark', 70, 1.066, -0.799, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Gloom', 25, 28, 0.9324, 90, 50, 52, 1.8648, 'Dark', 80, 1.932, 0.068, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Moon', 28, 28, 0.9324, 90, 40, 40, 1.4652, 'Dark', 80, 1.932, 0.467, 'primary', ['blaster', 'corruptor', 'defender']],
  ['AbysallGaze', 30, 32, 1.0656, 45, 50, 52, 1.8648, 'Dark', 70, 3.066, 1.201, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Pistols', 9, 12, 0.3996, 150, 30, 32, 1.1988, 'DP', 80, 1.000, -0.199, 'primary', ['blaster', 'corruptor', 'defender']],
  ['DualWield', 20, 20, 0.666, 150, 50, 52, 1.8648, 'DP', 80, 1.266, -0.599, 'primary', ['blaster', 'corruptor', 'defender']],
  ['PiercingRounds', 50, 52, 1.7316, 999999999, 75, 76, 2.664, 'DP', 80, 1.732, -0.932, 'primary', ['blaster', 'corruptor', 'defender']],
  ['ExecutionersShot', 39, 40, 1.332, 150, 50, 52, 1.8648, 'DP', 80, 1.932, 0.067, 'primary', ['blaster', 'corruptor', 'defender']],
  ['ChargedBolts', 16, 16, 0.5328, 999999999, 30, 32, 1.1988, 'Elec', 80, 0.533, -0.666, 'primary', ['blaster', 'corruptor', 'defender']],
  ['LightningBolt', 26, 28, 0.9324, 999999999, 50, 52, 1.8648, 'Elec', 80, 0.932, -0.932, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Zapp', 28, 28, 0.9324, 999999999, 40, 40, 1.4652, 'Elec', 80, 0.932, -0.533, 'primary', ['blaster', 'corruptor', 'defender']],
  ['TeslaCage', 29, 32, 1.0656, 999999999, 65, 68, 2.3976, 'Elec', 60, 1.066, -1.332, 'primary', ['blaster', 'corruptor', 'defender']],
  ['SniperBlast', 28, 28, 0.9324, 210, 40, 40, 1.4652, 'Energy', 80, 1.361, -0.104, 'primary', ['blaster', 'corruptor', 'defender']],
  ['PowerBolt', 25, 28, 0.9324, 90, 30, 32, 1.1988, 'Energy', 80, 1.932, 0.734, 'primary', ['blaster', 'corruptor', 'defender']],
  ['PowerBurst', 33, 36, 1.1988, 90, 60, 60, 2.1312, 'Energy', 80, 2.199, 0.068, 'primary', ['blaster', 'corruptor', 'defender']],
  ['PowerBlast', 30, 32, 1.0656, 90, 50, 52, 1.8648, 'Energy', 80, 2.066, 0.201, 'primary', ['blaster', 'corruptor', 'defender']],
  ['PowerPush', 30, 32, 1.0656, 90, 33, 36, 1.332, 'Energy', 70, 2.066, 0.734, 'primary', ['blaster', 'corruptor', 'defender']],
  ['BlazingBolt', 22, 24, 0.7992, 450, 50, 52, 1.8648, 'Fire', 80, 0.999, -0.866, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Blaze', 16, 16, 0.5328, 90, 30, 32, 1.1988, 'Fire', 80, 1.533, 0.334, 'primary', ['blaster', 'corruptor', 'defender']],
  ['FreezeRay', 17, 20, 0.666, 90, 30, 32, 1.1988, 'Ice', 60, 1.666, 0.467, 'primary', ['blaster', 'corruptor', 'defender']],
  ['BitterIceBlast', 17, 20, 0.666, 84, 32, 32, 1.1988, 'Ice', 80, 1.737, 0.539, 'primary', ['blaster', 'corruptor', 'defender']],
  ['IceBlast', 17, 20, 0.666, 60, 50, 52, 1.8648, 'Ice', 80, 2.166, 0.301, 'primary', ['blaster', 'corruptor', 'defender']],
  ['BitterFreezeRay', 69, 72, 2.3976, 90, 75, 76, 2.664, 'Ice', 80, 3.398, 0.734, 'primary', ['blaster', 'corruptor', 'defender']],
  ['PsionicLance', 40, 40, 1.332, 105, 40, 40, 1.4652, 'Psy', 100, 2.189, 0.724, 'primary', ['blaster', 'corruptor', 'defender']],
  ['TelekineticBlast', 15, 16, 0.5328, 120, 30, 32, 1.1988, 'Psy', 100, 1.283, 0.084, 'primary', ['blaster', 'corruptor', 'defender']],
  ['MentalBlast', 25, 28, 0.9324, 51, 50, 52, 1.8648, 'Psy', 100, 2.697, 0.832, 'primary', ['blaster', 'corruptor', 'defender']],
  ['PsionicDart', 25, 28, 0.9324, 51, 30, 32, 1.1988, 'Psy', 100, 2.697, 1.498, 'primary', ['blaster', 'corruptor', 'defender']],
  ['WillDomination', 50, 52, 1.7316, 51, 33, 36, 1.332, 'Psy', 100, 3.496, 2.164, 'primary', ['blaster', 'corruptor', 'defender']],
  ['XRayBeam', 32, 32, 1.0656, 999999999, 50, 52, 1.8648, 'RadBlast', 80, 1.066, -0.799, 'primary', ['blaster', 'corruptor', 'defender']],
  ['NeutrinoBolt', 17, 20, 0.666, 105, 30, 32, 1.1988, 'RadBlast', 80, 1.523, 0.324, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Cosmic', 35, 36, 1.1988, 75, 62, 64, 2.2644, 'RadBlast', 80, 2.399, 0.134, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Proton', 25, 28, 0.9324, 60, 40, 40, 1.4652, 'RadBlast', 80, 2.432, 0.967, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Screech', 24, 24, 0.7992, 999999999, 45, 48, 1.7316, 'Sonic', 60, 0.799, -0.932, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Shriek', 28, 28, 0.9324, 105, 30, 32, 1.1988, 'Sonic', 80, 1.790, 0.591, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Scream', 25, 28, 0.9324, 84, 50, 52, 1.8648, 'Sonic', 80, 2.004, 0.139, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Shout', 45, 48, 1.5984, 84, 80, 80, 2.7972, 'Sonic', 80, 2.670, -0.127, 'primary', ['blaster', 'corruptor', 'defender']],
  ['WaterJetNormal', 11, 12, 0.3996, 999999999, 43, 44, 1.5984, 'Water', 80, 0.400, -1.199, 'primary', ['blaster', 'corruptor', 'defender']],
  ['WaterJetFast', 9, 12, 0.3996, 999999999, 30, 32, 1.1988, 'Water', 80, 0.400, -0.799, 'primary', ['blaster', 'corruptor', 'defender']],
  ['HydroBlast', 35, 36, 1.1988, 75, 50, 52, 1.8648, 'Water', 80, 2.399, 0.534, 'primary', ['blaster', 'corruptor', 'defender']],
  ['Dehydrate', 16, 16, 0.5328, 999999999, 56, 56, 1.998, 'Water', 80, 0.533, -1.465, 'primary', ['blaster', 'corruptor', 'defender']],
  ['EchoChamber', 17, 20, 0.666, 60, 50, 52, 1.8648, 'SonicManip', 60, 2.166, 0.301, 'secondary', ['blaster']],
  ['ChokingPowder', 23, 24, 0.7992, 51, 32, 32, 1.1988, 'Ninja', 60, 2.564, 1.365, 'secondary', ['blaster']],
  ['IceArrow', 25, 28, 0.9324, 210, 50, 52, 1.8648, 'TactArrow', 60, 1.361, -0.504, 'secondary', ['blaster']],
  ["ElecNetArrow", 25, 28, 0.9324, 180, 30, 32, 1.1988, "TactArrow", 60, 1.432, 0.234, 'secondary', ['blaster']],
  ['Strangler', 16, 16, 0.5328, 999999999, 62, 64, 2.2644, 'Plant', 60, 0.533, -1.732, 'secondary', ['blaster']],
  ["TimeWall", 13, 16, 0.5328, 999999999, 48, 48, 1.7316, "Temporal", 60, 0.533, -1.199, 'secondary', ['blaster']],
  ["DarkGrasp", 30, 32, 1.0656, 999999999, 50, 52, 1.8648, "DarkControl", 80, 1.066, - 0.799, 'primary', ['controller', 'dom']],
  ["Fossilize", 16, 16, 0.5328, 999999999, 62, 64, 2.2644, "EarthControl", 80, 0.533, -1.732, 'primary', ['controller', 'dom']],
  ["TeslaCageEC", 29, 32, 1.0656, 999999999, 65, 68, 2.3976, "ElecControl", 80, 1.066, - 1.332, 'primary', ['controller', 'dom']],
  ['CharFC', 23, 24, 0.7992, 51, 32, 32, 1.1988, 'FireControl', 80, 2.564, 1.365, 'primary', ['controller', 'dom']],
  ["LiftDom", 22, 24, 0.7992, 999999999, 31, 32, 1.1988, "GravControl", 80, 0.799, -0.400, 'primary', ['dom']],
  ["Lift", 82, 84, 2.7972, 999999999, 31, 32, 1.1988, "GravControl", 80, 0.799, -0.400, 'primary', ['controller']],
  ["GravityDistortion", 37, 40, 1.332, 999999999, 55, 56, 1.998, "GravControl", 80, 1.332, -0.666, 'primary', ['controller', 'dom']],
  ["BlockOfIce", 21, 24, 0.7992, 999999999, 56, 56, 1.998, "IceControl", 80, 0.799, -1.199, 'primary', ['controller', 'dom']],
  ["Blind", 20, 20, 0.666, 999999999, 50, 52, 1.8648, "IllControl", 80, 0.666, -1.199, 'primary', ['controller']],
  ["Mesmerize", 20, 20, 0.666, 999999999, 50, 52, 1.8648, "MindControl", 100, 0.666, -1.199, 'primary', ['controller', 'dom']],
  ["Levitate", 20, 20, 0.666, 999999999, 56, 56, 1.998, "MindControl", 80, 0.666, -1.332, 'primary', ['controller', 'dom']],
  ["DominateMC", 20, 20, 0.666, 999999999, 33, 36, 1.332, "MindControl", 80, 0.666, -0.666, 'primary', ['controller', 'dom']],
  ["StranglerPC", 16, 16, 0.5328, 999999999, 62, 64, 2.2644, "PlantControl", 80, 0.533, -1.732, 'primary', ['controller', 'dom']],
  ['LifeDrain', 25, 28, 0.9324, 999999999, 58, 60, 2.1312, 'DarkAssault', 60, 0.932, -1.199, 'secondary', ['dom']],
  ['Gloom', 25, 28, 0.9324, 90, 50, 52, 1.8648, 'DarkAssault', 80, 1.932, 0.068, 'secondary', ['dom']],
  ['Moon', 28, 28, 0.9324, 90, 40, 40, 1.4652, 'DarkAssault', 80, 1.932, 0.467, 'secondary', ['dom']],
  ["Hurl Boulder", 50, 52, 1.7316, 54, 45, 48, 1.7316, "EarthAssault", 80, 3.398, 1.667, 'secondary', ['dom']],
  ["Stone Spears", 20, 20, 0.666, 999999999, 30, 32, 1.1988, "EarthAssault", 80, 0.666, -0.533, 'secondary', ['dom']],
  ['Charged Bolts', 16, 16, 0.5328, 999999999, 30, 32, 1.1988, 'ElecAssault', 80, 0.533, -0.666, 'secondary', ['dom']],
  ['Lightning Bolt', 26, 28, 0.9324, 999999999, 50, 52, 1.8648, 'ElecAssault', 80, 0.932, -0.932, 'secondary', ['dom']],
  ['Zapp', 28, 28, 0.9324, 999999999, 40, 40, 1.4652, 'ElecAssault', 80, 0.932, -0.533, 'secondary', ['dom']],
  ['Power Bolt', 25, 28, 0.9324, 90, 30, 32, 1.1988, 'EnergyAssault', 80, 1.932, 0.734, 'secondary', ['dom']],
  ['Power Blast', 30, 32, 1.0656, 90, 50, 52, 1.8648, 'EnergyAssault', 80, 2.066, 0.201, 'secondary', ['dom']],
  ['Sniper Blast', 28, 28, 0.9324, 210, 40, 40, 1.4652, 'EnergyAssault', 80, 1.361, -0.104, 'secondary', ['dom']],
  ['Power Push', 30, 32, 1.0656, 90, 33, 36, 1.332, 'EnergyAssault', 70, 2.066, 0.734, 'secondary', ['dom']],
  ['Blazing Bolt', 22, 24, 0.7992, 450, 50, 52, 1.8648, 'FireAssault', 80, 0.999, -0.866, 'secondary', ['dom']],
  ['Blaze', 16, 16, 0.5328, 90, 30, 32, 1.1988, 'FireAssault', 80, 1.533, 0.334, 'secondary', ['dom']],
  ['Bitter Ice Blast', 17, 20, 0.666, 84, 32, 32, 1.1988, 'IceAssault', 80, 1.737, 0.539, 'secondary', ['dom']],
  ['Ice Blast', 17, 20, 0.666, 60, 50, 52, 1.8648, 'IceAssault', 80, 2.166, 0.301, 'secondary', ['dom']],
  ["Masterful Throw", 18, 20, 0.666, 80, 40, 40, 1.4652, "MartialAssault", 80, 1.791, 0.326, 'secondary', ['dom']],
  ["Trick Shot", 19, 20, 0.666, 45, 32, 32, 1.1988, "MartialAssault", 70, 2.666, 1.467, 'secondary', ['dom']],
  ["Shuriken Throw", 10, 12, 0.3996, 45, 30, 32, 1.1988, "MartialAssault", 80, 2.400, 1.201, 'secondary', ['dom']],
  ['Subdue', 20, 20, 0.666, 51, 50, 52, 1.8648, 'PsyAssault', 100, 2.431, 0.566, 'secondary', ['dom']],
  ['Telekinetic Blast', 15, 16, 0.5328, 120, 30, 32, 1.1988, 'PsyAssault', 100, 1.283, 0.084, 'secondary', ['dom']],
  ['Mental Blast', 25, 28, 0.9324, 51, 50, 52, 1.8648, 'PsyAssault', 100, 2.697, 0.832, 'secondary', ['dom']],
  ['Psionic Lance', 40, 40, 1.332, 105, 40, 40, 1.4652, 'PsyAssault', 100, 2.189, 0.724, 'secondary', ['dom']],
  ['Psionic Dart', 25, 28, 0.9324, 51, 30, 32, 1.1988, 'PsyAssault', 100, 2.697, 1.498, 'secondary', ['dom']],
  ['XRay Beam', 32, 32, 1.0656, 999999999, 50, 52, 1.8648, 'RadAssault', 80, 1.066, -0.799, 'secondary', ['dom']],
  ['Proton Volley', 25, 28, 0.9324, 60, 40, 40, 1.4652, 'RadAssault', 80, 2.432, 0.967, 'secondary', ['dom']],
  ['Neutrino Bolt', 17, 20, 0.666, 105, 30, 32, 1.1988, 'RadAssault', 80, 1.523, 0.324, 'secondary', ['dom']],
  ["CallHawk", 20, 20, 0.666, 60, 50, 52, 1.8648, "SavageAssault", 80, 2.166, 0.301, 'secondary', ['dom']],
  ["CallSwarm", 22, 24, 0.7992, 60, 30, 32, 1.1988, "SavageAssault", 80, 2.299, 1.100, 'secondary', ['dom']],
  ["Impale", 43, 44, 1.4652, 114, 43, 44, 1.5984, "ThornyAssault", 80, 2.255, 0.656, 'secondary', ['dom']],
  ["ThornyDarts", 15, 16, 0.5328, 114, 40, 40, 1.4652, "ThornyAssault", 80, 1.322, -0.143, 'secondary', ['dom']],
  ["SoulStorm", 45, 48, 1.5984, 52.5, 65, 68, 2.3976, "Soul", 80, 3.313, 0.915, 'epic', ['blaster', 'defender', 'corruptor']],
  ['Char', 23, 24, 0.7992, 51, 32, 32, 1.1988, 'Fire Mastery', 80, 2.564, 1.365, 'epic', ['blaster', 'corruptor', 'defender']],
  ["ElecShackles", 29, 32, 1.0656, 999999999, 65, 68, 2.3976, "Mu", 60, 1.066, -1.332, 'epic', ['blaster', 'defender', 'corruptor']],
  ['ShockingBolt', 26, 28, 0.9324, 999999999, 60, 60, 2.1312, 'Elec Mastery', 80, 0.932, -1.199, 'epic', ['blaster']],
  ['Surveillance', 25, 28, 0.9324, 999999999, 45, 48, 1.7316, 'Munitions', 80, 0.932, -0.799, 'epic', ['blaster']],
  ['SpiritSharkJaws', 21, 24, 0.7992, 999999999, 56, 56, 1.998, 'Leviathan', 80, 0.799, -1.199, 'epic', ['blaster', 'defender', 'corruptor']],
  ['Dominate', 20, 20, 0.666, 999999999, 33, 36, 1.332, 'Psy Mastery', 80, 0.666, -0.666, 'epic', ['corruptor', 'defender']],
  ['Poisonous Ray', 41, 44, 1.4652, 66, 60, 60, 2.1312, 'Mace', 80, 2.829, 0.698, 'epic', ['controller', 'dom']],
  ["ParalyticPoison", 31, 32, 1.0656, 66, 60, 60, 2.1312, "Poison", 70, 2.429, 0.298, 'secondary', ['defender', 'corruptor', 'controller']],
  ["Weaken", 25, 28, 0.9324, 66, 62, 64, 2.2644, "Poison", 70, 2.296, 0.032, 'secondary', ['defender', 'corruptor', 'controller']],
  ["EF", 45, 48, 1.5984, 999999999, 45, 48, 1.7316, "RadEmission", 70, 1.598, - 0.133, 'secondary', ['defender', 'corruptor', 'controller']],
  ["Corrosive", 19, 20, 0.666, 90, 30, 32, 1.1988, "Nature", 80, 1.666, 0.467, 'secondary', ['defender', 'corruptor', 'controller']],
  ["Envenom", 25, 28, 0.9324, 66, 40, 40, 1.4652, "Poison", 70, 2.296, 0.831, 'secondary', ['defender', 'corruptor', 'controller']],
  ['Infrigidate', 18, 20, 0.666, 39, 30, 32, 1.1988, 'Cold', 80, 2.974, 1.775, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Heat Loss', 29, 32, 1.0656, 999999999, 65, 68, 2.3976, "Cold", 70, 1.066, -1.332, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Petrifying Gaze', 30, 32, 1.0656, 45, 50, 52, 1.8648, "DarkMiasma", 70, 3.066, 1.201, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Shock', 26, 28, 0.9324, 999999999, 60, 60, 2.1312, "ElecAffinity", 80, 0.932, -1.199, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Insulating Circuit', 22, 24, 0.7992, 999999999, 30, 32, 1.1988, "ElecAffinity", 80, 0.799, -0.400, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Rejuvenating Circuit', 23, 24, 0.7992, 999999999, 35, 36, 1.332, "ElecAffinity", 80, 0.799, -0.533, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Healing Aura', 23, 24, 0.7992, 999999999, 61, 64, 2.2644, "Empathy", 0, 0.799, -1.465, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Heal Other', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Empathy", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Absorb Pain', 43, 44, 1.4652, 999999999, 68, 68, 2.3976, "Empathy", 80, 1.465, -0.932, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Clear Mind', 15, 16, 0.5328, 999999999, 30, 32, 1.1988, "Empathy", 70, 0.533, -0.666, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Fortitude', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Empathy", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Force Bolt', 20, 20, 0.666, 120, 33, 36, 1.332, "ForceField", 80, 1.416, 0.084, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Dark Grasp Slow', 30, 32, 1.0656, 45, 50, 52, 1.8648, "DarkControl", 80, 3.066, 1.201, 'primary', ['controller', 'dom']],
  ['Soothe', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Pain", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Share Pain', 35, 36, 1.1988, 999999999, 68, 68, 2.3976, "Pain", 80, 1.199, -1.199, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Enforced Morale', 15, 16, 0.5328, 999999999, 30, 32, 1.1988, "Pain", 70, 0.533, -0.666, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Sonic Siphon', 35, 36, 1.1988, 90, 65, 68, 2.3976, "SonicRes", 80, 2.199, -0.199, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Sonic Cage', 17, 20, 0.666, 60, 50, 52, 1.8648, "SonicRes", 80, 2.166, 0.301, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Clarity', 30, 32, 1.0656, 999999999, 45, 48, 1.7316, "SonicRes", 70, 1.066, -0.666, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Gale', 59, 60, 1.998, 999999999, 65, 68, 2.3976, "Storm", 50, 1.998, -0.400, 'secondary', ['controller', 'corruptor', 'defender']],
  ['O2 Boost', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Storm", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Melt Armor', 25, 28, 0.9324, 999999999, 45, 48, 1.7316, "Thermal", 70, 0.932, -0.799, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Forge', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Thermal", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Cauterize', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Thermal", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Thaw', 29, 32, 1.0656, 999999999, 65, 68, 2.3976, "Thermal", 70, 1.066, -1.332, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Time Crawl', 13, 16, 0.5328, 999999999, 48, 48, 1.7316, "Time", 80, 0.533, -1.199, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Time Stop', 29, 32, 1.0656, 999999999, 65, 68, 2.3976, "Time", 70, 1.066, -1.332, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Slowed Response', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Time", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Web Grenade', 37, 40, 1.332, 90, 41, 44, 1.5984, "Traps", 70, 2.332, 0.734, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Entangling Arrow', 25, 28, 0.9324, 180, 30, 32, 1.1988, "TrickArrow", 80, 1.432, 0.234, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Ice Arrow TA', 25, 28, 0.9324, 210, 50, 52, 1.8648, "TrickArrow", 80, 1.361, -0.504, 'secondary', ['controller', 'corruptor', 'defender']],
  ['Acid Arrow', 48, 48, 1.5984, 210, 55, 56, 1.998, "TrickArrow", 80, 2.027, 0.029, 'secondary', ['controller', 'corruptor', 'defender']],
]

export default attacks