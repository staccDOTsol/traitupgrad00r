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
exports.reservationListV2Beet = exports.ReservationListV2 = void 0;
const web3 = __importStar(require("@solana/web3.js"));
const beet = __importStar(require("@metaplex-foundation/beet"));
const beetSolana = __importStar(require("@metaplex-foundation/beet-solana"));
const Key_1 = require("../types/Key");
const Reservation_1 = require("../types/Reservation");
class ReservationListV2 {
    constructor(key, masterEdition, supplySnapshot, reservations, totalReservationSpots, currentReservationSpots) {
        this.key = key;
        this.masterEdition = masterEdition;
        this.supplySnapshot = supplySnapshot;
        this.reservations = reservations;
        this.totalReservationSpots = totalReservationSpots;
        this.currentReservationSpots = currentReservationSpots;
    }
    static fromArgs(args) {
        return new ReservationListV2(args.key, args.masterEdition, args.supplySnapshot, args.reservations, args.totalReservationSpots, args.currentReservationSpots);
    }
    static fromAccountInfo(accountInfo, offset = 0) {
        return ReservationListV2.deserialize(accountInfo.data, offset);
    }
    static async fromAccountAddress(connection, address) {
        const accountInfo = await connection.getAccountInfo(address);
        if (accountInfo == null) {
            throw new Error(`Unable to find ReservationListV2 account at ${address}`);
        }
        return ReservationListV2.fromAccountInfo(accountInfo, 0)[0];
    }
    static gpaBuilder(programId = new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s')) {
        return beetSolana.GpaBuilder.fromStruct(programId, exports.reservationListV2Beet);
    }
    static deserialize(buf, offset = 0) {
        return exports.reservationListV2Beet.deserialize(buf, offset);
    }
    serialize() {
        return exports.reservationListV2Beet.serialize(this);
    }
    static byteSize(args) {
        const instance = ReservationListV2.fromArgs(args);
        return exports.reservationListV2Beet.toFixedFromValue(instance).byteSize;
    }
    static async getMinimumBalanceForRentExemption(args, connection, commitment) {
        return connection.getMinimumBalanceForRentExemption(ReservationListV2.byteSize(args), commitment);
    }
    pretty() {
        return {
            key: 'Key.' + Key_1.Key[this.key],
            masterEdition: this.masterEdition.toBase58(),
            supplySnapshot: this.supplySnapshot,
            reservations: this.reservations,
            totalReservationSpots: (() => {
                const x = this.totalReservationSpots;
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
            currentReservationSpots: (() => {
                const x = this.currentReservationSpots;
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
        };
    }
}
exports.ReservationListV2 = ReservationListV2;
exports.reservationListV2Beet = new beet.FixableBeetStruct([
    ['key', Key_1.keyBeet],
    ['masterEdition', beetSolana.publicKey],
    ['supplySnapshot', beet.coption(beet.u64)],
    ['reservations', beet.array(Reservation_1.reservationBeet)],
    ['totalReservationSpots', beet.u64],
    ['currentReservationSpots', beet.u64],
], ReservationListV2.fromArgs, 'ReservationListV2');
//# sourceMappingURL=ReservationListV2.js.map