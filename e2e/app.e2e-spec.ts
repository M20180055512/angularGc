import { AngularGcPage } from './app.po';

describe('angular-gc App', () => {
  let page: AngularGcPage;

  beforeEach(() => {
    page = new AngularGcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
