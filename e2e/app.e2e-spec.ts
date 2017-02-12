import { LibApplyPage } from './app.po';

describe('lib-apply App', function() {
  let page: LibApplyPage;

  beforeEach(() => {
    page = new LibApplyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
