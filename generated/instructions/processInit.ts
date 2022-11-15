/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  InitializeFanoutArgs,
  initializeFanoutArgsBeet,
} from '../types/InitializeFanoutArgs'

/**
 * @category Instructions
 * @category ProcessInit
 * @category generated
 */
export type ProcessInitInstructionArgs = {
  args: InitializeFanoutArgs
}
/**
 * @category Instructions
 * @category ProcessInit
 * @category generated
 */
export const processInitStruct = new beet.FixableBeetArgsStruct<
  ProcessInitInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', initializeFanoutArgsBeet],
  ],
  'ProcessInitInstructionArgs'
)
/**
 * Accounts required by the _processInit_ instruction
 *
 * @property [_writable_, **signer**] authority
 * @property [_writable_] fanout
 * @property [_writable_] holdingAccount
 * @property [] mint
 * @category Instructions
 * @category ProcessInit
 * @category generated
 */
export type ProcessInitInstructionAccounts = {
  authority: web3.PublicKey
  fanout: web3.PublicKey
  holdingAccount: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  mint: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const processInitInstructionDiscriminator = [
  172, 5, 165, 143, 86, 159, 50, 237,
]

/**
 * Creates a _ProcessInit_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ProcessInit
 * @category generated
 */
export function createProcessInitInstruction(
  accounts: ProcessInitInstructionAccounts,
  args: ProcessInitInstructionArgs,
  programId = new web3.PublicKey('84zHEoSwTo6pb259RtmeYQ5KNStik8pib815q7reZjdx')
) {
  const [data] = processInitStruct.serialize({
    instructionDiscriminator: processInitInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.authority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.fanout,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.holdingAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}