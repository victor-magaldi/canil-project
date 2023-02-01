import { data } from '../mock/pet'
import type { PetType } from '../typing/type'

export const Pet = {
  getAll: () => {
    return data
  },

  getFromType: (type: PetType) => {
    return data.filter((item) => item.type === type)
  },

  getFromName: (name: string) => {
    return data.filter(
      (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    )
  },
  getFromRace: (type: PetType) => {
    return data.filter((item) => item.type === type)
  },

  findPet: (id: string) => {
    return data.find((item) => item.id === id)
  },
}
