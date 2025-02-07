import { PrismaClient } from "@prisma/client";
import articles from "../../src/data/articles.json"
import {slugfy} from "../../src/helpers/slugfy";

const prisma = new PrismaClient();

const isDev = process.env.NODE_ENV === "development";


async function main() {
  console.log("Prisma seed");
  await seedArticles();
}

async function seedArticles() {
  if (!isDev){
    throw new Error("NODE_ENV is not a development environment.");
  }

  //delete all records (truncate)
  await prisma.article.deleteMany();
  await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "Article");
  //

  for ( let article of articles ) {
    const record = await prisma.article.create({
      data: {
        title: article.title,
        slug: slugfy(article.title),
        excerpt:article.excerpt,
        content: article.content,
        image: article.image,
        publishedAt: new Date(article.publish_date),
      }
    });
    console.log("*** created article",record.id,record.title)

  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
