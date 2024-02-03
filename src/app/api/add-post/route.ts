import type { NextRequest } from "next/server";
import { db, posts } from "@/server/db";
export const runtime = "edge";

export async function GET(_request: NextRequest) {
  const time: number = Date.now();

  await db
    .insert(posts)
    .values({ name: "New post..." })
    .returning({ id: posts.id });

  const allPosts = await db.select().from(posts);

  return new Response("All posts: " + JSON.stringify(allPosts) + " " + time);
}
