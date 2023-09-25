const greetings: ((username: string) => string)[] = [
  (username: string) => `ממצב, ${username} (:`,
  (username: string) => `מה הולך, ${username}`,
  (username: string) => `שלום ${username}!`,
  (username: string) => {
    const hours = new Date().getHours();
    const timeOfDayGreeting =
      hours < 12 && hours > 4
        ? "בוקר טוב"
        : hours >= 12 && hours < 18
        ? "צהריים טובים"
        : hours >= 18 && hours < 21
        ? "ערב טוב"
        : "לילה טוב";
    return `${timeOfDayGreeting}, ${username}`;
  },
];

export const getDifferentRandomGreeting = (username: string, prevGreeting: string) => {
    let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)](username);
    while(randomGreeting===prevGreeting){
        randomGreeting = greetings[Math.floor(Math.random() * greetings.length)](username);
    }
    return randomGreeting;
  };