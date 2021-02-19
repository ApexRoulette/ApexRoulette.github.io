var legendEnabled = true;
var armorEnabled = true;
var medsEnabled = true;
var teamEnabled = true;
var legendRuleEnabled = true;
var specialEnabled = true;

var currentLegend;
var currentArmor;
var currentMeds;
var currentTeam;
var currentLegendRule;
var currentSpecial;

var causticEnabled = true;
var mirageEnabled = true;
var octaneEnabled = true;
var wattsonEnabled = true;
var cryptoEnabled = true;
var revenantEnabled = true;
var lobaEnabled = true;

var mapID = 1;

function toggleLegend() {
  if (legendEnabled) {
    document.getElementById("toggleLegend").style.backgroundImage = "url('images/disable/disabled.png')";
    legendEnabled = false;
  } else {
    document.getElementById("toggleLegend").style.backgroundImage = "url('images/disable/enabled.png')";
    legendEnabled = true;
  }
}
function showLegend() {
  document.getElementById("legend").innerHTML = "LEGEND";
  document.getElementById("legend").style.color = "yellow";
}
function revertLegend() {
  document.getElementById("legend").innerHTML = currentLegend;
  document.getElementById("legend").style.color = "#CCCCCC";
}
function randomizeLegend() {
  var player;
  var num = Math.floor(Math.random() * 16 + 1);

  switch(num) {
    case 1:
      player = "Bloodhound";
      break;
    case 2:
      player = "Gibraltar";
      break;
    case 3:
      player = "Lifeline";
      break;
    case 4:
      player = "Pathfinder";
      break;
    case 5:
      player = "Wraith";
      break;
    case 6:
      player = "Bangalore";
      break;
    case 7:
      player = "Caustic";
      break;
    case 8:
      player = "Mirage";
      break;
    case 9:
      player = "Octane";
      break;
    case 10:
      player = "Wattson";
      break;
    case 11:
      player = "Crypto";
      break;
    case 12:
      player = "Revenant";
      break;
    case 13:
      player = "Loba";
      break;
    case 14:
      player = "Rampart";
      break;
    case 15:
      player = "Horizon";
      break;
    case 16:
      player = "Fuse";
      break;
  }

  return player;
}
function changeLegend() {
  let player = randomizeLegend();
  currentLegend = player;
  document.getElementById("legend").innerHTML = player;
  changeLegendRule();
}

function toggleArmor() {
  if (armorEnabled) {
    document.getElementById("toggleArmor").style.backgroundImage = "url('images/disable/disabled.png')";
    armorEnabled = false;
  } else {
    document.getElementById("toggleArmor").style.backgroundImage = "url('images/disable/enabled.png')";
    armorEnabled = true;
  }
}
function showArmor() {
  document.getElementById("armor").innerHTML = "LOCATION";
  document.getElementById("armor").style.color = "yellow";
}
function revertArmor() {
  document.getElementById("armor").innerHTML = currentArmor;
  document.getElementById("armor").style.color = "#CCCCCC";

  console.log("reverting");
}
function randomizeArmor() {
  let armor;
  if (mapID == 0) {
    let max = 21;
    switch(Math.floor(Math.random() * max)) {
      case 0:
        armor = "Crash Site";
        break;
      case 1:
        armor = "Artillery";
        break;
      case 2:
        armor = "Spotted Lake";
        break;
      case 3:
        armor = "Runoff";
        break;
      case 4:
        armor = "Airbase";
        break;
      case 5:
        armor = "The Pit";
        break;
      case 6:
        armor = "Gauntlet";
        break;
      case 7:
        armor = "Mirage Voyage";
        break;
      case 8:
        armor = "Salvage";
        break;
      case 9:
        armor = "Water Treatment";
        break;
      case 10:
        armor = "Market";
        break;
      case 11:
        armor = "Repulsor";
        break;
      case 12:
        armor = "Swamps";
        break;
      case 13:
        armor = "Containement";
        break;
      case 14:
        armor = "Capacitor";
        break;
      case 15:
        armor = "Broken Relay";
        break;
      case 16:
        armor = "The Rig";
        break;
      case 17:
        armor = "Bunker";
        break;
      case 18:
        armor = "Hydro Dam";
        break;
      case 19:
        armor = "The Cage";
        break;
      case 20:
        armor = "Labs";
        break;
  }
} else if (mapID == 1) {
  let max = 16;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      armor = "Docks";
      break;
    case 1:
      armor = "Carrier";
      break;
    case 2:
      armor = "Oasis";
      break;
    case 3:
      armor = "Estates";
      break;
    case 4:
      armor = "Elysium";
      break;
    case 5:
      armor = "Hydroponics";
      break;
    case 6:
      armor = "Hammond Labs";
      break;
    case 7:
      armor = "Grow Towers";
      break;
    case 8:
      armor = "Gardens";
      break;
    case 9:
      armor = "Bonsai Plaza";
      break;
    case 10:
      armor = "Power Grid";
      break;
    case 11:
      armor = "Rift";
      break;
    case 12:
      armor = "Orbital Cannot";
      break;
    case 13:
      armor = "Solar Array";
      break;
    case 14:
      armor = "Turbine";
      break;
    case 15:
      armor = "Energy Depot";
      break;
    }
}

  currentArmor = armor;
  return armor;
}
function changeArmor() {
  document.getElementById("armor").innerHTML = randomizeArmor();
}

