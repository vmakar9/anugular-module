export interface ApyPayload<T>{
  info:{count:number,pages:number},
  results:T[]
}
