import { TestBed } from '@angular/core/testing';

import { JokeService } from './joke.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('JokeService', () => {
  let service: JokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[HttpClient, HttpHandler]});

    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
