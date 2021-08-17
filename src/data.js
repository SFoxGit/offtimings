const attacks = [
  ['Burst', 8, 8, 0.2664, 999999999, 30, 32, 1.1988, 'AssaultRiffle', 90, 0.266, -0.932, 'primary'],
  ['Slug', 32, 32, 1.0656, 999999999, 50, 52, 1.8648, 'AssaultRiffle', 100, 1.066, -0.799, 'primary'],
  ['WaterJetNormal', 11, 12, 0.3996, 999999999, 43, 44, 1.5984, 'Water', 80, 0.400, -1.199, 'primary'],
  ['WaterJetFast', 9, 12, 0.3996, 999999999, 30, 32, 1.1988, 'Water', 80, 0.400, -0.799, 'primary'],
  ['ChargedBolts', 16, 16, 0.5328, 999999999, 30, 32, 1.1988, 'Elec', 80, 0.533, -0.666, 'primary'],
  ['Strangler', 16, 16, 0.5328, 999999999, 62, 64, 2.2644, 'Plant', 60, 0.533, -1.732, 'primary'],
  ['Dehydrate', 16, 16, 0.5328, 999999999, 56, 56, 1.998, 'Water', 80, 0.533, -1.465, 'primary'],
  ['Dominate', 20, 20, 0.666, 999999999, 33, 36, 1.332, 'EpicPsy', 80, 0.666, -0.666, 'epic'],
  ['Lancer', 23, 24, 0.7992, 999999999, 57, 60, 2.1312, 'Beam', 80, 0.799, -1.332, 'primary'],
  ['SpiritSharkJaws', 21, 24, 0.7992, 999999999, 56, 56, 1.998, 'Leviathan', 80, 0.799, -1.199, 'epic'],
  ['Screech', 24, 24, 0.7992, 999999999, 45, 48, 1.7316, 'Sonic', 60, 0.799, -0.932, 'primary'],
  ['LifeDrain', 25, 28, 0.9324, 999999999, 58, 60, 2.1312, 'Dark', 60, 0.932, -1.199, 'primary'],
  ['LightningBolt', 26, 28, 0.9324, 999999999, 50, 52, 1.8648, 'Elec', 80, 0.932, -0.932, 'primary'],
  ['Zapp', 28, 28, 0.9324, 999999999, 40, 40, 1.4652, 'Elec', 80, 0.932, -0.533, 'primary'],
  ['ShockingBolt', 26, 28, 0.9324, 999999999, 60, 60, 2.1312, 'ElecMastery', 80, 0.932, -1.199, 'epic'],
  ['Surveillance', 25, 28, 0.9324, 999999999, 45, 48, 1.7316, 'Munitions', 80, 0.932, -0.799, 'epic'],
  ['BlazingBolt', 22, 24, 0.7992, 450, 50, 52, 1.8648, 'Fire', 80, 0.999, -0.866, 'primary'],
  ['Pistols', 9, 12, 0.3996, 150, 30, 32, 1.1988, 'DP', 80, 1.000, -0.199, 'primary'],
  ['Disintegrate', 29, 32, 1.0656, 999999999, 57, 60, 2.1312, 'Beam', 80, 1.066, -1.066, 'primary'],
  ['AbysallHitScan', 30, 32, 1.0656, 999999999, 50, 52, 1.8648, 'Dark', 70, 1.066, -0.799, 'primary'],
  ['TeslaCage', 29, 32, 1.0656, 999999999, 65, 68, 2.3976, 'Elec', 60, 1.066, -1.332, 'primary'],
  ['XRayBeam', 32, 32, 1.0656, 999999999, 50, 52, 1.8648, 'Rad', 80, 1.066, -0.799, 'primary'],
  ['SnapShot', 22, 24, 0.7992, 300, 30, 32, 1.1988, 'Arch', 80, 1.099, -0.100, 'primary'],
  ['AimedShot', 24, 24, 0.7992, 300, 50, 52, 1.8648, 'Arch', 80, 1.099, -0.766, 'primary'],
  ['RangedShot', 24, 24, 0.7992, 300, 50, 52, 1.8648, 'Arch', 80, 1.099, -0.766, 'primary'],
  ['DualWield', 20, 20, 0.666, 150, 50, 52, 1.8648, 'DP', 80, 1.266, -0.599, 'primary'],
  ['TelekineticBlast', 15, 16, 0.5328, 120, 30, 32, 1.1988, 'Psy', 100, 1.283, 0.084, 'primary'],
  ['SniperBlast', 28, 28, 0.9324, 210, 40, 40, 1.4652, 'Energy', 80, 1.361, -0.104, 'primary'],
  ['IceArrow', 25, 28, 0.9324, 210, 50, 52, 1.8648, 'TactArrow', 60, 1.361, -0.504, 'secondary'],
  ['SingleShot', 13, 16, 0.5328, 105, 30, 32, 1.1988, 'Beam', 80, 1.390, 0.191, 'primary'],
  ['Blaze', 16, 16, 0.5328, 90, 30, 32, 1.1988, 'Fire', 80, 1.533, 0.334, 'primary'],
  ['ChargedShot', 29, 32, 1.0656, 155, 50, 52, 1.8648, 'Beam', 80, 1.646, -0.219, 'primary'],
  ['FreezeRay', 17, 20, 0.666, 90, 30, 32, 1.1988, 'Ice', 60, 1.666, 0.467, 'primary'],
  ['SniperRifle', 50, 52, 1.7316, 999999999, 45, 48, 1.7316, 'AssaultRiffle', 80, 1.732, 0.000, 'primary'],
  ['PiercingRounds', 50, 52, 1.7316, 999999999, 75, 76, 2.664, 'DP', 80, 1.732, -0.932, 'primary'],
  ['BitterIceBlast', 17, 20, 0.666, 84, 32, 32, 1.1988, 'Ice', 80, 1.737, 0.539, 'primary'],
  ['Shriek', 28, 28, 0.9324, 105, 30, 32, 1.1988, 'Sonic', 80, 1.790, 0.591, 'primary'],
  ['BlazingArrow', 48, 48, 1.5984, 300, 55, 56, 1.998, 'Arch', 80, 1.898, -0.100, 'primary'],
  ['ExecutionersShot', 39, 40, 1.332, 150, 50, 52, 1.8648, 'DP', 80, 1.932, 0.067, 'primary'],
  ['Gloom', 25, 28, 0.9324, 90, 50, 52, 1.8648, 'Dark', 80, 1.932, 0.068, 'primary'],
  ['Moon', 28, 28, 0.9324, 90, 40, 40, 1.4652, 'Dark', 80, 1.932, 0.467, 'primary'],
  ['PowerBolt', 25, 28, 0.9324, 90, 30, 32, 1.1988, 'Energy', 80, 1.932, 0.734, 'primary'],
  ['Scream', 25, 28, 0.9324, 84, 50, 52, 1.8648, 'Sonic', 80, 2.004, 0.139, 'primary'],
  ['PowerBlast', 30, 32, 1.0656, 90, 50, 52, 1.8648, 'Energy', 80, 2.066, 0.201, 'primary'],
  ['PowerPush', 30, 32, 1.0656, 90, 33, 36, 1.332, 'Energy', 70, 2.066, 0.734, 'primary'],
  ['EchoChamber', 17, 20, 0.666, 60, 50, 52, 1.8648, 'SonicManip', 60, 2.166, 0.301, 'secondary'],
  ['IceBlast', 17, 20, 0.666, 60, 50, 52, 1.8648, 'Ice', 80, 2.166, 0.301, 'primary'],
  ['PsionicLance', 40, 40, 1.332, 105, 40, 40, 1.4652, 'Psy', 100, 2.189, 0.724, 'primary'],
  ['PowerBurst', 33, 36, 1.1988, 90, 60, 60, 2.1312, 'Energy', 80, 2.199, 0.068, 'primary'],
  ['Cosmic', 35, 36, 1.1988, 75, 62, 64, 2.2644, 'Rad', 80, 2.399, 0.134, 'primary'],
  ['HydroBlast', 35, 36, 1.1988, 75, 50, 52, 1.8648, 'Water', 80, 2.399, 0.534, 'primary'],
  ['Proton', 25, 28, 0.9324, 60, 40, 40, 1.4652, 'Rad', 80, 2.432, 0.967, 'primary'],
  ['Char', 23, 24, 0.7992, 51, 32, 32, 1.1988, 'Fire', 80, 2.564, 1.365, 'primary'],
  ['ChokingPowder', 23, 24, 0.7992, 51, 32, 32, 1.1988, 'Ninja', 60, 2.564, 1.365, 'secondary'],
  ['PRay', 29, 32, 1.0656, 60, 50, 52, 1.8648, 'Beam', 80, 2.566, 0.701, 'primary'],
  ['Shout', 45, 48, 1.5984, 84, 80, 80, 2.7972, 'Sonic', 80, 2.670, -0.127, 'primary'],
  ['MentalBlast', 25, 28, 0.9324, 51, 50, 52, 1.8648, 'Psy', 100, 2.697, 0.832, 'primary'],
  ['PsionicDart', 25, 28, 0.9324, 51, 30, 32, 1.1988, 'Psy', 100, 2.697, 1.498, 'primary'],
  ['AbysallGaze', 30, 32, 1.0656, 45, 50, 52, 1.8648, 'Dark', 70, 3.066, 1.201, 'primary'],
  ['BitterFreezeRay', 69, 72, 2.3976, 90, 75, 76, 2.664, 'Ice', 80, 3.398, 0.734, 'primary'],
  ['WillDomination', 50, 52, 1.7316, 51, 33, 36, 1.332, 'Psy', 100, 3.496, 2.164, 'primary'],
  ["Fossilize", 16, 16, 0.5328, 999999999, 62, 64, 2.2644, "EarthControl", 80, 0.533 - 1.732],
  ["Blind", 20, 20, 0.666, 999999999, 50, 52, 1.8648, "IllControl", 80, 0.666 - 1.199],
  ["Mesmerize", 20, 20, 0.666, 999999999, 50, 52, 1.8648, "MindControl", 100, 0.666 - 1.199],
  ["Corrosive", 19, 20, 0.666, 90, 30, 32, 1.1988, "Nature", 80, 1.666, 0.467],
  ["BlockOfIce", 21, 24, 0.7992, 999999999, 56, 56, 1.998, "IceControl", 80, 0.799 - 1.199],
  ["ElecNetArrow", 25, 28, 0.9324, 180, 30, 32, 1.1988, "TactArrow", 60, 1.432, 0.234],
  ["Envenom", 25, 28, 0.9324, 66, 40, 40, 1.4652, "Poison", 70, 2.296, 0.831],
  ["GravityDistortion", 37, 40, 1.332, 999999999, 55, 56, 1.998, "GravControl", 80, 1.332 - 0.666],
  ["EF", 45, 48, 1.5984, 999999999, 45, 48, 1.7316, "RadEmission", 70, 1.598 - 0.133],
  ["DarkGrasp", 30, 32, 1.0656, 999999999, 50, 52, 1.8648, "DarkControl", 80, 1.066 - 0.799],
  ["TeslaCage", 29, 32, 1.0656, 999999999, 65, 68, 2.3976, "ElecControl", 80, 1.066 - 1.332],
  ["Lift", 22, 24, 0.7992, 999999999, 31, 32, 1.1988, "GravControl", 80, 0.799 - 0.400],
  ["Levitate", 20, 20, 0.666, 999999999, 56, 56, 1.998, "MindControl", 80, 0.666 - 1.332],
  ["Dominate", 20, 20, 0.666, 999999999, 33, 36, 1.332, "MindControl", 80, 0.666 - 0.666],
  ["Strangler", 16, 16, 0.5328, 999999999, 62, 64, 2.2644, "PlantControl", 80, 0.533 - 1.732],
  ["HurlBoulder", 50, 52, 1.7316, 54, 45, 48, 1.7316, "EarthAssault", 80, 3.398, 1.667],
  ["StoneSpears", 20, 20, 0.666, 999999999, 30, 32, 1.1988, "EarthAssault", 80, 0.666 - 0.533],
  ["Weaken", 25, 28, 0.9324, 66, 62, 64, 2.2644, "Poison", 70, 2.296, 0.032],
  ["ParalyticPoison", 31, 32, 1.0656, 66, 60, 60, 2.1312, "Poison", 70, 2.429, 0.298],
  ["TimeWall", 13, 16, 0.5328, 999999999, 48, 48, 1.7316, "Temporal", 60, 0.533 - 1.199],
  ["ElecShackles", 29, 32, 1.0656, 999999999, 65, 68, 2.3976, "MuMastery", 60, 1.066 - 1.332],
  ["SoulStorm", 45, 48, 1.5984, 52.5, 65, 68, 2.3976, "SoulMastery", 80, 3.313, 0.915],
  ["MasterfulThrow", 18, 20, 0.666, 80, 40, 40, 1.4652, "MartialAssault", 80, 1.791, 0.326],
  ["TrickShot", 19, 20, 0.666, 45, 32, 32, 1.1988, "MartialAssault", 70, 2.666, 1.467],
  ["ShurikenThrow", 10, 12, 0.3996, 45, 30, 32, 1.1988, "MartialAssault", 80, 2.400, 1.201],
  ["CallHawk", 20, 20, 0.666, 60, 50, 52, 1.8648, "SavageAssault", 80, 2.166, 0.301],
  ["CallSwarm", 22, 24, 0.7992, 60, 30, 32, 1.1988, "SavageAssault", 80, 2.299, 1.100],
  ["Impale", 43, 44, 1.4652, 114, 43, 44, 1.5984, "ThornyAssault", 80, 2.255, 0.656],
  ["ThornyDarts", 15, 16, 0.5328, 114, 40, 40, 1.4652, "ThornyAssault", 80, 1.322 - 0.143],
]

export default attacks