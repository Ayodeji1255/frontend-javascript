// task_5/js/main.ts

// Nominal typing via "branding"
interface MajorCredits {
  credits: number;
  _brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  _brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'MajorCredits',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'MinorCredits',
  };
}

// Example usage
const major1: MajorCredits = { credits: 3, _brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 4, _brand: 'MajorCredits' };
const minor1: MinorCredits = { credits: 1, _brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 2, _brand: 'MinorCredits' };

console.log('Sum of Major Credits:', sumMajorCredits(major1, major2).credits);
console.log('Sum of Minor Credits:', sumMinorCredits(minor1, minor2).credits);