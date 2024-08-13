function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
};

const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  };


let wisdomMessage = [];

for (let obj in collectiveWisdom){
    let optionIndex = getRandomNumber(collectiveWisdom[obj].length);
    if (obj == 'signInfo'){
        wisdomMessage.push(`Your sign today is ${collectiveWisdom.signInfo[optionIndex]}!`);
    } else if (obj == 'fortuneOutput'){
        wisdomMessage.push(`You will have ${collectiveWisdom.fortuneOutput[optionIndex]}!`);
    } else if (obj == 'advice'){
        wisdomMessage.push(`You should ${collectiveWisdom.advice[optionIndex]}!`);
    } else {
        wisdomMessage.push(`There is an error, please try again!`);
    }
}

const formatWisdom = function(wisdom){
    const formatted = wisdomMessage.join(" ");
    console.log(formatted);
}

console.log(formatWisdom(wisdomMessage));