import { Request, Response } from 'express';
import { VehicleService } from '../services/VehicleService';

export class VehicleController {
  private vehicleService: VehicleService;

  constructor(vehicleService: VehicleService) {
    this.vehicleService = vehicleService;
  }

  async getAllVehicles(req: Request, res: Response) {
    const vehicles = await this.vehicleService.getAllVehicles();
    res.json(vehicles);
  }

  async getVehicleById(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const vehicle = await this.vehicleService.getVehicleById(id);
    if (!vehicle) {
      res.status(404).json({ message: 'Vehicle not found' });
    } else {
      res.json(vehicle);
    }
  }
}