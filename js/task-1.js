// const mainCategories = document.querySelector('#categories');
const categoriesList = document.querySelectorAll('.item');

console.log(`Number of categories : ${categoriesList.length}`);

categoriesList.forEach(item => {
    console.log(`Category : ${item.querySelector('h2').textContent}`);
    console.log(`Elements : ${item.querySelectorAll('li').length}`);
})