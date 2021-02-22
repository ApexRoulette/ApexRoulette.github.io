var legendEnabled = true;
var locationEnabled = true;
var teamEnabled = true;
var personalRuleEnabled = true;

var currentLegend;
var currentLocation;

var currentTeam;
var currentTeamSize;
var currentTeamPadding;

var currentPersonalRule;
var currentPersonalSize;
var currentPersonalPadding;

var bloodhoundEnabled = true;
var gibraltarEnabled = true;
var lifelineEnabled = true;
var pathfinderEnabled = true;
var wraithEnabled = true;
var bangaloreEnabled = true;
var causticEnabled = true;
var mirageEnabled = true;
var octaneEnabled = true;
var wattsonEnabled = true;
var cryptoEnabled = true;
var revenantEnabled = true;
var lobaEnabled = true;
var rampartEnabled = true;
var horizonEnabled = true;
var fuseEnabled = true;

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
  let player;
  let max = 16;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      player = "Bloodhound";
      break;
    case 1:
      player = "Gibraltar";
      break;
    case 2:
      player = "Lifeline";
      break;
    case 3:
      player = "Pathfinder";
      break;
    case 4:
      player = "Wraith";
      break;
    case 5:
      player = "Bangalore";
      break;
    case 6:
      player = "Caustic";
      break;
    case 7:
      player = "Mirage";
      break;
    case 8:
      player = "Octane";
      break;
    case 9:
      player = "Wattson";
      break;
    case 10:
      player = "Crypto";
      break;
    case 11:
      player = "Revenant";
      break;
    case 12:
      player = "Loba";
      break;
    case 13:
      player = "Rampart";
      break;
    case 14:
      player = "Horizon";
      break;
    case 15:
      player = "Fuse";
      break;
  }
  currentLegend = player;
  return player;
}
function changeLegend() {
  if (legendEnabled) {
    document.getElementById("legend").innerHTML = randomizeLegend();
    changePersonalRule();
  }
}

