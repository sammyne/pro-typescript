// Listing 1-88. Generic classes

namespace Listing88 {
  class DomainId<T> {
    constructor(private id: T) {}

    get value(): T {
      return this.id
    }
  }

  class OrderId extends DomainId<number> {
    constructor(orderIdValue: number) {
      super(orderIdValue)
    }
  }

  class AccountId extends DomainId<string> {
    constructor(accountIdValue: string) {
      super(accountIdValue)
    }
  }

  // Examples of compatibility
  function onlyAcceptsOrderId(orderId: OrderId) {
    // ...
  }

  function acceptsAnyDomainId(id: DomainId<any>) {
    // ...
  }

  const accountId = new AccountId("GUID-1")
  const orderId = new OrderId(5)

  // Error: Argument of type 'AccountId' is not assignable to parameter of type 'OrderId'
  //onlyAcceptsOrderId(accountId)

  // OK
  onlyAcceptsOrderId(orderId)
  // OK
  acceptsAnyDomainId(accountId)
}
