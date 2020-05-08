import { MovieListPipe } from './movie-list.pipe';

describe('MovieListPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieListPipe();
    expect(pipe).toBeTruthy();
  });
});
