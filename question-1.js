// Question #1: Shipping Cost Calculator

function calculateShippingCost(orders) {
  // เริ่มเขียนโค้ดตรงนี้
  const shippingCost = orders.map((order) => {
    if (order.total >= 6000) {
      return `Order Id ${order.orderId}: Shipping is free.`;
    } else if (order.total >= 3000) {
      return `Order Id ${order.orderId}: Shipping cost is 250 Baht.`;
    } else {
      return `Order Id ${order.orderId}: Shipping cost is 500 Baht.`;
    }
  });
  return shippingCost
  }
// ตัวอย่างการใช้งาน
const orders = [
  {
    orderId: 1,
    total: 6000,
  },
  {
    orderId: 2,
    total: 3000,
  },
  {
    orderId: 3,
    total: 150,
  },
];

console.log(calculateShippingCost(orders));
// Order Id 1: "Shipping is free."
// Order Id 2: "Shipping cost is 250 Baht."
// Order Id 3: "Shipping cost is 500 Baht."
