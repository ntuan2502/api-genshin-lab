import { Module } from '@nestjs/common';
import { MaterialController } from './material.controller';
import { MaterialResolver } from './material.resolver';
import { MaterialService } from './material.service';

@Module({
  imports: [],
  controllers: [MaterialController],
  providers: [MaterialService, MaterialResolver],
  exports: [],
})
export class MaterialModule {}
