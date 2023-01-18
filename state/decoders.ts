import { Decoder } from 'elm-decoders';
import { Tree } from '../types'

// Decoder is used here to validate the data and then serialize
const treeDecoder: Decoder<Tree> = Decoder.object({
  name: Decoder.string,
  species_name: Decoder.string,
  image: Decoder.string,
}).map(({name, species_name, image}) => ({
  name,
  species: species_name,
  imageUrl: image,
}))

export const treesDecoder = Decoder.object({
  trees: Decoder.array(treeDecoder)
})
