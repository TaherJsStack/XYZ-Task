import { LeadNamePipe } from './lead-name.pipe';

describe('LeadNamePipe', () => {
  it('create an instance', () => {
    const pipe = new LeadNamePipe();
    expect(pipe).toBeTruthy();
  });
});
