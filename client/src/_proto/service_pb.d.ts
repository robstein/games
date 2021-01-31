// package: 
// file: service.proto

import * as jspb from "google-protobuf";

export class CreateGameRequest extends jspb.Message {
  getNumberOfPlayers(): number;
  setNumberOfPlayers(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGameRequest): CreateGameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGameRequest;
  static deserializeBinaryFromReader(message: CreateGameRequest, reader: jspb.BinaryReader): CreateGameRequest;
}

export namespace CreateGameRequest {
  export type AsObject = {
    numberOfPlayers: number,
  }
}

export class CreateGameResponse extends jspb.Message {
  getGameId(): string;
  setGameId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGameResponse): CreateGameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGameResponse;
  static deserializeBinaryFromReader(message: CreateGameResponse, reader: jspb.BinaryReader): CreateGameResponse;
}

export namespace CreateGameResponse {
  export type AsObject = {
    gameId: string,
  }
}

export class JoinGameRequest extends jspb.Message {
  getGameId(): string;
  setGameId(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGameRequest): JoinGameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGameRequest;
  static deserializeBinaryFromReader(message: JoinGameRequest, reader: jspb.BinaryReader): JoinGameRequest;
}

export namespace JoinGameRequest {
  export type AsObject = {
    gameId: string,
    username: string,
  }
}

export class JoinGameResponse extends jspb.Message {
  getPlayerId(): string;
  setPlayerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGameResponse): JoinGameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGameResponse;
  static deserializeBinaryFromReader(message: JoinGameResponse, reader: jspb.BinaryReader): JoinGameResponse;
}

export namespace JoinGameResponse {
  export type AsObject = {
    playerId: string,
  }
}

export class DescribeGameRequest extends jspb.Message {
  getGameId(): string;
  setGameId(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeGameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeGameRequest): DescribeGameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescribeGameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeGameRequest;
  static deserializeBinaryFromReader(message: DescribeGameRequest, reader: jspb.BinaryReader): DescribeGameRequest;
}

export namespace DescribeGameRequest {
  export type AsObject = {
    gameId: string,
    username: string,
  }
}

export class DescribeGameResponse extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): GameState | undefined;
  setState(value?: GameState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeGameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeGameResponse): DescribeGameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescribeGameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeGameResponse;
  static deserializeBinaryFromReader(message: DescribeGameResponse, reader: jspb.BinaryReader): DescribeGameResponse;
}

export namespace DescribeGameResponse {
  export type AsObject = {
    state?: GameState.AsObject,
  }
}

export class MoveRequest extends jspb.Message {
  getGameId(): string;
  setGameId(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  hasMove(): boolean;
  clearMove(): void;
  getMove(): Move | undefined;
  setMove(value?: Move): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveRequest): MoveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveRequest;
  static deserializeBinaryFromReader(message: MoveRequest, reader: jspb.BinaryReader): MoveRequest;
}

export namespace MoveRequest {
  export type AsObject = {
    gameId: string,
    username: string,
    move?: Move.AsObject,
  }
}

export class MoveResponse extends jspb.Message {
  hasNextState(): boolean;
  clearNextState(): void;
  getNextState(): GameState | undefined;
  setNextState(value?: GameState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveResponse): MoveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveResponse;
  static deserializeBinaryFromReader(message: MoveResponse, reader: jspb.BinaryReader): MoveResponse;
}

export namespace MoveResponse {
  export type AsObject = {
    nextState?: GameState.AsObject,
  }
}

export class GameState extends jspb.Message {
  hasTicTacToeState(): boolean;
  clearTicTacToeState(): void;
  getTicTacToeState(): TicTacToeState | undefined;
  setTicTacToeState(value?: TicTacToeState): void;

  hasMonopolyDealState(): boolean;
  clearMonopolyDealState(): void;
  getMonopolyDealState(): MonopolyDealState | undefined;
  setMonopolyDealState(value?: MonopolyDealState): void;

  getWhoseMoveId(): string;
  setWhoseMoveId(value: string): void;

  getGameStateCase(): GameState.GameStateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameState.AsObject;
  static toObject(includeInstance: boolean, msg: GameState): GameState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameState;
  static deserializeBinaryFromReader(message: GameState, reader: jspb.BinaryReader): GameState;
}

export namespace GameState {
  export type AsObject = {
    ticTacToeState?: TicTacToeState.AsObject,
    monopolyDealState?: MonopolyDealState.AsObject,
    whoseMoveId: string,
  }

  export enum GameStateCase {
    GAME_STATE_NOT_SET = 0,
    TIC_TAC_TOE_STATE = 1,
    MONOPOLY_DEAL_STATE = 2,
  }
}

export class Move extends jspb.Message {
  hasTicTacToeMove(): boolean;
  clearTicTacToeMove(): void;
  getTicTacToeMove(): TicTacToeMove | undefined;
  setTicTacToeMove(value?: TicTacToeMove): void;

  getMoveCase(): Move.MoveCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Move.AsObject;
  static toObject(includeInstance: boolean, msg: Move): Move.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Move, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Move;
  static deserializeBinaryFromReader(message: Move, reader: jspb.BinaryReader): Move;
}

export namespace Move {
  export type AsObject = {
    ticTacToeMove?: TicTacToeMove.AsObject,
  }

