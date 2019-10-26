const assert = require("assert");
const request = require("supertest");

const app = require("./server");

describe("express", function() {
  it("responds to /", function(done) {
    request(app)
      .get("/")
      .set("Accept", "text/html")
      .expect("Content-Type", /text/)
      .expect(200, done);
  });
  it("404s everything else", function(done) {
    request(app)
      .get("/foo/bar")
      .expect(404, done);
  });
});
