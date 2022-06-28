import { Args, Query, Resolver } from '@nestjs/graphql';
import { Artifact } from './artifact.entity';
import { ArtifactService } from './artifact.service';

@Resolver(() => Artifact)
export class ArtifactResolver {
  constructor(private readonly artifactService: ArtifactService) {}

  @Query(() => [Artifact])
  artifacts(
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any[]> {
    return this.artifactService.getAll(lang);
  }

  @Query(() => Artifact)
  artifact(
    @Args('id', { type: () => String }) id: string,
    @Args('lang', { type: () => String, nullable: true }) lang: string,
  ): Promise<any> {
    return this.artifactService.getOne(id, lang);
  }
}
