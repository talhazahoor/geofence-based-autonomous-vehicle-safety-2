import { getRepository } from 'typeorm';
import { Vehicle } from '../models/Vehicle';

export class VehicleRepository {
  private vehicleRepository = getRepository(Vehicle);

  async getAllVehicles(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  async getVehicleById(id: number): Promise<Vehicle | undefined> {
    return this.vehicleRepository.findOne(id);
  }
}