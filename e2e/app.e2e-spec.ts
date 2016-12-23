import { SomeProjectPage } from './app.po';

describe('some-project App', function() {
  let page: SomeProjectPage;

  beforeEach(() => {
    page = new SomeProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
