
function formatValue(value: string | number | boolean): string | number | boolean {

    if (typeof value === "string") {
        return value.toUpperCase()
    }
    if (typeof value === 'number') {
        return value * 10;
    }
    if (typeof value === 'boolean') {
        return !value
    } 
    else {
        throw new Error("Invalid type");
    }


}

formatValue(true); 

function getLength (value: string | any[]) : number {
    if(typeof value === 'string'){
        return value.length;
    }
    if(Array.isArray(value)){
        return value.length
    }
    throw new Error('your type have problem')
}
getLength([10, 20, 30, 40,3,7,1,'yy']);

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}
const persons = new Person('tom', 12)
persons.getDetails();



type items = {
    title: string,
    rating: number
}
function filterByRating (items: items[]): items[]{
    const filterItems = items.filter(item =>item.rating >= 4);
    return filterItems;

}
const books = [
  { title: 'Nor', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

filterByRating(books);



type UserType = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}
function filterActiveUsers(users: UserType[]): UserType[] {

    const filterUser = users.filter(user => user.isActive === true)
    return filterUser





}
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

filterActiveUsers(users);

interface Book  {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean;
}

function printBookDetails (book: Book ): any {
    const availability = book.isAvailable ? 'Yes' : 'No';
    const view =  (`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`)

  return view;

}

const myBook: Book  = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};
printBookDetails (myBook)



function getUniqueValues(
    arr1: (string | number)[],
    arr2: (string | number)[]
): (string | number)[] {

    const resultValues: (string | number)[] = [];
    for (let i = 0; i < arr1.length; i++) {
        const value = arr1[i];
        if (value !== undefined && resultValues.indexOf(value) === -1) {
            resultValues.push(value);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        const value = arr2[i];
        if (value !== undefined && resultValues.indexOf(value) === -1) {
            resultValues.push(value);
        }
    }

    return resultValues;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 10, 7];

getUniqueValues(array1, array2);



type Product = {
    name: string,
    price: number,
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) {
        return 0;
    }

    return products
        .map(product => {
            const basePrice = product.price * product.quantity;
            if (product.discount) {
                const discountAmount = basePrice * (product.discount / 100);
                return basePrice - discountAmount;
            }
            return basePrice;
        })
        .reduce((total, price) => total + price, 0);
}


const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

calculateTotalPrice(products); 
