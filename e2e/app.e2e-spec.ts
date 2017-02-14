import { HoverExpandPage } from './app.po';

describe('hover-expand App', function() {
  let page: HoverExpandPage;

  beforeEach(() => {
    page = new HoverExpandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
