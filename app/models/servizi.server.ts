import { prisma } from "~/db.server";
export type { Servizio } from "@prisma/client";

export function getServizio(idServizio: number) {
  return prisma.servizio.findFirst({
    select: { id: true, denominazione: true },
    where: {
      id: idServizio,
    },
  });
}

interface Options {
  take?: number;
  skip?: number;
  where?: {
    id?: {
      contains?: string;
      mode?: "insensitive";
    };
    idComune?: {
      contains?: string;
      mode?: "insensitive";
    }
  };
}

type sorts =
  | { createdAt: "asc" }
  | { pagina: { nome: "asc" } }
  | { pagina: { nome: "desc" } }
  | { createdAt: "desc"}

export async function getOperatorsByProvinciaSiglaAndIdServizio(
  provSigla: string,
  idServizio: number,
  options: Options,
  sort: string
) {
  let sorts: sorts = { pagina: { nome: "asc" } };

  switch (sort) {
    case "null":
      sorts = { createdAt: "asc" };
      break;
    case "asc":
      sorts = { pagina: { nome: "asc" } };
      break;
    case "desc":
      sorts = { pagina: { nome: "desc" } };
      break;
    case "recent":
        sorts = { createdAt: "desc"}
        break;
    default:
      sorts = { createdAt: "asc" };
  }

  const comuni = await prisma.comune.findMany({ where: { sigla: provSigla } });
  const comuneIds = comuni.map((comune) => comune.id);
  const operatori = await prisma.operatore.findMany({
    where: { comuneId: { in: comuneIds } },
  });
  const operatoreIds = operatori.map((operatore) => operatore.id);

  const serviziOperatore = await prisma.serviziOperatore.findMany({
    where: { operatoreId: { in: operatoreIds }, servizioId: idServizio },
  });
  const operatoreIdsWithServizio = serviziOperatore.map(
    (servizioOperatore) => servizioOperatore.operatoreId
  );
  const countOperatorsWithService = await prisma.operatore.count({
    where: { id: { in: operatoreIdsWithServizio } },
  });

  if (options.where?.id) {
    const operatorsWithService = await prisma.operatore.findMany({
      where: {
        pagina: {
          nome: {
            contains: options.where?.id.contains,
            mode: options.where.id.mode,
          },
        },
      },
      include: {
        pagina: {
          select: {
            nome: true,
            cognome: true,
            titolo: true,
            profilePic: true,
            id: true,
          },
        },
        comune: true,
        servizi: true,
      },
      orderBy: sorts,
    });

    return { operatorsWithService, countOperatorsWithService, serviziOperatore };
  } else if(options.where?.idComune){
    const operatorsWithService = await prisma.operatore.findMany({
      where: {
        comuneId: options.where?.idComune.contains,
      },
      include: {
        pagina: {
          select: {
            nome: true,
            cognome: true,
            titolo: true,
            profilePic: true,
            id: true,
          },
        },
        comune: true,
        servizi: true,
      },
      orderBy: sorts,
    });
    return { operatorsWithService, countOperatorsWithService, serviziOperatore };
  } else {
    const operatorsWithService = await prisma.operatore.findMany({
      where: { id: { in: operatoreIdsWithServizio } },
      take: options.take,
      skip: options.skip,
      include: {
        pagina: {
          select: {
            nome: true,
            cognome: true,
            titolo: true,
            profilePic: true,
            id: true,
          },
        },
        comune: true,
        servizi: {
          take: 1,
          where: {
            servizioId : idServizio,
            operatoreId : { in :operatoreIdsWithServizio },
          },
        },
      },
      orderBy: sorts,
    });

    return { operatorsWithService, countOperatorsWithService, serviziOperatore };
  }
}

export async function getServicesInTheAreaByComuneId(id: string) {
  const operatori = await prisma.operatore.findMany({
    where: { comuneId: id },
  });
  const operatoreIds = operatori.map((operatore) => operatore.id);
  const serviziOperatore = await prisma.serviziOperatore.findMany({
    where: { operatoreId: { in: operatoreIds } },
  });
  const servizioIds = serviziOperatore.map(
    (servizioOperatore) => servizioOperatore.servizioId
  );
  const servizi = await prisma.servizio.findMany({
    where: { id: { in: servizioIds } },
  });
  return servizi;
}

export async function getServicesInTheAreaByProvinciaId(provincia: string) {
  const comuni = await prisma.comune.findMany({ where: { sigla: provincia } });
  const comuneIds = comuni.map((comune) => comune.id);
  const operatori = await prisma.operatore.findMany({
    where: { comuneId: { in: comuneIds } },
  });
  const operatoreIds = operatori.map((operatore) => operatore.id);
  const serviziOperatore = await prisma.serviziOperatore.findMany({
    where: { operatoreId: { in: operatoreIds } },
  });
  const servizioIds = serviziOperatore.map(
    (servizioOperatore) => servizioOperatore.servizioId
  );
  const servizi = await prisma.servizio.findMany({
    where: { id: { in: servizioIds } },
  });
  return servizi;
}
