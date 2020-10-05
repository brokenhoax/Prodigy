test('Checks if "Title" exists on EventsObj in database', () => {
  class Event {
    constructor(props) {
      this.event = "Data and you!";
    }
  }
  const result = new Event();

  expect(result.event).toBe("Data and you!");
});
