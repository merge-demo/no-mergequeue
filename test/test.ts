import { expect } from "chai";
import isValidUser from "../lib.ts";

describe("lib", function () {
  describe("#isValidUser()", function () {
    it("should return true for valid users", function () {
      expect(isValidUser("Eli")).to.eq(true);
    });
  });
});
