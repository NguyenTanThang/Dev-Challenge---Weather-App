const metaStaticImages = [
    {
        type: "Snow",
        imageURL: "https://i.imgur.com/7h8NKrP.png"
    },
    {
        type: "Sleet",
        imageURL: "https://i.imgur.com/sDUFZhG.png"
    },
    {
        type: "Clear",
        imageURL: "https://i.imgur.com/OywPYjC.png"
    },
    {
        type: "Light Cloud",
        imageURL: "https://i.imgur.com/uaaEBeW.png"
    },
    {
        type: "Heavy Cloud",
        imageURL: "https://i.imgur.com/W9jrQuC.png"
    },
    {
        type: "Showers",
        imageURL: "https://i.imgur.com/3HtD2mE.png"
    },
    {
        type: "Light Rain",
        imageURL: "https://i.imgur.com/FOVdUT0.png"
    },
    {
        type: "Heavy Rain",
        imageURL: "https://i.imgur.com/CKv4AHU.png"
    },
    {
        type: "Thunderstorm",
        imageURL: "https://i.imgur.com/E5cCLpL.png"
    },
    {
        type: "Hail",
        imageURL: "https://i.imgur.com/lLxEFtY.png"
    }
];
/*
    const bgSide = https://i.imgur.com/OhItntY.png
*/

const daysInWeek = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
]

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export const getWeatherImageItem = (weatherType) => {
    return metaStaticImages.filter(metaStaticItem => {
        return metaStaticItem.type === weatherType;
    })[0];
}

export const convertDateToValid = (date) => {
    date = new Date(date);

    let day = daysInWeek[date.getDay()];
    let validDate = date.getDate();
    let month = months[date.getMonth()];

    return `${day}, ${validDate} ${month}`;
}

export const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          console.log({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
          });
          return {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
          }
      });
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
}

export const convertObjectToArray = (obj) => {
    return Object.entries(obj);
}

export const convertArrayToObject = (arr) => {
    let obj = {};
    arr.forEach((arrItem) => {
        obj[`${arrItem[0]}`] = arrItem[1]
    })
    return obj;
}