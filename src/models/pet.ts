type Pet = {
  type: 'dog' | 'cat' | 'fish'
  image: string
  name: string
  color: string
  sex: 'macho' | 'fêmea'
}
const data: Array<Pet> = [
  {
    type: 'dog',
    image: 'pastor-alemao.jpg',
    name: 'Pastor-alemão',
    color: 'Amarelo e Preto',
    sex: 'macho',
  },
  {
    type: 'dog',
    image: 'labrador.jpg',
    name: 'Labrador-retriever',
    color: 'Branco',
    sex: 'macho',
  },
  {
    type: 'dog',
    image: 'zwergspitz.jpg',
    name: 'Zwergspitz',
    color: 'Amarelo',
    sex: 'fêmea',
  },
  {
    type: 'dog',
    image: 'husky.jpg',
    name: 'Husky Siberiano',
    color: 'Branco e Preto',
    sex: 'macho',
  },
  {
    type: 'dog',
    image: 'golden.jpg',
    name: 'Golden Retriever',
    color: 'Amarelo',
    sex: 'macho',
  },
  {
    type: 'dog',
    image: 'poodle.jpg',
    name: 'Poodle',
    color: 'Branco',
    sex: 'fêmea',
  },
  {
    type: 'dog',
    image: 'bulldog.jpg',
    name: 'Bulldog',
    color: 'Branco e Amarelo',
    sex: 'macho',
  },
  {
    type: 'cat',
    image: 'persa.jpg',
    name: 'Persa',
    color: 'Amarelo',
    sex: 'macho',
  },
  {
    type: 'cat',
    image: 'mainecoon.jpg',
    name: 'Maine Coon',
    color: 'Preto e Branco',
    sex: 'macho',
  },
  {
    type: 'cat',
    image: 'bengal.jpg',
    name: 'Bengal',
    color: 'Branco, Preto e Amarelo',
    sex: 'fêmea',
  },
  {
    type: 'cat',
    image: 'siames.jpg',
    name: 'Siamês',
    color: 'Amarelo e Preto',
    sex: 'macho',
  },
  {
    type: 'cat',
    image: 'sphynx.jpg',
    name: 'Sphynx',
    color: 'Branco',
    sex: 'macho',
  },
  {
    type: 'fish',
    image: 'neon.jpg',
    name: 'Tetra Neon',
    color: 'Vermelho e Azul',
    sex: 'macho',
  },
  {
    type: 'fish',
    image: 'matogrosso.jpg',
    name: 'Mato Grosso',
    color: 'Laranja',
    sex: 'macho',
  },
  {
    type: 'fish',
    image: 'limpavidro.jpg',
    name: 'Limpa Vidro',
    color: 'Verde e Branco',
    sex: 'macho',
  },
  {
    type: 'fish',
    image: 'tanictis.jpg',
    name: 'Tanictis',
    color: 'Vermelho',
    sex: 'macho',
  },
  {
    type: 'fish',
    image: 'acara.jpg',
    name: 'Acará Bandeira',
    color: 'Preto',
    sex: 'macho',
  },
]
export const Pet = {
  getAll: () => {
    return data
  },
}