  export enum MoveCase {
    MOVE_NOT_SET = 0,
    TIC_TAC_TOE_MOVE = 1,
  }
}

export class TicTacToeState extends jspb.Message {
  getFlattenedArray(): string;
  setFlattenedArray(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicTacToeState.AsObject;
  static toObject(includeInstance: boolean, msg: TicTacToeState): TicTacToeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicTacToeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicTacToeState;
  static deserializeBinaryFromReader(message: TicTacToeState, reader: jspb.BinaryReader): TicTacToeState;
}

export namespace TicTacToeState {
  export type AsObject = {
    flattenedArray: string,
  }
}

export class TicTacToeMove extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicTacToeMove.AsObject;
  static toObject(includeInstance: boolean, msg: TicTacToeMove): TicTacToeMove.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicTacToeMove, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicTacToeMove;
  static deserializeBinaryFromReader(message: TicTacToeMove, reader: jspb.BinaryReader): TicTacToeMove;
}

export namespace TicTacToeMove {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class MonopolyDealState extends jspb.Message {
  clearPlayerStatesList(): void;
  getPlayerStatesList(): Array<PlayerState>;
  setPlayerStatesList(value: Array<PlayerState>): void;
  addPlayerStates(value?: PlayerState, index?: number): PlayerState;

  clearDeckList(): void;
  getDeckList(): Array<Card>;
  setDeckList(value: Array<Card>): void;
  addDeck(value?: Card, index?: number): Card;

  clearDiscardPileList(): void;
  getDiscardPileList(): Array<Card>;
  setDiscardPileList(value: Array<Card>): void;
  addDiscardPile(value?: Card, index?: number): Card;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonopolyDealState.AsObject;
  static toObject(includeInstance: boolean, msg: MonopolyDealState): MonopolyDealState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonopolyDealState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonopolyDealState;
  static deserializeBinaryFromReader(message: MonopolyDealState, reader: jspb.BinaryReader): MonopolyDealState;
}

export namespace MonopolyDealState {
  export type AsObject = {
    playerStatesList: Array<PlayerState.AsObject>,
    deckList: Array<Card.AsObject>,
    discardPileList: Array<Card.AsObject>,
  }
}

export class PlayerState extends jspb.Message {
  clearHandList(): void;
  getHandList(): Array<Card>;
  setHandList(value: Array<Card>): void;
  addHand(value?: Card, index?: number): Card;

  clearPublicHoldingsList(): void;
  getPublicHoldingsList(): Array<Card>;
  setPublicHoldingsList(value: Array<Card>): void;
  addPublicHoldings(value?: Card, index?: number): Card;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerState.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerState): PlayerState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerState;
  static deserializeBinaryFromReader(message: PlayerState, reader: jspb.BinaryReader): PlayerState;
}

export namespace PlayerState {
  export type AsObject = {
    handList: Array<Card.AsObject>,
    publicHoldingsList: Array<Card.AsObject>,
  }
}

export class Card extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  hasProperty(): boolean;
  clearProperty(): void;
  getProperty(): Property | undefined;
  setProperty(value?: Property): void;

  getAction(): string;
  setAction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Card.AsObject;
  static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Card;
  static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
}

export namespace Card {
  export type AsObject = {
    value: number,
    property?: Property.AsObject,
    action: string,
  }
}

export class Property extends jspb.Message {
  hasActiveProperty(): boolean;
  clearActiveProperty(): void;
  getActiveProperty(): PropertyDetails | undefined;
  setActiveProperty(value?: PropertyDetails): void;

  hasInactiveProperty(): boolean;
  clearInactiveProperty(): void;
  getInactiveProperty(): PropertyDetails | undefined;
  setInactiveProperty(value?: PropertyDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Property.AsObject;
  static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Property;
  static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
  export type AsObject = {
    activeProperty?: PropertyDetails.AsObject,
    inactiveProperty?: PropertyDetails.AsObject,
  }
}

export class PropertyDetails extends jspb.Message {
  getColor(): string;
  setColor(value: string): void;

  clearRentDetailsList(): void;
  getRentDetailsList(): Array<RentDetail>;
  setRentDetailsList(value: Array<RentDetail>): void;
  addRentDetails(value?: RentDetail, index?: number): RentDetail;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyDetails.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyDetails): PropertyDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyDetails;
  static deserializeBinaryFromReader(message: PropertyDetails, reader: jspb.BinaryReader): PropertyDetails;
}

export namespace PropertyDetails {
  export type AsObject = {
    color: string,
    rentDetailsList: Array<RentDetail.AsObject>,
    name: string,
  }
}

export class RentDetail extends jspb.Message {
  getRentWithOne(): number;
  setRentWithOne(value: number): void;

  getRentWithTwo(): number;
  setRentWithTwo(value: number): void;

  getRentWithThree(): number;
  setRentWithThree(value: number): void;

  getRentWithFour(): number;
  setRentWithFour(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RentDetail.AsObject;
  static toObject(includeInstance: boolean, msg: RentDetail): RentDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RentDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RentDetail;
  static deserializeBinaryFromReader(message: RentDetail, reader: jspb.BinaryReader): RentDetail;
}

export namespace RentDetail {
  export type AsObject = {
    rentWithOne: number,
    rentWithTwo: number,
    rentWithThree: number,
    rentWithFour: number,
  }
}

