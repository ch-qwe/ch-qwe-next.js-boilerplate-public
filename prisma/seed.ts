import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "demo@example.com" },
    update: {},
    create: {
      email: "demo@example.com",
      name: "Demo User",
      posts: {
        create: [
          { title: "First Post", content: "Hello World", published: true },
          { title: "Draft Post", content: "Work in progress" },
        ],
      },
    },
  });

  console.log("Seeded user:", user);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
