"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserialize = void 0;
const beet = __importStar(require("@metaplex-foundation/beet"));
const beetSolana = __importStar(require("@metaplex-foundation/beet-solana"));
const Metadata_1 = require("../generated/accounts/Metadata");
const Collection_1 = require("../generated/types/Collection");
const CollectionDetails_1 = require("../generated/types/CollectionDetails");
const Data_1 = require("../generated/types/Data");
const Key_1 = require("../generated/types/Key");
const TokenStandard_1 = require("../generated/types/TokenStandard");
const Uses_1 = require("../generated/types/Uses");
const NONE_BYTE_SIZE = beet.coptionNone('').byteSize;
function deserialize(buf, offset = 0) {
    let cursor = offset;
    const key = Key_1.keyBeet.read(buf, cursor);
    cursor += Key_1.keyBeet.byteSize;
    const updateAuthority = beetSolana.publicKey.read(buf, cursor);
    cursor += beetSolana.publicKey.byteSize;
    const mint = beetSolana.publicKey.read(buf, cursor);
    cursor += beetSolana.publicKey.byteSize;
    const [data, dataDelta] = Data_1.dataBeet.deserialize(buf, cursor);
    cursor = dataDelta;
    const primarySaleHappened = beet.bool.read(buf, cursor);
    cursor += beet.bool.byteSize;
    const isMutable = beet.bool.read(buf, cursor);
    cursor += beet.bool.byteSize;
    const editionNonceBeet = beet.coption(beet.u8).toFixedFromData(buf, cursor);
    const editionNonce = editionNonceBeet.read(buf, cursor);
    cursor += editionNonceBeet.byteSize;
    const [tokenStandard, tokenDelta, tokenCorrupted] = tryReadOption(beet.coption(TokenStandard_1.tokenStandardBeet), buf, cursor);
    cursor += tokenDelta;
    const [collection, collectionDelta, collectionCorrupted] = tokenCorrupted
        ? [null, NONE_BYTE_SIZE, true]
        : tryReadOption(beet.coption(Collection_1.collectionBeet), buf, cursor);
    cursor += collectionDelta;
    const [uses, usesDelta, usesCorrupted] = tokenCorrupted || collectionCorrupted
        ? [null, NONE_BYTE_SIZE, true]
        : tryReadOption(beet.coption(Uses_1.usesBeet), buf, cursor);
    cursor += usesDelta;
    const [collectionDetails, collectionDetailsDelta, collectionDetailsCorrupted] = tokenCorrupted || collectionCorrupted || usesCorrupted
        ? [null, NONE_BYTE_SIZE, true]
        : tryReadOption(beet.coption(CollectionDetails_1.collectionDetailsBeet), buf, cursor);
    cursor += collectionDetailsDelta;
    const anyCorrupted = tokenCorrupted || collectionCorrupted || usesCorrupted || collectionDetailsCorrupted;
    const args = {
        key,
        updateAuthority,
        mint,
        data,
        primarySaleHappened,
        isMutable,
        editionNonce,
        tokenStandard: anyCorrupted ? null : tokenStandard,
        collection: anyCorrupted ? null : collection,
        uses: anyCorrupted ? null : uses,
        collectionDetails: anyCorrupted ? null : collectionDetails,
    };
    return [Metadata_1.Metadata.fromArgs(args), cursor];
}
exports.deserialize = deserialize;
function tryReadOption(optionBeet, buf, offset) {
    try {
        const fixed = optionBeet.toFixedFromData(buf, offset);
        const value = fixed.read(buf, offset);
        return [value, fixed.byteSize, false];
    }
    catch (err) {
        return [null, NONE_BYTE_SIZE, true];
    }
}
//# sourceMappingURL=metadata-deserializer.js.map