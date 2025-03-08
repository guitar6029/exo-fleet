export type ShipType = 'Military' | 'Cargo' | 'Passenger' | 'Research' | 'Discovery';

export interface Ship {
  id: string;
  name: string;
  type: ShipType;
  size: 'Small' | 'Medium' | 'Large';
  health: number; // 0 to 100
  maintenanceCycle: number; // Range: 1000 - 5000 units
  speed: number; // Arbitrary units per second
  fuelCapacity: number; // Maximum fuel the ship can hold
  cargoCapacity?: number; // Only for Cargo ships
  passengerCapacity?: number; // Only for Passenger ships
  status: 'Active' | 'Maintenance' | 'In-Transit' | 'Docked';
}

// Example ships
export const sampleShips: Ship[] = [
  {
    id: 'ship-001',
    name: 'Voyager X',
    type: 'Discovery',
    size: 'Medium',
    health: 90,
    maintenanceCycle: 4500,
    speed: 120,
    fuelCapacity: 5000,
    status: 'Active'
  },
  {
    id: 'ship-002',
    name: 'Titan Hauler',
    type: 'Cargo',
    size: 'Large',
    health: 75,
    maintenanceCycle: 3000,
    speed: 80,
    fuelCapacity: 7000,
    cargoCapacity: 20000,
    status: 'Docked'
  }
];
