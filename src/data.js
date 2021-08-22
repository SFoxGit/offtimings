const attacks = [
  ['Burst', 8, 8, 0.2664, 999999999, 30, 32, 1.1988, 'AssaultRiffle', 90, 0.266, -0.932, 'primary', ['blaster', 'corruptor', 'defender'], 4.0, [0.4159], ["Lethal_Dmg"], [
    "Accurate Defense Debuff",
    "Blaster Archetype Sets",
    "Defense Debuff",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Slug', 32, 32, 1.0656, 999999999, 50, 52, 1.8648, 'AssaultRiffle', 100, 1.066, -0.799, 'primary', ['blaster', 'corruptor', 'defender'], 8.0, [1.8892], ["Lethal_Dmg"], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['SniperRifle', 50, 52, 1.7316, 999999999, 45, 48, 1.7316, 'AssaultRiffle', 80, 1.732, 0.000, 'primary', ['blaster', 'corruptor', 'defender'], 12, [1.93], ["Lethal_Dmg"], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['SnapShot', 22, 24, 0.7992, 300, 30, 32, 1.1988, 'Archery', 80, 1.099, -0.100, 'primary', ['blaster', 'corruptor', 'defender'], 2.0, [1.1802], ["Lethal_Dmg"], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['AimedShot', 24, 24, 0.7992, 300, 50, 52, 1.8648, 'Archery', 80, 1.099, -0.766, 'primary', ['blaster', 'corruptor', 'defender'], 6.0, [1.8092], ["Lethal_Dmg"], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['RangedShot', 24, 24, 0.7992, 300, 50, 52, 1.8648, 'Archery', 80, 1.099, -0.766, 'primary', ['blaster', 'corruptor', 'defender'], 12, [2.049], ["Lethal_Dmg"], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['BlazingArrow', 48, 48, 1.5984, 300, 55, 56, 1.998, 'Archery', 80, 1.898, -0.100, 'primary', ['blaster', 'corruptor', 'defender'], 10, [2.0813], ['Lethal_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Disintegrate', 29, 32, 1.0656, 999999999, 57, 60, 2.1312, 'Beam', 80, 1.066, -1.066, 'primary', ['blaster', 'corruptor', 'defender'], 10, [0.2343], ["Energy_Dmg"][
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Lancer', 23, 24, 0.7992, 999999999, 57, 60, 2.1312, 'Beam', 80, 0.799, -1.332, 'primary', ['blaster', 'corruptor', 'defender'], 11, [2.1703, 0.4341], ['Energy_Dmg', 'Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Stuns",
    "Universal Damage Sets"
  ]],
  ['SingleShot', 13, 16, 0.5328, 105, 30, 32, 1.1988, 'Beam', 80, 1.390, 0.191, 'primary', ['blaster', 'corruptor', 'defender'], 4.0, [1.2602], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['ChargedShot', 29, 32, 1.0656, 155, 50, 52, 1.8648, 'Beam', 80, 1.646, -0.219, 'primary', ['blaster', 'corruptor', 'defender'], 8.0, [1.8892, 0.2834], ["Energy_Dmg", "Energy_Dmg"], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['PRay', 29, 32, 1.0656, 60, 50, 52, 1.8648, 'Beam', 80, 2.566, 0.701, 'primary', ['blaster', 'corruptor', 'defender'], 12, [2.049, 0.33], ["Energy_Dmg", "Energy_Dmg"], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['LifeDrain', 25, 28, 0.9324, 999999999, 58, 60, 2.1312, 'Dark', 60, 0.932, -1.199, 'primary', ['blaster', 'corruptor', 'defender'], 8.0, [2.0713], ['Negative_Energy_Dmg'], [
    "Accurate Healing",
    "Accurate To-Hit Debuff",
    "Blaster Archetype Sets",
    "Healing",
    "Ranged Damage",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ['AbysallHitScan', 30, 32, 1.0656, 999999999, 50, 52, 1.8648, 'Dark', 70, 1.066, -0.799, 'primary', ['blaster', 'corruptor', 'defender'], 20, ['tick', 0.7898, 2.1, 1], ['Negative_Energy_Dmg'], [
    "Accurate To-Hit Debuff",
    "Blaster Archetype Sets",
    "Holds",
    "Ranged Damage",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ['Gloom', 25, 28, 0.9324, 90, 50, 52, 1.8648, 'Dark', 80, 1.932, 0.068, 'primary', ['blaster', 'corruptor', 'defender'], 8.0, ['tick', 0.2362, 3.6, 0.5], ['Negative_Energy_Dmg'], [
    "Accurate To-Hit Debuff",
    "Blaster Archetype Sets",
    "Ranged Damage",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ['Moon', 28, 28, 0.9324, 90, 40, 40, 1.4652, 'Dark', 80, 1.932, 0.467, 'primary', ['blaster', 'corruptor', 'defender'], 12, [1.811], ['Negative_Energy_Dmg'], [
    "Accurate To-Hit Debuff",
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Sniper Attacks",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ['AbysallGaze', 30, 32, 1.0656, 45, 50, 52, 1.8648, 'Dark', 70, 3.066, 1.201, 'primary', ['blaster', 'corruptor', 'defender'], 20, ['tick', 0.7898, 2.1, 1], ['Negative_Energy_Dmg'], [
    "Accurate To-Hit Debuff",
    "Blaster Archetype Sets",
    "Holds",
    "Ranged Damage",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ['Pistols', 9, 12, 0.3996, 150, 30, 32, 1.1988, 'DP', 80, 1.000, -0.199, 'primary', ['blaster', 'corruptor', 'defender'], 4.0, [0.8821, 0.378], ['Lethal_Dmg', "Fire_Dmg"], [
    "Accurate Defense Debuff",
    "Blaster Archetype Sets",
    "Defense Debuff",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['DualWield', 20, 20, 0.666, 150, 50, 52, 1.8648, 'DP', 80, 1.266, -0.599, 'primary', ['blaster', 'corruptor', 'defender'], 6.0, [1.2665, 0.5428], ['Lethal_Dmg', "Fire_Dmg"], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ['PiercingRounds', 50, 52, 1.7316, 999999999, 75, 76, 2.664, 'DP', 80, 1.732, -0.932, 'primary', ['blaster', 'corruptor', 'defender'], 15, [1.6044, 0.6876], ['Lethal_Dmg', "Fire_Dmg"], [
    "Blaster Archetype Sets",
    "Ranged AoE Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ['ExecutionersShot', 39, 40, 1.332, 150, 50, 52, 1.8648, 'DP', 80, 1.932, 0.067, 'primary', ['blaster', 'corruptor', 'defender'], 10, [1.3785, 0.5908], ['Lethal_Dmg', "Fire_Dmg"], [
    "Accurate Defense Debuff",
    "Blaster Archetype Sets",
    "Defense Debuff",
    "Knockback",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ['ChargedBolts', 16, 16, 0.5328, 999999999, 30, 32, 1.1988, 'Elec', 80, 0.533, -0.666, 'primary', ['blaster', 'corruptor', 'defender'], 4.0, [1.2602], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Endurance Modification",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['LightningBolt', 26, 28, 0.9324, 999999999, 50, 52, 1.8648, 'Elec', 80, 0.932, -0.932, 'primary', ['blaster', 'corruptor', 'defender'], 8.0, [1.8892], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Endurance Modification",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Zapp', 28, 28, 0.9324, 999999999, 40, 40, 1.4652, 'Elec', 80, 0.932, -0.533, 'primary', ['blaster', 'corruptor', 'defender'], 12, [1.811], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Endurance Modification",
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['TeslaCage', 29, 32, 1.0656, 999999999, 65, 68, 2.3976, 'Elec', 60, 1.066, -1.332, 'primary', ['blaster', 'corruptor', 'defender'], 10, [0.122], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Endurance Modification",
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['SniperBlast', 28, 28, 0.9324, 210, 40, 40, 1.4652, 'Energy', 80, 1.361, -0.104, 'primary', ['blaster', 'corruptor', 'defender'], 12, [0.5433, 1.2677], ['Smashing_Dmg', "Energy_Dmg"], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['PowerBolt', 25, 28, 0.9324, 90, 30, 32, 1.1988, 'Energy', 80, 1.932, 0.734, 'primary', ['blaster', 'corruptor', 'defender'], 4.0, [1.2602], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['PowerBurst', 33, 36, 1.1988, 90, 60, 60, 2.1312, 'Energy', 80, 2.199, 0.068, 'primary', ['blaster', 'corruptor', 'defender'], 10, [2.2003], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['PowerBlast', 30, 32, 1.0656, 90, 50, 52, 1.8648, 'Energy', 80, 2.066, 0.201, 'primary', ['blaster', 'corruptor', 'defender'], 8.0, [1.8892], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['PowerPush', 30, 32, 1.0656, 90, 33, 36, 1.332, 'Energy', 70, 2.066, 0.734, 'primary', ['blaster', 'corruptor', 'defender'], 8.0, [0.196, 0.022], ['Smashing_Dmg', "Energy_Dmg"], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['BlazingBolt', 22, 24, 0.7992, 450, 50, 52, 1.8648, 'Fire', 80, 0.999, -0.866, 'primary', ['blaster', 'corruptor', 'defender'], 12, [2.049], ['Fire_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['Blaze', 16, 16, 0.5328, 90, 30, 32, 1.1988, 'Fire', 80, 1.533, 0.334, 'primary', ['blaster', 'corruptor', 'defender'], 10, [1.5002], ['Fire_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['FreezeRay', 17, 20, 0.666, 90, 30, 32, 1.1988, 'Ice', 60, 1.666, 0.467, 'primary', ['blaster', 'corruptor', 'defender'], 10, ['tick', 0.2, 2, 0.2], ['Cold_Dmg'], [
    "Blaster Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['BitterIceBlast', 17, 20, 0.666, 84, 32, 32, 1.1988, 'Ice', 80, 1.737, 0.539, 'primary', ['blaster', 'corruptor', 'defender'], 12, [1.6292], ['Cold_Dmg'], [
    "Accurate To-Hit Debuff",
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Slow Movement",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ['IceBlast', 17, 20, 0.666, 60, 50, 52, 1.8648, 'Ice', 80, 2.166, 0.301, 'primary', ['blaster', 'corruptor', 'defender'], 8.0, [1.8892], ['Cold_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ['BitterFreezeRay', 69, 72, 2.3976, 90, 75, 76, 2.664, 'Ice', 80, 3.398, 0.734, 'primary', ['blaster', 'corruptor', 'defender'], 15, [2.7501], ['Cold_Dmg'], [
    "Blaster Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ['PsionicLance', 40, 40, 1.332, 105, 40, 40, 1.4652, 'Psy', 100, 2.189, 0.724, 'primary', ['blaster', 'corruptor', 'defender'], 12, [1.811], ['Psionic_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['TelekineticBlast', 15, 16, 0.5328, 120, 30, 32, 1.1988, 'Psy', 100, 1.283, 0.084, 'primary', ['blaster', 'corruptor', 'defender'], 10, [1.5002], ['Psionic_Dmg'], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['MentalBlast', 25, 28, 0.9324, 51, 50, 52, 1.8648, 'Psy', 100, 2.697, 0.832, 'primary', ['blaster', 'corruptor', 'defender'], 8.0, [1.8892], ['Psionic_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['PsionicDart', 25, 28, 0.9324, 51, 30, 32, 1.1988, 'Psy', 100, 2.697, 1.498, 'primary', ['blaster', 'corruptor', 'defender'], 4.0, [1.2602], ['Psionic_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['WillDomination', 50, 52, 1.7316, 51, 33, 36, 1.332, 'Psy', 100, 3.496, 2.164, 'primary', ['blaster', 'corruptor', 'defender'], 20, [1.9703], ['Psionic_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Sleep",
    "Universal Damage Sets"
  ]],
  ['XRayBeam', 32, 32, 1.0656, 999999999, 50, 52, 1.8648, 'RadBlast', 80, 1.066, -0.799, 'primary', ['blaster', 'corruptor', 'defender'], 8.0, [1.8892], ['Energy_Dmg'], [
    "Accurate Defense Debuff",
    "Blaster Archetype Sets",
    "Defense Debuff",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['NeutrinoBolt', 17, 20, 0.666, 105, 30, 32, 1.1988, 'RadBlast', 80, 1.523, 0.324, 'primary', ['blaster', 'corruptor', 'defender'], 4.0, [1.2602], ['Energy_Dmg'], [
    "Accurate Defense Debuff",
    "Blaster Archetype Sets",
    "Defense Debuff",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Cosmic', 35, 36, 1.1988, 75, 62, 64, 2.2644, 'RadBlast', 80, 2.399, 0.134, 'primary', ['blaster', 'corruptor', 'defender'], 10, [2.2493], ['Energy_Dmg'], [
    "Accurate Defense Debuff",
    "Blaster Archetype Sets",
    "Defense Debuff",
    "Ranged Damage",
    "Stuns",
    "Universal Damage Sets"
  ]],
  ['Proton', 25, 28, 0.9324, 60, 40, 40, 1.4652, 'RadBlast', 80, 2.432, 0.967, 'primary', ['blaster', 'corruptor', 'defender'], 12, ['tick', 0.4527, 1.6, 0.5], ['Energy_Dmg'], [
    "Accurate Defense Debuff",
    "Blaster Archetype Sets",
    "Defense Debuff",
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['Screech', 24, 24, 0.7992, 999999999, 45, 48, 1.7316, 'Sonic', 60, 0.799, -0.932, 'primary', ['blaster', 'corruptor', 'defender'], 20, [0.0813], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Stuns",
    "Universal Damage Sets"
  ]],
  ['Shriek', 28, 28, 0.9324, 105, 30, 32, 1.1988, 'Sonic', 80, 1.790, 0.591, 'primary', ['blaster', 'corruptor', 'defender'], 3.0, [1.2202], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Scream', 25, 28, 0.9324, 84, 50, 52, 1.8648, 'Sonic', 80, 2.004, 0.139, 'primary', ['blaster', 'corruptor', 'defender'], 6.0, ['tick', 0.3618, 1.05, 0.25], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Shout', 45, 48, 1.5984, 84, 80, 80, 2.7972, 'Sonic', 80, 2.670, -0.127, 'primary', ['blaster', 'corruptor', 'defender'], 11, [2.7094], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['WaterJetNormal', 11, 12, 0.3996, 999999999, 43, 44, 1.5984, 'Water', 80, 0.400, -1.199, 'primary', ['blaster', 'corruptor', 'defender'], 10, [0.4503, 1.3509], ['Smashing_Dmg', "Cold_Dmg"], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ['WaterJetFast', 9, 12, 0.3996, 999999999, 30, 32, 1.1988, 'Water', 80, 0.400, -0.799, 'primary', ['blaster', 'corruptor', 'defender'], 10, [0.4503, 1.3509], ['Smashing_Dmg', "Cold_Dmg"], [
    "Blaster Archetype Sets",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ['HydroBlast', 35, 36, 1.1988, 75, 50, 52, 1.8648, 'Water', 80, 2.399, 0.534, 'primary', ['blaster', 'corruptor', 'defender'], 7.0, [0.4623, 1.3869], ['Smashing_Dmg', "Cold_Dmg"], [
    "Blaster Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ['Dehydrate', 16, 16, 0.5328, 999999999, 56, 56, 1.998, 'Water', 80, 0.533, -1.465, 'primary', ['blaster', 'corruptor', 'defender'], 8.0, [0.5073, 1.5219], ['Smashing_Dmg', "Cold_Dmg"], [
    "Accurate Defense Debuff",
    "Accurate Healing",
    "Blaster Archetype Sets",
    "Defense Debuff",
    "Healing",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ['EchoChamber', 17, 20, 0.666, 60, 50, 52, 1.8648, 'SonicManip', 60, 2.166, 0.301, 'secondary', ['blaster'], 16 , [1.729], ['Energy_Dmg'], [
    "Blaster Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['ChokingPowder', 23, 24, 0.7992, 51, 32, 32, 1.1988, 'Ninja', 60, 2.564, 1.365, 'secondary', ['blaster'], 16 , ['tick', 0.1348, 4.2, 1], ['Toxic_Dmg'],[
    "Blaster Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['IceArrow', 25, 28, 0.9324, 210, 50, 52, 1.8648, 'TactArrow', 60, 1.361, -0.504, 'secondary', ['blaster'], 16 , [0], ['Smashing_Dmg'],[
    "Blaster Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ["ElecNetArrow", 25, 28, 0.9324, 180, 30, 32, 1.1988, "TactArrow", 60, 1.432, 0.234, 'secondary', ['blaster'], 4.0 , ['tick', 0.252,9.2,2 ], ['Energy_Dmg'],[
    "Blaster Archetype Sets",
    "Immobilize",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ['Strangler', 16, 16, 0.5328, 999999999, 62, 64, 2.2644, 'Plant', 60, 0.533, -1.732, 'secondary', ['blaster'], 16 , ['tick', 0.4979, 4.2 ,1], ['Smashing_Dmg'],[
    "Blaster Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["TimeWall", 13, 16, 0.5328, 999999999, 48, 48, 1.7316, "Temporal", 60, 0.533, -1.199, 'secondary', ['blaster'], 4.0 , [1.68], ['Energy_Dmg'],[
    "Blaster Archetype Sets",
    "Immobilize",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ["DarkGrasp", 30, 32, 1.0656, 999999999, 50, 52, 1.8648, "DarkControl", 80, 1.066, - 0.799, 'primary', ['controller', 'dom'], 8.0 , [1.8891], ['Negative_Energy_Dmg'],[
    "Accurate To-Hit Debuff",
    "Dominator Archetype Sets",
    "Holds",
    "Ranged Damage",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ["Fossilize", 16, 16, 0.5328, 999999999, 62, 64, 2.2644, "EarthControl", 80, 0.533, -1.732, 'primary', ['controller', 'dom'], 8.0 , [2.1691], ['Smashing_Dmg'],[
    "Dominator Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["TeslaCageEC", 29, 32, 1.0656, 999999999, 65, 68, 2.3976, "ElecControl", 80, 1.066, - 1.332, 'primary', ['controller', 'dom'], 8.0 , [2.2391], ['Smashing_Dmg'],[
    "Dominator Archetype Sets",
    "Endurance Modification",
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['CharFC', 23, 24, 0.7992, 51, 32, 32, 1.1988, 'FireControl', 80, 2.564, 1.365, 'primary', ['controller', 'dom'], 8, ['tick', 0.2938, 4.2, 1], ['Fire_Dmg'],[
    "Dominator Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["LiftDom", 22, 24, 0.7992, 999999999, 31, 32, 1.1988, "GravControl", 80, 0.799, -0.400, 'primary', ['dom'], 6.0 , [1.361], ['Smashing_Dmg'],[
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["Lift", 82, 84, 2.7972, 999999999, 31, 32, 1.1988, "GravControl", 80, 0.799, -0.400, 'primary', ['controller'], 6.0 , [1.361], ['Smashing_Dmg'],[
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["GravityDistortion", 37, 40, 1.332, 999999999, 55, 56, 1.998, "GravControl", 80, 1.332, -0.666, 'primary', ['controller', 'dom'], 8.0 , ['tick', 0.4002, 4.2 ,1], ['Smashing_Dmg'],[
    "Dominator Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ["BlockOfIce", 21, 24, 0.7992, 999999999, 56, 56, 1.998, "IceControl", 80, 0.799, -1.199, 'primary', ['controller', 'dom'], 8.0 , [2.0291], ['Cold_Dmg'], [
    "Dominator Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ["Blind", 20, 20, 0.666, 999999999, 50, 52, 1.8648, "IllControl", 80, 0.666, -1.199, 'primary', ['controller'], 9.0 , [1.9291], ['Psionic_Dmg'],[
    "Controller Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Sleep",
    "Universal Damage Sets"
  ]],
  ["Mesmerize", 20, 20, 0.666, 999999999, 50, 52, 1.8648, "MindControl", 100, 0.666, -1.199, 'primary', ['controller', 'dom'], 6.0 , [1.8091], ['Psionic_Dmg'],[
    "Dominator Archetype Sets",
    "Ranged Damage",
    "Sleep",
    "Universal Damage Sets"
  ]],
  ["Levitate", 20, 20, 0.666, 999999999, 56, 56, 1.998, "MindControl", 80, 0.666, -1.332, 'primary', ['controller', 'dom'], 6.0 , [1.9491], ['Smashing_Dmg'],[
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["DominateMC", 20, 20, 0.666, 999999999, 33, 36, 1.332, "MindControl", 80, 0.666, -0.666, 'primary', ['controller', 'dom'], 8.0 , [1.49], ['Psionic_Dmg'],[
    "Dominator Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["StranglerPC", 16, 16, 0.5328, 999999999, 62, 64, 2.2644, "PlantControl", 80, 0.533, -1.732, 'primary', ['controller', 'dom'], 8.0 , ['tick', 0.4338, 4.2, 1], ['Smashing_Dmg'],[
    "Dominator Archetype Sets",
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['LifeDrain', 25, 28, 0.9324, 999999999, 58, 60, 2.1312, 'DarkAssault', 60, 0.932, -1.199, 'secondary', ['dom'], 8.0 , [1.7701], ['Negative_Energy_Dmg'],[
    "Accurate Healing",
    "Accurate To-Hit Debuff",
    "Healing",
    "Ranged Damage",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ['Gloom', 25, 28, 0.9324, 90, 50, 52, 1.8648, 'DarkAssault', 80, 1.932, 0.068, 'secondary', ['dom'], 8.0 , ['tick', 0.1863, 3.6 ,0.5], ['Negative_Energy_Dmg'],[
    "Accurate To-Hit Debuff",
    "Ranged Damage",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ['Moon', 28, 28, 0.9324, 90, 40, 40, 1.4652, 'DarkAssault', 80, 1.932, 0.467, 'secondary', ['dom'], 20 , [2.131], ['Negative_Energy_Dmg'],[
    "Accurate To-Hit Debuff",
    "Ranged Damage",
    "Sniper Attacks",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ["Hurl Boulder", 50, 52, 1.7316, 54, 45, 48, 1.7316, "EarthAssault", 80, 3.398, 1.667, 'secondary', ['dom'], 12 , [1.9301], ['Smashing_Dmg'],[
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["Stone Spears", 20, 20, 0.666, 999999999, 30, 32, 1.1988, "EarthAssault", 80, 0.666, -0.533, 'secondary', ['dom'], 4.0 , [1.2601], ['Lethal_Dmg'],[
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Charged Bolts', 16, 16, 0.5328, 999999999, 30, 32, 1.1988, 'ElecAssault', 80, 0.533, -0.666, 'secondary', ['dom'], 4.0 , [1.26], ['Energy_Dmg'],[
    "Endurance Modification",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Lightning Bolt', 26, 28, 0.9324, 999999999, 50, 52, 1.8648, 'ElecAssault', 80, 0.932, -0.932, 'secondary', ['dom'], 8.0 , [1.8891], ['Energy_Dmg'],[
    "Endurance Modification",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Zapp', 28, 28, 0.9324, 999999999, 40, 40, 1.4652, 'ElecAssault', 80, 0.932, -0.533, 'secondary', ['dom'], 20 , [2.131], ['Energy_Dmg'],[
    "Endurance Modification",
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['Power Bolt', 25, 28, 0.9324, 90, 30, 32, 1.1988, 'EnergyAssault', 80, 1.932, 0.734, 'secondary', ['dom'], 4.0 , [0.504, 0.756], ['Smashing_Dmg', "Energy_Dmg"],[
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Power Blast', 30, 32, 1.0656, 90, 50, 52, 1.8648, 'EnergyAssault', 80, 2.066, 0.201, 'secondary', ['dom'], 10 , [0.4923, 1.4768], ['Smashing_Dmg', "Energy_Dmg"],[
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Sniper Blast', 28, 28, 0.9324, 210, 40, 40, 1.4652, 'EnergyAssault', 80, 1.361, -0.104, 'secondary', ['dom'], 20 , [0.6393, 1.4917], ['Smashing_Dmg', "Energy_Dmg"],[
    "Knockback",
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['Power Push', 30, 32, 1.0656, 90, 33, 36, 1.332, 'EnergyAssault', 70, 2.066, 0.734, 'secondary', ['dom'], 8.0 , [0.596, 0.894], ['Smashing_Dmg', 'Energy_Dmg'],[
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Blazing Bolt', 22, 24, 0.7992, 450, 50, 52, 1.8648, 'FireAssault', 80, 0.999, -0.866, 'secondary', ['dom'], 20 , [2.369], ['Fire_Dmg'],[
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['Blaze', 16, 16, 0.5328, 90, 30, 32, 1.1988, 'FireAssault', 80, 1.533, 0.334, 'secondary', ['dom'], 12 , [1.58], ['Fire_Dmg'],[
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Bitter Ice Blast', 17, 20, 0.666, 84, 32, 32, 1.1988, 'IceAssault', 80, 1.737, 0.539, 'secondary', ['dom'], 12 , [0.7005, 0.9286], ['Smashing_Dmg', "Cold_Dmg"],[
    "Accurate To-Hit Debuff",
    "Ranged Damage",
    "Slow Movement",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ['Ice Blast', 17, 20, 0.666, 60, 50, 52, 1.8648, 'IceAssault', 80, 2.166, 0.301, 'secondary', ['dom'], 6.0 , [0.335, 1.005], ['Smashing_Dmg', "Cold_Dmg"],[
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ["Masterful Throw", 18, 20, 0.666, 80, 40, 40, 1.4652, "MartialAssault", 80, 1.791, 0.326, 'secondary', ['dom'], 20 , [2.131], ['Lethal_Dmg'],[
    "Accurate To-Hit Debuff",
    "Ranged Damage",
    "Sniper Attacks",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ["Trick Shot", 19, 20, 0.666, 45, 32, 32, 1.1988, "MartialAssault", 70, 2.666, 1.467, 'secondary', ['dom'], 10 , [1.4], ['Lethal_Dmg'],[
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["Shuriken Throw", 10, 12, 0.3996, 45, 30, 32, 1.1988, "MartialAssault", 80, 2.400, 1.201, 'secondary', ['dom'], 4.0 , [1.26], ['Lethal_Dmg'],[
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Subdue', 20, 20, 0.666, 51, 50, 52, 1.8648, 'PsyAssault', 100, 2.431, 0.566, 'secondary', ['dom'], 8.0 , [1.9076], ['Psionic_Dmg'],[
    "Dominator Archetype Sets",
    "Immobilize",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Mental Blast', 25, 28, 0.9324, 51, 50, 52, 1.8648, 'PsyAssault', 100, 2.697, 0.832, 'secondary', ['dom'], 8.0 , [1.8891], ['Psionic_Dmg'],[
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Psionic Lance', 40, 40, 1.332, 105, 40, 40, 1.4652, 'PsyAssault', 100, 2.189, 0.724, 'secondary', ['dom'], 20 , [2.131], ['Psionic_Dmg'],[
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['Psionic Dart', 25, 28, 0.9324, 51, 30, 32, 1.1988, 'PsyAssault', 100, 2.697, 1.498, 'secondary', ['dom'], 3.0 , [1.101], ['Psionic_Dmg'],[
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['XRay Beam', 32, 32, 1.0656, 999999999, 50, 52, 1.8648, 'RadAssault', 80, 1.066, -0.799, 'secondary', ['dom'], 11 , [2.0116], ['Energy_Dmg'],[
    "Accurate Defense Debuff",
    "Defense Debuff",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Proton Volley', 25, 28, 0.9324, 60, 40, 40, 1.4652, 'RadAssault', 80, 2.432, 0.967, 'secondary', ['dom'], 20 , ['tick', 0.5327, 1.6, 0.5], ['Energy_Dmg'],[
    "Accurate Defense Debuff",
    "Defense Debuff",
    "Ranged Damage",
    "Sniper Attacks",
    "Universal Damage Sets"
  ]],
  ['Neutrino Bolt', 17, 20, 0.666, 105, 30, 32, 1.1988, 'RadAssault', 80, 1.523, 0.324, 'secondary', ['dom'], 4.0 , [1.2572], ['Energy_Dmg'],[
    "Accurate Defense Debuff",
    "Defense Debuff",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["CallHawk", 20, 20, 0.666, 60, 50, 52, 1.8648, "SavageAssault", 80, 2.166, 0.301, 'secondary', ['dom'], 14 , ['tick', 0.4683, 1.3, 0.3], ['Lethal_Dmg'],[
    "Accurate To-Hit Debuff",
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["CallSwarm", 22, 24, 0.7992, 60, 30, 32, 1.1988, "SavageAssault", 80, 2.299, 1.100, 'secondary', ['dom'], 4.0 , ['tick', 0.2522, 3.1, 0.75], ['Lethal_Dmg'],[
    "Accurate Defense Debuff",
    "Defense Debuff",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ["Impale", 43, 44, 1.4652, 114, 43, 44, 1.5984, "ThornyAssault", 80, 2.255, 0.656, 'secondary', ['dom'], 10 , [1.4748], ['Lethal_Dmg'],[
    "Accurate Defense Debuff",
    "Defense Debuff",
    "Dominator Archetype Sets",
    "Immobilize",
    "Ranged Damage",
    "Slow Movement",
    "Universal Damage Sets"
  ]],
  ["ThornyDarts", 15, 16, 0.5328, 114, 40, 40, 1.4652, "ThornyAssault", 80, 1.322, -0.143, 'secondary', ['dom'], 4.0 , [1.7733], ['Lethal_Dmg'],[
    "Accurate Defense Debuff",
    "Defense Debuff",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["SoulStorm", 45, 48, 1.5984, 52.5, 65, 68, 2.3976, "Soul", 80, 3.313, 0.915, 'epic', ['blaster', 'defender', 'corruptor'], 32 , ['tick', 0.2908, 10, 1], ['Negative_Energy_Dmg'],[
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Char', 23, 24, 0.7992, 51, 32, 32, 1.1988, 'Fire Mastery', 80, 2.564, 1.365, 'epic', ['blaster', 'corruptor', 'defender'], 16 , ['tick', 0.2982, 4.2, 1], ['Fire_Dmg'],[
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["ElecShackles", 29, 32, 1.0656, 999999999, 65, 68, 2.3976, "Mu", 60, 1.066, -1.332, 'epic', ['blaster', 'defender', 'corruptor'], 32 , ['tick', 0.3999, 6.3, 1], ['Energy_Dmg'],[
    "Endurance Modification",
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['ShockingBolt', 26, 28, 0.9324, 999999999, 60, 60, 2.1312, 'Elec Mastery', 80, 0.932, -1.199, 'epic', ['blaster'], 16 , ['tick', 0.4067, 4.2, 1], ['Energy_Dmg'],[
    "Endurance Modification",
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Surveillance', 25, 28, 0.9324, 999999999, 45, 48, 1.7316, 'Munitions', 80, 0.932, -0.799, 'epic', ['blaster'], 45 , [0], ['Energy_Dmg'],[
    "Accurate Defense Debuff",
    "Defense Debuff"
  ]],
  ['SpiritSharkJaws', 21, 24, 0.7992, 999999999, 56, 56, 1.998, 'Leviathan', 80, 0.799, -1.199, 'epic', ['blaster', 'defender', 'corruptor'], 32 , [0.5978, 'tick', 0.2657, 7.1,1], ['Lethal_Dmg'],[
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Dominate', 20, 20, 0.666, 999999999, 33, 36, 1.332, 'Psy Mastery', 80, 0.666, -0.666, 'epic', ['corruptor', 'defender'], 16 , [1.81], ['Psionic_Dmg'],[
    "Holds",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Poisonous Ray', 41, 44, 1.4652, 66, 60, 60, 2.1312, 'Mace', 80, 2.829, 0.698, 'epic', ['controller', 'dom'], 24 , [1.38, 'tick', 0.1255, 9.3,1], ['Energy_Dmg'],[
    "Accurate Defense Debuff",
    "Defense Debuff",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ["ParalyticPoison", 31, 32, 1.0656, 66, 60, 60, 2.1312, "Poison", 70, 2.429, 0.298, 'secondary', ['defender', 'corruptor', 'controller'], 16 , [0], ['Energy_Dmg'],[
    "Holds"
  ]],
  ["Weaken", 25, 28, 0.9324, 66, 62, 64, 2.2644, "Poison", 70, 2.296, 0.032, 'secondary', ['defender', 'corruptor', 'controller'], 16 , [0], ['Energy_Dmg'],[
    "Accurate To-Hit Debuff",
    "To Hit Debuff"
  ]],
  ["EF", 45, 48, 1.5984, 999999999, 45, 48, 1.7316, "RadEmission", 70, 1.598, - 0.133, 'secondary', ['defender', 'corruptor', 'controller'], 8.0 , [0], ['Energy_Dmg'],[]],
  ["Corrosive", 19, 20, 0.666, 90, 30, 32, 1.1988, "Nature", 80, 1.666, 0.467, 'secondary', ['defender', 'corruptor', 'controller'], 16, [0], ['Energy_Dmg'],[]],
  ["Envenom", 25, 28, 0.9324, 66, 40, 40, 1.4652, "Poison", 70, 2.296, 0.831, 'secondary', ['defender', 'corruptor', 'controller'], 12 , [0], ['Energy_Dmg'],[
    "Accurate Defense Debuff",
    "Defense Debuff"
  ]],
  ['Infrigidate', 18, 20, 0.666, 39, 30, 32, 1.1988, 'Cold', 80, 2.974, 1.775, 'secondary', ['controller', 'corruptor', 'defender'], 15 , [0], ['Energy_Dmg'],[
    "Accurate Defense Debuff",
    "Defense Debuff",
    "Slow Movement"
  ]],
  ['Heat Loss', 29, 32, 1.0656, 999999999, 65, 68, 2.3976, "Cold", 70, 1.066, -1.332, 'secondary', ['controller', 'corruptor', 'defender'], 360 , [0], ['Energy_Dmg'],[
    "Endurance Modification",
    "Slow Movement"
  ]],
  ['Petrifying Gaze', 30, 32, 1.0656, 45, 50, 52, 1.8648, "DarkMiasma", 70, 3.066, 1.201, 'secondary', ['controller', 'corruptor', 'defender'], 16 , [0], ['Energy_Dmg'],[
    "Holds"
  ]],
  ['Shock', 26, 28, 0.9324, 999999999, 60, 60, 2.1312, "ElecAffinity", 80, 0.932, -1.199, 'secondary', ['controller', 'corruptor', 'defender'], 12 , [0], ['Energy_Dmg'],[
    "Endurance Modification"
  ]],
  ['Insulating Circuit', 22, 24, 0.7992, 999999999, 30, 32, 1.1988, "ElecAffinity", 80, 0.799, -0.400, 'secondary', ['controller', 'corruptor', 'defender'], 20 , [0], ['Energy_Dmg'],[
    "Healing"
  ]],
  ['Rejuvenating Circuit', 23, 24, 0.7992, 999999999, 35, 36, 1.332, "ElecAffinity", 80, 0.799, -0.533, 'secondary', ['controller', 'corruptor', 'defender'], 8.0 , [0], ['Energy_Dmg'],[
    "Healing"
  ]],
  ['Healing Aura', 23, 24, 0.7992, 999999999, 61, 64, 2.2644, "Empathy", 0, 0.799, -1.465, 'secondary', ['controller', 'corruptor', 'defender'], 8.0 , [0], ['Energy_Dmg'],[
    "Healing"
  ]],
  ['Heal Other', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Empathy", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender'], 4.0 , [0], ['Energy_Dmg'],[
    "Healing"
  ]],
  ['Absorb Pain', 43, 44, 1.4652, 999999999, 68, 68, 2.3976, "Empathy", 80, 1.465, -0.932, 'secondary', ['controller', 'corruptor', 'defender'], 15 , [0], ['Energy_Dmg'],[
    "Healing"
  ]],
  ['Clear Mind', 15, 16, 0.5328, 999999999, 30, 32, 1.1988, "Empathy", 70, 0.533, -0.666, 'secondary', ['controller', 'corruptor', 'defender'], 4.0 , [0], ['Energy_Dmg'],[]],
  ['Fortitude', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Empathy", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender'], 60 , [0], ['Energy_Dmg'],[
    "Defense Sets",
    "To Hit Buff"
  ]],
  ['Force Bolt', 20, 20, 0.666, 120, 33, 36, 1.332, "ForceField", 80, 1.416, 0.084, 'secondary', ['controller', 'corruptor', 'defender'], 4.0 , [0.2], ['Smashing_Dmg'],[
    "Defender Archetype Sets",
    "Knockback",
    "Ranged Damage",
    "Universal Damage Sets"
  ]],
  ['Dark Grasp Slow', 30, 32, 1.0656, 45, 50, 52, 1.8648, "DarkControl", 80, 3.066, 1.201, 'primary', ['controller', 'dom'], 8.0 , [1.8891], ['Negative_Energy_Dmg'],[
    "Accurate To-Hit Debuff",
    "Dominator Archetype Sets",
    "Holds",
    "Ranged Damage",
    "To Hit Debuff",
    "Universal Damage Sets"
  ]],
  ['Soothe', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Pain", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender'], 4.0 , [0], ['Energy_Dmg'],[
    "Healing"
  ]],
  ['Share Pain', 35, 36, 1.1988, 999999999, 68, 68, 2.3976, "Pain", 80, 1.199, -1.199, 'secondary', ['controller', 'corruptor', 'defender'], 15 , [0], ['Energy_Dmg'],[
    "Healing"
  ]],
  ['Enforced Morale', 15, 16, 0.5328, 999999999, 30, 32, 1.1988, "Pain", 70, 0.533, -0.666, 'secondary', ['controller', 'corruptor', 'defender'], 4.0 , [0], ['Energy_Dmg'],[]],
  ['Sonic Siphon', 35, 36, 1.1988, 90, 65, 68, 2.3976, "SonicRes", 80, 2.199, -0.199, 'secondary', ['controller', 'corruptor', 'defender'], 16 , [0], ['Energy_Dmg'],[]],
  ['Sonic Cage', 17, 20, 0.666, 60, 50, 52, 1.8648, "SonicRes", 80, 2.166, 0.301, 'secondary', ['controller', 'corruptor', 'defender'], 60 , [0], ['Energy_Dmg'],[]],
  ['Clarity', 30, 32, 1.0656, 999999999, 45, 48, 1.7316, "SonicRes", 70, 1.066, -0.666, 'secondary', ['controller', 'corruptor', 'defender'], 4.0, [0], ['Energy_Dmg'],[]],
  ['Gale', 59, 60, 1.998, 999999999, 65, 68, 2.3976, "Storm", 50, 1.998, -0.400, 'secondary', ['controller', 'corruptor', 'defender'], 8.0 , [0.1], ['Smashing_Dmg'],[
    "Defender Archetype Sets",
    "Knockback",
    "Ranged AoE Damage",
    "Universal Damage Sets"
  ]],
  ['O2 Boost', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Storm", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender'], 4.0 , [0], ['Energy_Dmg'],[
    "Healing"
  ]],
  ['Melt Armor', 25, 28, 0.9324, 999999999, 45, 48, 1.7316, "Thermal", 70, 0.932, -0.799, 'secondary', ['controller', 'corruptor', 'defender'], 150 , [0], ['Energy_Dmg'],[
    "Accurate Defense Debuff",
    "Defense Debuff"
  ]],
  ['Forge', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Thermal", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender'], 60 , [0], ['Energy_Dmg'],[
    "To Hit Buff"
  ]],
  ['Cauterize', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Thermal", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender'], 4.0 , [0], ['Energy_Dmg'],[
    "Healing"
  ]],
  ['Thaw', 29, 32, 1.0656, 999999999, 65, 68, 2.3976, "Thermal", 70, 1.066, -1.332, 'secondary', ['controller', 'corruptor', 'defender'], 4.0 , [0], ['Energy_Dmg'],[
    "Resist Damage"
  ]],
  ['Time Crawl', 13, 16, 0.5328, 999999999, 48, 48, 1.7316, "Time", 80, 0.533, -1.199, 'secondary', ['controller', 'corruptor', 'defender'], 15 , [0], ['Energy_Dmg'],[
    "Slow Movement"
  ]],
  ['Time Stop', 29, 32, 1.0656, 999999999, 65, 68, 2.3976, "Time", 70, 1.066, -1.332, 'secondary', ['controller', 'corruptor', 'defender'], 16 ,[0], ['Energy_Dmg'],[
    "Holds"
  ]],
  ['Slowed Response', 25, 28, 0.9324, 999999999, 68, 68, 2.3976, "Time", 80, 0.932, -1.465, 'secondary', ['controller', 'corruptor', 'defender'], 90 , [0], ['Energy_Dmg'],[
    "Accurate Defense Debuff",
    "Defense Debuff"
  ]],
  ['Web Grenade', 37, 40, 1.332, 90, 41, 44, 1.5984, "Traps", 70, 2.332, 0.734, 'secondary', ['controller', 'corruptor', 'defender'], 4.0 , [0], ['Energy_Dmg'],[
    "Immobilize"
  ]],
  ['Entangling Arrow', 25, 28, 0.9324, 180, 30, 32, 1.1988, "TrickArrow", 80, 1.432, 0.234, 'secondary', ['controller', 'corruptor', 'defender'], 4.0 , [0], ['Energy_Dmg'],[
    "Immobilize",
    "Slow Movement"
  ]],
  ['Ice Arrow TA', 25, 28, 0.9324, 210, 50, 52, 1.8648, "TrickArrow", 80, 1.361, -0.504, 'secondary', ['controller', 'corruptor', 'defender'], 18 , [0], ['Energy_Dmg'],[
    "Holds",
    "Slow Movement"
  ]],
  ['Acid Arrow', 48, 48, 1.5984, 210, 55, 56, 1.998, "TrickArrow", 80, 2.027, 0.029, 'secondary', ['controller', 'corruptor', 'defender'], 20 , ['tick', 0.01, 20, 1], ['Toxic_Dmg'],[
    "Accurate Defense Debuff",
    "Defender Archetype Sets",
    "Defense Debuff",
    "Ranged AoE Damage",
    "Universal Damage Sets"
  ]],
]

export default attacks