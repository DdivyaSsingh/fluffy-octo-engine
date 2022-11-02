let properties = [];

const property1 = {
    Name : "Kingswood End",
    location : {
        Street :  "2098 Caynor Circle",
        City :  "Red Bank",
        State :   "New Jersey",
        Zip_code : "07701",
        Country : "USA"
    },
    rentPrice : 2500,
    propertyType : "Street-House",
    currentlyAvailable : true,
    imageUrl : "https://image.shutterstock.com/image-photo/streets-houses-typical-architecture-village-260nw-1899746290.jpg" ,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 4,
        Washroom : 3,
        Floor : 2,
        Kitchen : 2
    },
    area : 150
  };
  
const property2 = {
    Name : "The Old Gatehouse",
    location : {
        Street :  "70 Gordon Street",
        City :  "New York",
        State :   "California",
        Zip_code : "91786",
        Country : "USA"
    },
    rentPrice : 800,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 2,
        Washroom : 2,
        Floor : 1,
        Kitchen : 1
    },
    area : 100,
    imageUrl : "https://images.unsplash.com/photo-1524971205-aba7848ea492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  };

  const property10 = {
    Name : "Pear House",
    location : {
        Street :  "4820 Bassell Avenue",
        City :  "New York",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 900,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 3,
        Washroom : 3,
        Floor : 2,
        Kitchen : 1
    },
    area : 130,
    imageUrl : "https://images.unsplash.com/photo-1605426052919-cb1a2dc806fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RyZWV0JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  };

  const property11 = {
    Name : "Frosty End",
    location : {
        Street :  "4061 Edsel Road",
        City :  "New York",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 1700,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 4,
        Washroom : 4,
        Floor : 2,
        Kitchen : 1
    },
    area : 200,
    imageUrl : "https://images.unsplash.com/photo-1557434440-27ba0f1654e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0cmVldCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  };

  const property12 = {
    Name : "Knowle End",
    location : {
        Street :  "4493 Bagwell Avenue",
        City :  "New York",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 2500,
    propertyType : "City Villa",
    currentlyAvailable : true,
    availableFrom : new Date("2022-12-01"),
    structure : {
        Bedrooms : 2,
        Washroom : 2,
        Floor : 1,
        Kitchen : 1
    },
    area : 280,
    imageUrl : "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  };

  const property13 = {
    Name : "Lake View",
    location : {
        Street :  "4867 Goldleaf Lane",
        City :  "New York",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 3600,
    propertyType : "City-Villa",
    currentlyAvailable : true,
    availableFrom : new Date("2023-01-01"),
    structure : {
        Bedrooms : 4,
        Washroom : 4,
        Floor : 2,
        Kitchen : 1
    },
    area : 400,
    imageUrl : "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  };
  const property14 = {
    Name : "Pbsrtlands",
    location : {
        Street :  "4104 Johnson Street",
        City :  "New York",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 4100,
    propertyType : "City Villa",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 4,
        Washroom : 4,
        Floor : 2,
        Kitchen : 1
    },
    area : 500,
    imageUrl : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  };
  const property15 = {
    Name : "Sailsis",
    location : {
        Street :  "4626 Public Works Drived",
        City :  "New York",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 600,
    propertyType : "Room Rentals",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 1,
        Washroom : 1,
        Floor : 1,
        Kitchen : 1
    },
    area : 100,
    imageUrl : "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVudGFsJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  };
const property3 = {
    Name : "Koala's House",
    location : {
        Street :  "3979 Boone Street",
        City :  "Corpus Christi",
        State :   "Texas",
        Zip_code : "78476",
        Country : "USA"
    },
    rentPrice : 5000,
    propertyType : "City Villa",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 5,
        Washroom : 6,
        Floor : 3,
        Kitchen : 3
    },
    area : 400,
    imageUrl : "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlbnRhbCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  };

  const property4 = {
    Name : "River View",
    location : {
        Street :  "193 Coolidge Street",
        City :  "Big Sky",
        State :   "Montana",
        Zip_code : "59716",
        Country : "USA"
    },
    rentPrice : 1300,
    propertyType : "Apartments",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 2,
        Washroom : 2,
        Floor : 1,
        Kitchen : 1
    },
    area : 80,
    imageUrl : "https://images.unsplash.com/photo-1602082550187-3f954840a0f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlbnRhbCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  };

  const property5 = {
    Name : "Applelands",
    location : {
        Street :  "2426 Patterson Street",
        City :  "Houston",
        State :   "Texas",
        Zip_code : "77002",
        Country : "USA"
    },
    rentPrice : 500,
    propertyType : "Room Rentals",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 1,
        Washroom : 1,
        Floor : 1,
        Kitchen : 1
    },
    area : 50,
    imageUrl : "https://media.istockphoto.com/photos/mid-adult-couple-are-considering-purchasing-a-new-home-for-sale-sign-picture-id1329584004?b=1&k=20&m=1329584004&s=170667a&w=0&h=QkMugTTotqXq8igtO8AfB28a0NZTPZY8ynPkwm-Kmfw="
  };

  const property6 = {
    Name : "The Apples",
    location : {
        Street :  "377 Pearcy Avenue",
        City :  "Miami",
        State :   "Florida",
        Zip_code : "33111",
        Country : "USA"
    },
    rentPrice : 1000,
    propertyType : "Apartments",
    currentlyAvailable : false,
    availableFrom : new Date("2022-12-01"),
    structure : {
        Bedrooms : 3,
        Washroom : 3,
        Floor : 1,
        Kitchen : 1
    },
    area : 130,
    imageUrl : "https://media.istockphoto.com/photos/cityscape-of-group-of-residential-apartment-buildings-picture-id1364145382?b=1&k=20&m=1364145382&s=170667a&w=0&h=2pxeAb-gRbcN8MYK99Au3iKWVqitTNUEtDiYOf5xQ0U="
  };

  const property7 = {
    Name : "Blond Lodge",
    location : {
        Street :  "3076 Roosevelt Wilson Lane",
        City :  "Lovell",
        State :   "Wyoming",
        Zip_code : "82431",
        Country : "USA"
    },
    rentPrice : 700,
    propertyType : "Room Rentals",
    currentlyAvailable : false,
    availableFrom : new Date("2022-11-15"),
    structure : {
        Bedrooms : 1,
        Washroom : 1,
        Floor : 1,
        Kitchen : 1
    },
    area : 60,
    imageUrl : "https://media.istockphoto.com/photos/for-rent-real-estate-sign-in-front-of-house-picture-id534033955?b=1&k=20&m=534033955&s=170667a&w=0&h=yMjw_zMUNxAcxBVxGgPD_1koxNI6uszhACeUu8AEq8I="
  };

  const property8 = {
    Name : "Seaside",
    location : {
        Street :  "915 Spinnaker Lane",
        City :  "Chebanse",
        State :   "Illinois",
        Zip_code : "60922",
        Country : "USA"
    },
    rentPrice : 3000,
    propertyType : "City Villa",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 4,
        Washroom : 3,
        Floor : 2,
        Kitchen : 2
    },
    area : 350,
    imageUrl : "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlbnRhbCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  };

  const property9 = {
    Name : "Fir End",
    location : {
        Street :  "4801 Flinderation Road",
        City :  "Bellwood",
        State :   "Illinois",
        Zip_code : "60104",
        Country : "USA"
    },
    rentPrice : 3500,
    propertyType : "City Villa",
    currentlyAvailable : true,
    availableFrom : new Date("2023-01-01"),
    structure : {
        Bedrooms : 4,
        Washroom : 4,
        Floor : 2,
        Kitchen : 2
    },
    area : 400,
    imageUrl  : "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVudGFsJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  };

  const property16 = {
    Name : "Fir End",
    location : {
        Street :  "4801 Flinderation Road",
        City :  "Bellwood",
        State :   "Illinois",
        Zip_code : "60104",
        Country : "USA"
    },
    rentPrice : 3500,
    propertyType : "City Villa",
    currentlyAvailable : true,
    availableFrom : new Date("2023-01-01"),
    structure : {
        Bedrooms : 4,
        Washroom : 4,
        Floor : 2,
        Kitchen : 2
    },
    area : 400,
    imageUrl : "https://media.istockphoto.com/photos/villa-in-luxurious-hotel-uae-picture-id118322813?b=1&k=20&m=118322813&s=170667a&w=0&h=Q1qQ_SgUbUaGfFEHheQuN5pgJmwK6ciemAH3gL7RIsQ="
  };
  
  const property17 = {
    Name : "The Old Gatehouse",
    location : {
        Street :  "70 Gordon Street",
        City :  "Bellwood",
        State :   "California",
        Zip_code : "91786",
        Country : "USA"
    },
    rentPrice : 800,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 2,
        Washroom : 2,
        Floor : 1,
        Kitchen : 1
    },
    area : 100,
    imageUrl : "https://media.istockphoto.com/photos/exterior-of-luxury-holiday-villa-picture-id1351431288?b=1&k=20&m=1351431288&s=170667a&w=0&h=yvzl_v49Tgj0FQGH7ZclqfkuNv9fOjNPf5ArbfNBsmM="
  };

  const property18 = {
    Name : "Pear House",
    location : {
        Street :  "4820 Bassell Avenue",
        City :  "Bellwood",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 900,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 3,
        Washroom : 3,
        Floor : 2,
        Kitchen : 1
    },
    area : 130,
    imageUrl : "https://media.istockphoto.com/photos/private-finca-property-picture-id1124406510?b=1&k=20&m=1124406510&s=170667a&w=0&h=BUcvtR-mWo-cayWubQ8b3lozx-6C1dayp0v84ltMxXM="
  };

  const property19 = {
    Name : "Frosty End",
    location : {
        Street :  "4061 Edsel Road",
        City :  "Bellwood",
        State :   "Texas",
        Zip_code : "78764",
        Country : "USA"
    },
    rentPrice : 1700,
    propertyType : "Street-House",
    currentlyAvailable : true,
    availableFrom : new Date(),
    structure : {
        Bedrooms : 4,
        Washroom : 4,
        Floor : 2,
        Kitchen : 1
    },
    area : 200,
    imageUrl : "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  };

   properties.push(property16, property17, property18, property19, property15, property14, property13, property12, property11, property10, property1, property2, property3, property4, property5, property6, property7, property8, property9);

   export default properties;