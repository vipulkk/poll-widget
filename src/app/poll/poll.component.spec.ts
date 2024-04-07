import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PollComponent } from './poll.component';

describe('PollComponent', () => {
  let component: PollComponent;
  let fixture: ComponentFixture<PollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PollComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty selectedOptions', () => {
    expect(component.selectedOptions).toEqual({});
  });

  it('should initialize with empty results', () => {
    expect(component.results).toEqual({});
  });

  it('should load results from local storage on initialization', () => {
    spyOn(localStorage, 'getItem').and.returnValue('{"question1":[{"option":"Option 1","votes":5}]}');
    component.ngOnInit();
    expect(localStorage.getItem).toHaveBeenCalledWith('poll_results');
    expect(component.results).toEqual({ question1: [{ option: 'Option 1', votes: 5 }] });
  });

  it('should save results to local storage when voting', () => {
    component.vote('question1', 'Option 1');
    expect(localStorage.setItem).toHaveBeenCalledWith('poll_results', JSON.stringify({ question1: [{ option: 'Option 1', votes: 1 }] }));
  });

  it('should correctly calculate percentages', () => {
    component.results = {
      question1: [
        { option: 'Option 1', votes: 5 },
        { option: 'Option 2', votes: 10 }
      ]
    };
    expect(component.calculatePercentage('question1', 5)).toBe(33);
    expect(component.calculatePercentage('question1', 10)).toBe(67);
  });

  it('should not save results to local storage when results are empty', () => {
    spyOn(localStorage, 'setItem');
    component.vote('question1', 'Option 1');
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it('should handle multiple questions correctly', () => {
    spyOn(localStorage, 'getItem').and.returnValue('{"question1":[{"option":"Option 1","votes":5}], "question2":[{"option":"Option A","votes":3}]}');
    component.ngOnInit();
    expect(component.results).toEqual({ question1: [{ option: 'Option 1', votes: 5 }], question2: [{ option: 'Option A', votes: 3 }] });
  });
});
