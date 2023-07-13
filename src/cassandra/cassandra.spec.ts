import { Test, TestingModule } from '@nestjs/testing';
import { Cassandra } from './cassandra';

describe('Cassandra', () => {
  let provider: Cassandra;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Cassandra],
    }).compile();

    provider = module.get<Cassandra>(Cassandra);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
