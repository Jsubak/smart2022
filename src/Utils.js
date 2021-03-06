import faker from '@faker-js/faker'; // 영문 버전
import faker_ko from '@faker-js/faker/locale/ko'; // 한글 버전

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
  

export const makeUserDatas = (count) => {
    const userDatas= [];
  
    while(userDatas.length < count) {
        userDatas.push({
        avatar: `images/${getRandomInt(1,5)}.jpg`,
        name: `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        phoneNumber: faker.phone.phoneNumber(),
        music: faker.music.genre(),
        address: faker.address.city()
        })
    }

    return userDatas;
}

export const paginate = (array, pageSize, pageNumber) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}