import { OldOrNotPipe } from './old-or-not.pipe';

describe('OldOrNotPipe', () => {
  it('create an instance', () => {
    const pipe = new OldOrNotPipe();
    expect(pipe).toBeTruthy();
  });
});
