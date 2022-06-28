import { Module } from '@nestjs/common';
import { WeaponResolver } from './weapon.resolver';
import { WeaponService } from './weapon.service';

@Module({
  imports: [],
  controllers: [],
  providers: [WeaponService, WeaponResolver],
  exports: [],
})
export class WeaponModule {}
