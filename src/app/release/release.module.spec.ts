import { ReleaseModule } from './release.module';

describe('ReleaseModule', () => {
  let releaseModule: ReleaseModule;

  beforeEach(() => {
    releaseModule = new ReleaseModule();
  });

  it('should create an instance', () => {
    expect(releaseModule).toBeTruthy();
  });
});
