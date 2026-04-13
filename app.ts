import express, { Request, Response } from 'express';
import { GeofenceController } from './controllers/GeofenceController';
import { VehicleController } from './controllers/VehicleController';
import { GeofenceService } from './services/GeofenceService';
import { VehicleService } from './services/VehicleService';
import { GeofenceRepository } from './repositories/GeofenceRepository';
import { VehicleRepository } from './repositories/VehicleRepository';

const app = express();

const geofenceRepository = new GeofenceRepository();
const vehicleRepository = new VehicleRepository();
const geofenceService = new GeofenceService(geofenceRepository);
const vehicleService = new VehicleService(vehicleRepository);
const geofenceController = new GeofenceController(geofenceService);
const vehicleController = new VehicleController(vehicleService);

app.use(express.json());

app.get('/geofences', geofenceController.getAllGeofences);
app.get('/geofences/:id', geofenceController.getGeofenceById);
app.get('/vehicles', vehicleController.getAllVehicles);
app.get('/vehicles/:id', vehicleController.getVehicleById);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});