const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
   
    const computerScienceCategory = await database.category.create({
      data: {
        name: "Unique Science",
      },
    });

 
    const categoryId = computerScienceCategory.id;

    await database.course.create({
      data: {
        userId: "user1",
        title: "Introduction to JavaScript",
        description: "Learn the basics of JavaScript programming language.",
        imageUrl: "https://example.com/js.jpg",
        price: 19.99,
        isPublished: true,
        categoryId, // Use the stored category ID here
        chapters: {
          create: [
            {
              title: "Introduction to Variables",
              description: "Understanding variables in JavaScript.",
              position: 1,
              isPublished: true,
              isFree: true,
            },
            {
              title: "Functions and Control Flow",
              description: "Learn about functions and control flow in JavaScript.",
              position: 2,
              isPublished: true,
              isFree: false,
            },
          ],
        },
        attachments: {
          create: {
            name: "Sample Attachment",
            url: "https://example.com/attachment.pdf",
          },
        },
        purchases: {
          create: [
            { userId: "user2" },
            { userId: "user3" },
          ],
        },
      },
    });

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await database.$disconnect();
  }
}

main();
