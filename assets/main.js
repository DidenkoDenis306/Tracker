const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

const habits = [
  {
    img: "./assets/images/drink.svg",
    name: "No coffeine",
    completed: [true, false, true, false, false, false, false],
  },
];

const toggleHabit = (habitName, index) => {
  render(
    habits.map((habit) => {
      if (habit.name === habitName)
        habit.completed[index] = !habit.completed[index];
      return habit;
    })
  );
};

const getWeekDaysElement = (habitName, completed) =>
  weekDays
    .map((name, index) =>
      completed[index]
        ? `<button class="bg-black rounded-full h-12 w-12 flex items-center justify-center" onclick="toggleHabit('${habitName}', '${index}')"><img src="./assets/images/check.svg" width="25" alt=""></button>`
        : `<button class=" rounded-full border-2 bprder-solid border-dashed border-black opacity-50 text-lg uppercase font-semibold h-12 w-12 flex items-center justify-center" onclick="toggleHabit('${habitName}', '${index}')">
${name}</button>`
    )
    .join("");

const getHabitElement = ({
  img,
  name,
  completed,
}) => `<div class='mb-8 habit'><div class='habit-header'>
<img src='${img}' class="rounded-2xl border-2 border-[@E2E4DD] border-solid" width='70' alt=''><span class='font-semibold text-2xl'>
${name}</span></div><div class='habit-plan'>${getWeekDaysElement(
  name,
  completed
)}</div></div>`;

const render = (habits) => {
  const habitContainer = document.querySelector(".habit-container");
  habitContainer.innerHTML = habits
    .map((habit) => getHabitElement(habit))
    .join("");
};

render(habits);
