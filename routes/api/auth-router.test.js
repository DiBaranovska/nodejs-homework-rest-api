import mongoose from "mongoose";
import request from "supertest";
import "dotenv/config";

import app from "../../app.js";

const { DB_HOST_TEST, PORT } = process.env;

describe("test signin route", () => {
  let server = null;
  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
    server = app.listen(PORT);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  test("test singin with correct data", async () => {
    const singinData = {
      email: "di@di.com",
      password: "123456",
    };
    const { statusCode, body } = await request(app)
      .post("/users/login")
      .send(singinData);

    expect(statusCode).toBe(200);
  });

  test("test singin answer have token", async () => {
    const singinData = {
      email: "di@di.com",
      password: "123456",
    };
    const { statusCode, body } = await request(app)
      .post("/users/login")
      .send(singinData);

    expect(body).toHaveProperty("token");
  });

  test("test singin check that the answer oject user", async () => {
    const singinData = {
      email: "di@di.com",
      password: "123456",
    };
    const { statusCode, body } = await request(app)
      .post("/users/login")
      .send(singinData);

    const user = body.user;

    expect(body).toHaveProperty("user");
  });
});

test("test singin check that the answer oject with name and password", async () => {
  const singinData = {
    email: "di@di.com",
    password: "123456",
  };
  const { statusCode, body } = await request(app)
    .post("/users/login")
    .send(singinData);

  const user = body.user;

  expect(user).toHaveProperty("email");
});
