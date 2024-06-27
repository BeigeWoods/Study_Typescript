type Video = {
  title: string;
  author: string;
};

type VideoOptional = {
  title?: string;
  author?: string;
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

const movie: Optional<Video> = {
  title: "dog",
};

const drama: ReadOnly<Video> = {
  title: "bad",
  author: "ellie",
};

drama.author = "abc";
