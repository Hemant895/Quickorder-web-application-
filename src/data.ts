import { Food } from "./app/shared/models/Food"

export const sample_foods:Food[]=[
//     {
//         "id": "1855",
//         "name": "Margherita Pizza",
//         "price": 12.99,
//         "tag": ["vegetarian", "pizza"],
//         "favorite": true,
//         "stars": 4,
//         "imgurl": "https://jackscanada.ca/wp-content/uploads/2021/06/pizza-margherita-margarita-mozzarella-cheese-tomato-olive-italian-pizza-pizza-margherita-margarita-mozzarella-133884612.jpg",
//         "origins": ["Italy"],
//         "cooktime": "20 minutes"
//       },
//       {
//         "id": "24u4u",
//         "name": "Sashimi Platter",
//         "price": 24.99,
//         "tag": ["sushi", "Japanese"],
//         "favorite": false,
//         "stars": 4,
//         "imgurl": "https://www.sushiatwork.com.au/wp-content/uploads/2020/01/Deluxe-Rainbow-Sushi-Sashimi-Platter-scaled.jpg",
//         "origins": ["Japan"],
//         "cooktime": "15 minutes"
//       },
//       {
//         "id": "37477",
//         "name": "Classic Cheeseburger",
//         "price": 9.99,
//         "tag": ["burger", "American"],
//         "favorite": true,
//         "stars": 4,
//         "imgurl": "https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_282247995-scaled.jpeg",
//         "origins": ["United States"],
//         "cooktime": "10 minutes"
//       },
//       {
//         "id": "444y",
//         "name": "Tom Yum Soup",
//         "price": 15.99,
//         "tag": ["soup", "Thai"],
//         "favorite": false,
//         "stars": 4,
//         "imgurl": "https://th.bing.com/th/id/R.c83de4b6dc7cc5557c1c7b0f093b1f0b?rik=x2TAYNUzIWjfUQ&riu=http%3a%2f%2fcarnivalmunchies.com%2fwp-content%2fuploads%2f2015%2f09%2ftom-yum-1.jpg&ehk=pFErqXicGGo8N9hhDb50pb6PpLV6VEQmIptXl7ldXZ0%3d&risl=&pid=ImgRaw&r=0",
//         "origins": ["Thailand"],
//         "cooktime": "30 minutes"
//       },
//       {
//         "id": "4747",
//         "name": "Taco Platter",
//         "price": 8.99,
//         "tag": ["tacos", "Mexican"],
//         "favorite": true,
//         "stars": 4,
//         "imgurl": "https://reluctantentertainer.com/wp-content/uploads/2019/05/Easy-Taco-Recipe-Dinner-Board-4.jpg",
//         "origins": ["Mexico"],
//         "cooktime": "25 minutes"
//       },
//       {
//         "id": "189",
//         "name": "Margherita Pizza",
//         "price": 12.99,
//         "tag": ["vegetarian", "pizza"],
//         "favorite": true,
//         "stars": 4,
//         "imgurl": "https://jackscanada.ca/wp-content/uploads/2021/06/pizza-margherita-margarita-mozzarella-cheese-tomato-olive-italian-pizza-pizza-margherita-margarita-mozzarella-133884612.jpg",
//         "origins": ["Italy"],
//         "cooktime": "20 minutes"
//       },
//       {
//         "id": "205",
//         "name": "Sashimi Platter",
//         "price": 24.99,
//         "tag": ["sushi", "Japanese"],
//         "favorite": false,
//         "stars": 4,
//         "imgurl": "https://www.sushiatwork.com.au/wp-content/uploads/2020/01/Deluxe-Rainbow-Sushi-Sashimi-Platter-scaled.jpg",
//         "origins": ["Japan"],
//         "cooktime": "15 minutes"
//       },
//       {
//         "id": "300",
//         "name": "Classic Cheeseburger",
//         "price": 9.99,
//         "tag": ["burger", "American"],
//         "favorite": true,
//         "stars": 4,
//         "imgurl": "https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_282247995-scaled.jpeg",
//         "origins": ["United States"],
//         "cooktime": "10 minutes"
//       },
//       {
//         "id": "400",
//         "name": "Tom Yum Soup",
//         "price": 15.99,
//         "tag": ["soup", "Thai"],
//         "favorite": false,
//         "stars": 4,
//         "imgurl": "https://th.bing.com/th/id/R.c83de4b6dc7cc5557c1c7b0f093b1f0b?rik=x2TAYNUzIWjfUQ&riu=http%3a%2f%2fcarnivalmunchies.com%2fwp-content%2fuploads%2f2015%2f09%2ftom-yum-1.jpg&ehk=pFErqXicGGo8N9hhDb50pb6PpLV6VEQmIptXl7ldXZ0%3d&risl=&pid=ImgRaw&r=0",
//         "origins": ["Thailand"],
//         "cooktime": "30 minutes"
//       },
//       {
//         "id": "500",
//         "name": "Taco Platter",
//         "price": 8.99,
//         "tag": ["tacos", "Mexican"],
//         "favorite": true,
//         "stars": 4,
//         "imgurl": "https://reluctantentertainer.com/wp-content/uploads/2019/05/Easy-Taco-Recipe-Dinner-Board-4.jpg",
//         "origins": ["Mexico"],
//         "cooktime": "25 minutes"
//       }
// ,
//       {
//         "id": "100",
//         "name": "Margherita Pizza",
//         "price": 12.99,
//         "tag": ["vegetarian", "pizza"],
//         "favorite": true,
//         "stars": 4,
//         "imgurl": "https://jackscanada.ca/wp-content/uploads/2021/06/pizza-margherita-margarita-mozzarella-cheese-tomato-olive-italian-pizza-pizza-margherita-margarita-mozzarella-133884612.jpg",
//         "origins": ["Italy"],
//         "cooktime": "20 minutes"
//       },
//       {
//         "id": "23",
//         "name": "Sashimi Platter",
//         "price": 24.99,
//         "tag": ["sushi", "Japanese"],
//         "favorite": false,
//         "stars": 4,
//         "imgurl": "https://www.sushiatwork.com.au/wp-content/uploads/2020/01/Deluxe-Rainbow-Sushi-Sashimi-Platter-scaled.jpg",
//         "origins": ["Japan"],
//         "cooktime": "15 minutes"
//       },
//       {
//         "id": "32",
//         "name": "Classic Cheeseburger",
//         "price": 9.99,
//         "tag": ["burger", "American"],
//         "favorite": true,
//         "stars": 4,
//         "imgurl": "https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_282247995-scaled.jpeg",
//         "origins": ["United States"],
//         "cooktime": "10 minutes"
//       },
//       {
//         "id": "42",
//         "name": "Tom Yum Soup",
//         "price": 15.99,
//         "tag": ["soup", "Thai"],
//         "favorite": false,
//         "stars": 4,
//         "imgurl": "https://th.bing.com/th/id/R.c83de4b6dc7cc5557c1c7b0f093b1f0b?rik=x2TAYNUzIWjfUQ&riu=http%3a%2f%2fcarnivalmunchies.com%2fwp-content%2fuploads%2f2015%2f09%2ftom-yum-1.jpg&ehk=pFErqXicGGo8N9hhDb50pb6PpLV6VEQmIptXl7ldXZ0%3d&risl=&pid=ImgRaw&r=0",
//         "origins": ["Thailand"],
//         "cooktime": "30 minutes"
//       },
//       {
//         "id": "51",
//         "name": "Taco Platter",
//         "price": 8.99,
//         "tag": ["tacos", "Mexican"],
//         "favorite": true,
//         "stars": 4,
//         "imgurl": "https://reluctantentertainer.com/wp-content/uploads/2019/05/Easy-Taco-Recipe-Dinner-Board-4.jpg",
//         "origins": ["Mexico"],
//         "cooktime": "25 minutes"
//       },

//       {
//         "id": "11",
//         "name": "Margherita Pizza",
//         "price": 12.99,
//         "tag": ["vegetarian", "pizza"],
//         "favorite": true,
//         "stars": 4,
//         "imgurl": "https://jackscanada.ca/wp-content/uploads/2021/06/pizza-margherita-margarita-mozzarella-cheese-tomato-olive-italian-pizza-pizza-margherita-margarita-mozzarella-133884612.jpg",
//         "origins": ["Italy"],
//         "cooktime": "20 minutes"
//       },
//       {
//         "id": "22",
//         "name": "Sashimi Platter",
//         "price": 24.99,
//         "tag": ["sushi", "Japanese"],
//         "favorite": false,
//         "stars": 4,
//         "imgurl": "https://www.sushiatwork.com.au/wp-content/uploads/2020/01/Deluxe-Rainbow-Sushi-Sashimi-Platter-scaled.jpg",
//         "origins": ["Japan"],
//         "cooktime": "15 minutes"
//       },
//       {
//         "id": "30",
//         "name": "Classic Cheeseburger",
//         "price": 9.99,
//         "tag": ["burger", "American"],
//         "favorite": true,
//         "stars": 4,
//         "imgurl": "https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_282247995-scaled.jpeg",
//         "origins": ["United States"],
//         "cooktime": "10 minutes"
//       },
//       {
//         "id": "40",
//         "name": "Tom Yum Soup",
//         "price": 15.99,
//         "tag": ["soup", "Thai"],
//         "favorite": false,
//         "stars": 4,
//         "imgurl": "https://th.bing.com/th/id/R.c83de4b6dc7cc5557c1c7b0f093b1f0b?rik=x2TAYNUzIWjfUQ&riu=http%3a%2f%2fcarnivalmunchies.com%2fwp-content%2fuploads%2f2015%2f09%2ftom-yum-1.jpg&ehk=pFErqXicGGo8N9hhDb50pb6PpLV6VEQmIptXl7ldXZ0%3d&risl=&pid=ImgRaw&r=0",
//         "origins": ["Thailand"],
//         "cooktime": "30 minutes"
//       },
//       {
//         "id": "59",
//         "name": "Taco Platter",
//         "price": 8.99,
//         "tag": ["tacos", "Mexican"],
//         "favorite": true,
//         "stars": 4,
//         "imgurl": "https://reluctantentertainer.com/wp-content/uploads/2019/05/Easy-Taco-Recipe-Dinner-Board-4.jpg",
//         "origins": ["Mexico"],
//         "cooktime": "25 minutes"
//       }

]

