// выборка по тегу
console.log($("a"));

// выборка по классу
console.log($(".button"));

// выборка по ID
console.log($("#myButton"));

// вложенность
console.log($(".menu li"));

// выборка дочерних элементов
console.log($("section > div"));

// выборка соседних элементов
console.log($("img + h2"));

// выборка по атрибуту
console.log($("input[type=text]"));

// Фильтры
// выборка четных (возвращает нечетные)
console.log($("li:even"));

// выворка нечетных (возрвращает четные)
console.log($("li:odd"));

// фильтр исключения
console.log($("img:not(.logo img)"));

// фильтр на содержание определенных элементов
console.log($("li:has(a)"));

// фильтр на определенный контент
console.log($("p:contains(client)"));

// фильтр первого элемента
console.log($("li:first"));

// фильтр последнего элемента
console.log($("li:last"));
