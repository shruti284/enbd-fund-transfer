import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatementListComponent } from './account-statement-list.component';

describe('AccountStatementListComponent', () => {
  let component: AccountStatementListComponent;
  let fixture: ComponentFixture<AccountStatementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountStatementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
