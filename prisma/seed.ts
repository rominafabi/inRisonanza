import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import comuni from "./comuni.json";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();


async function seed() {
  const email = "rachel@remix.run";
  const amountOfUsers = 48;

  const data = Array.from(comuni).map(data => ({
    nome : data.comune || "",
    nomeProv: data.den_prov || "",
    sigla: data.sigla || "",
    nomeReg: data.den_reg || "",
    codReg: data.cod_reg || "",
    id: data.pro_com_t || "",
  }));

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

    await prisma.comune.createMany({
      data
    });

    await prisma.servizio.create({
      data: {
      denominazione: "Consulto Tarologico",
    }
    })

    for (let i = 1; i < amountOfUsers; i++) {

    await prisma.operatore.create({
      data: {
        email : faker.internet.email(),
        cellulare: faker.phone.number('+39 33# ### ## ##'),
        comune : {
          connect : { id : "001001"},
        },
        servizi: {
          create: {
            assignedAt: new Date(),
            prezzo: 70,
            servizio: {
              connect: {
                id: 1,
              },
            },
            comune: {
              connect: {id : "001001"}
            }
          },
        },
        passwordOperatore: {
          create: {
            hash: hashedPassword,
          }
        },
        pagina: {
          create: {
            nome: faker.name.firstName(),
            cognome: faker.name.lastName(),
            titolo: faker.lorem.lines(),
            biografia: faker.lorem.paragraphs(),
            profilePic: faker.internet.avatar(),
          }
        }
      }
    });
  };
  


  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