function toggleMeds() {
  if (medsEnabled) {
    document.getElementById("toggleMeds").style.backgroundImage = "url('images/disable/disabled.png')";
    medsEnabled = false;
  } else {
    document.getElementById("toggleMeds").style.backgroundImage = "url('images/disable/enabled.png')";
    medsEnabled = true;
  }
}
function showMeds() {
  document.getElementById("meds").innerHTML = "MEDS";
  document.getElementById("meds").style.color = "yellow";
  document.getElementById("meds").style.fontSize = 64;
  document.getElementById("meds").style.paddingTop = 12;
}
function revertMeds() {
  document.getElementById("meds").innerHTML = currentMeds;
  document.getElementById("meds").style.color = "#CCCCCC";
  document.getElementById("meds").style.fontSize = 40;
  document.getElementById("meds").style.paddingTop = 25;
}
function randomizeMeds() {
  let meds;
  let max = 16;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      meds = "Syringes";
      break;
    case 1:
      meds = "Med Kits";
      break;
    case 2:
      meds = "Shield Batteries";
      break;
    case 3:
      meds = "Shield Cells";
      break;
    case 4:
      meds = "Phoenix Kits";
      break;
    case 5:
      meds = "Syringes and Shield Cells";
      break;
    case 6:
      meds = "Syringes and Med Kits";
      break;
    case 7:
      meds = "Syringes and Shield Batteries";
      break;
    case 8:
      meds = "Syringes and Phoenix Kits";
      break;
    case 9:
      meds = "Shield Cells and Med Kits";
      break;
    case 10:
      meds = "Shield Cells and Shield Batteries";
      break;
    case 11:
      meds = "Shield Cells and Phoenix Kits";
      break;
    case 12:
      meds = "Med Kits and Shield Batteries";
      break;
    case 13:
      meds = "Med Kits and Phoenix Kits";
      break;
    case 14:
      meds = "Shield Batteries and Phoenix Kits";
      break;
    case 15:
      meds = "None";
      break;
  }

  currentMeds = meds;
  return meds;
}
function changeMeds() {
  document.getElementById("meds").innerHTML = randomizeMeds();
}

