const mongoose = require("mongoose");
const request = require("supertest");
const gravatar = require("gravatar");
const bcrypt = require("bcrypt");

const app = require("../../app");
const { User } = require("../../models/userModel");

const { DB_HOST, PORT = 3000 } = process.env;

describe("test auth routes", () => {
  let server;
  beforeAll(() => (server = app.listen(PORT)));
  afterAll(() => server.close());

  beforeEach((done) => {
    mongoose.connect(DB_HOST).then(() => done());
  });
  afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
	@@ -22,9 +23,26 @@ describe("test auth routes", () => {
  });

  test("POST /api/users/login", async () => {
    const userPassword = "1234567";
    const userEmail = "test1@gmail.com";

    const newUser = {
      email: userEmail,
      password: await bcrypt.hash(userPassword, 10),
      avatarURL: gravatar.url(userEmail),
      verificationToken: "abc",
    };

    const user = await User.create(newUser);

    await User.findByIdAndUpdate(user._id, {
      verify: true,
      verificationToken: null,
    });

    const loginUser = {
      email: userEmail,
      password: userPassword,
    };

    const response = await request(app)
	@@ -34,7 +52,7 @@ describe("test auth routes", () => {
    // the response must have status code 200
    expect(response.statusCode).toBe(200);

    // the response should return a token and an user object
    const { body } = response;
    expect(body.token).toBeTruthy();
    expect(body.user).toBeTruthy();
