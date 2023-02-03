import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// SERVICES
import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesService],
    })
  );

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