function toggleTeam() {
  if (teamEnabled) {
    document.getElementById("toggleTeam").style.backgroundImage = "url('images/disable/disabled.png')";
    teamEnabled = false;
  } else {
    document.getElementById("toggleTeam").style.backgroundImage = "url('images/disable/enabled.png')";
    teamEnabled = true;
  }
}
function showTeam() {
  document.getElementById("team").innerHTML = "TEAM RULE";
  document.getElementById("team").style.color = "yellow";
  document.getElementById("team").style.fontSize = 64;
  document.getElementById("team").style.paddingTop = 12;
}
function revertTeam() {
  document.getElementById("team").innerHTML = currentTeam;
  document.getElementById("team").style.color = "#CCCCCC";
  document.getElementById("team").style.fontSize = 20;
  document.getElementById("team").style.paddingTop = 35;
}
function randomizeTeam() {
  let max = 16;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Life or Death - No reviving downed players without a Respawn Beacon";
      break;
    case 1:
      rule = "Lone Wolf - Land far away from one another and do not meet up before the first ring closes";
      break;
    case 2:
      rule = "Together, Ape Strong - No splitting up, not even to loot";
      break;
    case 3:
      rule = "Glory For All - Team must charge into all combat without retreat";
      break;
    case 4:
      rule = "Boxing Match - If your team finds a downed enemy, they must all punch them to death";
      break;
    case 5:
      rule = "Looter - You are the only person allowed to loot on your team";
      break;
    case 6:
      rule = "Combo - Whole team must use tacticals or ults at the same time";
      break;
    case 7:
      rule = "Synergy - All players must have one of the same gun";
      break
    case 8:
      rule = "Special Coms - One player talks with pings, one with text, and one with voice chat";
      break;
    case 9:
      rule = "Bias - All teammates must pick one person to protect over their own life";
      break;
    case 10:
      rule = "Medical Experts - Each team member can only pick one type of med";
      break;
    case 11:
      rule = "Teamwork - No one can heal their own shield, only teammates";
      break;
    case 12:
      rule = "Separation Blitz - No two people can have their abilities in use at the same time";
      break;
    case 13:
      rule = "Simon Says - Team members must do anything the other team members tell them";
      break;
    case 14:
      rule = "Hot Swap - You can only use loadouts that one of your other teammates would use";
      break;
    case 15:
      rule = "Ammo Experts - Team members cannot use the same ammo types as each other";
      break;
  }

  currentTeam = rule;
  return rule;
}
function changeTeam() {
  document.getElementById("team").innerHTML = randomizeTeam();
}

function toggleLegendRule() {
  if (legendRuleEnabled) {
    document.getElementById("toggleLegendRule").style.backgroundImage = "url('images/disable/disabled.png')";
    legendRuleEnabled = false;
  } else {
    document.getElementById("toggleLegendRule").style.backgroundImage = "url('images/disable/enabled.png')";
    legendRuleEnabled = true;
  }
}
function showLegendRule() {
  document.getElementById("legendRule").innerHTML = "LEGEND RULE";
  document.getElementById("legendRule").style.color = "yellow";
  document.getElementById("legendRule").style.fontSize = 64;
  document.getElementById("legendRule").style.paddingTop = 12;
}
function revertLegendRule() {
  document.getElementById("legendRule").innerHTML = currentLegendRule;
  document.getElementById("legendRule").style.color = "#CCCCCC";
  document.getElementById("legendRule").style.fontSize = 20;
  document.getElementById("legendRule").style.paddingTop = 35;
}
function changeLegendRule() {
  document.getElementById("legendRule").innerHTML = eval("randomize" + currentLegend + "()");
}

