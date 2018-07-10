var movies_array = [
    {title:"clerks",director:"frank herbert",releasedate:"1994"},
    {title:"bullitt",director:"peter yates",releasedate:"1968"},
    {title:"gran torino",director:"clint eastwood",releasedate:"2008"},
    {title:"logans run",director:"michael anderson",releasedate:"1976"},
    {title:"clerks",director:"lawrence kasdan",releasedate:"1985"},
    {title:"silverado",director:"lawrence kasdan",releasedate:"1985"}
];

exports.getAll = () => {
    return movies_array;
}

//console.log(this.getAll());
console.log();
console.log();
console.log();
console.log();


exports.get = (title) => {
    return movies_array.find((item) => {
    return item.type === title;
    });
};


exports.delete = (title) => {
    // retain array length for later comparison after array modification
    const oldSize = movies_array.length;
    movies_array = movies_array.filter((item) => {
        return item.title !== title;
    });
    // if old & new array lengths differ, item was deleted
    return {deleted: oldSize !== movies_array.length, total: movies_array.length };
}
//console.log(this.delete("clerks"));
//console.log(this.getAll());



exports.add = (new_movies_array) => {
    const oldLength = movies_array.length;
    // use existing get() method to check if book already in our list
    let found = this.get(new_movies_array.title);
    if (!found) {
        movies_array.push(new_movies_array);
    }
    // if old & new array lengths differ, item was added
    return {added: oldLength !== movies_array.length, total: movies_array.length };
};

//console.log(this.add({title:"clerks",director:"frank herbert",releasedate:"1994"}));
//console.log(this.getAll());

//console.log(movies_array);



