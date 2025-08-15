import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();

    return users;
  },
});

export const addUser = mutation({
  args: {},
  handler: async (ctx) => {
    const isAuthenticated = await ctx.auth.getUserIdentity();

    if (isAuthenticated === null) {
      throw new Error("Not authenticated");
    }

    const userId = await ctx.db.insert("users", { name: "Sirigiri Anudeep" });

    return userId;
  },
});
