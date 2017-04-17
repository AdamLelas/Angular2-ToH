import { ToHHopfullyDoesntBreakPage } from './app.po';

describe('to-hhopfully-doesnt-break App', () => {
  let page: ToHHopfullyDoesntBreakPage;

  beforeEach(() => {
    page = new ToHHopfullyDoesntBreakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
