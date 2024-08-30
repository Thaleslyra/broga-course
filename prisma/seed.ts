import { PrismaClient } from "@prisma/client";
import { articles} from "./articles";

const prisma = new PrismaClient();

async function main() {
  console.log("DB seed");
  for (let article in articles ) {
    await prisma.article.create({
      data:{
        title: articles[article].title,
        excerpt: articles[article].excerpt,
        content: articles[article].content,
        image: articles[article].image,
        publishedAt:articles[article].publish_date,
      },
    })

  }
  // ... you will write your Prisma Client queries here
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
