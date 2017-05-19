import { CalendarFrontendPage } from './app.po';

describe('calendar-frontend App', () => {
  let page: CalendarFrontendPage;

  beforeEach(() => {
    page = new CalendarFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
