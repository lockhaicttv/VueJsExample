import request from "supertest";
import app from "../server";

describe("Test routes", () => {
  test("Should return 6 elements of News", async () => {
    const response = await request(app).get("/news").send();
    expect(response.body.news.length).toBe(6);
  });
  test("Should return 14 elements of playerList and have a property 'avatar'", async () => {
    const response = await request(app).get("/players").send();
    expect(response.body.players.length).toBe(14);
    expect(response.body.players[0]).toHaveProperty("avatar");
  });
  test("Should return 3 elements of trending", async () => {
    const response = await request(app).get("/players/trending").send();
    expect(response.body.trending.length).toBe(3);
  });
  test("Should return Belgium for homeTeam and Italy for awayTeam", async () => {
    const response = await request(app).get("/details/1").send();
    expect(response.body.MatchDetailsHeading.homeTeam.name).toBe("Belgium");
    expect(response.body.MatchDetailsHeading.awayTeam.name).toBe("Italy");
  });
  test("Should be return 3 array", async () => {
    const response = await request(app).get("/matches").send();
    expect(response.body.QUARTER_FINAL.length).toBe(4);
    expect(response.body.SEMI_FINAL.length).toBe(2);
    expect(response.body.FINAL.length).toBe(1);
  });
  test("Should be return 1 array", async () => {
    const response = await request(app).get("/matches/1").send();
    expect(response.body.DATA.length).toBe(1);
  });
  test("Should return 14 elements in Stats route", async () => {
    const response = await request(app).get("/players").send();
    expect(response.body.players.length).toBe(14);
  });
  test("Should return have a property 'flag_country' and return 'Cristiano Ronaldo' for name of stats[0]", async () => {
    const response = await request(app).get("/players").send();
    expect(response.body.players[0]).toHaveProperty("flag_country");
    expect(response.body.players[0].name).toBe("Cristiano Ronaldo");
  });
  test("should standing route return array", async () => {
    const response = await request(app).get("/standing").send();
    expect(response.body.length).toBe(6);
  });
});
