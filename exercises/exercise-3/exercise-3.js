let order = [
  { itemName: 'Hot cakes', quantity: 1, unitPrice: 2.29 },
  { itemName: 'Apple Pie', quantity: 2, unitPrice: 1.39 },
  { itemName: 'Egg McMuffin', quantity: 1, unitPrice: 2.8 },
  { itemName: 'Sausage McMuffin', quantity: 1, unitPrice: 3.0 },
  { itemName: 'Hot Coffee', quantity: 2, unitPrice: 1.0 },
  { itemName: 'Hash Brown', quantity: 4, unitPrice: 0.4 }
];

const receipt = (order) => {
  console.log(`QTY     ITEM                TOTAL`);
  order.forEach(({ itemName, quantity, unitPrice }) => {
    console.log(
      `${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${unitPrice}`
    );
  });
  console.log(``);
  console.log(
    `Total: ${order.reduce(
      (a, { quantity, unitPrice }) => a + quantity * unitPrice,
      0
    )}`
  );
};

receipt(order);
