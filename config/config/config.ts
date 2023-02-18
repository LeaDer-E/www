import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `postgres`,
  password: "postgres123#",
  database: "postgres",
  host: "database-1.c9wkguh4fh1g.us-east-1.rds.amazonaws.com",
  aws_region: "",
  aws_profile: "",
  aws_media_bucket: "",
  url: process.env.URL,
  jwt: {
    secret: "damn_it",
  },
};
