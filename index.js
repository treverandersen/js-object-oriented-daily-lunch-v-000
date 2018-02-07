let store = {
  customers: [],
  meals: [],
  deliveries: [],
  employers: [],
  employees: []
};

let customerId = 0
let mealId = 0
let employerId = 0
let deliveryId = 0

class Customer {
  constructor(name, employer) {
    this.name = name
    this.id = customerId++
    store.customers.push(this)
  }
  meals() {
    return store.meals
  }
  deliveries() {
    return store.deliveries
  }
  totalSpent() {
    return this.meals().map(meal => {
      return meal.price;
    });
  }
}

class Meal {
  constructor(title, price) {
    this.title = title
    this.price = price
    this.id = mealId++
    store.meals.push(this)
  }
  deliveries() {
    return store.deliveries
  }
  customers() {
    return store.customers
  }
  static byPrice() {
    return store.meals.sort( (obj1, obj2) => {
      return obj2.price - obj1.price;
    })
  }
}

class Delivery {
  constructor(meal = {}, customer = {}) {
    this.id = deliveryId++
    this.mealId = meal.id
    this.customerId = customer.id
    store.deliveries.push(this)
  }
  meal() {
    return store.meals.find(meal => {
      return meal.id == this.mealId;
    });
  }
  customer() {
    return store.customers.find(customer => {
      return customer.id == this.customerId;
    });
  }
}

class Employer {
  constructor(name) {
    this.name = name
    this.id = employerId++
    store.employees.push(this)
  }
  employees() {
    return store.employees
  }
  deliveries() {
    return store.deliveries
  }
  meals() {
    return store.meals
  }
  mealTotals() {
    return store.meals
  }
}