function toggleLocation() {
  if (locationEnabled) {
    document.getElementById("toggleLocation").style.backgroundImage = "url('images/disable/disabled.png')";
    locationEnabled = false;
  } else {
    document.getElementById("toggleLocation").style.backgroundImage = "url('images/disable/enabled.png')";
    locationEnabled = true;
  }
}
function showLocation() {
  document.getElementById("location").innerHTML = "LOCATION";
  document.getElementById("location").style.color = "yellow";
}
function revertLocation() {
  document.getElementById("location").innerHTML = currentLocation;
  document.getElementById("location").style.color = "#CCCCCC";

  console.log("reverting");
}
function randomizeLocation() {
  let location;
  if (mapID == 0) {
    let max = 21;
    switch(Math.floor(Math.random() * max)) {
      case 0:
        location = "Crash Site";
        break;
      case 1:
        location = "Artillery";
        break;
      case 2:
        location = "Spotted Lake";
        break;
      case 3:
        location = "Runoff";
        break;
      case 4:
        location = "Airbase";
        break;
      case 5:
        location = "The Pit";
        break;
      case 6:
        location = "Gauntlet";
        break;
      case 7:
        location = "Mirage Voyage";
        break;
      case 8:
        location = "Salvage";
        break;
      case 9:
        location = "Water Treatment";
        break;
      case 10:
        location = "Market";
        break;
      case 11:
        location = "Repulsor";
        break;
      case 12:
        location = "Swamps";
        break;
      case 13:
        location = "Containement";
        break;
      case 14:
        location = "Capacitor";
        break;
      case 15:
        location = "Broken Relay";
        break;
      case 16:
        location = "The Rig";
        break;
      case 17:
        location = "Bunker";
        break;
      case 18:
        location = "Hydro Dam";
        break;
      case 19:
        location = "The Cage";
        break;
      case 20:
        location = "Labs";
        break;
    }
  } else if (mapID == 1) {
    let max = 16;
    switch(Math.floor(Math.random() * max)) {
      case 0:
        location = "Docks";
        break;
      case 1:
        location = "Carrier";
        break;
      case 2:
        location = "Oasis";
        break;
      case 3:
        location = "Estates";
        break;
      case 4:
        location = "Elysium";
        break;
      case 5:
        location = "Hydroponics";
        break;
      case 6:
        location = "Hammond Labs";
        break;
      case 7:
        location = "Grow Towers";
        break;
      case 8:
        location = "Gardens";
        break;
      case 9:
        location = "Bonsai Plaza";
        break;
      case 10:
        location = "Power Grid";
        break;
      case 11:
        location = "Rift";
        break;
      case 12:
        location = "Orbital Cannon";
        break;
      case 13:
        location = "Solar Array";
        break;
      case 14:
        location = "Turbine";
        break;
      case 15:
        location = "Energy Depot";
        break;
    }
  }

  currentLocation = location;
  return location;
}
function changeLocation() {
  if (locationEnabled) {
    document.getElementById("location").innerHTML = randomizeLocation();
  }
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
  document.getElementById("team").style.fontSize = currentTeamSize;
  document.getElementById("team").style.paddingTop = currentTeamPadding;
}
function randomizeTeam() {
  let rule;
  let max = 18;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Life or Death - No reviving downed players without a Respawn Beacon";
      currentTeamSize = 25;
      currentTeamPadding = 35;
      break;
    case 1:
      rule = "Lone Wolf - Land far away from one another and do not meet up before the first ring closes";
      currentTeamSize = 25;
      currentTeamPadding = 19;
      break;
    case 2:
      rule = "Together, Ape Strong - No splitting up, not even to loot";
      currentTeamSize = 32;
      currentTeamPadding = 30;
      break;
    case 3:
      rule = "Glory For All - Team must charge into all combat without retreat";
      currentTeamSize = 28;
      currentTeamPadding = 32;
      break;
    case 4:
      rule = "Boxing Match - If your team finds a downed enemy, they must all punch them to death";
      currentTeamSize = 25;
      currentTeamPadding = 19;
      break;
    case 5:
      rule = "Looter - You are the only person allowed to loot on your team";
      currentTeamSize = 29;
      currentTeamPadding = 31;
      break;
    case 6:
      rule = "Combo - Whole team must use tacticals or ults at the same time";
      currentTeamSize = 27;
      currentTeamPadding = 32;
      break;
    case 7:
      rule = "Synergy - All players must have one of the same gun";
      currentTeamSize = 34;
      currentTeamPadding = 29;
      break
    case 8:
      rule = "Special Coms - One player talks with pings, one with text, and one with voice chat";
      currentTeamSize = 25;
      currentTeamPadding = 20;
      break;
    case 9:
      rule = "Bias - All teammates must pick one person to protect over their own life";
      currentTeamSize = 25;
      currentTeamPadding = 35;
      break;
    case 10:
      rule = "Medical Experts - Each team member can only pick one type of med";
      currentTeamSize = 27;
      currentTeamPadding = 34;
      break;
    case 11:
      rule = "Teamwork - No one can heal their own shield, only teammates";
      currentTeamSize = 29;
      currentTeamPadding = 32;
      break;
    case 12:
      rule = "Separation Blitz - No two people can have their abilities in use at the same time";
      currentTeamSize = 25;
      currentTeamPadding = 20;
      break;
    case 13:
      rule = "Simon Says - Team members must do anything the other team members tell them";
      currentTeamSize = 25;
      currentTeamPadding = 20;
      break;
    case 14:
      rule = "Hot Swap - You can only use loadouts that one of your other teammates would use";
      currentTeamSize = 25;
      currentTeamPadding = 19;
      break;
    case 15:
      rule = "Ammo Experts - Team members cannot use the same ammo types as each other";
      currentTeamSize = 25;
      currentTeamPadding = 20;
      break;
    case 16:
      rule = "Hot Swap - When you revive a teammate, you must switch guns with them";
      currentTeamSize = 24;
      currentTeamPadding = 35;
      break;
    case 17:
      rule = "Pacifist - You can only fight the final squad";
      currentTeamSize = 40;
      currentTeamPadding = 25;
      break;
    }

  currentTeam = rule;
  return rule;
}
function changeTeam() {
  if (teamEnabled) {
    document.getElementById("team").innerHTML = randomizeTeam();
    document.getElementById("team").style.fontSize = currentTeamSize;
    document.getElementById("team").style.paddingTop = currentTeamPadding;
  }
}

