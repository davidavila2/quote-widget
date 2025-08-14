import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareQuote } from './share-quote';

describe('ShareQuote', () => {
  let component: ShareQuote;
  let fixture: ComponentFixture<ShareQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareQuote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareQuote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
