const { connection } = require('./');

describe('MongoDB & Mongoose connection', () => {
  let connected = false;

  beforeAll(done => {
    connection.once('open', () => {
      connected = true;
      done();
    });
  });

  afterAll(() => {
    connection.close();
  });

  it('Connected to test database', () => {
    expect(process.env.MONGO_URL).toBeDefined();
    expect(connected).toBe(true);
  });
});