function togglePersonalRule() {
  if (personalRuleEnabled) {
    document.getElementById("togglePersonalRule").style.backgroundImage = "url('images/disable/disabled.png')";
    personalRuleEnabled = false;
  } else {
    document.getElementById("togglePersonalRule").style.backgroundImage = "url('images/disable/enabled.png')";
    personalRuleEnabled = true;
  }
}
function showPersonalRule() {
  document.getElementById("personalRule").innerHTML = "PERSONAL RULE";
  document.getElementById("personalRule").style.color = "yellow";
  document.getElementById("personalRule").style.fontSize = 64;
  document.getElementById("personalRule").style.paddingTop = 12;
}
function revertPersonalRule() {
  document.getElementById("personalRule").innerHTML = currentPersonalRule;
  document.getElementById("personalRule").style.color = "#CCCCCC";
  document.getElementById("personalRule").style.fontSize = currentPersonalSize;
  document.getElementById("personalRule").style.paddingTop = currentPersonalPadding;
}
function changePersonalRule() {
  if (personalRuleEnabled) {
    if (Math.random() < 0.5) {
      document.getElementById("personalRule").innerHTML = eval("randomize" + currentLegend + "()");
    } else {
      document.getElementById("personalRule").innerHTML = randomizeSpecial();
    }
    document.getElementById("personalRule").style.fontSize = currentPersonalSize;
    document.getElementById("personalRule").style.paddingTop = currentPersonalPadding;
  }
}

function randomizeBloodhound() {
  let max = 10;
  let rule;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Reconnaissance - You may only shoot someone you have scanned";
      currentPersonalSize = 28;
      currentPersonalPadding = 35;
      break;
    case 1:
      rule = "Expert Tracker - If you see tracks you must follow them immediately and use your ultimate";
      currentPersonalSize = 25;
      currentPersonalPadding = 20;
      break;
    case 2:
      rule = "Tactically Inefficient - You can only ult when you see footprints, and NOT when you see people";
      currentPersonalSize = 25;
      currentPersonalPadding = 20;
      break;
    case 3:
      rule = "Selfish Tracker - You cannot call out any footprints you see";
      currentPersonalSize = 30;
      currentPersonalPadding = 32;
      break;
    case 4:
      rule = "Fair Fight - If you are fighting a bloodhound, you can only scan him if he scans you first, and you can only ult if he ults";
      currentPersonalSize = 25;
      currentPersonalPadding = 20;
      break;
    case 5:
      rule = "Extreme Analysis - You must always look directly down unless in a fight";
      currentPersonalSize = 25;
      currentPersonalPadding = 35;
      break;
    case 6:
      rule = "Strange Habits - You must shoot a single bullet at every footprint you see";
      currentPersonalSize = 26;
      currentPersonalPadding = 18;
      break;
    case 7:
      rule = "The Choice - You cannot scan people you have ulted, and you cannot use your ult on people you have scanned";
      currentPersonalSize = 26;
      currentPersonalPadding = 18;
      break;
    case 8:
      rule = "Ultimate Regression - You can only move backwards and sideways while in your ult";
      currentPersonalSize = 27;
      currentPersonalPadding = 17;
      break;
    case 9:
      rule = "Paranoid - You must ult instantly if you are shot";
      currentPersonalSize = 37;
      currentPersonalPadding = 27;
      break;
  }

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
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
      rule = "Heavy location - You can only gravity lift teammates";
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

  currentPersonalRule = rule;
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

  currentPersonalRule = rule;
  return rule;
}

