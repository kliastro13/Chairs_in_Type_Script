import { Chair, Wood, Tabouret } from "./classes";

const chair1 = new Chair({ legsQuantity: 2, weight: 5, height: 100 });
const chair2 = new Chair({ legsQuantity: 3, weight: 15, height: 150 });
const chair3 = new Chair({ legsQuantity: 4, weight: 20, height: 120 });
const chair4 = new Chair({ legsQuantity: 5, weight: 31, height: 90 });

const wood1 = new Wood("birch", true, true);
const wood2 = new Wood("pine", false, false);
const wood3 = new Wood("alder", true, false);
const wood4 = new Wood("aspen", false, true);

const tabouret1 = new Tabouret(chair1, wood1);
const tabouret2 = new Tabouret(chair2, wood2);
const tabouret3 = new Tabouret(chair3, wood3);
const tabouret4 = new Tabouret(chair4, wood4);

const tabourets = [tabouret1, tabouret2, tabouret3, tabouret4];
