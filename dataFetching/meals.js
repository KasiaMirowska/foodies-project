import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); //to imitate long loading
  //   throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all(); //async wrapps this line in promise
}
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); //protects agains sql injection attacks as opposed to return db.prepare('SELECT * FROM meals WHERE slug = ?' + slug)
}
