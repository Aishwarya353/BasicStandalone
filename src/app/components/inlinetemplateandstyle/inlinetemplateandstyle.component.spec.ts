import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinetemplateandstyleComponent } from './inlinetemplateandstyle.component';

describe('InlinetemplateandstyleComponent', () => {
  let component: InlinetemplateandstyleComponent;
  let fixture: ComponentFixture<InlinetemplateandstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlinetemplateandstyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlinetemplateandstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
