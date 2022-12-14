"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationAlreadyMadeError = exports.ReservationNotSetError = exports.ReservationDoesNotExistError = exports.ReservationExistsError = exports.ShareTotalMustBe100Error = exports.NoBalanceInAccountForAuthorizationError = exports.OwnerMismatchError = exports.PrimarySaleCanOnlyBeFlippedToTrueError = exports.InvalidBasisPointsError = exports.CreatorNotFoundError = exports.NoCreatorsPresentOnMetadataError = exports.MustBeOneOfCreatorsError = exports.CreatorsMustBeAtleastOneError = exports.CreatorsTooLongError = exports.DisabledError = exports.AuthorizationTokenAccountOwnerMismatchError = exports.PrintingMintAuthorizationAccountMismatchError = exports.NotEnoughTokensError = exports.TokenAccountMintMismatchV2Error = exports.TokenAccountMintMismatchError = exports.OneTimePrintingAuthMintMismatchError = exports.PrintingMintMismatchError = exports.DerivedKeyInvalidError = exports.TokenAccountOneTimeAuthMintMismatchError = exports.TokenBurnFailedError = exports.EditionMintDecimalsShouldBeZeroError = exports.OneTimePrintingAuthorizationMintDecimalsShouldBeZeroError = exports.PrintingMintDecimalsShouldBeZeroError = exports.EditionAlreadyMintedError = exports.DestinationMintMismatchError = exports.MasterRecordMismatchError = exports.TokenMintToFailedError = exports.MaxEditionsMintedAlreadyError = exports.EditionsMustHaveExactlyOneTokenError = exports.MintMismatchError = exports.UpdateAuthorityMustBeEqualToMetadataAuthorityAndSignerError = exports.UriTooLongError = exports.SymbolTooLongError = exports.NameTooLongError = exports.InvalidMintAuthorityError = exports.NotMintAuthorityError = exports.UpdateAuthorityIsNotSignerError = exports.UpdateAuthorityIncorrectError = exports.InvalidEditionKeyError = exports.InvalidMetadataKeyError = exports.UninitializedError = exports.AlreadyInitializedError = exports.NotRentExemptError = exports.InstructionPackErrorError = exports.InstructionUnpackErrorError = void 0;
exports.RevokeCollectionAuthoritySignerIncorrectError = exports.InvalidUserError = exports.EditionOverrideCannotBeZeroError = exports.NotAllowedToChangeSellerFeeBasisPointsError = exports.CannotWipeVerifiedCreatorsError = exports.CannotRemoveVerifiedCreatorError = exports.CannotAdjustVerifiedCreatorError = exports.InvalidDelegateError = exports.InvalidFreezeAuthorityError = exports.InvalidCollectionAuthorityRecordError = exports.InvalidUseAuthorityRecordError = exports.CollectionAuthorityDoesNotExistError = exports.CollectionAuthorityRecordAlreadyExistsError = exports.NotEnoughUsesError = exports.UnusableError = exports.UseAuthorityRecordAlreadyRevokedError = exports.UseAuthorityRecordAlreadyExistsError = exports.CollectionMustBeAUniqueMasterEditionError = exports.InvalidCollectionUpdateAuthorityError = exports.CollectionNotFoundError = exports.CannotChangeUsesAfterFirstUseError = exports.CannotChangeUseMethodAfterFirstUseError = exports.InvalidUseMethodError = exports.MustBeBurnedError = exports.RemovedError = exports.CollectionCannotBeVerifiedInThisInstructionError = exports.IsMutableCanOnlyBeFlippedToFalseError = exports.ReservationArrayShouldBeSizeOneError = exports.InvalidEditionIndexError = exports.OneTimeAuthMintSupplyMustBeZeroForConversionError = exports.PrintingMintSupplyMustBeZeroForConversionError = exports.InvalidOwnerError = exports.InvalidOperationError = exports.TriedToReplaceAnExistingReservationError = exports.ReservationNotCompleteError = exports.BeyondAlottedAddressSizeError = exports.DataTypeMismatchError = exports.InvalidTokenProgramError = exports.ReservationSpotsRemainingShouldMatchTotalSpotsAtStartError = exports.DuplicateCreatorAddressError = exports.DataIsImmutableError = exports.PrintingWouldBreachMaximumSupplyError = exports.IncorrectOwnerError = exports.SpotMismatchError = exports.CannotUnverifyAnotherCreatorError = exports.CannotVerifyAnotherCreatorError = exports.AddressNotInReservationError = exports.ReservationBreachesMaximumSupplyError = exports.NumericalOverflowErrorError = exports.BeyondMaxAddressSizeError = void 0;
exports.errorFromName = exports.errorFromCode = exports.InvalidCollectionSizeChangeError = exports.NoFreezeAuthoritySetError = exports.BorshSerializationErrorError = exports.InsufficientTokensError = exports.MustBeNonFungibleError = exports.InvalidSystemProgramError = exports.MustBeEscrowAuthorityError = exports.InvalidEscrowBumpSeedError = exports.MustUnverifyError = exports.EditionNumberGreaterThanMaxSupplyError = exports.PrintEditionDoesNotMatchMasterEditionError = exports.ReservationListDeprecatedError = exports.InvalidEditionMarkerError = exports.InvalidPrintEditionError = exports.InvalidMasterEditionError = exports.NotAPrintEditionError = exports.AlreadyUnverifiedError = exports.AlreadyVerifiedError = exports.CollectionMasterEditionAccountInvalidError = exports.CannotUpdateVerifiedCollectionError = exports.BorshDeserializationErrorError = exports.MasterEditionHasPrintsError = exports.NotAMasterEditionError = exports.MissingEditionAccountError = exports.CouldNotDetermineTokenStandardError = exports.NotACollectionParentError = exports.NotVerifiedMemberOfCollectionError = exports.NotAMemberOfCollectionError = exports.MissingCollectionMetadataError = exports.SizedCollectionError = exports.UnsizedCollectionError = exports.TokenCloseFailedError = void 0;
const createErrorFromCodeLookup = new Map();
const createErrorFromNameLookup = new Map();
class InstructionUnpackErrorError extends Error {
    constructor() {
        super('Failed to unpack instruction data');
        this.code = 0x0;
        this.name = 'InstructionUnpackError';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InstructionUnpackErrorError);
        }
    }
}
exports.InstructionUnpackErrorError = InstructionUnpackErrorError;
createErrorFromCodeLookup.set(0x0, () => new InstructionUnpackErrorError());
createErrorFromNameLookup.set('InstructionUnpackError', () => new InstructionUnpackErrorError());
class InstructionPackErrorError extends Error {
    constructor() {
        super('Failed to pack instruction data');
        this.code = 0x1;
        this.name = 'InstructionPackError';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InstructionPackErrorError);
        }
    }
}
exports.InstructionPackErrorError = InstructionPackErrorError;
createErrorFromCodeLookup.set(0x1, () => new InstructionPackErrorError());
createErrorFromNameLookup.set('InstructionPackError', () => new InstructionPackErrorError());
class NotRentExemptError extends Error {
    constructor() {
        super('Lamport balance below rent-exempt threshold');
        this.code = 0x2;
        this.name = 'NotRentExempt';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NotRentExemptError);
        }
    }
}
exports.NotRentExemptError = NotRentExemptError;
createErrorFromCodeLookup.set(0x2, () => new NotRentExemptError());
createErrorFromNameLookup.set('NotRentExempt', () => new NotRentExemptError());
class AlreadyInitializedError extends Error {
    constructor() {
        super('Already initialized');
        this.code = 0x3;
        this.name = 'AlreadyInitialized';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, AlreadyInitializedError);
        }
    }
}
exports.AlreadyInitializedError = AlreadyInitializedError;
createErrorFromCodeLookup.set(0x3, () => new AlreadyInitializedError());
createErrorFromNameLookup.set('AlreadyInitialized', () => new AlreadyInitializedError());
class UninitializedError extends Error {
    constructor() {
        super('Uninitialized');
        this.code = 0x4;
        this.name = 'Uninitialized';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UninitializedError);
        }
    }
}
exports.UninitializedError = UninitializedError;
createErrorFromCodeLookup.set(0x4, () => new UninitializedError());
createErrorFromNameLookup.set('Uninitialized', () => new UninitializedError());
class InvalidMetadataKeyError extends Error {
    constructor() {
        super(" Metadata's key must match seed of ['metadata', program id, mint] provided");
        this.code = 0x5;
        this.name = 'InvalidMetadataKey';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidMetadataKeyError);
        }
    }
}
exports.InvalidMetadataKeyError = InvalidMetadataKeyError;
createErrorFromCodeLookup.set(0x5, () => new InvalidMetadataKeyError());
createErrorFromNameLookup.set('InvalidMetadataKey', () => new InvalidMetadataKeyError());
class InvalidEditionKeyError extends Error {
    constructor() {
        super("Edition's key must match seed of ['metadata', program id, name, 'edition'] provided");
        this.code = 0x6;
        this.name = 'InvalidEditionKey';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidEditionKeyError);
        }
    }
}
exports.InvalidEditionKeyError = InvalidEditionKeyError;
createErrorFromCodeLookup.set(0x6, () => new InvalidEditionKeyError());
createErrorFromNameLookup.set('InvalidEditionKey', () => new InvalidEditionKeyError());
class UpdateAuthorityIncorrectError extends Error {
    constructor() {
        super('Update Authority given does not match');
        this.code = 0x7;
        this.name = 'UpdateAuthorityIncorrect';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UpdateAuthorityIncorrectError);
        }
    }
}
exports.UpdateAuthorityIncorrectError = UpdateAuthorityIncorrectError;
createErrorFromCodeLookup.set(0x7, () => new UpdateAuthorityIncorrectError());
createErrorFromNameLookup.set('UpdateAuthorityIncorrect', () => new UpdateAuthorityIncorrectError());
class UpdateAuthorityIsNotSignerError extends Error {
    constructor() {
        super('Update Authority needs to be signer to update metadata');
        this.code = 0x8;
        this.name = 'UpdateAuthorityIsNotSigner';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UpdateAuthorityIsNotSignerError);
        }
    }
}
exports.UpdateAuthorityIsNotSignerError = UpdateAuthorityIsNotSignerError;
createErrorFromCodeLookup.set(0x8, () => new UpdateAuthorityIsNotSignerError());
createErrorFromNameLookup.set('UpdateAuthorityIsNotSigner', () => new UpdateAuthorityIsNotSignerError());
class NotMintAuthorityError extends Error {
    constructor() {
        super('You must be the mint authority and signer on this transaction');
        this.code = 0x9;
        this.name = 'NotMintAuthority';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NotMintAuthorityError);
        }
    }
}
exports.NotMintAuthorityError = NotMintAuthorityError;
createErrorFromCodeLookup.set(0x9, () => new NotMintAuthorityError());
createErrorFromNameLookup.set('NotMintAuthority', () => new NotMintAuthorityError());
class InvalidMintAuthorityError extends Error {
    constructor() {
        super('Mint authority provided does not match the authority on the mint');
        this.code = 0xa;
        this.name = 'InvalidMintAuthority';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidMintAuthorityError);
        }
    }
}
exports.InvalidMintAuthorityError = InvalidMintAuthorityError;
createErrorFromCodeLookup.set(0xa, () => new InvalidMintAuthorityError());
createErrorFromNameLookup.set('InvalidMintAuthority', () => new InvalidMintAuthorityError());
class NameTooLongError extends Error {
    constructor() {
        super('Name too long');
        this.code = 0xb;
        this.name = 'NameTooLong';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NameTooLongError);
        }
    }
}
exports.NameTooLongError = NameTooLongError;
createErrorFromCodeLookup.set(0xb, () => new NameTooLongError());
createErrorFromNameLookup.set('NameTooLong', () => new NameTooLongError());
class SymbolTooLongError extends Error {
    constructor() {
        super('Symbol too long');
        this.code = 0xc;
        this.name = 'SymbolTooLong';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, SymbolTooLongError);
        }
    }
}
exports.SymbolTooLongError = SymbolTooLongError;
createErrorFromCodeLookup.set(0xc, () => new SymbolTooLongError());
createErrorFromNameLookup.set('SymbolTooLong', () => new SymbolTooLongError());
class UriTooLongError extends Error {
    constructor() {
        super('URI too long');
        this.code = 0xd;
        this.name = 'UriTooLong';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UriTooLongError);
        }
    }
}
exports.UriTooLongError = UriTooLongError;
createErrorFromCodeLookup.set(0xd, () => new UriTooLongError());
createErrorFromNameLookup.set('UriTooLong', () => new UriTooLongError());
class UpdateAuthorityMustBeEqualToMetadataAuthorityAndSignerError extends Error {
    constructor() {
        super("Update authority must be equivalent to the metadata's authority and also signer of this transaction");
        this.code = 0xe;
        this.name = 'UpdateAuthorityMustBeEqualToMetadataAuthorityAndSigner';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UpdateAuthorityMustBeEqualToMetadataAuthorityAndSignerError);
        }
    }
}
exports.UpdateAuthorityMustBeEqualToMetadataAuthorityAndSignerError = UpdateAuthorityMustBeEqualToMetadataAuthorityAndSignerError;
createErrorFromCodeLookup.set(0xe, () => new UpdateAuthorityMustBeEqualToMetadataAuthorityAndSignerError());
createErrorFromNameLookup.set('UpdateAuthorityMustBeEqualToMetadataAuthorityAndSigner', () => new UpdateAuthorityMustBeEqualToMetadataAuthorityAndSignerError());
class MintMismatchError extends Error {
    constructor() {
        super('Mint given does not match mint on Metadata');
        this.code = 0xf;
        this.name = 'MintMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MintMismatchError);
        }
    }
}
exports.MintMismatchError = MintMismatchError;
createErrorFromCodeLookup.set(0xf, () => new MintMismatchError());
createErrorFromNameLookup.set('MintMismatch', () => new MintMismatchError());
class EditionsMustHaveExactlyOneTokenError extends Error {
    constructor() {
        super('Editions must have exactly one token');
        this.code = 0x10;
        this.name = 'EditionsMustHaveExactlyOneToken';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, EditionsMustHaveExactlyOneTokenError);
        }
    }
}
exports.EditionsMustHaveExactlyOneTokenError = EditionsMustHaveExactlyOneTokenError;
createErrorFromCodeLookup.set(0x10, () => new EditionsMustHaveExactlyOneTokenError());
createErrorFromNameLookup.set('EditionsMustHaveExactlyOneToken', () => new EditionsMustHaveExactlyOneTokenError());
class MaxEditionsMintedAlreadyError extends Error {
    constructor() {
        super('Maximum editions printed already');
        this.code = 0x11;
        this.name = 'MaxEditionsMintedAlready';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MaxEditionsMintedAlreadyError);
        }
    }
}
exports.MaxEditionsMintedAlreadyError = MaxEditionsMintedAlreadyError;
createErrorFromCodeLookup.set(0x11, () => new MaxEditionsMintedAlreadyError());
createErrorFromNameLookup.set('MaxEditionsMintedAlready', () => new MaxEditionsMintedAlreadyError());
class TokenMintToFailedError extends Error {
    constructor() {
        super('Token mint to failed');
        this.code = 0x12;
        this.name = 'TokenMintToFailed';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, TokenMintToFailedError);
        }
    }
}
exports.TokenMintToFailedError = TokenMintToFailedError;
createErrorFromCodeLookup.set(0x12, () => new TokenMintToFailedError());
createErrorFromNameLookup.set('TokenMintToFailed', () => new TokenMintToFailedError());
class MasterRecordMismatchError extends Error {
    constructor() {
        super('The master edition record passed must match the master record on the edition given');
        this.code = 0x13;
        this.name = 'MasterRecordMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MasterRecordMismatchError);
        }
    }
}
exports.MasterRecordMismatchError = MasterRecordMismatchError;
createErrorFromCodeLookup.set(0x13, () => new MasterRecordMismatchError());
createErrorFromNameLookup.set('MasterRecordMismatch', () => new MasterRecordMismatchError());
class DestinationMintMismatchError extends Error {
    constructor() {
        super('The destination account does not have the right mint');
        this.code = 0x14;
        this.name = 'DestinationMintMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, DestinationMintMismatchError);
        }
    }
}
exports.DestinationMintMismatchError = DestinationMintMismatchError;
createErrorFromCodeLookup.set(0x14, () => new DestinationMintMismatchError());
createErrorFromNameLookup.set('DestinationMintMismatch', () => new DestinationMintMismatchError());
class EditionAlreadyMintedError extends Error {
    constructor() {
        super('An edition can only mint one of its kind!');
        this.code = 0x15;
        this.name = 'EditionAlreadyMinted';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, EditionAlreadyMintedError);
        }
    }
}
exports.EditionAlreadyMintedError = EditionAlreadyMintedError;
createErrorFromCodeLookup.set(0x15, () => new EditionAlreadyMintedError());
createErrorFromNameLookup.set('EditionAlreadyMinted', () => new EditionAlreadyMintedError());
class PrintingMintDecimalsShouldBeZeroError extends Error {
    constructor() {
        super('Printing mint decimals should be zero');
        this.code = 0x16;
        this.name = 'PrintingMintDecimalsShouldBeZero';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PrintingMintDecimalsShouldBeZeroError);
        }
    }
}
exports.PrintingMintDecimalsShouldBeZeroError = PrintingMintDecimalsShouldBeZeroError;
createErrorFromCodeLookup.set(0x16, () => new PrintingMintDecimalsShouldBeZeroError());
createErrorFromNameLookup.set('PrintingMintDecimalsShouldBeZero', () => new PrintingMintDecimalsShouldBeZeroError());
class OneTimePrintingAuthorizationMintDecimalsShouldBeZeroError extends Error {
    constructor() {
        super('OneTimePrintingAuthorization mint decimals should be zero');
        this.code = 0x17;
        this.name = 'OneTimePrintingAuthorizationMintDecimalsShouldBeZero';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, OneTimePrintingAuthorizationMintDecimalsShouldBeZeroError);
        }
    }
}
exports.OneTimePrintingAuthorizationMintDecimalsShouldBeZeroError = OneTimePrintingAuthorizationMintDecimalsShouldBeZeroError;
createErrorFromCodeLookup.set(0x17, () => new OneTimePrintingAuthorizationMintDecimalsShouldBeZeroError());
createErrorFromNameLookup.set('OneTimePrintingAuthorizationMintDecimalsShouldBeZero', () => new OneTimePrintingAuthorizationMintDecimalsShouldBeZeroError());
class EditionMintDecimalsShouldBeZeroError extends Error {
    constructor() {
        super('EditionMintDecimalsShouldBeZero');
        this.code = 0x18;
        this.name = 'EditionMintDecimalsShouldBeZero';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, EditionMintDecimalsShouldBeZeroError);
        }
    }
}
exports.EditionMintDecimalsShouldBeZeroError = EditionMintDecimalsShouldBeZeroError;
createErrorFromCodeLookup.set(0x18, () => new EditionMintDecimalsShouldBeZeroError());
createErrorFromNameLookup.set('EditionMintDecimalsShouldBeZero', () => new EditionMintDecimalsShouldBeZeroError());
class TokenBurnFailedError extends Error {
    constructor() {
        super('Token burn failed');
        this.code = 0x19;
        this.name = 'TokenBurnFailed';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, TokenBurnFailedError);
        }
    }
}
exports.TokenBurnFailedError = TokenBurnFailedError;
createErrorFromCodeLookup.set(0x19, () => new TokenBurnFailedError());
createErrorFromNameLookup.set('TokenBurnFailed', () => new TokenBurnFailedError());
class TokenAccountOneTimeAuthMintMismatchError extends Error {
    constructor() {
        super('The One Time authorization mint does not match that on the token account!');
        this.code = 0x1a;
        this.name = 'TokenAccountOneTimeAuthMintMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, TokenAccountOneTimeAuthMintMismatchError);
        }
    }
}
exports.TokenAccountOneTimeAuthMintMismatchError = TokenAccountOneTimeAuthMintMismatchError;
createErrorFromCodeLookup.set(0x1a, () => new TokenAccountOneTimeAuthMintMismatchError());
createErrorFromNameLookup.set('TokenAccountOneTimeAuthMintMismatch', () => new TokenAccountOneTimeAuthMintMismatchError());
class DerivedKeyInvalidError extends Error {
    constructor() {
        super('Derived key invalid');
        this.code = 0x1b;
        this.name = 'DerivedKeyInvalid';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, DerivedKeyInvalidError);
        }
    }
}
exports.DerivedKeyInvalidError = DerivedKeyInvalidError;
createErrorFromCodeLookup.set(0x1b, () => new DerivedKeyInvalidError());
createErrorFromNameLookup.set('DerivedKeyInvalid', () => new DerivedKeyInvalidError());
class PrintingMintMismatchError extends Error {
    constructor() {
        super('The Printing mint does not match that on the master edition!');
        this.code = 0x1c;
        this.name = 'PrintingMintMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PrintingMintMismatchError);
        }
    }
}
exports.PrintingMintMismatchError = PrintingMintMismatchError;
createErrorFromCodeLookup.set(0x1c, () => new PrintingMintMismatchError());
createErrorFromNameLookup.set('PrintingMintMismatch', () => new PrintingMintMismatchError());
class OneTimePrintingAuthMintMismatchError extends Error {
    constructor() {
        super('The One Time Printing Auth mint does not match that on the master edition!');
        this.code = 0x1d;
        this.name = 'OneTimePrintingAuthMintMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, OneTimePrintingAuthMintMismatchError);
        }
    }
}
exports.OneTimePrintingAuthMintMismatchError = OneTimePrintingAuthMintMismatchError;
createErrorFromCodeLookup.set(0x1d, () => new OneTimePrintingAuthMintMismatchError());
createErrorFromNameLookup.set('OneTimePrintingAuthMintMismatch', () => new OneTimePrintingAuthMintMismatchError());
class TokenAccountMintMismatchError extends Error {
    constructor() {
        super('The mint of the token account does not match the Printing mint!');
        this.code = 0x1e;
        this.name = 'TokenAccountMintMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, TokenAccountMintMismatchError);
        }
    }
}
exports.TokenAccountMintMismatchError = TokenAccountMintMismatchError;
createErrorFromCodeLookup.set(0x1e, () => new TokenAccountMintMismatchError());
createErrorFromNameLookup.set('TokenAccountMintMismatch', () => new TokenAccountMintMismatchError());
class TokenAccountMintMismatchV2Error extends Error {
    constructor() {
        super('The mint of the token account does not match the master metadata mint!');
        this.code = 0x1f;
        this.name = 'TokenAccountMintMismatchV2';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, TokenAccountMintMismatchV2Error);
        }
    }
}
exports.TokenAccountMintMismatchV2Error = TokenAccountMintMismatchV2Error;
createErrorFromCodeLookup.set(0x1f, () => new TokenAccountMintMismatchV2Error());
createErrorFromNameLookup.set('TokenAccountMintMismatchV2', () => new TokenAccountMintMismatchV2Error());
class NotEnoughTokensError extends Error {
    constructor() {
        super('Not enough tokens to mint a limited edition');
        this.code = 0x20;
        this.name = 'NotEnoughTokens';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NotEnoughTokensError);
        }
    }
}
exports.NotEnoughTokensError = NotEnoughTokensError;
createErrorFromCodeLookup.set(0x20, () => new NotEnoughTokensError());
createErrorFromNameLookup.set('NotEnoughTokens', () => new NotEnoughTokensError());
class PrintingMintAuthorizationAccountMismatchError extends Error {
    constructor() {
        super('The mint on your authorization token holding account does not match your Printing mint!');
        this.code = 0x21;
        this.name = 'PrintingMintAuthorizationAccountMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PrintingMintAuthorizationAccountMismatchError);
        }
    }
}
exports.PrintingMintAuthorizationAccountMismatchError = PrintingMintAuthorizationAccountMismatchError;
createErrorFromCodeLookup.set(0x21, () => new PrintingMintAuthorizationAccountMismatchError());
createErrorFromNameLookup.set('PrintingMintAuthorizationAccountMismatch', () => new PrintingMintAuthorizationAccountMismatchError());
class AuthorizationTokenAccountOwnerMismatchError extends Error {
    constructor() {
        super('The authorization token account has a different owner than the update authority for the master edition!');
        this.code = 0x22;
        this.name = 'AuthorizationTokenAccountOwnerMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, AuthorizationTokenAccountOwnerMismatchError);
        }
    }
}
exports.AuthorizationTokenAccountOwnerMismatchError = AuthorizationTokenAccountOwnerMismatchError;
createErrorFromCodeLookup.set(0x22, () => new AuthorizationTokenAccountOwnerMismatchError());
createErrorFromNameLookup.set('AuthorizationTokenAccountOwnerMismatch', () => new AuthorizationTokenAccountOwnerMismatchError());
class DisabledError extends Error {
    constructor() {
        super('This feature is currently disabled.');
        this.code = 0x23;
        this.name = 'Disabled';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, DisabledError);
        }
    }
}
exports.DisabledError = DisabledError;
createErrorFromCodeLookup.set(0x23, () => new DisabledError());
createErrorFromNameLookup.set('Disabled', () => new DisabledError());
class CreatorsTooLongError extends Error {
    constructor() {
        super('Creators list too long');
        this.code = 0x24;
        this.name = 'CreatorsTooLong';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CreatorsTooLongError);
        }
    }
}
exports.CreatorsTooLongError = CreatorsTooLongError;
createErrorFromCodeLookup.set(0x24, () => new CreatorsTooLongError());
createErrorFromNameLookup.set('CreatorsTooLong', () => new CreatorsTooLongError());
class CreatorsMustBeAtleastOneError extends Error {
    constructor() {
        super('Creators must be at least one if set');
        this.code = 0x25;
        this.name = 'CreatorsMustBeAtleastOne';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CreatorsMustBeAtleastOneError);
        }
    }
}
exports.CreatorsMustBeAtleastOneError = CreatorsMustBeAtleastOneError;
createErrorFromCodeLookup.set(0x25, () => new CreatorsMustBeAtleastOneError());
createErrorFromNameLookup.set('CreatorsMustBeAtleastOne', () => new CreatorsMustBeAtleastOneError());
class MustBeOneOfCreatorsError extends Error {
    constructor() {
        super('If using a creators array, you must be one of the creators listed');
        this.code = 0x26;
        this.name = 'MustBeOneOfCreators';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MustBeOneOfCreatorsError);
        }
    }
}
exports.MustBeOneOfCreatorsError = MustBeOneOfCreatorsError;
createErrorFromCodeLookup.set(0x26, () => new MustBeOneOfCreatorsError());
createErrorFromNameLookup.set('MustBeOneOfCreators', () => new MustBeOneOfCreatorsError());
class NoCreatorsPresentOnMetadataError extends Error {
    constructor() {
        super('This metadata does not have creators');
        this.code = 0x27;
        this.name = 'NoCreatorsPresentOnMetadata';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NoCreatorsPresentOnMetadataError);
        }
    }
}
exports.NoCreatorsPresentOnMetadataError = NoCreatorsPresentOnMetadataError;
createErrorFromCodeLookup.set(0x27, () => new NoCreatorsPresentOnMetadataError());
createErrorFromNameLookup.set('NoCreatorsPresentOnMetadata', () => new NoCreatorsPresentOnMetadataError());
class CreatorNotFoundError extends Error {
    constructor() {
        super('This creator address was not found');
        this.code = 0x28;
        this.name = 'CreatorNotFound';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CreatorNotFoundError);
        }
    }
}
exports.CreatorNotFoundError = CreatorNotFoundError;
createErrorFromCodeLookup.set(0x28, () => new CreatorNotFoundError());
createErrorFromNameLookup.set('CreatorNotFound', () => new CreatorNotFoundError());
class InvalidBasisPointsError extends Error {
    constructor() {
        super('Basis points cannot be more than 10000');
        this.code = 0x29;
        this.name = 'InvalidBasisPoints';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidBasisPointsError);
        }
    }
}
exports.InvalidBasisPointsError = InvalidBasisPointsError;
createErrorFromCodeLookup.set(0x29, () => new InvalidBasisPointsError());
createErrorFromNameLookup.set('InvalidBasisPoints', () => new InvalidBasisPointsError());
class PrimarySaleCanOnlyBeFlippedToTrueError extends Error {
    constructor() {
        super('Primary sale can only be flipped to true and is immutable');
        this.code = 0x2a;
        this.name = 'PrimarySaleCanOnlyBeFlippedToTrue';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PrimarySaleCanOnlyBeFlippedToTrueError);
        }
    }
}
exports.PrimarySaleCanOnlyBeFlippedToTrueError = PrimarySaleCanOnlyBeFlippedToTrueError;
createErrorFromCodeLookup.set(0x2a, () => new PrimarySaleCanOnlyBeFlippedToTrueError());
createErrorFromNameLookup.set('PrimarySaleCanOnlyBeFlippedToTrue', () => new PrimarySaleCanOnlyBeFlippedToTrueError());
class OwnerMismatchError extends Error {
    constructor() {
        super('Owner does not match that on the account given');
        this.code = 0x2b;
        this.name = 'OwnerMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, OwnerMismatchError);
        }
    }
}
exports.OwnerMismatchError = OwnerMismatchError;
createErrorFromCodeLookup.set(0x2b, () => new OwnerMismatchError());
createErrorFromNameLookup.set('OwnerMismatch', () => new OwnerMismatchError());
class NoBalanceInAccountForAuthorizationError extends Error {
    constructor() {
        super('This account has no tokens to be used for authorization');
        this.code = 0x2c;
        this.name = 'NoBalanceInAccountForAuthorization';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NoBalanceInAccountForAuthorizationError);
        }
    }
}
exports.NoBalanceInAccountForAuthorizationError = NoBalanceInAccountForAuthorizationError;
createErrorFromCodeLookup.set(0x2c, () => new NoBalanceInAccountForAuthorizationError());
createErrorFromNameLookup.set('NoBalanceInAccountForAuthorization', () => new NoBalanceInAccountForAuthorizationError());
class ShareTotalMustBe100Error extends Error {
    constructor() {
        super('Share total must equal 100 for creator array');
        this.code = 0x2d;
        this.name = 'ShareTotalMustBe100';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ShareTotalMustBe100Error);
        }
    }
}
exports.ShareTotalMustBe100Error = ShareTotalMustBe100Error;
createErrorFromCodeLookup.set(0x2d, () => new ShareTotalMustBe100Error());
createErrorFromNameLookup.set('ShareTotalMustBe100', () => new ShareTotalMustBe100Error());
class ReservationExistsError extends Error {
    constructor() {
        super('This reservation list already exists!');
        this.code = 0x2e;
        this.name = 'ReservationExists';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ReservationExistsError);
        }
    }
}
exports.ReservationExistsError = ReservationExistsError;
createErrorFromCodeLookup.set(0x2e, () => new ReservationExistsError());
createErrorFromNameLookup.set('ReservationExists', () => new ReservationExistsError());
class ReservationDoesNotExistError extends Error {
    constructor() {
        super('This reservation list does not exist!');
        this.code = 0x2f;
        this.name = 'ReservationDoesNotExist';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ReservationDoesNotExistError);
        }
    }
}
exports.ReservationDoesNotExistError = ReservationDoesNotExistError;
createErrorFromCodeLookup.set(0x2f, () => new ReservationDoesNotExistError());
createErrorFromNameLookup.set('ReservationDoesNotExist', () => new ReservationDoesNotExistError());
class ReservationNotSetError extends Error {
    constructor() {
        super('This reservation list exists but was never set with reservations');
        this.code = 0x30;
        this.name = 'ReservationNotSet';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ReservationNotSetError);
        }
    }
}
exports.ReservationNotSetError = ReservationNotSetError;
createErrorFromCodeLookup.set(0x30, () => new ReservationNotSetError());
createErrorFromNameLookup.set('ReservationNotSet', () => new ReservationNotSetError());
class ReservationAlreadyMadeError extends Error {
    constructor() {
        super('This reservation list has already been set!');
        this.code = 0x31;
        this.name = 'ReservationAlreadyMade';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ReservationAlreadyMadeError);
        }
    }
}
exports.ReservationAlreadyMadeError = ReservationAlreadyMadeError;
createErrorFromCodeLookup.set(0x31, () => new ReservationAlreadyMadeError());
createErrorFromNameLookup.set('ReservationAlreadyMade', () => new ReservationAlreadyMadeError());
class BeyondMaxAddressSizeError extends Error {
    constructor() {
        super('Provided more addresses than max allowed in single reservation');
        this.code = 0x32;
        this.name = 'BeyondMaxAddressSize';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, BeyondMaxAddressSizeError);
        }
    }
}
exports.BeyondMaxAddressSizeError = BeyondMaxAddressSizeError;
createErrorFromCodeLookup.set(0x32, () => new BeyondMaxAddressSizeError());
createErrorFromNameLookup.set('BeyondMaxAddressSize', () => new BeyondMaxAddressSizeError());
class NumericalOverflowErrorError extends Error {
    constructor() {
        super('NumericalOverflowError');
        this.code = 0x33;
        this.name = 'NumericalOverflowError';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NumericalOverflowErrorError);
        }
    }
}
exports.NumericalOverflowErrorError = NumericalOverflowErrorError;
createErrorFromCodeLookup.set(0x33, () => new NumericalOverflowErrorError());
createErrorFromNameLookup.set('NumericalOverflowError', () => new NumericalOverflowErrorError());
class ReservationBreachesMaximumSupplyError extends Error {
    constructor() {
        super('This reservation would go beyond the maximum supply of the master edition!');
        this.code = 0x34;
        this.name = 'ReservationBreachesMaximumSupply';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ReservationBreachesMaximumSupplyError);
        }
    }
}
exports.ReservationBreachesMaximumSupplyError = ReservationBreachesMaximumSupplyError;
createErrorFromCodeLookup.set(0x34, () => new ReservationBreachesMaximumSupplyError());
createErrorFromNameLookup.set('ReservationBreachesMaximumSupply', () => new ReservationBreachesMaximumSupplyError());
class AddressNotInReservationError extends Error {
    constructor() {
        super('Address not in reservation!');
        this.code = 0x35;
        this.name = 'AddressNotInReservation';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, AddressNotInReservationError);
        }
    }
}
exports.AddressNotInReservationError = AddressNotInReservationError;
createErrorFromCodeLookup.set(0x35, () => new AddressNotInReservationError());
createErrorFromNameLookup.set('AddressNotInReservation', () => new AddressNotInReservationError());
class CannotVerifyAnotherCreatorError extends Error {
    constructor() {
        super('You cannot unilaterally verify another creator, they must sign');
        this.code = 0x36;
        this.name = 'CannotVerifyAnotherCreator';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CannotVerifyAnotherCreatorError);
        }
    }
}
exports.CannotVerifyAnotherCreatorError = CannotVerifyAnotherCreatorError;
createErrorFromCodeLookup.set(0x36, () => new CannotVerifyAnotherCreatorError());
createErrorFromNameLookup.set('CannotVerifyAnotherCreator', () => new CannotVerifyAnotherCreatorError());
class CannotUnverifyAnotherCreatorError extends Error {
    constructor() {
        super('You cannot unilaterally unverify another creator');
        this.code = 0x37;
        this.name = 'CannotUnverifyAnotherCreator';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CannotUnverifyAnotherCreatorError);
        }
    }
}
exports.CannotUnverifyAnotherCreatorError = CannotUnverifyAnotherCreatorError;
createErrorFromCodeLookup.set(0x37, () => new CannotUnverifyAnotherCreatorError());
createErrorFromNameLookup.set('CannotUnverifyAnotherCreator', () => new CannotUnverifyAnotherCreatorError());
class SpotMismatchError extends Error {
    constructor() {
        super('In initial reservation setting, spots remaining should equal total spots');
        this.code = 0x38;
        this.name = 'SpotMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, SpotMismatchError);
        }
    }
}
exports.SpotMismatchError = SpotMismatchError;
createErrorFromCodeLookup.set(0x38, () => new SpotMismatchError());
createErrorFromNameLookup.set('SpotMismatch', () => new SpotMismatchError());
class IncorrectOwnerError extends Error {
    constructor() {
        super('Incorrect account owner');
        this.code = 0x39;
        this.name = 'IncorrectOwner';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, IncorrectOwnerError);
        }
    }
}
exports.IncorrectOwnerError = IncorrectOwnerError;
createErrorFromCodeLookup.set(0x39, () => new IncorrectOwnerError());
createErrorFromNameLookup.set('IncorrectOwner', () => new IncorrectOwnerError());
class PrintingWouldBreachMaximumSupplyError extends Error {
    constructor() {
        super('printing these tokens would breach the maximum supply limit of the master edition');
        this.code = 0x3a;
        this.name = 'PrintingWouldBreachMaximumSupply';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PrintingWouldBreachMaximumSupplyError);
        }
    }
}
exports.PrintingWouldBreachMaximumSupplyError = PrintingWouldBreachMaximumSupplyError;
createErrorFromCodeLookup.set(0x3a, () => new PrintingWouldBreachMaximumSupplyError());
createErrorFromNameLookup.set('PrintingWouldBreachMaximumSupply', () => new PrintingWouldBreachMaximumSupplyError());
class DataIsImmutableError extends Error {
    constructor() {
        super('Data is immutable');
        this.code = 0x3b;
        this.name = 'DataIsImmutable';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, DataIsImmutableError);
        }
    }
}
exports.DataIsImmutableError = DataIsImmutableError;
createErrorFromCodeLookup.set(0x3b, () => new DataIsImmutableError());
createErrorFromNameLookup.set('DataIsImmutable', () => new DataIsImmutableError());
class DuplicateCreatorAddressError extends Error {
    constructor() {
        super('No duplicate creator addresses');
        this.code = 0x3c;
        this.name = 'DuplicateCreatorAddress';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, DuplicateCreatorAddressError);
        }
    }
}
exports.DuplicateCreatorAddressError = DuplicateCreatorAddressError;
createErrorFromCodeLookup.set(0x3c, () => new DuplicateCreatorAddressError());
createErrorFromNameLookup.set('DuplicateCreatorAddress', () => new DuplicateCreatorAddressError());
class ReservationSpotsRemainingShouldMatchTotalSpotsAtStartError extends Error {
    constructor() {
        super('Reservation spots remaining should match total spots when first being created');
        this.code = 0x3d;
        this.name = 'ReservationSpotsRemainingShouldMatchTotalSpotsAtStart';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ReservationSpotsRemainingShouldMatchTotalSpotsAtStartError);
        }
    }
}
exports.ReservationSpotsRemainingShouldMatchTotalSpotsAtStartError = ReservationSpotsRemainingShouldMatchTotalSpotsAtStartError;
createErrorFromCodeLookup.set(0x3d, () => new ReservationSpotsRemainingShouldMatchTotalSpotsAtStartError());
createErrorFromNameLookup.set('ReservationSpotsRemainingShouldMatchTotalSpotsAtStart', () => new ReservationSpotsRemainingShouldMatchTotalSpotsAtStartError());
class InvalidTokenProgramError extends Error {
    constructor() {
        super('Invalid token program');
        this.code = 0x3e;
        this.name = 'InvalidTokenProgram';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidTokenProgramError);
        }
    }
}
exports.InvalidTokenProgramError = InvalidTokenProgramError;
createErrorFromCodeLookup.set(0x3e, () => new InvalidTokenProgramError());
createErrorFromNameLookup.set('InvalidTokenProgram', () => new InvalidTokenProgramError());
class DataTypeMismatchError extends Error {
    constructor() {
        super('Data type mismatch');
        this.code = 0x3f;
        this.name = 'DataTypeMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, DataTypeMismatchError);
        }
    }
}
exports.DataTypeMismatchError = DataTypeMismatchError;
createErrorFromCodeLookup.set(0x3f, () => new DataTypeMismatchError());
createErrorFromNameLookup.set('DataTypeMismatch', () => new DataTypeMismatchError());
class BeyondAlottedAddressSizeError extends Error {
    constructor() {
        super('Beyond alotted address size in reservation!');
        this.code = 0x40;
        this.name = 'BeyondAlottedAddressSize';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, BeyondAlottedAddressSizeError);
        }
    }
}
exports.BeyondAlottedAddressSizeError = BeyondAlottedAddressSizeError;
createErrorFromCodeLookup.set(0x40, () => new BeyondAlottedAddressSizeError());
createErrorFromNameLookup.set('BeyondAlottedAddressSize', () => new BeyondAlottedAddressSizeError());
class ReservationNotCompleteError extends Error {
    constructor() {
        super('The reservation has only been partially alotted');
        this.code = 0x41;
        this.name = 'ReservationNotComplete';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ReservationNotCompleteError);
        }
    }
}
exports.ReservationNotCompleteError = ReservationNotCompleteError;
createErrorFromCodeLookup.set(0x41, () => new ReservationNotCompleteError());
createErrorFromNameLookup.set('ReservationNotComplete', () => new ReservationNotCompleteError());
class TriedToReplaceAnExistingReservationError extends Error {
    constructor() {
        super('You cannot splice over an existing reservation!');
        this.code = 0x42;
        this.name = 'TriedToReplaceAnExistingReservation';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, TriedToReplaceAnExistingReservationError);
        }
    }
}
exports.TriedToReplaceAnExistingReservationError = TriedToReplaceAnExistingReservationError;
createErrorFromCodeLookup.set(0x42, () => new TriedToReplaceAnExistingReservationError());
createErrorFromNameLookup.set('TriedToReplaceAnExistingReservation', () => new TriedToReplaceAnExistingReservationError());
class InvalidOperationError extends Error {
    constructor() {
        super('Invalid operation');
        this.code = 0x43;
        this.name = 'InvalidOperation';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidOperationError);
        }
    }
}
exports.InvalidOperationError = InvalidOperationError;
createErrorFromCodeLookup.set(0x43, () => new InvalidOperationError());
createErrorFromNameLookup.set('InvalidOperation', () => new InvalidOperationError());
class InvalidOwnerError extends Error {
    constructor() {
        super('Invalid Owner');
        this.code = 0x44;
        this.name = 'InvalidOwner';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidOwnerError);
        }
    }
}
exports.InvalidOwnerError = InvalidOwnerError;
createErrorFromCodeLookup.set(0x44, () => new InvalidOwnerError());
createErrorFromNameLookup.set('InvalidOwner', () => new InvalidOwnerError());
class PrintingMintSupplyMustBeZeroForConversionError extends Error {
    constructor() {
        super('Printing mint supply must be zero for conversion');
        this.code = 0x45;
        this.name = 'PrintingMintSupplyMustBeZeroForConversion';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PrintingMintSupplyMustBeZeroForConversionError);
        }
    }
}
exports.PrintingMintSupplyMustBeZeroForConversionError = PrintingMintSupplyMustBeZeroForConversionError;
createErrorFromCodeLookup.set(0x45, () => new PrintingMintSupplyMustBeZeroForConversionError());
createErrorFromNameLookup.set('PrintingMintSupplyMustBeZeroForConversion', () => new PrintingMintSupplyMustBeZeroForConversionError());
class OneTimeAuthMintSupplyMustBeZeroForConversionError extends Error {
    constructor() {
        super('One Time Auth mint supply must be zero for conversion');
        this.code = 0x46;
        this.name = 'OneTimeAuthMintSupplyMustBeZeroForConversion';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, OneTimeAuthMintSupplyMustBeZeroForConversionError);
        }
    }
}
exports.OneTimeAuthMintSupplyMustBeZeroForConversionError = OneTimeAuthMintSupplyMustBeZeroForConversionError;
createErrorFromCodeLookup.set(0x46, () => new OneTimeAuthMintSupplyMustBeZeroForConversionError());
createErrorFromNameLookup.set('OneTimeAuthMintSupplyMustBeZeroForConversion', () => new OneTimeAuthMintSupplyMustBeZeroForConversionError());
class InvalidEditionIndexError extends Error {
    constructor() {
        super('You tried to insert one edition too many into an edition mark pda');
        this.code = 0x47;
        this.name = 'InvalidEditionIndex';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidEditionIndexError);
        }
    }
}
exports.InvalidEditionIndexError = InvalidEditionIndexError;
createErrorFromCodeLookup.set(0x47, () => new InvalidEditionIndexError());
createErrorFromNameLookup.set('InvalidEditionIndex', () => new InvalidEditionIndexError());
class ReservationArrayShouldBeSizeOneError extends Error {
    constructor() {
        super('In the legacy system the reservation needs to be of size one for cpu limit reasons');
        this.code = 0x48;
        this.name = 'ReservationArrayShouldBeSizeOne';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ReservationArrayShouldBeSizeOneError);
        }
    }
}
exports.ReservationArrayShouldBeSizeOneError = ReservationArrayShouldBeSizeOneError;
createErrorFromCodeLookup.set(0x48, () => new ReservationArrayShouldBeSizeOneError());
createErrorFromNameLookup.set('ReservationArrayShouldBeSizeOne', () => new ReservationArrayShouldBeSizeOneError());
class IsMutableCanOnlyBeFlippedToFalseError extends Error {
    constructor() {
        super('Is Mutable can only be flipped to false');
        this.code = 0x49;
        this.name = 'IsMutableCanOnlyBeFlippedToFalse';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, IsMutableCanOnlyBeFlippedToFalseError);
        }
    }
}
exports.IsMutableCanOnlyBeFlippedToFalseError = IsMutableCanOnlyBeFlippedToFalseError;
createErrorFromCodeLookup.set(0x49, () => new IsMutableCanOnlyBeFlippedToFalseError());
createErrorFromNameLookup.set('IsMutableCanOnlyBeFlippedToFalse', () => new IsMutableCanOnlyBeFlippedToFalseError());
class CollectionCannotBeVerifiedInThisInstructionError extends Error {
    constructor() {
        super('Cannont Verify Collection in this Instruction');
        this.code = 0x4a;
        this.name = 'CollectionCannotBeVerifiedInThisInstruction';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CollectionCannotBeVerifiedInThisInstructionError);
        }
    }
}
exports.CollectionCannotBeVerifiedInThisInstructionError = CollectionCannotBeVerifiedInThisInstructionError;
createErrorFromCodeLookup.set(0x4a, () => new CollectionCannotBeVerifiedInThisInstructionError());
createErrorFromNameLookup.set('CollectionCannotBeVerifiedInThisInstruction', () => new CollectionCannotBeVerifiedInThisInstructionError());
class RemovedError extends Error {
    constructor() {
        super('This instruction was deprecated in a previous release and is now removed');
        this.code = 0x4b;
        this.name = 'Removed';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, RemovedError);
        }
    }
}
exports.RemovedError = RemovedError;
createErrorFromCodeLookup.set(0x4b, () => new RemovedError());
createErrorFromNameLookup.set('Removed', () => new RemovedError());
class MustBeBurnedError extends Error {
    constructor() {
        super('This token use method is burn and there are no remaining uses, it must be burned');
        this.code = 0x4c;
        this.name = 'MustBeBurned';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MustBeBurnedError);
        }
    }
}
exports.MustBeBurnedError = MustBeBurnedError;
createErrorFromCodeLookup.set(0x4c, () => new MustBeBurnedError());
createErrorFromNameLookup.set('MustBeBurned', () => new MustBeBurnedError());
class InvalidUseMethodError extends Error {
    constructor() {
        super('This use method is invalid');
        this.code = 0x4d;
        this.name = 'InvalidUseMethod';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidUseMethodError);
        }
    }
}
exports.InvalidUseMethodError = InvalidUseMethodError;
createErrorFromCodeLookup.set(0x4d, () => new InvalidUseMethodError());
createErrorFromNameLookup.set('InvalidUseMethod', () => new InvalidUseMethodError());
class CannotChangeUseMethodAfterFirstUseError extends Error {
    constructor() {
        super('Cannot Change Use Method after the first use');
        this.code = 0x4e;
        this.name = 'CannotChangeUseMethodAfterFirstUse';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CannotChangeUseMethodAfterFirstUseError);
        }
    }
}
exports.CannotChangeUseMethodAfterFirstUseError = CannotChangeUseMethodAfterFirstUseError;
createErrorFromCodeLookup.set(0x4e, () => new CannotChangeUseMethodAfterFirstUseError());
createErrorFromNameLookup.set('CannotChangeUseMethodAfterFirstUse', () => new CannotChangeUseMethodAfterFirstUseError());
class CannotChangeUsesAfterFirstUseError extends Error {
    constructor() {
        super('Cannot Change Remaining or Available uses after the first use');
        this.code = 0x4f;
        this.name = 'CannotChangeUsesAfterFirstUse';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CannotChangeUsesAfterFirstUseError);
        }
    }
}
exports.CannotChangeUsesAfterFirstUseError = CannotChangeUsesAfterFirstUseError;
createErrorFromCodeLookup.set(0x4f, () => new CannotChangeUsesAfterFirstUseError());
createErrorFromNameLookup.set('CannotChangeUsesAfterFirstUse', () => new CannotChangeUsesAfterFirstUseError());
class CollectionNotFoundError extends Error {
    constructor() {
        super('Collection Not Found on Metadata');
        this.code = 0x50;
        this.name = 'CollectionNotFound';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CollectionNotFoundError);
        }
    }
}
exports.CollectionNotFoundError = CollectionNotFoundError;
createErrorFromCodeLookup.set(0x50, () => new CollectionNotFoundError());
createErrorFromNameLookup.set('CollectionNotFound', () => new CollectionNotFoundError());
class InvalidCollectionUpdateAuthorityError extends Error {
    constructor() {
        super('Collection Update Authority is invalid');
        this.code = 0x51;
        this.name = 'InvalidCollectionUpdateAuthority';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidCollectionUpdateAuthorityError);
        }
    }
}
exports.InvalidCollectionUpdateAuthorityError = InvalidCollectionUpdateAuthorityError;
createErrorFromCodeLookup.set(0x51, () => new InvalidCollectionUpdateAuthorityError());
createErrorFromNameLookup.set('InvalidCollectionUpdateAuthority', () => new InvalidCollectionUpdateAuthorityError());
class CollectionMustBeAUniqueMasterEditionError extends Error {
    constructor() {
        super('Collection Must Be a Unique Master Edition v2');
        this.code = 0x52;
        this.name = 'CollectionMustBeAUniqueMasterEdition';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CollectionMustBeAUniqueMasterEditionError);
        }
    }
}
exports.CollectionMustBeAUniqueMasterEditionError = CollectionMustBeAUniqueMasterEditionError;
createErrorFromCodeLookup.set(0x52, () => new CollectionMustBeAUniqueMasterEditionError());
createErrorFromNameLookup.set('CollectionMustBeAUniqueMasterEdition', () => new CollectionMustBeAUniqueMasterEditionError());
class UseAuthorityRecordAlreadyExistsError extends Error {
    constructor() {
        super('The Use Authority Record Already Exists, to modify it Revoke, then Approve');
        this.code = 0x53;
        this.name = 'UseAuthorityRecordAlreadyExists';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UseAuthorityRecordAlreadyExistsError);
        }
    }
}
exports.UseAuthorityRecordAlreadyExistsError = UseAuthorityRecordAlreadyExistsError;
createErrorFromCodeLookup.set(0x53, () => new UseAuthorityRecordAlreadyExistsError());
createErrorFromNameLookup.set('UseAuthorityRecordAlreadyExists', () => new UseAuthorityRecordAlreadyExistsError());
class UseAuthorityRecordAlreadyRevokedError extends Error {
    constructor() {
        super('The Use Authority Record is empty or already revoked');
        this.code = 0x54;
        this.name = 'UseAuthorityRecordAlreadyRevoked';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UseAuthorityRecordAlreadyRevokedError);
        }
    }
}
exports.UseAuthorityRecordAlreadyRevokedError = UseAuthorityRecordAlreadyRevokedError;
createErrorFromCodeLookup.set(0x54, () => new UseAuthorityRecordAlreadyRevokedError());
createErrorFromNameLookup.set('UseAuthorityRecordAlreadyRevoked', () => new UseAuthorityRecordAlreadyRevokedError());
class UnusableError extends Error {
    constructor() {
        super('This token has no uses');
        this.code = 0x55;
        this.name = 'Unusable';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UnusableError);
        }
    }
}
exports.UnusableError = UnusableError;
createErrorFromCodeLookup.set(0x55, () => new UnusableError());
createErrorFromNameLookup.set('Unusable', () => new UnusableError());
class NotEnoughUsesError extends Error {
    constructor() {
        super('There are not enough Uses left on this token.');
        this.code = 0x56;
        this.name = 'NotEnoughUses';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NotEnoughUsesError);
        }
    }
}
exports.NotEnoughUsesError = NotEnoughUsesError;
createErrorFromCodeLookup.set(0x56, () => new NotEnoughUsesError());
createErrorFromNameLookup.set('NotEnoughUses', () => new NotEnoughUsesError());
class CollectionAuthorityRecordAlreadyExistsError extends Error {
    constructor() {
        super('This Collection Authority Record Already Exists.');
        this.code = 0x57;
        this.name = 'CollectionAuthorityRecordAlreadyExists';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CollectionAuthorityRecordAlreadyExistsError);
        }
    }
}
exports.CollectionAuthorityRecordAlreadyExistsError = CollectionAuthorityRecordAlreadyExistsError;
createErrorFromCodeLookup.set(0x57, () => new CollectionAuthorityRecordAlreadyExistsError());
createErrorFromNameLookup.set('CollectionAuthorityRecordAlreadyExists', () => new CollectionAuthorityRecordAlreadyExistsError());
class CollectionAuthorityDoesNotExistError extends Error {
    constructor() {
        super('This Collection Authority Record Does Not Exist.');
        this.code = 0x58;
        this.name = 'CollectionAuthorityDoesNotExist';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CollectionAuthorityDoesNotExistError);
        }
    }
}
exports.CollectionAuthorityDoesNotExistError = CollectionAuthorityDoesNotExistError;
createErrorFromCodeLookup.set(0x58, () => new CollectionAuthorityDoesNotExistError());
createErrorFromNameLookup.set('CollectionAuthorityDoesNotExist', () => new CollectionAuthorityDoesNotExistError());
class InvalidUseAuthorityRecordError extends Error {
    constructor() {
        super('This Use Authority Record is invalid.');
        this.code = 0x59;
        this.name = 'InvalidUseAuthorityRecord';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidUseAuthorityRecordError);
        }
    }
}
exports.InvalidUseAuthorityRecordError = InvalidUseAuthorityRecordError;
createErrorFromCodeLookup.set(0x59, () => new InvalidUseAuthorityRecordError());
createErrorFromNameLookup.set('InvalidUseAuthorityRecord', () => new InvalidUseAuthorityRecordError());
class InvalidCollectionAuthorityRecordError extends Error {
    constructor() {
        super('This Collection Authority Record is invalid.');
        this.code = 0x5a;
        this.name = 'InvalidCollectionAuthorityRecord';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidCollectionAuthorityRecordError);
        }
    }
}
exports.InvalidCollectionAuthorityRecordError = InvalidCollectionAuthorityRecordError;
createErrorFromCodeLookup.set(0x5a, () => new InvalidCollectionAuthorityRecordError());
createErrorFromNameLookup.set('InvalidCollectionAuthorityRecord', () => new InvalidCollectionAuthorityRecordError());
class InvalidFreezeAuthorityError extends Error {
    constructor() {
        super('Metadata does not match the freeze authority on the mint');
        this.code = 0x5b;
        this.name = 'InvalidFreezeAuthority';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidFreezeAuthorityError);
        }
    }
}
exports.InvalidFreezeAuthorityError = InvalidFreezeAuthorityError;
createErrorFromCodeLookup.set(0x5b, () => new InvalidFreezeAuthorityError());
createErrorFromNameLookup.set('InvalidFreezeAuthority', () => new InvalidFreezeAuthorityError());
class InvalidDelegateError extends Error {
    constructor() {
        super('All tokens in this account have not been delegated to this user.');
        this.code = 0x5c;
        this.name = 'InvalidDelegate';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidDelegateError);
        }
    }
}
exports.InvalidDelegateError = InvalidDelegateError;
createErrorFromCodeLookup.set(0x5c, () => new InvalidDelegateError());
createErrorFromNameLookup.set('InvalidDelegate', () => new InvalidDelegateError());
class CannotAdjustVerifiedCreatorError extends Error {
    constructor() {
        super('Creator can not be adjusted once they are verified.');
        this.code = 0x5d;
        this.name = 'CannotAdjustVerifiedCreator';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CannotAdjustVerifiedCreatorError);
        }
    }
}
exports.CannotAdjustVerifiedCreatorError = CannotAdjustVerifiedCreatorError;
createErrorFromCodeLookup.set(0x5d, () => new CannotAdjustVerifiedCreatorError());
createErrorFromNameLookup.set('CannotAdjustVerifiedCreator', () => new CannotAdjustVerifiedCreatorError());
class CannotRemoveVerifiedCreatorError extends Error {
    constructor() {
        super('Verified creators cannot be removed.');
        this.code = 0x5e;
        this.name = 'CannotRemoveVerifiedCreator';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CannotRemoveVerifiedCreatorError);
        }
    }
}
exports.CannotRemoveVerifiedCreatorError = CannotRemoveVerifiedCreatorError;
createErrorFromCodeLookup.set(0x5e, () => new CannotRemoveVerifiedCreatorError());
createErrorFromNameLookup.set('CannotRemoveVerifiedCreator', () => new CannotRemoveVerifiedCreatorError());
class CannotWipeVerifiedCreatorsError extends Error {
    constructor() {
        super('Can not wipe verified creators.');
        this.code = 0x5f;
        this.name = 'CannotWipeVerifiedCreators';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CannotWipeVerifiedCreatorsError);
        }
    }
}
exports.CannotWipeVerifiedCreatorsError = CannotWipeVerifiedCreatorsError;
createErrorFromCodeLookup.set(0x5f, () => new CannotWipeVerifiedCreatorsError());
createErrorFromNameLookup.set('CannotWipeVerifiedCreators', () => new CannotWipeVerifiedCreatorsError());
class NotAllowedToChangeSellerFeeBasisPointsError extends Error {
    constructor() {
        super('Not allowed to change seller fee basis points.');
        this.code = 0x60;
        this.name = 'NotAllowedToChangeSellerFeeBasisPoints';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NotAllowedToChangeSellerFeeBasisPointsError);
        }
    }
}
exports.NotAllowedToChangeSellerFeeBasisPointsError = NotAllowedToChangeSellerFeeBasisPointsError;
createErrorFromCodeLookup.set(0x60, () => new NotAllowedToChangeSellerFeeBasisPointsError());
createErrorFromNameLookup.set('NotAllowedToChangeSellerFeeBasisPoints', () => new NotAllowedToChangeSellerFeeBasisPointsError());
class EditionOverrideCannotBeZeroError extends Error {
    constructor() {
        super('Edition override cannot be zero');
        this.code = 0x61;
        this.name = 'EditionOverrideCannotBeZero';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, EditionOverrideCannotBeZeroError);
        }
    }
}
exports.EditionOverrideCannotBeZeroError = EditionOverrideCannotBeZeroError;
createErrorFromCodeLookup.set(0x61, () => new EditionOverrideCannotBeZeroError());
createErrorFromNameLookup.set('EditionOverrideCannotBeZero', () => new EditionOverrideCannotBeZeroError());
class InvalidUserError extends Error {
    constructor() {
        super('Invalid User');
        this.code = 0x62;
        this.name = 'InvalidUser';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidUserError);
        }
    }
}
exports.InvalidUserError = InvalidUserError;
createErrorFromCodeLookup.set(0x62, () => new InvalidUserError());
createErrorFromNameLookup.set('InvalidUser', () => new InvalidUserError());
class RevokeCollectionAuthoritySignerIncorrectError extends Error {
    constructor() {
        super('Revoke Collection Authority signer is incorrect');
        this.code = 0x63;
        this.name = 'RevokeCollectionAuthoritySignerIncorrect';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, RevokeCollectionAuthoritySignerIncorrectError);
        }
    }
}
exports.RevokeCollectionAuthoritySignerIncorrectError = RevokeCollectionAuthoritySignerIncorrectError;
createErrorFromCodeLookup.set(0x63, () => new RevokeCollectionAuthoritySignerIncorrectError());
createErrorFromNameLookup.set('RevokeCollectionAuthoritySignerIncorrect', () => new RevokeCollectionAuthoritySignerIncorrectError());
class TokenCloseFailedError extends Error {
    constructor() {
        super('Token close failed');
        this.code = 0x64;
        this.name = 'TokenCloseFailed';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, TokenCloseFailedError);
        }
    }
}
exports.TokenCloseFailedError = TokenCloseFailedError;
createErrorFromCodeLookup.set(0x64, () => new TokenCloseFailedError());
createErrorFromNameLookup.set('TokenCloseFailed', () => new TokenCloseFailedError());
class UnsizedCollectionError extends Error {
    constructor() {
        super("Can't use this function on unsized collection");
        this.code = 0x65;
        this.name = 'UnsizedCollection';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UnsizedCollectionError);
        }
    }
}
exports.UnsizedCollectionError = UnsizedCollectionError;
createErrorFromCodeLookup.set(0x65, () => new UnsizedCollectionError());
createErrorFromNameLookup.set('UnsizedCollection', () => new UnsizedCollectionError());
class SizedCollectionError extends Error {
    constructor() {
        super("Can't use this function on a sized collection");
        this.code = 0x66;
        this.name = 'SizedCollection';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, SizedCollectionError);
        }
    }
}
exports.SizedCollectionError = SizedCollectionError;
createErrorFromCodeLookup.set(0x66, () => new SizedCollectionError());
createErrorFromNameLookup.set('SizedCollection', () => new SizedCollectionError());
class MissingCollectionMetadataError extends Error {
    constructor() {
        super("Can't burn a verified member of a collection w/o providing collection metadata account");
        this.code = 0x67;
        this.name = 'MissingCollectionMetadata';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MissingCollectionMetadataError);
        }
    }
}
exports.MissingCollectionMetadataError = MissingCollectionMetadataError;
createErrorFromCodeLookup.set(0x67, () => new MissingCollectionMetadataError());
createErrorFromNameLookup.set('MissingCollectionMetadata', () => new MissingCollectionMetadataError());
class NotAMemberOfCollectionError extends Error {
    constructor() {
        super('This NFT is not a member of the specified collection.');
        this.code = 0x68;
        this.name = 'NotAMemberOfCollection';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NotAMemberOfCollectionError);
        }
    }
}
exports.NotAMemberOfCollectionError = NotAMemberOfCollectionError;
createErrorFromCodeLookup.set(0x68, () => new NotAMemberOfCollectionError());
createErrorFromNameLookup.set('NotAMemberOfCollection', () => new NotAMemberOfCollectionError());
class NotVerifiedMemberOfCollectionError extends Error {
    constructor() {
        super('This NFT is not a verified member of the specified collection.');
        this.code = 0x69;
        this.name = 'NotVerifiedMemberOfCollection';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NotVerifiedMemberOfCollectionError);
        }
    }
}
exports.NotVerifiedMemberOfCollectionError = NotVerifiedMemberOfCollectionError;
createErrorFromCodeLookup.set(0x69, () => new NotVerifiedMemberOfCollectionError());
createErrorFromNameLookup.set('NotVerifiedMemberOfCollection', () => new NotVerifiedMemberOfCollectionError());
class NotACollectionParentError extends Error {
    constructor() {
        super('This NFT is not a collection parent NFT.');
        this.code = 0x6a;
        this.name = 'NotACollectionParent';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NotACollectionParentError);
        }
    }
}
exports.NotACollectionParentError = NotACollectionParentError;
createErrorFromCodeLookup.set(0x6a, () => new NotACollectionParentError());
createErrorFromNameLookup.set('NotACollectionParent', () => new NotACollectionParentError());
class CouldNotDetermineTokenStandardError extends Error {
    constructor() {
        super('Could not determine a TokenStandard type.');
        this.code = 0x6b;
        this.name = 'CouldNotDetermineTokenStandard';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CouldNotDetermineTokenStandardError);
        }
    }
}
exports.CouldNotDetermineTokenStandardError = CouldNotDetermineTokenStandardError;
createErrorFromCodeLookup.set(0x6b, () => new CouldNotDetermineTokenStandardError());
createErrorFromNameLookup.set('CouldNotDetermineTokenStandard', () => new CouldNotDetermineTokenStandardError());
class MissingEditionAccountError extends Error {
    constructor() {
        super('This mint account has an edition but none was provided.');
        this.code = 0x6c;
        this.name = 'MissingEditionAccount';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MissingEditionAccountError);
        }
    }
}
exports.MissingEditionAccountError = MissingEditionAccountError;
createErrorFromCodeLookup.set(0x6c, () => new MissingEditionAccountError());
createErrorFromNameLookup.set('MissingEditionAccount', () => new MissingEditionAccountError());
class NotAMasterEditionError extends Error {
    constructor() {
        super('This edition is not a Master Edition');
        this.code = 0x6d;
        this.name = 'NotAMasterEdition';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NotAMasterEditionError);
        }
    }
}
exports.NotAMasterEditionError = NotAMasterEditionError;
createErrorFromCodeLookup.set(0x6d, () => new NotAMasterEditionError());
createErrorFromNameLookup.set('NotAMasterEdition', () => new NotAMasterEditionError());
class MasterEditionHasPrintsError extends Error {
    constructor() {
        super('This Master Edition has existing prints');
        this.code = 0x6e;
        this.name = 'MasterEditionHasPrints';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MasterEditionHasPrintsError);
        }
    }
}
exports.MasterEditionHasPrintsError = MasterEditionHasPrintsError;
createErrorFromCodeLookup.set(0x6e, () => new MasterEditionHasPrintsError());
createErrorFromNameLookup.set('MasterEditionHasPrints', () => new MasterEditionHasPrintsError());
class BorshDeserializationErrorError extends Error {
    constructor() {
        super('Borsh Deserialization Error');
        this.code = 0x6f;
        this.name = 'BorshDeserializationError';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, BorshDeserializationErrorError);
        }
    }
}
exports.BorshDeserializationErrorError = BorshDeserializationErrorError;
createErrorFromCodeLookup.set(0x6f, () => new BorshDeserializationErrorError());
createErrorFromNameLookup.set('BorshDeserializationError', () => new BorshDeserializationErrorError());
class CannotUpdateVerifiedCollectionError extends Error {
    constructor() {
        super('Cannot update a verified colleciton in this command');
        this.code = 0x70;
        this.name = 'CannotUpdateVerifiedCollection';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CannotUpdateVerifiedCollectionError);
        }
    }
}
exports.CannotUpdateVerifiedCollectionError = CannotUpdateVerifiedCollectionError;
createErrorFromCodeLookup.set(0x70, () => new CannotUpdateVerifiedCollectionError());
createErrorFromNameLookup.set('CannotUpdateVerifiedCollection', () => new CannotUpdateVerifiedCollectionError());
class CollectionMasterEditionAccountInvalidError extends Error {
    constructor() {
        super('Edition account doesnt match collection ');
        this.code = 0x71;
        this.name = 'CollectionMasterEditionAccountInvalid';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CollectionMasterEditionAccountInvalidError);
        }
    }
}
exports.CollectionMasterEditionAccountInvalidError = CollectionMasterEditionAccountInvalidError;
createErrorFromCodeLookup.set(0x71, () => new CollectionMasterEditionAccountInvalidError());
createErrorFromNameLookup.set('CollectionMasterEditionAccountInvalid', () => new CollectionMasterEditionAccountInvalidError());
class AlreadyVerifiedError extends Error {
    constructor() {
        super('Item is already verified.');
        this.code = 0x72;
        this.name = 'AlreadyVerified';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, AlreadyVerifiedError);
        }
    }
}
exports.AlreadyVerifiedError = AlreadyVerifiedError;
createErrorFromCodeLookup.set(0x72, () => new AlreadyVerifiedError());
createErrorFromNameLookup.set('AlreadyVerified', () => new AlreadyVerifiedError());
class AlreadyUnverifiedError extends Error {
    constructor() {
        super('Item is already unverified.');
        this.code = 0x73;
        this.name = 'AlreadyUnverified';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, AlreadyUnverifiedError);
        }
    }
}
exports.AlreadyUnverifiedError = AlreadyUnverifiedError;
createErrorFromCodeLookup.set(0x73, () => new AlreadyUnverifiedError());
createErrorFromNameLookup.set('AlreadyUnverified', () => new AlreadyUnverifiedError());
class NotAPrintEditionError extends Error {
    constructor() {
        super('This edition is not a Print Edition');
        this.code = 0x74;
        this.name = 'NotAPrintEdition';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NotAPrintEditionError);
        }
    }
}
exports.NotAPrintEditionError = NotAPrintEditionError;
createErrorFromCodeLookup.set(0x74, () => new NotAPrintEditionError());
createErrorFromNameLookup.set('NotAPrintEdition', () => new NotAPrintEditionError());
class InvalidMasterEditionError extends Error {
    constructor() {
        super('Invalid Master Edition');
        this.code = 0x75;
        this.name = 'InvalidMasterEdition';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidMasterEditionError);
        }
    }
}
exports.InvalidMasterEditionError = InvalidMasterEditionError;
createErrorFromCodeLookup.set(0x75, () => new InvalidMasterEditionError());
createErrorFromNameLookup.set('InvalidMasterEdition', () => new InvalidMasterEditionError());
class InvalidPrintEditionError extends Error {
    constructor() {
        super('Invalid Print Edition');
        this.code = 0x76;
        this.name = 'InvalidPrintEdition';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidPrintEditionError);
        }
    }
}
exports.InvalidPrintEditionError = InvalidPrintEditionError;
createErrorFromCodeLookup.set(0x76, () => new InvalidPrintEditionError());
createErrorFromNameLookup.set('InvalidPrintEdition', () => new InvalidPrintEditionError());
class InvalidEditionMarkerError extends Error {
    constructor() {
        super('Invalid Edition Marker');
        this.code = 0x77;
        this.name = 'InvalidEditionMarker';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidEditionMarkerError);
        }
    }
}
exports.InvalidEditionMarkerError = InvalidEditionMarkerError;
createErrorFromCodeLookup.set(0x77, () => new InvalidEditionMarkerError());
createErrorFromNameLookup.set('InvalidEditionMarker', () => new InvalidEditionMarkerError());
class ReservationListDeprecatedError extends Error {
    constructor() {
        super('Reservation List is Deprecated');
        this.code = 0x78;
        this.name = 'ReservationListDeprecated';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ReservationListDeprecatedError);
        }
    }
}
exports.ReservationListDeprecatedError = ReservationListDeprecatedError;
createErrorFromCodeLookup.set(0x78, () => new ReservationListDeprecatedError());
createErrorFromNameLookup.set('ReservationListDeprecated', () => new ReservationListDeprecatedError());
class PrintEditionDoesNotMatchMasterEditionError extends Error {
    constructor() {
        super('Print Edition does not match Master Edition');
        this.code = 0x79;
        this.name = 'PrintEditionDoesNotMatchMasterEdition';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PrintEditionDoesNotMatchMasterEditionError);
        }
    }
}
exports.PrintEditionDoesNotMatchMasterEditionError = PrintEditionDoesNotMatchMasterEditionError;
createErrorFromCodeLookup.set(0x79, () => new PrintEditionDoesNotMatchMasterEditionError());
createErrorFromNameLookup.set('PrintEditionDoesNotMatchMasterEdition', () => new PrintEditionDoesNotMatchMasterEditionError());
class EditionNumberGreaterThanMaxSupplyError extends Error {
    constructor() {
        super('Edition Number greater than max supply');
        this.code = 0x7a;
        this.name = 'EditionNumberGreaterThanMaxSupply';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, EditionNumberGreaterThanMaxSupplyError);
        }
    }
}
exports.EditionNumberGreaterThanMaxSupplyError = EditionNumberGreaterThanMaxSupplyError;
createErrorFromCodeLookup.set(0x7a, () => new EditionNumberGreaterThanMaxSupplyError());
createErrorFromNameLookup.set('EditionNumberGreaterThanMaxSupply', () => new EditionNumberGreaterThanMaxSupplyError());
class MustUnverifyError extends Error {
    constructor() {
        super('Must unverify before migrating collections.');
        this.code = 0x7b;
        this.name = 'MustUnverify';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MustUnverifyError);
        }
    }
}
exports.MustUnverifyError = MustUnverifyError;
createErrorFromCodeLookup.set(0x7b, () => new MustUnverifyError());
createErrorFromNameLookup.set('MustUnverify', () => new MustUnverifyError());
class InvalidEscrowBumpSeedError extends Error {
    constructor() {
        super('Invalid Escrow Account Bump Seed');
        this.code = 0x7c;
        this.name = 'InvalidEscrowBumpSeed';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidEscrowBumpSeedError);
        }
    }
}
exports.InvalidEscrowBumpSeedError = InvalidEscrowBumpSeedError;
createErrorFromCodeLookup.set(0x7c, () => new InvalidEscrowBumpSeedError());
createErrorFromNameLookup.set('InvalidEscrowBumpSeed', () => new InvalidEscrowBumpSeedError());
class MustBeEscrowAuthorityError extends Error {
    constructor() {
        super('Must Escrow Authority');
        this.code = 0x7d;
        this.name = 'MustBeEscrowAuthority';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MustBeEscrowAuthorityError);
        }
    }
}
exports.MustBeEscrowAuthorityError = MustBeEscrowAuthorityError;
createErrorFromCodeLookup.set(0x7d, () => new MustBeEscrowAuthorityError());
createErrorFromNameLookup.set('MustBeEscrowAuthority', () => new MustBeEscrowAuthorityError());
class InvalidSystemProgramError extends Error {
    constructor() {
        super('Invalid System Program');
        this.code = 0x7e;
        this.name = 'InvalidSystemProgram';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidSystemProgramError);
        }
    }
}
exports.InvalidSystemProgramError = InvalidSystemProgramError;
createErrorFromCodeLookup.set(0x7e, () => new InvalidSystemProgramError());
createErrorFromNameLookup.set('InvalidSystemProgram', () => new InvalidSystemProgramError());
class MustBeNonFungibleError extends Error {
    constructor() {
        super('Must be a Non Fungible Token');
        this.code = 0x7f;
        this.name = 'MustBeNonFungible';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, MustBeNonFungibleError);
        }
    }
}
exports.MustBeNonFungibleError = MustBeNonFungibleError;
createErrorFromCodeLookup.set(0x7f, () => new MustBeNonFungibleError());
createErrorFromNameLookup.set('MustBeNonFungible', () => new MustBeNonFungibleError());
class InsufficientTokensError extends Error {
    constructor() {
        super('Insufficient tokens for transfer');
        this.code = 0x80;
        this.name = 'InsufficientTokens';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InsufficientTokensError);
        }
    }
}
exports.InsufficientTokensError = InsufficientTokensError;
createErrorFromCodeLookup.set(0x80, () => new InsufficientTokensError());
createErrorFromNameLookup.set('InsufficientTokens', () => new InsufficientTokensError());
class BorshSerializationErrorError extends Error {
    constructor() {
        super('Borsh Serialization Error');
        this.code = 0x81;
        this.name = 'BorshSerializationError';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, BorshSerializationErrorError);
        }
    }
}
exports.BorshSerializationErrorError = BorshSerializationErrorError;
createErrorFromCodeLookup.set(0x81, () => new BorshSerializationErrorError());
createErrorFromNameLookup.set('BorshSerializationError', () => new BorshSerializationErrorError());
class NoFreezeAuthoritySetError extends Error {
    constructor() {
        super('Cannot create NFT with no Freeze Authority.');
        this.code = 0x82;
        this.name = 'NoFreezeAuthoritySet';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NoFreezeAuthoritySetError);
        }
    }
}
exports.NoFreezeAuthoritySetError = NoFreezeAuthoritySetError;
createErrorFromCodeLookup.set(0x82, () => new NoFreezeAuthoritySetError());
createErrorFromNameLookup.set('NoFreezeAuthoritySet', () => new NoFreezeAuthoritySetError());
class InvalidCollectionSizeChangeError extends Error {
    constructor() {
        super('Invalid collection size change');
        this.code = 0x83;
        this.name = 'InvalidCollectionSizeChange';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidCollectionSizeChangeError);
        }
    }
}
exports.InvalidCollectionSizeChangeError = InvalidCollectionSizeChangeError;
createErrorFromCodeLookup.set(0x83, () => new InvalidCollectionSizeChangeError());
createErrorFromNameLookup.set('InvalidCollectionSizeChange', () => new InvalidCollectionSizeChangeError());
function errorFromCode(code) {
    const createError = createErrorFromCodeLookup.get(code);
    return createError != null ? createError() : null;
}
exports.errorFromCode = errorFromCode;
function errorFromName(name) {
    const createError = createErrorFromNameLookup.get(name);
    return createError != null ? createError() : null;
}
exports.errorFromName = errorFromName;
//# sourceMappingURL=index.js.map