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
exports.masterEditionV2Beet = exports.MasterEditionV2 = void 0;
const beet = __importStar(require("@metaplex-foundation/beet"));
const web3 = __importStar(require("@solana/web3.js"));
const beetSolana = __importStar(require("@metaplex-foundation/beet-solana"));
const Key_1 = require("../types/Key");
class MasterEditionV2 {
    constructor(key, supply, maxSupply) {
        this.key = key;
        this.supply = supply;
        this.maxSupply = maxSupply;
    }
    static fromArgs(args) {
        return new MasterEditionV2(args.key, args.supply, args.maxSupply);
    }
    static fromAccountInfo(accountInfo, offset = 0) {
        return MasterEditionV2.deserialize(accountInfo.data, offset);
    }
    static async fromAccountAddress(connection, address) {
        const accountInfo = await connection.getAccountInfo(address);
        if (accountInfo == null) {
            throw new Error(`Unable to find MasterEditionV2 account at ${address}`);
        }
        return MasterEditionV2.fromAccountInfo(accountInfo, 0)[0];
    }
    static gpaBuilder(programId = new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s')) {
        return beetSolana.GpaBuilder.fromStruct(programId, exports.masterEditionV2Beet);
    }
    static deserialize(buf, offset = 0) {
        return exports.masterEditionV2Beet.deserialize(buf, offset);
    }
    serialize() {
        return exports.masterEditionV2Beet.serialize(this);
    }
    static byteSize(args) {
        const instance = MasterEditionV2.fromArgs(args);
        return exports.masterEditionV2Beet.toFixedFromValue(instance).byteSize;
    }
    static async getMinimumBalanceForRentExemption(args, connection, commitment) {
        return connection.getMinimumBalanceForRentExemption(MasterEditionV2.byteSize(args), commitment);
    }
    pretty() {
        return {
            key: 'Key.' + Key_1.Key[this.key],
            supply: (() => {
                const x = this.supply;
                if (typeof x.toNumber === 'function') {
                    try {
                        return x.toNumber();
                    }
                    catch (_) {
                        return x;
                    }
                }
                return x;
            })(),
            maxSupply: this.maxSupply,
        };
    }
}
exports.MasterEditionV2 = MasterEditionV2;
exports.masterEditionV2Beet = new beet.FixableBeetStruct([
    ['key', Key_1.keyBeet],
    ['supply', beet.u64],
    ['maxSupply', beet.coption(beet.u64)],
], MasterEditionV2.fromArgs, 'MasterEditionV2');
//# sourceMappingURL=MasterEditionV2.js.map