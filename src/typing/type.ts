export type PetType = 'dog' | 'cat' | 'fish'
export type PetSex = 'macho' | 'fêmea'

export type Pet = {
  id: string
  type: PetType
  image: string
  name: string
  color: string
  sex: PetSex
}
