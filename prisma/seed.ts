import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import comuni from "./comuni.json";

const prisma = new PrismaClient();


async function seed() {
  const email = "rachel@remix.run";
  const data = Array.from(comuni).map(data => ({
    nome : data.comune || "",
    nomeProv: data.den_prov || "",
    sigla: data.sigla || "",
    nomeReg: data.den_reg || "",
    codReg: data.cod_reg || "",
    codiceProvCom: data.pro_com_t || "",
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

    await prisma.operatore.create({
      data: {
        email : "ginopaoli@gmail.com",
        comune : {
          connect : { id : 1},
        },
        socials: {
          create: {
            denominazione: "FACEBOOK",
            link: "https://www.facebook.com",
          }
        },
        passwordOperatore: {
          create: {
            hash: hashedPassword,
          }
        }
      }
    })


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
