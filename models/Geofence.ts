import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Geofence {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  coordinates: string;
}