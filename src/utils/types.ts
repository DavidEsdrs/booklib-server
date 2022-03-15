/**
 * 
 * 
 * 
 * 
 * 
 * Types came from type-fest
 * 
 * 
 * 
 * 
 * 
 * 
 */

type Simplify<T> = {[KeyType in keyof T]: T[KeyType]};

type IsEqual<T, U> =
	(<G>() => G extends T ? 1 : 2) extends
	(<G>() => G extends U ? 1 : 2)
		? true
		: false;


type Filter<KeyType, ExcludeType> = IsEqual<KeyType, ExcludeType> extends true ? never : (KeyType extends ExcludeType ? never : KeyType);

type Except<ObjectType, KeysType extends keyof ObjectType> = {
	[KeyType in keyof ObjectType as Filter<KeyType, KeysType>]: ObjectType[KeyType];
};

type Merge_<FirstType, SecondType> = Except<FirstType, Extract<keyof FirstType, keyof SecondType>> & SecondType;

export type Merge<FirstType, SecondType> = Simplify<Merge_<FirstType, SecondType>>;