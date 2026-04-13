import { Request, Response } from 'express';
import { GeofenceService } from '../services/GeofenceService';

export class GeofenceController {
  private geofenceService: GeofenceService;

  constructor(geofenceService: GeofenceService) {
    this.geofenceService = geofenceService;
  }

  async getAllGeofences(req: Request, res: Response) {
    const geofences = await this.geofenceService.getAllGeofences();
    res.json(geofences);
  }

  async getGeofenceById(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const geofence = await this.geofenceService.getGeofenceById(id);
    if (!geofence) {
      res.status(404).json({ message: 'Geofence not found' });
    } else {
      res.json(geofence);
    }
  }
}