function randomizeSpecial() {
  let rule;
  let max = 31;
  switch(Math.floor(Math.random() * max)) {
    case 0:
      rule = "Precision is Key - You may only shoot when ADS";
      currentPersonalSize = 35;
      currentPersonalPadding = 28;
      break;
    case 1:
      rule = "Bloodthirsty - You must kill anyone you see downed immediately";
      currentPersonalSize = 28;
      currentPersonalPadding = 34;
      break;
    case 2:
      rule = "Whats reloading - Every time your mag is empty you have to drop the gun and pick it back up";
      currentPersonalSize = 26;
      currentPersonalPadding = 20;
      break;
    case 3:
      rule = "Glorious Evolution - You can only use items with rarity below and equal to your evo shield, no evo means no items";
      currentPersonalSize = 28;
      currentPersonalPadding = 16;
      break;
    case 4:
      rule = "Man of Quality - You may only use blue and above items";
      currentPersonalSize = 32;
      currentPersonalPadding = 30;
      break;
    case 5:
      rule = "Kleptomaniac - You may never drop anything";
      currentPersonalSize = 40;
      currentPersonalPadding = 25;
      break;
    case 6:
      rule = "Light Packing - You may only use 7 backpack slots";
      currentPersonalSize = 35;
      currentPersonalPadding = 30;
      break;
    case 7:
      rule = "Trigger Happy - Once you start shooting you cannot stop until the mag is empty"
      currentPersonalSize = 27;
      currentPersonalPadding = 18;
      break;
    case 8:
      rule = "Deaf - Mute all ingame sound. No Subtitles";
      currentPersonalSize = 40;
      currentPersonalPadding = 26;
      break;
    case 9:
      rule = "Cautious - You may never sprint";
      currentPersonalSize = 45;
      currentPersonalPadding = 22;
      break;
    case 10:
      rule = "Bunny Hopper - You may never stop jumping";
      currentPersonalSize = 40;
      currentPersonalPadding = 27;
      break;
    case 11:
      rule = "Missing Parts - You may only use guns with all attachments equipped";
      currentPersonalSize = 26;
      currentPersonalPadding = 35;
      break;
    case 12:
      rule = "Claustrophobic - You are not allowed indoors unless forced by ring";
      currentPersonalSize = 27;
      currentPersonalPadding = 35;
      break;
    case 13:
      rule = "Australian - You have to turn on mouse inversion";
      currentPersonalSize = 36;
      currentPersonalPadding = 30;
      break;
    case 14:
      rule = "Skillz - You may only use single fire guns on single fire mode";
      currentPersonalSize = 30;
      currentPersonalPadding = 31;
      break;
    case 15:
      rule = "The Past is Behind You - You may only move forward";
      currentPersonalSize = 34;
      currentPersonalPadding = 30;
      break;
    case 16:
      rule = "Crab Walk - You may only walk sideways";
      currentPersonalSize = 40;
      currentPersonalPadding = 25;
      break;
    case 17:
      rule = "Hyper - You must play on 2x your normal mouse DPI";
      currentPersonalSize = 34;
      currentPersonalPadding = 28;
      break;
    case 18:
      rule = "Sluggish - You must play on one half your normal mouse DPI";
      currentPersonalSize = 30;
      currentPersonalPadding = 31;
      break;
    case 19:
      rule = "Hyper Eye - Turn ADS Sensitivity to 10";
      currentPersonalSize = 40;
      currentPersonalPadding = 27;
      break;
    case 20:
      rule = "Disoriented - Swap your tactical and ultimate keybinds";
      currentPersonalSize = 32;
      currentPersonalPadding = 32;
      break;
    case 21:
      rule = "Near-Sighted: You must turn your FOV down to 70";
      currentPersonalSize = 35;
      currentPersonalPadding = 30;
      break;
    case 22:
      rule = "Anti-Aidan - You cannot melee";
      currentPersonalSize = 45;
      currentPersonalPadding = 23;
      break;
    case 23:
      rule = "Hey It Has A Use - You can only get ammo through crafting";
      currentPersonalSize = 30;
      currentPersonalPadding = 33;
      break;
    case 24:
      rule = "Why - You have to use in-game voice chat to talk";
      currentPersonalSize = 35;
      currentPersonalPadding = 28;
      break;
    case 25:
      rule = "Silent Synergy - All players must deafen when they get in a fight until it is over";
      currentPersonalSize = 27;
      currentPersonalPadding = 18;
      break;
    case 26:
      rule = "One Act Play - Mute sound effects";
      currentPersonalSize = 45;
      currentPersonalPadding = 25;
      break;
    case 27:
      rule = "The Ol' Switcharoo - Only use one of your guns, and swap each time you get a kill";
      currentPersonalSize = 25;
      currentPersonalPadding = 20;
      break;
    case 28:
      rule = "The Other Ol' Switcharoo - Only use one of your guns, and swap each time your shield breaks";
      currentPersonalSize = 26;
      currentPersonalPadding = 19;
      break;
    case 29:
      rule = "Don't Die - You can't loot deathboxes from anyone on your team, including yourself";
      currentPersonalSize = 26;
      currentPersonalPadding = 18;
      break;
    }

  currentPersonalRule = rule;
  return rule;
}
function generate() {
  if (legendEnabled) {
    changeLegend();
  }

  if (locationEnabled) {
    changeLocation();
  }

  if (teamEnabled) {
    changeTeam();
  }

  if (personalRuleEnabled) {
    changePersonalRule();
  }
}
