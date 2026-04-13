import { GeofenceRepository } from '../repositories/GeofenceRepository';
import { Geofence } from '../models/Geofence';

export class GeofenceService {
  private geofenceRepository: GeofenceRepository;

  constructor(geofenceRepository: GeofenceRepository) {
    this.geofenceRepository = geofenceRepository;
  }

  async getAllGeofences(): Promise<Geofence[]> {
    return this.geofenceRepository.getAllGeofences();
  }

  async getGeofenceById(id: number): Promise<Geofence | undefined> {
    return this.geofenceRepository.getGeofenceById(id);
  }
}