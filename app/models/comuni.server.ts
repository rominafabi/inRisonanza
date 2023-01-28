import { prisma } from "~/db.server";

export type { Comune } from "@prisma/client";

export function getComuniList() {
   return prisma.comune.findMany({
     select: { id: true, nome: true , sigla: true},
     orderBy: {
      nome: 'asc' 
     }
   });
 }

 export function getProvList() {
   return prisma.comune.groupBy({
   by: ['nomeProv','sigla'],
   orderBy: {
    nomeProv: 'asc',
   },
   });
 }

 export function getComuneListByProv(nomeProv : string) {
   return prisma.comune.findMany({
      where: {
         nomeProv: nomeProv,
      },
      select: {id: true, nome: true, sigla: true},
   })
 }