function randomizeBloodhound() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Reconnaissance - You may only shoot someone you have scanned";
      break;
    case 1:
      rule = "Expert Tracker - If you see tracks you must follow them immediately and use your ultimate";
      break;
    case 2:
      rule = "Tactically Inefficient - You can only ult when you see footprints, and NOT when you see people";
      break;
    case 3:
      rule = "Selfish Tracker - You cannot call out any footprints you see";
      break;
    case 4:
      rule = "Fair Fight - If you are fighting a bloodhound, you can only scan him if he scans you first, and you can only ult if he ults";
      break;
    case 5:
      rule = "Extreme Analysis - You must always look directly down unless in a fight";
      break;
    case 6:
      rule = "Strange Habits - You must shoot a single bullet at every footprint you see";
      break;
    case 7:
      rule = "The Choice - You cannot scan people you have ulted, and you cannot use your ult on people you have scanned";
      break;
    case 8:
      rule = "Ultimate Regression - You can only move backwards and sideways while in your ult";
      break;
    case 9:
      rule = "Paranoid - You must ult instantly if you are shot";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeGibraltar() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Patience for Protection - You may only shoot when your arm shield is up";
      break;
    case 1:
      rule = "Too Good - You may not enter your own bubble shield, only your teammates can";
      break;
    case 2:
      rule = "Only Fair - You must take damage from your ult whenever you use it";
      break;
    case 3:
      rule = "Fragile - You may not shoot when your arm shield is up";
      break;
    case 4:
      rule = "Stealthy Massacre - You can only ult on people who have not yet seen you";
      break;
    case 5:
      rule = "Tank - You must always be in front of your teammates when in a fight";
      break;
    case 6:
      rule = "The Best Defense is a Good Offense - You can only use your bubble shield on enemies";
      break;
    case 7:
      rule = "Shield Sheild Sheild - You can only carry shield meds";
      break;
    case 8:
      rule = "Fat - You cannot walk through any doors unless forced by ring";
      break;
    case 9:
      rule = "GIBBY - You cannot wear a shirt";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeLifeline() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Forced Revive - You must revive all teammates immediately";
      break;
    case 1:
      rule = "Selfless - You may not loot your packages or heal yourself with your DOC drone";
      break;
    case 2:
      rule = "First Things First - You cannot heal yourself with your DOC drone unless your shield is completely full";
      break;
    case 3:
      rule = "Double the Loot - You can only drop your care package right next to a natural and unlooted one";
      break;
    case 4:
      rule = "Snails Pace - You cannot use ultimate accelerants";
      break;
    case 5:
      rule = "Always Ready - You cannot use your ult unless you have enough ultimate accelerants to use it again immediately";
      break;
    case 6:
      rule = "Lifesaver - You cannot revive unless both of your teammates are downed";
      break;
    case 7:
      rule = "Masterbaiter - You can only use your care packages as bate, you cannot open them";
      break;
    case 8:
      rule = "No Wasting - You must pick up everything from your care packages and you cannot drop any of it ever";
      break;
    case 9:
      rule = "Manmade Protection - You can only revive teammates when there is no cover around them and they are outside";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizePathfinder() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "No Thanks, Im Mobile - You may not ride your own ziplines, only your teammates can";
      break;
    case 1:
      rule = "Ive Got My Own - You cannot ride any naturally spawning ziplines";
      break;
    case 2:
      rule = "Surveyer - You must find the location of the next cirlce if a survey beacon is in the circle";
      break;
    case 3:
      rule = "All or Nothing - You can only grapple if you have a gold helmet";
      break;
    case 4:
      rule = "The Floor is Lava - You cannot touch the outside floor unless forced to by ring, inside floors are okay";
      break;
    case 5:
      rule = "Talkative - You must spam quotes constantly if you or anyone else hears footsteps";
      break;
    case 6:
      rule = "Selective - You can only grapple floors and ceilings, not floors";
      break;
    case 7:
      rule = "Mobile - You cannot holster your weapons";
      break;
    case 8:
      rule = "Single Fire - You must reload after every shot";
      break;
    case 9:
      rule = "Inefficient - You can only make extremely tiny ziplines";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeWraith() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Seperate Lives - You cannot use your tactical and ultimate at the same time";
      break;
    case 1:
      rule = "Panic Button - You must use your tactical whenever you are shot";
      break;
    case 2:
      rule = "Conservative - When ulting you can only use half the portal energy";
      break;
    case 3:
      rule = "Cocky - When your passive goes off, you cannot move until you get shot";
      break;
    case 4:
      rule = "Snails Pace - You can only crouch walk when using your abilities";
      break;
    case 5:
      rule = "Paranoid - You must shoot a full mag while spinning in circles as soon as your passive goes off";
      break;
    case 6:
      rule = "Selfless - You cannot use your own portals";
      break;
    case 7:
      rule = "Stoned - You can only walk backwards while your abilities are active";
      break;
    case 8:
      rule = "Sworn Sisters - You cannot shoot another Wraith";
      break;
    case 9:
      rule = "Squishy - You cannot push ever, you must keep your distance in fights as much as possible";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeBangalore() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Perfect Fit - You can only enter your smoke if you have a Digital Threat optic equipped";
      break;
    case 1:
      rule = "Useless - You can only smoke if you have full shield";
      break;
    case 2:
      rule = "Heavy Artillery - You cannot use ironsights on any gun";
      break;
    case 3:
      rule = "Oscar Mike - You cannot stop moving, ever";
      break;
    case 4:
      rule = "Moronic - You can only walk backwards when your passive is active";
      break;
    case 5:
      rule = "Independent - You cannot revive or respawn any teammates";
      break;
    case 6:
      rule = "Panic - You must run in circles when your passive activates";
      break;
    case 7:
      rule = "Natural Habitat - If you see smoke, you must run into it and stay in it until its gone";
      break;
    case 8:
      rule = "Yeeter - You must always throw your ult straight up";
      break;
    case 9:
      rule = "Seconary - You must carry a pistol";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeCaustic() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Natural Habitat - You must stay in your gas while in combat, you cannot harm anyone outside of it";
      break;
    case 1:
      rule = "Comfort Zone - You cannot place your gas traps indoors";
      break;
    case 2:
      rule = "Blinding - If you get shot you must deploy a gas trap next to your teammate and set it off";
      break;
    case 3:
      rule = "Pacifist - You cannot shoot anyone that is not a Caustic, all damage must be done with your gas";
      break;
    case 4:
      rule = "Cocky - You can only punch enemies that are in your gas";
      break;
    case 5:
      rule = "Instant - You must set off all of your traps instantly";
      break;
    case 6:
      rule = "Smoke Bomb - You can only throw your gas grenade directly down";
      break;
    case 7:
      rule = "Safety First - When in a fight, you must always have at least 3 gas traps in the same room as you";
      break;
    case 8:
      rule = "Protector - You must protect all Wattsons at all cost";
      break;
    case 9:
      rule = "Pride - You cannot accept loot anyone else has found or pinged on your team";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeMirage() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Life of the Party - Spam all abilities";
      break;
    case 1:
      rule = "Season 1 - You cannot control your decoys";
      break;
    case 2:
      rule = "Show Off - If it's up, you must use your ult to finish all downed enemies";
      break;
    case 3:
      rule = "Decoy Dance - You must land at Mirage Voyage and pretend to be a decoy";
      break;
    case 4:
      rule = "Deception - When ulted, you can only run in a straight line";
      break;
    case 5:
      rule = "Better Medic - You must prioritize killing all lifelines";
      break;
    case 6:
      rule = "Waster - You must use every ultimate accelerant, and if your ult is already up, you must use it to use the accelerant";
      break;
    case 7:
      rule = "Cocky - You must teabag all downed players you see immediately";
      break;
    case 8:
      rule = "Terrified - You must stay as far away as possible from all Revenants, including teammates";
      break;
    case 9:
      rule = "Sensitive - You can only shoot while on full health, regardless of shield";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeOctane() {
  let max = 11;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "FASTER FASTER FASTER - Stim constantly";
      break;
    case 1:
      rule = "Donuts - You must circle someone before killing or downing them";
      break;
    case 2:
      rule = "Withdraw - You cannot stim unless you are going straight towards someone";
      break;
    case 3:
      rule = "Hyper - You must play on 2x your normal mouse DPI";
      break;
    case 4:
      rule = "Natural Ability - You cannot use health meds, you must heal all health naturally";
      break;
    case 5:
      rule = "Pusher - You cannot use long or medium range weapons, only short range";
      break;
    case 6:
      rule = "Daredevil - You must sprint constantly without stopping ever";
      break;
    case 7:
      rule = "Jumpshot - You can only ADS while mid-air from your jump pad";
      break;
    case 8:
      rule = "Having Fun - You must do a 360 every time you break someones shield";
      break;
    case 9:
      rule = "Flatland - You cannot jump, your only vertical movement comes from your jumpad or other things like ziplines";
      break;
    case 10:
      rule = "Addict - You must use all health meds immediately";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeWattson() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Comfort Zone - You may not place your fences or ultimate indoors";
      break;
    case 1:
      rule = "Safety Net - You cannot leave your ult until it is destroyed";
      break;
    case 2:
      rule = "The Nick - You cannot use your ult";
      break;
    case 3:
      rule = "Extra Space - You can only recharge your shield with your ult";
      break;
    case 4:
      rule = "Enemy Shoes - You cannot go through your own fences";
      break;
    case 5:
      rule = "You can only use your 12 pylons in the game, and you cannot pick any up";
      break;
    case 6:
      rule = "Tactical Waste - If you ult, you must throw all grenades into it";
      break;
    case 7:
      rule = "You cannot ult unless your team has at least 3 grenades to feed it";
      break;
    case 8:
      rule = "Expert - You cannot make fences longer than one doors length";
      break;
    case 9:
      rule = "Priorities - You cannot heal unless your shield is fully broken";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeCrypto() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Kamikaze - Upon spotting an enemy, you must fly your drone into them";
      break;
    case 1:
      rule = "Reformed Hacker - You can only use your drone to look around, you cannot scan or EMP with it";
      break;
    case 2:
      rule = "Sacrifice - You must always be hit by your own EMPs";
      break;
    case 3:
      rule = "Isolated - Your drone cannot leave the building you are in and can only be used indoors";
      break;
    case 4:
      rule = "Tank Mode - Your drone cannot leave the ground";
      break;
    case 5:
      rule = "Gate to Heaven - You can only fly your drone vertically";
      break;
    case 6:
      rule = "EMP master - You must EMP anyone you see immediately";
      break;
    case 7:
      rule = "Last Straw - You cannot shoot unless your drone is broken";
      break;
    case 8:
      rule = "Reaction Time - If you scan someone, you must ult immediately";
      break;
    case 9:
      rule = "Fireworks - When your ult is up, you must fly your drone straight up and use it";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeRevenant() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Stalker - You must follow an enemy while trying to stay hidden, and you cannot shoot until they see you";
      break;
    case 1:
      rule = "You cannot sprint, only crouch walk to move faster";
      break;
    case 2:
      rule = "No acceptance - You cannot accept items from teammates unless they are Loba";
      break;
    case 3:
      rule = "Silenced - You cannot speak unless your tactical is up";
      break;
    case 4:
      rule = "Phoenix Down - You cannot heal from death protection without Phoenix Kit";
      break;
    case 5:
      rule = "Putting it to Use - You must climb as much as possible";
      break;
    case 6:
      rule = "Cusp of Death - You can only revive someone when they are JUST about to die";
      break;
    case 7:
      rule = "A Beautiful Death - You cannot interrupt an enemy finishing your teammate";
      break;
    case 8:
      rule = "Techno Enhancements - You must melee all enemy caustic traps, under the thought that it will not hurt because you are a robot";
      break;
    case 9:
      rule = "Good Teammate - You cannot ping anything";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeLoba() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Ooh, Shiny - You must keep every purple and gold item you see permanently";
      break;
    case 1:
      rule = "Tasteful - You can only loot deathboxes by using your ult";
      break;
    case 2:
      rule = "Rich - You can't use crafting canisters, only supply crates";
      break;
    case 3:
      rule = "Descent to Madness - You can only teleport downwards";
      break;
    case 4:
      rule = "Lazy - You cannot enter or exit buildings without teleporting";
      break;
    case 5:
      rule = "Grudge - You must target all revenants";
      break;
    case 6:
      rule = "Flanker - You can only teleport behind enemies";
      break;
    case 7:
      rule = "Picky - You cannot loot deathboxes that are not gold";
      break;
    case 8:
      rule = "Nail Appreciation - You can only use small meds. Appreciate those nails!";
      break;
    case 9:
      rule = "Ammomaniac - At least half of your backpack slots must be reserved for ammo";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeRampart() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Love Me an LMG - You can only use LMGs";
      break;
    case 1:
      rule = "Rookie Modder - You cannot equip attachments";
      break;
    case 2:
      rule = "Trigger Happy - You can't leave your ult until you've used up a full clip";
      break;
    case 3:
      rule = "Tacticalist - You can only shoot through Amp Walls";
      break;
    case 4:
      rule = "Symmetra? - You can only use Charge Rifle";
      break;
    case 5:
      rule = "Sandwich - You must layer your Amp Walls";
      break;
    case 6:
      rule = "Auto-Loaded - You cannot manually reload LMGs that have a gold magazine."
      break;
    case 7:
      rule = "Burst Fire - You must burst fire with your Ult";
      break;
    case 8:
      rule = "Gung-Ho - You can't spin up your Ult until you're shooting";
      break;
    case 9:
      rule = "Doorphobic - You can only destroy doors, no kicking or opening them";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeHorizon() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Broken Keyboard - You can only jump using your tactical";
      break;
    case 1:
      rule = "Explosive Singularity - You must carry 3 grenades and throw them into your Ult when you use it";
      break;
    case 2:
      rule = "Ascension - You must gravity lift all downed players you see";
      break;
    case 3:
      rule = "Heavy Armor - You can only gravity lift teammates";
      break;
    case 4:
      rule = "Ineffective - You can only use gravity lift indoors";
      break;
    case 5:
      rule = "2D - You can only shoot your black hole straight up";
      break;
    case 6:
      rule = "Eye of the Storm - You cannot leave your gravity lift until it goes away";
      break;
    case 7:
      rule = "I Have the High Ground - You can only shoot people from above them";
      break;
    case 8:
      rule = "Deja Vu - You must stay near all black holes you see";
      break;
    case 9:
      rule = "Science Lover - You must run straight into enemy black holes";
      break;
  }

  currentLegendRule = rule;
  return rule;
}
function randomizeFuse() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Grenadier - Grenades only";
      break;
    case 1:
      rule = "Fireworks - You can only use your tactical straight down";
      break;
    case 2:
      rule = "BOOM - You must always use your tactical when it's ready";
      break;
    case 3:
      rule = "Through the Fire and Flames - You must run through your ult if you use it";
      break;
    case 4:
      rule = "Sniper - You can only throw grenades over long distances";
      break;
    case 5:
      rule = "Burn it All - You must carry thermites and throw them into your ult when you use it";
      break;
    case 6:
      rule = "The Arena - If you trap someone in your ult, you must fist-fight them"
      break;
    case 7:
      rule = "Bad Idea - You can only use your ult indoors and your tactical outdoors";
      break;
    case 8:
      rule = "No Self Control - You must throw all of your grenades after throwing one";
      break;
    case 9:
      rule = "Explosive Entrance - You must tactical everyone you see immediately";
      break;
  }

  currentLegendRule = rule;
  return rule;
}

