
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model extrato_Movimentaçao
 * 
 */
export type extrato_Movimentaçao = $Result.DefaultSelection<Prisma.$extrato_MovimentaçaoPayload>
/**
 * Model criar_evento
 * 
 */
export type criar_evento = $Result.DefaultSelection<Prisma.$criar_eventoPayload>
/**
 * Model endereço
 * 
 */
export type endereço = $Result.DefaultSelection<Prisma.$endereçoPayload>
/**
 * Model registo_evento
 * 
 */
export type registo_evento = $Result.DefaultSelection<Prisma.$registo_eventoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const tipo_lançamento: {
  DEBITO: 'DEBITO',
  CREDITO: 'CREDITO'
};

export type tipo_lançamento = (typeof tipo_lançamento)[keyof typeof tipo_lançamento]

}

export type tipo_lançamento = $Enums.tipo_lançamento

export const tipo_lançamento: typeof $Enums.tipo_lançamento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.extrato_Movimentaçao`: Exposes CRUD operations for the **extrato_Movimentaçao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Extrato_Movimentaçaos
    * const extrato_Movimentaçaos = await prisma.extrato_Movimentaçao.findMany()
    * ```
    */
  get extrato_Movimentaçao(): Prisma.extrato_MovimentaçaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.criar_evento`: Exposes CRUD operations for the **criar_evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Criar_eventos
    * const criar_eventos = await prisma.criar_evento.findMany()
    * ```
    */
  get criar_evento(): Prisma.criar_eventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereço`: Exposes CRUD operations for the **endereço** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Endereços
    * const endereços = await prisma.endereço.findMany()
    * ```
    */
  get endereço(): Prisma.endereçoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registo_evento`: Exposes CRUD operations for the **registo_evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registo_eventos
    * const registo_eventos = await prisma.registo_evento.findMany()
    * ```
    */
  get registo_evento(): Prisma.registo_eventoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    extrato_Movimentaçao: 'extrato_Movimentaçao',
    criar_evento: 'criar_evento',
    endereço: 'endereço',
    registo_evento: 'registo_evento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "extrato_Movimentaçao" | "criar_evento" | "endereço" | "registo_evento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      extrato_Movimentaçao: {
        payload: Prisma.$extrato_MovimentaçaoPayload<ExtArgs>
        fields: Prisma.extrato_MovimentaçaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.extrato_MovimentaçaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrato_MovimentaçaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.extrato_MovimentaçaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrato_MovimentaçaoPayload>
          }
          findFirst: {
            args: Prisma.extrato_MovimentaçaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrato_MovimentaçaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.extrato_MovimentaçaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrato_MovimentaçaoPayload>
          }
          findMany: {
            args: Prisma.extrato_MovimentaçaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrato_MovimentaçaoPayload>[]
          }
          create: {
            args: Prisma.extrato_MovimentaçaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrato_MovimentaçaoPayload>
          }
          createMany: {
            args: Prisma.extrato_MovimentaçaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.extrato_MovimentaçaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrato_MovimentaçaoPayload>
          }
          update: {
            args: Prisma.extrato_MovimentaçaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrato_MovimentaçaoPayload>
          }
          deleteMany: {
            args: Prisma.extrato_MovimentaçaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.extrato_MovimentaçaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.extrato_MovimentaçaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrato_MovimentaçaoPayload>
          }
          aggregate: {
            args: Prisma.Extrato_MovimentaçaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExtrato_Movimentaçao>
          }
          groupBy: {
            args: Prisma.extrato_MovimentaçaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Extrato_MovimentaçaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.extrato_MovimentaçaoCountArgs<ExtArgs>
            result: $Utils.Optional<Extrato_MovimentaçaoCountAggregateOutputType> | number
          }
        }
      }
      criar_evento: {
        payload: Prisma.$criar_eventoPayload<ExtArgs>
        fields: Prisma.criar_eventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.criar_eventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criar_eventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.criar_eventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criar_eventoPayload>
          }
          findFirst: {
            args: Prisma.criar_eventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criar_eventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.criar_eventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criar_eventoPayload>
          }
          findMany: {
            args: Prisma.criar_eventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criar_eventoPayload>[]
          }
          create: {
            args: Prisma.criar_eventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criar_eventoPayload>
          }
          createMany: {
            args: Prisma.criar_eventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.criar_eventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criar_eventoPayload>
          }
          update: {
            args: Prisma.criar_eventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criar_eventoPayload>
          }
          deleteMany: {
            args: Prisma.criar_eventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.criar_eventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.criar_eventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criar_eventoPayload>
          }
          aggregate: {
            args: Prisma.Criar_eventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCriar_evento>
          }
          groupBy: {
            args: Prisma.criar_eventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Criar_eventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.criar_eventoCountArgs<ExtArgs>
            result: $Utils.Optional<Criar_eventoCountAggregateOutputType> | number
          }
        }
      }
      endereço: {
        payload: Prisma.$endereçoPayload<ExtArgs>
        fields: Prisma.endereçoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.endereçoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereçoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.endereçoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereçoPayload>
          }
          findFirst: {
            args: Prisma.endereçoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereçoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.endereçoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereçoPayload>
          }
          findMany: {
            args: Prisma.endereçoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereçoPayload>[]
          }
          create: {
            args: Prisma.endereçoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereçoPayload>
          }
          createMany: {
            args: Prisma.endereçoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.endereçoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereçoPayload>
          }
          update: {
            args: Prisma.endereçoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereçoPayload>
          }
          deleteMany: {
            args: Prisma.endereçoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.endereçoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.endereçoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereçoPayload>
          }
          aggregate: {
            args: Prisma.EndereçoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereço>
          }
          groupBy: {
            args: Prisma.endereçoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EndereçoGroupByOutputType>[]
          }
          count: {
            args: Prisma.endereçoCountArgs<ExtArgs>
            result: $Utils.Optional<EndereçoCountAggregateOutputType> | number
          }
        }
      }
      registo_evento: {
        payload: Prisma.$registo_eventoPayload<ExtArgs>
        fields: Prisma.registo_eventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.registo_eventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registo_eventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.registo_eventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registo_eventoPayload>
          }
          findFirst: {
            args: Prisma.registo_eventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registo_eventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.registo_eventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registo_eventoPayload>
          }
          findMany: {
            args: Prisma.registo_eventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registo_eventoPayload>[]
          }
          create: {
            args: Prisma.registo_eventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registo_eventoPayload>
          }
          createMany: {
            args: Prisma.registo_eventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.registo_eventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registo_eventoPayload>
          }
          update: {
            args: Prisma.registo_eventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registo_eventoPayload>
          }
          deleteMany: {
            args: Prisma.registo_eventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.registo_eventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.registo_eventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registo_eventoPayload>
          }
          aggregate: {
            args: Prisma.Registo_eventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegisto_evento>
          }
          groupBy: {
            args: Prisma.registo_eventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Registo_eventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.registo_eventoCountArgs<ExtArgs>
            result: $Utils.Optional<Registo_eventoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    extrato_Movimentaçao?: extrato_MovimentaçaoOmit
    criar_evento?: criar_eventoOmit
    endereço?: endereçoOmit
    registo_evento?: registo_eventoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    eventoid: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventoid?: boolean | UserCountOutputTypeCountEventoidArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventoidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: criar_eventoWhereInput
  }


  /**
   * Count Type Criar_eventoCountOutputType
   */

  export type Criar_eventoCountOutputType = {
    registro: number
  }

  export type Criar_eventoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registro?: boolean | Criar_eventoCountOutputTypeCountRegistroArgs
  }

  // Custom InputTypes
  /**
   * Criar_eventoCountOutputType without action
   */
  export type Criar_eventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criar_eventoCountOutputType
     */
    select?: Criar_eventoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Criar_eventoCountOutputType without action
   */
  export type Criar_eventoCountOutputTypeCountRegistroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registo_eventoWhereInput
  }


  /**
   * Count Type EndereçoCountOutputType
   */

  export type EndereçoCountOutputType = {
    registroid: number
  }

  export type EndereçoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registroid?: boolean | EndereçoCountOutputTypeCountRegistroidArgs
  }

  // Custom InputTypes
  /**
   * EndereçoCountOutputType without action
   */
  export type EndereçoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndereçoCountOutputType
     */
    select?: EndereçoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EndereçoCountOutputType without action
   */
  export type EndereçoCountOutputTypeCountRegistroidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registo_eventoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userid: number | null
  }

  export type UserSumAggregateOutputType = {
    userid: number | null
  }

  export type UserMinAggregateOutputType = {
    userid: number | null
    user: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    userid: number | null
    user: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    userid: number
    user: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userid?: true
  }

  export type UserSumAggregateInputType = {
    userid?: true
  }

  export type UserMinAggregateInputType = {
    userid?: true
    user?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    userid?: true
    user?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    userid?: true
    user?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userid: number
    user: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    user?: boolean
    email?: boolean
    eventoid?: boolean | user$eventoidArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    userid?: boolean
    user?: boolean
    email?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userid" | "user" | "email", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventoid?: boolean | user$eventoidArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      eventoid: Prisma.$criar_eventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userid: number
      user: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userid`
     * const userWithUseridOnly = await prisma.user.findMany({ select: { userid: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventoid<T extends user$eventoidArgs<ExtArgs> = {}>(args?: Subset<T, user$eventoidArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$criar_eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly userid: FieldRef<"user", 'Int'>
    readonly user: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.eventoid
   */
  export type user$eventoidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criar_evento
     */
    select?: criar_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criar_evento
     */
    omit?: criar_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criar_eventoInclude<ExtArgs> | null
    where?: criar_eventoWhereInput
    orderBy?: criar_eventoOrderByWithRelationInput | criar_eventoOrderByWithRelationInput[]
    cursor?: criar_eventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Criar_eventoScalarFieldEnum | Criar_eventoScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model extrato_Movimentaçao
   */

  export type AggregateExtrato_Movimentaçao = {
    _count: Extrato_MovimentaçaoCountAggregateOutputType | null
    _avg: Extrato_MovimentaçaoAvgAggregateOutputType | null
    _sum: Extrato_MovimentaçaoSumAggregateOutputType | null
    _min: Extrato_MovimentaçaoMinAggregateOutputType | null
    _max: Extrato_MovimentaçaoMaxAggregateOutputType | null
  }

  export type Extrato_MovimentaçaoAvgAggregateOutputType = {
    codigoAgenciaOrigem: number | null
    valor: Decimal | null
    numero_Conta_origem: number | null
    codigo_Banco: number | null
  }

  export type Extrato_MovimentaçaoSumAggregateOutputType = {
    codigoAgenciaOrigem: number | null
    valor: Decimal | null
    numero_Conta_origem: number | null
    codigo_Banco: number | null
  }

  export type Extrato_MovimentaçaoMinAggregateOutputType = {
    trasaçaoid: string | null
    codigoAgenciaOrigem: number | null
    data_lançamento: Date | null
    descriçao: string | null
    tipo_lançamento: $Enums.tipo_lançamento | null
    valor: Decimal | null
    data_Extrato: Date | null
    numero_Conta_origem: number | null
    codigo_Banco: number | null
  }

  export type Extrato_MovimentaçaoMaxAggregateOutputType = {
    trasaçaoid: string | null
    codigoAgenciaOrigem: number | null
    data_lançamento: Date | null
    descriçao: string | null
    tipo_lançamento: $Enums.tipo_lançamento | null
    valor: Decimal | null
    data_Extrato: Date | null
    numero_Conta_origem: number | null
    codigo_Banco: number | null
  }

  export type Extrato_MovimentaçaoCountAggregateOutputType = {
    trasaçaoid: number
    codigoAgenciaOrigem: number
    data_lançamento: number
    descriçao: number
    tipo_lançamento: number
    valor: number
    data_Extrato: number
    numero_Conta_origem: number
    codigo_Banco: number
    _all: number
  }


  export type Extrato_MovimentaçaoAvgAggregateInputType = {
    codigoAgenciaOrigem?: true
    valor?: true
    numero_Conta_origem?: true
    codigo_Banco?: true
  }

  export type Extrato_MovimentaçaoSumAggregateInputType = {
    codigoAgenciaOrigem?: true
    valor?: true
    numero_Conta_origem?: true
    codigo_Banco?: true
  }

  export type Extrato_MovimentaçaoMinAggregateInputType = {
    trasaçaoid?: true
    codigoAgenciaOrigem?: true
    data_lançamento?: true
    descriçao?: true
    tipo_lançamento?: true
    valor?: true
    data_Extrato?: true
    numero_Conta_origem?: true
    codigo_Banco?: true
  }

  export type Extrato_MovimentaçaoMaxAggregateInputType = {
    trasaçaoid?: true
    codigoAgenciaOrigem?: true
    data_lançamento?: true
    descriçao?: true
    tipo_lançamento?: true
    valor?: true
    data_Extrato?: true
    numero_Conta_origem?: true
    codigo_Banco?: true
  }

  export type Extrato_MovimentaçaoCountAggregateInputType = {
    trasaçaoid?: true
    codigoAgenciaOrigem?: true
    data_lançamento?: true
    descriçao?: true
    tipo_lançamento?: true
    valor?: true
    data_Extrato?: true
    numero_Conta_origem?: true
    codigo_Banco?: true
    _all?: true
  }

  export type Extrato_MovimentaçaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which extrato_Movimentaçao to aggregate.
     */
    where?: extrato_MovimentaçaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of extrato_Movimentaçaos to fetch.
     */
    orderBy?: extrato_MovimentaçaoOrderByWithRelationInput | extrato_MovimentaçaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: extrato_MovimentaçaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` extrato_Movimentaçaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` extrato_Movimentaçaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned extrato_Movimentaçaos
    **/
    _count?: true | Extrato_MovimentaçaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Extrato_MovimentaçaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Extrato_MovimentaçaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Extrato_MovimentaçaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Extrato_MovimentaçaoMaxAggregateInputType
  }

  export type GetExtrato_MovimentaçaoAggregateType<T extends Extrato_MovimentaçaoAggregateArgs> = {
        [P in keyof T & keyof AggregateExtrato_Movimentaçao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExtrato_Movimentaçao[P]>
      : GetScalarType<T[P], AggregateExtrato_Movimentaçao[P]>
  }




  export type extrato_MovimentaçaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: extrato_MovimentaçaoWhereInput
    orderBy?: extrato_MovimentaçaoOrderByWithAggregationInput | extrato_MovimentaçaoOrderByWithAggregationInput[]
    by: Extrato_MovimentaçaoScalarFieldEnum[] | Extrato_MovimentaçaoScalarFieldEnum
    having?: extrato_MovimentaçaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Extrato_MovimentaçaoCountAggregateInputType | true
    _avg?: Extrato_MovimentaçaoAvgAggregateInputType
    _sum?: Extrato_MovimentaçaoSumAggregateInputType
    _min?: Extrato_MovimentaçaoMinAggregateInputType
    _max?: Extrato_MovimentaçaoMaxAggregateInputType
  }

  export type Extrato_MovimentaçaoGroupByOutputType = {
    trasaçaoid: string
    codigoAgenciaOrigem: number
    data_lançamento: Date
    descriçao: string
    tipo_lançamento: $Enums.tipo_lançamento
    valor: Decimal
    data_Extrato: Date
    numero_Conta_origem: number
    codigo_Banco: number
    _count: Extrato_MovimentaçaoCountAggregateOutputType | null
    _avg: Extrato_MovimentaçaoAvgAggregateOutputType | null
    _sum: Extrato_MovimentaçaoSumAggregateOutputType | null
    _min: Extrato_MovimentaçaoMinAggregateOutputType | null
    _max: Extrato_MovimentaçaoMaxAggregateOutputType | null
  }

  type GetExtrato_MovimentaçaoGroupByPayload<T extends extrato_MovimentaçaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Extrato_MovimentaçaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Extrato_MovimentaçaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Extrato_MovimentaçaoGroupByOutputType[P]>
            : GetScalarType<T[P], Extrato_MovimentaçaoGroupByOutputType[P]>
        }
      >
    >


  export type extrato_MovimentaçaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trasaçaoid?: boolean
    codigoAgenciaOrigem?: boolean
    data_lançamento?: boolean
    descriçao?: boolean
    tipo_lançamento?: boolean
    valor?: boolean
    data_Extrato?: boolean
    numero_Conta_origem?: boolean
    codigo_Banco?: boolean
  }, ExtArgs["result"]["extrato_Movimentaçao"]>



  export type extrato_MovimentaçaoSelectScalar = {
    trasaçaoid?: boolean
    codigoAgenciaOrigem?: boolean
    data_lançamento?: boolean
    descriçao?: boolean
    tipo_lançamento?: boolean
    valor?: boolean
    data_Extrato?: boolean
    numero_Conta_origem?: boolean
    codigo_Banco?: boolean
  }

  export type extrato_MovimentaçaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"trasaçaoid" | "codigoAgenciaOrigem" | "data_lançamento" | "descriçao" | "tipo_lançamento" | "valor" | "data_Extrato" | "numero_Conta_origem" | "codigo_Banco", ExtArgs["result"]["extrato_Movimentaçao"]>

  export type $extrato_MovimentaçaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "extrato_Movimentaçao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      trasaçaoid: string
      codigoAgenciaOrigem: number
      data_lançamento: Date
      descriçao: string
      tipo_lançamento: $Enums.tipo_lançamento
      valor: Prisma.Decimal
      data_Extrato: Date
      numero_Conta_origem: number
      codigo_Banco: number
    }, ExtArgs["result"]["extrato_Movimentaçao"]>
    composites: {}
  }

  type extrato_MovimentaçaoGetPayload<S extends boolean | null | undefined | extrato_MovimentaçaoDefaultArgs> = $Result.GetResult<Prisma.$extrato_MovimentaçaoPayload, S>

  type extrato_MovimentaçaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<extrato_MovimentaçaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Extrato_MovimentaçaoCountAggregateInputType | true
    }

  export interface extrato_MovimentaçaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['extrato_Movimentaçao'], meta: { name: 'extrato_Movimentaçao' } }
    /**
     * Find zero or one Extrato_Movimentaçao that matches the filter.
     * @param {extrato_MovimentaçaoFindUniqueArgs} args - Arguments to find a Extrato_Movimentaçao
     * @example
     * // Get one Extrato_Movimentaçao
     * const extrato_Movimentaçao = await prisma.extrato_Movimentaçao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends extrato_MovimentaçaoFindUniqueArgs>(args: SelectSubset<T, extrato_MovimentaçaoFindUniqueArgs<ExtArgs>>): Prisma__extrato_MovimentaçaoClient<$Result.GetResult<Prisma.$extrato_MovimentaçaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Extrato_Movimentaçao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {extrato_MovimentaçaoFindUniqueOrThrowArgs} args - Arguments to find a Extrato_Movimentaçao
     * @example
     * // Get one Extrato_Movimentaçao
     * const extrato_Movimentaçao = await prisma.extrato_Movimentaçao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends extrato_MovimentaçaoFindUniqueOrThrowArgs>(args: SelectSubset<T, extrato_MovimentaçaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__extrato_MovimentaçaoClient<$Result.GetResult<Prisma.$extrato_MovimentaçaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extrato_Movimentaçao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extrato_MovimentaçaoFindFirstArgs} args - Arguments to find a Extrato_Movimentaçao
     * @example
     * // Get one Extrato_Movimentaçao
     * const extrato_Movimentaçao = await prisma.extrato_Movimentaçao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends extrato_MovimentaçaoFindFirstArgs>(args?: SelectSubset<T, extrato_MovimentaçaoFindFirstArgs<ExtArgs>>): Prisma__extrato_MovimentaçaoClient<$Result.GetResult<Prisma.$extrato_MovimentaçaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extrato_Movimentaçao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extrato_MovimentaçaoFindFirstOrThrowArgs} args - Arguments to find a Extrato_Movimentaçao
     * @example
     * // Get one Extrato_Movimentaçao
     * const extrato_Movimentaçao = await prisma.extrato_Movimentaçao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends extrato_MovimentaçaoFindFirstOrThrowArgs>(args?: SelectSubset<T, extrato_MovimentaçaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__extrato_MovimentaçaoClient<$Result.GetResult<Prisma.$extrato_MovimentaçaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Extrato_Movimentaçaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extrato_MovimentaçaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Extrato_Movimentaçaos
     * const extrato_Movimentaçaos = await prisma.extrato_Movimentaçao.findMany()
     * 
     * // Get first 10 Extrato_Movimentaçaos
     * const extrato_Movimentaçaos = await prisma.extrato_Movimentaçao.findMany({ take: 10 })
     * 
     * // Only select the `trasaçaoid`
     * const extrato_MovimentaçaoWithTrasaçaoidOnly = await prisma.extrato_Movimentaçao.findMany({ select: { trasaçaoid: true } })
     * 
     */
    findMany<T extends extrato_MovimentaçaoFindManyArgs>(args?: SelectSubset<T, extrato_MovimentaçaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$extrato_MovimentaçaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Extrato_Movimentaçao.
     * @param {extrato_MovimentaçaoCreateArgs} args - Arguments to create a Extrato_Movimentaçao.
     * @example
     * // Create one Extrato_Movimentaçao
     * const Extrato_Movimentaçao = await prisma.extrato_Movimentaçao.create({
     *   data: {
     *     // ... data to create a Extrato_Movimentaçao
     *   }
     * })
     * 
     */
    create<T extends extrato_MovimentaçaoCreateArgs>(args: SelectSubset<T, extrato_MovimentaçaoCreateArgs<ExtArgs>>): Prisma__extrato_MovimentaçaoClient<$Result.GetResult<Prisma.$extrato_MovimentaçaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Extrato_Movimentaçaos.
     * @param {extrato_MovimentaçaoCreateManyArgs} args - Arguments to create many Extrato_Movimentaçaos.
     * @example
     * // Create many Extrato_Movimentaçaos
     * const extrato_Movimentaçao = await prisma.extrato_Movimentaçao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends extrato_MovimentaçaoCreateManyArgs>(args?: SelectSubset<T, extrato_MovimentaçaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Extrato_Movimentaçao.
     * @param {extrato_MovimentaçaoDeleteArgs} args - Arguments to delete one Extrato_Movimentaçao.
     * @example
     * // Delete one Extrato_Movimentaçao
     * const Extrato_Movimentaçao = await prisma.extrato_Movimentaçao.delete({
     *   where: {
     *     // ... filter to delete one Extrato_Movimentaçao
     *   }
     * })
     * 
     */
    delete<T extends extrato_MovimentaçaoDeleteArgs>(args: SelectSubset<T, extrato_MovimentaçaoDeleteArgs<ExtArgs>>): Prisma__extrato_MovimentaçaoClient<$Result.GetResult<Prisma.$extrato_MovimentaçaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Extrato_Movimentaçao.
     * @param {extrato_MovimentaçaoUpdateArgs} args - Arguments to update one Extrato_Movimentaçao.
     * @example
     * // Update one Extrato_Movimentaçao
     * const extrato_Movimentaçao = await prisma.extrato_Movimentaçao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends extrato_MovimentaçaoUpdateArgs>(args: SelectSubset<T, extrato_MovimentaçaoUpdateArgs<ExtArgs>>): Prisma__extrato_MovimentaçaoClient<$Result.GetResult<Prisma.$extrato_MovimentaçaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Extrato_Movimentaçaos.
     * @param {extrato_MovimentaçaoDeleteManyArgs} args - Arguments to filter Extrato_Movimentaçaos to delete.
     * @example
     * // Delete a few Extrato_Movimentaçaos
     * const { count } = await prisma.extrato_Movimentaçao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends extrato_MovimentaçaoDeleteManyArgs>(args?: SelectSubset<T, extrato_MovimentaçaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extrato_Movimentaçaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extrato_MovimentaçaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Extrato_Movimentaçaos
     * const extrato_Movimentaçao = await prisma.extrato_Movimentaçao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends extrato_MovimentaçaoUpdateManyArgs>(args: SelectSubset<T, extrato_MovimentaçaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Extrato_Movimentaçao.
     * @param {extrato_MovimentaçaoUpsertArgs} args - Arguments to update or create a Extrato_Movimentaçao.
     * @example
     * // Update or create a Extrato_Movimentaçao
     * const extrato_Movimentaçao = await prisma.extrato_Movimentaçao.upsert({
     *   create: {
     *     // ... data to create a Extrato_Movimentaçao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Extrato_Movimentaçao we want to update
     *   }
     * })
     */
    upsert<T extends extrato_MovimentaçaoUpsertArgs>(args: SelectSubset<T, extrato_MovimentaçaoUpsertArgs<ExtArgs>>): Prisma__extrato_MovimentaçaoClient<$Result.GetResult<Prisma.$extrato_MovimentaçaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Extrato_Movimentaçaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extrato_MovimentaçaoCountArgs} args - Arguments to filter Extrato_Movimentaçaos to count.
     * @example
     * // Count the number of Extrato_Movimentaçaos
     * const count = await prisma.extrato_Movimentaçao.count({
     *   where: {
     *     // ... the filter for the Extrato_Movimentaçaos we want to count
     *   }
     * })
    **/
    count<T extends extrato_MovimentaçaoCountArgs>(
      args?: Subset<T, extrato_MovimentaçaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Extrato_MovimentaçaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Extrato_Movimentaçao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Extrato_MovimentaçaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Extrato_MovimentaçaoAggregateArgs>(args: Subset<T, Extrato_MovimentaçaoAggregateArgs>): Prisma.PrismaPromise<GetExtrato_MovimentaçaoAggregateType<T>>

    /**
     * Group by Extrato_Movimentaçao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extrato_MovimentaçaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends extrato_MovimentaçaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: extrato_MovimentaçaoGroupByArgs['orderBy'] }
        : { orderBy?: extrato_MovimentaçaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, extrato_MovimentaçaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExtrato_MovimentaçaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the extrato_Movimentaçao model
   */
  readonly fields: extrato_MovimentaçaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for extrato_Movimentaçao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__extrato_MovimentaçaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the extrato_Movimentaçao model
   */
  interface extrato_MovimentaçaoFieldRefs {
    readonly trasaçaoid: FieldRef<"extrato_Movimentaçao", 'String'>
    readonly codigoAgenciaOrigem: FieldRef<"extrato_Movimentaçao", 'Int'>
    readonly data_lançamento: FieldRef<"extrato_Movimentaçao", 'DateTime'>
    readonly descriçao: FieldRef<"extrato_Movimentaçao", 'String'>
    readonly tipo_lançamento: FieldRef<"extrato_Movimentaçao", 'tipo_lançamento'>
    readonly valor: FieldRef<"extrato_Movimentaçao", 'Decimal'>
    readonly data_Extrato: FieldRef<"extrato_Movimentaçao", 'DateTime'>
    readonly numero_Conta_origem: FieldRef<"extrato_Movimentaçao", 'Int'>
    readonly codigo_Banco: FieldRef<"extrato_Movimentaçao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * extrato_Movimentaçao findUnique
   */
  export type extrato_MovimentaçaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extrato_Movimentaçao
     */
    select?: extrato_MovimentaçaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extrato_Movimentaçao
     */
    omit?: extrato_MovimentaçaoOmit<ExtArgs> | null
    /**
     * Filter, which extrato_Movimentaçao to fetch.
     */
    where: extrato_MovimentaçaoWhereUniqueInput
  }

  /**
   * extrato_Movimentaçao findUniqueOrThrow
   */
  export type extrato_MovimentaçaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extrato_Movimentaçao
     */
    select?: extrato_MovimentaçaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extrato_Movimentaçao
     */
    omit?: extrato_MovimentaçaoOmit<ExtArgs> | null
    /**
     * Filter, which extrato_Movimentaçao to fetch.
     */
    where: extrato_MovimentaçaoWhereUniqueInput
  }

  /**
   * extrato_Movimentaçao findFirst
   */
  export type extrato_MovimentaçaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extrato_Movimentaçao
     */
    select?: extrato_MovimentaçaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extrato_Movimentaçao
     */
    omit?: extrato_MovimentaçaoOmit<ExtArgs> | null
    /**
     * Filter, which extrato_Movimentaçao to fetch.
     */
    where?: extrato_MovimentaçaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of extrato_Movimentaçaos to fetch.
     */
    orderBy?: extrato_MovimentaçaoOrderByWithRelationInput | extrato_MovimentaçaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for extrato_Movimentaçaos.
     */
    cursor?: extrato_MovimentaçaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` extrato_Movimentaçaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` extrato_Movimentaçaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of extrato_Movimentaçaos.
     */
    distinct?: Extrato_MovimentaçaoScalarFieldEnum | Extrato_MovimentaçaoScalarFieldEnum[]
  }

  /**
   * extrato_Movimentaçao findFirstOrThrow
   */
  export type extrato_MovimentaçaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extrato_Movimentaçao
     */
    select?: extrato_MovimentaçaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extrato_Movimentaçao
     */
    omit?: extrato_MovimentaçaoOmit<ExtArgs> | null
    /**
     * Filter, which extrato_Movimentaçao to fetch.
     */
    where?: extrato_MovimentaçaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of extrato_Movimentaçaos to fetch.
     */
    orderBy?: extrato_MovimentaçaoOrderByWithRelationInput | extrato_MovimentaçaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for extrato_Movimentaçaos.
     */
    cursor?: extrato_MovimentaçaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` extrato_Movimentaçaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` extrato_Movimentaçaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of extrato_Movimentaçaos.
     */
    distinct?: Extrato_MovimentaçaoScalarFieldEnum | Extrato_MovimentaçaoScalarFieldEnum[]
  }

  /**
   * extrato_Movimentaçao findMany
   */
  export type extrato_MovimentaçaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extrato_Movimentaçao
     */
    select?: extrato_MovimentaçaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extrato_Movimentaçao
     */
    omit?: extrato_MovimentaçaoOmit<ExtArgs> | null
    /**
     * Filter, which extrato_Movimentaçaos to fetch.
     */
    where?: extrato_MovimentaçaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of extrato_Movimentaçaos to fetch.
     */
    orderBy?: extrato_MovimentaçaoOrderByWithRelationInput | extrato_MovimentaçaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing extrato_Movimentaçaos.
     */
    cursor?: extrato_MovimentaçaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` extrato_Movimentaçaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` extrato_Movimentaçaos.
     */
    skip?: number
    distinct?: Extrato_MovimentaçaoScalarFieldEnum | Extrato_MovimentaçaoScalarFieldEnum[]
  }

  /**
   * extrato_Movimentaçao create
   */
  export type extrato_MovimentaçaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extrato_Movimentaçao
     */
    select?: extrato_MovimentaçaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extrato_Movimentaçao
     */
    omit?: extrato_MovimentaçaoOmit<ExtArgs> | null
    /**
     * The data needed to create a extrato_Movimentaçao.
     */
    data: XOR<extrato_MovimentaçaoCreateInput, extrato_MovimentaçaoUncheckedCreateInput>
  }

  /**
   * extrato_Movimentaçao createMany
   */
  export type extrato_MovimentaçaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many extrato_Movimentaçaos.
     */
    data: extrato_MovimentaçaoCreateManyInput | extrato_MovimentaçaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * extrato_Movimentaçao update
   */
  export type extrato_MovimentaçaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extrato_Movimentaçao
     */
    select?: extrato_MovimentaçaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extrato_Movimentaçao
     */
    omit?: extrato_MovimentaçaoOmit<ExtArgs> | null
    /**
     * The data needed to update a extrato_Movimentaçao.
     */
    data: XOR<extrato_MovimentaçaoUpdateInput, extrato_MovimentaçaoUncheckedUpdateInput>
    /**
     * Choose, which extrato_Movimentaçao to update.
     */
    where: extrato_MovimentaçaoWhereUniqueInput
  }

  /**
   * extrato_Movimentaçao updateMany
   */
  export type extrato_MovimentaçaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update extrato_Movimentaçaos.
     */
    data: XOR<extrato_MovimentaçaoUpdateManyMutationInput, extrato_MovimentaçaoUncheckedUpdateManyInput>
    /**
     * Filter which extrato_Movimentaçaos to update
     */
    where?: extrato_MovimentaçaoWhereInput
    /**
     * Limit how many extrato_Movimentaçaos to update.
     */
    limit?: number
  }

  /**
   * extrato_Movimentaçao upsert
   */
  export type extrato_MovimentaçaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extrato_Movimentaçao
     */
    select?: extrato_MovimentaçaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extrato_Movimentaçao
     */
    omit?: extrato_MovimentaçaoOmit<ExtArgs> | null
    /**
     * The filter to search for the extrato_Movimentaçao to update in case it exists.
     */
    where: extrato_MovimentaçaoWhereUniqueInput
    /**
     * In case the extrato_Movimentaçao found by the `where` argument doesn't exist, create a new extrato_Movimentaçao with this data.
     */
    create: XOR<extrato_MovimentaçaoCreateInput, extrato_MovimentaçaoUncheckedCreateInput>
    /**
     * In case the extrato_Movimentaçao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<extrato_MovimentaçaoUpdateInput, extrato_MovimentaçaoUncheckedUpdateInput>
  }

  /**
   * extrato_Movimentaçao delete
   */
  export type extrato_MovimentaçaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extrato_Movimentaçao
     */
    select?: extrato_MovimentaçaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extrato_Movimentaçao
     */
    omit?: extrato_MovimentaçaoOmit<ExtArgs> | null
    /**
     * Filter which extrato_Movimentaçao to delete.
     */
    where: extrato_MovimentaçaoWhereUniqueInput
  }

  /**
   * extrato_Movimentaçao deleteMany
   */
  export type extrato_MovimentaçaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which extrato_Movimentaçaos to delete
     */
    where?: extrato_MovimentaçaoWhereInput
    /**
     * Limit how many extrato_Movimentaçaos to delete.
     */
    limit?: number
  }

  /**
   * extrato_Movimentaçao without action
   */
  export type extrato_MovimentaçaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extrato_Movimentaçao
     */
    select?: extrato_MovimentaçaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extrato_Movimentaçao
     */
    omit?: extrato_MovimentaçaoOmit<ExtArgs> | null
  }


  /**
   * Model criar_evento
   */

  export type AggregateCriar_evento = {
    _count: Criar_eventoCountAggregateOutputType | null
    _avg: Criar_eventoAvgAggregateOutputType | null
    _sum: Criar_eventoSumAggregateOutputType | null
    _min: Criar_eventoMinAggregateOutputType | null
    _max: Criar_eventoMaxAggregateOutputType | null
  }

  export type Criar_eventoAvgAggregateOutputType = {
    eventoid: number | null
    criadorid: number | null
  }

  export type Criar_eventoSumAggregateOutputType = {
    eventoid: number | null
    criadorid: number | null
  }

  export type Criar_eventoMinAggregateOutputType = {
    eventoid: number | null
    titulo: string | null
    image: string | null
    descriçao: string | null
    criar_evento: Date | null
    data_termino: Date | null
    ultima_mod: Date | null
    criadorid: number | null
  }

  export type Criar_eventoMaxAggregateOutputType = {
    eventoid: number | null
    titulo: string | null
    image: string | null
    descriçao: string | null
    criar_evento: Date | null
    data_termino: Date | null
    ultima_mod: Date | null
    criadorid: number | null
  }

  export type Criar_eventoCountAggregateOutputType = {
    eventoid: number
    titulo: number
    image: number
    descriçao: number
    criar_evento: number
    data_termino: number
    ultima_mod: number
    criadorid: number
    _all: number
  }


  export type Criar_eventoAvgAggregateInputType = {
    eventoid?: true
    criadorid?: true
  }

  export type Criar_eventoSumAggregateInputType = {
    eventoid?: true
    criadorid?: true
  }

  export type Criar_eventoMinAggregateInputType = {
    eventoid?: true
    titulo?: true
    image?: true
    descriçao?: true
    criar_evento?: true
    data_termino?: true
    ultima_mod?: true
    criadorid?: true
  }

  export type Criar_eventoMaxAggregateInputType = {
    eventoid?: true
    titulo?: true
    image?: true
    descriçao?: true
    criar_evento?: true
    data_termino?: true
    ultima_mod?: true
    criadorid?: true
  }

  export type Criar_eventoCountAggregateInputType = {
    eventoid?: true
    titulo?: true
    image?: true
    descriçao?: true
    criar_evento?: true
    data_termino?: true
    ultima_mod?: true
    criadorid?: true
    _all?: true
  }

  export type Criar_eventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which criar_evento to aggregate.
     */
    where?: criar_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of criar_eventos to fetch.
     */
    orderBy?: criar_eventoOrderByWithRelationInput | criar_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: criar_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` criar_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` criar_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned criar_eventos
    **/
    _count?: true | Criar_eventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Criar_eventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Criar_eventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Criar_eventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Criar_eventoMaxAggregateInputType
  }

  export type GetCriar_eventoAggregateType<T extends Criar_eventoAggregateArgs> = {
        [P in keyof T & keyof AggregateCriar_evento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCriar_evento[P]>
      : GetScalarType<T[P], AggregateCriar_evento[P]>
  }




  export type criar_eventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: criar_eventoWhereInput
    orderBy?: criar_eventoOrderByWithAggregationInput | criar_eventoOrderByWithAggregationInput[]
    by: Criar_eventoScalarFieldEnum[] | Criar_eventoScalarFieldEnum
    having?: criar_eventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Criar_eventoCountAggregateInputType | true
    _avg?: Criar_eventoAvgAggregateInputType
    _sum?: Criar_eventoSumAggregateInputType
    _min?: Criar_eventoMinAggregateInputType
    _max?: Criar_eventoMaxAggregateInputType
  }

  export type Criar_eventoGroupByOutputType = {
    eventoid: number
    titulo: string
    image: string | null
    descriçao: string
    criar_evento: Date
    data_termino: Date
    ultima_mod: Date
    criadorid: number
    _count: Criar_eventoCountAggregateOutputType | null
    _avg: Criar_eventoAvgAggregateOutputType | null
    _sum: Criar_eventoSumAggregateOutputType | null
    _min: Criar_eventoMinAggregateOutputType | null
    _max: Criar_eventoMaxAggregateOutputType | null
  }

  type GetCriar_eventoGroupByPayload<T extends criar_eventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Criar_eventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Criar_eventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Criar_eventoGroupByOutputType[P]>
            : GetScalarType<T[P], Criar_eventoGroupByOutputType[P]>
        }
      >
    >


  export type criar_eventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventoid?: boolean
    titulo?: boolean
    image?: boolean
    descriçao?: boolean
    criar_evento?: boolean
    data_termino?: boolean
    ultima_mod?: boolean
    criadorid?: boolean
    criador?: boolean | userDefaultArgs<ExtArgs>
    registro?: boolean | criar_evento$registroArgs<ExtArgs>
    _count?: boolean | Criar_eventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["criar_evento"]>



  export type criar_eventoSelectScalar = {
    eventoid?: boolean
    titulo?: boolean
    image?: boolean
    descriçao?: boolean
    criar_evento?: boolean
    data_termino?: boolean
    ultima_mod?: boolean
    criadorid?: boolean
  }

  export type criar_eventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventoid" | "titulo" | "image" | "descriçao" | "criar_evento" | "data_termino" | "ultima_mod" | "criadorid", ExtArgs["result"]["criar_evento"]>
  export type criar_eventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | userDefaultArgs<ExtArgs>
    registro?: boolean | criar_evento$registroArgs<ExtArgs>
    _count?: boolean | Criar_eventoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $criar_eventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "criar_evento"
    objects: {
      criador: Prisma.$userPayload<ExtArgs>
      registro: Prisma.$registo_eventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      eventoid: number
      titulo: string
      image: string | null
      descriçao: string
      criar_evento: Date
      data_termino: Date
      ultima_mod: Date
      criadorid: number
    }, ExtArgs["result"]["criar_evento"]>
    composites: {}
  }

  type criar_eventoGetPayload<S extends boolean | null | undefined | criar_eventoDefaultArgs> = $Result.GetResult<Prisma.$criar_eventoPayload, S>

  type criar_eventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<criar_eventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Criar_eventoCountAggregateInputType | true
    }

  export interface criar_eventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['criar_evento'], meta: { name: 'criar_evento' } }
    /**
     * Find zero or one Criar_evento that matches the filter.
     * @param {criar_eventoFindUniqueArgs} args - Arguments to find a Criar_evento
     * @example
     * // Get one Criar_evento
     * const criar_evento = await prisma.criar_evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends criar_eventoFindUniqueArgs>(args: SelectSubset<T, criar_eventoFindUniqueArgs<ExtArgs>>): Prisma__criar_eventoClient<$Result.GetResult<Prisma.$criar_eventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Criar_evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {criar_eventoFindUniqueOrThrowArgs} args - Arguments to find a Criar_evento
     * @example
     * // Get one Criar_evento
     * const criar_evento = await prisma.criar_evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends criar_eventoFindUniqueOrThrowArgs>(args: SelectSubset<T, criar_eventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__criar_eventoClient<$Result.GetResult<Prisma.$criar_eventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Criar_evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criar_eventoFindFirstArgs} args - Arguments to find a Criar_evento
     * @example
     * // Get one Criar_evento
     * const criar_evento = await prisma.criar_evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends criar_eventoFindFirstArgs>(args?: SelectSubset<T, criar_eventoFindFirstArgs<ExtArgs>>): Prisma__criar_eventoClient<$Result.GetResult<Prisma.$criar_eventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Criar_evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criar_eventoFindFirstOrThrowArgs} args - Arguments to find a Criar_evento
     * @example
     * // Get one Criar_evento
     * const criar_evento = await prisma.criar_evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends criar_eventoFindFirstOrThrowArgs>(args?: SelectSubset<T, criar_eventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__criar_eventoClient<$Result.GetResult<Prisma.$criar_eventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Criar_eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criar_eventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Criar_eventos
     * const criar_eventos = await prisma.criar_evento.findMany()
     * 
     * // Get first 10 Criar_eventos
     * const criar_eventos = await prisma.criar_evento.findMany({ take: 10 })
     * 
     * // Only select the `eventoid`
     * const criar_eventoWithEventoidOnly = await prisma.criar_evento.findMany({ select: { eventoid: true } })
     * 
     */
    findMany<T extends criar_eventoFindManyArgs>(args?: SelectSubset<T, criar_eventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$criar_eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Criar_evento.
     * @param {criar_eventoCreateArgs} args - Arguments to create a Criar_evento.
     * @example
     * // Create one Criar_evento
     * const Criar_evento = await prisma.criar_evento.create({
     *   data: {
     *     // ... data to create a Criar_evento
     *   }
     * })
     * 
     */
    create<T extends criar_eventoCreateArgs>(args: SelectSubset<T, criar_eventoCreateArgs<ExtArgs>>): Prisma__criar_eventoClient<$Result.GetResult<Prisma.$criar_eventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Criar_eventos.
     * @param {criar_eventoCreateManyArgs} args - Arguments to create many Criar_eventos.
     * @example
     * // Create many Criar_eventos
     * const criar_evento = await prisma.criar_evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends criar_eventoCreateManyArgs>(args?: SelectSubset<T, criar_eventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Criar_evento.
     * @param {criar_eventoDeleteArgs} args - Arguments to delete one Criar_evento.
     * @example
     * // Delete one Criar_evento
     * const Criar_evento = await prisma.criar_evento.delete({
     *   where: {
     *     // ... filter to delete one Criar_evento
     *   }
     * })
     * 
     */
    delete<T extends criar_eventoDeleteArgs>(args: SelectSubset<T, criar_eventoDeleteArgs<ExtArgs>>): Prisma__criar_eventoClient<$Result.GetResult<Prisma.$criar_eventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Criar_evento.
     * @param {criar_eventoUpdateArgs} args - Arguments to update one Criar_evento.
     * @example
     * // Update one Criar_evento
     * const criar_evento = await prisma.criar_evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends criar_eventoUpdateArgs>(args: SelectSubset<T, criar_eventoUpdateArgs<ExtArgs>>): Prisma__criar_eventoClient<$Result.GetResult<Prisma.$criar_eventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Criar_eventos.
     * @param {criar_eventoDeleteManyArgs} args - Arguments to filter Criar_eventos to delete.
     * @example
     * // Delete a few Criar_eventos
     * const { count } = await prisma.criar_evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends criar_eventoDeleteManyArgs>(args?: SelectSubset<T, criar_eventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criar_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criar_eventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Criar_eventos
     * const criar_evento = await prisma.criar_evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends criar_eventoUpdateManyArgs>(args: SelectSubset<T, criar_eventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Criar_evento.
     * @param {criar_eventoUpsertArgs} args - Arguments to update or create a Criar_evento.
     * @example
     * // Update or create a Criar_evento
     * const criar_evento = await prisma.criar_evento.upsert({
     *   create: {
     *     // ... data to create a Criar_evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Criar_evento we want to update
     *   }
     * })
     */
    upsert<T extends criar_eventoUpsertArgs>(args: SelectSubset<T, criar_eventoUpsertArgs<ExtArgs>>): Prisma__criar_eventoClient<$Result.GetResult<Prisma.$criar_eventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Criar_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criar_eventoCountArgs} args - Arguments to filter Criar_eventos to count.
     * @example
     * // Count the number of Criar_eventos
     * const count = await prisma.criar_evento.count({
     *   where: {
     *     // ... the filter for the Criar_eventos we want to count
     *   }
     * })
    **/
    count<T extends criar_eventoCountArgs>(
      args?: Subset<T, criar_eventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Criar_eventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Criar_evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Criar_eventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Criar_eventoAggregateArgs>(args: Subset<T, Criar_eventoAggregateArgs>): Prisma.PrismaPromise<GetCriar_eventoAggregateType<T>>

    /**
     * Group by Criar_evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criar_eventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends criar_eventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: criar_eventoGroupByArgs['orderBy'] }
        : { orderBy?: criar_eventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, criar_eventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCriar_eventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the criar_evento model
   */
  readonly fields: criar_eventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for criar_evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__criar_eventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criador<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registro<T extends criar_evento$registroArgs<ExtArgs> = {}>(args?: Subset<T, criar_evento$registroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registo_eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the criar_evento model
   */
  interface criar_eventoFieldRefs {
    readonly eventoid: FieldRef<"criar_evento", 'Int'>
    readonly titulo: FieldRef<"criar_evento", 'String'>
    readonly image: FieldRef<"criar_evento", 'String'>
    readonly descriçao: FieldRef<"criar_evento", 'String'>
    readonly criar_evento: FieldRef<"criar_evento", 'DateTime'>
    readonly data_termino: FieldRef<"criar_evento", 'DateTime'>
    readonly ultima_mod: FieldRef<"criar_evento", 'DateTime'>
    readonly criadorid: FieldRef<"criar_evento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * criar_evento findUnique
   */
  export type criar_eventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criar_evento
     */
    select?: criar_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criar_evento
     */
    omit?: criar_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criar_eventoInclude<ExtArgs> | null
    /**
     * Filter, which criar_evento to fetch.
     */
    where: criar_eventoWhereUniqueInput
  }

  /**
   * criar_evento findUniqueOrThrow
   */
  export type criar_eventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criar_evento
     */
    select?: criar_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criar_evento
     */
    omit?: criar_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criar_eventoInclude<ExtArgs> | null
    /**
     * Filter, which criar_evento to fetch.
     */
    where: criar_eventoWhereUniqueInput
  }

  /**
   * criar_evento findFirst
   */
  export type criar_eventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criar_evento
     */
    select?: criar_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criar_evento
     */
    omit?: criar_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criar_eventoInclude<ExtArgs> | null
    /**
     * Filter, which criar_evento to fetch.
     */
    where?: criar_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of criar_eventos to fetch.
     */
    orderBy?: criar_eventoOrderByWithRelationInput | criar_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for criar_eventos.
     */
    cursor?: criar_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` criar_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` criar_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of criar_eventos.
     */
    distinct?: Criar_eventoScalarFieldEnum | Criar_eventoScalarFieldEnum[]
  }

  /**
   * criar_evento findFirstOrThrow
   */
  export type criar_eventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criar_evento
     */
    select?: criar_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criar_evento
     */
    omit?: criar_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criar_eventoInclude<ExtArgs> | null
    /**
     * Filter, which criar_evento to fetch.
     */
    where?: criar_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of criar_eventos to fetch.
     */
    orderBy?: criar_eventoOrderByWithRelationInput | criar_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for criar_eventos.
     */
    cursor?: criar_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` criar_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` criar_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of criar_eventos.
     */
    distinct?: Criar_eventoScalarFieldEnum | Criar_eventoScalarFieldEnum[]
  }

  /**
   * criar_evento findMany
   */
  export type criar_eventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criar_evento
     */
    select?: criar_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criar_evento
     */
    omit?: criar_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criar_eventoInclude<ExtArgs> | null
    /**
     * Filter, which criar_eventos to fetch.
     */
    where?: criar_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of criar_eventos to fetch.
     */
    orderBy?: criar_eventoOrderByWithRelationInput | criar_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing criar_eventos.
     */
    cursor?: criar_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` criar_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` criar_eventos.
     */
    skip?: number
    distinct?: Criar_eventoScalarFieldEnum | Criar_eventoScalarFieldEnum[]
  }

  /**
   * criar_evento create
   */
  export type criar_eventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criar_evento
     */
    select?: criar_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criar_evento
     */
    omit?: criar_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criar_eventoInclude<ExtArgs> | null
    /**
     * The data needed to create a criar_evento.
     */
    data: XOR<criar_eventoCreateInput, criar_eventoUncheckedCreateInput>
  }

  /**
   * criar_evento createMany
   */
  export type criar_eventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many criar_eventos.
     */
    data: criar_eventoCreateManyInput | criar_eventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * criar_evento update
   */
  export type criar_eventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criar_evento
     */
    select?: criar_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criar_evento
     */
    omit?: criar_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criar_eventoInclude<ExtArgs> | null
    /**
     * The data needed to update a criar_evento.
     */
    data: XOR<criar_eventoUpdateInput, criar_eventoUncheckedUpdateInput>
    /**
     * Choose, which criar_evento to update.
     */
    where: criar_eventoWhereUniqueInput
  }

  /**
   * criar_evento updateMany
   */
  export type criar_eventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update criar_eventos.
     */
    data: XOR<criar_eventoUpdateManyMutationInput, criar_eventoUncheckedUpdateManyInput>
    /**
     * Filter which criar_eventos to update
     */
    where?: criar_eventoWhereInput
    /**
     * Limit how many criar_eventos to update.
     */
    limit?: number
  }

  /**
   * criar_evento upsert
   */
  export type criar_eventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criar_evento
     */
    select?: criar_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criar_evento
     */
    omit?: criar_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criar_eventoInclude<ExtArgs> | null
    /**
     * The filter to search for the criar_evento to update in case it exists.
     */
    where: criar_eventoWhereUniqueInput
    /**
     * In case the criar_evento found by the `where` argument doesn't exist, create a new criar_evento with this data.
     */
    create: XOR<criar_eventoCreateInput, criar_eventoUncheckedCreateInput>
    /**
     * In case the criar_evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<criar_eventoUpdateInput, criar_eventoUncheckedUpdateInput>
  }

  /**
   * criar_evento delete
   */
  export type criar_eventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criar_evento
     */
    select?: criar_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criar_evento
     */
    omit?: criar_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criar_eventoInclude<ExtArgs> | null
    /**
     * Filter which criar_evento to delete.
     */
    where: criar_eventoWhereUniqueInput
  }

  /**
   * criar_evento deleteMany
   */
  export type criar_eventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which criar_eventos to delete
     */
    where?: criar_eventoWhereInput
    /**
     * Limit how many criar_eventos to delete.
     */
    limit?: number
  }

  /**
   * criar_evento.registro
   */
  export type criar_evento$registroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registo_evento
     */
    select?: registo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registo_evento
     */
    omit?: registo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registo_eventoInclude<ExtArgs> | null
    where?: registo_eventoWhereInput
    orderBy?: registo_eventoOrderByWithRelationInput | registo_eventoOrderByWithRelationInput[]
    cursor?: registo_eventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Registo_eventoScalarFieldEnum | Registo_eventoScalarFieldEnum[]
  }

  /**
   * criar_evento without action
   */
  export type criar_eventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criar_evento
     */
    select?: criar_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criar_evento
     */
    omit?: criar_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criar_eventoInclude<ExtArgs> | null
  }


  /**
   * Model endereço
   */

  export type AggregateEndereço = {
    _count: EndereçoCountAggregateOutputType | null
    _avg: EndereçoAvgAggregateOutputType | null
    _sum: EndereçoSumAggregateOutputType | null
    _min: EndereçoMinAggregateOutputType | null
    _max: EndereçoMaxAggregateOutputType | null
  }

  export type EndereçoAvgAggregateOutputType = {
    numero: number | null
  }

  export type EndereçoSumAggregateOutputType = {
    numero: number | null
  }

  export type EndereçoMinAggregateOutputType = {
    endereçoid: string | null
    lote: string | null
    numero: number | null
    quadra: string | null
    bairro: string | null
    referencia: string | null
  }

  export type EndereçoMaxAggregateOutputType = {
    endereçoid: string | null
    lote: string | null
    numero: number | null
    quadra: string | null
    bairro: string | null
    referencia: string | null
  }

  export type EndereçoCountAggregateOutputType = {
    endereçoid: number
    lote: number
    numero: number
    quadra: number
    bairro: number
    referencia: number
    _all: number
  }


  export type EndereçoAvgAggregateInputType = {
    numero?: true
  }

  export type EndereçoSumAggregateInputType = {
    numero?: true
  }

  export type EndereçoMinAggregateInputType = {
    endereçoid?: true
    lote?: true
    numero?: true
    quadra?: true
    bairro?: true
    referencia?: true
  }

  export type EndereçoMaxAggregateInputType = {
    endereçoid?: true
    lote?: true
    numero?: true
    quadra?: true
    bairro?: true
    referencia?: true
  }

  export type EndereçoCountAggregateInputType = {
    endereçoid?: true
    lote?: true
    numero?: true
    quadra?: true
    bairro?: true
    referencia?: true
    _all?: true
  }

  export type EndereçoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endereço to aggregate.
     */
    where?: endereçoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endereços to fetch.
     */
    orderBy?: endereçoOrderByWithRelationInput | endereçoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: endereçoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endereços from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endereços.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned endereços
    **/
    _count?: true | EndereçoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EndereçoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EndereçoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EndereçoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EndereçoMaxAggregateInputType
  }

  export type GetEndereçoAggregateType<T extends EndereçoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereço]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereço[P]>
      : GetScalarType<T[P], AggregateEndereço[P]>
  }




  export type endereçoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: endereçoWhereInput
    orderBy?: endereçoOrderByWithAggregationInput | endereçoOrderByWithAggregationInput[]
    by: EndereçoScalarFieldEnum[] | EndereçoScalarFieldEnum
    having?: endereçoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EndereçoCountAggregateInputType | true
    _avg?: EndereçoAvgAggregateInputType
    _sum?: EndereçoSumAggregateInputType
    _min?: EndereçoMinAggregateInputType
    _max?: EndereçoMaxAggregateInputType
  }

  export type EndereçoGroupByOutputType = {
    endereçoid: string
    lote: string
    numero: number
    quadra: string
    bairro: string
    referencia: string
    _count: EndereçoCountAggregateOutputType | null
    _avg: EndereçoAvgAggregateOutputType | null
    _sum: EndereçoSumAggregateOutputType | null
    _min: EndereçoMinAggregateOutputType | null
    _max: EndereçoMaxAggregateOutputType | null
  }

  type GetEndereçoGroupByPayload<T extends endereçoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EndereçoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EndereçoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EndereçoGroupByOutputType[P]>
            : GetScalarType<T[P], EndereçoGroupByOutputType[P]>
        }
      >
    >


  export type endereçoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    endereçoid?: boolean
    lote?: boolean
    numero?: boolean
    quadra?: boolean
    bairro?: boolean
    referencia?: boolean
    registroid?: boolean | endereço$registroidArgs<ExtArgs>
    _count?: boolean | EndereçoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereço"]>



  export type endereçoSelectScalar = {
    endereçoid?: boolean
    lote?: boolean
    numero?: boolean
    quadra?: boolean
    bairro?: boolean
    referencia?: boolean
  }

  export type endereçoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"endereçoid" | "lote" | "numero" | "quadra" | "bairro" | "referencia", ExtArgs["result"]["endereço"]>
  export type endereçoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registroid?: boolean | endereço$registroidArgs<ExtArgs>
    _count?: boolean | EndereçoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $endereçoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "endereço"
    objects: {
      registroid: Prisma.$registo_eventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      endereçoid: string
      lote: string
      numero: number
      quadra: string
      bairro: string
      referencia: string
    }, ExtArgs["result"]["endereço"]>
    composites: {}
  }

  type endereçoGetPayload<S extends boolean | null | undefined | endereçoDefaultArgs> = $Result.GetResult<Prisma.$endereçoPayload, S>

  type endereçoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<endereçoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EndereçoCountAggregateInputType | true
    }

  export interface endereçoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['endereço'], meta: { name: 'endereço' } }
    /**
     * Find zero or one Endereço that matches the filter.
     * @param {endereçoFindUniqueArgs} args - Arguments to find a Endereço
     * @example
     * // Get one Endereço
     * const endereço = await prisma.endereço.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends endereçoFindUniqueArgs>(args: SelectSubset<T, endereçoFindUniqueArgs<ExtArgs>>): Prisma__endereçoClient<$Result.GetResult<Prisma.$endereçoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereço that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {endereçoFindUniqueOrThrowArgs} args - Arguments to find a Endereço
     * @example
     * // Get one Endereço
     * const endereço = await prisma.endereço.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends endereçoFindUniqueOrThrowArgs>(args: SelectSubset<T, endereçoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__endereçoClient<$Result.GetResult<Prisma.$endereçoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereço that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereçoFindFirstArgs} args - Arguments to find a Endereço
     * @example
     * // Get one Endereço
     * const endereço = await prisma.endereço.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends endereçoFindFirstArgs>(args?: SelectSubset<T, endereçoFindFirstArgs<ExtArgs>>): Prisma__endereçoClient<$Result.GetResult<Prisma.$endereçoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereço that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereçoFindFirstOrThrowArgs} args - Arguments to find a Endereço
     * @example
     * // Get one Endereço
     * const endereço = await prisma.endereço.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends endereçoFindFirstOrThrowArgs>(args?: SelectSubset<T, endereçoFindFirstOrThrowArgs<ExtArgs>>): Prisma__endereçoClient<$Result.GetResult<Prisma.$endereçoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Endereços that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereçoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Endereços
     * const endereços = await prisma.endereço.findMany()
     * 
     * // Get first 10 Endereços
     * const endereços = await prisma.endereço.findMany({ take: 10 })
     * 
     * // Only select the `endereçoid`
     * const endereçoWithEndereçoidOnly = await prisma.endereço.findMany({ select: { endereçoid: true } })
     * 
     */
    findMany<T extends endereçoFindManyArgs>(args?: SelectSubset<T, endereçoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endereçoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereço.
     * @param {endereçoCreateArgs} args - Arguments to create a Endereço.
     * @example
     * // Create one Endereço
     * const Endereço = await prisma.endereço.create({
     *   data: {
     *     // ... data to create a Endereço
     *   }
     * })
     * 
     */
    create<T extends endereçoCreateArgs>(args: SelectSubset<T, endereçoCreateArgs<ExtArgs>>): Prisma__endereçoClient<$Result.GetResult<Prisma.$endereçoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Endereços.
     * @param {endereçoCreateManyArgs} args - Arguments to create many Endereços.
     * @example
     * // Create many Endereços
     * const endereço = await prisma.endereço.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends endereçoCreateManyArgs>(args?: SelectSubset<T, endereçoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Endereço.
     * @param {endereçoDeleteArgs} args - Arguments to delete one Endereço.
     * @example
     * // Delete one Endereço
     * const Endereço = await prisma.endereço.delete({
     *   where: {
     *     // ... filter to delete one Endereço
     *   }
     * })
     * 
     */
    delete<T extends endereçoDeleteArgs>(args: SelectSubset<T, endereçoDeleteArgs<ExtArgs>>): Prisma__endereçoClient<$Result.GetResult<Prisma.$endereçoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereço.
     * @param {endereçoUpdateArgs} args - Arguments to update one Endereço.
     * @example
     * // Update one Endereço
     * const endereço = await prisma.endereço.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends endereçoUpdateArgs>(args: SelectSubset<T, endereçoUpdateArgs<ExtArgs>>): Prisma__endereçoClient<$Result.GetResult<Prisma.$endereçoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Endereços.
     * @param {endereçoDeleteManyArgs} args - Arguments to filter Endereços to delete.
     * @example
     * // Delete a few Endereços
     * const { count } = await prisma.endereço.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends endereçoDeleteManyArgs>(args?: SelectSubset<T, endereçoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endereços.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereçoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Endereços
     * const endereço = await prisma.endereço.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends endereçoUpdateManyArgs>(args: SelectSubset<T, endereçoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Endereço.
     * @param {endereçoUpsertArgs} args - Arguments to update or create a Endereço.
     * @example
     * // Update or create a Endereço
     * const endereço = await prisma.endereço.upsert({
     *   create: {
     *     // ... data to create a Endereço
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereço we want to update
     *   }
     * })
     */
    upsert<T extends endereçoUpsertArgs>(args: SelectSubset<T, endereçoUpsertArgs<ExtArgs>>): Prisma__endereçoClient<$Result.GetResult<Prisma.$endereçoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Endereços.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereçoCountArgs} args - Arguments to filter Endereços to count.
     * @example
     * // Count the number of Endereços
     * const count = await prisma.endereço.count({
     *   where: {
     *     // ... the filter for the Endereços we want to count
     *   }
     * })
    **/
    count<T extends endereçoCountArgs>(
      args?: Subset<T, endereçoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EndereçoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereço.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndereçoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EndereçoAggregateArgs>(args: Subset<T, EndereçoAggregateArgs>): Prisma.PrismaPromise<GetEndereçoAggregateType<T>>

    /**
     * Group by Endereço.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereçoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends endereçoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: endereçoGroupByArgs['orderBy'] }
        : { orderBy?: endereçoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, endereçoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEndereçoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the endereço model
   */
  readonly fields: endereçoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for endereço.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__endereçoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registroid<T extends endereço$registroidArgs<ExtArgs> = {}>(args?: Subset<T, endereço$registroidArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registo_eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the endereço model
   */
  interface endereçoFieldRefs {
    readonly endereçoid: FieldRef<"endereço", 'String'>
    readonly lote: FieldRef<"endereço", 'String'>
    readonly numero: FieldRef<"endereço", 'Int'>
    readonly quadra: FieldRef<"endereço", 'String'>
    readonly bairro: FieldRef<"endereço", 'String'>
    readonly referencia: FieldRef<"endereço", 'String'>
  }
    

  // Custom InputTypes
  /**
   * endereço findUnique
   */
  export type endereçoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereço
     */
    select?: endereçoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereço
     */
    omit?: endereçoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereçoInclude<ExtArgs> | null
    /**
     * Filter, which endereço to fetch.
     */
    where: endereçoWhereUniqueInput
  }

  /**
   * endereço findUniqueOrThrow
   */
  export type endereçoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereço
     */
    select?: endereçoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereço
     */
    omit?: endereçoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereçoInclude<ExtArgs> | null
    /**
     * Filter, which endereço to fetch.
     */
    where: endereçoWhereUniqueInput
  }

  /**
   * endereço findFirst
   */
  export type endereçoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereço
     */
    select?: endereçoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereço
     */
    omit?: endereçoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereçoInclude<ExtArgs> | null
    /**
     * Filter, which endereço to fetch.
     */
    where?: endereçoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endereços to fetch.
     */
    orderBy?: endereçoOrderByWithRelationInput | endereçoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for endereços.
     */
    cursor?: endereçoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endereços from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endereços.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of endereços.
     */
    distinct?: EndereçoScalarFieldEnum | EndereçoScalarFieldEnum[]
  }

  /**
   * endereço findFirstOrThrow
   */
  export type endereçoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereço
     */
    select?: endereçoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereço
     */
    omit?: endereçoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereçoInclude<ExtArgs> | null
    /**
     * Filter, which endereço to fetch.
     */
    where?: endereçoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endereços to fetch.
     */
    orderBy?: endereçoOrderByWithRelationInput | endereçoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for endereços.
     */
    cursor?: endereçoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endereços from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endereços.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of endereços.
     */
    distinct?: EndereçoScalarFieldEnum | EndereçoScalarFieldEnum[]
  }

  /**
   * endereço findMany
   */
  export type endereçoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereço
     */
    select?: endereçoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereço
     */
    omit?: endereçoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereçoInclude<ExtArgs> | null
    /**
     * Filter, which endereços to fetch.
     */
    where?: endereçoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endereços to fetch.
     */
    orderBy?: endereçoOrderByWithRelationInput | endereçoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing endereços.
     */
    cursor?: endereçoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endereços from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endereços.
     */
    skip?: number
    distinct?: EndereçoScalarFieldEnum | EndereçoScalarFieldEnum[]
  }

  /**
   * endereço create
   */
  export type endereçoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereço
     */
    select?: endereçoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereço
     */
    omit?: endereçoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereçoInclude<ExtArgs> | null
    /**
     * The data needed to create a endereço.
     */
    data: XOR<endereçoCreateInput, endereçoUncheckedCreateInput>
  }

  /**
   * endereço createMany
   */
  export type endereçoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many endereços.
     */
    data: endereçoCreateManyInput | endereçoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * endereço update
   */
  export type endereçoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereço
     */
    select?: endereçoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereço
     */
    omit?: endereçoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereçoInclude<ExtArgs> | null
    /**
     * The data needed to update a endereço.
     */
    data: XOR<endereçoUpdateInput, endereçoUncheckedUpdateInput>
    /**
     * Choose, which endereço to update.
     */
    where: endereçoWhereUniqueInput
  }

  /**
   * endereço updateMany
   */
  export type endereçoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update endereços.
     */
    data: XOR<endereçoUpdateManyMutationInput, endereçoUncheckedUpdateManyInput>
    /**
     * Filter which endereços to update
     */
    where?: endereçoWhereInput
    /**
     * Limit how many endereços to update.
     */
    limit?: number
  }

  /**
   * endereço upsert
   */
  export type endereçoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereço
     */
    select?: endereçoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereço
     */
    omit?: endereçoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereçoInclude<ExtArgs> | null
    /**
     * The filter to search for the endereço to update in case it exists.
     */
    where: endereçoWhereUniqueInput
    /**
     * In case the endereço found by the `where` argument doesn't exist, create a new endereço with this data.
     */
    create: XOR<endereçoCreateInput, endereçoUncheckedCreateInput>
    /**
     * In case the endereço was found with the provided `where` argument, update it with this data.
     */
    update: XOR<endereçoUpdateInput, endereçoUncheckedUpdateInput>
  }

  /**
   * endereço delete
   */
  export type endereçoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereço
     */
    select?: endereçoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereço
     */
    omit?: endereçoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereçoInclude<ExtArgs> | null
    /**
     * Filter which endereço to delete.
     */
    where: endereçoWhereUniqueInput
  }

  /**
   * endereço deleteMany
   */
  export type endereçoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endereços to delete
     */
    where?: endereçoWhereInput
    /**
     * Limit how many endereços to delete.
     */
    limit?: number
  }

  /**
   * endereço.registroid
   */
  export type endereço$registroidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registo_evento
     */
    select?: registo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registo_evento
     */
    omit?: registo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registo_eventoInclude<ExtArgs> | null
    where?: registo_eventoWhereInput
    orderBy?: registo_eventoOrderByWithRelationInput | registo_eventoOrderByWithRelationInput[]
    cursor?: registo_eventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Registo_eventoScalarFieldEnum | Registo_eventoScalarFieldEnum[]
  }

  /**
   * endereço without action
   */
  export type endereçoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereço
     */
    select?: endereçoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereço
     */
    omit?: endereçoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereçoInclude<ExtArgs> | null
  }


  /**
   * Model registo_evento
   */

  export type AggregateRegisto_evento = {
    _count: Registo_eventoCountAggregateOutputType | null
    _avg: Registo_eventoAvgAggregateOutputType | null
    _sum: Registo_eventoSumAggregateOutputType | null
    _min: Registo_eventoMinAggregateOutputType | null
    _max: Registo_eventoMaxAggregateOutputType | null
  }

  export type Registo_eventoAvgAggregateOutputType = {
    registro_id: number | null
    idade: number | null
    eventoid: number | null
  }

  export type Registo_eventoSumAggregateOutputType = {
    registro_id: number | null
    idade: number | null
    eventoid: number | null
  }

  export type Registo_eventoMinAggregateOutputType = {
    registro_id: number | null
    nome: string | null
    sobrenome: string | null
    responsavel: string | null
    idade: number | null
    idade_responsavel: Date | null
    created_registro: Date | null
    endereçoid: string | null
    eventoid: number | null
  }

  export type Registo_eventoMaxAggregateOutputType = {
    registro_id: number | null
    nome: string | null
    sobrenome: string | null
    responsavel: string | null
    idade: number | null
    idade_responsavel: Date | null
    created_registro: Date | null
    endereçoid: string | null
    eventoid: number | null
  }

  export type Registo_eventoCountAggregateOutputType = {
    registro_id: number
    nome: number
    sobrenome: number
    responsavel: number
    idade: number
    idade_responsavel: number
    created_registro: number
    endereçoid: number
    eventoid: number
    _all: number
  }


  export type Registo_eventoAvgAggregateInputType = {
    registro_id?: true
    idade?: true
    eventoid?: true
  }

  export type Registo_eventoSumAggregateInputType = {
    registro_id?: true
    idade?: true
    eventoid?: true
  }

  export type Registo_eventoMinAggregateInputType = {
    registro_id?: true
    nome?: true
    sobrenome?: true
    responsavel?: true
    idade?: true
    idade_responsavel?: true
    created_registro?: true
    endereçoid?: true
    eventoid?: true
  }

  export type Registo_eventoMaxAggregateInputType = {
    registro_id?: true
    nome?: true
    sobrenome?: true
    responsavel?: true
    idade?: true
    idade_responsavel?: true
    created_registro?: true
    endereçoid?: true
    eventoid?: true
  }

  export type Registo_eventoCountAggregateInputType = {
    registro_id?: true
    nome?: true
    sobrenome?: true
    responsavel?: true
    idade?: true
    idade_responsavel?: true
    created_registro?: true
    endereçoid?: true
    eventoid?: true
    _all?: true
  }

  export type Registo_eventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registo_evento to aggregate.
     */
    where?: registo_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registo_eventos to fetch.
     */
    orderBy?: registo_eventoOrderByWithRelationInput | registo_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: registo_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registo_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registo_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned registo_eventos
    **/
    _count?: true | Registo_eventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Registo_eventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Registo_eventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Registo_eventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Registo_eventoMaxAggregateInputType
  }

  export type GetRegisto_eventoAggregateType<T extends Registo_eventoAggregateArgs> = {
        [P in keyof T & keyof AggregateRegisto_evento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegisto_evento[P]>
      : GetScalarType<T[P], AggregateRegisto_evento[P]>
  }




  export type registo_eventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registo_eventoWhereInput
    orderBy?: registo_eventoOrderByWithAggregationInput | registo_eventoOrderByWithAggregationInput[]
    by: Registo_eventoScalarFieldEnum[] | Registo_eventoScalarFieldEnum
    having?: registo_eventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Registo_eventoCountAggregateInputType | true
    _avg?: Registo_eventoAvgAggregateInputType
    _sum?: Registo_eventoSumAggregateInputType
    _min?: Registo_eventoMinAggregateInputType
    _max?: Registo_eventoMaxAggregateInputType
  }

  export type Registo_eventoGroupByOutputType = {
    registro_id: number
    nome: string
    sobrenome: string
    responsavel: string
    idade: number
    idade_responsavel: Date
    created_registro: Date
    endereçoid: string
    eventoid: number
    _count: Registo_eventoCountAggregateOutputType | null
    _avg: Registo_eventoAvgAggregateOutputType | null
    _sum: Registo_eventoSumAggregateOutputType | null
    _min: Registo_eventoMinAggregateOutputType | null
    _max: Registo_eventoMaxAggregateOutputType | null
  }

  type GetRegisto_eventoGroupByPayload<T extends registo_eventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Registo_eventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Registo_eventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Registo_eventoGroupByOutputType[P]>
            : GetScalarType<T[P], Registo_eventoGroupByOutputType[P]>
        }
      >
    >


  export type registo_eventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    registro_id?: boolean
    nome?: boolean
    sobrenome?: boolean
    responsavel?: boolean
    idade?: boolean
    idade_responsavel?: boolean
    created_registro?: boolean
    endereçoid?: boolean
    eventoid?: boolean
    endereço?: boolean | endereçoDefaultArgs<ExtArgs>
    evento?: boolean | criar_eventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registo_evento"]>



  export type registo_eventoSelectScalar = {
    registro_id?: boolean
    nome?: boolean
    sobrenome?: boolean
    responsavel?: boolean
    idade?: boolean
    idade_responsavel?: boolean
    created_registro?: boolean
    endereçoid?: boolean
    eventoid?: boolean
  }

  export type registo_eventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"registro_id" | "nome" | "sobrenome" | "responsavel" | "idade" | "idade_responsavel" | "created_registro" | "endereçoid" | "eventoid", ExtArgs["result"]["registo_evento"]>
  export type registo_eventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereço?: boolean | endereçoDefaultArgs<ExtArgs>
    evento?: boolean | criar_eventoDefaultArgs<ExtArgs>
  }

  export type $registo_eventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "registo_evento"
    objects: {
      endereço: Prisma.$endereçoPayload<ExtArgs>
      evento: Prisma.$criar_eventoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      registro_id: number
      nome: string
      sobrenome: string
      responsavel: string
      idade: number
      idade_responsavel: Date
      created_registro: Date
      endereçoid: string
      eventoid: number
    }, ExtArgs["result"]["registo_evento"]>
    composites: {}
  }

  type registo_eventoGetPayload<S extends boolean | null | undefined | registo_eventoDefaultArgs> = $Result.GetResult<Prisma.$registo_eventoPayload, S>

  type registo_eventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<registo_eventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Registo_eventoCountAggregateInputType | true
    }

  export interface registo_eventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['registo_evento'], meta: { name: 'registo_evento' } }
    /**
     * Find zero or one Registo_evento that matches the filter.
     * @param {registo_eventoFindUniqueArgs} args - Arguments to find a Registo_evento
     * @example
     * // Get one Registo_evento
     * const registo_evento = await prisma.registo_evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends registo_eventoFindUniqueArgs>(args: SelectSubset<T, registo_eventoFindUniqueArgs<ExtArgs>>): Prisma__registo_eventoClient<$Result.GetResult<Prisma.$registo_eventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registo_evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {registo_eventoFindUniqueOrThrowArgs} args - Arguments to find a Registo_evento
     * @example
     * // Get one Registo_evento
     * const registo_evento = await prisma.registo_evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends registo_eventoFindUniqueOrThrowArgs>(args: SelectSubset<T, registo_eventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__registo_eventoClient<$Result.GetResult<Prisma.$registo_eventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registo_evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registo_eventoFindFirstArgs} args - Arguments to find a Registo_evento
     * @example
     * // Get one Registo_evento
     * const registo_evento = await prisma.registo_evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends registo_eventoFindFirstArgs>(args?: SelectSubset<T, registo_eventoFindFirstArgs<ExtArgs>>): Prisma__registo_eventoClient<$Result.GetResult<Prisma.$registo_eventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registo_evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registo_eventoFindFirstOrThrowArgs} args - Arguments to find a Registo_evento
     * @example
     * // Get one Registo_evento
     * const registo_evento = await prisma.registo_evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends registo_eventoFindFirstOrThrowArgs>(args?: SelectSubset<T, registo_eventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__registo_eventoClient<$Result.GetResult<Prisma.$registo_eventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registo_eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registo_eventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registo_eventos
     * const registo_eventos = await prisma.registo_evento.findMany()
     * 
     * // Get first 10 Registo_eventos
     * const registo_eventos = await prisma.registo_evento.findMany({ take: 10 })
     * 
     * // Only select the `registro_id`
     * const registo_eventoWithRegistro_idOnly = await prisma.registo_evento.findMany({ select: { registro_id: true } })
     * 
     */
    findMany<T extends registo_eventoFindManyArgs>(args?: SelectSubset<T, registo_eventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registo_eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registo_evento.
     * @param {registo_eventoCreateArgs} args - Arguments to create a Registo_evento.
     * @example
     * // Create one Registo_evento
     * const Registo_evento = await prisma.registo_evento.create({
     *   data: {
     *     // ... data to create a Registo_evento
     *   }
     * })
     * 
     */
    create<T extends registo_eventoCreateArgs>(args: SelectSubset<T, registo_eventoCreateArgs<ExtArgs>>): Prisma__registo_eventoClient<$Result.GetResult<Prisma.$registo_eventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registo_eventos.
     * @param {registo_eventoCreateManyArgs} args - Arguments to create many Registo_eventos.
     * @example
     * // Create many Registo_eventos
     * const registo_evento = await prisma.registo_evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends registo_eventoCreateManyArgs>(args?: SelectSubset<T, registo_eventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Registo_evento.
     * @param {registo_eventoDeleteArgs} args - Arguments to delete one Registo_evento.
     * @example
     * // Delete one Registo_evento
     * const Registo_evento = await prisma.registo_evento.delete({
     *   where: {
     *     // ... filter to delete one Registo_evento
     *   }
     * })
     * 
     */
    delete<T extends registo_eventoDeleteArgs>(args: SelectSubset<T, registo_eventoDeleteArgs<ExtArgs>>): Prisma__registo_eventoClient<$Result.GetResult<Prisma.$registo_eventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registo_evento.
     * @param {registo_eventoUpdateArgs} args - Arguments to update one Registo_evento.
     * @example
     * // Update one Registo_evento
     * const registo_evento = await prisma.registo_evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends registo_eventoUpdateArgs>(args: SelectSubset<T, registo_eventoUpdateArgs<ExtArgs>>): Prisma__registo_eventoClient<$Result.GetResult<Prisma.$registo_eventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registo_eventos.
     * @param {registo_eventoDeleteManyArgs} args - Arguments to filter Registo_eventos to delete.
     * @example
     * // Delete a few Registo_eventos
     * const { count } = await prisma.registo_evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends registo_eventoDeleteManyArgs>(args?: SelectSubset<T, registo_eventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registo_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registo_eventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registo_eventos
     * const registo_evento = await prisma.registo_evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends registo_eventoUpdateManyArgs>(args: SelectSubset<T, registo_eventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Registo_evento.
     * @param {registo_eventoUpsertArgs} args - Arguments to update or create a Registo_evento.
     * @example
     * // Update or create a Registo_evento
     * const registo_evento = await prisma.registo_evento.upsert({
     *   create: {
     *     // ... data to create a Registo_evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registo_evento we want to update
     *   }
     * })
     */
    upsert<T extends registo_eventoUpsertArgs>(args: SelectSubset<T, registo_eventoUpsertArgs<ExtArgs>>): Prisma__registo_eventoClient<$Result.GetResult<Prisma.$registo_eventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registo_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registo_eventoCountArgs} args - Arguments to filter Registo_eventos to count.
     * @example
     * // Count the number of Registo_eventos
     * const count = await prisma.registo_evento.count({
     *   where: {
     *     // ... the filter for the Registo_eventos we want to count
     *   }
     * })
    **/
    count<T extends registo_eventoCountArgs>(
      args?: Subset<T, registo_eventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Registo_eventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registo_evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Registo_eventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Registo_eventoAggregateArgs>(args: Subset<T, Registo_eventoAggregateArgs>): Prisma.PrismaPromise<GetRegisto_eventoAggregateType<T>>

    /**
     * Group by Registo_evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registo_eventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends registo_eventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: registo_eventoGroupByArgs['orderBy'] }
        : { orderBy?: registo_eventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, registo_eventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegisto_eventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the registo_evento model
   */
  readonly fields: registo_eventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for registo_evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__registo_eventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endereço<T extends endereçoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, endereçoDefaultArgs<ExtArgs>>): Prisma__endereçoClient<$Result.GetResult<Prisma.$endereçoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evento<T extends criar_eventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, criar_eventoDefaultArgs<ExtArgs>>): Prisma__criar_eventoClient<$Result.GetResult<Prisma.$criar_eventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the registo_evento model
   */
  interface registo_eventoFieldRefs {
    readonly registro_id: FieldRef<"registo_evento", 'Int'>
    readonly nome: FieldRef<"registo_evento", 'String'>
    readonly sobrenome: FieldRef<"registo_evento", 'String'>
    readonly responsavel: FieldRef<"registo_evento", 'String'>
    readonly idade: FieldRef<"registo_evento", 'Int'>
    readonly idade_responsavel: FieldRef<"registo_evento", 'DateTime'>
    readonly created_registro: FieldRef<"registo_evento", 'DateTime'>
    readonly endereçoid: FieldRef<"registo_evento", 'String'>
    readonly eventoid: FieldRef<"registo_evento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * registo_evento findUnique
   */
  export type registo_eventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registo_evento
     */
    select?: registo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registo_evento
     */
    omit?: registo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registo_eventoInclude<ExtArgs> | null
    /**
     * Filter, which registo_evento to fetch.
     */
    where: registo_eventoWhereUniqueInput
  }

  /**
   * registo_evento findUniqueOrThrow
   */
  export type registo_eventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registo_evento
     */
    select?: registo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registo_evento
     */
    omit?: registo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registo_eventoInclude<ExtArgs> | null
    /**
     * Filter, which registo_evento to fetch.
     */
    where: registo_eventoWhereUniqueInput
  }

  /**
   * registo_evento findFirst
   */
  export type registo_eventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registo_evento
     */
    select?: registo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registo_evento
     */
    omit?: registo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registo_eventoInclude<ExtArgs> | null
    /**
     * Filter, which registo_evento to fetch.
     */
    where?: registo_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registo_eventos to fetch.
     */
    orderBy?: registo_eventoOrderByWithRelationInput | registo_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registo_eventos.
     */
    cursor?: registo_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registo_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registo_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registo_eventos.
     */
    distinct?: Registo_eventoScalarFieldEnum | Registo_eventoScalarFieldEnum[]
  }

  /**
   * registo_evento findFirstOrThrow
   */
  export type registo_eventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registo_evento
     */
    select?: registo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registo_evento
     */
    omit?: registo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registo_eventoInclude<ExtArgs> | null
    /**
     * Filter, which registo_evento to fetch.
     */
    where?: registo_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registo_eventos to fetch.
     */
    orderBy?: registo_eventoOrderByWithRelationInput | registo_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registo_eventos.
     */
    cursor?: registo_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registo_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registo_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registo_eventos.
     */
    distinct?: Registo_eventoScalarFieldEnum | Registo_eventoScalarFieldEnum[]
  }

  /**
   * registo_evento findMany
   */
  export type registo_eventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registo_evento
     */
    select?: registo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registo_evento
     */
    omit?: registo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registo_eventoInclude<ExtArgs> | null
    /**
     * Filter, which registo_eventos to fetch.
     */
    where?: registo_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registo_eventos to fetch.
     */
    orderBy?: registo_eventoOrderByWithRelationInput | registo_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing registo_eventos.
     */
    cursor?: registo_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registo_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registo_eventos.
     */
    skip?: number
    distinct?: Registo_eventoScalarFieldEnum | Registo_eventoScalarFieldEnum[]
  }

  /**
   * registo_evento create
   */
  export type registo_eventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registo_evento
     */
    select?: registo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registo_evento
     */
    omit?: registo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registo_eventoInclude<ExtArgs> | null
    /**
     * The data needed to create a registo_evento.
     */
    data: XOR<registo_eventoCreateInput, registo_eventoUncheckedCreateInput>
  }

  /**
   * registo_evento createMany
   */
  export type registo_eventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many registo_eventos.
     */
    data: registo_eventoCreateManyInput | registo_eventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * registo_evento update
   */
  export type registo_eventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registo_evento
     */
    select?: registo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registo_evento
     */
    omit?: registo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registo_eventoInclude<ExtArgs> | null
    /**
     * The data needed to update a registo_evento.
     */
    data: XOR<registo_eventoUpdateInput, registo_eventoUncheckedUpdateInput>
    /**
     * Choose, which registo_evento to update.
     */
    where: registo_eventoWhereUniqueInput
  }

  /**
   * registo_evento updateMany
   */
  export type registo_eventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update registo_eventos.
     */
    data: XOR<registo_eventoUpdateManyMutationInput, registo_eventoUncheckedUpdateManyInput>
    /**
     * Filter which registo_eventos to update
     */
    where?: registo_eventoWhereInput
    /**
     * Limit how many registo_eventos to update.
     */
    limit?: number
  }

  /**
   * registo_evento upsert
   */
  export type registo_eventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registo_evento
     */
    select?: registo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registo_evento
     */
    omit?: registo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registo_eventoInclude<ExtArgs> | null
    /**
     * The filter to search for the registo_evento to update in case it exists.
     */
    where: registo_eventoWhereUniqueInput
    /**
     * In case the registo_evento found by the `where` argument doesn't exist, create a new registo_evento with this data.
     */
    create: XOR<registo_eventoCreateInput, registo_eventoUncheckedCreateInput>
    /**
     * In case the registo_evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<registo_eventoUpdateInput, registo_eventoUncheckedUpdateInput>
  }

  /**
   * registo_evento delete
   */
  export type registo_eventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registo_evento
     */
    select?: registo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registo_evento
     */
    omit?: registo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registo_eventoInclude<ExtArgs> | null
    /**
     * Filter which registo_evento to delete.
     */
    where: registo_eventoWhereUniqueInput
  }

  /**
   * registo_evento deleteMany
   */
  export type registo_eventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registo_eventos to delete
     */
    where?: registo_eventoWhereInput
    /**
     * Limit how many registo_eventos to delete.
     */
    limit?: number
  }

  /**
   * registo_evento without action
   */
  export type registo_eventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registo_evento
     */
    select?: registo_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registo_evento
     */
    omit?: registo_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registo_eventoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userid: 'userid',
    user: 'user',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Extrato_MovimentaçaoScalarFieldEnum: {
    trasaçaoid: 'trasaçaoid',
    codigoAgenciaOrigem: 'codigoAgenciaOrigem',
    data_lançamento: 'data_lançamento',
    descriçao: 'descriçao',
    tipo_lançamento: 'tipo_lançamento',
    valor: 'valor',
    data_Extrato: 'data_Extrato',
    numero_Conta_origem: 'numero_Conta_origem',
    codigo_Banco: 'codigo_Banco'
  };

  export type Extrato_MovimentaçaoScalarFieldEnum = (typeof Extrato_MovimentaçaoScalarFieldEnum)[keyof typeof Extrato_MovimentaçaoScalarFieldEnum]


  export const Criar_eventoScalarFieldEnum: {
    eventoid: 'eventoid',
    titulo: 'titulo',
    image: 'image',
    descriçao: 'descriçao',
    criar_evento: 'criar_evento',
    data_termino: 'data_termino',
    ultima_mod: 'ultima_mod',
    criadorid: 'criadorid'
  };

  export type Criar_eventoScalarFieldEnum = (typeof Criar_eventoScalarFieldEnum)[keyof typeof Criar_eventoScalarFieldEnum]


  export const EndereçoScalarFieldEnum: {
    endereçoid: 'endereçoid',
    lote: 'lote',
    numero: 'numero',
    quadra: 'quadra',
    bairro: 'bairro',
    referencia: 'referencia'
  };

  export type EndereçoScalarFieldEnum = (typeof EndereçoScalarFieldEnum)[keyof typeof EndereçoScalarFieldEnum]


  export const Registo_eventoScalarFieldEnum: {
    registro_id: 'registro_id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    responsavel: 'responsavel',
    idade: 'idade',
    idade_responsavel: 'idade_responsavel',
    created_registro: 'created_registro',
    endereçoid: 'endereçoid',
    eventoid: 'eventoid'
  };

  export type Registo_eventoScalarFieldEnum = (typeof Registo_eventoScalarFieldEnum)[keyof typeof Registo_eventoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const userOrderByRelevanceFieldEnum: {
    user: 'user',
    email: 'email'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const extrato_MovimentaçaoOrderByRelevanceFieldEnum: {
    trasaçaoid: 'trasaçaoid',
    descriçao: 'descriçao'
  };

  export type extrato_MovimentaçaoOrderByRelevanceFieldEnum = (typeof extrato_MovimentaçaoOrderByRelevanceFieldEnum)[keyof typeof extrato_MovimentaçaoOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const criar_eventoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    image: 'image',
    descriçao: 'descriçao'
  };

  export type criar_eventoOrderByRelevanceFieldEnum = (typeof criar_eventoOrderByRelevanceFieldEnum)[keyof typeof criar_eventoOrderByRelevanceFieldEnum]


  export const endereçoOrderByRelevanceFieldEnum: {
    endereçoid: 'endereçoid',
    lote: 'lote',
    quadra: 'quadra',
    bairro: 'bairro',
    referencia: 'referencia'
  };

  export type endereçoOrderByRelevanceFieldEnum = (typeof endereçoOrderByRelevanceFieldEnum)[keyof typeof endereçoOrderByRelevanceFieldEnum]


  export const registo_eventoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    sobrenome: 'sobrenome',
    responsavel: 'responsavel',
    endereçoid: 'endereçoid'
  };

  export type registo_eventoOrderByRelevanceFieldEnum = (typeof registo_eventoOrderByRelevanceFieldEnum)[keyof typeof registo_eventoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'tipo_lançamento'
   */
  export type Enumtipo_lançamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_lançamento'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    userid?: IntFilter<"user"> | number
    user?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    eventoid?: Criar_eventoListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    userid?: SortOrder
    user?: SortOrder
    email?: SortOrder
    eventoid?: criar_eventoOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    userid?: number
    user?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    eventoid?: Criar_eventoListRelationFilter
  }, "userid" | "user" | "email">

  export type userOrderByWithAggregationInput = {
    userid?: SortOrder
    user?: SortOrder
    email?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    userid?: IntWithAggregatesFilter<"user"> | number
    user?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
  }

  export type extrato_MovimentaçaoWhereInput = {
    AND?: extrato_MovimentaçaoWhereInput | extrato_MovimentaçaoWhereInput[]
    OR?: extrato_MovimentaçaoWhereInput[]
    NOT?: extrato_MovimentaçaoWhereInput | extrato_MovimentaçaoWhereInput[]
    trasaçaoid?: StringFilter<"extrato_Movimentaçao"> | string
    codigoAgenciaOrigem?: IntFilter<"extrato_Movimentaçao"> | number
    data_lançamento?: DateTimeFilter<"extrato_Movimentaçao"> | Date | string
    descriçao?: StringFilter<"extrato_Movimentaçao"> | string
    tipo_lançamento?: Enumtipo_lançamentoFilter<"extrato_Movimentaçao"> | $Enums.tipo_lançamento
    valor?: DecimalFilter<"extrato_Movimentaçao"> | Decimal | DecimalJsLike | number | string
    data_Extrato?: DateTimeFilter<"extrato_Movimentaçao"> | Date | string
    numero_Conta_origem?: IntFilter<"extrato_Movimentaçao"> | number
    codigo_Banco?: IntFilter<"extrato_Movimentaçao"> | number
  }

  export type extrato_MovimentaçaoOrderByWithRelationInput = {
    trasaçaoid?: SortOrder
    codigoAgenciaOrigem?: SortOrder
    data_lançamento?: SortOrder
    descriçao?: SortOrder
    tipo_lançamento?: SortOrder
    valor?: SortOrder
    data_Extrato?: SortOrder
    numero_Conta_origem?: SortOrder
    codigo_Banco?: SortOrder
    _relevance?: extrato_MovimentaçaoOrderByRelevanceInput
  }

  export type extrato_MovimentaçaoWhereUniqueInput = Prisma.AtLeast<{
    trasaçaoid?: string
    AND?: extrato_MovimentaçaoWhereInput | extrato_MovimentaçaoWhereInput[]
    OR?: extrato_MovimentaçaoWhereInput[]
    NOT?: extrato_MovimentaçaoWhereInput | extrato_MovimentaçaoWhereInput[]
    codigoAgenciaOrigem?: IntFilter<"extrato_Movimentaçao"> | number
    data_lançamento?: DateTimeFilter<"extrato_Movimentaçao"> | Date | string
    descriçao?: StringFilter<"extrato_Movimentaçao"> | string
    tipo_lançamento?: Enumtipo_lançamentoFilter<"extrato_Movimentaçao"> | $Enums.tipo_lançamento
    valor?: DecimalFilter<"extrato_Movimentaçao"> | Decimal | DecimalJsLike | number | string
    data_Extrato?: DateTimeFilter<"extrato_Movimentaçao"> | Date | string
    numero_Conta_origem?: IntFilter<"extrato_Movimentaçao"> | number
    codigo_Banco?: IntFilter<"extrato_Movimentaçao"> | number
  }, "trasaçaoid">

  export type extrato_MovimentaçaoOrderByWithAggregationInput = {
    trasaçaoid?: SortOrder
    codigoAgenciaOrigem?: SortOrder
    data_lançamento?: SortOrder
    descriçao?: SortOrder
    tipo_lançamento?: SortOrder
    valor?: SortOrder
    data_Extrato?: SortOrder
    numero_Conta_origem?: SortOrder
    codigo_Banco?: SortOrder
    _count?: extrato_MovimentaçaoCountOrderByAggregateInput
    _avg?: extrato_MovimentaçaoAvgOrderByAggregateInput
    _max?: extrato_MovimentaçaoMaxOrderByAggregateInput
    _min?: extrato_MovimentaçaoMinOrderByAggregateInput
    _sum?: extrato_MovimentaçaoSumOrderByAggregateInput
  }

  export type extrato_MovimentaçaoScalarWhereWithAggregatesInput = {
    AND?: extrato_MovimentaçaoScalarWhereWithAggregatesInput | extrato_MovimentaçaoScalarWhereWithAggregatesInput[]
    OR?: extrato_MovimentaçaoScalarWhereWithAggregatesInput[]
    NOT?: extrato_MovimentaçaoScalarWhereWithAggregatesInput | extrato_MovimentaçaoScalarWhereWithAggregatesInput[]
    trasaçaoid?: StringWithAggregatesFilter<"extrato_Movimentaçao"> | string
    codigoAgenciaOrigem?: IntWithAggregatesFilter<"extrato_Movimentaçao"> | number
    data_lançamento?: DateTimeWithAggregatesFilter<"extrato_Movimentaçao"> | Date | string
    descriçao?: StringWithAggregatesFilter<"extrato_Movimentaçao"> | string
    tipo_lançamento?: Enumtipo_lançamentoWithAggregatesFilter<"extrato_Movimentaçao"> | $Enums.tipo_lançamento
    valor?: DecimalWithAggregatesFilter<"extrato_Movimentaçao"> | Decimal | DecimalJsLike | number | string
    data_Extrato?: DateTimeWithAggregatesFilter<"extrato_Movimentaçao"> | Date | string
    numero_Conta_origem?: IntWithAggregatesFilter<"extrato_Movimentaçao"> | number
    codigo_Banco?: IntWithAggregatesFilter<"extrato_Movimentaçao"> | number
  }

  export type criar_eventoWhereInput = {
    AND?: criar_eventoWhereInput | criar_eventoWhereInput[]
    OR?: criar_eventoWhereInput[]
    NOT?: criar_eventoWhereInput | criar_eventoWhereInput[]
    eventoid?: IntFilter<"criar_evento"> | number
    titulo?: StringFilter<"criar_evento"> | string
    image?: StringNullableFilter<"criar_evento"> | string | null
    descriçao?: StringFilter<"criar_evento"> | string
    criar_evento?: DateTimeFilter<"criar_evento"> | Date | string
    data_termino?: DateTimeFilter<"criar_evento"> | Date | string
    ultima_mod?: DateTimeFilter<"criar_evento"> | Date | string
    criadorid?: IntFilter<"criar_evento"> | number
    criador?: XOR<UserScalarRelationFilter, userWhereInput>
    registro?: Registo_eventoListRelationFilter
  }

  export type criar_eventoOrderByWithRelationInput = {
    eventoid?: SortOrder
    titulo?: SortOrder
    image?: SortOrderInput | SortOrder
    descriçao?: SortOrder
    criar_evento?: SortOrder
    data_termino?: SortOrder
    ultima_mod?: SortOrder
    criadorid?: SortOrder
    criador?: userOrderByWithRelationInput
    registro?: registo_eventoOrderByRelationAggregateInput
    _relevance?: criar_eventoOrderByRelevanceInput
  }

  export type criar_eventoWhereUniqueInput = Prisma.AtLeast<{
    eventoid?: number
    AND?: criar_eventoWhereInput | criar_eventoWhereInput[]
    OR?: criar_eventoWhereInput[]
    NOT?: criar_eventoWhereInput | criar_eventoWhereInput[]
    titulo?: StringFilter<"criar_evento"> | string
    image?: StringNullableFilter<"criar_evento"> | string | null
    descriçao?: StringFilter<"criar_evento"> | string
    criar_evento?: DateTimeFilter<"criar_evento"> | Date | string
    data_termino?: DateTimeFilter<"criar_evento"> | Date | string
    ultima_mod?: DateTimeFilter<"criar_evento"> | Date | string
    criadorid?: IntFilter<"criar_evento"> | number
    criador?: XOR<UserScalarRelationFilter, userWhereInput>
    registro?: Registo_eventoListRelationFilter
  }, "eventoid">

  export type criar_eventoOrderByWithAggregationInput = {
    eventoid?: SortOrder
    titulo?: SortOrder
    image?: SortOrderInput | SortOrder
    descriçao?: SortOrder
    criar_evento?: SortOrder
    data_termino?: SortOrder
    ultima_mod?: SortOrder
    criadorid?: SortOrder
    _count?: criar_eventoCountOrderByAggregateInput
    _avg?: criar_eventoAvgOrderByAggregateInput
    _max?: criar_eventoMaxOrderByAggregateInput
    _min?: criar_eventoMinOrderByAggregateInput
    _sum?: criar_eventoSumOrderByAggregateInput
  }

  export type criar_eventoScalarWhereWithAggregatesInput = {
    AND?: criar_eventoScalarWhereWithAggregatesInput | criar_eventoScalarWhereWithAggregatesInput[]
    OR?: criar_eventoScalarWhereWithAggregatesInput[]
    NOT?: criar_eventoScalarWhereWithAggregatesInput | criar_eventoScalarWhereWithAggregatesInput[]
    eventoid?: IntWithAggregatesFilter<"criar_evento"> | number
    titulo?: StringWithAggregatesFilter<"criar_evento"> | string
    image?: StringNullableWithAggregatesFilter<"criar_evento"> | string | null
    descriçao?: StringWithAggregatesFilter<"criar_evento"> | string
    criar_evento?: DateTimeWithAggregatesFilter<"criar_evento"> | Date | string
    data_termino?: DateTimeWithAggregatesFilter<"criar_evento"> | Date | string
    ultima_mod?: DateTimeWithAggregatesFilter<"criar_evento"> | Date | string
    criadorid?: IntWithAggregatesFilter<"criar_evento"> | number
  }

  export type endereçoWhereInput = {
    AND?: endereçoWhereInput | endereçoWhereInput[]
    OR?: endereçoWhereInput[]
    NOT?: endereçoWhereInput | endereçoWhereInput[]
    endereçoid?: StringFilter<"endereço"> | string
    lote?: StringFilter<"endereço"> | string
    numero?: IntFilter<"endereço"> | number
    quadra?: StringFilter<"endereço"> | string
    bairro?: StringFilter<"endereço"> | string
    referencia?: StringFilter<"endereço"> | string
    registroid?: Registo_eventoListRelationFilter
  }

  export type endereçoOrderByWithRelationInput = {
    endereçoid?: SortOrder
    lote?: SortOrder
    numero?: SortOrder
    quadra?: SortOrder
    bairro?: SortOrder
    referencia?: SortOrder
    registroid?: registo_eventoOrderByRelationAggregateInput
    _relevance?: endereçoOrderByRelevanceInput
  }

  export type endereçoWhereUniqueInput = Prisma.AtLeast<{
    endereçoid?: string
    AND?: endereçoWhereInput | endereçoWhereInput[]
    OR?: endereçoWhereInput[]
    NOT?: endereçoWhereInput | endereçoWhereInput[]
    lote?: StringFilter<"endereço"> | string
    numero?: IntFilter<"endereço"> | number
    quadra?: StringFilter<"endereço"> | string
    bairro?: StringFilter<"endereço"> | string
    referencia?: StringFilter<"endereço"> | string
    registroid?: Registo_eventoListRelationFilter
  }, "endereçoid">

  export type endereçoOrderByWithAggregationInput = {
    endereçoid?: SortOrder
    lote?: SortOrder
    numero?: SortOrder
    quadra?: SortOrder
    bairro?: SortOrder
    referencia?: SortOrder
    _count?: endereçoCountOrderByAggregateInput
    _avg?: endereçoAvgOrderByAggregateInput
    _max?: endereçoMaxOrderByAggregateInput
    _min?: endereçoMinOrderByAggregateInput
    _sum?: endereçoSumOrderByAggregateInput
  }

  export type endereçoScalarWhereWithAggregatesInput = {
    AND?: endereçoScalarWhereWithAggregatesInput | endereçoScalarWhereWithAggregatesInput[]
    OR?: endereçoScalarWhereWithAggregatesInput[]
    NOT?: endereçoScalarWhereWithAggregatesInput | endereçoScalarWhereWithAggregatesInput[]
    endereçoid?: StringWithAggregatesFilter<"endereço"> | string
    lote?: StringWithAggregatesFilter<"endereço"> | string
    numero?: IntWithAggregatesFilter<"endereço"> | number
    quadra?: StringWithAggregatesFilter<"endereço"> | string
    bairro?: StringWithAggregatesFilter<"endereço"> | string
    referencia?: StringWithAggregatesFilter<"endereço"> | string
  }

  export type registo_eventoWhereInput = {
    AND?: registo_eventoWhereInput | registo_eventoWhereInput[]
    OR?: registo_eventoWhereInput[]
    NOT?: registo_eventoWhereInput | registo_eventoWhereInput[]
    registro_id?: IntFilter<"registo_evento"> | number
    nome?: StringFilter<"registo_evento"> | string
    sobrenome?: StringFilter<"registo_evento"> | string
    responsavel?: StringFilter<"registo_evento"> | string
    idade?: IntFilter<"registo_evento"> | number
    idade_responsavel?: DateTimeFilter<"registo_evento"> | Date | string
    created_registro?: DateTimeFilter<"registo_evento"> | Date | string
    endereçoid?: StringFilter<"registo_evento"> | string
    eventoid?: IntFilter<"registo_evento"> | number
    endereço?: XOR<EndereçoScalarRelationFilter, endereçoWhereInput>
    evento?: XOR<Criar_eventoScalarRelationFilter, criar_eventoWhereInput>
  }

  export type registo_eventoOrderByWithRelationInput = {
    registro_id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    responsavel?: SortOrder
    idade?: SortOrder
    idade_responsavel?: SortOrder
    created_registro?: SortOrder
    endereçoid?: SortOrder
    eventoid?: SortOrder
    endereço?: endereçoOrderByWithRelationInput
    evento?: criar_eventoOrderByWithRelationInput
    _relevance?: registo_eventoOrderByRelevanceInput
  }

  export type registo_eventoWhereUniqueInput = Prisma.AtLeast<{
    registro_id?: number
    nome?: string
    sobrenome?: string
    responsavel?: string
    idade?: number
    AND?: registo_eventoWhereInput | registo_eventoWhereInput[]
    OR?: registo_eventoWhereInput[]
    NOT?: registo_eventoWhereInput | registo_eventoWhereInput[]
    idade_responsavel?: DateTimeFilter<"registo_evento"> | Date | string
    created_registro?: DateTimeFilter<"registo_evento"> | Date | string
    endereçoid?: StringFilter<"registo_evento"> | string
    eventoid?: IntFilter<"registo_evento"> | number
    endereço?: XOR<EndereçoScalarRelationFilter, endereçoWhereInput>
    evento?: XOR<Criar_eventoScalarRelationFilter, criar_eventoWhereInput>
  }, "registro_id" | "nome" | "sobrenome" | "responsavel" | "idade">

  export type registo_eventoOrderByWithAggregationInput = {
    registro_id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    responsavel?: SortOrder
    idade?: SortOrder
    idade_responsavel?: SortOrder
    created_registro?: SortOrder
    endereçoid?: SortOrder
    eventoid?: SortOrder
    _count?: registo_eventoCountOrderByAggregateInput
    _avg?: registo_eventoAvgOrderByAggregateInput
    _max?: registo_eventoMaxOrderByAggregateInput
    _min?: registo_eventoMinOrderByAggregateInput
    _sum?: registo_eventoSumOrderByAggregateInput
  }

  export type registo_eventoScalarWhereWithAggregatesInput = {
    AND?: registo_eventoScalarWhereWithAggregatesInput | registo_eventoScalarWhereWithAggregatesInput[]
    OR?: registo_eventoScalarWhereWithAggregatesInput[]
    NOT?: registo_eventoScalarWhereWithAggregatesInput | registo_eventoScalarWhereWithAggregatesInput[]
    registro_id?: IntWithAggregatesFilter<"registo_evento"> | number
    nome?: StringWithAggregatesFilter<"registo_evento"> | string
    sobrenome?: StringWithAggregatesFilter<"registo_evento"> | string
    responsavel?: StringWithAggregatesFilter<"registo_evento"> | string
    idade?: IntWithAggregatesFilter<"registo_evento"> | number
    idade_responsavel?: DateTimeWithAggregatesFilter<"registo_evento"> | Date | string
    created_registro?: DateTimeWithAggregatesFilter<"registo_evento"> | Date | string
    endereçoid?: StringWithAggregatesFilter<"registo_evento"> | string
    eventoid?: IntWithAggregatesFilter<"registo_evento"> | number
  }

  export type userCreateInput = {
    user: string
    email: string
    eventoid?: criar_eventoCreateNestedManyWithoutCriadorInput
  }

  export type userUncheckedCreateInput = {
    userid?: number
    user: string
    email: string
    eventoid?: criar_eventoUncheckedCreateNestedManyWithoutCriadorInput
  }

  export type userUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    eventoid?: criar_eventoUpdateManyWithoutCriadorNestedInput
  }

  export type userUncheckedUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    eventoid?: criar_eventoUncheckedUpdateManyWithoutCriadorNestedInput
  }

  export type userCreateManyInput = {
    userid?: number
    user: string
    email: string
  }

  export type userUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    userid?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type extrato_MovimentaçaoCreateInput = {
    trasaçaoid?: string
    codigoAgenciaOrigem: number
    data_lançamento: Date | string
    descriçao: string
    tipo_lançamento?: $Enums.tipo_lançamento
    valor: Decimal | DecimalJsLike | number | string
    data_Extrato?: Date | string
    numero_Conta_origem: number
    codigo_Banco: number
  }

  export type extrato_MovimentaçaoUncheckedCreateInput = {
    trasaçaoid?: string
    codigoAgenciaOrigem: number
    data_lançamento: Date | string
    descriçao: string
    tipo_lançamento?: $Enums.tipo_lançamento
    valor: Decimal | DecimalJsLike | number | string
    data_Extrato?: Date | string
    numero_Conta_origem: number
    codigo_Banco: number
  }

  export type extrato_MovimentaçaoUpdateInput = {
    trasaçaoid?: StringFieldUpdateOperationsInput | string
    codigoAgenciaOrigem?: IntFieldUpdateOperationsInput | number
    data_lançamento?: DateTimeFieldUpdateOperationsInput | Date | string
    descriçao?: StringFieldUpdateOperationsInput | string
    tipo_lançamento?: Enumtipo_lançamentoFieldUpdateOperationsInput | $Enums.tipo_lançamento
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_Extrato?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_Conta_origem?: IntFieldUpdateOperationsInput | number
    codigo_Banco?: IntFieldUpdateOperationsInput | number
  }

  export type extrato_MovimentaçaoUncheckedUpdateInput = {
    trasaçaoid?: StringFieldUpdateOperationsInput | string
    codigoAgenciaOrigem?: IntFieldUpdateOperationsInput | number
    data_lançamento?: DateTimeFieldUpdateOperationsInput | Date | string
    descriçao?: StringFieldUpdateOperationsInput | string
    tipo_lançamento?: Enumtipo_lançamentoFieldUpdateOperationsInput | $Enums.tipo_lançamento
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_Extrato?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_Conta_origem?: IntFieldUpdateOperationsInput | number
    codigo_Banco?: IntFieldUpdateOperationsInput | number
  }

  export type extrato_MovimentaçaoCreateManyInput = {
    trasaçaoid?: string
    codigoAgenciaOrigem: number
    data_lançamento: Date | string
    descriçao: string
    tipo_lançamento?: $Enums.tipo_lançamento
    valor: Decimal | DecimalJsLike | number | string
    data_Extrato?: Date | string
    numero_Conta_origem: number
    codigo_Banco: number
  }

  export type extrato_MovimentaçaoUpdateManyMutationInput = {
    trasaçaoid?: StringFieldUpdateOperationsInput | string
    codigoAgenciaOrigem?: IntFieldUpdateOperationsInput | number
    data_lançamento?: DateTimeFieldUpdateOperationsInput | Date | string
    descriçao?: StringFieldUpdateOperationsInput | string
    tipo_lançamento?: Enumtipo_lançamentoFieldUpdateOperationsInput | $Enums.tipo_lançamento
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_Extrato?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_Conta_origem?: IntFieldUpdateOperationsInput | number
    codigo_Banco?: IntFieldUpdateOperationsInput | number
  }

  export type extrato_MovimentaçaoUncheckedUpdateManyInput = {
    trasaçaoid?: StringFieldUpdateOperationsInput | string
    codigoAgenciaOrigem?: IntFieldUpdateOperationsInput | number
    data_lançamento?: DateTimeFieldUpdateOperationsInput | Date | string
    descriçao?: StringFieldUpdateOperationsInput | string
    tipo_lançamento?: Enumtipo_lançamentoFieldUpdateOperationsInput | $Enums.tipo_lançamento
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_Extrato?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_Conta_origem?: IntFieldUpdateOperationsInput | number
    codigo_Banco?: IntFieldUpdateOperationsInput | number
  }

  export type criar_eventoCreateInput = {
    eventoid: number
    titulo: string
    image?: string | null
    descriçao: string
    criar_evento?: Date | string
    data_termino: Date | string
    ultima_mod?: Date | string
    criador: userCreateNestedOneWithoutEventoidInput
    registro?: registo_eventoCreateNestedManyWithoutEventoInput
  }

  export type criar_eventoUncheckedCreateInput = {
    eventoid: number
    titulo: string
    image?: string | null
    descriçao: string
    criar_evento?: Date | string
    data_termino: Date | string
    ultima_mod?: Date | string
    criadorid: number
    registro?: registo_eventoUncheckedCreateNestedManyWithoutEventoInput
  }

  export type criar_eventoUpdateInput = {
    eventoid?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descriçao?: StringFieldUpdateOperationsInput | string
    criar_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    ultima_mod?: DateTimeFieldUpdateOperationsInput | Date | string
    criador?: userUpdateOneRequiredWithoutEventoidNestedInput
    registro?: registo_eventoUpdateManyWithoutEventoNestedInput
  }

  export type criar_eventoUncheckedUpdateInput = {
    eventoid?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descriçao?: StringFieldUpdateOperationsInput | string
    criar_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    ultima_mod?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorid?: IntFieldUpdateOperationsInput | number
    registro?: registo_eventoUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type criar_eventoCreateManyInput = {
    eventoid: number
    titulo: string
    image?: string | null
    descriçao: string
    criar_evento?: Date | string
    data_termino: Date | string
    ultima_mod?: Date | string
    criadorid: number
  }

  export type criar_eventoUpdateManyMutationInput = {
    eventoid?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descriçao?: StringFieldUpdateOperationsInput | string
    criar_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    ultima_mod?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type criar_eventoUncheckedUpdateManyInput = {
    eventoid?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descriçao?: StringFieldUpdateOperationsInput | string
    criar_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    ultima_mod?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorid?: IntFieldUpdateOperationsInput | number
  }

  export type endereçoCreateInput = {
    endereçoid?: string
    lote: string
    numero: number
    quadra: string
    bairro: string
    referencia: string
    registroid?: registo_eventoCreateNestedManyWithoutEndereçoInput
  }

  export type endereçoUncheckedCreateInput = {
    endereçoid?: string
    lote: string
    numero: number
    quadra: string
    bairro: string
    referencia: string
    registroid?: registo_eventoUncheckedCreateNestedManyWithoutEndereçoInput
  }

  export type endereçoUpdateInput = {
    endereçoid?: StringFieldUpdateOperationsInput | string
    lote?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    quadra?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    registroid?: registo_eventoUpdateManyWithoutEndereçoNestedInput
  }

  export type endereçoUncheckedUpdateInput = {
    endereçoid?: StringFieldUpdateOperationsInput | string
    lote?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    quadra?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    registroid?: registo_eventoUncheckedUpdateManyWithoutEndereçoNestedInput
  }

  export type endereçoCreateManyInput = {
    endereçoid?: string
    lote: string
    numero: number
    quadra: string
    bairro: string
    referencia: string
  }

  export type endereçoUpdateManyMutationInput = {
    endereçoid?: StringFieldUpdateOperationsInput | string
    lote?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    quadra?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
  }

  export type endereçoUncheckedUpdateManyInput = {
    endereçoid?: StringFieldUpdateOperationsInput | string
    lote?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    quadra?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
  }

  export type registo_eventoCreateInput = {
    nome: string
    sobrenome: string
    responsavel: string
    idade: number
    idade_responsavel: Date | string
    created_registro?: Date | string
    endereço: endereçoCreateNestedOneWithoutRegistroidInput
    evento: criar_eventoCreateNestedOneWithoutRegistroInput
  }

  export type registo_eventoUncheckedCreateInput = {
    registro_id?: number
    nome: string
    sobrenome: string
    responsavel: string
    idade: number
    idade_responsavel: Date | string
    created_registro?: Date | string
    endereçoid: string
    eventoid: number
  }

  export type registo_eventoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idade_responsavel?: DateTimeFieldUpdateOperationsInput | Date | string
    created_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    endereço?: endereçoUpdateOneRequiredWithoutRegistroidNestedInput
    evento?: criar_eventoUpdateOneRequiredWithoutRegistroNestedInput
  }

  export type registo_eventoUncheckedUpdateInput = {
    registro_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idade_responsavel?: DateTimeFieldUpdateOperationsInput | Date | string
    created_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    endereçoid?: StringFieldUpdateOperationsInput | string
    eventoid?: IntFieldUpdateOperationsInput | number
  }

  export type registo_eventoCreateManyInput = {
    registro_id?: number
    nome: string
    sobrenome: string
    responsavel: string
    idade: number
    idade_responsavel: Date | string
    created_registro?: Date | string
    endereçoid: string
    eventoid: number
  }

  export type registo_eventoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idade_responsavel?: DateTimeFieldUpdateOperationsInput | Date | string
    created_registro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registo_eventoUncheckedUpdateManyInput = {
    registro_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idade_responsavel?: DateTimeFieldUpdateOperationsInput | Date | string
    created_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    endereçoid?: StringFieldUpdateOperationsInput | string
    eventoid?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Criar_eventoListRelationFilter = {
    every?: criar_eventoWhereInput
    some?: criar_eventoWhereInput
    none?: criar_eventoWhereInput
  }

  export type criar_eventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    userid?: SortOrder
    user?: SortOrder
    email?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    userid?: SortOrder
    user?: SortOrder
    email?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    userid?: SortOrder
    user?: SortOrder
    email?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumtipo_lançamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_lançamento | Enumtipo_lançamentoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_lançamento[]
    notIn?: $Enums.tipo_lançamento[]
    not?: NestedEnumtipo_lançamentoFilter<$PrismaModel> | $Enums.tipo_lançamento
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type extrato_MovimentaçaoOrderByRelevanceInput = {
    fields: extrato_MovimentaçaoOrderByRelevanceFieldEnum | extrato_MovimentaçaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type extrato_MovimentaçaoCountOrderByAggregateInput = {
    trasaçaoid?: SortOrder
    codigoAgenciaOrigem?: SortOrder
    data_lançamento?: SortOrder
    descriçao?: SortOrder
    tipo_lançamento?: SortOrder
    valor?: SortOrder
    data_Extrato?: SortOrder
    numero_Conta_origem?: SortOrder
    codigo_Banco?: SortOrder
  }

  export type extrato_MovimentaçaoAvgOrderByAggregateInput = {
    codigoAgenciaOrigem?: SortOrder
    valor?: SortOrder
    numero_Conta_origem?: SortOrder
    codigo_Banco?: SortOrder
  }

  export type extrato_MovimentaçaoMaxOrderByAggregateInput = {
    trasaçaoid?: SortOrder
    codigoAgenciaOrigem?: SortOrder
    data_lançamento?: SortOrder
    descriçao?: SortOrder
    tipo_lançamento?: SortOrder
    valor?: SortOrder
    data_Extrato?: SortOrder
    numero_Conta_origem?: SortOrder
    codigo_Banco?: SortOrder
  }

  export type extrato_MovimentaçaoMinOrderByAggregateInput = {
    trasaçaoid?: SortOrder
    codigoAgenciaOrigem?: SortOrder
    data_lançamento?: SortOrder
    descriçao?: SortOrder
    tipo_lançamento?: SortOrder
    valor?: SortOrder
    data_Extrato?: SortOrder
    numero_Conta_origem?: SortOrder
    codigo_Banco?: SortOrder
  }

  export type extrato_MovimentaçaoSumOrderByAggregateInput = {
    codigoAgenciaOrigem?: SortOrder
    valor?: SortOrder
    numero_Conta_origem?: SortOrder
    codigo_Banco?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumtipo_lançamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_lançamento | Enumtipo_lançamentoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_lançamento[]
    notIn?: $Enums.tipo_lançamento[]
    not?: NestedEnumtipo_lançamentoWithAggregatesFilter<$PrismaModel> | $Enums.tipo_lançamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_lançamentoFilter<$PrismaModel>
    _max?: NestedEnumtipo_lançamentoFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type Registo_eventoListRelationFilter = {
    every?: registo_eventoWhereInput
    some?: registo_eventoWhereInput
    none?: registo_eventoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type registo_eventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type criar_eventoOrderByRelevanceInput = {
    fields: criar_eventoOrderByRelevanceFieldEnum | criar_eventoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type criar_eventoCountOrderByAggregateInput = {
    eventoid?: SortOrder
    titulo?: SortOrder
    image?: SortOrder
    descriçao?: SortOrder
    criar_evento?: SortOrder
    data_termino?: SortOrder
    ultima_mod?: SortOrder
    criadorid?: SortOrder
  }

  export type criar_eventoAvgOrderByAggregateInput = {
    eventoid?: SortOrder
    criadorid?: SortOrder
  }

  export type criar_eventoMaxOrderByAggregateInput = {
    eventoid?: SortOrder
    titulo?: SortOrder
    image?: SortOrder
    descriçao?: SortOrder
    criar_evento?: SortOrder
    data_termino?: SortOrder
    ultima_mod?: SortOrder
    criadorid?: SortOrder
  }

  export type criar_eventoMinOrderByAggregateInput = {
    eventoid?: SortOrder
    titulo?: SortOrder
    image?: SortOrder
    descriçao?: SortOrder
    criar_evento?: SortOrder
    data_termino?: SortOrder
    ultima_mod?: SortOrder
    criadorid?: SortOrder
  }

  export type criar_eventoSumOrderByAggregateInput = {
    eventoid?: SortOrder
    criadorid?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type endereçoOrderByRelevanceInput = {
    fields: endereçoOrderByRelevanceFieldEnum | endereçoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type endereçoCountOrderByAggregateInput = {
    endereçoid?: SortOrder
    lote?: SortOrder
    numero?: SortOrder
    quadra?: SortOrder
    bairro?: SortOrder
    referencia?: SortOrder
  }

  export type endereçoAvgOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type endereçoMaxOrderByAggregateInput = {
    endereçoid?: SortOrder
    lote?: SortOrder
    numero?: SortOrder
    quadra?: SortOrder
    bairro?: SortOrder
    referencia?: SortOrder
  }

  export type endereçoMinOrderByAggregateInput = {
    endereçoid?: SortOrder
    lote?: SortOrder
    numero?: SortOrder
    quadra?: SortOrder
    bairro?: SortOrder
    referencia?: SortOrder
  }

  export type endereçoSumOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type EndereçoScalarRelationFilter = {
    is?: endereçoWhereInput
    isNot?: endereçoWhereInput
  }

  export type Criar_eventoScalarRelationFilter = {
    is?: criar_eventoWhereInput
    isNot?: criar_eventoWhereInput
  }

  export type registo_eventoOrderByRelevanceInput = {
    fields: registo_eventoOrderByRelevanceFieldEnum | registo_eventoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type registo_eventoCountOrderByAggregateInput = {
    registro_id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    responsavel?: SortOrder
    idade?: SortOrder
    idade_responsavel?: SortOrder
    created_registro?: SortOrder
    endereçoid?: SortOrder
    eventoid?: SortOrder
  }

  export type registo_eventoAvgOrderByAggregateInput = {
    registro_id?: SortOrder
    idade?: SortOrder
    eventoid?: SortOrder
  }

  export type registo_eventoMaxOrderByAggregateInput = {
    registro_id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    responsavel?: SortOrder
    idade?: SortOrder
    idade_responsavel?: SortOrder
    created_registro?: SortOrder
    endereçoid?: SortOrder
    eventoid?: SortOrder
  }

  export type registo_eventoMinOrderByAggregateInput = {
    registro_id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    responsavel?: SortOrder
    idade?: SortOrder
    idade_responsavel?: SortOrder
    created_registro?: SortOrder
    endereçoid?: SortOrder
    eventoid?: SortOrder
  }

  export type registo_eventoSumOrderByAggregateInput = {
    registro_id?: SortOrder
    idade?: SortOrder
    eventoid?: SortOrder
  }

  export type criar_eventoCreateNestedManyWithoutCriadorInput = {
    create?: XOR<criar_eventoCreateWithoutCriadorInput, criar_eventoUncheckedCreateWithoutCriadorInput> | criar_eventoCreateWithoutCriadorInput[] | criar_eventoUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: criar_eventoCreateOrConnectWithoutCriadorInput | criar_eventoCreateOrConnectWithoutCriadorInput[]
    createMany?: criar_eventoCreateManyCriadorInputEnvelope
    connect?: criar_eventoWhereUniqueInput | criar_eventoWhereUniqueInput[]
  }

  export type criar_eventoUncheckedCreateNestedManyWithoutCriadorInput = {
    create?: XOR<criar_eventoCreateWithoutCriadorInput, criar_eventoUncheckedCreateWithoutCriadorInput> | criar_eventoCreateWithoutCriadorInput[] | criar_eventoUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: criar_eventoCreateOrConnectWithoutCriadorInput | criar_eventoCreateOrConnectWithoutCriadorInput[]
    createMany?: criar_eventoCreateManyCriadorInputEnvelope
    connect?: criar_eventoWhereUniqueInput | criar_eventoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type criar_eventoUpdateManyWithoutCriadorNestedInput = {
    create?: XOR<criar_eventoCreateWithoutCriadorInput, criar_eventoUncheckedCreateWithoutCriadorInput> | criar_eventoCreateWithoutCriadorInput[] | criar_eventoUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: criar_eventoCreateOrConnectWithoutCriadorInput | criar_eventoCreateOrConnectWithoutCriadorInput[]
    upsert?: criar_eventoUpsertWithWhereUniqueWithoutCriadorInput | criar_eventoUpsertWithWhereUniqueWithoutCriadorInput[]
    createMany?: criar_eventoCreateManyCriadorInputEnvelope
    set?: criar_eventoWhereUniqueInput | criar_eventoWhereUniqueInput[]
    disconnect?: criar_eventoWhereUniqueInput | criar_eventoWhereUniqueInput[]
    delete?: criar_eventoWhereUniqueInput | criar_eventoWhereUniqueInput[]
    connect?: criar_eventoWhereUniqueInput | criar_eventoWhereUniqueInput[]
    update?: criar_eventoUpdateWithWhereUniqueWithoutCriadorInput | criar_eventoUpdateWithWhereUniqueWithoutCriadorInput[]
    updateMany?: criar_eventoUpdateManyWithWhereWithoutCriadorInput | criar_eventoUpdateManyWithWhereWithoutCriadorInput[]
    deleteMany?: criar_eventoScalarWhereInput | criar_eventoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type criar_eventoUncheckedUpdateManyWithoutCriadorNestedInput = {
    create?: XOR<criar_eventoCreateWithoutCriadorInput, criar_eventoUncheckedCreateWithoutCriadorInput> | criar_eventoCreateWithoutCriadorInput[] | criar_eventoUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: criar_eventoCreateOrConnectWithoutCriadorInput | criar_eventoCreateOrConnectWithoutCriadorInput[]
    upsert?: criar_eventoUpsertWithWhereUniqueWithoutCriadorInput | criar_eventoUpsertWithWhereUniqueWithoutCriadorInput[]
    createMany?: criar_eventoCreateManyCriadorInputEnvelope
    set?: criar_eventoWhereUniqueInput | criar_eventoWhereUniqueInput[]
    disconnect?: criar_eventoWhereUniqueInput | criar_eventoWhereUniqueInput[]
    delete?: criar_eventoWhereUniqueInput | criar_eventoWhereUniqueInput[]
    connect?: criar_eventoWhereUniqueInput | criar_eventoWhereUniqueInput[]
    update?: criar_eventoUpdateWithWhereUniqueWithoutCriadorInput | criar_eventoUpdateWithWhereUniqueWithoutCriadorInput[]
    updateMany?: criar_eventoUpdateManyWithWhereWithoutCriadorInput | criar_eventoUpdateManyWithWhereWithoutCriadorInput[]
    deleteMany?: criar_eventoScalarWhereInput | criar_eventoScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumtipo_lançamentoFieldUpdateOperationsInput = {
    set?: $Enums.tipo_lançamento
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type userCreateNestedOneWithoutEventoidInput = {
    create?: XOR<userCreateWithoutEventoidInput, userUncheckedCreateWithoutEventoidInput>
    connectOrCreate?: userCreateOrConnectWithoutEventoidInput
    connect?: userWhereUniqueInput
  }

  export type registo_eventoCreateNestedManyWithoutEventoInput = {
    create?: XOR<registo_eventoCreateWithoutEventoInput, registo_eventoUncheckedCreateWithoutEventoInput> | registo_eventoCreateWithoutEventoInput[] | registo_eventoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: registo_eventoCreateOrConnectWithoutEventoInput | registo_eventoCreateOrConnectWithoutEventoInput[]
    createMany?: registo_eventoCreateManyEventoInputEnvelope
    connect?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
  }

  export type registo_eventoUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<registo_eventoCreateWithoutEventoInput, registo_eventoUncheckedCreateWithoutEventoInput> | registo_eventoCreateWithoutEventoInput[] | registo_eventoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: registo_eventoCreateOrConnectWithoutEventoInput | registo_eventoCreateOrConnectWithoutEventoInput[]
    createMany?: registo_eventoCreateManyEventoInputEnvelope
    connect?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneRequiredWithoutEventoidNestedInput = {
    create?: XOR<userCreateWithoutEventoidInput, userUncheckedCreateWithoutEventoidInput>
    connectOrCreate?: userCreateOrConnectWithoutEventoidInput
    upsert?: userUpsertWithoutEventoidInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutEventoidInput, userUpdateWithoutEventoidInput>, userUncheckedUpdateWithoutEventoidInput>
  }

  export type registo_eventoUpdateManyWithoutEventoNestedInput = {
    create?: XOR<registo_eventoCreateWithoutEventoInput, registo_eventoUncheckedCreateWithoutEventoInput> | registo_eventoCreateWithoutEventoInput[] | registo_eventoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: registo_eventoCreateOrConnectWithoutEventoInput | registo_eventoCreateOrConnectWithoutEventoInput[]
    upsert?: registo_eventoUpsertWithWhereUniqueWithoutEventoInput | registo_eventoUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: registo_eventoCreateManyEventoInputEnvelope
    set?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    disconnect?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    delete?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    connect?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    update?: registo_eventoUpdateWithWhereUniqueWithoutEventoInput | registo_eventoUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: registo_eventoUpdateManyWithWhereWithoutEventoInput | registo_eventoUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: registo_eventoScalarWhereInput | registo_eventoScalarWhereInput[]
  }

  export type registo_eventoUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<registo_eventoCreateWithoutEventoInput, registo_eventoUncheckedCreateWithoutEventoInput> | registo_eventoCreateWithoutEventoInput[] | registo_eventoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: registo_eventoCreateOrConnectWithoutEventoInput | registo_eventoCreateOrConnectWithoutEventoInput[]
    upsert?: registo_eventoUpsertWithWhereUniqueWithoutEventoInput | registo_eventoUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: registo_eventoCreateManyEventoInputEnvelope
    set?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    disconnect?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    delete?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    connect?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    update?: registo_eventoUpdateWithWhereUniqueWithoutEventoInput | registo_eventoUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: registo_eventoUpdateManyWithWhereWithoutEventoInput | registo_eventoUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: registo_eventoScalarWhereInput | registo_eventoScalarWhereInput[]
  }

  export type registo_eventoCreateNestedManyWithoutEndereçoInput = {
    create?: XOR<registo_eventoCreateWithoutEndereçoInput, registo_eventoUncheckedCreateWithoutEndereçoInput> | registo_eventoCreateWithoutEndereçoInput[] | registo_eventoUncheckedCreateWithoutEndereçoInput[]
    connectOrCreate?: registo_eventoCreateOrConnectWithoutEndereçoInput | registo_eventoCreateOrConnectWithoutEndereçoInput[]
    createMany?: registo_eventoCreateManyEndereçoInputEnvelope
    connect?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
  }

  export type registo_eventoUncheckedCreateNestedManyWithoutEndereçoInput = {
    create?: XOR<registo_eventoCreateWithoutEndereçoInput, registo_eventoUncheckedCreateWithoutEndereçoInput> | registo_eventoCreateWithoutEndereçoInput[] | registo_eventoUncheckedCreateWithoutEndereçoInput[]
    connectOrCreate?: registo_eventoCreateOrConnectWithoutEndereçoInput | registo_eventoCreateOrConnectWithoutEndereçoInput[]
    createMany?: registo_eventoCreateManyEndereçoInputEnvelope
    connect?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
  }

  export type registo_eventoUpdateManyWithoutEndereçoNestedInput = {
    create?: XOR<registo_eventoCreateWithoutEndereçoInput, registo_eventoUncheckedCreateWithoutEndereçoInput> | registo_eventoCreateWithoutEndereçoInput[] | registo_eventoUncheckedCreateWithoutEndereçoInput[]
    connectOrCreate?: registo_eventoCreateOrConnectWithoutEndereçoInput | registo_eventoCreateOrConnectWithoutEndereçoInput[]
    upsert?: registo_eventoUpsertWithWhereUniqueWithoutEndereçoInput | registo_eventoUpsertWithWhereUniqueWithoutEndereçoInput[]
    createMany?: registo_eventoCreateManyEndereçoInputEnvelope
    set?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    disconnect?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    delete?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    connect?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    update?: registo_eventoUpdateWithWhereUniqueWithoutEndereçoInput | registo_eventoUpdateWithWhereUniqueWithoutEndereçoInput[]
    updateMany?: registo_eventoUpdateManyWithWhereWithoutEndereçoInput | registo_eventoUpdateManyWithWhereWithoutEndereçoInput[]
    deleteMany?: registo_eventoScalarWhereInput | registo_eventoScalarWhereInput[]
  }

  export type registo_eventoUncheckedUpdateManyWithoutEndereçoNestedInput = {
    create?: XOR<registo_eventoCreateWithoutEndereçoInput, registo_eventoUncheckedCreateWithoutEndereçoInput> | registo_eventoCreateWithoutEndereçoInput[] | registo_eventoUncheckedCreateWithoutEndereçoInput[]
    connectOrCreate?: registo_eventoCreateOrConnectWithoutEndereçoInput | registo_eventoCreateOrConnectWithoutEndereçoInput[]
    upsert?: registo_eventoUpsertWithWhereUniqueWithoutEndereçoInput | registo_eventoUpsertWithWhereUniqueWithoutEndereçoInput[]
    createMany?: registo_eventoCreateManyEndereçoInputEnvelope
    set?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    disconnect?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    delete?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    connect?: registo_eventoWhereUniqueInput | registo_eventoWhereUniqueInput[]
    update?: registo_eventoUpdateWithWhereUniqueWithoutEndereçoInput | registo_eventoUpdateWithWhereUniqueWithoutEndereçoInput[]
    updateMany?: registo_eventoUpdateManyWithWhereWithoutEndereçoInput | registo_eventoUpdateManyWithWhereWithoutEndereçoInput[]
    deleteMany?: registo_eventoScalarWhereInput | registo_eventoScalarWhereInput[]
  }

  export type endereçoCreateNestedOneWithoutRegistroidInput = {
    create?: XOR<endereçoCreateWithoutRegistroidInput, endereçoUncheckedCreateWithoutRegistroidInput>
    connectOrCreate?: endereçoCreateOrConnectWithoutRegistroidInput
    connect?: endereçoWhereUniqueInput
  }

  export type criar_eventoCreateNestedOneWithoutRegistroInput = {
    create?: XOR<criar_eventoCreateWithoutRegistroInput, criar_eventoUncheckedCreateWithoutRegistroInput>
    connectOrCreate?: criar_eventoCreateOrConnectWithoutRegistroInput
    connect?: criar_eventoWhereUniqueInput
  }

  export type endereçoUpdateOneRequiredWithoutRegistroidNestedInput = {
    create?: XOR<endereçoCreateWithoutRegistroidInput, endereçoUncheckedCreateWithoutRegistroidInput>
    connectOrCreate?: endereçoCreateOrConnectWithoutRegistroidInput
    upsert?: endereçoUpsertWithoutRegistroidInput
    connect?: endereçoWhereUniqueInput
    update?: XOR<XOR<endereçoUpdateToOneWithWhereWithoutRegistroidInput, endereçoUpdateWithoutRegistroidInput>, endereçoUncheckedUpdateWithoutRegistroidInput>
  }

  export type criar_eventoUpdateOneRequiredWithoutRegistroNestedInput = {
    create?: XOR<criar_eventoCreateWithoutRegistroInput, criar_eventoUncheckedCreateWithoutRegistroInput>
    connectOrCreate?: criar_eventoCreateOrConnectWithoutRegistroInput
    upsert?: criar_eventoUpsertWithoutRegistroInput
    connect?: criar_eventoWhereUniqueInput
    update?: XOR<XOR<criar_eventoUpdateToOneWithWhereWithoutRegistroInput, criar_eventoUpdateWithoutRegistroInput>, criar_eventoUncheckedUpdateWithoutRegistroInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumtipo_lançamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_lançamento | Enumtipo_lançamentoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_lançamento[]
    notIn?: $Enums.tipo_lançamento[]
    not?: NestedEnumtipo_lançamentoFilter<$PrismaModel> | $Enums.tipo_lançamento
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumtipo_lançamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_lançamento | Enumtipo_lançamentoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_lançamento[]
    notIn?: $Enums.tipo_lançamento[]
    not?: NestedEnumtipo_lançamentoWithAggregatesFilter<$PrismaModel> | $Enums.tipo_lançamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_lançamentoFilter<$PrismaModel>
    _max?: NestedEnumtipo_lançamentoFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type criar_eventoCreateWithoutCriadorInput = {
    eventoid: number
    titulo: string
    image?: string | null
    descriçao: string
    criar_evento?: Date | string
    data_termino: Date | string
    ultima_mod?: Date | string
    registro?: registo_eventoCreateNestedManyWithoutEventoInput
  }

  export type criar_eventoUncheckedCreateWithoutCriadorInput = {
    eventoid: number
    titulo: string
    image?: string | null
    descriçao: string
    criar_evento?: Date | string
    data_termino: Date | string
    ultima_mod?: Date | string
    registro?: registo_eventoUncheckedCreateNestedManyWithoutEventoInput
  }

  export type criar_eventoCreateOrConnectWithoutCriadorInput = {
    where: criar_eventoWhereUniqueInput
    create: XOR<criar_eventoCreateWithoutCriadorInput, criar_eventoUncheckedCreateWithoutCriadorInput>
  }

  export type criar_eventoCreateManyCriadorInputEnvelope = {
    data: criar_eventoCreateManyCriadorInput | criar_eventoCreateManyCriadorInput[]
    skipDuplicates?: boolean
  }

  export type criar_eventoUpsertWithWhereUniqueWithoutCriadorInput = {
    where: criar_eventoWhereUniqueInput
    update: XOR<criar_eventoUpdateWithoutCriadorInput, criar_eventoUncheckedUpdateWithoutCriadorInput>
    create: XOR<criar_eventoCreateWithoutCriadorInput, criar_eventoUncheckedCreateWithoutCriadorInput>
  }

  export type criar_eventoUpdateWithWhereUniqueWithoutCriadorInput = {
    where: criar_eventoWhereUniqueInput
    data: XOR<criar_eventoUpdateWithoutCriadorInput, criar_eventoUncheckedUpdateWithoutCriadorInput>
  }

  export type criar_eventoUpdateManyWithWhereWithoutCriadorInput = {
    where: criar_eventoScalarWhereInput
    data: XOR<criar_eventoUpdateManyMutationInput, criar_eventoUncheckedUpdateManyWithoutCriadorInput>
  }

  export type criar_eventoScalarWhereInput = {
    AND?: criar_eventoScalarWhereInput | criar_eventoScalarWhereInput[]
    OR?: criar_eventoScalarWhereInput[]
    NOT?: criar_eventoScalarWhereInput | criar_eventoScalarWhereInput[]
    eventoid?: IntFilter<"criar_evento"> | number
    titulo?: StringFilter<"criar_evento"> | string
    image?: StringNullableFilter<"criar_evento"> | string | null
    descriçao?: StringFilter<"criar_evento"> | string
    criar_evento?: DateTimeFilter<"criar_evento"> | Date | string
    data_termino?: DateTimeFilter<"criar_evento"> | Date | string
    ultima_mod?: DateTimeFilter<"criar_evento"> | Date | string
    criadorid?: IntFilter<"criar_evento"> | number
  }

  export type userCreateWithoutEventoidInput = {
    user: string
    email: string
  }

  export type userUncheckedCreateWithoutEventoidInput = {
    userid?: number
    user: string
    email: string
  }

  export type userCreateOrConnectWithoutEventoidInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutEventoidInput, userUncheckedCreateWithoutEventoidInput>
  }

  export type registo_eventoCreateWithoutEventoInput = {
    nome: string
    sobrenome: string
    responsavel: string
    idade: number
    idade_responsavel: Date | string
    created_registro?: Date | string
    endereço: endereçoCreateNestedOneWithoutRegistroidInput
  }

  export type registo_eventoUncheckedCreateWithoutEventoInput = {
    registro_id?: number
    nome: string
    sobrenome: string
    responsavel: string
    idade: number
    idade_responsavel: Date | string
    created_registro?: Date | string
    endereçoid: string
  }

  export type registo_eventoCreateOrConnectWithoutEventoInput = {
    where: registo_eventoWhereUniqueInput
    create: XOR<registo_eventoCreateWithoutEventoInput, registo_eventoUncheckedCreateWithoutEventoInput>
  }

  export type registo_eventoCreateManyEventoInputEnvelope = {
    data: registo_eventoCreateManyEventoInput | registo_eventoCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutEventoidInput = {
    update: XOR<userUpdateWithoutEventoidInput, userUncheckedUpdateWithoutEventoidInput>
    create: XOR<userCreateWithoutEventoidInput, userUncheckedCreateWithoutEventoidInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutEventoidInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutEventoidInput, userUncheckedUpdateWithoutEventoidInput>
  }

  export type userUpdateWithoutEventoidInput = {
    user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateWithoutEventoidInput = {
    userid?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type registo_eventoUpsertWithWhereUniqueWithoutEventoInput = {
    where: registo_eventoWhereUniqueInput
    update: XOR<registo_eventoUpdateWithoutEventoInput, registo_eventoUncheckedUpdateWithoutEventoInput>
    create: XOR<registo_eventoCreateWithoutEventoInput, registo_eventoUncheckedCreateWithoutEventoInput>
  }

  export type registo_eventoUpdateWithWhereUniqueWithoutEventoInput = {
    where: registo_eventoWhereUniqueInput
    data: XOR<registo_eventoUpdateWithoutEventoInput, registo_eventoUncheckedUpdateWithoutEventoInput>
  }

  export type registo_eventoUpdateManyWithWhereWithoutEventoInput = {
    where: registo_eventoScalarWhereInput
    data: XOR<registo_eventoUpdateManyMutationInput, registo_eventoUncheckedUpdateManyWithoutEventoInput>
  }

  export type registo_eventoScalarWhereInput = {
    AND?: registo_eventoScalarWhereInput | registo_eventoScalarWhereInput[]
    OR?: registo_eventoScalarWhereInput[]
    NOT?: registo_eventoScalarWhereInput | registo_eventoScalarWhereInput[]
    registro_id?: IntFilter<"registo_evento"> | number
    nome?: StringFilter<"registo_evento"> | string
    sobrenome?: StringFilter<"registo_evento"> | string
    responsavel?: StringFilter<"registo_evento"> | string
    idade?: IntFilter<"registo_evento"> | number
    idade_responsavel?: DateTimeFilter<"registo_evento"> | Date | string
    created_registro?: DateTimeFilter<"registo_evento"> | Date | string
    endereçoid?: StringFilter<"registo_evento"> | string
    eventoid?: IntFilter<"registo_evento"> | number
  }

  export type registo_eventoCreateWithoutEndereçoInput = {
    nome: string
    sobrenome: string
    responsavel: string
    idade: number
    idade_responsavel: Date | string
    created_registro?: Date | string
    evento: criar_eventoCreateNestedOneWithoutRegistroInput
  }

  export type registo_eventoUncheckedCreateWithoutEndereçoInput = {
    registro_id?: number
    nome: string
    sobrenome: string
    responsavel: string
    idade: number
    idade_responsavel: Date | string
    created_registro?: Date | string
    eventoid: number
  }

  export type registo_eventoCreateOrConnectWithoutEndereçoInput = {
    where: registo_eventoWhereUniqueInput
    create: XOR<registo_eventoCreateWithoutEndereçoInput, registo_eventoUncheckedCreateWithoutEndereçoInput>
  }

  export type registo_eventoCreateManyEndereçoInputEnvelope = {
    data: registo_eventoCreateManyEndereçoInput | registo_eventoCreateManyEndereçoInput[]
    skipDuplicates?: boolean
  }

  export type registo_eventoUpsertWithWhereUniqueWithoutEndereçoInput = {
    where: registo_eventoWhereUniqueInput
    update: XOR<registo_eventoUpdateWithoutEndereçoInput, registo_eventoUncheckedUpdateWithoutEndereçoInput>
    create: XOR<registo_eventoCreateWithoutEndereçoInput, registo_eventoUncheckedCreateWithoutEndereçoInput>
  }

  export type registo_eventoUpdateWithWhereUniqueWithoutEndereçoInput = {
    where: registo_eventoWhereUniqueInput
    data: XOR<registo_eventoUpdateWithoutEndereçoInput, registo_eventoUncheckedUpdateWithoutEndereçoInput>
  }

  export type registo_eventoUpdateManyWithWhereWithoutEndereçoInput = {
    where: registo_eventoScalarWhereInput
    data: XOR<registo_eventoUpdateManyMutationInput, registo_eventoUncheckedUpdateManyWithoutEndereçoInput>
  }

  export type endereçoCreateWithoutRegistroidInput = {
    endereçoid?: string
    lote: string
    numero: number
    quadra: string
    bairro: string
    referencia: string
  }

  export type endereçoUncheckedCreateWithoutRegistroidInput = {
    endereçoid?: string
    lote: string
    numero: number
    quadra: string
    bairro: string
    referencia: string
  }

  export type endereçoCreateOrConnectWithoutRegistroidInput = {
    where: endereçoWhereUniqueInput
    create: XOR<endereçoCreateWithoutRegistroidInput, endereçoUncheckedCreateWithoutRegistroidInput>
  }

  export type criar_eventoCreateWithoutRegistroInput = {
    eventoid: number
    titulo: string
    image?: string | null
    descriçao: string
    criar_evento?: Date | string
    data_termino: Date | string
    ultima_mod?: Date | string
    criador: userCreateNestedOneWithoutEventoidInput
  }

  export type criar_eventoUncheckedCreateWithoutRegistroInput = {
    eventoid: number
    titulo: string
    image?: string | null
    descriçao: string
    criar_evento?: Date | string
    data_termino: Date | string
    ultima_mod?: Date | string
    criadorid: number
  }

  export type criar_eventoCreateOrConnectWithoutRegistroInput = {
    where: criar_eventoWhereUniqueInput
    create: XOR<criar_eventoCreateWithoutRegistroInput, criar_eventoUncheckedCreateWithoutRegistroInput>
  }

  export type endereçoUpsertWithoutRegistroidInput = {
    update: XOR<endereçoUpdateWithoutRegistroidInput, endereçoUncheckedUpdateWithoutRegistroidInput>
    create: XOR<endereçoCreateWithoutRegistroidInput, endereçoUncheckedCreateWithoutRegistroidInput>
    where?: endereçoWhereInput
  }

  export type endereçoUpdateToOneWithWhereWithoutRegistroidInput = {
    where?: endereçoWhereInput
    data: XOR<endereçoUpdateWithoutRegistroidInput, endereçoUncheckedUpdateWithoutRegistroidInput>
  }

  export type endereçoUpdateWithoutRegistroidInput = {
    endereçoid?: StringFieldUpdateOperationsInput | string
    lote?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    quadra?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
  }

  export type endereçoUncheckedUpdateWithoutRegistroidInput = {
    endereçoid?: StringFieldUpdateOperationsInput | string
    lote?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    quadra?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
  }

  export type criar_eventoUpsertWithoutRegistroInput = {
    update: XOR<criar_eventoUpdateWithoutRegistroInput, criar_eventoUncheckedUpdateWithoutRegistroInput>
    create: XOR<criar_eventoCreateWithoutRegistroInput, criar_eventoUncheckedCreateWithoutRegistroInput>
    where?: criar_eventoWhereInput
  }

  export type criar_eventoUpdateToOneWithWhereWithoutRegistroInput = {
    where?: criar_eventoWhereInput
    data: XOR<criar_eventoUpdateWithoutRegistroInput, criar_eventoUncheckedUpdateWithoutRegistroInput>
  }

  export type criar_eventoUpdateWithoutRegistroInput = {
    eventoid?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descriçao?: StringFieldUpdateOperationsInput | string
    criar_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    ultima_mod?: DateTimeFieldUpdateOperationsInput | Date | string
    criador?: userUpdateOneRequiredWithoutEventoidNestedInput
  }

  export type criar_eventoUncheckedUpdateWithoutRegistroInput = {
    eventoid?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descriçao?: StringFieldUpdateOperationsInput | string
    criar_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    ultima_mod?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorid?: IntFieldUpdateOperationsInput | number
  }

  export type criar_eventoCreateManyCriadorInput = {
    eventoid: number
    titulo: string
    image?: string | null
    descriçao: string
    criar_evento?: Date | string
    data_termino: Date | string
    ultima_mod?: Date | string
  }

  export type criar_eventoUpdateWithoutCriadorInput = {
    eventoid?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descriçao?: StringFieldUpdateOperationsInput | string
    criar_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    ultima_mod?: DateTimeFieldUpdateOperationsInput | Date | string
    registro?: registo_eventoUpdateManyWithoutEventoNestedInput
  }

  export type criar_eventoUncheckedUpdateWithoutCriadorInput = {
    eventoid?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descriçao?: StringFieldUpdateOperationsInput | string
    criar_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    ultima_mod?: DateTimeFieldUpdateOperationsInput | Date | string
    registro?: registo_eventoUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type criar_eventoUncheckedUpdateManyWithoutCriadorInput = {
    eventoid?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descriçao?: StringFieldUpdateOperationsInput | string
    criar_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    ultima_mod?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registo_eventoCreateManyEventoInput = {
    registro_id?: number
    nome: string
    sobrenome: string
    responsavel: string
    idade: number
    idade_responsavel: Date | string
    created_registro?: Date | string
    endereçoid: string
  }

  export type registo_eventoUpdateWithoutEventoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idade_responsavel?: DateTimeFieldUpdateOperationsInput | Date | string
    created_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    endereço?: endereçoUpdateOneRequiredWithoutRegistroidNestedInput
  }

  export type registo_eventoUncheckedUpdateWithoutEventoInput = {
    registro_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idade_responsavel?: DateTimeFieldUpdateOperationsInput | Date | string
    created_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    endereçoid?: StringFieldUpdateOperationsInput | string
  }

  export type registo_eventoUncheckedUpdateManyWithoutEventoInput = {
    registro_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idade_responsavel?: DateTimeFieldUpdateOperationsInput | Date | string
    created_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    endereçoid?: StringFieldUpdateOperationsInput | string
  }

  export type registo_eventoCreateManyEndereçoInput = {
    registro_id?: number
    nome: string
    sobrenome: string
    responsavel: string
    idade: number
    idade_responsavel: Date | string
    created_registro?: Date | string
    eventoid: number
  }

  export type registo_eventoUpdateWithoutEndereçoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idade_responsavel?: DateTimeFieldUpdateOperationsInput | Date | string
    created_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: criar_eventoUpdateOneRequiredWithoutRegistroNestedInput
  }

  export type registo_eventoUncheckedUpdateWithoutEndereçoInput = {
    registro_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idade_responsavel?: DateTimeFieldUpdateOperationsInput | Date | string
    created_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    eventoid?: IntFieldUpdateOperationsInput | number
  }

  export type registo_eventoUncheckedUpdateManyWithoutEndereçoInput = {
    registro_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idade_responsavel?: DateTimeFieldUpdateOperationsInput | Date | string
    created_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    eventoid?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}