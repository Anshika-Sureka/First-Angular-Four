import { AngularFourPage } from './app.po';

describe('angular-four App', () => {
  let page: AngularFourPage;

  beforeEach(() => {
    page = new AngularFourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
