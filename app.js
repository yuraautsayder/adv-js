// **Описание**: Реализуйте функцию, которая принимает массив
// чисел и возвращает объект со статистикой: минимальное,
// максимальное, среднее значение и количество элементов.
// **Входные данные**: numbers: массив чисел
// **Выходные данные**: объект с полями { min, max, average, count }
// **Ограничения**: 1 <= numbers.length <= 1000,
// -1000 <= numbers[i] <= 1000
// **Примеры**:
// Input: [1, 5, 3, 9, 2]
// Output: { min: 1, max: 9, average: 4, count: 5 }
//
// Input: [-2, 0, 4]
// Output: { min: -2, max: 4, average: 0.67, count: 3 }

const numbers = [1, 5, 3, 9, 2];
function calculateStats(numbers) {
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  let count = numbers.length;
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  let avg = Math.round(Number((sum / count).toFixed(2)));
  return {
    min: min,
    max: max,
    average: avg,
    count: count,
  };
}
calculateStats(numbers);
