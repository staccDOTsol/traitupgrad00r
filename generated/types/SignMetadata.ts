/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import * as beet from '@metaplex-foundation/beet'
export type SignMetadata = {
  authority: web3.PublicKey
  fanout: web3.PublicKey
  holdingAccount: web3.PublicKey
  sourceAccount: web3.PublicKey
  tokenAccount: web3.PublicKey
  tokenAccount2: web3.PublicKey
  newUri: web3.PublicKey
  metadata: web3.PublicKey
  tokenProgram: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
  mint: web3.PublicKey
  jare: web3.PublicKey
  ata: web3.PublicKey
  nft: web3.PublicKey
}

/**
 * @category userTypes
 * @category generated
 */
export const signMetadataBeet = new beet.BeetArgsStruct<SignMetadata>(
  [
    ['authority', beetSolana.publicKey],
    ['fanout', beetSolana.publicKey],
    ['holdingAccount', beetSolana.publicKey],
    ['sourceAccount', beetSolana.publicKey],
    ['tokenAccount', beetSolana.publicKey],
    ['tokenAccount2', beetSolana.publicKey],
    ['newUri', beetSolana.publicKey],
    ['metadata', beetSolana.publicKey],
    ['tokenProgram', beetSolana.publicKey],
    ['tokenMetadataProgram', beetSolana.publicKey],
    ['mint', beetSolana.publicKey],
    ['jare', beetSolana.publicKey],
    ['ata', beetSolana.publicKey],
    ['nft', beetSolana.publicKey],
  ],
  'SignMetadata'
)
