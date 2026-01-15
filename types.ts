
export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Feature {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  result: string;
  image: string;
  tags: string[];
  link: string;
}
