// Terraformed Resource Equation for a System… 
// Your Terraforming Level:
let terraformingLevel = 6;
// Your Manufacturing Level:
let manufacturingLevel = 6;
// Your star's Natural Resources:
let naturalResource = 37;
// Your star's current upgrades:
let currentEconomy = 2;
let currentIndustry = 1;
let currentScience = 1;
// Any terraforming modifiers on the star - if none enter 0:
let terraformingModifier = 0;
// Any manufacturing modifier on the star
let manufacturingModifier = 0;
// Expense Config for the Game, See Leaderboard's Settings:
const expenseConfigWarpGate = 2;
const expenseConfigEconomy = 2;
const expenseConfigIndustry= 2;
const expenseConfigScience = 2;
// Ticks per Cycle:
const ticksPerCycle = 20;
// Static Infrastructure Upgrade Multipliers, Don't Change:
const baseCostWarpGate = 50;
const baseCostEconomy = 2.5;
const baseCostIndustry = 5;
const baseCostScience = 20;
const baseCostCarrier = 10;
//Misc
var upgradeIncrement = 0;
const sectionBreak = "-------------------------------------------------------------";
// Econ / Industry / Science Functions
function calcEconomyUpgradeCost(baseCostEconomy, expenseConfigEconomy, currentEconomy, upgradeIncrement, terraformedResources) {
  return Math.max(1, Math.floor((baseCostEconomy * expenseConfigEconomy * (currentEconomy + upgradeIncrement)) / (terraformedResources / 100)));
}
function calcIndustryUpgradeCost(baseCostIndustry, expenseConfigIndustry, currentIndustry, upgradeIncrement, terraformedResources) {
  return Math.max(1, Math.floor((baseCostIndustry * expenseConfigIndustry * (currentIndustry + upgradeIncrement)) / (terraformedResources / 100)));
}
function calcScienceUpgradeCost(baseCostScience, expenseConfigScience, currentScience, upgradeIncrement, terraformedResources) {
  return Math.max(1, Math.floor((baseCostScience * expenseConfigScience * (currentScience + upgradeIncrement)) / (terraformedResources / 100)));
}
function calcWarpGateUpgradeCost(baseCostWarpGate, expenseConfigWarpGate, terraformedResources) {
  return Math.max(1, Math.floor((baseCostWarpGate * expenseConfigWarpGate) / (terraformedResources / 100)));
}
// App
console.log("Tremek's Solaris Star Calculator, last updated 2022-03-10");
console.log();
console.log("Your Current Terraforming Level: ",terraformingLevel);
console.log("Your Current Manufacturing Level:",manufacturingLevel);
console.log();
// Calculate Terraformed Resources
var terraformedResources;
terraformedResources = (Math.floor(naturalResource + (5 * (terraformingLevel+terraformingModifier))));
console.log("Natural Resources On Star:       ",naturalResource);
console.log("Terraformed Resources On Star:   ",terraformedResources);
console.log();
console.log("Terraforming Modifier:           ",terraformingModifier);
console.log("Manufacturing Modifier:          ",manufacturingModifier);
console.log();
console.log("Economy:",currentEconomy," Industry:",currentIndustry," Science:",currentScience);
console.log(sectionBreak);
//Ship Production Per Tick
console.log("Current Manufacturing",manufacturingLevel,"Ship Production:", (currentIndustry*(manufacturingLevel + 5+ manufacturingModifier))/ticksPerCycle,"Ships/Tick"); 
console.log(sectionBreak);
//+1, +2, +3 Industry Points:
console.log("                     Add +1 Industry: ",((currentIndustry+1) * (manufacturingLevel+5))/ticksPerCycle,"Ships/Tick Total");
console.log("                     Add +2 Industry: ",((currentIndustry+2) * (manufacturingLevel+5))/ticksPerCycle,"Ships/Tick Total");
console.log("                     Add +3 Industry: ",((currentIndustry+3) * (manufacturingLevel+5))/ticksPerCycle,"Ships/Tick Total");
console.log();
//+Space Dock:
console.log("Add a Space Dock  (+2 Manufacturing): ",(currentIndustry*(manufacturingLevel+5+2))/ticksPerCycle,"Ships/Tick Total");
//+Space Dock:
console.log("Add a War Machine (+5 Manufacturing): ",(currentIndustry*(manufacturingLevel+5+5))/ticksPerCycle,"Ships/Tick Total");
console.log(sectionBreak);
// Refactored...
// Console output & Calculations
console.log("Current Terraforming Level",terraformingLevel,"Costs On Star:")
console.log("  Economy Upgrade Cost : ","+1: $",calcEconomyUpgradeCost(baseCostEconomy,expenseConfigEconomy,currentEconomy,upgradeIncrement = 1,terraformedResources)," +2: $",calcEconomyUpgradeCost(baseCostEconomy,expenseConfigEconomy,currentEconomy,upgradeIncrement = 2,terraformedResources),"  +3: $",calcEconomyUpgradeCost(baseCostEconomy,expenseConfigEconomy,currentEconomy,upgradeIncrement = 3,terraformedResources));
console.log("  Industry Upgrade Cost: ","+1: $",calcIndustryUpgradeCost(baseCostIndustry,expenseConfigIndustry,currentIndustry,upgradeIncrement = 1,terraformedResources)," +2: $",calcIndustryUpgradeCost(baseCostIndustry,expenseConfigIndustry,currentIndustry,upgradeIncrement = 2,terraformedResources),"  +3: $",calcIndustryUpgradeCost(baseCostIndustry,expenseConfigIndustry,currentIndustry,upgradeIncrement = 3,terraformedResources));
console.log("  Science Upgrade Cost : ","+1: $",calcScienceUpgradeCost(baseCostScience,expenseConfigScience,currentScience,upgradeIncrement = 1,terraformedResources)," +2: $",calcScienceUpgradeCost(baseCostScience,expenseConfigScience,currentScience,upgradeIncrement = 2,terraformedResources),"  +3: $",calcScienceUpgradeCost(baseCostScience,expenseConfigScience,currentScience,upgradeIncrement = 3,terraformedResources));
console.log("         Warp Gate Cost:"," $",calcWarpGateUpgradeCost(baseCostWarpGate, expenseConfigWarpGate, terraformedResources));
console.log(sectionBreak);
console.log("Add Mineral Extractor    (+2 Terraforming):");
terraformingModifier =2;
terraformedResources = (Math.floor(naturalResource + (5 * (terraformingLevel+terraformingModifier))));
console.log("  Economy Upgrade Cost : ","+1: $",calcEconomyUpgradeCost(baseCostEconomy,expenseConfigEconomy,currentEconomy,upgradeIncrement = 1,terraformedResources)," +2: $",calcEconomyUpgradeCost(baseCostEconomy,expenseConfigEconomy,currentEconomy,upgradeIncrement = 2,terraformedResources),"  +3: $",calcEconomyUpgradeCost(baseCostEconomy,expenseConfigEconomy,currentEconomy,upgradeIncrement = 3,terraformedResources));
console.log("  Industry Upgrade Cost: ","+1: $",calcIndustryUpgradeCost(baseCostIndustry,expenseConfigIndustry,currentIndustry,upgradeIncrement = 1,terraformedResources)," +2: $",calcIndustryUpgradeCost(baseCostIndustry,expenseConfigIndustry,currentIndustry,upgradeIncrement = 2,terraformedResources),"  +3: $",calcIndustryUpgradeCost(baseCostIndustry,expenseConfigIndustry,currentIndustry,upgradeIncrement = 3,terraformedResources));
console.log("  Science Upgrade Cost : ","+1: $",calcScienceUpgradeCost(baseCostScience,expenseConfigScience,currentScience,upgradeIncrement = 1,terraformedResources)," +2: $",calcScienceUpgradeCost(baseCostScience,expenseConfigScience,currentScience,upgradeIncrement = 2,terraformedResources),"  +3: $",calcScienceUpgradeCost(baseCostScience,expenseConfigScience,currentScience,upgradeIncrement = 3,terraformedResources));
console.log("         Warp Gate Cost:"," $",calcWarpGateUpgradeCost(baseCostWarpGate, expenseConfigWarpGate, terraformedResources));
terraformingModifier = 0;
console.log(sectionBreak);
console.log("Add Atmosphere Processor (+3 Terraforming):");
terraformingModifier =3;
terraformedResources = (Math.floor(naturalResource + (5 * (terraformingLevel+terraformingModifier))));
console.log("  Economy Upgrade Cost : ","+1: $",calcEconomyUpgradeCost(baseCostEconomy,expenseConfigEconomy,currentEconomy,upgradeIncrement = 1,terraformedResources)," +2: $",calcEconomyUpgradeCost(baseCostEconomy,expenseConfigEconomy,currentEconomy,upgradeIncrement = 2,terraformedResources),"  +3: $",calcEconomyUpgradeCost(baseCostEconomy,expenseConfigEconomy,currentEconomy,upgradeIncrement = 3,terraformedResources));
console.log("  Industry Upgrade Cost: ","+1: $",calcIndustryUpgradeCost(baseCostIndustry,expenseConfigIndustry,currentIndustry,upgradeIncrement = 1,terraformedResources)," +2: $",calcIndustryUpgradeCost(baseCostIndustry,expenseConfigIndustry,currentIndustry,upgradeIncrement = 2,terraformedResources),"  +3: $",calcIndustryUpgradeCost(baseCostIndustry,expenseConfigIndustry,currentIndustry,upgradeIncrement = 3,terraformedResources));
console.log("  Science Upgrade Cost : ","+1: $",calcScienceUpgradeCost(baseCostScience,expenseConfigScience,currentScience,upgradeIncrement = 1,terraformedResources)," +2: $",calcScienceUpgradeCost(baseCostScience,expenseConfigScience,currentScience,upgradeIncrement = 2,terraformedResources),"  +3: $",calcScienceUpgradeCost(baseCostScience,expenseConfigScience,currentScience,upgradeIncrement = 3,terraformedResources));
console.log("         Warp Gate Cost:"," $",calcWarpGateUpgradeCost(baseCostWarpGate, expenseConfigWarpGate, terraformedResources));
terraformingModifier = 0;
console.log(sectionBreak);
//+1 Level in Manufacturing
manufacturingLevel++;
console.log("Next Manufacturing",manufacturingLevel,"Ship Production:   ",(currentIndustry*(manufacturingLevel+5))/ticksPerCycle,"Ships/Tick");
//+1 Level in Terraforming
console.log();
console.log("Next Terraforming Level",terraformingLevel+1,"Costs On Star:")
terraformingLevel++;
terraformedResources = (Math.floor(naturalResource + (5 * (terraformingLevel+terraformingModifier))));
console.log("  Economy Upgrade Cost : ","+1: $",calcEconomyUpgradeCost(baseCostEconomy,expenseConfigEconomy,currentEconomy,upgradeIncrement = 1,terraformedResources)," +2: $",calcEconomyUpgradeCost(baseCostEconomy,expenseConfigEconomy,currentEconomy,upgradeIncrement = 2,terraformedResources),"  +3: $",calcEconomyUpgradeCost(baseCostEconomy,expenseConfigEconomy,currentEconomy,upgradeIncrement = 3,terraformedResources));
console.log("  Industry Upgrade Cost: ","+1: $",calcIndustryUpgradeCost(baseCostIndustry,expenseConfigIndustry,currentIndustry,upgradeIncrement = 1,terraformedResources)," +2: $",calcIndustryUpgradeCost(baseCostIndustry,expenseConfigIndustry,currentIndustry,upgradeIncrement = 2,terraformedResources),"  +3: $",calcIndustryUpgradeCost(baseCostIndustry,expenseConfigIndustry,currentIndustry,upgradeIncrement = 3,terraformedResources));
console.log("  Science Upgrade Cost : ","+1: $",calcScienceUpgradeCost(baseCostScience,expenseConfigScience,currentScience,upgradeIncrement = 1,terraformedResources)," +2: $",calcScienceUpgradeCost(baseCostScience,expenseConfigScience,currentScience,upgradeIncrement = 2,terraformedResources),"  +3: $",calcScienceUpgradeCost(baseCostScience,expenseConfigScience,currentScience,upgradeIncrement = 3,terraformedResources));
console.log("         Warp Gate Cost:"," $",calcWarpGateUpgradeCost(baseCostWarpGate, expenseConfigWarpGate, terraformedResources));
console.log(sectionBreak);
