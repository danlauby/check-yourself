import { CheckYourselfPage } from './app.po';

describe('check-yourself App', function() {
  let page: CheckYourselfPage;

  beforeEach(() => {
    page = new CheckYourselfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
