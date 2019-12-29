import React, {useContext, useEffect, useState} from "react";
import { UserContext } from './contexts/UserContext';

const convertToDate = birthday => {
   const [month, day, year] = birthday.split('/');
   return new Date(year, month, day);    
}

const calcAge = birthday => {
   const birthdayDT = convertToDate(birthday);
   const ageDifMs = Date.now() - birthdayDT;
   const ageDate = new Date(ageDifMs); // miliseconds from epoch
   return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const calcAgeScore = (currBirthday, birthday) => {
   return calcAge(currBirthday) - calcAge(birthday) || 1;
}

const convertToCounter = nm1 => {
    return nm1.toLowerCase().replace(/\s/, '').split('').sort().reduce((acc, value) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1
    }), {});
}

const calcStringScore = (nm1, nm2) => {
    const c1 = convertToCounter(nm1);
    const c2 = convertToCounter(nm2);
    let sum = 0;
    Object.keys(c1).forEach(key => {
        if (c2[key]) {
           sum += c2[key] + c1[key];
        }
    });
    return sum;
}

const calcScore = (currentUser, fullName, birthday) => calcStringScore(currentUser.fullName, fullName) / (calcAgeScore(currentUser.birthday, birthday) / 10)

export const MatchPage = () => {
    const { users } = useContext(UserContext);
    const [match, setMatch] = useState(null);

    const currentUser = {
        fullName: "Alexandros Fle",
        email: "aflecknoe1@bizjournals.com",
        address: "044 Milwaukee Circle",
        avatar: "https://robohash.org/doloremillumnihil.png?size=150X150&set=set1",
        birthday: "1/8/1990"
    };
    
    useEffect(() => {
        if (!users.length) {return;}
        // calculate score:
        const scores = users.map(({id, birthday, fullName}) => ({id, score: calcScore(currentUser, fullName, birthday).toFixed(2)})).sort((a, b) => b.score - a.score);

        setMatch(users.find(({id}) => scores[0].id === id));
    }, [users])

    if (!match) return (<>calculating...</>);

    return (<>
       your match is: {match.fullName}
    </>);
};
