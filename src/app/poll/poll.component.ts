import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface PollQuestion {
  question: string;
  options: string[];
}

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class PollComponent implements OnInit {
  questions: PollQuestion[] = [
    { 
      question: 'How you feel today?',
      options: ['Brilliant! I have so much energy', 'Always can be worse', 'Please, end my misery']
    },
    { 
      question: 'How you like the Opinary test?',
      options: ['It was great and so challenging', 'Not bad, but you can improve', 'It was a nightmare, never again']
    }
  ];

  results: { [question: string]: { option: string, votes: number }[] } = {};

  selectedOptions: { [question: string]: string } = {};

  ngOnInit(): void {
    this.loadResults();
  }

  vote(question: string, option: string): void {
    this.selectedOptions[question] = option;
    if (!this.results[question]) {
      this.results[question] = [];
    }
    let existingResult = this.results[question].find(result => result.option === option);
    if (existingResult) {
      existingResult.votes++;
    } else {
      this.results[question].push({ option: option, votes: 1 });
    }
    this.saveResults();
  }

  loadResults(): void {
    let savedResults = localStorage.getItem('poll_results');
    if (savedResults) {
      this.results = JSON.parse(savedResults);
    }
  }

  saveResults(): void {
    localStorage.setItem('poll_results', JSON.stringify(this.results));
  }

  calculatePercentage(question: string, votes: number): number {
    const totalVotes = this.results[question]?.reduce((total, result) => total + result.votes, 0);
    return totalVotes === 0 ? 0 : Math.round((votes / totalVotes) * 100);
  }

  // Method to generate letters (A, B, C, D, etc.)
  generateLetter(index: number): string {
    return String.fromCharCode(65 + index);
  }
}