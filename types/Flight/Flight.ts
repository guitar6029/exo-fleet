import type { Ship } from "../Ship/Ship";

export interface Flight {
    id: string;
    destination: string;
    ship: Ship;
    status: "Scheduled" | "In Transit" | "Arrived" | "Delayed";
    departureTime: Date;
    arrivalTime: Date;
  }