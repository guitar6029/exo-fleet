import type { Ship } from "../Ship/Ship";
import type { Flight } from "../Flight/Flight";

export interface Gate {
    id: string;
    isOccupied: boolean;
    assignedShip?: Ship;
  }

export class MainStation {
    name: string;
    location: string;
    gates: Gate[];
    dockedShips: Ship[];
    activeFlights: Flight[];


    constructor(name: string, location: string, totalGates: number) {
        this.name = name;
        this.location = location;
        this.gates = Array.from({ length: totalGates}, (_, i) => ({
            id: `Gate-${i + 1}`,
            isOccupied: false
        }));
        this.dockedShips = [];
        this.activeFlights = [];
    }

    dockShip(ship: Ship) {
        const availableGate = this.gates.find((gate) => !gate.isOccupied);
        if (availableGate){
            availableGate.isOccupied = true;
            availableGate.assignedShip = ship;
            this.dockedShips.push(ship);
        } else {
            console.log("No available gates");
        }
    }

    launchFlight(destination: string, ship: Ship) {
        const flight: Flight = {
            id: `FL-${Date.now()}`,
            destination,
            ship,
            status: "Scheduled",
            departureTime: new Date(),
            arrivalTime: new Date(Date.now() * 1000 * 60 * 60 * 24)
        };
        this.activeFlights.push(flight);
    }

}