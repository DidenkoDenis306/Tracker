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

  /*  if (elem[index].classList.contains('checked'))
    elem[index].classList.remove('checked') && elem[index].classList.add('day-btn');
  else elem[index].classList.add('checked');*/



  const progressBarElem = document.querySelector('.progress-bar > div');
  progressBarElem.textContent = 100 + '%';
  progressBarElem.style.width = 100 + '%';
  

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
        ? `<button class="bg-black rounded-full h-12 w-12 flex items-center justify-center" onclick="toggleHabit('${habitId}', '${habitName}', '${index}')"><img src="./src/images/check.svg" width="25" alt=""></button>`
        : `<button class="  rounded-full border-2 bprder-solid border-dashed border-black opacity-50 text-lg uppercase font-semibold h-12 w-12 flex items-center justify-center" onclick="toggleHabit('${habitId}', '${habitName}', '${index}')">
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
