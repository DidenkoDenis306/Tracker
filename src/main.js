const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

const habits = [
  {
    id: 1,
    img: "./src/images/drink.svg",
    name: "No coffeine",
    completed: [false, false, false, false, false, false, false],
  },
];

const toggleHabit = (habitId, habitName, index) => {
  const elem = document.querySelectorAll(
    `[data-id = '${habitId}'] .habit-plan button `
  );

  const countDays = habits.length * 7;
  const percentOneDay = 100 / countDays;

  const progressBarElem = document.querySelector(".progress-bar > div");
  const isChecked = elem[index].classList.contains("checked");

  if (isChecked) {
    elem[index].classList.remove("checked");
  } else {
    elem[index].classList.add("checked");
  }

  const currentPercent = progressBarElem.textContent.replace("%", "");

  let percent = isChecked
    ? +currentPercent - percentOneDay
    : +currentPercent + percentOneDay;

  if (percent > 98) percent = 100;

  progressBarElem.textContent = percent.toFixed(0) + "%";
  progressBarElem.style.width = percent + "%";

  render(
    habits.map((habit) => {
      if (habit.name === habitName)
        habit.completed[index] = !habit.completed[index];
      return habit;
    })
  );
};

const getWeekDaysElement = (habitId, habitName, completed) =>
  weekDays
    .map((name, index) =>
      completed[index]
        ? `<button class="checked" onclick="toggleHabit('${habitId}', '${habitName}', '${index}')"><img src="./src/images/check.svg" width="25" alt=""></button>`
        : `<button  onclick="toggleHabit('${habitId}', '${habitName}', '${index}')">
${name}</button>`
    )
    .join("");

const getHabitElement = ({
  id,
  img,
  name,
  completed,
}) => `<div class='mb-8 habit' data-id='${id}'><div class='habit-header'>
<img src='${img}' class="rounded-2xl border-2 border-[@E2E4DD] border-solid" width='70' alt=''><span class='font-semibold text-2xl'>
${name}</span></div><div class='habit-plan'>${getWeekDaysElement(
  id,
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

/*Add new habit */

const openForm = () => {
  document.querySelector(".form").classList.add("open");
};

const addNewHabit = () => {
  const inputElem = document.querySelector(".form input");
  const value = inputElem.value;
  if (!value) {
    alert("Habit name is required!");
    return;
  }

  habits.unshift({
    id: habits.length + 1,
    img: "./src/images/drink.svg",
    name: value,
    completed: [false, false, false, false, false, false, false],
  });

  render(habits);

  document.querySelector(".form").classList.remove("open");
  inputElem.value = "";
};

