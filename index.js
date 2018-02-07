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
    this.id = customerId++
    this.name = name
    if(employer) {
      this.employerId = employer.id
    }
    store.customers.push(this)
  }
  setEmployer(employer) {
    this.employerId = employer.id
  }
  meals() {
    return store.meals
  }
  deliveries() {
    return store.deliveries
  }
  totalSpent() {
    return store.meals.reduce( (a, b) => a + b );
  }
}

class Meal {
  constructor(title, price) {
    this.id = mealId++
    this.title = title
    this.price = price
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
    if(meal) {
      this.mealId = meal.id
    }
    if(customer) {
      this.customerId = customer.id
    }
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
    store.employers.push(this)
  }
  employees(n) {
    store.employees.push(n)
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