function toggleSpecial() {
  if (specialEnabled) {
    document.getElementById("toggleSpecial").style.backgroundImage = "url('images/disable/disabled.png')";
    specialEnabled = false;
  } else {
    document.getElementById("toggleSpecial").style.backgroundImage = "url('images/disable/enabled.png')";
    specialEnabled = true;
  }
}
function showSpecial() {
  document.getElementById("special").innerHTML = "SPECIAL RULE";
  document.getElementById("special").style.color = "yellow";
  document.getElementById("special").style.fontSize = 64;
  document.getElementById("special").style.paddingTop = 12;
}
function revertSpecial() {
  document.getElementById("special").innerHTML = currentSpecial;
  document.getElementById("special").style.color = "#CCCCCC";
  document.getElementById("special").style.fontSize = 20;
  document.getElementById("special").style.paddingTop = 35;
}
function randomizeSpecial() {
  let max = 17;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Precision is Key - You may only shoot when ADS";
      break;
    case 1:
      rule = "Bloodthirsty - You must kill anyone you see downed immediately";
      break;
    case 2:
      rule = "Whats reloading - Once your mag is empty you have to drop that gun and find a new one";
      break;
    case 3:
      rule = "Glorious Evolution - You can only use items with rarity below and equal to your evo shield, no evo means no items";
      break;
    case 4:
      rule = "Man of Quality - You may only use blue and above items";
      break;
    case 5:
      rule = "Kleptomaniac - You may never drop anything";
      break;
    case 6:
      rule = "Light Packing - You may only use 5 backpack slots";
      break;
    case 7:
      rule = "Trigger Happy - Once you start shooting you cannot stop until the mag is empty"
      break;
    case 8:
      rule = "Deaf - Mute all ingame sound";
      break;
    case 9:
      rule = "Cautious - You may never sprint";
      break;
    case 10:
      rule = "Bunny Hopper - You may never stop jumping";
      break;
    case 11:
      rule = "Missing Parts - You may only use guns with all attachments equipped";
      break;
    case 12:
      rule = "Claustrophobic - You are not allowed indoors unless forced by ring";
      break;
    case 13:
      rule = "Proper Burial - You must make every deathbox you see disappear";
      break;
    case 14:
      rule = "Skillz - You may only use single fire guns on single fire mode";
      break;
    case 15:
      rule = "The Past is Behind You - You may only move forward";
      break;
    case 16:
      rule = "Crab Walk - You may only walk sideways";
      break;
  }

  currentSpecial = rule;
  return rule;
}
function changeSpecial() {
  document.getElementById("special").innerHTML = randomizeSpecial();
}

function generate() {
  if (legendEnabled) {
    let legend = randomizeLegend();
    document.getElementById("legend").innerHTML = legend;
    currentLegend = legend;
  }

  if (armorEnabled) {
    let armor = randomizeArmor();
    document.getElementById("armor").innerHTML = armor;
  }

  if (medsEnabled) {
    let meds = randomizeMeds();
    document.getElementById("meds").innerHTML = meds;
  }

  if (teamEnabled) {
    let team = randomizeTeam();
    document.getElementById("team").innerHTML = team;
  }

  if (legendRuleEnabled) {
    let legendRule = eval("randomize" + currentLegend + "()");
    document.getElementById("legendRule").innerHTML = legendRule;
  }

  if (specialEnabled) {
    let special = randomizeSpecial();
    document.getElementById("special").innerHTML = special;
  }
}
