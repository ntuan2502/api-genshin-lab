import { Module } from '@nestjs/common';
import { ArtifactResolver } from './artifact.resolver';
import { ArtifactService } from './artifact.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ArtifactService, ArtifactResolver],
  exports: [],
})
export class ArtifactModule {}
