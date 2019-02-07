const { forwardTo } = require("prisma-binding");

const Query = {
  women: forwardTo("db")

  // async women(parent, args, ctx, info) {
  //   console.log("Getting Items!!");
  //   const women = await ctx.db.query.women();
  //   return women;
  // }
};

module.exports = Query;
