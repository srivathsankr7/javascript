var cars = [{name: 'duster', type : 'suv'},{name: 'cruze', type:'sedan'}, {name:'sail', type : 'compact sedan'}, { name: 'swift', type:'hatchback'}]

console.log('Before sorting : ' + JSON.stringify(cars));
cars.sort(function(a,b) {
    if(a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    else return 0;
});
console.log('After sorting : ' + JSON.stringify(cars));