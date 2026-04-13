import { getRepository } from 'typeorm';
import { Geofence } from '../models/Geofence';

export class GeofenceRepository {
  private geofenceRepository = getRepository(Geofence);

  async getAllGeofences(): Promise<Geofence[]> {
    return this.geofenceRepository.find();
  }

  async getGeofenceById(id: number): Promise<Geofence | undefined> {
    return this.geofenceRepository.findOne(id);
  }
}