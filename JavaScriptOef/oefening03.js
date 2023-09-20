let food =
    [
        "Chicken Tikka",
        "Kapsalon",
        "Pizza",
        "Kip Sate",
        "Broodje Kroket",
    ];

food.forEach((food) => {
    console.log(food);
});

alert(`aantal food items: ${food.length}`);

for (let i = 0; i < food.length; i++) {
    if (food[i] === "Pizza") {
        food.splice(i, 1);
    }
}

console.log(food);
