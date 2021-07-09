export default interface GenericUseCase<T> {
  execute(domainEntity: T): void;
}