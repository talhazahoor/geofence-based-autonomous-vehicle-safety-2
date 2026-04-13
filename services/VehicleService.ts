import { VehicleRepository } from '../repositories/VehicleRepository';
import { Vehicle } from '../models/Vehicle';

export class VehicleService {
  private vehicleRepository: VehicleRepository;

  constructor(vehicleRepository: VehicleRepository) {
    this.vehicleRepository = vehicleRepository;
  }

  async getAllVehicles(): Promise<Vehicle[]> {
    return this.vehicleRepository.getAllVehicles();
  }

  async getVehicleById(id: number): Promise<Vehicle | undefined> {
    return this.vehicleRepository.getVehicleById(id);
  }
}