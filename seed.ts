import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const clientes = [
  'Lucas Silva', 'Maria Oliveira', 'João Pereira', 'Ana Costa', 'Pedro Almeida',
  'Mariana Ferreira', 'Felipe Souza', 'Carla Santos', 'Bruno Lima', 'Paula Rocha',
  'Renato Gomes', 'Julia Martins', 'Carlos Dias', 'Fernanda Nunes', 'Eduardo Carvalho',
  'Aline Moreira', 'Rafael Pinto', 'Sofia Alves', 'Gustavo Ramos', 'Beatriz Melo',
  'Thiago Duarte', 'Camila Barros', 'Leonardo Teixeira', 'Larissa Silva', 'André Costa',
  'Patrícia Fernandes', 'Vinicius Moraes', 'Bianca Torres', 'Marcelo Oliveira', 'Natália Lopes',
  'Diego Martins', 'Juliana Ribeiro', 'Fábio Santos', 'Carolina Souza', 'Rodrigo Almeida',
  'Amanda Pereira', 'Letícia Gomes', 'Murilo Costa', 'Débora Ferreira', 'Igor Alves',
  'Vanessa Rocha', 'Maurício Pinto', 'Sandra Melo', 'Renan Barros', 'Paula Nunes',
  'Ricardo Teixeira', 'Tatiana Dias', 'Eduarda Moreira', 'Felipe Rocha', 'Lívia Martins'
]

const jogos = [
  { titulo: 'FIFA 21', preco: 199.90, quantidade: 10 },
  { titulo: 'Call of Duty: Warzone', preco: 250.00, quantidade: 10 },
  { titulo: 'Minecraft', preco: 99.90, quantidade: 10 },
  { titulo: 'The Witcher 3', preco: 120.00, quantidade: 10 },
  { titulo: 'God of War', preco: 180.00, quantidade: 10 },
  { titulo: 'Fortnite', preco: 0.00, quantidade: 10 },
  { titulo: 'Apex Legends', preco: 0.00, quantidade: 10 },
  { titulo: 'Cyberpunk 2077', preco: 220.00, quantidade: 10 },
  { titulo: 'Red Dead Redemption 2', preco: 230.00, quantidade: 10 },
  { titulo: 'Among Us', preco: 20.00, quantidade: 10 },
  { titulo: 'GTA V', preco: 150.00, quantidade: 10 },
  { titulo: 'Overwatch', preco: 180.00, quantidade: 10 },
  { titulo: 'League of Legends', preco: 0.00, quantidade: 10 },
  { titulo: 'Valorant', preco: 0.00, quantidade: 10 },
  { titulo: 'Resident Evil 2', preco: 160.00, quantidade: 10 },
  { titulo: 'Dark Souls III', preco: 140.00, quantidade: 10 },
  { titulo: 'Assassin’s Creed Valhalla', preco: 210.00, quantidade: 10 },
  { titulo: 'Monster Hunter: World', preco: 190.00, quantidade: 10 },
  { titulo: 'FIFA 22', preco: 200.00, quantidade: 10 },
  { titulo: 'Minecraft Dungeons', preco: 90.00, quantidade: 10 },
  { titulo: 'Fall Guys', preco: 60.00, quantidade: 10 },
  { titulo: 'Dead by Daylight', preco: 80.00, quantidade: 10 },
  { titulo: 'Rocket League', preco: 70.00, quantidade: 10 },
  { titulo: 'The Last of Us Part II', preco: 250.00, quantidade: 10 },
  { titulo: 'Halo Infinite', preco: 230.00, quantidade: 10 },
  { titulo: 'Doom Eternal', preco: 170.00, quantidade: 10 },
  { titulo: 'Sea of Thieves', preco: 100.00, quantidade: 10 },
  { titulo: 'Destiny 2', preco: 0.00, quantidade: 10 },
  { titulo: 'Fallout 4', preco: 130.00, quantidade: 10 },
  { titulo: 'The Elder Scrolls V: Skyrim', preco: 110.00, quantidade: 10 },
  { titulo: 'Battlefield V', preco: 150.00, quantidade: 10 },
  { titulo: 'Overwatch 2', preco: 0.00, quantidade: 10 },
  { titulo: 'The Sims 4', preco: 80.00, quantidade: 10 },
  { titulo: 'Animal Crossing: New Horizons', preco: 180.00, quantidade: 10 },
  { titulo: 'Splatoon 2', preco: 160.00, quantidade: 10 },
  { titulo: 'Hades', preco: 90.00, quantidade: 10 },
  { titulo: 'Cuphead', preco: 60.00, quantidade: 10 },
  { titulo: 'Celeste', preco: 70.00, quantidade: 10 },
  { titulo: 'Terraria', preco: 40.00, quantidade: 10 },
  { titulo: 'Borderlands 3', preco: 180.00, quantidade: 10 },
  { titulo: 'Persona 5', preco: 210.00, quantidade: 10 },
  { titulo: 'Marvel’s Spider-Man', preco: 220.00, quantidade: 10 },
  { titulo: 'Ghost of Tsushima', preco: 200.00, quantidade: 10 },
  { titulo: 'Control', preco: 180.00, quantidade: 10 },
  { titulo: 'DOOM', preco: 150.00, quantidade: 10 },
  { titulo: 'Genshin Impact', preco: 0.00, quantidade: 10 },
  { titulo: 'Watch Dogs: Legion', preco: 210.00, quantidade: 10 }
]

async function main() {
  await prisma.venda.deleteMany()
  await prisma.jogo.deleteMany()
  await prisma.cliente.deleteMany()

  for (const nome of clientes) {
    const email = `${nome.toLowerCase().replace(/ /g, '.')}@exemplo.com`
    await prisma.cliente.create({ data: { nome, email } })
  }

  for (const jogo of jogos) {
    await prisma.jogo.create({ data: jogo })
  }

  console.log('sucewsso')
}

main()
  .catch((e) => {
    console.error('Erro', e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
